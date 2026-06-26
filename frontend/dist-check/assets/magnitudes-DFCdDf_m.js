const e=`version: 2

magnitudes:
  - id: P
    symbol: 'P'
    nombre:
      es: potencia del emisor
      en: emitter power
    unidad_si: 'kW'
    dimension: 'L^2 M T^{-3}'
    descripcion:
      es: Potencia eléctrica nominal del emisor resistivo, equivalente al ritmo de conversión de electricidad en calor.
      en: Nominal electrical power of the resistive emitter, equivalent to the rate of electricity-to-heat conversion.
    is_vector: false
    components: []
    category: power
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion, graficos]
    common_mistake:
      es: Confundir la potencia nominal con la potencia media real (los termostatos reducen el tiempo activo).
      en: Confusing nominal power with real average power (thermostats reduce active time).
    typical_range: [0.5, 3.0]
    sign_behavior: strictly_positive
    zero_behavior: no_heating
    value_nature: scalar
    interpretation_role: input
    graph_binding: x_axis
    pedagogical_notes: "Variable de diseño del equipo; no cambia con el uso."

  - id: t
    symbol: 't'
    nombre:
      es: tiempo efectivo de uso
      en: effective usage time
    unidad_si: 'h'
    dimension: 'T'
    descripcion:
      es: Horas reales con la resistencia activa en la temporada o periodo analizado.
      en: Real hours with the resistance active in the season or analysis period.
    is_vector: false
    components: []
    category: time
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion, graficos]
    common_mistake:
      es: Usar las horas de aparato encendido en lugar de las horas con resistencia realmente activa.
      en: Using hours with the device on instead of hours with the resistance actually active.
    typical_range: [1, 2000]
    sign_behavior: strictly_positive
    zero_behavior: no_consumption
    value_nature: scalar
    interpretation_role: input
    graph_binding: y_axis
    pedagogical_notes: "La variable más controlable por el usuario; multiplicada por P determina el coste."

  - id: E
    symbol: 'E'
    nombre:
      es: consumo eléctrico
      en: electrical consumption
    unidad_si: 'kWh'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: Energía eléctrica total consumida por el emisor resistivo en el periodo analizado.
      en: Total electrical energy consumed by the resistive emitter in the analysis period.
    is_vector: false
    components: []
    category: energy
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion, graficos]
    common_mistake:
      es: Confundir el consumo eléctrico con el calor útil entregado.
      en: Confusing electrical consumption with the useful heat delivered.
    typical_range: [10, 5000]
    sign_behavior: strictly_positive
    zero_behavior: no_consumption
    value_nature: scalar
    interpretation_role: output
    graph_binding: none
    pedagogical_notes: "Magnitud estrella del leaf; es lo que aparece en la factura."

  - id: eta
    symbol: '\\eta'
    nombre:
      es: rendimiento de conversión
      en: conversion efficiency
    unidad_si: '-'
    dimension: '1'
    descripcion:
      es: Fracción de la energía eléctrica que se convierte efectivamente en calor útil en el recinto; cercano a 1 en resistiva.
      en: Fraction of electrical energy effectively converted into useful heat in the room; close to 1 in resistive systems.
    is_vector: false
    components: []
    category: performance
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Interpretar que eta=1 implica bajo coste; eta mide la conversión local, no la eficiencia estacional del sistema.
      en: Interpreting eta=1 as implying low cost; eta measures local conversion, not the system's seasonal efficiency.
    typical_range: [0.95, 1.0]
    sign_behavior: strictly_positive
    zero_behavior: no_conversion
    value_nature: scalar
    interpretation_role: context
    graph_binding: none
    pedagogical_notes: "Distingue resistiva (eta≈1) de sistemas con pérdidas de distribución."

  - id: Q
    symbol: 'Q'
    nombre:
      es: calor útil
      en: useful heat
    unidad_si: 'kWh'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: Energía térmica realmente entregada al recinto tras las pérdidas internas del emisor.
      en: Thermal energy actually delivered to the room after the emitter's internal losses.
    is_vector: false
    components: []
    category: energy
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Asumir que el calor útil es siempre igual al consumo eléctrico sin verificar el rendimiento.
      en: Assuming useful heat always equals electrical consumption without checking efficiency.
    typical_range: [10, 5000]
    sign_behavior: strictly_positive
    zero_behavior: no_heat_delivered
    value_nature: scalar
    interpretation_role: output
    graph_binding: none
    pedagogical_notes: "Es la demanda térmica cubierta; muy próxima a E en resistiva."

  - id: COP
    symbol: 'COP'
    nombre:
      es: coeficiente de rendimiento
      en: coefficient of performance
    unidad_si: '-'
    dimension: '1'
    descripcion:
      es: Cociente entre el calor útil entregado y la energía eléctrica consumida; es exactamente 1 en resistiva ideal.
      en: Ratio of useful heat delivered to electrical energy consumed; exactly 1 in ideal resistive systems.
    is_vector: false
    components: []
    category: performance
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Pensar que COP=1 es óptimo; en bombas de calor el COP puede ser 3-5, lo que hace la resistiva mucho más cara.
      en: Thinking COP=1 is optimal; heat pumps can reach COP 3-5, making resistive heating much more expensive.
    typical_range: [0.95, 1.0]
    sign_behavior: strictly_positive
    zero_behavior: impossible
    value_nature: scalar
    interpretation_role: star_magnitude
    graph_binding: none
    pedagogical_notes: "El COP=1 de la resistiva es la referencia más clara para comparar tecnologías."
`;export{e as default};
