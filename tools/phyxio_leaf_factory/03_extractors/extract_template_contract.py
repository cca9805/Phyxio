import argparse
import ast
import json
import re
import sys
from pathlib import Path
from typing import Any


CURRENT_FILE = Path(__file__).resolve()
FACTORY_ROOT = CURRENT_FILE.parents[1]

if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from config import (
    DEFAULT_TEMPLATE_ROOT,
    DEFAULT_VALIDATOR_ROOT,
    FACTORY_ROOT,
    REQUIRED_LEAF_FILES,
)


YAML_EXTENSIONS = {".yaml", ".yml"}
MARKDOWN_EXTENSIONS = {".md"}


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def write_json(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def normalize_path(path: Path) -> str:
    return str(path).replace("\\", "/")


def find_files(root: Path, extensions: set[str]) -> list[Path]:
    if not root.exists():
        return []

    ignored_parts = {
        ".git",
        "__pycache__",
        ".venv",
        "node_modules",
        "dist",
        "build",
    }

    result = []

    for path in root.rglob("*"):
        if not path.is_file():
            continue

        if any(part in ignored_parts for part in path.parts):
            continue

        if path.suffix.lower() in extensions:
            result.append(path)

    return sorted(result)


def extract_markdown_headings(text: str) -> list[dict[str, Any]]:
    headings = []

    for line_number, line in enumerate(text.splitlines(), start=1):
        match = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if not match:
            continue

        headings.append(
            {
                "level": len(match.group(1)),
                "title": match.group(2).strip(),
                "line": line_number,
            }
        )

    return headings


def extract_todo_tokens(text: str) -> list[str]:
    tokens = sorted(set(re.findall(r"\bTODO[_A-Z0-9ÁÉÍÓÚÜÑ-]*\b", text)))
    return tokens


def extract_formula_refs(text: str) -> list[str]:
    return sorted(set(re.findall(r"\{\{f:([a-zA-Z0-9_\-]+)\}\}", text)))


def extract_magnitude_refs(text: str) -> list[str]:
    return sorted(set(re.findall(r"\[\[([a-zA-Z0-9_\-]+)\]\]", text)))


def sanitize_extracted_yaml_structure(text: str) -> str:
    """
    Limpia estructuras YAML extraídas de la plantilla.

    Elimina líneas decorativas tipo:
    ###ESTRUCTURA OBLIGATORIA META###

    Mantiene intacto el YAML real.
    """
    cleaned = []

    for line in text.splitlines():
        stripped = line.strip()

        if not stripped:
            cleaned.append("")
            continue

        if stripped.startswith("###") and stripped.endswith("###"):
            continue

        if stripped.startswith("<!--") and stripped.endswith("-->"):
            continue

        cleaned.append(line.rstrip())

    result = "\n".join(cleaned)

    result = re.sub(r"\n{3,}", "\n\n", result)
    result = re.sub(
        r"(:)\n\n(\s+[a-zA-Z_][a-zA-Z0-9_\-]*\s*:)",
        r":\n\2",
        result,
    )

    return result.strip() + "\n"


def extract_yaml_structure_from_text(text: str) -> dict[str, Any]:
    """
    Extrae el bloque YAML marcado con:

    <!-- EXTRACT-STRUCTURE-YAML -->
    ```yaml
    ...
    ```
    """
    match = re.search(
        r"<!--\s*EXTRACT-STRUCTURE-YAML\s*-->\s*```yaml\s*(.*?)```",
        text,
        re.DOTALL | re.IGNORECASE,
    )

    if not match:
        return {}

    yaml_block = match.group(1).strip()
    yaml_block = sanitize_extracted_yaml_structure(yaml_block)

    return {
        "yaml_structure": yaml_block,
        "source": "EXTRACT-STRUCTURE-YAML",
    }


def extract_headings_from_comments(text: str) -> dict[str, list[str]]:
    """Extrae encabezados de comentarios HTML como <!-- EXTRACT-HEADINGS-ES: titulo1, titulo2 -->"""
    result = {"es": [], "en": []}

    for lang in ["ES", "EN"]:
        pattern = rf"<!--\s*EXTRACT-HEADINGS-{lang}:\s*(.+?)\s*-->"
        matches = re.findall(pattern, text, re.IGNORECASE)
        for match in matches:
            headings = [h.strip() for h in match.split(",")]
            result[lang.lower()].extend(headings)

    return result


def extract_section_rules(text: str) -> dict[str, Any]:
    """
    Extrae reglas de validación específicas por sección de la plantilla markdown.
    Busca patrones como:
    - Presupuestos de palabras
    - Patrones prohibidos (PROHIBIDO, RECHAZO DURO)
    - Requisitos mínimos por sección
    - Estructuras anidadas obligatorias
    """
    rules = {
        "word_budgets": {},  # {section: (min, max)}
        "forbidden_patterns": {},  # {section: [patterns]}
        "required_patterns": {},  # {section: [patterns]}
        "nested_structure": {},  # {section: {subheadings: [], required_fields: []}}
        "general_rules": [],  # Reglas que aplican a todo el archivo
    }

    lines = text.splitlines()
    current_section = None
    in_error_block = False
    error_template = {}

    for i, line in enumerate(lines):
        stripped = line.strip()

        # Detectar secciones principales (## heading)
        if stripped.startswith("## ") and not stripped.startswith("## **"):
            current_section = stripped[3:].strip()
            in_error_block = False

        # Detectar estructura de errores (### Error X: ...)
        if stripped.startswith("### Error ") and ":" in stripped:
            in_error_block = True
            error_template = {
                "type": "error_block",
                "required_subsections": [
                    "**Por qué parece correcto**",
                    "**Por qué es incorrecto**",
                    "**Señal de detección**",
                    "**Corrección conceptual**",
                    "**Mini-ejemplo de contraste**",
                ]
            }
            if current_section:
                if current_section not in rules["nested_structure"]:
                    rules["nested_structure"][current_section] = []
                rules["nested_structure"][current_section].append(error_template)

        # Extraer presupuestos de palabras
        if "palabras" in stripped.lower() or "words" in stripped.lower():
            # Patrones: "100-200 palabras", "mínimo 2 párrafos", "rango: 250-400"
            budget_match = re.search(r'(\d+)\s*-\s*(\d+)\s*(?:palabras|words)', stripped, re.IGNORECASE)
            if budget_match and current_section:
                min_words, max_words = int(budget_match.group(1)), int(budget_match.group(2))
                rules["word_budgets"][current_section] = (min_words, max_words)

            min_words_match = re.search(r'm[íi]nimo\s+(\d+)\s*(?:palabras|words)', stripped, re.IGNORECASE)
            if min_words_match and current_section:
                min_w = int(min_words_match.group(1))
                if current_section not in rules["word_budgets"]:
                    rules["word_budgets"][current_section] = (min_w, None)
                else:
                    _, max_w = rules["word_budgets"][current_section]
                    rules["word_budgets"][current_section] = (min_w, max_w)

        # Extraer patrones prohibidos
        if "PROHIBIDO" in stripped or "RECHAZO DURO" in stripped or "prohibido" in stripped.lower():
            # Buscar menciones de caracteres o patrones específicos
            forbidden_mentions = []
            if "`=`" in stripped or "signo =" in stripped.lower():
                forbidden_mentions.append("character_=")
            if "`^`" in stripped or "signo ^" in stripped.lower():
                forbidden_mentions.append("character_^")
            if "[[magnitud]] =" in stripped:
                forbidden_mentions.append("pattern_[[id]]=value")
            if "{{f:" in stripped and "inline" in stripped.lower():
                forbidden_mentions.append("inline_formula_ref")
            if "LaTeX" in stripped and any(op in stripped for op in ["=", "\\approx", "<", ">"]):
                forbidden_mentions.append("latex_with_operators")

            if forbidden_mentions and current_section:
                if current_section not in rules["forbidden_patterns"]:
                    rules["forbidden_patterns"][current_section] = []
                rules["forbidden_patterns"][current_section].extend(forbidden_mentions)

        # Extraer patrones requeridos
        if "debe contener" in stripped.lower() or "must contain" in stripped.lower() or "obligatorio" in stripped.lower():
            required_mentions = []
            if "{{f:" in stripped:
                required_mentions.append("formula_refs")
            if "[[" in stripped and "]]" in stripped:
                required_mentions.append("magnitude_refs")
            if "< número" in stripped or "> número" in stripped or "orden de magnitud" in stripped.lower():
                required_mentions.append("quantitative_pattern")
            if "cuando conviene" in stripped.lower() or "transición" in stripped.lower():
                required_mentions.append("transition_vocabulary")

            if required_mentions and current_section:
                if current_section not in rules["required_patterns"]:
                    rules["required_patterns"][current_section] = []
                rules["required_patterns"][current_section].extend(required_mentions)

    return {k: v for k, v in rules.items() if v}


def extract_possible_yaml_keys_from_text(text: str) -> list[str]:
    keys = set()

    for line in text.splitlines():
        clean = line.strip()

        if not clean:
            continue

        if clean.startswith("#"):
            continue

        match = re.match(r"^-?\s*([a-zA-Z_][a-zA-Z0-9_\-]*)\s*:", clean)
        if match:
            keys.add(match.group(1))

    return sorted(keys)


def extract_possible_yaml_paths_from_text(text: str) -> list[str]:
    """
    Extracts approximate YAML key paths from indentation.

    It is intentionally conservative. This does not replace a schema validator.
    It is used to build a contract map from templates.
    """
    paths = []
    stack: list[tuple[int, str]] = []

    for line in text.splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue

        match = re.match(
            r"^(\s*)-?\s*(<target_id>|[a-zA-Z_][a-zA-Z0-9_\-]*)\s*:",
            line,
        )
        if not match:
            continue

        indent = len(match.group(1))
        key = match.group(2)

        if key == "<target_id>":
            key = "target_id"

        while stack and stack[-1][0] >= indent:
            stack.pop()

        stack.append((indent, key))
        paths.append(".".join(item[1] for item in stack))

    return sorted(set(paths))


def extract_python_string_literals(text: str) -> list[str]:
    literals = set()

    try:
        tree = ast.parse(text)
    except SyntaxError:
        return []

    for node in ast.walk(tree):
        if isinstance(node, ast.Constant) and isinstance(node.value, str):
            value = node.value.strip()
            if value:
                literals.add(value)

    return sorted(literals)


def extract_validator_required_signals(validator_root: Path) -> dict[str, Any]:
    """
    The validator is the customs gate.

    This extractor does not try to understand the whole validator.
    It harvests useful signals:
    - mentioned required leaf filenames
    - mentioned YAML field names
    - mentioned Markdown section titles
    - validator fail/warning labels
    - string literals that look like schema keys
    """
    py_files = find_files(validator_root, {".py"})

    mentioned_files = set()
    possible_field_names = set()
    possible_markdown_sections = set()
    fail_labels = set()
    raw_matches = []

    required_file_set = set(REQUIRED_LEAF_FILES)

    key_like_pattern = re.compile(r"^[a-zA-Z_][a-zA-Z0-9_\-]*$")
    section_like_pattern = re.compile(
        r"^[A-ZÁÉÍÓÚÜÑa-záéíóúüñ0-9][^{}\[\]\n]{2,80}$"
    )

    for py_file in py_files:
        text = read_text(py_file)
        rel = normalize_path(py_file.relative_to(validator_root))

        for filename in REQUIRED_LEAF_FILES:
            if filename in text:
                mentioned_files.add(filename)
                raw_matches.append(
                    {
                        "source": rel,
                        "type": "required_file_mention",
                        "value": filename,
                    }
                )

        for label in re.findall(r"\b(?:FAIL|WARNING|ERROR|OK)[:_\-][A-Za-z0-9_\-]+", text):
            fail_labels.add(label)

        literals = extract_python_string_literals(text)

        for literal in literals:
            if literal in required_file_set:
                mentioned_files.add(literal)
                raw_matches.append(
                    {
                        "source": rel,
                        "type": "required_file_literal",
                        "value": literal,
                    }
                )

            if key_like_pattern.match(literal):
                possible_field_names.add(literal)

            if (
                section_like_pattern.match(literal)
                and " " in literal
                and not literal.lower().endswith((".yaml", ".md", ".py"))
            ):
                possible_markdown_sections.add(literal)

    return {
        "validator_root": normalize_path(validator_root),
        "python_files_scanned": [
            normalize_path(path.relative_to(validator_root)) for path in py_files
        ],
        "mentioned_required_files": sorted(mentioned_files),
        "possible_field_names": sorted(possible_field_names),
        "possible_markdown_sections": sorted(possible_markdown_sections),
        "fail_labels": sorted(fail_labels),
        "raw_matches": raw_matches,
    }


def classify_template_file(path: Path) -> str | None:
    name = path.name.lower()

    for required in REQUIRED_LEAF_FILES:
        if name == required.lower():
            return required

    # Common template naming variants.
    for required in REQUIRED_LEAF_FILES:
        stem = required.lower()
        variants = {
            stem,
            stem.replace(".yaml", ".template.yaml"),
            stem.replace(".yaml", ".example.yaml"),
            stem.replace(".md", ".template.md"),
            stem.replace(".md", ".example.md"),
        }

        if name in variants:
            return required

    # Phyxio v5: archivos de documentacion con sufijo _yaml.md o _en_md.md
    # Ej: meta_yaml.md -> meta.yaml, teoria_en_md.md -> teoria.en.md
    yaml_doc_pattern = re.compile(r"^(\w+)_yaml\.md$")
    md_en_doc_pattern = re.compile(r"^(\w+)_en_md\.md$")
    md_doc_pattern = re.compile(r"^(\w+)_md\.md$")

    yaml_match = yaml_doc_pattern.match(name)
    if yaml_match:
        base = yaml_match.group(1)
        yaml_mapping = {
            "meta": "meta.yaml",
            "magnitudes": "magnitudes.yaml",
            "formulas": "formulas.yaml",
            "interpretacion": "interpretacion.yaml",
            "graficos": "graficos.yaml",
        }
        if base in yaml_mapping:
            return yaml_mapping[base]

    md_en_match = md_en_doc_pattern.match(name)
    if md_en_match:
        base = md_en_match.group(1)
        known_md_bases = {"teoria", "modelos", "errores", "ejemplos", "aplicaciones", "historia"}
        if base in known_md_bases:
            return f"{base}.en.md"
        return None

    md_match = md_doc_pattern.match(name)
    if md_match:
        base = md_match.group(1)
        known_md_bases = {"teoria", "modelos", "errores", "ejemplos", "aplicaciones", "historia"}
        if base in known_md_bases:
            return f"{base}.md"
        return None

    # Loose detection (fallback).
    if "meta" in name and path.suffix.lower() in YAML_EXTENSIONS:
        return "meta.yaml"
    if "magnitudes" in name and path.suffix.lower() in YAML_EXTENSIONS:
        return "magnitudes.yaml"
    if "formulas" in name and path.suffix.lower() in YAML_EXTENSIONS:
        return "formulas.yaml"
    if "interpretacion" in name and path.suffix.lower() in YAML_EXTENSIONS:
        return "interpretacion.yaml"

    markdown_bases = [
        "teoria",
        "modelos",
        "errores",
        "ejemplos",
        "aplicaciones",
        "historia",
    ]

    for base in markdown_bases:
        if base in name and path.suffix.lower() in MARKDOWN_EXTENSIONS:
            if ".en." in name or name.endswith(".en.md") or "english" in name:
                return f"{base}.en.md"
            return f"{base}.md"

    return None


def extract_template_signals(template_root: Path) -> dict[str, Any]:
    yaml_files = find_files(template_root, YAML_EXTENSIONS)
    md_files = find_files(template_root, MARKDOWN_EXTENSIONS)

    files_by_required_name: dict[str, list[dict[str, Any]]] = {
        filename: [] for filename in REQUIRED_LEAF_FILES
    }

    all_template_files = yaml_files + md_files

    for file_path in all_template_files:
        text = read_text(file_path)
        rel = normalize_path(file_path.relative_to(template_root))
        required_name = classify_template_file(file_path)

        entry = {
            "path": rel,
            "suffix": file_path.suffix.lower(),
            "todo_tokens": extract_todo_tokens(text),
            "formula_refs": extract_formula_refs(text),
            "magnitude_refs": extract_magnitude_refs(text),
        }

        if file_path.suffix.lower() in YAML_EXTENSIONS:
            entry["possible_yaml_keys"] = extract_possible_yaml_keys_from_text(text)
            entry["possible_yaml_paths"] = extract_possible_yaml_paths_from_text(text)

        if file_path.suffix.lower() in MARKDOWN_EXTENSIONS:
            entry["headings"] = extract_markdown_headings(text)

            # Para archivos _yaml.md, extraer bloque YAML estructurado
            if file_path.name.lower().endswith("_yaml.md"):
                entry["yaml_structure"] = extract_yaml_structure_from_text(text)

            # Extraer encabezados de comentarios HTML
            headings_from_comments = extract_headings_from_comments(text)
            if headings_from_comments["es"] or headings_from_comments["en"]:
                entry["headings_from_comments"] = headings_from_comments

            # Extraer reglas de validación por sección
            section_rules = extract_section_rules(text)
            if section_rules:
                entry["section_rules"] = section_rules

        if required_name:
            files_by_required_name[required_name].append(entry)

    missing_template_matches = [
        filename for filename, matches in files_by_required_name.items() if not matches
    ]

    return {
        "template_root": normalize_path(template_root),
        "yaml_files_scanned": [
            normalize_path(path.relative_to(template_root)) for path in yaml_files
        ],
        "markdown_files_scanned": [
            normalize_path(path.relative_to(template_root)) for path in md_files
        ],
        "files_by_required_name": files_by_required_name,
        "missing_template_matches": missing_template_matches,
    }


def build_yaml_contract(template_signals: dict[str, Any]) -> dict[str, Any]:
    yaml_contract = {}

    for filename in ["meta.yaml", "magnitudes.yaml", "formulas.yaml", "interpretacion.yaml", "graficos.yaml"]:
        matches = template_signals["files_by_required_name"].get(filename, [])

        keys = set()
        paths = set()
        todo_tokens = set()
        source_templates = []
        structures = []

        for match in matches:
            source_templates.append(match["path"])

            yaml_structure = match.get("yaml_structure", {})

            if yaml_structure and "yaml_structure" in yaml_structure:
                structure = yaml_structure["yaml_structure"]

                structures.append(
                    {
                        "source": match["path"],
                        "marker": yaml_structure.get("source", "EXTRACT-STRUCTURE-YAML"),
                        "content": structure,
                    }
                )

                keys.update(extract_possible_yaml_keys_from_text(structure))
                paths.update(extract_possible_yaml_paths_from_text(structure))
            else:
                keys.update(match.get("possible_yaml_keys", []))
                paths.update(match.get("possible_yaml_paths", []))

            todo_tokens.update(match.get("todo_tokens", []))

        yaml_contract[filename] = {
            "source_templates": source_templates,
            "possible_required_keys": sorted(keys),
            "possible_required_paths": sorted(paths),
            "yaml_structures": structures,
            "todo_tokens": sorted(todo_tokens),
        }

    return yaml_contract


def build_markdown_contract(template_signals: dict[str, Any]) -> dict[str, Any]:
    markdown_contract = {}

    for filename in [
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
    ]:
        matches = template_signals["files_by_required_name"].get(filename, [])

        headings = []
        todo_tokens = set()
        source_templates = []
        section_rules = {}
        all_nested_structures = {}

        for match in matches:
            source_templates.append(match["path"])

            # Priorizar encabezados de comentarios HTML si existen
            if "headings_from_comments" in match:
                lang = "es" if ".es." in filename or not ".en." in filename else "en"
                comment_headings = match["headings_from_comments"].get(lang, [])
                if comment_headings:
                    headings.extend([{"level": 2, "title": h, "source": "comment"} for h in comment_headings])

            # Fallback a encabezados extraídos del texto
            if not headings:
                headings.extend(match.get("headings", []))

            todo_tokens.update(match.get("todo_tokens", []))

            # Extraer reglas de sección
            if "section_rules" in match:
                rules = match["section_rules"]
                # Merge word budgets
                if "word_budgets" in rules:
                    section_rules.setdefault("word_budgets", {}).update(rules["word_budgets"])
                # Merge forbidden patterns
                if "forbidden_patterns" in rules:
                    for section, patterns in rules["forbidden_patterns"].items():
                        section_rules.setdefault("forbidden_patterns", {}).setdefault(section, []).extend(patterns)
                # Merge required patterns
                if "required_patterns" in rules:
                    for section, patterns in rules["required_patterns"].items():
                        section_rules.setdefault("required_patterns", {}).setdefault(section, []).extend(patterns)
                # Merge nested structures
                if "nested_structure" in rules:
                    all_nested_structures.update(rules["nested_structure"])

        contract_entry = {
            "source_templates": source_templates,
            "required_headings_candidates": headings,
            "todo_tokens": sorted(todo_tokens),
        }

        if section_rules:
            contract_entry["section_rules"] = section_rules
        if all_nested_structures:
            contract_entry["nested_structure"] = all_nested_structures

        markdown_contract[filename] = contract_entry

    return markdown_contract


def build_contract(template_root: Path, validator_root: Path) -> dict[str, Any]:
    if not template_root.exists():
        raise FileNotFoundError(f"No existe la plantilla: {template_root}")

    if not validator_root.exists():
        raise FileNotFoundError(f"No existe el validador: {validator_root}")

    template_signals = extract_template_signals(template_root)
    validator_signals = extract_validator_required_signals(validator_root)

    required_files_from_template = [
        filename
        for filename in REQUIRED_LEAF_FILES
        if template_signals["files_by_required_name"].get(filename)
    ]

    required_files_from_validator = validator_signals["mentioned_required_files"]

    unresolved_required_files = sorted(
        set(REQUIRED_LEAF_FILES)
        - set(required_files_from_template)
        - set(required_files_from_validator)
    )

    contract = {
        "contract_version": 1,
        "factory_rule": (
            "La plantilla define el molde. El validador modular es la autoridad final. "
            "Si hay contradicción, se ajusta la factory al validador."
        ),
        "sources": {
            "template_root": normalize_path(template_root),
            "validator_root": normalize_path(validator_root),
        },
        "required_files": REQUIRED_LEAF_FILES,
        "required_files_detected": {
            "from_template": required_files_from_template,
            "from_validator": required_files_from_validator,
            "unresolved": unresolved_required_files,
        },
        "yaml_files": build_yaml_contract(template_signals),
        "markdown_files": build_markdown_contract(template_signals),
        "special_rules": {
            "formula_reference_pattern": "{{f:id}}",
            "magnitude_reference_pattern": "[[id]]",
            "formula_references_must_be_isolated": True,
            "requires_english_pair": True,
            "initial_leaf_root": "frontend/src/data_v2_i18n/pruebas/{leaf_id}",
            "promotion_requires_explicit_command": True,
        },
        "template_signals": template_signals,
        "validator_signals": validator_signals,
    }

    return contract


def print_summary(contract: dict[str, Any]) -> None:
    detected = contract["required_files_detected"]

    print()
    print("PHYXIO TEMPLATE CONTRACT EXTRACTION")
    print("=" * 40)
    print(f"Plantilla: {contract['sources']['template_root']}")
    print(f"Validador: {contract['sources']['validator_root']}")
    print()

    print("Archivos obligatorios:")
    for filename in contract["required_files"]:
        in_template = filename in detected["from_template"]
        in_validator = filename in detected["from_validator"]

        marks = []
        if in_template:
            marks.append("template")
        if in_validator:
            marks.append("validator")

        if not marks:
            marks.append("NO_DETECTADO")

        print(f" - {filename}: {', '.join(marks)}")

    print()

    if detected["unresolved"]:
        print("[WARNING] Archivos no detectados ni en plantilla ni en validador:")
        for filename in detected["unresolved"]:
            print(f" - {filename}")
    else:
        print("[OK] Todos los archivos obligatorios tienen señal en plantilla o validador.")

    print()

    print("YAML detectado:")
    for filename, info in contract["yaml_files"].items():
        print(f" - {filename}: {len(info['possible_required_paths'])} rutas/campos candidatos")

    print()

    print("Markdown detectado:")
    for filename, info in contract["markdown_files"].items():
        print(f" - {filename}: {len(info['required_headings_candidates'])} encabezados candidatos")


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Extrae un contrato interno desde plantilla_v5_modular y validator_modular."
        )
    )

    parser.add_argument(
        "--template-root",
        default=str(DEFAULT_TEMPLATE_ROOT),
        help="Ruta a plantilla_v5_modular. Por defecto: docsV2/plantilla_v5_modular",
    )

    parser.add_argument(
        "--validator-root",
        default=str(DEFAULT_VALIDATOR_ROOT),
        help="Ruta a validator_modular. Por defecto: tools/validator_modular",
    )

    parser.add_argument(
        "--output",
        default=str(FACTORY_ROOT / "02_templates" / "extracted_contract.json"),
        help="Ruta de salida del contrato JSON.",
    )

    args = parser.parse_args()

    template_root = Path(args.template_root).resolve()
    validator_root = Path(args.validator_root).resolve()
    output_path = Path(args.output).resolve()

    contract = build_contract(
        template_root=template_root,
        validator_root=validator_root,
    )

    write_json(output_path, contract)
    print_summary(contract)

    print()
    print("[OK] Contrato extraído:")
    print(output_path)


if __name__ == "__main__":
    main()