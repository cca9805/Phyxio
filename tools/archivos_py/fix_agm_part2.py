"""
Correcciones directas para errores.md y teoria.en.md
"""

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento'

def read(fn):
    return open(f'{BASE}/{fn}', encoding='utf-8').read()

def write(fn, content):
    open(f'{BASE}/{fn}', 'w', encoding='utf-8').write(content)
    print(f'{fn}: SAVED')

# ============================================================
# Fix teoria.en.md: insert {{f:velocidad_media_intervalo}}
# ============================================================
te = read('teoria.en.md')

# Find the sentence about average velocity
import re
# Find the pattern
m = re.search(r'The average velocity \[\[velocidad_media\]\] over an interval [^\n]+', te)
if m:
    old = m.group(0)
    new = old + '\n\n{{f:velocidad_media_intervalo}}'
    te = te.replace(old, new, 1)
    print('teoria.en.md: velocidad_media_intervalo ADDED')
else:
    print('WARN teoria.en.md: sentence not found, searching...')
    for i, l in enumerate(te.split('\n'), 1):
        if 'velocidad_media' in l:
            print(f'L{i}: {repr(l[:150])}')

write('teoria.en.md', te)

# ============================================================
# Fix errores.md: replace all \(formula\) patterns with plain text
# Using regex to find and replace inline math patterns
# ============================================================
err = read('errores.md')

# Strategy: use regex to find \( expr \) where expr contains = or \geq etc
# and replace contextually per line

import re

# Specific line replacements using regex patterns
line_fixes = [
    # L14
    (
        r'señalando un punto en \\\(v = 5\\;\text\{m/s\}\\\) del gráfico \\\(v\\\)-\\\(t\\\)\.',
        'señalando un punto en la coordenada de [[velocidad]] igual a 5 m/s del gráfico velocidad-[[tiempo]].'
    ),
    # L20
    (
        r'muestra \\\(v = 10\\;\text\{m/s\}\\\) constante durante \\\(3\\;\text\{s\}\\\)\.',
        'muestra [[velocidad]] constante de 10 m/s durante 3 s.'
    ),
    # L20 - the result part
    (
        r'cambia en \\\(\\Delta x = 10 \\times 3 = 30\\;\text\{m\}\\\), no 10 m\.',
        'cambia en 10 × 3 = 30 m, no 10 m.'
    ),
    # L31
    (
        r'ubicada a \\\(v = 5\\;\text\{m/s\}\\\)\.',
        'ubicada a [[velocidad]] constante de 5 m/s.'
    ),
    # L34
    (
        r'si \\\(v = 5\\;\text\{m/s\}\\\), el objeto avanza a ritmo constante\.',
        'con [[velocidad]] de 5 m/s, el objeto avanza a ritmo constante.'
    ),
    # L37
    (
        r'horizontal en \\\(v = 5\\;\text\{m/s\}\\\) durante \\\(4\\;\text\{s\}\\\)\.',
        'horizontal a [[velocidad]] 5 m/s durante 4 s.'
    ),
    # L37 - area part
    (
        r'el área bajo la curva es \\\(5 \\times 4 = 20\\;\text\{m\}\\\)\.',
        'el área bajo la curva es 5 × 4 = 20 m.'
    ),
    # L73 - alumno calcula a = (0-0)/4 = 0
    (
        r'El alumno calcula \\\(a = \(0-0\)/4 = 0\\\)\.',
        'El alumno calcula [[aceleracion]] = (0−0)/4 = 0.'
    ),
    # L73 - resultado correcto
    (
        r'Resultado correcto: \\\(a_1 = \+5\\;\text\{m/s\}\^2\\\), \\\(a_2 = -5\\;\text\{m/s\}\^2\\\)\.',
        'Resultado correcto: primera fase +5 m/s², segunda fase −5 m/s².'
    ),
    # L90
    (
        r'creciente entre \\\(t = 0\\\) y \\\(t = 5\\;\text\{s\}\\\)\.',
        'creciente entre el inicio y los 5 s.'
    ),
    (
        r'extrapola a \\\(t = 10\\;\text\{s\}\\\) y predice \\\(v = 100\\;\text\{m/s\}\\\)\.',
        'extrapola a 10 s y predice [[velocidad]] de 100 m/s.'
    ),
    (
        r'a \\\(t = 5\\;\text\{s\}\\\) el objeto chocó contra un muro\.',
        'a los 5 s el objeto chocó contra un muro.'
    ),
]

for pattern, repl in line_fixes:
    new_err, n = re.subn(pattern, repl, err)
    if n > 0:
        print(f'errores.md: FIXED pattern {repr(pattern[:40])}')
        err = new_err
    else:
        print(f'WARN errores.md: pattern not found: {repr(pattern[:60])}')

