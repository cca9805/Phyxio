const e=`version: "1.0"
id: resonancia-y-modos-en-barras-interp
leaf_id: resonancia-y-modos-en-barras

nombre:
  es: Interpretacion de resonancia y modos en barras
  en: Interpretation of resonance and modes in bars

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/resonancia-y-modos-en-barras

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
    en: Interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - freq_longitudinal_libre_libre
    - freq_longitudinal_fijo_libre
    - freq_torsional_libre_libre
    - velocidad_longitudinal_barra
    - velocidad_corte_barra
  magnitudes:
    - f_n
    - n_modo
    - v_L
    - v_T
    - L_barra
    - E_young
    - G_shear
    - rho
    - lambda_n

global_context:
  physical_domain:
    es: "Frecuencias naturales y patrones modales de vibracion en barras elasticas."
    en: "Natural frequencies and modal patterns of vibration in elastic bars."
  axis_convention:
    es: "Eje x: numero de modo n o longitud L. Eje y: frecuencia natural f_n."
    en: "X axis: mode number n or length L. Y axis: natural frequency f_n."
  standard_assumptions:
    - id: barra_delgada
      text:
        es: "Barra delgada: longitud mucho mayor que dimension transversal."
        en: "Slender bar: length much greater than transverse dimension."
    - id: homogeneidad
      text:
        es: "Material homogeneo, isotropo, elastico lineal."
        en: "Homogeneous, isotropic, linearly elastic material."
    - id: sin_amortiguamiento
      text:
        es: "Sin amortiguamiento (vibracion libre no amortiguada)."
        en: "No damping (undamped free vibration)."
  standard_warnings:
    - id: dispersion
      text:
        es: "Para modos altos (lambda cercano al diametro), la formula simple pierde precision."
        en: "For high modes (lambda close to diameter), the simple formula loses accuracy."

result_blocks:
  summary:
    enabled: true
    order: 1
    title: { es: Resumen, en: Summary }
  physical_reading:
    enabled: true
    order: 2
    title: { es: Lectura fisica, en: Physical reading }
  coherence:
    enabled: true
    order: 3
    title: { es: Coherencia, en: Coherence }
  model_validity:
    enabled: true
    order: 4
    title: { es: Validez del modelo, en: Model validity }
  graph_reading:
    enabled: true
    order: 5
    title: { es: Lectura del grafico, en: Graph reading }
  likely_errors:
    enabled: true
    order: 6
    title: { es: Errores probables, en: Likely errors }
  next_step:
    enabled: true
    order: 7
    title: { es: Siguiente paso, en: Next step }

targets:
  f_n:
    magnitude_type: frequency
    semantic_role:
      es: "Frecuencia natural del modo n, resultado principal del calculo."
      en: "Natural frequency of mode n, main calculation result."
    summary_rules:
      - id: fn_summary_audible
        when: "f_n >= 20 && f_n <= 20000"
        status: ok
        text:
          es: "[[f_n]] indica una resonancia audible: el modo puede radiar sonido y su tono depende de longitud, material y contorno."
          en: "[[f_n]] indicates an audible resonance: the mode can radiate sound and its pitch depends on length, material and boundary condition."
      - id: fn_summary_ultrasonic
        when: "f_n > 20000"
        status: ok
        text:
          es: "[[f_n]] indica una resonancia ultrasonica: domina la respuesta dinamica pero ya no se percibe como tono audible."
          en: "[[f_n]] indicates an ultrasonic resonance: it dominates the dynamic response but is no longer perceived as an audible pitch."
      - id: fn_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_n]] resume el modo permitido por la barra: aumenta con rigidez y numero modal, y disminuye con la longitud."
          en: "[[f_n]] summarises the mode allowed by the bar: it increases with stiffness and mode number, and decreases with length."
    physical_reading_rules:
      - id: fn_reading_default
        when: "true"
        status: ok
        text:
          es: "La frecuencia depende de v/L y del numero de modo. Barras mas cortas o materiales mas rigidos dan frecuencias mayores."
          en: "Frequency depends on v/L and mode number. Shorter bars or stiffer materials give higher frequencies."
    coherence_rules:
      - id: fn_coherence_positive
        when: "f_n <= 0"
        status: error
        text:
          es: "[[f_n]] debe ser positiva para un modo de vibracion real."
          en: "[[f_n]] must be positive for a real vibration mode."
      - id: fn_coherence_harmonics
        when: "true"
        status: ok
        text:
          es: "Verificar que f_n / f_1 es un entero (libre-libre) o un entero impar (fijo-libre)."
          en: "Verify that f_n / f_1 is an integer (free-free) or an odd integer (fixed-free)."
    model_validity_rules:
      - id: fn_validity_slender
        when: "true"
        status: ok
        text:
          es: "Valido si la longitud de onda del modo es mucho mayor que el diametro de la barra."
          en: "Valid if the mode wavelength is much greater than the bar diameter."
    graph_rules:
      - id: fn_graph_default
        when: "true"
        status: ok
        text:
          es: "Los modos son puntos equiespaciados verticalmente en el grafico f vs n."
          en: "Modes are vertically equally spaced points in the f vs n graph."
    likely_errors:
      - id: fn_error_bc
        when: "true"
        status: warning
        text:
          es: "Verificar que se uso la formula correcta para la condicion de contorno (libre-libre vs fijo-libre)."
          en: "Check that the correct formula was used for the boundary condition (free-free vs fixed-free)."
    next_step_rules:
      - id: fn_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar con frecuencia medida o usar para despejar E o G del material."
          en: "Compare with measured frequency or use to extract the material's E or G."

  v_L:
    magnitude_type: velocity
    semantic_role:
      es: "Velocidad de onda longitudinal, parametro intermedio para calcular frecuencias."
      en: "Longitudinal wave velocity, intermediate parameter for frequency calculation."
    summary_rules:
      - id: vl_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_L]] = sqrt(E/rho) es la velocidad de onda de barra, diferente de la velocidad P."
          en: "[[v_L]] = sqrt(E/rho) is the bar wave velocity, different from P-wave velocity."
    physical_reading_rules:
      - id: vl_reading_default
        when: "true"
        status: ok
        text:
          es: "v_L fija la escala de frecuencias: materiales rigidos y ligeros tienen v_L alta y resonancias altas."
          en: "v_L sets the frequency scale: stiff and light materials have high v_L and high resonances."
    coherence_rules:
      - id: vl_coherence_positive
        when: "v_L <= 0"
        status: error
        text:
          es: "[[v_L]] debe ser positiva. Revisar E y rho."
          en: "[[v_L]] must be positive. Check E and rho."
      - id: vl_coherence_range
        when: "v_L > 7000"
        status: warning
        text:
          es: "[[v_L]] > 7000 m/s: valor inusualmente alto. Verificar que no se esta usando v_P en vez de v_barra."
          en: "[[v_L]] > 7000 m/s: unusually high value. Check that v_P is not being used instead of v_bar."
      - id: vl_coherence_default
        when: "true"
        status: ok
        text:
          es: "Valor dentro del rango tipico de materiales solidos."
          en: "Value within typical solid materials range."
    model_validity_rules:
      - id: vl_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para barra delgada (sin confinamiento lateral). No usar para medio infinito."
          en: "Valid for slender bar (no lateral confinement). Do not use for infinite medium."
    graph_rules:
      - id: vl_graph_default
        when: "true"
        status: ok
        text:
          es: "v_L determina la pendiente de la recta f vs n."
          en: "v_L determines the slope of the f vs n line."
    likely_errors:
      - id: vl_error_default
        when: "true"
        status: warning
        text:
          es: "No confundir v_L (barra) con v_P (medio infinito). v_P > v_L siempre para nu > 0."
          en: "Do not confuse v_L (bar) with v_P (infinite medium). v_P > v_L always for nu > 0."
    next_step_rules:
      - id: vl_next_default
        when: "true"
        status: ok
        text:
          es: "Sustituir v_L en la formula de frecuencia adecuada a la condicion de contorno."
          en: "Substitute v_L in the frequency formula appropriate to the boundary condition."

  v_T:
    magnitude_type: velocity
    semantic_role:
      es: "Velocidad de corte, parametro para modos torsionales."
      en: "Shear velocity, parameter for torsional modes."
    summary_rules:
      - id: vt_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_T]] = sqrt(G/rho) gobierna los modos torsionales. Siempre menor que [[v_L]]."
          en: "[[v_T]] = sqrt(G/rho) governs torsional modes. Always less than [[v_L]]."
    physical_reading_rules:
      - id: vt_reading_default
        when: "true"
        status: ok
        text:
          es: "v_T mide la rapidez de propagacion de deformaciones de cizalla. El cociente v_L/v_T depende solo de nu."
          en: "v_T measures the propagation speed of shear deformations. The v_L/v_T ratio depends only on nu."
    coherence_rules:
      - id: vt_coherence_positive
        when: "v_T <= 0"
        status: error
        text:
          es: "[[v_T]] debe ser positiva."
          en: "[[v_T]] must be positive."
      - id: vt_coherence_vs_vl
        when: "v_T >= v_L"
        status: error
        text:
          es: "[[v_T]] >= [[v_L]]: imposible para nu > -1. Revisar G y E."
          en: "[[v_T]] >= [[v_L]]: impossible for nu > -1. Check G and E."
      - id: vt_coherence_default
        when: "true"
        status: ok
        text:
          es: "v_T coherente con v_L (v_T < v_L)."
          en: "v_T consistent with v_L (v_T < v_L)."
    model_validity_rules:
      - id: vt_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para seccion circular. Secciones no circulares requieren factor corrector."
          en: "Valid for circular cross-section. Non-circular sections require a correction factor."
    graph_rules:
      - id: vt_graph_default
        when: "true"
        status: ok
        text:
          es: "Modos torsionales aparecen como serie paralela a los longitudinales pero con menor pendiente."
          en: "Torsional modes appear as a series parallel to longitudinal ones but with lower slope."
    likely_errors:
      - id: vt_error_default
        when: "true"
        status: warning
        text:
          es: "No usar v_T en la formula de frecuencia longitudinal ni v_L en la torsional."
          en: "Do not use v_T in the longitudinal frequency formula nor v_L in the torsional one."
    next_step_rules:
      - id: vt_next_default
        when: "true"
        status: ok
        text:
          es: "Usar v_T en la formula torsional libre-libre o fijo-libre."
          en: "Use v_T in the free-free or fixed-free torsional formula."

  E_young:
    magnitude_type: modulus
    semantic_role:
      es: "Modulo de Young que controla la rigidez longitudinal de la barra."
      en: "Young modulus controlling the bar's longitudinal stiffness."
    summary_rules:
      - id: e_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] se obtiene de la velocidad longitudinal y la densidad."
          en: "[[E_young]] is obtained from longitudinal velocity and density."
    physical_reading_rules:
      - id: e_reading_default
        when: "true"
        status: ok
        text:
          es: "Un [[E_young]] mayor aumenta [[v_L]] y eleva toda la serie de resonancias longitudinales."
          en: "A larger [[E_young]] increases [[v_L]] and raises the whole longitudinal resonance series."
    coherence_rules:
      - id: e_coherence_positive
        when: "E_young <= 0"
        status: error
        text:
          es: "[[E_young]] debe ser positivo en un solido elastico estable."
          en: "[[E_young]] must be positive in a stable elastic solid."
    model_validity_rules:
      - id: e_validity_default
        when: "true"
        status: ok
        text:
          es: "Interpretar [[E_young]] como modulo lineal solo dentro del regimen elastico."
          en: "Interpret [[E_young]] as a linear modulus only within the elastic regime."
    graph_rules:
      - id: e_graph_default
        when: "true"
        status: ok
        text:
          es: "Al aumentar [[E_young]], la pendiente frecuencia-modo crece por el aumento de [[v_L]]."
          en: "As [[E_young]] increases, the frequency-mode slope grows through the increase in [[v_L]]."
    likely_errors:
      - id: e_error_default
        when: "true"
        status: warning
        text:
          es: "No sustituir [[G_shear]] por [[E_young]] en los modos torsionales."
          en: "Do not substitute [[G_shear]] for [[E_young]] in torsional modes."
    next_step_rules:
      - id: e_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[E_young]] para calcular [[v_L]] y despues la frecuencia longitudinal."
          en: "Use [[E_young]] to calculate [[v_L]] and then the longitudinal frequency."

  G_shear:
    magnitude_type: modulus
    semantic_role:
      es: "Modulo de cizalla que controla la rigidez torsional efectiva."
      en: "Shear modulus controlling the effective torsional stiffness."
    summary_rules:
      - id: g_summary_default
        when: "true"
        status: ok
        text:
          es: "[[G_shear]] fija la velocidad de corte y las resonancias torsionales."
          en: "[[G_shear]] sets the shear velocity and torsional resonances."
    physical_reading_rules:
      - id: g_reading_default
        when: "true"
        status: ok
        text:
          es: "Un [[G_shear]] mayor hace que el giro se propague mas rapido a lo largo de la barra."
          en: "A larger [[G_shear]] makes twist propagate faster along the bar."
    coherence_rules:
      - id: g_coherence_positive
        when: "G_shear <= 0"
        status: error
        text:
          es: "[[G_shear]] debe ser positivo."
          en: "[[G_shear]] must be positive."
    model_validity_rules:
      - id: g_validity_default
        when: "true"
        status: ok
        text:
          es: "En secciones no circulares, [[G_shear]] no basta por si solo: aparece correccion geometrica."
          en: "For non-circular sections, [[G_shear]] alone is not enough: a geometric correction appears."
    graph_rules:
      - id: g_graph_default
        when: "true"
        status: ok
        text:
          es: "Al aumentar [[G_shear]], la serie torsional sube por el aumento de [[v_T]]."
          en: "As [[G_shear]] increases, the torsional series rises through the increase in [[v_T]]."
    likely_errors:
      - id: g_error_default
        when: "true"
        status: warning
        text:
          es: "No usar [[G_shear]] para calcular la velocidad longitudinal de barra."
          en: "Do not use [[G_shear]] to calculate the longitudinal bar velocity."
    next_step_rules:
      - id: g_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[G_shear]] para calcular [[v_T]] y despues la frecuencia torsional."
          en: "Use [[G_shear]] to calculate [[v_T]] and then the torsional frequency."

  rho:
    magnitude_type: density
    semantic_role:
      es: "Densidad que aporta inercia y reduce las velocidades elasticas."
      en: "Density providing inertia and reducing elastic wave speeds."
    summary_rules:
      - id: rho_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho]] aparece en el denominador de las velocidades elasticas."
          en: "[[rho]] appears in the denominator of elastic wave speeds."
    physical_reading_rules:
      - id: rho_reading_default
        when: "true"
        status: ok
        text:
          es: "A mayor [[rho]], mas inercia moviliza la onda y menor es la frecuencia de resonancia."
          en: "Higher [[rho]] means more inertia moved by the wave and lower resonance frequency."
    coherence_rules:
      - id: rho_coherence_positive
        when: "rho <= 0"
        status: error
        text:
          es: "[[rho]] debe ser positiva."
          en: "[[rho]] must be positive."
    model_validity_rules:
      - id: rho_validity_default
        when: "true"
        status: ok
        text:
          es: "Usar densidad efectiva homogenea; materiales compuestos requieren un modelo equivalente."
          en: "Use homogeneous effective density; composite materials require an equivalent model."
    graph_rules:
      - id: rho_graph_default
        when: "true"
        status: ok
        text:
          es: "Al aumentar [[rho]], las series modal longitudinal y torsional bajan."
          en: "As [[rho]] increases, the longitudinal and torsional modal series move down."
    likely_errors:
      - id: rho_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar unidades de [[rho]] en kg/m3 antes de calcular velocidades."
          en: "Check [[rho]] units in kg/m3 before calculating velocities."
    next_step_rules:
      - id: rho_next_default
        when: "true"
        status: ok
        text:
          es: "Combinar [[rho]] con [[E_young]] o [[G_shear]] para obtener la velocidad correspondiente."
          en: "Combine [[rho]] with [[E_young]] or [[G_shear]] to obtain the corresponding velocity."

  L_barra:
    magnitude_type: length
    semantic_role:
      es: "Longitud de la barra, parametro geometrico principal."
      en: "Bar length, main geometric parameter."
    summary_rules:
      - id: l_summary_default
        when: "true"
        status: ok
        text:
          es: "[[L_barra]] fija la frecuencia fundamental: f_1 es inversamente proporcional a L."
          en: "[[L_barra]] sets the fundamental frequency: f_1 is inversely proportional to L."
    physical_reading_rules:
      - id: l_reading_default
        when: "true"
        status: ok
        text:
          es: "Duplicar L divide la frecuencia por dos. Reducir L a la mitad duplica la frecuencia."
          en: "Doubling L halves the frequency. Halving L doubles the frequency."
    coherence_rules:
      - id: l_coherence_positive
        when: "L_barra <= 0"
        status: error
        text:
          es: "[[L_barra]] debe ser positiva."
          en: "[[L_barra]] must be positive."
      - id: l_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que L se usa en metros en el SI."
          en: "Verify that L is used in metres in SI."
    model_validity_rules:
      - id: l_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de barra delgada requiere L >> diametro."
          en: "The slender bar model requires L >> diameter."
    graph_rules:
      - id: l_graph_default
        when: "true"
        status: ok
        text:
          es: "Si L es el eje x, la frecuencia decae como 1/L (hiperbola)."
          en: "If L is the x-axis, frequency decays as 1/L (hyperbola)."
    likely_errors:
      - id: l_error_default
        when: "true"
        status: warning
        text:
          es: "No confundir L con la longitud de onda lambda. L es la geometria; lambda es una propiedad del modo."
          en: "Do not confuse L with wavelength lambda. L is geometry; lambda is a mode property."
    next_step_rules:
      - id: l_next_default
        when: "true"
        status: ok
        text:
          es: "Con L y v, calcular f_n directamente."
          en: "With L and v, calculate f_n directly."

  n_modo:
    magnitude_type: index
    semantic_role:
      es: "Indice de modo que selecciona la frecuencia."
      en: "Mode index selecting the frequency."
    summary_rules:
      - id: n_summary_default
        when: "true"
        status: ok
        text:
          es: "[[n_modo]] identifica el armonico. n = 1 es la fundamental."
          en: "[[n_modo]] identifies the harmonic. n = 1 is the fundamental."
    physical_reading_rules:
      - id: n_reading_default
        when: "true"
        status: ok
        text:
          es: "A mayor n, mayor frecuencia y mas nodos en el patron modal."
          en: "Higher n means higher frequency and more nodes in the modal pattern."
    coherence_rules:
      - id: n_coherence_integer
        when: "true"
        status: ok
        text:
          es: "n debe ser entero positivo (n >= 1)."
          en: "n must be a positive integer (n >= 1)."
    model_validity_rules:
      - id: n_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo simple es preciso para modos bajos (n < L/(5d))."
          en: "The simple model is accurate for low modes (n < L/(5d))."
    graph_rules:
      - id: n_graph_default
        when: "true"
        status: ok
        text:
          es: "n es el eje x discreto natural del grafico de espectro."
          en: "n is the natural discrete x-axis of the spectrum graph."
    likely_errors:
      - id: n_error_default
        when: "true"
        status: warning
        text:
          es: "No empezar en n = 0 (modo rigido, no es vibracion elastica)."
          en: "Do not start at n = 0 (rigid body mode, not elastic vibration)."
    next_step_rules:
      - id: n_next_default
        when: "true"
        status: ok
        text:
          es: "Sustituir n en la formula de frecuencia para obtener f_n."
          en: "Substitute n in the frequency formula to obtain f_n."

cross_checks:
  - id: check_torsional_lower
    description:
      es: "f_torsional debe ser menor que f_longitudinal para el mismo n y L."
      en: "f_torsional must be less than f_longitudinal for the same n and L."
    when: "v_T > 0 && v_L > 0"
    expected: "v_T < v_L"
    on_fail:
      status: error
      text:
        es: "v_T >= v_L: incoherente para nu > -1. Revisar modulos elasticos."
        en: "v_T >= v_L: incoherent for nu > -1. Review elastic moduli."
  - id: check_harmonics_spacing
    description:
      es: "En libre-libre, f_n debe ser n * f_1."
      en: "In free-free, f_n must be n * f_1."
    when: "n_modo > 1"
    expected: "abs(f_n - n_modo * f_1) / f_1 < 0.01"
    on_fail:
      status: warning
      text:
        es: "Armonicos no equiespaciados: posible dispersion o error en la condicion de contorno."
        en: "Harmonics not equally spaced: possible dispersion or boundary condition error."
  - id: check_fn_positive
    description:
      es: "f_n debe ser positiva."
      en: "f_n must be positive."
    when: "true"
    expected: "f_n > 0"
    on_fail:
      status: error
      text:
        es: "Frecuencia negativa o nula: error de calculo."
        en: "Negative or zero frequency: calculation error."

error_patterns:
  - id: ep_vp_instead_of_vl
    detect_when: "v_L > 6500"
    text:
      es: "v_L inusualmente alta: verificar que no se uso la velocidad P del medio infinito."
      en: "v_L unusually high: check that the infinite medium P-wave velocity was not used."
  - id: ep_wrong_bc
    detect_when: "f_n / f_1 == 2 && boundary_condition == 'fijo-libre'"
    text:
      es: "En fijo-libre el segundo modo es 3f_1, no 2f_1."
      en: "In fixed-free the second mode is 3f_1, not 2f_1."

graph_binding:
  primary_graph: Coord
  x_axis: "n_modo"
  y_axis: "f_n"
  description:
    es: "Espectro de frecuencias naturales vs numero de modo para distintas condiciones de contorno."
    en: "Natural frequency spectrum vs mode number for various boundary conditions."

mini_graph:
  enabled: true
  preferred_type: Coord

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
