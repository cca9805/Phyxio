const e=`version: 5\r
topic:\r
  id: transformaciones-canonicas\r
  title:\r
    es: Transformaciones canonicas\r
    en: Canonical Transformations\r
variables:\r
- id: q\r
  symbol: q_i\r
  name:\r
    es: coordenada antigua\r
    en: old coordinate\r
  si_unit: context-dependent\r
- id: p\r
  symbol: p_i\r
  name:\r
    es: momento antiguo\r
    en: old momentum\r
  si_unit: context-dependent\r
- id: Q\r
  symbol: Q_i\r
  name:\r
    es: coordenada nueva\r
    en: new coordinate\r
  si_unit: context-dependent\r
- id: P\r
  symbol: P_i\r
  name:\r
    es: momento nuevo\r
    en: new momentum\r
  si_unit: context-dependent\r
- id: K\r
  symbol: K\r
  name:\r
    es: hamiltoniano transformado\r
    en: transformed Hamiltonian\r
  si_unit: J\r
- id: Fgen\r
  symbol: F\r
  name:\r
    es: funcion generatriz\r
    en: generating function\r
  si_unit: context-dependent\r
- id: C\r
  symbol: C\r
  name:\r
    es: condicion canonica\r
    en: canonical condition\r
  si_unit: dimensionless\r
formulas:\r
- id: relacion_generatriz_tipo2\r
  title:\r
    es: Relacion generatriz tipo 2\r
    en: Type-2 generating relation\r
  equation: p = Fgen\r
  latex: p_i=\\frac{\\partial F_2}{\\partial q_i}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Obtiene el momento antiguo desde la funcion generatriz.\r
    en: Obtains old momentum from the generating function.\r
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
    target: p\r
    meaning: Obtiene el momento antiguo desde la funcion generatriz.\r
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
  - target: p\r
    equation: p = Fgen\r
    latex: p_i=\\frac{\\partial F_2}{\\partial q_i}\r
- id: coordenada_nueva_generatriz\r
  title:\r
    es: Coordenada nueva desde generatriz\r
    en: New coordinate from generator\r
  equation: Q = Fgen\r
  latex: Q_i=\\frac{\\partial F_2}{\\partial P_i}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Obtiene la coordenada nueva desde la funcion generatriz.\r
    en: Obtains the new coordinate from the generating function.\r
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
    target: Q\r
    meaning: Obtiene la coordenada nueva desde la funcion generatriz.\r
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
  - target: Q\r
    equation: Q = Fgen\r
    latex: Q_i=\\frac{\\partial F_2}{\\partial P_i}\r
- id: hamiltoniano_transformado\r
  title:\r
    es: Hamiltoniano transformado\r
    en: Transformed Hamiltonian\r
  equation: K = H + Fgen\r
  latex: K=H+\\frac{\\partial F_2}{\\partial t}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Corrige el hamiltoniano cuando la generatriz depende del tiempo.\r
    en: Corrects the Hamiltonian when the generator depends on time.\r
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
    target: K\r
    meaning: Corrige el hamiltoniano cuando la generatriz depende del tiempo.\r
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
  - target: K\r
    equation: K = H + Fgen\r
    latex: K=H+\\frac{\\partial F_2}{\\partial t}\r
- id: condicion_canonica_poisson\r
  title:\r
    es: Condicion canonica por Poisson\r
    en: Canonical condition by Poisson\r
  equation: C = 1\r
  latex: \\{Q_i,P_j\\}=\\delta_{ij}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Comprueba que las nuevas variables preservan los corchetes canonicos.\r
    en: Checks that new variables preserve canonical brackets.\r
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
    target: C\r
    meaning: Comprueba que las nuevas variables preservan los corchetes canonicos.\r
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
  - target: C\r
    equation: C = 1\r
    latex: \\{Q_i,P_j\\}=\\delta_{ij}\r
`;export{e as default};
