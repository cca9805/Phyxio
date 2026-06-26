from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[2]

FACTORY_ROOT = PROJECT_ROOT / "tools" / "phyxio_leaf_factory"

DATA_V2_I18N_ROOT = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n"

PRUEBAS_ROOT = DATA_V2_I18N_ROOT / "pruebas"

DEFAULT_TEMPLATE_ROOT = PROJECT_ROOT / "docsV2" / "plantilla_v5_modular"

DEFAULT_VALIDATOR_ROOT = PROJECT_ROOT / "tools" / "validator_modular"


REQUIRED_LEAF_FILES = [
    "meta.yaml",
    "magnitudes.yaml",
    "formulas.yaml",
    "interpretacion.yaml",
    "graficos.yaml",

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