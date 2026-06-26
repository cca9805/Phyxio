const e=`version: 5\r
topic:\r
  id: hamilton-jacobi\r
  title:\r
    es: Hamilton-Jacobi\r
    en: Hamilton-Jacobi Theory\r
variables:\r
- id: S\r
  symbol: S\r
  name:\r
    es: funcion principal de Hamilton\r
    en: Hamilton principal function\r
  si_unit: J*s\r
- id: W\r
  symbol: W\r
  name:\r
    es: accion reducida\r
    en: reduced action\r
  si_unit: J*s\r
- id: H\r
  symbol: H\r
  name:\r
    es: hamiltoniano\r
    en: Hamiltonian\r
  si_unit: J\r
- id: E\r
  symbol: E\r
  name:\r
    es: energia constante\r
    en: constant energy\r
  si_unit: J\r
- id: qi\r
  symbol: q_i\r
  name:\r
    es: coordenada generalizada\r
    en: generalized coordinate\r
  si_unit: context-dependent\r
- id: pi\r
  symbol: p_i\r
  name:\r
    es: momento canonico\r
    en: canonical momentum\r
  si_unit: context-dependent\r
- id: t\r
  symbol: t\r
  name:\r
    es: tiempo\r
    en: time\r
  si_unit: s\r
formulas:\r
- id: momento_desde_accion\r
  title:\r
    es: Momento desde accion principal\r
    en: Momentum from principal action\r
  equation: pi = S\r
  latex: p_i=\\frac{\\partial S}{\\partial q_i}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Lee el momento como gradiente de la accion principal.\r
    en: Reads momentum as the gradient of the principal action.\r
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
    target: pi\r
    meaning: Lee el momento como gradiente de la accion principal.\r
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
  - target: pi\r
    equation: pi = S\r
    latex: p_i=\\frac{\\partial S}{\\partial q_i}\r
- id: ecuacion_hamilton_jacobi\r
  title:\r
    es: Ecuacion de Hamilton-Jacobi\r
    en: Hamilton-Jacobi equation\r
  equation: H + S = 0\r
  latex: H\\left(q_i,\\frac{\\partial S}{\\partial q_i},t\\right)+\\frac{\\partial S}{\\partial\r
    t}=0\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Sustituye los momentos por gradientes de accion en la condicion hamiltoniana.\r
    en: Replaces momenta with action gradients in the Hamiltonian condition.\r
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
    target: S\r
    meaning: Sustituye los momentos por gradientes de accion en la condicion hamiltoniana.\r
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
  - target: S\r
    equation: H + S = 0\r
    latex: H\\left(q_i,\\frac{\\partial S}{\\partial q_i},t\\right)+\\frac{\\partial S}{\\partial\r
      t}=0\r
- id: separacion_autonoma\r
  title:\r
    es: Separacion autonoma\r
    en: Autonomous separation\r
  equation: S = W - E*t\r
  latex: S(q_i,t)=W(q_i)-E\\,t\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Separa la dependencia temporal cuando H no depende explicitamente del tiempo.\r
    en: Separates time dependence when H has no explicit time dependence.\r
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
    target: S\r
    meaning: Separa la dependencia temporal cuando H no depende explicitamente del\r
      tiempo.\r
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
  - target: S\r
    equation: S = W - E*t\r
    latex: S(q_i,t)=W(q_i)-E\\,t\r
- id: ecuacion_hj_reducida\r
  title:\r
    es: Ecuacion reducida\r
    en: Reduced Hamilton-Jacobi equation\r
  equation: H = E\r
  latex: H\\left(q_i,\\frac{\\partial W}{\\partial q_i}\\right)=E\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Convierte el problema autonomo en una ecuacion para la accion reducida.\r
    en: Turns the autonomous problem into an equation for reduced action.\r
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
    target: E\r
    meaning: Convierte el problema autonomo en una ecuacion para la accion reducida.\r
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
  - target: E\r
    equation: H = E\r
    latex: H\\left(q_i,\\frac{\\partial W}{\\partial q_i}\\right)=E\r
`;export{e as default};
