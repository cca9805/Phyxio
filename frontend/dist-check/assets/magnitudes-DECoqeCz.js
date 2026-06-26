const n=`version: 1\r
magnitudes:\r
- id: L\r
  symbol: L\r
  nombre:\r
    es: momento angular\r
    en: angular momentum\r
  descripcion:\r
    es: Momento angular relevante en este subtema.\r
    en: Angular momentum relevant to the topic.\r
  unidad_si: kg*m^2/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir L con otra magnitud cercana dentro de definicion momento\r
    angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar L con una definicion estable antes de sustituir valores.\r
- id: r\r
  symbol: r\r
  nombre:\r
    es: distancia radial\r
    en: radial distance\r
  descripcion:\r
    es: Distancia radial en el marco elegido.\r
    en: Radial distance in the chosen frame.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir r con otra magnitud cercana dentro de definicion momento\r
    angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar r con una definicion estable antes de sustituir valores.\r
- id: p\r
  symbol: p\r
  nombre:\r
    es: momento lineal\r
    en: linear momentum\r
  descripcion:\r
    es: Momento lineal asociado a este subtema.\r
    en: Linear momentum associated with this topic.\r
  unidad_si: kg*m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir p con otra magnitud cercana dentro de definicion momento\r
    angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar p con una definicion estable antes de sustituir valores.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Masa del sistema o cuerpo considerado.\r
    en: Mass of the considered body or system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir m con otra magnitud cercana dentro de definicion momento\r
    angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad\r
    en: velocity\r
  descripcion:\r
    es: Velocidad en el contexto de este subtema.\r
    en: Velocity in the context of the topic.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir v con otra magnitud cercana dentro de definicion momento\r
    angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: angulo entre r y p\r
    en: angle between r and p\r
  descripcion:\r
    es: Angulo entre r y p usado para orientar el movimiento.\r
    en: Angle between r and p used to orient the motion.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir theta con otra magnitud cercana dentro de definicion momento\r
    angular.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar theta con una definicion estable antes de sustituir valores.\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: momento de inercia\r
    en: moment of inertia\r
  descripcion:\r
    es: Momento de inercia respecto al eje relevante.\r
    en: Moment of inertia about the relevant axis.\r
  unidad_si: kg*m^2\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir I con otra magnitud cercana dentro de definicion momento\r
    angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar I con una definicion estable antes de sustituir valores.\r
- id: omega\r
  symbol: \\omega\r
  nombre:\r
    es: velocidad angular\r
    en: angular velocity\r
  descripcion:\r
    es: Velocidad angular del sistema.\r
    en: Angular velocity of the system.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir omega con otra magnitud cercana dentro de definicion momento\r
    angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega con una definicion estable antes de sustituir valores.\r
- id: tau\r
  symbol: \\tau\r
  nombre:\r
    es: torque\r
    en: torque\r
  descripcion:\r
    es: Torque externo neto.\r
    en: Net external torque.\r
  unidad_si: N*m\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir tau con otra magnitud cercana dentro de definicion momento\r
    angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar tau con una definicion estable antes de sustituir valores.\r
- id: DeltaL\r
  symbol: \\Delta L\r
  nombre:\r
    es: variacion de momento angular\r
    en: change in angular momentum\r
  descripcion:\r
    es: Cambio del momento angular.\r
    en: Change in angular momentum.\r
  unidad_si: kg*m^2/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir DeltaL con otra magnitud cercana dentro de definicion\r
    momento angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar DeltaL con una definicion estable antes de sustituir valores.\r
- id: DeltaT\r
  symbol: \\Delta t\r
  nombre:\r
    es: intervalo de tiempo\r
    en: time interval\r
  descripcion:\r
    es: Intervalo de tiempo relevante para el proceso.\r
    en: Time interval relevant to the process.\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - definicion-momento-angular\r
  common_mistake: Confundir DeltaT con otra magnitud cercana dentro de definicion\r
    momento angular.\r
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
    - definicion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar DeltaT con una definicion estable antes de sustituir valores.\r
`;export{n as default};
