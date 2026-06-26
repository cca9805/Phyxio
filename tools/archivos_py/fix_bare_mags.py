"""
Fix magnitudes desnudas en teoria.md y errores.md
"""
BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento'
import re

def read(fn):
    return open(f'{BASE}/{fn}', encoding='utf-8').read()

def write(fn, content):
    open(f'{BASE}/{fn}', 'w', encoding='utf-8').write(content)
    print(f'{fn}: SAVED')

# --- teoria.md: fix bare "desplazamiento" in train example ---
t = read('teoria.md')
old = '→ desplazamiento parcial = ½ × 20 × 30 = 300 m.'
new = '→ [[desplazamiento]] parcial = ½ × 20 × 30 = 300 m.'
if old in t:
    t = t.replace(old, new, 1)
    print('teoria.md: desplazamiento FIXED')
else:
    print('WARN teoria.md: desplazamiento not found')
    # Find all bare instances
    for m in re.finditer(r'(?<!\[)\bdesplazamiento\b(?!\])', t):
        print(f'  at {m.start()}: {repr(t[max(0,m.start()-30):m.end()+30])}')
write('teoria.md', t)

# --- teoria.en.md: same ---
te = read('teoria.en.md')
old_e = '→ partial displacement = ½ × 20 × 30 = 300 m.'
new_e = '→ partial [[desplazamiento]] = ½ × 20 × 30 = 300 m.'
if old_e in te:
    te = te.replace(old_e, new_e, 1)
    print('teoria.en.md: displacement FIXED')
else:
    print('WARN teoria.en.md: not found, searching bare...')
    for m in re.finditer(r'(?<!\[)\bdisplacement\b(?!\])', te):
        print(f'  at {m.start()}: {repr(te[max(0,m.start()-30):m.end()+30])}')
write('teoria.en.md', te)

# --- errores.md: fix bare "velocidad" ---
err = read('errores.md')

fixes_err = [
    ('del gráfico velocidad-[[tiempo]].', 'del gráfico [[velocidad]]-[[tiempo]].'),
    ('Un gráfico velocidad-[[tiempo]] muestra', 'Un gráfico [[velocidad]]-[[tiempo]] muestra'),
]
for old, new in fixes_err:
    if old in err:
        err = err.replace(old, new)
        print(f'errores.md: FIXED: {repr(old[:50])}')
    else:
        print(f'WARN errores.md: not found: {repr(old[:50])}')

# Check all bare "velocidad"
bare = list(re.finditer(r'(?<!\[)\bvelocidad\b(?!\])', err))
for m in bare[:10]:
    print(f'  bare: {repr(err[max(0,m.start()-30):m.end()+30])}')

write('errores.md', err)
print('\nDone.')
