const e=`version: 1\r
magnitudes:\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: Mass\r
  descripcion:\r
    es: Masa asociada al ejemplo de rotacion.\r
    en: Mass associated with the rotating example.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  common_mistake: Confundir m con otra magnitud cercana dentro de ejemplos fuerza\r
    centrifuga.\r
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
    - ejemplos-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: omega\r
  symbol: \\omega\r
  nombre:\r
    es: velocidad_angular\r
    en: angular_velocity\r
  descripcion:\r
    es: Velocidad angular usada en el caso principal.\r
    en: Angular speed used in the main case.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  common_mistake: Confundir omega con otra magnitud cercana dentro de ejemplos fuerza\r
    centrifuga.\r
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
    - ejemplos-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega con una definicion estable antes de sustituir valores.\r
- id: r\r
  symbol: r\r
  nombre:\r
    es: radio\r
    en: Radius\r
  descripcion:\r
    es: Distancia al eje del movimiento circular.\r
    en: Distance to the axis of circular motion.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  common_mistake: Confundir r con otra magnitud cercana dentro de ejemplos fuerza\r
    centrifuga.\r
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
    - ejemplos-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar r con una definicion estable antes de sustituir valores.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad_tangencial\r
    en: tangential_speed\r
  descripcion:\r
    es: Rapidez lineal sobre la trayectoria circular.\r
    en: Linear speed along the circular trajectory.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  common_mistake: Confundir v con otra magnitud cercana dentro de ejemplos fuerza\r
    centrifuga.\r
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
    - ejemplos-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.\r
- id: rpm\r
  symbol: rpm\r
  nombre:\r
    es: revoluciones_por_minuto\r
    en: revolutions_per_minute\r
  descripcion:\r
    es: Frecuencia de giro de equipos y plataformas.\r
    en: Rotation frequency of equipment and platforms.\r
  unidad_si: 1/min\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  common_mistake: Confundir rpm con otra magnitud cercana dentro de ejemplos fuerza\r
    centrifuga.\r
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
    - ejemplos-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar rpm con una definicion estable antes de sustituir valores.\r
- id: F_cf\r
  symbol: F_{cf}\r
  nombre:\r
    es: fuerza_centrifuga\r
    en: centrifugal_force\r
  descripcion:\r
    es: Magnitud del efecto centrifugo en el ejemplo planteado.\r
    en: Magnitude of the centrifugal effect in the stated example.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  common_mistake: Confundir F_cf con otra magnitud cercana dentro de ejemplos fuerza\r
    centrifuga.\r
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
    - ejemplos-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_cf con una definicion estable antes de sustituir valores.\r
- id: omega1\r
  symbol: \\omega_1\r
  nombre:\r
    es: velocidad_angular_inicial\r
    en: initial_angular_velocity\r
  descripcion:\r
    es: Velocidad angular del escenario de referencia.\r
    en: Angular speed in the reference scenario.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  common_mistake: Confundir omega1 con otra magnitud cercana dentro de ejemplos fuerza\r
    centrifuga.\r
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
    - ejemplos-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega1 con una definicion estable antes de sustituir valores.\r
- id: omega2\r
  symbol: \\omega_2\r
  nombre:\r
    es: velocidad_angular_final\r
    en: final_angular_velocity\r
  descripcion:\r
    es: Velocidad angular del escenario comparado.\r
    en: Angular speed in the comparison scenario.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  common_mistake: Confundir omega2 con otra magnitud cercana dentro de ejemplos fuerza\r
    centrifuga.\r
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
    - ejemplos-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega2 con una definicion estable antes de sustituir valores.\r
- id: ratio\r
  symbol: R\r
  nombre:\r
    es: razon_de_fuerzas\r
    en: force_ratio\r
  descripcion:\r
    es: Factor de cambio entre fuerzas centrifugas de dos escenarios.\r
    en: Change factor between the centrifugal forces of two scenarios.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  common_mistake: Confundir ratio con otra magnitud cercana dentro de ejemplos fuerza\r
    centrifuga.\r
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
    - ejemplos-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar ratio con una definicion estable antes de sustituir valores.\r
`;export{e as default};
