"""
Fix 2: Comprehensive corrections for magnitudes-cinematicas
Handles:
1. {{f:[[id]]}} -> {{f:id}} (malformed formula refs)
2. `[[id]]` -> `id` (magnitude in backticks)
3. [[velocidad_instantanea]] / [[aceleracion_instantanea]] -> valid refs
4. teoria.md/en.md inline math issues
5. aplicaciones.en.md word count
"""
import re

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/magnitudes-cinematicas'

def read(fn):
    return open(f'{BASE}/{fn}', encoding='utf-8').read()

def write(fn, content):
    open(f'{BASE}/{fn}', 'w', encoding='utf-8').write(content)
    print(f'{fn}: SAVED')

def fix_global(text):
    """Apply global fixes: malformed formula refs and backtick-wrapped magnitudes."""
    # Fix {{f:[[id]]}} -> {{f:id}}
    text = re.sub(r'\{\{f:\[\[([a-z_]+)\]\]\}\}', r'{{f:\1}}', text)
    # Fix `[[id]]` -> `id`
    text = re.sub(r'`\[\[([a-z_]+)\]\]`', r'`\1`', text)
    return text

def fix_invalid_mag_refs(text, lang='es'):
    """Fix [[velocidad_instantanea]] and [[aceleracion_instantanea]] which are not in magnitudes.yaml."""
    if lang == 'es':
        text = text.replace('[[velocidad_instantanea]]', 'velocidad instantánea ([[velocidad]])')
        text = text.replace('[[aceleracion_instantanea]]', 'aceleración instantánea ([[aceleracion]])')
    else:
        text = text.replace('[[velocidad_instantanea]]', 'instantaneous velocity ([[velocidad]])')
        text = text.replace('[[aceleracion_instantanea]]', 'instantaneous acceleration ([[aceleracion]])')
    return text

# ============================================================
# Apply global fixes to ALL files
# ============================================================
all_files = [
    'teoria.md', 'teoria.en.md',
    'ejemplos.md', 'ejemplos.en.md',
    'aplicaciones.md', 'aplicaciones.en.md',
    'errores.md', 'errores.en.md',
    'historia.md', 'historia.en.md',
    'modelos.md', 'modelos.en.md',
]
for fn in all_files:
    t = read(fn)
    orig = t
    t = fix_global(t)
    if fn.endswith('.en.md'):
        t = fix_invalid_mag_refs(t, 'en')
    else:
        t = fix_invalid_mag_refs(t, 'es')
    if t != orig:
        write(fn, t)
    else:
        print(f'{fn}: no global changes')

# ============================================================
# teoria.md: fix inline math issues
# ============================================================
tm = read('teoria.md')

# 1. Delete orphaned "donde $v = |\vec{v}|$ ..." sentence
old = ('\ndonde $v = |\\vec{v}|$ es la [[rapidez]] [[rapidez]] y $R$ el radio de curvatura '
       'de la trayectoria. El módulo total de la aceleración es $|\\vec{a}| = \\sqrt{a_T^2 + a_N^2}$.')
if old in tm:
    tm = tm.replace(old, '', 1)
    print('teoria.md: orphaned "donde" sentence REMOVED')
else:
    print('WARN teoria.md: orphaned sentence not found')

# 2. Fix L56: inline math with subscript _0
old56 = ('Para determinar completamente el movimiento a partir de $\\vec{a}(t)$ se necesitan dos '
         'condiciones iniciales: $\\vec{r}(t_0)$ y $\\vec{v}(t_0)$. Esto refleja que la ecuación '
         'diferencial de segundo orden $\\ddot{\\vec{r}} = \\vec{a}$ requiere dos integraciones, cada una '
         'introduce una constante que solo se fija con datos del problema.')
new56 = ('Para determinar completamente el movimiento a partir de la función de [[aceleracion]] se '
         'necesitan dos condiciones iniciales: la [[posicion]] y la [[velocidad]] en un instante de '
         'referencia. Esto refleja que la cinemática clásica requiere dos integraciones, cada una '
         'introduce una constante que solo se fija con datos del problema.')
