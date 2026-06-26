"""Genera un prompt maestro para producir un ZIP con los 12 Markdown del leaf."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[3]
FACTORY_ROOT = PROJECT_ROOT / "tools" / "phyxio_leaf_factory"
DEFAULT_LEAFS_ROOT = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n" / "pruebas"
DEFAULT_OUTPUT_ROOT = FACTORY_ROOT / "10_outputs" / "prompts"
DEFAULT_CONTRACT_PATH = FACTORY_ROOT / "02_templates" / "extracted_contract.json"

if str(Path(__file__).resolve().parent) not in sys.path:
    sys.path.insert(0, str(Path(__file__).resolve().parent))

from generate_md_prompts import (  # noqa: E402
    MD_PROMPT_ORDER,
    build_prompt_for_file,
    load_contract,
    load_yaml_context,
    write_text,
)


def build_batch_prompt(leaf_id: str, yaml_context: dict, contract: dict) -> str:
    filenames = [filename for _prefix, filename, _lang in MD_PROMPT_ORDER]
    sections: list[str] = [
        "# PROMPT MAESTRO MD | ZIP DESCARGABLE CON 12 ARCHIVOS MARKDOWN",
        "",
        f"Leaf ID: {leaf_id}",
        "",
        f"You must create a downloadable ZIP file named `{leaf_id}_md.zip`.",
        "The ZIP must contain exactly the Markdown files listed below at the ZIP root.",
        "Do not answer with the Markdown contents in the chat.",
        "Do not use BEGIN/END markers.",
        "Do not wrap files in code fences.",
        "",
        "ZIP content rules:",
        "- The response must be a real downloadable .zip file, not text printed on screen.",
        "- Put the files directly in the ZIP root, not inside a nested folder.",
        "- Do not include extra files, logs, manifests, explanations, or metadata.",
        "- Do not omit any required Markdown file.",
        "- Do not include placeholders, TODOs, or instructions to complete later.",
        "- Use the exact filenames listed here: " + ", ".join(filenames),
        "",
        "Cross-file coherence rules:",
        "- Use the same physical assumptions, signs, symbols, examples, and terminology across languages.",
        "- Spanish and English files must be equivalent in physics, not literal low-quality translations.",
        "- Magnitude ids and formula ids must match the YAML context exactly.",
        "- Examples, models, errors, applications, and history must answer the central physical question of the leaf.",
        "- Keep formulas in formal/solution/validation contexts; keep conceptual sections conceptual.",
        "",
        "Critical validator gates that must pass:",
        "- In `teoria.md`, count words before packaging: `## 🟢 Nivel esencial` must have 120-150 words, `## 🔵 Nivel formal` 190-260 words, and `## 🔴 Nivel estructural` 350-400 words. Rewrite any section outside those ranges.",
        "- In `ejemplos.en.md`, `## Physical interpretation` must be at least 90 words and include causal physics markers such as means, indicates, this implies, therefore, depends, physically.",
        "- In `ejemplos.en.md`, `## Physical estimation` must be at least 90 words and include quantitative-estimation markers such as order, estimate, approximate, scale, magnitude, reasonable value.",
        "",
    ]

    for _prefix, filename, _lang in MD_PROMPT_ORDER:
        sections.extend([
            "=" * 80,
            f"CONTRACT FOR {filename}",
            "=" * 80,
            build_prompt_for_file(leaf_id, filename, yaml_context, contract),
            "",
        ])

    sections.extend([
        "=" * 80,
        "FINAL DELIVERABLE",
        "=" * 80,
        "",
        f"Return only the downloadable file `{leaf_id}_md.zip`.",
        "The ZIP must contain these files at root level:",
        *[f"- {filename}" for _prefix, filename, _lang in MD_PROMPT_ORDER],
        "",
        "Do not print the file contents in the chat.",
    ])
    return "\n".join(sections).rstrip() + "\n"


def generate_batch_prompt(
    leaf_id: str,
    output_root: Path = DEFAULT_OUTPUT_ROOT,
    leafs_root: Path = DEFAULT_LEAFS_ROOT,
    contract_path: Path = DEFAULT_CONTRACT_PATH,
) -> Path:
    leaf_id = leaf_id.strip().lower().replace(" ", "-").replace("_", "-")
    leaf_dir = leafs_root / leaf_id
    if not leaf_dir.exists():
        raise FileNotFoundError(f"Leaf no existe: {leaf_dir}")

    yaml_context = load_yaml_context(leaf_dir)
    if not yaml_context["magnitudes"] or not yaml_context["formulas"]:
        raise ValueError(
            "Leaf no tiene magnitudes o formulas definidas. "
            f"Magnitudes: {len(yaml_context['magnitudes'])}, "
            f"Formulas: {len(yaml_context['formulas'])}"
        )

    contract = load_contract(contract_path)
    content = build_batch_prompt(leaf_id, yaml_context, contract)
    output_path = output_root / leaf_id / "BATCH_ALL_MD.prompt.md"
    write_text(output_path, content)
    return output_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Genera un prompt maestro para ZIP de archivos markdown.")
    parser.add_argument("--leaf-id", required=True, help="ID del leaf")
    parser.add_argument("--output-root", default=str(DEFAULT_OUTPUT_ROOT))
    parser.add_argument("--leafs-root", default=str(DEFAULT_LEAFS_ROOT))
    parser.add_argument("--contract", default=str(DEFAULT_CONTRACT_PATH))
    args = parser.parse_args()

    try:
        output_path = generate_batch_prompt(
            leaf_id=args.leaf_id,
            output_root=Path(args.output_root),
            leafs_root=Path(args.leafs_root),
            contract_path=Path(args.contract),
        )
    except Exception as exc:
        print(f"[ERROR] {type(exc).__name__}: {exc}")
        raise SystemExit(1)

    print("[OK] Prompt batch generado:")
    print(f"     {output_path}")
    print()
    print("Siguiente paso:")
    print("  Descargar <leaf_id>_md.zip en Downloads/descargas_phyxio/")
    print("  python tools/phyxio_leaf_factory/05_ai_responses/process_zip_response.py --leaf-id <id> --auto-write")


if __name__ == "__main__":
    main()
