# PROMPT YAML 04 | graficos.yaml

Create a downloadable YAML file named `graficos.yaml`.
Generate complete `graficos.yaml` for this leaf.
Output format:
- Deliver a downloadable file; do not print the YAML content in the chat.
- The downloaded file content must be valid YAML for the requested target file.
- Do not wrap the answer in Markdown fences.
- Do not add explanations before or after the YAML inside the file.
- Do not leave placeholders, TODOs, nulls, empty strings for required text, or example ids.
- Use double quotes for strings containing [[id]], {{f:id}}, LaTeX backslashes, colons, or comparison symbols.

Declared graph types: ['Coord']
Available magnitude ids: ['temperatura', 'temperatura_critica', 'temperatura_reducida', 'parametro_de_orden', 'salto_parametro_de_orden', 'amplitud_critica', 'exponente_critico_beta', 'campo_conjugado', 'susceptibilidad']
Available formula ids: ['parametro_orden_diferencia_fases', 'ley_parametro_orden_continuo', 'temperatura_reducida_orden', 'susceptibilidad_parametro_orden']

Current graficos.yaml:
GRAFICOS_ACTUAL_INICIO
version: '1.0'
leaf: parametros-de-orden
coord:
  id: parametros-de-orden-Coord
  graphId: parametros-de-orden-Coord
  type: Coord
  graphType: Coord
  title:
    es: Parámetro de orden frente a temperatura reducida
    en: Order parameter versus reduced temperature
  xAxis:
    es: temperatura reducida [[temperatura_reducida]]
    en: reduced temperature [[temperatura_reducida]]
  yAxis:
    es: parámetro de orden [[parametro_de_orden]]
    en: order parameter [[parametro_de_orden]]
  xMagnitude: temperatura_reducida
  yMagnitude: parametro_de_orden
  relation:
    es: La curva responde cómo el [[parametro_de_orden]] identifica el cambio de fase y la ruptura de simetría al variar la [[temperatura_reducida]].
    en: The curve answers how the [[parametro_de_orden]] identifies a phase change and symmetry breaking as [[temperatura_reducida]] varies.
  physicalReading:
    es: En la fase ordenada, [[parametro_de_orden]] es distinto de cero; al acercarse a [[temperatura_critica]] se reduce y puede anularse de forma continua.
    en: In the ordered phase, [[parametro_de_orden]] is nonzero; approaching [[temperatura_critica]] it decreases and may vanish continuously.
  slopeMeaning:
    es: La pendiente indica sensibilidad del orden frente al control térmico.
    en: The slope indicates sensitivity of order to thermal control.
  interceptMeaning:
    es: El corte cerca de cero señala fase desordenada o ausencia de orden macroscópico.
    en: The near-zero intercept marks a disordered phase or absence of macroscopic order.
  curvatureMeaning:
    es: La curvatura revela la ley crítica y el papel del exponente beta.
    en: Curvature reveals the critical law and the role of beta exponent.
  signMeaning:
    es: El signo distingue ramas de simetría equivalentes cuando el sistema lo permite.
    en: The sign distinguishes equivalent symmetry branches when the system allows it.
  areaMeaning:
    es: El área no representa una magnitud termodinámica directa en esta lectura.
    en: The area does not represent a direct thermodynamic quantity in this reading.
  domainMeaning:
    es: La lectura es más útil cerca de la transición y dentro del régimen donde existe un parámetro de orden definido.
    en: The reading is most useful near the transition and within the regime where an order parameter is defined.
  modelConnection:
    es: Conecta la clasificación de fases con una variable macroscópica que cambia con la simetría.
    en: It connects phase classification with a macroscopic variable changing with symmetry.
  formulaConnection:
    es: Usa {{f:temperatura_reducida_orden}} y {{f:ley_parametro_orden_continuo}} para leer la forma crítica.
    en: Use {{f:temperatura_reducida_orden}} and {{f:ley_parametro_orden_continuo}} to read the critical shape.
  readingFocus:
    es: Decide si el cambio de fase se reconoce porque [[parametro_de_orden]] aparece, desaparece o cambia de rama.
    en: Decide whether the phase change is recognized because [[parametro_de_orden]] appears, vanishes, or changes branch.
  agentHints:
    es:
    - Comprueba qué fase corresponde a cada lado de la temperatura crítica.
    - No confundas valor nulo con ausencia de sistema físico.
    - Relaciona pendiente fuerte con sensibilidad crítica.
    en:
    - Check which phase corresponds to each side of the critical temperature.
    - Do not confuse a zero value with absence of the physical system.
    - Relate steep slope to critical sensitivity.
  commonMistakes:
    es:
    - Usar cualquier magnitud como parámetro de orden.
    - Ignorar el signo de la temperatura reducida.
    - Leer el salto como continuo sin revisar la curva.
    en:
    - Using any quantity as an order parameter.
    - Ignoring the sign of reduced temperature.
    - Reading a jump as continuous without checking the curve.
  curveProfile:
    type: critical_decay
    expectedShape:
      es: Rama ordenada que decrece hacia cero al aproximarse a la temperatura crítica.
      en: Ordered branch decreasing toward zero when approaching critical temperature.
    keyPoints:
    - x: -1
      y: 1
      label:
        es: fase ordenada
        en: ordered phase
    - x: 0
      y: 0
      label:
        es: punto crítico
        en: critical point
    - x: 1
      y: 0
      label:
        es: fase desordenada
        en: disordered phase
  dataRange:
    xMin: -1
    xMax: 1
    yMin: 0
    yMax: 1.2
    autoScale: true
  recommendedTab: graficas
