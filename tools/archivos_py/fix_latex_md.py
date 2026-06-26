#!/usr/bin/env python3
"""
Script para eliminar LaTeX ($$ blocks e inline $...$) de archivos .md
y reemplazarlos con referencias {{f:id}} correctas o texto plano.
"""

import re
import sys
from pathlib import Path
from typing import Optional

BASE = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica')

# ─── Normalización de LaTeX para matching ──────────────────────────────────────

def normalize_latex(s: str) -> str:
    """Normaliza una expresión LaTeX para comparación."""
    s = s.strip()
    # Quitar formateo
    s = re.sub(r'\\(vec|hat|bar|tilde|dot|ddot|overline|underline)\{([^}]+)\}', r'\2', s)
    s = re.sub(r'\\(mathbf|boldsymbol|mathrm|text|textbf|textit|emph)\{([^}]+)\}', r'\2', s)
    # Quitar espaciado LaTeX
    s = re.sub(r'\\[,;:!]', '', s)
    s = re.sub(r'\\quad|\\qquad', '', s)
    s = re.sub(r'\\left|\\right', '', s)
    # Normalizar fracciones
    s = re.sub(r'\\(?:t)?frac\{([^}]+)\}\{([^}]+)\}', r'(\1)/(\2)', s)
    # Quitar llaves sueltas
    s = re.sub(r'\{([^}]+)\}', r'\1', s)
    s = re.sub(r'[{}]', '', s)
    # Normalizar espacios
    s = re.sub(r'\s+', ' ', s).strip()
    s = s.lower()
    return s


def latex_to_plain(expr: str) -> str:
    """Convierte LaTeX a texto plano legible."""
    s = expr.strip()
    # Vector y otros decoradores
    s = re.sub(r'\\(vec|hat|bar|tilde|overline)\{([^}]+)\}', r'\2', s)
    s = re.sub(r'\\(mathbf|boldsymbol|mathrm)\{([^}]+)\}', r'\2', s)
    # text{...}
    s = re.sub(r'\\text\{([^}]+)\}', r'\1', s)
    # fracciones
    s = re.sub(r'\\(?:t)?frac\{([^}]+)\}\{([^}]+)\}', r'(\1)/(\2)', s)
    # sqrt
    s = re.sub(r'\\sqrt\{([^}]+)\}', r'√(\1)', s)
    # Letras griegas
    greek = {
        'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ',
        'theta': 'θ', 'omega': 'ω', 'sigma': 'σ', 'tau': 'τ',
        'Delta': 'Δ', 'Omega': 'Ω', 'Sigma': 'Σ', 'pi': 'π',
        'mu': 'μ', 'phi': 'φ', 'rho': 'ρ', 'lambda': 'λ', 'eta': 'η',
        'epsilon': 'ε',
    }
    for cmd, char in greek.items():
        s = s.replace(f'\\{cmd}', char)
    # Operadores
    s = s.replace('\\cdot', '·').replace('\\times', '×')
    s = s.replace('\\pm', '±').replace('\\approx', '≈')
    s = s.replace('\\le', '≤').replace('\\leq', '≤')
    s = s.replace('\\ge', '≥').replace('\\geq', '≥')
    s = s.replace('\\neq', '≠').replace('\\ne', '≠')
    s = s.replace('\\Rightarrow', '→').replace('\\rightarrow', '→')
    s = s.replace('\\Longrightarrow', '→').replace('\\longrightarrow', '→')
    s = s.replace('\\implies', '→').replace('\\to', '→')
    s = s.replace('\\quad', '  ').replace('\\qquad', '    ')
    s = s.replace('\\,', ' ').replace('\\;', ' ').replace('\\!', '')
    s = s.replace('\\infty', '∞').replace('\\checkmark', '✓')
    s = s.replace('\\left', '').replace('\\right', '')
    # Funciones trig
    for fn in ['sin', 'cos', 'tan', 'log', 'ln', 'exp', 'max', 'min', 'sqrt']:
        s = s.replace(f'\\{fn}', fn)
    # Superscripts/subscripts simples
    s = re.sub(r'\^\{?2\}?', '²', s)
    s = re.sub(r'\^\{?3\}?', '³', s)
    s = re.sub(r'\^\{-1\}', '⁻¹', s)
    s = re.sub(r'\^\{-2\}', '⁻²', s)
    s = re.sub(r'\^\{([^}]+)\}', r'^{\1}', s)
    # Limpiar llaves sobrantes
    s = re.sub(r'\{([^}]+)\}', r'\1', s)
    s = re.sub(r'[{}]', '', s)
    # Limpiar backslashes restantes
    s = re.sub(r'\\([A-Za-z]+)', r'\1', s)
    # Espacios múltiples
    s = re.sub(r' {2,}', ' ', s).strip()
    return s


