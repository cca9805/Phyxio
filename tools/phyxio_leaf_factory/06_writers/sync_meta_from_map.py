from __future__ import annotations

import argparse
from pathlib import Path
from typing import Any

import yaml


CANONICAL_META_FIELDS = {
    "id",
    "nombre",
    "parent_id",
    "ruta_relativa",
    "orden",
    "type",
    "niveles",
    "icon",
    "graficos",
    "physical_role",
    "area",
    "bloque",
    "subbloque",
}


FORBIDDEN_META_FIELDS = {
    "titulo",
    "titulo_en",
    "title",
    "title_en",
    "slug",
}


def read_yaml(path: Path) -> Any:
    if not path.exists():
        raise FileNotFoundError(f"No existe el archivo YAML: {path}")

    with path.open("r", encoding="utf-8") as f:
        return yaml.safe_load(f) or {}


def write_yaml(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)

    with path.open("w", encoding="utf-8", newline="\n") as f:
        yaml.safe_dump(
            data,
            f,
            allow_unicode=True,
            sort_keys=False,
            default_flow_style=False,
            width=120,
        )


def as_dict(value: Any) -> dict[str, Any]:
    return value if isinstance(value, dict) else {}


def has_value(value: Any) -> bool:
    return value is not None and value != "" and value != [] and value != {}


def normalize_localized_block(value: Any) -> dict[str, Any]:
    """
    Normaliza campos bilingües.

    Acepta:
    - {"es": ..., "en": ...}
    - valor simple
    - None
    """

    if isinstance(value, dict):
        return {
            "es": value.get("es", ""),
            "en": value.get("en", ""),
        }

    if value is None:
        return {
            "es": "",
            "en": "",
        }

    return {
        "es": value,
        "en": value,
    }


def find_dict_by_id_with_ancestors(
    node: Any,
    target_id: str,
    ancestors: list[dict[str, Any]] | None = None,
) -> tuple[dict[str, Any], list[dict[str, Any]]] | None:
    """
    Busca recursivamente un diccionario con id == target_id
    y devuelve también sus ancestros.
    """

    ancestors = ancestors or []

    if isinstance(node, list):
        for item in node:
            found = find_dict_by_id_with_ancestors(
                item,
                target_id,
                ancestors=ancestors,
            )
            if found is not None:
                return found

        return None

    if not isinstance(node, dict):
        return None

    current_id = str(node.get("id", "") or "")

    if current_id == target_id:
        return dict(node), list(ancestors)

    next_ancestors = ancestors

    if current_id:
        next_ancestors = ancestors + [dict(node)]

    for value in node.values():
        found = find_dict_by_id_with_ancestors(
            value,
            target_id,
            ancestors=next_ancestors,
        )
        if found is not None:
            return found

    return None


def normalize_map_leaf_to_meta(
    map_leaf: dict[str, Any],
    ancestors: list[dict[str, Any]],
) -> dict[str, Any]:
    """
    Convierte una entrada de phyxio-map.yaml al bloque canónico de meta.yaml.

    Campos protegidos:
    - id
    - nombre.es / nombre.en
    - parent_id
    - ruta_relativa
    - orden
    - type
    - niveles.es / niveles.en
    - icon
    - graficos
    - physical_role.es / physical_role.en
    - area
    - bloque
    - subbloque
    """

    leaf_id = map_leaf.get("id")

    if not leaf_id:
        raise ValueError("La entrada del mapa no tiene campo obligatorio: id")

    clean_ancestors = [
        ancestor
        for ancestor in ancestors
        if isinstance(ancestor, dict) and ancestor.get("id")
    ]

    parent_id = (
        map_leaf.get("parent_id")
        or (clean_ancestors[-1].get("id") if clean_ancestors else "")
    )

    meta: dict[str, Any] = {
        "id": leaf_id,
        "nombre": {
            "es": map_leaf.get("titulo", ""),
            "en": map_leaf.get("titulo_en", ""),
        },
        "parent_id": parent_id,
        "ruta_relativa": (
            map_leaf.get("ruta_relativa")
            or map_leaf.get("relative_path")
            or map_leaf.get("path")
            or ""
        ),
        "orden": (
            map_leaf.get("orden")
            if map_leaf.get("orden") is not None
            else map_leaf.get("order")
        ),
        "type": map_leaf.get("type", ""),
        "niveles": normalize_localized_block(map_leaf.get("niveles")),
        "icon": map_leaf.get("icon", ""),
        "graficos": map_leaf.get("graficos", []),
        "physical_role": normalize_localized_block(map_leaf.get("physical_role")),
    }

    clean_ancestors = [
        ancestor
        for ancestor in ancestors
        if isinstance(ancestor, dict) and ancestor.get("id")
    ]

    if len(clean_ancestors) >= 2:
        meta["area"] = clean_ancestors[1].get("id", "")

    if len(clean_ancestors) >= 3:
        meta["bloque"] = clean_ancestors[2].get("id", "")

    if len(clean_ancestors) >= 4:
        meta["subbloque"] = clean_ancestors[3].get("id", "")

    return meta


