"""
semantic_checks
Semántica didáctica: coverage, example_semantics, didactic_contract, learning_dynamics, cognitive_load

LECTURA IA: Este módulo reexporta las funciones del validador relacionadas
con "semantic_checks". Para editar la lógica, busca la función en este listado
y edítala en _core.py en la línea indicada.
"""
from ._core import (
    validate_cognitive_load,
    validate_concept_coverage,
    validate_example_semantics,
    validate_interpretation_semantics,
    validate_leaf_didactic_contract,
    validate_leaf_operational_identity,
    validate_learning_dynamics,
)

# Re-exportar todo para que 'from .module import *' funcione
__all__ = ["validate_cognitive_load", "validate_concept_coverage", "validate_example_semantics", "validate_interpretation_semantics", "validate_leaf_didactic_contract", "validate_leaf_operational_identity", "validate_learning_dynamics"]
