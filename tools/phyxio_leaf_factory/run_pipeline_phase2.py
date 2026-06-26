#!/usr/bin/env python3
"""
Orquestador Phase 2: Completar leaf hasta obtener prompt de interpretación.

Ejecuta los pasos posteriores a Phase 1 para obtener el prompt 05_interpretacion.
Flujo: preparar respuestas → validar → escribir → sincronizar → regenerar prompts.

Uso:
    # Modo interactivo (pregunta antes de continuar tras preparar archivos):
    python run_pipeline_phase2.py --leaf-id segunda-ley-fuerza-masa
    
    # Modo automático (asume que las respuestas ya están pegadas):
    python run_pipeline_phase2.py --leaf-id segunda-ley-fuerza-masa --auto
"""

import argparse
import subprocess
import sys
from pathlib import Path
from typing import Final

from ruta_leaf import require_leaf_id

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


def run_pipeline(
    leaf_id: str,
    auto_mode: bool = False,
    leafs_root: Path = DEFAULT_LEAFS_ROOT,
) -> Path:
    """
    Ejecuta el pipeline completo Phase 2 hasta obtener prompt de interpretación.

    Retorna el directorio donde se generaron los prompts.
    """
    leaf_path = leafs_root / leaf_id
    leaf_dir_str = str(leaf_path)

    print("\n" + "="*60)
    print("PHYXIO LEAF FACTORY - PIPELINE PHASE 2")
    print("="*60)
    print(f"Leaf ID:   {leaf_id}")
    print(f"Auto mode: {auto_mode}")
    print(f"Leaf path: {leaf_path}")
    print("="*60)

    # PASO 09: Crear archivos de respuesta donde pegar lo devuelto por la IA
    run_command(
        "09 - Crear archivos de respuesta para la IA",
        [
            sys.executable,
            str(FACTORY_ROOT / "05_ai_responses" / "prepare_yaml_response_files.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # Si no estamos en modo automático, pausar para intervención humana
    if not auto_mode:
        print("\n" + "="*60)
        print("PAUSA PARA INTERVENCIÓN HUMANA")
        print("="*60)
        print("Los archivos de respuesta han sido preparados.")
        print()
        print("ACCIONES REQUERIDAS ANTES DE CONTINUAR:")
        print("  1. Copia el prompt 01_meta.prompt.md en la IA")
        print("  2. Pega la respuesta en: 01_meta.response.yaml")
        print("  3. Copia el prompt 02_combined_magnitudes_formulas.prompt.md en la IA")
        print("  4. Pega la respuesta MAGNITUDES en: 02_magnitudes.response.yaml")
        print("  5. Pega la respuesta FÓRMULAS en: 03_formulas.response.yaml")
        print("  6. Copia el prompt 04_graficos.prompt.md en la IA (si aplica)")
        print("  7. Pega la respuesta en: 04_graficos.response.yaml")
        print()
        print("Ubicación de archivos de respuesta:")
        print(f"  {FACTORY_ROOT / '05_ai_responses' / leaf_id}")
        print()
        
        response = input("¿Has completado las respuestas de la IA? (s/N): ")
        if response.lower() not in ("s", "si", "yes", "y"):
            print("\n[INFO] Pipeline pausado. Vuelve a ejecutar con --auto cuando estén listas.")
            print(f"       python run_pipeline_phase2.py --leaf-id {leaf_id} --auto")
            sys.exit(0)
    else:
        print("\n[INFO] Modo automático: asumiendo que las respuestas ya están pegadas.")

    # PASO 11: Validar respuestas de IA
    run_command(
        "11 - Validar respuestas de la IA",
        [
            sys.executable,
            str(FACTORY_ROOT / "07_checks" / "check_yaml_ai_responses.py"),
            "--leaf-id", leaf_id,
        ],
        check=not auto_mode,  # En modo auto, no fallar si hay errores (podrían estar vacíos)
    )

    # PASO 12: Escribir respuestas validadas a los archivos YAML del leaf
    run_command(
        "12 - Escribir respuestas validadas a archivos del leaf",
        [
            sys.executable,
            str(FACTORY_ROOT / "06_writers" / "write_yaml_ai_responses.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # PASO 13: Sincronizar interpretacion.yaml desde meta/magnitudes/formulas
    print("\n" + "="*60)
    print("PASO: 13 - Sincronizar interpretacion.yaml desde meta/magnitudes/formulas")
    print("="*60)
    print("Nota: Este paso requiere que magnitudes.yaml y formulas.yaml contengan datos.")
    print()
    
    result = subprocess.run(
        [
            sys.executable,
            str(FACTORY_ROOT / "06_writers" / "sync_interpretacion_from_meta.py"),
            "--leaf-id", leaf_id,
        ],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True,
    )
    
    if result.stdout:
        print(result.stdout)
    if result.stderr:
        print("[STDERR]", result.stderr, file=sys.stderr)
    
    # Si el paso 13 falla, puede ser porque no hay datos en magnitudes/formulas
    if result.returncode != 0:
        print("\n[WARN] El paso 13 no se completó correctamente.")
        print("       Verifica que magnitudes.yaml y formulas.yaml tengan contenido real.")
        if not auto_mode:
            response = input("¿Deseas continuar de todos modos? (s/N): ")
            if response.lower() not in ("s", "si", "yes", "y"):
                sys.exit(1)
        else:
            print("       Continuando en modo automático...")

    # PASO 14: Regenerar prompts para obtener 05_interpretacion
    run_command(
        "14 - Regenerar prompts (ahora incluye 05_interpretacion)",
        [
            sys.executable,
            str(FACTORY_ROOT / "04_prompts" / "generate_yaml_prompts.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # Reporte final
    prompts_dir = DEFAULT_PROMPTS_ROOT / leaf_id
    print("\n" + "="*60)
    print("PIPELINE PHASE 2 COMPLETADO")
    print("="*60)
    print(f"Prompts actualizados en: {prompts_dir}")
    print()
    print("Archivos disponibles:")
    for f in sorted(prompts_dir.glob("*.prompt.md")):
        print(f"  - {f.name}")
    print()
    
    interpretacion_prompt = prompts_dir / "05_interpretacion.prompt.md"
    if interpretacion_prompt.exists():
        print("✅ Prompt 05_interpretacion.prompt.md GENERADO CORRECTAMENTE")
        print()
        print("SIGUIENTE PASO:")
        print("  1. Copiar 05_interpretacion.prompt.md en la IA")
        print("  2. Pegar respuesta en: 05_interpretacion.response.yaml")
        print("  3. Ejecutar: write_yaml_ai_responses.py de nuevo")
        print("  4. Ejecutar: validator_modular/main.py para validación final")
    else:
        print("⚠️  El prompt 05_interpretacion no se generó.")
        print("   Verifica que interpretacion.yaml tenga datos sincronizados.")
    
    print("="*60)

    return prompts_dir


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Ejecuta el pipeline Phase 2 hasta obtener el prompt de interpretación.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Ejemplos:
    # Con leaf activo configurado:
    python run_pipeline_phase2.py
    
    # Especificando leaf:
    python run_pipeline_phase2.py --leaf-id segunda-ley-fuerza-masa
    
    # Modo automático (asume respuestas ya pegadas):
    python run_pipeline_phase2.py --auto
        """,
    )

    parser.add_argument(
        "--leaf-id",
        required=False,
        help="ID del leaf (ej: segunda-ley-fuerza-masa). Si no se especifica, usa el leaf activo.",
    )
    parser.add_argument(
        "--auto",
        action="store_true",
        help="Modo automático: no preguntar, asumir que las respuestas ya están pegadas",
    )
    parser.add_argument(
        "--leafs-root",
        default=str(DEFAULT_LEAFS_ROOT),
        help="Directorio raíz donde están los leafs",
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()

    try:
        # Usar leaf activo si no se especificó
        leaf_id = require_leaf_id(args.leaf_id)

        prompts_dir = run_pipeline(
            leaf_id=leaf_id.strip(),
            auto_mode=args.auto,
            leafs_root=Path(args.leafs_root),
        )
        print(f"\n[OK] Pipeline Phase 2 completado. Prompts en: {prompts_dir}")
        sys.exit(0)
    except RuntimeError as e:
        print(f"\n[FAIL] {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"\n[ERROR] Error inesperado: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
