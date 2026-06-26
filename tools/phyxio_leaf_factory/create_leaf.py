import argparse
from pathlib import Path

from config import DATA_V2_I18N_ROOT, PRUEBAS_ROOT, REQUIRED_LEAF_FILES
from ruta_leaf import require_leaf_id, require_leaf_name, require_ruta_relativa, set_current_leaf


def normalize_leaf_id(value: str) -> str:
    leaf_id = value.strip().lower()
    leaf_id = leaf_id.replace(" ", "-")
    leaf_id = leaf_id.replace("_", "-")
    return leaf_id


def create_leaf_structure(
    leaf_id: str,
    name: str,
    force: bool = False,
    leafs_root: Path = PRUEBAS_ROOT,
) -> Path:
    leaf_id = normalize_leaf_id(leaf_id)
    leaf_dir = leafs_root / leaf_id

    if leaf_dir.exists() and not force:
        raise FileExistsError(
            f"El leaf ya existe: {leaf_dir}\n"
            "Usa --force solo si quieres permitir sobrescritura."
        )

    leaf_dir.mkdir(parents=True, exist_ok=True)

    for filename in REQUIRED_LEAF_FILES:
        file_path = leaf_dir / filename

        if file_path.exists() and not force:
            continue

        if filename == "meta.yaml":
            file_path.write_text(
                f'id: "{leaf_id}"\n'
                f'name: "{name}"\n'
                f'status: "draft"\n',
                encoding="utf-8",
            )
        else:
            file_path.write_text("", encoding="utf-8")

    return leaf_dir


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Crea la carpeta y los 17 archivos obligatorios de un leaf Phyxio."
    )

    parser.add_argument(
        "--leaf-id",
        required=False,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa. Si no se especifica, usa el leaf activo.",
    )

    parser.add_argument(
        "--name",
        required=False,
        help="Nombre visible del leaf. Ejemplo: Segunda ley de Newton. Si no se especifica, usa el leaf activo.",
    )
    parser.add_argument(
        "--set-active",
        action="store_true",
        help="Establecer este leaf como activo tras crearlo (guarda en .current_leaf.yaml)",
    )
    parser.add_argument(
        "--ruta-relativa",
        required=False,
        help="Ruta relativa bajo frontend/src/data_v2_i18n. Si no se especifica, usa .current_leaf.yaml.",
    )
    parser.add_argument(
        "--leafs-root",
        required=False,
        help="Raiz absoluta donde crear el leaf. Tiene prioridad sobre --ruta-relativa.",
    )

    parser.add_argument(
        "--force",
        action="store_true",
        help="Permite sobrescribir archivos existentes.",
    )

    args = parser.parse_args()

    # Usar leaf activo si no se especificó
    leaf_id = require_leaf_id(args.leaf_id)
    leaf_name = require_leaf_name(args.name)
    ruta_relativa = require_ruta_relativa(args.ruta_relativa)
    leafs_root = Path(args.leafs_root) if args.leafs_root else DATA_V2_I18N_ROOT / ruta_relativa

    leaf_dir = create_leaf_structure(
        leaf_id=leaf_id,
        name=leaf_name,
        force=args.force,
        leafs_root=leafs_root,
    )

    # Establecer como leaf activo si se pidió
    if args.set_active:
        set_current_leaf(leaf_id, leaf_name, ruta_relativa)
        print(f"\n[INFO] Leaf establecido como activo: {leaf_id}")

    print("[OK] Leaf creado en pruebas:")
    print(leaf_dir)

    print("\nArchivos obligatorios:")
    for filename in REQUIRED_LEAF_FILES:
        print(f" - {filename}")

    print("\nSiguiente paso:")
    print(f"  python run_pipeline_phase1.py  # o: python run_pipeline_phase1.py --leaf-id {leaf_id} --name \"{leaf_name}\"")


if __name__ == "__main__":
    main()
