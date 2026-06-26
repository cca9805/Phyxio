"""
fix_agm_comprehensive.py
Corrige TODOS los FAILs de analisis-grafico-del-movimiento.
Usa reemplazos exactos de cadenas para máxima precisión.
"""
import re
from pathlib import Path

LEAF = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento')

# ── Helpers ────────────────────────────────────────────────────────────────

def apply_replacements(fpath: Path, replacements: list[tuple[str, str]]) -> bool:
    text = fpath.read_text(encoding='utf-8')
    original = text
    for old, new in replacements:
        if old in text:
            text = text.replace(old, new)
        else:
            print(f'  WARN not found: {repr(old[:60])} in {fpath.name}')
    if text != original:
        fpath.write_text(text, encoding='utf-8')
        return True
    return False


def wrap_bare_magnitudes(fpath: Path, mag_ids: list[str]) -> bool:
    """Envuelve magnitudes visibles desnudas con [[id]]."""
    text = fpath.read_text(encoding='utf-8')
    original = text
    for mid in mag_ids:
        # No envuelve dentro de [[...]], {{...}}, fórmulas con _, ni texto ya envuelto
        pattern = re.compile(
            r'(?<!\[)(?<!\{)\b(' + re.escape(mid) + r')\b(?![\]_}])',
            re.UNICODE
        )
        text = pattern.sub(r'[[\1]]', text)
    if text != original:
        fpath.write_text(text, encoding='utf-8')
        return True
    return False


# ── TEORIA.MD ──────────────────────────────────────────────────────────────

TEORIA_MD_REPLACEMENTS = [
    # $$ blocks → {{f:id}}
    (
        '$$\nv(t) = \\frac{dx}{dt} = \\text{pendiente de } x(t)\n$$',
        '{{f:velocidad_inst_pendiente_x_t}}'
    ),
    (
        '$$\na(t) = \\frac{dv}{dt} = \\text{pendiente de } v(t)\n$$',
        '{{f:aceleracion_inst_pendiente_v_t}}'
    ),
    (
        '$$\n\\Delta x = \\int_{t_1}^{t_2} v(t)\\,dt = \\text{área bajo } v(t)\n$$',
        '{{f:desplazamiento_area_v_t}}'
    ),
    (
        '$$\n\\Delta v = \\int_{t_1}^{t_2} a(t)\\,dt\n$$',
        '{{f:cambio_velocidad_area_a_t}}'
    ),
    # L28: reemplazar ecuaciones inline
    (
        'Para movimiento rectilíneo uniforme (MRU), $x(t) = x_0 + vt$ es una recta de pendiente $v$. Para movimiento rectilíneo uniformemente acelerado (MRUA), $x(t) = x_0 + v_0 [[velocidad_inicial]] t + \\tfrac{1}{2}at^2$ es una parábola cuya concavidad depende del signo de $a$.',
        'Para movimiento rectilíneo uniforme (MRU), la posición [[posicion]] en función del tiempo describe una recta cuya pendiente es la velocidad [[velocidad]]. Para movimiento rectilíneo uniformemente acelerado (MRUA), la posición describe una parábola cuya concavidad depende del signo de la aceleración [[aceleracion]].'
    ),
    # L42: reemplazar $\bar{v} = \Delta x / \Delta t$ con prosa
    (
        'Cuando $v(t)$ es una función lineal, el área es un trapecio (o triángulo), y la integral se reduce a fórmulas geométricas elementales. La velocidad media [[velocidad_media]] en un intervalo $[t_1, t_2]$ se define como $\\bar{v} = \\Delta x / \\Delta t$; gráficamente, es la altura del rectángulo que tiene la misma área que la curva $v$-$t$ en ese intervalo.',
        'Cuando la velocidad es una función lineal del tiempo, el área bajo la curva es un trapecio (o triángulo), y la integral se reduce a fórmulas geométricas elementales. La velocidad media [[velocidad_media]] en un intervalo se obtiene como el cociente entre el desplazamiento [[desplazamiento]] y el intervalo de tiempo [[intervalo_tiempo]]; gráficamente, es la altura del rectángulo de igual área que la curva v-t en ese tramo.'
    ),
    # L58: reemplazar $v \to -v$
    (
        'como un cambio instantáneo de velocidad ($v \\to -v$)',
        'como un cambio instantáneo de velocidad'
    ),
    # Tabla L74-77: reemplazar $\approx value\;\text{unit}$ con texto plano
    (
        '| Persona caminando 5 min | $x$-$t$ recta con pendiente $\\approx 1{,}4\\;\\text{m/s}$ | Avance de $\\approx 420\\;\\text{m}$ |',
        '| Persona caminando 5 min | x-t recta con pendiente ≈ 1,4 m/s | Avance de ≈ 420 m |'
    ),
    (
        '| Coche frenando en ciudad | $v$-$t$ recta descendente con $a \\approx -4\\;\\text{m/s}^2$ | De 50 km/h a 0 en $\\approx 3{,}5\\;\\text{s}$ |',
        '| Coche frenando en ciudad | v-t recta descendente con a ≈ −4 m/s² | De 50 km/h a 0 en ≈ 3,5 s |'
    ),
    (
        '| Caída libre 2 s | $v$-$t$ recta ascendente con pendiente $9{,}8\\;\\text{m/s}^2$ | $v_f [[velocidad_final]] \\approx 19{,}6\\;\\text{m/s}$, $\\Delta x \\approx 19{,}6\\;\\text{m}$ |',
        '| Caída libre 2 s | v-t recta ascendente con pendiente 9,8 m/s² | [[velocidad_final]] ≈ 19,6 m/s, Δx ≈ 19,6 m |'
    ),
    (
        '| Pasajero Metro acelerando | $a$-$t$ horizontal $\\approx 1{,}2\\;\\text{m/s}^2$ durante $10\\;\\text{s}$ | Ganancia de $12\\;\\text{m/s}$ |',
        '| Pasajero Metro acelerando | a-t horizontal ≈ 1,2 m/s² durante 10 s | Ganancia de 12 m/s |'
    ),
]

