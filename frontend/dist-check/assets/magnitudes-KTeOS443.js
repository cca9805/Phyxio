const e=`version: 2

magnitudes:
  - id: E_i
    symbol: 'E_i'
    nombre:
      es: energía por periodo tarifario
      en: energy per tariff period
    unidad_si: 'kWh'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: Energía eléctrica consumida en cada franja tarifaria (punta, llano, valle) del periodo de facturación.
      en: Electrical energy consumed in each tariff band (peak, flat, off-peak) of the billing period.
    is_vector: false
    components: []
    category: energy
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion, graficos]
    common_mistake:
      es: Usar el consumo total sin desglosar por franja y precio correspondiente.
      en: Using total consumption without breaking it down by band and corresponding price.
    typical_range: [50, 500]
    sign_behavior: strictly_positive
    zero_behavior: no_cost
    value_nature: scalar
    interpretation_role: input
    graph_binding: x_axis
    pedagogical_notes: "Variable medida por el contador inteligente; su desglose permite optimizar horarios."

  - id: precio_i
    symbol: 'p_i'
    nombre:
      es: precio de la energía por franja
      en: energy price per tariff band
    unidad_si: 'EUR/kWh'
    dimension: 'L^{-2} M^{-1} T^2 I^{-2}'
    descripcion:
      es: Precio unitario de la electricidad en cada franja tarifaria del contrato.
      en: Unit electricity price in each tariff band of the contract.
    is_vector: false
    components: []
    category: economic
    physical_role:
      es: parámetro de contrato
      en: contract parameter
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Usar un precio medio único cuando el contrato tiene discriminación horaria.
      en: Using a single average price when the contract has time-of-use differentiation.
    typical_range: [0.08, 0.35]
    sign_behavior: strictly_positive
    zero_behavior: free_energy
    value_nature: scalar
    interpretation_role: input
    graph_binding: none
    pedagogical_notes: "El precio varía entre franjas; la optimización horaria consiste en desplazar consumo a la franja más barata."

  - id: C_energia
    symbol: 'C_e'
    nombre:
      es: coste de energía
      en: energy cost
    unidad_si: 'EUR'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: Parte variable de la factura, proporcional al consumo de energía ponderado por precios de franja.
      en: Variable part of the bill, proportional to energy consumption weighted by band prices.
    is_vector: false
    components: []
    category: economic
    physical_role:
      es: resultado calculado
      en: calculated result
    used_in: [teoria, ejemplos, interpretacion, graficos]
    common_mistake:
      es: Confundir el coste de energía con el coste total de la factura.
      en: Confusing energy cost with total bill cost.
    typical_range: [20, 200]
    sign_behavior: strictly_positive
    zero_behavior: no_consumption
    value_nature: scalar
    interpretation_role: intermediate
    graph_binding: y_axis
    pedagogical_notes: "La única parte de la factura que el usuario puede reducir directamente con sus hábitos de uso."

  - id: P_contratada
    symbol: 'P_c'
    nombre:
      es: potencia contratada
      en: contracted power
    unidad_si: 'kW'
    dimension: 'L^2 M T^{-3}'
    descripcion:
      es: "Potencia máxima garantizada por el distribuidor; determina el término fijo de la factura."
      en: "Maximum power guaranteed by the distributor; determines the fixed term of the bill."
    is_vector: false
    components: []
    category: power
    physical_role:
      es: parámetro de contrato
      en: contract parameter
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Bajar la potencia contratada sin verificar las puntas de demanda reales del hogar.
      en: Lowering contracted power without checking real demand peaks in the home.
    typical_range: [2.3, 15.0]
    sign_behavior: strictly_positive
    zero_behavior: no_supply
    value_nature: scalar
    interpretation_role: input
    graph_binding: none
    pedagogical_notes: "Parámetro de contrato; ajustarlo solo compensa si la demanda pico real es inferior."

  - id: tarifa_potencia
    symbol: 't_p'
    nombre:
      es: tarifa de potencia
      en: power tariff
    unidad_si: 'EUR/(kW·día)'
    dimension: 'M^{-1} T^3'
    descripcion:
      es: "Coste diario por kilovatio de potencia contratada; determina el peso del término fijo."
      en: "Daily cost per kilowatt of contracted power; determines the weight of the fixed term."
    is_vector: false
    components: []
    category: economic
    physical_role:
      es: parámetro regulatorio
      en: regulatory parameter
    used_in: [teoria, ejemplos]
    common_mistake:
      es: Ignorar este término al estimar el coste total, subestimando la factura.
      en: Ignoring this term when estimating total cost, underestimating the bill.
    typical_range: [0.09, 0.15]
    sign_behavior: strictly_positive
    zero_behavior: no_fixed_cost
    value_nature: scalar
    interpretation_role: input
    graph_binding: none
    pedagogical_notes: "Fijado por regulación; varía según periodo tarifario y comunidad autónoma."

  - id: dias
    symbol: 'd'
    nombre:
      es: días del periodo de facturación
      en: billing period days
    unidad_si: 'días'
    dimension: 'T'
    descripcion:
      es: "Número de días del periodo facturado; necesario para calcular el término fijo de potencia."
      en: "Number of days in the billed period; needed to calculate the power fixed term."
    is_vector: false
    components: []
    category: time
    physical_role:
      es: parámetro de facturación
      en: billing parameter
    used_in: [teoria, ejemplos]
    common_mistake:
      es: Asumir periodos de exactamente 30 días cuando la factura puede tener 28 o 31.
      en: Assuming exactly 30-day periods when the bill may cover 28 or 31 days.
    typical_range: [28, 31]
    sign_behavior: strictly_positive
    zero_behavior: no_billing
    value_nature: scalar
    interpretation_role: input
    graph_binding: none
    pedagogical_notes: "Afecta al término fijo; dos meses de igual consumo pueden tener distinto coste fijo si tienen distinta duración."

  - id: C_potencia
    symbol: 'C_p'
    nombre:
      es: coste de potencia
      en: power cost
    unidad_si: 'EUR'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: "Término fijo de la factura, proporcional a la potencia contratada y al número de días."
      en: "Fixed term of the bill, proportional to contracted power and number of days."
    is_vector: false
    components: []
    category: economic
    physical_role:
      es: resultado calculado
      en: calculated result
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Creer que reducir el consumo elimina también el término fijo; este persiste independientemente del uso.
      en: Believing that reducing consumption also eliminates the fixed term; it persists regardless of use.
    typical_range: [8, 50]
    sign_behavior: strictly_positive
    zero_behavior: no_contract
    value_nature: scalar
    interpretation_role: intermediate
    graph_binding: none
    pedagogical_notes: "El término fijo pone un suelo al ahorro: aunque se consuma cero kWh, esta parte sigue en la factura."

  - id: C_extra
    symbol: 'C_x'
    nombre:
      es: costes adicionales y peajes
      en: additional charges and levies
    unidad_si: 'EUR'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: "Impuestos, alquiler de contador, peajes de red y otros cargos fijos no vinculados al consumo ni a la potencia."
      en: "Taxes, meter rental, network tolls, and other fixed charges not linked to consumption or power."
    is_vector: false
    components: []
    category: economic
    physical_role:
      es: parámetro de facturación
      en: billing parameter
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Ignorar estos costes al calcular el coste total, obteniendo un resultado inferior al real.
      en: Ignoring these costs when calculating total cost, getting a result lower than actual.
    typical_range: [5, 20]
    sign_behavior: non_negative
    zero_behavior: no_extras
    value_nature: scalar
    interpretation_role: input
    graph_binding: none
    pedagogical_notes: "Incontrolable por el usuario; su conocimiento es necesario para una auditoría completa."

  - id: C_total
    symbol: 'C_T'
    nombre:
      es: coste total de la factura
      en: total bill cost
    unidad_si: 'EUR'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: "Suma de todos los componentes de la factura eléctrica: término de energía, término de potencia y extras."
      en: "Sum of all electricity bill components: energy term, power term, and extras."
    is_vector: false
    components: []
    category: economic
    physical_role:
      es: resultado calculado
      en: calculated result
    used_in: [teoria, ejemplos, interpretacion, graficos]
    common_mistake:
      es: Comparar facturas de distintos periodos sin controlar número de días y condiciones de uso.
      en: Comparing bills from different periods without controlling for number of days and usage conditions.
    typical_range: [30, 300]
    sign_behavior: strictly_positive
    zero_behavior: impossible
    value_nature: scalar
    interpretation_role: output
    graph_binding: y_axis
    pedagogical_notes: "La magnitud que aparece en la factura; su desglose en componentes es la clave del análisis físico."

  - id: C_base
    symbol: 'C_0'
    nombre:
      es: coste del escenario de referencia
      en: reference scenario cost
    unidad_si: 'EUR'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: Coste total del periodo de referencia, antes de aplicar ninguna medida de ahorro.
      en: Total cost of the reference period, before any savings measure is applied.
    is_vector: false
    components: []
    category: economic
    physical_role:
      es: referencia de comparación
      en: comparison baseline
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Usar una factura de temporada distinta como baseline sin corregir por condiciones climáticas.
      en: Using a different-season bill as baseline without correcting for climatic conditions.
    typical_range: [30, 300]
    sign_behavior: strictly_positive
    zero_behavior: no_baseline
    value_nature: scalar
    interpretation_role: input
    graph_binding: none
    pedagogical_notes: "La elección del baseline es el paso más crítico de cualquier análisis de ahorro."

  - id: C_nuevo
    symbol: 'C_1'
    nombre:
      es: coste del escenario nuevo
      en: new scenario cost
    unidad_si: 'EUR'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: Coste total del periodo tras aplicar la medida de ahorro que se quiere evaluar.
      en: Total cost of the period after applying the savings measure being evaluated.
    is_vector: false
    components: []
    category: economic
    physical_role:
      es: resultado de escenario
      en: scenario result
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Comparar con un baseline no equivalente (distinto periodo, clima o número de días).
      en: Comparing with a non-equivalent baseline (different period, climate, or number of days).
    typical_range: [20, 280]
    sign_behavior: strictly_positive
    zero_behavior: impossible
    value_nature: scalar
    interpretation_role: output
    graph_binding: none
    pedagogical_notes: "Solo tiene sentido si el baseline es comparable en servicio y condiciones."

  - id: Ahorro_pct
    symbol: 'A_%'
    nombre:
      es: ahorro porcentual
      en: percentage savings
    unidad_si: '%'
    dimension: '1'
    descripcion:
      es: Reducción relativa del coste total respecto al escenario de referencia, expresada en porcentaje.
      en: Relative reduction in total cost compared to the reference scenario, expressed as a percentage.
    is_vector: false
    components: []
    category: economic
    physical_role:
      es: indicador de rendimiento
      en: performance indicator
    used_in: [teoria, ejemplos, interpretacion, graficos]
    common_mistake:
      es: Confundir ahorro porcentual con ahorro absoluto en EUR; una medida puede tener alto porcentaje pero bajo impacto económico real.
      en: Confusing percentage savings with absolute EUR savings; a measure may have a high percentage but low real economic impact.
    typical_range: [0, 50]
    sign_behavior: non_negative
    zero_behavior: no_savings
    value_nature: scalar
    interpretation_role: output
    graph_binding: none
    pedagogical_notes: "El ahorro porcentual solo es significativo si el baseline es comparable; sin baseline fiable, el porcentaje es engañoso."
`;export{e as default};
