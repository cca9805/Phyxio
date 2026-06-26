const n=`version: 5\r
magnitudes:\r
- id: q\r
  symbol: q_i\r
  nombre:\r
    es: coordenada antigua\r
    en: old coordinate\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Coordenada canonica original.\r
    en: Original canonical coordinate.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: q\r
  used_in:\r
  - relacion_generatriz_tipo2\r
  - coordenada_nueva_generatriz\r
  - hamiltoniano_transformado\r
  - condicion_canonica_poisson\r
  common_mistake: Usar q sin revisar el dominio fisico del modelo.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Depende de la convencion elegida.\r
      en: It depends on the chosen convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede representar un caso limite o una referencia.\r
      en: It may represent a limiting case or reference.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - transformaciones-canonicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: q debe leerse dentro del formalismo del leaf.\r
- id: p\r
  symbol: p_i\r
  nombre:\r
    es: momento antiguo\r
    en: old momentum\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Momento canonico original.\r
    en: Original canonical momentum.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: p\r
  used_in:\r
  - relacion_generatriz_tipo2\r
  - coordenada_nueva_generatriz\r
  - hamiltoniano_transformado\r
  - condicion_canonica_poisson\r
  common_mistake: Usar p sin revisar el dominio fisico del modelo.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Depende de la convencion elegida.\r
      en: It depends on the chosen convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede representar un caso limite o una referencia.\r
      en: It may represent a limiting case or reference.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - transformaciones-canonicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: p debe leerse dentro del formalismo del leaf.\r
- id: Q\r
  symbol: Q_i\r
  nombre:\r
    es: coordenada nueva\r
    en: new coordinate\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Coordenada tras la transformacion.\r
    en: Coordinate after transformation.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: Q\r
  used_in:\r
  - relacion_generatriz_tipo2\r
  - coordenada_nueva_generatriz\r
  - hamiltoniano_transformado\r
  - condicion_canonica_poisson\r
  common_mistake: Usar Q sin revisar el dominio fisico del modelo.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Depende de la convencion elegida.\r
      en: It depends on the chosen convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede representar un caso limite o una referencia.\r
      en: It may represent a limiting case or reference.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - transformaciones-canonicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Q debe leerse dentro del formalismo del leaf.\r
- id: P\r
  symbol: P_i\r
  nombre:\r
    es: momento nuevo\r
    en: new momentum\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Momento tras la transformacion.\r
    en: Momentum after transformation.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: P\r
  used_in:\r
  - relacion_generatriz_tipo2\r
  - coordenada_nueva_generatriz\r
  - hamiltoniano_transformado\r
  - condicion_canonica_poisson\r
  common_mistake: Usar P sin revisar el dominio fisico del modelo.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Depende de la convencion elegida.\r
      en: It depends on the chosen convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede representar un caso limite o una referencia.\r
      en: It may represent a limiting case or reference.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - transformaciones-canonicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: P debe leerse dentro del formalismo del leaf.\r
- id: K\r
  symbol: K\r
  nombre:\r
    es: hamiltoniano transformado\r
    en: transformed Hamiltonian\r
  unidad_si: J\r
  descripcion:\r
    es: Hamiltoniano escrito en las nuevas variables.\r
    en: Hamiltonian written in new variables.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: K\r
  used_in:\r
  - relacion_generatriz_tipo2\r
  - coordenada_nueva_generatriz\r
  - hamiltoniano_transformado\r
  - condicion_canonica_poisson\r
  common_mistake: Usar K sin revisar el dominio fisico del modelo.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Depende de la convencion elegida.\r
      en: It depends on the chosen convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede representar un caso limite o una referencia.\r
      en: It may represent a limiting case or reference.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - transformaciones-canonicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: K debe leerse dentro del formalismo del leaf.\r
- id: Fgen\r
  symbol: F\r
  nombre:\r
    es: funcion generatriz\r
    en: generating function\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Funcion que define la transformacion canonica.\r
    en: Function defining the canonical transformation.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: Fgen\r
  used_in:\r
  - relacion_generatriz_tipo2\r
  - coordenada_nueva_generatriz\r
  - hamiltoniano_transformado\r
  - condicion_canonica_poisson\r
  common_mistake: Usar Fgen sin revisar el dominio fisico del modelo.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Depende de la convencion elegida.\r
      en: It depends on the chosen convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede representar un caso limite o una referencia.\r
      en: It may represent a limiting case or reference.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - transformaciones-canonicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Fgen debe leerse dentro del formalismo del leaf.\r
- id: C\r
  symbol: C\r
  nombre:\r
    es: condicion canonica\r
    en: canonical condition\r
  unidad_si: dimensionless\r
  descripcion:\r
    es: Indicador de preservacion de estructura canonica.\r
    en: Indicator of canonical-structure preservation.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: C\r
  used_in:\r
  - relacion_generatriz_tipo2\r
  - coordenada_nueva_generatriz\r
  - hamiltoniano_transformado\r
  - condicion_canonica_poisson\r
  common_mistake: Usar C sin revisar el dominio fisico del modelo.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Depende de la convencion elegida.\r
      en: It depends on the chosen convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede representar un caso limite o una referencia.\r
      en: It may represent a limiting case or reference.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - transformaciones-canonicas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: C debe leerse dentro del formalismo del leaf.\r
`;export{n as default};