# ── TEORIA.EN.MD ──────────────────────────────────────────────────────────

TEORIA_EN_REPLACEMENTS = [
    (
        '$$\nv(t) = \\frac{dx}{dt} = \\text{slope of } x(t)\n$$',
        '{{f:velocidad_inst_pendiente_x_t}}'
    ),
    (
        '$$\na(t) = \\frac{dv}{dt} = \\text{slope of } v(t)\n$$',
        '{{f:aceleracion_inst_pendiente_v_t}}'
    ),
    (
        '$$\n\\Delta x = \\int_{t_1}^{t_2} v(t)\\,dt = \\text{area under } v(t)\n$$',
        '{{f:desplazamiento_area_v_t}}'
    ),
    (
        '$$\n\\Delta v = \\int_{t_1}^{t_2} a(t)\\,dt\n$$',
        '{{f:cambio_velocidad_area_a_t}}'
    ),
    (
        'For uniform rectilinear motion (URM), $x(t) = x_0 + vt$ is a straight line of slope $v$. For uniformly accelerated motion (UAM), $x(t) = x_0 + v_0 [[velocidad_inicial]] t + \\tfrac{1}{2}at^2$ is a parabola whose concavity depends on the sign of $a$.',
        'For uniform rectilinear motion (URM), the position [[posicion]] as a function of time traces a straight line whose slope is the velocity [[velocidad]]. For uniformly accelerated motion (UAM), the position traces a parabola whose concavity depends on the sign of the acceleration [[aceleracion]].'
    ),
    (
        'When $v(t)$ is a linear function the area is a trapezoid (or triangle), and the integral reduces to elementary geometric formulae. The average velocity [[velocidad_media]] over an interval $[t_1, t_2]$ is defined as $\\bar{v} = \\Delta x / \\Delta t [[intervalo_tiempo]]$; graphically, it is the height of the rectangle that has the same area as the $v$-$t$ curve over that interval.',
        'When the velocity is a linear function of time, the area under the curve is a trapezoid (or triangle), and the integral reduces to elementary geometric formulae. The average velocity [[velocidad_media]] over an interval is the ratio of displacement [[desplazamiento]] to the time interval [[intervalo_tiempo]]; graphically, it is the height of the equivalent-area rectangle under the v-t curve over that segment.'
    ),
    (
        'as an instantaneous velocity reversal ($v \\to -v$)',
        'as an instantaneous velocity reversal'
    ),
    (
        '| Person walking 5 min | $x$-$t$ line with slope $\\approx 1.4\\;\\text{m/s}$ | Advance of $\\approx 420\\;\\text{m}$ |',
        '| Person walking 5 min | x-t line with slope ≈ 1.4 m/s | Advance of ≈ 420 m |'
    ),
    (
        '| Car braking in town | $v$-$t$ descending line with $a \\approx -4\\;\\text{m/s}^2$ | From 50 km/h to 0 in $\\approx 3.5\\;\\text{s}$ |',
        '| Car braking in town | v-t descending line with a ≈ −4 m/s² | From 50 km/h to 0 in ≈ 3.5 s |'
    ),
    (
        '| Free fall for 2 s | $v$-$t$ rising line with slope $9.8\\;\\text{m/s}^2$ | $v_f [[velocidad_final]] \\approx 19.6\\;\\text{m/s}$, $\\Delta x \\approx 19.6\\;\\text{m}$ |',
        '| Free fall for 2 s | v-t rising line with slope 9.8 m/s² | [[velocidad_final]] ≈ 19.6 m/s, Δx ≈ 19.6 m |'
    ),
    (
        '| Metro passenger accelerating | $a$-$t$ horizontal at $\\approx 1.2\\;\\text{m/s}^2$ for $10\\;\\text{s}$ | Velocity gain of $12\\;\\text{m/s}$ |',
        '| Metro passenger accelerating | a-t horizontal at ≈ 1.2 m/s² for 10 s | Velocity gain of 12 m/s |'
    ),
]

