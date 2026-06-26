#!/usr/bin/env python3
"""
Orquestador Interactivo Phyxio Leaf Factory

Ejecuta el pipeline completo con pausas para intervención humana:
- Fase 1: Estructura → prompt ZIP YAML base → vuelca meta/formulas/magnitudes/graficos
- Fase 2: Con esos 4 YAML → sincroniza y pide interpretacion.yaml descargable
- Fase 3: Con interpretación descargada/escrita → pide ZIP descargable con todos los .md
- Fase 4: Procesa el ZIP de .md → reparación → validación final

Al final muestra solo: número de OK y FAIL del validador.
"""

import argparse
import re
import subprocess
import sys
from pathlib import Path
from typing import Iterable

FACTORY_ROOT = Path(__file__).resolve().parent
if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

PROJECT_ROOT = FACTORY_ROOT.parent.parent
DATA_V2_I18N_ROOT = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n"
PRUEBAS_ROOT = DATA_V2_I18N_ROOT / "pruebas"

from ruta_leaf import (
    get_current_leaf_config,
    get_current_leaf_path,
    require_leaf_id,
    require_ruta_relativa,
    set_current_leaf,
)


def print_header(text: str) -> None:
    """Imprime un header visualmente destacado."""
    print("\n" + "=" * 60)
    print(f"  {text}")
    print("=" * 60)


def print_section(text: str) -> None:
    """Imprime una sección."""
    print("\n" + "-" * 60)
    print(text)
    print("-" * 60)


def run_command(cmd: list[str], description: str, cwd: Path | None = None) -> bool:
    """Ejecuta un comando y retorna True si tuvo éxito."""
    print(f"\n▶️  {description}")
    print(f"   Ejecutando: {' '.join(cmd[-3:])}...")  # Muestra solo parte del comando

    result = subprocess.run(cmd, capture_output=True, text=True, cwd=cwd)

    if result.returncode != 0:
        print(f"\n❌ ERROR en: {description}")
        if result.stderr:
            print(f"   {result.stderr[:500]}")
        return False

    # Mostrar output relevante
    if result.stdout:
        lines = result.stdout.strip().split('\n')
        for line in lines[-10:]:  # Solo últimas 10 líneas
            if line.strip():
                print(f"   {line}")

    print(f"✅ {description} - COMPLETADO")
    return True


def wait_for_download_file(
    downloads_dir: Path,
    patterns: Iterable[str],
    description: str,
    max_wait: int = 1800,
    check_interval: int = 2,
    newer_than: float | None = None,
) -> Path | None:
    """Espera un archivo descargado y devuelve el candidato mas reciente."""
    import time

    print(f"\n⏳ ESPERANDO {description}...")
    print(f"   Buscando en: {downloads_dir}")
    downloads_dir.mkdir(parents=True, exist_ok=True)

    waited = 0
    while waited < max_wait:
        all_candidates: list[Path] = []
        for pattern in patterns:
            all_candidates.extend(downloads_dir.glob(pattern))
        all_candidates = [p for p in all_candidates if p.is_file()]
        all_candidates.sort(key=lambda p: p.stat().st_mtime, reverse=True)

        if newer_than is not None:
            candidates = [p for p in all_candidates if p.stat().st_mtime >= newer_than]
        else:
            candidates = all_candidates

        if candidates:
            # Dar un margen para que el navegador termine de escribir.
            time.sleep(1)
            return candidates[0]

        # Fallback: si no hay archivos nuevos pero existe alguno, usar el mas reciente
        if newer_than is not None and all_candidates:
            print(f"\n   ⚠️  No se detecto archivo nuevo; se usa el mas reciente: {all_candidates[0].name}")
            time.sleep(1)
            return all_candidates[0]

        time.sleep(check_interval)
        waited += check_interval
        if waited % 30 == 0:
            print(f"   ... esperando ({waited}s / {max_wait}s)")

    return None


