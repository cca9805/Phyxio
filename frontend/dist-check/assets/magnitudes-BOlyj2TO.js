const e=`version: 1\r
magnitudes:\r
- id: y\r
  symbol: y\r
  nombre:\r
    es: posición vertical\r
    en: vertical position\r
  descripcion:\r
    es: Coordenada medida sobre un eje vertical orientado, típicamente con origen en el suelo.\r
    en: Coordinate measured along a vertical oriented axis, typically with origin at the ground.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Confundir y con otra magnitud cercana dentro de movimiento vertical bajo gravedad.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar y con una definicion estable antes de sustituir valores.\r
- id: y0\r
  symbol: y_0\r
  nombre:\r
    es: posición vertical inicial\r
    en: initial vertical position\r
  descripcion:\r
    es: Altitud o posición desde la que se libera o lanza el objeto en el instante t = 0.\r
    en: Altitude or position from which the object is released or thrown at instant t = 0.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Confundir y0 con otra magnitud cercana dentro de movimiento vertical bajo gravedad.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar y0 con una definicion estable antes de sustituir valores.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad vertical\r
    en: vertical velocity\r
  descripcion:\r
    es: Rapidez y sentido del movimiento a lo largo del eje vertical.\r
    en: Speed and direction of movement along the vertical axis.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Confundir v con otra magnitud cercana dentro de movimiento vertical bajo gravedad.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.\r
- id: v0\r
  symbol: v_0\r
  nombre:\r
    es: velocidad inicial\r
    en: initial velocity\r
  descripcion:\r
    es: Velocidad de partida; es cero en caída libre desde el reposo.\r
    en: Starting velocity; it is zero in free fall from rest.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Confundir v0 con otra magnitud cercana dentro de movimiento vertical bajo gravedad.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v0 con una definicion estable antes de sustituir valores.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: gravedad\r
    en: gravity\r
  descripcion:\r
    es: Magnitud de la aceleración gravitatoria terrestre cerca de la superficie.\r
    en: Magnitude of the Earth's gravitational acceleration near the surface.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: field\r
  physical_role: field_strength\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Confundir g con otra magnitud cercana dentro de movimiento vertical bajo gravedad.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar g con una definicion estable antes de sustituir valores.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: time\r
  descripcion:\r
    es: Duración del vuelo o instante de evaluación del sistema.\r
    en: Flight duration or instant of system evaluation.\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Confundir t con otra magnitud cercana dentro de movimiento vertical bajo gravedad.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar t con una definicion estable antes de sustituir valores.\r
- id: dy\r
  symbol: \\Delta y\r
  nombre:\r
    es: desplazamiento vertical\r
    en: vertical displacement\r
  descripcion:\r
    es: Cambio neto de posición vertical (y - y0).\r
    en: Net vertical position change (y - y0).\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Confundir dy con otra magnitud cercana dentro de movimiento vertical bajo gravedad.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar dy con una definicion estable antes de sustituir valores.\r
- id: h\r
  symbol: h\r
  nombre:\r
    es: altura\r
    en: height\r
  descripcion:\r
    es: Distancia escalar absoluta respecto a un nivel de referencia (usualmente el suelo).\r
    en: Absolute scalar distance relative to a reference level (usually the ground).\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Confundir h con otra magnitud cercana dentro de movimiento vertical bajo gravedad.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar h con una definicion estable antes de sustituir valores.\r
- id: t_sub\r
  symbol: 't_{sub}'\r
  nombre:\r
    es: tiempo de subida\r
    en: time to rise\r
  descripcion:\r
    es: Tiempo que tarda un objeto lanzado hacia arriba en alcanzar su altura máxima.\r
    en: Time it takes for an object thrown upwards to reach its maximum height.\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Olvidar que el t_sub es solo la mitad del tiempo de vuelo total si regresa al mismo nivel.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Duración siempre positiva.\r
      en: Always positive duration.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si v0=0, el tiempo de subida es cero.\r
      en: If v0=0, the time to rise is zero.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: En el instante t_sub, la velocidad se anula por completo.\r
- id: h_max\r
  symbol: 'h_{max}'\r
  nombre:\r
    es: altura máxima\r
    en: maximum height\r
  descripcion:\r
    es: Máxima altura vertical alcanzada por un objeto lanzado hacia arriba, medida desde el punto de lanzamiento.\r
    en: Maximum vertical height reached by an object thrown upwards, measured from the launch point.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - movimiento-vertical-bajo-gravedad\r
  common_mistake: Confundir h_max (altura sobre el punto de lanzamiento) con la posición absoluta cuando y0 no es cero.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - movimiento-vertical-bajo-gravedad\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar h_max con una definicion estable antes de sustituir valores.\r
`;export{e as default};