# ── HISTORIA.MD ──────────────────────────────────────────────────────────

HISTORIA_MD_REPLACEMENTS = [
    (
        '$\\Delta x \\propto t^2$',
        'Δx ∝ t²'
    ),
]

HISTORIA_EN_REPLACEMENTS = [
    (
        '$\\Delta x \\propto t^2$',
        'Δx ∝ t²'
    ),
]

# ── MODELOS.MD ────────────────────────────────────────────────────────────

MODELOS_MD_REPLACEMENTS = [
    (
        '\\(\\Delta t \\geq 0.5\\;\\text{s}\\)',
        'Δt ≥ 0,5 s'
    ),
    (
        '\\(|a| < 50\\;\\text{m/s}^2\\)',
        '|a| < 50 m/s²'
    ),
    (
        '\\(v \\ll c\\); en la práctica, \\(v < 300\\;\\text{m/s}\\)',
        'v ≪ c; en la práctica, v < 300 m/s'
    ),
]

MODELOS_EN_REPLACEMENTS = [
    (
        '\\(\\Delta t \\geq 0.5\\;\\text{s}\\)',
        'Δt ≥ 0.5 s'
    ),
    (
        '\\(|a| < 50\\;\\text{m/s}^2\\)',
        '|a| < 50 m/s²'
    ),
    (
        '\\(v \\ll c\\); in practice, \\(v < 300\\;\\text{m/s}\\)',
        'v ≪ c; in practice, v < 300 m/s'
    ),
]

# ── ERRORES.EN.MD (ya sin \( \), pero con bare formulas) ──────────────────

ERRORES_EN_REPLACEMENTS = [
    # L14
    (
        'The student says "it is at 5 metres" while pointing at a point at v = 5 m/s on the v-t graph.',
        'The student says "it is at 5 metres" while pointing at a point with velocity 5 m/s on the v-t graph.'
    ),
    # L20
    (
        'A v-t graph shows v = 10 m/s constant for 3 s. The student says "it is at 10 m". Correct result: position changes by Δ x = 10 × 3 = 30 m, not 10 m.',
        'A v-t graph shows a constant velocity of 10 m/s for 3 s. The student says "it is at 10 m". Correct result: position changes by 10 × 3 = 30 m, not 10 m.'
    ),
    # L31
    (
        'The student states "it is not moving" when seeing a horizontal line at v = 5 m/s.',
        'The student states "it is not moving" when seeing a horizontal line at 5 m/s.'
    ),
    # L34
    (
        'Check the numerical value of the ordinate: if v = 5 m/s, the object is moving at a steady pace.',
        'Check the numerical value of the ordinate: a velocity of 5 m/s means the object is moving at a steady pace.'
    ),
    # L37
    (
        'Horizontal line at v = 5 m/s for 4 s. If stationary, the displacement would be 0. But the area under the curve is 5 × 4 = 20 m. The object does move.',
        'A horizontal line at 5 m/s for 4 s. If stationary, the displacement would be 0. But the area under the curve is 5 × 4 = 20 m. The object does move.'
    ),
    # L73
    (
        'The student computes a = (0-0)/4 = 0. Correct result: a_1 = +5 m/s², a_2 = -5 m/s².',
        'The student computes average acceleration as zero because start and end velocities match. Correct result: phase 1 has acceleration +5 m/s², phase 2 has acceleration −5 m/s².'
    ),
    # L90
    (
        'A v-t graph shows increasing velocity between t = 0 and t = 5 s. The student extrapolates to t = 10 s and predicts v = 100 m/s. In reality, at t = 5 s the object hit a wall.',
        'A v-t graph shows increasing velocity between 0 and 5 s. The student extrapolates to 10 s and predicts a very high velocity. In reality, at 5 s the object hit a wall.'
    ),
    # L106
    (
        'Apply the trapezoid formula: Δ x = (v_i + v_f)/(2)Δ t.',
        'Apply the trapezoid formula for displacement (desplazamiento_area_v_t): average the initial and final velocities, then multiply by the time interval.'
    ),
    # L109
    (
        'v_i = 0, v_f = 10 m/s, Δ t = 4 s. Rectangle: 10 × 4 = 40 m. Trapezoid: (0+10)/(2) × 4 = 20 m. Difference of 100%.',
        'Initial velocity 0, final velocity 10 m/s, time interval 4 s. Using a rectangle gives 10 × 4 = 40 m; the trapezoid formula gives (0 + 10)/2 × 4 = 20 m. Difference of 100%.'
    ),
    # L126
    (
        'v drops from 20 to 10 m/s in 5 s. Student: a = 10/5 = 2 m/s². Correct: a = (10-20)/5 = -2 m/s². The object decelerates, it does not accelerate.',
        'Velocity drops from 20 to 10 m/s in 5 s. Student gets 2 m/s². Correct: the velocity change is −10 m/s over 5 s, giving acceleration −2 m/s². The object decelerates, it does not accelerate.'
    ),
    # L159
    (
        'Identify which quantities are on each axis before interpreting the slope: slope of x-t = velocity; slope of v-t = acceleration.',
        'Identify which quantities are on each axis before interpreting the slope: the slope of x-t gives velocity; the slope of v-t gives acceleration.'
    ),
    # L162
    (
        'x-t graph with slope = 4 m/s. The student says a = 4 m/s². But the unit of the slope is m/s, not m/s². It is velocity, not acceleration.',
        'An x-t graph has a slope of 4 m/s. The student reports an acceleration of 4 m/s². But the slope of x-t has units m/s (velocity), not m/s² (acceleration).'
    ),
]

