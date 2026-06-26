const e=`version: 2

magnitudes:
  - id: Q_est
    symbol: 'Q_{est}'
    nombre:
      es: demanda térmica estacional
      en: seasonal thermal demand
    unidad_si: 'kWh'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: Energía térmica total que requiere la vivienda en una temporada completa.
      en: Total thermal energy required by the home in a full season.
    is_vector: false
    components: []
    category: energy
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Confundir con la potencia de pico del equipo.
      en: Confusing with the peak power of the equipment.
    typical_range: [1000, 20000]
    sign_behavior: strictly_positive
    zero_behavior: no_demand
    value_nature: scalar
    interpretation_role: input
    graph_binding: control_variable
    pedagogical_notes: "Fundamental para entender que el ahorro empieza en la envolvente."

  - id: SCOP
    symbol: 'SCOP'
    nombre:
      es: rendimiento estacional (SCOP)
      en: seasonal performance (SCOP)
    unidad_si: '-'
    dimension: '1'
    descripcion:
      es: Coeficiente de rendimiento estacional medio (Seasonal Coefficient of Performance).
      en: Average seasonal coefficient of performance.
    is_vector: false
    components: []
    category: performance
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion, graficos]
    common_mistake:
      es: Creer que es constante en cualquier clima.
      en: Believing it is constant in any climate.
    typical_range: [1, 6]
    sign_behavior: strictly_positive
    zero_behavior: impossible
    value_nature: scalar
    interpretation_role: star_magnitude
    graph_binding: x_axis
    pedagogical_notes: "Explica la ventaja de la aerotermia sobre el efecto Joule."

  - id: E_est
    symbol: 'E_{est}'
    nombre:
      es: consumo eléctrico estacional
      en: seasonal electric consumption
    unidad_si: 'kWh'
    dimension: 'L^2 M T^{-2}'
    descripcion:
      es: Energía eléctrica total consumida por el sistema de climatización en la temporada.
      en: Total electrical energy consumed by the climate control system in the season.
    is_vector: false
    components: []
    category: energy
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion, graficos]
    common_mistake:
      es: No incluir consumos auxiliares del sistema.
      en: Not including auxiliary system consumptions.
    typical_range: [200, 10000]
    sign_behavior: strictly_positive
    zero_behavior: zero_consumption
    value_nature: scalar
    interpretation_role: output
    graph_binding: y_axis
    pedagogical_notes: "Es el valor que realmente paga el usuario final."

  - id: precio_medio
    symbol: 'p_{medio}'
    nombre:
      es: precio medio de la energía
      en: average energy price
    unidad_si: 'EUR/kWh'
    dimension: 'M L^2 T^{-2} Q^{-1} ...' # Simplificado
    descripcion:
      es: Tarifa unitaria media aplicada al consumo eléctrico facturado.
      en: Average unit rate applied to the billed electrical consumption.
    is_vector: false
    components: []
    category: economics
    physical_role:
      es: variable de contorno
      en: boundary variable
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Ignorar la parte fija de la factura (potencia).
      en: Ignoring the fixed part of the bill (power).
    typical_range: [0.1, 0.5]
    sign_behavior: strictly_positive
    zero_behavior: free_energy
    value_nature: scalar
    interpretation_role: context
    graph_binding: none
    pedagogical_notes: "Variable crítica para la rentabilidad económica."

  - id: C_est
    symbol: 'C_{est}'
    nombre:
      es: coste económico estacional
      en: seasonal economic cost
    unidad_si: 'EUR'
    dimension: 'M' # Simplificado moneda
    descripcion:
      es: Gasto monetario total asociado al consumo de climatización en la temporada.
      en: Total monetary expense associated with climatization consumption in the season.
    is_vector: false
    components: []
    category: economics
    physical_role:
      es: magnitud física
      en: physical quantity
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Pensar que duplicar SCOP siempre reduce factura a la mitad (si sube el precio).
      en: Thinking doubling SCOP always halves the bill (if prices rise).
    typical_range: [100, 3000]
    sign_behavior: strictly_positive
    zero_behavior: zero_cost
    value_nature: scalar
    interpretation_role: output
    graph_binding: none
    pedagogical_notes: "La métrica más persuasiva para el ahorro."

  - id: Ahorro_pct
    symbol: '\\Delta E_{\\%}'
    nombre:
      es: ahorro energético porcentual
      en: percentage energy savings
    unidad_si: '%'
    dimension: '1'
    descripcion:
      es: Reducción relativa del consumo eléctrico respecto al escenario base.
      en: Relative reduction in electrical consumption compared to the base scenario.
    is_vector: false
    components: []
    category: performance
    physical_role:
      es: indicador de eficiencia
      en: efficiency indicator
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Restar porcentajes de mejora en lugar de aplicar el modelo compuesto.
      en: Subtracting improvement percentages instead of applying the composite model.
    typical_range: [0, 90]
    sign_behavior: positive_for_savings
    zero_behavior: no_savings
    value_nature: scalar
    interpretation_role: output
    graph_binding: none
    pedagogical_notes: "Permite comparar intervenciones de distinta naturaleza."

  - id: E_base
    symbol: 'E_{base}'
    nombre: { es: consumo escenario base, en: base scenario consumption }
    unidad_si: 'kWh'
    dimension: 'L^2 M T^{-2}'
    descripcion: { es: Consumo eléctrico del sistema de referencia antes de la mejora., en: Electrical consumption of the reference system before improvement. }
    is_vector: false
    components: []
    category: energy
    physical_role: { es: referencia, en: reference }
    used_in: [ejemplos]
    common_mistake: { es: Usar datos de un año excepcionalmente cálido., en: Using data from an exceptionally warm year. }
    typical_range: [500, 15000]
    sign_behavior: strictly_positive
    zero_behavior: no_base
    value_nature: scalar
    interpretation_role: reference
    graph_binding: none
    pedagogical_notes: "Es el punto de partida de cualquier auditoría."

  - id: E_nuevo
    symbol: 'E_{nuevo}'
    nombre: { es: consumo escenario nuevo, en: new scenario consumption }
    unidad_si: 'kWh'
    dimension: 'L^2 M T^{-2}'
    descripcion: { es: Consumo eléctrico del sistema optimizado tras la mejora técnica., en: Electrical consumption of the optimized system after technical improvement. }
    is_vector: false
    components: []
    category: energy
    physical_role: { es: resultado proyectado, en: projected result }
    used_in: [ejemplos]
    common_mistake: { es: No considerar el efecto rebote., en: Not considering the rebound effect. }
    typical_range: [100, 5000]
    sign_behavior: strictly_positive
    zero_behavior: zero_consumption
    value_nature: scalar
    interpretation_role: result
    graph_binding: none
    pedagogical_notes: "El objetivo de la optimización energética."

  - id: base
    symbol: '\\text{base}'
    nombre: { es: etiqueta base, en: base label }
    unidad_si: '-'
    dimension: '1'
    descripcion: { es: Subíndice o identificador de referencia para el escenario inicial., en: Subscript or reference identifier for the initial scenario. }
    is_vector: false
    components: []
    category: metadata
    physical_role: { es: etiqueta, en: label }
    used_in: [ejemplos]
    common_mistake: { es: ninguno, en: none }
    typical_range: [0, 1]
    sign_behavior: none
    zero_behavior: none
    value_nature: scalar
    interpretation_role: label
    graph_binding: none
    pedagogical_notes: "Uso puramente notacional."

  - id: nuevo
    symbol: '\\text{nuevo}'
    nombre: { es: etiqueta nuevo, en: new label }
    unidad_si: '-'
    dimension: '1'
    descripcion: { es: Subíndice o identificador para el escenario propuesto tras la mejora., en: Subscript or identifier for the proposed scenario after improvement. }
    is_vector: false
    components: []
    category: metadata
    physical_role: { es: etiqueta, en: label }
    used_in: [ejemplos]
    common_mistake: { es: ninguno, en: none }
    typical_range: [0, 1]
    sign_behavior: none
    zero_behavior: none
    value_nature: scalar
    interpretation_role: label
    graph_binding: none
    pedagogical_notes: "Uso puramente notacional."
`;export{e as default};
