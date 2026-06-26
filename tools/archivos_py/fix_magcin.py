"""
Corrección completa para magnitudes-cinematicas leaf.
FAILs: aplicaciones.en.md, aplicaciones.md, ejemplos.en.md, ejemplos.md, teoria.en.md
Todos: "sin riesgos de render matemático"
"""
import re

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/magnitudes-cinematicas'

def read(fn):
    return open(f'{BASE}/{fn}', encoding='utf-8').read()

def write(fn, content):
    open(f'{BASE}/{fn}', 'w', encoding='utf-8').write(content)
    print(f'{fn}: SAVED')

# ============================================================
# Helper: wrap bare magnitudes (avoid double-wrapping)
# ============================================================
MAGNITUDES = [
    'posicion_vectorial', 'aceleracion_media', 'rapidez_media', 'velocidad_media',
    'cambio_velocidad', 'intervalo_tiempo', 'posicion', 'desplazamiento', 'distancia',
    'aceleracion', 'velocidad', 'rapidez', 'tiempo',
]

def wrap_bare_mags(text):
    for mid in MAGNITUDES:
        # Skip if already wrapped: preceded by [[ or not preceded by letter/digit
        pattern = r'(?<!\[)(?<!\{)\b(' + re.escape(mid) + r')\b(?!\])'
        text = re.sub(pattern, r'[[\1]]', text)
    return text

# ============================================================
# Helper: replace $$ blocks using regex
# ============================================================
FORMULA_BLOCKS = [
    # (content_pattern, replacement)
    (r'\\vec\{v\}_\{med\}.*?\\frac\{\\Delta\\vec\{r\}\}', '{{f:velocidad_media}}'),
    (r'v_\{esc,med\}\s*=\s*\\frac\{s\}', '{{f:rapidez_media}}'),
    (r'\\vec\{a\}_\{med\}.*?\\frac\{\\Delta\\vec\{v\}\}', '{{f:aceleracion_media}}'),
    (r'\\vec\{a\}\(t\).*?\\frac\{d\\vec\{v\}\}', '{{f:velocidad_instantanea}}\n\n{{f:aceleracion_instantanea}}\n\n{{f:aceleracion_como_segunda_derivada}}'),
    (r'^v\s*=\s*\\frac\{dx\}\{dt\}', '{{f:velocidad_instantanea}}'),
    (r'^a\s*=\s*\\frac\{dv\}\{dt\}', '{{f:aceleracion_instantanea}}'),
    (r'^a\s*=\s*\\frac\{d\^2x\}', '{{f:aceleracion_como_segunda_derivada}}'),
    # Remove (rewrite context separately) — displacement definition
    (r'\\Delta\\vec\{r\}\s*=\s*\\vec\{r\}\(t_2\)', '__REMOVE__'),
    # Remove tangential/normal components
    (r'a_T\s*=\s*\\frac\{dv\}', '__REMOVE__'),
    # Remove delta v = v2 - v1 block (rewrite prose)
    (r'\\Delta v\s*=\s*v_2\s*-\s*v_1', '__REMOVE__'),
    # Numerical substitution blocks → prose
    (r'v_\{esc,med\}.*?\\frac\{12', '__NUMERICAL_RAPIDEZ__'),
    (r'v_\{med\}.*?\\frac\{9', '__NUMERICAL_VMED__'),
    (r'\\Delta v\s*=\s*5', '__NUMERICAL_DV__'),
    (r'a_\{med\}.*?\\frac\{5', '__NUMERICAL_AMED__'),
    (r'\\frac\{s\}\{.*?\\Delta x.*?\}', '__NUMERICAL_RATIO__'),
    # Dimensional validation blocks → prose
    (r'\\frac\{\[\\text\{m\}\]\}\{\[\\text\{s\}\]\}', '__DIMENSIONAL__'),
    (r'\\frac\{\[\\text\{m/s\}\]\}', '__DIMENSIONAL_AMED__'),
]

FORMULA_BLOCKS_EN = [
    (r'\\vec\{v\}_\{med\}.*?\\frac\{\\Delta\\vec\{r\}\}', '{{f:velocidad_media}}'),
    (r'v_\{esc,med\}\s*=\s*\\frac\{s\}', '{{f:rapidez_media}}'),
    (r'\\vec\{a\}_\{med\}.*?\\frac\{\\Delta\\vec\{v\}\}', '{{f:aceleracion_media}}'),
    (r'\\vec\{a\}\(t\).*?\\frac\{d\\vec\{v\}\}', '{{f:velocidad_instantanea}}\n\n{{f:aceleracion_instantanea}}\n\n{{f:aceleracion_como_segunda_derivada}}'),
    (r'^v\s*=\s*\\frac\{dx\}\{dt\}', '{{f:velocidad_instantanea}}'),
    (r'^a\s*=\s*\\frac\{dv\}\{dt\}', '{{f:aceleracion_instantanea}}'),
    (r'^a\s*=\s*\\frac\{d\^2x\}', '{{f:aceleracion_como_segunda_derivada}}'),
    (r'\\Delta\\vec\{r\}\s*=\s*\\vec\{r\}\(t_2\)', '__REMOVE__'),
    (r'a_T\s*=\s*\\frac\{dv\}', '__REMOVE__'),
    (r'\\Delta v\s*=\s*v_2\s*-\s*v_1', '__REMOVE__'),
    (r'v_\{esc,med\}.*?\\frac\{12', '__NUMERICAL_RAPIDEZ__'),
    (r'v_\{med\}.*?\\frac\{9', '__NUMERICAL_VMED__'),
    (r'\\Delta v\s*=\s*5', '__NUMERICAL_DV__'),
    (r'a_\{med\}.*?\\frac\{5', '__NUMERICAL_AMED__'),
    (r'\\frac\{s\}\{.*?\\Delta x.*?\}', '__NUMERICAL_RATIO__'),
    (r'\\frac\{\[\\text\{m\}\]\}\{\[\\text\{s\}\]\}', '__DIMENSIONAL__'),
    (r'\\frac\{\[\\text\{m/s\}\]\}', '__DIMENSIONAL_AMED__'),
]

