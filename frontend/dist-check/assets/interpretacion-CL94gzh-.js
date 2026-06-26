const e=`version: 5
id: electromagneticas_interpretacion
leaf_id: electromagneticas
nombre:
  es: Interpretacion de ondas electromagneticas
  en: Interpretation of electromagnetic waves
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: fundamentos
  parent_id: tipos-de-ondas
  ruta_relativa: fisica-clasica/ondas/fundamentos/tipos-de-ondas/electromagneticas
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
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_blocks: 3
    max_warnings: 2
dependencies:
  formulas: [onda_em_velocidad, relacion_campos_em]
  magnitudes: [E0, B0, c, lambda, f]
global_context:
  physical_domain:
    es: "Ondas electromagneticas planas en vacio o aire ideal."
    en: "Plane electromagnetic waves in vacuum or ideal air."
  axis_convention:
    es: "La propagacion se lee en el eje horizontal; los campos son transversales entre si."
    en: "Propagation is read on the horizontal axis; the fields are mutually transverse."
  standard_assumptions:
    - "onda plana"
    - "campos transversales"
    - "lejos de fuentes"
    - "medio no dispersivo ideal"
  standard_warnings:
    - "No cambiar [[c]] por variar [[f]] si el medio no cambia."
    - "No tratar [[E0]] y [[B0]] como amplitudes independientes en vacio."
result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura del grafico
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step
targets:
  c:
    magnitude_type: speed
    semantic_role:
      es: rapidez de propagacion en vacio
      en: propagation speed in vacuum
    summary_rules:
      - id: c_sum_default
        when: "true"
        status: ok
        text:
          es: "[[c]] resume la rapidez con la que avanza la fase electromagnetica."
          en: "[[c]] summarizes how fast electromagnetic phase advances."
    physical_reading_rules:
      - id: c_read_default
        when: "true"
        status: ok
        text:
          es: "Un valor cercano a \`3 x 10⁸ m/s\` indica una lectura compatible con vacio."
          en: "A value near \`3 x 10⁸ m/s\` indicates a reading compatible with vacuum."
    coherence_rules:
      - id: c_coh_positive
        when: "c > 0"
        status: ok
        text:
          es: "[[c]] positiva conserva el sentido de rapidez."
          en: "Positive [[c]] preserves the meaning of speed."
      - id: c_coh_default
        when: "true"
        status: warning
        text:
          es: "Comprueba unidades si [[c]] queda lejos del orden de la luz."
          en: "Check units if [[c]] is far from the order of light."
    model_validity_rules:
      - id: c_val_default
        when: "true"
        status: ok
        text:
          es: "La lectura es de vacio; en vidrio, agua o plasma se necesita otro parametro de velocidad."
          en: "The reading is for vacuum; glass, water, or plasma require another speed parameter."
    graph_rules:
      - id: c_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[c]] aparece como avance de fase asociado a [[lambda]] y [[f]]."
          en: "In the graph, [[c]] appears as phase advance tied to [[lambda]] and [[f]]."
    likely_errors:
      - id: c_err_default
        when: "true"
        status: warning
        text:
          es: "No hagas depender [[c]] de la frecuencia si el medio sigue siendo vacio."
          en: "Do not make [[c]] depend on frequency if the medium remains vacuum."
    next_step_rules:
      - id: c_next_default
        when: "true"
        status: ok
        text:
          es: "Ahora compara [[lambda]] y [[f]] para identificar la banda espectral."
          en: "Now compare [[lambda]] and [[f]] to identify the spectral band."
  lambda:
    magnitude_type: length
    semantic_role:
      es: escala espacial de repeticion
      en: spatial repetition scale
    summary_rules:
      - id: la_sum_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] indica la separacion entre estados equivalentes de la onda."
          en: "[[lambda]] indicates the separation between equivalent wave states."
    physical_reading_rules:
      - id: la_read_default
        when: "true"
        status: ok
        text:
          es: "Una [[lambda]] grande corresponde a menor [[f]] si [[c]] se mantiene."
          en: "A large [[lambda]] corresponds to lower [[f]] if [[c]] is fixed."
    coherence_rules:
      - id: la_coh_positive
        when: "lambda > 0"
        status: ok
        text:
          es: "[[lambda]] positiva define una distancia fisica entre repeticiones."
          en: "Positive [[lambda]] defines a physical distance between repetitions."
    model_validity_rules:
      - id: la_val_default
        when: "true"
        status: ok
        text:
          es: "La relacion con [[f]] vale mientras la onda se trate como plana y no dispersiva."
          en: "Its relation with [[f]] holds while the wave is treated as plane and nondispersive."
    graph_rules:
      - id: la_graph_default
        when: "true"
        status: ok
        text:
          es: "En Coord, [[lambda]] se ve como distancia horizontal entre crestas."
          en: "In Coord, [[lambda]] is seen as horizontal distance between crests."
    likely_errors:
      - id: la_err_default
        when: "true"
        status: warning
        text:
          es: "No confundas [[lambda]] con la distancia total recorrida por un pulso largo."
          en: "Do not confuse [[lambda]] with the total distance traveled by a long pulse."
    next_step_rules:
      - id: la_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[lambda]] junto con [[f]] para comprobar la escala de [[c]]."
          en: "Use [[lambda]] with [[f]] to check the scale of [[c]]."
  f:
    magnitude_type: frequency
    semantic_role:
      es: escala temporal de oscilacion
      en: temporal oscillation scale
    summary_rules:
      - id: f_sum_default
        when: "true"
        status: ok
        text:
          es: "[[f]] cuenta oscilaciones por segundo."
          en: "[[f]] counts oscillations per second."
    physical_reading_rules:
      - id: f_read_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[f]] significa menor [[lambda]] en vacio, no mayor rapidez."
          en: "Higher [[f]] means smaller [[lambda]] in vacuum, not higher speed."
    coherence_rules:
      - id: f_coh_positive
        when: "f > 0"
        status: ok
        text:
          es: "[[f]] positiva conserva una oscilacion fisica."
          en: "Positive [[f]] preserves a physical oscillation."
    model_validity_rules:
      - id: f_val_default
        when: "true"
        status: ok
        text:
          es: "La frecuencia se mantiene al pasar de un medio a otro ideal; cambia la longitud de onda."
          en: "Frequency remains across ideal media; wavelength changes."
    graph_rules:
      - id: f_graph_default
        when: "true"
        status: ok
        text:
          es: "En una vista temporal, [[f]] aumenta la densidad de oscilaciones."
          en: "In a temporal view, [[f]] increases oscillation density."
    likely_errors:
      - id: f_err_default
        when: "true"
        status: warning
        text:
          es: "Evita leer [[f]] como fuerza o como amplitud."
          en: "Avoid reading [[f]] as force or amplitude."
    next_step_rules:
      - id: f_next_default
        when: "true"
        status: ok
        text:
          es: "Relaciona [[f]] con la banda electromagnetica que representa."
          en: "Relate [[f]] to the electromagnetic band it represents."
  E0:
    magnitude_type: field_amplitude
    semantic_role:
      es: amplitud electrica transversal
      en: transverse electric amplitude
    summary_rules:
      - id: e0_sum_default
        when: "true"
        status: ok
        text:
          es: "[[E0]] mide la escala del campo electrico que oscila."
          en: "[[E0]] measures the scale of the oscillating electric field."
    physical_reading_rules:
      - id: e0_read_default
        when: "true"
        status: ok
        text:
          es: "Un [[E0]] mayor representa una onda con campo electrico mas intenso."
          en: "A larger [[E0]] represents a wave with a stronger electric field."
    coherence_rules:
      - id: e0_coh_nonnegative
        when: "E0 >= 0"
        status: ok
        text:
          es: "[[E0]] se introduce como amplitud no negativa."
          en: "[[E0]] is entered as a nonnegative amplitude."
    model_validity_rules:
      - id: e0_val_default
        when: "true"
        status: ok
        text:
          es: "La relacion con [[B0]] presupone onda plana lejos de fuentes."
          en: "Its relation with [[B0]] assumes a plane wave far from sources."
    graph_rules:
      - id: e0_graph_default
        when: "true"
        status: ok
        text:
          es: "En Coord, [[E0]] controla la altura de la curva de campo electrico."
          en: "In Coord, [[E0]] controls the height of the electric-field curve."
    likely_errors:
      - id: e0_err_default
        when: "true"
        status: warning
        text:
          es: "No confundas [[E0]] con energia total transportada."
          en: "Do not confuse [[E0]] with total transported energy."
    next_step_rules:
      - id: e0_next_default
        when: "true"
        status: ok
        text:
          es: "Comprueba si [[B0]] mantiene la proporcion exigida por [[c]]."
          en: "Check whether [[B0]] keeps the proportion required by [[c]]."
  B0:
    magnitude_type: field_amplitude
    semantic_role:
      es: amplitud magnetica transversal
      en: transverse magnetic amplitude
    summary_rules:
      - id: b0_sum_default
        when: "true"
        status: ok
        text:
          es: "[[B0]] mide la escala del campo magnetico acoplado."
          en: "[[B0]] measures the scale of the coupled magnetic field."
    physical_reading_rules:
      - id: b0_read_default
        when: "true"
        status: ok
        text:
          es: "[[B0]] suele ser numericamente pequeno porque se multiplica por [[c]] para comparar con [[E0]]."
          en: "[[B0]] is often numerically small because it is multiplied by [[c]] to compare with [[E0]]."
    coherence_rules:
      - id: b0_coh_nonnegative
        when: "B0 >= 0"
        status: ok
        text:
          es: "[[B0]] se introduce como amplitud no negativa."
          en: "[[B0]] is entered as a nonnegative amplitude."
    model_validity_rules:
      - id: b0_val_default
        when: "true"
        status: ok
        text:
          es: "La proporcion con [[E0]] cambia si el medio no se aproxima a vacio."
          en: "The proportion with [[E0]] changes if the medium is not approximated as vacuum."
    graph_rules:
      - id: b0_graph_default
        when: "true"
        status: ok
        text:
          es: "El grafico debe representar [[B0]] transversal y sincronizado con [[E0]]."
          en: "The graph should represent [[B0]] transverse and synchronized with [[E0]]."
    likely_errors:
      - id: b0_err_default
        when: "true"
        status: warning
        text:
          es: "No dibujes [[B0]] paralelo a [[E0]] en una onda plana."
          en: "Do not draw [[B0]] parallel to [[E0]] in a plane wave."
    next_step_rules:
      - id: b0_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[B0]] para verificar la lectura de acoplamiento electromagnetico."
          en: "Use [[B0]] to verify the electromagnetic coupling reading."
cross_checks:
  - id: campos_ratio
    formulas: [relacion_campos_em]
    message:
      es: "La razon entre [[E0]] y [[B0]] debe recuperar una rapidez compatible con [[c]]."
      en: "The ratio between [[E0]] and [[B0]] should recover a speed compatible with [[c]]."
error_patterns:
  - id: velocidad_por_frecuencia
    detect_when: "c changes because f changes"
    message:
      es: "La frecuencia no cambia la rapidez en vacio."
      en: "Frequency does not change speed in vacuum."
graph_binding:
  preferred_type: Coord
  variables: [E0, B0, lambda, f, c]
  reading:
    es: "El grafico coordina amplitud electrica, escala espacial y propagacion."
    en: "The graph coordinates electric amplitude, spatial scale, and propagation."
mini_graph:
  enabled: true
  type: Coord
  target: E0
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