# Now handle multi-part L109
old_109 = r'\(v_i = 0\), \(v_f = 10\;\text{m/s}\), \(\Delta t = 4\;\text{s}\). Rectángulo: \(10 \times 4 = 40\;\text{m}\). Trapecio: \(\frac{0+10}{2} \times 4 = 20\;\text{m}\). Diferencia del 100 %.'
new_109 = '[[velocidad_inicial]] 0, [[velocidad_final]] 10 m/s, [[intervalo_tiempo]] 4 s. Rectángulo (incorrecto): 10 × 4 = 40 m. Trapecio (correcto): (0 + 10)/2 × 4 = 20 m. Diferencia del 100 %.'
if old_109 in err:
    err = err.replace(old_109, new_109, 1)
    print('errores.md: L109 FIXED (direct)')
else:
    # regex approach
    p109, n = re.subn(
        r'\\\(v_i = 0\\\), \\\(v_f = 10\\;\text\{m/s\}\\\), \\\(\\Delta t = 4\\;\text\{s\}\\\)\. Rect.ngulo: \\\(10 \\times 4 = 40\\;\text\{m\}\\\)\. Trapecio: \\\(\\frac\{0\+10\}\{2\} \\times 4 = 20\\;\text\{m\}\\\)\. Diferencia del 100 %\.',
        new_109,
        err
    )
    if n > 0:
        err = p109
        print('errores.md: L109 FIXED (regex)')
    else:
        print('WARN errores.md L109: not fixed')
        lines = err.split('\n')
        print(repr(lines[108]))

# L126
old_126 = r'\(v\) baja de 20 a 10 m/s en 5 s. Alumno: \(a = 10/5 = 2\;\text{m/s}^2\). Correcto: \(a = (10-20)/5 = -2\;\text{m/s}^2\). El objeto frena, no acelera.'
new_126 = '[[velocidad]] baja de 20 a 10 m/s en 5 s. Alumno: [[aceleracion]] = 10/5 = 2 m/s². Correcto: [[aceleracion]] = (10−20)/5 = −2 m/s². El objeto frena, no acelera.'
if old_126 in err:
    err = err.replace(old_126, new_126, 1)
    print('errores.md: L126 FIXED (direct)')
else:
    p126, n = re.subn(
        r'\\\(v\\\) baja de 20 a 10 m/s en 5 s\. Alumno: \\\(a = 10/5 = 2\\;\text\{m/s\}\^2\\\)\. Correcto: \\\(a = \(10-20\)/5 = -2\\;\text\{m/s\}\^2\\\)\. El objeto frena, no acelera\.',
        new_126,
        err
    )
    if n > 0:
        err = p126
        print('errores.md: L126 FIXED (regex)')
    else:
        print('WARN errores.md L126: not fixed')

# L143
new_143 = 'Área sobre eje: +20 m. Área bajo eje: −8 m. Alumno suma 20 + 8 = 28 m. Correcto: [[desplazamiento]] neto = 20 + (−8) = 12 m; distancia total = 20 + 8 = 28 m.'
p143, n = re.subn(
    r'Área sobre eje: \\\(\+20\\;\text\{m\}\\\)\. Área bajo eje: \\\(-8\\;\text\{m\}\\\)\. Alumno suma \\\(20 \+ 8 = 28\\;\text\{m\}\\\)\. Correcto: \[\[desplazamiento\]\] neto \\\(= 20 \+ \(-8\) = 12\\;\text\{m\}\\\); distancia total \\\(= 20 \+ 8 = 28\\;\text\{m\}\\\)\.',
    new_143,
    err
)
if n > 0:
    err = p143
    print('errores.md: L143 FIXED')
else:
    print('WARN errores.md L143: not fixed')

# L162
new_162 = 'Gráfico posición-[[tiempo]] con pendiente de 4 m/s. El alumno dice [[aceleracion]] = 4 m/s². Pero la unidad de la pendiente es m/s, no m/s². Es [[velocidad]], no aceleración.'
p162, n = re.subn(
    r'Gráfico \\\(x\\\)-\\\(t\\\) con pendiente \\\(= 4\\;\text\{m/s\}\\\)\. El alumno dice \\\(a = 4\\;\text\{m/s\}\^2\\\)\. Pero la unidad de la pendiente es m/s, no m/s²\. Es \[\[velocidad\]\], no aceleración\.',
    new_162,
    err
)
if n > 0:
    err = p162
    print('errores.md: L162 FIXED')
else:
    print('WARN errores.md L162: not fixed')

# L179
new_179 = 'Objeto avanza 30 m y retrocede 10 m. [[desplazamiento]]: 30 − 10 = 20 m. Distancia total: 30 + 10 = 40 m. Son diferentes.'
p179, n = re.subn(
    r'Objeto avanza 30 m y retrocede 10 m\. Desplazamiento: \\\(30 - 10 = 20\\;\text\{m\}\\\)\. Distancia: \\\(30 \+ 10 = 40\\;\text\{m\}\\\)\. Son diferentes\.',
    new_179,
    err
)
if n > 0:
    err = p179
    print('errores.md: L179 FIXED')
else:
    print('WARN errores.md L179: not fixed')

write('errores.md', err)

print('\nDone.')
