"""
fix_agm_render.py
Arregla los FAILs de render matemático en analisis-grafico-del-movimiento.
- Elimina \( ... \) inline LaTeX
- Reemplaza $$ blocks con {{f:id}} (simbólicos) o texto plano (numéricos)
"""
import re
from pathlib import Path

LEAF = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento')

def latex_to_plain(inner):
    """Convierte notación LaTeX básica a texto plano."""
    inner = inner.replace(r'\;', ' ')
    inner = inner.replace(r'\,', '')
    inner = inner.replace(r'\ ', ' ')
    inner = re.sub(r'\\text\{([^}]+)\}', r'\1', inner)
    inner = re.sub(r'\\mathrm\{([^}]+)\}', r'\1', inner)
    inner = re.sub(r'\\mathbf\{([^}]+)\}', r'\1', inner)
    inner = re.sub(r'\\frac\{([^}]+)\}\{([^}]+)\}', r'(\1)/(\2)', inner)
    inner = inner.replace(r'\approx', '≈')
    inner = inner.replace(r'\Delta', 'Δ')
    inner = inner.replace(r'\times', '×')
    inner = inner.replace(r'\cdot', '·')
    inner = inner.replace(r'\int', '∫')
    inner = re.sub(r'\^\{2\}', '²', inner)
    inner = re.sub(r'\^2\b', '²', inner)
    inner = re.sub(r'\{,\}', ',', inner)
    inner = re.sub(r'\{([a-zA-Z0-9_,.\- ]+)\}', r'\1', inner)
    inner = re.sub(r'_\{([^}]+)\}', r'_\1', inner)
    return inner.strip()

def strip_inline_latex(text):
    """Elimina \\( ... \\) inline LaTeX."""
    # Patrón especial v-t, x-t, a-t
    text = re.sub(r'\\\(([a-z])\\\)-\\\(([a-z])\\\)', r'\1-\2', text)

    def clean_inline(m):
        return latex_to_plain(m.group(1))

    text = re.sub(r'\\\((.+?)\\\)', clean_inline, text, flags=re.DOTALL)
    return text

# Mapeo: patrón en contenido del bloque $$ → id de fórmula (None = texto plano)
FORMULA_MAP = [
    # desplazamiento integral → fórmula
    (r'\\Delta x\s*=\s*\\int', 'desplazamiento_area_v_t'),
    # velocidad media simbólica con \\Delta x en numerador → fórmula
    (r'v_\{?\\mathrm\{med\}\}?\s*=\s*\\frac\{\\Delta x', 'velocidad_media_intervalo'),
    # aceleración simbólica con \\Delta v
    (r'a_[123]\s*=\s*\\frac\{\\Delta v', 'aceleracion_inst_pendiente_v_t'),
    # desplazamiento simbólico por tramos con \\Delta t en expresión
    (r'\\Delta x_[123]\s*=.*?\\Delta t', 'desplazamiento_area_v_t'),
    # suma total simbólica → texto plano
    (r'\\Delta x_\\text\{total\}\s*=\s*\\Delta x_1', None),
    (r'\\Delta x_\{\\text\{total\}\}\s*=\s*\\Delta x_1', None),
]

def replace_dollar_blocks(text):
    """Reemplaza bloques $$ ... $$ con {{f:id}} o texto plano."""
    def process_block(m):
        content = m.group(1).strip()
        for pattern, formula_id in FORMULA_MAP:
            if re.search(pattern, content, re.DOTALL):
                if formula_id:
                    return f'\n\n{{{{f:{formula_id}}}}}\n\n'
                else:
                    plain = latex_to_plain(content)
                    return f'\n\n{plain}\n\n'
        # Default: texto plano
        plain = latex_to_plain(content)
        return f'\n\n{plain}\n\n'

    text = re.sub(r'\$\$(.*?)\$\$', process_block, text, flags=re.DOTALL)
    return text

def normalize_blank_lines(text):
    """Colapsa más de 2 líneas en blanco consecutivas."""
    return re.sub(r'\n{3,}', '\n\n', text)

files_to_fix = [
    LEAF / 'aplicaciones.md',
    LEAF / 'aplicaciones.en.md',
    LEAF / 'ejemplos.md',
    LEAF / 'ejemplos.en.md',
    LEAF / 'errores.en.md',
]

for fpath in files_to_fix:
    text = fpath.read_text(encoding='utf-8')
    original = text
    text = replace_dollar_blocks(text)
    text = strip_inline_latex(text)
    text = normalize_blank_lines(text)
    if text != original:
        fpath.write_text(text, encoding='utf-8')
        print(f'FIXED: {fpath.name}')
    else:
        print(f'No changes: {fpath.name}')
