const e=`version: 1\r
magnitudes:\r
- id: V\r
  symbol: V\r
  nombre:\r
    es: Tensión de red\r
    en: Network voltage\r
  descripcion:\r
    es: Tensión nominal de suministro de la red (230 V en Europa). Actúa como fuente de tensión constante.\r
    en: Nominal supply voltage of the network (230 V in Europe). Acts as a constant voltage source.\r
  unidad_si: V\r
  dimension: M L^2 T^-3 I^-1\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes.yaml\r
  - formulas.yaml\r
  - interpretacion.yaml\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  - aplicaciones.md\r
  - aplicaciones.en.md\r
  common_mistake:\r
    es: Usar V con una interpretación que no corresponde al modelo declarado.\r
    en: Using V with an interpretation that does not match the declared model.\r
  typical_range:\r
    es: Depende del contexto físico y de las condiciones del modelo.\r
    en: Depends on the physical context and on the model assumptions.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende de la convención elegida cuando procede.\r
      en: The sign depends on the chosen convention when relevant.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa ausencia o umbral nulo de esta magnitud dentro del modelo.\r
      en: A zero value represents absence or a null threshold of this quantity within the model.\r
  value_nature: scalar\r
  interpretation_role: core\r
  graph_binding:\r
    enabled: false\r
    channels: []\r
  pedagogical_notes:\r
    es: Debe conectarse con la pregunta física central y no tratarse como símbolo decorativo.\r
    en: It must be connected to the central physical question, not treated as a decorative symbol.\r
- id: f\r
  symbol: f\r
  nombre:\r
    es: Frecuencia de red\r
    en: Network frequency\r
  descripcion:\r
    es: Frecuencia de la corriente alterna (50 Hz en Europa). Caracteriza el suministro pero no interviene en cálculos\r
      del modelo resistivo.\r
    en: AC frequency (50 Hz in Europe). Characterises the supply but does not participate in resistive model calculations.\r
  unidad_si: Hz\r
  dimension: T^-1\r
  is_vector: false\r
  components: null\r
  category: contextual\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes.yaml\r
  - teoria.md\r
  - teoria.en.md\r
  common_mistake:\r
    es: Usar f con una interpretación que no corresponde al modelo declarado.\r
    en: Using f with an interpretation that does not match the declared model.\r
  typical_range:\r
    es: Depende del contexto físico y de las condiciones del modelo.\r
    en: Depends on the physical context and on the model assumptions.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convención elegida cuando procede.\r
      en: The sign depends on the chosen convention when relevant.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa ausencia o umbral nulo de esta magnitud dentro del modelo.\r
      en: A zero value represents absence or a null threshold of this quantity within the model.\r
  value_nature: scalar\r
  interpretation_role: contextual\r
  graph_binding:\r
    enabled: false\r
    channels: []\r
  pedagogical_notes:\r
    es: Debe conectarse con la pregunta física central y no tratarse como símbolo decorativo.\r
    en: It must be connected to the central physical question, not treated as a decorative symbol.\r
- id: I_tot\r
  symbol: I_{\\mathrm{tot}}\r
  nombre:\r
    es: Corriente total de línea\r
    en: Total line current\r
  descripcion:\r
    es: Corriente total demandada por todos los receptores conectados. Es la magnitud que vigila el magnetotérmico.\r
    en: Total current drawn by all connected loads. It is the quantity monitored by the MCB.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes.yaml\r
  - formulas.yaml\r
  - interpretacion.yaml\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  - aplicaciones.md\r
  - aplicaciones.en.md\r
  common_mistake:\r
    es: Usar I_tot con una interpretación que no corresponde al modelo declarado.\r
    en: Using I_tot with an interpretation that does not match the declared model.\r
  typical_range:\r
    es: Depende del contexto físico y de las condiciones del modelo.\r
    en: Depends on the physical context and on the model assumptions.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende de la convención elegida cuando procede.\r
      en: The sign depends on the chosen convention when relevant.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa ausencia o umbral nulo de esta magnitud dentro del modelo.\r
      en: A zero value represents absence or a null threshold of this quantity within the model.\r
  value_nature: scalar\r
  interpretation_role: core\r
  graph_binding:\r
    enabled: true\r
    channels:\r
    - coord_x_i_tot\r
  pedagogical_notes:\r
    es: Debe conectarse con la pregunta física central y no tratarse como símbolo decorativo.\r
    en: It must be connected to the central physical question, not treated as a decorative symbol.\r
- id: P_tot\r
  symbol: P_{\\mathrm{tot}}\r
  nombre:\r
    es: Potencia total conectada\r
    en: Total connected power\r
  descripcion:\r
    es: Potencia activa total consumida por todos los receptores. Es el dato de partida para calcular la corriente.\r
    en: Total active power consumed by all loads. It is the starting point for calculating current.\r
  unidad_si: W\r
  dimension: M L^2 T^-3\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes.yaml\r
  - formulas.yaml\r
  - interpretacion.yaml\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  - aplicaciones.md\r
  - aplicaciones.en.md\r
  common_mistake:\r
    es: Usar P_tot con una interpretación que no corresponde al modelo declarado.\r
    en: Using P_tot with an interpretation that does not match the declared model.\r
  typical_range:\r
    es: Depende del contexto físico y de las condiciones del modelo.\r
    en: Depends on the physical context and on the model assumptions.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende de la convención elegida cuando procede.\r
      en: The sign depends on the chosen convention when relevant.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa ausencia o umbral nulo de esta magnitud dentro del modelo.\r
      en: A zero value represents absence or a null threshold of this quantity within the model.\r
  value_nature: scalar\r
  interpretation_role: core\r
  graph_binding:\r
    enabled: true\r
    channels:\r
    - coord_p_tot\r
  pedagogical_notes:\r
    es: Debe conectarse con la pregunta física central y no tratarse como símbolo decorativo.\r
    en: It must be connected to the central physical question, not treated as a decorative symbol.\r
- id: I_max\r
  symbol: I_{\\max}\r
  nombre:\r
    es: Corriente máxima del circuito\r
    en: Maximum circuit current\r
  descripcion:\r
    es: Corriente máxima nominal del circuito, determinada por el calibre del magnetotérmico (p. ej. 16 A, 20 A,\r
      25 A).\r
    en: Nominal maximum current of the circuit, determined by the MCB rating (e.g. 16 A, 20 A, 25 A).\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes.yaml\r
  - formulas.yaml\r
  - interpretacion.yaml\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  - aplicaciones.md\r
  - aplicaciones.en.md\r
  common_mistake:\r
    es: Usar I_max con una interpretación que no corresponde al modelo declarado.\r
    en: Using I_max with an interpretation that does not match the declared model.\r
  typical_range:\r
    es: Depende del contexto físico y de las condiciones del modelo.\r
    en: Depends on the physical context and on the model assumptions.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende de la convención elegida cuando procede.\r
      en: The sign depends on the chosen convention when relevant.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa ausencia o umbral nulo de esta magnitud dentro del modelo.\r
      en: A zero value represents absence or a null threshold of this quantity within the model.\r
  value_nature: scalar\r
  interpretation_role: core\r
  graph_binding:\r
    enabled: true\r
    channels:\r
    - coord_threshold_i_max\r
  pedagogical_notes:\r
    es: Debe conectarse con la pregunta física central y no tratarse como símbolo decorativo.\r
    en: It must be connected to the central physical question, not treated as a decorative symbol.\r
- id: margen_uso\r
  symbol: \\eta_I\r
  nombre:\r
    es: Margen de uso del circuito\r
    en: Circuit usage margin\r
  descripcion:\r
    es: Fracción adimensional de la capacidad del circuito utilizada (I_tot / I_max). Indica el riesgo de sobrecarga.\r
    en: Dimensionless fraction of circuit capacity used (I_tot / I_max). Indicates overload risk.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - magnitudes.yaml\r
  - formulas.yaml\r
  - interpretacion.yaml\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  - aplicaciones.md\r
  - aplicaciones.en.md\r
  common_mistake:\r
    es: Usar margen_uso con una interpretación que no corresponde al modelo declarado.\r
    en: Using margen_uso with an interpretation that does not match the declared model.\r
  typical_range:\r
    es: Depende del contexto físico y de las condiciones del modelo.\r
    en: Depends on the physical context and on the model assumptions.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convención elegida cuando procede.\r
      en: The sign depends on the chosen convention when relevant.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa ausencia o umbral nulo de esta magnitud dentro del modelo.\r
      en: A zero value represents absence or a null threshold of this quantity within the model.\r
  value_nature: scalar\r
  interpretation_role: core\r
  graph_binding:\r
    enabled: true\r
    channels:\r
    - coord_y_margen_uso\r
  pedagogical_notes:\r
    es: Debe conectarse con la pregunta física central y no tratarse como símbolo decorativo.\r
    en: It must be connected to the central physical question, not treated as a decorative symbol.\r
`;export{e as default};
