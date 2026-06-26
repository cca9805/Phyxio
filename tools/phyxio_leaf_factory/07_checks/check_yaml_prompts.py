from __future__ import annotations

import argparse
import sys
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[3]

FACTORY_ROOT = PROJECT_ROOT / "tools" / "phyxio_leaf_factory"

if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from ruta_leaf import require_leaf_id

DEFAULT_PROMPTS_ROOT = FACTORY_ROOT / "10_outputs" / "prompts"


REQUIRED_PROMPT_FILES = {
    "01_meta.prompt.md": [
        "meta.yaml",
        "Leaf ID:",
        "RESTRICCIONES:",
        "YAML_ACTUAL_INICIO",
        "YAML_ACTUAL_FIN",
    ],
    # Prompt combinado reemplaza a magnitudes y fórmulas individuales
    "02_combined_magnitudes_formulas.prompt.md": [
        "magnitudes.yaml + formulas.yaml",
        "Leaf ID:",
        "COHERENCIA ENTRE ARCHIVOS",
        "PARTE 1: MAGNITUDES",
        "PARTE 2: FÓRMULAS",
        "---SPLIT---",
    ],
    "04_graficos.prompt.md": [
        "graficos.yaml",
        "Leaf ID:",
        "YAML_ACTUAL_INICIO",
        "YAML_ACTUAL_FIN",
    ],
}

OPTIONAL_PROMPT_FILES = {
    "05_interpretacion.prompt.md": [
        "interpretacion.yaml",
        "Leaf ID:",
        "Devuelve solo YAML válido",
        "INTERPRETACION_YAML_ACTUAL_INICIO",
        "INTERPRETACION_YAML_ACTUAL_FIN",
    ],
}


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def ensure_prompt_dir_exists(prompt_dir: Path) -> None:
    if not prompt_dir.exists():
        raise FileNotFoundError(
            "No existe la carpeta de prompts: " + str(prompt_dir)
        )

    if not prompt_dir.is_dir():
        raise NotADirectoryError(
            "La ruta de prompts no es una carpeta: " + str(prompt_dir)
        )


def check_required_files(prompt_dir: Path) -> list[str]:
    errors = []

    for filename in REQUIRED_PROMPT_FILES:
        path = prompt_dir / filename

        if not path.exists():
            errors.append("Falta el prompt obligatorio: " + filename)

    return errors


def check_prompt_content(
    prompt_dir: Path,
    leaf_id: str,
) -> list[str]:
    errors = []

    all_files = {**REQUIRED_PROMPT_FILES, **OPTIONAL_PROMPT_FILES}

    for filename, required_fragments in all_files.items():
        path = prompt_dir / filename

        if not path.exists():
            continue

        content = read_text(path)

        if not content.strip():
            errors.append(filename + " está vacío.")
            continue

        if leaf_id not in content:
            errors.append(
                filename + " no contiene el leaf_id esperado: " + leaf_id
            )

        for fragment in required_fragments:
            if fragment not in content:
                errors.append(
                    filename + " no contiene el fragmento obligatorio: " + fragment
                )

    return errors


def run_check_yaml_prompts(
    leaf_id: str,
    prompts_root: Path = DEFAULT_PROMPTS_ROOT,
) -> list[str]:
    prompt_dir = prompts_root / leaf_id

    ensure_prompt_dir_exists(prompt_dir)

    errors = []
    errors.extend(check_required_files(prompt_dir))
    errors.extend(check_prompt_content(prompt_dir, leaf_id))

    return errors


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Valida que los prompts YAML de un leaf se han generado correctamente."
    )

    parser.add_argument(
        "--leaf-id",
        required=False,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa. Si no se especifica, usa el leaf activo.",
    )

    parser.add_argument(
        "--prompts-root",
        default=str(DEFAULT_PROMPTS_ROOT),
        help=(
            "Ruta raíz donde están los prompts generados. "
            "Por defecto: tools/phyxio_leaf_factory/10_outputs/prompts"
        ),
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()

    # Usar leaf activo si no se especificó
    leaf_id = require_leaf_id(args.leaf_id).strip()
    prompts_root = Path(args.prompts_root).resolve()

    prompt_dir = prompts_root / leaf_id

    print()
    print("PHYXIO YAML PROMPTS CHECK")
    print("================================")
    print("Leaf ID:      " + leaf_id)
    print("Prompts root: " + str(prompts_root))
    print("Prompt dir:   " + str(prompt_dir))
    print()

    errors = run_check_yaml_prompts(
        leaf_id=leaf_id,
        prompts_root=prompts_root,
    )

    if errors:
        print("[FAIL] Los prompts YAML tienen errores.")
        print()
        print("Errores encontrados:")

        for error in errors:
            print(" - " + error)

        raise SystemExit(1)

    print("[OK] Los prompts YAML son correctos.")
    print()
    print("Archivos obligatorios comprobados:")
    for filename in REQUIRED_PROMPT_FILES:
        print(" - " + filename)

    optional_found = [f for f in OPTIONAL_PROMPT_FILES if (prompt_dir / f).exists()]
    if optional_found:
        print()
        print("Archivos opcionales encontrados:")
        for filename in optional_found:
            print(" - " + filename)

    missing_optional = [f for f in OPTIONAL_PROMPT_FILES if not (prompt_dir / f).exists()]
    if missing_optional:
        print()
        print("[INFO] Archivos opcionales pendientes (se generarán tras sincronizar interpretacion):")
        for filename in missing_optional:
            print(" - " + filename)

    print()


if __name__ == "__main__":
    main()