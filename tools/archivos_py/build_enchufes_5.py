"""Fix remaining issues for enchufes-y-tomas leaf."""
import re
import yaml
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas')

# ── 1. Fix teoria.md — swap section order ─────────────────────────────────────
# Correct order: ...Casos especiales → Preguntas reales → Conexiones transversales → Síntesis final
for fname, preguntas_h, conexiones_h, sintesis_h in [
    ('teoria.md',
     '## Preguntas reales del alumno',
     '## Conexiones transversales y rutas de estudio',
     '## Síntesis final'),
    ('teoria.en.md',
     '## Real student questions',
     '## Cross-cutting connections and study paths',
     '## Final synthesis'),
]:
    txt = (base / fname).read_text(encoding='utf-8')
    lines = txt.splitlines()
    
    def find_section(lines, heading):
        for i, l in enumerate(lines):
            if l.strip() == heading:
                return i
        return -1
    
    # Find section start/end indices
    def section_range(lines, heading):
        start = find_section(lines, heading)
        if start == -1:
            return -1, -1
        # Find next ## heading
        for i in range(start+1, len(lines)):
            if lines[i].startswith('## ') or lines[i].startswith('# '):
                return start, i
        return start, len(lines)
    
    pq_start, pq_end = section_range(lines, preguntas_h)
    cx_start, cx_end = section_range(lines, conexiones_h)
    sf_start, sf_end = section_range(lines, sintesis_h)
    
    if pq_start == -1 or cx_start == -1:
        print(f'{fname}: sections not found, skipping swap')
        continue
    
    # Check if Conexiones comes BEFORE Preguntas (wrong order)
    if cx_start < pq_start:
        # Extract blocks
        pq_block = lines[pq_start:pq_end]
        cx_block = lines[cx_start:cx_end]
        sf_block = lines[sf_start:sf_end] if sf_start != -1 else []
        
        # Build new text: everything before cx, then pq, cx, sf, then rest after sf
        before = lines[:cx_start]
        after = lines[sf_end:] if sf_start != -1 and sf_end != -1 and sf_end < len(lines) else []
        
        new_lines = before + pq_block + cx_block + sf_block + after
        txt2 = '\n'.join(new_lines)
        (base / fname).write_text(txt2, encoding='utf-8')
        print(f'{fname}: swapped Conexiones/Preguntas order — {len(txt2.split())} words')
    else:
        print(f'{fname}: order already correct')

# ── 2. Fix ejemplos render math — rewrite problematic L70 ─────────────────────
# The issue: "The [[I_tot]] is obtained from watts divided by volts, which equals amperes.
# The [[P_max]] is the product of [[V]] in volts and [[I_max]] in amperes, which equals watts."
# The validator sees [[I_max]] in amperes as a formula reference with "=" context
# Fix: rephrase without mixing [[...]] and "equals/equivale a"

for fname, old_phrase, new_phrase in [
    (
        'ejemplos.md',
        'La [[I_tot]] se obtiene de vatios dividido por voltios, que equivale a amperios. La [[P_max]] es el producto de [[V]] en voltios por [[I_max]] en amperios, que equivale a vatios. El [[margen_uso]] es el cociente de [[I_tot]] entre [[I_max]], ambos en amperios, resultando adimensional. La [[P_perdida]] es el producto de [[I_tot]] al cuadrado (A²) por [[R_contacto]] en ohmios (Ω), que equivale a vatios (W = A²·Ω). Todas las dimensiones son coherentes.',
        'Las dimensiones son coherentes en todas las fórmulas: [[I_tot]] tiene unidades de amperios (W/V = A), [[P_max]] de vatios (V·A = W), [[margen_uso]] es adimensional (A/A), y [[P_perdida]] tiene unidades de vatios (A²·Ω = W).',
    ),
    (
        'ejemplos.en.md',
        'The [[I_tot]] is obtained from watts divided by volts, which equals amperes. The [[P_max]] is the product of [[V]] in volts and [[I_max]] in amperes, which equals watts. The [[margen_uso]] is the ratio of [[I_tot]] to [[I_max]], both in amperes, giving a dimensionless result. The [[P_perdida]] is the product of [[I_tot]] squared (A²) and [[R_contacto]] in ohms (Ω), which equals watts (W = A²·Ω). All dimensions are consistent.',
        'All dimensions are consistent: [[I_tot]] has units of amperes (W/V = A), [[P_max]] of watts (V·A = W), [[margen_uso]] is dimensionless (A/A), and [[P_perdida]] has units of watts (A²·Ω = W).',
    ),
]:
    txt = (base / fname).read_text(encoding='utf-8')
    if old_phrase in txt:
        txt2 = txt.replace(old_phrase, new_phrase)
        (base / fname).write_text(txt2, encoding='utf-8')
        print(f'{fname}: fixed render math phrase')
    else:
        print(f'{fname}: phrase not found, checking manually')
        # Find line 70 area
        lines70 = txt.splitlines()[68:72]
        for l in lines70:
            print(f'  L70 area: {l[:120]}')