# ─── Carga de fórmulas ─────────────────────────────────────────────────────────

def load_formulas(leaf_path: Path) -> dict:
    """Carga {id: latex_expr} de formulas.yaml."""
    import yaml
    fpath = leaf_path / 'formulas.yaml'
    if not fpath.exists():
        return {}
    with open(fpath, encoding='utf-8') as f:
        data = yaml.safe_load(f)
    formulas = {}
    if isinstance(data, dict):
        items = data.get('formulas', [])
    elif isinstance(data, list):
        items = data
    else:
        return {}
    for item in items:
        if isinstance(item, dict):
            fid = item.get('id', '')
            latex = item.get('latex', '') or ''
            if fid:
                formulas[fid] = latex
    return formulas


def find_formula_id(block_content: str, formulas: dict) -> Optional[str]:
    """Intenta hacer match de un bloque LaTeX con una fórmula."""
    norm_block = normalize_latex(block_content.strip())
    if not norm_block:
        return None
    
    best_id = None
    best_score = 0
    
    for fid, latex in formulas.items():
        norm_formula = normalize_latex(latex)
        if not norm_formula:
            continue
        # Coincidencia exacta
        if norm_block == norm_formula:
            return fid
        # Coincidencia parcial
        if norm_formula and (norm_formula in norm_block or norm_block in norm_formula):
            score = len(norm_formula) if norm_formula in norm_block else len(norm_block)
            if score > best_score:
                best_score = score
                best_id = fid
    
    return best_id if best_score > 5 else None


BACKTICK_MAGNITUDE_RE = re.compile(r'`([^`]*?)\s*\[\[([^\]]+)\]\]([^`]*?)`')
_BACKTICK_MAG_CHECK_RE = re.compile(r'`.*?\[\[.*?\]\].*?`', re.DOTALL)


def fix_backtick_magnitudes(line: str) -> str:
    """Elimina [[id]] de dentro de backticks.
    
    Si la línea tiene patrón `...[[id]]...`, extrae el [[id]] fuera del backtick.
    Si el patrón sigue activo (múltiples backtick spans), elimina todos los backticks.
    """
    if not _BACKTICK_MAG_CHECK_RE.search(line):
        return line  # no issue, keep as is
    
    # Step 1: move [[id]] outside backtick spans
    line = BACKTICK_MAGNITUDE_RE.sub(
        lambda m: f'`{m.group(1).rstrip()}` [[{m.group(2)}]]{m.group(3)}',
        line
    )
    
    # Step 2: if still has pattern (due to multiple backtick spans on same line),
    # remove all backtick delimiters from the line
    if _BACKTICK_MAG_CHECK_RE.search(line):
        line = line.replace('`', '')
    
    return line


# ─── Procesamiento de archivos ─────────────────────────────────────────────────

INLINE_MATH_RE = re.compile(r"\\\((?:\\.|[^\\])*?\\\)|(?<!\\)\$(?:\\.|[^$])*?(?<!\\)\$")
IMPORTANT_MARKERS = {'=', '<', '>', r'\le', r'\ge', r'\leq', r'\geq', r'\neq',
                     r'\approx', r'\sim', r'\propto', r'\to', r'\Rightarrow',
                     r'\Longrightarrow', r'\leftrightarrow', r'\longleftrightarrow'}