def fase_1_estructura_y_prompts(leaf_id: str, leaf_name: str, ruta_relativa: str, force: bool = False) -> bool:
    """
    FASE 1: Crear estructura y generar prompt maestro consolidado ZIP.
    Espera/deteca el ZIP de YAMLs y lo procesa automáticamente.
    """
    print_header("FASE 1: Estructura y Prompt YAML Consolidado (ZIP)")

    # 1. Crear estructura
    leafs_root = DATA_V2_I18N_ROOT / ruta_relativa
    leaf_dir = leafs_root / leaf_id
    if leaf_dir.exists() and not force:
        print(f"\nℹ️  El leaf ya existe. Se reutiliza sin sobreescribir: {leaf_dir}")
    else:
        cmd_create = [sys.executable, str(FACTORY_ROOT / "create_leaf.py"),
                      "--leaf-id", leaf_id,
                      "--name", leaf_name,
                      "--ruta-relativa", ruta_relativa,
                      "--leafs-root", str(leafs_root),
                      "--set-active"]
        if force:
            cmd_create.append("--force")

        if not run_command(cmd_create, "Creando estructura del leaf", cwd=FACTORY_ROOT):
            return False

    # 2. Validar estructura
    if not run_command(
        [sys.executable, str(FACTORY_ROOT / "07_checks" / "check_leaf_structure.py")],
        "Validando estructura",
        cwd=FACTORY_ROOT
    ):
        return False

    # 3. Extraer y generar skeleton
    run_command(
        [sys.executable, str(FACTORY_ROOT / "03_extractors" / "extract_template_contract.py")],
        "Extrayendo contrato de plantilla",
        cwd=FACTORY_ROOT
    )

    cmd_skeleton = [
        sys.executable,
        str(FACTORY_ROOT / "generate_leaf_skeleton.py"),
        "--leaf-id",
        leaf_id,
    ]
    if force:
        cmd_skeleton.append("--force")

    run_command(
        cmd_skeleton,
        "Generando skeleton del leaf",
        cwd=FACTORY_ROOT
    )

    # 3.5. Rellenar meta.yaml con los datos canonicos del mapa antes de pedir YAML a la IA.
    map_path = PROJECT_ROOT / "frontend" / "src" / "v2" / "map" / "phyxio-map.yaml"
    if not run_command(
        [
            sys.executable,
            str(FACTORY_ROOT / "06_writers" / "sync_meta_from_map.py"),
            "--map", str(map_path),
            "--leaf-dir", str(leaf_dir),
            "--leaf-id", leaf_id,
        ],
        "Sincronizando meta.yaml desde phyxio-map.yaml antes del prompt",
        cwd=FACTORY_ROOT,
    ):
        return False

    # 4. Validar contrato
    run_command(
        [sys.executable, str(FACTORY_ROOT / "07_checks" / "check_contract_skeleton.py"),
         "--leaf-id", leaf_id],
        "Validando contrato",
        cwd=FACTORY_ROOT
    )

    # 5. Generar prompt maestro consolidado (ZIP mode)
    if not run_command(
        [sys.executable, str(FACTORY_ROOT / "04_prompts" / "generate_yaml_prompts.py"),
         "--leaf-id", leaf_id, "--leafs-root", str(leafs_root), "--consolidado"],
        "Generando prompt maestro consolidado",
        cwd=FACTORY_ROOT
    ):
        return False

    # 6. Mostrar información de intervención humana (ZIP mode)
    print_section("🛑 INTervención HUMANA 1 - Prompt ZIP Consolidado")

    output_dir = FACTORY_ROOT / "10_outputs" / "prompts" / leaf_id
    prompt_file = output_dir / "00_todos_yaml.prompt.md"

    print("\n📋 PROMPT GENERADO (único):")
    if prompt_file.exists():
        print(f"   → 00_todos_yaml.prompt.md")
    else:
        print("   ❌ No se encontró el prompt maestro")
        return False

    print(f"\n📂 Ubicación: {output_dir}")

    print("\n⚠️  INSTRUCCIONES:")
    print("   1. Copia TODO el contenido de 00_todos_yaml.prompt.md")
    print("   2. Envíalo a la IA de una sola vez")
    print(f"   3. La IA generará los 4 archivos YAML y los empaquetará en '{leaf_id}_yaml.zip'")
    print("   4. Guarda el ZIP en: Downloads/descargas_phyxio/")
    print("   5. El orquestador detectará y procesará el ZIP automáticamente")

    # 7. Esperar/detectar el ZIP de YAMLs (con timeout)
    downloads_dir = Path.home() / "Downloads" / "descargas_phyxio"
    zip_path = wait_for_download_file(
        downloads_dir,
        [f"{leaf_id}_yaml*.zip"],
        f"{leaf_id}_yaml.zip",
        newer_than=prompt_file.stat().st_mtime,
    )

    if zip_path is None:
        print(f"\n❌ Timeout: No se detectó {leaf_id}_yaml.zip.")
        print("   ¿Guardaste el ZIP en la carpeta correcta?")
        return False

    import zipfile
    try:
        with zipfile.ZipFile(zip_path, "r") as zf:
            file_list = zf.namelist()
            yaml_count = len([f for f in file_list if f.endswith(".yaml") or f.endswith(".yml")])
            if yaml_count == 0:
                print(f"\n❌ ZIP sin archivos YAML: {zip_path.name}")
                return False
            print(f"\n✅ ZIP detectado y válido: {zip_path.name} ({yaml_count} archivos YAML)")
    except Exception as e:
        print(f"\n❌ ZIP inválido o incompleto: {zip_path.name} ({e})")
        return False

    # 8. Procesar el ZIP automáticamente
    print("\n📦 PROCESANDO ZIP automáticamente...")

    # Usar ruta absoluta directa
    cmd = [
        sys.executable,
        str(FACTORY_ROOT / "07_pipeline" / "process_yaml_zip.py"),
        "--leaf-id", leaf_id,
        "--leafs-root", str(leafs_root)
    ]
    print(f"\n▶️  Extrayendo y copiando YAMLs al leaf")
    print(f"   Leafs root: {leafs_root}")
    print(f"   Ejecutando: process_yaml_zip.py --leaf-id {leaf_id}")

    result = subprocess.run(cmd, capture_output=True, text=True, cwd=FACTORY_ROOT)

    if result.returncode != 0:
        print(f"\n❌ ERROR procesando el ZIP")
        if result.stderr:
            print(f"   {result.stderr[:500]}")
        return False

    # Mostrar output completo del procesador de ZIP
    if result.stdout:
        lines = result.stdout.strip().split('\n')
        for line in lines[-25:]:  # Mostrar últimas 25 líneas para ver todos los archivos
            if line.strip():
                print(f"   {line}")

    # Verificar que se copiaron todos los archivos al leaf correcto
    leaf_path = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n" / ruta_relativa / leaf_id
    yaml_files = ['meta.yaml', 'formulas.yaml', 'magnitudes.yaml', 'graficos.yaml']
    all_ok = True
    print(f"\n📋 Verificando archivos en leaf: {leaf_path}")
    for yf in yaml_files:
        yf_path = leaf_path / yf
        if yf_path.exists():
            size = yf_path.stat().st_size
            if size > 100:
                print(f"   ✅ {yf}: {size} bytes")
            else:
                print(f"   ⚠️  {yf}: {size} bytes (posiblemente vacío)")
                all_ok = False
        else:
            print(f"   ❌ {yf}: NO EXISTE")
            all_ok = False

    if not all_ok:
        print("\n❌ Algunos archivos YAML no se copiaron correctamente.")
        return False

    print("\n✅ FASE 1 completada - YAMLs procesados automáticamente")
    return True


