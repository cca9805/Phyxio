const n=`version: 1\r
magnitudes:\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: Masa traslacional\r
    en: Translational mass\r
  descripcion:\r
    es: Masa del cuerpo que realiza el movimiento de traslación pura (bloque o carga).\r
    en: Mass of the body performing pure translational motion (block or load).\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir m con otra magnitud cercana dentro de traslacion y rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: Momento de inercia\r
    en: Moment of inertia\r
  descripcion:\r
    es: Resistencia de un cuerpo a cambiar su estado de rotación respecto a un eje.\r
    en: Resistance of a body to changing its state of rotation about an axis.\r
  unidad_si: kg·m²\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir I con otra magnitud cercana dentro de traslacion y rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar I con una definicion estable antes de sustituir valores.\r
- id: R\r
  symbol: R\r
  nombre:\r
    es: Radio\r
    en: Radius\r
  descripcion:\r
    es: Distancia desde el eje de giro hasta el punto de aplicación de la fuerza o\r
      del vínculo cinemático.\r
    en: Distance from the rotation axis to the point of force application or kinematic\r
      constraint.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir R con otra magnitud cercana dentro de traslacion y rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar R con una definicion estable antes de sustituir valores.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: Velocidad lineal\r
    en: Linear velocity\r
  descripcion:\r
    es: Velocidad del centro de masas del cuerpo que traslada.\r
    en: Velocity of the center of mass of the translating body.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir v con otra magnitud cercana dentro de traslacion y rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.\r
- id: omega\r
  symbol: \\omega\r
  nombre:\r
    es: Velocidad angular\r
    en: Angular velocity\r
  descripcion:\r
    es: Tasa de rotación instantánea del cuerpo respecto al eje de giro.\r
    en: Instantaneous rotation rate of the body about the rotation axis.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir omega con otra magnitud cercana dentro de traslacion y\r
    rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega con una definicion estable antes de sustituir valores.\r
- id: a\r
  symbol: a\r
  nombre:\r
    es: Aceleración lineal\r
    en: Linear acceleration\r
  descripcion:\r
    es: Aceleración del centro de masas o del punto de vínculo del sistema.\r
    en: Acceleration of the center of mass or constraint point of the system.\r
  unidad_si: m/s²\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: frame_effect\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir a con otra magnitud cercana dentro de traslacion y rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a con una definicion estable antes de sustituir valores.\r
- id: alpha\r
  symbol: \\alpha\r
  nombre:\r
    es: Aceleración angular\r
    en: Angular acceleration\r
  descripcion:\r
    es: Tasa de variación de la velocidad angular del cuerpo que rota.\r
    en: Rate of change of the angular velocity of the rotating body.\r
  unidad_si: rad/s²\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir alpha con otra magnitud cercana dentro de traslacion y\r
    rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar alpha con una definicion estable antes de sustituir valores.\r
- id: tau_net\r
  symbol: \\tau_{net}\r
  nombre:\r
    es: Torque neto\r
    en: Net torque\r
  descripcion:\r
    es: Suma vectorial de todos los momentos de fuerza aplicados sobre el cuerpo respecto\r
      al eje de giro.\r
    en: Vector sum of all force moments applied to the body about the rotation axis.\r
  unidad_si: N·m\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir tau_net con otra magnitud cercana dentro de traslacion\r
    y rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar tau_net con una definicion estable antes de sustituir valores.\r
- id: Kt\r
  symbol: K_t\r
  nombre:\r
    es: Energía cinética de traslación\r
    en: Translational kinetic energy\r
  descripcion:\r
    es: Energía asociada al movimiento del centro de masas del sistema.\r
    en: Energy associated with the motion of the center of mass of the system.\r
  unidad_si: J\r
  dimension: L^2MT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir Kt con otra magnitud cercana dentro de traslacion y rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Kt con una definicion estable antes de sustituir valores.\r
- id: Kr\r
  symbol: K_r\r
  nombre:\r
    es: Energía cinética de rotación\r
    en: Rotational kinetic energy\r
  descripcion:\r
    es: Energía asociada a la rotación del cuerpo respecto a su centro de masas.\r
    en: Energy associated with the rotation of the body about its center of mass.\r
  unidad_si: J\r
  dimension: L^2MT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir Kr con otra magnitud cercana dentro de traslacion y rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Kr con una definicion estable antes de sustituir valores.\r
- id: K\r
  symbol: K\r
  nombre:\r
    es: Energía cinética total\r
    en: Total kinetic energy\r
  descripcion:\r
    es: Suma de las energías cinéticas de traslación y rotación del sistema.\r
    en: Sum of the translational and rotational kinetic energies of the system.\r
  unidad_si: J\r
  dimension: L^2MT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - traslacion-y-rotacion\r
  common_mistake: Confundir K con otra magnitud cercana dentro de traslacion y rotacion.\r
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
    - traslacion-y-rotacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar K con una definicion estable antes de sustituir valores.\r
`;export{n as default};
