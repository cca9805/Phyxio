const e=`version: 5\r
magnitudes:\r
- id: eta\r
  symbol: eta_i\r
  nombre:\r
    es: desplazamiento pequeno\r
    en: small displacement\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Separacion respecto del equilibrio.\r
    en: Separation from equilibrium.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: eta\r
  used_in:\r
  - ecuacion_linealizada\r
  - problema_autovalores_modal\r
  - solucion_superposicion_modal\r
  - ortogonalidad_modal\r
  common_mistake: Usar eta sin revisar el dominio fisico del modelo.\r
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
    - pequenas-oscilaciones-y-modos-normales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: eta debe leerse dentro del formalismo del leaf.\r
- id: M\r
  symbol: M\r
  nombre:\r
    es: matriz de masa\r
    en: mass matrix\r
  unidad_si: kg\r
  descripcion:\r
    es: Matriz que pondera la inercia linealizada.\r
    en: Matrix weighting linearized inertia.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: M\r
  used_in:\r
  - ecuacion_linealizada\r
  - problema_autovalores_modal\r
  - solucion_superposicion_modal\r
  - ortogonalidad_modal\r
  common_mistake: Usar M sin revisar el dominio fisico del modelo.\r
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
    - pequenas-oscilaciones-y-modos-normales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: M debe leerse dentro del formalismo del leaf.\r
- id: K\r
  symbol: K\r
  nombre:\r
    es: matriz de rigidez\r
    en: stiffness matrix\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Matriz cuadratica del potencial cerca del equilibrio.\r
    en: Quadratic matrix of potential near equilibrium.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: K\r
  used_in:\r
  - ecuacion_linealizada\r
  - problema_autovalores_modal\r
  - solucion_superposicion_modal\r
  - ortogonalidad_modal\r
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
    - pequenas-oscilaciones-y-modos-normales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: K debe leerse dentro del formalismo del leaf.\r
- id: omega\r
  symbol: omega\r
  nombre:\r
    es: frecuencia normal\r
    en: normal frequency\r
  unidad_si: rad/s\r
  descripcion:\r
    es: Frecuencia propia de un modo normal.\r
    en: Natural frequency of a normal mode.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: omega\r
  used_in:\r
  - ecuacion_linealizada\r
  - problema_autovalores_modal\r
  - solucion_superposicion_modal\r
  - ortogonalidad_modal\r
  common_mistake: Usar omega sin revisar el dominio fisico del modelo.\r
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
    - pequenas-oscilaciones-y-modos-normales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: omega debe leerse dentro del formalismo del leaf.\r
- id: A\r
  symbol: A\r
  nombre:\r
    es: amplitud modal\r
    en: modal amplitude\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Peso de un modo en la solucion.\r
    en: Weight of a mode in the solution.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: A\r
  used_in:\r
  - ecuacion_linealizada\r
  - problema_autovalores_modal\r
  - solucion_superposicion_modal\r
  - ortogonalidad_modal\r
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
    - pequenas-oscilaciones-y-modos-normales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: A debe leerse dentro del formalismo del leaf.\r
- id: phi\r
  symbol: phi_i\r
  nombre:\r
    es: modo normal\r
    en: normal mode\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Patron espacial de oscilacion colectiva.\r
    en: Spatial pattern of collective oscillation.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: phi\r
  used_in:\r
  - ecuacion_linealizada\r
  - problema_autovalores_modal\r
  - solucion_superposicion_modal\r
  - ortogonalidad_modal\r
  common_mistake: Usar phi sin revisar el dominio fisico del modelo.\r
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
    - pequenas-oscilaciones-y-modos-normales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: phi debe leerse dentro del formalismo del leaf.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: time\r
  unidad_si: s\r
  descripcion:\r
    es: Parametro temporal.\r
    en: Time parameter.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: t\r
  used_in:\r
  - ecuacion_linealizada\r
  - problema_autovalores_modal\r
  - solucion_superposicion_modal\r
  - ortogonalidad_modal\r
  common_mistake: Usar t sin revisar el dominio fisico del modelo.\r
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
    - pequenas-oscilaciones-y-modos-normales\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: t debe leerse dentro del formalismo del leaf.\r
`;export{e as default};