def replace_dollar_blocks(text, formula_blocks, lang='es'):
    """Replace all $$ ... $$ blocks with appropriate content."""
    def repl(m):
        inner = m.group(1).strip()
        for pattern, replacement in formula_blocks:
            if re.search(pattern, inner, re.DOTALL | re.MULTILINE):
                if replacement == '__REMOVE__':
                    return ''
                elif replacement.startswith('__NUMERICAL_RAPIDEZ__'):
                    if lang == 'es':
                        return '\nLa [[rapidez_media]] resulta: 12 000 m ÷ 2 400 s = 5,0 m/s.\n'
                    else:
                        return '\nThe [[rapidez_media]] gives: 12 000 m ÷ 2 400 s = 5.0 m/s.\n'
                elif replacement.startswith('__NUMERICAL_VMED__'):
                    if lang == 'es':
                        return '\nLa [[velocidad_media]] resulta: 9 600 m ÷ 2 400 s = 4,0 m/s.\n'
                    else:
                        return '\nThe [[velocidad_media]] gives: 9 600 m ÷ 2 400 s = 4.0 m/s.\n'
                elif replacement.startswith('__NUMERICAL_DV__'):
                    if lang == 'es':
                        return '\nEl [[cambio_velocidad]] es: 5,0 − 0 = 5,0 m/s.\n'
                    else:
                        return '\nThe [[cambio_velocidad]] is: 5.0 − 0 = 5.0 m/s.\n'
                elif replacement.startswith('__NUMERICAL_AMED__'):
                    if lang == 'es':
                        return '\nLa [[aceleracion_media]] resulta: 5,0 m/s ÷ 2 400 s ≈ 2,1 × 10⁻³ m/s².\n'
                    else:
                        return '\nThe [[aceleracion_media]] gives: 5.0 m/s ÷ 2 400 s ≈ 2.1 × 10⁻³ m/s².\n'
                elif replacement.startswith('__NUMERICAL_RATIO__'):
                    if lang == 'es':
                        return '\nEl cociente [[distancia]] / [[desplazamiento]]: 12 000 ÷ 9 600 = 1,25.\n'
                    else:
                        return '\nThe ratio [[distancia]] / [[desplazamiento]]: 12 000 ÷ 9 600 = 1.25.\n'
                elif replacement.startswith('__DIMENSIONAL__'):
                    if lang == 'es':
                        return '\nm ÷ s = m/s (dimensionalmente coherente).\n'
                    else:
                        return '\nm ÷ s = m/s (dimensionally consistent).\n'
                elif replacement.startswith('__DIMENSIONAL_AMED__'):
                    if lang == 'es':
                        return '\n(m/s) ÷ s = m/s² (dimensionalmente coherente).\n'
                    else:
                        return '\n(m/s) ÷ s = m/s² (dimensionally consistent).\n'
                else:
                    return f'\n{replacement}\n'
        print(f'  WARN unhandled $$ block: {repr(inner[:80])}')
        return m.group(0)

    return re.sub(r'\$\$(.*?)\$\$', repl, text, flags=re.DOTALL)

# ============================================================
# 1. teoria.md
# ============================================================
t = read('teoria.md')

# Fix displacement definition block: rewrite context + remove $$ block
old_disp_section = '''Sea $\\vec{r}(t)$ el vector [[posicion_vectorial]] de posición de una partícula respecto a un origen fijo. El **desplazamiento** en un intervalo $[t_1, t_2]$ se define como:

$$
\\Delta\\vec{r} = \\vec{r}(t_2) - \\vec{r}(t_1)
$$'''
new_disp_section = 'Sea [[posicion_vectorial]] el vector de posición de una partícula respecto a un origen fijo. El **[[desplazamiento]]** en un intervalo de [[tiempo]] es la diferencia vectorial entre la posición final y la inicial.'
if old_disp_section in t:
    t = t.replace(old_disp_section, new_disp_section, 1)
    print('teoria.md: displacement section FIXED')
else:
    print('WARN teoria.md: displacement section not found')

# Fix L42 inline: $v_{esc,med} \geq |\vec{v}_{med}|$
old_l42 = 'Ambas coinciden únicamente cuando el movimiento es rectilíneo sin cambio de sentido; en cualquier otro caso $v_{esc,med} \\geq |\\vec{v}_{med}|$.'
new_l42 = 'Ambas coinciden únicamente cuando el movimiento es rectilíneo sin cambio de sentido; en cualquier otro caso, la [[rapidez_media]] supera o iguala la magnitud de la [[velocidad_media]].'
if old_l42 in t:
    t = t.replace(old_l42, new_l42, 1)
    print('teoria.md: L42 inline FIXED')
else:
    print('WARN teoria.md: L42 not found')

# Fix L44 inline: $\Delta\vec{v} = \vec{v}(t_2) - \vec{v}(t_1)$
old_l44 = 'El **cambio de velocidad** [[cambio_velocidad]] en un intervalo es $\\Delta\\vec{v} = \\vec{v}(t_2) - \\vec{v}(t_1)$.'
new_l44 = 'El **[[cambio_velocidad]]** en un intervalo es la diferencia entre la [[velocidad]] final y la inicial.'
if old_l44 in t:
    t = t.replace(old_l44, new_l44, 1)
    print('teoria.md: L44 inline FIXED')
else:
    print('WARN teoria.md: L44 not found')

# Fix the "velocidad instantánea" section with wrong acceleration formula
# This section says "velocidad instantánea" but has the acceleration second derivative formula
# Need to restructure
old_vinst = '''La **velocidad instantánea** es el límite de la velocidad media cuando el intervalo tiende a cero:

$$
\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2}
$$'''
new_vinst = '''La **[[velocidad_instantanea]]** es el límite de la [[velocidad_media]] cuando el [[intervalo_tiempo]] tiende a cero:

{{f:velocidad_instantanea}}

La **[[aceleracion_instantanea]]** es el límite de la [[aceleracion_media]] cuando el intervalo tiende a cero:

{{f:aceleracion_instantanea}}

La [[aceleracion]] también puede expresarse como la derivada segunda de la posición respecto al [[tiempo]]:

{{f:aceleracion_como_segunda_derivada}}'''
if old_vinst in t:
    t = t.replace(old_vinst, new_vinst, 1)
    print('teoria.md: velocidad_instantanea section FIXED')
else:
    print('WARN teoria.md: velocidad_instantanea section not found')

# Fix velocidad media block
old_vmed = '''La **velocidad media** [[velocidad_media]] se define como el cociente entre desplazamiento e intervalo de tiempo [[intervalo_tiempo]]:

$$
\\vec{v}_{med} = \\frac{\\Delta\\vec{r}}{\\Delta t}
$$'''
new_vmed = '''La **[[velocidad_media]]** se define como el cociente entre [[desplazamiento]] e [[intervalo_tiempo]]:

{{f:velocidad_media}}'''
if old_vmed in t:
    t = t.replace(old_vmed, new_vmed, 1)
    print('teoria.md: velocidad_media block FIXED')
else:
    print('WARN teoria.md: velocidad_media block not found')

