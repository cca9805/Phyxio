const e=`version: 2
id: resistiva-interpretacion
leaf_id: resistiva
nombre:
  es: "Interpretación de la Calefacción Resistiva"
  en: "Resistive Heating Interpretation"
scope: "domestic"

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
    title: { es: "Resumen del Sistema Resistivo", en: "Resistive System Summary" }
  physical_reading:
    title: { es: "Lectura Física", en: "Physical Reading" }
  coherence:
    title: { es: "Coherencia de Datos", en: "Data Coherence" }
  model_validity:
    title: { es: "Validez del Modelo", en: "Model Validity" }
  graph_reading:
    title: { es: "Lectura del Gráfico", en: "Graph Reading" }
  likely_errors:
    title: { es: "Errores Comunes", en: "Common Errors" }
  next_step:
    title: { es: "Siguiente Paso", en: "Next Step" }

targets:
  E:
    summary_rules:
      - id: E_rango_bajo
        when: "result < 10"
        status: warning
        text:
          es: "El [[consumo eléctrico|E]] calculado es inferior a 10 kWh. Verifica que el tiempo efectivo no sea cero y que la [[potencia del emisor|P]] esté en kW."
          en: "The calculated [[electrical consumption|E]] is below 10 kWh. Verify that effective time is not zero and that [[emitter power|P]] is in kW."
      - id: E_rango_normal
        when: "result >= 10 and result <= 2000"
        status: info
        text:
          es: "[[consumo eléctrico|E]] indica un uso dentro del rango doméstico típico (10–2000 kWh). El resultado significa que el modelo estacionario resistivo es válido para este escenario."
          en: "[[electrical consumption|E]] indicates usage within the typical domestic range (10–2000 kWh). The result means the resistive stationary model is valid for this scenario."
      - id: E_rango_alto
        when: "result > 2000"
        status: warning
        text:
          es: "[[consumo eléctrico|E]] superior a 2000 kWh. Si corresponde a un emisor doméstico en una temporada, revisa el [[tiempo efectivo de uso|t]]: puede estar usando horas de conexión en lugar de horas activas."
          en: "[[electrical consumption|E]] above 2000 kWh. If this corresponds to one domestic emitter in a season, check [[effective usage time|t]]: you may be using connection hours instead of active hours."
    physical_reading_rules:
      - id: E_lectura
        when: "true"
        status: info
        text:
          es: "El [[consumo eléctrico|E]] es el producto directo de [[potencia del emisor|P]] por [[tiempo efectivo de uso|t]]. Con [[coeficiente de rendimiento|COP]] = 1, este valor representa también el calor mínimo necesario para calentar el espacio."
          en: "[[electrical consumption|E]] is the direct product of [[emitter power|P]] by [[effective usage time|t]]. With [[coefficient of performance|COP]] = 1, this value also represents the minimum heat needed to warm the space."
    coherence_rules:
      - id: E_coherencia
        when: "result <= 0"
        status: error
        text:
          es: "El [[consumo eléctrico|E]] debe ser estrictamente positivo. Revisa [[potencia del emisor|P]] y [[tiempo efectivo de uso|t]]."
          en: "[[electrical consumption|E]] must be strictly positive. Check [[emitter power|P]] and [[effective usage time|t]]."
    model_validity_rules:
      - id: E_validez
        when: "true"
        status: info
        text:
          es: "El modelo E = P·t es válido cuando [[tiempo efectivo de uso|t]] representa las horas con la resistencia activa, no el tiempo de conexión del aparato."
          en: "The model E = P·t is valid when [[effective usage time|t]] represents hours with the resistance active, not the device connection time."
    graph_rules:
      - id: E_grafico
        when: "true"
        status: info
        text:
          es: "En el gráfico [[consumo eléctrico|E]] vs [[tiempo efectivo de uso|t]], la pendiente es la [[potencia del emisor|P]]. Una línea más pronunciada indica un emisor más potente."
          en: "In the [[electrical consumption|E]] vs [[effective usage time|t]] graph, the slope is [[emitter power|P]]. A steeper line indicates a more powerful emitter."
    likely_errors:
      - id: E_error_tiempo
        when: "true"
        status: error
        text:
          es: "Usar horas de aparato encendido en lugar del [[tiempo efectivo de uso|t]] real puede sobreestimar el [[consumo eléctrico|E]] por un factor de 2–5."
          en: "Using device-on hours instead of real [[effective usage time|t]] can overestimate [[electrical consumption|E]] by a factor of 2–5."
    next_step_rules:
      - id: E_siguiente
        when: "true"
        status: tip
        text:
          es: "Con [[E]] calculado, estima el consumo equivalente con bomba de calor: E_bomba = [[calor útil|Q]] / COP_bomba. Si COP_bomba = 3.5, el ahorro potencial es del 71%."
          en: "With [[E]] calculated, estimate the equivalent heat pump consumption: E_pump = [[useful heat|Q]] / COP_pump. If COP_pump = 3.5, the potential savings are 71%."

  Q:
    summary_rules:
      - id: Q_mayor_E
        when: "result > 1.05 * E"
        status: error
        text:
          es: "El [[calor útil|Q]] no puede superar el [[consumo eléctrico|E]] en un sistema resistivo. Verifica que [[rendimiento de conversión|eta]] esté entre 0 y 1."
          en: "[[useful heat|Q]] cannot exceed [[electrical consumption|E]] in a resistive system. Verify that [[conversion efficiency|eta]] is between 0 and 1."
      - id: Q_normal
        when: "result >= 0.90 * E and result <= E"
        status: info
        text:
          es: "[[calor útil|Q]] próximo al [[consumo eléctrico|E]], coherente con [[rendimiento de conversión|eta]] ≥ 0.90 típico de la resistiva."
          en: "[[useful heat|Q]] close to [[electrical consumption|E]], consistent with [[conversion efficiency|eta]] ≥ 0.90 typical of resistive systems."
    physical_reading_rules:
      - id: Q_lectura
        when: "true"
        status: info
        text:
          es: "El [[calor útil|Q]] es la energía que efectivamente calienta el recinto. En la resistiva, [[Q]] ≈ [[E]] porque [[rendimiento de conversión|eta]] ≈ 1."
          en: "[[useful heat|Q]] is the energy that actually heats the room. In resistive heating, [[Q]] ≈ [[E]] because [[conversion efficiency|eta]] ≈ 1."
    coherence_rules:
      - id: Q_coherencia
        when: "result > E"
        status: error
        text:
          es: "[[calor útil|Q]] > [[consumo eléctrico|E]] viola la conservación de la energía. Revisa [[rendimiento de conversión|eta]]."
          en: "[[useful heat|Q]] > [[electrical consumption|E]] violates energy conservation. Check [[conversion efficiency|eta]]."
    model_validity_rules:
      - id: Q_validez
        when: "true"
        status: info
        text:
          es: "La relación [[Q]] = [[eta]] · [[E]] es siempre válida para emisores resistivos convencionales con [[rendimiento de conversión|eta]] estable."
          en: "The relation [[Q]] = [[eta]] · [[E]] is always valid for conventional resistive emitters with stable [[conversion efficiency|eta]]."
    graph_rules:
      - id: Q_grafico
        when: "true"
        status: info
        text:
          es: "[[calor útil|Q]] y [[consumo eléctrico|E]] son prácticamente iguales en la gráfica resistiva; la diferencia visual sería imperceptible con [[rendimiento de conversión|eta]] = 0.97."
          en: "[[useful heat|Q]] and [[electrical consumption|E]] are practically equal in the resistive graph; the visual difference would be imperceptible with [[conversion efficiency|eta]] = 0.97."
    likely_errors:
      - id: Q_error
        when: "true"
        status: error
        text:
          es: "Confundir [[calor útil|Q]] con la demanda térmica del edificio. La demanda es la energía que el edificio necesita; [[Q]] es la que el emisor entrega. Son iguales solo si no hay pérdidas de distribución."
          en: "Confusing [[useful heat|Q]] with the building's thermal demand. Demand is the energy the building needs; [[Q]] is what the emitter delivers. They are equal only if there are no distribution losses."
    next_step_rules:
      - id: Q_siguiente
        when: "true"
        status: tip
        text:
          es: "Usa [[calor útil|Q]] como denominador para calcular el [[coeficiente de rendimiento|COP]] real del sistema y compararlo con el COP = 1 teórico."
          en: "Use [[useful heat|Q]] as the denominator to calculate the real system [[coefficient of performance|COP]] and compare it to the theoretical COP = 1."

  COP:
    summary_rules:
      - id: COP_mayor_1
        when: "result > 1.05"
        status: error
        text:
          es: "[[coeficiente de rendimiento|COP]] mayor que 1 en un sistema resistivo viola la conservación de la energía. Revisa los valores de [[calor útil|Q]] y [[consumo eléctrico|E]]."
          en: "[[coefficient of performance|COP]] greater than 1 in a resistive system violates energy conservation. Check [[useful heat|Q]] and [[electrical consumption|E]] values."
      - id: COP_normal
        when: "result >= 0.90 and result <= 1.05"
        status: info
        text:
          es: "[[coeficiente de rendimiento|COP]] ≈ 1, confirmando que el sistema opera como calefacción resistiva estándar. Cada kWh eléctrico produce aproximadamente 1 kWh térmico."
          en: "[[coefficient of performance|COP]] ≈ 1, confirming the system operates as standard resistive heating. Each electrical kWh produces approximately 1 thermal kWh."
      - id: COP_bajo
        when: "result < 0.90"
        status: warning
        text:
          es: "[[coeficiente de rendimiento|COP]] < 0.90 implica pérdidas internas elevadas, atípicas para equipos en buen estado. Verifica [[rendimiento de conversión|eta]] o la coherencia entre [[calor útil|Q]] y [[consumo eléctrico|E]]."
          en: "[[coefficient of performance|COP]] < 0.90 implies high internal losses, atypical for equipment in good condition. Check [[conversion efficiency|eta]] or the coherence between [[useful heat|Q]] and [[electrical consumption|E]]."
    physical_reading_rules:
      - id: COP_lectura
        when: "true"
        status: info
        text:
          es: "El [[coeficiente de rendimiento|COP]] = 1 de la resistiva es el límite inferior teórico de cualquier sistema de calefacción eléctrica. Las bombas de calor superan este valor aprovechando el calor del entorno."
          en: "The resistive [[coefficient of performance|COP]] = 1 is the theoretical lower limit for any electric heating system. Heat pumps exceed this value by harnessing ambient heat."
    coherence_rules:
      - id: COP_coherencia
        when: "result > 1.1"
        status: error
        text:
          es: "Un [[coeficiente de rendimiento|COP]] superior a 1.1 en resistiva es físicamente imposible. Comprueba si el [[calor útil|Q]] se está calculando correctamente."
          en: "A [[coefficient of performance|COP]] above 1.1 in resistive systems is physically impossible. Check if [[useful heat|Q]] is being calculated correctly."
    model_validity_rules:
      - id: COP_validez
        when: "true"
        status: info
        text:
          es: "El [[coeficiente de rendimiento|COP]] = Q/E es siempre válido como definición. En resistiva ideal, COP = [[rendimiento de conversión|eta]] ≈ 1."
          en: "The [[coefficient of performance|COP]] = Q/E is always valid as a definition. In ideal resistive systems, COP = [[conversion efficiency|eta]] ≈ 1."
    graph_rules:
      - id: COP_grafico
        when: "true"
        status: info
        text:
          es: "El [[coeficiente de rendimiento|COP]] = 1 de la resistiva aparece como una línea horizontal en cualquier gráfico de comparación tecnológica, representando el suelo de eficiencia."
          en: "The resistive [[coefficient of performance|COP]] = 1 appears as a horizontal line in any technology comparison graph, representing the efficiency floor."
    likely_errors:
      - id: COP_error
        when: "true"
        status: error
        text:
          es: "Interpretar [[coeficiente de rendimiento|COP]] = 1 como eficiencia perfecta. En realidad, un [[COP]] = 1 es el peor caso posible para un sistema eléctrico que puede aprovechar el calor del entorno."
          en: "Interpreting [[coefficient of performance|COP]] = 1 as perfect efficiency. In reality, a [[COP]] = 1 is the worst possible case for an electric system that could leverage ambient heat."
    next_step_rules:
      - id: COP_siguiente
        when: "true"
        status: tip
        text:
          es: "Compara este [[coeficiente de rendimiento|COP]] = 1 con el SCOP de una bomba de calor para tu clima (típicamente 3–5). La relación directa es: E_resistiva / E_bomba = COP_bomba / 1."
          en: "Compare this [[coefficient of performance|COP]] = 1 with the SCOP of a heat pump for your climate (typically 3–5). The direct ratio is: E_resistive / E_pump = COP_pump / 1."

dependencies:
  formulas:
    - energia
    - calor_util
    - cop_resistiva
  magnitudes:
    - P
    - t
    - E
    - eta
    - Q
    - COP
`;export{e as default};
