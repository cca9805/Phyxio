const e=`version: 1\r
magnitudes:\r
- id: DeltaV\r
  symbol: \\Delta v\r
  nombre:\r
    es: incremento ideal de velocidad\r
    en: ideal velocity increment\r
  descripcion:\r
    es: Incremento ideal de velocidad en el contexto de este subtema.\r
    en: Ideal velocity increment in the context of the topic.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ecuacion-del-cohete\r
  common_mistake: Confundir DeltaV con otra magnitud cercana dentro de ecuacion del\r
    cohete.\r
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
    - ecuacion-del-cohete\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar DeltaV con una definicion estable antes de sustituir valores.\r
- id: ve\r
  symbol: v_e\r
  nombre:\r
    es: velocidad efectiva de eyeccion\r
    en: effective exhaust speed\r
  descripcion:\r
    es: Velocidad efectiva de eyeccion en el contexto de este subtema.\r
    en: Effective exhaust speed in the context of the topic.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ecuacion-del-cohete\r
  common_mistake: Confundir ve con otra magnitud cercana dentro de ecuacion del cohete.\r
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
    - ecuacion-del-cohete\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar ve con una definicion estable antes de sustituir valores.\r
- id: m0\r
  symbol: m_0\r
  nombre:\r
    es: masa inicial\r
    en: initial mass\r
  descripcion:\r
    es: Masa inicial del sistema o cuerpo considerado.\r
    en: Initial mass of the considered body or system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - ecuacion-del-cohete\r
  common_mistake: Confundir m0 con otra magnitud cercana dentro de ecuacion del cohete.\r
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
    - ecuacion-del-cohete\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m0 con una definicion estable antes de sustituir valores.\r
- id: mf\r
  symbol: m_f\r
  nombre:\r
    es: masa final\r
    en: final mass\r
  descripcion:\r
    es: Masa final del sistema o cuerpo considerado.\r
    en: Final mass of the considered body or system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - ecuacion-del-cohete\r
  common_mistake: Confundir mf con otra magnitud cercana dentro de ecuacion del cohete.\r
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
    - ecuacion-del-cohete\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mf con una definicion estable antes de sustituir valores.\r
`;export{e as default};
