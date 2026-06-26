"""
graph_checks
Validación de gráficos SVG, DCL y Coord: registro, identidad, infocards, bilingüismo

LECTURA IA: Este módulo reexporta las funciones del validador relacionadas
con "graph_checks". Para editar la lógica, busca la función en este listado
y edítala en _core.py en la línea indicada.
"""
from ._core import (
    _collect_graph_texts,
    _entry_present_in_any_graph,
    check_coord_bilingual_structure,
    check_dcl_warning_i18n,
    find_duplicate_long_paragraphs,
    resolve_graph_registry,
    route_graph_namespace,
    validate_coord_semantic_alignment,
    validate_dcl_profile_structure,
    validate_graph_calc_dependency,
    validate_graph_components,
    validate_graph_index_format,
    validate_graph_identity,
    validate_graph_infocards,
    validate_graph_no_overlap,
    validate_graph_not_decorative,
    validate_graph_reuse,
    validate_graph_shared_infrastructure,
    validate_graph_standard_contract,
    validate_graph_star_uniqueness,
    validate_graph_type_rules,
    validate_pregunta_fisica_central,
)

# Re-exportar todo para que 'from .module import *' funcione
__all__ = ["_collect_graph_texts", "_entry_present_in_any_graph", "check_coord_bilingual_structure", "check_dcl_warning_i18n", "find_duplicate_long_paragraphs", "resolve_graph_registry", "route_graph_namespace", "validate_coord_semantic_alignment", "validate_dcl_profile_structure", "validate_graph_calc_dependency", "validate_graph_components", "validate_graph_index_format", "validate_graph_identity", "validate_graph_infocards", "validate_graph_no_overlap", "validate_graph_not_decorative", "validate_graph_reuse", "validate_graph_shared_infrastructure", "validate_graph_standard_contract", "validate_graph_star_uniqueness", "validate_graph_type_rules", "validate_pregunta_fisica_central"]
