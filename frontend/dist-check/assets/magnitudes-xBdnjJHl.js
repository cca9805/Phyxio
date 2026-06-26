const e=`version: 2
magnitudes:

- id: m1
  symbol: m_1
  nombre: { es: masa del cuerpo 1, en: mass of body 1 }
  descripcion: { es: Masa del proyectil o primer cuerpo del sistema., en: Mass of the projectile or first body of the system. }
  unidad_si: kg
  dimension: M
  category: fundamental
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: false
  components: null
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [mass] }
  common_mistake: { es: Confundir con m2., en: Confuse with m2. }
  typical_range: 0.1 - 100 kg
  sign_behavior: { has_sign: false, meaning: { es: Escalar siempre positivo., en: Always positive scalar. } }
  zero_behavior: { allowed: false, meaning: { es: El cuerpo debe tener masa., en: Body must have mass. } }
  value_nature: { kind: scalar, nonnegative_only: true }
  pedagogical_notes: { es: Masa invariante bajo cambio de marco., en: Invariant mass under frame change. }

- id: m2
  symbol: m_2
  nombre: { es: masa del cuerpo 2, en: mass of body 2 }
  descripcion: { es: Masa del blanco o segundo cuerpo del sistema., en: Mass of the target or second body of the system. }
  unidad_si: kg
  dimension: M
  category: fundamental
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: false
  components: null
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [mass] }
  common_mistake: { es: Olvidar que m2 puede ser distinta a m1., en: Forget that m2 can be different from m1. }
  typical_range: 0.1 - 100 kg
  sign_behavior: { has_sign: false, meaning: { es: Escalar siempre positivo., en: Always positive scalar. } }
  zero_behavior: { allowed: false, meaning: { es: El blanco debe tener masa., en: Target must have mass. } }
  value_nature: { kind: scalar, nonnegative_only: true }
  pedagogical_notes: { es: Masa invariante bajo cambio de marco., en: Invariant mass under frame change. }

- id: v1
  symbol: v_1
  nombre: { es: velocidad de laboratorio 1, en: laboratory velocity 1 }
  descripcion: { es: Velocidad del cuerpo 1 medida por un observador en reposo., en: Velocity of body 1 measured by an observer at rest. }
  unidad_si: m/s
  dimension: L T^-1
  category: fundamental
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: true
  components: [x]
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [velocity] }
  common_mistake: { es: No diferenciar entre v1 y u1., en: Not differentiating between v1 and u1. }
  typical_range: -500 - 500 m/s
  sign_behavior: { has_sign: true, meaning: { es: Dirección en el marco del laboratorio., en: Direction in the laboratory frame. } }
  zero_behavior: { allowed: true, meaning: { es: Reposo en el laboratorio., en: Rest in laboratory. } }
  value_nature: { kind: vector_component, nonnegative_only: false }
  pedagogical_notes: { es: Referencia base del experimento., en: Base reference of the experiment. }

- id: v2
  symbol: v_2
  nombre: { es: velocidad de laboratorio 2, en: laboratory velocity 2 }
  descripcion: { es: Velocidad del cuerpo 2 medida por un observador en reposo., en: Velocity of body 2 measured by an observer at rest. }
  unidad_si: m/s
  dimension: L T^-1
  category: fundamental
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: true
  components: [x]
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [velocity] }
  common_mistake: { es: No diferenciar entre v2 y u2., en: Not differentiating between v2 and u2. }
  typical_range: -500 - 500 m/s
  sign_behavior: { has_sign: true, meaning: { es: Dirección en el marco del laboratorio., en: Direction in the laboratory frame. } }
  zero_behavior: { allowed: true, meaning: { es: Reposo en el laboratorio., en: Rest in laboratory. } }
  value_nature: { kind: vector_component, nonnegative_only: false }
  pedagogical_notes: { es: Referencia base del experimento., en: Base reference of the experiment. }

- id: Vcm
  symbol: V_{cm}
  nombre: { es: velocidad del centro de masas, en: center of mass velocity }
  descripcion: { es: Velocidad del punto que representa el promedio de masa del sistema., en: Velocity of the point representing the mass average of the system. }
  unidad_si: m/s
  dimension: L T^-1
  category: derived
  physical_role: physical_law
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: true
  components: [x]
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [frame_velocity] }
  common_mistake: { es: Creer que Vcm cambia durante un choque aislado., en: Believe that Vcm changes during an isolated collision. }
  typical_range: -500 - 500 m/s
  sign_behavior: { has_sign: true, meaning: { es: Dirección de avance del sistema completo., en: Forward direction of the entire system. } }
  zero_behavior: { allowed: true, meaning: { es: El CM está en reposo relativo., en: CM is at relative rest. } }
  value_nature: { kind: vector_component, nonnegative_only: false }
  pedagogical_notes: { es: Se mantiene constante en ausencia de fuerzas externas., en: Stays constant in the absence of external forces. }

- id: u1
  symbol: u_1
  nombre: { es: velocidad relativa 1 (marco CM), en: relative velocity 1 (CM frame) }
  descripcion: { es: Velocidad del cuerpo 1 vista desde el centro de masas., en: Velocity of body 1 as seen from the center of mass. }
  unidad_si: m/s
  dimension: L T^-1
  category: derived
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: true
  components: [x]
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [velocity] }
  common_mistake: { es: "Olvidar restar Vcm: u1 = v1 - Vcm.", en: "Forget to subtract Vcm: u1 = v1 - Vcm." }
  typical_range: -500 - 500 m/s
  sign_behavior: { has_sign: true, meaning: { es: Dirección relativa al CM., en: Direction relative to the CM. } }
  zero_behavior: { allowed: true, meaning: { es: El cuerpo 1 está en el CM., en: Body 1 is at the CM. } }
  value_nature: { kind: vector_component, nonnegative_only: false }
  pedagogical_notes: { es: Es crucial para simplificar la geometría del choque., en: Crucial for simplifying collision geometry. }

- id: u2
  symbol: u_2
  nombre: { es: velocidad relativa 2 (marco CM), en: relative velocity 2 (CM frame) }
  descripcion: { es: Velocidad del cuerpo 2 vista desde el centro de masas., en: Velocity of body 2 as seen from the center of mass. }
  unidad_si: m/s
  dimension: L T^-1
  category: derived
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: true
  components: [x]
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [velocity] }
  common_mistake: { es: "No notar que u1 y u2 tienen signos opuestos.", en: "Not noticing that u1 and u2 have opposite signs." }
  typical_range: -500 - 500 m/s
  sign_behavior: { has_sign: true, meaning: { es: Dirección relativa al CM., en: Direction relative to the CM. } }
  zero_behavior: { allowed: true, meaning: { es: El cuerpo 2 está en el CM., en: Body 2 is at the CM. } }
  value_nature: { kind: vector_component, nonnegative_only: false }
  pedagogical_notes: { es: Es crucial para simplificar la geometría del choque., en: Crucial for simplifying collision geometry. }

- id: v_rel
  symbol: v_{rel}
  nombre: { es: velocidad relativa entre cuerpos, en: relative velocity between bodies }
  descripcion: { es: Diferencia de velocidades entre el proyectil y el blanco., en: Difference in velocities between the projectile and the target. }
  unidad_si: m/s
  dimension: L T^-1
  category: derived
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: true
  components: [x]
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [relative_velocity] }
  common_mistake: { es: Confundir v1 - v2 con v2 - v1., en: Confuse v1 - v2 with v2 - v1. }
  typical_range: -1000 - 1000 m/s
  sign_behavior: { has_sign: true, meaning: { es: Rapidez de acercamiento o alejamiento., en: Approach or separation speed. } }
  zero_behavior: { allowed: true, meaning: { es: Los cuerpos no se acercan entre sí., en: Bodies do not approach each other. } }
  value_nature: { kind: vector_component, nonnegative_only: false }
  pedagogical_notes: { es: Es una magnitud invariante ante transformaciones de Galileo., en: Invariant magnitude under Galilean transformations. }

- id: mu
  symbol: \\mu
  nombre: { es: masa reducida, en: reduced mass }
  descripcion: { es: Masa equivalente de una sola partícula para el estudio del movimiento relativo., en: Equivalent mass of a single particle for the study of relative motion. }
  unidad_si: kg
  dimension: M
  category: derived
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: false
  components: null
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [mass] }
  common_mistake: { es: Sumar masas en lugar de usar el producto sobre la suma., en: Add masses instead of using product over sum. }
  typical_range: 0.1 - 50 kg
  sign_behavior: { has_sign: false, meaning: { es: Inercia efectiva del par., en: Effective inertia of the pair. } }
  zero_behavior: { allowed: false, meaning: { es: Requiere dos masas finitas., en: Requires two finite masses. } }
  value_nature: { kind: scalar, nonnegative_only: true }
  pedagogical_notes: { es: Siempre es menor o igual a la menor de las masas., en: Always less than or equal to the smallest mass. }

- id: K_cm
  symbol: K_{cm}
  nombre: { es: energía cinética en el marco CM, en: kinetic energy in CM frame }
  descripcion: { es: Energía del sistema asociada exclusivamente al movimiento relativo entre cuerpos., en: System energy associated exclusively with relative motion between bodies. }
  unidad_si: J
  dimension: M L^2 T^-2
  category: derived
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: false
  components: null
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [energy] }
  common_mistake: { es: No usar la masa reducida mu en el cálculo., en: Not using reduced mass mu in the calculation. }
  typical_range: 0.1 - 5000 J
  sign_behavior: { has_sign: false, meaning: { es: Energía disponible para procesos internos., en: Energy available for internal processes. } }
  zero_behavior: { allowed: true, meaning: { es: No hay movimiento relativo., en: No relative motion. } }
  value_nature: { kind: scalar, nonnegative_only: true }
  pedagogical_notes: { es: Es la energía 'útil' que puede disiparse en un choque inelástico., en: The 'useful' energy that can be dissipated in an inelastic collision. }

- id: p_cm_total
  symbol: P_{cm}
  nombre: { es: momento total en marco CM, en: total momentum in CM frame }
  descripcion: { es: Suma de momentos lineales vista desde el centro de masas., en: Sum of linear momenta as seen from the center of mass. }
  unidad_si: kg*m/s
  dimension: M L T^-1
  category: derived
  physical_role: physical_law
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: true
  components: [x]
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [momentum] }
  common_mistake: { es: Creer que puede ser distinto de cero., en: Believe it can be non-zero. }
  typical_range: 0 - 0 kg*m/s
  sign_behavior: { has_sign: false, meaning: { es: Siempre nulo por definición., en: Always zero by definition. } }
  zero_behavior: { allowed: true, meaning: { es: Condición definitoria del marco CM., en: Defining condition of the CM frame. } }
  value_nature: { kind: scalar, nonnegative_only: true }
  pedagogical_notes: { es: Es la razón por la cual los cuerpos siempre chocan 'de frente' en este marco., en: Reason why bodies always collide 'head-on' in this frame. }
- id: K_total
  symbol: K_{total}
  nombre: { es: energía cinética total en laboratorio, en: total kinetic energy in lab }
  descripcion: { es: Suma de las energías cinéticas de todas las partículas del sistema medidas en el marco del laboratorio., en: Sum of kinetic energies of all particles in the system measured in the laboratory frame. }
  unidad_si: J
  dimension: M L^2 T^-2
  category: derived
  physical_role: physical_quantity
  used_in: [marco-del-centro-de-masas-en-colisiones]
  is_vector: false
  components: null
  interpretation_role: { primary_for: ["marco-del-centro-de-masas-en-colisiones"] }
  graph_binding: { channels: [energy] }
  common_mistake: { es: Confundir con la energía interna K_cm., en: Confuse with internal energy K_cm. }
  typical_range: 0.1 - 5000 J
  sign_behavior: { has_sign: false, meaning: { es: Magnitud escalar no negativa., en: Non-negative scalar magnitude. } }
  zero_behavior: { allowed: true, meaning: { es: Todas las partículas en reposo absoluto., en: All particles at absolute rest. } }
  value_nature: { kind: scalar, nonnegative_only: true }
  pedagogical_notes: { es: Se descompone mediante el teorema de König., en: Decomposed using König's theorem. }
`;export{e as default};
