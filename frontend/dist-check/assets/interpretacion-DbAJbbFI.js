const e=`version: 2
id: bomba-de-calor-interpretacion
leaf_id: bomba-de-calor
nombre:
  es: "Interpretación de Bomba de Calor"
  en: "Heat Pump Interpretation"
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
    title:
      es: "Resumen del sistema"
      en: "System Summary"
  physical_reading:
    title:
      es: "Lectura física"
      en: "Physical Reading"
  coherence:
    title:
      es: "Coherencia física"
      en: "Physical Coherence"
  model_validity:
    title:
      es: "Validez del modelo"
      en: "Model Validity"
  graph_reading:
    title:
      es: "Lectura de gráficos"
      en: "Graph Reading"
  likely_errors:
    title:
      es: "Errores frecuentes"
      en: "Common Errors"
  next_step:
    title:
      es: "Siguiente paso"
      en: "Next Step"

targets:
  cop:
    summary_rules:
      - id: eficiencia_ciclo
        when: "true"
        status: info
        text:
          es: "El [[cop]] indica la eficiencia del transporte de calor. Un valor alto implica que el sistema domina el flujo térmico con poco esfuerzo eléctrico."
          en: "The [[cop]] indicates the efficiency of heat transport. A high value implies that the system dominates the thermal flow with little electrical effort."
    coherence_rules:
      - id: cop_vs_temperatura
        when: "true"
        status: warning
        text:
          es: "El [[cop]] disminuye físicamente cuando aumenta el salto térmico entre el foco frío y el caliente."
          en: "The [[cop]] physically decreases when the thermal jump between the cold and hot source increases."
    physical_reading_rules:
      - id: lectura_cop
        when: "true"
        status: info
        text:
          es: "Significa cuántas unidades de calor útil se entregan por cada unidad de [[w_elec]] consumida. Es coherente con la segunda ley."
          en: "It means how many units of useful heat are delivered for each unit of [[w_elec]] consumed. It is coherent with the second law."
    model_validity_rules:
      - id: validez_cop
        when: "true"
        status: info
        text:
          es: "El modelo es válido físicamente siempre que el [[cop]] sea mayor que 1.0. Si disminuye por debajo de este límite, el sistema no es una bomba de calor."
          en: "The model is physically valid as long as [[cop]] is greater than 1.0. If it decreases below this limit, the system is not a heat pump."
    graph_rules:
      - id: graph_cop
        when: "true"
        status: info
        text:
          es: "La gráfica indica la pendiente de la curva de calor frente a trabajo, lo que implica una relación lineal de diseño."
          en: "The graph indicates the slope of the heat versus work curve, which implies a linear design relationship."
    likely_errors:
      - id: err_cop_eficiencia
        when: "true"
        status: error
        text:
          es: "Confundir [[cop]] con eficiencia porcentual (siempre > 100%). Esto implica un error de escala."
          en: "Confusing [[cop]] with percentage efficiency (always > 100%). This implies a scale error."
    next_step_rules:
      - id: next_cop
        when: "true"
        status: info
        text:
          es: "Analiza el SCOP para promedios estacionales, lo que significa integrar variaciones externas."
          en: "Analyze the SCOP for seasonal averages, which means integrating external variations."

  q_calor:
    summary_rules:
      - id: calor_total
        when: "true"
        status: info
        text:
          es: "El [[q_calor]] es el flujo total entregado. Por tanto, determina la capacidad del sistema para satisfacer la [[q_demanda]]."
          en: "The [[q_calor]] is the total flow delivered. Therefore, it determines the system's ability to satisfy the [[q_demanda]]."
    coherence_rules:
      - id: balance_calor
        when: "true"
        status: info
        text:
          es: "Físicamente, el [[q_calor]] se compone de la suma del [[w_elec]] y el [[q_ambiente]]."
          en: "Physically, [[q_calor]] consists of the sum of [[w_elec]] and [[q_ambiente]]."
    physical_reading_rules:
      - id: lectura_q_calor
        when: "true"
        status: info
        text:
          es: "Indica la energía térmica neta inyectada en el recinto. Esto implica un aumento de la temperatura interior."
          en: "Indicates the net thermal energy injected into the room. This implies an increase in the indoor temperature."
    model_validity_rules:
      - id: validez_q_calor
        when: "true"
        status: info
        text:
          es: "Significa que el modelo depende de que el condensador esté limpio físicamente."
          en: "It means that the model physically depends on the condenser being clean."
    graph_rules:
      - id: graph_q_calor
        when: "true"
        status: info
        text:
          es: "La barra indica la salida térmica dominante."
          en: "The bar indicates the dominant thermal output."
    likely_errors:
      - id: err_q_calor
        when: "true"
        status: error
        text:
          es: "Confundirlo con el calor extraído, lo que indica falta de balance."
          en: "Confusing it with extracted heat, which indicates lack of balance."
    next_step_rules:
      - id: next_q_calor
        when: "true"
        status: info
        text:
          es: "Verificar aislamiento de tuberías para que el resultado sea coherente."
          en: "Check pipe insulation so the result is coherent."

  q_ambiente:
    summary_rules:
      - id: calor_gratis
        when: "true"
        status: success
        text:
          es: "El [[q_ambiente]] es la energía capturada del entorno. Significa el componente renovable y gratuito del sistema."
          en: "The [[q_ambiente]] is the energy captured from the environment. It means the renewable and free component of the system."
    coherence_rules:
      - id: q_ambiente_posible
        when: "true"
        status: info
        text:
          es: "Depende directamente de la temperatura de la fuente externa. Disminuye físicamente en climas gélidos."
          en: "It directly depends on the temperature of the external source. It physically decreases in freezing climates."
    physical_reading_rules:
      - id: lectura_q_ambiente
        when: "true"
        status: info
        text:
          es: "Esto indica cuánto calor se ha 'bombeado' desde el foco frío. Es el beneficio físico neto."
          en: "This indicates how much heat has been 'pumped' from the cold source. It is the net physical benefit."
    model_validity_rules:
      - id: validez_q_ambiente
        when: "true"
        status: info
        text:
          es: "Esto implica que es válido si no hay formación de hielo masiva."
          en: "This implies it is valid if there is no massive ice formation."
    graph_rules:
      - id: graph_q_ambiente
        when: "true"
        status: info
        text:
          es: "Indica la entrada renovable dominante."
          en: "Indicates the dominant renewable input."
    likely_errors:
      - id: err_q_ambiente
        when: "true"
        status: error
        text:
          es: "Ignorar su existencia, lo que significa un balance incompleto."
          en: "Ignoring its existence, which means an incomplete balance."
    next_step_rules:
      - id: next_q_ambiente
        when: "true"
        status: info
        text:
          es: "Evaluar fuente geotérmica físicamente."
          en: "Evaluate geothermal source physically."

  w_elec:
    summary_rules:
      - id: trabajo_pagado
        when: "true"
        status: info
        text:
          es: "El [[w_elec]] es el motor del ciclo. Por tanto, representa el coste energético que debemos pagar."
          en: "The [[w_elec]] is the cycle's engine. Therefore, it represents the energy cost we must pay."
    coherence_rules:
      - id: w_elec_limite
        when: "true"
        status: info
        text:
          es: "Se opone al flujo natural de calor. Esto implica que el sistema debe realizar trabajo para vencer el gradiente."
          en: "It opposes the natural flow of heat. This implies the system must perform work to overcome the gradient."
    physical_reading_rules:
      - id: lectura_w_elec
        when: "true"
        status: info
        text:
          es: "Físicamente, es el área encerrada en el diagrama P-V del ciclo de compresión."
          en: "Physically, it is the area enclosed in the P-V diagram of the compression cycle."
    model_validity_rules:
      - id: validez_w_elec
        when: "true"
        status: info
        text:
          es: "Significa que es válido dentro de la potencia nominal."
          en: "It means it is valid within the nominal power."
    graph_rules:
      - id: graph_w_elec
        when: "true"
        status: info
        text:
          es: "Indica el coste de entrada."
          en: "Indicates the input cost."
    likely_errors:
      - id: err_w_elec
        when: "true"
        status: error
        text:
          es: "Sumarlo dos veces, lo que indica error de cálculo."
          en: "Adding it twice, which indicates a calculation error."
    next_step_rules:
      - id: next_w_elec
        when: "true"
        status: info
        text:
          es: "Instalar vatímetro físicamente."
          en: "Install wattmeter physically."

  q_demanda:
    summary_rules:
      - id: demanda_edificio
        when: "true"
        status: info
        text:
          es: "La [[q_demanda]] es la carga que el sistema debe compensar. Indica las pérdidas térmicas de la vivienda."
          en: "The [[q_demanda]] is the load the system must compensate for. It indicates the home's thermal losses."
    coherence_rules:
      - id: demanda_vs_clima
        when: "true"
        status: info
        text:
          es: "Aumenta cuando la temperatura exterior disminuye. Por tanto, exige un mayor esfuerzo al equipo."
          en: "It increases when the outdoor temperature decreases. Therefore, it demands greater effort from the equipment."
    physical_reading_rules:
      - id: lectura_q_demanda
        when: "true"
        status: info
        text:
          es: "Esto implica la necesidad de una fuente de calor externa para mantener el equilibrio térmico."
          en: "This implies the need for an external heat source to maintain thermal equilibrium."
    model_validity_rules:
      - id: validez_q_demanda
        when: "true"
        status: info
        text:
          es: "Asume estado estacionario físicamente."
          en: "Assumes steady state physically."
    graph_rules:
      - id: graph_q_demanda
        when: "true"
        status: info
        text:
          es: "Indica el objetivo térmico dominante."
          en: "Indicates the dominant thermal goal."
    likely_errors:
      - id: err_q_demanda
        when: "true"
        status: error
        text:
          es: "Subestimar infiltraciones, lo que significa falta de rigor."
          en: "Underestimating infiltrations, which means lack of rigor."
    next_step_rules:
      - id: next_q_demanda
        when: "true"
        status: info
        text:
          es: "Mejorar ventanas para que el resultado sea coherente."
          en: "Improve windows so the result is coherent."

  ahorro:
    summary_rules:
      - id: ahorro_efecto
        when: "true"
        status: success
        text:
          es: "El [[ahorro]] indica la reducción de consumo frente a sistemas convencionales. Es coherente con un [[cop]] > 1."
          en: "The [[ahorro]] indicates the reduction in consumption compared to conventional systems. It is coherent with a [[cop]] > 1."
    physical_reading_rules:
      - id: lectura_ahorro
        when: "true"
        status: info
        text:
          es: "Físicamente representa el calor ambiental gratuito. Esto implica un beneficio neto."
          en: "Physically represents the free ambient heat. This implies a net benefit."
    coherence_rules:
      - id: coh_ahorro
        when: "true"
        status: info
        text:
          es: "Significa que aumenta con el [[cop]]."
          en: "It means it increases with [[cop]]."
    model_validity_rules:
      - id: val_ahorro
        when: "true"
        status: info
        text:
          es: "Comparación física frente a estufa eléctrica."
          en: "Physical comparison against electric heater."
    graph_rules:
      - id: gr_ahorro
        when: "true"
        status: info
        text:
          es: "Indica la diferencia de consumos."
          en: "Indicates the consumption difference."
    likely_errors:
      - id: err_ahorro
        when: "true"
        status: error
        text:
          es: "Creer que es lineal, lo que indica error de concepto."
          en: "Believing it is linear, which indicates a concept error."
    next_step_rules:
      - id: next_ahorro
        when: "true"
        status: info
        text:
          es: "Verificar facturas físicamente."
          en: "Verify bills physically."

  precio_kwh:
    summary_rules:
      - id: tarifa_mercado
        when: "true"
        status: info
        text:
          es: "El [[precio_kwh]] domina el balance económico final del sistema."
          en: "The [[precio_kwh]] dominates the final economic balance of the system."
    physical_reading_rules:
      - id: pr_precio
        when: "true"
        status: info
        text:
          es: "Indica el valor monetario de la exergía."
          en: "Indicates the monetary value of exergy."
    coherence_rules:
      - id: coh_precio
        when: "true"
        status: info
        text:
          es: "Por tanto depende del mercado."
          en: "Therefore it depends on the market."
    model_validity_rules:
      - id: val_precio
        when: "true"
        status: info
        text:
          es: "Esto implica tarifa PVPC o mercado libre."
          en: "This implies PVPC rate or free market."
    graph_rules:
      - id: gr_precio
        when: "true"
        status: info
        text:
          es: "Indica el factor de escala económico."
          en: "Indicates the economic scale factor."
    likely_errors:
      - id: err_precio
        when: "true"
        status: error
        text:
          es: "No incluir impuestos, lo que significa error contable."
          en: "Not including taxes, which means a bookkeeping error."
    next_step_rules:
      - id: next_precio
        when: "true"
        status: info
        text:
          es: "Comparar tarifas físicamente."
          en: "Compare rates physically."

  coste:
    summary_rules:
      - id: factura_final
        when: "true"
        status: info
        text:
          es: "El [[coste]] es el resultado monetario de la operación física. Por tanto, integra eficiencia y mercado."
          en: "The [[coste]] is the monetary result of the physical operation. Therefore, it integrates efficiency and market."
    physical_reading_rules:
      - id: pr_coste
        when: "true"
        status: info
        text:
          es: "Indica el gasto real."
          en: "Indicates real spending."
    coherence_rules:
      - id: coh_coste
        when: "true"
        status: info
        text:
          es: "Disminuye físicamente si el [[cop]] aumenta."
          en: "Physically decreases if [[cop]] increases."
    model_validity_rules:
      - id: val_coste
        when: "true"
        status: info
        text:
          es: "Esto implica cálculo mensual."
          en: "This implies monthly calculation."
    graph_rules:
      - id: gr_coste
        when: "true"
        status: info
        text:
          es: "Indica el resultado financiero."
          en: "Indicates the financial result."
    likely_errors:
      - id: err_coste
        when: "true"
        status: error
        text:
          es: "Ignorar término fijo, lo que significa error de factura."
          en: "Ignoring fixed term, which means a billing error."
    next_step_rules:
      - id: next_coste
        when: "true"
        status: info
        text:
          es: "Presupuestar invierno físicamente."
          en: "Budget winter physically."

  e_elec:
    summary_rules:
      - id: energia_total
        when: "true"
        status: info
        text:
          es: "La [[e_elec]] es la integral del [[w_elec]] en el tiempo. Significa el consumo total facturado."
          en: "The [[e_elec]] is the integral of [[w_elec]] over time. It means the total billed consumption."
    physical_reading_rules:
      - id: pr_eelec
        when: "true"
        status: info
        text:
          es: "Indica la energía comprada físicamente."
          en: "Indicates energy purchased physically."
    coherence_rules:
      - id: coh_eelec
        when: "true"
        status: info
        text:
          es: "Por tanto es coherente con tiempo de uso."
          en: "Therefore it is coherent with usage time."
    model_validity_rules:
      - id: val_eelec
        when: "true"
        status: info
        text:
          es: "Esto implica lectura de contador."
          en: "This implies meter reading."
    graph_rules:
      - id: gr_eelec
        when: "true"
        status: info
        text:
          es: "Indica el acumulado energético."
          en: "Indicates the energy accumulation."
    likely_errors:
      - id: err_eelec
        when: "true"
        status: error
        text:
          es: "Confundir con potencia, lo que significa error de unidad."
          en: "Confusing with power, which means a unit error."
    next_step_rules:
      - id: next_eelec
        when: "true"
        status: info
        text:
          es: "Optimizar horarios físicamente."
          en: "Optimize schedules physically."

dependencies:
  magnitudes:
    - cop
    - q_calor
    - q_ambiente
    - w_elec
    - q_demanda
    - ahorro
    - precio_kwh
    - coste
    - e_elec
  formulas:
    - cop_definicion
    - balance_primera_ley
    - ahorro_relativo
    - consumo_equivalente
    - facturacion_total
`;export{e as default};
