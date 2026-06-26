const n=`version: 1\r
magnitudes:\r
- id: T\r
  symbol: T\r
  nombre:\r
    es: tension\r
    en: Tension\r
  descripcion:\r
    es: Fuerza de traccion transmitida por cuerda o cable.\r
    en: Pulling force transmitted by a rope or cable.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - T_x\r
  - T_y\r
  category: derived\r
  physical_role: tension_force\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir T con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar T con una definicion estable antes de sustituir valores.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: Mass\r
  descripcion:\r
    es: Masa del cuerpo analizado.\r
    en: Mass of the body being analyzed.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir m con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: aceleracion_gravedad\r
    en: Gravitational acceleration\r
  descripcion:\r
    es: Intensidad local del campo gravitatorio.\r
    en: Local intensity of the gravitational field.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: field\r
  physical_role: field_strength\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir g con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar g con una definicion estable antes de sustituir valores.\r
- id: a\r
  symbol: a\r
  nombre:\r
    es: aceleracion\r
    en: Acceleration\r
  descripcion:\r
    es: Aceleracion del cuerpo segun el eje definido.\r
    en: Acceleration of the body along the defined axis.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: frame_effect\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir a con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a con una definicion estable antes de sustituir valores.\r
- id: m1\r
  symbol: m_1\r
  nombre:\r
    es: masa_1\r
    en: Mass 1\r
  descripcion:\r
    es: Primera masa del sistema de Atwood.\r
    en: First mass in the Atwood system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir m1 con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m1 con una definicion estable antes de sustituir valores.\r
- id: m2\r
  symbol: m_2\r
  nombre:\r
    es: masa_2\r
    en: Mass 2\r
  descripcion:\r
    es: Segunda masa del sistema de Atwood.\r
    en: Second mass in the Atwood system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir m2 con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m2 con una definicion estable antes de sustituir valores.\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: angulo\r
    en: Angle\r
  descripcion:\r
    es: Angulo de la tension respecto al eje de referencia.\r
    en: Angle of the tension relative to the reference axis.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir theta con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar theta con una definicion estable antes de sustituir valores.\r
- id: Tx\r
  symbol: T_x\r
  nombre:\r
    es: tension_x\r
    en: Horizontal tension component\r
  descripcion:\r
    es: Componente horizontal de la tension.\r
    en: Horizontal component of the tension.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir Tx con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Tx con una definicion estable antes de sustituir valores.\r
- id: Ty\r
  symbol: T_y\r
  nombre:\r
    es: tension_y\r
    en: Vertical tension component\r
  descripcion:\r
    es: Componente vertical de la tension.\r
    en: Vertical component of the tension.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir Ty con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Ty con una definicion estable antes de sustituir valores.\r
- id: lambda\r
  symbol: \\lambda\r
  nombre:\r
    es: densidad_lineal\r
    en: Linear mass density\r
  descripcion:\r
    es: Masa por unidad de longitud del cable.\r
    en: Mass per unit length of the cable.\r
  unidad_si: kg/m\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir lambda con otra magnitud cercana dentro de tension en\r
    cuerdas y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar lambda con una definicion estable antes de sustituir valores.\r
- id: dT_dy\r
  symbol: \\frac{dT}{dy}\r
  nombre:\r
    es: gradiente_tension\r
    en: Tension gradient\r
  descripcion:\r
    es: Cambio de tension por unidad de longitud.\r
    en: Change in tension per unit length.\r
  unidad_si: N/m\r
  dimension: MT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  common_mistake: Confundir dT_dy con otra magnitud cercana dentro de tension en cuerdas\r
    y cables.\r
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
    - tension-en-cuerdas-y-cables\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar dT_dy con una definicion estable antes de sustituir valores.\r
`;export{n as default};
