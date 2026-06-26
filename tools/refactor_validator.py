"""
Estrategia definitiva: paquete plano con un módulo _core.py que contiene
TODAS las definiciones, y módulos temáticos que reexportan subconjuntos.
La IA puede leer solo el módulo temático relevante, pero la ejecución
se basa en _core.py que tiene todo el contexto.

Esto garantiza:
- Cero dependencias circulares
- Funcionalidad 100% idéntica al monolito
- La IA solo lee el módulo que necesita (~300-500 líneas vs 6200)
"""
import os, shutil, ast

SOURCE = "tools/phyxio_leaf_validator.py"
OUT = "tools/validator_modular"

# Limpiar y recrear
shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(OUT)

with open(SOURCE, encoding="utf-8-sig") as f:
    raw = f.read()

source_lines = raw.splitlines(keepends=True)
tree = ast.parse(raw)
nodes = list(tree.body)

# ── Encontrar primer func/class ──────────────────────────────────────────────
func_nodes = [n for n in nodes if isinstance(n, (ast.FunctionDef, ast.ClassDef))]

def node_start(n):
    return (n.decorator_list[0].lineno if n.decorator_list else n.lineno) - 1

def node_end(n, i, all_funcs, total):
    if i + 1 < len(all_funcs):
        return node_start(all_funcs[i + 1])
    return total

total = len(source_lines)
func_start = node_start(func_nodes[0])

# ── Preamble (imports + constantes) ─────────────────────────────────────────
preamble = "".join(source_lines[:func_start])

# ── Extraer cada función como texto ─────────────────────────────────────────
func_sources = {}
for i, node in enumerate(func_nodes):
    start = node_start(node)
    end = node_end(node, i, func_nodes, total)
    src = "".join(source_lines[start:end]).rstrip() + "\n\n"
    func_sources[node.name] = src

# ── Clasificación TEMÁTICA (solo para documentación, NO para imports) ────────
GROUPS = {
    "constants":          "Constantes globales, listas de secciones y patrones regex",
    "utils":              "Utilidades básicas: IO, YAML, conteo, normalización de texto",
    "yaml_checks":        "Validación de meta.yaml, magnitudes.yaml, formulas.yaml, interpretacion.yaml",
    "markdown_checks":    "Validación de todos los archivos .md (teoria, modelos, errores, ejemplos, aplicaciones, historia)",
    "graph_checks":       "Validación de gráficos SVG, DCL y Coord: registro, identidad, infocards, bilingüismo",
    "coherence_checks":   "Coherencia inter-archivos: símbolos, fórmulas↔magnitudes↔interpretación, markdown_entity_sync",
    "semantic_checks":    "Semántica didáctica: coverage, example_semantics, didactic_contract, learning_dynamics, cognitive_load",
    "report":             "Puntuación, reporte de resultados y sugerencias de corrección automática",
    "main":               "Orquestador validate_leaf() y punto de entrada CLI main()",
}

def classify(name):
    n = name.lower()
    if name in ("main", "validate_leaf"):
        return "main"
    if any(k in n for k in ("score_results", "print_full", "print_count", "print_words",
                             "auto_fix", "build_audit")):
        return "report"
    if any(k in n for k in ("semantics", "coverage", "didactic", "learning", "cognitive",
                             "operational_identity")):
        return "semantic_checks"
    if any(k in n for k in ("coherence", "markdown_entity_sync", "symbol_consistency")):
        return "coherence_checks"
    if any(k in n for k in ("graph", "coord", "dcl", "pregunta_fisica",
                             "route_graph", "check_coord", "check_dcl",
                             "resolve_graph", "validate_graph")):
        return "graph_checks"
    if any(k in n for k in ("teoria", "modelos", "errores", "ejemplos", "aplicaciones",
                             "historia", "markdown_structure", "markdown_rendering",
                             "exact_files", "mojibake_files", "english_files",
                             "latex_format", "magnitude_tagging",
                             "required_section_content", "errores_internal",
                             "modelos_reinforced", "historia_functional",
                             "leaf_uniqueness")):
        return "markdown_checks"
    if any(k in n for k in ("validate_meta", "validate_magnitudes", "validate_formulas",
                             "validate_interpretacion", "load_official_map",
                             "find_map_node", "derive_meta")):
        return "yaml_checks"
    return "utils"

