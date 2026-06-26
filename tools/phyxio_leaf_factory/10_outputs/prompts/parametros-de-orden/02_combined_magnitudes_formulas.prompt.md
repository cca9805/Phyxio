# PROMPT YAML 02-03 | magnitudes.yaml + formulas.yaml

Create a downloadable ZIP file named `parametros-de-orden_formulas_magnitudes.zip`.
The ZIP must contain exactly two files at the ZIP root: `formulas.yaml` and `magnitudes.yaml`.
Do not print the YAML contents in the chat.
Do not use file markers, Markdown fences, or nested folders.

Each downloaded YAML file must contain raw valid YAML only.

Canonical map context. Use these values exactly where meta.yaml requires canonical fields:
id: parametros-de-orden
nombre: {'es': 'Parametros de orden', 'en': 'Order Parameters'}
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: transiciones-de-fase
parent_id: transiciones-de-fase
ruta_relativa: fisica-clasica/termodinamica-estadistica/transiciones-de-fase/parametros-de-orden
orden: 276200
niveles: {'es': ['ESO', 'BACHILLERATO', 'UNIVERSIDAD', 'EXTRACURRICULAR'], 'en': ['Secondary', 'Upper Secondary', 'University', 'Extracurricular']}
icon: 📘
graficos: ['Coord']
physical_role: {'es': 'concepto físico', 'en': 'physical concept'}

Current magnitudes.yaml:
MAGNITUDES_ACTUAL_INICIO
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
MAGNITUDES_ACTUAL_FIN

Current formulas.yaml:
FORMULAS_ACTUAL_INICIO
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
FORMULAS_ACTUAL_FIN

formulas.yaml contract:
- version must be "5.0.0".
- ui.default_formula must be the main formula id.
- formulas must be a non-empty list of domain formulas.
- Every formula must use the v5 field names exactly. Do not use legacy keys nombre, descripcion, used, limits, common_mistakes, or result_semantics.meaning/sign/unit.
- Every formula requires exactly these top-level fields: id, title, equation, latex, rearrangements, category, relation_type, physical_meaning, constraints, validity, dimension_check, calculable, motivo_no_calculable, used_in, interpretation_tags, result_semantics, domain_checks, coherence_checks, graph_implications, pedagogical_triggers.
- title, physical_meaning, and validity must be bilingual blocks with es and en.
- result_semantics requires target, kind, sign_meaning.es/en, absolute_value_meaning.es/en.
- rearrangements must include all physically useful solved forms, each with target, equation, latex.
- In equation and rearrangements.equation, write explicit multiplication with `*`: use `j*A`, not `jA`; use `epsilon*sigma*A*T^4`, not implicit products.
- latex fields must not include delimiters \( \) or \[ \].
- result_semantics.target must be a magnitude id that exists in magnitudes.yaml.

Required formula item shape:
- id: ley_x
  title: {es: "...", en: "..."}
  equation: "P = epsilon*sigma*A*T^4"
  latex: "P = \\varepsilon \\sigma A T^4"
  rearrangements:
    - target: temperatura_absoluta
      equation: "T = (P/(epsilon*sigma*A))^(1/4)"
      latex: "T = \\left(\\frac{P}{\\varepsilon \\sigma A}\\right)^{1/4}"
  category: "law"
  relation_type: "proportional_power"
  physical_meaning: {es: "...", en: "..."}
  constraints: {es: "...", en: "..."}
  validity: {es: "...", en: "..."}
  dimension_check: "..."
  calculable: true
  motivo_no_calculable: ""
  used_in: [potencia_radiada, temperatura_absoluta]
  interpretation_tags: [nonlinear, fourth_power]
  result_semantics:
    target: potencia_radiada
    kind: scalar_nonnegative
    sign_meaning: {es: "...", en: "..."}
    absolute_value_meaning: {es: "...", en: "..."}
  domain_checks: [{id: dominio, rule: "...", message: {es: "...", en: "..."}}]
  coherence_checks: [{id: coherencia, rule: "...", message: {es: "...", en: "..."}}]
  graph_implications: {coord: {shape: "...", x: "...", y: "..."}}
  pedagogical_triggers: [{id: error_tipico, condition: "...", feedback: {es: "...", en: "..."}}]

magnitudes.yaml contract:
- version must be "5.0.0".
- magnitudes must include every input, parameter, constant, component, and calculable result needed by formulas and interpretation.
- Every magnitude requires exactly these top-level fields: id, symbol, nombre, descripcion, unidad_si, dimension, is_vector, components, category, physical_role, used_in, common_mistake, typical_range, sign_behavior, zero_behavior, value_nature, interpretation_role, graph_binding, pedagogical_notes.
- nombre, descripcion, sign_behavior.meaning, zero_behavior.meaning, and pedagogical_notes must be bilingual blocks with es and en.
- graph_binding is mandatory for every magnitude. Do not use graph_role.
- graph_binding.channels must be a list. Use values such as xAxis, yAxis, parameter, constant, none.
- pedagogical_notes.es/en must contain useful explanatory text, not empty strings.
- ids must be lowercase ASCII with underscores, no spaces, no accents.
- used_in must reference formula ids from formulas.yaml.
- If a formula uses a magnitude id, that magnitude must exist.
- If a magnitude is calculable, at least one formula should target it.

Required magnitude item shape:
- id: temperatura_absoluta
  symbol: T
  nombre: {es: "...", en: "..."}
  descripcion: {es: "...", en: "..."}
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: estado_termico
  physical_role: variable_independiente
  used_in: [ley_stefan_boltzmann]
  common_mistake: "..."
  typical_range: "..."
  sign_behavior:
    has_sign: false
    meaning: {es: "...", en: "..."}
  zero_behavior:
    allowed: true
    meaning: {es: "...", en: "..."}
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "T >= 0 K"
  interpretation_role:
    primary_for: [ley_stefan_boltzmann]
    secondary_for: []
  graph_binding:
    channels: [xAxis]
  pedagogical_notes:
    es: "..."
    en: "..."

Physics quality:
- Include only formulas that belong to this leaf's physics domain.
- Include assumptions and validity limits that distinguish this leaf from neighboring concepts.
- Prefer standard physics notation and correct SI dimensions.
