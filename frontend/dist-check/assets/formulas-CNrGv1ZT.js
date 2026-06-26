const e=`version: 2
topic:
  id: coste-de-la-electricidad
  title:
    es: 'Coste de la electricidad'
    en: 'Cost of Electricity'

variables:
  - id: E_i
    symbol: 'E_i'
    nombre: { es: energía por franja, en: energy per tariff band }
    unidad_si: 'kWh'
  - id: precio_i
    symbol: 'p_i'
    nombre: { es: precio por franja, en: price per tariff band }
    unidad_si: 'EUR/kWh'
  - id: C_energia
    symbol: 'C_e'
    nombre: { es: coste de energía, en: energy cost }
    unidad_si: 'EUR'
  - id: P_contratada
    symbol: 'P_c'
    nombre: { es: potencia contratada, en: contracted power }
    unidad_si: 'kW'
  - id: tarifa_potencia
    symbol: 't_p'
    nombre: { es: tarifa de potencia, en: power tariff }
    unidad_si: 'EUR/(kW·día)'
  - id: dias
    symbol: 'd'
    nombre: { es: días del periodo, en: billing period days }
    unidad_si: 'días'
  - id: C_potencia
    symbol: 'C_p'
    nombre: { es: coste de potencia, en: power cost }
    unidad_si: 'EUR'
  - id: C_extra
    symbol: 'C_x'
    nombre: { es: costes adicionales, en: additional charges }
    unidad_si: 'EUR'
  - id: C_total
    symbol: 'C_T'
    nombre: { es: coste total, en: total cost }
    unidad_si: 'EUR'
  - id: C_base
    symbol: 'C_0'
    nombre: { es: coste de referencia, en: reference cost }
    unidad_si: 'EUR'
  - id: C_nuevo
    symbol: 'C_1'
    nombre: { es: coste nuevo, en: new cost }
    unidad_si: 'EUR'
  - id: Ahorro_pct
    symbol: 'A_%'
    nombre: { es: ahorro porcentual, en: percentage savings }
    unidad_si: '%'

formulas:
  - id: coste_energia
    title:
      es: Coste de energía
      en: Energy cost
    equation: C_energia = sum(E_i * precio_i)
    latex: 'C_e = \\sum_i E_i \\cdot p_i'
    rearrangements:
      - target: C_energia
        equation: C_energia = sum(E_i * precio_i)
        latex: 'C_e = \\sum_i E_i \\cdot p_i'
    category: fundamental
    relation_type: physical_definition
    physical_meaning:
      es: El coste variable es la suma del consumo de cada franja multiplicado por su precio unitario.
      en: The variable cost is the sum of each band's consumption multiplied by its unit price.
    constraints: "E_i >= 0, precio_i > 0"
    validity:
      es: Válida para tarifas con discriminación horaria; con tarifa plana, se simplifica a C_e = E_total * p.
      en: Valid for time-of-use tariffs; with flat tariff, simplifies to C_e = E_total * p.
    dimension_check: "[C_e] = kWh * EUR/kWh = EUR"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion, graficos]
    interpretation_tags: [coste, energia, franja, tarifa]
    result_semantics:
      target: C_energia
    domain_checks:
      - expr: "E_i >= 0"
        message:
          es: "El consumo por franja no puede ser negativo."
          en: "Consumption per band cannot be negative."
      - expr: "precio_i > 0"
        message:
          es: "El precio de la energía debe ser positivo."
          en: "Energy price must be positive."
    coherence_checks: []
    graph_implications: ["Relación lineal entre consumo total y coste de energía con pendiente igual al precio medio ponderado."]
    pedagogical_triggers: []

  - id: coste_potencia
    title:
      es: Coste de potencia
      en: Power cost
    equation: C_potencia = P_contratada * tarifa_potencia * dias
    latex: 'C_p = P_c \\cdot t_p \\cdot d'
    rearrangements:
      - target: C_potencia
        equation: C_potencia = P_contratada * tarifa_potencia * dias
        latex: 'C_p = P_c \\cdot t_p \\cdot d'
    category: fundamental
    relation_type: physical_definition
    physical_meaning:
      es: El término fijo se paga por tener capacidad de suministro disponible, independientemente del consumo real.
      en: The fixed term is paid for having supply capacity available, regardless of actual consumption.
    constraints: "P_contratada > 0, tarifa_potencia > 0, dias > 0"
    validity:
      es: Válida para contratos residenciales con tarifa regulada; en contratos de mercado libre puede variar la estructura.
      en: Valid for residential contracts with regulated tariff; free-market contracts may have different structures.
    dimension_check: "[C_p] = kW * EUR/(kW·día) * días = EUR"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [potencia, fijo, contrato, capacidad]
    result_semantics:
      target: C_potencia
    domain_checks:
      - expr: "P_contratada > 0"
        message:
          es: "La potencia contratada debe ser positiva."
          en: "Contracted power must be positive."
      - expr: "dias > 0"
        message:
          es: "El periodo de facturación debe tener al menos un día."
          en: "Billing period must have at least one day."
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []

  - id: coste_total
    title:
      es: Coste total de la factura
      en: Total bill cost
    equation: C_total = C_energia + C_potencia + C_extra
    latex: 'C_T = C_e + C_p + C_x'
    rearrangements:
      - target: C_total
        equation: C_total = C_energia + C_potencia + C_extra
        latex: 'C_T = C_e + C_p + C_x'
    category: fundamental
    relation_type: additive_decomposition
    physical_meaning:
      es: "La factura eléctrica es la suma de tres componentes: parte variable por consumo, parte fija por potencia y extras regulatorios."
      en: "The electricity bill is the sum of three components: variable part for consumption, fixed part for power, and regulatory extras."
    constraints: "C_energia >= 0, C_potencia > 0, C_extra >= 0"
    validity:
      es: "Válida para el modelo simplificado de factura residencial española; puede variar según contrato y regulación vigente."
      en: "Valid for the simplified model of a Spanish residential electricity bill; may vary by contract and current regulation."
    dimension_check: "[C_T] = EUR + EUR + EUR = EUR"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion, graficos]
    interpretation_tags: [total, factura, desglose, suma]
    result_semantics:
      target: C_total
    domain_checks:
      - expr: "C_potencia > 0"
        message:
          es: "El coste de potencia debe ser positivo; revisa la potencia contratada."
          en: "Power cost must be positive; check contracted power."
    coherence_checks:
      - expr: "C_total > C_potencia"
        message:
          es: "El coste total debe ser mayor que el término de potencia solo."
          en: "Total cost must be greater than the power term alone."
    graph_implications: ["El coste total como función del consumo es una línea con pendiente positiva y origen no nulo (término fijo)."]
    pedagogical_triggers: []

  - id: ahorro_pct
    title:
      es: Ahorro porcentual respecto al escenario base
      en: Percentage savings relative to baseline scenario
    equation: Ahorro_pct = 100 * (1 - C_nuevo / C_base)
    latex: 'A_\\% = 100\\left(1 - \\frac{C_1}{C_0}\\right)'
    rearrangements:
      - target: Ahorro_pct
        equation: Ahorro_pct = 100 * (1 - C_nuevo / C_base)
        latex: 'A_\\% = 100\\left(1 - \\frac{C_1}{C_0}\\right)'
    category: analysis
    relation_type: comparative_indicator
    physical_meaning:
      es: Cuantifica en porcentaje cuánto se ha reducido el coste total respecto a la situación de referencia comparable.
      en: Quantifies as a percentage how much the total cost has been reduced relative to the comparable reference situation.
    constraints: "C_base > 0"
    validity:
      es: "Solo válida si el escenario base y el nuevo son comparables en servicio, condiciones y periodo."
      en: "Only valid if the baseline and new scenarios are comparable in service, conditions, and period."
    dimension_check: "[A_%] = EUR/EUR * 100 = % (adimensional)"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion, graficos]
    interpretation_tags: [ahorro, porcentaje, comparativa, baseline]
    result_semantics:
      target: Ahorro_pct
    domain_checks:
      - expr: "C_base > 0"
        message:
          es: "El coste de referencia debe ser positivo para calcular el ahorro porcentual."
          en: "Reference cost must be positive to calculate percentage savings."
    coherence_checks:
      - expr: "C_nuevo >= 0"
        message:
          es: "El coste nuevo no puede ser negativo."
          en: "New cost cannot be negative."
    graph_implications: []
    pedagogical_triggers: []

ui:
  default_formula: coste_total
  groups:
    - title:
        es: Ecuaciones fundamentales
        en: Fundamental equations
      items:
        - coste_energia
        - coste_potencia
        - coste_total
        - ahorro_pct
`;export{e as default};
