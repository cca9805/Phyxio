const e=`version: 5
topic:
  id: sistemas-con-ligaduras-y-dirac
  title:
    es: Sistemas con ligaduras y Dirac
    en: Constrained Systems and Dirac Brackets
variables:
- id: HT
  symbol: H_T
  name:
    es: hamiltoniano total
    en: total Hamiltonian
  si_unit: J
- id: Hc
  symbol: H_c
  name:
    es: hamiltoniano canonico
    en: canonical Hamiltonian
  si_unit: J
- id: phi_a
  symbol: \\phi_\\alpha
  name:
    es: ligadura
    en: constraint
  si_unit: context-dependent
- id: lambda_a
  symbol: \\lambda_\\alpha
  name:
    es: multiplicador
    en: multiplier
  si_unit: context-dependent
- id: Cab
  symbol: C_{\\alpha\\beta}
  name:
    es: matriz de ligaduras
    en: constraint matrix
  si_unit: context-dependent
- id: Fobs
  symbol: F
  name:
    es: observable
    en: observable
  si_unit: context-dependent
- id: DB
  symbol: \\{F,G\\}_D
  name:
    es: corchete de Dirac
    en: Dirac bracket
  si_unit: context-dependent
formulas:
- id: hamiltoniano_total_dirac
  title:
    es: Hamiltoniano total de Dirac
    en: Hamiltoniano total de Dirac
  equation: HT=HT
  latex: H_T=H_c+\\sum_\\alpha\\lambda_\\alpha\\phi_\\alpha
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
    target: HT
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
  - target: HT
    equation: HT=HT
    latex: H_T=H_c+\\sum_\\alpha\\lambda_\\alpha\\phi_\\alpha
- id: matriz_ligaduras_dirac
  title:
    es: Matriz de ligaduras
    en: Matriz de ligaduras
  equation: Cab=Cab
  latex: C_{\\alpha\\beta}=\\{\\phi_\\alpha,\\phi_\\beta\\}
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
    target: Cab
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
  - target: Cab
    equation: Cab=Cab
    latex: C_{\\alpha\\beta}=\\{\\phi_\\alpha,\\phi_\\beta\\}
- id: corchete_dirac
  title:
    es: Corchete de Dirac
    en: Corchete de Dirac
  equation: DB=DB
  latex: \\{F,G\\}_D=\\{F,G\\}-\\{F,\\phi_\\alpha\\}C^{-1}_{\\alpha\\beta}\\{\\phi_\\beta,G\\}
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
    target: DB
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
  - target: DB
    equation: DB=DB
    latex: \\{F,G\\}_D=\\{F,G\\}-\\{F,\\phi_\\alpha\\}C^{-1}_{\\alpha\\beta}\\{\\phi_\\beta,G\\}
- id: evolucion_con_ligaduras
  title:
    es: Evolucion con ligaduras
    en: Evolucion con ligaduras
  equation: Fobs=Fobs
  latex: \\dot F=\\{F,H_T\\}
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
    target: Fobs
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
  - target: Fobs
    equation: Fobs=Fobs
    latex: \\dot F=\\{F,H_T\\}
`;export{e as default};