GRAFICOS_ACTUAL_FIN

meta.yaml context:
id: parametros-de-orden
nombre:
  es: Parametros de orden
  en: Order Parameters
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: transiciones-de-fase
parent_id: transiciones-de-fase
ruta_relativa: fisica-clasica/termodinamica-estadistica/transiciones-de-fase/parametros-de-orden
orden: 276200
type: leaf
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  - EXTRACURRICULAR
  en:
  - Secondary
  - Upper Secondary
  - University
  - Extracurricular
icon: 📘
descripcion: Define parámetros de orden para distinguir fases y transiciones continuas.
description_en: Defines order parameters to distinguish phases and continuous transitions.
tags:
  es:
  - transiciones de fase
  - parametro de orden
  - simetria
  - criticidad
  en:
  - phase transitions
  - order parameter
  - symmetry
  - criticality
prerequisitos:
- clasificacion-de-transiciones
graficos:
- Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: ¿Cómo identifica un parámetro de orden el cambio de fase y la ruptura de simetría?
  en: How does an order parameter identify a phase change and symmetry breaking?
representacion_dominante: Coord
magnitud_dominante: parametro_de_orden
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: false
    inline_graph: false
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
  mini_graph:
    enabled: false
    preferred_type: none
  output_policy:
    show_summary_first: true
    max_inline_messages: 2
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: false

magnitudes.yaml context:
version: 5.0.0
magnitudes:
- id: temperatura
  symbol: T
  nombre:
    es: temperatura
    en: temperature
  descripcion:
    es: Temperatura absoluta que controla el estado térmico.
    en: Absolute temperature controlling the thermal state.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: state
  physical_role: independent_variable
  used_in:
  - temperatura_reducida_orden
  - ley_parametro_orden_continuo
  common_mistake:
    es: Interpretarla sin comprobar fase, signo, unidad y dominio de validez.
    en: Interpreting it without checking phase, sign, unit, and validity domain.
  typical_range: depende del sistema; cerca de la transición se comparan cambios relativos
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo físico negativo en el modelo básico.
      en: It is not interpreted with a negative physical sign in the basic model.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele indicar fase desordenada, ausencia de salto o coincidencia con la referencia, según la magnitud.
      en: Zero often indicates a disordered phase, no jump, or coincidence with the reference, depending on the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: T>0
  interpretation_role:
    primary_for:
    - summary
    - physical_reading
    secondary_for:
    - coherence
    - model_validity
    - graph_reading
  graph_binding:
    channels:
    - xAxis
    - parameter
    preferred_axis: xAxis
  pedagogical_notes:
    es: temperatura debe leerse como parte de una clasificación de fase, no como número aislado.
    en: temperature should be read as part of a phase classification, not as an isolated number.