# Fix rapidez media block
old_rmed = '''La **rapidez media** usa en cambio la distancia total recorrida $s$ a lo largo de la trayectoria:

$$
v_{esc,med} = \\frac{s}{\\Delta t}
$$'''
new_rmed = '''La **[[rapidez_media]]** usa en cambio la [[distancia]] total recorrida a lo largo de la trayectoria:

{{f:rapidez_media}}'''
if old_rmed in t:
    t = t.replace(old_rmed, new_rmed, 1)
    print('teoria.md: rapidez_media block FIXED')
else:
    print('WARN teoria.md: rapidez_media block not found')

# Fix aceleracion media block
old_amed = '''A partir de él, la **aceleración media** [[aceleracion_media]] se define como:

$$
\\vec{a}_{med} = \\frac{\\Delta\\vec{v}}{\\Delta t}
$$'''
new_amed = '''A partir de él, la **[[aceleracion_media]]** se define como:

{{f:aceleracion_media}}'''
if old_amed in t:
    t = t.replace(old_amed, new_amed, 1)
    print('teoria.md: aceleracion_media block FIXED')
else:
    print('WARN teoria.md: aceleracion_media block not found')

# Fix tangential/normal block
old_atn = '''En coordenadas intrínsecas (tangencial-normal), la aceleración se descompone en dos componentes ortogonales. La componente **tangencial** $a_T$ mide el cambio del módulo de la velocidad, y la componente **normal** (o centrípeta) $a_N$ mide el cambio de dirección:

$$
a_T = \\frac{dv}{dt}, \\qquad a_N = \\frac{v^2}{R}
$$'''
new_atn = 'En coordenadas intrínsecas (tangencial-normal), la [[aceleracion]] se descompone en dos componentes ortogonales. La componente **tangencial** mide el cambio del módulo de la [[velocidad]], y la componente **normal** (o centrípeta) mide el cambio de dirección de la [[velocidad]].'
if old_atn in t:
    t = t.replace(old_atn, new_atn, 1)
    print('teoria.md: a_T a_N block FIXED')
else:
    print('WARN teoria.md: a_T a_N block not found')

# Wrap bare magnitudes
t = wrap_bare_mags(t)
write('teoria.md', t)

# ============================================================
# 2. teoria.en.md
# ============================================================
te = read('teoria.en.md')

# Fix displacement definition
old_disp_en = '''Let $\\vec{r}(t)$ be the position vector [[posicion_vectorial]] of a particle relative to a fixed origin. The **displacement** over an interval $[t_1, t_2]$ is defined as:

$$
\\Delta\\vec{r} = \\vec{r}(t_2) - \\vec{r}(t_1)
$$'''
new_disp_en = 'Let [[posicion_vectorial]] be the position vector of a particle relative to a fixed origin. The **[[desplazamiento]]** over a [[tiempo]] interval is the vectorial difference between the final and initial position vectors.'
if old_disp_en in te:
    te = te.replace(old_disp_en, new_disp_en, 1)
    print('teoria.en.md: displacement section FIXED')
else:
    print('WARN teoria.en.md: displacement section not found')

# Fix inline L42
old_l42e = 'The two coincide only for straight-line motion without reversal; in all other cases $v_{esc,med} \\geq |\\vec{v}_{med}|$.'
new_l42e = 'The two coincide only for straight-line motion without reversal; in all other cases, [[rapidez_media]] is greater than or equal to the magnitude of [[velocidad_media]].'
if old_l42e in te:
    te = te.replace(old_l42e, new_l42e, 1)
    print('teoria.en.md: L42 inline FIXED')
else:
    print('WARN teoria.en.md: L42 not found')

# Fix inline L44
old_l44e = 'The **change in velocity** over an interval is $\\Delta\\vec{v} = \\vec{v}(t_2) - \\vec{v}(t_1)$.'
new_l44e = 'The **[[cambio_velocidad]]** over an interval is the difference between the final and initial [[velocidad]] vectors.'
if old_l44e in te:
    te = te.replace(old_l44e, new_l44e, 1)
    print('teoria.en.md: L44 inline FIXED')
else:
    print('WARN teoria.en.md: L44 not found')

# Fix velocidad media block
old_vmed_e = '''**Average velocity [[velocidad_media]]** is displacement divided by elapsed time:

$$
\\vec{v}_{med} = \\frac{\\Delta\\vec{r}}{\\Delta t [[intervalo_tiempo]]}
$$'''
new_vmed_e = '''**[[velocidad_media]]** is [[desplazamiento]] divided by elapsed [[intervalo_tiempo]]:

{{f:velocidad_media}}'''
if old_vmed_e in te:
    te = te.replace(old_vmed_e, new_vmed_e, 1)
    print('teoria.en.md: velocidad_media block FIXED')
else:
    print('WARN teoria.en.md: velocidad_media block not found')

# Fix rapidez media block
old_rmed_e = '''**Average speed [[rapidez_media]]** uses instead the total path length $s$ along the trajectory:

$$
v_{esc,med} = \\frac{s}{\\Delta t}
$$'''
new_rmed_e = '''**[[rapidez_media]]** uses instead the total [[distancia]] along the trajectory:

{{f:rapidez_media}}'''
if old_rmed_e in te:
    te = te.replace(old_rmed_e, new_rmed_e, 1)
    print('teoria.en.md: rapidez_media block FIXED')
else:
    print('WARN teoria.en.md: rapidez_media block not found')

# Fix aceleracion media block
old_amed_e = '''From it, **average acceleration [[aceleracion_media]]** is:

$$
\\vec{a}_{med} = \\frac{\\Delta\\vec{v}}{\\Delta t}
$$'''
new_amed_e = '''From it, **[[aceleracion_media]]** is:

{{f:aceleracion_media}}'''
if old_amed_e in te:
    te = te.replace(old_amed_e, new_amed_e, 1)
    print('teoria.en.md: aceleracion_media block FIXED')
else:
    print('WARN teoria.en.md: aceleracion_media block not found')

# Fix "instantaneous velocity" section with wrong acceleration formula
old_vinst_e = '''**Instantaneous velocity** is the limit of average velocity as the interval approaches zero:

$$
\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2}
$$'''
new_vinst_e = '''**[[velocidad_instantanea]]** is the limit of [[velocidad_media]] as the [[intervalo_tiempo]] approaches zero:

{{f:velocidad_instantanea}}

**[[aceleracion_instantanea]]** is the limit of [[aceleracion_media]] as the interval approaches zero:

{{f:aceleracion_instantanea}}

The [[aceleracion]] can also be expressed as the second time derivative of position:

{{f:aceleracion_como_segunda_derivada}}'''
if old_vinst_e in te:
    te = te.replace(old_vinst_e, new_vinst_e, 1)
    print('teoria.en.md: velocidad_instantanea section FIXED')
