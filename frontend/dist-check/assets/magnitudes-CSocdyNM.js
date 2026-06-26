const e=`version: 5
magnitudes:
- id: L
  symbol: L
  nombre: { es: lagrangiano, en: Lagrangian }
  unidad_si: J
  descripcion: { es: Funcion dinamica escrita con coordenadas y velocidades generalizadas., en: Dynamical function written with generalized coordinates and velocities. }
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: lagrangian_function
  used_in: [ lagrangiano_cuadratico, momento_conjugado_legendre, hamiltoniano_legendre ]
  common_mistake: Confundir L con energia mecanica total.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Puede ser positivo, nulo o negativo segun el balance cinetico-potencial., en: It may be positive, zero, or negative depending on the kinetic-potential balance. } }
  zero_behavior: { allowed: true, meaning: { es: Cero no indica ausencia de dinamica; solo un balance instantaneo., en: Zero does not imply absence of dynamics; only an instantaneous balance. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [ transformacion-legendre ], secondary_for: [] }
  graph_binding: { channels: [ parameter ] }
  pedagogical_notes: L es el objeto de partida que sera transformado.
- id: H
  symbol: H
  nombre: { es: hamiltoniano, en: Hamiltonian }
  unidad_si: J
  descripcion: { es: Funcion de espacio de fases obtenida por transformacion de Legendre., en: Phase-space function obtained by a Legendre transformation. }
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: hamiltonian_function
  used_in: [ hamiltoniano_legendre, hamiltoniano_cuadratico ]
  common_mistake: Identificarlo siempre con energia total sin revisar el modelo.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Su signo depende de referencias energeticas y del modelo., en: Its sign depends on energy references and on the model. } }
  zero_behavior: { allowed: true, meaning: { es: Cero puede ser una referencia de energia o una condicion especial., en: Zero may be an energy reference or a special condition. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [ transformacion-legendre ], secondary_for: [] }
  graph_binding: { channels: [ y2 ] }
  pedagogical_notes: H debe quedar escrito sin velocidades ocultas.
- id: qi
  symbol: q
  nombre: { es: coordenada generalizada, en: generalized coordinate }
  unidad_si: context-dependent
  descripcion: { es: Variable independiente que describe la configuracion del sistema., en: Independent variable describing the system configuration. }
  dimension: context-dependent
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: generalized_coordinate
  used_in: [ lagrangiano_cuadratico ]
  common_mistake: No declarar la coordenada antes de interpretar su momento conjugado.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Depende de la orientacion elegida., en: It depends on the chosen orientation. } }
  zero_behavior: { allowed: true, meaning: { es: Puede representar origen, equilibrio o referencia., en: It may represent origin, equilibrium, or reference. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [ transformacion-legendre ], secondary_for: [] }
  graph_binding: { channels: [] }
  pedagogical_notes: qi fija el significado fisico de p.
- id: qdi
  symbol: qdot
  nombre: { es: velocidad generalizada, en: generalized velocity }
  unidad_si: context-dependent
  descripcion: { es: Derivada temporal de la coordenada generalizada., en: Time derivative of the generalized coordinate. }
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: generalized_velocity
  used_in: [ lagrangiano_cuadratico, momento_conjugado_legendre, momento_cuadratico, velocidad_desde_momento, hamiltoniano_legendre ]
  common_mistake: Dejar qdot en H despues de transformar.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Su signo indica sentido de evolucion en la coordenada., en: Its sign indicates direction of evolution along the coordinate. } }
  zero_behavior: { allowed: true, meaning: { es: Cero indica reposo instantaneo en esa coordenada., en: Zero indicates instantaneous rest in that coordinate. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [ transformacion-legendre ], secondary_for: [] }
  graph_binding: { channels: [ x ] }
  pedagogical_notes: qdi es la variable que se sustituye por p.
- id: p
  symbol: p
  nombre: { es: momento conjugado, en: conjugate momentum }
  unidad_si: kg*m/s
  descripcion: { es: Variable conjugada obtenida como pendiente de L respecto de la velocidad generalizada., en: Conjugate variable obtained as the slope of L with respect to generalized velocity. }
  dimension: MLT^{-1}
  is_vector: false
  components: []
  category: derived
  physical_role: conjugate_momentum
  used_in: [ momento_conjugado_legendre, momento_cuadratico, velocidad_desde_momento, hamiltoniano_legendre, hamiltoniano_cuadratico ]
  common_mistake: Suponer que siempre es momento lineal cartesiano.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: El signo depende del sentido de la coordenada generalizada., en: The sign depends on the direction of the generalized coordinate. } }
  zero_behavior: { allowed: true, meaning: { es: Puede indicar reposo conjugado o condicion de simetria., en: It may indicate conjugate rest or a symmetry condition. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [ transformacion-legendre ], secondary_for: [] }
  graph_binding: { channels: [ y1 ] }
  pedagogical_notes: p sustituye a qdi como variable del estado hamiltoniano.
- id: DLv
  symbol: dL_dqdot
  nombre: { es: derivada de L respecto de la velocidad, en: derivative of L with respect to velocity }
  unidad_si: kg*m/s
  descripcion: { es: Pendiente local del lagrangiano en la direccion de la velocidad generalizada., en: Local slope of the Lagrangian in the generalized-velocity direction. }
  dimension: MLT^{-1}
  is_vector: false
  components: []
  category: derived
  physical_role: conjugate_slope
  used_in: [ momento_conjugado_legendre ]
  common_mistake: Derivar respecto de q en lugar de qdot.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Comparte el signo fisico del momento conjugado., en: It shares the physical sign of the conjugate momentum. } }
  zero_behavior: { allowed: true, meaning: { es: Puede indicar pendiente nula respecto de la velocidad., en: It may indicate zero slope with respect to velocity. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [ transformacion-legendre ], secondary_for: [] }
  graph_binding: { channels: [] }
  pedagogical_notes: DLv ayuda a distinguir definicion general y caso cuadratico.
- id: m
  symbol: m
  nombre: { es: masa efectiva, en: effective mass }
  unidad_si: kg
  descripcion: { es: Parametro inercial que relaciona velocidad generalizada y momento en el caso cuadratico., en: Inertial parameter relating generalized velocity and momentum in the quadratic case. }
  dimension: M
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: inertial_parameter
  used_in: [ lagrangiano_cuadratico, momento_cuadratico, velocidad_desde_momento, hamiltoniano_cuadratico ]
  common_mistake: Usar una masa nula o incompatible con la coordenada.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: false, meaning: { es: En el modelo regular se toma positiva., en: In the regular model it is taken as positive. } }
  zero_behavior: { allowed: false, meaning: { es: Cero destruye la inversion velocidad-momento., en: Zero destroys the velocity-momentum inversion. } }
  value_nature: { kind: scalar, nonnegative_only: true, expected_interval: m > 0 }
  interpretation_role: { primary_for: [], secondary_for: [ transformacion-legendre ] }
  graph_binding: { channels: [ parameter ] }
  pedagogical_notes: m controla la pendiente p frente a qdi.
- id: V
  symbol: V
  nombre: { es: energia potencial, en: potential energy }
  unidad_si: J
  descripcion: { es: Energia conservativa asociada a la configuracion., en: Conservative energy associated with configuration. }
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: potential_energy
  used_in: [ lagrangiano_cuadratico, hamiltoniano_cuadratico ]
  common_mistake: Olvidar que su cero depende de la referencia.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Depende de la referencia de potencial., en: It depends on the potential reference. } }
  zero_behavior: { allowed: true, meaning: { es: Cero fija una referencia, no elimina necesariamente la interaccion., en: Zero fixes a reference, not necessarily the interaction. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [], secondary_for: [ transformacion-legendre ] }
  graph_binding: { channels: [ parameter ] }
  pedagogical_notes: V entra con signo opuesto en L y positivo en H cuadratico.
- id: W
  symbol: W
  nombre: { es: hessiano de velocidades, en: velocity Hessian }
  unidad_si: kg
  descripcion: { es: Matriz de segundas derivadas de L respecto de las velocidades generalizadas., en: Matrix of second derivatives of L with respect to generalized velocities. }
  dimension: M
  is_vector: false
  components: []
  category: derived
  physical_role: legendre_regular_hessian
  used_in: [ condicion_regularidad_legendre ]
  common_mistake: Comprobar regularidad mirando solo la forma final de H.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Su signo o determinante depende de la metrica inercial del modelo., en: Its sign or determinant depends on the inertial metric of the model. } }
  zero_behavior: { allowed: false, meaning: { es: Determinante nulo indica perdida de invertibilidad velocidad-momento., en: A zero determinant indicates loss of velocity-momentum invertibility. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: det(W) != 0 }
  interpretation_role: { primary_for: [], secondary_for: [ transformacion-legendre ] }
  graph_binding: { channels: [] }
  pedagogical_notes: W es el control formal de que la transformacion no pierde informacion.
`;export{e as default};
