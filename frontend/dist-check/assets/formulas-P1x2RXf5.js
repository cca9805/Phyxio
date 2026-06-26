const e=`version: 5\r
topic:\r
  id: energia-en-mhs\r
  title:\r
    es: Energia en MHS\r
    en: Energy in SHM\r
\r
formulas:\r
- id: energia_cinetica\r
  title: { es: Energia cinetica, en: Kinetic energy }\r
  equation: K = 0.5*m*v^2\r
  latex: K=\\frac12mv^2\r
  category: energia_de_movimiento\r
  relation_type: definicion_operativa\r
  physical_meaning:\r
    es: Describe la porcion de energia asociada a la rapidez instantanea del oscilador.\r
    en: Describes the energy portion associated with oscillator instantaneous speed.\r
  constraints: [ m > 0 ]\r
  validity:\r
    es: Valida para el modelo mecanico clasico no relativista del oscilador armonico.\r
    en: Valid for the classical non-relativistic oscillator model.\r
  dimension_check: "[M L^2 T^-2] = [M]*[L T^-1]^2"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[m]] y [[v]].", en: "Requires [[m]] and [[v]]." }\r
  used_in: [ energia_total_mhs, conservacion_energia_mhs ]\r
  interpretation_tags: [ energia, movimiento, rapidez ]\r
  result_semantics:\r
    target: K\r
  domain_checks: [ m > 0 ]\r
  coherence_checks: [ K >= 0 ]\r
  graph_implications: "[[K]] aumenta cuando crece la magnitud de [[v]]."\r
  pedagogical_triggers: [ intercambio_energetico, lectura_cinetica ]\r
  rearrangements:\r
  - target: K\r
    equation: 0.5*m*v^2\r
  - target: v\r
    equation: sqrt((2*K)/m)\r
  - target: m\r
    equation: (2*K)/(v^2)\r
  variables: [ K, m, v ]\r
\r
- id: energia_potencial_elastica\r
  title: { es: Energia potencial elastica, en: Elastic potential energy }\r
  equation: U = 0.5*k*x^2\r
  latex: U=\\frac12kx^2\r
  category: energia_de_configuracion\r
  relation_type: definicion_operativa\r
  physical_meaning:\r
    es: Describe la energia almacenada por deformacion respecto del equilibrio.\r
    en: Describes the energy stored by deformation relative to equilibrium.\r
  constraints: [ k > 0 ]\r
  validity:\r
    es: Valida para resorte lineal ideal en el rango de Hooke.\r
    en: Valid for an ideal linear spring in the Hooke range.\r
  dimension_check: "[M L^2 T^-2] = [M T^-2]*[L]^2"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[k]] y [[x]].", en: "Requires [[k]] and [[x]]." }\r
  used_in: [ energia_total_mhs, conservacion_energia_mhs ]\r
  interpretation_tags: [ energia, elasticidad, configuracion ]\r
  result_semantics:\r
    target: U\r
  domain_checks: [ k > 0 ]\r
  coherence_checks: [ U >= 0 ]\r
  graph_implications: "[[U]] crece con el cuadrado de [[x]] y se minimiza en equilibrio."\r
  pedagogical_triggers: [ lectura_potencial, energia_elastica ]\r
  rearrangements:\r
  - target: U\r
    equation: 0.5*k*x^2\r
  - target: x\r
    equation: sqrt((2*U)/k)\r
  - target: k\r
    equation: (2*U)/(x^2)\r
  variables: [ U, k, x ]\r
\r
- id: energia_total_mhs\r
  title: { es: Energia mecanica total, en: Total mechanical energy }\r
  equation: E = K + U\r
  latex: E=K+U\r
  category: conservacion\r
  relation_type: suma_de_componentes\r
  physical_meaning:\r
    es: Relaciona la energia total ideal con la suma de componentes cinetica y potencial.\r
    en: Relates ideal total energy to the sum of kinetic and potential components.\r
  constraints: []\r
  validity:\r
    es: Valida para MHS ideal sin disipacion dominante.\r
    en: Valid for ideal SHM without dominant dissipation.\r
  dimension_check: "[M L^2 T^-2] = [M L^2 T^-2] + [M L^2 T^-2]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[K]] y [[U]].", en: "Requires [[K]] and [[U]]." }\r
  used_in: [ conservacion_energia_mhs ]\r
  interpretation_tags: [ energia_total, conservacion, balance ]\r
  result_semantics:\r
    target: E\r
  domain_checks: []\r
  coherence_checks: [ E >= 0 ]\r
  graph_implications: "La suma de [[K]] y [[U]] debe permanecer en el nivel de [[E]] para el caso ideal."\r
  pedagogical_triggers: [ suma_energetica, chequeo_de_balance ]\r
  rearrangements:\r
  - target: E\r
    equation: K+U\r
  - target: K\r
    equation: E-U\r
  - target: U\r
    equation: E-K\r
  variables: [ E, K, U ]\r
\r
- id: energia_total_amplitud\r
  title: { es: Energia total a partir de amplitud, en: Total energy from amplitude }\r
  equation: E = 0.5*k*A^2\r
  latex: E=\\frac12\\,k\\,A^2\r
  category: escala_energetica\r
  relation_type: relacion_con_parametro_global\r
  physical_meaning:\r
    es: Vincula la energia total ideal con la amplitud maxima del movimiento.\r
    en: Links ideal total energy with the maximum oscillation amplitude.\r
  constraints: [ k > 0, A >= 0 ]\r
  validity:\r
    es: Valida para oscilador armonico simple ideal con amplitud definida.\r
    en: Valid for an ideal simple harmonic oscillator with defined amplitude.\r
  dimension_check: "[M L^2 T^-2] = [M T^-2]*[L]^2"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[k]] y [[A]].", en: "Requires [[k]] and [[A]]." }\r
  used_in: [ conservacion_energia_mhs ]\r
  interpretation_tags: [ amplitud, energia_total, escala ]\r
  result_semantics:\r
    target: E\r
  domain_checks: [ k > 0, A >= 0 ]\r
  coherence_checks: [ E >= 0 ]\r
  graph_implications: "Cambiar [[A]] desplaza el nivel total de energia sin alterar la regla de intercambio entre [[K]] y [[U]]."\r
  pedagogical_triggers: [ lectura_por_amplitud, escala_total ]\r
  rearrangements:\r
  - target: E\r
    equation: 0.5*k*A^2\r
  - target: A\r
    equation: sqrt((2*E)/k)\r
  - target: k\r
    equation: (2*E)/(A^2)\r
  variables: [ E, k, A ]\r
\r
- id: conservacion_energia_mhs\r
  title: { es: Conservacion de energia en MHS, en: Energy conservation in SHM }\r
  equation: E_total = K + U\r
  latex: E_total=K+U\r
  category: principio_fisico\r
  relation_type: identidad_de_conservacion\r
  physical_meaning:\r
    es: Expresa que la energia total ideal permanece constante mientras cambian sus componentes.\r
    en: States that ideal total energy remains constant while its components change.\r
  constraints: []\r
  validity:\r
    es: Valida en ausencia de disipacion y trabajo externo neto dominante.\r
    en: Valid in the absence of dissipation and dominant net external work.\r
  dimension_check: "[M L^2 T^-2] = [M L^2 T^-2] + [M L^2 T^-2]"\r
  calculable: false\r
  motivo_no_calculable: { es: "Requiere contexto dinamico e hipotesis de sistema ideal para interpretarse como principio.", en: "Requires dynamic context and ideal-system assumptions to be interpreted as a principle." }\r
  used_in: [ energia_total_mhs, energia_total_amplitud ]\r
  interpretation_tags: [ conservacion, principio, intercambio ]\r
  result_semantics:\r
    target: E_total\r
  domain_checks: []\r
  coherence_checks: [ E_total >= 0 ]\r
  graph_implications: "La linea o nivel asociado a [[E_total]] no debe oscilar en el caso ideal."\r
  pedagogical_triggers: [ principio_de_conservacion, lectura_de_balance ]\r
  rearrangements:\r
  - target: E_total\r
    equation: K+U\r
  variables: [ E_total, K, U ]\r
\r
ui:\r
  default_formula: energia_total_mhs\r
  groups:\r
  - title:\r
      es: Componentes de energia\r
      en: Energy components\r
    items: [ energia_cinetica, energia_potencial_elastica, energia_total_mhs ]\r
  - title:\r
      es: Escala y conservacion\r
      en: Scale and conservation\r
    items: [ energia_total_amplitud, conservacion_energia_mhs ]\r
`;export{e as default};
