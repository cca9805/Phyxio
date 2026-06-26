from pathlib import Path


FACTORY_ROOT = Path("tools/phyxio_leaf_factory")


DIRS = [
    "00_docs",
    "01_inputs",
    "02_templates",
    "03_extractors",
    "04_prompts",
    "05_ai_responses",
    "06_writers",
    "07_checks",
    "08_validator_bridge",
    "09_reports",
    "10_outputs",
    "11_promotion",
    "12_tests",
]


FILES = {
    "README.md": """# Phyxio Leaf Factory

Factory local para crear, rellenar, validar, reparar y promocionar leafs Phyxio.

Fuente de verdad: plantilla_v5_modular.

Autoridad final: validator_modular.

La factory trabaja siempre primero sobre:

frontend/src/data_v2_i18n/pruebas/{leaf_id}/

La promoción a producción requiere comando explícito.
""",

    "00_docs/creation_flow.md": """# Flujo de creación de leaf

1. Recibir leaf_id y nombre.
2. Leer el mapa si existe.
3. Crear carpeta del leaf en pruebas.
4. Crear los 16 archivos obligatorios.
5. Extraer estructura desde plantilla_v5_modular.
6. Generar prompts acotados.
7. Recibir respuestas IA en JSON o Markdown controlado.
8. Escribir YAML y Markdown finales.
9. Comprobar coherencia interna.
10. Generar traducciones EN.
11. Ejecutar validator_modular.
12. Crear report.json y report.md.
13. Reparar fails.
14. Repetir hasta 0 fails.
15. Promocionar solo con comando explícito.
""",

    "01_inputs/.gitkeep": "",
    "02_templates/.gitkeep": "",
    "03_extractors/.gitkeep": "",
    "04_prompts/.gitkeep": "",
    "05_ai_responses/.gitkeep": "",
    "06_writers/.gitkeep": "",
    "07_checks/.gitkeep": "",
    "08_validator_bridge/.gitkeep": "",
    "09_reports/.gitkeep": "",
    "10_outputs/.gitkeep": "",
    "11_promotion/.gitkeep": "",
    "12_tests/.gitkeep": "",

    "__init__.py": "",

    "config.py": '''from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[2]

FACTORY_ROOT = PROJECT_ROOT / "tools" / "phyxio_leaf_factory"

DATA_V2_I18N_ROOT = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n"

PRUEBAS_ROOT = DATA_V2_I18N_ROOT / "pruebas"

DEFAULT_TEMPLATE_ROOT = PROJECT_ROOT / "tools" / "plantilla_v5_modular"

DEFAULT_VALIDATOR_ROOT = PROJECT_ROOT / "tools" / "validator_modular"


REQUIRED_LEAF_FILES = [
    "meta.yaml",
    "magnitudes.yaml",
    "formulas.yaml",
    "interpretacion.yaml",

    "teoria.md",
    "teoria.en.md",

    "modelos.md",
    "modelos.en.md",

    "errores.md",
    "errores.en.md",

    "ejemplos.md",
    "ejemplos.en.md",

    "aplicaciones.md",
    "aplicaciones.en.md",

    "historia.md",
    "historia.en.md",
]
''',

    "create_leaf.py": '''import argparse
from pathlib import Path

from config import PRUEBAS_ROOT, REQUIRED_LEAF_FILES


def normalize_leaf_id(value: str) -> str:
    leaf_id = value.strip().lower()
    leaf_id = leaf_id.replace(" ", "-")
    leaf_id = leaf_id.replace("_", "-")
    return leaf_id


def create_leaf_structure(leaf_id: str, name: str, force: bool = False) -> Path:
    leaf_id = normalize_leaf_id(leaf_id)
    leaf_dir = PRUEBAS_ROOT / leaf_id

    if leaf_dir.exists() and not force:
        raise FileExistsError(
            f"El leaf ya existe: {leaf_dir}\\n"
            "Usa --force si quieres completar archivos faltantes sin borrar los existentes."
        )

    leaf_dir.mkdir(parents=True, exist_ok=True)

    for filename in REQUIRED_LEAF_FILES:
        file_path = leaf_dir / filename

        if file_path.exists() and not force:
            continue

        if filename == "meta.yaml":
            file_path.write_text(
                f'id: "{leaf_id}"\\n'
                f'name: "{name}"\\n'
                f'status: "draft"\\n',
                encoding="utf-8",
            )
        else:
            file_path.write_text("", encoding="utf-8")

    return leaf_dir


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Crea la carpeta y los 16 archivos obligatorios de un leaf Phyxio en pruebas."
    )

    parser.add_argument(
        "--leaf-id",
        required=True,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa",
    )

    parser.add_argument(
        "--name",
        required=True,
        help="Nombre visible del leaf. Ejemplo: Segunda ley de Newton",
    )

    parser.add_argument(
        "--force",
        action="store_true",
        help="Completa archivos faltantes si el leaf ya existe.",
    )

    args = parser.parse_args()

    leaf_dir = create_leaf_structure(
        leaf_id=args.leaf_id,
        name=args.name,
        force=args.force,
    )

    print("[OK] Leaf creado en pruebas:")
    print(leaf_dir)

    print("\\nArchivos obligatorios:")
    for filename in REQUIRED_LEAF_FILES:
        print(f" - {filename}")


if __name__ == "__main__":
    main()
''',

    "init_factory.py": '''from pathlib import Path


FACTORY_ROOT = Path(__file__).resolve().parent


DIRS = [
    "00_docs",
    "01_inputs",
    "02_templates",
    "03_extractors",
    "04_prompts",
    "05_ai_responses",
    "06_writers",
    "07_checks",
    "08_validator_bridge",
    "09_reports",
    "10_outputs",
    "11_promotion",
    "12_tests",
]


def main() -> None:
    FACTORY_ROOT.mkdir(parents=True, exist_ok=True)

    for folder in DIRS:
        path = FACTORY_ROOT / folder
        path.mkdir(parents=True, exist_ok=True)

        gitkeep = path / ".gitkeep"
        if not gitkeep.exists():
            gitkeep.write_text("", encoding="utf-8")

    print("[OK] Estructura interna de phyxio_leaf_factory creada:")
    print(FACTORY_ROOT)


if __name__ == "__main__":
    main()
''',
}


def write_file(relative_path: str, content: str) -> None:
    path = FACTORY_ROOT / relative_path
    path.parent.mkdir(parents=True, exist_ok=True)

    if path.exists():
        print(f"[SKIP] Ya existe: {path}")
        return

    path.write_text(content, encoding="utf-8")
    print(f"[OK] Creado: {path}")


def create_factory_structure() -> None:
    FACTORY_ROOT.mkdir(parents=True, exist_ok=True)
    print(f"[OK] Carpeta raíz: {FACTORY_ROOT}")

    for folder in DIRS:
        folder_path = FACTORY_ROOT / folder
        folder_path.mkdir(parents=True, exist_ok=True)
        print(f"[OK] Carpeta: {folder_path}")

    for relative_path, content in FILES.items():
        write_file(relative_path, content)


def main() -> None:
    create_factory_structure()
    print()
    print("[OK] Phyxio Leaf Factory inicializada.")
    print()
    print("Siguiente prueba:")
    print(
        'python tools/phyxio_leaf_factory/create_leaf.py '
        '--leaf-id segunda-ley-fuerza-masa '
        '--name "Segunda ley de Newton"'
    )


if __name__ == "__main__":
    main()