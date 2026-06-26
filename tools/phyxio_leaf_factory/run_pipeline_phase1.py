#!/usr/bin/env python3
"""
Orquestador Phase 1: Generación automática de prompts YAML.

Ejecuta todos los pasos hasta que los prompts están listos para enviar a la IA.
Flujo completo automático: creación → validación → prompts listos.

Uso:
    python run_pipeline_phase1.py --leaf-id segunda-ley-fuerza-masa --name "Segunda ley de Newton"
    python run_pipeline_phase1.py --leaf-id segunda-ley-fuerza-masa --name "Segunda ley de Newton" --force
"""

import argparse
import subprocess
import sys
from pathlib import Path
from typing import Final

from ruta_leaf import get_current_leaf, require_leaf_id, require_leaf_name

PROJECT_ROOT: Final[Path] = Path(__file__).resolve().parents[2]
FACTORY_ROOT: Final[Path] = PROJECT_ROOT / "tools" / "phyxio_leaf_factory"
DEFAULT_LEAFS_ROOT: Final[Path] = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n" / "pruebas"
DEFAULT_PROMPTS_ROOT: Final[Path] = FACTORY_ROOT / "10_outputs" / "prompts"


def run_command(
    description: str,
    cmd: list[str],
    cwd: Path = PROJECT_ROOT,
    check: bool = True,
) -> subprocess.CompletedProcess:
    """Ejecuta un comando con reporte de progreso."""
    print(f"\n{'='*60}")
    print(f"PASO: {description}")
    print(f"{'='*60}")
    print(f"Comando: {' '.join(cmd)}")
    print()

    result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)

    if result.stdout:
        print(result.stdout)
    if result.stderr:
        print("[STDERR]", result.stderr, file=sys.stderr)

    if check and result.returncode != 0:
        raise RuntimeError(f"Error en paso '{description}': returncode={result.returncode}")

    return result


def clean_downloads_folder() -> None:
    """Limpia la carpeta Downloads\descargas_phyxio de ZIPs anteriores."""
    downloads_path = Path.home() / "Downloads" / "descargas_phyxio"
    
    if not downloads_path.exists():
        return
    
    zip_files = list(downloads_path.glob("*.zip"))
    if zip_files:
        print(f"\n🧹 Limpiando {len(zip_files)} ZIP(s) anterior(es)...")
        for zip_file in zip_files:
            zip_file.unlink()
            print(f"   🗑️ Eliminado: {zip_file.name}")
        print("✅ Carpeta limpia\n")