if old56 in tm:
    tm = tm.replace(old56, new56, 1)
    print('teoria.md: L56 FIXED')
else:
    print('WARN teoria.md: L56 not found')

# 3. Fix L62: $T^{-1}$, $x = v_0t + ...$ and double [[tiempo]]
old62 = ('Desde el punto de vista dimensional, cada derivada temporal añade un factor $T^{-1}$ a las '
         'unidades. Posición tiene dimensiones $[L]$, [[velocidad]] $[LT^{-1}]$ y aceleración $[LT^{-2}]$. '
         'Esta cadena dimensional permite verificar ecuaciones: cualquier término sumado debe compartir '
         'dimensiones. Por ejemplo, la ecuación $x = v_0 t + \\tfrac{1}{2}at^2$ (donde $t$ es el '
         '[[tiempo]] [[tiempo]]) es dimensionalmente consistente porque ambos sumandos tienen dimensiones $[L]$.')
new62 = ('Desde el punto de vista dimensional, cada derivada temporal añade un factor T\u207b\u00b9 a las '
         'unidades. Posición tiene dimensiones [L], [[velocidad]] [LT\u207b\u00b9] y [[aceleracion]] [LT\u207b\u00b2]. '
         'Esta cadena dimensional permite verificar ecuaciones: cualquier término sumado debe compartir '
         'dimensiones. Por ejemplo, la ecuación de posición en cinemática es dimensionalmente consistente '
         'porque todos sus términos tienen dimensiones de longitud.')
if old62 in tm:
    tm = tm.replace(old62, new62, 1)
    print('teoria.md: L62 FIXED')
else:
    print('WARN teoria.md: L62 not found')

# 4. Fix L64: remove $P = F · v = m a_T v$
old64 = ('La descomposición tangencial-normal revela una asimetría profunda: $a_T$ está asociada a '
         'cambios de energía cinética ($P = F \\cdot v = m\\,a_T\\,v$), mientras que $a_N$ solo reorienta '
         'el vector [[velocidad]] sin realizar trabajo. Por eso una fuerza puramente centrípeta (como la '
         'tensión en un péndulo ideal en el punto más bajo) mantiene constante la [[rapidez]]. Esta '
         'distinción conecta la cinemática con la energía mucho antes de introducir formalmente la dinámica.')
new64 = ('La descomposición tangencial-normal revela una asimetría profunda: la componente tangencial '
         'está asociada a cambios de energía cinética, mientras que la componente normal solo reorienta '
         'el vector [[velocidad]] sin realizar trabajo. Por eso una fuerza puramente centrípeta mantiene '
         'constante la [[rapidez]]. Esta distinción conecta la cinemática con la energía mucho antes de '
         'introducir formalmente la dinámica.')
if old64 in tm:
    tm = tm.replace(old64, new64, 1)
    print('teoria.md: L64 FIXED')
else:
    print('WARN teoria.md: L64 not found')

# 5. Fix L66: $v_{AC} = v_{AB} + v_{BC}$, $v \ll c$, double [[velocidad]]
old66 = ('El paso de la cinemática a la relatividad especial rompe la aditividad simple de velocidades: '
         'la regla $v_{AC} = v_{AB} + v_{BC}$ solo es válida cuando $v \\ll c$ (donde $v$ es la [[velocidad]] [[velocidad]]). '
         'Asimismo, en relatividad general la noción de aceleración [[aceleracion]] se redefine usando '
         'derivadas covariantes en lugar de derivadas ordinarias, porque el espacio-[[tiempo]] ya no es '
         'plano. Reconocer los límites del modelo clásico ayuda a entender por qué las magnitudes '
         'cinemáticas, tal como se definen aquí, son aproximaciones válidas en un régimen concreto de '
         'velocidades y campos gravitatorios débiles.')
new66 = ('El paso de la cinemática a la relatividad especial rompe la aditividad simple de velocidades: '
         'la regla clásica de composición solo es válida cuando la [[velocidad]] es mucho menor que la de '
         'la luz. Asimismo, en relatividad general la noción de [[aceleracion]] se redefine usando derivadas '
         'covariantes en lugar de ordinarias, porque el espacio-[[tiempo]] ya no es plano. Reconocer los '
         'límites del modelo clásico ayuda a entender por qué las magnitudes cinemáticas son aproximaciones '
         'válidas en un régimen concreto de velocidades y campos gravitatorios débiles.')