groups = {k: [] for k in GROUPS}
for name in func_sources:
    groups[classify(name)].append(name)

# ── 1. Escribir _core.py (el monolito completo, sin BOM, con encoding limpio) ─
core_path = os.path.join(OUT, "_core.py")
with open(core_path, "w", encoding="utf-8") as f:
    f.write("# _core.py — Validador Phyxio completo. NO editar directamente.\n")
    f.write("# Este archivo es generado por tools/refactor_validator.py\n\n")
    f.write(preamble)
    for name, src in func_sources.items():
        f.write(src)
print(f"  _core.py: {sum(1 for _ in open(core_path,encoding='utf-8'))} líneas")

# ── 2. Escribir módulos temáticos (reexportan desde _core) ───────────────────
header = '''"""
{title}
{desc}

LECTURA IA: Este módulo reexporta las funciones del validador relacionadas
con "{title}". Para editar la lógica, busca la función en este listado
y edítala en _core.py en la línea indicada.
"""
from ._core import (
{imports}
)

# Re-exportar todo para que 'from .module import *' funcione
__all__ = [{all_list}]
'''

for group, names in groups.items():
    if not names:
        continue
    fname = os.path.join(OUT, f"{group}.py")
    imports_str = "\n".join(f"    {n}," for n in sorted(names))
    all_str = ", ".join(f'"{n}"' for n in sorted(names))
    
    with open(fname, "w", encoding="utf-8") as f:
        f.write(header.format(
            title=group,
            desc=GROUPS[group],
            imports=imports_str,
            all_list=all_str,
        ))
    print(f"  {group}.py: {len(names)} funciones")

# ── 3. __init__.py ────────────────────────────────────────────────────────────
with open(os.path.join(OUT, "__init__.py"), "w", encoding="utf-8") as f:
    f.write('"""Paquete modular del validador Phyxio v5."""\n')
    f.write("from ._core import *\n")

# ── 4. Entrypoint externo ─────────────────────────────────────────────────────
ep = "tools/phyxio_leaf_validator_v2.py"
with open(ep, "w", encoding="utf-8") as f:
    f.write("""#!/usr/bin/env python3
# -*- coding: utf-8 -*-
\"\"\"Phyxio Leaf Validator v2 — Entrypoint modular\"\"\"
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))
from tools.validator_modular._core import main
if __name__ == "__main__":
    main()
""")

# ── 5. Índice ─────────────────────────────────────────────────────────────────
idx = os.path.join(OUT, "00_INDEX.md")
with open(idx, "w", encoding="utf-8") as f:
    f.write("# Índice del paquete validator_modular\n\n")
    f.write("El archivo `_core.py` contiene toda la lógica real del validador.\n")
    f.write("Los módulos temáticos reexportan subconjuntos para facilitar la lectura de la IA.\n\n")
    f.write("| Módulo | Descripción | Funciones |\n|---|---|---|\n")
    f.write("| `_core.py` | Monolito completo generado automáticamente | TODAS |\n")
    for group, desc in GROUPS.items():
        names = groups.get(group, [])
        f.write(f"| `{group}.py` | {desc} | {len(names)} |\n")
    f.write("\n## Funciones por módulo\n\n")
    for group, names in groups.items():
        if names:
            f.write(f"### {group}\n")
            for n in sorted(names):
                f.write(f"- `{n}`\n")
            f.write("\n")

print(f"\n✅ Paquete regenerado en {OUT}")
print(f"   Entrypoint: {ep}")
print(f"   Índice:     {idx}")
