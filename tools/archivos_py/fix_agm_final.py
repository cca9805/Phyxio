"""
Script final de corrección para analisis-grafico-del-movimiento.
Corrige TODOS los FAILs pendientes.
"""
import re

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento'

def read(fn):
    return open(f'{BASE}/{fn}', encoding='utf-8').read()

def write(fn, content):
    open(f'{BASE}/{fn}', 'w', encoding='utf-8').write(content)
    print(f'{fn}: SAVED')

# ============================================================
# 1. teoria.md: añadir {{f:velocidad_media_intervalo}}, fix L85-88, L18, L42, L44
# ============================================================
t = read('teoria.md')

# Insert {{f:velocidad_media_intervalo}} after the velocidad_media mention in L36
old = 'La [[velocidad]] media [[velocidad_media]] en un intervalo se obtiene como el cociente entre el [[desplazamiento]] [[desplazamiento]] y el intervalo de [[tiempo]] [[intervalo_tiempo]]; gráficamente, es la altura del rectángulo de igual área que la curva v-t en ese tramo.'
new = old + '\n\n{{f:velocidad_media_intervalo}}'
t = t.replace(old, new, 1)

# Fix L85-88: the train example - replace $...$ with plain text
old85 = '- Fase 1 (aceleración): $a_1 = 30/20 = 1{,}5\\;\\text{m/s}^2$. Área: triángulo de base 20 s y altura 30 m/s → $\\Delta x_1 = \\tfrac{1}{2}(20)(30) = 300\\;\\text{m}$.'
new85 = '- Fase 1 (aceleración): aceleración 30/20 = 1,5 m/s². Área: triángulo de base 20 s y altura 30 m/s → desplazamiento parcial = ½ × 20 × 30 = 300 m.'
t = t.replace(old85, new85, 1)

old86 = '- Fase 2 (crucero): Área: rectángulo $30 \\times 60 = 1\\,800\\;\\text{m}$.'
new86 = '- Fase 2 (crucero): Área: rectángulo 30 × 60 = 1 800 m.'
t = t.replace(old86, new86, 1)

old87 = '- Fase 3 (frenado): $a_3 = -30/15 = -2\\;\\text{m/s}^2$. Área: triángulo $\\tfrac{1}{2}(15)(30) = 225\\;\\text{m}$.'
new87 = '- Fase 3 (frenado): aceleración −30/15 = −2 m/s². Área: triángulo ½ × 15 × 30 = 225 m.'
t = t.replace(old87, new87, 1)

old88 = '- **Distancia total:** $300 + 1\\,800 + 225 = 2\\,325\\;\\text{m}$.'
new88 = '- **Distancia total:** 300 + 1 800 + 225 = 2 325 m.'
t = t.replace(old88, new88, 1)

if '{{f:velocidad_media_intervalo}}' in t:
    print('teoria.md: velocidad_media_intervalo ADDED')
else:
    print('WARN: velocidad_media_intervalo NOT ADDED in teoria.md')

write('teoria.md', t)

# ============================================================
# 2. teoria.en.md: same changes
# ============================================================
te = read('teoria.en.md')

old_en = 'The mean [[velocidad]] [[velocidad_media]] over an interval is obtained as the ratio of the [[desplazamiento]] [[desplazamiento]] to the time interval [[intervalo_tiempo]]; graphically, it is the height of the rectangle of equal area to the v-t curve in that stretch.'
new_en = old_en + '\n\n{{f:velocidad_media_intervalo}}'
te = te.replace(old_en, new_en, 1)

# Check for English version of that sentence
if '{{f:velocidad_media_intervalo}}' not in te:
    # Try alternative
    for phrase in ['velocidad_media', 'mean velocity', 'average velocity']:
        if phrase in te:
            # find context
            idx = te.find(phrase)
            print(f'teoria.en.md: found "{phrase}" at idx {idx}')
            print(repr(te[max(0,idx-20):idx+80]))
    print('WARN: velocidad_media_intervalo NOT ADDED in teoria.en.md - trying alt')
    # Find the sentence about mean velocity/velocidad_media
    lines = te.split('\n')
    for i, l in enumerate(lines):
        if 'velocidad_media' in l or ('mean' in l.lower() and 'rectangle' in l.lower()):
            print(f'EN L{i+1}: {repr(l[:150])}')
