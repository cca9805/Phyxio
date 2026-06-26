const e=`version: 1\r
magnitudes:\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: Mass\r
  descripcion:\r
    es: Masa del objeto en estudio.\r
    en: Mass of the object under study.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - interpretacion\r
  common_mistake: Confundir m con otra magnitud cercana dentro de interpretacion.\r
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
    - interpretacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: a_in\r
  symbol: a_{in}\r
  nombre:\r
    es: aceleracion_inercial\r
    en: inertial_acceleration\r
  descripcion:\r
    es: Aceleracion observada desde un marco inercial.\r
    en: Acceleration observed from an inertial frame.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - interpretacion\r
  common_mistake: Confundir a_in con otra magnitud cercana dentro de interpretacion.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo o negativo segun el eje elegido. Es la aceleracion absoluta; usarla en el marco no inercial sin correccion es el error de mezcla de marcos mas frecuente.\r
      en: Positive or negative along the chosen axis. It is the absolute acceleration; using it in the non-inertial frame without correction is the most common mixed-frame error.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero implica que el cuerpo se mueve a velocidad constante en el marco inercial.\r
      en: Zero means constant velocity in the inertial frame.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - interpretacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_in con una definicion estable antes de sustituir valores.\r
- id: a_rel\r
  symbol: a_{rel}\r
  nombre:\r
    es: aceleracion_relativa\r
    en: relative_acceleration\r
  descripcion:\r
    es: Aceleracion observada desde el marco no inercial.\r
    en: Acceleration observed from the non-inertial frame.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - interpretacion\r
  common_mistake: Confundir a_rel con otra magnitud cercana dentro de interpretacion.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "Positivo o negativo segun el eje. Criterio de interpretacion clave: si a_rel y a_marco tienen el mismo signo, la fuerza ficticia atenua la aceleracion relativa."\r
      en: "Positive or negative along the axis. Key interpretation criterion: if a_rel and a_marco share the same sign, the fictitious force attenuates the relative acceleration."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero significa que el cuerpo esta en reposo dentro del marco no inercial, con F_res = -F_fict = m*a_marco.\r
      en: Zero means the body is at rest in the non-inertial frame, with F_res = -F_fict = m*a_marco.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - interpretacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_rel con una definicion estable antes de sustituir valores.\r
- id: a_marco\r
  symbol: a_{marco}\r
  nombre:\r
    es: aceleracion_del_marco\r
    en: acceleration_of_the_frame\r
  descripcion:\r
    es: Aceleracion del propio sistema de referencia.\r
    en: Acceleration of the reference frame itself.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - interpretacion\r
  common_mistake: Confundir a_marco con otra magnitud cercana dentro de interpretacion.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo o negativo segun el eje. Determina directamente el signo y modulo de F_fict; es el parametro que define si el marco es inercial o no.\r
      en: Positive or negative along the axis. It directly determines the sign and magnitude of F_fict; it is the parameter that defines whether the frame is inertial or not.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero confirma que el marco es inercial: F_fict = 0 y a_in = a_rel."\r
      en: "Zero confirms the frame is inertial: F_fict = 0 and a_in = a_rel."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - interpretacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_marco con una definicion estable antes de sustituir valores.\r
- id: F_res\r
  symbol: F_{res}\r
  nombre:\r
    es: fuerza_real_resultante\r
    en: resultant_real_force\r
  descripcion:\r
    es: Suma de interacciones fisicas reales en el eje analizado.\r
    en: Sum of the real physical interactions along the analyzed axis.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - interpretacion\r
  common_mistake: Confundir F_res con otra magnitud cercana dentro de interpretacion.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo o negativo segun el eje. Solo incluye fuerzas que corresponden a interacciones fisicas reales (gravedad, normal, tension, friccion); F_fict NO forma parte de F_res.\r
      en: Positive or negative along the axis. Includes only forces corresponding to real physical interactions (gravity, normal, tension, friction); F_fict is NOT part of F_res.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero cuando las fuerzas reales se equilibran; en el marco no inercial el cuerpo aun puede tener a_rel = -a_marco.\r
      en: Zero when real forces balance; in the non-inertial frame the body may still have a_rel = -a_marco.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - interpretacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_res con una definicion estable antes de sustituir valores.\r
- id: F_fict\r
  symbol: F_{fict}\r
  nombre:\r
    es: fuerza_ficticia\r
    en: fictitious_force\r
  descripcion:\r
    es: Termino inercial de correccion al usar marco acelerado.\r
    en: Inertial correction term introduced when an accelerated frame is used.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - interpretacion\r
  common_mistake: Confundir F_fict con otra magnitud cercana dentro de interpretacion.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "Signo opuesto al de a_marco por definicion. Criterio de interpretacion: F_fict siempre apunta en la direccion en que el observador del marco no inercial ve que los objetos tienden a moverse cuando no hay fuerzas reales."\r
      en: "Sign opposite to a_marco by definition. Interpretation criterion: F_fict always points in the direction in which the non-inertial observer sees objects tend to move when no real forces act."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero solo en marco inercial. Si F_fict = 0 pero a_marco != 0, hay un error de modelo.\r
      en: Zero only in an inertial frame. If F_fict = 0 but a_marco != 0, there is a model error.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - interpretacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_fict con una definicion estable antes de sustituir valores.\r
`;export{e as default};