def is_important_inline(expr: str) -> bool:
    """¿Debe un inline $expr$ ser referenciado como {{f:id}}?"""
    compact = re.sub(r'\s+', '', expr)
    if len(compact) < 4:
        return False
    if any(m in expr for m in IMPORTANT_MARKERS):
        if '[' in expr and ']' in expr and any(c in expr for c in 'MLT'):
            return False
        return True
    if re.search(r'^[A-Za-z\\][A-Za-z0-9_{}\\^]*\s*=', expr):
        return True
    return False


def clean_inline_math(match: re.Match, formulas: dict) -> str:
    """Reemplaza $expr$ o \\(expr\\) inline con texto apropiado."""
    full = match.group(0)
    # Extraer la expresión matemática
    if full.startswith('\\(') and full.endswith('\\)'):
        expr = full[2:-2]
    elif full.startswith('$') and full.endswith('$'):
        expr = full[1:-1]
    else:
        return full

    if not is_important_inline(expr):
        return full  # no importante, mantener tal cual

    # NUNCA reemplazar inline math con {{f:id}} — causaría "referencia de formula inline invalida"
    # Convertir siempre a texto plano

    # Convertir a texto plano
    plain = latex_to_plain(expr)

    # Si el resultado tiene 'var = value', manejar para evitar bare_formula issues
    # Patrón: letras (con posible prefijo griego) seguido de = valor
    bare_match = re.match(
        r'^([ΔδαβγθωΩσμφρηλε]?[A-Za-z][A-Za-z0-9\-_]{0,4})\s*=\s*(.+)$',
        plain.strip()
    )
    if bare_match:
        var = bare_match.group(1)
        rhs = bare_match.group(2).strip()
        # Si el RHS es solo números/signos/unidades simples → devolver solo el valor
        if re.match(r'^[-+]?[\d.,\s]+(?:[a-zA-Zα-ωΔ²³⁻¹/·×±°\s]+)?$', rhs):
            return rhs
        else:
            # Expresión matemática compleja → devolver solo el nombre de la variable
            return var

    # Si no hay variable=valor en el inicio pero hay '=' en el texto
    # (ej: '90 km/h = 25 m/s', 'Δt = 4 s'), reemplazar = con → para evitar
    # que _BARE_FORMULA_RE encuentre 'letra = valor' embebido en el texto
    if '=' in plain:
        plain = re.sub(r'\s*=\s*', ' → ', plain)
    return plain


