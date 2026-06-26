"""
Fix final: ejemplos.md L97, L125 y magnitudes desnudas
"""
BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento'

def read(fn):
    return open(f'{BASE}/{fn}', encoding='utf-8').read()

def write(fn, content):
    open(f'{BASE}/{fn}', 'w', encoding='utf-8').write(content)
    print(f'{fn}: SAVED')

# --- ejemplos.md ---
ej = read('ejemplos.md')

# L97: "m/s × s = m" → rewrite
old97 = '- La unidad de [[desplazamiento]] resulta de m/s × s = m.'
new97 = '- La unidad de [[desplazamiento]] es el metro: al multiplicar m/s por segundos se obtiene m.'
if old97 in ej:
    ej = ej.replace(old97, new97, 1)
    print('ejemplos.md L97 FIXED')
else:
    print('WARN ejemplos.md L97 not found')

# L125: "Δ v = a · Δ t" → rewrite
old125 = 'comparando el **cambio de [[velocidad]]** obtenido con el predicho por Δ v = a · Δ t; si difieren más de un 10 %'
new125 = 'comparando el **cambio de [[velocidad]]** obtenido con el predicho por la fórmula de aceleración constante; si difieren más de un 10 %'
if old125 in ej:
    ej = ej.replace(old125, new125, 1)
    print('ejemplos.md L125 FIXED')
else:
    print('WARN ejemplos.md L125 not found')

write('ejemplos.md', ej)

# --- ejemplos.en.md ---
eje = read('ejemplos.en.md')

# L97
old97e = '- The unit of [[desplazamiento]] results from m/s × s = m.'
new97e = '- The unit of [[desplazamiento]] is the metre: multiplying m/s by seconds yields m.'
if old97e in eje:
    eje = eje.replace(old97e, new97e, 1)
    print('ejemplos.en.md L97 FIXED')
else:
    print('WARN ejemplos.en.md L97 not found')

# L125
old125e = 'comparing the resulting **change in velocity [[cambio_velocidad]]** with the prediction Δ v = a · Δ t; if they differ by more than 10 %'
new125e = 'comparing the resulting **change in velocity [[cambio_velocidad]]** with the prediction from the constant-acceleration formula; if they differ by more than 10 %'
if old125e in eje:
    eje = eje.replace(old125e, new125e, 1)
    print('ejemplos.en.md L125 FIXED')
else:
    print('WARN ejemplos.en.md L125 not found')

write('ejemplos.en.md', eje)

# --- teoria.md: magnitudes desnudas de "desplazamiento" ---
t = read('teoria.md')
import re
# Find bare "desplazamiento" not already wrapped
# Current state: [[desplazamiento]] [[desplazamiento]] → fix double wrapping and find bare ones
# First fix any double wrapping issue
t_fixed = re.sub(r'\[\[desplazamiento\]\]\s+\[\[desplazamiento\]\]', '[[desplazamiento]]', t)
if t_fixed != t:
    print('teoria.md: double [[desplazamiento]] fixed')
    t = t_fixed
# Now check for bare "desplazamiento" not wrapped
bare_matches = list(re.finditer(r'(?<!\[)(?<!\{)\bdesplazamiento\b(?!\])', t))
if bare_matches:
    for m in bare_matches[:5]:
        print(f'  bare desplazamiento at pos {m.start()}: {repr(t[max(0,m.start()-20):m.end()+20])}')
write('teoria.md', t)

# --- errores.md: magnitudes desnudas de "velocidad" ---
err = read('errores.md')
bare_v = list(re.finditer(r'(?<!\[)(?<!\{)\bvelocidad\b(?!\])', err))
if bare_v:
    for m in bare_v[:5]:
        print(f'  bare velocidad in errores.md at pos {m.start()}: {repr(err[max(0,m.start()-30):m.end()+30])}')

print('\nDone.')
