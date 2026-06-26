const n=`version: 1
magnitudes:
  - id: x
    symbol: 'x'
    nombre:
      es: posición
      en: position
    descripcion:
      es: Coordenada que indica la ubicación exacta del móvil en un eje rectilíneo.
      en: Coordinate indicating the exact location of the body on a rectilinear axis.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometric
    physical_role: physical_quantity
    used_in:
      - mrua
    common_mistake: En el MRUA, la posición[[x]]cambia de forma cuadrática con el tiempo, no linealmente.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Determina si el móvil está a la derecha (+) o izquierda (-) del origen.
        en: Determines if the body is to the right (+) or left (-) of the origin.
    zero_behavior:
      allowed: true
      meaning:
        es: El móvil se encuentra en el origen de coordenadas.
        en: The body is at the coordinate origin.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mrua
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La gráfica[[x]]vs[[t]]en un MRUA es siempre una parábola.
  - id: x0
    symbol: 'x_0'
    nombre:
      es: posición inicial
      en: initial position
    descripcion:
      es: Ubicación del móvil en el instante en que comienza a medirse el tiempo (t = 0).
      en: Location of the body at the instant time measurement begins (t = 0).
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mrua
    common_mistake: No asumas que la[[x0]]es siempre cero; lee atentamente el enunciado para fijar el origen.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el punto de partida respecto al origen.
        en: Indicates the starting point relative to the origin.
    zero_behavior:
      allowed: true
      meaning:
        es: El movimiento se inicia exactamente en el origen.
        en: Motion starts exactly at the origin.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mrua
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La[[x0]]es el punto de corte con el eje vertical en la gráfica de posición.
  - id: v
    symbol: 'v'
    nombre:
      es: velocidad
      en: velocity
    descripcion:
      es: Velocidad instantánea del móvil, que cambia de forma constante debido a la aceleración.
      en: Instantaneous velocity of the body, which changes constantly due to acceleration.
    unidad_si: m/s
    dimension: LT^{-1}
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mrua
    common_mistake: No confundas la velocidad final[[v]]con la velocidad inicial o con la velocidad media.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica el sentido del movimiento instantáneo.
        en: The sign indicates the instantaneous direction of motion.
    zero_behavior:
      allowed: true
      meaning:
        es: El móvil se detiene instantáneamente (punto de retorno).
        en: The body stops instantaneously (turning point).
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mrua
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: En el MRUA, la velocidad[[v]]es una función lineal del tiempo.
  - id: v0
    symbol: 'v_0'
    nombre:
      es: velocidad inicial
      en: initial velocity
    descripcion:
      es: Velocidad que posee el cuerpo en el instante inicial del estudio (t = 0).
      en: Velocity of the body at the initial instant of the study (t = 0).
    unidad_si: m/s
    dimension: LT^{-1}
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mrua
    common_mistake: "Si el cuerpo parte del reposo, la[[v0]]es cero; si se lanza, tiene un valor inicial."
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Determina si el objeto inicia moviéndose a favor o en contra del eje.
        en: Determines if the object starts moving in the same or opposite direction of the axis.
    zero_behavior:
      allowed: true
      meaning:
        es: El cuerpo inicia su movimiento desde el reposo.
        en: The body starts its motion from rest.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mrua
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La[[v0]]es la pendiente inicial de la parábola en la gráfica x-t.
  - id: a
    symbol: 'a'
    nombre:
      es: aceleración
      en: acceleration
    descripcion:
      es: Cambio de velocidad por unidad de tiempo; se mantiene constante en el MRUA.
      en: Change in velocity per unit of time; remains constant in MRUA.
    unidad_si: m/s^2
    dimension: LT^{-2}
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mrua
    common_mistake: "Aceleración negativa no siempre significa frenar; significa que el vector[[a]]apunta hacia el eje negativo."
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica si la velocidad aumenta o disminuye respecto al sentido del eje.
        en: Indicates if velocity increases or decreases relative to the axis direction.
    zero_behavior:
      allowed: true
      meaning:
        es: El movimiento se convierte en un MRU (velocidad constante).
        en: The motion becomes an MRU (constant velocity).
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mrua
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La[[a]]es la pendiente de la recta en la gráfica velocidad-tiempo.
  - id: t
    symbol: 't'
    nombre:
      es: tiempo
      en: time
    descripcion:
      es: Instante de tiempo en el que se evalúa el estado del móvil.
      en: Instant of time at which the state of the body is evaluated.
    unidad_si: s
    dimension: T
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mrua
    common_mistake: En las ecuaciones de MRUA, el tiempo[[t]]suele aparecer al cuadrado; no olvides la raíz al despejar.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: false
      meaning:
        es: Variable que siempre aumenta durante el proceso físico.
        en: Variable that always increases during the physical process.
    zero_behavior:
      allowed: true
      meaning:
        es: Inicio de la observación cinemática.
        en: Start of the kinematic observation.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mrua
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: El tiempo[[t]]es el parámetro que vincula la posición con la velocidad.
  - id: dx
    symbol: '\\Delta x'
    nombre:
      es: desplazamiento
      en: displacement
    descripcion:
      es: Cambio neto de posición experimentado por el móvil en un intervalo.
      en: Net change in position experienced by the body in an interval.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mrua
    common_mistake: El desplazamiento[[dx]]depende del cuadrado del tiempo; duplicar el tiempo cuadriplica el desplazamiento si v0=0.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido del cambio de posición.
        en: Indicates the net change in location.
    zero_behavior:
      allowed: true
      meaning:
        es: El móvil regresó al punto de partida.
        en: The body returned to the starting point.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mrua
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: El[[dx]]es el área bajo la curva en una gráfica de velocidad-tiempo.
  - id: dt
    symbol: '\\Delta t'
    nombre:
      es: intervalo de tiempo
      en: time interval
    descripcion:
      es: Duración del proceso o intervalo estudiado.
      en: Duration of the process or studied interval.
    unidad_si: s
    dimension: T
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mrua
    common_mistake: Confundir duración[[dt]]con un instante fijo del reloj.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: false
      meaning:
        es: Duración siempre positiva.
        en: Always positive duration.
    zero_behavior:
      allowed: true
      meaning:
        es: Suceso instantáneo.
        en: Instantaneous event.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mrua
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: Casi todos los problemas de MRUA asumen que el intervalo empieza en cero.
  - id: c
    symbol: 'c'
    nombre:
      es: velocidad de la luz
      en: speed of light
    descripcion:
      es: Constante física universal que representa la velocidad máxima de propagación.
      en: Universal physical constant representing the maximum speed of propagation.
    unidad_si: m/s
    dimension: LT^{-1}
    is_vector: false
    components: null
    category: constant
    physical_role: physical_constant
    used_in:
      - mrua
    common_mistake: La velocidad de la luz es inalcanzable para objetos con masa en un MRUA.
    typical_range: 299792458 m/s
    sign_behavior:
      has_sign: false
      meaning: Magnitud escalar absoluta.
    zero_behavior:
      allowed: false
    value_nature:
      kind: constant
      nonnegative_only: true
    interpretation_role:
      primary_for: []
      secondary_for:
        - mrua
    graph_binding:
      channels: []
    pedagogical_notes: Se usa como límite asintótico en estudios de validez.
  - id: g
    symbol: 'g'
    nombre:
      es: aceleración de la gravedad
      en: gravitational acceleration
    descripcion:
      es: Aceleración constante que experimentan los cuerpos en caída libre cerca de la Tierra.
      en: Constant acceleration experienced by bodies in free fall near Earth.
    unidad_si: m/s^2
    dimension: LT^{-2}
    is_vector: false
    components: null
    category: constant
    physical_role: physical_constant
    used_in:
      - mrua
    common_mistake: "No confundas g (magnitud) con el peso o la constante de gravitación universal."
    typical_range: 9.81 m/s^2
    sign_behavior:
      has_sign: true
      meaning:
        es: Generalmente negativa si el eje apunta hacia arriba.
        en: Generally negative if the axis points upward.
    zero_behavior:
      allowed: false
    value_nature:
      kind: constant
      nonnegative_only: true
    interpretation_role:
      primary_for: []
      secondary_for:
        - mrua
    graph_binding:
      channels: []
    pedagogical_notes: Es el ejemplo más común de MRUA en la naturaleza.
`;export{n as default};