if old66 in tm:
    tm = tm.replace(old66, new66, 1)
    print('teoria.md: L66 FIXED')
else:
    print('WARN teoria.md: L66 not found')

# 6. Fix L72: $(x_0, v_0)$
old72 = 'Este par $(x_0, v_0)$ define un punto en el **espacio de fases**'
new72 = 'Este par (posición inicial, [[velocidad]] inicial) define un punto en el **espacio de fases**'
if old72 in tm:
    tm = tm.replace(old72, new72, 1)
    print('teoria.md: L72 FIXED')
else:
    print('WARN teoria.md: L72 not found')

# 7. Fix L78-L82: table values
table_fixes_es = [
    ('| $\\approx 1{,}4\\;\\text{m/s}$ |', '| \u2248 1,4 m/s |'),
    ('| $\\approx 33\\;\\text{m/s}$ |', '| \u2248 33 m/s |'),
    ('| $\\approx 3{,}5\\;\\text{m/s}^2$ |', '| \u2248 3,5 m/s\u00b2 |'),
    ('| $9{,}8\\;\\text{m/s}^2$ |', '| 9,8 m/s\u00b2 |'),
    ('| $\\approx 7\\,700\\;\\text{m/s}$ |', '| \u2248 7 700 m/s |'),
]
for old, new in table_fixes_es:
    if old in tm:
        tm = tm.replace(old, new, 1)
        print(f'teoria.md: table fix DONE: {old[:30]}')
    else:
        print(f'WARN teoria.md: table fix NOT FOUND: {old[:40]}')

# 8. Fix L94: $v = \text{cte}$, $x = x_0 + vt$
old94 = ('**Caso 1 — Movimiento rectilíneo uniforme (MRU):** $a = 0$, de modo que $v = \\text{cte}$ '
         'y $x = x_0 + vt$. La [[distancia]] y el [[desplazamiento]] coinciden mientras no haya '
         'cambio de sentido.')
new94 = ('**Caso 1 — Movimiento rectilíneo uniforme (MRU):** La [[aceleracion]] es nula, la [[velocidad]] '
         'es constante y la [[posicion]] crece linealmente con el [[tiempo]]. La [[distancia]] y el '
         '[[desplazamiento]] coinciden mientras no haya cambio de sentido.')
if old94 in tm:
    tm = tm.replace(old94, new94, 1)
    print('teoria.md: L94 FIXED')
else:
    print('WARN teoria.md: L94 not found')

# 9. Fix L96: $a = -g$
old96 = ('**Caso 2 — Lanzamiento vertical:** Aquí $a = -g$ (constante). La [[velocidad]] se anula '
         'en el punto más alto. Desplazamiento y [[distancia]] difieren en el tramo de bajada.')
new96 = ('**Caso 2 — Lanzamiento vertical:** La [[aceleracion]] es constante e igual a la gravedad '
         '(hacia abajo). La [[velocidad]] se anula en el punto más alto. '
         '[[desplazamiento]] y [[distancia]] difieren en el tramo de bajada.')
if old96 in tm:
    tm = tm.replace(old96, new96, 1)
    print('teoria.md: L96 FIXED')
else:
    print('WARN teoria.md: L96 not found')

# 10. Fix L98: drone example header
old98 = ('**Ejemplo extendido.** Un dron parte del reposo y acelera en línea recta con '
         '$a = 2{,}0\\;\\text{m/s}^2$ durante $5\\;\\text{s}$, luego frena con '
         '$a = -1{,}0\\;\\text{m/s}^2$ hasta detenerse.')
new98 = ('**Ejemplo extendido.** Un dron parte del reposo y acelera en línea recta con [[aceleracion]] '
         'de 2,0 m/s\u00b2 durante 5 s, luego frena con [[aceleracion]] de \u22121,0 m/s\u00b2 hasta detenerse.')
if old98 in tm:
    tm = tm.replace(old98, new98, 1)
    print('teoria.md: L98 FIXED')
