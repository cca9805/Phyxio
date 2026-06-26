const e=`version: 2
id: interpretacion-poleas-simples
leaf_id: poleas-simples
nombre:
  es: interpretación de poleas simples
  en: simple pulleys interpretation
scope:
  es: "Lectura física de la ventaja mecánica y del intercambio entre fuerza y recorrido en un polipasto ideal. Subíndices auxiliares de compatibilidad en este leaf — load y pull."
  en: "Physical reading of mechanical advantage and the exchange between force and displacement in an ideal pulley block. Auxiliary compatibility subscripts in this leaf — load and pull."
dependencies:
  magnitudes:
    - W
    - nSel
    - dx_load
    - F
    - dx_pull
  formulas:
    - fuerza_ideal_poleas
    - traccion_cable_poleas
output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
result_blocks:
  summary:
    title:
      es: Resumen
      en: Summary
  physical_reading:
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura gráfica
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  W:
    summary_rules:
      - id: w_summary_1
        when: "true"
        status: info
        text:
          es: "El peso W indica la exigencia total del sistema: de él depende directamente la fuerza aplicada y la energía transferida."
          en: "The weight W indicates the total system demand: the applied force and energy transferred depend directly on it."
    physical_reading_rules:
      - id: w_physical_1
        when: "true"
        status: ok
        text:
          es: "Si el peso aumenta, la fuerza necesaria también aumenta para un mismo número de tramos."
          en: "If the weight increases, the required force also increases for the same number of segments."
    coherence_rules:
      - id: w_coherence_1
        when: "W <= 0"
        status: warning
        text:
          es: "El peso debe ser positivo en este leaf."
          en: "Weight must be positive in this leaf."
    model_validity_rules:
      - id: w_validity_1
        when: "true"
        status: info
        text:
          es: "Se asume que el peso ya está bien definido como fuerza y no como masa."
          en: "It is assumed that the weight is already defined as a force and not as mass."
    graph_rules:
      - id: w_graph_1
        when: "true"
        status: info
        text:
          es: "Para nSel fijo, la fuerza requerida crece linealmente con el peso."
          en: "For fixed nSel, the required force grows linearly with weight."
    likely_errors:
      - id: w_error_1
        when: "true"
        status: warning
        text:
          es: "Es frecuente confundir peso con masa y usar kg en lugar de N."
          en: "It is common to confuse weight with mass and use kg instead of N."
    next_step_rules:
      - id: w_next_1
        when: "true"
        status: info
        text:
          es: "Después conviene relacionar el peso con la fuerza aplicada mediante el número de tramos."
          en: "Next it is useful to relate weight to the applied force through the number of segments."

  dx_load:
    summary_rules:
      - id: dl_summary_1
        when: "true"
        status: info
        text:
          es: "El desplazamiento de la carga es la subida real que se quiere conseguir."
          en: "The load displacement is the actual rise we want to obtain."
    physical_reading_rules:
      - id: dl_physical_1
        when: "true"
        status: ok
        text:
          es: "Un mismo ascenso de la carga exige más cuerda tirada cuanto mayor es el número de tramos."
          en: "The same rise of the load requires more rope to be pulled as the number of segments increases."
    coherence_rules:
      - id: dl_coherence_1
        when: "dx_load <= 0"
        status: warning
        text:
          es: "El desplazamiento de la carga debe ser positivo en este contexto de elevación."
          en: "The load displacement must be positive in this lifting context."
    model_validity_rules:
      - id: dl_validity_1
        when: "true"
        status: info
        text:
          es: "La relación con la cuerda supone movimiento compatible con cuerda ideal e inextensible."
          en: "The relation with the rope assumes motion compatible with an ideal inextensible rope."
    graph_rules:
      - id: dl_graph_1
        when: "true"
        status: info
        text:
          es: "Para nSel fijo, dx_pull cambia linealmente con dx_load."
          en: "For fixed nSel, dx_pull changes linearly with dx_load."
    likely_errors:
      - id: dl_error_1
        when: "true"
        status: warning
        text:
          es: "Un error típico es olvidar que dx_load y dx_pull no suelen coincidir cuando nSel es mayor que 1."
          en: "A typical error is to forget that dx_load and dx_pull usually do not match when nSel is greater than 1."
    next_step_rules:
      - id: dl_next_1
        when: "true"
        status: info
        text:
          es: "El siguiente paso es calcular la cuerda necesaria mediante dx_pull = nSel · dx_load."
          en: "The next step is to compute the rope needed through dx_pull = nSel · dx_load."

  nSel:
    summary_rules:
      - id: n_summary_1
        when: "true"
        status: info
        text:
          es: "El número de tramos activos controla la ventaja mecánica del sistema."
          en: "The number of active segments controls the mechanical advantage of the system."
    physical_reading_rules:
      - id: n_physical_1
        when: "nSel == 1"
        status: info
        text:
          es: "Con un solo tramo no hay reducción ideal de fuerza."
          en: "With a single segment there is no ideal force reduction."
      - id: n_physical_2
        when: "nSel > 1"
        status: ok
        text:
          es: "A mayor número de tramos, menor fuerza requerida y mayor recorrido de cuerda."
          en: "The greater the number of segments, the lower the required force and the larger the rope travel."
    coherence_rules:
      - id: n_coherence_1
        when: "nSel <= 0"
        status: warning
        text:
          es: "El número de tramos debe ser positivo."
          en: "The number of segments must be positive."
    model_validity_rules:
      - id: n_validity_1
        when: "true"
        status: info
        text:
          es: "Solo deben contarse los tramos que sostienen realmente la carga."
          en: "Only the segments that actually support the load should be counted."
    graph_rules:
      - id: n_graph_1
        when: "true"
        status: info
        text:
          es: "nSel actúa como parámetro de pendiente o factor de escala según la relación representada."
          en: "nSel acts as a slope parameter or scale factor depending on the represented relation."
    likely_errors:
      - id: n_error_1
        when: "true"
        status: warning
        text:
          es: "El fallo más común es contar tramos visuales que no sostienen la carga."
          en: "The most common mistake is counting visible segments that do not support the load."
    next_step_rules:
      - id: n_next_1
        when: "true"
        status: info
        text:
          es: "Después de fijar nSel, se calculan la fuerza y el recorrido de cuerda."
          en: "After setting nSel, the force and rope travel are computed."

  F:
    summary_rules:
      - id: f_summary_1
        when: "true"
        status: info
        text:
          es: "La fuerza aplicada queda determinada por el peso de la carga y por el número de tramos que la sostienen."
          en: "The applied force is determined by the load weight and by the number of supporting segments."
    physical_reading_rules:
      - id: f_physical_1
        when: "nSel == 1"
        status: info
        text:
          es: "Con un solo tramo no hay ventaja mecánica y la polea solo cambia la dirección del esfuerzo."
          en: "With a single segment there is no mechanical advantage and the pulley only changes the direction of effort."
      - id: f_physical_2
        when: "nSel > 1"
        status: ok
        text:
          es: "Al aumentar los tramos activos, la carga se reparte y la fuerza necesaria disminuye."
          en: "As the number of active segments increases, the load is shared and the required force decreases."
    coherence_rules:
      - id: f_coherence_1
        when: "F > W"
        status: warning
        text:
          es: "En el modelo ideal, la fuerza aplicada no debería superar al peso cuando nSel es al menos 1. Revisa datos o unidades."
          en: "In the ideal model, the applied force should not exceed the weight when nSel is at least 1. Check data or units."
      - id: f_coherence_2
        when: "F <= 0"
        status: warning
        text:
          es: "Una fuerza nula o negativa no es coherente con una carga positiva en este leaf."
          en: "A zero or negative force is not coherent with a positive load in this leaf."
    model_validity_rules:
      - id: f_validity_1
        when: "true"
        status: info
        text:
          es: "Esta lectura solo es válida si la cuerda es ideal y la tensión puede considerarse igual en todos los tramos."
          en: "This reading is valid only if the rope is ideal and the tension can be considered equal in all segments."
    graph_rules:
      - id: f_graph_1
        when: "true"
        status: info
        text:
          es: "En una representación de F frente a nSel, la curva decrece de forma inversa."
          en: "In an F versus nSel representation, the curve decreases inversely."
    likely_errors:
      - id: f_error_1
        when: "true"
        status: warning
        text:
          es: "El error más frecuente es contar mal los tramos que sostienen realmente la carga."
          en: "The most common error is miscounting the segments that actually support the load."
      - id: f_error_2
        when: "true"
        status: warning
        text:
          es: "También es habitual confundir peso con masa y usar kilogramos donde deberían aparecer newtons."
          en: "It is also common to confuse weight with mass and use kilograms where newtons should appear."
    next_step_rules:
      - id: f_next_1
        when: "true"
        status: info
        text:
          es: "Después de obtener F, conviene analizar cuánto recorrido de cuerda será necesario para elevar la carga."
          en: "After obtaining F, it is useful to analyze how much rope travel will be needed to raise the load."
  dx_pull:
    summary_rules:
      - id: dx_summary_1
        when: "true"
        status: info
        text:
          es: "El desplazamiento de cuerda tirada mide el precio cinemático de la ventaja mecánica."
          en: "The pulled-rope displacement measures the kinematic price of mechanical advantage."
    physical_reading_rules:
      - id: dx_physical_1
        when: "nSel > 1"
        status: ok
        text:
          es: "Si el sistema reduce la fuerza, el operador debe compensarlo tirando una longitud mayor de cuerda."
          en: "If the system reduces force, the operator must compensate by pulling a larger length of rope."
    coherence_rules:
      - id: dx_coherence_1
        when: "dx_pull < dx_load"
        status: warning
        text:
          es: "En un polipasto ideal con nSel mayor que 1, no debería tirarse menos cuerda de la que asciende la carga."
          en: "In an ideal pulley block with nSel greater than 1, less rope should not be pulled than the load rises."
      - id: dx_coherence_2
        when: "dx_pull <= 0"
        status: warning
        text:
          es: "Un desplazamiento de cuerda nulo o negativo no es coherente con una elevación positiva de la carga."
          en: "A zero or negative rope displacement is not coherent with a positive load rise."
    model_validity_rules:
      - id: dx_validity_1
        when: "true"
        status: info
        text:
          es: "La relación geométrica exige cuerda inextensible y un montaje en el que los tramos trabajen realmente en paralelo."
          en: "The geometric relation requires an inextensible rope and an assembly in which the segments really work in parallel."
    graph_rules:
      - id: dx_graph_1
        when: "true"
        status: info
        text:
          es: "En una gráfica de dx_pull frente a dx_load, la pendiente coincide con nSel."
          en: "In a dx_pull versus dx_load graph, the slope is equal to nSel."
    likely_errors:
      - id: dx_error_1
        when: "true"
        status: warning
        text:
          es: "Un error típico es pensar que la polea reduce fuerza sin aumentar el recorrido de cuerda."
          en: "A typical error is to think that a pulley reduces force without increasing rope travel."
    next_step_rules:
      - id: dx_next_1
        when: "true"
        status: info
        text:
          es: "El siguiente paso natural es conectar esta relación con el trabajo mecánico y la conservación de la energía."
          en: "The natural next step is to connect this relation with mechanical work and energy conservation."
`;export{e as default};