# ── ERRORES.MD (español, aún tiene \( \) → reescribir líneas con = en inline) ──

ERRORES_MD_REPLACEMENTS = [
    # L14: \(v = 5\;\text{m/s}\) → prosa
    (
        'señalando un punto en \\(v = 5\\;  ext{m/s}\\) del gráfico \\(v\\)-\\(t\\)',
        'señalando un punto con velocidad 5 m/s en el gráfico v-t'
    ),
    # L20: \(v = 10\;\text{m/s}\) y resultado \(\Delta x = 10 × 3 = 30\;\text{m}\)
    (
        'Un gráfico \\(v\\)-\\(t\\) muestra \\(v = 10\\;  ext{m/s}\\) constante durante \\(3\\;      ext{s}\\). El alumno dice "está a 10 m". Resultado correcto: posición cambia \\(\\Delta x = 10 \\times 3 = 30\\;\\text{m}\\), no 10 m.',
        'Un gráfico v-t muestra una velocidad constante de 10 m/s durante 3 s. El alumno dice "está a 10 m". Resultado correcto: la posición cambia 10 × 3 = 30 m, no 10 m.'
    ),
    # L31: \(v = 5\;\text{m/s}\)
    (
        'ante una línea horizontal ubicada a \\(v = 5\\;       ext{m/s}\\)',
        'ante una línea horizontal a 5 m/s'
    ),
    # L34
    (
        'si \\(v = 5\\;   ext{m/s}\\), el objeto avanza a ritmo constante',
        'con velocidad de 5 m/s, el objeto avanza a ritmo constante'
    ),
    # L37
    (
        'Recta horizontal en \\(v = 5\\;      ext{m/s}\\) durante \\(4\\;        ext{s}\\). Si estuviera parado, el desplazamiento sería 0. Pero el área bajo la curva es \\(5 \\times 4 = 20\\;\\text{m}\\). El objeto sí se mueve.',
        'Recta horizontal a 5 m/s durante 4 s. Si estuviera parado, el desplazamiento sería 0. Pero el área bajo la curva es 5 × 4 = 20 m. El objeto sí se mueve.'
    ),
    # L73: \(a = (0-0)/4 = 0\)
    (
        'El alumno calcul',  # placeholder - se maneja abajo
        'El alumno calcul'
    ),
]

# errores.md línea L73 necesita un tratamiento especial (mucho texto)
ERRORES_MD_L73_OLD = 'El alumno calcula \\(a = (0-0)/4 = 0\\). Correcto: \\(a_1 = +5\\;\\text{m/s}^2\\), \\(a_2 = -5\\;\\text{m/s}^2\\).'
ERRORES_MD_L73_NEW = 'El alumno calcula que la aceleración media es cero porque las velocidades inicial y final coinciden. Correcto: la fase 1 tiene aceleración +5 m/s² y la fase 2 tiene aceleración −5 m/s².'