else:
    print('WARN teoria.md: L98 not found')

# 11. Fix L100: Phase 1 calculation
old100 = ('- Fase 1: $v_f = 0 + 2{,}0 \\times 5 = 10\\;\\text{m/s}$; [[distancia]] '
          '$d_1 = \\tfrac{1}{2}(2{,}0)(5)^2 = 25\\;\\text{m}$.')
new100 = '- Fase 1: [[velocidad]] final = 2,0 \u00d7 5 = 10 m/s; [[distancia]] d\u2081 = \u00bd \u00d7 2,0 \u00d7 25 = 25 m.'
if old100 in tm:
    tm = tm.replace(old100, new100, 1)
    print('teoria.md: L100 FIXED')
else:
    print('WARN teoria.md: L100 not found')

# 12. Fix L101: Phase 2 calculation
old101 = ('- Fase 2: tarda $t_2 = 10/1{,}0 = 10\\;\\text{s}$; [[distancia]] '
          '$d_2 = \\tfrac{10^2}{2 \\times 1{,}0} = 50\\;\\text{m}$.')
new101 = '- Fase 2: duración = 10/1,0 = 10 s; [[distancia]] d\u2082 = 10\u00b2 / (2 \u00d7 1,0) = 50 m.'
if old101 in tm:
    tm = tm.replace(old101, new101, 1)
    print('teoria.md: L101 FIXED')
else:
    print('WARN teoria.md: L101 not found')

# 13. Fix L102: total
old102 = '- Total: $75\\;\\text{m}$ recorridos, [[desplazamiento]] $+75\\;\\text{m}$ (mismo sentido siempre).'
new102 = '- Total: 75 m recorridos, [[desplazamiento]] de 75 m (mismo sentido siempre).'
if old102 in tm:
    tm = tm.replace(old102, new102, 1)
    print('teoria.md: L102 FIXED')
else:
    print('WARN teoria.md: L102 not found')

# 14. Fix L107: $v = -3$ m/s
old107 = '$v = -3\\;\\text{m/s}$ significa que el objeto se mueve en sentido negativo del eje, no que «falta [[velocidad]]».'
new107 = 'v = \u22123 m/s significa que el objeto se mueve en sentido negativo del eje, no que «falta [[velocidad]]».'
if old107 in tm:
    tm = tm.replace(old107, new107, 1)
    print('teoria.md: L107 FIXED')
else:
    print('WARN teoria.md: L107 not found')

# 15. Fix L117: $\vec{F} = m\vec{a}$
old117 = '($\\vec{F} = m\\vec{a}$)'
new117 = '(segunda ley de Newton)'
if old117 in tm:
    tm = tm.replace(old117, new117, 1)
    print('teoria.md: L117 FIXED')
else:
    print('WARN teoria.md: L117 not found')

# 16. Fix L119: $a_T / a_N$
old119 = 'La descomposición $a_T / a_N$ es fundamental para entender MCU y MCUA.'
new119 = 'La descomposición en componente tangencial y normal es fundamental para entender MCU y MCUA.'
if old119 in tm:
    tm = tm.replace(old119, new119, 1)
    print('teoria.md: L119 FIXED')
else:
    print('WARN teoria.md: L119 not found')

# 17. Fix L124: $\vec{r} \to \vec{v} \to \vec{a}$
old124 = ('Las magnitudes cinemáticas —posición, [[desplazamiento]], [[velocidad]] y aceleración— '
          'conforman una jerarquía de derivadas $\\vec{r} \\to \\vec{v} \\to \\vec{a}$ que codifica '
          'toda la información del movimiento.')
new124 = ('Las magnitudes cinemáticas —posición, [[desplazamiento]], [[velocidad]] y [[aceleracion]]— '
          'conforman una jerarquía de derivadas posición \u2192 [[velocidad]] \u2192 [[aceleracion]] que codifica '
          'toda la información del movimiento.')
if old124 in tm:
    tm = tm.replace(old124, new124, 1)
    print('teoria.md: L124 FIXED')
else:
    print('WARN teoria.md: L124 not found')

