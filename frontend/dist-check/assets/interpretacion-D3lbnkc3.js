const e=`version: 2
id: eficiencia-interpretacion
leaf_id: eficiencia
nombre:
  es: "Interpretación de Eficiencia Energética"
  en: "Energy Efficiency Interpretation"
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
    title: { es: "Resumen de Eficiencia", en: "Efficiency Summary" }
  physical_reading:
    title: { es: "Lectura Física", en: "Physical Reading" }
  coherence:
    title: { es: "Coherencia de Datos", en: "Data Coherence" }
  model_validity:
    title: { es: "Validez del Modelo", en: "Model Validity" }
  graph_reading:
    title: { es: "Lectura de Gráficos", en: "Graph Reading" }
  likely_errors:
    title: { es: "Errores Comunes", en: "Common Errors" }
  next_step:
    title: { es: "Siguiente Paso", en: "Next Step" }

targets:
  SCOP:
    summary_rules:
      - id: eficiencia_clase
        when: "true"
        status: info
        text:
          es: "El [[SCOP]] determina la clase energética. Un valor mayor a 4 indica alta eficiencia."
          en: "The [[SCOP]] determines the energy class. A value over 4 indicates high efficiency."
    physical_reading_rules:
      - id: read_scop
        when: "result > 5"
        status: warning
        text:
          es: "Un [[SCOP]] superior a 5 es excepcional; verifica si las condiciones exteriores son muy favorables."
          en: "A [[SCOP]] above 5 is exceptional; check if outdoor conditions are very favorable."
    coherence_rules:
      - id: check_scop_min
        when: "result < 1"
        status: error
        text:
          es: "Un [[SCOP]] menor que 1 es termodinámicamente inconsistente para una bomba de calor."
          en: "A [[SCOP]] lower than 1 is thermodynamically inconsistent for a heat pump."
    model_validity_rules:
      - id: validity_scop
        when: "true"
        status: info
        text:
          es: "El valor asume un clima promedio y no contempla variaciones extremas temporales."
          en: "The value assumes an average climate and does not account for extreme temporary variations."
    graph_rules:
      - id: graph_scop
        when: "true"
        status: info
        text:
          es: "En el eje X se observa cómo el aumento del [[SCOP]] reduce drásticamente el consumo eléctrico."
          en: "On the X-axis, you can see how increasing [[SCOP]] drastically reduces electrical consumption."
    likely_errors:
      - id: err_scop_bajo
        when: "result < 2"
        status: error
        text:
          es: "Confundir el valor estacional con el rendimiento instantáneo en condiciones ideales (COP)."
          en: "Confusing the seasonal value with instantaneous performance in ideal conditions (COP)."
    next_step_rules:
      - id: next_scop
        when: "true"
        status: tip
        text:
          es: "Utiliza este [[SCOP]] para estimar el consumo real en un año completo."
          en: "Use this [[SCOP]] to estimate real consumption over a full year."

  Ahorro_pct:
    summary_rules:
      - id: impacto_ahorro
        when: "true"
        status: success
        text:
          es: "El [[Ahorro_pct]] refleja la mejora porcentual respecto a la base."
          en: "The [[Ahorro_pct]] reflects the percentage improvement compared to the base."
    physical_reading_rules:
      - id: physical_ahorro
        when: "true"
        status: info
        text:
          es: "Representa qué fracción de la energía demandada originalmente ya no se consume."
          en: "It represents what fraction of the originally demanded energy is no longer consumed."
    coherence_rules:
      - id: check_ahorro_max
        when: "result > 95"
        status: warning
        text:
          es: "Un ahorro superior al 95% es poco realista; revisa si has ignorado los consumos base inevitables o auxiliares del sistema."
          en: "Savings above 95% are unrealistic; check if you have ignored unavoidable base or auxiliary system consumptions."
    model_validity_rules:
      - id: limit_rebound
        when: "true"
        status: info
        text:
          es: "Este ahorro asume que se mantiene el mismo nivel de servicio térmico. Subir la temperatura tras la mejora (efecto rebote) reducirá el ahorro real."
          en: "This saving assumes that the same thermal service level is maintained. Raising the temperature after the improvement (rebound effect) will reduce real savings."
    graph_rules:
      - id: graph_ahorro
        when: "true"
        status: info
        text:
          es: "Se visualizaría como la diferencia relativa entre las curvas de los dos escenarios."
          en: "It would be visualized as the relative difference between the curves of the two scenarios."
    likely_errors:
      - id: err_ahorro_suma
        when: "true"
        status: error
        text:
          es: "Asumir que al instalar dos medidas del 20% el ahorro total será del 40%, ignorando los rendimientos marginales decrecientes."
          en: "Assuming that installing two 20% measures the total saving will be 40%, ignoring diminishing marginal returns."
    next_step_rules:
      - id: next_ahorro
        when: "true"
        status: tip
        text:
          es: "Cruza este dato con el coste de inversión para determinar el periodo de retorno."
          en: "Cross this data with the investment cost to determine the payback period."

  C_est:
    summary_rules:
      - id: facturacion
        when: "true"
        status: info
        text:
          es: "El [[C_est]] es el coste final facturado en la temporada."
          en: "The [[C_est]] is the final billed cost for the season."
    physical_reading_rules:
      - id: read_cest
        when: "true"
        status: info
        text:
          es: "Es la traducción de la energía consumida a su impacto económico real en el usuario."
          en: "It is the translation of the energy consumed into its real economic impact on the user."
    coherence_rules:
      - id: coher_cest
        when: "result < 0"
        status: error
        text:
          es: "El coste estacional debe ser siempre positivo."
          en: "Seasonal cost must always be positive."
    model_validity_rules:
      - id: model_cest
        when: "true"
        status: info
        text:
          es: "Supone un precio medio de la energía constante."
          en: "Assumes a constant average energy price."
    graph_rules:
      - id: graph_cest
        when: "true"
        status: info
        text:
          es: "El coste escala linealmente con el consumo si el precio es constante."
          en: "The cost scales linearly with consumption if the price is constant."
    likely_errors:
      - id: err_cest_fijo
        when: "true"
        status: error
        text:
          es: "Olvidar que el coste incluye peajes y cargos fijos que no se reducen al mejorar la eficiencia."
          en: "Forgetting that the cost includes tolls and fixed charges that do not decrease when improving efficiency."
    next_step_rules:
      - id: next_audit
        when: "result > 1000"
        status: tip
        text:
          es: "Si el coste supera los 1000 euros, es probable que la envolvente tenga fugas térmicas graves; considera una auditoría."
          en: "If the cost exceeds 1000 euros, the envelope likely has severe thermal leaks; consider an audit."

  E_est:
    summary_rules:
      - id: sum_eest
        when: "true"
        status: info
        text:
          es: "El [[E_est]] es la energía que realmente se demanda de la red eléctrica."
          en: "The [[E_est]] is the energy actually demanded from the electrical grid."
    physical_reading_rules:
      - id: read_eest
        when: "true"
        status: info
        text:
          es: "Cuantifica el esfuerzo energético neto del equipo, que es menor que la demanda térmica gracias al rendimiento."
          en: "It quantifies the net energy effort of the equipment, which is lower than the thermal demand thanks to the performance."
    coherence_rules:
      - id: coher_eest
        when: "result > 20000"
        status: warning
        text:
          es: "Un valor extremadamente alto sugiere un fallo en el aislamiento o un cálculo incorrecto."
          en: "An extremely high value suggests an insulation failure or an incorrect calculation."
    model_validity_rules:
      - id: model_eest
        when: "true"
        status: info
        text:
          es: "Válido para un régimen estacional asumiendo condiciones estándar de uso."
          en: "Valid for a seasonal regime assuming standard conditions of use."
    graph_rules:
      - id: graph_eest
        when: "true"
        status: info
        text:
          es: "Es la variable en el eje Y que decrece asintóticamente a medida que aumenta el SCOP."
          en: "It is the variable on the Y-axis that asymptotically decreases as SCOP increases."
    likely_errors:
      - id: err_eest_demanda
        when: "true"
        status: error
        text:
          es: "Confundir el consumo eléctrico con la demanda térmica del edificio."
          en: "Confusing electrical consumption with the building's thermal demand."
    next_step_rules:
      - id: next_eest
        when: "true"
        status: tip
        text:
          es: "Multiplica este valor por el precio medio para obtener el gasto monetario."
          en: "Multiply this value by the average price to obtain the monetary expense."

dependencies:
  formulas:
    - ahorro_porcentual
    - consumo_estacional
    - facturacion_estacional
  magnitudes:
    - Q_est
    - SCOP
    - E_est
    - precio_medio
    - C_est
    - E_base
    - E_nuevo
    - Ahorro_pct
    - base
    - nuevo
`;export{e as default};
