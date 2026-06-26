#!/usr/bin/env python3
"""
Orquestador Phase 3: Finalizar leaf tras completar interpretación.

Ejecuta los pasos finales después de que la IA haya devuelto
la interpretación y se haya pegado en 05_interpretacion.response.yaml.
Flujo: escribir interpretación → validación final.

Uso:
    # Con leaf activo configurado:
    python run_pipeline_phase3.py
    
    # Especificando leaf:
    python run_pipeline_phase3.py --leaf-id segunda-ley-fuerza-masa
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


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Pipeline Phase 3 - Finalizar leaf tras interpretación"
    )
    parser.add_argument(
        "--leaf-id",
        required=False,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa. Si no se especifica, usa el leaf activo.",
    )
    parser.add_argument(
        "--leafs-root",
        default=str(DEFAULT_LEAFS_ROOT),
        help="Ruta raíz donde están los leafs.",
    )
    return parser.parse_args()


def run_pipeline(leaf_id: str, leafs_root: Path) -> None:
    """Ejecuta el pipeline completo de Phase 3."""
    python_exe = sys.executable

    # PASO 1: Escribir interpretación al leaf
    # Este paso solo escribirá 05_interpretacion si tiene contenido válido
    run_command(
        "Escribir interpretación al leaf",
        [
            python_exe,
            str(FACTORY_ROOT / "06_writers" / "write_yaml_ai_responses.py"),
            "--leaf-id", leaf_id,
        ],
    )

    # PASO 2: Validación final con el validador v2
    leaf_path = leafs_root / leaf_id
    run_command(
        "Validación final del leaf",
        [
            python_exe,
            str(PROJECT_ROOT / "tools" / "phyxio_leaf_validator_v2.py"),
            str(leaf_path),
        ],
        check=False,  # No fallar si hay warnings, mostrar resultado
    )

    print("\n" + "="*60)
    print("PIPELINE PHASE 3 COMPLETADO")
    print("="*60)
    print(f"Leaf completado: {leaf_id}")
    print(f"Ubicación: {leaf_path}")
    print("\nArchivos finales del leaf:")
    print("  - meta.yaml")
    print("  - magnitudes.yaml")
    print("  - formulas.yaml")
    print("  - graficos.yaml")
    print("  - interpretacion.yaml")
    print("="*60)


def main() -> int:
    args = parse_args()
    # Usar leaf activo si no se especificó
    leaf_id = require_leaf_id(args.leaf_id).strip()
    leafs_root = Path(args.leafs_root).resolve()

    try:
        run_pipeline(leaf_id, leafs_root)
        return 0
    except RuntimeError as e:
        print(f"\n[ERROR] {e}", file=sys.stderr)
        return 1
    except KeyboardInterrupt:
        print("\n[INTERRUPTED] Pipeline cancelado por el usuario.", file=sys.stderr)
        return 130


if __name__ == "__main__":
    sys.exit(main())
