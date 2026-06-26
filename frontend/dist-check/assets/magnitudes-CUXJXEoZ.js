const e=`version: 1\r
magnitudes:\r
- id: mu_s\r
  symbol: \\mu_s\r
  nombre:\r
    es: coeficiente_rozamiento_estatico\r
    en: Static-Friction Coefficient\r
  descripcion:\r
    es: Parametro adimensional de adherencia en regimen estatico.\r
    en: Dimensionless parameter that characterizes adhesion in the static regime.\r
  unidad_si: '-'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: model_parameter\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  common_mistake: Confundir mu_s con otra magnitud cercana dentro de coeficiente de\r
    rozamiento.\r
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
    - coeficiente-de-rozamiento\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mu_s con una definicion estable antes de sustituir valores.\r
- id: mu_k\r
  symbol: \\mu_k\r
  nombre:\r
    es: coeficiente_rozamiento_dinamico\r
    en: Kinetic-Friction Coefficient\r
  descripcion:\r
    es: Parametro adimensional de resistencia en deslizamiento.\r
    en: Dimensionless parameter that characterizes resistance during sliding.\r
  unidad_si: '-'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: model_parameter\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  common_mistake: Confundir mu_k con otra magnitud cercana dentro de coeficiente de\r
    rozamiento.\r
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
    - coeficiente-de-rozamiento\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mu_k con una definicion estable antes de sustituir valores.\r
- id: fs\r
  symbol: f_s\r
  nombre:\r
    es: rozamiento_estatico\r
    en: Static Friction\r
  descripcion:\r
    es: Fuerza estatica instantanea de interfaz (valor de ajuste).\r
    en: Instantaneous static-friction force at the interface.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  common_mistake: Confundir fs con otra magnitud cercana dentro de coeficiente de\r
    rozamiento.\r
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
    - coeficiente-de-rozamiento\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fs con una definicion estable antes de sustituir valores.\r
- id: fs_max\r
  symbol: f_{s,\\max}\r
  nombre:\r
    es: rozamiento_estatico_maximo\r
    en: Maximum Static Friction\r
  descripcion:\r
    es: Valor limite de rozamiento estatico justo antes del deslizamiento.\r
    en: Limiting value of static friction immediately before sliding begins.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  common_mistake: Confundir fs_max con otra magnitud cercana dentro de coeficiente\r
    de rozamiento.\r
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
    - coeficiente-de-rozamiento\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fs_max con una definicion estable antes de sustituir valores.\r
- id: fk\r
  symbol: f_k\r
  nombre:\r
    es: rozamiento_dinamico\r
    en: Kinetic Friction\r
  descripcion:\r
    es: Fuerza de rozamiento durante deslizamiento relativo.\r
    en: Friction force during relative sliding.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  common_mistake: Confundir fk con otra magnitud cercana dentro de coeficiente de\r
    rozamiento.\r
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
    - coeficiente-de-rozamiento\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fk con una definicion estable antes de sustituir valores.\r
- id: N\r
  symbol: N\r
  nombre:\r
    es: normal\r
    en: Normal Force\r
  descripcion:\r
    es: Fuerza normal de contacto entre superficies.\r
    en: Contact normal force between the surfaces.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - N_x\r
  - N_y\r
  category: derived\r
  physical_role: contact_force\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  common_mistake: Confundir N con otra magnitud cercana dentro de coeficiente de rozamiento.\r
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
    - coeficiente-de-rozamiento\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar N con una definicion estable antes de sustituir valores.\r
- id: theta_c\r
  symbol: \\theta_c\r
  nombre:\r
    es: angulo_critico\r
    en: Critical Angle\r
  descripcion:\r
    es: Angulo de inicio de deslizamiento en plano inclinado.\r
    en: Angle at which sliding begins on an inclined plane.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  common_mistake: Confundir theta_c con otra magnitud cercana dentro de coeficiente\r
    de rozamiento.\r
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
    - coeficiente-de-rozamiento\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar theta_c con una definicion estable antes de sustituir valores.\r
`;export{e as default};
