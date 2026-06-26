const e=`version: 1\r
magnitudes:\r
- id: F_neta\r
  symbol: \\sum \\vec{F}_{ext}\r
  nombre:\r
    es: fuerza neta externa\r
    en: external net force\r
  descripcion:\r
    es: Suma vectorial de todas las fuerzas reales que actúan sobre un objeto. En\r
      un sistema inercial, esta magnitud determina completamente la aceleración del\r
      cuerpo mediante la segunda ley de Newton.\r
    en: Vector sum of all real forces acting on an object. In an inertial system,\r
      this quantity completely determines the body's acceleration through Newton's\r
      second law.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - F_neta_x\r
  - F_neta_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-inerciales\r
  common_mistake: Confundir F_neta con otra magnitud cercana dentro de sistemas inerciales.\r
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
    - sistemas-inerciales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_neta con una definicion estable antes de sustituir valores.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Medida de la inercia de un cuerpo. Cuantifica la resistencia del objeto a\r
      cambiar su estado de movimiento. Es invariante ante transformaciones galileanas\r
      entre sistemas inerciales.\r
    en: Measure of a body's inertia. Quantifies the object's resistance to changing\r
      its state of motion. It is invariant under Galilean transformations between\r
      inertial systems.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-inerciales\r
  common_mistake: Confundir m con otra magnitud cercana dentro de sistemas inerciales.\r
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
    - sistemas-inerciales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: a\r
  symbol: \\vec{a}\r
  nombre:\r
    es: aceleración\r
    en: acceleration\r
  descripcion:\r
    es: Tasa de cambio de la velocidad respecto al tiempo. En sistemas inerciales,\r
      es invariante ante transformaciones galileanas (todos los observadores inerciales\r
      miden la misma aceleración).\r
    en: Rate of change of velocity with respect to time. In inertial systems, it is\r
      invariant under Galilean transformations (all inertial observers measure the\r
      same acceleration).\r
  unidad_si: m/s²\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - a_x\r
  - a_y\r
  category: derived\r
  physical_role: frame_effect\r
  used_in:\r
  - sistemas-inerciales\r
  common_mistake: Confundir a con otra magnitud cercana dentro de sistemas inerciales.\r
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
    - sistemas-inerciales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a con una definicion estable antes de sustituir valores.\r
- id: v\r
  symbol: \\vec{v}\r
  nombre:\r
    es: velocidad\r
    en: velocity\r
  descripcion:\r
    es: Tasa de cambio de la posición respecto al tiempo. A diferencia de la aceleración,\r
      la velocidad SÍ cambia entre sistemas inerciales según transformaciones galileanas.\r
    en: Rate of change of position with respect to time. Unlike acceleration, velocity\r
      DOES change between inertial systems according to Galilean transformations.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - v_x\r
  - v_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-inerciales\r
  common_mistake: Confundir v con otra magnitud cercana dentro de sistemas inerciales.\r
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
    - sistemas-inerciales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.\r
- id: V_rel\r
  symbol: \\vec{V}\r
  nombre:\r
    es: velocidad relativa entre sistemas inerciales\r
    en: relative velocity between inertial systems\r
  descripcion:\r
    es: Velocidad constante con la que un sistema inercial S' se mueve respecto a\r
      otro sistema inercial S. Es el parámetro de las transformaciones de Galileo.\r
    en: Constant velocity with which an inertial system S' moves relative to another\r
      inertial system S. It is the parameter of Galilean transformations.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - V_rel_x\r
  - V_rel_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-inerciales\r
  common_mistake: Confundir V_rel con otra magnitud cercana dentro de sistemas inerciales.\r
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
    - sistemas-inerciales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar V_rel con una definicion estable antes de sustituir valores.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: time\r
  descripcion:\r
    es: Parámetro temporal absoluto en mecánica clásica. Es el mismo para todos los\r
      sistemas inerciales (invariante galileano).\r
    en: Absolute temporal parameter in classical mechanics. It is the same for all\r
      inertial systems (Galilean invariant).\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-inerciales\r
  common_mistake: Confundir t con otra magnitud cercana dentro de sistemas inerciales.\r
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
    - sistemas-inerciales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar t con una definicion estable antes de sustituir valores.\r
- id: a_obs2\r
  symbol: a_obs2\r
  nombre:\r
    es: a_obs2\r
    en: a_obs2\r
  descripcion:\r
    es: Magnitud a?adida para mantener coherencia cruzada en el leaf (a_obs2).\r
    en: Magnitude added to keep cross-file coherence in this leaf (a_obs2).\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-inerciales\r
  common_mistake: Confundir a_obs2 con otra magnitud cercana dentro de sistemas inerciales.\r
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
    - sistemas-inerciales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_obs2 con una definicion estable antes de sustituir valores.\r
- id: v_obs1\r
  symbol: v_obs1\r
  nombre:\r
    es: v_obs1\r
    en: v_obs1\r
  descripcion:\r
    es: Magnitud a?adida para mantener coherencia cruzada en el leaf (v_obs1).\r
    en: Magnitude added to keep cross-file coherence in this leaf (v_obs1).\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-inerciales\r
  common_mistake: Confundir v_obs1 con otra magnitud cercana dentro de sistemas inerciales.\r
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
    - sistemas-inerciales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v_obs1 con una definicion estable antes de sustituir valores.\r
- id: v_obs2\r
  symbol: v_obs2\r
  nombre:\r
    es: v_obs2\r
    en: v_obs2\r
  descripcion:\r
    es: Magnitud a?adida para mantener coherencia cruzada en el leaf (v_obs2).\r
    en: Magnitude added to keep cross-file coherence in this leaf (v_obs2).\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-inerciales\r
  common_mistake: Confundir v_obs2 con otra magnitud cercana dentro de sistemas inerciales.\r
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
    - sistemas-inerciales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v_obs2 con una definicion estable antes de sustituir valores.\r
`;export{e as default};