def fase_2_procesar_yaml_y_prompt_interpretacion() -> bool | list[Path]:
    """
    FASE 2: Sincronizar interpretación y generar prompt.
    (Los YAMLs ya están en el leaf desde el ZIP de Fase 1)
    """
    print_header("FASE 2: Sincronizar Interpretación y Generar Prompt")

    leaf_id = require_leaf_id(None)
    ruta_relativa = require_ruta_relativa(None)
    leafs_root = DATA_V2_I18N_ROOT / ruta_relativa

    # 1. Sincronizar interpretación desde meta/magnitudes/formulas
    # 1.5 Sincronizar meta.yaml desde el mapa (asegurar que tenga ID y datos básicos)
    print("\n📝 Sincronizando meta.yaml desde phyxio-map.yaml...")
    map_path = PROJECT_ROOT / "frontend" / "src" / "v2" / "map" / "phyxio-map.yaml"
    leaf_dir = leafs_root / leaf_id
    run_command(
        [sys.executable, str(FACTORY_ROOT / "06_writers" / "sync_meta_from_map.py"),
         "--map", str(map_path),
         "--leaf-dir", str(leaf_dir),
         "--leaf-id", leaf_id],
        "Sincronizando meta.yaml desde mapa",
        cwd=FACTORY_ROOT
    )

    # 2. Sincronizar interpretación
    print("\n📝 Sincronizando interpretacion.yaml desde archivos YAML existentes...")
    if not run_command(
        [sys.executable, str(FACTORY_ROOT / "06_writers" / "sync_interpretacion_from_meta.py"),
         "--leaf-id", leaf_id, "--leafs-root", str(leafs_root)],
        "Sincronizando interpretacion.yaml",
        cwd=FACTORY_ROOT
    ):
        print("⚠️  No se pudo sincronizar interpretacion.yaml automáticamente.")
        print("   Esto puede ocurrir si los archivos YAML no tienen datos suficientes.")

    # 3. Generar prompts YAML de segunda pasada.
    # En este punto los 4 YAML base ya existen; el generador crea
    # 05_interpretacion.prompt.md usando ese contexto real del leaf.
    print("\n📝 Generando prompt de interpretación...")
    if not run_command(
        [sys.executable, str(FACTORY_ROOT / "04_prompts" / "generate_yaml_prompts.py"),
         "--leaf-id", leaf_id, "--leafs-root", str(leafs_root)],
        "Generando prompt de interpretación",
        cwd=FACTORY_ROOT
    ):
        return False

    # Preparar archivo interno de respuesta para interpretación.
    # Fase 3 lo rellenará desde el YAML descargado.
    run_command(
        [sys.executable, str(FACTORY_ROOT / "05_ai_responses" / "prepare_yaml_response_files.py"),
         "--leaf-id", leaf_id],
        "Preparando archivo de respuesta para interpretación",
        cwd=FACTORY_ROOT
    )
    output_dir = FACTORY_ROOT / "10_outputs" / "prompts" / leaf_id
    prompt_interpretacion = output_dir / "05_interpretacion.prompt.md"

    if not prompt_interpretacion.exists():
        print("\n⚠️  El prompt de interpretación no se generó automáticamente.")
        print("   Esto ocurre cuando interpretacion.yaml aún no tiene datos suficientes.")
        print("   Verifica que magnitudes.yaml y formulas.yaml tengan contenido.")
        return False

    # Mostrar información de intervención humana
    print_section("🛑 INTervención HUMANA 2 - Prompt Interpretación")

    print("\n📋 PROMPT GENERADO:")
    print(f"   → 05_interpretacion.prompt.md")

    downloads_dir = Path.home() / "Downloads" / "descargas_phyxio"
    response_filename = f"{leaf_id}_interpretacion.yaml"

    print(f"\n📄 RESPUESTA ESPERADA:")
    print(f"   → {response_filename}")
    print(f"   📂 Ubicación: {downloads_dir}")

    print("\n⚠️  INSTRUCCIONES:")
    print("   1. Abre 05_interpretacion.prompt.md")
    print("   2. Copia el contenido y envíalo a la IA")
    print(f"   3. La IA debe devolver un archivo YAML descargable: {response_filename}")
    print(f"   4. Guarda/descarga ese archivo en: {downloads_dir}")

    return True