# ── 3. Fix aplicaciones.md — change # Aplicación N: to ## N. Title ────────────
def fix_aplicaciones(fname, lang='es'):
    txt = (base / fname).read_text(encoding='utf-8')
    
    if lang == 'es':
        titles = [
            'Dimensionamiento de regletas en zonas de trabajo',
            'Diagnóstico de calentamiento en enchufes de instalaciones antiguas',
            'Verificación de regletas en cocinas y zonas húmedas',
            'Selección de alargadores y adaptadores de viaje',
            'Educación en seguridad eléctrica doméstica',
        ]
        app_pattern = r'^# Aplicaci[oó]n \d+: (.+)$'
        var_pattern = r'\*\*Variable dominante:\*\*'
        lim_pattern = r'\*\*L[íi]mite de validez:\*\*'
    else:
        titles = [
            'Sizing power strips in workspaces',
            'Diagnosing heating in sockets of old installations',
            'Verifying strips in kitchens and wet areas',
            'Selecting extension leads and travel adapters',
            'Domestic electrical safety education',
        ]
        app_pattern = r'^# Application \d+: (.+)$'
        var_pattern = r'\*\*Dominant variable:\*\*'
        lim_pattern = r'[Vv]alidity limit'

    lines = txt.splitlines()
    new_lines = []
    app_num = 0
    for line in lines:
        m = re.match(app_pattern, line, re.IGNORECASE)
        if m:
            app_num += 1
            title = titles[app_num-1] if app_num <= len(titles) else m.group(1)
            new_lines.append(f'## {app_num}. {title}')
        else:
            new_lines.append(line)
    
    txt2 = '\n'.join(new_lines)
    
    # Check variable and limite markers exist
    var_count = len(re.findall(var_pattern, txt2))
    lim_count = len(re.findall(lim_pattern, txt2, re.IGNORECASE))
    
    (base / fname).write_text(txt2, encoding='utf-8')
    print(f'{fname}: {app_num} aplicaciones, {var_count} var markers, {lim_count} límite markers')
    return txt2

fix_aplicaciones('aplicaciones.md', 'es')
fix_aplicaciones('aplicaciones.en.md', 'en')

# ── 4. Fix modelos.md — add [[margen_uso]] where missing ──────────────────────
txt = (base / 'modelos.md').read_text(encoding='utf-8')
# Find bare 'margen_uso' not already wrapped in [[...]]
txt2 = re.sub(r'(?<!\[\[)(?<!\|)margen_uso(?!\]\])(?!.*\|)', lambda m: '[[margen_uso]]', txt)
# But avoid double wrapping
txt2 = re.sub(r'\[\[\[\[margen_uso\]\]\]\]', '[[margen_uso]]', txt2)
txt2 = re.sub(r'\[\[margen_uso\]\]_uso', 'margen_uso', txt2)  # fix any mangling
if txt2 != txt:
    (base / 'modelos.md').write_text(txt2, encoding='utf-8')
    print('modelos.md: wrapped bare margen_uso')
else:
    print('modelos.md: no bare margen_uso found')

# ── 5. Fix teoria.md — coverage: add [[I]] alias for corriente ────────────────
# The validator looks for magnitude IDs in teoria. 'I' is the id for corriente individual.
# Check if it appears
txt = (base / 'teoria.md').read_text(encoding='utf-8')
if '[[I]]' not in txt:
    # Add a sentence using [[I]] in the Nivel esencial section
    old = 'Una toma de corriente tiene un límite de corriente [[I_max]] impreso en el dispositivo'
    new = 'Una toma de corriente tiene un límite de corriente [[I_max]] impreso en el dispositivo'
    # The issue is that I is I_individual. Let's check what the magnitudes.yaml says
    mag_txt = (base / 'magnitudes.yaml').read_text(encoding='utf-8')
    print('Checking magnitude IDs in magnitudes.yaml:')
    for line in mag_txt.splitlines():
        if line.strip().startswith('id:'):
            print(f'  {line.strip()}')
else:
    print('teoria.md: [[I]] already present')

print('\nDone part 5.')