else:
    print('WARN teoria.en.md: velocidad_instantanea section not found')

# Fix tangential/normal block
old_atn_e = '''In intrinsic (tangential–normal) coordinates the acceleration decomposes into two orthogonal components. The **tangential** component $a_T$ measures the rate of change of speed, and the **normal** (centripetal) component $a_N$ measures the rate of change of direction:

$$
a_T = \\frac{dv}{dt}, \\qquad a_N = \\frac{v^2}{R}
$$

where $v = |\\vec{v}|$ is the speed and $R$ the radius of curvature. The total magnitude of the acceleration is $|\\vec{a}| = \\sqrt{a_T^2 + a_N^2}$.'''
new_atn_e = 'In intrinsic (tangential–normal) coordinates the [[aceleracion]] decomposes into two orthogonal components. The **tangential** component measures the rate of change of [[rapidez]], and the **normal** (centripetal) component measures the rate of change of direction of [[velocidad]]. The total magnitude of the [[aceleracion]] is the square root of the sum of squares of both components.'
if old_atn_e in te:
    te = te.replace(old_atn_e, new_atn_e, 1)
    print('teoria.en.md: a_T a_N block FIXED')
else:
    print('WARN teoria.en.md: a_T a_N block not found')

# Wrap bare magnitudes
te = wrap_bare_mags(te)
write('teoria.en.md', te)

# ============================================================
# 3. ejemplos.md
# ============================================================
ej = read('ejemplos.md')

# L5 inline math: rewrite statement with plain values
old_ej5 = 'La distancia total recorrida a lo largo de la trayectoria es \\( s = 12{,}0\\;\\text{km} \\), mientras que el desplazamiento [[desplazamiento]] neto entre A y B tiene módulo \\( |\\Delta x| = 9{,}6\\;\\text{km} \\). El recorrido dura \\( \\Delta t [[intervalo_tiempo]] = 40\\;\\text{min} \\). Al salir de A el ciclista está en reposo, de modo que \\( v_1 = 0\\;\\text{m/s} \\), y al llegar a B su velocímetro marca \\( v_2 = 5{,}0\\;\\text{m/s} \\).'
new_ej5 = 'La [[distancia]] total recorrida es 12,0 km, mientras que el [[desplazamiento]] neto entre A y B tiene módulo 9,6 km. El recorrido dura [[intervalo_tiempo]] de 40 min. Al salir de A el ciclista está en reposo (0 m/s), y al llegar a B su velocímetro marca 5,0 m/s.'
if old_ej5 in ej:
    ej = ej.replace(old_ej5, new_ej5, 1)
    print('ejemplos.md: L5 inline FIXED')
else:
    print('WARN ejemplos.md: L5 not found')

# L17-19 table rows: fix value column with = sign
old_l17 = '| \\( s \\) | distancia recorrida [[distancia]] | \\( 12{,}0\\;\\text{km} = 12\\,000\\;\\text{m} \\) |'
new_l17 = '| s | [[distancia]] recorrida | 12,0 km = 12 000 m |'
if old_l17 in ej:
    ej = ej.replace(old_l17, new_l17, 1)
    print('ejemplos.md: L17 table FIXED')
else:
    print('WARN ejemplos.md: L17 not found')

old_l18 = '| \\( |\\Delta x| \\) | módulo del desplazamiento | \\( 9{,}6\\;\\text{km} = 9\\,600\\;\\text{m} \\) |'
new_l18 = '| |Δx| | módulo del [[desplazamiento]] | 9,6 km = 9 600 m |'
if old_l18 in ej:
    ej = ej.replace(old_l18, new_l18, 1)
    print('ejemplos.md: L18 table FIXED')
else:
    print('WARN ejemplos.md: L18 not found')

old_l19 = '| \\( \\Delta t \\) | intervalo temporal | \\( 40\\;\\text{min} = 2\\,400\\;\\text{s} \\) |'
new_l19 = '| Δt | [[intervalo_tiempo]] | 40 min = 2 400 s |'
if old_l19 in ej:
    ej = ej.replace(old_l19, new_l19, 1)
    print('ejemplos.md: L19 table FIXED')
else:
    print('WARN ejemplos.md: L19 not found')

# L43 inline: fix \(\Delta v = v_2 - v_1\)
old_l43 = 'y \\( \\Delta v = v_2 - v_1 \\) resume cómo ha cambiado el estado de movimiento entre el inicio y el final.'
new_l43 = 'y el [[cambio_velocidad]] resume cómo ha cambiado el estado de movimiento entre el inicio y el final.'
if old_l43 in ej:
    ej = ej.replace(old_l43, new_l43, 1)
    print('ejemplos.md: L43 inline FIXED')
else:
    print('WARN ejemplos.md: L43 not found')

# Symbolic resolution $$ blocks
old_sym_rapidez = '''Primero usamos la fórmula núcleo `rapidez_media`:

$$
v_{esc,med} = \\frac{s}{\\Delta t}
$$'''
new_sym_rapidez = '''Primero usamos la fórmula núcleo `rapidez_media`:

{{f:rapidez_media}}'''
if old_sym_rapidez in ej:
    ej = ej.replace(old_sym_rapidez, new_sym_rapidez, 1)
    print('ejemplos.md: sym rapidez_media FIXED')
else:
    print('WARN ejemplos.md: sym rapidez_media not found')

old_sym_vmed = '''Después usamos la fórmula núcleo `velocidad_media`:

$$
v_{med} = \\frac{\\Delta x}{\\Delta t}
$$'''
new_sym_vmed = '''Después usamos la fórmula núcleo `velocidad_media`:

{{f:velocidad_media}}'''
if old_sym_vmed in ej:
    ej = ej.replace(old_sym_vmed, new_sym_vmed, 1)
    print('ejemplos.md: sym velocidad_media FIXED')
else:
    print('WARN ejemplos.md: sym velocidad_media not found')

old_sym_dv = '''El cambio de velocidad queda definido como:

$$
\\Delta v = v_2 - v_1
$$'''
new_sym_dv = 'El [[cambio_velocidad]] es la diferencia entre la [[velocidad]] al final y al inicio del trayecto.'
if old_sym_dv in ej:
    ej = ej.replace(old_sym_dv, new_sym_dv, 1)
    print('ejemplos.md: sym delta_v FIXED')
else:
    print('WARN ejemplos.md: sym delta_v not found')

