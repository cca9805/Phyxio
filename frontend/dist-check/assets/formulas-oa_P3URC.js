const e=`version: 2
topic:
  id: eficiencia
  title:
    es: 'Eficiencia y Ahorro en Climatización'
    en: 'Efficiency and Savings in Climate Control'

variables:
  - id: Q_est
    symbol: 'Q_{est}'
    nombre: { es: demanda térmica estacional, en: seasonal thermal demand }
    unidad_si: 'kWh'
  - id: SCOP
    symbol: 'SCOP'
    nombre: { es: rendimiento estacional, en: seasonal performance }
    unidad_si: '-'
  - id: E_est
    symbol: 'E_{est}'
    nombre: { es: consumo eléctrico estacional, en: seasonal electric consumption }
    unidad_si: 'kWh'
  - id: precio_medio
    symbol: 'p_{medio}'
    nombre: { es: precio medio de la energía, en: average energy price }
    unidad_si: 'EUR/kWh'
  - id: C_est
    symbol: 'C_{est}'
    nombre: { es: coste económico estacional, en: seasonal economic cost }
    unidad_si: 'EUR'
  - id: E_base
    symbol: 'E_{base}'
    nombre: { es: consumo escenario base, en: base scenario consumption }
    unidad_si: 'kWh'
  - id: E_nuevo
    symbol: 'E_{nuevo}'
    nombre: { es: consumo escenario nuevo, en: new scenario consumption }
    unidad_si: 'kWh'
  - id: Ahorro_pct
    symbol: '\\Delta E_{\\%}'
    nombre: { es: ahorro energético porcentual, en: percentage energy savings }
    unidad_si: '%'

formulas:
  - id: consumo_estacional
    title:
      es: Consumo eléctrico estacional
      en: Seasonal electric consumption
    equation: E_est = Q_est / SCOP
    latex: 'E_{est} = \\frac{Q_{est}}{SCOP}'
    rearrangements:
      - target: E_est
        equation: E_est = Q_est / SCOP
        latex: 'E_{est} = \\frac{Q_{est}}{SCOP}'
    category: fundamental
    relation_type: physical_definition
    physical_meaning:
      es: El consumo eléctrico es la demanda térmica dividida por la capacidad de multiplicación del equipo.
      en: Electrical consumption is the thermal demand divided by the equipment's multiplication capacity.
    constraints: "SCOP > 0"
    validity:
      es: Válida para balances estacionales promediados.
      en: Valid for averaged seasonal balances.
    dimension_check: "[E] = [Q]/[1] = Energy"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion, graficos]
    interpretation_tags: [eficiencia, consumo, balance]
    result_semantics:
      target: E_est
    domain_checks:
      - expr: "SCOP >= 1"
        message:
          es: "El SCOP debe ser al menos 1 por la primera ley de la termodinámica en calefacción."
          en: "SCOP must be at least 1 due to the first law of thermodynamics in heating."
    coherence_checks: []
    graph_implications: ["Relación de hipérbola si SCOP es la variable independiente."]
    pedagogical_triggers: []

  - id: facturacion_estacional
    title:
      es: Coste económico estacional
      en: Seasonal economic cost
    equation: C_est = E_est * precio_medio
    latex: 'C_{est} = E_{est} \\cdot p_{medio}'
    rearrangements:
      - target: C_est
        equation: C_est = E_est * precio_medio
        latex: 'C_{est} = E_{est} \\cdot p_{medio}'
    category: application
    relation_type: economic_conversion
    physical_meaning:
      es: Traduce el consumo de energía en gasto monetario real.
      en: Translates energy consumption into real monetary expense.
    constraints: "precio_medio >= 0"
    validity:
      es: Válida para tarifas planas o medias ponderadas.
      en: Valid for flat rates or weighted averages.
    dimension_check: "[Cost] = [Energy] * [Cost/Energy]"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [facturacion, ahorro, economia]
    result_semantics:
      target: C_est
    domain_checks: []
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []

  - id: ahorro_porcentual
    title:
      es: Ahorro energético porcentual
      en: Percentage energy savings
    equation: Ahorro_pct = 100 * (1 - E_nuevo / E_base)
    latex: '\\Delta E_{\\%} = 100 \\cdot \\left( 1 - \\frac{E_{nuevo}}{E_{base}} \\right)'
    rearrangements:
      - target: Ahorro_pct
        equation: Ahorro_pct = 100 * (1 - E_nuevo / E_base)
        latex: '\\Delta E_{\\%} = 100 \\cdot \\left( 1 - \\frac{E_{nuevo}}{E_{base}} \\right)'
    category: comparison
    relation_type: relative_change
    physical_meaning:
      es: Mide la eficacia relativa de una intervención de mejora energética.
      en: Measures the relative effectiveness of an energy improvement intervention.
    constraints: "E_base > 0"
    validity:
      es: Válida para comparar dos estados del mismo sistema.
      en: Valid for comparing two states of the same system.
    dimension_check: "[%] = [1] * (1 - [Energy]/[Energy])"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [ahorro, comparativa, mejora]
    result_semantics:
      target: Ahorro_pct
    domain_checks: []
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []

ui:
  default_formula: ahorro_porcentual
  groups:
    - title:
        es: Balances Estacionales
        en: Seasonal Balances
      items:
        - consumo_estacional
        - facturacion_estacional
    - title:
        es: Comparativa de Escenarios
        en: Scenario Comparison
      items:
        - ahorro_porcentual
`;export{e as default};