def fase_3_procesar_interpretacion_y_prompts_md() -> bool:
    """
    FASE 3: Procesar interpretación y generar prompts .md.
    Se detiene y espera a que el usuario envíe el prompt y descargue
    un ZIP con los archivos Markdown.
    """
    print_header("FASE 3: Procesar Interpretación y Generar Prompts .md")

    leaf_id = require_leaf_id(None)
    ruta_relativa = require_ruta_relativa(None)
    leafs_root = DATA_V2_I18N_ROOT / ruta_relativa

    # 1. Detectar YAML de interpretación descargado y copiarlo al response interno.
    downloads_dir = Path.home() / "Downloads" / "descargas_phyxio"
    interpretacion_path = wait_for_download_file(
        downloads_dir,
        [
            f"{leaf_id}_interpretacion*.yaml",
            f"{leaf_id}_interpretacion*.yml",
            f"05_interpretacion*.yaml",
            f"05_interpretacion*.yml",
        ],
        f"{leaf_id}_interpretacion.yaml",
        newer_than=(FACTORY_ROOT / "10_outputs" / "prompts" / leaf_id / "05_interpretacion.prompt.md").stat().st_mtime,
    )
    if interpretacion_path is None:
        print("\n⚠️  No se encontró el YAML descargable de interpretación.")
        print(f"   Nombre recomendado: {leaf_id}_interpretacion.yaml")
        print(f"   Carpeta esperada: {downloads_dir}")
        return False

    response_dir = FACTORY_ROOT / "05_ai_responses" / leaf_id
    response_dir.mkdir(parents=True, exist_ok=True)
    response_file = response_dir / "05_interpretacion.response.yaml"
    import shutil
    shutil.copy2(interpretacion_path, response_file)
    print(f"\n📄 Interpretación descargada detectada: {interpretacion_path.name}")
    print(f"   Copiada a response interno: {response_file.name}")

    # 2. Escribir respuesta de interpretación
    run_command(
        [sys.executable, str(FACTORY_ROOT / "06_writers" / "write_yaml_ai_responses.py"),
         "--leaf-id", leaf_id, "--leafs-root", str(leafs_root)],
        "Escribiendo interpretación al leaf",
        cwd=FACTORY_ROOT
    )

    # 3. Generar prompt ZIP .md
    if not run_command(
        [sys.executable, str(FACTORY_ROOT / "04_prompts" / "generate_batch_md_prompt.py"),
         "--leaf-id", leaf_id, "--leafs-root", str(leafs_root)],
        "Generando prompt ZIP .md",
        cwd=FACTORY_ROOT
    ):
        return False

    # Mostrar información de intervención humana
    print_section("🛑 INTervención HUMANA 3 - Prompts Markdown")
    output_dir = FACTORY_ROOT / "10_outputs" / "prompts" / leaf_id

    batch_prompt = output_dir / "BATCH_ALL_MD.prompt.md"

    downloads_dir = Path.home() / "Downloads" / "descargas_phyxio"
    response_filename = f"{leaf_id}_md.zip"

    print("\n📋 PROMPT .md GENERADO:")
    if batch_prompt.exists():
        print("   → BATCH_ALL_MD.prompt.md")
    else:
        print("   ❌ No se encontró BATCH_ALL_MD.prompt.md")
        return False

    print(f"\n📦 RESPUESTA ESPERADA:")
    print(f"   → {response_filename}")
    print(f"   📂 Ubicación: {downloads_dir}")

    print("\n⚠️  INSTRUCCIONES:")
    print("   1. Abre BATCH_ALL_MD.prompt.md")
    print("   2. Copia el contenido y envíalo a la IA")
    print(f"   3. La IA debe devolver un ZIP descargable: {response_filename}")
    print(f"   4. Guarda/descarga el ZIP en: {downloads_dir}")

    return True


