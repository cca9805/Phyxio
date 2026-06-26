const e=`\uFEFFversion: 1\r
magnitudes:\r
- id: F_d\r
  symbol: F_d\r
  nombre:\r
    es: fuerza de arrastre
    en: Drag force\r
  descripcion:\r
    es: Fuerza de resistencia ejercida por el fluido.\r
    en: Resistive force exerted by the fluid.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-arrastre\r
  common_mistake: Confundir F_d con otra magnitud cercana dentro de coeficiente de\r
    arrastre.\r
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
    - coeficiente-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar F_d con una definicion estable antes de sustituir valores.\r
- id: C_d\r
  symbol: C_d\r
  nombre:\r
    es: coeficiente_de_arrastre\r
    en: Drag coefficient\r
  descripcion:\r
    es: Parametro adimensional asociado a la forma del cuerpo.\r
    en: Dimensionless parameter associated with body shape.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-arrastre\r
  common_mistake: Confundir C_d con otra magnitud cercana dentro de coeficiente de\r
    arrastre.\r
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
    - coeficiente-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar C_d con una definicion estable antes de sustituir valores.\r
- id: rho\r
  symbol: rho\r
  nombre:\r
    es: densidad_del_fluido\r
    en: Fluid density\r
  descripcion:\r
    es: Densidad del fluido.\r
    en: Density of the fluid.\r
  unidad_si: kg/m^3\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-arrastre\r
  common_mistake: Confundir rho con otra magnitud cercana dentro de coeficiente de\r
    arrastre.\r
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
    - coeficiente-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar rho con una definicion estable antes de sustituir valores.\r
- id: A\r
  symbol: A\r
  nombre:\r
    es: area_frontal\r
    en: Frontal area\r
  descripcion:\r
    es: Area frontal expuesta al flujo.\r
    en: Frontal area exposed to the flow.\r
  unidad_si: m^2\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-arrastre\r
  common_mistake: Confundir A con otra magnitud cercana dentro de coeficiente de arrastre.\r
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
    - coeficiente-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar A con una definicion estable antes de sustituir valores.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad\r
    en: Velocity\r
  descripcion:\r
    es: Rapidez relativa respecto al fluido.\r
    en: Speed relative to the fluid.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-arrastre\r
  common_mistake: Confundir v con otra magnitud cercana dentro de coeficiente de arrastre.\r
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
    - coeficiente-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.\r
- id: P_d\r
  symbol: P_d\r
  nombre:\r
    es: potencia_disipada_por_arrastre\r
    en: Power dissipated by drag\r
  descripcion:\r
    es: Potencia necesaria para vencer el arrastre.\r
    en: Power required to overcome drag.\r
  unidad_si: W\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - coeficiente-de-arrastre\r
  common_mistake: Confundir P_d con otra magnitud cercana dentro de coeficiente de\r
    arrastre.\r
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
    - coeficiente-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar P_d con una definicion estable antes de sustituir valores.\r
\r
`;export{e as default};
