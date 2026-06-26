const e=`version: 1\r
magnitudes:\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: Mass\r
  descripcion:\r
    es: Masa del cuerpo. Escala linealmente la fuerza ficticia.\r
    en: Mass of the body. It scales the fictitious force linearly.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - concepto-fuerzas-ficticias\r
  common_mistake: Confundir m con otra magnitud cercana dentro de concepto fuerzas\r
    ficticias.\r
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
    - concepto-fuerzas-ficticias\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: a_marco\r
  symbol: a_{marco}\r
  nombre:\r
    es: aceleracion_del_marco\r
    en: acceleration_of_the_frame\r
  descripcion:\r
    es: Aceleracion del sistema de referencia no inercial.\r
    en: Acceleration of the non-inertial reference frame.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - concepto-fuerzas-ficticias\r
  common_mistake: Confundir a_marco con otra magnitud cercana dentro de concepto fuerzas\r
    ficticias.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo o negativo segun el sentido de la aceleracion del marco respecto al eje elegido.\r
      en: Positive or negative depending on the direction of the frame acceleration relative to the chosen axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero indica que el marco es inercial; la fuerza ficticia desaparece.\r
      en: Zero means the frame is inertial; the fictitious force vanishes.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - concepto-fuerzas-ficticias\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_marco con una definicion estable antes de sustituir valores.\r
- id: F_fict\r
  symbol: F_{fict}\r
  nombre:\r
    es: fuerza_ficticia\r
    en: fictitious_force\r
  descripcion:\r
    es: Termino inercial que compensa el uso de un marco acelerado.\r
    en: Inertial term introduced to compensate for the use of an accelerated frame.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - concepto-fuerzas-ficticias\r
  common_mistake: Confundir F_fict con otra magnitud cercana dentro de concepto fuerzas\r
    ficticias.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo es siempre opuesto al de a_marco por definicion (F_fict = -m*a_marco). Un marco que acelera hacia la derecha produce una fuerza ficticia hacia la izquierda.\r
      en: The sign is always opposite to that of a_marco by definition (F_fict = -m*a_marco). A frame accelerating rightward produces a leftward fictitious force.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero cuando el marco es inercial (a_marco = 0).\r
      en: Zero when the frame is inertial (a_marco = 0).\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - concepto-fuerzas-ficticias\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_fict con una definicion estable antes de sustituir valores.\r
- id: F_res\r
  symbol: F_{res}\r
  nombre:\r
    es: fuerza_real_resultante\r
    en: resultant_real_force\r
  descripcion:\r
    es: Suma de fuerzas de interaccion reales proyectadas en el eje de estudio.\r
    en: Sum of the real interaction forces projected onto the axis of analysis.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - concepto-fuerzas-ficticias\r
  common_mistake: Confundir F_res con otra magnitud cercana dentro de concepto fuerzas\r
    ficticias.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo o negativo segun la proyeccion de las fuerzas reales sobre el eje positivo elegido.\r
      en: Positive or negative according to the projection of real forces onto the chosen positive axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero indica equilibrio de fuerzas reales; la aceleracion relativa es entonces igual a -a_marco (puro efecto de marco).\r
      en: Zero indicates equilibrium of real forces; the relative acceleration then equals -a_marco (pure frame effect).\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - concepto-fuerzas-ficticias\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_res con una definicion estable antes de sustituir valores.\r
- id: a_rel\r
  symbol: a_{rel}\r
  nombre:\r
    es: aceleracion_relativa\r
    en: relative_acceleration\r
  descripcion:\r
    es: Aceleracion observada dentro del marco no inercial.\r
    en: Acceleration observed inside the non-inertial frame.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - concepto-fuerzas-ficticias\r
  common_mistake: Confundir a_rel con otra magnitud cercana dentro de concepto fuerzas\r
    ficticias.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo o negativo segun el eje elegido. Es la aceleracion que mediria un observador dentro del marco acelerado.\r
      en: Positive or negative along the chosen axis. It is the acceleration measured by an observer inside the accelerated frame.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero indica que el cuerpo esta en reposo dentro del marco no inercial, aunque puede estar acelerando en el marco inercial.\r
      en: Zero means the body is at rest within the non-inertial frame, even though it may be accelerating in the inertial frame.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - concepto-fuerzas-ficticias\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_rel con una definicion estable antes de sustituir valores.\r
- id: a_in\r
  symbol: a_{in}\r
  nombre:\r
    es: aceleracion_inercial\r
    en: inertial_acceleration\r
  descripcion:\r
    es: Aceleracion del mismo cuerpo en un marco inercial.\r
    en: Acceleration of the same body measured in an inertial frame.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - concepto-fuerzas-ficticias\r
  common_mistake: Confundir a_in con otra magnitud cercana dentro de concepto fuerzas\r
    ficticias.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo o negativo segun el eje elegido. Es la aceleracion absoluta, la que aparece en la Segunda Ley de Newton con solo fuerzas reales.\r
      en: Positive or negative along the chosen axis. It is the absolute acceleration appearing in Newton's Second Law with real forces only.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero indica que el cuerpo se mueve a velocidad constante en el marco inercial.\r
      en: Zero means the body moves at constant velocity in the inertial frame.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - concepto-fuerzas-ficticias\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_in con una definicion estable antes de sustituir valores.\r
`;export{e as default};