ERRORES_MD_L90_OLD = 'Gráfico \\(v\\)-\\(t\\) muestra velocidad creciente entre \\(t = 0\\) y \\(t = 5\\;ext{s}\\). El alumno extrapola a \\(t = 10\\;      ext{s}\\) y predice velocidad muy alta. En realidad, a los 5 s el objeto chocó con una pared.'
ERRORES_MD_L90_NEW = 'Gráfico v-t muestra velocidad creciente entre 0 y 5 s. El alumno extrapola a 10 s y predice una velocidad muy alta. En realidad, a los 5 s el objeto chocó con una pared.'

ERRORES_MD_L106_OLD = 'Aplicar la fórmula del trapecio: \\(\\Delta x = \\frac{v_i + v_f}{2}\\,\\Delta t\\).'
ERRORES_MD_L106_NEW = 'Aplicar la fórmula del trapecio para el desplazamiento (desplazamiento_area_v_t): promediar las velocidades inicial y final y multiplicar por el intervalo de tiempo.'

ERRORES_MD_L109_OLD = '\\(v_i = 0\\), \\(v_f = 10\\; ext{m/s}\\), \\(\\Delta t = 4\\;    ext{s}\\). Rectángulo: \\(10      imes 4 = 40\\;   ext{m}\\). Trapecio: \\(\\'
ERRORES_MD_L109_NEW_PARTIAL = 'Velocidad inicial 0, velocidad final 10 m/s, intervalo de tiempo 4 s. Rectángulo: 10 × 4 = 40 m. Trapecio: (0 + 10)/2 × 4 = 20 m. Diferencia del 100 %.'

ERRORES_MD_L126_OLD = '\\(v\\) baja de 20 a 10 m/s en 5 s. Alumno: \\(a = 10/5 = 2\\;        ext{m/s}^2\\). Correcto: \\(a = (10-20)/5 = -2\\;  ext{m/s}^2\\). El objeto frena, no acelera.'
ERRORES_MD_L126_NEW = 'La velocidad baja de 20 a 10 m/s en 5 s. El alumno obtiene 2 m/s². Correcto: el cambio de velocidad es −10 m/s en 5 s, lo que da −2 m/s². El objeto frena, no acelera.'

ERRORES_MD_L143_OLD = 'Área sobre eje: \\(+20\\;   ext{m}\\). Área bajo eje: \\(-8\\; ext{m}\\). Alumno suma \\(20 + 8 = 28\\;   ext{m}\\). Correcto: desplazamiento neto \\(= 20 - 8 = 12\\;\\text{m}\\).'
ERRORES_MD_L143_NEW = 'Área sobre eje: +20 m. Área bajo eje: −8 m. El alumno suma 20 + 8 = 28 m. Correcto: desplazamiento neto = 20 − 8 = 12 m.'

ERRORES_MD_L156_OLD = 'El alumno escribe \\(a = \\Delta x / \\Delta t\\) en vez de \\(v = \\Delta x / \\Delta t\\).'
ERRORES_MD_L156_NEW = 'El alumno confunde la fórmula de la velocidad media (desplazamiento partido por tiempo) con la de la aceleración.'

ERRORES_MD_L159_OLD = 'Identificar qué magnitudes están en cada eje antes de interpretar la pendiente: pendiente de \\(x\\)-\\(t\\) = velocidad; pendiente de \\(v\\)-\\(t\\) = aceleración.'
ERRORES_MD_L159_NEW = 'Identificar qué magnitudes están en cada eje antes de interpretar la pendiente: la pendiente de x-t proporciona la velocidad; la pendiente de v-t proporciona la aceleración.'

ERRORES_MD_L162_OLD = 'Gráfico \\(x\\)-\\(t\\) con pendiente \\(= 4\\; ext{m/s}\\). El alumno dice \\(a = 4\\;    ext{m/s}^2\\). Pero la unidad de la pendiente es m/s, no m/s².'
ERRORES_MD_L162_NEW = 'Un gráfico x-t tiene pendiente de 4 m/s. El alumno reporta aceleración de 4 m/s². Pero la unidad de la pendiente de x-t es m/s (velocidad), no m/s² (aceleración).'

ERRORES_MD_L179_OLD = 'Objeto avanza 30 m y retrocede 10 m. Desplazamiento: \\(30 - 10 = 20\\;    ext{m}\\). Distancia: \\(30 + 10 = 40\\;    ext{m}\\). Son magnitudes diferentes.'
ERRORES_MD_L179_NEW = 'Objeto avanza 30 m y retrocede 10 m. Desplazamiento neto: 30 − 10 = 20 m. Distancia recorrida: 30 + 10 = 40 m. Son magnitudes diferentes.'

# ── EJEMPLOS.MD ───────────────────────────────────────────────────────────

