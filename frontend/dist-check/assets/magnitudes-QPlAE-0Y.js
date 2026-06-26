const e=`version: 1\r
magnitudes:\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Masa del cuerpo analizado dentro del sistema no inercial. La masa es una propiedad\r
      intrínseca del objeto, independiente del sistema de referencia.\r
    en: Mass of the body analyzed inside the non-inertial system. Mass is an intrinsic\r
      property of the object, independent of the reference frame.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir m con otra magnitud cercana dentro de sistemas no inerciales\r
    intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: a_marco\r
  symbol: \\vec{a}_{marco}\r
  nombre:\r
    es: aceleracion_del_marco\r
    en: frame_acceleration\r
  descripcion:\r
    es: Aceleración del sistema de referencia no inercial medida desde un sistema\r
      inercial externo. Es el origen de las fuerzas ficticias.\r
    en: Acceleration of the non-inertial reference frame measured from an external\r
      inertial system. It is the origin of fictitious forces.\r
  unidad_si: m/s²\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - a_marco_x\r
  - a_marco_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir a_marco con otra magnitud cercana dentro de sistemas no\r
    inerciales intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_marco con una definicion estable antes de sustituir valores.\r
- id: F_ficticia\r
  symbol: \\vec{F}_f\r
  nombre:\r
    es: fuerza_ficticia\r
    en: fictitious_force\r
  descripcion:\r
    es: Fuerza ficticia (o inercial) que aparece en sistemas no inerciales con traslación\r
      acelerada. Se calcula como F_f = -m·a_marco.\r
    en: Fictitious (or inertial) force appearing in non-inertial systems with accelerated\r
      translation. Calculated as F_f = -m·a_frame.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - F_ficticia_x\r
  - F_ficticia_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir F_ficticia con otra magnitud cercana dentro de sistemas\r
    no inerciales intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_ficticia con una definicion estable antes de sustituir\r
    valores.\r
- id: F_real\r
  symbol: \\sum \\vec{F}_{reales}\r
  nombre:\r
    es: fuerza_neta_real\r
    en: net_real_force\r
  descripcion:\r
    es: Suma vectorial de todas las fuerzas reales con agente físico identificable\r
      (peso, normal, tensión, fricción, etc.). Válidas en cualquier sistema de referencia.\r
    en: Vector sum of all real forces with identifiable physical agent (weight, normal,\r
      tension, friction, etc.). Valid in any reference frame.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - F_real_x\r
  - F_real_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir F_real con otra magnitud cercana dentro de sistemas no\r
    inerciales intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_real con una definicion estable antes de sustituir valores.\r
- id: a_rel\r
  symbol: \\vec{a}_{rel}\r
  nombre:\r
    es: aceleracion_relativa\r
    en: relative_acceleration\r
  descripcion:\r
    es: Aceleración del objeto medida dentro del sistema no inercial. Es la aceleración\r
      observable por el observador acelerado.\r
    en: Object's acceleration measured inside the non-inertial system. It's the acceleration\r
      observable by the accelerated observer.\r
  unidad_si: m/s²\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - a_rel_x\r
  - a_rel_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir a_rel con otra magnitud cercana dentro de sistemas no\r
    inerciales intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_rel con una definicion estable antes de sustituir valores.\r
- id: omega\r
  symbol: \\omega\r
  nombre:\r
    es: velocidad_angular\r
    en: angular_velocity\r
  descripcion:\r
    es: Velocidad angular del marco de referencia rotante. Determina la intensidad\r
      de las fuerzas centrífuga y Coriolis.\r
    en: Angular velocity of the rotating reference frame. Determines the intensity\r
      of centrifugal and Coriolis forces.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir omega con otra magnitud cercana dentro de sistemas no\r
    inerciales intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega con una definicion estable antes de sustituir valores.\r
- id: r\r
  symbol: \\vec{r}\r
  nombre:\r
    es: vector_posicion_radial\r
    en: radial_position_vector\r
  descripcion:\r
    es: Vector posición perpendicular al eje de rotación. Determina la magnitud de\r
      la fuerza centrífuga (F_cf = m·ω²·r).\r
    en: Position vector perpendicular to rotation axis. Determines centrifugal force\r
      magnitude (F_cf = m·ω²·r).\r
  unidad_si: m\r
  dimension: L\r
  is_vector: true\r
  components:\r
  - r_x\r
  - r_y\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir r con otra magnitud cercana dentro de sistemas no inerciales\r
    intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar r con una definicion estable antes de sustituir valores.\r
- id: v_rel\r
  symbol: \\vec{v}_{rel}\r
  nombre:\r
    es: velocidad_relativa\r
    en: relative_velocity\r
  descripcion:\r
    es: Velocidad del objeto medida dentro del marco rotante. Necesaria para calcular\r
      la fuerza de Coriolis (F_cor = -2m·ω×v_rel).\r
    en: Object's velocity measured inside rotating frame. Needed to calculate Coriolis\r
      force (F_cor = -2m·ω×v_rel).\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - v_rel_x\r
  - v_rel_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir v_rel con otra magnitud cercana dentro de sistemas no\r
    inerciales intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v_rel con una definicion estable antes de sustituir valores.\r
- id: F_centrifuga\r
  symbol: \\vec{F}_{cf}\r
  nombre:\r
    es: fuerza_centrifuga\r
    en: centrifugal_force\r
  descripcion:\r
    es: Fuerza ficticia en marcos rotantes que apunta radialmente hacia afuera. Se\r
      calcula como F_cf = m·ω²·r.\r
    en: Fictitious force in rotating frames pointing radially outward. Calculated\r
      as F_cf = m·ω²·r.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - F_centrifuga_x\r
  - F_centrifuga_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir F_centrifuga con otra magnitud cercana dentro de sistemas\r
    no inerciales intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_centrifuga con una definicion estable antes de sustituir\r
    valores.\r
- id: F_coriolis\r
  symbol: \\vec{F}_{cor}\r
  nombre:\r
    es: fuerza_coriolis\r
    en: coriolis_force\r
  descripcion:\r
    es: Fuerza ficticia en marcos rotantes que actúa perpendicular a la velocidad\r
      relativa. Se calcula como F_cor = -2m·(ω×v_rel).\r
    en: Fictitious force in rotating frames acting perpendicular to relative velocity.\r
      Calculated as F_cor = -2m·(ω×v_rel).\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - F_coriolis_x\r
  - F_coriolis_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir F_coriolis con otra magnitud cercana dentro de sistemas\r
    no inerciales intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_coriolis con una definicion estable antes de sustituir\r
    valores.\r
- id: system_classification\r
  symbol: system_classification\r
  nombre:\r
    es: system_classification\r
    en: system_classification\r
  descripcion:\r
    es: Magnitud a?adida para mantener coherencia cruzada en el leaf (system_classification).\r
    en: Magnitude added to keep cross-file coherence in this leaf (system_classification).\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  common_mistake: Confundir system_classification con otra magnitud cercana dentro\r
    de sistemas no inerciales intro.\r
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
    - sistemas-no-inerciales-intro\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar system_classification con una definicion estable antes de\r
    sustituir valores.\r
`;export{e as default};