- id: temperatura_critica
  symbol: Tc
  nombre:
    es: temperatura crítica
    en: critical temperature
  descripcion:
    es: Temperatura donde cambia la fase idealmente.
    en: Temperature where the phase ideally changes.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: parameter
  physical_role: critical_reference
  used_in:
  - temperatura_reducida_orden
  - ley_parametro_orden_continuo
  common_mistake:
    es: Interpretarla sin comprobar fase, signo, unidad y dominio de validez.
    en: Interpreting it without checking phase, sign, unit, and validity domain.
  typical_range: depende del sistema; cerca de la transición se comparan cambios relativos
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo físico negativo en el modelo básico.
      en: It is not interpreted with a negative physical sign in the basic model.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele indicar fase desordenada, ausencia de salto o coincidencia con la referencia, según la magnitud.
      en: Zero often indicates a disordered phase, no jump, or coincidence with the reference, depending on the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: Tc>0
  interpretation_role:
    primary_for:
    - summary
    - physical_reading
    secondary_for:
    - coherence
    - model_validity
    - graph_reading
  graph_binding:
    channels:
    - parameter
    - constant
    preferred_axis: none
  pedagogical_notes:
    es: temperatura crítica debe leerse como parte de una clasificación de fase, no como número aislado.
    en: critical temperature should be read as part of a phase classification, not as an isolated number.
- id: temperatura_reducida
  symbol: t
  nombre:
    es: temperatura reducida
    en: reduced temperature
  descripcion:
    es: Distancia relativa con signo respecto a la temperatura crítica.
    en: Signed relative distance from critical temperature.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: derived
  physical_role: control_variable
  used_in:
  - temperatura_reducida_orden
  common_mistake:
    es: Interpretarla sin comprobar fase, signo, unidad y dominio de validez.
    en: Interpreting it without checking phase, sign, unit, and validity domain.
  typical_range: depende del sistema; cerca de la transición se comparan cambios relativos
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo puede fijar una rama o lado de la transición según convenio.
      en: The sign may set a branch or side of the transition by convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele indicar fase desordenada, ausencia de salto o coincidencia con la referencia, según la magnitud.
      en: Zero often indicates a disordered phase, no jump, or coincidence with the reference, depending on the quantity.
  value_nature:
    kind: real
    nonnegative_only: false
    expected_interval: '|t|<<1 cerca de Tc'
  interpretation_role:
    primary_for:
    - summary
    - physical_reading
    secondary_for:
    - coherence
    - model_validity
    - graph_reading
  graph_binding:
    channels:
    - xAxis
    preferred_axis: xAxis
  pedagogical_notes:
    es: temperatura reducida debe leerse como parte de una clasificación de fase, no como número aislado.
    en: reduced temperature should be read as part of a phase classification, not as an isolated number.