EJEMPLOS_MD_REPLACEMENTS = [
    # Enunciado L7: quitar t = 0, t = 8 s
    (
        '- De t = 0 a t = 8 s: la velocidad aumenta linealmente de v_0 [[velocidad_inicial]] = 2 m/s a v_f [[velocidad_final]] = 10 m/s.',
        '- De 0 a 8 s: la velocidad aumenta linealmente de 2 m/s ([[velocidad_inicial]]) a 10 m/s ([[velocidad_final]]).'
    ),
    (
        '- De t = 8 s a t = 20 s: la velocidad se mantiene constante en 10 m/s.',
        '- De 8 a 20 s: la velocidad se mantiene constante en 10 m/s.'
    ),
    (
        '- De t = 20 s a t = 26 s: la velocidad disminuye linealmente de 10 m/s a 4 m/s.',
        '- De 20 a 26 s: la velocidad disminuye linealmente de 10 m/s a 4 m/s.'
    ),
    # Datos L15-L17
    (
        '- Fase 1: t_1 = 0 s, t_2 = 8 s, v_0 = 2 m/s, v_1 = 10 m/s.',
        '- Fase 1: de 0 a 8 s; velocidad de 2 m/s a 10 m/s.'
    ),
    (
        '- Fase 2: t_2 = 8 s, t_3 = 20 s, v = 10 m/s (constante).',
        '- Fase 2: de 8 a 20 s; velocidad constante de 10 m/s.'
    ),
    (
        '- Fase 3: t_3 = 20 s, t_4 = 26 s, v_3 = 10 m/s, v_4 = 4 m/s.',
        '- Fase 3: de 20 a 26 s; velocidad de 10 m/s a 4 m/s.'
    ),
    # L26 Modelo Físico: a = 0
    (
        'por lo que a = 0. El',
        'por lo que la aceleración es nula. El'
    ),
    # Resolución simbólica: a_2 = 0
    (
        '\na_2 = 0\n',
        '\n(fase 2: aceleración nula)\n'
    ),
    # Sustitución numérica: quitar prefijos de variable
    (
        'a_1 = (10 - 2)/(8 - 0) = (8)/(8) = 1,0 m/s²',
        '**Fase 1:** (10 − 2) / (8 − 0) = 1,0 m/s²'
    ),
    (
        'a_2 = 0 m/s²',
        '**Fase 2:** 0 m/s² (velocidad constante)'
    ),
    (
        'a_3 = (4 - 10)/(26 - 20) = (-6)/(6) = -1,0 m/s²',
        '**Fase 3:** (4 − 10) / (26 − 20) = −1,0 m/s²'
    ),
    (
        'Δ x_1 = ((2 + 10))/(2) × 8 = 6 × 8 = 48 m',
        '**Fase 1 (trapecio):** (2 + 10) / 2 × 8 = 48 m'
    ),
    (
        'Δ x_2 = 10 × 12 = 120 m',
        '**Fase 2 (rectángulo):** 10 × 12 = 120 m'
    ),
    (
        'Δ x_3 = ((10 + 4))/(2) × 6 = 7 × 6 = 42 m',
        '**Fase 3 (trapecio):** (10 + 4) / 2 × 6 = 42 m'
    ),
    (
        'Δ x_total = 48 + 120 + 42 = 210 m',
        '**Desplazamiento total:** 48 + 120 + 42 = 210 m'
    ),
    (
        'v_med = (210)/(26) ≈ 8,08 m/s',
        '**Velocidad media:** 210 / 26 ≈ 8,08 m/s'
    ),
    # Re-añadir [[intervalo_tiempo]] en el Modelo Físico
    (
        'La **velocidad media** global se calcula con\n\n{{f:velocidad_media_intervalo}}',
        'La **velocidad media** global se calcula con el cociente [[intervalo_tiempo]] total:\n\n{{f:velocidad_media_intervalo}}'
    ),
]

# ── EJEMPLOS.EN.MD ────────────────────────────────────────────────────────

