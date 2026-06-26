const e=`version: 2
topic:
  id: resistiva
  title:
    es: 'Calefacción Resistiva'
    en: 'Resistive Heating'

variables:
  - id: P
    symbol: 'P'
    nombre: { es: potencia del emisor, en: emitter power }
    unidad_si: 'kW'
  - id: t
    symbol: 't'
    nombre: { es: tiempo efectivo de uso, en: effective usage time }
    unidad_si: 'h'
  - id: E
    symbol: 'E'
    nombre: { es: consumo eléctrico, en: electrical consumption }
    unidad_si: 'kWh'
  - id: eta
    symbol: '\\eta'
    nombre: { es: rendimiento de conversión, en: conversion efficiency }
    unidad_si: '-'
  - id: Q
    symbol: 'Q'
    nombre: { es: calor útil, en: useful heat }
    unidad_si: 'kWh'
  - id: COP
    symbol: 'COP'
    nombre: { es: coeficiente de rendimiento, en: coefficient of performance }
    unidad_si: '-'

formulas:
  - id: energia
    title:
      es: Consumo eléctrico
      en: Electrical consumption
    equation: E = P * t
    latex: 'E = P \\cdot t'
    rearrangements:
      - target: E
        equation: E = P * t
        latex: 'E = P \\cdot t'
    category: fundamental
    relation_type: physical_definition
    physical_meaning:
      es: El consumo es el producto de la potencia del emisor por el tiempo real de funcionamiento.
      en: Consumption is the product of the emitter's power by the real operating time.
    constraints: "P > 0, t >= 0"
    validity:
      es: Válida para régimen estacionario con potencia constante.
      en: Valid for steady-state operation with constant power.
    dimension_check: "[E] = [P]*[t] = kW*h = kWh"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion, graficos]
    interpretation_tags: [consumo, potencia, tiempo]
    result_semantics:
      target: E
    domain_checks:
      - expr: "P > 0"
        message:
          es: "La potencia del emisor debe ser estrictamente positiva."
          en: "Emitter power must be strictly positive."
      - expr: "t >= 0"
        message:
          es: "El tiempo de uso no puede ser negativo."
          en: "Usage time cannot be negative."
    coherence_checks: []
    graph_implications: ["Relación lineal E = P·t con pendiente P cuando t es el eje."]
    pedagogical_triggers: []

  - id: calor_util
    title:
      es: Calor útil
      en: Useful heat
    equation: Q = eta * E
    latex: 'Q = \\eta \\cdot E'
    rearrangements:
      - target: Q
        equation: Q = eta * E
        latex: 'Q = \\eta \\cdot E'
    category: fundamental
    relation_type: physical_definition
    physical_meaning:
      es: El calor realmente entregado al recinto es la fracción del consumo que no se pierde en el emisor.
      en: The heat actually delivered to the room is the fraction of consumption not lost in the emitter.
    constraints: "0 < eta <= 1, E >= 0"
    validity:
      es: Válida para emisores con rendimiento estable; en resistiva ideal eta=1 y Q=E.
      en: Valid for emitters with stable efficiency; in ideal resistive systems eta=1 and Q=E.
    dimension_check: "[Q] = [1]*[kWh] = kWh"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [calor, rendimiento, conversion]
    result_semantics:
      target: Q
    domain_checks:
      - expr: "eta > 0 and eta <= 1"
        message:
          es: "El rendimiento debe estar entre 0 y 1."
          en: "Efficiency must be between 0 and 1."
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []

  - id: cop_resistiva
    title:
      es: COP de la calefacción resistiva
      en: COP of resistive heating
    equation: COP = Q / E
    latex: 'COP = \\frac{Q}{E}'
    rearrangements:
      - target: COP
        equation: COP = Q / E
        latex: 'COP = \\frac{Q}{E}'
    category: fundamental
    relation_type: physical_definition
    physical_meaning:
      es: El COP mide cuántas unidades de calor útil se obtienen por unidad de electricidad consumida; en resistiva ideal es exactamente 1.
      en: COP measures how many units of useful heat are obtained per unit of electricity consumed; in ideal resistive systems it is exactly 1.
    constraints: "E > 0"
    validity:
      es: Siempre válida como definición; COP=1 en resistiva ideal, COP<1 con pérdidas.
      en: Always valid as definition; COP=1 in ideal resistive, COP<1 with losses.
    dimension_check: "[COP] = kWh/kWh = 1 (adimensional)"
    calculable: true
    motivo_no_calculable: null
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [COP, eficiencia, comparativa]
    result_semantics:
      target: COP
    domain_checks:
      - expr: "E > 0"
        message:
          es: "El consumo eléctrico debe ser positivo para calcular el COP."
          en: "Electrical consumption must be positive to calculate COP."
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []

ui:
  default_formula: energia
  groups:
    - title:
        es: Ecuaciones fundamentales
        en: Fundamental equations
      items:
        - energia
        - calor_util
        - cop_resistiva
`;export{e as default};
