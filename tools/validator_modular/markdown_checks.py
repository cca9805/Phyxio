"""
markdown_checks
Validación de todos los archivos .md (teoria, modelos, errores, ejemplos, aplicaciones, historia)

LECTURA IA: Este módulo reexporta las funciones del validador relacionadas
con "markdown_checks". Para editar la lógica, busca la función en este listado
y edítala en _core.py en la línea indicada.
"""
from ._core import (
    find_aplicaciones_template_issues,
    find_required_section_content_issues,
    validate_aplicaciones,
    validate_ejemplos,
    validate_english_files,
    validate_errores_internal_structure,
    validate_exact_files,
    validate_historia_functional,
    validate_latex_format,
    validate_leaf_uniqueness,
    validate_magnitude_tagging,
    validate_markdown_rendering_files,
    validate_markdown_structure,
    validate_modelos_cuantitativo,
    validate_modelos_reinforced,
    validate_mojibake_files,
)

# Re-exportar todo para que 'from .module import *' funcione
__all__ = ["find_aplicaciones_template_issues", "find_required_section_content_issues", "validate_aplicaciones", "validate_ejemplos", "validate_english_files", "validate_errores_internal_structure", "validate_exact_files", "validate_historia_functional", "validate_latex_format", "validate_leaf_uniqueness", "validate_magnitude_tagging", "validate_markdown_rendering_files", "validate_markdown_structure", "validate_modelos_cuantitativo", "validate_modelos_reinforced", "validate_mojibake_files"]