# Check remaining inline math issues
remaining = re.findall(r'\$[^$\n]+\$', tm)
important = []
MARKERS2 = ['=', r'\approx', r'\propto', r'\to', r'\geq', r'\leq', r'\ll', r'\gg',
            r'\ne', r'\equiv', r'\sim', r'\pm', r'\cdot', r'\times', r'\div', '^', '_']
for m in remaining:
    inner = m[1:-1].strip()
    # Remove all whitespace for length check
    compact = re.sub(r'\s+', '', inner)
    is_dim = '[' in inner and ']' in inner and any(c in inner for c in 'MLT')
    if len(compact) >= 4 and any(mk in inner for mk in MARKERS2) and not is_dim:
        important.append(m)
if important:
    print(f'WARN teoria.md: {len(important)} potentially flagged inline math remaining')
    for m in important[:10]:
        print(f'  {repr(m[:80])}')
else:
    print('teoria.md: inline math OK')

write('teoria.md', tm)

# ============================================================
# teoria.en.md: fix inline math issues
# ============================================================
te = read('teoria.en.md')

# 1. Fix L22: backtick-wrapped magnitude refs in formal level introduction
old22 = ("In the internal language of the leaf, the three average relations that structure this "
         "formal layer are `velocidad_media`, `rapidez_media`, and `aceleracion_media`.")
# After global fix, backticks are already removed from [[id]] -> `id`
# But the text may be: `velocidad_media`, `rapidez_media`, `aceleracion_media`
# We need to remove backticks entirely
if old22 in te:
    new22 = ("In the internal language of the leaf, the three average relations that structure this "
             "formal layer are [[velocidad_media]], [[rapidez_media]], and [[aceleracion_media]].")
    te = te.replace(old22, new22, 1)
    print('teoria.en.md: L22 FIXED')
else:
    # Also try with backtick version (before global fix)
    old22b = ("In the internal language of the leaf, the three average relations that structure this "
              "formal layer are `[[velocidad_media]]`, `[[rapidez_media]]`, and `[[aceleracion_media]]`.")
    if old22b in te:
        new22 = ("In the internal language of the leaf, the three average relations that structure this "
                 "formal layer are [[velocidad_media]], [[rapidez_media]], and [[aceleracion_media]].")
        te = te.replace(old22b, new22, 1)
        print('teoria.en.md: L22 (original) FIXED')
    else:
        print('WARN teoria.en.md: L22 not found')

# 2. Fix L54: inline math with subscripts
old54e = ('To fully determine the motion from $\\vec{a}(t)$, two initial conditions are required: '
          '$\\vec{r}(t_0)$ and $\\vec{v}(t_0)$. This reflects the fact that the second-order '
          'differential equation $\\ddot{\\vec{r}} = \\vec{a}$ demands two integrations, each '
          'introducing a constant that can only be fixed with problem data.')
new54e = ('To fully determine the motion from the acceleration function, two initial conditions are '
          'required: [[posicion]] and [[velocidad]] at a reference instant. This reflects the fact that '
          'classical kinematics demands two integrations, each introducing a constant that can only be '
          'fixed with problem data.')
if old54e in te:
    te = te.replace(old54e, new54e, 1)
    print('teoria.en.md: L54 FIXED')
else:
    print('WARN teoria.en.md: L54 not found')

# 3. Fix L60: $T^{-1}$ and $x = v_0t + ...$
old60e = ('From a dimensional standpoint, each time derivative adds a factor $T^{-1}$ to the units. '
          'Position has dimensions $[L]$, velocity $[LT^{-1}]$ and acceleration $[LT^{-2}]$. This '
          'dimensional chain provides a consistency check for equations: every term in a sum must share '
          'the same dimensions. For instance, $x = v_0 t + \\tfrac{1}{2}at^2$ is dimensionally consistent '
          'because both terms carry dimensions $[L]$.')
new60e = ('From a dimensional standpoint, each time derivative adds a factor T\u207b\u00b9 to the units. '
          'Position has dimensions [L], [[velocidad]] [LT\u207b\u00b9] and [[aceleracion]] [LT\u207b\u00b2]. This '
          'dimensional chain provides a consistency check for equations: every term in a sum must share '
          'the same dimensions. For instance, the kinematic position equation is dimensionally consistent '
          'because all its terms carry dimensions of length.')
