const e=`version: 1\r
formulas:\r
- id: impulso_integral\r
  title:\r
    es: Definición general de impulso\r
    en: General definition of impulse\r
  equation: J = integral(F(t), t1, t2)\r
  latex: \\vec{J}=\\int_{t_1}^{t_2}\\vec{F}(t)\\,dt\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: El impulso es la acumulación temporal de la fuerza neta durante una interacción.\r
    en: Impulse is the time accumulation of net force during an interaction.\r
  constraints:\r
  - expr: dt > 0\r
    message:\r
      es: El intervalo temporal debe ser positivo.\r
      en: The time interval must be positive.\r
  validity:\r
    es: General para fuerzas variables en el tiempo dentro de mecánica clásica.\r
    en: General for time-varying forces within classical mechanics.\r
  dimension_check:\r
    es: '[J] = [F dt] = M L T^-2 · T = M L T^-1'\r
    en: '[J] = [F dt] = M L T^-2 · T = M L T^-1'\r
  calculable: false\r
  motivo_no_calculable: Requiere conocer la función F(t) o el área bajo la curva fuerza-tiempo.\r
  used_in:\r
  - theory\r
  - examples\r
  interpretation_tags:\r
  - impulso\r
  - integral\r
  - fuerza_variable\r
  - area_bajo_curva\r
  result_semantics:\r
    target: J\r
    meaning: Impulso total acumulado durante el intervalo de interacción.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: impulso_area_curva\r
  title:\r
    es: Impulso como área bajo la curva fuerza-tiempo\r
    en: Impulse as area under the force-time curve\r
  equation: J = area_F_t\r
  latex: J = \\text{Area}(F, t)\r
  rearrangements: []\r
  category: derived\r
  relation_type: graphical_interpretation\r
  physical_meaning:\r
    es: El impulso es el área algebraica bajo la gráfica fuerza-tiempo.\r
    en: Impulse is the signed area under the force-time graph.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: La gráfica debe representar fuerza neta frente a tiempo en el mismo eje\r
        de análisis.\r
      en: The graph must represent net force versus time along the same analysis axis.\r
  validity:\r
    es: Válida para interpretar gráficas fuerza-tiempo.\r
    en: Valid for interpreting force-time graphs.\r
  dimension_check:\r
    es: '[área] = [F][t] = M L T^-2 · T = M L T^-1'\r
    en: '[area] = [F][t] = M L T^-2 · T = M L T^-1'\r
  calculable: false\r
  motivo_no_calculable: Requiere datos gráficos o una función F(t).\r
  used_in:\r
  - theory\r
  - examples\r
  - graphs\r
  interpretation_tags:\r
  - impulso\r
  - grafica\r
  - area_bajo_curva\r
  result_semantics:\r
    target: J\r
    meaning: Área algebraica que representa el impulso acumulado.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: impulso_fuerza_media\r
  title:\r
    es: Impulso como fuerza media por tiempo\r
    en: Impulse as average force times time\r
  equation: J = Fmed * dt\r
  latex: J=F_{med}\\Delta t\r
  rearrangements:\r
  - target: J\r
    equation: J = Fmed * dt\r
    latex: J=F_{med}\\Delta t\r
    constraints:\r
    - expr: dt > 0\r
      message:\r
        es: dt debe ser positivo.\r
        en: dt must be positive.\r
  - target: Fmed\r
    equation: Fmed = J / dt\r
    latex: F_{med}=\\frac{J}{\\Delta t}\r
    constraints:\r
    - expr: dt > 0\r
      message:\r
        es: dt debe ser positivo para calcular la fuerza media.\r
        en: dt must be positive to compute average force.\r
  - target: dt\r
    equation: dt = J / Fmed\r
    latex: \\Delta t=\\frac{J}{F_{med}}\r
    constraints:\r
    - expr: Fmed != 0\r
      message:\r
        es: Fmed no puede ser cero si se despeja dt.\r
        en: Fmed cannot be zero when solving for dt.\r
  category: fundamental\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: Relaciona el impulso con una fuerza media equivalente durante un intervalo\r
      de tiempo.\r
    en: Relates impulse to an equivalent average force over a time interval.\r
  constraints:\r
  - expr: dt > 0\r
    message:\r
      es: dt debe ser positivo.\r
      en: dt must be positive.\r
  validity:\r
    es: Válida cuando se usa fuerza media o fuerza constante.\r
    en: Valid when average or constant force is used.\r
  dimension_check:\r
    es: '[J] = [Fmed dt] = M L T^-2 · T = M L T^-1'\r
    en: '[J] = [Fmed dt] = M L T^-2 · T = M L T^-1'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - impulso\r
  - fuerza_media\r
  - tiempo_contacto\r
  result_semantics:\r
    target: J\r
    meaning: Impulso equivalente producido por una fuerza media durante un intervalo.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: fuerza_media_cambio_momento\r
  title:\r
    es: Fuerza media como cambio de momento por tiempo\r
    en: Average force as momentum change over time\r
  equation: Fmed = DeltaP / dt\r
  latex: F_{med}=\\frac{\\Delta p}{\\Delta t}\r
  rearrangements:\r
  - target: Fmed\r
    equation: Fmed = DeltaP / dt\r
    latex: F_{med}=\\frac{\\Delta p}{\\Delta t}\r
    constraints:\r
    - expr: dt > 0\r
      message:\r
        es: dt debe ser positivo para calcular la fuerza media.\r
        en: dt must be positive to compute average force.\r
  - target: DeltaP\r
    equation: DeltaP = Fmed * dt\r
    latex: \\Delta p=F_{med}\\Delta t\r
    constraints:\r
    - expr: dt > 0\r
      message:\r
        es: dt debe ser positivo.\r
        en: dt must be positive.\r
  - target: dt\r
    equation: dt = DeltaP / Fmed\r
    latex: \\Delta t=\\frac{\\Delta p}{F_{med}}\r
    constraints:\r
    - expr: Fmed != 0\r
      message:\r
        es: Fmed no puede ser cero si se despeja dt.\r
        en: Fmed cannot be zero when solving for dt.\r
  category: derived\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: Relaciona la fuerza media neta con el cambio de cantidad de movimiento durante\r
      el intervalo.\r
    en: Relates net average force to momentum change over the interval.\r
  constraints:\r
  - expr: dt > 0\r
    message:\r
      es: dt debe ser positivo.\r
      en: dt must be positive.\r
  validity:\r
    es: Válida cuando el cambio de momento y el intervalo temporal se refieren al\r
      mismo sistema y eje.\r
    en: Valid when momentum change and time interval refer to the same system and\r
      axis.\r
  dimension_check:\r
    es: '[Fmed] = [DeltaP/dt] = M L T^-1 / T = M L T^-2'\r
    en: '[Fmed] = [DeltaP/dt] = M L T^-1 / T = M L T^-2'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - impulso\r
  - fuerza_media\r
  - cambio_momento\r
  - tiempo_contacto\r
  result_semantics:\r
    target: Fmed\r
    meaning: Fuerza media neta asociada a un cambio de momento durante un intervalo.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: impulso_fuerza_constante\r
  title:\r
    es: Impulso con fuerza constante\r
    en: Impulse with constant force\r
  equation: J = F * dt\r
  latex: J=F\\Delta t\r
  rearrangements:\r
  - target: J\r
    equation: J = F * dt\r
    latex: J=F\\Delta t\r
    constraints:\r
    - expr: dt > 0\r
      message:\r
        es: dt debe ser positivo.\r
        en: dt must be positive.\r
  - target: F\r
    equation: F = J / dt\r
    latex: F=\\frac{J}{\\Delta t}\r
    constraints:\r
    - expr: dt > 0\r
      message:\r
        es: dt debe ser positivo para calcular la fuerza.\r
        en: dt must be positive to compute force.\r
  category: derived\r
  relation_type: special_case\r
  physical_meaning:\r
    es: Caso particular en el que la fuerza neta permanece constante durante el intervalo.\r
    en: Special case where the net force remains constant during the interval.\r
  constraints:\r
  - expr: dt > 0\r
    message:\r
      es: dt debe ser positivo.\r
      en: dt must be positive.\r
  - expr: fuerza_constante == true\r
    message:\r
      es: Esta fórmula solo debe usarse si la fuerza puede considerarse constante.\r
      en: This formula should only be used if force can be considered constant.\r
  validity:\r
    es: Válida para fuerza constante o aproximadamente constante.\r
    en: Valid for constant or approximately constant force.\r
  dimension_check:\r
    es: '[J] = [F dt] = M L T^-2 · T = M L T^-1'\r
    en: '[J] = [F dt] = M L T^-2 · T = M L T^-1'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - impulso\r
  - fuerza_constante\r
  result_semantics:\r
    target: J\r
    meaning: Impulso producido por una fuerza constante.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: teorema_impulso_momento\r
  title:\r
    es: Teorema impulso-momento\r
    en: Impulse-momentum theorem\r
  equation: J = p_final - p_inicial\r
  latex: J=p_f-p_i\r
  rearrangements:\r
  - target: J\r
    equation: J = p_final - p_inicial\r
    latex: J=p_f-p_i\r
    constraints: []\r
  - target: p_final\r
    equation: p_final = p_inicial + J\r
    latex: p_f=p_i+J\r
    constraints: []\r
  - target: p_inicial\r
    equation: p_inicial = p_final - J\r
    latex: p_i=p_f-J\r
    constraints: []\r
  category: fundamental\r
  relation_type: theorem\r
  physical_meaning:\r
    es: El impulso neto es igual al cambio de cantidad de movimiento.\r
    en: Net impulse equals the change in momentum.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: Aplicar en mecánica clásica con sistema y eje definidos.\r
      en: Apply in classical mechanics with defined system and axis.\r
  validity:\r
    es: Válida para la cantidad de movimiento del sistema considerado.\r
    en: Valid for the momentum of the chosen system.\r
  dimension_check:\r
    es: '[J] = M L T^-1; [p_final - p_inicial] = M L T^-1'\r
    en: '[J] = M L T^-1; [p_final - p_inicial] = M L T^-1'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - impulso\r
  - momento\r
  - teorema_impulso_momento\r
  result_semantics:\r
    target: J\r
    meaning: Cambio neto de cantidad de movimiento.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: cambio_momento\r
  title:\r
    es: Cambio de cantidad de movimiento\r
    en: Momentum change\r
  equation: DeltaP = p_final - p_inicial\r
  latex: \\Delta p=p_f-p_i\r
  rearrangements:\r
  - target: DeltaP\r
    equation: DeltaP = p_final - p_inicial\r
    latex: \\Delta p=p_f-p_i\r
    constraints: []\r
  - target: p_final\r
    equation: p_final = p_inicial + DeltaP\r
    latex: p_f=p_i+\\Delta p\r
    constraints: []\r
  - target: p_inicial\r
    equation: p_inicial = p_final - DeltaP\r
    latex: p_i=p_f-\\Delta p\r
    constraints: []\r
  category: derived\r
  relation_type: definition\r
  physical_meaning:\r
    es: Define el cambio de momento como diferencia entre momento final e inicial.\r
    en: Defines momentum change as final momentum minus initial momentum.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: El momento inicial y final deben referirse al mismo sistema y eje.\r
      en: Initial and final momentum must refer to the same system and axis.\r
  validity:\r
    es: General para comparar dos estados del mismo sistema.\r
    en: General for comparing two states of the same system.\r
  dimension_check:\r
    es: '[DeltaP] = [p_final - p_inicial] = M L T^-1'\r
    en: '[DeltaP] = [p_final - p_inicial] = M L T^-1'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - momento\r
  - cambio_momento\r
  result_semantics:\r
    target: DeltaP\r
    meaning: Variación de la cantidad de movimiento entre dos estados.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: impulso_momento_masa_velocidad\r
  title:\r
    es: Impulso como cambio de momento y cambio de velocidad\r
    en: Impulse as momentum change and velocity change\r
  equation: J = DeltaP = m * (vF - v0)\r
  latex: J=\\Delta p=m(v_f-v_0)\r
  rearrangements:\r
  - target: J\r
    equation: J = m * (vF - v0)\r
    latex: J=m(v_f-v_0)\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  - target: DeltaP\r
    equation: DeltaP = m * (vF - v0)\r
    latex: \\Delta p=m(v_f-v_0)\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  - target: vF\r
    equation: vF = v0 + J / m\r
    latex: v_f=v_0+\\frac{J}{m}\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  category: fundamental\r
  relation_type: theorem\r
  physical_meaning:\r
    es: Para masa constante, el impulso neto coincide con el cambio de momento y con\r
      la masa por el cambio de velocidad.\r
    en: For constant mass, net impulse equals momentum change and mass times velocity\r
      change.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: m debe ser positiva.\r
      en: m must be positive.\r
  validity:\r
    es: Válida para masa constante y velocidades medidas en el mismo eje del impulso.\r
    en: Valid for constant mass and velocities measured along the same axis as the\r
      impulse.\r
  dimension_check:\r
    es: '[J] = [DeltaP] = [m(vf - v0)] = M L T^-1'\r
    en: '[J] = [DeltaP] = [m(vf - v0)] = M L T^-1'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - impulso\r
  - momento\r
  - cambio_velocidad\r
  - masa_constante\r
  result_semantics:\r
    target: J\r
    meaning: Impulso neto expresado como cambio de cantidad de movimiento para masa\r
      constante.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: impulso_masa_cambio_velocidad\r
  title:\r
    es: Impulso como masa por cambio de velocidad\r
    en: Impulse as mass times velocity change\r
  equation: J = m * (vF - v0)\r
  latex: J=m(v_f-v_0)\r
  rearrangements:\r
  - target: J\r
    equation: J = m * (vF - v0)\r
    latex: J=m(v_f-v_0)\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  - target: vF\r
    equation: vF = v0 + J / m\r
    latex: v_f=v_0+\\frac{J}{m}\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  - target: v0\r
    equation: v0 = vF - J / m\r
    latex: v_0=v_f-\\frac{J}{m}\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Para masa constante, el impulso equivale a la masa multiplicada por el cambio\r
      de velocidad.\r
    en: For constant mass, impulse equals mass times velocity change.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: m debe ser positiva.\r
      en: m must be positive.\r
  validity:\r
    es: Válida para masa constante y velocidades medidas en el mismo eje.\r
    en: Valid for constant mass and velocities measured along the same axis.\r
  dimension_check:\r
    es: '[J] = [m(vf - v0)] = M · L T^-1 = M L T^-1'\r
    en: '[J] = [m(vf - v0)] = M · L T^-1 = M L T^-1'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - impulso\r
  - cambio_velocidad\r
  - masa_constante\r
  result_semantics:\r
    target: J\r
    meaning: Impulso necesario para producir un cambio de velocidad.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: velocidad_final_impulso\r
  title:\r
    es: Velocidad final por impulso\r
    en: Final velocity from impulse\r
  equation: vF = v0 + J / m\r
  latex: v_f=v_0+\\frac{J}{m}\r
  rearrangements:\r
  - target: vF\r
    equation: vF = v0 + J / m\r
    latex: v_f=v_0+\\frac{J}{m}\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  - target: J\r
    equation: J = m * (vF - v0)\r
    latex: J=m(v_f-v_0)\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Permite calcular la velocidad final después de aplicar un impulso a una masa\r
      constante.\r
    en: Computes final velocity after applying impulse to a constant mass.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: m debe ser positiva.\r
      en: m must be positive.\r
  validity:\r
    es: Válida para masa constante.\r
    en: Valid for constant mass.\r
  dimension_check:\r
    es: '[vF] = L T^-1; [v0 + J/m] = L T^-1'\r
    en: '[vF] = L T^-1; [v0 + J/m] = L T^-1'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - impulso\r
  - velocidad\r
  - velocidad_final\r
  result_semantics:\r
    target: vF\r
    meaning: Velocidad final tras recibir un impulso.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: cambio_momento_componentes\r
  title:\r
    es: Cambio de momento en componentes\r
    en: Momentum change in components\r
  equation: Jx = m*vfx - m*vix; Jy = m*vfy - m*viy\r
  latex: J_x=m v_{fx}-m v_{ix},\\quad J_y=m v_{fy}-m v_{iy}\r
  rearrangements:\r
  - target: Jx\r
    equation: Jx = m * vfx - m * vix\r
    latex: J_x=m v_{fx}-m v_{ix}\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  - target: Jy\r
    equation: Jy = m * vfy - m * viy\r
    latex: J_y=m v_{fy}-m v_{iy}\r
    constraints:\r
    - expr: m > 0\r
      message:\r
        es: m debe ser positiva.\r
        en: m must be positive.\r
  category: derived\r
  relation_type: component_form\r
  physical_meaning:\r
    es: Expresa el impulso o cambio de momento por componentes cartesianas independientes.\r
    en: Expresses impulse or momentum change by independent Cartesian components.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: m debe ser positiva.\r
      en: m must be positive.\r
  validity:\r
    es: Válida en ejes cartesianos definidos y para masa constante.\r
    en: Valid in defined Cartesian axes and for constant mass.\r
  dimension_check:\r
    es: '[Jx] = [Jy] = M L T^-1'\r
    en: '[Jx] = [Jy] = M L T^-1'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - impulso\r
  - componentes\r
  - momento\r
  result_semantics:\r
    target: Jx\r
    meaning: Componente x del cambio de momento.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: impulso_fuerza_triangular\r
  title:\r
    es: Impulso de una fuerza triangular\r
    en: Impulse of a triangular force profile\r
  equation: J = 0.5 * Fmax * dt\r
  latex: J=\\frac{1}{2}F_{max}\\Delta t\r
  rearrangements:\r
  - target: J\r
    equation: J = 0.5 * Fmax * dt\r
    latex: J=\\frac{1}{2}F_{max}\\Delta t\r
    constraints:\r
    - expr: dt > 0\r
      message:\r
        es: dt debe ser positivo.\r
        en: dt must be positive.\r
  - target: Fmax\r
    equation: Fmax = 2 * J / dt\r
    latex: F_{max}=\\frac{2J}{\\Delta t}\r
    constraints:\r
    - expr: dt > 0\r
      message:\r
        es: dt debe ser positivo.\r
        en: dt must be positive.\r
  category: derived\r
  relation_type: graphical_area\r
  physical_meaning:\r
    es: Calcula el impulso cuando la gráfica fuerza-tiempo tiene forma triangular.\r
    en: Computes impulse when the force-time graph is triangular.\r
  constraints:\r
  - expr: dt > 0\r
    message:\r
      es: dt debe ser positivo.\r
      en: dt must be positive.\r
  - expr: Fmax >= 0\r
    message:\r
      es: Fmax representa el valor máximo de la fuerza en magnitud.\r
      en: Fmax represents the maximum force magnitude.\r
  validity:\r
    es: Válida para perfiles de fuerza aproximadamente triangulares.\r
    en: Valid for approximately triangular force profiles.\r
  dimension_check:\r
    es: '[J] = [Fmax dt] = M L T^-2 · T = M L T^-1'\r
    en: '[J] = [Fmax dt] = M L T^-2 · T = M L T^-1'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  - graphs\r
  interpretation_tags:\r
  - impulso\r
  - grafica\r
  - fuerza_triangular\r
  - area_bajo_curva\r
  result_semantics:\r
    target: J\r
    meaning: Área triangular bajo la curva fuerza-tiempo.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
- id: ley_newton_general\r
  target: F\r
  equation: F = dp/dt\r
  latex: \\vec{F} = \\frac{d\\vec{p}}{dt}\r
  description:\r
    es: Segunda Ley de Newton en forma diferencial.\r
    en: Newton Second Law in differential form.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
  title:\r
    es: Segunda Ley de Newton (Diferencial)\r
    en: Newton Second Law (Differential)\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Relación instantánea entre fuerza y cambio de momento.\r
    en: Instantaneous relation between force and momentum change.\r
  constraints: []\r
  validity:\r
    es: Mecánica clásica, masa constante.\r
    en: Classical mechanics, constant mass.\r
  dimension_check: N = (kg·m/s)/s\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  interpretation_tags:\r
  - dinamica\r
  - newton\r
  result_semantics: {}\r
`;export{e as default};