def run_pipeline(
    leaf_id: str,
    leaf_name: str,
    force: bool = False,
    map_path: Path = PROJECT_ROOT / "frontend" / "src" / "v2" / "map" / "phyxio-map.yaml",
    leafs_root: Path = DEFAULT_LEAFS_ROOT,
) -> Path:
    """
    Ejecuta el pipeline completo Phase 1 hasta generar prompts.

    Retorna el directorio donde se generaron los prompts.
    """
    leaf_path = leafs_root / leaf_id
    leaf_dir_str = str(leaf_path)

    # LIMPIEZA PREVIA: Eliminar ZIPs anteriores
    clean_downloads_folder()

    print("\n" + "="*60)
    print("PHYXIO LEAF FACTORY - PIPELINE PHASE 1")
    print("="*60)
    print(f"Leaf ID:   {leaf_id}")
    print(f"Nombre:    {leaf_name}")
    print(f"Force:     {force}")
    print(f"Leaf path: {leaf_path}")
    print(f"Map:       {map_path}")
    print("="*60)

    # PASO 00: Crear estructura del leaf
    cmd_create = [
        sys.executable,
        str(FACTORY_ROOT / "create_leaf.py"),
        "--leaf-id", leaf_id,
        "--name", leaf_name,
    ]
    if force:
        cmd_create.append("--force")

    run_command(
        "00 - Crear estructura del leaf",
        cmd_create,
    )

    # PASO 01: Validar estructura inicial
    run_command(
        "01 - Validar estructura de archivos",
        [
            sys.executable,
            str(FACTORY_ROOT / "07_checks" / "check_leaf_structure.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # PASO 02: Extraer campos de plantilla
    run_command(
        "02 - Extraer campos de plantilla",
        [
            sys.executable,
            str(FACTORY_ROOT / "03_extractors" / "extract_template_contract.py"),
        ],
    )

    # PASO 03: Insertar campos extraídos (generar skeleton)
    cmd_skeleton = [
        sys.executable,
        str(FACTORY_ROOT / "generate_leaf_skeleton.py"),
        "--leaf-id", leaf_id,
        "--name", leaf_name,
    ]
    if force:
        cmd_skeleton.append("--force")

    run_command(
        "03 - Generar skeleton con campos extraídos",
        cmd_skeleton,
    )

    # PASO 04: Validar estructura después de skeleton
    run_command(
        "04 - Validar estructura post-skeleton",
        [
            sys.executable,
            str(FACTORY_ROOT / "07_checks" / "check_leaf_structure.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # PASO 05: Validar contrato JSON contra estructura
    run_command(
        "05 - Validar contrato JSON contra estructura",
        [
            sys.executable,
            str(FACTORY_ROOT / "07_checks" / "check_contract_skeleton.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # PASO 06: Sincronizar meta desde mapa
    run_command(
        "06 - Sincronizar meta.yaml desde phyxio-map.yaml",
        [
            sys.executable,
            str(FACTORY_ROOT / "06_writers" / "sync_meta_from_map.py"),
            "--map", str(map_path),
            "--leaf-dir", leaf_dir_str,
            "--leaf-id", leaf_id,
        ],
    )

    # PASO 07: Generar prompts YAML (fase 1 - 4 prompts base)
    run_command(
        "07 - Generar prompts YAML (fase 1: meta, magnitudes, formulas, graficos)",
        [
            sys.executable,
            str(FACTORY_ROOT / "04_prompts" / "generate_yaml_prompts.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # PASO 08: Validar prompts generados
    run_command(
        "08 - Validar prompts generados",
        [
            sys.executable,
            str(FACTORY_ROOT / "07_checks" / "check_yaml_prompts.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # PASO 09: Crear archivos de respuesta donde pegar lo devuelto por la IA
    # (Se mueve aquí para que estén listos ANTES de enviar prompts a la IA)
    run_command(
        "09 - Crear archivos de respuesta para la IA",
        [
            sys.executable,
            str(FACTORY_ROOT / "05_ai_responses" / "prepare_yaml_response_files.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # Reporte final
    prompts_dir = DEFAULT_PROMPTS_ROOT / leaf_id
    responses_dir = FACTORY_ROOT / "05_ai_responses" / leaf_id
    print("\n" + "="*60)
    print("PIPELINE PHASE 1 COMPLETADO")
    print("="*60)
    print(f"Prompts generados en:   {prompts_dir}")
    print(f"Respuestas listas en:   {responses_dir}")
    print()
    print("Archivos listos para enviar a la IA:")
    for f in sorted(prompts_dir.glob("*.prompt.md")):
        print(f"  - {f.name}")
    print()
    print("Archivos .response.yaml preparados (vacíos, listos para pegar):")
    for f in sorted(responses_dir.glob("*.response.yaml")):
        print(f"  - {f.name}")
    print()
    print("SIGUIENTES PASOS (requieren intervención humana):")
    print("  1. Copiar cada prompt en la IA")
    print("  2. Pegar las respuestas en los archivos .response.yaml correspondientes")
    print("  3. Ejecutar: run_pipeline_phase2.py --leaf-id " + leaf_id)
    print("="*60)

    return prompts_dir


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Ejecuta el pipeline Phase 1 hasta generar prompts listos para IA.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
    # Con leaf activo configurado previamente:
    python run_pipeline_phase1.py
    
    # Especificando leaf (sobrescribe leaf activo):
    python run_pipeline_phase1.py --leaf-id segunda-ley-fuerza-masa --name "Segunda ley de Newton"
    
    # Configurar leaf activo primero, luego ejecutar sin parámetros:
    python 00_ruta_leaf.py --set segunda-ley-fuerza-masa --name "Segunda ley de Newton"
    python run_pipeline_phase1.py
    
    # Forzar sobrescritura:
    python run_pipeline_phase1.py --force
        """,
    )

    parser.add_argument(
        "--leaf-id",
        required=False,
        help="ID del leaf (ej: segunda-ley-fuerza-masa). Si no se especifica, usa el leaf activo.",
    )
    parser.add_argument(
        "--name",
        required=False,
        help="Nombre legible del leaf (ej: 'Segunda ley de Newton'). Si no se especifica, usa el leaf activo.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Sobrescribir archivos existentes si es necesario",
    )
    parser.add_argument(
        "--map",
        default=str(PROJECT_ROOT / "frontend" / "src" / "v2" / "map" / "phyxio-map.yaml"),
        help="Ruta al archivo phyxio-map.yaml",
    )
    parser.add_argument(
        "--leafs-root",
        default=str(DEFAULT_LEAFS_ROOT),
        help="Directorio raíz donde se crean los leafs",
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()

    try:
        # Usar leaf activo si no se especificó
        leaf_id = require_leaf_id(args.leaf_id)
        leaf_name = require_leaf_name(args.name)

        prompts_dir = run_pipeline(
            leaf_id=leaf_id.strip(),
            leaf_name=leaf_name.strip(),
            force=args.force,
            map_path=Path(args.map),
            leafs_root=Path(args.leafs_root),
        )
        print(f"\n[OK] Pipeline completado. Prompts en: {prompts_dir}")
        sys.exit(0)
    except RuntimeError as e:
        print(f"\n[FAIL] {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"\n[ERROR] Error inesperado: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