old_sym_amed = '''Y la fórmula núcleo `aceleracion_media` es:

$$
a_{med} = \\frac{\\Delta v}{\\Delta t}
$$'''
new_sym_amed = '''Y la fórmula núcleo `aceleracion_media` es:

{{f:aceleracion_media}}'''
if old_sym_amed in ej:
    ej = ej.replace(old_sym_amed, new_sym_amed, 1)
    print('ejemplos.md: sym aceleracion_media FIXED')
else:
    print('WARN ejemplos.md: sym aceleracion_media not found')

old_sym_inst = '''Si dispusiéramos de la ley temporal \\( x(t) \\), entonces aparecerían también las relaciones diferenciales:

$$
v = \\frac{dx}{dt}
$$

$$
a = \\frac{dv}{dt}
$$

$$
a = \\frac{d^2x}{dt^2}
$$'''
new_sym_inst = '''Si dispusiéramos de la ley temporal completa, aparecerían también las relaciones diferenciales:

{{f:velocidad_instantanea}}

{{f:aceleracion_instantanea}}

{{f:aceleracion_como_segunda_derivada}}'''
if old_sym_inst in ej:
    ej = ej.replace(old_sym_inst, new_sym_inst, 1)
    print('ejemplos.md: sym instantaneous FIXED')
else:
    print('WARN ejemplos.md: sym instantaneous not found')

# Numerical substitution blocks
old_num_rapidez = '''Aplicamos `rapidez_media`:

$$
v_{esc,med} = \\frac{12\\,000\\;\\text{m}}{2\\,400\\;\\text{s}} = 5{,}0\\;\\text{m/s}
$$'''
new_num_rapidez = '''Aplicamos `rapidez_media`:

La [[rapidez_media]] resulta: 12 000 m ÷ 2 400 s = 5,0 m/s.'''
if old_num_rapidez in ej:
    ej = ej.replace(old_num_rapidez, new_num_rapidez, 1)
    print('ejemplos.md: num rapidez_media FIXED')
else:
    print('WARN ejemplos.md: num rapidez_media not found')

old_num_vmed = '''Aplicamos `velocidad_media`:

$$
v_{med} = \\frac{9\\,600\\;\\text{m}}{2\\,400\\;\\text{s}} = 4{,}0\\;\\text{m/s}
$$'''
new_num_vmed = '''Aplicamos `velocidad_media`:

La [[velocidad_media]] resulta: 9 600 m ÷ 2 400 s = 4,0 m/s.'''
if old_num_vmed in ej:
    ej = ej.replace(old_num_vmed, new_num_vmed, 1)
    print('ejemplos.md: num velocidad_media FIXED')
else:
    print('WARN ejemplos.md: num velocidad_media not found')

old_num_dv = '''Calculamos el cambio de velocidad:

$$
\\Delta v = 5{,}0 - 0 = 5{,}0\\;\\text{m/s}
$$'''
new_num_dv = 'El [[cambio_velocidad]] calculado: 5,0 − 0 = 5,0 m/s.'
if old_num_dv in ej:
    ej = ej.replace(old_num_dv, new_num_dv, 1)
    print('ejemplos.md: num delta_v FIXED')
else:
    print('WARN ejemplos.md: num delta_v not found')

old_num_amed = '''Aplicamos `aceleracion_media`:

$$
a_{med} = \\frac{5{,}0\\;\\text{m/s}}{2\\,400\\;\\text{s}} \\approx 2{,}1 \\times 10^{-3}\\;\\text{m/s}^2
$$'''
new_num_amed = '''Aplicamos `aceleracion_media`:

La [[aceleracion_media]] resulta: 5,0 m/s ÷ 2 400 s ≈ 2,1 × 10⁻³ m/s².'''
if old_num_amed in ej:
    ej = ej.replace(old_num_amed, new_num_amed, 1)
    print('ejemplos.md: num aceleracion_media FIXED')
else:
    print('WARN ejemplos.md: num aceleracion_media not found')

old_num_ratio = '''Además, una razón útil para interpretar el trayecto es:

$$
\\frac{s}{|\\Delta x|} = \\frac{12\\,000}{9\\,600} = 1{,}25
$$'''
new_num_ratio = 'El cociente [[distancia]] / [[desplazamiento]]: 12 000 ÷ 9 600 = 1,25, lo que indica que la longitud real del camino supera en un 25 % al cambio neto de posición.'
if old_num_ratio in ej:
    ej = ej.replace(old_num_ratio, new_num_ratio, 1)
    print('ejemplos.md: num ratio FIXED')
else:
    print('WARN ejemplos.md: num ratio not found')

# Dimensional validation blocks
old_dim1 = '''La relación `rapidez_media` tiene coherencia dimensional:

$$
\\frac{[\\text{m}]}{[\\text{s}]} = [\\text{m/s}]
$$'''
new_dim1 = 'La relación `rapidez_media` tiene coherencia dimensional: [[distancia]] (m) ÷ [[tiempo]] (s) = m/s.'
if old_dim1 in ej:
    ej = ej.replace(old_dim1, new_dim1, 1)
    print('ejemplos.md: dim1 FIXED')
else:
    print('WARN ejemplos.md: dim1 not found')

# Check for any remaining $$ blocks
remaining = re.findall(r'\$\$', ej)
if remaining:
    print(f'WARN ejemplos.md: {len(remaining)} $$ delimiters remaining')
    lines = ej.split('\n')
    for i, l in enumerate(lines, 1):
        if '$$' in l:
            print(f'  L{i}: {repr(l[:80])}')
else:
    print('ejemplos.md: no remaining $$ blocks')

ej = wrap_bare_mags(ej)
write('ejemplos.md', ej)

# ============================================================
# 4. ejemplos.en.md
# ============================================================
eje = read('ejemplos.en.md')

# L5 inline: rewrite statement
old_eje5 = 'The total path length is \\( s = 12.0\\;\\text{km} \\), whereas the magnitude of the net displacement [[desplazamiento]] between A and B is \\( |\\Delta x| = 9.6\\;\\text{km} \\). The trip lasts \\( \\Delta t = 40\\;\\text{min} \\). At the start, the cyclist is at rest, so \\( v_1 = 0\\;\\text{m/s} \\), and on arrival at B the speedometer reads \\( v_2 = 5.0\\;\\text{m/s} \\).'
new_eje5 = 'The total [[distancia]] is 12.0 km, whereas the magnitude of the net [[desplazamiento]] between A and B is 9.6 km. The trip lasts an [[intervalo_tiempo]] of 40 min. At the start, the cyclist is at rest (0 m/s), and on arrival at B the speedometer reads 5.0 m/s.'
if old_eje5 in eje:
    eje = eje.replace(old_eje5, new_eje5, 1)
    print('ejemplos.en.md: L5 inline FIXED')
