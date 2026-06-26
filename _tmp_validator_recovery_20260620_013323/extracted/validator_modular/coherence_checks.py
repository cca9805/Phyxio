"""
coherence_checks
Coherencia inter-archivos: símbolos, fórmulas↔magnitudes↔interpretación, markdown_entity_sync

LECTURA IA: Este módulo reexporta las funciones del validador relacionadas
con "coherence_checks". Para editar la lógica, busca la función en este listado
y edítala en _core.py en la línea indicada.
"""
from ._core import (
    validate_cross_file_coherence,
    validate_graph_leaf_coherence,
    validate_graph_magnitude_coherence,
    validate_graph_pfc_coherence,
    validate_markdown_entity_sync,
    validate_symbol_consistency,
)

# Re-exportar todo para que 'from .module import *' funcione
__all__ = ["validate_cross_file_coherence", "validate_graph_leaf_coherence", "validate_graph_magnitude_coherence", "validate_graph_pfc_coherence", "validate_markdown_entity_sync", "validate_symbol_consistency"]
