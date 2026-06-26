const n=`version: 5\r
magnitudes:\r
- id: S\r
  symbol: S\r
  nombre:\r
    es: funcion principal de Hamilton\r
    en: Hamilton principal function\r
  unidad_si: J*s\r
  descripcion:\r
    es: Funcion accion dependiente de coordenadas y tiempo.\r
    en: Action function depending on coordinates and time.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: S\r
  used_in:\r
  - momento_desde_accion\r
  - ecuacion_hamilton_jacobi\r
  - separacion_autonoma\r
  - ecuacion_hj_reducida\r
  common_mistake: Usar S sin revisar el dominio fisico del modelo.\r
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
    - hamilton-jacobi\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: S debe leerse dentro del formalismo del leaf.\r
- id: W\r
  symbol: W\r
  nombre:\r
    es: accion reducida\r
    en: reduced action\r
  unidad_si: J*s\r
  descripcion:\r
    es: Parte espacial de la accion en sistemas separables.\r
    en: Spatial part of action in separable systems.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: W\r
  used_in:\r
  - momento_desde_accion\r
  - ecuacion_hamilton_jacobi\r
  - separacion_autonoma\r
  - ecuacion_hj_reducida\r
  common_mistake: Usar W sin revisar el dominio fisico del modelo.\r
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
    - hamilton-jacobi\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: W debe leerse dentro del formalismo del leaf.\r
- id: H\r
  symbol: H\r
  nombre:\r
    es: hamiltoniano\r
    en: Hamiltonian\r
  unidad_si: J\r
  descripcion:\r
    es: Energia expresada como funcion canonica.\r
    en: Energy expressed as canonical function.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: H\r
  used_in:\r
  - momento_desde_accion\r
  - ecuacion_hamilton_jacobi\r
  - separacion_autonoma\r
  - ecuacion_hj_reducida\r
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
    - hamilton-jacobi\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: H debe leerse dentro del formalismo del leaf.\r
- id: E\r
  symbol: E\r
  nombre:\r
    es: energia constante\r
    en: constant energy\r
  unidad_si: J\r
  descripcion:\r
    es: Constante asociada a hamiltonianos autonomos.\r
    en: Constant associated with autonomous Hamiltonians.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: E\r
  used_in:\r
  - momento_desde_accion\r
  - ecuacion_hamilton_jacobi\r
  - separacion_autonoma\r
  - ecuacion_hj_reducida\r
  common_mistake: Usar E sin revisar el dominio fisico del modelo.\r
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
    - hamilton-jacobi\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: E debe leerse dentro del formalismo del leaf.\r
- id: qi\r
  symbol: q_i\r
  nombre:\r
    es: coordenada generalizada\r
    en: generalized coordinate\r
  unidad_si: context-dependent\r
  descripcion:\r
    es: Variable de configuracion.\r
    en: Configuration variable.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: qi\r
  used_in:\r
  - momento_desde_accion\r
  - ecuacion_hamilton_jacobi\r
  - separacion_autonoma\r
  - ecuacion_hj_reducida\r
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
    - hamilton-jacobi\r
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
    es: Gradiente de la accion respecto de la coordenada.\r
    en: Gradient of action with respect to coordinate.\r
  dimension: context-dependent\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: pi\r
  used_in:\r
  - momento_desde_accion\r
  - ecuacion_hamilton_jacobi\r
  - separacion_autonoma\r
  - ecuacion_hj_reducida\r
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
    - hamilton-jacobi\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: pi debe leerse dentro del formalismo del leaf.\r
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
  - momento_desde_accion\r
  - ecuacion_hamilton_jacobi\r
  - separacion_autonoma\r
  - ecuacion_hj_reducida\r
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
    - hamilton-jacobi\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: t debe leerse dentro del formalismo del leaf.\r
`;export{n as default};
