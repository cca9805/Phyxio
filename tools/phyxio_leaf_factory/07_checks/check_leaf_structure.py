import argparse
import sys
from pathlib import Path

CURRENT_FILE = Path(__file__).resolve()
FACTORY_ROOT = CURRENT_FILE.parents[1]

if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from config import REQUIRED_LEAF_FILES
from ruta_leaf import get_current_leaf_path, require_leaf_id


def normalize_leaf_id(value: str) -> str:
    return value.strip().lower().replace(" ", "-").replace("_", "-")


def check_leaf_structure(leaf_id: str | None = None) -> dict:
    if leaf_id is None:
        leaf_dir = get_current_leaf_path()
        if leaf_dir is None:
            raise ValueError("No se especificó leaf_id y no hay leaf activo configurado")
        leaf_id = leaf_dir.name
    else:
        leaf_id = normalize_leaf_id(leaf_id)
        # Intentar obtener ruta del leaf activo primero, luego fallback a PRUEBAS_ROOT
        current_path = get_current_leaf_path()
        if current_path and current_path.name == leaf_id:
            leaf_dir = current_path
        else:
            from config import PRUEBAS_ROOT
            leaf_dir = PRUEBAS_ROOT / leaf_id

    required = set(REQUIRED_LEAF_FILES)

    result = {
        "leaf_id": leaf_id,
        "leaf_dir": str(leaf_dir),
        "ok": False,
        "exists": leaf_dir.exists(),
        "missing_files": [],
        "extra_files": [],
        "found_files": [],
    }

    if not leaf_dir.exists():
        result["missing_files"] = sorted(required)
        return result

    found = {
        path.name
        for path in leaf_dir.iterdir()
        if path.is_file()
    }

    result["found_files"] = sorted(found)
    result["missing_files"] = sorted(required - found)
    result["extra_files"] = sorted(found - required)
    result["ok"] = not result["missing_files"] and not result["extra_files"]

    return result


def print_report(result: dict) -> None:
    print()
    print("PHYXIO LEAF STRUCTURE CHECK")
    print("=" * 32)
    print(f"Leaf ID: {result['leaf_id']}")
    print(f"Path:    {result['leaf_dir']}")
    print()

    if not result["exists"]:
        print("[FAIL] La carpeta del leaf no existe.")
        return

    if result["ok"]:
        print("[OK] La estructura del leaf es correcta.")
        print()
        print("Archivos encontrados:")
        for filename in result["found_files"]:
            print(f" - {filename}")
        return

    print("[FAIL] La estructura del leaf no es correcta.")
    print()

    if result["missing_files"]:
        print("Archivos faltantes:")
        for filename in result["missing_files"]:
            print(f" - {filename}")
        print()

    if result["extra_files"]:
        print("Archivos extra:")
        for filename in result["extra_files"]:
            print(f" - {filename}")
        print()


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Comprueba que un leaf Phyxio tiene exactamente los 16 archivos obligatorios."
    )

    parser.add_argument(
        "--leaf-id",
        required=False,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa. Si no se especifica, usa el leaf activo.",
    )

    args = parser.parse_args()

    # Usar leaf activo si no se especificó
    leaf_id = require_leaf_id(args.leaf_id)

    result = check_leaf_structure(leaf_id)
    print_report(result)

    if not result["ok"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()