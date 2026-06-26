#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import yaml

MAP_CANDIDATE_PATHS = [
    Path("v2/map/phyxio-map.yaml"),
    Path("frontend/src/v2/map/phyxio-map.yaml"),
    Path("docsV2/phyxio-map.yaml"),
    Path("docs_v2/phyxio-map.yaml"),
]


def load_yaml(path: Path) -> Any:
    return yaml.safe_load(path.read_text(encoding="utf-8", errors="replace"))


def dump_yaml(path: Path, data: Any) -> None:
    text = yaml.safe_dump(
        data,
        allow_unicode=True,
        sort_keys=False,
        default_flow_style=False,
        width=120,
    )
    path.write_text(text, encoding="utf-8")


def find_repo_root(start: Path) -> Path:
    candidate = start.resolve()
    for _ in range(25):
        if (candidate / ".git").exists():
            return candidate
        if (candidate / "frontend" / "src" / "v2" / "map" / "phyxio-map.yaml").exists():
            return candidate
        if candidate.parent == candidate:
            break
        candidate = candidate.parent
    return start.resolve()


def resolve_map_path(repo_root: Path) -> Path:
    for rel in MAP_CANDIDATE_PATHS:
        candidate = repo_root / rel
        if candidate.exists():
            return candidate
    raise FileNotFoundError("No se encontró phyxio-map.yaml en rutas candidatas")


def iter_map_nodes(node: Dict[str, Any], parent_id: Optional[str] = None):
    yield node, parent_id
    for child in node.get("children", []) or []:
        if isinstance(child, dict):
            yield from iter_map_nodes(child, node.get("id"))


def build_map_index(map_data: Dict[str, Any]) -> Dict[str, Tuple[Dict[str, Any], Optional[str]]]:
    root = map_data.get("root")
    if not isinstance(root, dict):
        raise ValueError("Mapa inválido: falta bloque root")
    index: Dict[str, Tuple[Dict[str, Any], Optional[str]]] = {}
    for node, parent_id in iter_map_nodes(root, None):
        node_id = node.get("id")
        if isinstance(node_id, str) and node_id.strip():
            index[node_id] = (node, parent_id)
    return index


def derive_area_bloque_subbloque(ruta_relativa: str) -> Tuple[Optional[str], Optional[str], Optional[str]]:
    parts = [p for p in str(ruta_relativa).split("/") if p]
    area = parts[0] if len(parts) >= 1 else None
    bloque = parts[1] if len(parts) >= 2 else None
    subbloque = parts[2] if len(parts) >= 3 else None
    return area, bloque, subbloque


def expected_meta_from_node(node: Dict[str, Any], parent_id: Optional[str]) -> Dict[str, Any]:
    ruta = node.get("ruta_relativa", "")
    area, bloque, subbloque = derive_area_bloque_subbloque(ruta)
    expected: Dict[str, Any] = {
        "id": node.get("id"),
        "nombre": {
            "es": node.get("titulo", ""),
            "en": node.get("titulo_en", ""),
        },
        "orden": node.get("orden"),
        "type": node.get("type", "leaf"),
        "niveles": node.get("niveles", []),
        "ruta_relativa": ruta,
        "icon": node.get("icon", ""),
        "graficos": node.get("graficos", []),
        "physical_role": node.get("physical_role", {}),
        "descripcion": node.get("descripcion", ""),
        "description_en": node.get("description_en", ""),
    }
    if parent_id is not None:
        expected["parent_id"] = parent_id
    if area is not None:
        expected["area"] = area
    if bloque is not None:
        expected["bloque"] = bloque
    if subbloque is not None:
        expected["subbloque"] = subbloque
    return expected


def collect_meta_files(target: Path) -> List[Path]:
    if target.is_file():
        if target.name != "meta.yaml":
            raise ValueError(f"El archivo no es meta.yaml: {target}")
        return [target]

    if not target.is_dir():
        raise ValueError(f"Ruta inválida: {target}")

    direct_meta = target / "meta.yaml"
    if direct_meta.exists():
        return [direct_meta]

    return sorted(target.rglob("meta.yaml"))


def sync_one_meta(meta_path: Path, map_index: Dict[str, Tuple[Dict[str, Any], Optional[str]]], dry_run: bool) -> Tuple[str, str]:
    try:
        meta = load_yaml(meta_path)
    except Exception as e:
        return "error", f"{meta_path}: YAML inválido ({e})"

    if not isinstance(meta, dict):
        return "error", f"{meta_path}: no es un mapping YAML"

    leaf_id = str(meta.get("id", "")).strip()
    if not leaf_id:
        return "error", f"{meta_path}: falta id"

    node_pair = map_index.get(leaf_id)
    if node_pair is None:
        return "skip", f"{meta_path}: id '{leaf_id}' no está en el mapa"

    node, parent_id = node_pair
    expected = expected_meta_from_node(node, parent_id)

    updated = dict(meta)
    for key, value in expected.items():
        updated[key] = value

    if updated == meta:
        return "ok", f"{meta_path}: ya sincronizado"

    if not dry_run:
        dump_yaml(meta_path, updated)
    return "updated", f"{meta_path}: campos de mapa sincronizados"


def main() -> int:
    parser = argparse.ArgumentParser(description="Sincroniza campos de meta.yaml desde phyxio-map.yaml (inmutable)")
    parser.add_argument("target", help="Leaf, meta.yaml o carpeta raíz para sincronización recursiva")
    parser.add_argument("--dry-run", action="store_true", help="No escribe cambios; solo informa")
    args = parser.parse_args()

    target = Path(args.target).resolve()
    repo_root = find_repo_root(target if target.exists() else Path.cwd())

    try:
        map_path = resolve_map_path(repo_root)
    except Exception as e:
        print(f"ERROR: {e}")
        return 2

    try:
        map_data = load_yaml(map_path)
        if not isinstance(map_data, dict):
            raise ValueError("mapa YAML no es mapping")
        map_index = build_map_index(map_data)
    except Exception as e:
        print(f"ERROR: no se pudo cargar índice de mapa ({map_path}): {e}")
        return 2

    try:
        meta_files = collect_meta_files(target)
    except Exception as e:
        print(f"ERROR: {e}")
        return 2

    if not meta_files:
        print("No se encontraron meta.yaml para sincronizar.")
        return 0

    print(f"Mapa usado: {map_path}")
    print(f"meta.yaml detectados: {len(meta_files)}")

    counts = {"updated": 0, "ok": 0, "skip": 0, "error": 0}
    for meta_path in meta_files:
        status, msg = sync_one_meta(meta_path, map_index, args.dry_run)
        counts[status] = counts.get(status, 0) + 1
        print(f"[{status.upper()}] {msg}")

    print(
        "Resumen:"
        f" updated={counts['updated']}, ok={counts['ok']},"
        f" skip={counts['skip']}, error={counts['error']}"
    )
    return 1 if counts["error"] > 0 else 0


if __name__ == "__main__":
    raise SystemExit(main())