else:
    print('WARN ejemplos.en.md: L5 not found')

# L17-19 table rows
old_l17e = '| \\( s \\) | distance traveled [[distancia]] | \\( 12.0\\;\\text{km} = 12\\,000\\;\\text{m} \\) |'
new_l17e = '| s | [[distancia]] traveled | 12.0 km = 12 000 m |'
if old_l17e in eje:
    eje = eje.replace(old_l17e, new_l17e, 1)
    print('ejemplos.en.md: L17 FIXED')
else:
    print('WARN ejemplos.en.md: L17 not found')

old_l18e = '| \\( |\\Delta x| \\) | displacement magnitude | \\( 9.6\\;\\text{km} = 9\\,600\\;\\text{m} \\) |'
new_l18e = '| |Δx| | [[desplazamiento]] magnitude | 9.6 km = 9 600 m |'
if old_l18e in eje:
    eje = eje.replace(old_l18e, new_l18e, 1)
    print('ejemplos.en.md: L18 FIXED')
else:
    print('WARN ejemplos.en.md: L18 not found')

old_l19e = '| \\( \\Delta t \\) | time [[tiempo]] interval [[intervalo_tiempo]] | \\( 40\\;\\text{min} = 2\\,400\\;\\text{s} \\) |'
new_l19e = '| Δt | [[tiempo]] [[intervalo_tiempo]] | 40 min = 2 400 s |'
if old_l19e in eje:
    eje = eje.replace(old_l19e, new_l19e, 1)
    print('ejemplos.en.md: L19 FIXED')
else:
    print('WARN ejemplos.en.md: L19 not found')

# L45 inline
old_l45e = 'and \\( \\Delta v = v_2 - v_1 \\) captures how the state of motion has changed between the two endpoints.'
new_l45e = 'and the [[cambio_velocidad]] captures how the state of motion has changed between the two endpoints.'
if old_l45e in eje:
    eje = eje.replace(old_l45e, new_l45e, 1)
    print('ejemplos.en.md: L45 inline FIXED')
else:
    print('WARN ejemplos.en.md: L45 not found')

# Symbolic resolution blocks
old_sym_rapidez_e = '''We first use the core relation `rapidez_media`:

$$
v_{esc,med} = \\frac{s}{\\Delta t}
$$'''
new_sym_rapidez_e = '''We first use the core relation `rapidez_media`:

{{f:rapidez_media}}'''
if old_sym_rapidez_e in eje:
    eje = eje.replace(old_sym_rapidez_e, new_sym_rapidez_e, 1)
    print('ejemplos.en.md: sym rapidez_media FIXED')
else:
    print('WARN ejemplos.en.md: sym rapidez_media not found')

old_sym_vmed_e = '''We then use the core relation `velocidad_media`:

$$
v_{med} = \\frac{\\Delta x}{\\Delta t}
$$'''
new_sym_vmed_e = '''We then use the core relation `velocidad_media`:

{{f:velocidad_media}}'''
if old_sym_vmed_e in eje:
    eje = eje.replace(old_sym_vmed_e, new_sym_vmed_e, 1)
    print('ejemplos.en.md: sym velocidad_media FIXED')
else:
    print('WARN ejemplos.en.md: sym velocidad_media not found')

old_sym_dv_e = '''The change in velocity is defined as:

$$
\\Delta v = v_2 - v_1
$$'''
new_sym_dv_e = 'The [[cambio_velocidad]] is the difference between the final and initial [[velocidad]].'
if old_sym_dv_e in eje:
    eje = eje.replace(old_sym_dv_e, new_sym_dv_e, 1)
    print('ejemplos.en.md: sym delta_v FIXED')
else:
    print('WARN ejemplos.en.md: sym delta_v not found')

old_sym_amed_e = '''And the core relation `aceleracion_media` is:

$$
a_{med} = \\frac{\\Delta v}{\\Delta t}
$$'''
new_sym_amed_e = '''And the core relation `aceleracion_media` is:

{{f:aceleracion_media}}'''
if old_sym_amed_e in eje:
    eje = eje.replace(old_sym_amed_e, new_sym_amed_e, 1)
    print('ejemplos.en.md: sym aceleracion_media FIXED')
else:
    print('WARN ejemplos.en.md: sym aceleracion_media not found')

old_sym_inst_e = '''As a bridge to the rest of the leaf, it is useful to recall the differential relations:

$$
v = \\frac{dx}{dt}
$$

$$
a = \\frac{dv}{dt}
$$

$$
a = \\frac{d^2x}{dt^2}
$$'''
new_sym_inst_e = '''As a bridge to the rest of the leaf, the differential relations are:

{{f:velocidad_instantanea}}

{{f:aceleracion_instantanea}}

{{f:aceleracion_como_segunda_derivada}}'''
if old_sym_inst_e in eje:
    eje = eje.replace(old_sym_inst_e, new_sym_inst_e, 1)
    print('ejemplos.en.md: sym instantaneous FIXED')
else:
    print('WARN ejemplos.en.md: sym instantaneous not found')

# Numerical blocks
old_num_rapidez_e = '''Applying `rapidez_media`:

$$
v_{esc,med} = \\frac{12\\,000\\;\\text{m}}{2\\,400\\;\\text{s}} = 5.0\\;\\text{m/s}
$$'''
new_num_rapidez_e = '''Applying `rapidez_media`:

The [[rapidez_media]] gives: 12 000 m ÷ 2 400 s = 5.0 m/s.'''
if old_num_rapidez_e in eje:
    eje = eje.replace(old_num_rapidez_e, new_num_rapidez_e, 1)
    print('ejemplos.en.md: num rapidez_media FIXED')
else:
    print('WARN ejemplos.en.md: num rapidez_media not found')

old_num_vmed_e = '''Applying `velocidad_media`:

$$
v_{med} = \\frac{9\\,600\\;\\text{m}}{2\\,400\\;\\text{s}} = 4.0\\;\\text{m/s}
$$'''
new_num_vmed_e = '''Applying `velocidad_media`:

The [[velocidad_media]] gives: 9 600 m ÷ 2 400 s = 4.0 m/s.'''
if old_num_vmed_e in eje:
    eje = eje.replace(old_num_vmed_e, new_num_vmed_e, 1)
    print('ejemplos.en.md: num velocidad_media FIXED')
else:
    print('WARN ejemplos.en.md: num velocidad_media not found')

