const e=`version: 1.0.0
id: extensivas-interpretacion
leaf_id: extensivas
nombre: { es: Interpretacion de variables extensivas, en: Extensive variable interpretation }
scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: fundamentos
  parent_id: variables-termodinamicas
  ruta_relativa: fisica-clasica/termodinamica/fundamentos/variables-termodinamicas/extensivas
ui:
  enabled: true
  display_modes: { calculator_inline: true, graph_inline: true, dedicated_tab: true, modal: false }
  labels:
    es: { summary: Resumen fisico, reading: Lectura del resultado, coherence: Coherencia, validity: Validez del modelo, graph: Lectura grafica, errors: Errores probables, next_step: Siguiente paso }
    en: { summary: Physical summary, reading: Result reading, coherence: Coherence, validity: Model validity, graph: Graph reading, errors: Likely errors, next_step: Next step }
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits: { max_summary_chars: 220, max_warnings: 2, max_suggestions: 2 }
dependencies:
  formulas: [criterio_extensividad, aditividad_extensiva, densidad, magnitud_especifica]
  magnitudes: [X_ext, lambda_escala, U, S, V, m, N, rho, x_esp]
global_context:
  physical_domain: { es: Clasificacion de variables por escala del sistema, en: Classification of variables by system scale }
  axis_convention: { es: El eje horizontal representa factor de escala del sistema., en: The horizontal axis represents system scaling factor. }
  standard_assumptions: [mismo estado intensivo, subsistemas compatibles]
  standard_warnings: [no comparar muestras distintas solo con extensivas]
output_contract:
  format: structured_text
  include_emojis: true
  max_lines_per_section: 5
  truncate_long_values: true
  decimal_places: 2
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
result_blocks:
  summary: { enabled: true, priority: 1, title: { es: Resumen fisico, en: Physical summary } }
  physical_reading: { enabled: true, priority: 2, title: { es: Lectura fisica, en: Physical reading } }
  coherence: { enabled: true, priority: 3, title: { es: Coherencia, en: Coherence } }
  model_validity: { enabled: true, priority: 4, title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { enabled: true, priority: 5, title: { es: Lectura grafica, en: Graph reading } }
  likely_errors: { enabled: true, priority: 6, title: { es: Errores probables, en: Likely errors } }
  next_step: { enabled: true, priority: 7, title: { es: Siguiente paso, en: Next step } }
targets:
  X_ext:
    magnitude_type: X_ext
    semantic_role: { es: Inventario extensivo generico, en: Generic extensive inventory }
    summary_rules: [{ id: resumen_x, when: "true", status: info, text: { es: "[[X_ext]] crece con el tamano del sistema.", en: "[[X_ext]] grows with system size." } }]
    physical_reading_rules: [{ id: lectura_x, when: "true", status: info, text: { es: "Duplicar el sistema duplica el inventario.", en: "Duplicating the system duplicates the inventory." } }]
    coherence_rules: [{ id: coherencia_x, when: "true", status: success, text: { es: "Debe sumarse solo con la misma magnitud.", en: "It must be added only with the same magnitude." } }]
    model_validity_rules: [{ id: validez_x, when: "true", status: info, text: { es: "Requiere copias equivalentes y referencias compatibles.", en: "Requires equivalent copies and compatible references." } }]
    graph_rules: [{ id: grafico_x, when: "true", status: info, text: { es: "La recta de [[X_ext]] sube linealmente con la escala.", en: "The [[X_ext]] line rises linearly with scale." } }]
    likely_errors: [{ id: error_x, when: "true", status: warning, text: { es: "No confundas extensiva con valor grande.", en: "Do not confuse extensive with large value." } }]
    next_step_rules: [{ id: siguiente_x, when: "true", status: info, text: { es: "Aplica el test de duplicacion.", en: "Apply the duplication test." } }]
  lambda_escala:
    magnitude_type: lambda_escala
    semantic_role: { es: Factor que multiplica el tamano del sistema, en: Factor multiplying system size }
    summary_rules: [{ id: resumen_l, when: "true", status: info, text: { es: "[[lambda_escala]] controla cuantas copias equivalentes se juntan.", en: "[[lambda_escala]] controls how many equivalent copies are joined." } }]
    physical_reading_rules: [{ id: lectura_l, when: "true", status: info, text: { es: "Si vale 2, una extensiva ideal se duplica.", en: "If it is 2, an ideal extensive doubles." } }]
    coherence_rules: [{ id: coherencia_l, when: "true", status: success, text: { es: "Debe ser positivo para una escala fisica.", en: "It must be positive for physical scaling." } }]
    model_validity_rules: [{ id: validez_l, when: "true", status: info, text: { es: "No debe cambiar el estado intensivo.", en: "It must not change the intensive state." } }]
    graph_rules: [{ id: grafico_l, when: "true", status: info, text: { es: "Es el eje horizontal del grafico.", en: "It is the graph horizontal axis." } }]
    likely_errors: [{ id: error_l, when: "true", status: warning, text: { es: "No lo interpretes como temperatura.", en: "Do not interpret it as temperature." } }]
    next_step_rules: [{ id: siguiente_l, when: "true", status: info, text: { es: "Compara el valor escalado con [[X_ext]].", en: "Compare the scaled value with [[X_ext]]." } }]
  rho:
    magnitude_type: rho
    semantic_role: { es: Cociente normalizado de extensivas, en: Normalized ratio of extensives }
    summary_rules: [{ id: resumen_rho, when: "true", status: info, text: { es: "[[rho]] no crece al duplicar una muestra homogenea.", en: "[[rho]] does not grow when a homogeneous sample is duplicated." } }]
    physical_reading_rules: [{ id: lectura_rho, when: "true", status: info, text: { es: "El cociente [[m]]/[[V]] elimina la escala.", en: "The ratio [[m]]/[[V]] removes scale." } }]
    coherence_rules: [{ id: coherencia_rho, when: "true", status: success, text: { es: "Requiere volumen positivo.", en: "Requires positive volume." } }]
    model_validity_rules: [{ id: validez_rho, when: "true", status: info, text: { es: "Es media si la muestra no es homogenea.", en: "It is an average if the sample is not homogeneous." } }]
    graph_rules: [{ id: grafico_rho, when: "true", status: info, text: { es: "Aparece como linea casi horizontal al escalar.", en: "It appears as an almost horizontal line when scaling." } }]
    likely_errors: [{ id: error_rho, when: "true", status: warning, text: { es: "No clasifiques [[rho]] como extensiva por contener [[m]].", en: "Do not classify [[rho]] as extensive because it contains [[m]]." } }]
    next_step_rules: [{ id: siguiente_rho, when: "true", status: info, text: { es: "Comprueba si numerador y denominador escalan juntos.", en: "Check whether numerator and denominator scale together." } }]
  x_esp:
    magnitude_type: x_esp
    semantic_role: { es: Propiedad especifica normalizada, en: Normalized specific property }
    summary_rules: [{ id: resumen_xesp, when: "true", status: info, text: { es: "[[x_esp]] permite comparar muestras de distinto tamano.", en: "[[x_esp]] allows comparison of different-size samples." } }]
    physical_reading_rules: [{ id: lectura_xesp, when: "true", status: info, text: { es: "Divide inventario por masa.", en: "It divides inventory by mass." } }]
    coherence_rules: [{ id: coherencia_xesp, when: "true", status: success, text: { es: "Requiere [[m]] positiva.", en: "Requires positive [[m]]." } }]
    model_validity_rules: [{ id: validez_xesp, when: "true", status: info, text: { es: "Compara estados si la referencia de [[X_ext]] es comun.", en: "Compares states if the [[X_ext]] reference is common." } }]
    graph_rules: [{ id: grafico_xesp, when: "true", status: info, text: { es: "Se mantiene constante en copias equivalentes.", en: "It remains constant for equivalent copies." } }]
    likely_errors: [{ id: error_xesp, when: "true", status: warning, text: { es: "No lo sumes como si fuera un total.", en: "Do not add it as if it were a total." } }]
    next_step_rules: [{ id: siguiente_xesp, when: "true", status: info, text: { es: "Multiplica por [[m]] si necesitas recuperar el total.", en: "Multiply by [[m]] if you need the total." } }]
  U:
    magnitude_type: U
    semantic_role: { es: Energia interna total, en: Total internal energy }
    summary_rules: [{ id: resumen_u, when: "true", status: info, text: { es: "[[U]] es inventario energetico total.", en: "[[U]] is total energy inventory." } }]
    physical_reading_rules: [{ id: lectura_u, when: "true", status: info, text: { es: "Crece con la cantidad de muestra si el estado es equivalente.", en: "It grows with sample amount if state is equivalent." } }]
    coherence_rules: [{ id: coherencia_u, when: "true", status: success, text: { es: "Debe usar referencia energetica comun.", en: "Must use a common energy reference." } }]
    model_validity_rules: [{ id: validez_u, when: "true", status: info, text: { es: "Puede requerir correcciones de superficie en sistemas pequenos.", en: "May require surface corrections in small systems." } }]
    graph_rules: [{ id: grafico_u, when: "true", status: info, text: { es: "Escala linealmente con [[lambda_escala]].", en: "Scales linearly with [[lambda_escala]]." } }]
    likely_errors: [{ id: error_u, when: "true", status: warning, text: { es: "No compares temperatura usando solo [[U]].", en: "Do not compare temperature using only [[U]]." } }]
    next_step_rules: [{ id: siguiente_u, when: "true", status: info, text: { es: "Normaliza por [[m]] para comparar muestras.", en: "Normalize by [[m]] to compare samples." } }]
  S:
    magnitude_type: S
    semantic_role: { es: Entropia total, en: Total entropy }
    summary_rules: [{ id: resumen_s, when: "true", status: info, text: { es: "[[S]] total es extensiva.", en: "Total [[S]] is extensive." } }]
    physical_reading_rules: [{ id: lectura_s, when: "true", status: info, text: { es: "Se suma para subsistemas compatibles.", en: "It adds for compatible subsystems." } }]
    coherence_rules: [{ id: coherencia_s, when: "true", status: success, text: { es: "Usa entropia total, no especifica.", en: "Use total entropy, not specific entropy." } }]
    model_validity_rules: [{ id: validez_s, when: "true", status: info, text: { es: "Cuidado con correlaciones o referencias.", en: "Careful with correlations or references." } }]
    graph_rules: [{ id: grafico_s, when: "true", status: info, text: { es: "Crece con el numero de copias.", en: "Grows with number of copies." } }]
    likely_errors: [{ id: error_s, when: "true", status: warning, text: { es: "No sumes entropias especificas como totales.", en: "Do not add specific entropies as totals." } }]
    next_step_rules: [{ id: siguiente_s, when: "true", status: info, text: { es: "Verifica la unidad J/K.", en: "Check the unit J/K." } }]
  V:
    magnitude_type: V
    semantic_role: { es: Volumen total, en: Total volume }
    summary_rules: [{ id: resumen_v, when: "true", status: info, text: { es: "[[V]] cuenta extension espacial total.", en: "[[V]] counts total spatial extent." } }]
    physical_reading_rules: [{ id: lectura_v, when: "true", status: info, text: { es: "En sistemas ideales se suma al juntar partes.", en: "In ideal systems it adds when parts are joined." } }]
    coherence_rules: [{ id: coherencia_v, when: "true", status: success, text: { es: "Debe ser positivo.", en: "Must be positive." } }]
    model_validity_rules: [{ id: validez_v, when: "true", status: info, text: { es: "Mezclas no ideales pueden cambiar volumen.", en: "Non-ideal mixtures may change volume." } }]
    graph_rules: [{ id: grafico_v, when: "true", status: info, text: { es: "Escala junto con [[m]] en muestras homogeneas.", en: "Scales together with [[m]] in homogeneous samples." } }]
    likely_errors: [{ id: error_v, when: "true", status: warning, text: { es: "No confundas [[V]] con volumen especifico.", en: "Do not confuse [[V]] with specific volume." } }]
    next_step_rules: [{ id: siguiente_v, when: "true", status: info, text: { es: "Usa [[rho]] para normalizar masa por volumen.", en: "Use [[rho]] to normalize mass by volume." } }]
  m:
    magnitude_type: m
    semantic_role: { es: Masa total, en: Total mass }
    summary_rules: [{ id: resumen_m, when: "true", status: info, text: { es: "[[m]] es la extensiva material basica.", en: "[[m]] is the basic material extensive." } }]
    physical_reading_rules: [{ id: lectura_m, when: "true", status: info, text: { es: "Se suma al juntar materia.", en: "It adds when matter is joined." } }]
    coherence_rules: [{ id: coherencia_m, when: "true", status: success, text: { es: "No negativa.", en: "Non-negative." } }]
    model_validity_rules: [{ id: validez_m, when: "true", status: info, text: { es: "Conservada en procesos clasicos sin reaccion nuclear.", en: "Conserved in classical processes without nuclear reaction." } }]
    graph_rules: [{ id: grafico_m, when: "true", status: info, text: { es: "Linea extensiva proporcional a escala.", en: "Extensive line proportional to scale." } }]
    likely_errors: [{ id: error_m, when: "true", status: warning, text: { es: "No uses [[m]] sola para comparar estados.", en: "Do not use [[m]] alone to compare states." } }]
    next_step_rules: [{ id: siguiente_m, when: "true", status: info, text: { es: "Divide por [[V]] o por cantidad si necesitas propiedad.", en: "Divide by [[V]] or amount if you need a property." } }]
`;export{e as default};
