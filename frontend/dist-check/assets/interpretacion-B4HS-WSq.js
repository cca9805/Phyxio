const e=`version: 5
id: mecanicas_interpretacion
leaf_id: mecanicas
nombre:
  es: Interpretacion de ondas mecanicas
  en: Interpretation of mechanical waves
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: fundamentos
  parent_id: tipos-de-ondas
  ruta_relativa: fisica-clasica/ondas/fundamentos/tipos-de-ondas/mecanicas
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels: { es: Interpretacion, en: Interpretation }
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits: { max_blocks: 3, max_warnings: 2 }
dependencies:
  formulas: [onda_mecanica_velocidad, velocidad_cuerda]
  magnitudes: [A, lambda, f, v, T, mu]
global_context:
  physical_domain:
    es: "Ondas mecanicas en medios materiales con inercia y fuerza restauradora."
    en: "Mechanical waves in material media with inertia and restoring force."
  axis_convention:
    es: "El eje horizontal representa posicion en el medio; el vertical representa desplazamiento."
    en: "The horizontal axis represents position in the medium; the vertical axis represents displacement."
  standard_assumptions: [medio_uniforme, pequenas_perturbaciones, propagacion_periodica]
  standard_warnings:
    - "No confundir [[v]] con la rapidez local de una particula del medio."
    - "No usar el modelo de cuerda si el medio no tiene tension definida."
result_blocks:
  summary: { enabled: true, order: 1, title: { es: Resumen, en: Summary } }
  physical_reading: { enabled: true, order: 2, title: { es: Lectura fisica, en: Physical reading } }
  coherence: { enabled: true, order: 3, title: { es: Coherencia, en: Coherence } }
  model_validity: { enabled: true, order: 4, title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { enabled: true, order: 5, title: { es: Lectura del grafico, en: Graph reading } }
  likely_errors: { enabled: true, order: 6, title: { es: Errores probables, en: Likely errors } }
  next_step: { enabled: true, order: 7, title: { es: Siguiente paso, en: Next step } }
targets:
  v:
    magnitude_type: speed
    semantic_role: { es: rapidez del patron mecanico, en: speed of the mechanical pattern }
    summary_rules:
      - { id: v_sum, when: "true", status: ok, text: { es: "[[v]] indica cuanto avanza la perturbacion por segundo.", en: "[[v]] indicates how far the disturbance advances per second." } }
    physical_reading_rules:
      - { id: v_read, when: "true", status: ok, text: { es: "El valor de [[v]] se lee como respuesta del medio material.", en: "The value of [[v]] is read as the response of the material medium." } }
    coherence_rules:
      - { id: v_coh, when: "v > 0", status: ok, text: { es: "[[v]] positiva es necesaria para una onda propagante.", en: "Positive [[v]] is required for a propagating wave." } }
    model_validity_rules:
      - { id: v_val, when: "true", status: ok, text: { es: "La lectura vale si el medio es uniforme y la perturbacion pequena.", en: "The reading holds if the medium is uniform and the disturbance is small." } }
    graph_rules:
      - { id: v_graph, when: "true", status: ok, text: { es: "En Coord, [[v]] controla el avance del patron dibujado.", en: "In Coord, [[v]] controls the advance of the drawn pattern." } }
    likely_errors:
      - { id: v_err, when: "true", status: warning, text: { es: "No confundas [[v]] con la velocidad instantanea de cada punto.", en: "Do not confuse [[v]] with the instantaneous speed of each point." } }
    next_step_rules:
      - { id: v_next, when: "true", status: ok, text: { es: "Compara [[lambda]] y [[f]] para revisar la escala de propagacion.", en: "Compare [[lambda]] and [[f]] to review the propagation scale." } }
  lambda:
    magnitude_type: length
    semantic_role: { es: escala espacial de repeticion, en: spatial repetition scale }
    summary_rules:
      - { id: la_sum, when: "true", status: ok, text: { es: "[[lambda]] mide la separacion entre estados equivalentes.", en: "[[lambda]] measures separation between equivalent states." } }
    physical_reading_rules:
      - { id: la_read, when: "true", status: ok, text: { es: "Mayor [[lambda]] significa crestas mas separadas en el medio.", en: "Larger [[lambda]] means crests farther apart in the medium." } }
    coherence_rules:
      - { id: la_coh, when: "lambda > 0", status: ok, text: { es: "[[lambda]] debe ser positiva.", en: "[[lambda]] must be positive." } }
    model_validity_rules:
      - { id: la_val, when: "true", status: ok, text: { es: "Debe existir periodicidad espacial reconocible.", en: "Recognizable spatial periodicity must exist." } }
    graph_rules:
      - { id: la_graph, when: "true", status: ok, text: { es: "En el grafico se lee como distancia horizontal.", en: "In the graph it is read as horizontal distance." } }
    likely_errors:
      - { id: la_err, when: "true", status: warning, text: { es: "No midas [[lambda]] como altura.", en: "Do not measure [[lambda]] as height." } }
    next_step_rules:
      - { id: la_next, when: "true", status: ok, text: { es: "Usa [[lambda]] con [[f]] para obtener [[v]].", en: "Use [[lambda]] with [[f]] to obtain [[v]]." } }
  f:
    magnitude_type: frequency
    semantic_role: { es: escala temporal de oscilacion, en: temporal oscillation scale }
    summary_rules:
      - { id: f_sum, when: "true", status: ok, text: { es: "[[f]] cuenta oscilaciones por segundo.", en: "[[f]] counts oscillations per second." } }
    physical_reading_rules:
      - { id: f_read, when: "true", status: ok, text: { es: "Mayor [[f]] implica mas oscilaciones locales cada segundo.", en: "Larger [[f]] means more local oscillations each second." } }
    coherence_rules:
      - { id: f_coh, when: "f > 0", status: ok, text: { es: "[[f]] positiva mantiene una onda periodica.", en: "Positive [[f]] keeps a periodic wave." } }
    model_validity_rules:
      - { id: f_val, when: "true", status: ok, text: { es: "La frecuencia debe ser estable durante varias oscilaciones.", en: "Frequency must be stable over several oscillations." } }
    graph_rules:
      - { id: f_graph, when: "true", status: ok, text: { es: "[[f]] se asocia a la rapidez temporal del movimiento local.", en: "[[f]] is tied to the temporal pace of local motion." } }
    likely_errors:
      - { id: f_err, when: "true", status: warning, text: { es: "No leas [[f]] como amplitud.", en: "Do not read [[f]] as amplitude." } }
    next_step_rules:
      - { id: f_next, when: "true", status: ok, text: { es: "Relaciona [[f]] con [[lambda]] antes de interpretar [[v]].", en: "Relate [[f]] to [[lambda]] before interpreting [[v]]." } }
  T:
    magnitude_type: force
    semantic_role: { es: restauracion en cuerda, en: restoration on a string }
    summary_rules:
      - { id: T_sum, when: "true", status: ok, text: { es: "[[T]] representa la tension que restaura la cuerda.", en: "[[T]] represents the tension that restores the string." } }
    physical_reading_rules:
      - { id: T_read, when: "true", status: ok, text: { es: "Mayor [[T]] suele aumentar [[v]] en una cuerda ideal.", en: "Larger [[T]] usually increases [[v]] on an ideal string." } }
    coherence_rules:
      - { id: T_coh, when: "T > 0", status: ok, text: { es: "[[T]] debe ser positiva.", en: "[[T]] must be positive." } }
    model_validity_rules:
      - { id: T_val, when: "true", status: ok, text: { es: "Solo aplica si el medio puede modelarse como cuerda tensa.", en: "It applies only if the medium can be modeled as a tense string." } }
    graph_rules:
      - { id: T_graph, when: "true", status: ok, text: { es: "[[T]] modifica la rapidez del patron, no la etiqueta horizontal por si sola.", en: "[[T]] modifies pattern speed, not the horizontal label by itself." } }
    likely_errors:
      - { id: T_err, when: "true", status: warning, text: { es: "En este leaf [[T]] no es periodo.", en: "In this leaf [[T]] is not period." } }
    next_step_rules:
      - { id: T_next, when: "true", status: ok, text: { es: "Compara [[T]] con [[mu]] para leer la velocidad de cuerda.", en: "Compare [[T]] with [[mu]] to read string speed." } }
  mu:
    magnitude_type: density
    semantic_role: { es: inercia lineal del medio, en: linear inertia of the medium }
    summary_rules:
      - { id: mu_sum, when: "true", status: ok, text: { es: "[[mu]] mide cuanta masa tiene la cuerda por longitud.", en: "[[mu]] measures how much mass the string has per length." } }
    physical_reading_rules:
      - { id: mu_read, when: "true", status: ok, text: { es: "Mayor [[mu]] reduce [[v]] si [[T]] no cambia.", en: "Larger [[mu]] lowers [[v]] if [[T]] does not change." } }
    coherence_rules:
      - { id: mu_coh, when: "mu > 0", status: ok, text: { es: "[[mu]] debe ser positiva.", en: "[[mu]] must be positive." } }
    model_validity_rules:
      - { id: mu_val, when: "true", status: ok, text: { es: "Debe representar una cuerda uniforme.", en: "It must represent a uniform string." } }
    graph_rules:
      - { id: mu_graph, when: "true", status: ok, text: { es: "[[mu]] cambia la inercia del medio que el grafico resume.", en: "[[mu]] changes the medium inertia summarized by the graph." } }
    likely_errors:
      - { id: mu_err, when: "true", status: warning, text: { es: "No confundas [[mu]] con masa total.", en: "Do not confuse [[mu]] with total mass." } }
    next_step_rules:
      - { id: mu_next, when: "true", status: ok, text: { es: "Usa [[mu]] junto con [[T]] para revisar la validez del modelo de cuerda.", en: "Use [[mu]] with [[T]] to review the string-model validity." } }
cross_checks:
  - id: propagacion_y_medio
    formulas: [onda_mecanica_velocidad, velocidad_cuerda]
    message: { es: "[[v]] debe ser coherente con la escala [[lambda]]-[[f]] y con el medio.", en: "[[v]] must be coherent with the [[lambda]]-[[f]] scale and with the medium." }
error_patterns:
  - id: velocidad_particula
    detect_when: "v interpreted as local particle speed"
    message: { es: "La rapidez de propagacion no es la rapidez de cada punto del medio.", en: "Propagation speed is not the speed of each point of the medium." }
graph_binding:
  preferred_type: Coord
  variables: [A, lambda, f, v, T, mu]
  reading: { es: "El grafico muestra desplazamiento del medio y avance del patron.", en: "The graph shows medium displacement and pattern advance." }
mini_graph: { enabled: true, type: Coord, target: v }
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode: { max_sections: 2, priority: [summary, likely_errors] }
  extended_mode: { show_all: true }
`;export{e as default};
