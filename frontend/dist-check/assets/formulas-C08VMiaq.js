const e=`version: 5
topic:
  id: ecuacion-de-binet-y-orbitas
  title:
    es: Ecuacion de Binet y orbitas
    en: Binet Equation and Orbits
variables:
- id: u
  symbol: u
  name:
    es: radio inverso
    en: inverse radius
  si_unit: 1/m
- id: theta
  symbol: \\theta
  name:
    es: angulo polar
    en: polar angle
  si_unit: rad
- id: r
  symbol: r
  name:
    es: distancia radial
    en: radial distance
  si_unit: m
- id: F
  symbol: F
  name:
    es: fuerza central
    en: central force
  si_unit: N
- id: L
  symbol: L
  name:
    es: momento angular
    en: angular momentum
  si_unit: kg*m^2/s
- id: m
  symbol: m
  name:
    es: masa
    en: mass
  si_unit: kg
- id: U
  symbol: U
  name:
    es: potencial central
    en: central potential
  si_unit: J
formulas:
- id: radio_inverso
  title:
    es: Radio inverso
    en: Radio inverso
  equation: u=u
  latex: u=\\frac{1}{r}
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
    target: u
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
  - target: u
    equation: u=u
    latex: u=\\frac{1}{r}
- id: binet_general
  title:
    es: Ecuacion de Binet
    en: Ecuacion de Binet
  equation: u=u
  latex: \\frac{d^2u}{d\\theta^2}+u=-\\frac{m}{L^2u^2}F\\left(\\frac{1}{u}\\right)
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
    target: u
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
  - target: u
    equation: u=u
    latex: \\frac{d^2u}{d\\theta^2}+u=-\\frac{m}{L^2u^2}F\\left(\\frac{1}{u}\\right)
- id: fuerza_desde_potencial
  title:
    es: Fuerza desde potencial
    en: Fuerza desde potencial
  equation: F=F
  latex: F(r)=-\\frac{dU}{dr}
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
    target: F
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
  - target: F
    equation: F=F
    latex: F(r)=-\\frac{dU}{dr}
- id: momento_angular_polar
  title:
    es: Momento angular polar
    en: Momento angular polar
  equation: L=L
  latex: L=m r^2\\dot\\theta
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
    target: L
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
  - target: L
    equation: L=L
    latex: L=m r^2\\dot\\theta
`;export{e as default};
