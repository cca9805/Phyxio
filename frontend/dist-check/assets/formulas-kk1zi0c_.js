const e=`version: 5
topic:
  id: leyes-de-kirchhoff
  title:
    es: Leyes de kirchhoff
    en: Kirchhoff's Laws
variables:
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
- id: Vs
  symbol: V_s
  name:
    es: tensión de fuente
    en: Source Voltage
  si_unit: V
- id: I
  symbol: I
  name:
    es: corriente de malla
    en: Mesh Current
  si_unit: A
- id: R1
  symbol: R_1
  name:
    es: resistencia 1
    en: Resistance 1
  si_unit: ohm
- id: R2
  symbol: R_2
  name:
    es: resistencia 2
    en: Resistance 2
  si_unit: ohm
- id: V
  symbol: V
  name:
    es: caída de tensión
    en: Voltage Drop
  si_unit: V
- id: R
  symbol: R
  name:
    es: resistencia equivalente local
    en: Local Equivalent Resistance
  si_unit: ohm
formulas:
- id: kcl_nodo
  title:
    es: Ley de corrientes de Kirchhoff en nodo
    en: Kirchhoff Current Law at node
  equation: I3 = I1 + I2
  latex: I_3=I_1+I_2
  rearrangements:
  - target: I1
    equation: I1 = I3 - I2
    latex: I_1=I_3-I_2
  - target: I2
    equation: I2 = I3 - I1
    latex: I_2=I_3-I_1
  constraints:
  - expr: "true"
    message:
      es: Las corrientes deben referirse al mismo nodo y convención de sentido.
      en: Currents must refer to the same node and direction convention.
  category: structural
  relation_type: conservation_law
  physical_meaning:
    es: Conservación de carga en un nodo, suma algebraica de corrientes igual a cero.
    en: Charge conservation at a node, algebraic sum of currents equals zero.
  validity:
    es: Válida para redes lumped con régimen cuasiestacionario.
    en: Valid for lumped networks in quasi-steady regime.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - análisis nodal
  - verificación de conectividad de ramas
  interpretation_tags: [ kcl, nodo, conservacion-carga ]
  result_semantics:
    target: I3
    meaning: El resultado expresa corriente de rama consistente con el balance nodal.
  domain_checks:
  - expr: "true"
    message:
      es: Si I1 e I2 entran al nodo, I3 debe reflejar su suma algebraica.
      en: If I1 and I2 enter node, I3 must reflect their algebraic sum.
  coherence_checks:
  - expr: "true"
    message:
      es: El cierre nodal debe mantenerse en cada nodo independiente.
      en: Nodal closure must hold at each independent node.
  graph_implications:
  - Permite auditar continuidad de corrientes en nodos complejos.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No cambies convención de signos después de plantear el sistema.
      en: Do not change sign convention after writing the system.
- id: kvl_malla
  title:
    es: Ley de tensiones de Kirchhoff en malla
    en: Kirchhoff Voltage Law at mesh
  equation: Vs = I*(R1 + R2)
  latex: V_s=I\\left(R_1+R_2\\right)
  rearrangements:
  - target: I
    equation: I = Vs/(R1 + R2)
    latex: I=\\frac{V_s}{R_1+R_2}
  constraints:
  - expr: R1 >= 0 and R2 >= 0
    message:
      es: Resistencias de malla deben ser no negativas en modelo pasivo.
      en: Mesh resistances must be non-negative in passive model.
  category: structural
  relation_type: energy_balance
  physical_meaning:
    es: Conservación de energía eléctrica en lazo cerrado, suma algebraica de tensiones igual a cero.
    en: Electrical energy conservation in closed loop, algebraic voltage sum equals zero.
  validity:
    es: Válida en circuitos DC lumped con elementos concentrados y recorrido consistente.
    en: Valid in lumped DC circuits with concentrated elements and consistent traversal.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - análisis de mallas
  - estimación de corriente de lazo
  interpretation_tags: [ kvl, malla, conservacion-energia ]
  result_semantics:
    target: Vs
    meaning: El resultado vincula excitación de fuente con caídas resistivas del lazo.
  domain_checks:
  - expr: "true"
    message:
      es: El signo de cada término depende del sentido de recorrido elegido.
      en: Sign of each term depends on selected traversal direction.
  coherence_checks:
  - expr: "true"
    message:
      es: Toda fuente y toda caída del lazo deben quedar representadas una sola vez.
      en: Every source and every drop in loop must be represented once.
  graph_implications:
  - Facilita validar cierres de lazo en redes con varias fuentes.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Un lazo mal orientado puede dar resultados numéricos plausibles pero físicamente incoherentes.
      en: Poorly oriented loop can yield plausible numbers but physically inconsistent interpretation.
- id: ohm_aux
  title:
    es: Relación auxiliar de Ohm
    en: Auxiliary Ohm relation
  equation: V = I*R
  latex: V=I\\cdot R
  rearrangements:
  - target: I
    equation: I = V/R
    latex: I=\\frac{V}{R}
  - target: R
    equation: R = V/I
    latex: R=\\frac{V}{I}
  constraints:
  - expr: R > 0
    message:
      es: Se requiere resistencia positiva para cálculo directo de corriente.
      en: Positive resistance is required for direct current calculation.
  category: operative
  relation_type: constitutive_relation
  physical_meaning:
    es: Conecta caída de tensión con corriente y resistencia en tramo óhmico lineal.
    en: Connects voltage drop with current and resistance in linear ohmic segment.
  validity:
    es: Válida para comportamiento lineal con temperatura y régimen controlados.
    en: Valid for linear behavior under controlled temperature and operating regime.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - cierre algebraico de ecuaciones de nodo y malla
  interpretation_tags: [ ohm, caida, linealidad ]
  result_semantics:
    target: V
    meaning: El resultado expresa caída local compatible con corriente y resistencia.
  domain_checks:
  - expr: "true"
    message:
      es: Si aumenta I con R fija, V debe aumentar en misma proporción.
      en: If current rises at fixed resistance, voltage must increase proportionally.
  coherence_checks:
  - expr: "true"
    message:
      es: Magnitudes de V, I y R deben pertenecer al mismo tramo físico.
      en: Voltage, current, and resistance must belong to same physical segment.
  graph_implications:
  - Ayuda a mapear caídas locales dentro de cada lazo.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No apliques la relación fuera de dominio lineal sin justificar modelo.
      en: Do not apply relation outside linear domain without model justification.
ui:
  default_formula: kcl_nodo
  groups:
  - title:
      es: Basicas
      en: Basics
    items:
    - kcl_nodo
    - kvl_malla
    - ohm_aux
`;export{e as default};
