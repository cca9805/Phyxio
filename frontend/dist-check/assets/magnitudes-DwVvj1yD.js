const n=`version: 1
magnitudes:
- id: K
  symbol: K
  nombre:
    es: energia_cinetica
    en: kinetic_energy
  unidad_si: J
  descripcion:
    es: Energia asociada al movimiento traslacional del sistema en un estado.
    en: Energy associated with the system's translational motion in a given state.
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in:
  - energia-cinetica
  common_mistake: Tratar K como si pudiera ser negativa cuando la velocidad apunta en sentido negativo.
  typical_range: No negativa y dependiente de masa y rapidez.
  sign_behavior:
    has_sign: false
    meaning:
      es: K se interpreta como magnitud no negativa.
      en: K is interpreted as a non-negative quantity.
  zero_behavior:
    allowed: true
    meaning:
      es: K igual a cero representa reposo instantaneo en el modelo traslacional.
      en: K equal to zero represents instantaneous rest in the translational model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for:
    - energia-cinetica
    secondary_for: []
  graph_binding:
    channels:
    - K
  pedagogical_notes: Conviene leer K como presupuesto energetico del movimiento, no como sustituto de la velocidad.
- id: m
  symbol: m
  nombre:
    es: masa
    en: mass
  unidad_si: kg
  descripcion:
    es: Cantidad de materia del cuerpo cuyo movimiento se analiza.
    en: Amount of matter of the body whose motion is being analyzed.
  dimension: M
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: physical_quantity
  used_in:
  - energia-cinetica
  common_mistake: Olvidar que la formula clasica presupone masa aproximadamente constante.
  typical_range: Positiva y dependiente del objeto estudiado.
  sign_behavior:
    has_sign: false
    meaning:
      es: m debe ser positiva en el dominio fisico del leaf.
      en: m must be positive in the physical domain of the leaf.
  zero_behavior:
    allowed: false
    meaning:
      es: m igual a cero queda fuera del dominio operativo del problema.
      en: m equal to zero lies outside the operational domain of the problem.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '(0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - energia-cinetica
  graph_binding:
    channels: []
  pedagogical_notes: Antes de comparar dos K distintas, comprueba si la masa se mantiene o cambia entre escenarios.
- id: v
  symbol: v
  nombre:
    es: rapidez
    en: speed
  unidad_si: m/s
  descripcion:
    es: Modulo de la velocidad del cuerpo en el modelo traslacional.
    en: Magnitude of the body's velocity in the translational model.
  dimension: LT^{-1}
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: physical_quantity
  used_in:
  - energia-cinetica
  common_mistake: Sustituir una componente con signo por la rapidez sin revisar el contexto.
  typical_range: No negativa en esta formulacion energetica.
  sign_behavior:
    has_sign: false
    meaning:
      es: v se usa como modulo, no como componente algebraica.
      en: v is used as a magnitude, not as an algebraic component.
  zero_behavior:
    allowed: true
    meaning:
      es: v igual a cero indica reposo instantaneo y por tanto K nula.
      en: v equal to zero indicates instantaneous rest and therefore zero K.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - energia-cinetica
  graph_binding:
    channels:
    - x
  pedagogical_notes: El rasgo didactico clave es la dependencia cuadratica entre v y K.
- id: Ki
  symbol: K_i
  nombre:
    es: energia_cinetica_inicial
    en: initial_kinetic_energy
  unidad_si: J
  descripcion:
    es: Energia cinetica del sistema en el estado inicial del problema.
    en: System kinetic energy in the initial state of the problem.
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in:
  - energia-cinetica
  common_mistake: Mezclar Ki con velocidad inicial sin convertir antes a energia.
  typical_range: No negativa.
  sign_behavior:
    has_sign: false
    meaning:
      es: Ki no puede tomar valores negativos.
      en: Ki cannot take negative values.
  zero_behavior:
    allowed: true
    meaning:
      es: Ki igual a cero representa un inicio desde reposo.
      en: Ki equal to zero represents a start from rest.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - energia-cinetica
  graph_binding:
    channels:
    - Ki
  pedagogical_notes: Ki sirve para fijar el presupuesto energetico con el que arranca el proceso.
- id: Kf
  symbol: K_f
  nombre:
    es: energia_cinetica_final
    en: final_kinetic_energy
  unidad_si: J
  descripcion:
    es: Energia cinetica del sistema en el estado final comparado con el inicial.
    en: System kinetic energy in the final state compared with the initial one.
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in:
  - energia-cinetica
  common_mistake: Aceptar Kf negativa sin revisar signos o datos de entrada.
  typical_range: No negativa.
  sign_behavior:
    has_sign: false
    meaning:
      es: Kf debe permanecer no negativa en el modelo clasico.
      en: Kf must remain non-negative in the classical model.
  zero_behavior:
    allowed: true
    meaning:
      es: Kf igual a cero describe llegada a reposo.
      en: Kf equal to zero describes arrival at rest.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for:
    - energia-cinetica
    secondary_for: []
  graph_binding:
    channels:
    - Kf
  pedagogical_notes: Comparar Ki y Kf ayuda a decidir si el trabajo neto fue motor o disipativo.
- id: dK
  symbol: \\Delta K
  nombre:
    es: variacion_de_energia_cinetica
    en: change_in_kinetic_energy
  unidad_si: J
  descripcion:
    es: Diferencia firmada entre la energia cinetica final y la inicial.
    en: Signed difference between final and initial kinetic energy.
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in:
  - energia-cinetica
  common_mistake: Convertir dK en modulo y perder si el sistema gano o perdio energia cinetica.
  typical_range: Puede ser positiva, negativa o nula.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo indica ganancia o perdida de energia cinetica.
      en: The sign indicates gain or loss of kinetic energy.
  zero_behavior:
    allowed: true
    meaning:
      es: dK nula indica que la energia cinetica no cambio entre estados.
      en: Zero dK indicates that kinetic energy did not change between states.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - energia-cinetica
    secondary_for: []
  graph_binding:
    channels:
    - dK
  pedagogical_notes: dK es la magnitud puente entre lectura por estados y teorema trabajo-energia.
- id: Wnet
  symbol: W_{net}
  nombre:
    es: trabajo_neto
    en: net_work
  unidad_si: J
  descripcion:
    es: Suma del trabajo de todas las fuerzas externas relevantes sobre el sistema elegido.
    en: Sum of the work done by all relevant external forces on the chosen system.
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in:
  - energia-cinetica
  common_mistake: Identificar Wnet con el trabajo de una sola fuerza cuando actuan varias.
  typical_range: Puede ser positivo, negativo o nulo.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo indica si el conjunto de fuerzas aporta o extrae energia cinetica.
      en: The sign indicates whether the force set adds or extracts kinetic energy.
  zero_behavior:
    allowed: true
    meaning:
      es: Wnet nulo implica dK nula si no hay errores de modelado.
      en: Zero Wnet implies zero dK if there are no modeling errors.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for:
    - energia-cinetica
  graph_binding:
    channels:
    - Wnet
  pedagogical_notes: Leer Wnet junto con dK permite verificar signos y coherencia causal.
`;export{n as default};
