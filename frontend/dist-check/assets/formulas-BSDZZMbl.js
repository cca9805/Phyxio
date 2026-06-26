const e=`version: 5
topic:
  id: ecuaciones-de-euler
  title:
    es: Ecuaciones de Euler del solido rigido
    en: Euler Equations for a Rigid Body
variables:
- id: tau1
  symbol: \\tau_1
  name:
    es: torque eje 1
    en: axis 1 torque
  si_unit: N*m
- id: tau2
  symbol: \\tau_2
  name:
    es: torque eje 2
    en: axis 2 torque
  si_unit: N*m
- id: tau3
  symbol: \\tau_3
  name:
    es: torque eje 3
    en: axis 3 torque
  si_unit: N*m
- id: I1
  symbol: I_1
  name:
    es: momento principal 1
    en: principal moment 1
  si_unit: kg*m^2
- id: I2
  symbol: I_2
  name:
    es: momento principal 2
    en: principal moment 2
  si_unit: kg*m^2
- id: I3
  symbol: I_3
  name:
    es: momento principal 3
    en: principal moment 3
  si_unit: kg*m^2
- id: omega1
  symbol: \\omega_1
  name:
    es: velocidad angular eje 1
    en: angular velocity axis 1
  si_unit: rad/s
- id: omega2
  symbol: \\omega_2
  name:
    es: velocidad angular eje 2
    en: angular velocity axis 2
  si_unit: rad/s
- id: omega3
  symbol: \\omega_3
  name:
    es: velocidad angular eje 3
    en: angular velocity axis 3
  si_unit: rad/s
- id: L
  symbol: \\vec L
  name:
    es: momento angular
    en: angular momentum
  si_unit: kg*m^2/s
formulas:
- id: momento_angular_tensorial
  title:
    es: Momento angular tensorial
    en: Momento angular tensorial
  equation: L=L
  latex: \\vec L=\\mathbf I\\,\\vec\\omega
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
    latex: \\vec L=\\mathbf I\\,\\vec\\omega
- id: euler_eje_1
  title:
    es: Euler eje principal 1
    en: Euler eje principal 1
  equation: tau1=tau1
  latex: \\tau_1=I_1\\dot\\omega_1+(I_3-I_2)\\omega_2\\omega_3
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
    target: tau1
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
  - target: tau1
    equation: tau1=tau1
    latex: \\tau_1=I_1\\dot\\omega_1+(I_3-I_2)\\omega_2\\omega_3
- id: euler_eje_2
  title:
    es: Euler eje principal 2
    en: Euler eje principal 2
  equation: tau2=tau2
  latex: \\tau_2=I_2\\dot\\omega_2+(I_1-I_3)\\omega_3\\omega_1
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
    target: tau2
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
  - target: tau2
    equation: tau2=tau2
    latex: \\tau_2=I_2\\dot\\omega_2+(I_1-I_3)\\omega_3\\omega_1
- id: euler_eje_3
  title:
    es: Euler eje principal 3
    en: Euler eje principal 3
  equation: tau3=tau3
  latex: \\tau_3=I_3\\dot\\omega_3+(I_2-I_1)\\omega_1\\omega_2
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
    target: tau3
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
  - target: tau3
    equation: tau3=tau3
    latex: \\tau_3=I_3\\dot\\omega_3+(I_2-I_1)\\omega_1\\omega_2
`;export{e as default};
