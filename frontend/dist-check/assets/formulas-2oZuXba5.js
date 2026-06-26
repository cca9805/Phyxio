const e=`version: 5\r
topic:\r
  id: pequenas-oscilaciones-y-modos-normales\r
  title:\r
    es: Pequenas oscilaciones y modos normales\r
    en: Small Oscillations and Normal Modes\r
variables:\r
- id: eta\r
  symbol: eta_i\r
  name:\r
    es: desplazamiento pequeno\r
    en: small displacement\r
  si_unit: context-dependent\r
- id: M\r
  symbol: M\r
  name:\r
    es: matriz de masa\r
    en: mass matrix\r
  si_unit: kg\r
- id: K\r
  symbol: K\r
  name:\r
    es: matriz de rigidez\r
    en: stiffness matrix\r
  si_unit: context-dependent\r
- id: omega\r
  symbol: omega\r
  name:\r
    es: frecuencia normal\r
    en: normal frequency\r
  si_unit: rad/s\r
- id: A\r
  symbol: A\r
  name:\r
    es: amplitud modal\r
    en: modal amplitude\r
  si_unit: context-dependent\r
- id: phi\r
  symbol: phi_i\r
  name:\r
    es: modo normal\r
    en: normal mode\r
  si_unit: context-dependent\r
- id: t\r
  symbol: t\r
  name:\r
    es: tiempo\r
    en: time\r
  si_unit: s\r
formulas:\r
- id: ecuacion_linealizada\r
  title:\r
    es: Ecuacion linealizada\r
    en: Linearized equation\r
  equation: M*eta + K*eta = 0\r
  latex: M\\eta''+K\\eta=0\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Describe pequenas oscilaciones acopladas alrededor del equilibrio.\r
    en: Describes coupled small oscillations around equilibrium.\r
  constraints: []\r
  validity:\r
    es: Valida bajo las hipotesis declaradas del leaf.\r
    en: Valid under the hypotheses declared in the leaf.\r
  dimension_check: coherente con la magnitud objetivo\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - lectura_fisica_del_leaf\r
  interpretation_tags:\r
  - mecanica-analitica\r
  - modelo-avanzado\r
  result_semantics:\r
    target: eta\r
    meaning: Describe pequenas oscilaciones acopladas alrededor del equilibrio.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba que las variables pertenecen al mismo modelo.\r
      en: Check that variables belong to the same model.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: La relacion debe respetar el dominio canonico o lineal declarado.\r
      en: The relation must respect the declared canonical or linear domain.\r
  graph_implications: Sin grafico declarado; la lectura se centra en estructura algebraica\r
    y criterio fisico.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Explica primero el significado fisico antes de operar.\r
      en: Explain physical meaning before operating.\r
  rearrangements:\r
  - target: eta\r
    equation: M*eta + K*eta = 0\r
    latex: M\\eta''+K\\eta=0\r
- id: problema_autovalores_modal\r
  title:\r
    es: Problema modal de autovalores\r
    en: Modal eigenvalue problem\r
  equation: K*phi = omega^2*M*phi\r
  latex: K\\phi=\\omega^2 M\\phi\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Obtiene frecuencias normales y patrones modales.\r
    en: Obtains normal frequencies and modal patterns.\r
  constraints: []\r
  validity:\r
    es: Valida bajo las hipotesis declaradas del leaf.\r
    en: Valid under the hypotheses declared in the leaf.\r
  dimension_check: coherente con la magnitud objetivo\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - lectura_fisica_del_leaf\r
  interpretation_tags:\r
  - mecanica-analitica\r
  - modelo-avanzado\r
  result_semantics:\r
    target: omega\r
    meaning: Obtiene frecuencias normales y patrones modales.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba que las variables pertenecen al mismo modelo.\r
      en: Check that variables belong to the same model.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: La relacion debe respetar el dominio canonico o lineal declarado.\r
      en: The relation must respect the declared canonical or linear domain.\r
  graph_implications: Sin grafico declarado; la lectura se centra en estructura algebraica\r
    y criterio fisico.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Explica primero el significado fisico antes de operar.\r
      en: Explain physical meaning before operating.\r
  rearrangements:\r
  - target: omega\r
    equation: K*phi = omega^2*M*phi\r
    latex: K\\phi=\\omega^2 M\\phi\r
- id: solucion_superposicion_modal\r
  title:\r
    es: Superposicion modal\r
    en: Modal superposition\r
  equation: eta = A*phi\r
  latex: \\eta(t)=\\sum_n A_n\\phi_n\\cos(\\omega_n t+\\alpha_n)\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Reconstruye el movimiento como suma de modos independientes.\r
    en: Reconstructs motion as a sum of independent modes.\r
  constraints: []\r
  validity:\r
    es: Valida bajo las hipotesis declaradas del leaf.\r
    en: Valid under the hypotheses declared in the leaf.\r
  dimension_check: coherente con la magnitud objetivo\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - lectura_fisica_del_leaf\r
  interpretation_tags:\r
  - mecanica-analitica\r
  - modelo-avanzado\r
  result_semantics:\r
    target: eta\r
    meaning: Reconstruye el movimiento como suma de modos independientes.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba que las variables pertenecen al mismo modelo.\r
      en: Check that variables belong to the same model.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: La relacion debe respetar el dominio canonico o lineal declarado.\r
      en: The relation must respect the declared canonical or linear domain.\r
  graph_implications: Sin grafico declarado; la lectura se centra en estructura algebraica\r
    y criterio fisico.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Explica primero el significado fisico antes de operar.\r
      en: Explain physical meaning before operating.\r
  rearrangements:\r
  - target: eta\r
    equation: eta = A*phi\r
    latex: \\eta(t)=\\sum_n A_n\\phi_n\\cos(\\omega_n t+\\alpha_n)\r
- id: ortogonalidad_modal\r
  title:\r
    es: Ortogonalidad modal\r
    en: Modal orthogonality\r
  equation: phi = phi\r
  latex: \\phi_i^T M \\phi_j=0\\quad (i\\neq j)\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Separa modos distintos mediante el producto ponderado por masa.\r
    en: Separates distinct modes through the mass-weighted product.\r
  constraints: []\r
  validity:\r
    es: Valida bajo las hipotesis declaradas del leaf.\r
    en: Valid under the hypotheses declared in the leaf.\r
  dimension_check: coherente con la magnitud objetivo\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - lectura_fisica_del_leaf\r
  interpretation_tags:\r
  - mecanica-analitica\r
  - modelo-avanzado\r
  result_semantics:\r
    target: phi\r
    meaning: Separa modos distintos mediante el producto ponderado por masa.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba que las variables pertenecen al mismo modelo.\r
      en: Check that variables belong to the same model.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: La relacion debe respetar el dominio canonico o lineal declarado.\r
      en: The relation must respect the declared canonical or linear domain.\r
  graph_implications: Sin grafico declarado; la lectura se centra en estructura algebraica\r
    y criterio fisico.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Explica primero el significado fisico antes de operar.\r
      en: Explain physical meaning before operating.\r
  rearrangements:\r
  - target: phi\r
    equation: phi = phi\r
    latex: \\phi_i^T M \\phi_j=0\\quad (i\\neq j)\r
`;export{e as default};
