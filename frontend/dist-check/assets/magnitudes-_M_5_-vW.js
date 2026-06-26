const n=`version: 1\r
magnitudes:\r
- id: tensor_inercia\r
  symbol: tensor_{inercia}\r
  nombre:\r
    es: Tensor de Inercia\r
    en: Inertia Tensor\r
  descripcion:\r
    es: Matriz simétrica de 3x3 que describe la distribución de masa de un cuerpo\r
      rígido respecto a un sistema de ejes coordenados.\r
    en: 3x3 symmetric matrix describing the mass distribution of a rigid body relative\r
      to a coordinate system.\r
  unidad_si: kg·m²\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tensor-de-inercia\r
  common_mistake: Confundir tensor_inercia con otra magnitud cercana dentro de tensor\r
    de inercia.\r
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
    - tensor-de-inercia\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar tensor_inercia con una definicion estable antes de sustituir\r
    valores.\r
- id: producto_inercia\r
  symbol: I_{xy}\r
  nombre:\r
    es: Producto de Inercia\r
    en: Product of Inertia\r
  descripcion:\r
    es: Componente fuera de la diagonal del tensor que cuantifica la asimetría de\r
      la distribución de masa.\r
    en: Off-diagonal component of the tensor quantifying the asymmetry of the mass\r
      distribution.\r
  unidad_si: kg·m²\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tensor-de-inercia\r
  common_mistake: Confundir producto_inercia con otra magnitud cercana dentro de tensor\r
    de inercia.\r
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
    - tensor-de-inercia\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar producto_inercia con una definicion estable antes de sustituir\r
    valores.\r
- id: momento_angular\r
  symbol: momento_{angular}\r
  nombre:\r
    es: Momento Angular\r
    en: Angular Momentum\r
  descripcion:\r
    es: Magnitud vectorial que describe el estado de rotación del sistema.\r
    en: Vector quantity describing the rotational state of the system.\r
  unidad_si: kg·m²/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tensor-de-inercia\r
  common_mistake: Confundir momento_angular con otra magnitud cercana dentro de tensor\r
    de inercia.\r
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
    - tensor-de-inercia\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar momento_angular con una definicion estable antes de sustituir\r
    valores.\r
- id: omega\r
  symbol: omega\r
  nombre:\r
    es: Velocidad angular\r
    en: Angular velocity\r
  descripcion:\r
    es: Rapidez de giro alrededor del eje principal.\r
    en: Rotation rate around the principal axis.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tensor-de-inercia\r
  common_mistake: Confundir omega con otra magnitud cercana dentro de tensor de inercia.\r
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
    - tensor-de-inercia\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega con una definicion estable antes de sustituir valores.\r
- id: E\r
  symbol: E\r
  nombre:\r
    es: Energia cinetica rotacional\r
    en: Rotational kinetic energy\r
  descripcion:\r
    es: Energia asociada al movimiento de giro en el eje principal.\r
    en: Energy associated with rotational motion about the principal axis.\r
  unidad_si: J\r
  dimension: L^2MT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tensor-de-inercia\r
  common_mistake: Confundir E con otra magnitud cercana dentro de tensor de inercia.\r
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
    - tensor-de-inercia\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar E con una definicion estable antes de sustituir valores.\r
`;export{n as default};