- id: parametro_de_orden
  symbol: Phi
  nombre:
    es: parámetro de orden
    en: order parameter
  descripcion:
    es: Magnitud que distingue fases por organización o simetría.
    en: Quantity distinguishing phases by organization or symmetry.
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: order_parameter
  physical_role: dependent_variable
  used_in:
  - ley_parametro_orden_continuo
  - parametro_orden_diferencia_fases
  - susceptibilidad_parametro_orden
  common_mistake:
    es: Interpretarla sin comprobar fase, signo, unidad y dominio de validez.
    en: Interpreting it without checking phase, sign, unit, and validity domain.
  typical_range: depende del sistema; cerca de la transición se comparan cambios relativos
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo puede fijar una rama o lado de la transición según convenio.
      en: The sign may set a branch or side of the transition by convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele indicar fase desordenada, ausencia de salto o coincidencia con la referencia, según la magnitud.
      en: Zero often indicates a disordered phase, no jump, or coincidence with the reference, depending on the quantity.
  value_nature:
    kind: real
    nonnegative_only: false
    expected_interval: ''
  interpretation_role:
    primary_for:
    - summary
    - physical_reading
    secondary_for:
    - coherence
    - model_validity
    - graph_reading
  graph_binding:
    channels:
    - yAxis
    preferred_axis: yAxis
  pedagogical_notes:
    es: parámetro de orden debe leerse como parte de una clasificación de fase, no como número aislado.
    en: order parameter should be read as part of a phase classification, not as an isolated number.
- id: salto_parametro_de_orden
  symbol: DeltaPhi
  nombre:
    es: salto del parámetro de orden
    en: order-parameter jump
  descripcion:
    es: Diferencia finita del parámetro de orden entre fases.
    en: Finite difference of the order parameter between phases.
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: order_parameter
  physical_role: diagnostic
  used_in:
  - parametro_orden_diferencia_fases
  common_mistake:
    es: Interpretarla sin comprobar fase, signo, unidad y dominio de validez.
    en: Interpreting it without checking phase, sign, unit, and validity domain.
  typical_range: depende del sistema; cerca de la transición se comparan cambios relativos
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo puede fijar una rama o lado de la transición según convenio.
      en: The sign may set a branch or side of the transition by convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele indicar fase desordenada, ausencia de salto o coincidencia con la referencia, según la magnitud.
      en: Zero often indicates a disordered phase, no jump, or coincidence with the reference, depending on the quantity.
  value_nature:
    kind: real
    nonnegative_only: false
    expected_interval: ''
  interpretation_role:
    primary_for:
    - summary
    - physical_reading
    secondary_for:
    - coherence
    - model_validity
    - graph_reading
  graph_binding:
    channels:
    - parameter
    preferred_axis: none
  pedagogical_notes:
    es: salto del parámetro de orden debe leerse como parte de una clasificación de fase, no como número aislado.
    en: order-parameter jump should be read as part of a phase classification, not as an isolated number.
- id: amplitud_critica
  symbol: A
  nombre:
    es: amplitud crítica
    en: critical amplitude
  descripcion:
    es: Prefactor de escala del parámetro de orden.
    en: Scaling prefactor for the order parameter.
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: parameter
  physical_role: scale_factor
  used_in:
  - ley_parametro_orden_continuo
  common_mistake:
    es: Interpretarla sin comprobar fase, signo, unidad y dominio de validez.
    en: Interpreting it without checking phase, sign, unit, and validity domain.
  typical_range: depende del sistema; cerca de la transición se comparan cambios relativos
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo físico negativo en el modelo básico.
      en: It is not interpreted with a negative physical sign in the basic model.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele indicar fase desordenada, ausencia de salto o coincidencia con la referencia, según la magnitud.
      en: Zero often indicates a disordered phase, no jump, or coincidence with the reference, depending on the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: A>=0
  interpretation_role:
    primary_for:
    - summary
    - physical_reading
    secondary_for:
    - coherence
    - model_validity
    - graph_reading
  graph_binding:
    channels:
    - parameter
    preferred_axis: none
  pedagogical_notes:
    es: amplitud crítica debe leerse como parte de una clasificación de fase, no como número aislado.
    en: critical amplitude should be read as part of a phase classification, not as an isolated number.
