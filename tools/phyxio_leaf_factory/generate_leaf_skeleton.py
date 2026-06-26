import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any


CURRENT_FILE = Path(__file__).resolve()
FACTORY_ROOT = CURRENT_FILE.parent

if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from config import REQUIRED_LEAF_FILES
from ruta_leaf import get_current_leaf_path, require_leaf_id, require_leaf_name


YAML_FILES = {
    "meta.yaml",
    "magnitudes.yaml",
    "formulas.yaml",
    "interpretacion.yaml",
    "graficos.yaml",
}

MARKDOWN_FILES = {
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
}


DEFAULT_CONTRACT_PATH = FACTORY_ROOT / "02_templates" / "extracted_contract.json"



def find_map_candidates() -> list[Path]:
    project_root = FACTORY_ROOT.parents[1]

    return [
        # Ruta real actual del mapa V2
        project_root / "frontend" / "src" / "v2" / "map" / "phyxio-map.yaml",

        # Rutas alternativas por si en el futuro cambia
        project_root / "frontend" / "src" / "data_v2_i18n" / "phyxio-map.yaml",
        project_root / "frontend" / "src" / "data_v2_i18n" / "map.yaml",
        project_root / "frontend" / "src" / "data_v2_i18n" / "index.yaml",
        project_root / "frontend" / "src" / "data_v2" / "phyxio-map.yaml",
        project_root / "frontend" / "src" / "data_v2" / "map.yaml",
        project_root / "frontend" / "src" / "data_v2" / "index.yaml",
    ]


def try_load_yaml(path: Path) -> Any:
    try:
        import yaml
    except ImportError:
        return None

    if not path.exists():
        return None

    try:
        return yaml.safe_load(path.read_text(encoding="utf-8"))
    except Exception:
        return None


def iter_nested_items(value: Any):
    if isinstance(value, dict):
        yield value

        for child in value.values():
            yield from iter_nested_items(child)

    elif isinstance(value, list):
        for item in value:
            yield from iter_nested_items(item)


def pick_localized_value(value: Any, lang: str) -> str | None:
    if isinstance(value, dict):
        selected = (
            value.get(lang)
            or value.get("es" if lang == "es" else "en")
            or value.get("titulo" if lang == "es" else "title")
            or value.get("name")
            or value.get("nombre")
        )

        if isinstance(selected, str) and selected.strip():
            return selected.strip()

    if isinstance(value, str) and value.strip():
        return value.strip()

    return None


def extract_title_from_map_item(item: dict[str, Any], lang: str) -> str | None:
    candidates = [
        item.get("nombre"),
        item.get("name"),
        item.get("titulo"),
        item.get("title"),
        item.get("label"),
    ]

    if lang == "en":
        candidates = [
            item.get("name_en"),
            item.get("title_en"),
            item.get("titulo_en"),
            item.get("label_en"),
            item.get("nombre_en"),
        ] + candidates

    for candidate in candidates:
        value = pick_localized_value(candidate, lang)

        if value:
            return value

    return None


def find_leaf_in_map_data(data: Any, leaf_id: str) -> dict[str, Any] | None:
    for item in iter_nested_items(data):
        if not isinstance(item, dict):
            continue

        ids = {
            str(item.get("id", "")).strip(),
            str(item.get("leaf_id", "")).strip(),
            str(item.get("leafId", "")).strip(),
            str(item.get("slug", "")).strip(),
        }

        if leaf_id in ids:
            return item

    return None


def get_leaf_titles_from_map(leaf_id: str, explicit_map_path: Path | None = None) -> dict[str, Any]:
    candidates = []

    if explicit_map_path:
        candidates.append(explicit_map_path)

    candidates.extend(find_map_candidates())

    for path in candidates:
        data = try_load_yaml(path)

        if data is None:
            continue

        item = find_leaf_in_map_data(data, leaf_id)

        if not item:
            continue

        return {
            "map_path": str(path),
            "item": item,
            "title_es": extract_title_from_map_item(item, "es"),
            "title_en": extract_title_from_map_item(item, "en"),
        }

    return {
        "map_path": None,
        "item": None,
        "title_es": None,
        "title_en": None,
    }


def normalize_leaf_id(value: str) -> str:
    return value.strip().lower().replace(" ", "-").replace("_", "-")


def read_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def file_has_content(path: Path) -> bool:
    if not path.exists():
        return False

    return bool(path.read_text(encoding="utf-8", errors="replace").strip())


