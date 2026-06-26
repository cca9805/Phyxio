const e=`version: 1\r
magnitudes:\r
- id: rho\r
  symbol: rho\r
  nombre:\r
    es: densidad_del_fluido\r
    en: Fluid density\r
  descripcion:\r
    es: Densidad del fluido.\r
    en: Fluid density.\r
  unidad_si: kg/m^3\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  common_mistake: Confundir rho con otra magnitud cercana dentro de numero de reynolds\r
    y regimenes de arrastre.\r
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
    - numero-de-reynolds-y-regimenes-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar rho con una definicion estable antes de sustituir valores.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad\r
    en: Velocity\r
  descripcion:\r
    es: Velocidad caracteristica del flujo o del cuerpo.\r
    en: Characteristic flow or body speed.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  common_mistake: Confundir v con otra magnitud cercana dentro de numero de reynolds\r
    y regimenes de arrastre.\r
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
    - numero-de-reynolds-y-regimenes-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.\r
- id: L\r
  symbol: L\r
  nombre:\r
    es: longitud_caracteristica\r
    en: Characteristic length\r
  descripcion:\r
    es: Escala geometrica relevante del problema.\r
    en: Relevant geometric scale of the problem.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  common_mistake: Confundir L con otra magnitud cercana dentro de numero de reynolds\r
    y regimenes de arrastre.\r
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
    - numero-de-reynolds-y-regimenes-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar L con una definicion estable antes de sustituir valores.\r
- id: eta\r
  symbol: eta\r
  nombre:\r
    es: viscosidad_dinamica\r
    en: Dynamic viscosity\r
  descripcion:\r
    es: Viscosidad dinamica del fluido.\r
    en: Dynamic viscosity of the fluid.\r
  unidad_si: Pa*s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  common_mistake: Confundir eta con otra magnitud cercana dentro de numero de reynolds\r
    y regimenes de arrastre.\r
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
    - numero-de-reynolds-y-regimenes-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar eta con una definicion estable antes de sustituir valores.\r
- id: nu\r
  symbol: nu\r
  nombre:\r
    es: viscosidad_cinematica\r
    en: Kinematic viscosity\r
  descripcion:\r
    es: Viscosidad cinematica del fluido.\r
    en: Kinematic viscosity of the fluid.\r
  unidad_si: m^2/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  common_mistake: Confundir nu con otra magnitud cercana dentro de numero de reynolds\r
    y regimenes de arrastre.\r
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
    - numero-de-reynolds-y-regimenes-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar nu con una definicion estable antes de sustituir valores.\r
- id: Re\r
  symbol: Re\r
  nombre:\r
    es: numero_de_reynolds\r
    en: Reynolds number\r
  descripcion:\r
    es: Cociente entre efectos inerciales y viscosos.\r
    en: Ratio between inertial and viscous effects.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  common_mistake: Confundir Re con otra magnitud cercana dentro de numero de reynolds\r
    y regimenes de arrastre.\r
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
    - numero-de-reynolds-y-regimenes-de-arrastre\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Re con una definicion estable antes de sustituir valores.\r
`;export{e as default};