old_num_dv_e = '''Computing the change in velocity:

$$
\\Delta v = 5.0 - 0 = 5.0\\;\\text{m/s}
$$'''
new_num_dv_e = 'The [[cambio_velocidad]]: 5.0 − 0 = 5.0 m/s.'
if old_num_dv_e in eje:
    eje = eje.replace(old_num_dv_e, new_num_dv_e, 1)
    print('ejemplos.en.md: num delta_v FIXED')
else:
    print('WARN ejemplos.en.md: num delta_v not found')

old_num_amed_e = '''Applying `aceleracion_media`:

$$
a_{med} = \\frac{5.0\\;\\text{m/s}}{2\\,400\\;\\text{s}} \\approx 2.1 \\times 10^{-3}\\;\\text{m/s}^2
$$'''
new_num_amed_e = '''Applying `aceleracion_media`:

The [[aceleracion_media]] gives: 5.0 m/s ÷ 2 400 s ≈ 2.1 × 10⁻³ m/s².'''
if old_num_amed_e in eje:
    eje = eje.replace(old_num_amed_e, new_num_amed_e, 1)
    print('ejemplos.en.md: num aceleracion_media FIXED')
else:
    print('WARN ejemplos.en.md: num aceleracion_media not found')

old_num_ratio_e = '''A useful secondary ratio is:

$$
\\frac{s}{|\\Delta x|} = \\frac{12\\,000}{9\\,600} = 1.25
$$'''
new_num_ratio_e = 'The ratio [[distancia]] / [[desplazamiento]]: 12 000 ÷ 9 600 = 1.25.'
if old_num_ratio_e in eje:
    eje = eje.replace(old_num_ratio_e, new_num_ratio_e, 1)
    print('ejemplos.en.md: num ratio FIXED')
else:
    print('WARN ejemplos.en.md: num ratio not found')

old_dim1_e = '''The relation `rapidez_media` is dimensionally consistent:

$$
\\frac{[\\text{m}]}{[\\text{s}]} = [\\text{m/s}]
$$'''
new_dim1_e = 'The relation `rapidez_media` is dimensionally consistent: [[distancia]] (m) ÷ [[tiempo]] (s) = m/s.'
if old_dim1_e in eje:
    eje = eje.replace(old_dim1_e, new_dim1_e, 1)
    print('ejemplos.en.md: dim1 FIXED')
else:
    print('WARN ejemplos.en.md: dim1 not found')

# Check for any remaining $$ blocks
remaining_e = re.findall(r'\$\$', eje)
if remaining_e:
    print(f'WARN ejemplos.en.md: {len(remaining_e)} $$ delimiters remaining')
    lines = eje.split('\n')
    for i, l in enumerate(lines, 1):
        if '$$' in l:
            print(f'  L{i}: {repr(l[:80])}')
else:
    print('ejemplos.en.md: no remaining $$ blocks')

eje = wrap_bare_mags(eje)
write('ejemplos.en.md', eje)

# ============================================================
# 5. aplicaciones.md
# ============================================================
ap = read('aplicaciones.md')

# Section 1: air navigation
old_ap1 = 'Para calcular la velocidad media del vuelo completo se usa \\( v_{med} = |\\Delta\\vec{r}|/\\Delta t \\) con \\( |\\Delta\\vec{r}| \\approx 9\\,560\\;\\text{km} \\), que representa la separación útil entre origen y destino. La rapidez media usa \\( s/\\Delta t \\) con la longitud real de la ruta corregida por desviaciones, \\( s \\approx 10\\,100\\;\\text{km} \\).'
new_ap1 = 'Para calcular la [[velocidad_media]] del vuelo completo se divide el [[desplazamiento]] (≈ 9 560 km) entre el [[intervalo_tiempo]]. La [[rapidez_media]] usa la [[distancia]] real de la ruta (≈ 10 100 km) entre el mismo [[intervalo_tiempo]].'
if old_ap1 in ap:
    ap = ap.replace(old_ap1, new_ap1, 1)
    print('aplicaciones.md: ap1 FIXED')
else:
    print('WARN aplicaciones.md: ap1 not found')

# Section 2: emergency braking L15
old_ap2_l15 = 'El procedimiento registra la velocidad inicial \\( v_1 = 27{,}8\\;\\text{m/s} \\) y la velocidad final \\( v_2 = 0 \\) sobre asfalto seco, con ABS activo.'
new_ap2_l15 = 'El procedimiento registra la [[velocidad]] inicial (27,8 m/s) y la [[velocidad]] final (0) sobre asfalto seco, con ABS activo.'
if old_ap2_l15 in ap:
    ap = ap.replace(old_ap2_l15, new_ap2_l15, 1)
    print('aplicaciones.md: ap2 L15 FIXED')
else:
    print('WARN aplicaciones.md: ap2 L15 not found')

# Section 2: L17
old_ap2_l17 = 'El **cambio de velocidad** es \\( \\Delta v = v_2 - v_1 = -27{,}8\\;\\text{m/s} \\), y de ahí se obtiene \\( a_{med} = \\Delta v/\\Delta t \\).'
new_ap2_l17 = 'El **[[cambio_velocidad]]** es −27,8 m/s, y de ahí se obtiene la [[aceleracion_media]] dividiendo entre el [[intervalo_tiempo]].'
if old_ap2_l17 in ap:
    ap = ap.replace(old_ap2_l17, new_ap2_l17, 1)
    print('aplicaciones.md: ap2 L17 FIXED')
else:
    print('WARN aplicaciones.md: ap2 L17 not found')

# Section 3: athletics L27
old_ap3 = 'la **rapidez media** es \\( v_{esc,med} = s/\\Delta t \\approx 6{,}17\\;\\text{m/s} \\), mientras que la velocidad media resulta casi nula'
new_ap3 = 'la **[[rapidez_media]]** es 10 000 m ÷ 1 620 s ≈ 6,17 m/s, mientras que la [[velocidad_media]] resulta casi nula'
if old_ap3 in ap:
    ap = ap.replace(old_ap3, new_ap3, 1)
    print('aplicaciones.md: ap3 FIXED')
else:
    print('WARN aplicaciones.md: ap3 not found')

# Section 4: seismology L39
old_ap4_l39 = 'los sismólogos estiman la **velocidad media** de propagación de la onda como \\( v_{med} = |\\Delta\\vec{r}|/\\Delta t \\).'
new_ap4_l39 = 'los sismólogos estiman la **[[velocidad_media]]** de propagación de la onda dividiendo la [[distancia]] entre el [[intervalo_tiempo]] de tránsito.'
if old_ap4_l39 in ap:
    ap = ap.replace(old_ap4_l39, new_ap4_l39, 1)
    print('aplicaciones.md: ap4 L39 FIXED')
