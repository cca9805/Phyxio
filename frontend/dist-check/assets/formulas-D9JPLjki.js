const e=`version: 5\r
topic:\r
  id: corchetes-de-poisson\r
  title:\r
    es: Corchetes de Poisson\r
    en: Poisson Brackets\r
variables:\r
- id: A\r
  symbol: A\r
  name:\r
    es: observable\r
    en: observable\r
  si_unit: context-dependent\r
- id: B\r
  symbol: B\r
  name:\r
    es: observable auxiliar\r
    en: auxiliary observable\r
  si_unit: context-dependent\r
- id: PB\r
  symbol: '{A,B}'\r
  name:\r
    es: corchete de Poisson\r
    en: Poisson bracket\r
  si_unit: context-dependent\r
- id: qi\r
  symbol: q_i\r
  name:\r
    es: coordenada canonica\r
    en: canonical coordinate\r
  si_unit: context-dependent\r
- id: pi\r
  symbol: p_i\r
  name:\r
    es: momento canonico\r
    en: canonical momentum\r
  si_unit: context-dependent\r
- id: H\r
  symbol: H\r
  name:\r
    es: hamiltoniano\r
    en: Hamiltonian\r
  si_unit: J\r
- id: dA_dt\r
  symbol: dA/dt\r
  name:\r
    es: evolucion temporal de A\r
    en: time evolution of A\r
  si_unit: context-dependent/s\r
formulas:\r
- id: definicion_corchete_poisson\r
  title:\r
    es: Definicion del corchete de Poisson\r
    en: Poisson bracket definition\r
  equation: PB = PB\r
  latex: \\{A,B\\}=\\sum_i\\left(\\frac{\\partial A}{\\partial q_i}\\frac{\\partial B}{\\partial\r
    p_i}-\\frac{\\partial A}{\\partial p_i}\\frac{\\partial B}{\\partial q_i}\\right)\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Define la operacion que compara como dos observables responden a las variables\r
      canonicas.\r
    en: Defines the operation comparing how two observables respond to canonical variables.\r
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
    target: PB\r
    meaning: Define la operacion que compara como dos observables responden a las\r
      variables canonicas.\r
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
  - target: PB\r
    equation: PB = PB\r
    latex: \\{A,B\\}=\\sum_i\\left(\\frac{\\partial A}{\\partial q_i}\\frac{\\partial B}{\\partial\r
      p_i}-\\frac{\\partial A}{\\partial p_i}\\frac{\\partial B}{\\partial q_i}\\right)\r
- id: evolucion_temporal_poisson\r
  title:\r
    es: Evolucion temporal hamiltoniana\r
    en: Hamiltonian time evolution\r
  equation: dA_dt = PB\r
  latex: \\frac{dA}{dt}=\\{A,H\\}+\\frac{\\partial A}{\\partial t}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Expresa la evolucion de un observable mediante su corchete con el hamiltoniano.\r
    en: Expresses observable evolution through its bracket with the Hamiltonian.\r
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
    target: dA_dt\r
    meaning: Expresa la evolucion de un observable mediante su corchete con el hamiltoniano.\r
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
  - target: dA_dt\r
    equation: dA_dt = PB\r
    latex: \\frac{dA}{dt}=\\{A,H\\}+\\frac{\\partial A}{\\partial t}\r
- id: conservacion_por_poisson\r
  title:\r
    es: Criterio de conservacion\r
    en: Conservation criterion\r
  equation: dA_dt = 0\r
  latex: \\{A,H\\}+\\frac{\\partial A}{\\partial t}=0\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Identifica una constante de movimiento cuando la evolucion total se anula.\r
    en: Identifies a constant of motion when total evolution vanishes.\r
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
    target: dA_dt\r
    meaning: Identifica una constante de movimiento cuando la evolucion total se anula.\r
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
  - target: dA_dt\r
    equation: dA_dt = 0\r
    latex: \\{A,H\\}+\\frac{\\partial A}{\\partial t}=0\r
- id: corchete_canonico_fundamental\r
  title:\r
    es: Corchete canonico fundamental\r
    en: Fundamental canonical bracket\r
  equation: PB = 1\r
  latex: \\{q_i,p_j\\}=\\delta_{ij}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Fija la compatibilidad canonica elemental entre coordenadas y momentos.\r
    en: Sets the elementary canonical compatibility between coordinates and momenta.\r
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
    target: PB\r
    meaning: Fija la compatibilidad canonica elemental entre coordenadas y momentos.\r
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
  - target: PB\r
    equation: PB = 1\r
    latex: \\{q_i,p_j\\}=\\delta_{ij}\r
`;export{e as default};