def process_file(file_path: Path, formulas: dict) -> tuple[str, int]:
    """Procesa un archivo .md y devuelve (contenido_nuevo, num_cambios)."""
    text = file_path.read_text(encoding='utf-8')
    lines = text.splitlines(keepends=True)
    
    result = []
    i = 0
    changes = 0
    in_code_block = False
    
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # Track code blocks
        if stripped.startswith('```'):
            in_code_block = not in_code_block
            result.append(line)
            i += 1
            continue
        
        if in_code_block:
            result.append(line)
            i += 1
            continue
        
        # Detectar bloque $$ multilinea
        if stripped == '$$':
            # Recoger todo el bloque
            block_start = i
            block_lines = []
            i += 1
            while i < len(lines) and lines[i].strip() != '$$':
                block_lines.append(lines[i].rstrip('\n'))
                i += 1
            
            if i < len(lines):
                i += 1  # skip closing $$
            
            block_content = '\n'.join(block_lines)
            
            # Intentar hacer match con fórmula
            fid = find_formula_id(block_content, formulas)
            
            if fid:
                # Asegurar línea en blanco antes
                if result and result[-1].strip():
                    result.append('\n')
                result.append(f'{{{{f:{fid}}}}}\n')
                result.append('\n')
                changes += 1
            else:
                # Eliminar el bloque - no reemplazar con nada
                # (el texto circundante es suficientemente descriptivo)
                changes += 1
            
            continue
        
        # Detectar $$ en línea ($$...$$)
        if re.search(r'\$\$.+\$\$', stripped):
            # Extraer el contenido entre $$
            content = re.sub(r'\$\$', '', stripped).strip()
            fid = find_formula_id(content, formulas)
            if fid:
                indent = len(line) - len(line.lstrip())
                result.append(' ' * indent + f'{{{{f:{fid}}}}}\n')
            else:
                # Remove the line
                pass
            changes += 1
            i += 1
            continue
        
        # Procesar inline $...$ y \(...\) en la línea
        if ('$' in line or r'\(' in line) and not in_code_block:            # Procesar spans inline
            def replace_inline(m):
                return clean_inline_math(m, formulas)
            
            new_line = INLINE_MATH_RE.sub(replace_inline, line)
            if new_line != line:
                changes += 1
            # También corregir [[id]] dentro de backticks
            fixed_line = fix_backtick_magnitudes(new_line)
            if fixed_line != new_line:
                changes += 1
            result.append(fixed_line)
        else:
            # Corregir [[id]] dentro de backticks incluso sin math
            fixed_line = fix_backtick_magnitudes(line)
            if fixed_line != line:
                changes += 1
            result.append(fixed_line)
        
        i += 1
    
    new_text = ''.join(result)
    return new_text, changes


# ─── Mapeo de hojas a archivos ─────────────────────────────────────────────────

def get_affected_files():
    """Retorna lista de (leaf_path, file_name) para todos los archivos con issues."""
    leaves = {
        'mru': BASE / 'cinematica/movimiento-rectilineo/mru',
        'mrua': BASE / 'cinematica/movimiento-rectilineo/mrua',
        'mvbg': BASE / 'cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad',
        'tiro-h': BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-horizontal',
        'tiro-p': BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-parabolico',
        'mcua': BASE / 'cinematica/movimiento-circular/mcua',
        'encuentros': BASE / 'cinematica/movimiento-relativo/encuentros-y-persecuciones',
        'sis-ref': BASE / 'cinematica/movimiento-relativo/sistemas-referencia',
        'cine-rot': BASE / 'rotacion/fundamentos/cinematica-rotacional',
    }
    
    files_with_issues = [
        ('mru', ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md']),
        ('mrua', ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md', 'aplicaciones.md']),
        ('mvbg', ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md']),
        ('tiro-h', ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md']),
        ('tiro-p', ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md',
                    'aplicaciones.md', 'aplicaciones.en.md']),
        ('mcua', ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md',
                  'aplicaciones.md', 'aplicaciones.en.md', 'errores.md', 'errores.en.md']),
        ('encuentros', ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md']),
        ('sis-ref', ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md']),
    ]
    
    result = []
    for leaf_name, fnames in files_with_issues:
        leaf_path = leaves[leaf_name]
        for fname in fnames:
            fp = leaf_path / fname
            if fp.exists():
                result.append((leaf_name, leaf_path, fname, fp))
    return result


def main(dry_run=False):
    import yaml
    
    affected = get_affected_files()
    total_changes = 0
    
    for leaf_name, leaf_path, fname, fp in affected:
        formulas = load_formulas(leaf_path)
        new_text, changes = process_file(fp, formulas)
        
        if changes > 0:
            total_changes += changes
            print(f"  {leaf_name}/{fname}: {changes} cambios")
            if not dry_run:
                fp.write_text(new_text, encoding='utf-8')
        else:
            print(f"  {leaf_name}/{fname}: sin cambios")
    
    print(f"\nTotal: {total_changes} cambios en {len(affected)} archivos")


if __name__ == '__main__':
    dry_run = '--dry-run' in sys.argv
    if dry_run:
        print("=== DRY RUN (no se escribe nada) ===\n")
    else:
        print("=== APLICANDO CAMBIOS ===\n")
    main(dry_run=dry_run)