- id: exponente_critico_beta
  symbol: beta
  nombre:
    es: exponente crítico beta
    en: critical exponent beta
  descripcion:
    es: Exponente que controla cómo se anula el parámetro de orden.
    en: Exponent governing how the order parameter vanishes.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: parameter
  physical_role: exponent
  used_in:
  - ley_parametro_orden_continuo
  common_mistake:
    es: Interpretarla sin comprobar fase, signo, unidad y dominio de validez.
    en: Interpreting it without checking phase, sign, unit, and validity domain.
  typical_range: depende del sistema; cerca de la transición se comparan cambios relativos
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo físico negativo en el modelo básico.
      en: It is not interpreted with a negative physical sign in the basic model.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele indicar fase desordenada, ausencia de salto o coincidencia con la referencia, según la magnitud.
      en: Zero often indicates a disordered phase, no jump, or coincidence with the reference, depending on the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: beta>0
  interpretation_role:
    primary_for:
    - summary
    - physical_reading
    secondary_for:
    - coherence
    - model_validity
    - graph_reading
  graph_binding:
    channels:
    - parameter
    preferred_axis: none
  pedagogical_notes:
    es: exponente crítico beta debe leerse como parte de una clasificación de fase, no como número aislado.
    en: critical exponent beta should be read as part of a phase classification, not as an isolated number.
- id: campo_conjugado
  symbol: h
  nombre:
    es: campo conjugado
    en: conjugate field
  descripcion:
    es: Perturbación acoplada al parámetro de orden.
    en: Perturbation coupled to the order parameter.
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: control
  physical_role: external_field
  used_in:
  - susceptibilidad_parametro_orden
  common_mistake:
    es: Interpretarla sin comprobar fase, signo, unidad y dominio de validez.
    en: Interpreting it without checking phase, sign, unit, and validity domain.
  typical_range: depende del sistema; cerca de la transición se comparan cambios relativos
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo puede fijar una rama o lado de la transición según convenio.
      en: The sign may set a branch or side of the transition by convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele indicar fase desordenada, ausencia de salto o coincidencia con la referencia, según la magnitud.
      en: Zero often indicates a disordered phase, no jump, or coincidence with the reference, depending on the quantity.
  value_nature:
    kind: real
    nonnegative_only: false
    expected_interval: ''
  interpretation_role:
    primary_for:
    - summary
    - physical_reading
    secondary_for:
    - coherence
    - model_validity
    - graph_reading
  graph_binding:
    channels:
    - parameter
    preferred_axis: none
  pedagogical_notes:
    es: campo conjugado debe leerse como parte de una clasificación de fase, no como número aislado.
    en: conjugate field should be read as part of a phase classification, not as an isolated number.
- id: susceptibilidad
  symbol: chi
  nombre:
    es: susceptibilidad
    en: susceptibility

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]

