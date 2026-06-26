const n=`version: 5\r
magnitudes:\r
- id: A\r
  symbol: A\r
  nombre:\r
    es: observable\r
    en: observable\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Magnitud dinamica definida en espacio de fases.\r
    en: Dynamical quantity defined on phase space.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: A\r
  used_in:\r
  - definicion_corchete_poisson\r
  - evolucion_temporal_poisson\r
  - conservacion_por_poisson\r
  - corchete_canonico_fundamental\r
  common_mistake: Usar A sin revisar el dominio fisico del modelo.\r
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
    - corchetes-de-poisson\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: A debe leerse dentro del formalismo del leaf.\r
- id: B\r
  symbol: B\r
  nombre:\r
    es: observable auxiliar\r
    en: auxiliary observable\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Segunda magnitud usada para medir compatibilidad canonica.\r
    en: Second quantity used to measure canonical compatibility.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: B\r
  used_in:\r
  - definicion_corchete_poisson\r
  - evolucion_temporal_poisson\r
  - conservacion_por_poisson\r
  - corchete_canonico_fundamental\r
  common_mistake: Usar B sin revisar el dominio fisico del modelo.\r
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
    - corchetes-de-poisson\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: B debe leerse dentro del formalismo del leaf.\r
- id: PB\r
  symbol: '{A,B}'\r
  nombre:\r
    es: corchete de Poisson\r
    en: Poisson bracket\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Operacion bilineal que mide la respuesta cruzada entre dos observables.\r
    en: Bilinear operation measuring cross-response between two observables.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: PB\r
  used_in:\r
  - definicion_corchete_poisson\r
  - evolucion_temporal_poisson\r
  - conservacion_por_poisson\r
  - corchete_canonico_fundamental\r
  common_mistake: Usar PB sin revisar el dominio fisico del modelo.\r
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
    - corchetes-de-poisson\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: PB debe leerse dentro del formalismo del leaf.\r
- id: qi\r
  symbol: q_i\r
  nombre:\r
    es: coordenada canonica\r
    en: canonical coordinate\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Coordenada de configuracion usada en el espacio de fases.\r
    en: Configuration coordinate used in phase space.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: qi\r
  used_in:\r
  - definicion_corchete_poisson\r
  - evolucion_temporal_poisson\r
  - conservacion_por_poisson\r
  - corchete_canonico_fundamental\r
  common_mistake: Usar qi sin revisar el dominio fisico del modelo.\r
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
    - corchetes-de-poisson\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: qi debe leerse dentro del formalismo del leaf.\r
- id: pi\r
  symbol: p_i\r
  nombre:\r
    es: momento canonico\r
    en: canonical momentum\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Momento conjugado asociado a la coordenada canonica.\r
    en: Conjugate momentum associated with the canonical coordinate.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: pi\r
  used_in:\r
  - definicion_corchete_poisson\r
  - evolucion_temporal_poisson\r
  - conservacion_por_poisson\r
  - corchete_canonico_fundamental\r
  common_mistake: Usar pi sin revisar el dominio fisico del modelo.\r
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
    - corchetes-de-poisson\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: pi debe leerse dentro del formalismo del leaf.\r
- id: H\r
  symbol: H\r
  nombre:\r
    es: hamiltoniano\r
    en: Hamiltonian\r
  unidad_si: J\r
  descripcion:\r
    es: Funcion generadora de la evolucion temporal.\r
    en: Function generating time evolution.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: H\r
  used_in:\r
  - definicion_corchete_poisson\r
  - evolucion_temporal_poisson\r
  - conservacion_por_poisson\r
  - corchete_canonico_fundamental\r
  common_mistake: Usar H sin revisar el dominio fisico del modelo.\r
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
    - corchetes-de-poisson\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: H debe leerse dentro del formalismo del leaf.\r
- id: dA_dt\r
  symbol: dA/dt\r
  nombre:\r
    es: evolucion temporal de A\r
    en: time evolution of A\r
  unidad_si: context-dependent/s\r
  descripcion:\r
    es: Ritmo de cambio de un observable.\r
    en: Rate of change of an observable.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: dA_dt\r
  used_in:\r
  - definicion_corchete_poisson\r
  - evolucion_temporal_poisson\r
  - conservacion_por_poisson\r
  - corchete_canonico_fundamental\r
  common_mistake: Usar dA_dt sin revisar el dominio fisico del modelo.\r
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
    - corchetes-de-poisson\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: dA_dt debe leerse dentro del formalismo del leaf.\r
`;export{n as default};
