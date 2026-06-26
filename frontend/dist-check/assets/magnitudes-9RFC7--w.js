const e=`version: 1
magnitudes:
  - id: v_rel
    symbol: '\\overrightarrow{v}_{A/B}'
    nombre:
      es: velocidad relativa de A respecto a B
      en: relative velocity of A with respect to B
    descripcion:
      es: Velocidad con la que el observador B ve moverse al móvil A dentro de un mismo sistema de referencia base.
      en: Velocity with which observer B sees body A move within a common base reference system.
    unidad_si: m/s
    dimension: LT^{-1}
    is_vector: true
    components:
      - v_rel_x
      - v_rel_y
    category: derived
    physical_role: physical_quantity
    used_in:
      - velocidad-relativa
    common_mistake: No olvides que la[[v_rel]]depende del estado de movimiento del observador B; no es una propiedad intrínseca de A.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido del movimiento de A visto por B.
        en: Indicates the direction of A's motion as seen by B.
    zero_behavior:
      allowed: true
      meaning:
        es: A y B se mueven exactamente a la misma velocidad respecto al suelo (reposo mutuo).
        en: A and B move at exactly the same velocity relative to the ground (mutual rest).
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - velocidad-relativa
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La[[v_rel]]es fundamental para entender por qué la lluvia parece caer inclinada cuando corres.
  - id: v_abs
    symbol: '\\overrightarrow{v}_{A/O}'
    nombre:
      es: velocidad de A respecto al observador base
      en: velocity of A with respect to the base observer
    descripcion:
      es: Velocidad del móvil A medida desde el observador base O (suelo), que sirve como referencia común.
      en: Velocity of body A measured from the base observer O (ground), serving as the common reference.
    unidad_si: m/s
    dimension: LT^{-1}
    is_vector: true
    components:
      - v_abs_x
      - v_abs_y
    category: derived
    physical_role: physical_quantity
    used_in:
      - velocidad-relativa
    common_mistake: No asumas que la[[v_abs]]es "la verdadera"; simplemente es la velocidad medida desde el marco que hemos elegido como fijo.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Sentido del movimiento respecto al origen del sistema base.
        en: Direction of motion relative to the base system's origin.
    zero_behavior:
      allowed: true
      meaning:
        es: La partícula A está en reposo respecto al observador base (suelo).
        en: Particle A is at rest relative to the base observer (ground).
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - velocidad-relativa
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: Se llama "absoluta" por convención para distinguirla de la relativa, pero siempre depende del observador base[[O]].
  - id: v_frame
    symbol: '\\overrightarrow{v}_{B/O}'
    nombre:
      es: velocidad del marco móvil
      en: velocity of the moving frame
    descripcion:
      es: Velocidad a la que el observador o marco B se desplaza respecto al observador base O.
      en: Velocity at which observer or frame B moves relative to the base observer O.
    unidad_si: m/s
    dimension: LT^{-1}
    is_vector: true
    components:
      - v_frame_x
      - v_frame_y
    category: derived
    physical_role: physical_quantity
    used_in:
      - velocidad-relativa
    common_mistake: Tratar la[[v_frame]]como una velocidad de la partícula; en realidad es la velocidad del "transporte" o marco intermedio.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica hacia dónde se mueve el sistema de referencia móvil respecto al suelo.
        en: Indicates where the moving reference system is moving relative to the ground.
    zero_behavior:
      allowed: true
      meaning:
        es: El sistema móvil está en reposo respecto al sistema base.
        en: The moving system is at rest relative to the base system.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - velocidad-relativa
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: Es la velocidad de la "plataforma" (autobús, cinta, viento) que transporta al móvil o al observador.
`;export{e as default};
