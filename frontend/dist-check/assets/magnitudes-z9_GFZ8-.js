const n=`version: 1\r
magnitudes:\r
- id: fr\r
  symbol: f_r\r
  nombre:\r
    es: fuerza de rozamiento\r
    en: friction force\r
  unidad_si: N\r
  descripcion:\r
    es: Modulo de la fuerza tangencial que se opone al deslizamiento relativo entre superficies.\r
    en: Magnitude of the tangential force opposing relative sliding between surfaces.\r
  dimension: MLT^{-2}\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir fr con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - rozamiento-y-disipacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: fr debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: mu\r
  symbol: \\mu\r
  nombre:\r
    es: coeficiente de rozamiento\r
    en: coefficient of friction\r
  unidad_si: '1'\r
  descripcion:\r
    es: Parametro adimensional que resume el par de superficies y el regimen de contacto.\r
    en: Dimensionless parameter summarizing the surface pair and contact regime.\r
  dimension: '1'\r
  is_vector: false\r
  components: []\r
  category: base_or_parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir mu con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - rozamiento-y-disipacion\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: mu debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: N\r
  symbol: N\r
  nombre:\r
    es: fuerza normal\r
    en: normal force\r
  unidad_si: N\r
  descripcion:\r
    es: Fuerza de contacto perpendicular a la superficie que fija la escala del rozamiento seco.\r
    en: Contact force perpendicular to the surface that sets the dry-friction scale.\r
  dimension: MLT^{-2}\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir N con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - rozamiento-y-disipacion\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: N debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: d\r
  symbol: d\r
  nombre:\r
    es: distancia de deslizamiento\r
    en: sliding distance\r
  unidad_si: m\r
  descripcion:\r
    es: Longitud recorrida mientras el rozamiento actua contra el movimiento.\r
    en: Distance covered while friction acts against the motion.\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir d con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - rozamiento-y-disipacion\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: d debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: Wr\r
  symbol: W_r\r
  nombre:\r
    es: trabajo del rozamiento\r
    en: work done by friction\r
  unidad_si: J\r
  descripcion:\r
    es: Trabajo mecanico realizado por el rozamiento sobre el sistema elegido; suele ser negativo.\r
    en: Mechanical work performed by friction on the chosen system; it is usually negative.\r
  dimension: ML^2T^{-2}\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir Wr con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo codifica si la magnitud aumenta o reduce la energia mecanica.\r
      en: The sign encodes whether the quantity increases or reduces mechanical energy.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - rozamiento-y-disipacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Wr debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: Edis\r
  symbol: E_{dis}\r
  nombre:\r
    es: energia disipada\r
    en: dissipated energy\r
  unidad_si: J\r
  descripcion:\r
    es: Energia mecanica convertida en calor, sonido o deformaciones microscopicas irreversibles.\r
    en: Mechanical energy converted into heat, sound, or irreversible microscopic deformation.\r
  dimension: ML^2T^{-2}\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir Edis con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - rozamiento-y-disipacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Edis debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  unidad_si: kg\r
  descripcion:\r
    es: Cantidad de materia del cuerpo cuyo peso puede determinar la normal en superficies horizontales.\r
    en: Amount of matter of the body whose weight can set the normal force on horizontal surfaces.\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: base_or_parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir m con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Cero no pertenece al dominio operativo de esta magnitud.\r
      en: Zero is outside the operational domain of this quantity.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - rozamiento-y-disipacion\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: m debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: campo gravitatorio local\r
    en: local gravitational field\r
  unidad_si: m/s^2\r
  descripcion:\r
    es: Intensidad gravitatoria usada para relacionar peso, masa y normal cuando procede.\r
    en: Gravitational field strength used to relate weight, mass, and normal force when appropriate.\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: []\r
  category: base_or_parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir g con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Cero no pertenece al dominio operativo de esta magnitud.\r
      en: Zero is outside the operational domain of this quantity.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - rozamiento-y-disipacion\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: g debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: Emi\r
  symbol: E_{m,i}\r
  nombre:\r
    es: energia mecanica inicial\r
    en: initial mechanical energy\r
  unidad_si: J\r
  descripcion:\r
    es: Energia mecanica del sistema antes del tramo disipativo.\r
    en: Mechanical energy of the system before the dissipative segment.\r
  dimension: ML^2T^{-2}\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir Emi con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - rozamiento-y-disipacion\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Emi debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: Emf\r
  symbol: E_{m,f}\r
  nombre:\r
    es: energia mecanica final\r
    en: final mechanical energy\r
  unidad_si: J\r
  descripcion:\r
    es: Energia mecanica del sistema despues del tramo disipativo.\r
    en: Mechanical energy of the system after the dissipative segment.\r
  dimension: ML^2T^{-2}\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir Emf con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - rozamiento-y-disipacion\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Emf debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: dEm\r
  symbol: \\Delta E_m\r
  nombre:\r
    es: variacion de energia mecanica\r
    en: change in mechanical energy\r
  unidad_si: J\r
  descripcion:\r
    es: Cambio de energia mecanica producido por el trabajo no conservativo del rozamiento.\r
    en: Change in mechanical energy produced by the non-conservative work of friction.\r
  dimension: ML^2T^{-2}\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir dEm con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo codifica si la magnitud aumenta o reduce la energia mecanica.\r
      en: The sign encodes whether the quantity increases or reduces mechanical energy.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - rozamiento-y-disipacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: dEm debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: Pdis\r
  symbol: P_{dis}\r
  nombre:\r
    es: potencia disipada\r
    en: dissipated power\r
  unidad_si: W\r
  descripcion:\r
    es: Ritmo medio al que la energia mecanica se convierte en formas no mecanicas.\r
    en: Average rate at which mechanical energy is converted into non-mechanical forms.\r
  dimension: ML^2T^{-3}\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir Pdis con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero representa ausencia de esa contribucion en el modelo.\r
      en: Zero represents absence of that contribution in the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - rozamiento-y-disipacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Pdis debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: intervalo de tiempo\r
    en: time interval\r
  unidad_si: s\r
  descripcion:\r
    es: Duracion del proceso disipativo usada para calcular potencia media.\r
    en: Duration of the dissipative process used to compute average power.\r
  dimension: T\r
  is_vector: false\r
  components: []\r
  category: base_or_parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - rozamiento-y-disipacion\r
  common_mistake: No confundir t con otra magnitud del balance de rozamiento y disipacion.\r
  typical_range: Context-dependent.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo basico.\r
      en: It is used as a non-negative magnitude in the basic model.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Cero no pertenece al dominio operativo de esta magnitud.\r
      en: Zero is outside the operational domain of this quantity.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - rozamiento-y-disipacion\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: t debe interpretarse dentro del balance de energia y no como simbolo aislado.\r
`;export{n as default};
