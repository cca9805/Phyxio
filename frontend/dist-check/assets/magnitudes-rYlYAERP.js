const e=`version: 5
magnitudes:
- id: Wnet
  symbol: "W_{net}"
  nombre:
    es: trabajo_neto
    en: net_work
  unidad_si: J
  descripcion:
    es: Suma del trabajo de todas las fuerzas relevantes sobre el sistema elegido.
    en: Sum of the work done by all relevant forces on the chosen system.
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ teorema-trabajo-energia ]
  common_mistake: Identificar Wnet con el trabajo de una sola fuerza cuando actuan varias.
  typical_range: Puede ser positiva, negativa o nula.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo indica si el entorno aporta o extrae energia cinetica neta.
      en: The sign indicates whether the surroundings add or remove net kinetic energy.
  zero_behavior:
    allowed: true
    meaning:
      es: Wnet nula indica que no cambio la energia cinetica total del sistema.
      en: Zero Wnet indicates no change in the system's total kinetic energy.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for: [ teorema-trabajo-energia ]
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Wnet es la variable causal del leaf; siempre debe leerse como balance total.
- id: dK
  symbol: "\\\\Delta K"
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
  used_in: [ teorema-trabajo-energia ]
  common_mistake: Convertir dK en modulo y perder si el sistema gano o perdio energia cinetica.
  typical_range: Puede ser positiva, negativa o nula.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo distingue ganancia de perdida de energia cinetica.
      en: The sign distinguishes gain from loss of kinetic energy.
  zero_behavior:
    allowed: true
    meaning:
      es: dK nula indica igual energia cinetica al inicio y al final.
      en: Zero dK indicates equal kinetic energy at the beginning and at the end.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for: [ teorema-trabajo-energia ]
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: dK es la lectura por estados que debe coincidir en signo y valor con Wnet.
- id: Ki
  symbol: "K_i"
  nombre:
    es: energia_cinetica_inicial
    en: initial_kinetic_energy
  unidad_si: J
  descripcion:
    es: Energia cinetica del sistema en el estado inicial del problema.
    en: Kinetic energy of the system in the initial problem state.
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ teorema-trabajo-energia ]
  common_mistake: Mezclar Ki con rapidez inicial sin convertir a energia cuando corresponde.
  typical_range: No negativa.
  sign_behavior:
    has_sign: false
    meaning:
      es: Ki debe permanecer no negativa.
      en: Ki must remain non-negative.
  zero_behavior:
    allowed: true
    meaning:
      es: Ki igual a cero representa salida desde reposo.
      en: Ki equal to zero represents starting from rest.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for: [ teorema-trabajo-energia ]
  graph_binding:
    channels: []
  pedagogical_notes: Ki fija el presupuesto energetico del estado de partida.
- id: Kf
  symbol: "K_f"
  nombre:
    es: energia_cinetica_final
    en: final_kinetic_energy
  unidad_si: J
  descripcion:
    es: Energia cinetica del sistema en el estado final comparado con el inicial.
    en: Kinetic energy of the system in the final state compared with the initial one.
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ teorema-trabajo-energia ]
  common_mistake: Aceptar Kf negativa sin revisar signos o datos de entrada.
  typical_range: No negativa.
  sign_behavior:
    has_sign: false
    meaning:
      es: Kf debe ser no negativa en el modelo clasico.
      en: Kf must be non-negative in the classical model.
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
    primary_for: []
    secondary_for: [ teorema-trabajo-energia ]
  graph_binding:
    channels: []
  pedagogical_notes: Kf cierra la comparacion por estados y determina el signo de dK junto con Ki.
- id: m
  symbol: m
  nombre:
    es: masa
    en: mass
  unidad_si: kg
  descripcion:
    es: Masa del sistema cuyo cambio de movimiento se estudia.
    en: Mass of the system whose motion change is being studied.
  dimension: M
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: physical_quantity
  used_in: [ teorema-trabajo-energia ]
  common_mistake: Olvidar que la forma cerrada con velocidades supone masa aproximadamente constante.
  typical_range: Positiva.
  sign_behavior:
    has_sign: false
    meaning:
      es: m debe ser positiva en el dominio fisico.
      en: m must be positive in the physical domain.
  zero_behavior:
    allowed: false
    meaning:
      es: m igual a cero deja sin sentido el balance mecanico del leaf.
      en: m equal to zero makes the leaf's mechanical balance meaningless.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '(0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for: [ teorema-trabajo-energia ]
  graph_binding:
    channels: []
  pedagogical_notes: La masa no explica por si sola el cambio; modula cuanto trabajo se necesita para variar la rapidez.
- id: vi
  symbol: "v_i"
  nombre:
    es: rapidez_inicial
    en: initial_speed
  unidad_si: m/s
  descripcion:
    es: Rapidez del sistema en el estado inicial.
    en: Speed of the system in the initial state.
  dimension: LT^{-1}
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: physical_quantity
  used_in: [ teorema-trabajo-energia ]
  common_mistake: Tratar vi como componente con signo en una formula que usa rapidez.
  typical_range: No negativa.
  sign_behavior:
    has_sign: false
    meaning:
      es: vi se interpreta como modulo de la velocidad inicial.
      en: vi is interpreted as the magnitude of the initial velocity.
  zero_behavior:
    allowed: true
    meaning:
      es: vi igual a cero representa inicio desde reposo.
      en: vi equal to zero represents starting from rest.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for: [ teorema-trabajo-energia ]
  graph_binding:
    channels: []
  pedagogical_notes: vi forma parte del estado inicial; no describe la historia completa del proceso.
- id: vf
  symbol: "v_f"
  nombre:
    es: rapidez_final
    en: final_speed
  unidad_si: m/s
  descripcion:
    es: Rapidez del sistema en el estado final.
    en: Speed of the system in the final state.
  dimension: LT^{-1}
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: physical_quantity
  used_in: [ teorema-trabajo-energia ]
  common_mistake: Leer vf negativa por conservar el signo direccional en vez del modulo.
  typical_range: No negativa.
  sign_behavior:
    has_sign: false
    meaning:
      es: vf se interpreta como modulo de la velocidad final.
      en: vf is interpreted as the magnitude of the final velocity.
  zero_behavior:
    allowed: true
    meaning:
      es: vf igual a cero representa detencion al final del proceso.
      en: vf equal to zero represents stopping at the end of the process.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for: [ teorema-trabajo-energia ]
  graph_binding:
    channels: []
  pedagogical_notes: vf debe leerse como cierre por estados, no como dato instantaneo aislado.
`;export{e as default};
