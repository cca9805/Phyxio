const e=`version: 1\r
formulas:\r
- id: reynolds_viscosidad_dinamica\r
  title:\r
    es: Numero de Reynolds con viscosidad dinamica\r
    en: Reynolds number with dynamic viscosity\r
  equation: Re = rho*v*L/eta\r
  latex: Re = \\frac{\\rho v L}{\\eta}\r
  rearrangements:\r
  - target: Re\r
    equation: Re = rho*v*L/eta\r
    latex: Re = \\frac{\\rho v L}{\\eta}\r
    constraints:\r
    - expr: eta != 0\r
      message:\r
        es: eta != 0\r
        en: eta != 0\r
  - target: v\r
    equation: v = Re*eta/(rho*L)\r
    latex: v = \\frac{Re \\eta}{\\rho L}\r
    constraints:\r
    - expr: rho != 0 && L != 0\r
      message:\r
        es: rho != 0 && L != 0\r
        en: rho != 0 && L != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en numero de reynolds y regimenes de arrastre.\r
    en: Relacion fisica usada en numero de reynolds y regimenes de arrastre.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  interpretation_tags:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  result_semantics:\r
    target: Re\r
    meaning: Resulta util para interpretar Re en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, && meaning of the result.\r
- id: reynolds_viscosidad_cinematica\r
  title:\r
    es: Numero de Reynolds con viscosidad cinematica\r
    en: Reynolds number with kinematic viscosity\r
  equation: Re = v*L/nu\r
  latex: Re = \\frac{v L}{\\nu}\r
  rearrangements:\r
  - target: Re\r
    equation: Re = v*L/nu\r
    latex: Re = \\frac{v L}{\\nu}\r
    constraints:\r
    - expr: nu != 0\r
      message:\r
        es: nu != 0\r
        en: nu != 0\r
  - target: nu\r
    equation: nu = v*L/Re\r
    latex: \\nu = \\frac{v L}{Re}\r
    constraints:\r
    - expr: Re != 0\r
      message:\r
        es: Re != 0\r
        en: Re != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en numero de reynolds y regimenes de arrastre.\r
    en: Relacion fisica usada en numero de reynolds y regimenes de arrastre.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  interpretation_tags:\r
  - numero-de-reynolds-y-regimenes-de-arrastre\r
  result_semantics:\r
    target: Re\r
    meaning: Resulta util para interpretar Re en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, && meaning of the result.\r
`;export{e as default};