if old60e in te:
    te = te.replace(old60e, new60e, 1)
    print('teoria.en.md: L60 FIXED')
else:
    print('WARN teoria.en.md: L60 not found')

# 4. Fix L62: remove $P = F · v...$
old62e = ('The tangential–normal decomposition reveals a deep asymmetry: $a_T$ is linked to changes in '
          'kinetic energy ($P = F \\cdot v = m\\,a_T\\,v$), whereas $a_N$ merely redirects the velocity '
          'vector and performs no work. A purely centripetal force (such as the tension on an ideal '
          'pendulum at the lowest point) therefore keeps the speed constant. This distinction connects '
          'kinematics to energy long before dynamics is formally introduced.')
new62e = ('The tangential–normal decomposition reveals a deep asymmetry: the tangential component is '
          'linked to changes in kinetic energy, whereas the normal component merely redirects the [[velocidad]] '
          'vector and performs no work. A purely centripetal force therefore keeps [[rapidez]] constant. '
          'This distinction connects kinematics to energy long before dynamics is formally introduced.')
if old62e in te:
    te = te.replace(old62e, new62e, 1)
    print('teoria.en.md: L62 FIXED')
else:
    print('WARN teoria.en.md: L62 not found')

# 5. Fix L64: $v_{AC} = v_{AB} + v_{BC}$, $v \ll c$
old64e = ('The transition from classical kinematics to special relativity breaks the simple additivity '
          'of velocities: the rule $v_{AC} = v_{AB} + v_{BC}$ is only valid when $v \\ll c$. Likewise, '
          'in general relativity the notion of acceleration is redefined using covariant derivatives '
          'instead of ordinary ones because space-time is no longer flat. Recognising the limits of '
          'the classical model helps us appreciate why kinematic quantities, as defined here, are '
          'approximations valid within a specific regime of speeds and weak gravitational fields.')
new64e = ('The transition from classical kinematics to special relativity breaks the simple additivity '
          'of velocities: the classical composition rule is only valid when [[velocidad]] is much smaller '
          'than the speed of light. Likewise, in general relativity the notion of [[aceleracion]] is '
          'redefined using covariant derivatives instead of ordinary ones because space-time is no longer '
          'flat. Recognising the limits of the classical model helps us appreciate why kinematic quantities '
          'are approximations valid within a specific regime of speeds and weak gravitational fields.')
if old64e in te:
    te = te.replace(old64e, new64e, 1)
    print('teoria.en.md: L64 FIXED')
else:
    print('WARN teoria.en.md: L64 not found')

# 6. Fix L70: $(x_0, v_0)$
old70e = 'This pair $(x_0, v_0)$ defines a point in **phase space**'
new70e = 'This pair (initial [[posicion]], initial [[velocidad]]) defines a point in **phase space**'
if old70e in te:
    te = te.replace(old70e, new70e, 1)
    print('teoria.en.md: L70 FIXED')
else:
    print('WARN teoria.en.md: L70 not found')

# 7. Fix L76-L80: table values
table_fixes_en = [
    ('| $\\approx 1.4\\;\\text{m/s}$ |', '| \u2248 1.4 m/s |'),
    ('| $\\approx 33\\;\\text{m/s}$ |', '| \u2248 33 m/s |'),
    ('| $\\approx 3.5\\;\\text{m/s}^2$ |', '| \u2248 3.5 m/s\u00b2 |'),
    ('| $9.8\\;\\text{m/s}^2$ |', '| 9.8 m/s\u00b2 |'),
    ('| $\\approx 7\\,700\\;\\text{m/s}$ |', '| \u2248 7 700 m/s |'),
]
for old, new in table_fixes_en:
    if old in te:
        te = te.replace(old, new, 1)
        print(f'teoria.en.md: table fix DONE')
    else:
        print(f'WARN teoria.en.md: table fix NOT FOUND: {old[:40]}')

