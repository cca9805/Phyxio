"""
Genera prompts individuales para los archivos Markdown del leaf.

Objetivo: pedir a la IA exactamente lo que valida la plantilla modular y el
validador, sin reglas contradictorias ni contexto recortado que impida cumplir.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

PROJECT_ROOT = Path(__file__).resolve().parents[3]
FACTORY_ROOT = PROJECT_ROOT / "tools" / "phyxio_leaf_factory"
DEFAULT_LEAFS_ROOT = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n" / "pruebas"
DEFAULT_OUTPUT_ROOT = FACTORY_ROOT / "10_outputs" / "prompts"
DEFAULT_CONTRACT_PATH = FACTORY_ROOT / "02_templates" / "extracted_contract.json"

MD_PROMPT_ORDER = [
    ("06_teoria", "teoria.md", "es"),
    ("07_teoria_en", "teoria.en.md", "en"),
    ("08_modelos", "modelos.md", "es"),
    ("09_modelos_en", "modelos.en.md", "en"),
    ("10_errores", "errores.md", "es"),
    ("11_errores_en", "errores.en.md", "en"),
    ("12_ejemplos", "ejemplos.md", "es"),
    ("13_ejemplos_en", "ejemplos.en.md", "en"),
    ("14_aplicaciones", "aplicaciones.md", "es"),
    ("15_aplicaciones_en", "aplicaciones.en.md", "en"),
    ("16_historia", "historia.md", "es"),
    ("17_historia_en", "historia.en.md", "en"),
]

THEORY_HEADINGS = {
    "es": [
        "## Contexto conceptual",
        "## 🟢 Nivel esencial",
        "## 🔵 Nivel formal",
        "## 🔴 Nivel estructural",
        "## Interpretación física profunda",
        "## Orden de magnitud",
        "## Método de resolución personalizado",
        "## Casos especiales y ejemplo extendido",
        "## Preguntas reales del alumno",
        "## Conexiones transversales y rutas de estudio",
        "## Síntesis final",
    ],
    "en": [
        "## Conceptual context",
        "## 🟢 Essential level",
        "## 🔵 Formal level",
        "## 🔴 Structural level",
        "## Deep physical interpretation",
        "## Order of magnitude",
        "## Personalized resolution method",
        "## Special cases and extended example",
        "## Real student questions",
        "## Cross-cutting connections and study paths",
        "## Final synthesis",
    ],
}

MODELOS_HEADINGS = {
    "es": [
        "## Modelo ideal",
        "## Hipótesis",
        "## Dominio de validez cuantitativo",
        "## Señales de fallo del modelo",
        "## Modelo extendido o alternativo",
        "## Comparación operativa",
    ],
    "en": [
        "## Ideal model",
        "## Hypotheses",
        "## Quantitative validity domain",
        "## Model failure signals",
        "## Extended or alternative model",
        "## Operational comparison",
    ],
}

ERRORES_HEADINGS = {
    "es": [
        "## Errores conceptuales",
        "## Errores de modelo",
        "## Errores matemáticos",
        "## Errores de interpretación",
        "## Regla de autocontrol rápido",
    ],
    "en": [
        "## Conceptual errors",
        "## Model errors",
        "## Mathematical errors",
        "## Interpretation errors",
        "## Quick self-control rule",
    ],
}

EJEMPLOS_HEADINGS = {
    "es": [
        "# Ejemplo tipo examen",
        "## Enunciado",
        "## Datos",
        "## Definición del sistema",
        "## Modelo físico",
        "## Justificación del modelo",
        "## Resolución simbólica",
        "## Sustitución numérica",
        "## Validación dimensional",
        "## Interpretación física",
        "# Ejemplo de aplicación real",
        "## Contexto",
        "## Estimación física",
        "## Interpretación",
    ],
    "en": [
        "# Exam-type example",
        "## Problem statement",
        "## Data",
        "## System definition",
        "## Physical model",
        "## Model justification",
        "## Symbolic solution",
        "## Numerical substitution",
        "## Dimensional validation",
        "## Physical interpretation",
        "# Real-world example",
        "## Context",
        "## Physical estimation",
        "## Interpretation",
    ],
}

HISTORIA_HEADINGS = {
    "es": [
        "## Problema histórico",
        "## Dificultad conceptual previa",
        "## Qué cambió",
        "## Impacto en la física",
        "## Conexión con física moderna",
    ],
    "en": [
        "## Historical problem",
        "## Prior conceptual difficulty",
        "## What changed",
        "## Impact on physics",
        "## Connection with modern physics",
    ],
}


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def load_contract(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {}
    return json.loads(read_text(path))


def load_yaml_context(leaf_dir: Path) -> dict[str, Any]:
    context: dict[str, Any] = {
        "magnitudes": [],
        "formulas": [],
        "leaf_id": leaf_dir.name,
        "nombre_es": leaf_dir.name,
        "nombre_en": leaf_dir.name,
        "pregunta_es": "",
        "pregunta_en": "",
        "descripcion_es": "",
        "descripcion_en": "",
        "graficos": [],
    }
    try:
        import yaml
    except ImportError:
        return context

    meta_path = leaf_dir / "meta.yaml"
    if meta_path.exists():
        try:
            meta = yaml.safe_load(read_text(meta_path))
            if isinstance(meta, dict):
                context["leaf_id"] = meta.get("id") or context["leaf_id"]
                nombre = meta.get("nombre") or {}
                pregunta = meta.get("pregunta_fisica_central") or {}
                context["nombre_es"] = nombre.get("es") or context["nombre_es"] if isinstance(nombre, dict) else context["nombre_es"]
                context["nombre_en"] = nombre.get("en") or context["nombre_en"] if isinstance(nombre, dict) else context["nombre_en"]
                context["pregunta_es"] = pregunta.get("es", "") if isinstance(pregunta, dict) else ""
                context["pregunta_en"] = pregunta.get("en", "") if isinstance(pregunta, dict) else ""
                context["descripcion_es"] = meta.get("descripcion", "")
                context["descripcion_en"] = meta.get("description_en", "")
                context["graficos"] = meta.get("graficos") or []
        except Exception:
            pass

    mags_path = leaf_dir / "magnitudes.yaml"
    if mags_path.exists():
        try:
            data = yaml.safe_load(read_text(mags_path))
            for mag in data.get("magnitudes", []) if isinstance(data, dict) else []:
                if isinstance(mag, dict) and mag.get("id"):
                    nombre = mag.get("nombre") or {}
                    desc = mag.get("descripcion") or {}
                    context["magnitudes"].append({
                        "id": mag.get("id", ""),
                        "symbol": mag.get("symbol", ""),
                        "es": nombre.get("es", "") if isinstance(nombre, dict) else "",
                        "en": nombre.get("en", "") if isinstance(nombre, dict) else "",
                        "desc_es": desc.get("es", "") if isinstance(desc, dict) else "",
                        "desc_en": desc.get("en", "") if isinstance(desc, dict) else "",
                        "role": mag.get("physical_role", ""),
                    })
        except Exception:
            pass

    forms_path = leaf_dir / "formulas.yaml"
    if forms_path.exists():
        try:
            data = yaml.safe_load(read_text(forms_path))
            for form in data.get("formulas", []) if isinstance(data, dict) else []:
                if isinstance(form, dict) and form.get("id"):
                    title = form.get("title") or {}
                    meaning = form.get("physical_meaning") or {}
                    context["formulas"].append({
                        "id": form.get("id", ""),
                        "title_es": title.get("es", "") if isinstance(title, dict) else "",
                        "title_en": title.get("en", "") if isinstance(title, dict) else "",
                        "equation": form.get("equation", ""),
                        "latex": form.get("latex", ""),
                        "meaning_es": meaning.get("es", "") if isinstance(meaning, dict) else "",
                        "meaning_en": meaning.get("en", "") if isinstance(meaning, dict) else "",
                    })
        except Exception:
            pass
    return context


def format_magnitudes(magnitudes: list[dict], lang: str) -> str:
    if not magnitudes:
        return "- (No hay magnitudes cargadas; genera primero magnitudes.yaml)"
    label = "es" if lang == "es" else "en"
    desc = "desc_es" if lang == "es" else "desc_en"
    lines = []
    for mag in magnitudes:
        name = mag.get(label) or mag.get("symbol") or mag["id"]
        extra = mag.get(desc) or mag.get("role", "")
        lines.append(f"- [[{mag['id']}]] | {mag.get('symbol','')} | {name} | {extra}")
    return "\n".join(lines)


def format_formulas(formulas: list[dict], lang: str) -> str:
    if not formulas:
        return "- (No hay formulas cargadas; genera primero formulas.yaml)"
    title_key = "title_es" if lang == "es" else "title_en"
    meaning_key = "meaning_es" if lang == "es" else "meaning_en"
    lines = []
    for form in formulas:
        title = form.get(title_key) or form["id"]
        meaning = form.get(meaning_key) or form.get("equation", "")
        lines.append(f"- {{{{f:{form['id']}}}}} | {title} | {meaning}")
    return "\n".join(lines)


def title_for(ctx: dict[str, Any], lang: str) -> str:
    return ctx["nombre_es"] if lang == "es" else ctx["nombre_en"]


def common_prompt_header(filename: str, lang: str, ctx: dict[str, Any]) -> list[str]:
    question = ctx["pregunta_es"] if lang == "es" else ctx["pregunta_en"]
    description = ctx["descripcion_es"] if lang == "es" else ctx["descripcion_en"]
    language_name = "español" if lang == "es" else "English"
    return [
        f"# PROMPT MD | {filename}",
        "",
        f"Generate `{filename}` for the Phyxio leaf `{ctx['leaf_id']}`.",
        f"Language: {language_name}.",
        "Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.",
        "",
        "Physics target:",
        f"- Leaf title: {title_for(ctx, lang)}",
        f"- Central physical question: {question}",
        f"- Short description: {description}",
        "",
        "Available magnitudes. Use exactly these ids when tagging quantities:",
        format_magnitudes(ctx["magnitudes"], lang),
        "",
        "Available formulas. Use exactly these references when a formula is needed:",
        format_formulas(ctx["formulas"], lang),
        "",
        "Global content rules:",
        "- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.",
        "- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.",
        "- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.",
        "- Do not invent magnitude ids or formula ids.",
        "- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.",
        "- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.",
    ]


def headings_block(headings: list[str]) -> str:
    return "\n".join(headings)


def build_teoria_prompt(leaf_id: str, yaml_context: dict, contract: dict, lang: str = "es") -> str:
    del leaf_id, contract
    return "\n".join(common_prompt_header("teoria.md" if lang == "es" else "teoria.en.md", lang, yaml_context) + [
        "",
        "Required heading structure. Use these headings exactly and in this order:",
        headings_block([f"# {title_for(yaml_context, lang)}", *THEORY_HEADINGS[lang]]),
        "",
        "Section contract:",
        "- Total length: 1200 to 2000 words.",
        "- Conceptual context: qualitative entry point; no equations.",
        "- Respect the template's orientative maximums by section; do not inflate sections with filler.",
        "- Conceptual context: up to about 120 words.",
        "- Essential level: intuitive explanation; no equations with =, <, > or algebraic derivations; HARD RANGE 120-150 words. Do not exceed 150 words.",
        "- Formal level: define the mathematical relations using the available {{f:id}} references; include all core formulas; HARD RANGE 190-260 words.",
        "- Structural level: assumptions, invariants, limits, and model breakdown; no new formulas; HARD RANGE 350-400 words. Never deliver fewer than 350 words.",
        "- Deep physical interpretation: up to about 180 words.",
        "- Order of magnitude: up to about 100 words.",
        "- Personalized resolution method: up to about 150 words.",
        "- Special cases and extended example: up to about 200 words.",
        "- Real student questions: up to about 200 words.",
        "- Cross-cutting connections and study paths: up to about 100 words.",
        "- Final synthesis: up to about 80 words.",
        "- Mandatory cognitive-load self-check before finalizing teoria.md: Essential must be 120-150 words, Formal 190-260 words, Structural 350-400 words. If any count is outside the range, rewrite that section before delivering.",
        "- The Structural level must be at least 2.3 times as long as the Essential level and must contain explicit assumptions, validity limits, boundary cases, invariants, failure conditions, and links to the graph/model reading.",
        "- Deep physical interpretation: explain what the quantities mean physically, not just how to calculate them.",
        "- Order of magnitude: include realistic scales or inequalities using magnitudes from the leaf.",
        "- Personalized resolution method: give a reusable problem-solving sequence.",
        "- Special cases and extended example: discuss limiting or boundary cases.",
        "- Real student questions: questions and answers without equations in headings.",
        "- Cross-cutting connections and study paths: connect to neighboring physics ideas without changing topic.",
        "- Final synthesis: conceptual closing, no formulas.",
    ])


def build_modelos_prompt(leaf_id: str, yaml_context: dict, contract: dict, lang: str = "es") -> str:
    del leaf_id, contract
    return "\n".join(common_prompt_header("modelos.md" if lang == "es" else "modelos.en.md", lang, yaml_context) + [
        "",
        "Required heading structure. Use these headings exactly and in this order:",
        headings_block([f"# {title_for(yaml_context, lang)}", *MODELOS_HEADINGS[lang]]),
        "",
        "Section contract:",
        "- Total length: 400 to 750 words.",
        "- Ideal model: qualitative description of the simplified model.",
        "- Hypotheses: explicit list of assumptions and the consequence of violating each one.",
        "- Quantitative validity domain: include concrete inequalities, ranges, or order-of-magnitude criteria.",
        "- Model failure signals: observable signs that the simple model is no longer enough.",
        "- Extended or alternative model: state when it is appropriate to switch model and why.",
        "- Operational comparison: include a compact comparison table.",
    ])


def build_errores_prompt(leaf_id: str, yaml_context: dict, contract: dict, lang: str = "es") -> str:
    del leaf_id, contract
    subsections = [
        "**Por qué parece correcto**" if lang == "es" else "**Why it seems correct**",
        "**Por qué es incorrecto**" if lang == "es" else "**Why it is incorrect**",
        "**Señal de detección**" if lang == "es" else "**Detection signal**",
        "**Corrección conceptual**" if lang == "es" else "**Conceptual correction**",
        "**Mini-ejemplo de contraste**" if lang == "es" else "**Mini-example of contrast**",
    ]
    return "\n".join(common_prompt_header("errores.md" if lang == "es" else "errores.en.md", lang, yaml_context) + [
        "",
        "Required heading structure. Use these headings exactly and in this order:",
        headings_block([f"# {title_for(yaml_context, lang)}", *ERRORES_HEADINGS[lang]]),
        "",
        "Error structure:",
        "- Write at least 2 specific errors in each of the first four categories.",
        "- Each error must start with `### Error N: ...`.",
        "- Each error must contain these five blocks, exactly:",
        headings_block(subsections),
        "",
        "Quality rules:",
        "- Total length: at least 500 words for Spanish, at least 300 words for English.",
        "- Avoid cloned paragraphs. Each error must have a distinct cause, detection signal, and contrast example.",
        "- Do not repeat the same explanation with only the magnitude names changed.",
        "- The quick self-control rule must be short, operational, and specific to the leaf.",
    ])


def build_ejemplos_prompt(leaf_id: str, yaml_context: dict, contract: dict, lang: str = "es") -> str:
    del leaf_id, contract
    return "\n".join(common_prompt_header("ejemplos.md" if lang == "es" else "ejemplos.en.md", lang, yaml_context) + [
        "",
        "Required heading structure. Use these headings exactly and in this order:",
        headings_block(EJEMPLOS_HEADINGS[lang]),
        "",
        "Content contract:",
        "- Total length: at least 800 words.",
        "- Exam-type example: complete problem with data, system definition, model, symbolic solution, numerical substitution, dimensional validation, and physical interpretation.",
        "- Data section: use ':' for listed data; avoid `[[id]] = value` patterns.",
        "- System definition and model justification: each should be substantial and physically specific.",
        "- Symbolic solution: use all relevant {{f:id}} formula references on their own lines and explain each step.",
        "- Dimensional validation: check the dimensions explicitly.",
        "- Physical interpretation must be substantial: at least 90 words in Spanish or 90 words in English. It must include at least three of these exact English marker words when writing English: means, indicates, this implies, therefore, increases, decreases, depends, physically.",
        "- Physical estimation must be substantial: at least 80 words in Spanish or 90 words in English. It must include at least three of these exact English marker words when writing English: order, estimate, approximate, scale, magnitude, reasonable value.",
        "- Real-world example: realistic context, approximate numerical estimate, and physical reading.",
        "- For English files, do not shorten the interpretation or estimation sections; they must be semantically as strong as the Spanish version.",
        "- Use values and units that are plausible for the physics domain.",
        "- Mandatory English example self-check: before finalizing ejemplos.en.md, verify that `## Physical interpretation` contains causal physics marker words and that `## Physical estimation` contains quantitative-estimation marker words. If not, rewrite those sections.",
    ])


def build_aplicaciones_prompt(leaf_id: str, yaml_context: dict, contract: dict, lang: str = "es") -> str:
    del leaf_id, contract
    heading = "# Aplicaciones" if lang == "es" else "# Applications"
    variable = "Variable dominante" if lang == "es" else "Dominant variable"
    limit = "Límite de validez" if lang == "es" else "Validity limit"
    return "\n".join(common_prompt_header("aplicaciones.md" if lang == "es" else "aplicaciones.en.md", lang, yaml_context) + [
        "",
        "Required structure:",
        heading,
        "## 1. ...",
        "## 2. ...",
        "## 3. ...",
        "## 4. ...",
        "## 5. ...",
        "",
        "For each of the 5 applications include these marker lines exactly:",
        f"{variable}: [[id]]",
        f"{limit}: concrete condition, range, or inequality",
        "",
        "Content contract:",
        "- Total length: at least 800 words, about 160+ words per application.",
        "- Applications must cover different contexts, not five versions of the same case.",
        "- Each application must explain what is measured, predicted, or constrained.",
        "- Mention relevant magnitudes with [[id]] and avoid unsupported formula ids.",
    ])


def build_historia_prompt(leaf_id: str, yaml_context: dict, contract: dict, lang: str = "es") -> str:
    del leaf_id, contract
    return "\n".join(common_prompt_header("historia.md" if lang == "es" else "historia.en.md", lang, yaml_context) + [
        "",
        "Required heading structure. Use these headings exactly and in this order:",
        headings_block([f"# {title_for(yaml_context, lang)}", *HISTORIA_HEADINGS[lang]]),
        "",
        "Content contract:",
        "- Total length: at least 300 words for Spanish and at least 250 words for English.",
        "- This is not a chronology list. Explain the historical problem, the conceptual obstacle, what changed, and why it mattered.",
        "- Connect the history back to the modern physical interpretation of this leaf.",
    ])


def build_prompt_for_file(leaf_id: str, filename: str, yaml_context: dict, contract: dict) -> str:
    lang = "en" if filename.endswith(".en.md") else "es"
    if filename.startswith("teoria"):
        return build_teoria_prompt(leaf_id, yaml_context, contract, lang)
    if filename.startswith("modelos"):
        return build_modelos_prompt(leaf_id, yaml_context, contract, lang)
    if filename.startswith("errores"):
        return build_errores_prompt(leaf_id, yaml_context, contract, lang)
    if filename.startswith("ejemplos"):
        return build_ejemplos_prompt(leaf_id, yaml_context, contract, lang)
    if filename.startswith("aplicaciones"):
        return build_aplicaciones_prompt(leaf_id, yaml_context, contract, lang)
    if filename.startswith("historia"):
        return build_historia_prompt(leaf_id, yaml_context, contract, lang)
    return "\n".join(common_prompt_header(filename, lang, yaml_context))


def generate_all_md_prompts(
    leaf_id: str,
    output_root: Path = DEFAULT_OUTPUT_ROOT,
    leafs_root: Path = DEFAULT_LEAFS_ROOT,
    contract_path: Path = DEFAULT_CONTRACT_PATH,
) -> list[Path]:
    leaf_id = leaf_id.strip().lower().replace(" ", "-").replace("_", "-")
    leaf_dir = leafs_root / leaf_id
    if not leaf_dir.exists():
        raise FileNotFoundError(f"Leaf no existe: {leaf_dir}")

    yaml_context = load_yaml_context(leaf_dir)
    contract = load_contract(contract_path)
    output_dir = output_root / leaf_id
    output_dir.mkdir(parents=True, exist_ok=True)

    generated: list[Path] = []
    for prefix, filename, _lang in MD_PROMPT_ORDER:
        if not yaml_context["magnitudes"] or not yaml_context["formulas"]:
            content = (
                f"# PROMPT MD | {filename}\n\n"
                "NO LISTO: primero completa magnitudes.yaml y formulas.yaml.\n"
                f"Magnitudes detectadas: {len(yaml_context['magnitudes'])}\n"
                f"Formulas detectadas: {len(yaml_context['formulas'])}\n"
            )
        else:
            content = build_prompt_for_file(leaf_id, filename, yaml_context, contract)
        output_path = output_dir / f"{prefix}_{filename.replace('.', '_')}.prompt.md"
        write_text(output_path, content)
        generated.append(output_path)
    return generated


def main() -> None:
    parser = argparse.ArgumentParser(description="Genera prompts individuales para archivos Markdown del leaf.")
    parser.add_argument("--leaf-id", required=True, help="ID del leaf")
    parser.add_argument("--output-root", default=str(DEFAULT_OUTPUT_ROOT))
    parser.add_argument("--leafs-root", default=str(DEFAULT_LEAFS_ROOT))
    parser.add_argument("--contract", default=str(DEFAULT_CONTRACT_PATH))
    args = parser.parse_args()

    try:
        generated = generate_all_md_prompts(
            leaf_id=args.leaf_id,
            output_root=Path(args.output_root),
            leafs_root=Path(args.leafs_root),
            contract_path=Path(args.contract),
        )
    except Exception as exc:
        print(f"[ERROR] {type(exc).__name__}: {exc}")
        raise SystemExit(1)

    print(f"[OK] Generados {len(generated)} prompts markdown:")
    for path in generated:
        print(f"  - {path.name}")


if __name__ == "__main__":
    main()