formulas.yaml context:
version: 5.0.0
formulas:
- id: parametro_orden_diferencia_fases
  title:
    es: Diferencia entre fases
    en: Difference between phases
  equation: DeltaPhi=Phi_ordenada-Phi_desordenada
  latex: \Delta\Phi=\Phi_{ordenada}-\Phi_{desordenada}
  rearrangements:
  - id: parametro_orden_diferencia_fases_despeje_principal
    target: salto_parametro_de_orden
    equation: DeltaPhi=Phi_ordenada-Phi_desordenada
    latex: \Delta\Phi=\Phi_{ordenada}-\Phi_{desordenada}
  category: phase_transition
  relation_type: constitutive
  physical_meaning:
    es: Mide cuánto cambia el parámetro de orden al comparar dos fases.
    en: Measures how much the order parameter changes when comparing two phases.
  constraints:
    es: Usar magnitudes coherentes con la fase y el lado térmico considerado.
    en: Use quantities consistent with the phase and thermal side considered.
  validity:
    es: Válida cerca de la transición cuando el parámetro de orden distingue las fases relevantes.
    en: Valid near the transition when the order parameter distinguishes the relevant phases.
  dimension_check: consistent_with_target
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - modelos
  - ejemplos
  - graficos
  interpretation_tags:
  - order_parameter
  - phase_transition
  - symmetry
  result_semantics:
    target: salto_parametro_de_orden
    kind: scalar
    sign_meaning:
      es: El signo codifica una rama o convención de simetría; el valor físico suele depender del módulo o rama elegida.
      en: The sign encodes a branch or symmetry convention; physical meaning often depends on magnitude or chosen branch.
    absolute_value_meaning:
      es: El módulo mide cuán ordenada está la fase respecto al estado desordenado.
      en: The absolute value measures how ordered the phase is relative to the disordered state.
  domain_checks:
  - id: parametro_orden_diferencia_fases_dominio
    status: warning
    condition: near_transition
    message:
      es: Comprueba que el sistema esté cerca de la transición estudiada.
      en: Check that the system is near the studied transition.
  coherence_checks:
  - id: parametro_orden_diferencia_fases_coherencia
    status: ok
    message:
      es: La dimensión y el sentido físico deben coincidir con el parámetro de orden definido.
      en: Dimension and physical meaning must match the defined order parameter.
  graph_implications:
    es: La gráfica debe mostrar si el parámetro de orden cambia de forma continua, se anula o salta.
    en: The graph should show whether the order parameter changes continuously, vanishes, or jumps.
  pedagogical_triggers:
  - id: parametro_orden_diferencia_fases_error
    status: warning
    text:
      es: No confundas cualquier variable que cambia con un parámetro de orden.
      en: Do not confuse any changing variable with an order parameter.
- id: ley_parametro_orden_continuo
  title:
    es: Ley continua del parámetro de orden
    en: Continuous order-parameter law
  equation: Phi=A*((Tc-T)/Tc)^beta
  latex: \Phi=A\left(\frac{T_c-T}{T_c}\right)^\beta
  rearrangements:
  - id: ley_parametro_orden_continuo_despeje_principal
    target: parametro_de_orden
    equation: Phi=A*((Tc-T)/Tc)^beta
    latex: \Phi=A\left(\frac{T_c-T}{T_c}\right)^\beta
  category: phase_transition
  relation_type: constitutive
  physical_meaning:
    es: Describe cómo el parámetro de orden se anula al aproximarse a la temperatura crítica desde la fase ordenada.
    en: Describes how the order parameter vanishes when approaching critical temperature from the ordered phase.
  constraints:
    es: Usar magnitudes coherentes con la fase y el lado térmico considerado.
    en: Use quantities consistent with the phase and thermal side considered.
  validity:
    es: Válida cerca de la transición cuando el parámetro de orden distingue las fases relevantes.
    en: Valid near the transition when the order parameter distinguishes the relevant phases.
  dimension_check: consistent_with_target
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria
  - ejemplos
  - graficos
  interpretation_tags:
  - order_parameter
  - phase_transition
  - symmetry
  result_semantics:
    target: parametro_de_orden
    kind: scalar
    sign_meaning:
      es: El signo codifica una rama o convención de simetría; el valor físico suele depender del módulo o rama elegida.
      en: The sign encodes a branch or symmetry convention; physical meaning often depends on magnitude or chosen branch.
    absolute_value_meaning:
      es: El módulo mide cuán ordenada está la fase respecto al estado desordenado.
      en: The absolute value measures how ordered the phase is relative to the disordered state.
  domain_checks:
  - id: ley_parametro_orden_continuo_dominio
    status: warning
    condition: near_transition
    message:
      es: Comprueba que el sistema esté cerca de la transición estudiada.
      en: Check that the system is near the studied transition.
  coherence_checks:
  - id: ley_parametro_orden_continuo_coherencia
    status: ok
    message:
      es: La dimensión y el sentido físico deben coincidir con el parámetro de orden definido.
      en: Dimension and physical meaning must match the defined order parameter.
  graph_implications:
    es: La gráfica debe mostrar si el parámetro de orden cambia de forma continua, se anula o salta.
    en: The graph should show whether the order parameter changes continuously, vanishes, or jumps.
  pedagogical_triggers:
  - id: ley_parametro_orden_continuo_error
    status: warning
    text:
      es: No confundas cualquier variable que cambia con un parámetro de orden.
      en: Do not confuse any changing variable with an order parameter.