else:
    print('teoria.en.md: velocidad_media_intervalo ADDED')

# Fix the train example in teoria.en.md
old85e = '- Phase 1 (acceleration): $a_1 = 30/20 = 1.5\\;\\text{m/s}^2$. Area: triangle with base 20 s and height 30 m/s → $\\Delta x_1 = \\tfrac{1}{2}(20)(30) = 300\\;\\text{m}$.'
new85e = '- Phase 1 (acceleration): acceleration 30/20 = 1.5 m/s². Area: triangle with base 20 s and height 30 m/s → partial displacement = ½ × 20 × 30 = 300 m.'
te = te.replace(old85e, new85e, 1)

old86e = '- Phase 2 (cruising): Area: rectangle $30 \\times 60 = 1\\,800\\;\\text{m}$.'
new86e = '- Phase 2 (cruising): Area: rectangle 30 × 60 = 1 800 m.'
te = te.replace(old86e, new86e, 1)

old87e = '- Phase 3 (braking): $a_3 = -30/15 = -2\\;\\text{m/s}^2$. Area: triangle $\\tfrac{1}{2}(15)(30) = 225\\;\\text{m}$.'
new87e = '- Phase 3 (braking): acceleration −30/15 = −2 m/s². Area: triangle ½ × 15 × 30 = 225 m.'
te = te.replace(old87e, new87e, 1)

old88e = '- **Total distance:** $300 + 1\\,800 + 225 = 2\\,325\\;\\text{m}$.'
new88e = '- **Total distance:** 300 + 1 800 + 225 = 2 325 m.'
te = te.replace(old88e, new88e, 1)

write('teoria.en.md', te)

# ============================================================
# 3. errores.md: replace \(formula\) with plain text
# ============================================================
err = read('errores.md')