def make_todo_token(filename: str, label: str, lang: str | None = None) -> str:
    base = filename.upper()
    base = base.replace(".", "_").replace("-", "_")

    clean = label.upper()
    clean = clean.replace("Á", "A")
    clean = clean.replace("É", "E")
    clean = clean.replace("Í", "I")
    clean = clean.replace("Ó", "O")
    clean = clean.replace("Ú", "U")
    clean = clean.replace("Ü", "U")
    clean = clean.replace("Ñ", "N")
    clean = re.sub(r"[^A-Z0-9]+", "_", clean)
    clean = clean.strip("_")

    if lang:
        return f"TODO_IA_{base}_{lang.upper()}_{clean}"

    return f"TODO_IA_{base}_{clean}"


def replace_common_placeholders(text: str, leaf_id: str, name: str) -> str:
    replacements = {
        "{{leaf_id}}": leaf_id,
        "{{LEAF_ID}}": leaf_id,
        "{{name}}": name,
        "{{NAME}}": name,
        "TODO_LEAF_ID": leaf_id,
        "TODO_IA_LEAF_ID": leaf_id,
        "TODO_NAME": name,
        "TODO_IA_NAME": name,
        "TODO_IA_TITLE_ES": name,
        "TODO_IA_TITULO_ES": name,
    }

    result = text

    for old, new in replacements.items():
        result = result.replace(old, new)

    return result


def fill_scalar_yaml_values(text: str, filename: str, leaf_id: str, name: str) -> str:
    """
    Keeps the template structure intact and fills obviously empty scalar values.

    Examples:
      title:
        es:
    becomes:
      title:
        es: "TODO_IA_META_YAML_ES_TITLE"

    This is intentionally conservative.
    """
    lines = text.splitlines()
    output = []

    for line in lines:
        output.append(line)

    result = "\n".join(output)
    result = replace_common_placeholders(result, leaf_id=leaf_id, name=name)

    return result.rstrip() + "\n"


def get_yaml_structure_from_contract(contract: dict[str, Any], filename: str) -> str:
    info = contract.get("yaml_files", {}).get(filename, {})
    structures = info.get("yaml_structures", [])

    if not structures:
        return ""

    content = structures[0].get("content", "")

    return content.strip() + "\n"


def build_yaml_skeleton(contract: dict[str, Any], filename: str, leaf_id: str, name: str) -> str:
    structure = get_yaml_structure_from_contract(contract, filename)

    if not structure:
        return (
            f"# WARNING: no se encontró yaml_structures para {filename}\n"
            f"# TODO_IA_REVISAR_PLANTILLA_{filename.upper().replace('.', '_')}\n"
        )

    structure = fill_scalar_yaml_values(
        structure,
        filename=filename,
        leaf_id=leaf_id,
        name=name,
    )

    return structure


def get_markdown_headings_from_contract(contract: dict[str, Any], filename: str) -> list[str]:
    info = contract.get("markdown_files", {}).get(filename, {})
    candidates = info.get("required_headings_candidates", [])

    headings = []

    for item in candidates:
        title = item.get("title", "").strip()

        if title:
            headings.append(title)

    return headings


def get_section_rules_from_contract(contract: dict[str, Any], filename: str) -> dict[str, Any]:
    """Extrae las reglas de validación por sección del contrato."""
    info = contract.get("markdown_files", {}).get(filename, {})
    return info.get("section_rules", {})


def get_nested_structure_from_contract(contract: dict[str, Any], filename: str) -> dict[str, Any]:
    """Extrae la estructura anidada requerida (ej: errores con 5 subsecciones)."""
    info = contract.get("markdown_files", {}).get(filename, {})
    return info.get("nested_structure", {})


