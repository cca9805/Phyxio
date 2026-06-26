const e=`version: 1\r
magnitudes:\r
- id: Fel\r
  symbol: F_{el}\r
  nombre:\r
    es: fuerza_elastica\r
    en: Elastic Force\r
  descripcion:\r
    es: Fuerza restauradora del muelle en el eje elegido.\r
    en: Restoring force exerted by the spring along the chosen axis.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ley-de-hooke\r
  common_mistake: Confundir Fel con otra magnitud cercana dentro de ley de hooke.\r
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
    - ley-de-hooke\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Fel con una definicion estable antes de sustituir valores.\r
- id: Fm\r
  symbol: '|F_{el}|'\r
  nombre:\r
    es: modulo_fuerza_elastica\r
    en: Elastic Force Magnitude\r
  descripcion:\r
    es: Magnitud de la fuerza elastica.\r
    en: Magnitude of the elastic force.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ley-de-hooke\r
  common_mistake: Confundir Fm con otra magnitud cercana dentro de ley de hooke.\r
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
    - ley-de-hooke\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Fm con una definicion estable antes de sustituir valores.\r
- id: k\r
  symbol: k\r
  nombre:\r
    es: constante_elastica\r
    en: Spring Constant\r
  descripcion:\r
    es: Rigidez del muelle.\r
    en: Stiffness of the spring.\r
  unidad_si: N/m\r
  dimension: MT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: elastic_constant\r
  used_in:\r
  - ley-de-hooke\r
  common_mistake: Confundir k con otra magnitud cercana dentro de ley de hooke.\r
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
    - ley-de-hooke\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar k con una definicion estable antes de sustituir valores.\r
- id: x\r
  symbol: x\r
  nombre:\r
    es: deformacion\r
    en: Deformation\r
  descripcion:\r
    es: Elongacion o compresion respecto a la referencia.\r
    en: Elongation or compression relative to the reference configuration.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - ley-de-hooke\r
  common_mistake: Confundir x con otra magnitud cercana dentro de ley de hooke.\r
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
    - ley-de-hooke\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar x con una definicion estable antes de sustituir valores.\r
- id: x_eq\r
  symbol: x_{eq}\r
  nombre:\r
    es: deformacion_equilibrio\r
    en: Equilibrium Deformation\r
  descripcion:\r
    es: Deformacion en equilibrio estatico.\r
    en: Deformation at static equilibrium.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ley-de-hooke\r
  common_mistake: Confundir x_eq con otra magnitud cercana dentro de ley de hooke.\r
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
    - ley-de-hooke\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar x_eq con una definicion estable antes de sustituir valores.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: Mass\r
  descripcion:\r
    es: Masa del cuerpo acoplado al muelle.\r
    en: Mass of the body attached to the spring.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - ley-de-hooke\r
  common_mistake: Confundir m con otra magnitud cercana dentro de ley de hooke.\r
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
    - ley-de-hooke\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: aceleracion_gravedad\r
    en: Gravitational Acceleration\r
  descripcion:\r
    es: Intensidad del campo gravitatorio local.\r
    en: Magnitude of the local gravitational field.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: field\r
  physical_role: field_strength\r
  used_in:\r
  - ley-de-hooke\r
  common_mistake: Confundir g con otra magnitud cercana dentro de ley de hooke.\r
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
    - ley-de-hooke\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar g con una definicion estable antes de sustituir valores.\r
- id: Uel\r
  symbol: U_{el}\r
  nombre:\r
    es: energia_potencial_elastica\r
    en: Elastic Potential Energy\r
  descripcion:\r
    es: Energia almacenada por deformacion del muelle.\r
    en: Energy stored by spring deformation.\r
  unidad_si: J\r
  dimension: L^2MT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ley-de-hooke\r
  common_mistake: Confundir Uel con otra magnitud cercana dentro de ley de hooke.\r
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
    - ley-de-hooke\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Uel con una definicion estable antes de sustituir valores.\r
`;export{e as default};
