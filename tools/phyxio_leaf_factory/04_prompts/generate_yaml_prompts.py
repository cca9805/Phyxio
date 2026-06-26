"""
Genera prompts para los YAML del leaf.

La factory debe pedir exactamente lo que exige el validador modular. Este
archivo evita reglas legacy, ejemplos incompletos y formatos ambiguos.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Any

PROJECT_ROOT = Path(__file__).resolve().parents[3]
FACTORY_ROOT = PROJECT_ROOT / "tools" / "phyxio_leaf_factory"
DEFAULT_LEAFS_ROOT = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n" / "pruebas"
DEFAULT_OUTPUT_ROOT = FACTORY_ROOT / "10_outputs" / "prompts"

if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

try:
    from ruta_leaf import get_current_leaf_path, require_leaf_id
except Exception:  # pragma: no cover - fallback for direct imports
    get_current_leaf_path = None

    def require_leaf_id(value: str | None = None) -> str:
        if not value:
            raise ValueError("Debes indicar --leaf-id")
        return value


INTERPRETACION_SECTIONS = [
    "summary",
    "physical_reading",
    "coherence",
    "model_validity",
    "graph_reading",
    "likely_errors",
    "next_step",
]


def read_text_if_exists(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace") if path.exists() else ""


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def join_lines(lines: list[str]) -> str:
    return "\n".join(str(line) for line in lines if line is not None) + "\n"


def compact_text(text: str, max_chars: int = 14000) -> str:
    text = text.strip()
    if len(text) <= max_chars:
        return text
    return text[:max_chars].rstrip() + "\n\n[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]"


def load_yaml_text(text: str) -> Any:
    try:
        import yaml
        return yaml.safe_load(text) if text.strip() else None
    except Exception:
        return None


def load_yaml_file(path: Path) -> Any:
    return load_yaml_text(read_text_if_exists(path))


def normalize_leaf_id(value: str) -> str:
    return value.strip().lower().replace(" ", "-").replace("_", "-")


def get_graph_types_from_map(leaf_id: str) -> list[str]:
    node = get_map_node_data(leaf_id)
    graficos = node.get("graficos", []) if node else []
    if isinstance(graficos, list):
        return [g for g in graficos if g in {"Coord", "Dcl", "Svg"}]
    if isinstance(graficos, str) and graficos in {"Coord", "Dcl", "Svg"}:
        return [graficos]
    return []


def get_map_node_data(leaf_id: str) -> dict[str, Any] | None:
    map_path = PROJECT_ROOT / "frontend" / "src" / "v2" / "map" / "phyxio-map.yaml"
    data = load_yaml_file(map_path)
    if not isinstance(data, dict):
        return None

    def find_node(node: Any, parent_stack: list[str] | None = None) -> dict[str, Any] | None:
        parent_stack = parent_stack or []
        if not isinstance(node, dict):
            return None
        if node.get("id") == leaf_id:
            ruta = node.get("ruta_relativa", "")
            parts = ruta.split("/") if isinstance(ruta, str) else []
            nombre = node.get("nombre") or {}
            if not nombre and node.get("titulo"):
                nombre = {"es": node.get("titulo", ""), "en": node.get("titulo_en", "")}
            return {
                "id": node.get("id", leaf_id),
                "nombre": nombre,
                "area": node.get("area") or (parts[0] if len(parts) > 0 else ""),
                "bloque": node.get("bloque") or (parts[1] if len(parts) > 1 else ""),
                "subbloque": node.get("subbloque") or (parts[2] if len(parts) > 2 else ""),
                "parent_id": node.get("parent_id") or (parent_stack[-1] if parent_stack else ""),
                "ruta_relativa": ruta,
                "orden": node.get("orden", 0),
                "niveles": node.get("niveles", {}),
                "icon": node.get("icon", ""),
                "graficos": node.get("graficos", []),
                "physical_role": node.get("physical_role", {}),
                "type": node.get("type", "leaf"),
            }
        children = node.get("children") or node.get("items") or []
        stack = parent_stack + ([str(node["id"])] if node.get("id") else [])
        for child in children:
            found = find_node(child, stack)
            if found:
                return found
        return None

    root = data.get("root", data)
    return find_node(root)


def extract_ids_from_yaml(content: str, root_key: str) -> list[str]:
    data = load_yaml_text(content)
    if not isinstance(data, dict):
        return []
    items = data.get(root_key, [])
    if not isinstance(items, list):
        return []
    return [item.get("id", "") for item in items if isinstance(item, dict) and item.get("id")]


def base_output_rules_yaml() -> list[str]:
    return [
        "Output format:",
        "- Deliver a downloadable file; do not print the YAML content in the chat.",
        "- The downloaded file content must be valid YAML for the requested target file.",
        "- Do not wrap the answer in Markdown fences.",
        "- Do not add explanations before or after the YAML inside the file.",
        "- Do not leave placeholders, TODOs, nulls, empty strings for required text, or example ids.",
        "- Use double quotes for strings containing [[id]], {{f:id}}, LaTeX backslashes, colons, or comparison symbols.",
    ]


def map_context_lines(leaf_id: str) -> list[str]:
    node = get_map_node_data(leaf_id) or {}
    return [
        "Canonical map context. Use these values exactly where meta.yaml requires canonical fields:",
        f"id: {node.get('id', leaf_id)}",
        f"nombre: {node.get('nombre', {})}",
        f"area: {node.get('area', '')}",
        f"bloque: {node.get('bloque', '')}",
        f"subbloque: {node.get('subbloque', '')}",
        f"parent_id: {node.get('parent_id', '')}",
        f"ruta_relativa: {node.get('ruta_relativa', '')}",
        f"orden: {node.get('orden', 0)}",
        f"niveles: {node.get('niveles', {})}",
        f"icon: {node.get('icon', '')}",
        f"graficos: {node.get('graficos', [])}",
        f"physical_role: {node.get('physical_role', {})}",
    ]


def build_meta_prompt(leaf_id: str, current_content: str) -> str:
    graph_types = get_graph_types_from_map(leaf_id)
    dominant = graph_types[0] if graph_types else "none"
    return join_lines([
        "# PROMPT YAML 01 | meta.yaml",
        "",
        "Create a downloadable YAML file named `meta.yaml`.",
        "Generate complete `meta.yaml` for one Phyxio leaf.",
        *base_output_rules_yaml(),
        "",
        *map_context_lines(leaf_id),
        "",
        "Current file, if any:",
        "YAML_ACTUAL_INICIO",
        current_content,
        "YAML_ACTUAL_FIN",
        "",
        "Required root fields:",
        "id, nombre.es, nombre.en, area, bloque, subbloque, parent_id, ruta_relativa, orden, type, niveles.es, niveles.en, icon, descripcion, description_en, tags.es, tags.en, prerequisitos, graficos, physical_role.es, physical_role.en, dificultad, tiempo_estimado_min, pregunta_fisica_central.es, pregunta_fisica_central.en, representacion_dominante, magnitud_dominante, interpretacion.",
        "",
        "Rules:",
        "- Canonical map fields must match the map context exactly.",
        "- type must be leaf.",
        "- graficos must match the map exactly.",
        f"- representacion_dominante must be `{dominant}`.",
        "- magnitud_dominante must be an id that will exist in magnitudes.yaml.",
        "- descripcion and description_en must be concise, max 20 words each.",
        "- tags must be bilingual lists with 1 to 6 useful entries per language.",
        "- pregunta_fisica_central must be a real question in both languages.",
        "- interpretacion.enabled should normally be true.",
        "- interpretacion.archivo must be interpretacion.yaml.",
        "- interpretacion.mini_graph.preferred_type must be Coord, Dcl, Svg, or none.",
        "- Do not create central_question, summary, physical_reading, model_validity, graph_reading, likely_errors, or next_step inside meta.yaml.interpretacion.",
        "- Those interpretive content fields belong to interpretacion.yaml, not to meta.yaml.",
        "",
        "Required interpretacion block shape:",
        "interpretacion:",
        "  enabled: true",
        "  archivo: \"interpretacion.yaml\"",
        "  ui:",
        "    inline_calculator: false",
        "    inline_graph: false",
        "    dedicated_tab: true",
        "    tab_label: {es: \"Interpretación\", en: \"Interpretation\"}",
        "  mini_graph:",
        "    enabled: false",
        "    preferred_type: \"none\"",
        "  output_policy:",
        "    show_summary_first: true",
        "    max_inline_messages: 2",
        "    show_warnings: true",
        "    show_likely_errors: true",
        "  dependencies:",
        "    requires_formulas: true",
        "    requires_magnitudes: true",
        "    supports_graph_binding: false",
    ])


def build_meta_contract_lines(leaf_id: str) -> list[str]:
    graph_types = get_graph_types_from_map(leaf_id)
    dominant = graph_types[0] if graph_types else "none"
    return [
        "meta.yaml strict contract:",
        "- meta.yaml must be generated first and is the identity source for the other YAML files.",
        "- It must use the canonical map values below exactly for: id, nombre, area, bloque, subbloque, parent_id, ruta_relativa, orden, type, niveles, icon, graficos, physical_role.",
        "- Required root fields exactly: id, nombre, area, bloque, subbloque, parent_id, ruta_relativa, orden, type, niveles, icon, descripcion, description_en, tags, prerequisitos, graficos, physical_role, dificultad, tiempo_estimado_min, pregunta_fisica_central, representacion_dominante, magnitud_dominante, interpretacion.",
        "- Do not use aliases or alternative names: central_question is forbidden; use pregunta_fisica_central.",
        "- dificultad must be an integer from 1 to 5, never text such as media/intermediate.",
        "- tiempo_estimado_min must be a positive integer in minutes.",
        "- pregunta_fisica_central must be a bilingual block with es and en, each a real question ending with ?.",
        f"- representacion_dominante must be \"{dominant}\".",
        "- magnitud_dominante must be an actual magnitude id that will exist in magnitudes.yaml.",
        "- descripcion and description_en must be concise, each at most 20 words.",
        "- tags must be a bilingual block with es/en lists, 1 to 6 useful tags per language.",
        "- prerequisitos must be a YAML list of prerequisite leaf ids or an empty list.",
        "",
        "meta.yaml interpretacion block is configuration only, not explanatory prose:",
        "interpretacion:",
        "  enabled: true",
        "  archivo: \"interpretacion.yaml\"",
        "  ui:",
        "    inline_calculator: false",
        "    inline_graph: false",
        "    dedicated_tab: true",
        "    tab_label:",
        "      es: \"Interpretación\"",
        "      en: \"Interpretation\"",
        "  mini_graph:",
        "    enabled: false",
        "    preferred_type: \"none\"",
        "  output_policy:",
        "    show_summary_first: true",
        "    max_inline_messages: 2",
        "    show_warnings: true",
        "    show_likely_errors: true",
        "  dependencies:",
        "    requires_formulas: true",
        "    requires_magnitudes: true",
        "    supports_graph_binding: false",
        "",
        "Forbidden direct child keys inside meta.yaml.interpretacion:",
        "- summary",
        "- physical_reading",
        "- model_validity",
        "- graph_reading",
        "- likely_errors",
        "- next_step",
        "- any long explanatory content. Those belong to interpretacion.yaml.",
        "",
        "Important distinction:",
        "- output_policy.show_summary_first is valid and mandatory.",
        "- The forbidden key is exactly interpretacion.summary as an explanatory block.",
        "- Do not reject valid technical keys just because they contain the word summary.",
    ]


def build_combined_magnitudes_formulas_prompt(leaf_id: str, mag_content: str, form_content: str) -> str:
    return join_lines([
        "# PROMPT YAML 02-03 | magnitudes.yaml + formulas.yaml",
        "",
        f"Create a downloadable ZIP file named `{leaf_id}_formulas_magnitudes.zip`.",
        "The ZIP must contain exactly two files at the ZIP root: `formulas.yaml` and `magnitudes.yaml`.",
        "Do not print the YAML contents in the chat.",
        "Do not use file markers, Markdown fences, or nested folders.",
        "",
        "Each downloaded YAML file must contain raw valid YAML only.",
        "",
        *map_context_lines(leaf_id),
        "",
        "Current magnitudes.yaml:",
        "MAGNITUDES_ACTUAL_INICIO",
        compact_text(mag_content),
        "MAGNITUDES_ACTUAL_FIN",
        "",
        "Current formulas.yaml:",
        "FORMULAS_ACTUAL_INICIO",
        compact_text(form_content),
        "FORMULAS_ACTUAL_FIN",
        "",
        "formulas.yaml contract:",
        "- version must be \"5.0.0\".",
        "- ui.default_formula must be the main formula id.",
        "- formulas must be a non-empty list of domain formulas.",
        "- Every formula must use the v5 field names exactly. Do not use legacy keys nombre, descripcion, used, limits, common_mistakes, or result_semantics.meaning/sign/unit.",
        "- Every formula requires exactly these top-level fields: id, title, equation, latex, rearrangements, category, relation_type, physical_meaning, constraints, validity, dimension_check, calculable, motivo_no_calculable, used_in, interpretation_tags, result_semantics, domain_checks, coherence_checks, graph_implications, pedagogical_triggers.",
        "- title, physical_meaning, and validity must be bilingual blocks with es and en.",
        "- result_semantics requires target, kind, sign_meaning.es/en, absolute_value_meaning.es/en.",
        "- rearrangements must include all physically useful solved forms, each with target, equation, latex.",
        "- In equation and rearrangements.equation, write explicit multiplication with `*`: use `j*A`, not `jA`; use `epsilon*sigma*A*T^4`, not implicit products.",
        "- latex fields must not include delimiters \\( \\) or \\[ \\].",
        "- result_semantics.target must be a magnitude id that exists in magnitudes.yaml.",
        "",
        "Required formula item shape:",
        "- id: ley_x",
        "  title: {es: \"...\", en: \"...\"}",
        "  equation: \"P = epsilon*sigma*A*T^4\"",
        "  latex: \"P = \\\\varepsilon \\\\sigma A T^4\"",
        "  rearrangements:",
        "    - target: temperatura_absoluta",
        "      equation: \"T = (P/(epsilon*sigma*A))^(1/4)\"",
        "      latex: \"T = \\\\left(\\\\frac{P}{\\\\varepsilon \\\\sigma A}\\\\right)^{1/4}\"",
        "  category: \"law\"",
        "  relation_type: \"proportional_power\"",
        "  physical_meaning: {es: \"...\", en: \"...\"}",
        "  constraints: {es: \"...\", en: \"...\"}",
        "  validity: {es: \"...\", en: \"...\"}",
        "  dimension_check: \"...\"",
        "  calculable: true",
        "  motivo_no_calculable: \"\"",
        "  used_in: [potencia_radiada, temperatura_absoluta]",
        "  interpretation_tags: [nonlinear, fourth_power]",
        "  result_semantics:",
        "    target: potencia_radiada",
        "    kind: scalar_nonnegative",
        "    sign_meaning: {es: \"...\", en: \"...\"}",
        "    absolute_value_meaning: {es: \"...\", en: \"...\"}",
        "  domain_checks: [{id: dominio, rule: \"...\", message: {es: \"...\", en: \"...\"}}]",
        "  coherence_checks: [{id: coherencia, rule: \"...\", message: {es: \"...\", en: \"...\"}}]",
        "  graph_implications: {coord: {shape: \"...\", x: \"...\", y: \"...\"}}",
        "  pedagogical_triggers: [{id: error_tipico, condition: \"...\", feedback: {es: \"...\", en: \"...\"}}]",
        "",
        "magnitudes.yaml contract:",
        "- version must be \"5.0.0\".",
        "- magnitudes must include every input, parameter, constant, component, and calculable result needed by formulas and interpretation.",
        "- Every magnitude requires exactly these top-level fields: id, symbol, nombre, descripcion, unidad_si, dimension, is_vector, components, category, physical_role, used_in, common_mistake, typical_range, sign_behavior, zero_behavior, value_nature, interpretation_role, graph_binding, pedagogical_notes.",
        "- nombre, descripcion, sign_behavior.meaning, zero_behavior.meaning, and pedagogical_notes must be bilingual blocks with es and en.",
        "- graph_binding is mandatory for every magnitude. Do not use graph_role.",
        "- graph_binding.channels must be a list. Use values such as xAxis, yAxis, parameter, constant, none.",
        "- pedagogical_notes.es/en must contain useful explanatory text, not empty strings.",
        "- ids must be lowercase ASCII with underscores, no spaces, no accents.",
        "- used_in must reference formula ids from formulas.yaml.",
        "- If a formula uses a magnitude id, that magnitude must exist.",
        "- If a magnitude is calculable, at least one formula should target it.",
        "",
        "Required magnitude item shape:",
        "- id: temperatura_absoluta",
        "  symbol: T",
        "  nombre: {es: \"...\", en: \"...\"}",
        "  descripcion: {es: \"...\", en: \"...\"}",
        "  unidad_si: K",
        "  dimension: Θ",
        "  is_vector: false",
        "  components: []",
        "  category: estado_termico",
        "  physical_role: variable_independiente",
        "  used_in: [ley_stefan_boltzmann]",
        "  common_mistake: \"...\"",
        "  typical_range: \"...\"",
        "  sign_behavior:",
        "    has_sign: false",
        "    meaning: {es: \"...\", en: \"...\"}",
        "  zero_behavior:",
        "    allowed: true",
        "    meaning: {es: \"...\", en: \"...\"}",
        "  value_nature:",
        "    kind: scalar",
        "    nonnegative_only: true",
        "    expected_interval: \"T >= 0 K\"",
        "  interpretation_role:",
        "    primary_for: [ley_stefan_boltzmann]",
        "    secondary_for: []",
        "  graph_binding:",
        "    channels: [xAxis]",
        "  pedagogical_notes:",
        "    es: \"...\"",
        "    en: \"...\"",
        "",
        "Physics quality:",
        "- Include only formulas that belong to this leaf's physics domain.",
        "- Include assumptions and validity limits that distinguish this leaf from neighboring concepts.",
        "- Prefer standard physics notation and correct SI dimensions.",
    ])


def build_formulas_magnitudes_contract_lines() -> list[str]:
    return [
        "formulas.yaml strict v5 contract:",
        "- Every formula must use v5 field names exactly. Do not use legacy keys nombre, descripcion, used, limits, common_mistakes, or result_semantics.meaning/sign/unit.",
        "- Every formula requires: id, title, equation, latex, rearrangements, category, relation_type, physical_meaning, constraints, validity, dimension_check, calculable, motivo_no_calculable, used_in, interpretation_tags, result_semantics, domain_checks, coherence_checks, graph_implications, pedagogical_triggers.",
        "- title, physical_meaning, constraints, and validity must be bilingual blocks with es/en.",
        "- result_semantics requires target, kind, sign_meaning.es/en, absolute_value_meaning.es/en.",
        "- In equation and rearrangements.equation, write explicit multiplication with `*`: use `j*A`, not `jA`; use `epsilon*sigma*A*T^4`, not implicit products.",
        "- latex may use standard typographic multiplication, but equation must remain parser-friendly ASCII.",
        "",
        "magnitudes.yaml strict v5 contract:",
        "- Every magnitude requires: id, symbol, nombre, descripcion, unidad_si, dimension, is_vector, components, category, physical_role, used_in, common_mistake, typical_range, sign_behavior, zero_behavior, value_nature, interpretation_role, graph_binding, pedagogical_notes.",
        "- graph_binding is mandatory for every magnitude. Do not use graph_role.",
        "- graph_binding.channels must be a list. Use xAxis, yAxis, parameter, constant, or none.",
        "- pedagogical_notes is mandatory for every magnitude and must contain es/en useful explanatory text.",
        "- nombre, descripcion, sign_behavior.meaning, zero_behavior.meaning, and pedagogical_notes must be bilingual blocks with es/en.",
        "- If a formula uses a magnitude id, that magnitude must exist.",
        "- If a formula id appears in used_in, that formula must exist.",
    ]


def build_graficos_contract_lines(leaf_id: str, graph_types: list[str]) -> list[str]:
    type_to_section = {"Coord": "coord", "Dcl": "dcl", "Svg": "svg"}
    sections = [type_to_section[t] for t in graph_types if t in type_to_section]
    lines = [
        "graficos.yaml contract:",
        "- version must be \"1.0\".",
        f"- leaf must be \"{leaf_id}\".",
        "- Include only sections declared by meta.yaml/map.",
        "- Do not include JSX, HTML, React components, or <MathInline />.",
        "- All bilingual fields require es and en.",
        "- agentHints and commonMistakes require at least 3 entries in es and 3 in en.",
        "- recommendedTab must be \"graficas\".",
        f"- Required sections for this leaf: {sections if sections else 'none'}",
        "",
        "Coord required fields:",
        f"- id and graphId: \"{leaf_id}-Coord\"; type and graphType: \"Coord\".",
        "- title, xAxis, yAxis, xMagnitude, yMagnitude.",
        "- relation, physicalReading, slopeMeaning, interceptMeaning, curvatureMeaning, signMeaning, areaMeaning, domainMeaning, modelConnection, formulaConnection, readingFocus.",
        "- agentHints, commonMistakes, curveProfile, dataRange, recommendedTab.",
        "- curveProfile: type, expectedShape.es/en, keyPoints with at least 2 points. Each point has x, y, label.es/en.",
        "- dataRange: xMin, xMax, yMin, yMax, autoScale.",
        "- To pass graph_pfc_coherence, relation.es/en, physicalReading.es/en, and readingFocus.es/en must directly answer meta.yaml.pregunta_fisica_central.",
        "- Reuse at least two significant terms from pregunta_fisica_central in the graph text, such as the dominant magnitude, independent variable, material/parameter, and physical dependency.",
        "- Do not write a generic graph description disconnected from the central question.",
        "",
        "Dcl required fields:",
        f"- id and graphId: \"{leaf_id}-Dcl\"; type and graphType: \"Dcl\".",
        "- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, forceVectors, equilibriumState, recommendedTab.",
        "- forceVectors: at least one vector; each has id, label.es/en, targetObject, direction, magnitudeRef, signConvention.es/en, formulaRefs.",
        "- equilibriumState.conditionDescription.es/en is required.",
        "",
        "Svg required fields:",
        f"- id and graphId: \"{leaf_id}-Svg\"; type and graphType: \"Svg\".",
        "- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, animationTriggers, interactiveElements, recommendedTab.",
        "- animationTriggers and interactiveElements are lists; they may be empty if no interaction applies.",
    ]
    return lines


def build_graficos_prompt(
    leaf_id: str,
    current_content: str,
    meta_content: str,
    magnitudes_content: str = "",
    formulas_content: str = "",
) -> str:
    graph_types = get_graph_types_from_map(leaf_id)
    meta_data = load_yaml_text(meta_content)
    if not graph_types and isinstance(meta_data, dict):
        graficos = meta_data.get("graficos")
        graph_types = graficos if isinstance(graficos, list) else []
    mag_ids = extract_ids_from_yaml(magnitudes_content, "magnitudes")
    formula_ids = extract_ids_from_yaml(formulas_content, "formulas")
    return join_lines([
        "# PROMPT YAML 04 | graficos.yaml",
        "",
        "Create a downloadable YAML file named `graficos.yaml`.",
        "Generate complete `graficos.yaml` for this leaf.",
        *base_output_rules_yaml(),
        "",
        f"Declared graph types: {graph_types}",
        f"Available magnitude ids: {mag_ids}",
        f"Available formula ids: {formula_ids}",
        "",
        "Current graficos.yaml:",
        "GRAFICOS_ACTUAL_INICIO",
        compact_text(current_content),
        "GRAFICOS_ACTUAL_FIN",
        "",
        "meta.yaml context:",
        compact_text(meta_content),
        "",
        "magnitudes.yaml context:",
        compact_text(magnitudes_content),
        "",
        "formulas.yaml context:",
        compact_text(formulas_content),
        "",
        *build_graficos_contract_lines(leaf_id, graph_types),
        "",
        "If no graph types are declared, output only:",
        "version: \"1.0\"",
        f"leaf: \"{leaf_id}\"",
        "",
        "Physics quality:",
        "- A Coord graph must encode a real quantitative relation from formulas.yaml.",
        "- A Dcl graph must represent actual forces/interactions of the model, not decorative arrows.",
        "- A Svg graph must represent an interpretable physical scene, not a generic illustration.",
        "- formulaConnection should use text/LaTeX, never JSX.",
    ])


def is_interpretacion_ready_for_prompt(content: str, leaf_path: Path | None = None) -> bool:
    data = load_yaml_text(content)
    if not isinstance(data, dict):
        return False
    if data.get("version") != "5.0.0":
        return False
    deps = data.get("dependencies")
    targets = data.get("targets")
    if not isinstance(deps, dict) or not isinstance(targets, dict) or not targets:
        return False
    if leaf_path:
        return (leaf_path / "magnitudes.yaml").exists() and (leaf_path / "formulas.yaml").exists()
    return True


def build_interpretacion_prompt(leaf_id: str, current_content: str) -> str:
    if not is_interpretacion_ready_for_prompt(current_content):
        raise ValueError("interpretacion.yaml debe sincronizarse antes con sync_interpretacion_from_meta.py")
    return join_lines([
        "# PROMPT YAML 05 | interpretacion.yaml",
        "",
        f"Create a downloadable YAML file named `{leaf_id}_interpretacion.yaml`.",
        "The file content must be the completed `interpretacion.yaml`.",
        "Do not print the YAML content in the chat.",
        "Do not wrap the YAML in Markdown fences.",
        "Complete and improve `interpretacion.yaml` without changing synced identity/dependency fields.",
        "The downloaded file must contain raw valid YAML only.",
        "",
        "Current synchronized interpretacion.yaml:",
        "INTERPRETACION_ACTUAL_INICIO",
        compact_text(current_content, 26000),
        "INTERPRETACION_ACTUAL_FIN",
        "",
        "Required contract:",
        "- version must remain \"5.0.0\".",
        "- id, leaf_id, nombre, scope, dependencies, and target keys must remain synchronized.",
        "- dependencies.formulas and dependencies.magnitudes must be YAML lists of real ids.",
        "- output_contract.sections must be exactly: " + str(INTERPRETACION_SECTIONS),
        "- result_blocks must include summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step.",
        "- Every target must contain rules for summary, physical_reading, coherence, model_validity, likely_errors, and next_step.",
        "- Every rule must include id, when, status, text.es, text.en.",
        "- graph_reading_policy.enabled must match whether graph reading is useful for this leaf.",
        "- free_body_diagram_hint.enabled is true only for Dcl-oriented leaves.",
        "- No placeholders like <target_id>, TODO, PENDING, completar.",
        "",
        "Physics quality:",
        "- Write interpretation rules that diagnose meaning, signs, units, assumptions, limits, and common misconceptions.",
        "- Keep rules concise but specific enough for an assistant to explain student calculator results.",
    ])


def build_all_prompts(leaf_id: str, leaf_path: Path) -> dict[str, str]:
    meta = read_text_if_exists(leaf_path / "meta.yaml")
    mags = read_text_if_exists(leaf_path / "magnitudes.yaml")
    forms = read_text_if_exists(leaf_path / "formulas.yaml")
    graphs = read_text_if_exists(leaf_path / "graficos.yaml")
    interp = read_text_if_exists(leaf_path / "interpretacion.yaml")
    prompts = {
        "01_meta.prompt.md": build_meta_prompt(leaf_id, meta),
        "02_combined_magnitudes_formulas.prompt.md": build_combined_magnitudes_formulas_prompt(leaf_id, mags, forms),
        "04_graficos.prompt.md": build_graficos_prompt(leaf_id, graphs, meta, mags, forms),
    }
    if is_interpretacion_ready_for_prompt(interp, leaf_path):
        prompts["05_interpretacion.prompt.md"] = build_interpretacion_prompt(leaf_id, interp)
    return prompts


def build_all_yaml_zip_prompt(leaf_id: str, meta_content: str = "", graph_content: str = "") -> str:
    del graph_content
    graph_types = get_graph_types_from_map(leaf_id)
    files = ["meta.yaml", "formulas.yaml", "magnitudes.yaml", "graficos.yaml"]
    return join_lines([
        "# PROMPT MAESTRO YAML | ZIP DEL LEAF",
        "",
        f"Create a downloadable ZIP file named `{leaf_id}_yaml.zip` containing exactly: {', '.join(files)}.",
        "Do not return loose text files. Do not add explanations outside the ZIP.",
        "",
        *map_context_lines(leaf_id),
        "",
        "Generation order inside your reasoning:",
        "1. meta.yaml from map context.",
        "2. formulas.yaml with full physics relations.",
        "3. magnitudes.yaml coherent with formulas.",
        "4. graficos.yaml coherent with meta, formulas, and magnitudes.",
        "",
        "meta.yaml summary:",
        "- Follow the meta.yaml prompt contract: canonical map fields, concise descriptions, central question, representacion_dominante matching the first graph type, and complete interpretacion block.",
        *build_meta_contract_lines(leaf_id),
        "",
        "formulas.yaml + magnitudes.yaml summary:",
        "- Follow version 5.0.0 contracts.",
        "- Cross-reference ids exactly between formulas.used magnitudes, result_semantics.target, magnitudes.used_in, and meta.magnitud_dominante.",
        "- Include strong physics semantics, SI dimensions, validity limits, signs, zero behavior, and common mistakes.",
        *build_formulas_magnitudes_contract_lines(),
        "",
        f"Declared graph types: {graph_types}",
        *build_graficos_contract_lines(leaf_id, graph_types),
        "",
        "Raw current meta.yaml if present:",
        compact_text(meta_content),
        "",
        "ZIP quality gate:",
        "- Every YAML must parse with PyYAML.",
        "- No Markdown fences inside YAML files.",
        "- No placeholders.",
        "- All graph sections match declared graph types.",
        "- The files are mutually coherent enough to pass validator_modular.",
    ])


def ensure_required_yaml_files(leaf_path: Path) -> None:
    required = ["meta.yaml", "magnitudes.yaml", "formulas.yaml", "interpretacion.yaml"]
    missing = [name for name in required if not (leaf_path / name).exists()]
    if missing:
        raise FileNotFoundError("Faltan archivos YAML obligatorios:\n" + "\n".join(" - " + name for name in missing))


def run_generate_yaml_prompts(
    leaf_id: str | None = None,
    leafs_root: Path = DEFAULT_LEAFS_ROOT,
    output_root: Path = DEFAULT_OUTPUT_ROOT,
) -> Path:
    if leaf_id is None:
        leaf_id = require_leaf_id(None)
    leaf_id = normalize_leaf_id(leaf_id)
    leaf_path = leafs_root / leaf_id
    if not leaf_path.exists() and get_current_leaf_path is not None:
        current_leaf_path = get_current_leaf_path()
        if current_leaf_path is not None and current_leaf_path.name == leaf_id:
            leaf_path = current_leaf_path
    if not leaf_path.exists():
        raise FileNotFoundError(f"No existe el leaf: {leaf_path}")
    ensure_required_yaml_files(leaf_path)
    output_dir = output_root / leaf_id
    output_dir.mkdir(parents=True, exist_ok=True)
    prompts = build_all_prompts(leaf_id, leaf_path)
    for name, content in prompts.items():
        write_text(output_dir / name, content)
    return output_dir


def run_generate_consolidated_zip_prompt(
    leaf_id: str | None,
    output_root: Path = DEFAULT_OUTPUT_ROOT,
    leafs_root: Path = DEFAULT_LEAFS_ROOT,
) -> Path:
    leaf_id = normalize_leaf_id(require_leaf_id(leaf_id))
    output_dir = output_root / leaf_id
    output_dir.mkdir(parents=True, exist_ok=True)
    leaf_path = leafs_root / leaf_id
    if not leaf_path.exists() and get_current_leaf_path is not None:
        current_leaf_path = get_current_leaf_path()
        if current_leaf_path is not None and current_leaf_path.name == leaf_id:
            leaf_path = current_leaf_path
    meta_content = read_text_if_exists(leaf_path / "meta.yaml")
    content = build_all_yaml_zip_prompt(leaf_id, meta_content)
    write_text(output_dir / "00_todos_yaml.prompt.md", content)
    return output_dir


def main() -> None:
    parser = argparse.ArgumentParser(description="Genera prompts YAML de un leaf Phyxio.")
    parser.add_argument("--leaf-id", required=False, help="ID del leaf")
    parser.add_argument("--leafs-root", default=str(DEFAULT_LEAFS_ROOT))
    parser.add_argument("--output-root", default=str(DEFAULT_OUTPUT_ROOT))
    parser.add_argument("--consolidado", action="store_true", help="Generar solo el prompt maestro ZIP")
    args = parser.parse_args()

    try:
        if args.consolidado:
            output_dir = run_generate_consolidated_zip_prompt(
                args.leaf_id,
                Path(args.output_root),
                Path(args.leafs_root),
            )
            print("PHYXIO YAML PROMPT CONSOLIDADO")
            print(f"[OK] Generado en: {output_dir}")
            print(" - 00_todos_yaml.prompt.md")
        else:
            leaf_id = normalize_leaf_id(require_leaf_id(args.leaf_id))
            output_dir = run_generate_yaml_prompts(
                leaf_id=leaf_id,
                leafs_root=Path(args.leafs_root),
                output_root=Path(args.output_root),
            )
            print("PHYXIO YAML PROMPT GENERATOR")
            print(f"[OK] Prompts YAML generados en: {output_dir}")
            for name in ["01_meta.prompt.md", "02_combined_magnitudes_formulas.prompt.md", "04_graficos.prompt.md", "05_interpretacion.prompt.md"]:
                if (output_dir / name).exists():
                    print(f" - {name}")
    except Exception as exc:
        print(f"[ERROR] {type(exc).__name__}: {exc}")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