def load_yaml_context(leaf_dir: Path) -> dict[str, Any]:
    """Carga magnitudes y fórmulas del leaf para contexto."""
    context = {
        "magnitudes": [],
        "formulas": [],
        "leaf_id": "",
        "nombre_es": "",
        "nombre_en": "",
    }

    # Cargar meta.yaml para nombre del leaf
    meta_path = leaf_dir / "meta.yaml"
    if meta_path.exists():
        try:
            import yaml
            meta = yaml.safe_load(meta_path.read_text(encoding="utf-8"))
            if isinstance(meta, dict):
                context["leaf_id"] = meta.get("id", "")
                nombre = meta.get("nombre", {})
                if isinstance(nombre, dict):
                    context["nombre_es"] = nombre.get("es", "")
                    context["nombre_en"] = nombre.get("en", "")
        except Exception:
            pass

    # Cargar magnitudes
    magnitudes_path = leaf_dir / "magnitudes.yaml"
    if magnitudes_path.exists():
        try:
            import yaml
            mags = yaml.safe_load(magnitudes_path.read_text(encoding="utf-8"))
            if isinstance(mags, dict) and "magnitudes" in mags:
                for mag in mags["magnitudes"]:
                    if isinstance(mag, dict) and "id" in mag:
                        context["magnitudes"].append({
                            "id": mag["id"],
                            "symbol": mag.get("symbol", ""),
                            "es": mag.get("nombre", {}).get("es", "") if isinstance(mag.get("nombre"), dict) else "",
                            "role": mag.get("physical_role", ""),
                        })
        except Exception:
            pass

    # Cargar fórmulas
    formulas_path = leaf_dir / "formulas.yaml"
    if formulas_path.exists():
        try:
            import yaml
            forms = yaml.safe_load(formulas_path.read_text(encoding="utf-8"))
            if isinstance(forms, dict) and "formulas" in forms:
                for form in forms["formulas"]:
                    if isinstance(form, dict) and "id" in form:
                        context["formulas"].append({
                            "id": form["id"],
                            "equation": form.get("equation", ""),
                            "latex": form.get("latex", ""),
                        })
        except Exception:
            pass

    return context


def format_magnitude_refs(magnitudes: list[dict]) -> str:
    """Formatea las magnitudes como referencias [[id]] para el esqueleto."""
    if not magnitudes:
        return "TODO_IA_DEFINIR_MAGNITUDES"

    refs = [f"[[{m['id']}]" for m in magnitudes[:5]]  # Primeras 5 magnitudes
    return ", ".join(refs) + "... (usar según contexto)"


def format_formula_refs(formulas: list[dict]) -> str:
    """Formatea las fórmulas como referencias {{f:id}} para el esqueleto."""
    if not formulas:
        return "TODO_IA_DEFINIR_FORMULAS"

    # Usar dobles llaves para escapar: {{{{ produce {{ literal
    refs = [f"{{{{f:{f['id']}}}}}" for f in formulas[:3]]  # Primeras 3 fórmulas
    return " ".join(refs)


def heading_to_placeholder(filename: str, heading: str) -> str:
    lang = "EN" if filename.endswith(".en.md") else "ES"
    return make_todo_token(filename, heading, lang=lang)


def is_title_heading(heading: str) -> bool:
    normalized = heading.strip().lower()

    title_markers = [
        "título del subtema",
        "titulo del subtema",
        "subtopic title",
        "title of the subtopic",
    ]

    return any(marker in normalized for marker in title_markers)


def build_enriched_section_placeholder(
    filename: str,
    heading: str,
    section_rules: dict[str, Any],
    nested_structure: dict[str, Any],
    yaml_context: dict[str, Any],
) -> list[str]:
    """
    Genera un placeholder enriquecido con reglas de validación y contexto.
    """
    lines = []
    is_en = filename.endswith(".en.md")

    # Extraer reglas específicas de esta sección
    word_budgets = section_rules.get("word_budgets", {})
    forbidden_patterns = section_rules.get("forbidden_patterns", {})
    required_patterns = section_rules.get("required_patterns", {})

    # Presupuesto de palabras
    if heading in word_budgets:
        min_w, max_w = word_budgets[heading]
        if max_w:
            budget_text = f"PALABRAS: {min_w}-{max_w}"
        else:
            budget_text = f"PALABRAS: mínimo {min_w}"
        lines.append(f"[REGLA: {budget_text}]")

    # Patrones prohibidos
    if heading in forbidden_patterns:
        patterns = forbidden_patterns[heading]
        for pattern in patterns:
            if pattern == "character_=":
                lines.append("[PROHIBIDO: usar signo '=' en ecuaciones]")
            elif pattern == "character_^":
                lines.append("[PROHIBIDO: usar '^' para exponentes]")
            elif pattern == "pattern_[[id]]=value":
                lines.append("[PROHIBIDO: '[[magnitud]] = valor', usar prosa]")
            elif pattern == "inline_formula_ref":
                lines.append("[PROHIBIDO: {{f:id}} inline, usar solo en línea propia]")
            elif pattern == "latex_with_operators":
                lines.append("[PROHIBIDO: LaTeX con = < > \\approx]")

    # Patrones requeridos
    if heading in required_patterns:
        patterns = required_patterns[heading]
        for pattern in patterns:
            if pattern == "formula_refs":
                refs = format_formula_refs(yaml_context.get("formulas", []))
                lines.append(f"[REQUERIDO: usar referencias a fórmulas: {refs}]")
            elif pattern == "magnitude_refs":
                refs = format_magnitude_refs(yaml_context.get("magnitudes", []))
                lines.append(f"[REQUERIDO: usar magnitudes: {refs}]")
            elif pattern == "quantitative_pattern":
                lines.append("[REQUERIDO: incluir número con < o > (ej: r > 2.8e-15)]")
            elif pattern == "transition_vocabulary":
                lines.append("[REQUERIDO: usar 'cuando conviene pasar al modelo...']")

    # Estructura anidada (para errores)
    if heading in nested_structure:
        struct = nested_structure[heading]
        if isinstance(struct, list) and struct:
            if struct[0].get("type") == "error_block":
                lines.append("")
                lines.append("ESTRUCTURA OBLIGATORIA (5 subsecciones por error):")
                for sub in struct[0].get("required_subsections", []):
                    lines.append(f"  {sub}")
                lines.append("")
                lines.append("TODO_IA_MINIMO_2_ERRORES_CON_ESTA_ESTRUCTURA")

    # Placeholder principal si no hay contenido específico
    if not lines:
        lines.append(heading_to_placeholder(filename, heading))

    return lines


