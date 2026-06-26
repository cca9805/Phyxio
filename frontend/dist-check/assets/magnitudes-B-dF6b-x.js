const n=`version: 1
magnitudes:
- id: x
  symbol: x
  nombre:
    es: Posición horizontal
    en: Horizontal position
  descripcion:
    es: Coordenada horizontal del proyectil en un instante dado respecto al origen elegido.
    en: Horizontal coordinate of the projectile at a given instant relative to the chosen origin.
  unidad_si: m
  dimension: L
  is_vector: false
  components: null
  category: geometric
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir x con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar x con una definicion estable antes de sustituir valores.
- id: x0
  symbol: x_0
  nombre:
    es: Posición horizontal inicial
    en: Initial horizontal position
  descripcion:
    es: Posición horizontal del proyectil en el instante de lanzamiento.
    en: Horizontal position of the projectile at the moment of launch.
  unidad_si: m
  dimension: L
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir x0 con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar x0 con una definicion estable antes de sustituir valores.
- id: y
  symbol: y
  nombre:
    es: Posición vertical
    en: Vertical position
  descripcion:
    es: Coordenada vertical del proyectil en un instante dado, medida desde el origen con eje positivo hacia arriba.
    en: Vertical coordinate of the projectile at a given instant, measured from the origin with upward positive axis.
  unidad_si: m
  dimension: L
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir y con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar y con una definicion estable antes de sustituir valores.
- id: y0
  symbol: y_0
  nombre:
    es: Altura inicial
    en: Initial height
  descripcion:
    es: Altura de lanzamiento del proyectil respecto al nivel de referencia elegido.
    en: Launch height of the projectile relative to the chosen reference level.
  unidad_si: m
  dimension: L
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir y0 con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar y0 con una definicion estable antes de sustituir valores.
- id: t
  symbol: t
  nombre:
    es: Tiempo
    en: Time
  descripcion:
    es: Variable temporal común que sincroniza el movimiento horizontal y el vertical en el mismo instante físico.
    en: Common time variable that synchronizes horizontal and vertical motion at the same physical instant.
  unidad_si: s
  dimension: T
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir t con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar t con una definicion estable antes de sustituir valores.
- id: v0
  symbol: v_0
  nombre:
    es: Velocidad horizontal inicial
    en: Initial horizontal speed
  descripcion:
    es: Velocidad del proyectil en la dirección horizontal en el instante de lanzamiento; permanece constante en el modelo ideal.
    en: Speed of the projectile in the horizontal direction at the moment of launch; remains constant in the ideal model.
  unidad_si: m/s
  dimension: LT^{-1}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir v0 con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar v0 con una definicion estable antes de sustituir valores.
- id: vx
  symbol: v_x
  nombre:
    es: Velocidad horizontal
    en: Horizontal velocity
  descripcion:
    es: Componente horizontal de la velocidad del proyectil; igual a v0 en todo instante en el modelo ideal.
    en: Horizontal component of the projectile velocity; equal to v0 at every instant in the ideal model.
  unidad_si: m/s
  dimension: LT^{-1}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir vx con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar vx con una definicion estable antes de sustituir valores.
- id: vy
  symbol: v_y
  nombre:
    es: Velocidad vertical
    en: Vertical velocity
  descripcion:
    es: Componente vertical de la velocidad del proyectil; crece en módulo linealmente con el tiempo por la aceleración gravitatoria.
    en: Vertical component of the projectile velocity; grows in magnitude linearly with time due to gravitational acceleration.
  unidad_si: m/s
  dimension: LT^{-1}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir vy con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar vy con una definicion estable antes de sustituir valores.
- id: g
  symbol: g
  nombre:
    es: Aceleración gravitatoria
    en: Gravitational acceleration
  descripcion:
    es: Aceleración debida a la gravedad local, constante y dirigida verticalmente hacia abajo en el modelo ideal.
    en: Acceleration due to local gravity, constant and directed vertically downward in the ideal model.
  unidad_si: m/s^2
  dimension: LT^{-2}
  is_vector: false
  components: null
  category: field
  physical_role: field_strength
  used_in:
  - tiro-horizontal
  common_mistake: Confundir g con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar g con una definicion estable antes de sustituir valores.
- id: R
  symbol: R
  nombre:
    es: Alcance horizontal
    en: Horizontal range
  descripcion:
    es: Distancia horizontal total recorrida por el proyectil desde el lanzamiento hasta el impacto en el nivel de referencia.
    en: Total horizontal distance traveled by the projectile from launch to impact at the reference level.
  unidad_si: m
  dimension: L
  is_vector: false
  components: null
  category: geometric
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir R con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar R con una definicion estable antes de sustituir valores.
- id: v
  symbol: v
  nombre:
    es: Velocidad total
    en: Total speed
  descripcion:
    es: Módulo del vector velocidad del proyectil en un instante dado; combina las componentes horizontal y vertical.
    en: Magnitude of the projectile velocity vector at a given instant; combines horizontal and vertical components.
  unidad_si: m/s
  dimension: LT^{-1}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: Confundir v con otra magnitud cercana dentro de tiro horizontal.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.
- id: t_caida
  symbol: t_{caida}
  nombre:
    es: tiempo de caida
    en: fall time
  descripcion:
    es: Tiempo transcurrido desde el lanzamiento horizontal hasta el impacto en y = 0.
    en: Elapsed time from horizontal launch to impact at y = 0.
  unidad_si: s
  dimension: T
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - tiro-horizontal
  common_mistake: No confundir t_caida con otra magnitud cercana del problema.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: No tiene signo fisico independiente; se interpreta como modulo o intervalo.
      en: It has no independent physical sign; interpret it as a magnitude or interval.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - tiro-horizontal
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar t_caida con una definicion estable antes de sustituir valores.
`;export{n as default};
