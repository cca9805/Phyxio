from __future__ import annotations

import argparse
import copy
from pathlib import Path
from typing import Any

import yaml

PROJECT_ROOT = Path(__file__).resolve().parents[3]
DEFAULT_LEAFS_ROOT = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n" / "pruebas"

INTERPRETACION_SECTIONS = [
    "summary",
    "physical_reading",
    "coherence",
    "model_validity",
    "graph_reading",
    "likely_errors",
    "next_step",
]

RULE_BLOCKS = [
    "summary_rules",
    "physical_reading_rules",
    "coherence_rules",
    "model_validity_rules",
    "graph_rules",
    "likely_errors",
    "next_step_rules",
    "physical_intuition",
    "limiting_cases",
]


def read_yaml(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {}
    text = path.read_text(encoding="utf-8").strip()
    if not text:
        return {}
    data = yaml.safe_load(text)
    return data if isinstance(data, dict) else {}


def find_node_in_map(nodes: list[dict], leaf_id: str) -> dict[str, Any] | None:
    """Busca recursivamente un nodo por ID en el mapa."""
    for node in nodes:
        if node.get("id") == leaf_id:
            return node
        if "children" in node:
            result = find_node_in_map(node["children"], leaf_id)
            if result:
                return result
    return None


def get_map_node(leaf_id: str) -> dict[str, Any]:
    """Obtiene los datos de un nodo desde phyxio-map.yaml."""
    map_path = PROJECT_ROOT / "frontend" / "src" / "v2" / "map" / "phyxio-map.yaml"
    if not map_path.exists():
        return {}
    try:
        data = read_yaml(map_path)
        root = data.get("root", {})
        # Buscar en root y sus children recursivamente
        if root.get("id") == leaf_id:
            return root
        node = find_node_in_map(root.get("children", []), leaf_id)
        return node if node else {}
    except Exception:
        return {}


def write_yaml(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        yaml.safe_dump(data, allow_unicode=True, sort_keys=False, default_flow_style=False, width=120),
        encoding="utf-8",
    )


def is_real_id(value: Any) -> bool:
    text = "" if value is None else str(value).strip()
    return bool(text and text not in {"<target_id>", "target_id", "id"})


def csv_join(values: list[str]) -> str:
    result: list[str] = []
    for value in values:
        text = str(value).strip()
        if text and text not in result:
            result.append(text)
    return ", ".join(result)


def get_nested_bool(doc: dict[str, Any], path: list[str], default: bool = False) -> bool:
    current: Any = doc
    for key in path:
        if not isinstance(current, dict):
            return default
        current = current.get(key)
    return current if isinstance(current, bool) else default


def get_string_list(doc: dict[str, Any], key: str) -> list[str]:
    value = doc.get(key, [])
    if not isinstance(value, list):
        return []
    return [str(item).strip() for item in value if str(item).strip()]


def extract_magnitude_index(doc: dict[str, Any]) -> dict[str, dict[str, Any]]:
    result: dict[str, dict[str, Any]] = {}
    for item in doc.get("magnitudes", []) or []:
        if not isinstance(item, dict):
            continue
        item_id = str(item.get("id", "")).strip()
        if is_real_id(item_id):
            result[item_id] = item
    return result


def extract_formula_ids(doc: dict[str, Any]) -> list[str]:
    result: list[str] = []
    for item in doc.get("formulas", []) or []:
        if not isinstance(item, dict):
            continue
        item_id = str(item.get("id", "")).strip()
        if is_real_id(item_id):
            result.append(item_id)
    return result


def extract_targets_from_formulas(doc: dict[str, Any]) -> dict[str, dict[str, Any]]:
    targets: dict[str, dict[str, Any]] = {}
    for formula in doc.get("formulas", []) or []:
        if not isinstance(formula, dict):
            continue
        formula_id = str(formula.get("id", "")).strip()
        semantics = formula.get("result_semantics", {}) or {}
        if isinstance(semantics, dict):
            target_id = str(semantics.get("target", "")).strip()
            if is_real_id(target_id):
                targets[target_id] = {
                    "source": "result_semantics",
                    "formula_id": formula_id,
                    "kind": semantics.get("kind", ""),
                }
        for rearrangement in formula.get("rearrangements", []) or []:
            if not isinstance(rearrangement, dict):
                continue
            target_id = str(rearrangement.get("target", "")).strip()
            if is_real_id(target_id) and target_id not in targets:
                targets[target_id] = {
                    "source": "rearrangement",
                    "formula_id": formula_id,
                    "kind": "",
                }
    return targets


def preferred_graph_type(meta: dict[str, Any]) -> str:
    graphs = {item.lower() for item in get_string_list(meta, "graficos")}
    if "dcl" in graphs:
        return "Dcl"
    if "coord" in graphs:
        return "Coord"
    if "svg" in graphs:
        return "Svg"
    return "none"


def rule(rule_id: str, status: str, es: str, en: str) -> dict[str, Any]:
    return {"id": rule_id, "when": "true", "status": status, "text": {"es": es, "en": en}}


def default_rules(target_id: str, graph_enabled: bool) -> dict[str, list[dict[str, Any]]]:
    return {
        "summary_rules": [rule(f"{target_id}_summary_base", "ok", f"El resultado [[{target_id}]] indica la magnitud física principal que se está interpretando.", f"The result [[{target_id}]] indicates the main physical quantity being interpreted.")],
        "physical_reading_rules": [rule(f"{target_id}_physical_reading_base", "info", f"Lee [[{target_id}]] junto con su unidad, su signo y el contexto físico del leaf.", f"Read [[{target_id}]] together with its unit, sign, and the physical context of the leaf.")],
        "coherence_rules": [rule(f"{target_id}_coherence_base", "ok", f"Comprueba que [[{target_id}]] sea coherente con las magnitudes de entrada y con la dimensión esperada.", f"Check that [[{target_id}]] is consistent with the input quantities and the expected dimension.")],
        "model_validity_rules": [rule(f"{target_id}_model_validity_base", "info", f"Interpreta [[{target_id}]] solo dentro de las hipótesis físicas del modelo usado en este leaf.", f"Interpret [[{target_id}]] only within the physical assumptions of the model used in this leaf.")],
        "graph_rules": [rule(f"{target_id}_graph_base", "info", f"Relaciona [[{target_id}]] con la lectura gráfica disponible en el leaf." if graph_enabled else f"No hay una lectura gráfica prioritaria para [[{target_id}]] en este leaf.", f"Relate [[{target_id}]] to the graph reading available in the leaf." if graph_enabled else f"There is no primary graph reading for [[{target_id}]] in this leaf.")],
        "likely_errors": [rule(f"{target_id}_likely_error_base", "warning", f"No interpretes [[{target_id}]] como un número aislado. Su sentido depende del modelo, la unidad y el signo.", f"Do not interpret [[{target_id}]] as an isolated number. Its meaning depends on the model, unit, and sign.")],
        "next_step_rules": [rule(f"{target_id}_next_step_base", "info", f"Después de obtener [[{target_id}]], revisa la coherencia física y vuelve a la calculadora si necesitas otro despeje.", f"After obtaining [[{target_id}]], check the physical consistency and return to the calculator if another rearrangement is needed.")],
        "physical_intuition": [rule(f"{target_id}_physical_intuition_base", "info", f"Intuitivamente, [[{target_id}]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.", f"Intuitively, [[{target_id}]] summarizes how the system responds when the relevant quantities change.")],
        "limiting_cases": [rule(f"{target_id}_limiting_case_base", "info", f"Analiza los casos límite de [[{target_id}]] comprobando qué ocurre si una magnitud dominante crece, disminuye o se anula.", f"Analyze the limiting cases of [[{target_id}]] by checking what happens if a dominant quantity grows, decreases, or becomes zero.")],
    }


def default_result_blocks(graph_enabled: bool) -> dict[str, Any]:
    titles = {
        "summary": {"es": "Resumen", "en": "Summary"},
        "physical_reading": {"es": "Lectura física", "en": "Physical reading"},
        "coherence": {"es": "Coherencia", "en": "Coherence"},
        "model_validity": {"es": "Validez del modelo", "en": "Model validity"},
        "graph_reading": {"es": "Lectura gráfica", "en": "Graph reading"},
        "likely_errors": {"es": "Errores probables", "en": "Likely errors"},
        "next_step": {"es": "Siguiente paso", "en": "Next step"},
    }
    return {
        section: {"enabled": section != "graph_reading" or graph_enabled, "order": index, "title": titles[section]}
        for index, section in enumerate(INTERPRETACION_SECTIONS, start=1)
    }


def target_doc(target_id: str, info: dict[str, Any], magnitude_index: dict[str, dict[str, Any]], graph_enabled: bool) -> dict[str, Any]:
    magnitude = magnitude_index.get(target_id, {})
    kind = str(info.get("kind", "")).strip().lower()
    is_vector = bool(magnitude.get("is_vector", False)) or kind == "vector"
    magnitude_type = "vector" if is_vector else "scalar"
    name = magnitude.get("nombre", {}) if isinstance(magnitude.get("nombre", {}), dict) else {}
    physical_role = magnitude.get("physical_role", "")
    role_es = physical_role.get("es", "") if isinstance(physical_role, dict) else str(physical_role)
    role_en = physical_role.get("en", "") if isinstance(physical_role, dict) else ""
    role_es = role_es or name.get("es", "") or f"Resultado físico asociado a {target_id}"
    role_en = role_en or name.get("en", "") or f"Physical result associated with {target_id}"
    rules = default_rules(target_id, graph_enabled)
    result: dict[str, Any] = {
        "enabled": True,
        "magnitude_type": magnitude_type,
        "semantic_role": {"es": role_es, "en": role_en},
        **rules,
        "sign_convention_reminder": {
            "enabled": is_vector,
            "text": {
                "es": f"El signo de [[{target_id}]] depende del convenio de ejes elegido." if is_vector else "",
                "en": f"The sign of [[{target_id}]] depends on the chosen axis convention." if is_vector else "",
            },
            "common_sign_errors": [
                {
                    "es": f"Usar el signo de [[{target_id}]] sin declarar el eje positivo.",
                    "en": f"Using the sign of [[{target_id}]] without declaring the positive axis.",
                }
            ] if is_vector else [],
        },
    }
    return result


def merge_target(base: dict[str, Any], existing: Any) -> dict[str, Any]:
    if not isinstance(existing, dict):
        return base
    result = copy.deepcopy(base)
    for key, value in existing.items():
        if key in RULE_BLOCKS and isinstance(value, list) and value:
            result[key] = value
        elif key == "sign_convention_reminder" and isinstance(value, dict):
            merged = copy.deepcopy(result[key])
            merged.update(value)
            result[key] = merged
        elif value not in (None, "", [], {}):
            result[key] = value
    return result


def build_interpretacion(meta: dict[str, Any], magnitudes: dict[str, Any], formulas: dict[str, Any], current: dict[str, Any], map_node: dict[str, Any] | None = None) -> dict[str, Any]:
    leaf_id = str(meta.get("id", "")).strip()
    if not is_real_id(leaf_id):
        raise ValueError("meta.yaml no tiene un id real. Ejecuta primero sync_meta_from_map.py.")
    magnitude_index = extract_magnitude_index(magnitudes)
    formula_ids = extract_formula_ids(formulas)
    targets_info = extract_targets_from_formulas(formulas)
    if not magnitude_index:
        raise ValueError("magnitudes.yaml no contiene magnitudes reales. Primero genera y escribe magnitudes.yaml.")
    if not formula_ids:
        raise ValueError("formulas.yaml no contiene fórmulas reales. Primero genera y escribe formulas.yaml.")
    if not targets_info:
        raise ValueError("formulas.yaml no contiene targets reales en result_semantics.target ni rearrangements.target.")

    # Usar orden del mapa si está disponible, sino del meta
    orden = map_node.get("orden") if map_node else None
    if orden is None or orden == 0:
        orden = meta.get("orden", 0)

    graph_type = preferred_graph_type(meta)
    graph_enabled = graph_type != "none"
    bloque = str(meta.get("bloque", "")).strip().lower()
    subbloque = str(meta.get("subbloque", "")).strip().lower()
    current_targets = current.get("targets", {}) if isinstance(current.get("targets", {}), dict) else {}
    targets = {
        target_id: merge_target(target_doc(target_id, info, magnitude_index, graph_enabled), current_targets.get(target_id))
        for target_id, info in targets_info.items()
    }

    return {
        "version": "5.0.0",
        "id": leaf_id,
        "leaf_id": leaf_id,
        "nombre": meta.get("nombre", {"es": "", "en": ""}),
        "scope": {
            "area": meta.get("area", ""),
            "bloque": meta.get("bloque", ""),
            "subbloque": meta.get("subbloque", ""),
            "parent_id": meta.get("parent_id", ""),
            "ruta_relativa": meta.get("ruta_relativa", ""),
            "orden": orden,
        },
        "output_contract": {
            "sections": INTERPRETACION_SECTIONS,
            "inline_mode": {"max_sections": 2, "priority": ["summary", "likely_errors"]},
            "extended_mode": {"show_all": True},
        },
        "result_blocks": default_result_blocks(graph_enabled),
        "ui": {
            "enabled": get_nested_bool(meta, ["interpretacion", "enabled"], True),
            "display_modes": {"calculator_inline": True, "graph_inline": graph_enabled, "dedicated_tab": True, "modal": False},
            "labels": {"es": "Interpretación física", "en": "Physical interpretation"},
            "priority_order": INTERPRETACION_SECTIONS,
            "inline_limits": {"max_sections": 3, "priority": ["summary", "likely_errors", "next_step"]},
        },
        "mini_graph": {"enabled": graph_enabled, "preferred_type": graph_type},
        "output_policy": {"show_summary_first": True, "max_inline_messages": 3, "show_warnings": True, "show_likely_errors": True},
        "dependencies": {
            "formulas": csv_join(formula_ids),
            "magnitudes": csv_join(list(magnitude_index.keys())),
            "requires_formulas": True,
            "requires_magnitudes": True,
            "supports_graph_binding": graph_enabled,
        },
        "global_context": {
            "enabled": True,
            "physical_domain": {"es": str(meta.get("bloque", "")), "en": str(meta.get("physical_role", {}).get("en", "")) if isinstance(meta.get("physical_role", {}), dict) else ""},
            "axis_convention": {"es": "El signo depende del convenio de ejes elegido cuando intervienen magnitudes vectoriales.", "en": "The sign depends on the chosen axis convention when vector quantities are involved."},
            "standard_assumptions": [{"es": "El modelo se interpreta dentro de las hipótesis declaradas en el leaf.", "en": "The model is interpreted within the assumptions declared in the leaf."}],
            "standard_warnings": [{"es": "No interpretes el resultado sin revisar unidades, signo y validez del modelo.", "en": "Do not interpret the result without checking units, sign, and model validity."}],
        },
        "graph_binding": {"enabled": graph_enabled, "type": graph_type, "channels": get_string_list(meta, "graficos")},
        "cross_checks": {"enabled": True, "checks": [{"id": "dimension_check", "status": "ok", "text": {"es": "La interpretación debe respetar la dimensión física de cada resultado.", "en": "The interpretation must respect the physical dimension of each result."}}]},
        "error_patterns": {"enabled": True, "patterns": [{"id": "unit_sign_model_confusion", "status": "warning", "text": {"es": "Un error frecuente es leer el número sin unidad, signo o modelo físico.", "en": "A common error is reading the number without unit, sign, or physical model."}}]},
        "graph_reading_policy": {"enabled": graph_enabled, "primary_variable": next(iter(targets.keys()), ""), "reading_sequence": [{"es": "Identifica ejes, dirección, sentido y relación entre magnitudes antes de interpretar el resultado.", "en": "Identify axes, direction, sense, and the relation between quantities before interpreting the result."}] if graph_enabled else [], "key_points": [{"es": "Conecta la lectura visual con el signo, la unidad y el modelo físico.", "en": "Connect the visual reading with sign, unit, and the physical model."}] if graph_enabled else []},
        "comparative_context": {"enabled": True, "reference_values": [{"es": "Compara el resultado con valores cotidianos o escalas físicas conocidas cuando sea posible.", "en": "Compare the result with everyday values or known physical scales when possible."}], "order_of_magnitude_check": True},
        "dimensional_hint": {"enabled": True, "formula_dimensions": {"es": "Comprueba que las unidades finales coinciden con la magnitud interpretada.", "en": "Check that the final units match the interpreted quantity."}, "common_unit_mistakes": [{"es": "Mezclar unidades incompatibles antes de aplicar la fórmula.", "en": "Mixing incompatible units before applying the formula."}]},
        "free_body_diagram_hint": {"enabled": graph_type == "Dcl", "key_forces": [{"es": "Distingue fuerzas reales, componentes y resultante antes de interpretar el resultado.", "en": "Distinguish real forces, components, and resultant before interpreting the result."}] if graph_type == "Dcl" else [], "equilibrium_condition": {"es": "La fuerza neta nula corresponde a equilibrio traslacional o velocidad constante.", "en": "A zero net force corresponds to translational equilibrium or constant velocity."} if graph_type == "Dcl" else {"es": "", "en": ""}},
        "process_type_detection": {"enabled": bloque == "termodinamica", "processes": []},
        "wave_behavior_context": {"enabled": bloque == "ondas" or subbloque == "sonido", "phenomena": []},
        "field_visualization_hint": {"enabled": bloque == "electromagnetismo", "field_lines": {"direction_rule": {"es": "La dirección del campo se interpreta según el convenio físico del leaf." if bloque == "electromagnetismo" else "", "en": "The field direction is interpreted according to the physical convention of the leaf." if bloque == "electromagnetismo" else ""}, "density_meaning": {"es": "La densidad de líneas representa intensidad relativa del campo." if bloque == "electromagnetismo" else "", "en": "Line density represents relative field strength." if bloque == "electromagnetismo" else ""}}, "superposition_note": {"es": "El campo total se interpreta como superposición de contribuciones." if bloque == "electromagnetismo" else "", "en": "The total field is interpreted as a superposition of contributions." if bloque == "electromagnetismo" else ""}},
        "ray_tracing_hint": {"enabled": bloque == "optica", "construction_rays": [], "image_type_detection": []},
        "targets": targets,
    }


def sync_interpretacion_from_meta(leaf_id: str, leafs_root: Path = DEFAULT_LEAFS_ROOT) -> Path:
    leaf_path = leafs_root / leaf_id
    if not leaf_path.exists():
        raise FileNotFoundError("No existe la carpeta del leaf: " + str(leaf_path))
    meta = read_yaml(leaf_path / "meta.yaml")
    magnitudes = read_yaml(leaf_path / "magnitudes.yaml")
    formulas = read_yaml(leaf_path / "formulas.yaml")
    current = read_yaml(leaf_path / "interpretacion.yaml")
    map_node = get_map_node(leaf_id)
    doc = build_interpretacion(meta, magnitudes, formulas, current, map_node)
    output = leaf_path / "interpretacion.yaml"
    write_yaml(output, doc)
    return output


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Sincroniza interpretacion.yaml desde meta.yaml, magnitudes.yaml y formulas.yaml.")
    parser.add_argument("--leaf-id", required=True, help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa")
    parser.add_argument("--leafs-root", default=str(DEFAULT_LEAFS_ROOT), help="Ruta raíz donde están los leafs.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    leaf_id = args.leaf_id.strip()
    output = sync_interpretacion_from_meta(leaf_id, Path(args.leafs_root).resolve())
    print()
    print("PHYXIO INTERPRETACION SYNC")
    print("================================")
    print("Leaf ID: " + leaf_id)
    print("Output:  " + str(output))
    print()
    print("[OK] interpretacion.yaml sincronizado correctamente.")
    print()


if __name__ == "__main__":
    main()
