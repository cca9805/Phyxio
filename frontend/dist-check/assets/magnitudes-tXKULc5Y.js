const n=`version: 1\r
magnitudes:\r
- id: Fm\r
  symbol: F\r
  nombre:\r
    es: módulo de la fuerza\r
    en: force magnitude\r
  descripcion:\r
    es: Intensidad total del vector fuerza antes de proyectarlo sobre ejes elegidos.\r
    en: Total magnitude of the force vector before projecting it onto chosen axes.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir Fm con otra magnitud cercana dentro de descomposicion\r
    vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Fm con una definicion estable antes de sustituir valores.\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: ángulo de referencia\r
    en: angle\r
  descripcion:\r
    es: Ángulo medido desde el eje de referencia declarado.\r
    en: Angle measured from the declared reference axis.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir theta con otra magnitud cercana dentro de descomposicion\r
    vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar theta con una definicion estable antes de sustituir valores.\r
- id: Fx\r
  symbol: F_x\r
  nombre:\r
    es: componente en x\r
    en: x component\r
  descripcion:\r
    es: Proyección de la fuerza sobre el eje x.\r
    en: Projection of the force onto the x axis.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir Fx con otra magnitud cercana dentro de descomposicion\r
    vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Fx con una definicion estable antes de sustituir valores.\r
- id: Fy\r
  symbol: F_y\r
  nombre:\r
    es: componente en y\r
    en: y component\r
  descripcion:\r
    es: Proyección de la fuerza sobre el eje y.\r
    en: Projection of the force onto the y axis.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir Fy con otra magnitud cercana dentro de descomposicion\r
    vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Fy con una definicion estable antes de sustituir valores.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Masa del cuerpo.\r
    en: Mass of the body.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir m con otra magnitud cercana dentro de descomposicion vectorial.\r
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
    - descomposicion-vectorial\r
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
    es: Aceleración local de la gravedad.\r
    en: Local gravitational acceleration.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: field\r
  physical_role: field_strength\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir g con otra magnitud cercana dentro de descomposicion vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar g con una definicion estable antes de sustituir valores.\r
- id: Ppar\r
  symbol: P_{\\parallel}\r
  nombre:\r
    es: componente paralela del peso\r
    en: parallel weight component\r
  descripcion:\r
    es: Proyección del peso sobre el eje paralelo al plano inclinado.\r
    en: Projection of weight onto the axis parallel to the inclined plane.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir Ppar con otra magnitud cercana dentro de descomposicion\r
    vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Ppar con una definicion estable antes de sustituir valores.\r
- id: Pperp\r
  symbol: P_{\\perp}\r
  nombre:\r
    es: componente perpendicular del peso\r
    en: perpendicular weight component\r
  descripcion:\r
    es: Proyección del peso sobre el eje perpendicular al plano inclinado.\r
    en: Projection of weight onto the axis perpendicular to the inclined plane.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir Pperp con otra magnitud cercana dentro de descomposicion\r
    vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Pperp con una definicion estable antes de sustituir valores.\r
- id: N\r
  symbol: N\r
  nombre:\r
    es: fuerza normal\r
    en: normal force\r
  descripcion:\r
    es: Fuerza de reacción perpendicular a la superficie.\r
    en: Reaction force perpendicular to the surface.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - N_x\r
  - N_y\r
  category: derived\r
  physical_role: contact_force\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir N con otra magnitud cercana dentro de descomposicion vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar N con una definicion estable antes de sustituir valores.\r
- id: fk\r
  symbol: f_k\r
  nombre:\r
    es: fuerza de rozamiento cinético\r
    en: kinetic friction force\r
  descripcion:\r
    es: Fuerza que se opone al deslizamiento.\r
    en: Force opposing sliding motion.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir fk con otra magnitud cercana dentro de descomposicion\r
    vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fk con una definicion estable antes de sustituir valores.\r
- id: muk\r
  symbol: \\mu_k\r
  nombre:\r
    es: coeficiente de rozamiento cinético\r
    en: kinetic friction coefficient\r
  descripcion:\r
    es: Coeficiente adimensional de fricción entre superficies.\r
    en: Dimensionless friction coefficient between surfaces.\r
  unidad_si: 1\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir muk con otra magnitud cercana dentro de descomposicion\r
    vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar muk con una definicion estable antes de sustituir valores.\r
- id: a\r
  symbol: a\r
  nombre:\r
    es: aceleración\r
    en: acceleration\r
  descripcion:\r
    es: Variación temporal de la velocidad.\r
    en: Time rate of change of velocity.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: frame_effect\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir a con otra magnitud cercana dentro de descomposicion vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a con una definicion estable antes de sustituir valores.\r
- id: T\r
  symbol: T\r
  nombre:\r
    es: tensión\r
    en: tension\r
  descripcion:\r
    es: Fuerza ejercida por un cable o cuerda ideal.\r
    en: Force exerted by an ideal cable or rope.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - T_x\r
  - T_y\r
  category: derived\r
  physical_role: tension_force\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir T con otra magnitud cercana dentro de descomposicion vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar T con una definicion estable antes de sustituir valores.\r
- id: W\r
  symbol: W\r
  nombre:\r
    es: peso total\r
    en: total weight\r
  descripcion:\r
    es: Fuerza de atracción gravitatoria total (m*g).\r
    en: Total gravitational attraction force (m*g).\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - descomposicion-vectorial\r
  common_mistake: Confundir W con otra magnitud cercana dentro de descomposicion vectorial.\r
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
    - descomposicion-vectorial\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar W con una definicion estable antes de sustituir valores.\r
`;export{n as default};
