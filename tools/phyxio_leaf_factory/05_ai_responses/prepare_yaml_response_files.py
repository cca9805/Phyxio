from __future__ import annotations

import argparse
import sys
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[3]

FACTORY_ROOT = PROJECT_ROOT / "tools" / "phyxio_leaf_factory"

if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from ruta_leaf import require_leaf_id

DEFAULT_RESPONSES_ROOT = FACTORY_ROOT / "05_ai_responses"


RESPONSE_FILES = [
    "01_meta.response.yaml",
    "02_magnitudes.response.yaml",
    "03_formulas.response.yaml",
    "04_graficos.response.yaml",
    "05_interpretacion.response.yaml",
]


def write_text_if_missing(path: Path, content: str) -> bool:
    if path.exists():
        return False

    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    return True


def build_placeholder(filename: str, leaf_id: str) -> str:
    return "\n".join([
        "# ------------------------------------------------------------",
        "# Phyxio Leaf Factory | AI YAML response",
        "# ------------------------------------------------------------",
        "# Leaf ID: " + leaf_id,
        "# Target response file: " + filename,
        "#",
        "# Pega aquí la respuesta YAML devuelta por la IA.",
        "# No pegues bloques bloques markdown (```yaml ... ```).",
        "# No pegues explicaciones, solo YAML válido.",
        "# ------------------------------------------------------------",
        "# PENDING_AI_RESPONSE",
        "",
    ])


def prepare_response_files(
    leaf_id: str,
    responses_root: Path = DEFAULT_RESPONSES_ROOT,
) -> tuple[Path, list[str], list[str]]:
    output_dir = responses_root / leaf_id
    output_dir.mkdir(parents=True, exist_ok=True)

    created = []
    existing = []

    for filename in RESPONSE_FILES:
        path = output_dir / filename
        placeholder = build_placeholder(filename, leaf_id)

        was_created = write_text_if_missing(path, placeholder)

        if was_created:
            created.append(filename)
        else:
            existing.append(filename)

    return output_dir, created, existing


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Prepara los archivos donde se pegarán las respuestas YAML de la IA."
    )

    parser.add_argument(
        "--leaf-id",
        required=False,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa. Si no se especifica, usa el leaf activo.",
    )

    parser.add_argument(
        "--responses-root",
        default=str(DEFAULT_RESPONSES_ROOT),
        help=(
            "Ruta raíz donde se guardarán las respuestas IA. "
            "Por defecto: tools/phyxio_leaf_factory/05_ai_responses"
        ),
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()

    # Usar leaf activo si no se especificó
    leaf_id = require_leaf_id(args.leaf_id).strip()
    responses_root = Path(args.responses_root).resolve()

    output_dir, created, existing = prepare_response_files(
        leaf_id=leaf_id,
        responses_root=responses_root,
    )

    print()
    print("PHYXIO AI YAML RESPONSE PREP")
    print("================================")
    print("Leaf ID:        " + leaf_id)
    print("Responses root: " + str(responses_root))
    print("Output dir:     " + str(output_dir))
    print()

    if created:
        print("[OK] Archivos de respuesta IA creados:")
        for filename in created:
            print(" - " + filename)
    else:
        print("[OK] No se han creado archivos nuevos.")

    if existing:
        print()
        print("Archivos que ya existían y no se han sobrescrito:")
        for filename in existing:
            print(" - " + filename)

    print()


if __name__ == "__main__":
    main()