replacements_err = [
    # L14
    (
        'El alumno dice "está en 5 metros" señalando un punto en \\(v = 5\\;\\text{m/s}\\) del gráfico \\(v\\)-\\(t\\).',
        'El alumno dice "está en 5 metros" señalando un punto en la coordenada de [[velocidad]] igual a 5 m/s del gráfico velocidad-[[tiempo]].'
    ),
    # L20
    (
        'Un gráfico \\(v\\)-\\(t\\) muestra \\(v = 10\\;\\text{m/s}\\) constante durante \\(3\\;\\text{s}\\). El alumno dice "está a 10 m". Resultado correcto: la posición cambia en \\(\\Delta x = 10 \\times 3 = 30\\;\\text{m}\\), no 10 m.',
        'Un gráfico velocidad-[[tiempo]] muestra [[velocidad]] constante de 10 m/s durante 3 s. El alumno dice "está a 10 m". Resultado correcto: la posición cambia en 10 × 3 = 30 m, no 10 m.'
    ),
    # L31
    (
        'El alumno afirma "no se mueve" ante una línea horizontal ubicada a \\(v = 5\\;\\text{m/s}\\).',
        'El alumno afirma "no se mueve" ante una línea horizontal ubicada a [[velocidad]] constante de 5 m/s.'
    ),
    # L34
    (
        'Verificar el valor numérico de la ordenada: si \\(v = 5\\;\\text{m/s}\\), el objeto avanza a ritmo constante.',
        'Verificar el valor numérico de la ordenada: con [[velocidad]] de 5 m/s, el objeto avanza a ritmo constante.'
    ),
    # L37
    (
        'Recta horizontal en \\(v = 5\\;\\text{m/s}\\) durante \\(4\\;\\text{s}\\). Si estuviera parado, el [[desplazamiento]] sería 0. Pero el área bajo la curva es \\(5 \\times 4 = 20\\;\\text{m}\\). El objeto sí se mueve.',
        'Recta horizontal a [[velocidad]] 5 m/s durante 4 s. Si estuviera parado, el [[desplazamiento]] sería 0. Pero el área bajo la curva es 5 × 4 = 20 m. El objeto sí se mueve.'
    ),
    # L73
    (
        'Un gráfico \\(v\\)-\\(t\\) sube linealmente de 0 a 10 m/s en 2 s y luego baja linealmente a 0 en otros 2 s. El alumno calcula \\(a = (0-0)/4 = 0\\). Resultado correcto: \\(a_1 = +5\\;\\text{m/s}^2\\), \\(a_2 = -5\\;\\text{m/s}^2\\).',
        'Un gráfico velocidad-[[tiempo]] sube linealmente de 0 a 10 m/s en 2 s y luego baja linealmente a 0 en otros 2 s. El alumno calcula [[aceleracion]] = (0−0)/4 = 0. Resultado correcto: primera fase +5 m/s², segunda fase −5 m/s².'
    ),
    # L90
    (
        'Gráfico \\(v\\)-\\(t\\) muestra [[velocidad]] creciente entre \\(t = 0\\) y \\(t = 5\\;\\text{s}\\). El alumno extrapola a \\(t = 10\\;\\text{s}\\) y predice \\(v = 100\\;\\text{m/s}\\). En realidad, a \\(t = 5\\;\\text{s}\\) el objeto chocó contra un muro.',
        'Gráfico velocidad-[[tiempo]] muestra [[velocidad]] creciente entre el inicio y los 5 s. El alumno extrapola a 10 s y predice [[velocidad]] de 100 m/s. En realidad, a los 5 s el objeto chocó contra un muro.'
    ),
    # L109
    (
        '\\(v_i = 0\\), \\(v_f = 10\\;\\text{m/s}\\), \\(\\Delta t = 4\\;\\text{s}\\). Rectángulo: \\(10 \\times 4 = 40\\;\\text{m}\\). Trapecio: \\(\\frac{0+10}{2} \\times 4 = 20\\;\\text{m}\\). Diferencia del 100 %.',
        '[[velocidad_inicial]] 0, [[velocidad_final]] 10 m/s, [[intervalo_tiempo]] 4 s. Rectángulo (incorrecto): 10 × 4 = 40 m. Trapecio (correcto): (0 + 10)/2 × 4 = 20 m. Diferencia del 100 %.'
    ),
    # L126
    (
        '\\(v\\) baja de 20 a 10 m/s en 5 s. Alumno: \\(a = 10/5 = 2\\;\\text{m/s}^2\\). Correcto: \\(a = (10-20)/5 = -2\\;\\text{m/s}^2\\). El objeto frena, no acelera.',
        '[[velocidad]] baja de 20 a 10 m/s en 5 s. Alumno: [[aceleracion]] = 10/5 = 2 m/s². Correcto: [[aceleracion]] = (10−20)/5 = −2 m/s². El objeto frena, no acelera.'
    ),
    # L143
    (
        'Área sobre eje: \\(+20\\;\\text{m}\\). Área bajo eje: \\(-8\\;\\text{m}\\). Alumno suma \\(20 + 8 = 28\\;\\text{m}\\). Correcto: [[desplazamiento]] neto \\(= 20 + (-8) = 12\\;\\text{m}\\); distancia total \\(= 20 + 8 = 28\\;\\text{m}\\).',
        'Área sobre eje: +20 m. Área bajo eje: −8 m. Alumno suma 20 + 8 = 28 m. Correcto: [[desplazamiento]] neto = 20 + (−8) = 12 m; distancia total = 20 + 8 = 28 m.'
    ),
    # L162
    (
        'Gráfico \\(x\\)-\\(t\\) con pendiente \\(= 4\\;\\text{m/s}\\). El alumno dice \\(a = 4\\;\\text{m/s}^2\\). Pero la unidad de la pendiente es m/s, no m/s². Es [[velocidad]], no aceleración.',
        'Gráfico posición-[[tiempo]] con pendiente de 4 m/s. El alumno dice [[aceleracion]] = 4 m/s². Pero la unidad de la pendiente es m/s, no m/s². Es [[velocidad]], no aceleración.'
    ),
    # L179
    (
        'Objeto avanza 30 m y retrocede 10 m. Desplazamiento: \\(30 - 10 = 20\\;\\text{m}\\). Distancia: \\(30 + 10 = 40\\;\\text{m}\\). Son diferentes.',
        'Objeto avanza 30 m y retrocede 10 m. [[desplazamiento]]: 30 − 10 = 20 m. Distancia total: 30 + 10 = 40 m. Son diferentes.'
    ),
]

