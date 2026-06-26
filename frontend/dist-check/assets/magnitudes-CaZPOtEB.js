const n=`version: 1
magnitudes:
- id: m1
  symbol: m_1
  nombre: { es: masa del cuerpo 1, en: mass of body 1 }
  descripcion: { es: Masa inercial del primer cuerpo del sistema., en: Inertial mass of the first body. }
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: Ignorar la inercia o confundirla con el peso.
  typical_range: 0.1 - 100 kg
  sign_behavior: { has_sign: false, meaning: Escalar positivo. }
  zero_behavior: { allowed: false, meaning: Cuerpo masivo necesario. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Parametro inercial fijo durante el choque.
- id: m2
  symbol: m_2
  nombre: { es: masa del cuerpo 2, en: mass of body 2 }
  descripcion: { es: Masa inercial del segundo cuerpo (blanco)., en: Inertial mass of the second body (target). }
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: No considerar la masa del blanco en el balance.
  typical_range: 0.1 - 100 kg
  sign_behavior: { has_sign: false, meaning: Escalar positivo. }
  zero_behavior: { allowed: false, meaning: Blanco masivo necesario. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Segundo parametro inercial.
- id: v1i
  symbol: v_{1i}
  nombre: { es: velocidad inicial 1, en: initial velocity 1 }
  descripcion: { es: Velocidad del cuerpo 1 antes del impacto., en: Velocity of body 1 before impact. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: Errar en el signo segun el sentido del movimiento.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Direccion en el eje de colision. }
  zero_behavior: { allowed: true, meaning: Cuerpo 1 inicialmente en reposo. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [velocity] }
  pedagogical_notes: Componente axial de entrada.
- id: v2i
  symbol: v_{2i}
  nombre: { es: velocidad inicial 2, en: initial velocity 2 }
  descripcion: { es: Velocidad del cuerpo 2 antes del impacto., en: Velocity of body 2 before impact. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: Omitir el signo cuando se mueve hacia la izquierda.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Direccion en el eje de colision. }
  zero_behavior: { allowed: true, meaning: Blanco inicialmente estatico. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [velocity] }
  pedagogical_notes: Componente axial de entrada del blanco.
- id: v1f
  symbol: v_{1f}
  nombre: { es: velocidad final 1, en: final velocity 1 }
  descripcion: { es: Velocidad del cuerpo 1 tras el choque elastico., en: Velocity of body 1 after elastic collision. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: No predecir el rebote (cambio de signo).
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Direccion de salida. }
  zero_behavior: { allowed: true, meaning: Detencion absoluta tras el choque. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [velocity] }
  pedagogical_notes: Resultado del intercambio de momento.
- id: v2f
  symbol: v_{2f}
  nombre: { es: velocidad final 2, en: final velocity 2 }
  descripcion: { es: Velocidad del cuerpo 2 tras el choque elastico., en: Velocity of body 2 after elastic collision. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: Ignorar la conservacion de energia en el calculo.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Direccion de salida del blanco. }
  zero_behavior: { allowed: true, meaning: Blanco permanece en reposo (m1 << m2). }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [velocity] }
  pedagogical_notes: Resultado de la transferencia de energia.
- id: Ki
  symbol: K_i
  nombre: { es: energia cinetica inicial, en: initial kinetic energy }
  descripcion: { es: Energia cinetica total del sistema antes del choque., en: Total kinetic energy of the system before collision. }
  unidad_si: J
  dimension: L^2 M T^-2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: No sumar las energias de ambos cuerpos.
  typical_range: 0 - 5000 J
  sign_behavior: { has_sign: false, meaning: Escalar positivo. }
  zero_behavior: { allowed: true, meaning: Sistema en reposo total. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Presupuesto energetico de entrada.
- id: Kf
  symbol: K_f
  nombre: { es: energia cinetica final, en: final kinetic energy }
  descripcion: { es: Energia cinetica total del sistema tras el choque., en: Total kinetic energy of the system after collision. }
  unidad_si: J
  dimension: L^2 M T^-2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: Suponer perdida de energia en un choque elastico.
  typical_range: 0 - 5000 J
  sign_behavior: { has_sign: false, meaning: Escalar positivo. }
  zero_behavior: { allowed: true, meaning: Sistema detenido tras el choque. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [] }
  pedagogical_notes: En choques elasticos, Kf debe igualar a Ki.
- id: DeltaK
  symbol: \\Delta K
  nombre: { es: variacion de energia cinetica, en: kinetic energy variation }
  descripcion: { es: Cambio neto de la energia cinetica del sistema., en: Net change in the kinetic energy of the system. }
  unidad_si: J
  dimension: L^2 M T^-2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: Obtener un valor distinto de cero en este leaf.
  typical_range: 0 - 0 J
  sign_behavior: { has_sign: true, meaning: Nulo en el modelo ideal. }
  zero_behavior: { allowed: true, meaning: Condicion de elasticidad. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Identificador de procesos conservativos.
- id: T_fraction
  symbol: T
  nombre: { es: fraccion de transferencia, en: transfer fraction }
  descripcion: { es: Proporcion de energia transferida del proyectil al blanco., en: Ratio of energy transferred from projectile to target. }
  unidad_si: null
  dimension: '1'
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: Superar la unidad (100%).
  typical_range: 0 - 1
  sign_behavior: { has_sign: false, meaning: Ratio adimensional. }
  zero_behavior: { allowed: true, meaning: Sin transferencia (m1 << m2). }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Maxima para masas iguales.
- id: e
  symbol: e
  nombre: { es: coeficiente de restitucion, en: restitution coefficient }
  descripcion: { es: Medida de la elasticidad del choque., en: Measure of collision elasticity. }
  unidad_si: null
  dimension: '1'
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: Usar un valor diferente de 1 en este leaf.
  typical_range: 1 - 1
  sign_behavior: { has_sign: false, meaning: Ratio adimensional unitario. }
  zero_behavior: { allowed: false, meaning: El choque dejaria de ser elastico. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Caracteristica definitoria del leaf.
- id: p
  symbol: p
  nombre: { es: cantidad de movimiento lineal, en: linear momentum }
  descripcion: { es: Producto de la masa por la velocidad de un cuerpo., en: Product of mass and velocity of a body. }
  unidad_si: kg*m/s
  dimension: M L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: No considerar el signo vectorial.
  typical_range: -100 - 100 kg*m/s
  sign_behavior: { has_sign: true, meaning: Direccion del movimiento. }
  zero_behavior: { allowed: true, meaning: Cuerpo en reposo. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Se conserva en sistemas aislados.
- id: K
  symbol: K
  nombre: { es: energia cinetica total, en: total kinetic energy }
  descripcion: { es: Energia asociada al movimiento del sistema., en: Energy associated with the system's motion. }
  unidad_si: J
  dimension: L^2 M T^-2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-elasticas"]
  common_mistake: Olvidar el factor 1/2 o el cuadrado de la velocidad.
  typical_range: 0 - 5000 J
  sign_behavior: { has_sign: false, meaning: Escalar positivo. }
  zero_behavior: { allowed: true, meaning: Sistema en reposo. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-elasticas"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Se conserva solo en choques elasticos.
`;export{n as default};
