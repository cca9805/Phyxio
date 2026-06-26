"""
Elimina inline math \(...\) que contienen ecuaciones (=, <, >, \leq, etc.)
de los archivos del leaf errores-frecuentes, convirtiéndolos a texto plano.

Solo toca los archivos con FAILs de render_math según el validador:
  - teoria.md, teoria.en.md (L53)
  - modelos.md (L31-34)
  - ejemplos.md, ejemplos.en.md (múltiples)
  - aplicaciones.md, aplicaciones.en.md (múltiples)
"""

import re
import os

LEAF = r"frontend\src\data_v2_i18n\fisica-clasica\mecanica\dinamica\aplicaciones\problemas-integrados\errores-frecuentes"

FILES = [
    "teoria.md",
    "teoria.en.md",
    "modelos.md",
    "modelos.en.md",
    "ejemplos.md",
    "ejemplos.en.md",
    "aplicaciones.md",
    "aplicaciones.en.md",
]


def latex_to_plain(text: str) -> str:
    """Convierte expresión LaTeX (sin delimitadores) a texto plano legible."""
    t = text

    # Comandos de comparación → Unicode
    t = re.sub(r'\\leq\s*', '≤ ', t)
    t = re.sub(r'\\geq\s*', '≥ ', t)
    t = re.sub(r'\\neq\s*', '≠ ', t)
    t = re.sub(r'\\approx\s*', '≈ ', t)
    t = re.sub(r'\\sim\s*', '~ ', t)
    t = re.sub(r'\\propto\s*', '∝ ', t)
    t = re.sub(r'\\ll\s*', '≪ ', t)
    t = re.sub(r'\\gg\s*', '≫ ', t)
    t = re.sub(r'\\Rightarrow\s*', '⇒ ', t)
    t = re.sub(r'\\to\s*', '→ ', t)
    t = re.sub(r'\\leftrightarrow\s*', '↔ ', t)

    # Operadores matemáticos
    t = re.sub(r'\\times\s*', '×', t)
    t = re.sub(r'\\cdot\s*', '·', t)
    t = re.sub(r'\\pm\s*', '±', t)
    t = re.sub(r'\\sum\s*', '∑', t)
    t = re.sub(r'\\frac\{([^}]+)\}\{([^}]+)\}', r'(\1)/(\2)', t)

    # Funciones trigonométricas / otras
    t = re.sub(r'\\cos\s*', 'cos ', t)
    t = re.sub(r'\\sin\s*', 'sin ', t)
    t = re.sub(r'\\tan\s*', 'tan ', t)
    t = re.sub(r'\\sqrt\{([^}]+)\}', r'√(\1)', t)

    # Letras griegas
    t = re.sub(r'\\theta\b', 'θ', t)
    t = re.sub(r'\\mu_s\b', 'μs', t)
    t = re.sub(r'\\mu_k\b', 'μk', t)
    t = re.sub(r'\\mu\b', 'μ', t)
    t = re.sub(r'\\alpha\b', 'α', t)
    t = re.sub(r'\\beta\b', 'β', t)
    t = re.sub(r'\\pi\b', 'π', t)
    t = re.sub(r'\\Delta\b', 'Δ', t)
    t = re.sub(r'\\delta\b', 'δ', t)
    t = re.sub(r'\\sigma\b', 'σ', t)
    t = re.sub(r'\\rho\b', 'ρ', t)

    # mathrm / text → plain content
    t = re.sub(r'\\mathrm\{([^}]+)\}', r'\1', t)
    t = re.sub(r'\\text\{([^}]+)\}', r'\1', t)

    # Superíndices y subíndices simples
    t = re.sub(r'\^2\b', '²', t)
    t = re.sub(r'\^3\b', '³', t)
    t = re.sub(r'\^n\b', 'ⁿ', t)
    t = re.sub(r'\^\{-1\}', '⁻¹', t)
    t = re.sub(r'\^\{-2\}', '⁻²', t)
    t = re.sub(r'\^\{([^}]+)\}', r'^(\1)', t)
    t = re.sub(r'_\{([^}]+)\}', r'_\1', t)
    t = re.sub(r'_([a-zA-Z0-9])', r'_\1', t)

    # Llaves de agrupación residuales
    t = re.sub(r'\{,\}', ',', t)
    t = re.sub(r'\{\.\}', '.', t)
    t = re.sub(r'\{([^}]*)\}', r'\1', t)

    # Espacios LaTeX
    t = re.sub(r'\\ ', ' ', t)
    t = re.sub(r'\\,', ' ', t)
    t = re.sub(r'\\!', '', t)

    # Limpiar espacios múltiples
    t = re.sub(r'  +', ' ', t).strip()

    # Eliminar backslashes residuales sueltos
    t = re.sub(r'\\(?=[^a-zA-Z])', '', t)

    return t


def is_important_expr(expr: str) -> bool:
    """Determina si una expresión LaTeX sería marcada como 'importante' por el validador."""
    markers = [
        '=', '<', '>',
        r'\le', r'\ge', r'\leq', r'\geq', r'\neq',
        r'\approx', r'\sim', r'\propto',
        r'\leftrightarrow', r'\longleftrightarrow',
        r'\Rightarrow', r'\Longrightarrow', r'\to',
    ]
    compact = re.sub(r'\s+', '', expr)
    if len(compact) < 4:
        return False
    for m in markers:
        if m in expr:
            return False  # We want to replace ALL, not just important ones
    return False


def process_line(line: str) -> str:
    r"""Procesa una línea: convierte \(...ecuación...\) a texto plano."""
    # Patrón para encontrar \(...\)
    pattern = re.compile(r'\\\(.+?\\\)')

    def replace_match(m):
        full = m.group(0)
        # Extraer contenido sin delimitadores
        inner = full[2:-2]  # Remove \( and \)
        
        # Check if the expression contains an equation/comparison marker
        important_markers = [
            '=', '<', '>',
            r'\le', r'\ge', r'\leq', r'\geq', r'\neq',
            r'\approx', r'\sim', r'\propto',
            r'\leftrightarrow', r'\to',
            r'\Rightarrow',
        ]
        compact = re.sub(r'\s+', '', inner)
        if len(compact) < 4:
            return full  # Too short, leave as is
        
        has_marker = any(marker in inner for marker in important_markers)
        # Also check the pattern: starts with variable = 
        starts_with_var_eq = bool(re.search(r'^[A-Za-z\\][A-Za-z0-9_{}\\^]*\s*=', inner))
        
        if has_marker or starts_with_var_eq:
            return latex_to_plain(inner)
        
        # Single symbol or non-equation: leave as is (but we can also convert for cleanliness)
        return full

    return pattern.sub(replace_match, line)


def process_file(filepath: str) -> None:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    new_lines = []
    changed_count = 0
    
    for i, line in enumerate(lines, start=1):
        new_line = process_line(line)
        if new_line != line:
            changed_count += 1
            print(f"  L{i}: {line[:80]!r} → {new_line[:80]!r}")
        new_lines.append(new_line)
    
    new_content = '\n'.join(new_lines)
    
    if changed_count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  ✓ {changed_count} líneas modificadas\n")
    else:
        print(f"  (sin cambios)\n")


def main():
    base = r"C:\Users\USER\Desktop\Phyxio"
    leaf_path = os.path.join(base, LEAF)
    
    for fname in FILES:
        fpath = os.path.join(leaf_path, fname)
        if os.path.exists(fpath):
            print(f"\n=== {fname} ===")
            process_file(fpath)
        else:
            print(f"\n=== {fname} === [NO ENCONTRADO]")


if __name__ == '__main__':
    main()
