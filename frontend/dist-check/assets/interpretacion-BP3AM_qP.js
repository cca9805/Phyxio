const e=`version: 2\r
id: coste-electricidad-interpretacion\r
leaf_id: coste-de-la-electricidad\r
nombre:\r
  es: "Interpretacion del Coste Electrico Domestico"\r
  en: "Domestic Electricity Cost Interpretation"\r
scope: domestic\r
\r
output_contract:\r
  sections:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
\r
result_blocks:\r
  summary:\r
    title: { es: "Resumen del coste electrico", en: "Electricity cost summary" }\r
  physical_reading:\r
    title: { es: "Lectura fisica", en: "Physical reading" }\r
  coherence:\r
    title: { es: "Coherencia de datos", en: "Data coherence" }\r
  model_validity:\r
    title: { es: "Validez del modelo", en: "Model validity" }\r
  graph_reading:\r
    title: { es: "Lectura del grafico", en: "Graph reading" }\r
  likely_errors:\r
    title: { es: "Errores comunes", en: "Common errors" }\r
  next_step:\r
    title: { es: "Siguiente paso", en: "Next step" }\r
\r
targets:\r
  C_total:\r
    summary_rules:\r
      - id: C_total_desglose\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El [[coste total de la factura|C_total]] depende de tres componentes independientes. El [[coste de energia|C_energia]] es el unico reducible mediante habitos; el [[coste de potencia|C_potencia]] y los [[costes adicionales y peajes|C_extra]] persisten aunque el consumo sea cero."\r
          en: "[[total bill cost|C_total]] depends on three independent components. [[energy cost|C_energia]] is the only one reducible through habits; [[power cost|C_potencia]] and [[additional charges and levies|C_extra]] persist even if consumption is zero."\r
      - id: C_total_rango_alto\r
        when: "result > 200"\r
        status: warning\r
        text:\r
          es: "El [[coste total de la factura|C_total]] supera los 200 EUR. Verifica que los [[dias del periodo de facturacion|dias]] y la [[potencia contratada|P_contratada]] son correctos."\r
          en: "[[total bill cost|C_total]] exceeds 200 EUR. Verify [[billing period days|dias]] and [[contracted power|P_contratada]] are correct."\r
    physical_reading_rules:\r
      - id: C_total_lectura\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El [[coste total de la factura|C_total]] cuantifica el coste real del servicio electrico. La fraccion correspondiente al [[coste de potencia|C_potencia]] representa el coste minimo inevitable, independientemente del uso."\r
          en: "[[total bill cost|C_total]] quantifies the real cost of the electricity service. The fraction corresponding to [[power cost|C_potencia]] represents the unavoidable minimum cost, regardless of usage."\r
    coherence_rules:\r
      - id: C_total_menor_potencia\r
        when: "true"\r
        status: error\r
        text:\r
          es: "El [[coste total de la factura|C_total]] debe ser mayor que el [[coste de potencia|C_potencia]] aislado. Si no lo es, revisa los valores de [[coste de energia|C_energia]] y [[costes adicionales y peajes|C_extra]]."\r
          en: "[[total bill cost|C_total]] must be greater than [[power cost|C_potencia]] alone. If not, check [[energy cost|C_energia]] and [[additional charges and levies|C_extra]] values."\r
    model_validity_rules:\r
      - id: C_total_validez_dias\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El modelo es valido cuando los [[dias del periodo de facturacion|dias]] son conocidos y fijos. Si se comparan dos periodos con distinto numero de dias, normalizar por dia antes de comparar [[coste total de la factura|C_total]]."\r
          en: "The model is valid when [[billing period days|dias]] are known and fixed. If comparing two periods with different days, normalize per day before comparing [[total bill cost|C_total]]."\r
    graph_rules:\r
      - id: C_total_grafico\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En el grafico de barras apiladas del [[coste total de la factura|C_total]], la barra de [[coste de potencia|C_potencia]] representa el suelo de la factura; su altura no cambia aunque el consumo caiga a cero."\r
          en: "In the stacked bar chart of [[total bill cost|C_total]], the [[power cost|C_potencia]] bar represents the bill floor; its height does not change even if consumption falls to zero."\r
    likely_errors:\r
      - id: C_total_error_proporcional\r
        when: "true"\r
        status: error\r
        text:\r
          es: "Error conceptual frecuente: asumir que el [[coste total de la factura|C_total]] es proporcional al consumo. Una reduccion del 30% del consumo no reduce el [[coste total de la factura|C_total]] un 30% si el termino fijo representa el 35% de la factura."\r
          en: "Frequent conceptual error: assuming [[total bill cost|C_total]] is proportional to consumption. A 30% consumption reduction does not reduce [[total bill cost|C_total]] by 30% if the fixed term represents 35% of the bill."\r
    next_step_rules:\r
      - id: C_total_siguiente\r
        when: "true"\r
        status: tip\r
        text:\r
          es: "Con el [[coste total de la factura|C_total]] calculado, identifica que porcentaje representa cada componente. Si el [[coste de potencia|C_potencia]] supera el 30%, evalua si la [[potencia contratada|P_contratada]] esta sobredimensionada."\r
          en: "With [[total bill cost|C_total]] calculated, identify what percentage each component represents. If [[power cost|C_potencia]] exceeds 30%, evaluate whether [[contracted power|P_contratada]] is oversized."\r
\r
  Ahorro_pct:\r
    summary_rules:\r
      - id: Ahorro_pct_valido\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El [[ahorro porcentual|Ahorro_pct]] positivo indica que la medida ha reducido el [[coste total de la factura|C_total]]. Solo es interpretable si el [[coste del escenario de referencia|C_base]] y el [[coste del escenario nuevo|C_nuevo]] son comparables en servicio, dias y condiciones climaticas."\r
          en: "Positive [[percentage savings|Ahorro_pct]] indicates the measure has reduced [[total bill cost|C_total]]. It is only interpretable if [[reference scenario cost|C_base]] and [[new scenario cost|C_nuevo]] are comparable in service, days, and climatic conditions."\r
      - id: Ahorro_pct_negativo\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Un [[ahorro porcentual|Ahorro_pct]] nulo o negativo indica que la medida no ha reducido el [[coste total de la factura|C_total]]. Verifica que los periodos son comparables."\r
          en: "Zero or negative [[percentage savings|Ahorro_pct]] indicates the measure has not reduced [[total bill cost|C_total]]. Verify that compared periods are equivalent."\r
    physical_reading_rules:\r
      - id: Ahorro_pct_lectura\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El [[ahorro porcentual|Ahorro_pct]] expresa que fraccion del [[coste del escenario de referencia|C_base]] se ha eliminado. Un valor del 15% significa que por cada 100 EUR de factura base, ahora se pagan 85 EUR en condiciones equivalentes."\r
          en: "[[percentage savings|Ahorro_pct]] expresses what fraction of [[reference scenario cost|C_base]] has been eliminated. A value of 15% means for every 100 EUR of base bill, 85 EUR are now paid under equivalent conditions."\r
    coherence_rules:\r
      - id: Ahorro_pct_base_positivo\r
        when: "true"\r
        status: error\r
        text:\r
          es: "El [[coste del escenario de referencia|C_base]] debe ser positivo para calcular el [[ahorro porcentual|Ahorro_pct]]. Un coste de referencia nulo o negativo es fisicamente imposible."\r
          en: "[[reference scenario cost|C_base]] must be positive to calculate [[percentage savings|Ahorro_pct]]. A zero or negative reference cost is physically impossible."\r
    model_validity_rules:\r
      - id: Ahorro_pct_validez\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El [[ahorro porcentual|Ahorro_pct]] solo tiene significado fisico cuando [[coste del escenario de referencia|C_base]] y [[coste del escenario nuevo|C_nuevo]] corresponden al mismo nivel de servicio, mismos [[dias del periodo de facturacion|dias]] y condiciones climaticas equivalentes."\r
          en: "[[percentage savings|Ahorro_pct]] only has physical meaning when [[reference scenario cost|C_base]] and [[new scenario cost|C_nuevo]] correspond to the same service level, same [[billing period days|dias]], and equivalent climatic conditions."\r
    graph_rules:\r
      - id: Ahorro_pct_grafico\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En el grafico comparativo de facturas, el [[ahorro porcentual|Ahorro_pct]] corresponde a la diferencia relativa entre las barras de [[coste del escenario de referencia|C_base]] y [[coste del escenario nuevo|C_nuevo]]."\r
          en: "In the bill comparison chart, [[percentage savings|Ahorro_pct]] corresponds to the relative difference between [[reference scenario cost|C_base]] and [[new scenario cost|C_nuevo]] bars."\r
    likely_errors:\r
      - id: Ahorro_pct_error_consumo\r
        when: "true"\r
        status: error\r
        text:\r
          es: "Error frecuente: calcular el [[ahorro porcentual|Ahorro_pct]] sobre el consumo en kWh en lugar de sobre el [[coste total de la factura|C_total]] en EUR. El ahorro en kWh ignora el termino fijo y sobreestima el ahorro economico real."\r
          en: "Frequent error: calculating [[percentage savings|Ahorro_pct]] on kWh consumption instead of [[total bill cost|C_total]] in EUR. Savings in kWh ignores the fixed term and overestimates real economic savings."\r
    next_step_rules:\r
      - id: Ahorro_pct_siguiente\r
        when: "true"\r
        status: tip\r
        text:\r
          es: "Un [[ahorro porcentual|Ahorro_pct]] inferior al 5% esta dentro del margen de error del modelo simplificado cuando los periodos no son perfectamente homogeneos. Confirma la tendencia en al menos dos periodos equivalentes."\r
          en: "[[percentage savings|Ahorro_pct]] below 5% is within the error margin of the simplified model when periods are not perfectly homogeneous. Confirm the trend over at least two equivalent periods."\r
\r
  C_energia:\r
    summary_rules:\r
      - id: C_energia_desglose\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El [[coste de energia|C_energia]] es el unico componente de la factura controlable mediante habitos de consumo o desplazamiento horario. Representa la fraccion variable del [[coste total de la factura|C_total]]."\r
          en: "[[energy cost|C_energia]] is the only bill component controllable through consumption habits or time-shifting. It represents the variable fraction of [[total bill cost|C_total]]."\r
    physical_reading_rules:\r
      - id: C_energia_lectura\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El [[coste de energia|C_energia]] pondera cada bloque de [[energia por periodo tarifario|E_i]] por su [[precio de la energia por franja|precio_i]]. Un precio de punta doble al de valle implica que cada kWh en punta tiene el doble de impacto economico."\r
          en: "[[energy cost|C_energia]] weights each [[energy per tariff period|E_i]] block by its [[energy price per tariff band|precio_i]]. A peak price twice the off-peak means each kWh at peak has double the economic impact."\r
    coherence_rules:\r
      - id: C_energia_coherencia\r
        when: "true"\r
        status: error\r
        text:\r
          es: "El [[coste de energia|C_energia]] debe ser positivo si hay consumo registrado. Un valor nulo con consumo no nulo indica un error en los [[precios de la energia por franja|precio_i]]."\r
          en: "[[energy cost|C_energia]] must be positive if there is recorded consumption. A zero value with non-zero consumption indicates an error in [[energy price per tariff band|precio_i]] values."\r
    model_validity_rules:\r
      - id: C_energia_validez\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El calculo de [[coste de energia|C_energia]] es valido cuando los [[precios de la energia por franja|precio_i]] son fijos y conocidos para cada franja. En tarifas dinamicas hourly, el precio varia cada hora y el modelo por franjas es una aproximacion."\r
          en: "The [[energy cost|C_energia]] calculation is valid when [[energy price per tariff band|precio_i]] values are fixed and known for each band. In dynamic hourly tariffs, the price varies each hour and the band model is an approximation."\r
    graph_rules:\r
      - id: C_energia_grafico\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En el grafico de barras apiladas, el [[coste de energia|C_energia]] es la barra superior variable cuya altura cambia con el consumo y los precios de franja."\r
          en: "In the stacked bar chart, [[energy cost|C_energia]] is the variable upper bar whose height changes with consumption and band prices."\r
    likely_errors:\r
      - id: C_energia_error\r
        when: "true"\r
        status: error\r
        text:\r
          es: "Error frecuente: calcular el [[coste de energia|C_energia]] con un precio medio unico ignorando la discriminacion horaria. Esto sobreestima el coste si el consumo esta concentrado en valle y lo subestima si esta concentrado en punta."\r
          en: "Frequent error: calculating [[energy cost|C_energia]] with a single average price while ignoring time-of-use pricing. This overestimates cost if consumption is concentrated in off-peak and underestimates it if concentrated in peak."\r
    next_step_rules:\r
      - id: C_energia_siguiente\r
        when: "true"\r
        status: tip\r
        text:\r
          es: "Con el [[coste de energia|C_energia]] calculado por franjas, identifica que franja concentra mayor gasto. Si punta representa mas del 40% del [[coste de energia|C_energia]], evalua si hay cargas flexibles desplazables a valle."\r
          en: "With [[energy cost|C_energia]] calculated by band, identify which band concentrates the most spending. If peak represents more than 40% of [[energy cost|C_energia]], evaluate whether there are flexible loads that can be shifted to off-peak."\r
\r
  C_potencia:\r
    summary_rules:\r
      - id: C_potencia_fijo\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El [[coste de potencia|C_potencia]] es el termino fijo de la factura: persiste aunque el consumo sea cero. Solo se reduce bajando la [[potencia contratada|P_contratada]], y solo es seguro hacerlo si los picos reales de demanda lo permiten."\r
          en: "[[power cost|C_potencia]] is the fixed term of the bill: it persists even if consumption is zero. It can only be reduced by lowering [[contracted power|P_contratada]], and only if real demand peaks allow it."\r
    physical_reading_rules:\r
      - id: C_potencia_lectura\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El [[coste de potencia|C_potencia]] representa el coste de tener disponible la [[potencia contratada|P_contratada]] en cualquier momento. Es proporcional a los [[dias del periodo de facturacion|dias]]: un mes de 31 dias cuesta un 3,3% mas que uno de 30."\r
          en: "[[power cost|C_potencia]] represents the cost of having [[contracted power|P_contratada]] available at any time. It is proportional to [[billing period days|dias]]: a 31-day month costs 3.3% more than a 30-day month."\r
    coherence_rules:\r
      - id: C_potencia_coherencia\r
        when: "true"\r
        status: error\r
        text:\r
          es: "El [[coste de potencia|C_potencia]] debe ser positivo y coherente con la [[potencia contratada|P_contratada]], la [[tarifa de potencia|tarifa_potencia]] y los [[dias del periodo de facturacion|dias]]. Un valor nulo indica datos incorrectos."\r
          en: "[[power cost|C_potencia]] must be positive and consistent with [[contracted power|P_contratada]], [[power tariff|tarifa_potencia]], and [[billing period days|dias]]. A zero value indicates incorrect data."\r
    model_validity_rules:\r
      - id: C_potencia_validez\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El modelo de [[coste de potencia|C_potencia]] es valido para contratos con tarifa de potencia regulada. En contratos de potencia variable o con penalizacion por picos, el modelo requiere extension."\r
          en: "The [[power cost|C_potencia]] model is valid for contracts with regulated power tariffs. In variable power contracts or peak-penalty contracts, the model requires extension."\r
    graph_rules:\r
      - id: C_potencia_grafico\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En el grafico de barras apiladas, el [[coste de potencia|C_potencia]] es la barra base de altura constante que no cambia con el consumo."\r
          en: "In the stacked bar chart, [[power cost|C_potencia]] is the base bar of constant height that does not change with consumption."\r
    likely_errors:\r
      - id: C_potencia_error\r
        when: "true"\r
        status: error\r
        text:\r
          es: "Error frecuente: creer que el [[coste de potencia|C_potencia]] desaparece si no se consume electricidad. En realidad persiste siempre mientras el contrato este activo y la [[potencia contratada|P_contratada]] no se modifique."\r
          en: "Frequent error: believing [[power cost|C_potencia]] disappears if no electricity is consumed. In reality it always persists while the contract is active and [[contracted power|P_contratada]] is not modified."\r
    next_step_rules:\r
      - id: C_potencia_siguiente\r
        when: "true"\r
        status: tip\r
        text:\r
          es: "Si el [[coste de potencia|C_potencia]] representa mas del 30% del [[coste total de la factura|C_total]], registra los picos de demanda simultanea durante un mes completo para evaluar si es posible bajar la [[potencia contratada|P_contratada]] de forma segura."\r
          en: "If [[power cost|C_potencia]] represents more than 30% of [[total bill cost|C_total]], record simultaneous demand peaks for a full month to evaluate whether it is safe to lower [[contracted power|P_contratada]]."\r
\r
dependencies:\r
  formulas:\r
    - coste_energia\r
    - coste_potencia\r
    - coste_total\r
    - ahorro_pct\r
  magnitudes:\r
    - E_i\r
    - precio_i\r
    - C_energia\r
    - P_contratada\r
    - tarifa_potencia\r
    - dias\r
    - C_potencia\r
    - C_extra\r
    - C_total\r
    - C_base\r
    - C_nuevo\r
    - Ahorro_pct\r
`;export{e as default};