def build_markdown_skeleton(
    contract: dict[str, Any],
    filename: str,
    leaf_id: str,
    name: str,
    title_es: str | None = None,
    title_en: str | None = None,
    leaf_dir: Path | None = None,
) -> str:
    headings = get_markdown_headings_from_contract(contract, filename)

    if not headings:
        return (
            f"# TODO_IA_TITLE_{'EN' if filename.endswith('.en.md') else 'ES'}\n\n"
            f"TODO_IA_REVISAR_PLANTILLA_{filename.upper().replace('.', '_')}\n"
        )

    is_en = filename.endswith(".en.md")

    # Cargar contexto de YAMLs si leaf_dir está disponible
    yaml_context = {}
    if leaf_dir and leaf_dir.exists():
        yaml_context = load_yaml_context(leaf_dir)

    # Obtener reglas del contrato
    section_rules = get_section_rules_from_contract(contract, filename)
    nested_structure = get_nested_structure_from_contract(contract, filename)

    lines = []

    # Header con título
    if is_en:
        lines.append(f"# {title_en or yaml_context.get('nombre_en') or 'TODO_IA_TITLE_EN'}")
    else:
        lines.append(f"# {title_es or yaml_context.get('nombre_es') or name}")

    lines.append("")

    # Contexto automático del leaf (solo español)
    if not is_en and yaml_context.get("magnitudes"):
        lines.append("<!-- CONTEXTO AUTOMÁTICO -->")
        lines.append(f"<!-- Magnitudes del leaf: {format_magnitude_refs(yaml_context['magnitudes'])} -->")
        if yaml_context.get("formulas"):
            lines.append(f"<!-- Fórmulas del leaf: {format_formula_refs(yaml_context['formulas'])} -->")
        lines.append("")

    section_headings = [
        heading for heading in headings
        if not is_title_heading(heading)
    ]

    for heading in section_headings:
        lines.append(f"## {heading}")
        lines.append("")

        # Generar placeholder enriquecido
        enriched = build_enriched_section_placeholder(
            filename, heading, section_rules, nested_structure, yaml_context
        )
        lines.extend(enriched)

        lines.append("")

    text = "\n".join(lines).rstrip() + "\n"
    text = replace_common_placeholders(text, leaf_id=leaf_id, name=name)

    return text


def generate_skeleton_for_file(
    contract: dict[str, Any],
    filename: str,
    leaf_id: str,
    name: str,
    title_es: str | None = None,
    title_en: str | None = None,
    leaf_dir: Path | None = None,
) -> str:
    if filename in YAML_FILES:
        return build_yaml_skeleton(
            contract=contract,
            filename=filename,
            leaf_id=leaf_id,
            name=name,
        )

    if filename in MARKDOWN_FILES:
        return build_markdown_skeleton(
            contract=contract,
            filename=filename,
            leaf_id=leaf_id,
            name=name,
            title_es=title_es,
            title_en=title_en,
            leaf_dir=leaf_dir,
        )

    raise ValueError(f"Archivo no reconocido: {filename}")


