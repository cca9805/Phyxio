const e=`version: 5
topic:
  id: campo-y-potencial-gravitatorio
  title:
    es: Campo y potencial gravitatorio
    en: Gravitational Field and Potential

formulas:
- id: campo_puntual
  title:
    es: Campo gravitatorio de masa puntual
    en: Point-mass gravitational field
  equation: g = (G * M) / (r^2)
  latex: g = \\frac{G \\cdot M}{r^2}
  category: gravitacion
  relation_type: definition
  physical_meaning:
    es: Expresa la intensidad del campo que una masa fuente produce a distancia radial.
    en: Expresses field intensity produced by a source mass at radial distance.
  constraints: [ G > 0, M > 0, r > 0 ]
  validity:
    es: Válido para distribución esférica o aproximación de masa puntual.
    en: Valid for spherical distributions or point-mass approximation.
  dimension_check: "[L/T^2] = ([M^-1*L^3*T^-2] * [M]) / [L^2]"
  calculable: true
  motivo_no_calculable:
    es: Requiere distancia radial positiva y masa fuente definida.
    en: Requires positive radial distance and defined source mass.
  used_in: [ lectura_campo, comparacion_radial ]
  interpretation_tags: [ intensidad, gradiente, distancia ]
  result_semantics:
    target: g
  domain_checks: [ G > 0, M > 0, r > 0 ]
  coherence_checks: [ g > 0 ]
  graph_implications: "Curva decreciente de tipo inversa cuadrática en Coord."
  pedagogical_triggers: [ caida_radial ]
  rearrangements:
  - target: g
    equation: g = (G * M) / (r^2)
  variables: [ g, G, M, r ]

- id: potencial_puntual
  title:
    es: Potencial gravitatorio de masa puntual
    en: Point-mass gravitational potential
  equation: V = -(G * M) / r
  latex: V = -\\frac{G \\cdot M}{r}
  category: gravitacion
  relation_type: definition
  physical_meaning:
    es: Relaciona energía por unidad de masa con la posición radial.
    en: Relates energy per unit mass to radial position.
  constraints: [ G > 0, M > 0, r > 0 ]
  validity:
    es: Usa referencia de potencial nulo en infinito.
    en: Uses zero potential reference at infinity.
  dimension_check: "[L^2/T^2] = ([M^-1*L^3*T^-2] * [M]) / [L]"
  calculable: true
  motivo_no_calculable:
    es: No aplica si no existe referencia energética definida.
    en: Not applicable without a defined energy reference.
  used_in: [ lectura_potencial, balance_energetico ]
  interpretation_tags: [ pozo_potencial, referencia ]
  result_semantics:
    target: V
  domain_checks: [ G > 0, M > 0, r > 0 ]
  coherence_checks: [ V < 0 ]
  graph_implications: "Pozo potencial más profundo al disminuir la distancia radial."
  pedagogical_triggers: [ signo_potencial ]
  rearrangements:
  - target: V
    equation: V = -(G * M) / r
  variables: [ V, G, M, r ]

- id: energia_desde_potencial
  title:
    es: Energía potencial desde el potencial
    en: Potential energy from potential
  equation: U = m * V
  latex: U = mV
  category: energia
  relation_type: derived
  physical_meaning:
    es: Convierte potencial por unidad de masa en energía potencial total.
    en: Converts potential per unit mass into total potential energy.
  constraints: [ m > 0 ]
  validity:
    es: Válido para masa de prueba puntual en campo definido.
    en: Valid for a point test mass in a defined field.
  dimension_check: "[M*L^2/T^2] = [M] * [L^2/T^2]"
  calculable: true
  motivo_no_calculable:
    es: Requiere masa de prueba explícita.
    en: Requires explicit test mass.
  used_in: [ balance_energetico ]
  interpretation_tags: [ energia, conversion ]
  result_semantics:
    target: U
  domain_checks: [ m > 0 ]
  coherence_checks: []
  graph_implications: "Escala vertical del estado energético para una masa concreta."
  pedagogical_triggers: [ diferencia_campo_potencial ]
  rearrangements:
  - target: U
    equation: U = m * V
  variables: [ U, m, V ]

- id: cambio_energia_potencial
  title:
    es: Cambio de energía potencial gravitatoria
    en: Gravitational potential-energy change
  equation: DeltaU = -(G * M * m) * ((1 / rf) - (1 / ri))
  latex: \\Delta U = -\\left(G \\cdot M \\cdot m\\right)\\left(\\frac{1}{r_f}-\\frac{1}{r_i}\\right)
  category: energia
  relation_type: transfer
  physical_meaning:
    es: Evalúa cuánto cambia la energía potencial al pasar de ri a rf.
    en: Evaluates potential-energy change from ri to rf.
  constraints: [ G > 0, M > 0, m > 0, ri > 0, rf > 0 ]
  validity:
    es: Requiere mismo sistema de referencia para ri y rf.
    en: Requires a common reference system for ri and rf.
  dimension_check: "[M*L^2/T^2] = [M^-1*L^3*T^-2]*[M]*[M]*[1/L]"
  calculable: true
  motivo_no_calculable:
    es: No se puede evaluar si ri o rf no están definidos.
    en: Cannot be evaluated if ri or rf are undefined.
  used_in: [ balance_energetico, trabajo ]
  interpretation_tags: [ estado_inicial, estado_final, transferencia ]
  result_semantics:
    target: DeltaU
  domain_checks: [ ri > 0, rf > 0 ]
  coherence_checks: []
  graph_implications: "Relaciona dos lecturas de radio con una variación energética única."
  pedagogical_triggers: [ signo_deltaU ]
  rearrangements:
  - target: DeltaU
    equation: DeltaU = -(G * M * m) * ((1 / rf) - (1 / ri))
  variables: [ DeltaU, G, M, m, ri, rf ]

- id: trabajo_gravitatorio
  title:
    es: Trabajo gravitatorio
    en: Gravitational work relation
  equation: Wg = -DeltaU
  latex: W_g = -\\Delta U
  category: energia
  relation_type: transfer
  physical_meaning:
    es: Conecta trabajo de la gravedad con variación de energía potencial.
    en: Connects gravitational work with potential-energy change.
  constraints: []
  validity:
    es: Válido para fuerza gravitatoria conservativa.
    en: Valid for conservative gravitational interaction.
  dimension_check: "[M*L^2/T^2] = [M*L^2/T^2]"
  calculable: true
  motivo_no_calculable:
    es: Depende de contar con DeltaU evaluada o medible.
    en: Depends on having DeltaU evaluated or measurable.
  used_in: [ trabajo ]
  interpretation_tags: [ energia, conservacion ]
  result_semantics:
    target: Wg
  domain_checks: []
  coherence_checks: []
  graph_implications: "Permite inferir trabajo neto a partir de estados energéticos."
  pedagogical_triggers: [ signo_trabajo ]
  rearrangements:
  - target: Wg
    equation: Wg = -DeltaU
  - target: DeltaU
    equation: DeltaU = -Wg
  variables: [ Wg, DeltaU ]

- id: relacion_campo_potencial_conceptual
  title:
    es: Relación campo-potencial
    en: Field-potential relationship
  equation: g = DeltaV / r
  latex: \\vec g = -\\nabla V
  category: gravitacion
  relation_type: conceptual
  physical_meaning:
    es: Indica que el campo apunta hacia donde el potencial decrece más rápido.
    en: States that field points toward steepest potential decrease.
  constraints: []
  validity:
    es: Requiere descripción espacial continua del potencial.
    en: Requires continuous spatial representation of potential.
  dimension_check: "[L/T^2] compatible con variación espacial de [L^2/T^2]"
  calculable: false
  motivo_no_calculable:
    es: Necesita operador diferencial y modelo espacial explícito.
    en: Needs differential operator and explicit spatial model.
  used_in: [ interpretacion ]
  interpretation_tags: [ gradiente, direccion ]
  result_semantics:
    target: g
  domain_checks: []
  coherence_checks: []
  graph_implications: "Conecta pendiente de V(r) con magnitud local de g(r)."
  pedagogical_triggers: [ lectura_geométrica ]
  rearrangements:
  - target: g
    equation: g = DeltaV / r
  variables: [ g, V ]

- id: superposicion_campos_conceptual
  title:
    es: Superposición de campos
    en: Field superposition
  equation: g_total_vec = sum(g_i_vec)
  latex: \\vec g_{total} = \\sum_i \\vec g_i
  category: gravitacion
  relation_type: conceptual
  physical_meaning:
    es: El campo total resulta de suma vectorial de contribuciones individuales.
    en: Total field is vector sum of individual contributions.
  constraints: []
  validity:
    es: Válido en régimen clásico lineal de superposición.
    en: Valid in the classical linear superposition regime.
  dimension_check: "[L/T^2] = [L/T^2]"
  calculable: false
  motivo_no_calculable:
    es: Depende de geometría y orientación de cada fuente.
    en: Depends on geometry and orientation of each source.
  used_in: [ sistemas_multiples ]
  interpretation_tags: [ vectorial, suma ]
  result_semantics:
    target: g
  domain_checks: []
  coherence_checks: []
  graph_implications: "Permite discutir cancelaciones o refuerzos entre contribuciones."
  pedagogical_triggers: [ simetria ]
  rearrangements:
  - target: g
    equation: g_total = sum(g_i)
  variables: [ g, gi, gf ]

- id: superposicion_potenciales_conceptual
  title:
    es: Superposición de potenciales
    en: Potential superposition
  equation: V_total = sum(V_i)
  latex: V_{total} = \\sum_i V_i
  category: gravitacion
  relation_type: conceptual
  physical_meaning:
    es: El potencial total es suma escalar de potenciales de cada fuente.
    en: Total potential is scalar sum of source potentials.
  constraints: []
  validity:
    es: Válido para fuentes en régimen clásico sin relatividad fuerte.
    en: Valid for classical sources without strong relativity.
  dimension_check: "[L^2/T^2] = [L^2/T^2]"
  calculable: false
  motivo_no_calculable:
    es: Requiere conocer cada contribución espacial individual.
    en: Requires each individual spatial contribution.
  used_in: [ sistemas_multiples ]
  interpretation_tags: [ escalar, suma ]
  result_semantics:
    target: V
  domain_checks: []
  coherence_checks: []
  graph_implications: "Facilita lectura de pozos potenciales compuestos."
  pedagogical_triggers: [ referencia_energetica ]
  rearrangements:
  - target: V
    equation: V_total = sum(V_i)
  variables: [ V, DeltaV ]

ui:
  default_formula: campo_puntual
  groups:
  - title:
      es: Fórmulas calculables
      en: Computable formulas
    items: [ campo_puntual, potencial_puntual, energia_desde_potencial, cambio_energia_potencial, trabajo_gravitatorio ]
  - title:
      es: Fórmulas conceptuales
      en: Conceptual formulas
    items: [ relacion_campo_potencial_conceptual, superposicion_campos_conceptual, superposicion_potenciales_conceptual ]
`;export{e as default};