def sync_meta_from_map(
    current_meta: dict[str, Any],
    map_leaf: dict[str, Any],
    ancestors: list[dict[str, Any]],
) -> dict[str, Any]:
    """
    Mezcla meta.yaml existente con campos canónicos del mapa.

    Conserva los campos editoriales de la IA.
    Sobrescribe solo campos protegidos.
    Elimina campos prohibidos como titulo/titulo_en.
    """

    canonical_meta = normalize_map_leaf_to_meta(map_leaf, ancestors)

    result = dict(current_meta)

    for key in FORBIDDEN_META_FIELDS:
        result.pop(key, None)

    for key, value in canonical_meta.items():
        if key in CANONICAL_META_FIELDS:
            result[key] = value

    return result


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Sincroniza campos canónicos de meta.yaml desde phyxio-map.yaml."
    )

    parser.add_argument(
        "--map",
        required=True,
        help="Ruta al phyxio-map.yaml oficial.",
    )

    parser.add_argument(
        "--leaf-dir",
        required=True,
        help="Ruta a la carpeta del leaf.",
    )

    parser.add_argument(
        "--leaf-id",
        default=None,
        help="ID del leaf en el mapa. Si se omite, usa el nombre de la carpeta.",
    )

    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Muestra el YAML final sin escribir meta.yaml.",
    )

    args = parser.parse_args()

    map_path = Path(args.map).resolve()
    leaf_dir = Path(args.leaf_dir).resolve()
    meta_path = leaf_dir / "meta.yaml"
    leaf_id = args.leaf_id or leaf_dir.name

    print("PHYXIO META SYNC FROM MAP")
    print("=========================")
    print(f"Map:      {map_path}")
    print(f"Leaf dir: {leaf_dir}")
    print(f"Meta:     {meta_path}")
    print(f"Leaf ID:  {leaf_id}")
    print()

    map_doc = read_yaml(map_path)

    found = find_dict_by_id_with_ancestors(map_doc, leaf_id)

    if found is None:
        raise SystemExit(
            f"[FAIL] No se encontró el leaf '{leaf_id}' dentro de {map_path}"
        )

    map_leaf, ancestors = found

    print("[OK] Leaf encontrado en el mapa:")
    print(f" - id: {map_leaf.get('id')}")
    print(f" - titulo: {map_leaf.get('titulo')}")
    print(f" - titulo_en: {map_leaf.get('titulo_en')}")
    print(f" - orden: {map_leaf.get('orden')}")
    print()

    print("[OK] Ancestros detectados:")
    for ancestor in ancestors:
        print(f" - {ancestor.get('id')} · {ancestor.get('titulo')}")
    print()

    current_meta = as_dict(read_yaml(meta_path))
    updated_meta = sync_meta_from_map(current_meta, map_leaf, ancestors)

    print("[OK] Campos canónicos resultantes:")
    for key in CANONICAL_META_FIELDS:
        print(f" - {key}: {updated_meta.get(key)}")
    print()

    if args.dry_run:
        print("DRY RUN · meta.yaml resultante:")
        print("==============================")
        print(
            yaml.safe_dump(
                updated_meta,
                allow_unicode=True,
                sort_keys=False,
                default_flow_style=False,
                width=120,
            )
        )
        return

    write_yaml(meta_path, updated_meta)

    print("[OK] meta.yaml sincronizado desde el mapa.")
    print(f"Archivo escrito: {meta_path}")


if __name__ == "__main__":
    main()