- id: temperatura_reducida_orden
  title:
    es: Temperatura reducida
    en: Reduced temperature
  equation: t=(T-Tc)/Tc
  latex: t=\frac{T-T_c}{T_c}
  rearrangements:
  - id: temperatura_reducida_orden_despeje_principal
    target: temperatura_reducida
    equation: t=(T-Tc)/Tc
    latex: t=\frac{T-T_c}{T_c}
  category: phase_transition
  relation_type: constitutive
  physical_meaning:
    es: Ubica el sistema respecto a la temperatura crítica con signo y escala relativa.
    en: Locates the system relative to critical temperature with sign and relative scale.
  constraints:
    es: Usar magnitudes coherentes con la fase y el lado térmico considerado.
    en: Use quantities consistent with the phase and thermal side considered.
  validity:
    es: Válida cerca de la transición cuando el parámetro de orden distingue las fases relevantes.
    en: Valid near the transition when the order parameter distinguishes the relevant phases.
  dimension_check: consistent_with_target
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria
  - modelos
  - graficos
  interpretation_tags:
  - order_parameter
  - phase_transition
  - symmetry
  result_semantics:
    target: temperatura_reducida
    kind: scalar
    sign_meaning:
      es: El signo codifica una rama o convención de simetría; el valor físico suele depender del módulo o rama elegida.
      en: The sign encodes a branch or symmetry convention; physical meaning often depends on magnitude or chosen branch.
    absolute_value_meaning:
      es: El módulo mide cuán ordenada está la fase respecto al estado desordenado.
      en: The absolute value measures how ordered the phase is relative to the disordered state.
  domain_checks:
  - id: temperatura_reducida_orden_dominio
    status: warning
    condition: near_transition
    message:
      es: Comprueba que el sistema esté cerca de la transición estudiada.
      en: Check that the system is near the studied transition.
  coherence_checks:
  - id: temperatura_reducida_orden_coherencia
    status: ok
    message:
      es: La dimensión y el sentido físico deben coincidir con el parámetro de orden definido.
      en: Dimension and physical meaning must match the defined order parameter.
  graph_implications:
    es: La gráfica debe mostrar si el parámetro de orden cambia de forma continua, se anula o salta.
    en: The graph should show whether the order parameter changes continuously, vanishes, or jumps.
  pedagogical_triggers:
  - id: temperatura_reducida_orden_error
    status: warning
    text:
      es: No confundas cualquier variable que cambia con un parámetro de orden.
      en: Do not confuse any changing variable with an order parameter.
