const n=`version: 1\r
magnitudes:\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: Mass\r
  descripcion:\r
    es: Masa del cuerpo que cae o se mueve en el fluido.\r
    en: Mass of the body moving through the fluid.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - velocidad-terminal\r
  common_mistake: Confundir m con otra magnitud cercana dentro de velocidad terminal.\r
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
    - velocidad-terminal\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: gravedad\r
    en: Gravitational field\r
  descripcion:\r
    es: Intensidad del campo gravitatorio.\r
    en: Strength of the gravitational field.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: field\r
  physical_role: field_strength\r
  used_in:\r
  - velocidad-terminal\r
  common_mistake: Confundir g con otra magnitud cercana dentro de velocidad terminal.\r
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
    - velocidad-terminal\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar g con una definicion estable antes de sustituir valores.\r
- id: b\r
  symbol: b\r
  nombre:\r
    es: coeficiente_lineal_de_arrastre\r
    en: Linear drag coefficient\r
  descripcion:\r
    es: Parametro del modelo lineal de arrastre.\r
    en: Parameter of the linear drag model.\r
  unidad_si: N*s/m\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - velocidad-terminal\r
  common_mistake: Confundir b con otra magnitud cercana dentro de velocidad terminal.\r
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
    - velocidad-terminal\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar b con una definicion estable antes de sustituir valores.\r
- id: rho\r
  symbol: rho\r
  nombre:\r
    es: densidad_del_fluido\r
    en: Fluid density\r
  descripcion:\r
    es: Densidad del medio fluido.\r
    en: Density of the surrounding fluid.\r
  unidad_si: kg/m^3\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - velocidad-terminal\r
  common_mistake: Confundir rho con otra magnitud cercana dentro de velocidad terminal.\r
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
    - velocidad-terminal\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar rho con una definicion estable antes de sustituir valores.\r
- id: C_d\r
  symbol: C_d\r
  nombre:\r
    es: coeficiente_de_arrastre\r
    en: Drag coefficient\r
  descripcion:\r
    es: Parametro adimensional asociado a la forma.\r
    en: Dimensionless parameter associated with shape.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - velocidad-terminal\r
  common_mistake: Confundir C_d con otra magnitud cercana dentro de velocidad terminal.\r
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
    - velocidad-terminal\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar C_d con una definicion estable antes de sustituir valores.\r
- id: A\r
  symbol: A\r
  nombre:\r
    es: area_frontal\r
    en: Frontal area\r
  descripcion:\r
    es: Area perpendicular al avance.\r
    en: Area perpendicular to motion.\r
  unidad_si: m^2\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - velocidad-terminal\r
  common_mistake: Confundir A con otra magnitud cercana dentro de velocidad terminal.\r
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
    - velocidad-terminal\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar A con una definicion estable antes de sustituir valores.\r
- id: v_t\r
  symbol: v_t\r
  nombre:\r
    es: velocidad_terminal\r
    en: Terminal velocity\r
  descripcion:\r
    es: Velocidad limite a la que la fuerza neta se anula.\r
    en: Limiting speed at which the net force vanishes.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - velocidad-terminal\r
  common_mistake: Confundir v_t con otra magnitud cercana dentro de velocidad terminal.\r
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
    - velocidad-terminal\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v_t con una definicion estable antes de sustituir valores.\r
`;export{n as default};