def fase_4_procesar_markdown_y_validar() -> bool:
    """
    FASE 4: Procesar ZIP Markdown y validación final.
    Totalmente automático, no requiere intervención humana.
    """
    print_header("FASE 4: Procesar ZIP Markdown y Validación Final")

    leaf_id = require_leaf_id(None)
    ruta_relativa = require_ruta_relativa(None)
    leafs_root = DATA_V2_I18N_ROOT / ruta_relativa

    # 1. Procesar ZIP descargable de Markdown.
    downloads_dir = Path.home() / "Downloads" / "descargas_phyxio"
    zip_path = wait_for_download_file(
        downloads_dir,
        [
            f"{leaf_id}_md*.zip",
            f"{leaf_id}_markdown*.zip",
        ],
        f"{leaf_id}_md.zip",
        newer_than=(FACTORY_ROOT / "10_outputs" / "prompts" / leaf_id / "BATCH_ALL_MD.prompt.md").stat().st_mtime,
    )
    if zip_path is None:
        print("\n⚠️  No se encontró el ZIP Markdown descargable.")
        print("   Verifica que guardaste el ZIP de la IA en Downloads\\descargas_phyxio")
        print(f"   Nombre recomendado: {leaf_id}_md.zip")
        return False

    print(f"\n📦 ZIP Markdown detectado: {zip_path.name}")
    if not run_command(
        [
            sys.executable,
            str(FACTORY_ROOT / "05_ai_responses" / "process_zip_response.py"),
            "--leaf-id", leaf_id,
            "--zip-path", str(zip_path),
            "--leafs-root", str(leafs_root),
            "--auto-write",
        ],
        "Procesando ZIP y escribiendo archivos Markdown",
        cwd=FACTORY_ROOT,
    ):
        return False

    # 2. Generar componentes de gráficos si existe graficos.yaml
    leaf_path = get_current_leaf_path()
    if leaf_path:
        graficos_yaml_path = leaf_path / "graficos.yaml"
        if graficos_yaml_path.exists():
            print("\n▶️  Detectado graficos.yaml - Generando componentes de gráficos...")
            
            # Extraer dominio del leaf de la ruta relativa
            import yaml
            domain = "dinamica"  # Default
            try:
                meta_path = leaf_path / "meta.yaml"
                meta_data = yaml.safe_load(meta_path.read_text(encoding="utf-8")) if meta_path.exists() else {}
                meta_ruta = str(meta_data.get("ruta_relativa", ""))
                ruta_parts = meta_ruta.replace("\\", "/").split("/")
                if "fisica-clasica" in ruta_parts:
                    idx = ruta_parts.index("fisica-clasica")
                    if idx + 1 < len(ruta_parts) and ruta_parts[idx + 1]:
                        domain = ruta_parts[idx + 1]
            except Exception:
                pass
            
            # Cargar graficos.yaml para determinar qué tipos generar
            try:
                graficos = yaml.safe_load(graficos_yaml_path.read_text(encoding="utf-8"))
            except Exception:
                graficos = {}
            
            # Obtener títulos del graficos.yaml
            title_es = "Gráfico"
            title_en = "Graph"
            if graficos.get("coord", {}).get("title", {}).get("es"):
                title_es = graficos["coord"]["title"]["es"]
                title_en = graficos["coord"]["title"]["en"]
            elif graficos.get("svg", {}).get("title", {}).get("es"):
                title_es = graficos["svg"]["title"]["es"]
                title_en = graficos["svg"]["title"]["en"]
            elif graficos.get("dcl", {}).get("title", {}).get("es"):
                title_es = graficos["dcl"]["title"]["es"]
                title_en = graficos["dcl"]["title"]["en"]
            
            # Generar wrappers de gráficos (Coord, Svg, Dcl)
            run_command(
                [sys.executable, str(FACTORY_ROOT / "06_writers" / "generate_graph_component.py"),
                 "--leaf-id", leaf_id,
                 "--domain", domain],
                f"Generando componentes de gráficos (Coord/Svg/Dcl) para: {leaf_id}",
                cwd=FACTORY_ROOT
            )
            
            # Generar perfiles SVG si se necesita
            if graficos.get("svg"):
                svg_profile_dir = FACTORY_ROOT.parent.parent / "frontend" / "src" / "v2" / "components" / "SVG" / "profiles"
                svg_profile_file = svg_profile_dir / f"{leaf_id}.svg.profile.jsx"
                if not svg_profile_file.exists():
                    print(f"\n▶️  Generando perfil SVG para {leaf_id}...")
                    run_command(
                        [sys.executable, str(FACTORY_ROOT / "06_writers" / "generate_svg_profile.py"),
                         "--leaf-id", leaf_id,
                         "--title-es", title_es,
                         "--title-en", title_en,
                         "--domain", domain],
                        f"Generando perfil SVG para: {leaf_id}",
                        cwd=FACTORY_ROOT
                    )
            
            # Generar perfiles DCL si se necesita
            if graficos.get("dcl"):
                dcl_profile_dir = FACTORY_ROOT.parent.parent / "frontend" / "src" / "v2" / "components" / "DCL" / "profiles"
                dcl_profile_file = dcl_profile_dir / f"{leaf_id}.dcl.profile.js"
                if not dcl_profile_file.exists():
                    print(f"\n▶️  Generando perfil DCL para {leaf_id}...")
                    run_command(
                        [sys.executable, str(FACTORY_ROOT / "06_writers" / "generate_dcl_profile.py"),
                         "--leaf-id", leaf_id,
                         "--title-es", title_es,
                         "--title-en", title_en],
                        f"Generando perfil DCL para: {leaf_id}",
                        cwd=FACTORY_ROOT
                    )

    # 3. Ejecutar reparador
    if leaf_path:
        run_command(
            [sys.executable, str(FACTORY_ROOT / "06_writers" / "reparador_leafs.py"),
             "--path", str(leaf_path)],
            "Reparando archivos .md",
            cwd=FACTORY_ROOT
        )

    # 4. Validación final - usar validator_modular
    print("\n▶️  Ejecutando validación final...")
    validator_script = FACTORY_ROOT.parent / "validator_modular" / "main.py"

    if validator_script.exists() and leaf_path:
        result = subprocess.run(
            [sys.executable, str(validator_script), str(leaf_path)],
            capture_output=True,
            text=True
        )

        # Extraer solo OK y FAIL del output del validador modular
        # El validador imprime: "OK: {n}" y "FAIL: {n}" en el resumen
        output = result.stdout + result.stderr

        # Buscar líneas como "OK: 15" o "  OK: 15"
        ok_match = re.search(r'OK:\s*(\d+)', output)
        fail_match = re.search(r'FAIL:\s*(\d+)', output)

        ok_count = int(ok_match.group(1)) if ok_match else 0
        fail_count = int(fail_match.group(1)) if fail_match else 0

        print_header("RESUMEN DE VALIDACIÓN")
        print(f"\n   ✅ CHECKS OK:    {ok_count}")
        print(f"   ❌ CHECKS FAIL:  {fail_count}")

        if fail_count == 0 and ok_count > 0:
            print("\n   🎉 ¡LEAF COMPLETADO CON ÉXITO!")
        elif fail_count == 0 and ok_count == 0:
            print("\n   ⚠️  EL VALIDADOR NO EJECUTÓ CHECKS - Verifica la salida manualmente")
            print(f"\n   Salida del validador:\n{output[:500]}")
        else:
            print("\n   ⚠️  EL LEAF TIENE ERRORES - REVISA LOS FAILS")

    return True


