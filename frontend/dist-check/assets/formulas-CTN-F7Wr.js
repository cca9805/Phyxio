const e=`version: 5
topic:
  id: routhiano-y-coordenadas-ciclicas
  title:
    es: Routhiano y coordenadas ciclicas
    en: Routhian and Cyclic Coordinates
variables:
- id: Routh
  symbol: R
  name:
    es: routhiano
    en: Routhian
  si_unit: J
- id: Lagr
  symbol: L
  name:
    es: lagrangiano
    en: Lagrangian
  si_unit: J
- id: pa
  symbol: p_\\alpha
  name:
    es: momento canonico ciclico
    en: cyclic canonical momentum
  si_unit: context-dependent
- id: qa
  symbol: q_\\alpha
  name:
    es: coordenada ciclica
    en: cyclic coordinate
  si_unit: context-dependent
- id: qdot_a
  symbol: \\dot q_\\alpha
  name:
    es: velocidad ciclica
    en: cyclic velocity
  si_unit: context-dependent
- id: qi
  symbol: q_i
  name:
    es: coordenada no ciclica
    en: non-cyclic coordinate
  si_unit: context-dependent
- id: E
  symbol: E
  name:
    es: energia reducida
    en: reduced energy
  si_unit: J
formulas:
- id: momento_ciclico
  title:
    es: Momento ciclico
    en: Momento ciclico
  equation: pa=pa
  latex: p_\\alpha=\\frac{\\partial L}{\\partial\\dot q_\\alpha}
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
    target: pa
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
  - target: pa
    equation: pa=pa
    latex: p_\\alpha=\\frac{\\partial L}{\\partial\\dot q_\\alpha}
- id: definicion_routhiano
  title:
    es: Definicion de Routhiano
    en: Definicion de Routhiano
  equation: Routh=Routh
  latex: R=\\sum_\\alpha p_\\alpha\\dot q_\\alpha-L
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
    target: Routh
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
  - target: Routh
    equation: Routh=Routh
    latex: R=\\sum_\\alpha p_\\alpha\\dot q_\\alpha-L
- id: ecuacion_routh_no_ciclica
  title:
    es: Ecuacion de Routh
    en: Ecuacion de Routh
  equation: qi=qi
  latex: \\frac{d}{dt}\\left(\\frac{\\partial R}{\\partial\\dot q_i}\\right)-\\frac{\\partial R}{\\partial q_i}=0
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
    target: qi
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
  - target: qi
    equation: qi=qi
    latex: \\frac{d}{dt}\\left(\\frac{\\partial R}{\\partial\\dot q_i}\\right)-\\frac{\\partial R}{\\partial q_i}=0
- id: energia_reducida_routh
  title:
    es: Energia reducida
    en: Energia reducida
  equation: E=E
  latex: E=\\sum_i\\dot q_i\\frac{\\partial R}{\\partial\\dot q_i}-R
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
    target: E
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
  - target: E
    equation: E=E
    latex: E=\\sum_i\\dot q_i\\frac{\\partial R}{\\partial\\dot q_i}-R
`;export{e as default};
