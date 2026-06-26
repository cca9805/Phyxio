const n=`version: 1\r
magnitudes:\r
- id: omega\r
  symbol: \\Omega\r
  nombre:\r
    es: velocidad_angular_del_marco\r
    en: angular_velocity_of_the_frame\r
  descripcion:\r
    es: Velocidad angular del marco rotatorio (por ejemplo, la Tierra).\r
    en: Angular speed of the rotating frame, for example Earth.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aplicaciones-fisicas\r
  common_mistake: Confundir omega con otra magnitud cercana dentro de aplicaciones\r
    fisicas.\r
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
    - aplicaciones-fisicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega con una definicion estable antes de sustituir valores.\r
- id: v_rel\r
  symbol: v_{rel}\r
  nombre:\r
    es: velocidad_relativa\r
    en: relative_velocity\r
  descripcion:\r
    es: Velocidad del movil respecto al marco de referencia.\r
    en: Speed of the body relative to the frame of reference.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aplicaciones-fisicas\r
  common_mistake: Confundir v_rel con otra magnitud cercana dentro de aplicaciones\r
    fisicas.\r
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
    - aplicaciones-fisicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v_rel con una definicion estable antes de sustituir valores.\r
- id: alpha\r
  symbol: \\alpha\r
  nombre:\r
    es: angulo_entre_omega_y_v\r
    en: angle_between_omega_and_v\r
  descripcion:\r
    es: Angulo local entre direccion de rotacion y movimiento.\r
    en: Local angle between the direction of rotation and the motion.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aplicaciones-fisicas\r
  common_mistake: Confundir alpha con otra magnitud cercana dentro de aplicaciones\r
    fisicas.\r
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
    - aplicaciones-fisicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar alpha con una definicion estable antes de sustituir valores.\r
- id: a_cor\r
  symbol: a_{cor}\r
  nombre:\r
    es: aceleracion_coriolis\r
    en: acceleration_coriolis\r
  descripcion:\r
    es: Aceleracion lateral que produce desviacion de trayectoria.\r
    en: Lateral acceleration that produces trajectory deflection.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aplicaciones-fisicas\r
  common_mistake: Confundir a_cor con otra magnitud cercana dentro de aplicaciones\r
    fisicas.\r
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
    - aplicaciones-fisicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_cor con una definicion estable antes de sustituir valores.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: Mass\r
  descripcion:\r
    es: Masa del sistema, necesaria para pasar de aceleracion a fuerza.\r
    en: Mass of the system, required to convert acceleration into force.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - aplicaciones-fisicas\r
  common_mistake: Confundir m con otra magnitud cercana dentro de aplicaciones fisicas.\r
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
    - aplicaciones-fisicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: F_cor\r
  symbol: F_{cor}\r
  nombre:\r
    es: fuerza_coriolis\r
    en: force_coriolis\r
  descripcion:\r
    es: Fuerza equivalente asociada al termino de Coriolis.\r
    en: Equivalent force associated with the Coriolis term.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aplicaciones-fisicas\r
  common_mistake: Confundir F_cor con otra magnitud cercana dentro de aplicaciones\r
    fisicas.\r
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
    - aplicaciones-fisicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_cor con una definicion estable antes de sustituir valores.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: Time\r
  descripcion:\r
    es: Tiempo de evolucion para estimar desviacion acumulada.\r
    en: Time interval used to estimate accumulated deflection.\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aplicaciones-fisicas\r
  common_mistake: Confundir t con otra magnitud cercana dentro de aplicaciones fisicas.\r
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
    - aplicaciones-fisicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar t con una definicion estable antes de sustituir valores.\r
- id: y\r
  symbol: y\r
  nombre:\r
    es: desvio_lateral\r
    en: lateral_drift\r
  descripcion:\r
    es: Desplazamiento lateral aproximado debido a Coriolis.\r
    en: Approximate lateral displacement caused by Coriolis.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - aplicaciones-fisicas\r
  common_mistake: Confundir y con otra magnitud cercana dentro de aplicaciones fisicas.\r
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
    - aplicaciones-fisicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar y con una definicion estable antes de sustituir valores.\r
`;export{n as default};
