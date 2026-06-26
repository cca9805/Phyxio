from pathlib import Path


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
