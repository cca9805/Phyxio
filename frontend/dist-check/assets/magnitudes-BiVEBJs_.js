const e=`version: 1\r
magnitudes:\r
- id: F_net\r
  symbol: \\vec{F}_{\\text{net}}\r
  nombre:\r
    es: Fuerza neta\r
    en: Net force\r
  descripcion:\r
    es: Suma vectorial de todas las fuerzas externas que actúan sobre el sistema.\r
    en: Vector sum of all external forces acting on the system.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - F_net_x\r
  - F_net_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - segunda-ley-fuerza-masa\r
  common_mistake: Confundir F_net con otra magnitud cercana dentro de segunda ley\r
    fuerza masa.\r
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
    - segunda-ley-fuerza-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_net con una definicion estable antes de sustituir valores.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: Masa\r
    en: Mass\r
  descripcion:\r
    es: Medida de la inercia del sistema frente a cambios en su estado de movimiento.\r
    en: Measure of the system's inertia against changes in motion.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - segunda-ley-fuerza-masa\r
  common_mistake: Confundir m con otra magnitud cercana dentro de segunda ley fuerza\r
    masa.\r
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
    - segunda-ley-fuerza-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: a\r
  symbol: \\vec{a}\r
  nombre:\r
    es: Aceleración\r
    en: Acceleration\r
  descripcion:\r
    es: Tasa de cambio de la velocidad del sistema.\r
    en: Rate of change of velocity of the system.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: true\r
  components:\r
  - a_x\r
  - a_y\r
  category: derived\r
  physical_role: frame_effect\r
  used_in:\r
  - segunda-ley-fuerza-masa\r
  common_mistake: Confundir a con otra magnitud cercana dentro de segunda ley fuerza\r
    masa.\r
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
    - segunda-ley-fuerza-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a con una definicion estable antes de sustituir valores.\r
- id: F_x\r
  symbol: F_x\r
  nombre:\r
    es: Componente x de la fuerza neta\r
    en: x-component of net force\r
  descripcion:\r
    es: Proyección de la fuerza neta sobre el eje x.\r
    en: Projection of the net force onto the x-axis.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - segunda-ley-fuerza-masa\r
  common_mistake: Confundir F_x con otra magnitud cercana dentro de segunda ley fuerza\r
    masa.\r
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
    - segunda-ley-fuerza-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_x con una definicion estable antes de sustituir valores.\r
- id: a_x\r
  symbol: a_x\r
  nombre:\r
    es: Componente x de la aceleración\r
    en: x-component of acceleration\r
  descripcion:\r
    es: Proyección de la aceleración sobre el eje x.\r
    en: Projection of acceleration onto the x-axis.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - segunda-ley-fuerza-masa\r
  common_mistake: Confundir a_x con otra magnitud cercana dentro de segunda ley fuerza\r
    masa.\r
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
    - segunda-ley-fuerza-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_x con una definicion estable antes de sustituir valores.\r
`;export{e as default};
