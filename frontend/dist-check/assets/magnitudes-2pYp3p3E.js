const e=`version: 1\r
magnitudes:\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Inercia del sistema analizado.\r
    en: Inertia of the chosen system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir m con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: a\r
  symbol: \\vec a\r
  nombre:\r
    es: aceleracion_vectorial\r
    en: vector_acceleration\r
  descripcion:\r
    es: Aceleración del sistema en el marco elegido.\r
    en: Acceleration of the system in the chosen reference frame.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: true\r
  components:\r
  - a_x\r
  - a_y\r
  category: derived\r
  physical_role: frame_effect\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir a con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a con una definicion estable antes de sustituir valores.\r
- id: ax\r
  symbol: a_x\r
  nombre:\r
    es: aceleracion_x\r
    en: x_acceleration\r
  descripcion:\r
    es: Componente de la aceleración en eje x.\r
    en: Component of the acceleration along the x-axis.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir ax con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar ax con una definicion estable antes de sustituir valores.\r
- id: ay\r
  symbol: a_y\r
  nombre:\r
    es: aceleracion_y\r
    en: y_acceleration\r
  descripcion:\r
    es: Componente de la aceleración en eje y.\r
    en: Component of the acceleration along the y-axis.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir ay con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar ay con una definicion estable antes de sustituir valores.\r
- id: Fext\r
  symbol: \\sum \\vec F_{ext}\r
  nombre:\r
    es: fuerza_neta_externa\r
    en: net_external_force\r
  descripcion:\r
    es: Suma vectorial de fuerzas externas sobre el sistema.\r
    en: Vector sum of the external forces acting on the system.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - Fext_x\r
  - Fext_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir Fext con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Fext con una definicion estable antes de sustituir valores.\r
- id: Fx\r
  symbol: F_x\r
  nombre:\r
    es: fuerza_neta_x\r
    en: x_net_force\r
  descripcion:\r
    es: Componente en eje x de la fuerza neta externa.\r
    en: x-component of the net external force.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir Fx con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Fx con una definicion estable antes de sustituir valores.\r
- id: Fy\r
  symbol: F_y\r
  nombre:\r
    es: fuerza_neta_y\r
    en: y_net_force\r
  descripcion:\r
    es: Componente en eje y de la fuerza neta externa.\r
    en: y-component of the net external force.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir Fy con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Fy con una definicion estable antes de sustituir valores.\r
- id: P\r
  symbol: P\r
  nombre:\r
    es: peso\r
    en: weight\r
  descripcion:\r
    es: Fuerza gravitatoria sobre el cuerpo.\r
    en: Gravitational force acting on the body.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - P_x\r
  - P_y\r
  category: derived\r
  physical_role: gravitational_force\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir P con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar P con una definicion estable antes de sustituir valores.\r
- id: N\r
  symbol: N\r
  nombre:\r
    es: normal\r
    en: normal_force\r
  descripcion:\r
    es: Reacción de contacto perpendicular a la superficie.\r
    en: Contact force perpendicular to the surface.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - N_x\r
  - N_y\r
  category: derived\r
  physical_role: contact_force\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir N con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar N con una definicion estable antes de sustituir valores.\r
- id: T\r
  symbol: T\r
  nombre:\r
    es: tension\r
    en: tension\r
  descripcion:\r
    es: Fuerza transmitida por una cuerda, cable o elemento ideal traccionado.\r
    en: Force transmitted by a rope, cable, or ideal member under tension.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - T_x\r
  - T_y\r
  category: derived\r
  physical_role: tension_force\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir T con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar T con una definicion estable antes de sustituir valores.\r
- id: fk\r
  symbol: f_k\r
  nombre:\r
    es: rozamiento_cinetico\r
    en: kinetic_friction\r
  descripcion:\r
    es: Fuerza de fricción durante deslizamiento.\r
    en: Friction force during relative sliding.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir fk con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fk con una definicion estable antes de sustituir valores.\r
- id: fs\r
  symbol: f_s\r
  nombre:\r
    es: rozamiento_estatico\r
    en: static_friction\r
  descripcion:\r
    es: Fuerza de fricción sin deslizamiento relativo.\r
    en: Friction force when there is no relative slipping.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir fs con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fs con una definicion estable antes de sustituir valores.\r
- id: mu_k\r
  symbol: \\mu_k\r
  nombre:\r
    es: coef_rozamiento_cinetico\r
    en: coefficient_of_kinetic_friction\r
  descripcion:\r
    es: Coeficiente adimensional de fricción cinética.\r
    en: Dimensionless coefficient of kinetic friction.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: model_parameter\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir mu_k con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mu_k con una definicion estable antes de sustituir valores.\r
- id: mu_s\r
  symbol: \\mu_s\r
  nombre:\r
    es: coef_rozamiento_estatico\r
    en: coefficient_of_static_friction\r
  descripcion:\r
    es: Coeficiente adimensional de fricción estática.\r
    en: Dimensionless coefficient of static friction.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: model_parameter\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir mu_s con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mu_s con una definicion estable antes de sustituir valores.\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: angulo\r
    en: angle\r
  descripcion:\r
    es: Ángulo usado para proyectar fuerzas.\r
    en: Angle used to resolve forces on chosen axes.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir theta con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar theta con una definicion estable antes de sustituir valores.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: gravedad\r
    en: gravitational_acceleration\r
  descripcion:\r
    es: Aceleración local de la gravedad.\r
    en: Local gravitational acceleration.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: field\r
  physical_role: field_strength\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir g con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar g con una definicion estable antes de sustituir valores.\r
- id: Ppar\r
  symbol: P_{\\parallel}\r
  nombre:\r
    es: componente_paralela_del_peso\r
    en: parallel_weight_component\r
  descripcion:\r
    es: Componente del peso paralela al plano inclinado o al eje tangencial elegido.\r
    en: Weight component parallel to the incline or to the chosen tangential axis.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir Ppar con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Ppar con una definicion estable antes de sustituir valores.\r
- id: Pperp\r
  symbol: P_{\\perp}\r
  nombre:\r
    es: componente_perpendicular_del_peso\r
    en: perpendicular_weight_component\r
  descripcion:\r
    es: Componente del peso perpendicular al plano inclinado o al eje normal elegido.\r
    en: Weight component perpendicular to the incline or to the chosen normal axis.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  common_mistake: Confundir Pperp con otra magnitud cercana dentro de diagramas cuerpo\r
    libre.\r
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
    - diagramas-cuerpo-libre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Pperp con una definicion estable antes de sustituir valores.\r
`;export{e as default};
