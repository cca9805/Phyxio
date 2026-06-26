"""
Fix remaining $$ blocks in ejemplos.md and ejemplos.en.md
"""
import re

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/magnitudes-cinematicas'

def read(fn):
    return open(f'{BASE}/{fn}', encoding='utf-8').read()

def write(fn, content):
    open(f'{BASE}/{fn}', 'w', encoding='utf-8').write(content)
    print(f'{fn}: SAVED')

# --- ejemplos.md ---
ej = read('ejemplos.md')

# Dimensional validation L99-L109
old_dim_vmed = '''La relación `[[velocidad_media]]` también:

$$
\\frac{[\\text{m}]}{[\\text{s}]} = [\\text{m/s}]
$$

Y la relación `[[aceleracion_media]]` mantiene la dimensión correcta:

$$
\\frac{[\\text{m/s}]}{[\\text{s}]} = [\\text{m/s}^2]
$$'''
new_dim_vmed = '''La relación `[[velocidad_media]]` también: [[distancia]] (m) ÷ [[tiempo]] (s) = m/s.

Y la relación `[[aceleracion_media]]` mantiene la dimensión correcta: [[velocidad]] (m/s) ÷ [[tiempo]] (s) = m/s².'''
if old_dim_vmed in ej:
    ej = ej.replace(old_dim_vmed, new_dim_vmed, 1)
    print('ejemplos.md: dim vmed+amed FIXED')
else:
    print('WARN ejemplos.md: dim vmed+amed not found')

# Real example section L131-L151
old_real = '''Convertimos unidades:

$$
45\\;\\text{km} = 45\\,000\\;\\text{m}
$$

$$
1\\;\\text{h}\\;52\\;\\text{min} = 6\\,720\\;\\text{s}
$$

Aplicando `[[rapidez_media]]`:

$$
v_{esc,med} = \\frac{45\\,000}{6\\,720} \\approx 6{,}70\\;\\text{m/s}
$$

Pasando a kilómetros por hora:

$$
6{,}70\\;\\text{m/s} \\times 3{,}6 \\approx 24{,}1\\;\\text{km/h}
$$'''
new_real = '''Convertimos unidades: 45 km = 45 000 m; 1 h 52 min = 6 720 s.

Aplicando `[[rapidez_media]]`: 45 000 m ÷ 6 720 s ≈ 6,70 m/s.

Pasando a kilómetros por hora: 6,70 m/s × 3,6 ≈ 24,1 km/h.'''
if old_real in ej:
    ej = ej.replace(old_real, new_real, 1)
    print('ejemplos.md: real example FIXED')
else:
    print('WARN ejemplos.md: real example not found')

# Check remaining
remaining = re.findall(r'\$\$', ej)
if remaining:
    print(f'WARN ejemplos.md: {len(remaining)} $$ remaining')
    for i, l in enumerate(ej.split('\n'), 1):
        if '$$' in l:
            print(f'  L{i}: {repr(l[:80])}')
else:
    print('ejemplos.md: no $$ remaining')

write('ejemplos.md', ej)

# --- ejemplos.en.md ---
eje = read('ejemplos.en.md')

# Check what's at L103-L155 in en version
lines_en = eje.split('\n')
print('\n=== ejemplos.en.md remaining blocks ===')
block_lines_en = [103,105,109,111,135,137,139,141,145,147,151,153]
for ln in block_lines_en:
    if ln-1 < len(lines_en):
        print(f'L{ln}: {repr(lines_en[ln-1][:100])}')
    if ln < len(lines_en):
        print(f'L{ln+1}: {repr(lines_en[ln][:100])}')
    print()
