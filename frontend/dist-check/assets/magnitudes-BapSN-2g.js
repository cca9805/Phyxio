const n=`version: 5
magnitudes:
  - id: p
    symbol: p
    nombre:
      es: Presión estática
      en: Static pressure
    unidad_si: Pa
    dimension: pressure
    is_vector: false
    components: []
    category: fluid-mechanics
    physical_role: state-variable
    used_in: [ecuacion-de-bernoulli]
    descripcion:
      es: Presión termodinámica del fluido en un punto de la línea de corriente.
      en: Thermodynamic pressure of the fluid at a point on the streamline.
    common_mistake:
      es: Confundirla con la presión total o la presión dinámica.
      en: Confusing it with total pressure or dynamic pressure.
    typical_range: [0, 1000000]
    sign_behavior: always-positive
    zero_behavior: vacuum
    value_nature: continuous
    interpretation_role: primary-output
    graph_binding: axis-y
    pedagogical_notes:
      es: Representa la energía potencial de presión por unidad de volumen.
      en: Represents pressure potential energy per unit volume.

  - id: rho
    symbol: \\rho
    nombre:
      es: Densidad
      en: Density
    unidad_si: kg/m³
    dimension: density
    is_vector: false
    components: []
    category: fluid-mechanics
    physical_role: constant
    used_in: [ecuacion-de-bernoulli]
    descripcion:
      es: Masa por unidad de volumen del fluido (asumido incompresible).
      en: Mass per unit volume of the fluid (assumed incompressible).
    common_mistake:
      es: Usar la densidad del aire en aplicaciones de líquidos o viceversa.
      en: Using air density for liquid applications or vice versa.
    typical_range: [0.5, 15000]
    sign_behavior: always-positive
    zero_behavior: non-physical
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: secondary
    pedagogical_notes:
      es: Factor clave que determina la inercia del flujo y la presión dinámica.
      en: Key factor determining flow inertia and dynamic pressure.

  - id: v
    symbol: v
    nombre:
      es: Velocidad
      en: Velocity
    unidad_si: m/s
    dimension: speed
    is_vector: false
    components: []
    category: fluid-mechanics
    physical_role: state-variable
    used_in: [ecuacion-de-bernoulli]
    descripcion:
      es: Magnitud de la velocidad del fluido en el punto analizado.
      en: Magnitude of the fluid velocity at the analyzed point.
    common_mistake:
      es: Olvidar que el término de Bernoulli usa v al cuadrado.
      en: Forgetting that the Bernoulli term uses v squared.
    typical_range: [0, 500]
    sign_behavior: positive-or-zero
    zero_behavior: stagnation
    value_nature: continuous
    interpretation_role: primary-output
    graph_binding: axis-x
    pedagogical_notes:
      es: Vinculada a la energía cinética por unidad de volumen.
      en: Linked to kinetic energy per unit volume.

  - id: g
    symbol: g
    nombre:
      es: Aceleración de la gravedad
      en: Gravitational acceleration
    unidad_si: m/s²
    dimension: acceleration
    is_vector: false
    components: []
    category: classical-mechanics
    physical_role: constant
    used_in: [ecuacion-de-bernoulli]
    descripcion:
      es: Valor de la gravedad local (estándar 9.81 m/s²).
      en: Value of local gravity (standard 9.81 m/s²).
    common_mistake:
      es: Ignorar su efecto en flujos con grandes cambios de altura.
      en: Ignoring its effect in flows with large height changes.
    typical_range: [9.7, 9.9]
    sign_behavior: always-positive
    zero_behavior: weightlessness
    value_nature: constant
    interpretation_role: constant
    graph_binding: secondary
    pedagogical_notes:
      es: Define el peso de la columna de fluido.
      en: Defines the weight of the fluid column.

  - id: z
    symbol: z
    nombre:
      es: Altura o elevación
      en: Height or elevation
    unidad_si: m
    dimension: length
    is_vector: false
    components: []
    category: fluid-mechanics
    physical_role: state-variable
    used_in: [ecuacion-de-bernoulli]
    descripcion:
      es: Altura vertical del punto respecto a un nivel de referencia.
      en: Vertical height of the point relative to a reference level.
    common_mistake:
      es: No usar el mismo nivel de referencia para todos los puntos.
      en: Not using the same reference level for all points.
    typical_range: [-1000, 10000]
    sign_behavior: any
    zero_behavior: reference-datum
    value_nature: continuous
    interpretation_role: coordinate
    graph_binding: axis-y
    pedagogical_notes:
      es: Representa la energía potencial gravitatoria por unidad de peso o volumen.
      en: Represents gravitational potential energy per unit weight or volume.

  - id: q
    symbol: q
    nombre:
      es: Presión dinámica
      en: Dynamic pressure
    unidad_si: Pa
    dimension: pressure
    is_vector: false
    components: []
    category: fluid-mechanics
    physical_role: derived-variable
    used_in: [ecuacion-de-bernoulli]
    descripcion:
      es: Presión resultante del movimiento del fluido (½ρv²).
      en: Pressure resulting from fluid motion (½ρv²).
    common_mistake:
      es: Confundirla con la presión de estancamiento.
      en: Confusing it with stagnation pressure.
    typical_range: [0, 200000]
    sign_behavior: positive-or-zero
    zero_behavior: static-fluid
    value_nature: derived
    interpretation_role: context-helper
    graph_binding: visual-helper
    pedagogical_notes:
      es: Es la parte de la presión total debida al movimiento.
      en: It is the part of the total pressure due to motion.

  - id: H
    symbol: H
    nombre:
      es: Carga hidráulica total
      en: Total hydraulic head
    unidad_si: m
    dimension: length
    is_vector: false
    components: []
    category: fluid-mechanics
    physical_role: invariant
    used_in: [ecuacion-de-bernoulli]
    descripcion:
      es: Energía total por unidad de peso del fluido (constante en flujo ideal).
      en: Total energy per unit weight of the fluid (constant in ideal flow).
    common_mistake:
      es: Pensar que se mantiene constante si hay bombas o turbinas en medio.
      en: Thinking it stays constant if there are pumps or turbines in between.
    typical_range: [0, 1000]
    sign_behavior: positive-or-zero
    zero_behavior: no-energy
    value_nature: continuous
    interpretation_role: primary-output
    graph_binding: axis-y
    pedagogical_notes:
      es: Suma de la carga de presión, de velocidad y de elevación.
      en: Sum of pressure head, velocity head, and elevation head.
`;export{n as default};
