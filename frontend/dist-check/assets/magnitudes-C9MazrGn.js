const e=`version: 1
magnitudes:
  - id: F
    symbol: \\vec{F}
    nombre:
      es: fuerza
      en: force
    descripcion:
      es: Magnitud vectorial que cuantifica la interaccion entre dos cuerpos.
      en: Vector quantity that quantifies the interaction between two bodies.
    unidad_si: "N"
    dimension: "LMT^{-2}"
    is_vector: true
    components: ["F_x", "F_y", "F_z"]
    category: fundamental
    physical_role: input_agent
    used_in: [leyes_newton, estatica, equilibrio_traslacional]
    common_mistake: "Confundir la fuerza aplicada individual con la fuerza neta resultante."
    typical_range: "0.1 - 1e6 N en escala humana e industrial"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo refleja la direccion de la componente respecto al eje elegido.
        en: The sign reflects the direction of the component along the chosen axis.
    zero_behavior:
      allowed: true
      meaning:
        es: Fuerza nula indica ausencia de interaccion de ese agente sobre el cuerpo.
        en: Zero force means no interaction from that agent on the body.
    value_nature:
      kind: vector_projection
      nonnegative_only: false
      expected_interval: "[0, 1e6] N modulo"
    interpretation_role:
      primary_for: [equilibrio_traslacional_vectorial]
      secondary_for: [descomposicion_x, descomposicion_y]
    graph_binding:
      channels: []
    pedagogical_notes: "Siempre dibujar en el DCL como flecha desde el punto de contacto o el CM. No confundir con la resultante."

  - id: R
    symbol: \\vec{R}
    nombre:
      es: resultante vectorial
      en: net force (resultant)
    descripcion:
      es: Suma vectorial de todas las fuerzas externas aplicadas sobre el cuerpo.
      en: Vector sum of all external forces applied to the body.
    unidad_si: "N"
    dimension: "LMT^{-2}"
    is_vector: true
    components: ["R_x", "R_y"]
    category: derived
    physical_role: balance_indicator
    used_in: [condicion_equilibrio, equilibrio_traslacional_vectorial]
    common_mistake: "Olvidar que en equilibrio la resultante debe ser cero en todos los ejes, no solo en uno."
    typical_range: "0 N en equilibrio; distinto de cero indica aceleracion"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica en que sentido hay desequilibrio si la resultante no es cero.
        en: The sign indicates the direction of imbalance when the resultant is not zero.
    zero_behavior:
      allowed: true
      meaning:
        es: Resultante nula es la condicion exacta de equilibrio traslacional.
        en: Zero resultant is the exact condition for translational equilibrium.
    value_nature:
      kind: vector_projection
      nonnegative_only: false
      expected_interval: "[0, 0] N en equilibrio"
    interpretation_role:
      primary_for: [equilibrio_traslacional_vectorial, equilibrio_por_componentes]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Es el vector que se dibuja como cierre del poligono de fuerzas. Si cierra, hay equilibrio."

  - id: theta
    symbol: \\theta
    nombre:
      es: angulo de direccion
      en: direction angle
    descripcion:
      es: Orientacion de la fuerza respecto al eje x positivo del sistema de coordenadas.
      en: Orientation of the force relative to the positive x-axis of the coordinate system.
    unidad_si: "rad"
    dimension: "1"
    is_vector: false
    components: null
    category: parameter
    physical_role: direction
    used_in: [descomposicion_x, descomposicion_y]
    common_mistake: "Medir el angulo respecto a la vertical sin ajustar las funciones trigonometricas."
    typical_range: "0 a 2*pi rad (0 a 360 grados)"
    sign_behavior:
      has_sign: true
      meaning:
        es: Signo positivo antihorario, negativo horario respecto al eje x.
        en: Positive counterclockwise, negative clockwise from x-axis.
    zero_behavior:
      allowed: true
      meaning:
        es: Angulo cero indica fuerza alineada con el eje x positivo.
        en: Zero angle means force aligned with the positive x-axis.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: "[0, 6.28] rad"
    interpretation_role:
      primary_for: [descomposicion_x, descomposicion_y]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Elegir bien el eje de referencia ahorra trabajo algebraico. Alinear un eje con la incognita principal."

  - id: m
    symbol: m
    nombre:
      es: masa
      en: mass
    descripcion:
      es: Medida de la inercia del cuerpo ante cambios en su estado de movimiento.
      en: Measure of the body's inertia against changes in its state of motion.
    unidad_si: "kg"
    dimension: "M"
    is_vector: false
    components: null
    category: fundamental
    physical_role: inertial_mass
    used_in: [dinamica, gravedad, peso]
    common_mistake: "Confundir masa con peso; la masa no cambia con la gravedad."
    typical_range: "0.001 - 1e4 kg en problemas tipicos"
    sign_behavior:
      has_sign: false
      meaning:
        es: La masa es siempre positiva por definicion.
        en: Mass is always positive by definition.
    zero_behavior:
      allowed: false
      meaning:
        es: Una masa nula carece de sentido fisico en mecanica clasica.
        en: Zero mass has no physical meaning in classical mechanics.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "(0, 1e4] kg"
    interpretation_role:
      primary_for: []
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Solo aparece explicitamente al calcular el peso W = mg. En ecuaciones de equilibrio puro no siempre es necesaria."

  - id: T
    symbol: T
    nombre:
      es: tension
      en: tension
    descripcion:
      es: Fuerza de traccion transmitida a traves de cables, cuerdas o cadenas ideales.
      en: Pulling force transmitted through ideal cables, ropes, or chains.
    unidad_si: "N"
    dimension: "LMT^{-2}"
    is_vector: true
    components: ["T_x", "T_y"]
    category: derived
    physical_role: restorative_pull
    used_in: [poleas, estructuras, equilibrio_traslacional]
    common_mistake: "Asumir que la tension cambia a lo largo de una cuerda ideal sin masa que pasa por una polea sin rozamiento."
    typical_range: "10 - 1e5 N en aplicaciones de ingenieria"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo depende de la orientacion de la cuerda respecto al eje.
        en: The sign depends on the rope's orientation relative to the axis.
    zero_behavior:
      allowed: true
      meaning:
        es: Tension nula indica cuerda floja o sin carga.
        en: Zero tension means a slack or unloaded rope.
    value_nature:
      kind: vector_projection
      nonnegative_only: false
      expected_interval: "[0, 1e5] N modulo"
    interpretation_role:
      primary_for: [equilibrio_por_componentes]
      secondary_for: [descomposicion_x, descomposicion_y]
    graph_binding:
      channels: []
    pedagogical_notes: "En el DCL siempre apunta alejandose del cuerpo a lo largo de la cuerda. Su magnitud se determina por la condicion de equilibrio."
`;export{e as default};
