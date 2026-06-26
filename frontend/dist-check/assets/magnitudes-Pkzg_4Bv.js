const e=`version: 1\r
magnitudes:\r
- id: W\r
  symbol: W\r
  nombre:\r
    es: peso de la carga\r
    en: load weight\r
  descripcion:\r
    es: Fuerza gravitatoria total asociada a la carga que el sistema de poleas debe\r
      sostener o elevar.\r
    en: Total gravitational force associated with the load that the pulley system\r
      must support or lift.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - poleas-compuestas\r
  common_mistake: Confundir W con otra magnitud cercana dentro de poleas compuestas.\r
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
    - poleas-compuestas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar W con una definicion estable antes de sustituir valores.\r
- id: nSel\r
  symbol: n\r
  nombre:\r
    es: número de tramos portantes\r
    en: number of supporting rope segments\r
  descripcion:\r
    es: Número de tramos de cuerda que sostienen efectivamente la carga en el sistema\r
      idealizado.\r
    en: Number of rope segments that effectively support the load in the idealized\r
      system.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - poleas-compuestas\r
  common_mistake: Confundir nSel con otra magnitud cercana dentro de poleas compuestas.\r
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
    - poleas-compuestas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar nSel con una definicion estable antes de sustituir valores.\r
- id: eta\r
  symbol: \\eta\r
  nombre:\r
    es: eficiencia mecánica\r
    en: mechanical efficiency\r
  descripcion:\r
    es: Factor adimensional que recoge pérdidas por rozamiento, deformación y no idealidades\r
      del sistema de poleas.\r
    en: Dimensionless factor that captures losses due to friction, deformation, and\r
      pulley-system non-idealities.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - poleas-compuestas\r
  common_mistake: Confundir eta con otra magnitud cercana dentro de poleas compuestas.\r
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
    - poleas-compuestas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar eta con una definicion estable antes de sustituir valores.\r
- id: F_ideal\r
  symbol: F_ideal\r
  nombre:\r
    es: fuerza ideal de tracción\r
    en: ideal pulling force\r
  descripcion:\r
    es: Fuerza necesaria para elevar la carga en un sistema de poleas compuestas sin\r
      pérdidas.\r
    en: Force required to lift the load in a compound pulley system without losses.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - poleas-compuestas\r
  common_mistake: Confundir F_ideal con otra magnitud cercana dentro de poleas compuestas.\r
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
    - poleas-compuestas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_ideal con una definicion estable antes de sustituir valores.\r
- id: F_real\r
  symbol: F_real\r
  nombre:\r
    es: fuerza real de tracción\r
    en: real pulling force\r
  descripcion:\r
    es: Fuerza realmente necesaria cuando el sistema presenta pérdidas y eficiencia\r
      menor que la unidad.\r
    en: Force actually required when the system has losses and efficiency lower than\r
      one.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - poleas-compuestas\r
  common_mistake: Confundir F_real con otra magnitud cercana dentro de poleas compuestas.\r
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
    - poleas-compuestas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_real con una definicion estable antes de sustituir valores.\r
`;export{e as default};
