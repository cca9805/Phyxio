"""
yaml_checks
Validación de meta.yaml, magnitudes.yaml, formulas.yaml, interpretacion.yaml

LECTURA IA: Este módulo reexporta las funciones del validador relacionadas
con "yaml_checks". Para editar la lógica, busca la función en este listado
y edítala en _core.py en la línea indicada.
"""
from ._core import (
    derive_meta_hierarchy_from_map,
    derive_meta_hierarchy_from_route,
    find_map_node_by_leaf_id,
    find_map_nodes_by_leaf_id,
    load_official_map_data,
    validate_formulas,
    validate_interpretacion,
    validate_magnitudes,
    validate_meta,
    validate_meta_against_map,
)

# Re-exportar todo para que 'from .module import *' funcione
__all__ = ["derive_meta_hierarchy_from_map", "derive_meta_hierarchy_from_route", "find_map_node_by_leaf_id", "find_map_nodes_by_leaf_id", "load_official_map_data", "validate_formulas", "validate_interpretacion", "validate_magnitudes", "validate_meta", "validate_meta_against_map"]
