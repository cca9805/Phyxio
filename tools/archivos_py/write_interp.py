content = open('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad/interpretacion.yaml', 'w', encoding='utf-8')
content.write("""version: 2
id: coste-electricidad-interpretacion
leaf_id: coste-de-la-electricidad
nombre:
  es: "Interpretacion del Coste Electrico Domestico"
  en: "Domestic Electricity Cost Interpretation"
scope: domestic

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
    title: { es: "Resumen del coste electrico", en: "Electricity cost summary" }
  physical_reading:
    title: { es: "Lectura fisica", en: "Physical reading" }
  coherence:
    title: { es: "Coherencia de datos", en: "Data coherence" }
  model_validity:
    title: { es: "Validez del modelo", en: "Model validity" }
  graph_reading:
    title: { es: "Lectura del grafico", en: "Graph reading" }
  likely_errors:
    title: { es: "Errores comunes", en: "Common errors" }
  next_step:
    title: { es: "Siguiente paso", en: "Next step" }

targets:
  C_total:
    summary_rules:
      - id: C_total_desglose
        when: "true"
        status: info
        text:
          es: "El [[coste total de la factura|C_total]] depende de tres componentes independientes. El [[coste de energia|C_energia]] es el unico reducible mediante habitos; el [[coste de potencia|C_potencia]] y los [[costes adicionales y peajes|C_extra]] persisten aunque el consumo sea cero."
          en: "[[total bill cost|C_total]] depends on three independent components. [[energy cost|C_energia]] is the only one reducible through habits; [[power cost|C_potencia]] and [[additional charges and levies|C_extra]] persist even if consumption is zero."
      - id: C_total_rango_alto
        when: "result > 200"
        status: warning
        text:
          es: "El [[coste total de la factura|C_total]] supera los 200 EUR. Verifica que los [[dias del periodo de facturacion|dias]] y la [[potencia contratada|P_contratada]] son correctos."
          en: "[[total bill cost|C_total]] exceeds 200 EUR. Verify [[billing period days|dias]] and [[contracted power|P_contratada]] are correct."
    physical_reading_rules:
      - id: C_total_lectura
        when: "true"
        status: info
        text:
          es: "El [[coste total de la factura|C_total]] cuantifica el coste real del servicio electrico. La fraccion correspondiente al [[coste de potencia|C_potencia]] representa el coste minimo inevitable, independientemente del uso."
          en: "[[total bill cost|C_total]] quantifies the real cost of the electricity service. The fraction corresponding to [[power cost|C_potencia]] represents the unavoidable minimum cost, regardless of usage."
    coherence_rules:
      - id: C_total_menor_potencia
        when: "true"
        status: error
        text:
          es: "El [[coste total de la factura|C_total]] debe ser mayor que el [[coste de potencia|C_potencia]] aislado. Si no lo es, revisa los valores de [[coste de energia|C_energia]] y [[costes adicionales y peajes|C_extra]]."
          en: "[[total bill cost|C_total]] must be greater than [[power cost|C_potencia]] alone. If not, check [[energy cost|C_energia]] and [[additional charges and levies|C_extra]] values."
    model_validity_rules:
      - id: C_total_validez_dias
        when: "true"
        status: info
        text:
          es: "El modelo es valido cuando los [[dias del periodo de facturacion|dias]] son conocidos y fijos. Si se comparan dos periodos con distinto numero de dias, normalizar por dia antes de comparar [[coste total de la factura|C_total]]."
          en: "The model is valid when [[billing period days|dias]] are known and fixed. If comparing two periods with different days, normalize per day before comparing [[total bill cost|C_total]]."
    graph_rules:
      - id: C_total_grafico
        when: "true"
        status: info
        text:
          es: "En el grafico de barras apiladas del [[coste total de la factura|C_total]], la barra de [[coste de potencia|C_potencia]] representa el suelo de la factura; su altura no cambia aunque el consumo caiga a cero."
          en: "In the stacked bar chart of [[total bill cost|C_total]], the [[power cost|C_potencia]] bar represents the bill floor; its height does not change even if consumption falls to zero."
    likely_errors:
      - id: C_total_error_proporcional
        when: "true"
        status: error
        text:
          es: "Error conceptual frecuente: asumir que el [[coste total de la factura|C_total]] es proporcional al consumo. Una reduccion del 30% del consumo no reduce el [[coste total de la factura|C_total]] un 30% si el termino fijo representa el 35% de la factura."
          en: "Frequent conceptual error: assuming [[total bill cost|C_total]] is proportional to consumption. A 30% consumption reduction does not reduce [[total bill cost|C_total]] by 30% if the fixed term represents 35% of the bill."
    next_step_rules:
      - id: C_total_siguiente
        when: "true"
        status: tip
        text:
          es: "Con el [[coste total de la factura|C_total]] calculado, identifica que porcentaje representa cada componente. Si el [[coste de potencia|C_potencia]] supera el 30%, evalua si la [[potencia contratada|P_contratada]] esta sobredimensionada."
          en: "With [[total bill cost|C_total]] calculated, identify what percentage each component represents. If [[power cost|C_potencia]] exceeds 30%, evaluate whether [[contracted power|P_contratada]] is oversized."

  Ahorro_pct:
    summary_rules:
      - id: Ahorro_pct_valido
        when: "true"
        status: info
        text:
          es: "El [[ahorro porcentual|Ahorro_pct]] positivo indica que la medida ha reducido el [[coste total de la factura|C_total]]. Solo es interpretable si el [[coste del escenario de referencia|C_base]] y el [[coste del escenario nuevo|C_nuevo]] son comparables en servicio, dias y condiciones climaticas."
          en: "Positive [[percentage savings|Ahorro_pct]] indicates the measure has reduced [[total bill cost|C_total]]. It is only interpretable if [[reference scenario cost|C_base]] and [[new scenario cost|C_nuevo]] are comparable in service, days, and climatic conditions."
      - id: Ahorro_pct_negativo
        when: "true"
        status: warning
        text:
          es: "Un [[ahorro porcentual|Ahorro_pct]] nulo o negativo indica que la medida no ha reducido el [[coste total de la factura|C_total]]. Verifica que los periodos son comparables."
          en: "Zero or negative [[percentage savings|Ahorro_pct]] indicates the measure has not reduced [[total bill cost|C_total]]. Verify that compared periods are equivalent."
    physical_reading_rules:
      - id: Ahorro_pct_lectura
        when: "true"
        status: info
        text:
          es: "El [[ahorro porcentual|Ahorro_pct]] expresa que fraccion del [[coste del escenario de referencia|C_base]] se ha eliminado. Un valor del 15% significa que por cada 100 EUR de factura base, ahora se pagan 85 EUR en condiciones equivalentes."
          en: "[[percentage savings|Ahorro_pct]] expresses what fraction of [[reference scenario cost|C_base]] has been eliminated. A value of 15% means for every 100 EUR of base bill, 85 EUR are now paid under equivalent conditions."
    coherence_rules:
      - id: Ahorro_pct_base_positivo
        when: "true"
        status: error
        text:
          es: "El [[coste del escenario de referencia|C_base]] debe ser positivo para calcular el [[ahorro porcentual|Ahorro_pct]]. Un coste de referencia nulo o negativo es fisicamente imposible."
          en: "[[reference scenario cost|C_base]] must be positive to calculate [[percentage savings|Ahorro_pct]]. A zero or negative reference cost is physically impossible."
    model_validity_rules:
      - id: Ahorro_pct_validez
        when: "true"
        status: info
        text:
          es: "El [[ahorro porcentual|Ahorro_pct]] solo tiene significado fisico cuando [[coste del escenario de referencia|C_base]] y [[coste del escenario nuevo|C_nuevo]] corresponden al mismo nivel de servicio, mismos [[dias del periodo de facturacion|dias]] y condiciones climaticas equivalentes."
          en: "[[percentage savings|Ahorro_pct]] only has physical meaning when [[reference scenario cost|C_base]] and [[new scenario cost|C_nuevo]] correspond to the same service level, same [[billing period days|dias]], and equivalent climatic conditions."
    graph_rules:
      - id: Ahorro_pct_grafico
        when: "true"
        status: info
        text:
          es: "En el grafico comparativo de facturas, el [[ahorro porcentual|Ahorro_pct]] corresponde a la diferencia relativa entre las barras de [[coste del escenario de referencia|C_base]] y [[coste del escenario nuevo|C_nuevo]]."
          en: "In the bill comparison chart, [[percentage savings|Ahorro_pct]] corresponds to the relative difference between [[reference scenario cost|C_base]] and [[new scenario cost|C_nuevo]] bars."
    likely_errors:
      - id: Ahorro_pct_error_consumo
        when: "true"
        status: error
        text:
          es: "Error frecuente: calcular el [[ahorro porcentual|Ahorro_pct]] sobre el consumo en kWh en lugar de sobre el [[coste total de la factura|C_total]] en EUR. El ahorro en kWh ignora el termino fijo y sobreestima el ahorro economico real."
          en: "Frequent error: calculating [[percentage savings|Ahorro_pct]] on kWh consumption instead of [[total bill cost|C_total]] in EUR. Savings in kWh ignores the fixed term and overestimates real economic savings."
    next_step_rules:
      - id: Ahorro_pct_siguiente
        when: "true"
        status: tip
        text:
          es: "Un [[ahorro porcentual|Ahorro_pct]] inferior al 5% esta dentro del margen de error del modelo simplificado cuando los periodos no son perfectamente homogeneos. Confirma la tendencia en al menos dos periodos equivalentes."
          en: "[[percentage savings|Ahorro_pct]] below 5% is within the error margin of the simplified model when periods are not perfectly homogeneous. Confirm the trend over at least two equivalent periods."

dependencies:
  formulas:
    - coste_energia
    - coste_potencia
    - coste_total
    - ahorro_pct
  magnitudes:
    - E_i
    - precio_i
    - C_energia
    - P_contratada
    - tarifa_potencia
    - dias
    - C_potencia
    - C_extra
    - C_total
    - C_base
    - C_nuevo
    - Ahorro_pct
""")
content.close()
print('done')
