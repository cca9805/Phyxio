"""
report
Puntuación, reporte de resultados y sugerencias de corrección automática

LECTURA IA: Este módulo reexporta las funciones del validador relacionadas
con "report". Para editar la lógica, busca la función en este listado
y edítala en _core.py en la línea indicada.
"""
from ._core import (
    auto_fix_suggestions,
    build_audit_report,
    print_count_report,
    print_full_report,
    print_words_report,
    score_results,
)

# Re-exportar todo para que 'from .module import *' funcione
__all__ = ["auto_fix_suggestions", "build_audit_report", "print_count_report", "print_full_report", "print_words_report", "score_results"]
