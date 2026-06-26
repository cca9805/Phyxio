const n=`version: 1
magnitudes:
  - id: x
    symbol: 'x'
    nombre:
      es: posición
      en: position
    descripcion:
      es: Localización exacta respecto al origen en un eje rectilíneo en un instante dado.
      en: Exact location relative to the origin on a straight axis at a given instant.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometric
    physical_role: physical_quantity
    used_in:
      - mru
    common_mistake: No confundas la posición[[x]]con el desplazamiento; la posición depende del origen elegido.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica si el objeto está a un lado (+) o al otro (-) del origen.
        en: Indicates if the object is on one side (+) or the other (-) of the origin.
    zero_behavior:
      allowed: true
      meaning:
        es: El objeto coincide con el origen del sistema de referencia.
        en: The object coincides with the reference system origin.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mru
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La[[x]]es la variable dependiente fundamental en la ecuación horaria.
  - id: x0
    symbol: 'x_0'
    nombre:
      es: posición inicial
      en: initial position
    descripcion:
      es: Ubicación del cuerpo en el instante inicial t = 0.
      en: Body location at the initial instant t = 0.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mru
    common_mistake: Olvidar incluir la[[x0]]en la ecuación horaria cuando el objeto no parte del origen.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Determina el punto de partida respecto al origen.
        en: Determines the starting point relative to the origin.
    zero_behavior:
      allowed: true
      meaning:
        es: El movimiento comienza exactamente en el origen.
        en: Motion starts exactly at the origin.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mru
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La[[x0]]es la ordenada al origen en la gráfica posición-tiempo.
  - id: v
    symbol: 'v'
    nombre:
      es: velocidad
      en: velocity
    descripcion:
      es: Tasa de cambio de la posición, que se mantiene constante en el MRU.
      en: Rate of change of position, which remains constant in MRU.
    unidad_si: m/s
    dimension: LT^{-1}
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mru
    common_mistake: En MRU, la velocidad[[v]]y la rapidez coinciden en módulo, pero la velocidad tiene signo (sentido).
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica el sentido del movimiento (hacia +x o -x).
        en: The sign indicates the direction of motion (towards +x or -x).
    zero_behavior:
      allowed: true
      meaning:
        es: El objeto está en reposo.
        en: The object is at rest.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mru
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La[[v]]es la pendiente de la recta en la gráfica posición-tiempo.
  - id: t
    symbol: 't'
    nombre:
      es: tiempo
      en: time
    descripcion:
      es: Instante de tiempo en el que se mide la posición del móvil.
      en: Instant of time at which the body's position is measured.
    unidad_si: s
    dimension: T
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mru
    common_mistake: No confundas un instante[[t]]con una duración[[dt]].
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: false
      meaning:
        es: Fluye siempre hacia adelante.
        en: Always flows forward.
    zero_behavior:
      allowed: true
      meaning:
        es: Instante inicial del cronómetro.
        en: Initial stopwatch instant.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mru
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: El[[t]]es el eje horizontal en todas las gráficas cinemáticas.
  - id: dx
    symbol: '\\Delta x'
    nombre:
      es: desplazamiento
      en: displacement
    descripcion:
      es: Cambio neto de posición entre dos instantes.
      en: Net change in position between two instants.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mru
    common_mistake: El[[dx]]puede ser negativo si el objeto retrocede respecto al eje.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido del cambio de posición.
        en: Indicates the direction of position change.
    zero_behavior:
      allowed: true
      meaning:
        es: No hay cambio neto de posición.
        en: No net change in position.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mru
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: En MRU, el[[dx]]es proporcional al tiempo transcurrido.
  - id: dt
    symbol: '\\Delta t'
    nombre:
      es: intervalo de tiempo
      en: time interval
    descripcion:
      es: Duración del intervalo entre dos mediciones de posición.
      en: Duration of the interval between two position measurements.
    unidad_si: s
    dimension: T
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mru
    common_mistake: Olvidar que un intervalo[[dt]]es la resta de dos instantes.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positivo.
        en: Always positive.
    zero_behavior:
      allowed: true
      meaning:
        es: Evento instantáneo.
        en: Instantaneous event.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: Context-dependent
    interpretation_role:
      primary_for:
        - mru
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: El[[dt]]es la base para calcular velocidades medias.
  - id: c
    symbol: 'c'
    nombre:
      es: velocidad de la luz
      en: speed of light
    descripcion:
      es: Velocidad máxima universal de propagación de la luz en el vacío.
      en: Maximum universal speed of light propagation in vacuum.
    unidad_si: m/s
    dimension: LT^{-1}
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mru
    common_mistake: Tratar a[[c]]como una variable cuando es una constante universal.
    typical_range: 299792458 m/s.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: La luz nunca está en reposo en el vacío.
        en: Light is never at rest in vacuum.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: 299792458
    interpretation_role:
      primary_for:
        - mru
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La[[c]]es el límite de velocidad en todas las ecuaciones relativistas.
`;export{n as default};