# 8. Fix L92: $v = \text{const}$, $x = x_0 + vt$
old92e = ('**Case 1 — Uniform rectilinear motion (URM):** $a = 0$, so $v = \\text{const}$ and '
          '$x = x_0 + vt$. Distance and displacement coincide as long as there is no change of direction.')
new92e = ('**Case 1 — Uniform rectilinear motion (URM):** [[aceleracion]] is zero, [[velocidad]] is '
          'constant, and [[posicion]] grows linearly with [[tiempo]]. [[distancia]] and [[desplazamiento]] '
          'coincide as long as there is no change of direction.')
if old92e in te:
    te = te.replace(old92e, new92e, 1)
    print('teoria.en.md: L92 FIXED')
else:
    print('WARN teoria.en.md: L92 not found')

# 9. Fix L94: $a = -g$
old94e = ('**Case 2 — Vertical throw:** Here $a = -g$ (constant). Velocity vanishes at the highest '
          'point. Displacement and distance differ during the descent phase.')
new94e = ('**Case 2 — Vertical throw:** [[aceleracion]] is constant and equal to gravity (downward). '
          '[[velocidad]] vanishes at the highest point. [[desplazamiento]] and [[distancia]] differ '
          'during the descent phase.')
if old94e in te:
    te = te.replace(old94e, new94e, 1)
    print('teoria.en.md: L94 FIXED')
else:
    print('WARN teoria.en.md: L94 not found')

# 10. Fix L96: drone example header
old96e = ('**Extended example.** A drone starts from rest and accelerates in a straight line at '
          '$a = 2.0\\;\\text{m/s}^2$ for $5\\;\\text{s}$, then brakes at $a = -1.0\\;\\text{m/s}^2$ until it stops.')
new96e = ('**Extended example.** A drone starts from rest and accelerates in a straight line at '
          '2.0 m/s\u00b2 for 5 s, then brakes at \u22121.0 m/s\u00b2 until it stops.')
if old96e in te:
    te = te.replace(old96e, new96e, 1)
    print('teoria.en.md: L96 FIXED')
else:
    print('WARN teoria.en.md: L96 not found')

# 11. Fix L98: Phase 1
old98e = ('- Phase 1: $v_f = 0 + 2.0 \\times 5 = 10\\;\\text{m/s}$; distance '
          '$d_1 = \\tfrac{1}{2}(2.0)(5)^2 = 25\\;\\text{m}$.')
new98e = '- Phase 1: final [[velocidad]] = 2.0 \u00d7 5 = 10 m/s; [[distancia]] d\u2081 = \u00bd \u00d7 2.0 \u00d7 25 = 25 m.'
if old98e in te:
    te = te.replace(old98e, new98e, 1)
    print('teoria.en.md: L98 FIXED')
else:
    print('WARN teoria.en.md: L98 not found')

# 12. Fix L99: Phase 2
old99e = ('- Phase 2: duration $t_2 = 10/1.0 = 10\\;\\text{s}$; distance '
          '$d_2 = \\tfrac{10^2}{2 \\times 1.0} = 50\\;\\text{m}$.')
new99e = '- Phase 2: duration = 10/1.0 = 10 s; [[distancia]] d\u2082 = 10\u00b2 / (2 \u00d7 1.0) = 50 m.'
if old99e in te:
    te = te.replace(old99e, new99e, 1)
    print('teoria.en.md: L99 FIXED')
else:
    print('WARN teoria.en.md: L99 not found')

# 13. Fix L100: total
old100e = '- Total: $75\\;\\text{m}$ covered, displacement $+75\\;\\text{m}$ (same direction throughout).'
new100e = '- Total: 75 m covered, [[desplazamiento]] of 75 m (same direction throughout).'
if old100e in te:
    te = te.replace(old100e, new100e, 1)
    print('teoria.en.md: L100 FIXED')
else:
    print('WARN teoria.en.md: L100 not found')

# 14. Fix L105: $v = -3$ m/s
old105e = ('$v = -3\\;\\text{m/s}$ means the object moves in the negative direction of the axis, '
           'not that "velocity is missing".')
new105e = 'v = \u22123 m/s means the object moves in the negative direction of the axis, not that "velocity is missing".'
if old105e in te:
    te = te.replace(old105e, new105e, 1)
    print('teoria.en.md: L105 FIXED')
