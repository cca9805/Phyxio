"""
Script para corregir todos los overview.md y overview.en.md:
1. Reparar mojibake (latin1 mal leido como utf-8)
2. Eliminar texto basura 'village.'
3. Convertir LaTeX inline \(...\) a texto plano en prosa de overview
"""
import os, re, unicodedata

ROOT = 'frontend/src/data_v2_i18n'

def try_fix_mojibake(text):
    """Intenta reparar latin1->utf8 mojibake si hay señales de ello."""
    if not text:
        return text
    if any(ch in text for ch in ('\u00C3', '\u00C2', '\u00E3')):
        try:
            repaired = text.encode('latin-1', errors='ignore').decode('utf-8', errors='ignore')
            if repaired and repaired != text:
                return repaired
        except Exception:
            pass
    return text

def strip_latex_inline(line):
    """Convierte expresiones LaTeX inline \(...\) a texto plano legible."""
    def replace_match(m):
        inner = m.group(1).strip()
        # Conversiones comunes a texto plano
        inner = re.sub(r'\\vec\s*', '', inner)
        inner = re.sub(r'\\mathrm\{([^}]+)\}', r'\1', inner)
        inner = re.sub(r'\\text\{([^}]+)\}', r'\1', inner)
        inner = re.sub(r'\\cdot', '·', inner)
        inner = re.sub(r'\\neq', '≠', inner)
        inner = re.sub(r'\\leq', '≤', inner)
        inner = re.sub(r'\\geq', '≥', inner)
        inner = re.sub(r'\\sum', 'Σ', inner)
        inner = re.sub(r'\\mu_s', 'μs', inner)
        inner = re.sub(r'\\mu_k', 'μk', inner)
        inner = re.sub(r'\\mu', 'μ', inner)
        inner = re.sub(r'\\omega', 'ω', inner)
        inner = re.sub(r'\\alpha', 'α', inner)
        inner = re.sub(r'\\beta', 'β', inner)
        inner = re.sub(r'\\theta', 'θ', inner)
        inner = re.sub(r'\\phi', 'φ', inner)
        inner = re.sub(r'\\tau', 'τ', inner)
        inner = re.sub(r'\\rho', 'ρ', inner)
        inner = re.sub(r'\\sigma', 'σ', inner)
        inner = re.sub(r'\\delta', 'δ', inner)
        inner = re.sub(r'\\Delta', 'Δ', inner)
        inner = re.sub(r'\\lambda', 'λ', inner)
        inner = re.sub(r'\\pi', 'π', inner)
        inner = re.sub(r'\\infty', '∞', inner)
        inner = re.sub(r'\\frac\{([^}]+)\}\{([^}]+)\}', r'\1/\2', inner)
        inner = re.sub(r'\{([^}]+)\}', r'\1', inner)  # quitar llaves restantes
        inner = re.sub(r'\\[a-zA-Z]+', '', inner)     # quitar comandos restantes
        inner = inner.strip()
        return inner
    
    return re.sub(r'\\\((.+?)\\\)', replace_match, line)

def process_file(path):
    raw = open(path, 'rb').read()
    
    # Intentar decodificar
    try:
        text = raw.decode('utf-8')
    except UnicodeDecodeError:
        text = raw.decode('latin-1', errors='replace')
    
    # Reparar mojibake
    text = try_fix_mojibake(text)
    
    changed = False
    lines = text.splitlines()
    new_lines = []
    
    for line in lines:
        original = line
        
        # 1. Eliminar líneas con solo 'village.'
        if line.strip() == 'village.':
            changed = True
            continue  # omitir línea
        
        # 2. Limpiar LaTeX inline en prosa de overview
        if re.search(r'\\\(.+?\\\)', line):
            fixed = strip_latex_inline(line)
            if fixed != line:
                line = fixed
                changed = True
        
        new_lines.append(line)
    
    # Eliminar líneas en blanco finales extra
    while new_lines and not new_lines[-1].strip():
        new_lines.pop()
    
    new_text = '\n'.join(new_lines) + '\n'
    
    if changed or text != new_text:
        with open(path, 'w', encoding='utf-8', newline='\r\n') as f:
            f.write(new_text)
        return True
    return False

fixed_count = 0
error_count = 0

for dirpath, dirs, files in os.walk(ROOT):
    for fname in sorted(['overview.md', 'overview.en.md']):
        if fname not in files:
            continue
        path = os.path.join(dirpath, fname)
        try:
            if process_file(path):
                rel = os.path.relpath(path, ROOT)
                print(f'FIXED: {rel}')
                fixed_count += 1
        except Exception as e:
            rel = os.path.relpath(path, ROOT)
            print(f'ERROR: {rel}: {e}')
            error_count += 1

print(f'\nTotal fixed: {fixed_count}, errors: {error_count}')