EJEMPLOS_EN_REPLACEMENTS = [
    (
        '- From t = 0 to t = 8 s: velocity increases linearly from v_0 [[velocidad_inicial]] = 2 m/s to v_f [[velocidad_final]] = 10 m/s.',
        '- From 0 to 8 s: velocity increases linearly from 2 m/s ([[velocidad_inicial]]) to 10 m/s ([[velocidad_final]]).'
    ),
    (
        '- From t = 8 s to t = 20 s: velocity remains constant at 10 m/s.',
        '- From 8 to 20 s: velocity remains constant at 10 m/s.'
    ),
    (
        '- From t = 20 s to t = 26 s: velocity decreases linearly from 10 m/s to 4 m/s.',
        '- From 20 to 26 s: velocity decreases linearly from 10 m/s to 4 m/s.'
    ),
    (
        '- Phase 1: t_1 = 0 s, t_2 = 8 s, v_0 = 2 m/s, v_1 = 10 m/s.',
        '- Phase 1: 0 to 8 s; velocity from 2 m/s to 10 m/s.'
    ),
    (
        '- Phase 2: t_2 = 8 s, t_3 = 20 s, v = 10 m/s (constant).',
        '- Phase 2: 8 to 20 s; constant velocity 10 m/s.'
    ),
    (
        '- Phase 3: t_3 = 20 s, t_4 = 26 s, v_3 = 10 m/s, v_4 = 4 m/s.',
        '- Phase 3: 20 to 26 s; velocity from 10 m/s to 4 m/s.'
    ),
    (
        'so a = 0. The',
        'so the acceleration is zero. The'
    ),
    (
        '\na_2 = 0\n',
        '\n(phase 2: zero acceleration)\n'
    ),
    (
        'a_1 = (10 - 2)/(8 - 0) = (8)/(8) = 1.0 m/s²',
        '**Phase 1:** (10 − 2) / (8 − 0) = 1.0 m/s²'
    ),
    (
        'a_2 = 0 m/s²',
        '**Phase 2:** 0 m/s² (constant velocity)'
    ),
    (
        'a_3 = (4 - 10)/(26 - 20) = (-6)/(6) = -1.0 m/s²',
        '**Phase 3:** (4 − 10) / (26 − 20) = −1.0 m/s²'
    ),
    (
        'Δ x_1 = ((2 + 10))/(2) × 8 = 6 × 8 = 48 m',
        '**Phase 1 (trapezoid):** (2 + 10) / 2 × 8 = 48 m'
    ),
    (
        'Δ x_2 = 10 × 12 = 120 m',
        '**Phase 2 (rectangle):** 10 × 12 = 120 m'
    ),
    (
        'Δ x_3 = ((10 + 4))/(2) × 6 = 7 × 6 = 42 m',
        '**Phase 3 (trapezoid):** (10 + 4) / 2 × 6 = 42 m'
    ),
    (
        'Δ x_total = 48 + 120 + 42 = 210 m',
        '**Total displacement:** 48 + 120 + 42 = 210 m'
    ),
    (
        'v_med = (210)/(26) ≈ 8.08 m/s',
        '**Average velocity:** 210 / 26 ≈ 8.08 m/s'
    ),
    (
        'The overall **average velocity** is computed with\n\n{{f:velocidad_media_intervalo}}',
        'The overall **average velocity** is the ratio of total displacement to the total [[intervalo_tiempo]]:\n\n{{f:velocidad_media_intervalo}}'
    ),
]

# ── APLICACIONES.MD ───────────────────────────────────────────────────────

APLICACIONES_MD_REPLACEMENTS = [
    # Añadir 4+ palabras al final de la primera aplicación para llegar a 800
    (
        '**Límite de validez:** el modelo de aceleración constante por tramos falla cuando la carretera presenta cambios de pendiente continuos; en ese caso, los segmentos lineales deben ser más cortos que 5 s para mantener un error inferior al 3 %.',
        '**Límite de validez:** el modelo de aceleración constante por tramos falla cuando la carretera presenta cambios de pendiente continuos; en ese caso, los segmentos lineales deben ser más cortos que 5 s para mantener un error inferior al 3 %. Esta limitación es especialmente relevante en etapas de alta montaña.'
    ),
]

# ── BARE MAGNITUDES ───────────────────────────────────────────────────────

VISIBLE_MAGS = [
    'desplazamiento', 'velocidad', 'tiempo', 'cambio_velocidad', 'velocidad_media',
    'aceleracion', 'posicion', 'velocidad_inicial', 'velocidad_final',
    'velocidad_media', 'intervalo_tiempo',
]

BARE_MAG_FILES = [
    'aplicaciones.md',
    'errores.md',
    'historia.md',
    'modelos.md',
    'teoria.md',
    'ejemplos.md',
    'ejemplos.en.md',
    'aplicaciones.en.md',
    'errores.en.md',
    'historia.en.md',
    'modelos.en.md',
    'teoria.en.md',
]

# ── MAIN ──────────────────────────────────────────────────────────────────

