const n=`version: 1\r
magnitudes:\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: Mass\r
  descripcion:\r
    es: Masa del cuerpo que se observa en el marco rotatorio.\r
    en: Mass of the body observed in the rotating frame.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  common_mistake: Confundir m con otra magnitud cercana dentro de definicion fuerza\r
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
    - definicion-fuerza-centrifuga\r
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
    es: Velocidad angular del marco de referencia en rotacion.\r
    en: Angular speed of the rotating reference frame.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  common_mistake: Confundir omega con otra magnitud cercana dentro de definicion fuerza\r
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
    - definicion-fuerza-centrifuga\r
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
    es: Distancia radial al eje de rotacion.\r
    en: Radial distance to the axis of rotation.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  common_mistake: Confundir r con otra magnitud cercana dentro de definicion fuerza\r
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
    - definicion-fuerza-centrifuga\r
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
    es: Rapidez tangencial asociada a la trayectoria circular.\r
    en: Tangential speed associated with the circular trajectory.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  common_mistake: Confundir v con otra magnitud cercana dentro de definicion fuerza\r
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
    - definicion-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.\r
- id: a_cf\r
  symbol: a_{cf}\r
  nombre:\r
    es: aceleracion_centrifuga\r
    en: centrifugal_acceleration\r
  descripcion:\r
    es: Aceleracion aparente hacia afuera en el marco rotatorio.\r
    en: Apparent outward acceleration in the rotating frame.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  common_mistake: Confundir a_cf con otra magnitud cercana dentro de definicion fuerza\r
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
    - definicion-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_cf con una definicion estable antes de sustituir valores.\r
- id: F_cf\r
  symbol: F_{cf}\r
  nombre:\r
    es: fuerza_centrifuga\r
    en: centrifugal_force\r
  descripcion:\r
    es: Termino inercial radial en un marco rotatorio no inercial.\r
    en: Radial inertial term in a rotating non-inertial frame.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  common_mistake: Confundir F_cf con otra magnitud cercana dentro de definicion fuerza\r
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
    - definicion-fuerza-centrifuga\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_cf con una definicion estable antes de sustituir valores.\r
`;export{n as default};
