const n=`version: 1\r
magnitudes:\r
- id: P\r
  symbol: P\r
  nombre:\r
    es: peso\r
    en: weight\r
  descripcion:\r
    es: Fuerza gravitatoria ejercida por la Tierra sobre el cuerpo.\r
    en: Gravitational force exerted by the Earth on the body.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - P_x\r
  - P_y\r
  category: derived\r
  physical_role: gravitational_force\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir P con otra magnitud cercana dentro de identificacion de\r
    fuerzas.\r
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
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar P con una definicion estable antes de sustituir valores.\r
- id: N\r
  symbol: N\r
  nombre:\r
    es: fuerza normal\r
    en: normal force\r
  descripcion:\r
    es: Fuerza de contacto ejercida por una superficie, perpendicular a dicha superficie.\r
    en: Contact force exerted by a surface, perpendicular to that surface.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - N_x\r
  - N_y\r
  category: derived\r
  physical_role: contact_force\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir N con otra magnitud cercana dentro de identificacion de\r
    fuerzas.\r
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
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar N con una definicion estable antes de sustituir valores.\r
- id: f\r
  symbol: f\r
  nombre:\r
    es: fuerza de rozamiento\r
    en: friction force\r
  descripcion:\r
    es: Fuerza tangencial de contacto que se opone al movimiento relativo o a su tendencia.\r
    en: Tangential contact force that opposes relative motion or its tendency.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: friction_force\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir f con otra magnitud cercana dentro de identificacion de\r
    fuerzas.\r
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
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar f con una definicion estable antes de sustituir valores.\r
- id: T\r
  symbol: T\r
  nombre:\r
    es: tensión\r
    en: tension\r
  descripcion:\r
    es: Fuerza transmitida por una cuerda, cable o hilo sobre el cuerpo.\r
    en: Force transmitted by a rope, cable, or string on the body.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - T_x\r
  - T_y\r
  category: derived\r
  physical_role: tension_force\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir T con otra magnitud cercana dentro de identificacion de\r
    fuerzas.\r
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
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar T con una definicion estable antes de sustituir valores.\r
- id: F_ap\r
  symbol: F_{ap}\r
  nombre:\r
    es: fuerza aplicada\r
    en: applied force\r
  descripcion:\r
    es: Fuerza externa aplicada directamente sobre el cuerpo por un agente identificable.\r
    en: External force applied directly on the body by an identifiable agent.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir F_ap con otra magnitud cercana dentro de identificacion\r
    de fuerzas.\r
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
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_ap con una definicion estable antes de sustituir valores.\r
- id: system_contact\r
  symbol: c\r
  nombre:\r
    es: estado de contacto\r
    en: contact state\r
  descripcion:\r
    es: Variable booleana que indica si existe contacto físico (1) o no (0).\r
    en: Boolean variable indicating if physical contact exists (1) or not (0).\r
  unidad_si: adimensional\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir system_contact con otra magnitud cercana dentro de identificacion\r
    de fuerzas.\r
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
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar system_contact con una definicion estable antes de sustituir\r
    valores.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Masa del cuerpo sobre el que se identifican las fuerzas.\r
    en: Mass of the body on which forces are identified.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir m con otra magnitud cercana dentro de identificacion de\r
    fuerzas.\r
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
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: aceleración de la gravedad\r
    en: gravitational acceleration\r
  descripcion:\r
    es: Intensidad del campo gravitatorio, típicamente 9.8 m/s² en la Tierra.\r
    en: Gravitational field strength, typically 9.8 m/s² on Earth.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: field\r
  physical_role: field_strength\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir g con otra magnitud cercana dentro de identificacion de\r
    fuerzas.\r
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
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar g con una definicion estable antes de sustituir valores.\r
- id: mu_s\r
  symbol: \\mu_s\r
  nombre:\r
    es: coeficiente de rozamiento estático\r
    en: static friction coefficient\r
  descripcion:\r
    es: Coeficiente que determina el máximo rozamiento estático posible.\r
    en: Coefficient that determines the maximum possible static friction.\r
  unidad_si: adimensional\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: model_parameter\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir mu_s con otra magnitud cercana dentro de identificacion\r
    de fuerzas.\r
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
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mu_s con una definicion estable antes de sustituir valores.\r
- id: f_s\r
  symbol: f_s\r
  nombre:\r
    es: f_s\r
    en: f_s\r
  descripcion:\r
    es: Magnitud a?adida para mantener coherencia cruzada en el leaf (f_s).\r
    en: Magnitude added to keep cross-file coherence in this leaf (f_s).\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: friction_force\r
  used_in:\r
  - identificacion-de-fuerzas\r
  common_mistake: Confundir f_s con otra magnitud cercana dentro de identificacion\r
    de fuerzas.\r
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
    - identificacion-de-fuerzas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar f_s con una definicion estable antes de sustituir valores.\r
`;export{n as default};
