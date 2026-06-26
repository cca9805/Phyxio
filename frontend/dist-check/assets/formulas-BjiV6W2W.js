const e=`version: 5
topic:
  id: energia-potencial-gravitatoria
  title:
    es: Energia potencial gravitatoria
    en: Gravitational Potential Energy
variables:
- { id: Ug, symbol: U_g, name: { es: energia potencial gravitatoria, en: gravitational potential energy }, si_unit: J }
- { id: m, symbol: m, name: { es: masa, en: mass }, si_unit: kg }
- { id: g, symbol: g, name: { es: aceleracion de la gravedad, en: gravitational acceleration }, si_unit: m/s^2 }
- { id: h, symbol: h, name: { es: altura, en: height }, si_unit: m }
- { id: hi, symbol: h_i, name: { es: altura inicial, en: initial height }, si_unit: m }
- { id: hf, symbol: h_f, name: { es: altura final, en: final height }, si_unit: m }
- { id: dUg, symbol: \\Delta U_g, name: { es: variacion de energia potencial gravitatoria, en: change in gravitational potential energy }, si_unit: J }
- { id: Wg, symbol: W_g, name: { es: trabajo de la gravedad, en: work of gravity }, si_unit: J }
formulas:
- id: potencial_gravitatorio_superficie
  title:
    es: Energia potencial gravitatoria en campo uniforme
    en: Gravitational potential energy in uniform field
  equation: Ug = m*g*h
  latex: U_g = m\\cdot g\\cdot h
  rearrangements:
  - target: Ug
    equation: Ug = m*g*h
    latex: U_g = m\\cdot g\\cdot h
    constraints:
    - expr: m > 0
      message: { es: m debe ser positiva, en: m must be positive }
    - expr: g > 0
      message: { es: g debe ser positiva en modulo, en: g must be positive in magnitude }
  - target: m
    equation: m = Ug/(g*h)
    latex: m = \\frac{U_g}{gh}
    constraints:
    - expr: g != 0
      message: { es: g no puede ser cero al despejar m, en: g cannot be zero when solving for m }
    - expr: h != 0
      message: { es: h no puede ser cero al despejar m, en: h cannot be zero when solving for m }
  - target: h
    equation: h = Ug/(m*g)
    latex: h = \\frac{U_g}{mg}
    constraints:
    - expr: m > 0
      message: { es: m debe ser positiva al despejar h, en: m must be positive when solving for h }
    - expr: g > 0
      message: { es: g debe ser positiva al despejar h, en: g must be positive when solving for h }
  category: fundamental
  relation_type: energy_relation
  physical_meaning:
    es: Traduce la altura de un estado en energia potencial gravitatoria respecto de una referencia.
    en: Translates state height into gravitational potential energy relative to a reference.
  constraints:
  - expr: g > 0
    message: { es: El modelo usa modulo positivo de g, en: The model uses positive magnitude of g }
  - expr: m > 0
    message: { es: La masa del cuerpo debe ser positiva, en: Body mass must be positive }
  validity:
    es: Valida para variaciones de altura moderadas y campo gravitatorio local casi uniforme.
    en: Valid for moderate height changes and nearly uniform local gravitational field.
  dimension_check: J
  calculable: true
  motivo_no_calculable: null
  used_in: [ teoria.md, teoria.en.md, ejemplos.md, ejemplos.en.md, interpretacion.yaml ]
  interpretation_tags: [ gravitational_energy, state_energy ]
  result_semantics:
    target: Ug
    meaning: El resultado mide energia de estado asociada a la posicion vertical.
  domain_checks:
  - expr: "abs(h) < 100000"
    message: { es: Si h es muy grande, revisar si sigue valiendo campo uniforme, en: If h is very large, review uniform-field validity }
  coherence_checks:
  - expr: "true"
    message: { es: Si m se duplica y h se mantiene, Ug se duplica, en: If m doubles and h stays fixed, Ug doubles }
  graph_implications:
  - En Coord, Ug crece linealmente con h para m y g fijas.
  pedagogical_triggers:
  - when: "true"
    message: { es: Define antes la referencia de altura para interpretar el signo de Ug, en: Define the height reference before interpreting Ug sign }
- id: variacion_potencial_gravitatorio
  title:
    es: Variacion de energia potencial gravitatoria
    en: Change in gravitational potential energy
  equation: dUg = m*g*(hf-hi)
  latex: \\Delta U_g = mg(h_f-h_i)
  rearrangements:
  - target: dUg
    equation: dUg = m*g*(hf-hi)
    latex: \\Delta U_g = mg(h_f-h_i)
  - target: hf
    equation: hf = hi + dUg/(m*g)
    latex: h_f = h_i + \\frac{\\Delta U_g}{mg}
  - target: hi
    equation: hi = hf - dUg/(m*g)
    latex: h_i = h_f - \\frac{\\Delta U_g}{mg}
  category: fundamental
  relation_type: energy_relation
  physical_meaning:
    es: Describe el cambio de energia gravitatoria entre estado inicial y final.
    en: Describes gravitational energy change between initial and final states.
  constraints:
  - expr: m > 0
    message: { es: La masa debe ser positiva, en: Mass must be positive }
  - expr: g > 0
    message: { es: g debe mantenerse positiva como modulo, en: g must remain positive as magnitude }
  validity:
    es: Valida cuando hi y hf usan la misma referencia vertical y el mismo campo local.
    en: Valid when hi and hf use the same vertical reference and same local field.
  dimension_check: J
  calculable: true
  motivo_no_calculable: null
  used_in: [ teoria.md, teoria.en.md, ejemplos.md, ejemplos.en.md, interpretacion.yaml ]
  interpretation_tags: [ delta_energy, states ]
  result_semantics:
    target: dUg
    meaning: El signo indica si el sistema gana o pierde energia potencial gravitatoria.
  domain_checks:
  - expr: "true"
    message: { es: Comprobar que hi y hf se miden con el mismo cero, en: Check that hi and hf are measured from the same zero }
  coherence_checks:
  - expr: "true"
    message: { es: Si hf es mayor que hi, dUg debe ser positiva, en: If hf is greater than hi, dUg must be positive }
  graph_implications:
  - dUg se interpreta como diferencia vertical entre dos puntos de la recta Ug(h).
  pedagogical_triggers:
  - when: "true"
    message: { es: No confundas cambio de energia con energia absoluta, en: Do not confuse energy change with absolute energy }
- id: trabajo_gravitatorio
  title:
    es: Trabajo de la gravedad
    en: Work of gravity
  equation: Wg = -dUg
  latex: W_g = -\\Delta U_g
  rearrangements:
  - target: Wg
    equation: Wg = -dUg
    latex: W_g = -\\Delta U_g
  - target: dUg
    equation: dUg = -Wg
    latex: \\Delta U_g = -W_g
  category: fundamental
  relation_type: energy_relation
  physical_meaning:
    es: Conecta el trabajo de la fuerza gravitatoria con el cambio de energia de estado.
    en: Connects gravitational-force work with state-energy change.
  constraints:
  - expr: "true"
    message: { es: Mantener una unica convencion de signos en todo el balance, en: Keep a single sign convention throughout the balance }
  validity:
    es: Valida para fuerzas gravitatorias conservativas en el proceso analizado.
    en: Valid for conservative gravitational forces in the analyzed process.
  dimension_check: J
  calculable: true
  motivo_no_calculable: null
  used_in: [ teoria.md, teoria.en.md, ejemplos.md, ejemplos.en.md, interpretacion.yaml ]
  interpretation_tags: [ work, conservative_force ]
  result_semantics:
    target: Wg
    meaning: El signo informa si la gravedad entrega o absorbe energia mecanica.
  domain_checks:
  - expr: "true"
    message: { es: Verificar direccion del movimiento antes de fijar signo de Wg, en: Verify motion direction before fixing Wg sign }
  coherence_checks:
  - expr: "true"
    message: { es: Si dUg aumenta, Wg debe disminuir con signo opuesto, en: If dUg increases, Wg must decrease with opposite sign }
  graph_implications:
  - Wg se obtiene por signo opuesto respecto de la diferencia de Ug entre estados.
  pedagogical_triggers:
  - when: "true"
    message: { es: Decide primero si el sistema asciende o desciende para leer el signo, en: First decide whether the system rises or descends to read the sign }
ui:
  default_formula: potencial_gravitatorio_superficie
  groups:
  - title: { es: Gravedad local, en: Local gravity }
    items: [ potencial_gravitatorio_superficie, variacion_potencial_gravitatorio, trabajo_gravitatorio ]
`;export{e as default};
