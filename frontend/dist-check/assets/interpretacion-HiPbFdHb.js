const e=`version: 1.0.0\r
id: intensivas-interpretacion\r
leaf_id: intensivas\r
nombre:\r
  es: Interpretacion de variables intensivas\r
  en: Intensive variable interpretation\r
scope:\r
  area: fisica-clasica\r
  bloque: termodinamica\r
  subbloque: fundamentos\r
  parent_id: variables-termodinamicas\r
  ruta_relativa: fisica-clasica/termodinamica/fundamentos/variables-termodinamicas/intensivas\r
ui:\r
  enabled: true\r
  display_modes:\r
    calculator_inline: true\r
    graph_inline: true\r
    dedicated_tab: true\r
    modal: false\r
  labels:\r
    es:\r
      summary: Resumen fisico\r
      reading: Lectura del resultado\r
      coherence: Coherencia\r
      validity: Validez del modelo\r
      graph: Lectura grafica\r
      errors: Errores probables\r
      next_step: Siguiente paso\r
    en:\r
      summary: Physical summary\r
      reading: Result reading\r
      coherence: Coherence\r
      validity: Model validity\r
      graph: Graph reading\r
      errors: Likely errors\r
      next_step: Next step\r
  priority_order:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
  inline_limits:\r
    max_summary_chars: 220\r
    max_warnings: 2\r
    max_suggestions: 2\r
dependencies:\r
  formulas:\r
  - criterio_intensividad\r
  - igualdad_equilibrio_intensivo\r
  - densidad_intensiva\r
  - promedio_ponderado_intensivo\r
  magnitudes:\r
  - X_int\r
  - lambda_escala\r
  - T\r
  - P\r
  - rho\r
  - m\r
  - V\r
  - X_A\r
  - X_B\r
global_context:\r
  physical_domain:\r
    es: Clasificacion de variables por independencia de escala\r
    en: Classification of variables by scale independence\r
  axis_convention:\r
    es: El eje horizontal representa factor de escala del sistema.\r
    en: The horizontal axis represents system scaling factor.\r
  standard_assumptions:\r
  - mismo estado local\r
  - muestra uniforme\r
  standard_warnings:\r
  - no sumar intensivas\r
  - declarar ponderacion\r
output_contract:\r
  format: structured_text\r
  include_emojis: true\r
  max_lines_per_section: 5\r
  truncate_long_values: true\r
  decimal_places: 2\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
result_blocks:\r
  summary:\r
    enabled: true\r
    priority: 1\r
    title:\r
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    enabled: true\r
    priority: 2\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    enabled: true\r
    priority: 3\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    enabled: true\r
    priority: 4\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    enabled: true\r
    priority: 5\r
    title:\r
      es: Lectura grafica\r
      en: Graph reading\r
  likely_errors:\r
    enabled: true\r
    priority: 6\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    enabled: true\r
    priority: 7\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  X_int:\r
    magnitude_type: X_int\r
    semantic_role:\r
      es: Variable intensiva generica\r
      en: Generic intensive variable\r
    summary_rules:\r
    - id: resumen_X_int\r
      when: 'true'\r
      status: info\r
      text:\r
        es: '[[X_int]] se interpreta dentro de la distincion entre estado intensivo y cantidad total.'\r
        en: '[[X_int]] is interpreted within the distinction between intensive state and total amount.'\r
    physical_reading_rules:\r
    - id: lectura_X_int\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Una diferencia de [[X_int]] puede indicar una tendencia fisica: transferencia, empuje, flujo o necesidad de ponderar cantidades.'\r
        en: 'A difference in [[X_int]] can indicate a physical tendency: transfer, push, flow, or the need to weight amounts.'\r
    coherence_rules:\r
    - id: coherencia_X_int\r
      when: 'true'\r
      status: success\r
      text:\r
        es: '[[X_int]] debe compararse con la misma referencia de sistema y con unidades compatibles.'\r
        en: '[[X_int]] must be compared with the same system reference and compatible units.'\r
    model_validity_rules:\r
    - id: validez_X_int\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modelo es valido si la muestra es uniforme o si se declara una media fisicamente justificada.\r
        en: The model is valid if the sample is uniform or a physically justified mean is stated.\r
    graph_rules:\r
    - id: grafico_X_int\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, una intensiva se reconoce porque la curva permanece estable al aumentar [[lambda_escala]].\r
        en: In the graph, an intensive variable is recognized because the curve stays stable as [[lambda_escala]] increases.\r
    likely_errors:\r
    - id: error_X_int\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir [[X_int]] con inventario total es un error tipico; tambien lo es sumar lecturas intensivas sin ponderacion.\r
        en: Confusing [[X_int]] with total inventory is a typical error; adding intensive readings without weighting is another.\r
    next_step_rules:\r
    - id: siguiente_X_int\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: aplicar el test de escalado y decidir si usar una intensiva, una extensiva o una propiedad normalizada.'\r
        en: 'Next step: apply the scaling test and decide whether to use an intensive, an extensive, or a normalized property.'\r
  lambda_escala:\r
    magnitude_type: lambda_escala\r
    semantic_role:\r
      es: Control de tamano del sistema\r
      en: System size control\r
    summary_rules:\r
    - id: resumen_lambda_escala\r
      when: 'true'\r
      status: info\r
      text:\r
        es: '[[lambda_escala]] se interpreta dentro de la distincion entre estado intensivo y cantidad total.'\r
        en: '[[lambda_escala]] is interpreted within the distinction between intensive state and total amount.'\r
    physical_reading_rules:\r
    - id: lectura_lambda_escala\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Una diferencia de [[lambda_escala]] puede indicar una tendencia fisica: transferencia, empuje, flujo o necesidad de ponderar cantidades.'\r
        en: 'A difference in [[lambda_escala]] can indicate a physical tendency: transfer, push, flow, or the need to weight amounts.'\r
    coherence_rules:\r
    - id: coherencia_lambda_escala\r
      when: 'true'\r
      status: success\r
      text:\r
        es: '[[lambda_escala]] debe compararse con la misma referencia de sistema y con unidades compatibles.'\r
        en: '[[lambda_escala]] must be compared with the same system reference and compatible units.'\r
    model_validity_rules:\r
    - id: validez_lambda_escala\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modelo es valido si la muestra es uniforme o si se declara una media fisicamente justificada.\r
        en: The model is valid if the sample is uniform or a physically justified mean is stated.\r
    graph_rules:\r
    - id: grafico_lambda_escala\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, una intensiva se reconoce porque la curva permanece estable al aumentar [[lambda_escala]].\r
        en: In the graph, an intensive variable is recognized because the curve stays stable as [[lambda_escala]] increases.\r
    likely_errors:\r
    - id: error_lambda_escala\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir [[lambda_escala]] con inventario total es un error tipico; tambien lo es sumar lecturas intensivas sin ponderacion.\r
        en: Confusing [[lambda_escala]] with total inventory is a typical error; adding intensive readings without weighting is another.\r
    next_step_rules:\r
    - id: siguiente_lambda_escala\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: aplicar el test de escalado y decidir si usar una intensiva, una extensiva o una propiedad normalizada.'\r
        en: 'Next step: apply the scaling test and decide whether to use an intensive, an extensive, or a normalized property.'\r
  T:\r
    magnitude_type: T\r
    semantic_role:\r
      es: Lectura de equilibrio termico\r
      en: Thermal equilibrium reading\r
    summary_rules:\r
    - id: resumen_T\r
      when: 'true'\r
      status: info\r
      text:\r
        es: '[[T]] se interpreta dentro de la distincion entre estado intensivo y cantidad total.'\r
        en: '[[T]] is interpreted within the distinction between intensive state and total amount.'\r
    physical_reading_rules:\r
    - id: lectura_T\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Una diferencia de [[T]] puede indicar una tendencia fisica: transferencia, empuje, flujo o necesidad de ponderar cantidades.'\r
        en: 'A difference in [[T]] can indicate a physical tendency: transfer, push, flow, or the need to weight amounts.'\r
    coherence_rules:\r
    - id: coherencia_T\r
      when: 'true'\r
      status: success\r
      text:\r
        es: '[[T]] debe compararse con la misma referencia de sistema y con unidades compatibles.'\r
        en: '[[T]] must be compared with the same system reference and compatible units.'\r
    model_validity_rules:\r
    - id: validez_T\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modelo es valido si la muestra es uniforme o si se declara una media fisicamente justificada.\r
        en: The model is valid if the sample is uniform or a physically justified mean is stated.\r
    graph_rules:\r
    - id: grafico_T\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, una intensiva se reconoce porque la curva permanece estable al aumentar [[lambda_escala]].\r
        en: In the graph, an intensive variable is recognized because the curve stays stable as [[lambda_escala]] increases.\r
    likely_errors:\r
    - id: error_T\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir [[T]] con inventario total es un error tipico; tambien lo es sumar lecturas intensivas sin ponderacion.\r
        en: Confusing [[T]] with total inventory is a typical error; adding intensive readings without weighting is another.\r
    next_step_rules:\r
    - id: siguiente_T\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: aplicar el test de escalado y decidir si usar una intensiva, una extensiva o una propiedad normalizada.'\r
        en: 'Next step: apply the scaling test and decide whether to use an intensive, an extensive, or a normalized property.'\r
  P:\r
    magnitude_type: P\r
    semantic_role:\r
      es: Lectura mecanica local\r
      en: Local mechanical reading\r
    summary_rules:\r
    - id: resumen_P\r
      when: 'true'\r
      status: info\r
      text:\r
        es: '[[P]] se interpreta dentro de la distincion entre estado intensivo y cantidad total.'\r
        en: '[[P]] is interpreted within the distinction between intensive state and total amount.'\r
    physical_reading_rules:\r
    - id: lectura_P\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Una diferencia de [[P]] puede indicar una tendencia fisica: transferencia, empuje, flujo o necesidad de ponderar cantidades.'\r
        en: 'A difference in [[P]] can indicate a physical tendency: transfer, push, flow, or the need to weight amounts.'\r
    coherence_rules:\r
    - id: coherencia_P\r
      when: 'true'\r
      status: success\r
      text:\r
        es: '[[P]] debe compararse con la misma referencia de sistema y con unidades compatibles.'\r
        en: '[[P]] must be compared with the same system reference and compatible units.'\r
    model_validity_rules:\r
    - id: validez_P\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modelo es valido si la muestra es uniforme o si se declara una media fisicamente justificada.\r
        en: The model is valid if the sample is uniform or a physically justified mean is stated.\r
    graph_rules:\r
    - id: grafico_P\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, una intensiva se reconoce porque la curva permanece estable al aumentar [[lambda_escala]].\r
        en: In the graph, an intensive variable is recognized because the curve stays stable as [[lambda_escala]] increases.\r
    likely_errors:\r
    - id: error_P\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir [[P]] con inventario total es un error tipico; tambien lo es sumar lecturas intensivas sin ponderacion.\r
        en: Confusing [[P]] with total inventory is a typical error; adding intensive readings without weighting is another.\r
    next_step_rules:\r
    - id: siguiente_P\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: aplicar el test de escalado y decidir si usar una intensiva, una extensiva o una propiedad normalizada.'\r
        en: 'Next step: apply the scaling test and decide whether to use an intensive, an extensive, or a normalized property.'\r
  rho:\r
    magnitude_type: rho\r
    semantic_role:\r
      es: Concentracion de masa\r
      en: Mass concentration\r
    summary_rules:\r
    - id: resumen_rho\r
      when: 'true'\r
      status: info\r
      text:\r
        es: '[[rho]] se interpreta dentro de la distincion entre estado intensivo y cantidad total.'\r
        en: '[[rho]] is interpreted within the distinction between intensive state and total amount.'\r
    physical_reading_rules:\r
    - id: lectura_rho\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Una diferencia de [[rho]] puede indicar una tendencia fisica: transferencia, empuje, flujo o necesidad de ponderar cantidades.'\r
        en: 'A difference in [[rho]] can indicate a physical tendency: transfer, push, flow, or the need to weight amounts.'\r
    coherence_rules:\r
    - id: coherencia_rho\r
      when: 'true'\r
      status: success\r
      text:\r
        es: '[[rho]] debe compararse con la misma referencia de sistema y con unidades compatibles.'\r
        en: '[[rho]] must be compared with the same system reference and compatible units.'\r
    model_validity_rules:\r
    - id: validez_rho\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modelo es valido si la muestra es uniforme o si se declara una media fisicamente justificada.\r
        en: The model is valid if the sample is uniform or a physically justified mean is stated.\r
    graph_rules:\r
    - id: grafico_rho\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, una intensiva se reconoce porque la curva permanece estable al aumentar [[lambda_escala]].\r
        en: In the graph, an intensive variable is recognized because the curve stays stable as [[lambda_escala]] increases.\r
    likely_errors:\r
    - id: error_rho\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir [[rho]] con inventario total es un error tipico; tambien lo es sumar lecturas intensivas sin ponderacion.\r
        en: Confusing [[rho]] with total inventory is a typical error; adding intensive readings without weighting is another.\r
    next_step_rules:\r
    - id: siguiente_rho\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: aplicar el test de escalado y decidir si usar una intensiva, una extensiva o una propiedad normalizada.'\r
        en: 'Next step: apply the scaling test and decide whether to use an intensive, an extensive, or a normalized property.'\r
  m:\r
    magnitude_type: m\r
    semantic_role:\r
      es: Cantidad usada como peso\r
      en: Amount used as weight\r
    summary_rules:\r
    - id: resumen_m\r
      when: 'true'\r
      status: info\r
      text:\r
        es: '[[m]] se interpreta dentro de la distincion entre estado intensivo y cantidad total.'\r
        en: '[[m]] is interpreted within the distinction between intensive state and total amount.'\r
    physical_reading_rules:\r
    - id: lectura_m\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Una diferencia de [[m]] puede indicar una tendencia fisica: transferencia, empuje, flujo o necesidad de ponderar cantidades.'\r
        en: 'A difference in [[m]] can indicate a physical tendency: transfer, push, flow, or the need to weight amounts.'\r
    coherence_rules:\r
    - id: coherencia_m\r
      when: 'true'\r
      status: success\r
      text:\r
        es: '[[m]] debe compararse con la misma referencia de sistema y con unidades compatibles.'\r
        en: '[[m]] must be compared with the same system reference and compatible units.'\r
    model_validity_rules:\r
    - id: validez_m\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modelo es valido si la muestra es uniforme o si se declara una media fisicamente justificada.\r
        en: The model is valid if the sample is uniform or a physically justified mean is stated.\r
    graph_rules:\r
    - id: grafico_m\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, una intensiva se reconoce porque la curva permanece estable al aumentar [[lambda_escala]].\r
        en: In the graph, an intensive variable is recognized because the curve stays stable as [[lambda_escala]] increases.\r
    likely_errors:\r
    - id: error_m\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir [[m]] con inventario total es un error tipico; tambien lo es sumar lecturas intensivas sin ponderacion.\r
        en: Confusing [[m]] with total inventory is a typical error; adding intensive readings without weighting is another.\r
    next_step_rules:\r
    - id: siguiente_m\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: aplicar el test de escalado y decidir si usar una intensiva, una extensiva o una propiedad normalizada.'\r
        en: 'Next step: apply the scaling test and decide whether to use an intensive, an extensive, or a normalized property.'\r
  V:\r
    magnitude_type: V\r
    semantic_role:\r
      es: Extension usada para normalizar\r
      en: Extension used for normalization\r
    summary_rules:\r
    - id: resumen_V\r
      when: 'true'\r
      status: info\r
      text:\r
        es: '[[V]] se interpreta dentro de la distincion entre estado intensivo y cantidad total.'\r
        en: '[[V]] is interpreted within the distinction between intensive state and total amount.'\r
    physical_reading_rules:\r
    - id: lectura_V\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Una diferencia de [[V]] puede indicar una tendencia fisica: transferencia, empuje, flujo o necesidad de ponderar cantidades.'\r
        en: 'A difference in [[V]] can indicate a physical tendency: transfer, push, flow, or the need to weight amounts.'\r
    coherence_rules:\r
    - id: coherencia_V\r
      when: 'true'\r
      status: success\r
      text:\r
        es: '[[V]] debe compararse con la misma referencia de sistema y con unidades compatibles.'\r
        en: '[[V]] must be compared with the same system reference and compatible units.'\r
    model_validity_rules:\r
    - id: validez_V\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modelo es valido si la muestra es uniforme o si se declara una media fisicamente justificada.\r
        en: The model is valid if the sample is uniform or a physically justified mean is stated.\r
    graph_rules:\r
    - id: grafico_V\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, una intensiva se reconoce porque la curva permanece estable al aumentar [[lambda_escala]].\r
        en: In the graph, an intensive variable is recognized because the curve stays stable as [[lambda_escala]] increases.\r
    likely_errors:\r
    - id: error_V\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir [[V]] con inventario total es un error tipico; tambien lo es sumar lecturas intensivas sin ponderacion.\r
        en: Confusing [[V]] with total inventory is a typical error; adding intensive readings without weighting is another.\r
    next_step_rules:\r
    - id: siguiente_V\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: aplicar el test de escalado y decidir si usar una intensiva, una extensiva o una propiedad normalizada.'\r
        en: 'Next step: apply the scaling test and decide whether to use an intensive, an extensive, or a normalized property.'\r
  X_A:\r
    magnitude_type: X_A\r
    semantic_role:\r
      es: Valor intensivo de la parte A\r
      en: Intensive value of part A\r
    summary_rules:\r
    - id: resumen_X_A\r
      when: 'true'\r
      status: info\r
      text:\r
        es: '[[X_A]] se interpreta dentro de la distincion entre estado intensivo y cantidad total.'\r
        en: '[[X_A]] is interpreted within the distinction between intensive state and total amount.'\r
    physical_reading_rules:\r
    - id: lectura_X_A\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Una diferencia de [[X_A]] puede indicar una tendencia fisica: transferencia, empuje, flujo o necesidad de ponderar cantidades.'\r
        en: 'A difference in [[X_A]] can indicate a physical tendency: transfer, push, flow, or the need to weight amounts.'\r
    coherence_rules:\r
    - id: coherencia_X_A\r
      when: 'true'\r
      status: success\r
      text:\r
        es: '[[X_A]] debe compararse con la misma referencia de sistema y con unidades compatibles.'\r
        en: '[[X_A]] must be compared with the same system reference and compatible units.'\r
    model_validity_rules:\r
    - id: validez_X_A\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modelo es valido si la muestra es uniforme o si se declara una media fisicamente justificada.\r
        en: The model is valid if the sample is uniform or a physically justified mean is stated.\r
    graph_rules:\r
    - id: grafico_X_A\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, una intensiva se reconoce porque la curva permanece estable al aumentar [[lambda_escala]].\r
        en: In the graph, an intensive variable is recognized because the curve stays stable as [[lambda_escala]] increases.\r
    likely_errors:\r
    - id: error_X_A\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir [[X_A]] con inventario total es un error tipico; tambien lo es sumar lecturas intensivas sin ponderacion.\r
        en: Confusing [[X_A]] with total inventory is a typical error; adding intensive readings without weighting is another.\r
    next_step_rules:\r
    - id: siguiente_X_A\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: aplicar el test de escalado y decidir si usar una intensiva, una extensiva o una propiedad normalizada.'\r
        en: 'Next step: apply the scaling test and decide whether to use an intensive, an extensive, or a normalized property.'\r
  X_B:\r
    magnitude_type: X_B\r
    semantic_role:\r
      es: Valor intensivo de la parte B\r
      en: Intensive value of part B\r
    summary_rules:\r
    - id: resumen_X_B\r
      when: 'true'\r
      status: info\r
      text:\r
        es: '[[X_B]] se interpreta dentro de la distincion entre estado intensivo y cantidad total.'\r
        en: '[[X_B]] is interpreted within the distinction between intensive state and total amount.'\r
    physical_reading_rules:\r
    - id: lectura_X_B\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Una diferencia de [[X_B]] puede indicar una tendencia fisica: transferencia, empuje, flujo o necesidad de ponderar cantidades.'\r
        en: 'A difference in [[X_B]] can indicate a physical tendency: transfer, push, flow, or the need to weight amounts.'\r
    coherence_rules:\r
    - id: coherencia_X_B\r
      when: 'true'\r
      status: success\r
      text:\r
        es: '[[X_B]] debe compararse con la misma referencia de sistema y con unidades compatibles.'\r
        en: '[[X_B]] must be compared with the same system reference and compatible units.'\r
    model_validity_rules:\r
    - id: validez_X_B\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modelo es valido si la muestra es uniforme o si se declara una media fisicamente justificada.\r
        en: The model is valid if the sample is uniform or a physically justified mean is stated.\r
    graph_rules:\r
    - id: grafico_X_B\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, una intensiva se reconoce porque la curva permanece estable al aumentar [[lambda_escala]].\r
        en: In the graph, an intensive variable is recognized because the curve stays stable as [[lambda_escala]] increases.\r
    likely_errors:\r
    - id: error_X_B\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir [[X_B]] con inventario total es un error tipico; tambien lo es sumar lecturas intensivas sin ponderacion.\r
        en: Confusing [[X_B]] with total inventory is a typical error; adding intensive readings without weighting is another.\r
    next_step_rules:\r
    - id: siguiente_X_B\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: aplicar el test de escalado y decidir si usar una intensiva, una extensiva o una propiedad normalizada.'\r
        en: 'Next step: apply the scaling test and decide whether to use an intensive, an extensive, or a normalized property.'\r
`;export{e as default};
