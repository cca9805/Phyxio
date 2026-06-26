const n=`version: 1
magnitudes:
- id: m1
  symbol: m_1
  nombre: { es: masa del cuerpo 1, en: mass of body 1 }
  descripcion: { es: Masa del proyectil o primer cuerpo del sistema., en: Projectile or first body mass. }
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Ignorar la inercia del primer cuerpo o confundirla con el peso.
  typical_range: 0.1 - 100 kg
  sign_behavior: { has_sign: false, meaning: Escalar positivo. }
  zero_behavior: { allowed: false, meaning: No hay choque sin masa. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Parametro inercial.
- id: m2
  symbol: m_2
  nombre: { es: masa del cuerpo 2, en: mass of body 2 }
  descripcion: { es: Masa del blanco o segundo cuerpo del sistema., en: Target or second body mass. }
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Ignorar la inercia del blanco.
  typical_range: 0.1 - 100 kg
  sign_behavior: { has_sign: false, meaning: Escalar positivo. }
  zero_behavior: { allowed: false, meaning: Blanco masivo necesario. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Parametro inercial del blanco.
- id: v1i
  symbol: v_{1i}
  nombre: { es: rapidez inicial de 1, en: initial speed of 1 }
  descripcion: { es: Rapidez del primer cuerpo antes del impacto., en: Speed of the first body before impact. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Tratarla como vector sin proyectar.
  typical_range: 1 - 50 m/s
  sign_behavior: { has_sign: false, meaning: Magnitud escalar. }
  zero_behavior: { allowed: true, meaning: Reposo inicial. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [velocity] }
  pedagogical_notes: Magnitud de la velocidad de entrada.
- id: v2i
  symbol: v_{2i}
  nombre: { es: rapidez inicial de 2, en: initial speed of 2 }
  descripcion: { es: Rapidez del blanco antes del impacto., en: Speed of the target before impact. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Olvidar que puede estar en movimiento.
  typical_range: 0 - 50 m/s
  sign_behavior: { has_sign: false, meaning: Magnitud escalar. }
  zero_behavior: { allowed: true, meaning: Blanco estatico. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [velocity] }
  pedagogical_notes: Rapidez de entrada del blanco.
- id: v1f
  symbol: v_{1f}
  nombre: { es: rapidez final de 1, en: final speed of 1 }
  descripcion: { es: Rapidez del primer cuerpo tras el choque., en: Speed of the first body after collision. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: No considerar el cambio de direccion.
  typical_range: 0 - 50 m/s
  sign_behavior: { has_sign: false, meaning: Magnitud escalar. }
  zero_behavior: { allowed: true, meaning: Detencion tras el choque. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [velocity] }
  pedagogical_notes: Rapidez de salida.
- id: v2f
  symbol: v_{2f}
  nombre: { es: rapidez final de 2, en: final speed of 2 }
  descripcion: { es: Rapidez del blanco tras el choque., en: Speed of the target after impact. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Error en el balance energetico.
  typical_range: 0 - 50 m/s
  sign_behavior: { has_sign: false, meaning: Magnitud escalar. }
  zero_behavior: { allowed: true, meaning: El blanco permanece quieto. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [velocity] }
  pedagogical_notes: Rapidez de dispersion.
- id: v1ix
  symbol: v_{1ix}
  nombre: { es: componente X de v1i, en: X component of v1i }
  descripcion: { es: Proyeccion horizontal de la velocidad inicial del cuerpo 1., en: Initial horizontal projection of body 1. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Error en el coseno.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Sentido en el eje X. }
  zero_behavior: { allowed: true, meaning: Entrada vertical. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Componente de impacto normal.
- id: v1iy
  symbol: v_{1iy}
  nombre: { es: componente Y de v1i, en: Y component of v1i }
  descripcion: { es: Proyeccion vertical de la velocidad inicial del cuerpo 1., en: Initial vertical projection of body 1. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Error en el seno.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Sentido en el eje Y. }
  zero_behavior: { allowed: true, meaning: Entrada horizontal. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Componente tangencial inicial.
- id: v2ix
  symbol: v_{2ix}
  nombre: { es: componente X de v2i, en: X component of v2i }
  descripcion: { es: Proyeccion X inicial del blanco., en: Initial X projection of target. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Omitir en el balance.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Sentido en X. }
  zero_behavior: { allowed: true, meaning: Blanco estatico en X. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Componente de balance.
- id: v2iy
  symbol: v_{2iy}
  nombre: { es: componente Y de v2i, en: Y component of v2i }
  descripcion: { es: Proyeccion Y inicial del blanco., en: Initial Y projection of target. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Omitir en el balance transversal.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Sentido en Y. }
  zero_behavior: { allowed: true, meaning: Blanco estatico en Y. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Componente transversal.
- id: v1fx
  symbol: v_{1fx}
  nombre: { es: componente X de v1f, en: X component of v1f }
  descripcion: { es: Proyeccion horizontal final del cuerpo 1., en: Final horizontal projection of body 1. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Error de signo.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Sentido final en X. }
  zero_behavior: { allowed: true, meaning: Parada en X. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Resultado del intercambio.
- id: v1fy
  symbol: v_{1fy}
  nombre: { es: componente Y de v1f, en: Y component of v1f }
  descripcion: { es: Proyeccion vertical final del cuerpo 1., en: Final vertical projection of body 1. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Ignorar la desviacion lateral.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Sentido final en Y. }
  zero_behavior: { allowed: true, meaning: Parada en Y. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Resultado transversal.
- id: v2fx
  symbol: v_{2fx}
  nombre: { es: componente X de v2f, en: X component of v2f }
  descripcion: { es: Proyeccion horizontal final del blanco., en: Final horizontal projection of target. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Error de transferencia.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Sentido final en X del blanco. }
  zero_behavior: { allowed: true, meaning: Sin avance del blanco. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Avance del segundo cuerpo.
- id: v2fy
  symbol: v_{2fy}
  nombre: { es: componente Y de v2f, en: Y component of v2f }
  descripcion: { es: Proyeccion vertical final del blanco., en: Final vertical projection of target. }
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Ignorar la deflexion lateral.
  typical_range: -50 - 50 m/s
  sign_behavior: { has_sign: true, meaning: Sentido final en Y del blanco. }
  zero_behavior: { allowed: true, meaning: Sin deflexion del blanco. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Deflexion del segundo cuerpo.
- id: theta1i
  symbol: \\theta_{1i}
  nombre: { es: angulo inicial de 1, en: initial angle of 1 }
  descripcion: { es: Direccion de entrada del primer cuerpo., en: Input direction of the first body. }
  unidad_si: rad
  dimension: '1'
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Medida incorrecta del angulo.
  typical_range: 0 - 6.28 rad
  sign_behavior: { has_sign: false, meaning: Orientacion polar. }
  zero_behavior: { allowed: true, meaning: Alineado con X. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Angulo de impacto.
- id: theta2i
  symbol: \\theta_{2i}
  nombre: { es: angulo inicial de 2, en: initial angle of 2 }
  descripcion: { es: Direccion de entrada del blanco., en: Input direction of the target. }
  unidad_si: rad
  dimension: '1'
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Signo del angulo.
  typical_range: 0 - 6.28 rad
  sign_behavior: { has_sign: false, meaning: Orientacion polar. }
  zero_behavior: { allowed: true, meaning: Blanco alineado con X. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Orientacion del blanco.
- id: theta1f
  symbol: \\theta_{1f}
  nombre: { es: angulo final de 1, en: final angle of 1 }
  descripcion: { es: Angulo de salida del primer cuerpo., en: Exit angle of the first body. }
  unidad_si: rad
  dimension: '1'
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Error en el cuadrante.
  typical_range: 0 - 6.28 rad
  sign_behavior: { has_sign: false, meaning: Orientacion polar final. }
  zero_behavior: { allowed: true, meaning: Salida en X. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Direccion de dispersion.
- id: theta2f
  symbol: \\theta_{2f}
  nombre: { es: angulo final de 2, en: final angle of 2 }
  descripcion: { es: Angulo de salida del blanco., en: Exit angle of the target. }
  unidad_si: rad
  dimension: '1'
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: No considerar la perpendicularidad.
  typical_range: 0 - 6.28 rad
  sign_behavior: { has_sign: false, meaning: Orientacion polar final. }
  zero_behavior: { allowed: true, meaning: Salida en X. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Direccion de dispersion del blanco.
- id: Ki
  symbol: K_i
  nombre: { es: energia inicial, en: initial energy }
  descripcion: { es: Energia cinetica inicial del sistema., en: Initial kinetic energy of the system. }
  unidad_si: J
  dimension: L^2 M T^-2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Olvidar un cuerpo.
  typical_range: 0 - 1000 J
  sign_behavior: { has_sign: false, meaning: Escalar positivo. }
  zero_behavior: { allowed: true, meaning: Reposo total. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Presupuesto energetico inicial.
- id: Kf
  symbol: K_f
  nombre: { es: energia final, en: final energy }
  descripcion: { es: Energia cinetica final del sistema., en: Final kinetic energy of the system. }
  unidad_si: J
  dimension: L^2 M T^-2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: No considerar disipacion.
  typical_range: 0 - 1000 J
  sign_behavior: { has_sign: false, meaning: Escalar positivo. }
  zero_behavior: { allowed: true, meaning: Sistema detenido. }
  value_nature: { kind: scalar, nonnegative_only: true }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Energia conservada.
- id: DeltaK
  symbol: \\Delta K
  nombre: { es: variacion de energia, en: energy variation }
  descripcion: { es: Diferencia de energia cinetica total., en: Total kinetic energy difference. }
  unidad_si: J
  dimension: L^2 M T^-2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in: ["colisiones-2d"]
  common_mistake: Signo positivo erroneo.
  typical_range: -1000 - 0 J
  sign_behavior: { has_sign: true, meaning: Negativo es perdida. }
  zero_behavior: { allowed: true, meaning: Choque elastico. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Medida de elasticidad.
- id: vec
  symbol: \\vec{P}
  nombre: { es: balance vectorial, en: vector balance }
  descripcion: { es: Ley de conservacion vectorial del momento lineal., en: Vector linear momentum conservation law. }
  unidad_si: kg*m/s
  dimension: L M T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_law
  used_in: ["colisiones-2d"]
  common_mistake: Sumar magnitudes.
  typical_range: 0 - 5000 kg*m/s
  sign_behavior: { has_sign: false, meaning: Balance absoluto. }
  zero_behavior: { allowed: true, meaning: Momento nulo. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Ley fundamental.
- id: x
  symbol: P_x
  nombre: { es: balance horizontal, en: horizontal balance }
  descripcion: { es: Conservacion horizontal del momento., en: Horizontal momentum conservation. }
  unidad_si: kg*m/s
  dimension: L M T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_law
  used_in: ["colisiones-2d"]
  common_mistake: Errores de signo.
  typical_range: -5000 - 5000 kg*m/s
  sign_behavior: { has_sign: true, meaning: Sentido horizontal. }
  zero_behavior: { allowed: true, meaning: Sin momento en X. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Balance cartesiano X.
- id: y
  symbol: P_y
  nombre: { es: balance vertical, en: vertical balance }
  descripcion: { es: Conservacion vertical del momento., en: Vertical momentum conservation. }
  unidad_si: kg*m/s
  dimension: L M T^-1
  is_vector: false
  components: null
  category: derived
  physical_role: physical_law
  used_in: ["colisiones-2d"]
  common_mistake: Error trigonometrico.
  typical_range: -5000 - 5000 kg*m/s
  sign_behavior: { has_sign: true, meaning: Sentido vertical. }
  zero_behavior: { allowed: true, meaning: Sin momento en Y. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Balance transversal Y.
- id: energy_loss
  symbol: \\Delta K_{law}
  nombre: { es: ley de balance energetico, en: energy balance law }
  descripcion: { es: Principio de balance de energia cinetica., en: Kinetic energy balance principle. }
  unidad_si: J
  dimension: L^2 M T^-2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_law
  used_in: ["colisiones-2d"]
  common_mistake: Ignorar disipacion.
  typical_range: -10000 - 0 J
  sign_behavior: { has_sign: true, meaning: Negativo es disipacion. }
  zero_behavior: { allowed: true, meaning: Sistema conservativo. }
  value_nature: { kind: scalar, nonnegative_only: false }
  interpretation_role: { primary_for: ["colisiones-2d"] }
  graph_binding: { channels: [] }
  pedagogical_notes: Ley complementaria.
`;export{n as default};
