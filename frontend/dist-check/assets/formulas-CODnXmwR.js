const e=`version: 5
topic:
  id: vorticidad-y-circulacion
  title:
    es: Vorticidad y circulacion
    en: Vorticity and Circulation
variables:
- id: omega
  symbol: \\vec\\omega
  name:
    es: vorticidad
    en: vorticity
  si_unit: 1/s
- id: v
  symbol: \\vec v
  name:
    es: velocidad del fluido
    en: fluid velocity
  si_unit: m/s
- id: Gamma
  symbol: \\Gamma
  name:
    es: circulacion
    en: circulation
  si_unit: m^2/s
- id: C
  symbol: C
  name:
    es: contorno material
    en: material contour
  si_unit: none
- id: rho
  symbol: \\rho
  name:
    es: densidad
    en: density
  si_unit: kg/m^3
- id: Vinf
  symbol: V_\\infty
  name:
    es: velocidad libre
    en: free-stream speed
  si_unit: m/s
- id: Lprime
  symbol: L^\\prime
  name:
    es: sustentacion por unidad de longitud
    en: lift per unit length
  si_unit: N/m
formulas:
- id: definicion_vorticidad
  title:
    es: Definicion de vorticidad
    en: Definicion de vorticidad
  equation: omega=omega
  latex: \\vec\\omega=\\nabla\\times\\vec v
  category: fundamental
  relation_type: model_relation
  physical_meaning:
    es: Relacion nuclear del leaf; vincula magnitudes medibles con una decision fisica sobre regimen, validez o reduccion del modelo.
    en: Core relation of the leaf; it links measurable quantities to a physical decision about regime, validity, or model reduction.
  constraints: []
  validity:
    es: Usar solo si las magnitudes pertenecen al mismo sistema, las unidades son coherentes y las hipotesis del leaf siguen dominando.
    en: Use only when the quantities belong to the same system, units are coherent, and the leaf assumptions still dominate.
  dimension_check: Debe conservar coherencia dimensional con las magnitudes definidas.
  calculable: true
  motivo_no_calculable: null
  used_in:
  - lectura_fisica_del_leaf
  interpretation_tags:
  - mecanica-avanzada
  - modelo
  result_semantics:
    target: omega
    meaning: Permite interpretar el regimen fisico del sistema.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que las hipotesis del modelo son aplicables.
      en: Check that model assumptions apply.
  coherence_checks:
  - expr: 'true'
    message:
      es: Verifica signos, unidades y dominio antes de interpretar.
      en: Check signs, units, and domain before interpretation.
  graph_implications: Sin grafico declarado; la lectura se apoya en estructura, unidades y limites.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Explica la lectura fisica antes de operar algebraicamente.
      en: Explain the physical reading before algebraic manipulation.
  rearrangements:
  - target: omega
    equation: omega=omega
    latex: \\vec\\omega=\\nabla\\times\\vec v
- id: definicion_circulacion
  title:
    es: Definicion de circulacion
    en: Definicion de circulacion
  equation: Gamma=Gamma
  latex: \\Gamma=\\oint_C\\vec v\\cdot d\\vec l
  category: fundamental
  relation_type: model_relation
  physical_meaning:
    es: Relacion nuclear del leaf; vincula magnitudes medibles con una decision fisica sobre regimen, validez o reduccion del modelo.
    en: Core relation of the leaf; it links measurable quantities to a physical decision about regime, validity, or model reduction.
  constraints: []
  validity:
    es: Usar solo si las magnitudes pertenecen al mismo sistema, las unidades son coherentes y las hipotesis del leaf siguen dominando.
    en: Use only when the quantities belong to the same system, units are coherent, and the leaf assumptions still dominate.
  dimension_check: Debe conservar coherencia dimensional con las magnitudes definidas.
  calculable: true
  motivo_no_calculable: null
  used_in:
  - lectura_fisica_del_leaf
  interpretation_tags:
  - mecanica-avanzada
  - modelo
  result_semantics:
    target: Gamma
    meaning: Permite interpretar el regimen fisico del sistema.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que las hipotesis del modelo son aplicables.
      en: Check that model assumptions apply.
  coherence_checks:
  - expr: 'true'
    message:
      es: Verifica signos, unidades y dominio antes de interpretar.
      en: Check signs, units, and domain before interpretation.
  graph_implications: Sin grafico declarado; la lectura se apoya en estructura, unidades y limites.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Explica la lectura fisica antes de operar algebraicamente.
      en: Explain the physical reading before algebraic manipulation.
  rearrangements:
  - target: Gamma
    equation: Gamma=Gamma
    latex: \\Gamma=\\oint_C\\vec v\\cdot d\\vec l
- id: teorema_kelvin
  title:
    es: Teorema de Kelvin
    en: Teorema de Kelvin
  equation: Gamma=Gamma
  latex: \\frac{d\\Gamma}{dt}=0
  category: fundamental
  relation_type: model_relation
  physical_meaning:
    es: Relacion nuclear del leaf; vincula magnitudes medibles con una decision fisica sobre regimen, validez o reduccion del modelo.
    en: Core relation of the leaf; it links measurable quantities to a physical decision about regime, validity, or model reduction.
  constraints: []
  validity:
    es: Usar solo si las magnitudes pertenecen al mismo sistema, las unidades son coherentes y las hipotesis del leaf siguen dominando.
    en: Use only when the quantities belong to the same system, units are coherent, and the leaf assumptions still dominate.
  dimension_check: Debe conservar coherencia dimensional con las magnitudes definidas.
  calculable: true
  motivo_no_calculable: null
  used_in:
  - lectura_fisica_del_leaf
  interpretation_tags:
  - mecanica-avanzada
  - modelo
  result_semantics:
    target: Gamma
    meaning: Permite interpretar el regimen fisico del sistema.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que las hipotesis del modelo son aplicables.
      en: Check that model assumptions apply.
  coherence_checks:
  - expr: 'true'
    message:
      es: Verifica signos, unidades y dominio antes de interpretar.
      en: Check signs, units, and domain before interpretation.
  graph_implications: Sin grafico declarado; la lectura se apoya en estructura, unidades y limites.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Explica la lectura fisica antes de operar algebraicamente.
      en: Explain the physical reading before algebraic manipulation.
  rearrangements:
  - target: Gamma
    equation: Gamma=Gamma
    latex: \\frac{d\\Gamma}{dt}=0
- id: kutta_joukowski
  title:
    es: Kutta-Joukowski
    en: Kutta-Joukowski
  equation: Lprime=Lprime
  latex: L^\\prime=\\rho V_\\infty\\Gamma
  category: fundamental
  relation_type: model_relation
  physical_meaning:
    es: Relacion nuclear del leaf; vincula magnitudes medibles con una decision fisica sobre regimen, validez o reduccion del modelo.
    en: Core relation of the leaf; it links measurable quantities to a physical decision about regime, validity, or model reduction.
  constraints: []
  validity:
    es: Usar solo si las magnitudes pertenecen al mismo sistema, las unidades son coherentes y las hipotesis del leaf siguen dominando.
    en: Use only when the quantities belong to the same system, units are coherent, and the leaf assumptions still dominate.
  dimension_check: Debe conservar coherencia dimensional con las magnitudes definidas.
  calculable: true
  motivo_no_calculable: null
  used_in:
  - lectura_fisica_del_leaf
  interpretation_tags:
  - mecanica-avanzada
  - modelo
  result_semantics:
    target: Lprime
    meaning: Permite interpretar el regimen fisico del sistema.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que las hipotesis del modelo son aplicables.
      en: Check that model assumptions apply.
  coherence_checks:
  - expr: 'true'
    message:
      es: Verifica signos, unidades y dominio antes de interpretar.
      en: Check signs, units, and domain before interpretation.
  graph_implications: Sin grafico declarado; la lectura se apoya en estructura, unidades y limites.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Explica la lectura fisica antes de operar algebraicamente.
      en: Explain the physical reading before algebraic manipulation.
  rearrangements:
  - target: Lprime
    equation: Lprime=Lprime
    latex: L^\\prime=\\rho V_\\infty\\Gamma
`;export{e as default};
