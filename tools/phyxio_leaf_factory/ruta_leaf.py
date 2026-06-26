#!/usr/bin/env python3
"""Gestion centralizada del leaf activo de Phyxio Leaf Factory."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Any, Tuple

import yaml

from config import DATA_V2_I18N_ROOT, FACTORY_ROOT

RUTA_LEAF_FILE = FACTORY_ROOT / ".current_leaf.yaml"


def normalize_leaf_id(value: str) -> str:
    return value.strip().lower().replace(" ", "-").replace("_", "-")


def normalize_ruta_relativa(value: str | None) -> str:
    if not value:
        return "pruebas"
    return value.strip().replace("\\", "/").strip("/")


def default_leaf_name(leaf_id: str) -> str:
    return leaf_id.replace("-", " ").title()


def get_current_leaf_config() -> dict[str, Any]:
    """Lee .current_leaf.yaml y devuelve una configuracion normalizada."""
    if not RUTA_LEAF_FILE.exists():
        return {}

    try:
        data = yaml.safe_load(RUTA_LEAF_FILE.read_text(encoding="utf-8"))
    except Exception:
        return {}

    if not isinstance(data, dict):
        return {}

    leaf_id_raw = data.get("leaf_id") or data.get("id")
    if not leaf_id_raw:
        return {}

    leaf_id = normalize_leaf_id(str(leaf_id_raw))
    ruta_relativa = normalize_ruta_relativa(
        data.get("ruta_relativa") or data.get("relative_path")
    )
    leaf_name = data.get("leaf_name") or data.get("name") or data.get("nombre") or default_leaf_name(leaf_id)
    leaf_path = DATA_V2_I18N_ROOT / ruta_relativa / leaf_id

    normalized = dict(data)
    normalized.update(
        {
            "leaf_id": leaf_id,
            "leaf_name": str(leaf_name),
            "ruta_relativa": ruta_relativa,
            "leaf_path": str(leaf_path),
        }
    )
    return normalized


def get_current_leaf() -> Tuple[str | None, str | None]:
    data = get_current_leaf_config()
    return data.get("leaf_id"), data.get("leaf_name")


def get_current_leaf_path() -> Path | None:
    data = get_current_leaf_config()
    leaf_path = data.get("leaf_path")
    return Path(leaf_path) if leaf_path else None


def set_current_leaf(
    leaf_id: str,
    leaf_name: str | None = None,
    ruta_relativa: str = "pruebas",
) -> None:
    """Escribe .current_leaf.yaml."""
    leaf_id = normalize_leaf_id(leaf_id)
    ruta_relativa = normalize_ruta_relativa(ruta_relativa)
    leaf_name = leaf_name or default_leaf_name(leaf_id)
    leaf_path = DATA_V2_I18N_ROOT / ruta_relativa / leaf_id
    data = {
        "leaf_id": leaf_id,
        "leaf_name": leaf_name,
        "ruta_relativa": ruta_relativa,
        "leaf_path": str(leaf_path),
    }
    RUTA_LEAF_FILE.write_text(
        yaml.safe_dump(data, allow_unicode=True, sort_keys=False),
        encoding="utf-8",
    )


def clear_current_leaf() -> None:
    if RUTA_LEAF_FILE.exists():
        RUTA_LEAF_FILE.unlink()


def require_leaf_id(provided_leaf_id: str | None = None) -> str:
    if provided_leaf_id:
        return normalize_leaf_id(provided_leaf_id)

    leaf_id, _ = get_current_leaf()
    if leaf_id:
        return leaf_id

    print("[ERROR] Falta leaf_id.", file=sys.stderr)
    print(f"        Edita: {RUTA_LEAF_FILE}", file=sys.stderr)
    print("        Campos minimos: leaf_id, ruta_relativa", file=sys.stderr)
    sys.exit(1)


def require_leaf_name(provided_leaf_name: str | None = None) -> str:
    if provided_leaf_name:
        return provided_leaf_name

    leaf_id, leaf_name = get_current_leaf()
    if leaf_name:
        return leaf_name
    if leaf_id:
        return default_leaf_name(leaf_id)

    print("[ERROR] Falta leaf_name o leaf_id en .current_leaf.yaml.", file=sys.stderr)
    print(f"        Edita: {RUTA_LEAF_FILE}", file=sys.stderr)
    sys.exit(1)


def require_ruta_relativa(provided_ruta_relativa: str | None = None) -> str:
    if provided_ruta_relativa:
        return normalize_ruta_relativa(provided_ruta_relativa)

    data = get_current_leaf_config()
    ruta_relativa = data.get("ruta_relativa")
    if ruta_relativa:
        return normalize_ruta_relativa(str(ruta_relativa))

    print("[ERROR] Falta ruta_relativa en .current_leaf.yaml.", file=sys.stderr)
    print(f"        Edita: {RUTA_LEAF_FILE}", file=sys.stderr)
    print("        Ejemplo:", file=sys.stderr)
    print("        leaf_id: conduccion", file=sys.stderr)
    print("        ruta_relativa: pruebas", file=sys.stderr)
    sys.exit(1)


def show_current_leaf() -> None:
    data = get_current_leaf_config()
    if not data:
        print("[INFO] No hay leaf activo configurado.")
        print(f"       Archivo: {RUTA_LEAF_FILE}")
        print("       Campos minimos: leaf_id, ruta_relativa")
        return

    print("=" * 50)
    print("LEAF ACTIVO")
    print("=" * 50)
    print(f"ID:            {data['leaf_id']}")
    print(f"Nombre:        {data['leaf_name']}")
    print(f"Ruta relativa: {data['ruta_relativa']}")
    print(f"Ruta:          {data['leaf_path']}")
    print("=" * 50)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Gestiona .current_leaf.yaml para phyxio_leaf_factory"
    )
    parser.add_argument("--set", dest="leaf_id", help="ID del leaf a activar")
    parser.add_argument("--name", help="Nombre legible del leaf")
    parser.add_argument(
        "--ruta-relativa",
        default="pruebas",
        help="Ruta bajo frontend/src/data_v2_i18n",
    )
    parser.add_argument("--show", action="store_true", help="Mostrar el leaf activo")
    parser.add_argument("--clear", action="store_true", help="Borrar .current_leaf.yaml")
    args = parser.parse_args()

    if args.clear:
        clear_current_leaf()
        print("[OK] Configuracion de leaf activo eliminada.")
        return

    if args.show:
        show_current_leaf()
        return

    if args.leaf_id:
        set_current_leaf(args.leaf_id, args.name, args.ruta_relativa)
        show_current_leaf()
        return

    show_current_leaf()


if __name__ == "__main__":
    main()
