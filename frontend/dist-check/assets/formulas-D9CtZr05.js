const e=`version: 1\r
topic:\r
  id: rozamiento-y-disipacion\r
  title:\r
    es: Rozamiento y disipacion\r
    en: Friction and Dissipation\r
variables:\r
- id: fr\r
  symbol: f_r\r
  name:\r
    es: fuerza de rozamiento\r
    en: friction force\r
  si_unit: N\r
- id: mu\r
  symbol: \\mu\r
  name:\r
    es: coeficiente de rozamiento\r
    en: coefficient of friction\r
  si_unit: '1'\r
- id: N\r
  symbol: N\r
  name:\r
    es: fuerza normal\r
    en: normal force\r
  si_unit: N\r
- id: d\r
  symbol: d\r
  name:\r
    es: distancia de deslizamiento\r
    en: sliding distance\r
  si_unit: m\r
- id: Wr\r
  symbol: W_r\r
  name:\r
    es: trabajo del rozamiento\r
    en: work done by friction\r
  si_unit: J\r
- id: Edis\r
  symbol: E_{dis}\r
  name:\r
    es: energia disipada\r
    en: dissipated energy\r
  si_unit: J\r
- id: m\r
  symbol: m\r
  name:\r
    es: masa\r
    en: mass\r
  si_unit: kg\r
- id: g\r
  symbol: g\r
  name:\r
    es: campo gravitatorio local\r
    en: local gravitational field\r
  si_unit: m/s^2\r
- id: Emi\r
  symbol: E_{m,i}\r
  name:\r
    es: energia mecanica inicial\r
    en: initial mechanical energy\r
  si_unit: J\r
- id: Emf\r
  symbol: E_{m,f}\r
  name:\r
    es: energia mecanica final\r
    en: final mechanical energy\r
  si_unit: J\r
- id: dEm\r
  symbol: \\Delta E_m\r
  name:\r
    es: variacion de energia mecanica\r
    en: change in mechanical energy\r
  si_unit: J\r
- id: Pdis\r
  symbol: P_{dis}\r
  name:\r
    es: potencia disipada\r
    en: dissipated power\r
  si_unit: W\r
- id: t\r
  symbol: t\r
  name:\r
    es: intervalo de tiempo\r
    en: time interval\r
  si_unit: s\r
formulas:\r
- id: fuerza_rozamiento_cinetico\r
  title:\r
    es: Rozamiento cinetico de Coulomb\r
    en: Coulomb kinetic friction\r
  equation: fr = mu*N\r
  latex: f_r=\\mu N\r
  rearrangements:\r
  - target: fr\r
    equation: fr = mu*N\r
    latex: f_r=\\mu N\r
  - target: mu\r
    equation: mu = fr/N\r
    latex: \\mu=\\frac{f_r}{N}\r
  - target: N\r
    equation: N = fr/mu\r
    latex: N=\\frac{f_r}{\\mu}\r
  constraints:\r
  - expr: mu >= 0\r
    message:\r
      es: mu debe ser no negativo.\r
      en: mu must be non-negative.\r
  - expr: N > 0\r
    message:\r
      es: N debe ser mayor que cero.\r
      en: N must be greater than zero.\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: Relaciona Rozamiento cinetico de Coulomb con la lectura energetica del rozamiento y la disipacion.\r
    en: Relates Coulomb kinetic friction to the energy reading of friction and dissipation.\r
  validity:\r
    es: Valida para rozamiento seco con coeficiente aproximadamente constante y sistema bien definido.\r
    en: Valid for dry friction with approximately constant coefficient and a well-defined system.\r
  dimension_check: coherente dimensionalmente en unidades SI\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - balances energeticos con rozamiento y disipacion\r
  interpretation_tags:\r
  - rozamiento\r
  - disipacion\r
  - energia\r
  result_semantics:\r
    target: fr\r
    meaning: El resultado cuantifica la perdida o transferencia mecanica asociada al rozamiento.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que el contacto seco y el signo del trabajo sean coherentes.\r
      en: Check that dry contact and the work sign are coherent.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba unidades SI y que la energia disipada sea no negativa.\r
      en: Check SI units and that dissipated energy is non-negative.\r
  graph_implications:\r
  - La representacion debe mostrar como aumenta la disipacion al crecer fuerza o distancia.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Distingue trabajo firmado Wr de energia disipada positiva Edis.\r
      en: Distinguish signed work Wr from positive dissipated energy Edis.\r
- id: trabajo_rozamiento\r
  title:\r
    es: Trabajo del rozamiento en deslizamiento rectilineo\r
    en: Work done by friction in rectilinear sliding\r
  equation: Wr = -fr*d\r
  latex: W_r=-f_r d\r
  rearrangements:\r
  - target: Wr\r
    equation: Wr = -fr*d\r
    latex: W_r=-f_r d\r
  - target: fr\r
    equation: fr = -Wr/d\r
    latex: f_r=-\\frac{W_r}{d}\r
  - target: d\r
    equation: d = -Wr/fr\r
    latex: d=-\\frac{W_r}{f_r}\r
  constraints:\r
  - expr: d >= 0\r
    message:\r
      es: d debe ser no negativo.\r
      en: d must be non-negative.\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: Relaciona Trabajo del rozamiento en deslizamiento rectilineo con la lectura energetica del rozamiento y la disipacion.\r
    en: Relates Work done by friction in rectilinear sliding to the energy reading of friction and dissipation.\r
  validity:\r
    es: Valida para rozamiento seco con coeficiente aproximadamente constante y sistema bien definido.\r
    en: Valid for dry friction with approximately constant coefficient and a well-defined system.\r
  dimension_check: coherente dimensionalmente en unidades SI\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - balances energeticos con rozamiento y disipacion\r
  interpretation_tags:\r
  - rozamiento\r
  - disipacion\r
  - energia\r
  result_semantics:\r
    target: Wr\r
    meaning: El resultado cuantifica la perdida o transferencia mecanica asociada al rozamiento.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que el contacto seco y el signo del trabajo sean coherentes.\r
      en: Check that dry contact and the work sign are coherent.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba unidades SI y que la energia disipada sea no negativa.\r
      en: Check SI units and that dissipated energy is non-negative.\r
  graph_implications:\r
  - La representacion debe mostrar como aumenta la disipacion al crecer fuerza o distancia.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Distingue trabajo firmado Wr de energia disipada positiva Edis.\r
      en: Distinguish signed work Wr from positive dissipated energy Edis.\r
- id: energia_disipada_rozamiento\r
  title:\r
    es: Energia mecanica disipada por rozamiento\r
    en: Mechanical energy dissipated by friction\r
  equation: Edis = -Wr\r
  latex: E_{dis}=-W_r\r
  rearrangements:\r
  - target: Edis\r
    equation: Edis = -Wr\r
    latex: E_{dis}=-W_r\r
  - target: Wr\r
    equation: Wr = -Edis\r
    latex: W_r=-E_{dis}\r
  constraints:\r
  - expr: Edis >= 0\r
    message:\r
      es: La energia disipada debe ser no negativa.\r
      en: Dissipated energy must be non-negative.\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: Relaciona Energia mecanica disipada por rozamiento con la lectura energetica del rozamiento y la disipacion.\r
    en: Relates Mechanical energy dissipated by friction to the energy reading of friction and dissipation.\r
  validity:\r
    es: Valida para rozamiento seco con coeficiente aproximadamente constante y sistema bien definido.\r
    en: Valid for dry friction with approximately constant coefficient and a well-defined system.\r
  dimension_check: coherente dimensionalmente en unidades SI\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - balances energeticos con rozamiento y disipacion\r
  interpretation_tags:\r
  - rozamiento\r
  - disipacion\r
  - energia\r
  result_semantics:\r
    target: Edis\r
    meaning: El resultado cuantifica la perdida o transferencia mecanica asociada al rozamiento.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que el contacto seco y el signo del trabajo sean coherentes.\r
      en: Check that dry contact and the work sign are coherent.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba unidades SI y que la energia disipada sea no negativa.\r
      en: Check SI units and that dissipated energy is non-negative.\r
  graph_implications:\r
  - La representacion debe mostrar como aumenta la disipacion al crecer fuerza o distancia.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Distingue trabajo firmado Wr de energia disipada positiva Edis.\r
      en: Distinguish signed work Wr from positive dissipated energy Edis.\r
- id: trabajo_rozamiento_horizontal\r
  title:\r
    es: Trabajo de rozamiento en superficie horizontal\r
    en: Friction work on a horizontal surface\r
  equation: Wr = -mu*m*g*d\r
  latex: W_r=-\\mu m g d\r
  rearrangements:\r
  - target: Wr\r
    equation: Wr = -mu*m*g*d\r
    latex: W_r=-\\mu m g d\r
  - target: mu\r
    equation: mu = -Wr/(m*g*d)\r
    latex: \\mu=-\\frac{W_r}{m g d}\r
  - target: d\r
    equation: d = -Wr/(mu*m*g)\r
    latex: d=-\\frac{W_r}{\\mu m g}\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: m debe ser mayor que cero.\r
      en: m must be greater than zero.\r
  - expr: g > 0\r
    message:\r
      es: g debe ser mayor que cero.\r
      en: g must be greater than zero.\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: Relaciona Trabajo de rozamiento en superficie horizontal con la lectura energetica del rozamiento y la disipacion.\r
    en: Relates Friction work on a horizontal surface to the energy reading of friction and dissipation.\r
  validity:\r
    es: Valida para rozamiento seco con coeficiente aproximadamente constante y sistema bien definido.\r
    en: Valid for dry friction with approximately constant coefficient and a well-defined system.\r
  dimension_check: coherente dimensionalmente en unidades SI\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - balances energeticos con rozamiento y disipacion\r
  interpretation_tags:\r
  - rozamiento\r
  - disipacion\r
  - energia\r
  result_semantics:\r
    target: Wr\r
    meaning: El resultado cuantifica la perdida o transferencia mecanica asociada al rozamiento.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que el contacto seco y el signo del trabajo sean coherentes.\r
      en: Check that dry contact and the work sign are coherent.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba unidades SI y que la energia disipada sea no negativa.\r
      en: Check SI units and that dissipated energy is non-negative.\r
  graph_implications:\r
  - La representacion debe mostrar como aumenta la disipacion al crecer fuerza o distancia.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Distingue trabajo firmado Wr de energia disipada positiva Edis.\r
      en: Distinguish signed work Wr from positive dissipated energy Edis.\r
- id: balance_energia_mecanica_disipacion\r
  title:\r
    es: Balance mecanico con trabajo disipativo\r
    en: Mechanical balance with dissipative work\r
  equation: Emf = Emi + Wr\r
  latex: E_{m,f}=E_{m,i}+W_r\r
  rearrangements:\r
  - target: Emf\r
    equation: Emf = Emi + Wr\r
    latex: E_{m,f}=E_{m,i}+W_r\r
  - target: Emi\r
    equation: Emi = Emf - Wr\r
    latex: E_{m,i}=E_{m,f}-W_r\r
  - target: Wr\r
    equation: Wr = Emf - Emi\r
    latex: W_r=E_{m,f}-E_{m,i}\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: Relaciona Balance mecanico con trabajo disipativo con la lectura energetica del rozamiento y la disipacion.\r
    en: Relates Mechanical balance with dissipative work to the energy reading of friction and dissipation.\r
  constraints: []\r
  validity:\r
    es: Valida para rozamiento seco con coeficiente aproximadamente constante y sistema bien definido.\r
    en: Valid for dry friction with approximately constant coefficient and a well-defined system.\r
  dimension_check: coherente dimensionalmente en unidades SI\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - balances energeticos con rozamiento y disipacion\r
  interpretation_tags:\r
  - rozamiento\r
  - disipacion\r
  - energia\r
  result_semantics:\r
    target: Emf\r
    meaning: El resultado cuantifica la perdida o transferencia mecanica asociada al rozamiento.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que el contacto seco y el signo del trabajo sean coherentes.\r
      en: Check that dry contact and the work sign are coherent.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba unidades SI y que la energia disipada sea no negativa.\r
      en: Check SI units and that dissipated energy is non-negative.\r
  graph_implications:\r
  - La representacion debe mostrar como aumenta la disipacion al crecer fuerza o distancia.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Distingue trabajo firmado Wr de energia disipada positiva Edis.\r
      en: Distinguish signed work Wr from positive dissipated energy Edis.\r
- id: variacion_energia_mecanica_rozamiento\r
  title:\r
    es: Variacion de energia mecanica por rozamiento\r
    en: Change in mechanical energy due to friction\r
  equation: dEm = Wr\r
  latex: \\Delta E_m=W_r\r
  rearrangements:\r
  - target: dEm\r
    equation: dEm = Wr\r
    latex: \\Delta E_m=W_r\r
  - target: Wr\r
    equation: Wr = dEm\r
    latex: W_r=\\Delta E_m\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: Relaciona Variacion de energia mecanica por rozamiento con la lectura energetica del rozamiento y la disipacion.\r
    en: Relates Change in mechanical energy due to friction to the energy reading of friction and dissipation.\r
  constraints: []\r
  validity:\r
    es: Valida para rozamiento seco con coeficiente aproximadamente constante y sistema bien definido.\r
    en: Valid for dry friction with approximately constant coefficient and a well-defined system.\r
  dimension_check: coherente dimensionalmente en unidades SI\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - balances energeticos con rozamiento y disipacion\r
  interpretation_tags:\r
  - rozamiento\r
  - disipacion\r
  - energia\r
  result_semantics:\r
    target: dEm\r
    meaning: El resultado cuantifica la perdida o transferencia mecanica asociada al rozamiento.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que el contacto seco y el signo del trabajo sean coherentes.\r
      en: Check that dry contact and the work sign are coherent.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba unidades SI y que la energia disipada sea no negativa.\r
      en: Check SI units and that dissipated energy is non-negative.\r
  graph_implications:\r
  - La representacion debe mostrar como aumenta la disipacion al crecer fuerza o distancia.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Distingue trabajo firmado Wr de energia disipada positiva Edis.\r
      en: Distinguish signed work Wr from positive dissipated energy Edis.\r
- id: potencia_disipada_media\r
  title:\r
    es: Potencia media disipada\r
    en: Average dissipated power\r
  equation: Pdis = Edis/t\r
  latex: P_{dis}=\\frac{E_{dis}}{t}\r
  rearrangements:\r
  - target: Pdis\r
    equation: Pdis = Edis/t\r
    latex: P_{dis}=\\frac{E_{dis}}{t}\r
  - target: Edis\r
    equation: Edis = Pdis*t\r
    latex: E_{dis}=P_{dis}t\r
  - target: t\r
    equation: t = Edis/Pdis\r
    latex: t=\\frac{E_{dis}}{P_{dis}}\r
  constraints:\r
  - expr: t > 0\r
    message:\r
      es: t debe ser mayor que cero.\r
      en: t must be greater than zero.\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: Relaciona Potencia media disipada con la lectura energetica del rozamiento y la disipacion.\r
    en: Relates Average dissipated power to the energy reading of friction and dissipation.\r
  validity:\r
    es: Valida para rozamiento seco con coeficiente aproximadamente constante y sistema bien definido.\r
    en: Valid for dry friction with approximately constant coefficient and a well-defined system.\r
  dimension_check: coherente dimensionalmente en unidades SI\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - balances energeticos con rozamiento y disipacion\r
  interpretation_tags:\r
  - rozamiento\r
  - disipacion\r
  - energia\r
  result_semantics:\r
    target: Pdis\r
    meaning: El resultado cuantifica la perdida o transferencia mecanica asociada al rozamiento.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que el contacto seco y el signo del trabajo sean coherentes.\r
      en: Check that dry contact and the work sign are coherent.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Comprueba unidades SI y que la energia disipada sea no negativa.\r
      en: Check SI units and that dissipated energy is non-negative.\r
  graph_implications:\r
  - La representacion debe mostrar como aumenta la disipacion al crecer fuerza o distancia.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Distingue trabajo firmado Wr de energia disipada positiva Edis.\r
      en: Distinguish signed work Wr from positive dissipated energy Edis.\r
ui:\r
  default_formula: fuerza_rozamiento_cinetico\r
  groups:\r
  - title:\r
      es: Contacto y trabajo\r
      en: Contact and work\r
    items:\r
    - fuerza_rozamiento_cinetico\r
    - trabajo_rozamiento\r
    - trabajo_rozamiento_horizontal\r
  - title:\r
      es: Energia y disipacion\r
      en: Energy and dissipation\r
    items:\r
    - energia_disipada_rozamiento\r
    - balance_energia_mecanica_disipacion\r
    - variacion_energia_mecanica_rozamiento\r
    - potencia_disipada_media\r
`;export{e as default};
