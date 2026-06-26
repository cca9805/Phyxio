const e=`version: 5
magnitudes:
- id: T
  symbol: T
  nombre: { es: energia cinetica, en: kinetic energy }
  unidad_si: J
  descripcion: { es: Energia asociada al movimiento del sistema., en: Energy associated with system motion. }
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: kinetic_energy
  used_in: [ energia_cinetica_traslacional, energia_cinetica_generalizada, lagrangiano_mecanico, energia_mecanica_total ]
  common_mistake: Tratar T como lineal en velocidad en lugar de cuadratica.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: false, meaning: { es: En modelos mecanicos ordinarios es no negativa., en: In ordinary mechanical models it is non-negative. } }
  zero_behavior: { allowed: true, meaning: { es: Cero indica reposo instantaneo en la coordenada considerada., en: Zero indicates instantaneous rest in the considered coordinate. } }
  value_nature: { kind: scalar, nonnegative_only: true, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [ energia-cinetica-y-potencial ], secondary_for: [] }
  graph_binding: { channels: [ y1 ] }
  pedagogical_notes: T expresa la parte dinamica asociada al movimiento.
- id: V
  symbol: V
  nombre: { es: energia potencial, en: potential energy }
  unidad_si: J
  descripcion: { es: Energia asociada a configuracion o posicion dentro de una interaccion conservativa., en: Energy associated with configuration or position in a conservative interaction. }
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: potential_energy
  used_in: [ energia_potencial_gravitatoria, energia_potencial_elastica, lagrangiano_mecanico, energia_mecanica_total ]
  common_mistake: Olvidar que el cero de V depende de la referencia.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Puede cambiar segun la referencia elegida., en: It may change with the chosen reference. } }
  zero_behavior: { allowed: true, meaning: { es: Cero expresa referencia, no ausencia universal de interaccion., en: Zero expresses reference, not universal absence of interaction. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [ energia-cinetica-y-potencial ], secondary_for: [] }
  graph_binding: { channels: [ y2 ] }
  pedagogical_notes: V debe construirse desde la misma configuracion usada para T.
- id: L
  symbol: L
  nombre: { es: lagrangiano, en: Lagrangian }
  unidad_si: J
  descripcion: { es: Funcion dinamica definida como diferencia entre energia cinetica y potencial., en: Dynamical function defined as the difference between kinetic and potential energy. }
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: dynamical_function
  used_in: [ lagrangiano_mecanico ]
  common_mistake: Confundir L con energia mecanica total.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Puede ser positivo, cero o negativo segun el balance T menos V., en: It can be positive, zero, or negative depending on T minus V. } }
  zero_behavior: { allowed: true, meaning: { es: Cero solo indica igualdad instantanea entre T y V., en: Zero only indicates instantaneous equality between T and V. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [ energia-cinetica-y-potencial ], secondary_for: [] }
  graph_binding: { channels: [] }
  pedagogical_notes: L es el objeto que alimenta la formulacion lagrangiana.
- id: E
  symbol: E
  nombre: { es: energia mecanica, en: mechanical energy }
  unidad_si: J
  descripcion: { es: Suma de energia cinetica y potencial usada para discutir conservacion., en: Sum of kinetic and potential energy used to discuss conservation. }
  dimension: ML^2T^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: mechanical_energy
  used_in: [ energia_mecanica_total ]
  common_mistake: Usar E y L como si fueran intercambiables.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Depende de la referencia de energia potencial., en: It depends on the potential-energy reference. } }
  zero_behavior: { allowed: true, meaning: { es: Cero depende de la referencia energetica elegida., en: Zero depends on the selected energy reference. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [], secondary_for: [ energia-cinetica-y-potencial ] }
  graph_binding: { channels: [] }
  pedagogical_notes: E sirve para conservacion; L sirve para generar ecuaciones.
- id: m
  symbol: m
  nombre: { es: masa, en: mass }
  unidad_si: kg
  descripcion: { es: Parametro inercial que escala energia cinetica y potencial gravitatoria., en: Inertial parameter scaling kinetic and gravitational potential energy. }
  dimension: M
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: model_parameter
  used_in: [ energia_cinetica_traslacional, energia_cinetica_generalizada, energia_potencial_gravitatoria ]
  common_mistake: Usar masa nula o negativa.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: false, meaning: { es: Se toma positiva., en: It is taken as positive. } }
  zero_behavior: { allowed: false, meaning: { es: Cero queda fuera del dominio mecanico ordinario., en: Zero is outside the ordinary mechanical domain. } }
  value_nature: { kind: scalar, nonnegative_only: true, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [], secondary_for: [ energia-cinetica-y-potencial ] }
  graph_binding: { channels: [ parameter ] }
  pedagogical_notes: m cambia la escala energetica completa.
- id: v
  symbol: v
  nombre: { es: velocidad ordinaria, en: ordinary speed }
  unidad_si: m/s
  descripcion: { es: Rapidez traslacional usada en la energia cinetica elemental., en: Translational speed used in elementary kinetic energy. }
  dimension: LT^{-1}
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: speed
  used_in: [ energia_cinetica_traslacional ]
  common_mistake: Olvidar que T depende de v al cuadrado.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: false, meaning: { es: Como rapidez se toma no negativa., en: As speed it is taken as non-negative. } }
  zero_behavior: { allowed: true, meaning: { es: Cero anula la energia cinetica traslacional., en: Zero removes translational kinetic energy. } }
  value_nature: { kind: scalar, nonnegative_only: true, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [], secondary_for: [ energia-cinetica-y-potencial ] }
  graph_binding: { channels: [ x ] }
  pedagogical_notes: v es la variable horizontal del grafico energetico.
- id: qdi
  symbol: \\dot{q}_i
  nombre: { es: velocidad generalizada, en: generalized velocity }
  unidad_si: context-dependent
  descripcion: { es: Derivada temporal de la coordenada generalizada elegida., en: Time derivative of the chosen generalized coordinate. }
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: generalized_velocity
  used_in: [ energia_cinetica_generalizada ]
  common_mistake: Usarla sin declarar la coordenada asociada.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Su signo depende del sentido de la coordenada., en: Its sign depends on coordinate orientation. } }
  zero_behavior: { allowed: true, meaning: { es: Cero indica reposo instantaneo en esa coordenada., en: Zero indicates instantaneous rest in that coordinate. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [], secondary_for: [ energia-cinetica-y-potencial ] }
  graph_binding: { channels: [] }
  pedagogical_notes: qdi debe pertenecer al mismo modelo que qi.
- id: qi
  symbol: q_i
  nombre: { es: coordenada generalizada, en: generalized coordinate }
  unidad_si: context-dependent
  descripcion: { es: Coordenada independiente usada para describir configuracion., en: Independent coordinate used to describe configuration. }
  dimension: context-dependent
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: generalized_coordinate
  used_in: [ energia_potencial_elastica ]
  common_mistake: Medir qi desde un origen incompatible con el potencial.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Depende de la convencion de coordenada., en: It depends on coordinate convention. } }
  zero_behavior: { allowed: true, meaning: { es: Puede representar equilibrio o referencia., en: It may represent equilibrium or reference. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [], secondary_for: [ energia-cinetica-y-potencial ] }
  graph_binding: { channels: [] }
  pedagogical_notes: qi debe aparecer de forma coherente en T y V.
- id: h
  symbol: h
  nombre: { es: altura, en: height }
  unidad_si: m
  descripcion: { es: Posicion vertical respecto de una referencia gravitatoria., en: Vertical position relative to a gravitational reference. }
  dimension: L
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: height
  used_in: [ energia_potencial_gravitatoria ]
  common_mistake: Interpretar h sin declarar nivel cero.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: true, meaning: { es: Depende del origen vertical elegido., en: It depends on the chosen vertical origin. } }
  zero_behavior: { allowed: true, meaning: { es: Cero fija la referencia de potencial., en: Zero fixes the potential reference. } }
  value_nature: { kind: scalar, nonnegative_only: false, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [], secondary_for: [ energia-cinetica-y-potencial ] }
  graph_binding: { channels: [ parameter ] }
  pedagogical_notes: h fija la altura de la curva V en el grafico aplicado.
- id: g
  symbol: g
  nombre: { es: intensidad gravitatoria, en: gravitational field strength }
  unidad_si: m/s^2
  descripcion: { es: Parametro que relaciona masa, altura y energia potencial gravitatoria., en: Parameter relating mass, height, and gravitational potential energy. }
  dimension: LT^{-2}
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: gravitational_parameter
  used_in: [ energia_potencial_gravitatoria ]
  common_mistake: Usar g terrestre fuera de su dominio sin justificarlo.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: false, meaning: { es: Se usa como modulo positivo del campo local., en: It is used as the positive magnitude of the local field. } }
  zero_behavior: { allowed: false, meaning: { es: Cero elimina el modelo gravitatorio uniforme., en: Zero removes the uniform gravitational model. } }
  value_nature: { kind: scalar, nonnegative_only: true, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [], secondary_for: [ energia-cinetica-y-potencial ] }
  graph_binding: { channels: [ parameter ] }
  pedagogical_notes: g debe declararse cuando se compara con otros astros o escalas.
- id: k
  symbol: k
  nombre: { es: rigidez elastica, en: elastic stiffness }
  unidad_si: N/m
  descripcion: { es: Parametro que escala energia potencial elastica cuadratica., en: Parameter scaling quadratic elastic potential energy. }
  dimension: MT^{-2}
  is_vector: false
  components: []
  category: base_or_parameter
  physical_role: stiffness
  used_in: [ energia_potencial_elastica ]
  common_mistake: Confundir k con una fuerza.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: false, meaning: { es: En un resorte estable se toma no negativa., en: In a stable spring it is non-negative. } }
  zero_behavior: { allowed: true, meaning: { es: Cero elimina la energia elastica restauradora., en: Zero removes restoring elastic energy. } }
  value_nature: { kind: scalar, nonnegative_only: true, expected_interval: Context-dependent }
  interpretation_role: { primary_for: [], secondary_for: [ energia-cinetica-y-potencial ] }
  graph_binding: { channels: [] }
  pedagogical_notes: k permite conectar energia potencial con oscilaciones.
- id: G
  symbol: g_ij
  nombre: { es: matriz metrica inercial, en: inertial metric matrix }
  unidad_si: kg
  descripcion: { es: Matriz que codifica la inercia efectiva y los acoplamientos entre velocidades generalizadas., en: Matrix encoding effective inertia and couplings between generalized velocities. }
  dimension: M
  is_vector: false
  components: []
  category: derived
  physical_role: kinetic_metric
  used_in: [ energia_cinetica_metrica ]
  common_mistake: Sustituirla siempre por una masa escalar aunque las coordenadas esten acopladas.
  typical_range: Context-dependent.
  sign_behavior: { has_sign: false, meaning: { es: Como metrica fisica debe generar forma cuadratica positiva., en: As a physical metric it should generate a positive quadratic form. } }
  zero_behavior: { allowed: false, meaning: { es: Una metrica singular indica coordenadas degeneradas o modelo incompleto., en: A singular metric indicates degenerate coordinates or an incomplete model. } }
  value_nature: { kind: matrix, nonnegative_only: true, expected_interval: positive_definite }
  interpretation_role: { primary_for: [], secondary_for: [ energia-cinetica-y-potencial ] }
  graph_binding: { channels: [] }
  pedagogical_notes: G permite pasar de una energia cinetica escalar simple a una forma geometrica general.
`;export{e as default};
