const e=`version: 1\r
magnitudes:\r
- id: a_rel\r
  symbol: \\vec{a}_{A/B}\r
  nombre:\r
    es: aceleración relativa de A respecto a B\r
    en: relative acceleration of A with respect to B\r
  descripcion:\r
    es: Aceleración con la que el objeto A se mueve visto desde el sistema de referencia\r
      B. Representa la tasa de cambio de la velocidad relativa.\r
    en: Acceleration with which object A moves as seen from reference frame B. Represents\r
      the rate of change of relative velocity.\r
  unidad_si: m/s²\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - a_rel_x\r
  - a_rel_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aceleracion-relativa\r
  common_mistake: Confundir a_rel con otra magnitud cercana dentro de aceleracion\r
    relativa.\r
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
    - aceleracion-relativa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_rel con una definicion estable antes de sustituir valores.\r
- id: a_A\r
  symbol: \\vec{a}_A\r
  nombre:\r
    es: aceleración absoluta de A\r
    en: absolute acceleration of A\r
  descripcion:\r
    es: Aceleración del objeto A medida desde un sistema de referencia inercial (usualmente\r
      el "laboratorio" o sistema fijo).\r
    en: Acceleration of object A measured from an inertial reference frame (usually\r
      the "laboratory" or fixed system).\r
  unidad_si: m/s²\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - a_A_x\r
  - a_A_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aceleracion-relativa\r
  common_mistake: Confundir a_A con otra magnitud cercana dentro de aceleracion relativa.\r
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
    - aceleracion-relativa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_A con una definicion estable antes de sustituir valores.\r
- id: a_B\r
  symbol: \\vec{a}_B\r
  nombre:\r
    es: aceleración absoluta de B\r
    en: absolute acceleration of B\r
  descripcion:\r
    es: Aceleración del sistema de referencia B (observador) medida desde un sistema\r
      inercial. También llamada aceleración de arrastre.\r
    en: Acceleration of reference frame B (observer) measured from an inertial system.\r
      Also called drag acceleration.\r
  unidad_si: m/s²\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - a_B_x\r
  - a_B_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aceleracion-relativa\r
  common_mistake: Confundir a_B con otra magnitud cercana dentro de aceleracion relativa.\r
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
    - aceleracion-relativa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_B con una definicion estable antes de sustituir valores.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: time\r
  descripcion:\r
    es: Parámetro temporal que en mecánica clásica es absoluto e igual para todos\r
      los sistemas de referencia.\r
    en: Temporal parameter that in classical mechanics is absolute and equal for all\r
      reference frames.\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aceleracion-relativa\r
  common_mistake: Confundir t con otra magnitud cercana dentro de aceleracion relativa.\r
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
    - aceleracion-relativa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar t con una definicion estable antes de sustituir valores.\r
`;export{e as default};