else:
    print('WARN aplicaciones.md: ap4 L39 not found')

# Section 4: L41
old_ap4_l41 = 'se obtiene \\( v_{med} \\approx 5\\,800\\;\\text{m/s} \\), valor compatible con la propagación en corteza continental.'
new_ap4_l41 = 'se obtiene [[velocidad_media]] ≈ 5 800 m/s, valor compatible con la propagación en corteza continental.'
if old_ap4_l41 in ap:
    ap = ap.replace(old_ap4_l41, new_ap4_l41, 1)
    print('aplicaciones.md: ap4 L41 FIXED')
else:
    print('WARN aplicaciones.md: ap4 L41 not found')

# Section 5: biomechanics L51
old_ap5 = 'Entonces \\( \\Delta v = -0{,}20\\;\\text{m/s} \\) y la aceleración media vale aproximadamente \\( -1{,}7\\;\\text{m/s}^2 \\).'
new_ap5 = 'El [[cambio_velocidad]] es −0,20 m/s y la [[aceleracion_media]] vale aproximadamente −1,7 m/s².'
if old_ap5 in ap:
    ap = ap.replace(old_ap5, new_ap5, 1)
    print('aplicaciones.md: ap5 FIXED')
else:
    print('WARN aplicaciones.md: ap5 not found')

ap = wrap_bare_mags(ap)
write('aplicaciones.md', ap)

# ============================================================
# 6. aplicaciones.en.md
# ============================================================
ape = read('aplicaciones.en.md')

# Section 1
old_ape1 = 'For the whole trip, average velocity is computed as \\( v_{med} = |\\Delta\\vec{r}|/\\Delta t \\) with \\( |\\Delta\\vec{r}| \\approx 9\\,560\\;\\text{km} \\), while average speed uses \\( s/\\Delta t \\) with an actual route length around \\( 10\\,100\\;\\text{km} \\).'
new_ape1 = 'For the whole trip, [[velocidad_media]] is computed by dividing the [[desplazamiento]] (≈ 9 560 km) by the [[intervalo_tiempo]]. [[rapidez_media]] uses the actual [[distancia]] (≈ 10 100 km) divided by the same [[intervalo_tiempo]].'
if old_ape1 in ape:
    ape = ape.replace(old_ape1, new_ape1, 1)
    print('aplicaciones.en.md: ape1 FIXED')
else:
    print('WARN aplicaciones.en.md: ape1 not found')

# Section 2
old_ape2_l15 = 'The test records an initial velocity \\( v_1 = 27.8\\;\\text{m/s} \\) and a final velocity \\( v_2 = 0 \\), together with the elapsed time \\( \\Delta t \\) on dry asphalt with ABS active.'
new_ape2_l15 = 'The test records an initial [[velocidad]] (27.8 m/s) and a final [[velocidad]] (0) on dry asphalt with ABS active, along with the elapsed [[intervalo_tiempo]].'
if old_ape2_l15 in ape:
    ape = ape.replace(old_ape2_l15, new_ape2_l15, 1)
    print('aplicaciones.en.md: ape2 L15 FIXED')
else:
    print('WARN aplicaciones.en.md: ape2 L15 not found')

old_ape2_l17 = 'The **change in velocity** is \\( \\Delta v = v_2 - v_1 = -27.8\\;\\text{m/s} \\), and the resulting \\( a_{med} = \\Delta v/\\Delta t \\) summarizes the global braking capability.'
new_ape2_l17 = 'The **[[cambio_velocidad]]** is −27.8 m/s, and the resulting [[aceleracion_media]] (dividing by [[intervalo_tiempo]]) summarizes the global braking capability.'
if old_ape2_l17 in ape:
    ape = ape.replace(old_ape2_l17, new_ape2_l17, 1)
    print('aplicaciones.en.md: ape2 L17 FIXED')
else:
    print('WARN aplicaciones.en.md: ape2 L17 not found')

# Section 3
old_ape3 = 'the **average speed** is \\( v_{esc,med} = s/\\Delta t \\approx 6.17\\;\\text{m/s} \\), whereas the average velocity is nearly zero'
new_ape3 = 'the **[[rapidez_media]]** is 10 000 m ÷ 1 620 s ≈ 6.17 m/s, whereas the [[velocidad_media]] is nearly zero'
if old_ape3 in ape:
    ape = ape.replace(old_ape3, new_ape3, 1)
    print('aplicaciones.en.md: ape3 FIXED')
else:
    print('WARN aplicaciones.en.md: ape3 not found')

# Section 4
old_ape4_l39 = 'seismologists estimate the **average velocity** of propagation as \\( v_{med} = |\\Delta\\vec{r}|/\\Delta t \\).'
new_ape4_l39 = 'seismologists estimate the **[[velocidad_media]]** of propagation by dividing [[desplazamiento]] by [[intervalo_tiempo]].'
if old_ape4_l39 in ape:
    ape = ape.replace(old_ape4_l39, new_ape4_l39, 1)
    print('aplicaciones.en.md: ape4 L39 FIXED')
else:
    print('WARN aplicaciones.en.md: ape4 L39 not found')

old_ape4_l41 = 'then \\( v_{med} \\approx 5\\,800\\;\\text{m/s} \\), which is physically plausible for continental crust.'
new_ape4_l41 = 'then [[velocidad_media]] ≈ 5 800 m/s, which is physically plausible for continental crust.'
if old_ape4_l41 in ape:
    ape = ape.replace(old_ape4_l41, new_ape4_l41, 1)
    print('aplicaciones.en.md: ape4 L41 FIXED')
else:
    print('WARN aplicaciones.en.md: ape4 L41 not found')

# Section 5
old_ape5 = 'Hence \\( \\Delta v = -0.20\\;\\text{m/s} \\) and the average acceleration is about \\( -1.7\\;\\text{m/s}^2 \\).'
new_ape5 = 'The [[cambio_velocidad]] is −0.20 m/s and the [[aceleracion_media]] is about −1.7 m/s².'
if old_ape5 in ape:
    ape = ape.replace(old_ape5, new_ape5, 1)
    print('aplicaciones.en.md: ape5 FIXED')
else:
    print('WARN aplicaciones.en.md: ape5 not found')

ape = wrap_bare_mags(ape)
write('aplicaciones.en.md', ape)

# ============================================================
# 7. Fix remaining files with bare magnitudes only
# ============================================================
for fn in ['errores.md', 'historia.md', 'modelos.md']:
    content = read(fn)
    fixed = wrap_bare_mags(content)
    if fixed != content:
        write(fn, fixed)
    else:
        print(f'{fn}: no bare mags found')

print('\nScript complete.')
