const e=`version: 5
topic:
  id: no-holonomas
  title:
    es: Ligaduras no holonomas
    en: Nonholonomic Constraints
variables:
- id: Aai
  symbol: A_{\\alpha i}
  name:
    es: coeficiente de ligadura
    en: constraint coefficient
  si_unit: context-dependent
- id: qdot_i
  symbol: \\dot q_i
  name:
    es: velocidad generalizada
    en: generalized velocity
  si_unit: context-dependent
- id: aa
  symbol: a_\\alpha
  name:
    es: termino independiente
    en: independent term
  si_unit: context-dependent
- id: lambda_a
  symbol: \\lambda_\\alpha
  name:
    es: multiplicador de ligadura
    en: constraint multiplier
  si_unit: context-dependent
- id: Lagr
  symbol: L
  name:
    es: lagrangiano
    en: Lagrangian
  si_unit: J
- id: Qi
  symbol: Q_i
  name:
    es: fuerza generalizada
    en: generalized force
  si_unit: context-dependent
- id: dqi
  symbol: \\delta q_i
  name:
    es: desplazamiento virtual
    en: virtual displacement
  si_unit: context-dependent
formulas:
- id: ligadura_no_holonoma_lineal
  title:
    es: Ligadura no holonoma lineal
    en: Ligadura no holonoma lineal
  equation: Aai=Aai
  latex: \\sum_i A_{\\alpha i}(q,t)\\dot q_i+a_\\alpha(q,t)=0
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
    target: Aai
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
  - target: Aai
    equation: Aai=Aai
    latex: \\sum_i A_{\\alpha i}(q,t)\\dot q_i+a_\\alpha(q,t)=0
- id: desplazamiento_virtual_compatible
  title:
    es: Desplazamiento virtual compatible
    en: Desplazamiento virtual compatible
  equation: dqi=dqi
  latex: \\sum_i A_{\\alpha i}(q,t)\\delta q_i=0
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
    target: dqi
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
  - target: dqi
    equation: dqi=dqi
    latex: \\sum_i A_{\\alpha i}(q,t)\\delta q_i=0
- id: lagrange_dalembert_no_holonomo
  title:
    es: Lagrange-D Alembert no holonomo
    en: Lagrange-D Alembert no holonomo
  equation: lambda_a=lambda_a
  latex: \\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot q_i}\\right)-\\frac{\\partial L}{\\partial q_i}=Q_i+\\sum_\\alpha\\lambda_\\alpha A_{\\alpha i}
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
    target: lambda_a
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
  - target: lambda_a
    equation: lambda_a=lambda_a
    latex: \\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot q_i}\\right)-\\frac{\\partial L}{\\partial q_i}=Q_i+\\sum_\\alpha\\lambda_\\alpha A_{\\alpha i}
- id: potencia_ligadura_ideal
  title:
    es: Potencia virtual de ligadura ideal
    en: Potencia virtual de ligadura ideal
  equation: Qi=Qi
  latex: \\sum_i Q_i^{c}\\delta q_i=0
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
    target: Qi
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
  - target: Qi
    equation: Qi=Qi
    latex: \\sum_i Q_i^{c}\\delta q_i=0
`;export{e as default};