def generate_leaf_skeleton(
    leaf_id: str | None = None,
    name: str | None = None,
    contract_path: Path = DEFAULT_CONTRACT_PATH,
    force: bool = False,
    map_path: Path | None = None,
) -> dict[str, Any]:
    # Usar leaf activo si no se especificó
    if leaf_id is None:
        leaf_path = get_current_leaf_path()
        if leaf_path is None:
            raise ValueError("No se especificó leaf_id y no hay leaf activo configurado")
        leaf_id = leaf_path.name
        leaf_dir = leaf_path
    else:
        leaf_id = normalize_leaf_id(leaf_id)
        # Intentar usar ruta del leaf activo primero
        current_path = get_current_leaf_path()
        if current_path and current_path.name == leaf_id:
            leaf_dir = current_path
        else:
            from config import PRUEBAS_ROOT
            leaf_dir = PRUEBAS_ROOT / leaf_id

    # Si no se especificó nombre, intentar obtener del leaf activo
    if name is None:
        try:
            from ruta_leaf import get_current_leaf
            _, name = get_current_leaf()
            if not name:
                name = leaf_id.replace("-", " ").title()
        except Exception:
            name = leaf_id.replace("-", " ").title()

    if not leaf_dir.exists():
        raise FileNotFoundError(
            f"No existe el leaf: {leaf_dir}\n"
            "Primero ejecuta create_leaf.py."
        )

    if not contract_path.exists():
        raise FileNotFoundError(
            f"No existe el contrato extraído: {contract_path}\n"
            "Primero ejecuta extract_template_contract.py."
        )

    contract = read_json(contract_path)

    map_info = get_leaf_titles_from_map(
        leaf_id=leaf_id,
        explicit_map_path=map_path,
    )

    title_es = map_info.get("title_es") or name
    title_en = map_info.get("title_en")

    result = {
        "leaf_id": leaf_id,
        "leaf_dir": str(leaf_dir),
        "contract_path": str(contract_path),
        "written": [],
        "skipped": [],
        "missing": [],
        "map_path": map_info.get("map_path"),
        "title_es": title_es,
        "title_en": title_en,
    }

    for filename in REQUIRED_LEAF_FILES:
        path = leaf_dir / filename

        if not path.exists():
            result["missing"].append(filename)
            continue

        if file_has_content(path) and not force:
            result["skipped"].append(filename)
            continue

        content = generate_skeleton_for_file(
            contract=contract,
            filename=filename,
            leaf_id=leaf_id,
            name=name,
            title_es=title_es,
            title_en=title_en,
            leaf_dir=leaf_dir,
        )

        path.write_text(content, encoding="utf-8")
        result["written"].append(filename)

    return result


def print_report(result: dict[str, Any]) -> None:
    print()
    print("PHYXIO LEAF SKELETON GENERATOR")
    print("=" * 36)
    print(f"Leaf ID:  {result['leaf_id']}")
    print(f"Leaf dir: {result['leaf_dir']}")
    print(f"Contrato: {result['contract_path']}")
    print()

    if result["written"]:
        print("Archivos escritos:")
        for filename in result["written"]:
            print(f" - {filename}")
        print()

    if result["skipped"]:
        print("Archivos omitidos porque ya tenían contenido:")
        for filename in result["skipped"]:
            print(f" - {filename}")
        print()

    if result["missing"]:
        print("[WARNING] Archivos obligatorios no encontrados:")
        for filename in result["missing"]:
            print(f" - {filename}")
        print()

    if not result["missing"]:
        print("[OK] Esqueleto generado.")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Rellena los 16 archivos de un leaf con esqueletos derivados de extracted_contract.json."
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
        "--contract",
        default=str(DEFAULT_CONTRACT_PATH),
        help="Ruta a extracted_contract.json.",
    )

    parser.add_argument(
        "--force",
        action="store_true",
        help="Sobrescribe archivos aunque ya tengan contenido.",
    )

    parser.add_argument(
        "--map-path",
        default=None,
        help="Ruta opcional al mapa Phyxio. Si no se indica, se buscan rutas conocidas.",
    )

    args = parser.parse_args()

    # Usar leaf activo si no se especificó
    leaf_id = require_leaf_id(args.leaf_id)
    leaf_name = require_leaf_name(args.name)

    result = generate_leaf_skeleton(
        leaf_id=leaf_id,
        name=leaf_name,
        contract_path=Path(args.contract).resolve(),
        force=args.force,
        map_path=Path(args.map_path).resolve() if args.map_path else None,
    )

    print_report(result)
    print(f"Mapa:     {result.get('map_path') or 'NO_ENCONTRADO'}")
    print(f"Título ES: {result.get('title_es') or 'NO_DETECTADO'}")
    print(f"Título EN: {result.get('title_en') or 'NO_DETECTADO'}")
    print() 

    if result["missing"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()