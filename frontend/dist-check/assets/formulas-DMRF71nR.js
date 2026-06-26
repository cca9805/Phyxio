const e=`version: 5
topic:
  id: resistencias-en-paralelo
  title:
    es: Resistencias en paralelo
    en: Resistors in Parallel
variables:
- id: Req
  symbol: R_{eq}
  name:
    es: resistencia equivalente
    en: Equivalent Resistance
  si_unit: ohm
- id: R1
  symbol: R_1
  name:
    es: resistencia de rama 1
    en: Branch Resistance 1
  si_unit: ohm
- id: R2
  symbol: R_2
  name:
    es: resistencia de rama 2
    en: Branch Resistance 2
  si_unit: ohm
- id: R3
  symbol: R_3
  name:
    es: resistencia de rama 3
    en: Branch Resistance 3
  si_unit: ohm
- id: V
  symbol: V
  name:
    es: tensión común
    en: Common Voltage
  si_unit: V
- id: I1
  symbol: I_1
  name:
    es: corriente de rama 1
    en: Branch Current 1
  si_unit: A
- id: I2
  symbol: I_2
  name:
    es: corriente de rama 2
    en: Branch Current 2
  si_unit: A
- id: I3
  symbol: I_3
  name:
    es: corriente de rama 3
    en: Branch Current 3
  si_unit: A
- id: It
  symbol: I_t
  name:
    es: corriente total
    en: Total Current
  si_unit: A
- id: Geq
  symbol: G_{eq}
  name:
    es: conductancia equivalente
    en: Equivalent Conductance
  si_unit: S
- id: G1
  symbol: G_1
  name:
    es: conductancia de rama 1
    en: Branch Conductance 1
  si_unit: S
- id: G2
  symbol: G_2
  name:
    es: conductancia de rama 2
    en: Branch Conductance 2
  si_unit: S
- id: G3
  symbol: G_3
  name:
    es: conductancia de rama 3
    en: Branch Conductance 3
  si_unit: S
formulas:
- id: req_reciproco
  title:
    es: Resistencia equivalente por suma de recíprocos
    en: Equivalent resistance from reciprocal sum
  equation: Req = 1/(1/R1 + 1/R2 + 1/R3)
  latex: R_{eq}=\\frac{1}{\\frac{1}{R_1}+\\frac{1}{R_2}+\\frac{1}{R_3}}
  rearrangements:
  - target: R1
    equation: R1 = 1/(1/Req - 1/R2 - 1/R3)
    latex: R_1=\\frac{1}{\\frac{1}{R_{eq}}-\\frac{1}{R_2}-\\frac{1}{R_3}}
  constraints:
  - expr: R1 > 0 and R2 > 0 and R3 > 0
    message:
      es: Las resistencias de rama deben ser positivas en el modelo pasivo.
      en: Branch resistances must be positive in passive model.
  category: structural
  relation_type: equivalent_law
  physical_meaning:
    es: En paralelo, la red ofrece más caminos de conducción y por eso Req disminuye.
    en: In parallel, network offers more conduction paths and therefore Req decreases.
  validity:
    es: Válida para ramas resistivas lineales conectadas entre los mismos dos nodos.
    en: Valid for linear resistive branches connected across the same two nodes.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - cálculo de resistencia equivalente
  - rediseño de ramas en paralelo
  interpretation_tags: [ paralelo, equivalente, red-resistiva ]
  result_semantics:
    target: Req
    meaning: El resultado representa la resistencia total vista por la fuente.
  domain_checks:
  - expr: Req <= R1 and Req <= R2 and Req <= R3
    message:
      es: Req debe ser menor o igual que cada resistencia de rama.
      en: Req must be lower than or equal to each branch resistance.
  coherence_checks:
  - expr: "true"
    message:
      es: Todas las ramas usadas en la ecuación deben estar realmente conectadas.
      en: All branches used in equation must actually be connected.
  graph_implications:
  - Un incremento de ramas activas desplaza Req hacia valores menores.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Si Req sale mayor que la menor rama hay error de planteo o unidades.
      en: If Req is greater than smallest branch, there is setup or unit error.
- id: req_dos_ramas
  title:
    es: Forma compacta para dos ramas
    en: Compact two-branch form
  equation: Req = (R1*R2)/(R1 + R2)
  latex: R_{eq}=\\frac{R_1R_2}{R_1+R_2}
  rearrangements: []
  constraints:
  - expr: R1 > 0 and R2 > 0
    message:
      es: R1 y R2 deben ser positivas para interpretar paralelo pasivo.
      en: R1 and R2 must be positive for passive parallel interpretation.
  category: operative
  relation_type: equivalent_law
  physical_meaning:
    es: Resume el caso de dos ramas y facilita cálculo rápido en diseño preliminar.
    en: Summarizes two-branch case and speeds up preliminary design.
  validity:
    es: Solo para dos ramas efectivas sin tercera derivación activa.
    en: Only for two effective branches with no active third branch.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - ejercicios de dos ramas
  interpretation_tags: [ paralelo, dos-ramas ]
  result_semantics:
    target: Req
    meaning: Entrega Req para el caso reducido de dos resistencias en paralelo.
  domain_checks:
  - expr: Req <= R1 and Req <= R2
    message:
      es: Req debe permanecer por debajo de ambas resistencias.
      en: Req must remain below both resistances.
  coherence_checks:
  - expr: "true"
    message:
      es: Si existe una tercera rama activa esta forma deja de ser completa.
      en: If a third branch is active this form is no longer complete.
  graph_implications:
  - Permite comparar rápidamente sensibilidad de Req frente a cambios de una rama.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Es útil como atajo solo cuando la topología realmente tiene dos ramas.
      en: It is useful as shortcut only when topology truly has two branches.
- id: corriente_rama_1
  title:
    es: Corriente de la rama 1
    en: Branch 1 current
  equation: I1 = V/R1
  latex: I_1=\\frac{V}{R_1}
  rearrangements: []
  constraints:
  - expr: R1 > 0
    message:
      es: R1 debe ser positiva para cálculo directo por ley de Ohm.
      en: R1 must be positive for direct Ohm-law calculation.
  category: operative
  relation_type: constitutive_relation
  physical_meaning:
    es: La corriente de una rama depende de la misma tensión común y su resistencia local.
    en: Branch current depends on common voltage and its local resistance.
  validity:
    es: Válida en tramo óhmico lineal de la rama 1.
    en: Valid for linear ohmic segment of branch 1.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - reparto de corriente
  interpretation_tags: [ ohm, rama ]
  result_semantics:
    target: I1
    meaning: Mide la demanda de corriente de la rama de menor o mayor resistencia.
  domain_checks:
  - expr: "true"
    message:
      es: A tensión fija, menor R1 implica mayor I1.
      en: At fixed voltage, lower R1 implies higher I1.
  coherence_checks:
  - expr: "true"
    message:
      es: V y R1 deben pertenecer a la misma rama física.
      en: V and R1 must belong to same physical branch.
  graph_implications:
  - La curva I1 frente a V es lineal en el modelo resistivo.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Si I1 no cambia al variar V, revisa saturación o error de medición.
      en: If I1 does not change with V, check saturation or measurement error.
- id: corriente_rama_2
  title:
    es: Corriente de la rama 2
    en: Branch 2 current
  equation: I2 = V/R2
  latex: I_2=\\frac{V}{R_2}
  rearrangements: []
  constraints:
  - expr: R2 > 0
    message:
      es: R2 positiva en régimen pasivo lineal.
      en: R2 must be positive in passive linear regime.
  category: operative
  relation_type: constitutive_relation
  physical_meaning:
    es: Define el aporte de la segunda rama al reparto total.
    en: Defines second branch contribution to total sharing.
  validity:
    es: Válida cuando la rama 2 se comporta como resistor lineal.
    en: Valid when branch 2 behaves as linear resistor.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - reparto de corriente
  interpretation_tags: [ ohm, rama ]
  result_semantics:
    target: I2
    meaning: Entrega el flujo de carga de la rama 2 bajo tensión común.
  domain_checks:
  - expr: "true"
    message:
      es: A R2 fija, I2 escala proporcionalmente con V.
      en: At fixed R2, I2 scales proportionally with V.
  coherence_checks:
  - expr: "true"
    message:
      es: Debe usarse con la misma referencia de polaridad que I1 e I3.
      en: It must use same polarity reference as I1 and I3.
  graph_implications:
  - Permite comparar desequilibrios de ramas al cambiar resistencias.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Unidades mezcladas entre V y R2 generan errores de orden de magnitud.
      en: Mixed units between V and R2 cause order-of-magnitude errors.
- id: corriente_rama_3
  title:
    es: Corriente de la rama 3
    en: Branch 3 current
  equation: I3 = V/R3
  latex: I_3=\\frac{V}{R_3}
  rearrangements: []
  constraints:
  - expr: R3 > 0
    message:
      es: R3 debe ser positiva en modelo resistivo pasivo.
      en: R3 must be positive in passive resistive model.
  category: operative
  relation_type: constitutive_relation
  physical_meaning:
    es: Cuantifica el flujo por la tercera rama sometida a la misma tensión.
    en: Quantifies flow through third branch under same voltage.
  validity:
    es: Válida para rama lineal sin elementos activos en serie.
    en: Valid for linear branch without active series elements.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - reparto de corriente
  interpretation_tags: [ ohm, rama ]
  result_semantics:
    target: I3
    meaning: Aporta la tercera contribución al balance de nodo de entrada.
  domain_checks:
  - expr: "true"
    message:
      es: Con tensión fija, una R3 alta reduce I3.
      en: With fixed voltage, high R3 reduces I3.
  coherence_checks:
  - expr: "true"
    message:
      es: Solo se usa si la rama 3 existe y está cerrada.
      en: Use only if branch 3 exists and is closed.
  graph_implications:
  - Permite visualizar ramas dominantes en consumo de corriente.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Si I3 domina inesperadamente, revisa valor real de R3.
      en: If I3 dominates unexpectedly, check actual R3 value.
- id: corriente_total
  title:
    es: Corriente total por conservación nodal
    en: Total current from nodal conservation
  equation: It = I1 + I2 + I3
  latex: I_t=I_1+I_2+I_3
  rearrangements: []
  constraints:
  - expr: "true"
    message:
      es: Las corrientes deben corresponder al mismo nodo de reparto.
      en: Currents must correspond to same sharing node.
  category: structural
  relation_type: conservation_law
  physical_meaning:
    es: La corriente total es suma algebraica de corrientes que entran a ramas en paralelo.
    en: Total current is algebraic sum of currents entering parallel branches.
  validity:
    es: Válida en análisis nodal DC con acumulación de carga despreciable en nodo.
    en: Valid in DC nodal analysis with negligible charge accumulation.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - verificación de KCL
  - dimensionamiento de fuente
  interpretation_tags: [ kcl, nodo, corriente-total ]
  result_semantics:
    target: It
    meaning: Determina corriente total demandada a la fuente.
  domain_checks:
  - expr: "true"
    message:
      es: El balance debe cerrar con una única convención de signo.
      en: Balance must close with a single sign convention.
  coherence_checks:
  - expr: "true"
    message:
      es: Si falta una rama en la suma, It queda subestimada.
      en: If a branch is missing in sum, It is underestimated.
  graph_implications:
  - Facilita inspección de sobrecorriente en nodo de alimentación.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No reemplaces conservación nodal por promedio de ramas.
      en: Do not replace nodal conservation with branch averaging.
- id: geq_suma
  title:
    es: Conductancia equivalente por suma directa
    en: Equivalent conductance by direct sum
  equation: Geq = G1 + G2 + G3
  latex: G_{eq}=G_1+G_2+G_3
  rearrangements: []
  constraints:
  - expr: G1 >= 0 and G2 >= 0 and G3 >= 0
    message:
      es: Conductancias de rama no negativas en red pasiva.
      en: Branch conductances are non-negative in passive network.
  category: structural
  relation_type: equivalent_law
  physical_meaning:
    es: En paralelo las conductancias se agregan linealmente.
    en: In parallel, conductances aggregate linearly.
  validity:
    es: Útil cuando se dispone de datos en siemens y se evita inversión repetida.
    en: Useful when data is in siemens and repeated inversion is avoided.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - análisis por conductancia
  interpretation_tags: [ conductancia, paralelo ]
  result_semantics:
    target: Geq
    meaning: Entrega la capacidad total de conducción de la red.
  domain_checks:
  - expr: Geq >= G1 and Geq >= G2 and Geq >= G3
    message:
      es: Geq debe ser mayor o igual que cada conductancia de rama.
      en: Geq must be greater than or equal to each branch conductance.
  coherence_checks:
  - expr: "true"
    message:
      es: G1, G2 y G3 deben corresponder a ramas distintas del mismo paralelo.
      en: G1, G2 and G3 must correspond to distinct branches of same parallel block.
  graph_implications:
  - Muestra crecimiento de conducción al añadir ramas activas.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Si Geq decrece al añadir rama hay error de signo o dato.
      en: If Geq decreases when adding branch there is sign or data error.
- id: geq_reciproco
  title:
    es: Relación entre conductancia y resistencia equivalente
    en: Relation between conductance and equivalent resistance
  equation: Geq = 1/Req
  latex: G_{eq}=\\frac{1}{R_{eq}}
  rearrangements: []
  constraints:
  - expr: Req > 0
    message:
      es: Req debe ser positiva para calcular conductancia equivalente.
      en: Req must be positive to compute equivalent conductance.
  category: operative
  relation_type: constitutive_relation
  physical_meaning:
    es: Traduce el mismo fenómeno del paralelo entre dos representaciones duales.
    en: Maps same parallel behavior into dual representations.
  validity:
    es: Válida para redes resistivas lineales.
    en: Valid for linear resistive networks.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - conversión entre parámetros equivalentes
  interpretation_tags: [ dualidad, resistencia, conductancia ]
  result_semantics:
    target: Geq
    meaning: Expresa conductancia total asociada a Req.
  domain_checks:
  - expr: Geq >= 0
    message:
      es: La conductancia equivalente debe mantenerse no negativa.
      en: Equivalent conductance must remain non-negative.
  coherence_checks:
  - expr: "true"
    message:
      es: Req usada aquí debe provenir de la misma red de ramas.
      en: Req used here must come from the same branch network.
  graph_implications:
  - Ayuda a interpretar cambios de pendiente en gráficos I-V globales.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Si Req se acerca a cero, Geq crece fuertemente.
      en: If Req approaches zero, Geq grows strongly.
ui:
  default_formula: req_reciproco
  groups:
  - title:
      es: Basicas
      en: Basics
    items:
    - req_reciproco
    - req_dos_ramas
    - corriente_rama_1
    - corriente_rama_2
    - corriente_rama_3
    - corriente_total
    - geq_suma
    - geq_reciproco
`;export{e as default};
