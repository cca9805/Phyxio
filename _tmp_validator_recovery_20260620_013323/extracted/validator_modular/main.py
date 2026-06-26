"""
main
Orquestador validate_leaf() y punto de entrada CLI main()

LECTURA IA: Este módulo reexporta las funciones del validador relacionadas
con "main". Para editar la lógica, busca la función en este listado
y edítala en _core.py en la línea indicada.
"""
from ._core import (
    main,
    validate_leaf,
)

# Re-exportar todo para que 'from .module import *' funcione
__all__ = ["main", "validate_leaf"]
