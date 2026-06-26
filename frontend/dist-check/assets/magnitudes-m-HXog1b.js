const n=`version: 1\r
magnitudes:\r
- id: fs\r
  symbol: f_s\r
  nombre:\r
    es: rozamiento_estatico\r
    en: Static friction\r
  descripcion:\r
    es: Fuerza tangencial de contacto en regimen estatico.\r
    en: Tangential contact force in the static regime.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-estatico\r
  common_mistake: Confundir fs con otra magnitud cercana dentro de rozamiento estatico.\r
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
    - rozamiento-estatico\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fs con una definicion estable antes de sustituir valores.\r
- id: fsmax\r
  symbol: f_{s,max}\r
  nombre:\r
    es: rozamiento_estatico_maximo\r
    en: Maximum static friction\r
  descripcion:\r
    es: Maximo valor que puede adoptar el rozamiento estatico.\r
    en: Maximum value that static friction can reach.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-estatico\r
  common_mistake: Confundir fsmax con otra magnitud cercana dentro de rozamiento estatico.\r
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
    - rozamiento-estatico\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fsmax con una definicion estable antes de sustituir valores.\r
- id: mus\r
  symbol: \\mu_s\r
  nombre:\r
    es: coeficiente_rozamiento_estatico\r
    en: Static-friction coefficient\r
  descripcion:\r
    es: Parametro adimensional asociado al par de superficies.\r
    en: Dimensionless parameter associated with the pair of surfaces.\r
  unidad_si: '-'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-estatico\r
  common_mistake: Confundir mus con otra magnitud cercana dentro de rozamiento estatico.\r
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
    - rozamiento-estatico\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mus con una definicion estable antes de sustituir valores.\r
- id: N\r
  symbol: N\r
  nombre:\r
    es: normal\r
    en: Normal force\r
  descripcion:\r
    es: Fuerza normal entre superficies en contacto.\r
    en: Normal force between contacting surfaces.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - N_x\r
  - N_y\r
  category: derived\r
  physical_role: contact_force\r
  used_in:\r
  - rozamiento-estatico\r
  common_mistake: Confundir N con otra magnitud cercana dentro de rozamiento estatico.\r
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
    - rozamiento-estatico\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar N con una definicion estable antes de sustituir valores.\r
- id: Ft\r
  symbol: F_t\r
  nombre:\r
    es: demanda_tangencial\r
    en: Tangential demand\r
  descripcion:\r
    es: Fuerza tangencial requerida para mantener el reposo relativo.\r
    en: Tangential force required to maintain relative rest.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-estatico\r
  common_mistake: Confundir Ft con otra magnitud cercana dentro de rozamiento estatico.\r
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
    - rozamiento-estatico\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Ft con una definicion estable antes de sustituir valores.\r
`;export{n as default};