- id: susceptibilidad_parametro_orden
  title:
    es: Susceptibilidad del parámetro de orden
    en: Order-parameter susceptibility
  equation: chi=dPhi/dh
  latex: \chi=\frac{d\Phi}{dh}
  rearrangements:
  - id: susceptibilidad_parametro_orden_despeje_principal
    target: susceptibilidad
    equation: chi=dPhi/dh
    latex: \chi=\frac{d\Phi}{dh}
  category: phase_transition
  relation_type: constitutive
  physical_meaning:
    es: Relaciona la respuesta del parámetro de orden con un campo conjugado pequeño.
    en: Relates order-parameter response to a small conjugate field.
  constraints:
    es: Usar magnitudes coherentes con la fase y el lado térmico considerado.
    en: Use quantities consistent with the phase and thermal side considered.
  validity:
    es: Válida cerca de la transición cuando el parámetro de orden distingue las fases relevantes.
    en: Valid near the transition when the order parameter distinguishes the relevant phases.
  dimension_check: consistent_with_target
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - modelos
  - ejemplos
  interpretation_tags:
  - order_parameter
  - phase_transition
  - symmetry
  result_semantics:
    target: susceptibilidad
    kind: scalar
    sign_meaning:
      es: El signo codifica una rama o convención de simetría; el valor físico suele depender del módulo o rama elegida.
      en: The sign encodes a branch or symmetry convention; physical meaning often depends on magnitude or chosen branch.
    absolute_value_meaning:
      es: El módulo mide cuán ordenada está la fase respecto al estado desordenado.
      en: The absolute value measures how ordered the phase is relative to the disordered state.
  domain_checks:
  - id: susceptibilidad_parametro_orden_dominio
    status: warning
    condition: near_transition
    message:
      es: Comprueba que el sistema esté cerca de la transición estudiada.
      en: Check that the system is near the studied transition.
  coherence_checks:
  - id: susceptibilidad_parametro_orden_coherencia
    status: ok
    message:
      es: La dimensión y el sentido físico deben coincidir con el parámetro de orden definido.
      en: Dimension and physical meaning must match the defined order parameter.
  graph_implications:
    es: La gráfica debe mostrar si el parámetro de orden cambia de forma continua, se anula o salta.
    en: The graph should show whether the order parameter changes continuously, vanishes, or jumps.
  pedagogical_triggers:
  - id: susceptibilidad_parametro_orden_error
    status: warning
    text:
      es: No confundas cualquier variable que cambia con un parámetro de orden.
      en: Do not confuse any changing variable with an order parameter.

graficos.yaml contract:
- version must be "1.0".
- leaf must be "parametros-de-orden".
- Include only sections declared by meta.yaml/map.
- Do not include JSX, HTML, React components, or <MathInline />.
- All bilingual fields require es and en.
- agentHints and commonMistakes require at least 3 entries in es and 3 in en.
- recommendedTab must be "graficas".
- Required sections for this leaf: ['coord']

Coord required fields:
- id and graphId: "parametros-de-orden-Coord"; type and graphType: "Coord".
- title, xAxis, yAxis, xMagnitude, yMagnitude.
- relation, physicalReading, slopeMeaning, interceptMeaning, curvatureMeaning, signMeaning, areaMeaning, domainMeaning, modelConnection, formulaConnection, readingFocus.
- agentHints, commonMistakes, curveProfile, dataRange, recommendedTab.
- curveProfile: type, expectedShape.es/en, keyPoints with at least 2 points. Each point has x, y, label.es/en.
- dataRange: xMin, xMax, yMin, yMax, autoScale.
- To pass graph_pfc_coherence, relation.es/en, physicalReading.es/en, and readingFocus.es/en must directly answer meta.yaml.pregunta_fisica_central.
- Reuse at least two significant terms from pregunta_fisica_central in the graph text, such as the dominant magnitude, independent variable, material/parameter, and physical dependency.
- Do not write a generic graph description disconnected from the central question.

Dcl required fields:
- id and graphId: "parametros-de-orden-Dcl"; type and graphType: "Dcl".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, forceVectors, equilibriumState, recommendedTab.
- forceVectors: at least one vector; each has id, label.es/en, targetObject, direction, magnitudeRef, signConvention.es/en, formulaRefs.
- equilibriumState.conditionDescription.es/en is required.

Svg required fields:
- id and graphId: "parametros-de-orden-Svg"; type and graphType: "Svg".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, animationTriggers, interactiveElements, recommendedTab.
- animationTriggers and interactiveElements are lists; they may be empty if no interaction applies.

If no graph types are declared, output only:
version: "1.0"
leaf: "parametros-de-orden"

Physics quality:
- A Coord graph must encode a real quantitative relation from formulas.yaml.
- A Dcl graph must represent actual forces/interactions of the model, not decorative arrows.
- A Svg graph must represent an interpretable physical scene, not a generic illustration.
- formulaConnection should use text/LaTeX, never JSX.