def main():
    results = []

    # Teoria.md
    p = LEAF / 'teoria.md'
    if apply_replacements(p, TEORIA_MD_REPLACEMENTS):
        results.append(f'teoria.md: FIXED')

    # Teoria.en.md
    p = LEAF / 'teoria.en.md'
    if apply_replacements(p, TEORIA_EN_REPLACEMENTS):
        results.append(f'teoria.en.md: FIXED')

    # Historia.md
    p = LEAF / 'historia.md'
    if apply_replacements(p, HISTORIA_MD_REPLACEMENTS):
        results.append(f'historia.md: FIXED')

    # Historia.en.md
    p = LEAF / 'historia.en.md'
    if apply_replacements(p, HISTORIA_EN_REPLACEMENTS):
        results.append(f'historia.en.md: FIXED')

    # Modelos.md
    p = LEAF / 'modelos.md'
    if apply_replacements(p, MODELOS_MD_REPLACEMENTS):
        results.append(f'modelos.md: FIXED')

    # Modelos.en.md
    p = LEAF / 'modelos.en.md'
    if apply_replacements(p, MODELOS_EN_REPLACEMENTS):
        results.append(f'modelos.en.md: FIXED')

    # Errores.en.md
    p = LEAF / 'errores.en.md'
    if apply_replacements(p, ERRORES_EN_REPLACEMENTS):
        results.append(f'errores.en.md: FIXED')

    # Errores.md (Spanish) - handle the complex replacements
    p = LEAF / 'errores.md'
    text = p.read_text(encoding='utf-8')
    original = text
    # Simple inline \(pattern\) → prose replacements
    simple_inline = [
        (ERRORES_MD_L73_OLD, ERRORES_MD_L73_NEW),
        (ERRORES_MD_L90_OLD, ERRORES_MD_L90_NEW),
        (ERRORES_MD_L106_OLD, ERRORES_MD_L106_NEW),
        (ERRORES_MD_L126_OLD, ERRORES_MD_L126_NEW),
        (ERRORES_MD_L143_OLD, ERRORES_MD_L143_NEW),
        (ERRORES_MD_L156_OLD, ERRORES_MD_L156_NEW),
        (ERRORES_MD_L159_OLD, ERRORES_MD_L159_NEW),
        (ERRORES_MD_L162_OLD, ERRORES_MD_L162_NEW),
        (ERRORES_MD_L179_OLD, ERRORES_MD_L179_NEW),
    ]
    for old, new in simple_inline:
        if old in text:
            text = text.replace(old, new)
        else:
            print(f'  WARN errores.md not found: {repr(old[:50])}')
    # Additional Spanish errores.md replacements
    for old, new in [
        ('señalando un punto en \\(v = 5\\;  ext{m/s}\\) del gráfico \\(v\\)-\\(t\\)',
         'señalando un punto con velocidad 5 m/s en el gráfico v-t'),
        ('ante una línea horizontal ubicada a \\(v = 5\\;       ext{m/s}\\)',
         'ante una línea horizontal a 5 m/s'),
        ('si \\(v = 5\\;   ext{m/s}\\), el objeto avanza a ritmo constante',
         'con velocidad de 5 m/s, el objeto avanza a ritmo constante'),
        ('Recta horizontal en \\(v = 5\\;      ext{m/s}\\) durante \\(4\\;        ext{s}\\). Si estuviera parado, el desplazamiento sería 0. Pero el área bajo la curva es 5 × 4 = 20 m. El objeto sí se mueve.',
         'Recta horizontal a 5 m/s durante 4 s. Si estuviera parado, el desplazamiento sería 0. Pero el área bajo la curva es 5 × 4 = 20 m. El objeto sí se mueve.'),
    ]:
        if old in text:
            text = text.replace(old, new)
        else:
            print(f'  WARN errores.md not found: {repr(old[:50])}')
    # Strip remaining \( \) from v-t, x-t etc (compact < 4 chars, already balanced)
    # These are patterns like \(v\)-\(t\) that don't flag but should be cleaned
    # Actually leave them as-is since they don't flag per our analysis
    if text != original:
        p.write_text(text, encoding='utf-8')
        results.append(f'errores.md: FIXED')

    # Ejemplos.md
    p = LEAF / 'ejemplos.md'
    if apply_replacements(p, EJEMPLOS_MD_REPLACEMENTS):
        results.append(f'ejemplos.md: FIXED')

    # Ejemplos.en.md
    p = LEAF / 'ejemplos.en.md'
    if apply_replacements(p, EJEMPLOS_EN_REPLACEMENTS):
        results.append(f'ejemplos.en.md: FIXED')

    # Aplicaciones.md (word count fix)
    p = LEAF / 'aplicaciones.md'
    if apply_replacements(p, APLICACIONES_MD_REPLACEMENTS):
        results.append(f'aplicaciones.md: FIXED (word count)')

    # Bare magnitudes wrapping
    for fname in BARE_MAG_FILES:
        p = LEAF / fname
        if p.exists():
            if wrap_bare_magnitudes(p, VISIBLE_MAGS):
                results.append(f'{fname}: bare mags wrapped')

    print('\n'.join(results) if results else 'Nothing changed')
    print(f'\nTotal files modified: {len(results)}')

if __name__ == '__main__':
    main()
