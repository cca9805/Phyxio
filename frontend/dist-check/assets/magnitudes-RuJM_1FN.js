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
  - conservacion-momento-angular\r
  common_mistake: Confundir L con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar L con una definicion estable antes de sustituir valores.\r
- id: Ii\r
  symbol: I_i\r
  nombre:\r
    es: momento de inercia inicial\r
    en: initial moment of inertia\r
  descripcion:\r
    es: Momento de inercia inicial.\r
    en: Initial moment of inertia.\r
  unidad_si: kg*m^2\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - conservacion-momento-angular\r
  common_mistake: Confundir Ii con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Ii con una definicion estable antes de sustituir valores.\r
- id: I_final\r
  symbol: I_f\r
  nombre:\r
    es: momento de inercia final\r
    en: final moment of inertia\r
  descripcion:\r
    es: Momento de inercia final.\r
    en: Final moment of inertia.\r
  unidad_si: kg*m^2\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - conservacion-momento-angular\r
  common_mistake: Confundir If con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar If con una definicion estable antes de sustituir valores.\r
- id: omegai\r
  symbol: \\omega_i\r
  nombre:\r
    es: velocidad angular inicial\r
    en: initial angular velocity\r
  descripcion:\r
    es: Velocidad angular inicial.\r
    en: Initial angular velocity.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - conservacion-momento-angular\r
  common_mistake: Confundir omegai con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omegai con una definicion estable antes de sustituir valores.\r
- id: omegaf\r
  symbol: \\omega_f\r
  nombre:\r
    es: velocidad angular final\r
    en: final angular velocity\r
  descripcion:\r
    es: Velocidad angular final.\r
    en: Final angular velocity.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - conservacion-momento-angular\r
  common_mistake: Confundir omegaf con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omegaf con una definicion estable antes de sustituir valores.\r
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
  - conservacion-momento-angular\r
  common_mistake: Confundir tau con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
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
  - conservacion-momento-angular\r
  common_mistake: Confundir DeltaL con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
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
  - conservacion-momento-angular\r
  common_mistake: Confundir DeltaT con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar DeltaT con una definicion estable antes de sustituir valores.\r
- id: Li\r
  symbol: L_i\r
  nombre:\r
    es: momento angular inicial\r
    en: initial angular momentum\r
  descripcion:\r
    es: Momento angular inicial.\r
    en: Initial angular momentum.\r
  unidad_si: kg*m^2/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - conservacion-momento-angular\r
  common_mistake: Confundir Li con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Li con una definicion estable antes de sustituir valores.\r
- id: Lf\r
  symbol: L_f\r
  nombre:\r
    es: momento angular final\r
    en: final angular momentum\r
  descripcion:\r
    es: Momento angular final.\r
    en: Final angular momentum.\r
  unidad_si: kg*m^2/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - conservacion-momento-angular\r
  common_mistake: Confundir Lf con otra magnitud cercana dentro de conservacion momento angular.\r
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
    - conservacion-momento-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Lf con una definicion estable antes de sustituir valores.\r
`;export{n as default};