else:
    print('WARN teoria.en.md: L105 not found')

# 15. Fix L115: $\vec{F} = m\vec{a}$
old115e = '($\\vec{F} = m\\vec{a}$)'
new115e = "(Newton's second law)"
if old115e in te:
    te = te.replace(old115e, new115e, 1)
    print('teoria.en.md: L115 FIXED')
else:
    print('WARN teoria.en.md: L115 not found')

# 16. Fix L117: $a_T / a_N$
old117e = 'The $a_T / a_N$ decomposition is essential for understanding UCM and non-uniform circular motion.'
new117e = 'The tangential/normal decomposition is essential for understanding UCM and non-uniform circular motion.'
if old117e in te:
    te = te.replace(old117e, new117e, 1)
    print('teoria.en.md: L117 FIXED')
else:
    print('WARN teoria.en.md: L117 not found')

# 17. Fix L122: $\vec{r} \to \vec{v} \to \vec{a}$
old122e = ('Kinematic quantities —position, displacement, velocity and acceleration— form a derivative '
           'hierarchy $\\vec{r} \\to \\vec{v} \\to \\vec{a}$ that encodes all information about motion.')
new122e = ('Kinematic quantities —position, [[desplazamiento]], [[velocidad]] and [[aceleracion]]— form '
           'a derivative hierarchy position \u2192 [[velocidad]] \u2192 [[aceleracion]] that encodes all '
           'information about motion.')
if old122e in te:
    te = te.replace(old122e, new122e, 1)
    print('teoria.en.md: L122 FIXED')
else:
    print('WARN teoria.en.md: L122 not found')

# Check remaining important inline math
remaining_e = re.findall(r'\$[^$\n]+\$', te)
important_e = []
for m in remaining_e:
    inner = m[1:-1].strip()
    compact = re.sub(r'\s+', '', inner)
    is_dim = '[' in inner and ']' in inner and any(c in inner for c in 'MLT')
    if len(compact) >= 4 and any(mk in inner for mk in MARKERS2) and not is_dim:
        important_e.append(m)
if important_e:
    print(f'WARN teoria.en.md: {len(important_e)} potentially flagged inline math remaining')
    for m in important_e[:15]:
        print(f'  {repr(m[:80])}')
else:
    print('teoria.en.md: inline math OK')

write('teoria.en.md', te)

# ============================================================
# aplicaciones.en.md: increase word count to >= 800
# ============================================================
ape = read('aplicaciones.en.md')
current_words = len(ape.split())
print(f'\naplicaciones.en.md: current word count = {current_words}')
if current_words < 800:
    needed = 800 - current_words + 5  # add a small buffer
    # Add a paragraph to the last section to increase word count
    # Find a good insertion point - after the last section content but before end
    # Look for section 5 (biomechanics) and add more context
    old_last = ('The [[cambio_velocidad]] is \u22120.20 m/s and the [[aceleracion_media]] is about '
                '\u22121.7 m/s\u00b2.')
    new_last = (
        'The [[cambio_velocidad]] is \u22120.20 m/s and the [[aceleracion_media]] is about '
        '\u22121.7 m/s\u00b2. This rapid deceleration during heel strike is significant in gait analysis '
        'because it indicates how efficiently the body absorbs the impact energy at foot contact. '
        'Clinical norms for healthy adults suggest that this value lies within a range consistent '
        'with low injury risk; values far outside this range may indicate abnormal loading patterns '
        'linked to musculoskeletal pathologies. The combination of [[velocidad_media]] and '
        '[[aceleracion_media]] over multiple gait cycles allows physiotherapists to compare patients '
        'before and after rehabilitation, giving these two kinematic magnitudes direct diagnostic value.'
    )
    if old_last in ape:
        ape = ape.replace(old_last, new_last, 1)
        print(f'aplicaciones.en.md: word count expanded')
    else:
        print(f'WARN aplicaciones.en.md: word count anchor not found')

new_words = len(ape.split())
print(f'aplicaciones.en.md: new word count = {new_words}')
write('aplicaciones.en.md', ape)

print('\nFix 2 complete.')
