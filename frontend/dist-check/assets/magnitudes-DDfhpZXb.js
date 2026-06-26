const n=`version: 1\r
magnitudes:\r
- id: s\r
  symbol: s\r
  nombre:\r
    es: arco de circunferencia\r
    en: arc length\r
  descripcion:\r
    es: Longitud de la trayectoria curva recorrida por un punto.\r
    en: Length of the curved path traveled by a point.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes-angulares\r
  common_mistake: Confundir s con otra magnitud cercana dentro de magnitudes angulares.\r
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
    - magnitudes-angulares\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar s con una definicion estable antes de sustituir valores.\r
- id: R\r
  symbol: R\r
  nombre:\r
    es: radio de giro\r
    en: radius of rotation\r
  descripcion:\r
    es: Distancia perpendicular desde el eje de rotación hasta el punto de interés.\r
    en: Perpendicular distance from the axis of rotation to the point of interest.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes-angulares\r
  common_mistake: Confundir R con otra magnitud cercana dentro de magnitudes angulares.\r
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
    - magnitudes-angulares\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar R con una definicion estable antes de sustituir valores.\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: ángulo (posición angular)\r
    en: angle (angular position)\r
  descripcion:\r
    es: Medida de la rotación expresada como la razón entre el arco y el radio.\r
    en: Measure of rotation expressed as the ratio between arc and radius.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes-angulares\r
  common_mistake: Confundir theta con otra magnitud cercana dentro de magnitudes angulares.\r
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
    - magnitudes-angulares\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar theta con una definicion estable antes de sustituir valores.\r
- id: omega\r
  symbol: \\omega\r
  nombre:\r
    es: velocidad angular\r
    en: angular velocity\r
  descripcion:\r
    es: Cambio de la posición angular por unidad de tiempo.\r
    en: Change in angular position per unit of time.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes-angulares\r
  common_mistake: Confundir omega con otra magnitud cercana dentro de magnitudes angulares.\r
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
    - magnitudes-angulares\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega con una definicion estable antes de sustituir valores.\r
- id: f\r
  symbol: f\r
  nombre:\r
    es: frecuencia\r
    en: frequency\r
  descripcion:\r
    es: Número de revoluciones completas por unidad de tiempo.\r
    en: Number of complete revolutions per unit of time.\r
  unidad_si: Hz\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: friction_force\r
  used_in:\r
  - magnitudes-angulares\r
  common_mistake: Confundir f con otra magnitud cercana dentro de magnitudes angulares.\r
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
    - magnitudes-angulares\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar f con una definicion estable antes de sustituir valores.\r
- id: T_periodo\r
  symbol: T\r
  nombre:\r
    es: periodo\r
    en: period\r
  descripcion:\r
    es: Tiempo necesario para completar una revolución completa.\r
    en: Time required to complete one full revolution.\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes-angulares\r
  common_mistake: Confundir T_periodo con otra magnitud cercana dentro de magnitudes\r
    angulares.\r
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
    - magnitudes-angulares\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar T_periodo con una definicion estable antes de sustituir\r
    valores.\r
`;export{n as default};
