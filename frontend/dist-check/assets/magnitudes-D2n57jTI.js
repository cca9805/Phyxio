const n=`version: 1
magnitudes:
  - id: P
    symbol: \\vec P
    nombre:
      es: peso
      en: weight
    descripcion:
      es: Fuerza gravitatoria ejercida sobre el cuerpo por un astro.
      en: Gravitational force exerted on the body by an astronomical object.
    unidad_si: N
    dimension: LMT^{-2}
    is_vector: true
    components: ["P_x", "P_y"]
    category: derived
    physical_role: gravitational_force
    used_in: [peso_local_vectorial]
    common_mistake: "Confundir peso con masa."
    typical_range: "0.1 - 1e8 N"
    sign_behavior:
      has_sign: true
      meaning:
        es: Sentido de la atracción.
        en: Attraction direction.
    zero_behavior:
      allowed: true
      meaning:
        es: Ausencia de campo.
        en: Absence of field.
    value_nature:
      kind: vector_projection
      nonnegative_only: false
    interpretation_role:
      primary_for: [peso_local_vectorial]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Fuerza real independiente del observador."

  - id: Pmod
    symbol: P
    nombre:
      es: módulo del peso
      en: weight magnitude
    descripcion:
      es: Intensidad escalar de la fuerza peso.
      en: Scalar intensity of the weight force.
    unidad_si: N
    dimension: LMT^{-2}
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in: [peso_superficie, peso_aparente_concepto]
    common_mistake: "Confundir con la componente vertical en planos inclinados."
    typical_range: "0.1 - 1e8 N"
    sign_behavior:
      has_sign: false
      meaning:
        es: Valor absoluto.
        en: Absolute value.
    zero_behavior:
      allowed: true
      meaning:
        es: Peso nulo.
        en: Zero weight.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: [peso_superficie]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Lo que suele pedirse en problemas escalares."

  - id: m
    symbol: m
    nombre:
      es: masa
      en: mass
    descripcion:
      es: Medida de la inercia y cantidad de materia del cuerpo.
      en: Measure of inertia and amount of matter of the body.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: fundamental
    physical_role: physical_quantity
    used_in: [peso_local_vectorial, peso_superficie, gravedad_altura, gravedad_campo_central, peso_aparente_concepto]
    common_mistake: "Pensar que cambia con la gravedad."
    typical_range: "0.001 - 1e6 kg"
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Masa nula no tiene sentido aquí.
        en: Zero mass makes no sense here.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: []
      secondary_for: [peso_local_vectorial]
    graph_binding:
      channels: []
    pedagogical_notes: "Invariante en mecánica clásica."

  - id: g
    symbol: \\vec g
    nombre:
      es: campo gravitatorio vectorial
      en: gravitational field vector
    descripcion:
      es: Vector de intensidad de campo gravitatorio.
      en: Gravitational field strength vector.
    unidad_si: m/s^2
    dimension: LT^{-2}
    is_vector: true
    components: ["g_x", "g_y"]
    category: field
    physical_role: field_strength
    used_in: [peso_local_vectorial]
    common_mistake: "Considerar que es una aceleración cinemática siempre."
    typical_range: "0 - 300 m/s^2"
    sign_behavior:
      has_sign: true
      meaning:
        es: Dirección al centro de masas.
        en: Direction to center of mass.
    zero_behavior:
      allowed: true
      meaning:
        es: Campo nulo.
        en: Zero field.
    value_nature:
      kind: vector_projection
      nonnegative_only: false
    interpretation_role:
      primary_for: [peso_local_vectorial]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Propiedad del espacio creada por la masa M."

  - id: gmod
    symbol: g
    nombre:
      es: módulo de la gravedad
      en: gravity magnitude
    descripcion:
      es: Valor escalar de la intensidad del campo gravitatorio.
      en: Scalar value of the gravitational field strength.
    unidad_si: m/s^2
    dimension: LT^{-2}
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in: [gravedad_altura, gravedad_campo_central, peso_aparente_concepto]
    common_mistake: "Usar 9.8 en otros planetas."
    typical_range: "0 - 300 m/s^2"
    sign_behavior:
      has_sign: false
      meaning:
        es: Valor positivo.
        en: Positive value.
    zero_behavior:
      allowed: true
      meaning:
        es: Gravedad cero.
        en: Zero gravity.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: [gravedad_altura, gravedad_campo_central]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Aceleración de la gravedad local."

  - id: g0
    symbol: g_0
    nombre:
      es: gravedad de superficie
      en: surface gravity
    descripcion:
      es: Gravedad en la superficie radial del astro.
      en: Gravity at the astronomical body's surface radius.
    unidad_si: m/s^2
    dimension: LT^{-2}
    is_vector: false
    components: null
    category: field
    physical_role: reference_value
    used_in: [peso_superficie, gravedad_altura]
    common_mistake: "Confundir con el valor terrestre."
    typical_range: "1 - 300 m/s^2"
    sign_behavior:
      has_sign: false
      meaning:
        es: Valor escalar de referencia.
        en: Scalar reference value.
    zero_behavior:
      allowed: false
      meaning:
        es: Siempre existe gravedad en superficie.
        en: Surface gravity always exists.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: [peso_superficie]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Constante para cada astro."

  - id: h
    symbol: h
    nombre:
      es: altura
      en: height
    descripcion:
      es: Distancia desde la superficie hacia el exterior.
      en: Distance from the surface outward.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometric
    physical_role: physical_quantity
    used_in: [gravedad_altura]
    common_mistake: "Confundir con el radio total r."
    typical_range: "0 - 1e7 m"
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo hacia fuera.
        en: Positive outward.
    zero_behavior:
      allowed: true
      meaning:
        es: Nivel de superficie.
        en: Surface level.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: [gravedad_altura]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Altera g cuadráticamente."

  - id: R
    symbol: R
    nombre:
      es: radio del astro
      en: astronomical body radius
    descripcion:
      es: Radio medio del cuerpo celeste.
      en: Mean radius of the celestial body.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometric
    physical_role: physical_quantity
    used_in: [gravedad_altura, gravedad_campo_central]
    common_mistake: "Usar el diámetro."
    typical_range: "1e5 - 1e8 m"
    sign_behavior:
      has_sign: false
      meaning:
        es: Dimensión lineal.
        en: Linear dimension.
    zero_behavior:
      allowed: false
      meaning:
        es: El astro debe tener tamaño.
        en: Astronomical body must have size.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: []
      secondary_for: [gravedad_altura]
    graph_binding:
      channels: []
    pedagogical_notes: "Determina la escala del campo."

  - id: G
    symbol: G
    nombre:
      es: constante de gravitación
      en: gravitational constant
    descripcion:
      es: Constante de gravitación universal.
      en: Universal gravitational constant.
    unidad_si: "N*m^2/kg^2"
    dimension: "L^3M^{-1}T^{-2}"
    is_vector: false
    components: null
    category: constant
    physical_role: physical_quantity
    used_in: [gravedad_campo_central]
    common_mistake: "Confundir con g."
    typical_range: "6.674e-11"
    sign_behavior:
      has_sign: false
    zero_behavior:
      allowed: false
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: []
      secondary_for: [gravedad_campo_central]
    graph_binding:
      channels: []
    pedagogical_notes: "Constante universal."

  - id: M
    symbol: M
    nombre:
      es: masa del astro
      en: astronomical body mass
    descripcion:
      es: Masa del objeto que genera el campo predominante.
      en: Mass of the object generating the predominant field.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: fundamental
    physical_role: physical_quantity
    used_in: [gravedad_campo_central]
    common_mistake: "Confundir con la masa de prueba m."
    typical_range: "1e15 - 1e31 kg"
    sign_behavior:
      has_sign: false
    zero_behavior:
      allowed: false
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: [gravedad_campo_central]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Fuente del campo gravitatorio."

  - id: r
    symbol: r
    nombre:
      es: distancia al centro
      en: distance to center
    descripcion:
      es: Distancia desde el centro del astro hasta el punto de interés.
      en: Distance from the body center to the point of interest.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometric
    physical_role: physical_quantity
    used_in: [gravedad_campo_central]
    common_mistake: "Olvidar sumar el radio a la altura."
    typical_range: "1e5 - 1e12 m"
    sign_behavior:
      has_sign: false
    zero_behavior:
      allowed: false
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: [gravedad_campo_central]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Variable de la ley de inversa del cuadrado."

  - id: Pap
    symbol: P_{ap}
    nombre:
      es: peso aparente
      en: apparent weight
    descripcion:
      es: Fuerza normal o de soporte detectada por un sensor.
      en: Normal or support force detected by a sensor.
    unidad_si: N
    dimension: LMT^{-2}
    is_vector: false
    components: null
    category: derived
    physical_role: support_reading
    used_in: [peso_aparente_concepto]
    common_mistake: "Creer que es el peso real."
    typical_range: "0 - 1e5 N"
    sign_behavior:
      has_sign: true
    zero_behavior:
      allowed: true
    value_nature:
      kind: scalar
      nonnegative_only: false
    interpretation_role:
      primary_for: [peso_aparente_concepto]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Equivale a la fuerza de contacto N."

  - id: a
    symbol: a
    nombre:
      es: aceleración del marco
      en: frame acceleration
    descripcion:
      es: Aceleración vertical del sistema de referencia.
      en: Vertical acceleration of the reference frame.
    unidad_si: m/s^2
    dimension: LT^{-2}
    is_vector: false
    components: null
    category: cinematic
    physical_role: frame_motion
    used_in: [peso_aparente_concepto]
    common_mistake: "Confundir con g."
    typical_range: "0 - 200 m/s^2"
    sign_behavior:
      has_sign: true
    zero_behavior:
      allowed: true
    value_nature:
      kind: scalar
      nonnegative_only: false
    interpretation_role:
      primary_for: [peso_aparente_concepto]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Afecta el peso aparente inercialmente."

  - id: N
    symbol: N
    nombre:
      es: fuerza normal
      en: normal force
    descripcion:
      es: Reacción vincular de la superficie de apoyo.
      en: Constraint reaction of the support surface.
    unidad_si: N
    dimension: LMT^{-2}
    is_vector: false
    components: null
    category: derived
    physical_role: contact_force
    used_in: [peso_aparente_concepto]
    common_mistake: "Suponer que siempre iguala al peso."
    typical_range: "0 - 1e5 N"
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud de la compresión.
        en: Compression magnitude.
    zero_behavior:
      allowed: true
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for: []
      secondary_for: [peso_aparente_concepto]
    graph_binding:
      channels: []
    pedagogical_notes: "Responsable de la sensación de peso."
`;export{n as default};
