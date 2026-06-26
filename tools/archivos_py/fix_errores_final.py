"""
Correcciones directas para errores.md - líneas L20, L37, L109
"""

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento'

def read(fn):
    return open(f'{BASE}/{fn}', encoding='utf-8').read()

def write(fn, content):
    open(f'{BASE}/{fn}', 'w', encoding='utf-8').write(content)
    print(f'{fn}: SAVED')

err = read('errores.md')

# L20 - fix remaining inline math
old20 = 'Un gráfico \\(v\\)-\\(t\\) muestra [[velocidad]] constante de 10 m/s durante 3 s. El alumno dice "está a 10 m". Resultado correcto: la posición cambia en \\(\\Delta x = 10 \\times 3 = 30\\;\\text{m}\\), no 10 m.'
new20 = 'Un gráfico velocidad-[[tiempo]] muestra [[velocidad]] constante de 10 m/s durante 3 s. El alumno dice "está a 10 m". Resultado correcto: la posición cambia en 10 × 3 = 30 m, no 10 m.'
if old20 in err:
    err = err.replace(old20, new20, 1)
    print('L20 FIXED (1)')
else:
    # The \times might be single backslash
    old20b = 'Un gráfico \\(v\\)-\\(t\\) muestra [[velocidad]] constante de 10 m/s durante 3 s. El alumno dice "está a 10 m". Resultado correcto: la posición cambia en \\(\\Delta x = 10 \times 3 = 30\\;\\text{m}\\), no 10 m.'
    if old20b in err:
        err = err.replace(old20b, new20, 1)
        print('L20 FIXED (2)')
    else:
        import re
        new_err, n = re.subn(
            r'Un gráfico \\\(v\\\)-\\\(t\\\) muestra \[\[velocidad\]\] constante de 10 m/s durante 3 s\. El alumno dice "está a 10 m"\. Resultado correcto: la posición cambia en .+?, no 10 m\.',
            new20,
            err
        )
        if n > 0:
            err = new_err
            print('L20 FIXED (regex)')
        else:
            print('WARN L20 NOT FIXED')

# L37 - fix remaining inline math
old37 = 'Recta horizontal a [[velocidad]] 5 m/s durante 4 s. Si estuviera parado, el [[desplazamiento]] sería 0. Pero el área bajo la curva es \\(5 \times 4 = 20\\;\\text{m}\\). El objeto sí se mueve.'
new37 = 'Recta horizontal a [[velocidad]] 5 m/s durante 4 s. Si estuviera parado, el [[desplazamiento]] sería 0. Pero el área bajo la curva es 5 × 4 = 20 m. El objeto sí se mueve.'
if old37 in err:
    err = err.replace(old37, new37, 1)
    print('L37 FIXED (1)')
else:
    import re
    new_err, n = re.subn(
        r'Pero el área bajo la curva es \\\(.+?\\\)\. El objeto sí se mueve\.',
        'Pero el área bajo la curva es 5 × 4 = 20 m. El objeto sí se mueve.',
        err
    )
    if n > 0:
        err = new_err
        print('L37 FIXED (regex)')
    else:
        print('WARN L37 NOT FIXED')

# L109 - replace entire line
old109 = '\\(v_i = 0\\), \\(v_f = 10\\;\\text{m/s}\\), \\(\\Delta t = 4\\;\\text{s}\\). Rectángulo: \\(10 \\times 4 = 40\\;\\text{m}\\). Trapecio: \\(\\frac{0+10}{2} \\times 4 = 20\\;\\text{m}\\). Diferencia del 100 %.'
new109 = '[[velocidad_inicial]] 0, [[velocidad_final]] 10 m/s, [[intervalo_tiempo]] 4 s. Rectángulo (incorrecto): 10 × 4 = 40 m. Trapecio (correcto): (0 + 10)/2 × 4 = 20 m. Diferencia del 100 %.'
if old109 in err:
    err = err.replace(old109, new109, 1)
    print('L109 FIXED (1)')
else:
    # Try with single \times
    old109b = '\\(v_i = 0\\), \\(v_f = 10\\;\\text{m/s}\\), \\(\\Delta t = 4\\;\\text{s}\\). Rectángulo: \\(10 \times 4 = 40\\;\\text{m}\\). Trapecio: \\(\\frac{0+10}{2} \times 4 = 20\\;\\text{m}\\). Diferencia del 100 %.'
    if old109b in err:
        err = err.replace(old109b, new109, 1)
        print('L109 FIXED (2)')
    else:
        import re
        new_err, n = re.subn(
            r'\\\(v_i = 0\\\), \\\(v_f = 10\\;\\text\{m/s\}\\\), \\\(\\Delta t = 4\\;\\text\{s\}\\\)\. Rect.ngulo:.+?Diferencia del 100 %\.',
            new109,
            err,
            flags=re.DOTALL
        )
        if n > 0:
            err = new_err
            print('L109 FIXED (regex dotall)')
        else:
            print('WARN L109 NOT FIXED')
            lines = err.split('\n')
            print(repr(lines[108]))

write('errores.md', err)
print('Done.')