for old, new in replacements_err:
    if old in err:
        err = err.replace(old, new, 1)
    else:
        print(f'WARN errores.md not found: {repr(old[:60])}')

write('errores.md', err)

# ============================================================
# 4. historia.md: replace \(d \propto t^2\) with plain text
# ============================================================
h = read('historia.md')

old_h = '\\(d \\propto t^2\\)'
new_h = 'd ∝ t²'
if old_h in h:
    h = h.replace(old_h, new_h)
    print('historia.md: d propto t^2 FIXED')
else:
    print(f'WARN historia.md: not found {repr(old_h)}')
    # Show L25
    for i, l in enumerate(h.split('\n'), 1):
        if 'propto' in l or 'propto' in l.lower() or 'prop' in l:
            print(f'L{i}: {repr(l[:150])}')

write('historia.md', h)

# ============================================================
# 5. historia.en.md: replace \(d \propto t^2\) with plain text
# ============================================================
he = read('historia.en.md')

if old_h in he:
    he = he.replace(old_h, new_h)
    print('historia.en.md: d propto t^2 FIXED')
else:
    print(f'WARN historia.en.md: not found {repr(old_h)}')
    for i, l in enumerate(he.split('\n'), 1):
        if 'propto' in l or 'prop' in l:
            print(f'L{i}: {repr(l[:150])}')

write('historia.en.md', he)

# ============================================================
# 6. ejemplos.md: fix L96-98 (dimensional validation) and L125
# ============================================================
ej = read('ejemplos.md')

old_ej96 = '- Aceleración: m/s/s = m/s². Correcto.\n- Desplazamiento: m/s × s = m. Correcto.\n- Velocidad media: m/s = m/s. Correcto.'
new_ej96 = '- La unidad de [[aceleracion]] es m/s², equivalente a m/s/s.\n- La unidad de [[desplazamiento]] resulta de m/s × s = m.\n- La unidad de [[velocidad_media]] es m/s, consistente.'
if old_ej96 in ej:
    ej = ej.replace(old_ej96, new_ej96, 1)
    print('ejemplos.md: validation dimensonal FIXED')
else:
    print(f'WARN ejemplos.md: dimensional validation not found')
    lines = ej.split('\n')
    for i in range(93, min(102, len(lines))):
        print(f'L{i+1}: {repr(lines[i][:120])}')

# L125 formula textual invalida - need to see the exact content
lines_ej = ej.split('\n')
print(f'ejemplos.md L125: {repr(lines_ej[124][:150])}')

write('ejemplos.md', ej)

# ============================================================
# 7. ejemplos.en.md: same fixes
# ============================================================
eje = read('ejemplos.en.md')

old_eje96 = '- Acceleration: m/s/s = m/s². Correct.\n- Displacement: m/s × s = m. Correct.\n- Average velocity: m/s = m/s. Correct.'
new_eje96 = '- The unit of [[aceleracion]] is m/s², equivalent to m/s/s.\n- The unit of [[desplazamiento]] results from m/s × s = m.\n- The unit of [[velocidad_media]] is m/s, consistent.'
if old_eje96 in eje:
    eje = eje.replace(old_eje96, new_eje96, 1)
    print('ejemplos.en.md: dimensional validation FIXED')
else:
    print(f'WARN ejemplos.en.md: dimensional validation not found')
    lines = eje.split('\n')
    for i in range(93, min(102, len(lines))):
        print(f'L{i+1}: {repr(lines[i][:120])}')

lines_eje = eje.split('\n')
print(f'ejemplos.en.md L125: {repr(lines_eje[124][:150])}')

write('ejemplos.en.md', eje)

print('\nDone.')
