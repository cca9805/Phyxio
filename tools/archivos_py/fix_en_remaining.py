"""Fix remaining $$ in ejemplos.en.md"""
import re

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/magnitudes-cinematicas'
fn = 'ejemplos.en.md'
eje = open(f'{BASE}/{fn}', encoding='utf-8').read()

# Fix 1: dimensional blocks for velocidad_media and aceleracion_media
old1 = ('The relation `[[velocidad_media]]` is also dimensionally consistent:\n\n'
        '$$\n\\frac{[\\text{m}]}{[\\text{s}]} = [\\text{m/s}]\n$$\n\n'
        'And `[[aceleracion_media]]` gives the proper dimension:\n\n'
        '$$\n\\frac{[\\text{m/s}]}{[\\text{s}]} = [\\text{m/s}^2]\n$$')
new1 = ('The relation `[[velocidad_media]]` is also dimensionally consistent: '
        '[[distancia]] (m) \u00f7 [[tiempo]] (s) = m/s.\n\n'
        'And `[[aceleracion_media]]` gives the proper dimension: '
        '[[velocidad]] (m/s) \u00f7 [[tiempo]] (s) = m/s\u00b2.')
if old1 in eje:
    eje = eje.replace(old1, new1, 1)
    print('FIXED: dim vmed+amed')
else:
    print('NOT FOUND: dim vmed+amed')

# Fix 2: real example numerical blocks
old2 = ('Converting units:\n\n'
        '$$\n45\\;\\text{km} = 45\\,000\\;\\text{m}\n$$\n\n'
        '$$\n1\\;\\text{h}\\;52\\;\\text{min} = 6\\,720\\;\\text{s}\n$$\n\n'
        'Using `[[rapidez_media]]`:\n\n'
        '$$\nv_{esc,med} = \\frac{45\\,000}{6\\,720} \\approx 6.70\\;\\text{m/s}\n$$\n\n'
        'Converting to kilometres per hour:\n\n'
        '$$\n6.70\\;\\text{m/s} \\times 3.6 \\approx 24.1\\;\\text{km/h}\n$$')
new2 = ('Converting units: 45 km = 45 000 m; 1 h 52 min = 6 720 s.\n\n'
        'Using `[[rapidez_media]]`: 45 000 m \u00f7 6 720 s \u2248 6.70 m/s.\n\n'
        'Converting to kilometres per hour: 6.70 m/s \u00d7 3.6 \u2248 24.1 km/h.')
if old2 in eje:
    eje = eje.replace(old2, new2, 1)
    print('FIXED: real example')
else:
    print('NOT FOUND: real example')

rem = re.findall(r'\$\$', eje)
if rem:
    print(f'WARN: {len(rem)} $$ remaining')
    for i, l in enumerate(eje.split('\n'), 1):
        if '$$' in l:
            print(f'  L{i}: {repr(l[:80])}')
else:
    print('No $$ remaining')

open(f'{BASE}/{fn}', 'w', encoding='utf-8').write(eje)
print('SAVED')