def main():
    parser = argparse.ArgumentParser(
        description="Orquestador interactivo para crear leaves Phyxio"
    )
    parser.add_argument(
        "--leaf-id",
        help="ID del leaf. Si no se especifica, usa .current_leaf.yaml."
    )
    parser.add_argument(
        "--name",
        help="Nombre visible del leaf. Si no se especifica, usa .current_leaf.yaml o el ID."
    )
    parser.add_argument(
        "--ruta-relativa",
        help="Ruta relativa bajo frontend/src/data_v2_i18n. Si no se especifica, usa .current_leaf.yaml."
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Forzar sobreescritura si el leaf ya existe"
    )

    args = parser.parse_args()

    print_header("ORQUESTADOR INTERACTIVO PHYXIO LEAF FACTORY")
    print("\nLee el leaf activo desde tools/phyxio_leaf_factory/.current_leaf.yaml.")
    print("Intervencion humana esperada: cargar prompts en la IA y descargar sus archivos.")

    current = get_current_leaf_config()
    leaf_id = require_leaf_id(args.leaf_id or current.get("leaf_id"))
    ruta_relativa = require_ruta_relativa(args.ruta_relativa or current.get("ruta_relativa"))
    leaf_name = args.name or current.get("leaf_name") or leaf_id.replace("-", " ").title()
    leaf_path = DATA_V2_I18N_ROOT / ruta_relativa / leaf_id

    print(f"\n📍 Leaf a crear:")
    print(f"   ID:   {leaf_id}")
    print(f"   Nombre: {leaf_name}")
    print(f"   Ruta relativa: {ruta_relativa}")
    print(f"   Ruta: {leaf_path}")

    # Normalizar .current_leaf.yaml con todos los campos usados por el pipeline.
    set_current_leaf(leaf_id, leaf_name, ruta_relativa)
    print(f"\n✅ Leaf activo configurado: {leaf_id}")

    use_force = args.force
    if leaf_path.exists() and not use_force:
        print(f"\nℹ️  El leaf ya existe. Se reutiliza sin sobreescribir: {leaf_path}")

    # FASE 1
    result_fase1 = fase_1_estructura_y_prompts(leaf_id, leaf_name, ruta_relativa, use_force)
    if result_fase1 is False:
        print("\n❌ FASE 1 falló. Abortando.")
        sys.exit(1)

    # FASE 2
    result_fase2 = fase_2_procesar_yaml_y_prompt_interpretacion()
    if result_fase2 is False:
        print("\n❌ FASE 2 falló. Abortando.")
        sys.exit(1)

    # FASE 3
    if not fase_3_procesar_interpretacion_y_prompts_md():
        print("\n❌ FASE 3 falló. Abortando.")
        sys.exit(1)

    # FASE 4
    if not fase_4_procesar_markdown_y_validar():
        print("\n❌ FASE 4 falló.")
        sys.exit(1)

    print_header("PROCESO COMPLETADO")
    print(f"\n📂 Leaf creado en: {get_current_leaf_path()}")
    print("\n🎉 ¡Listo para usar!")


if __name__ == "__main__":
    main()
