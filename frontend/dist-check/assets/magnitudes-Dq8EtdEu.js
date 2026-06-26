const n=`version: 1\r
magnitudes:\r
- id: fk\r
  symbol: \\vec f_k\r
  nombre:\r
    es: rozamiento_dinamico\r
    en: Kinetic friction\r
  descripcion:\r
    es: Fuerza de rozamiento dinámico (cinético) durante el deslizamiento.\r
    en: Kinetic-friction force during sliding.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - fk_x\r
  - fk_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-dinamico\r
  common_mistake: Confundir fk con otra magnitud cercana dentro de rozamiento dinamico.\r
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
    - rozamiento-dinamico\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fk con una definicion estable antes de sustituir valores.\r
- id: mu_k\r
  symbol: \\mu_k\r
  nombre:\r
    es: coeficiente_rozamiento_dinamico\r
    en: Kinetic-friction coefficient\r
  descripcion:\r
    es: Coeficiente adimensional de rozamiento dinámico.\r
    en: Dimensionless coefficient of kinetic friction.\r
  unidad_si: '-'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: model_parameter\r
  used_in:\r
  - rozamiento-dinamico\r
  common_mistake: Confundir mu_k con otra magnitud cercana dentro de rozamiento dinamico.\r
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
    - rozamiento-dinamico\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mu_k con una definicion estable antes de sustituir valores.\r
- id: N\r
  symbol: N\r
  nombre:\r
    es: normal\r
    en: Normal force\r
  descripcion:\r
    es: Fuerza normal ejercida por la superficie.\r
    en: Normal force exerted by the surface.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - N_x\r
  - N_y\r
  category: derived\r
  physical_role: contact_force\r
  used_in:\r
  - rozamiento-dinamico\r
  common_mistake: Confundir N con otra magnitud cercana dentro de rozamiento dinamico.\r
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
    - rozamiento-dinamico\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar N con una definicion estable antes de sustituir valores.\r
- id: v_rel\r
  symbol: \\vec v_{rel}\r
  nombre:\r
    es: velocidad_relativa\r
    en: Relative velocity\r
  descripcion:\r
    es: Velocidad relativa entre superficies en contacto (dirección del deslizamiento).\r
    en: Relative velocity between contacting surfaces, which sets the sliding direction.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - v_rel_x\r
  - v_rel_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-dinamico\r
  common_mistake: Confundir v_rel con otra magnitud cercana dentro de rozamiento dinamico.\r
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
    - rozamiento-dinamico\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v_rel con una definicion estable antes de sustituir valores.\r
`;export{n as default};
