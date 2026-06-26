# PROMPT YAML 02-03 | magnitudes.yaml + formulas.yaml

Create a downloadable ZIP file named `fenomenos-criticos_formulas_magnitudes.zip`.
The ZIP must contain exactly two files at the ZIP root: `formulas.yaml` and `magnitudes.yaml`.
Do not print the YAML contents in the chat.
Do not use file markers, Markdown fences, or nested folders.

Each downloaded YAML file must contain raw valid YAML only.

Canonical map context. Use these values exactly where meta.yaml requires canonical fields:
id: fenomenos-criticos
nombre: {'es': 'Fenomenos criticos', 'en': 'Critical Phenomena'}
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: transiciones-de-fase
parent_id: transiciones-de-fase
ruta_relativa: fisica-clasica/termodinamica-estadistica/transiciones-de-fase/fenomenos-criticos
orden: 276300
niveles: {'es': ['ESO', 'BACHILLERATO', 'UNIVERSIDAD', 'EXTRACURRICULAR'], 'en': ['Secondary', 'Upper Secondary', 'University', 'Extracurricular']}
icon: 🧪
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
    es: Temperatura absoluta que controla el estado térmico del sistema.
    en: Absolute temperature controlling the thermal state of the system.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: control_variable
  physical_role: independent_variable
  used_in:
  - temperatura_reducida_critica
  common_mistake: Usar Celsius en lugar de kelvin.
  typical_range: T > 0 K
  sign_behavior:
    has_sign: true
    meaning:
      es: No debe ser negativa en escala absoluta.
      en: It must not be negative on an absolute scale.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero kelvin es un límite ideal no operativo aquí.
      en: Zero kelvin is an ideal limit not used here.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: T > 0 K
  interpretation_role:
    primary_for:
    - temperatura_reducida_critica
    secondary_for: []
  graph_binding:
    channels:
    - xAxis
    - parameter
  pedagogical_notes:
    es: Usa [[temperatura]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[temperatura]] to connect calculation with the physical reading of the critical regime.
- id: temperatura_critica
  symbol: T_c
  nombre:
    es: temperatura crítica
    en: critical temperature
  descripcion:
    es: Temperatura en la que aparece el comportamiento crítico ideal.
    en: Temperature at which ideal critical behavior appears.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: critical_parameter
  physical_role: threshold
  used_in:
  - temperatura_reducida_critica
  common_mistake: Confundirla con cualquier temperatura de cambio gradual.
  typical_range: T_c > 0 K
  sign_behavior:
    has_sign: true
    meaning:
      es: Es positiva en escala absoluta.
      en: It is positive on an absolute scale.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero representa ausencia o referencia de la magnitud.
      en: Zero represents absence or reference of the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: T_c > 0 K
  interpretation_role:
    primary_for:
    - temperatura_reducida_critica
    secondary_for: []
  graph_binding:
    channels:
    - constant
    - parameter
  pedagogical_notes:
    es: Usa [[temperatura_critica]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[temperatura_critica]] to connect calculation with the physical reading of the critical regime.
- id: temperatura_reducida
  symbol: t
  nombre:
    es: temperatura reducida
    en: reduced temperature
  descripcion:
    es: Distancia relativa y con signo respecto a la temperatura crítica.
    en: Signed relative distance from the critical temperature.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: dimensionless_control
  physical_role: reduced_variable
  used_in:
  - temperatura_reducida_critica
  - parametro_orden_ley_critica
  - susceptibilidad_critica
  - longitud_correlacion_critica
  - calor_especifico_critico
  common_mistake: Olvidar el valor absoluto en leyes de divergencia.
  typical_range: '|t| < 0.1 en régimen crítico'
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo distingue estar por encima o por debajo de la temperatura crítica.
      en: The sign distinguishes being above or below the critical temperature.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica el punto crítico ideal.
      en: Zero indicates the ideal critical point.
  value_nature:
    kind: real
    nonnegative_only: false
    expected_interval: '|t| < 0.1 en régimen crítico'
  interpretation_role:
    primary_for:
    - temperatura_reducida_critica
    - parametro_orden_ley_critica
    secondary_for:
    - susceptibilidad_critica
    - longitud_correlacion_critica
    - calor_especifico_critico
  graph_binding:
    channels:
    - xAxis
  pedagogical_notes:
    es: Usa [[temperatura_reducida]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[temperatura_reducida]] to connect calculation with the physical reading of the critical regime.
- id: parametro_de_orden
  symbol: Phi
  nombre:
    es: parámetro de orden
    en: order parameter
  descripcion:
    es: Magnitud macroscópica que distingue fases por simetría u organización.
    en: Macroscopic quantity distinguishing phases by symmetry or organization.
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: state_variable
  physical_role: dependent_variable
  used_in:
  - parametro_orden_ley_critica
  common_mistake: Tratarlo como constante lejos y cerca de la transición.
  typical_range: 0 a valor material típico
  sign_behavior:
    has_sign: true
    meaning:
      es: Puede tener signo por simetría; su módulo mide orden.
      en: It may have sign by symmetry; its magnitude measures order.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele indicar fase desordenada o simétrica.
      en: Zero often indicates a disordered or symmetric phase.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: 0 a valor material típico
  interpretation_role:
    primary_for:
    - parametro_orden_ley_critica
    secondary_for: []
  graph_binding:
    channels:
    - yAxis
  pedagogical_notes:
    es: Usa [[parametro_de_orden]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[parametro_de_orden]] to connect calculation with the physical reading of the critical regime.
- id: amplitud_critica
  symbol: A
  nombre:
    es: amplitud crítica
    en: critical amplitude
  descripcion:
    es: Factor de escala del parámetro de orden en la ley crítica.
    en: Scale factor of the order parameter in the critical law.
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: fit_parameter
  physical_role: scale_factor
  used_in:
  - parametro_orden_ley_critica
  common_mistake: Confundir amplitud con exponente universal.
  typical_range: depende del material
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue su definición física.
      en: The sign follows its physical definition.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero representa ausencia o referencia de la magnitud.
      en: Zero represents absence or reference of the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: depende del material
  interpretation_role:
    primary_for:
    - parametro_orden_ley_critica
    secondary_for: []
  graph_binding:
    channels:
    - parameter
  pedagogical_notes:
    es: Usa [[amplitud_critica]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[amplitud_critica]] to connect calculation with the physical reading of the critical regime.
- id: exponente_critico_beta
  symbol: beta
  nombre:
    es: exponente crítico beta
    en: critical exponent beta
  descripcion:
    es: Exponente que gobierna la desaparición del parámetro de orden.
    en: Exponent governing the vanishing of the order parameter.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: critical_exponent
  physical_role: exponent
  used_in:
  - parametro_orden_ley_critica
  common_mistake: Pensar que siempre vale el mismo número para cualquier sistema.
  typical_range: 0 < beta < 1 típico
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue su definición física.
      en: The sign follows its physical definition.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero representa ausencia o referencia de la magnitud.
      en: Zero represents absence or reference of the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: 0 < beta < 1 típico
  interpretation_role:
    primary_for:
    - parametro_orden_ley_critica
    secondary_for: []
  graph_binding:
    channels:
    - parameter
  pedagogical_notes:
    es: Usa [[exponente_critico_beta]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[exponente_critico_beta]] to connect calculation with the physical reading of the critical regime.
- id: susceptibilidad
  symbol: chi
  nombre:
    es: susceptibilidad
    en: susceptibility
  descripcion:
    es: Respuesta del sistema ante un campo o perturbación conjugada.
    en: System response to a conjugate field or perturbation.
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: response_function
  physical_role: dependent_variable
  used_in:
  - susceptibilidad_critica
  common_mistake: Interpretar la divergencia ideal como infinita en una muestra finita.
  typical_range: crece cerca de T_c
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue su definición física.
      en: The sign follows its physical definition.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica respuesta nula ideal.
      en: Zero indicates ideal null response.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: crece cerca de T_c
  interpretation_role:
    primary_for:
    - susceptibilidad_critica
    secondary_for: []
  graph_binding:
    channels:
    - yAxis
  pedagogical_notes:
    es: Usa [[susceptibilidad]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[susceptibilidad]] to connect calculation with the physical reading of the critical regime.
- id: amplitud_susceptibilidad
  symbol: C
  nombre:
    es: amplitud de susceptibilidad
    en: susceptibility amplitude
  descripcion:
    es: Escala prefactorial de la susceptibilidad crítica.
    en: Prefactor scale of critical susceptibility.
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: fit_parameter
  physical_role: scale_factor
  used_in:
  - susceptibilidad_critica
  common_mistake: Confundir prefactor con exponente gamma.
  typical_range: depende del material
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue su definición física.
      en: The sign follows its physical definition.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero representa ausencia o referencia de la magnitud.
      en: Zero represents absence or reference of the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: depende del material
  interpretation_role:
    primary_for:
    - susceptibilidad_critica
    secondary_for: []
  graph_binding:
    channels:
    - parameter
  pedagogical_notes:
    es: Usa [[amplitud_susceptibilidad]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[amplitud_susceptibilidad]] to connect calculation with the physical reading of the critical regime.
- id: exponente_critico_gamma
  symbol: gamma
  nombre:
    es: exponente crítico gamma
    en: critical exponent gamma
  descripcion:
    es: Exponente de divergencia de la susceptibilidad.
    en: Exponent for susceptibility divergence.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: critical_exponent
  physical_role: exponent
  used_in:
  - susceptibilidad_critica
  common_mistake: Usarlo con signo positivo en el exponente sin revisar la divergencia.
  typical_range: gamma > 0 típico
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue su definición física.
      en: The sign follows its physical definition.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero representa ausencia o referencia de la magnitud.
      en: Zero represents absence or reference of the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: gamma > 0 típico
  interpretation_role:
    primary_for:
    - susceptibilidad_critica
    secondary_for: []
  graph_binding:
    channels:
    - parameter
  pedagogical_notes:
    es: Usa [[exponente_critico_gamma]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[exponente_critico_gamma]] to connect calculation with the physical reading of the critical regime.
- id: longitud_correlacion
  symbol: xi
  nombre:
    es: longitud de correlación
    en: correlation length
  descripcion:
    es: Distancia característica hasta la que se correlacionan las fluctuaciones.
    en: Characteristic distance over which fluctuations are correlated.
  unidad_si: m
  dimension: L
  is_vector: false
  components: []
  category: length
  physical_role: dependent_variable
  used_in:
  - longitud_correlacion_critica
  common_mistake: Creer que puede superar sin límite el tamaño real de la muestra.
  typical_range: nm a tamaño de muestra cerca de T_c
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue su definición física.
      en: The sign follows its physical definition.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero representa ausencia o referencia de la magnitud.
      en: Zero represents absence or reference of the quantity.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: nm a tamaño de muestra cerca de T_c
  interpretation_role:
    primary_for:
    - longitud_correlacion_critica
    secondary_for: []
  graph_binding:
    channels:
    - yAxis
  pedagogical_notes:
    es: Usa [[longitud_correlacion]] para conectar el cálculo con la lectura física del régimen crítico.
    en: Use [[longitud_correlacion]] to connect calculation with the physical reading of the critical regime.
- id: amplitud_correlacion
  symbol: xi_0
  nombre:
    es: amplitud de correlación
    en: correlation amplitude
  descripcion:
    es: Longitud microscópica de escala para la divergencia de correlación.
    en: Microscopic length scale for correlation divergence.
  unidad_

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]
MAGNITUDES_ACTUAL_FIN

Current formulas.yaml:
FORMULAS_ACTUAL_INICIO
version: 5.0.0
ui:
  default_formula: parametro_orden_ley_critica
formulas:
- id: temperatura_reducida_critica
  title:
    es: Temperatura reducida crítica
    en: Reduced critical temperature
  equation: temperatura_reducida=(temperatura-temperatura_critica)/temperatura_critica
  latex: t=\frac{T-T_c}{T_c}
  rearrangements:
  - id: temperatura_desde_reducida
    equation: temperatura=temperatura_critica*(1+temperatura_reducida)
    latex: T=T_c(1+t)
    target: temperatura
  category: definicion
  relation_type: ratio
  physical_meaning:
    es: Mide la distancia relativa a la temperatura crítica y conserva el signo del lado térmico.
    en: Measures the relative distance to the critical temperature and keeps the sign of the thermal side.
  constraints:
    es: Usar magnitudes en SI y evaluar suficientemente cerca de la región crítica sin cruzar un régimen no aplicable.
    en: Use SI quantities and evaluate sufficiently near the critical region without crossing into an inapplicable regime.
  validity:
    es: Válida para temperatura crítica positiva y sistemas con transición bien identificada.
    en: Valid for positive critical temperature and systems with a well identified transition.
  dimension_check: dimensionless
  calculable: true
  motivo_no_calculable:
    es: ''
    en: ''
  used_in:
  - teoria.md
  - modelos.md
  - ejemplos.md
  - interpretacion.yaml
  - graficos.yaml
  interpretation_tags:
  - critical_distance
  - dimensionless_control
  result_semantics:
    target: temperatura_reducida
    kind: scalar
    sign_meaning:
      es: El signo indica el lado térmico o la positividad física de la magnitud según la relación.
      en: The sign indicates the thermal side or the physical positivity of the quantity according to the relation.
    absolute_value_meaning:
      es: El valor absoluto mide la intensidad del comportamiento crítico observado.
      en: The absolute value measures the strength of the observed critical behavior.
  domain_checks:
  - id: temperatura_reducida_critica_temperatura_positiva
    status: warning
    condition: temperatura > 0
    text:
      es: La temperatura absoluta debe ser positiva.
      en: Absolute temperature must be positive.
  - id: temperatura_reducida_critica_cercania_critica
    status: info
    condition: abs(temperatura_reducida) < 0.1
    text:
      es: La ley de escala es más representativa cerca de la temperatura crítica.
      en: The scaling law is most representative near the critical temperature.
  coherence_checks:
  - id: temperatura_reducida_critica_dimensiones
    status: ok
    text:
      es: La dimensión del resultado debe coincidir con la magnitud objetivo.
      en: The result dimension must match the target quantity.
  - id: temperatura_reducida_critica_exponente
    status: warning
    text:
      es: El exponente crítico debe ser no negativo en esta lectura fenomenológica.
      en: The critical exponent should be nonnegative in this phenomenological reading.
  graph_implications:
    es: El eje horizontal puede usar la temperatura reducida para ver la cercanía a la temperatura crítica.
    en: The horizontal axis may use reduced temperature to show proximity to the critical temperature.
  pedagogical_triggers:
  - es: Distingue tendencia crítica de extrapolación lejana.
    en: Distinguish critical trend from far-range extrapolation.
  - es: Comprueba qué lado de la temperatura crítica se está usando.
    en: Check which side of the critical temperature is being used.
- id: parametro_orden_ley_critica
  title:
    es: Ley crítica del parámetro de orden
    en: Critical law for the order parameter
  equation: parametro_de_orden=amplitud_critica*abs(temperatura_reducida)^exponente_critico_beta
  latex: \Phi=A\,|t|^{\beta}
  rearrangements:
  - id: amplitud_desde_parametro
    equation: amplitud_critica=parametro_de_orden/(abs(temperatura_reducida)^exponente_critico_beta)
    latex: A=\Phi/|t|^\beta
    target: amplitud_critica
  - id: beta_desde_logaritmos
    equation: exponente_critico_beta=ln(parametro_de_orden/amplitud_critica)/ln(abs(temperatura_reducida))
    latex: \beta=\ln(\Phi/A)/\ln|t|
    target: exponente_critico_beta
  category: critical_scaling
  relation_type: power_law
  physical_meaning:
    es: Describe cómo se anula el parámetro de orden al aproximarse a una transición continua desde la fase ordenada.
    en: Describes how the order parameter vanishes when approaching a continuous transition from the ordered phase.
  constraints:
    es: Usar magnitudes en SI y evaluar suficientemente cerca de la región crítica sin cruzar un régimen no aplicable.
    en: Use SI quantities and evaluate sufficiently near the critical region without crossing into an inapplicable regime.
  validity:
    es: Usar en el lado ordenado y suficientemente cerca de la temperatura crítica; no describe saltos de primer orden.
    en: Use on the ordered side and sufficiently near the critical temperature; it does not describe first-order jumps.
  dimension_check: dimension(parametro_de_orden)=dimension(amplitud_critica)
  calculable: true
  motivo_no_calculable:
    es: ''
    en: ''
  used_in:
  - teoria.md
  - modelos.md
  - ejemplos.md
  - interpretacion.yaml
  - graficos.yaml
  interpretation_tags:
  - order_parameter
  - continuous_transition
  - power_law
  result_semantics:
    target: parametro_de_orden
    kind: scalar
    sign_meaning:
      es: El signo indica el lado térmico o la positividad física de la magnitud según la relación.
      en: The sign indicates the thermal side or the physical positivity of the quantity according to the relation.
    absolute_value_meaning:
      es: El valor absoluto mide la intensidad del comportamiento crítico observado.
      en: The absolute value measures the strength of the observed critical behavior.
  domain_checks:
  - id: parametro_orden_ley_critica_temperatura_positiva
    status: warning
    condition: temperatura > 0
    text:
      es: La temperatura absoluta debe ser positiva.
      en: Absolute temperature must be positive.
  - id: parametro_orden_ley_critica_cercania_critica
    status: info
    condition: abs(temperatura_reducida) < 0.1
    text:
      es: La ley de escala es más representativa cerca de la temperatura crítica.
      en: The scaling law is most representative near the critical temperature.
  coherence_checks:
  - id: parametro_orden_ley_critica_dimensiones
    status: ok
    text:
      es: La dimensión del resultado debe coincidir con la magnitud objetivo.
      en: The result dimension must match the target quantity.
  - id: parametro_orden_ley_critica_exponente
    status: warning
    text:
      es: El exponente crítico debe ser no negativo en esta lectura fenomenológica.
      en: The critical exponent should be nonnegative in this phenomenological reading.
  graph_implications:
    es: La curva del parámetro de orden desciende hacia cero al acercarse la temperatura a la temperatura crítica.
    en: The order-parameter curve falls toward zero as temperature approaches the critical temperature.
  pedagogical_triggers:
  - es: Distingue tendencia crítica de extrapolación lejana.
    en: Distinguish critical trend from far-range extrapolation.
  - es: Comprueba qué lado de la temperatura crítica se está usando.
    en: Check which side of the critical temperature is being used.
- id: susceptibilidad_critica
  title:
    es: Divergencia de susceptibilidad
    en: Susceptibility divergence
  equation: susceptibilidad=amplitud_susceptibilidad*abs(temperatura_reducida)^(-exponente_critico_gamma)
  latex: \chi=C\,|t|^{-\gamma}
  rearrangements:
  - id: amplitud_susceptibilidad_desde_chi
    equation: amplitud_susceptibilidad=susceptibilidad*(abs(temperatura_reducida)^exponente_critico_gamma)
    latex: C=\chi |t|^\gamma
    target: amplitud_susceptibilidad
  category: critical_scaling
  relation_type: power_law
  physical_meaning:
    es: Representa el aumento de respuesta del sistema ante perturbaciones pequeñas cerca de la criticidad.
    en: Represents the increasing response of the system to small perturbations near criticality.
  constraints:
    es: Usar magnitudes en SI y evaluar suficientemente cerca de la región crítica sin cruzar un régimen no aplicable.
    en: Use SI quantities and evaluate sufficiently near the critical region without crossing into an inapplicable regime.
  validity:
    es: Válida en el régimen crítico fuera de redondeos por tamaño finito o campos externos fuertes.
    en: Valid in the critical regime outside finite-size rounding or strong external fields.
  dimension_check: dimension(susceptibilidad)=dimension(amplitud_susceptibilidad)
  calculable: true
  motivo_no_calculable:
    es: ''
    en: ''
  used_in:
  - teoria.md
  - modelos.md
  - ejemplos.md
  - interpretacion.yaml
  - graficos.yaml
  interpretation_tags:
  - susceptibility
  - divergence
  - response
  result_semantics:
    target: susceptibilidad
    kind: scalar
    sign_meaning:
      es: El signo indica el lado térmico o la positividad física de la magnitud según la relación.
      en: The sign indicates the thermal side or the physical positivity of the quantity according to the relation.
    absolute_value_meaning:
      es: El valor absoluto mide la intensidad del comportamiento crítico observado.
      en: The absolute value measures the strength of the observed critical behavior.
  domain_checks:
  - id: susceptibilidad_critica_temperatura_positiva
    status: warning
    condition: temperatura > 0
    text:
      es: La temperatura absoluta debe ser positiva.
      en: Absolute temperature must be positive.
  - id: susceptibilidad_critica_cercania_critica
    status: info
    condition: abs(temperatura_reducida) < 0.1
    text:
      es: La ley de escala es más representativa cerca de la temperatura crítica.
      en: The scaling law is most representative near the critical temperature.
  coherence_checks:
  - id: susceptibilidad_critica_dimensiones
    status: ok
    text:
      es: La dimensión del resultado debe coincidir con la magnitud objetivo.
      en: The result dimension must match the target quantity.
  - id: susceptibilidad_critica_exponente
    status: warning
    text:
      es: El exponente crítico debe ser no negativo en esta lectura fenomenológica.
      en: The critical exponent should be nonnegative in this phenomenological reading.
  graph_implications:
    es: La susceptibilidad crece con pendiente cada vez mayor al acercarse a la temperatura crítica.
    en: Susceptibility grows with an increasingly steep slope as the critical temperature is approached.
  pedagogical_triggers:
  - es: Distingue tendencia crítica de extrapolación lejana.
    en: Distinguish critical trend from far-range extrapolation.
  - es: Comprueba qué lado de la temperatura crítica se está usando.
    en: Check which side of the critical temperature is being used.
- id: longitud_correlacion_critica
  title:
    es: Divergencia de longitud de correlación
    en: Correlation length divergence
  equation: longitud_correlacion=amplitud_correlacion*abs(temperatura_reducida)^(-exponente_critico_nu)
  latex: \xi=\xi_0\,|t|^{-\nu}
  rearrangements:
  - id: amplitud_correlacion_desde_xi
    equation: amplitud_correlacion=longitud_correlacion*(abs(temperatura_reducida)^exponente_critico_nu)
    latex: \xi_0=\xi |t|^\nu
    target: amplitud_correlacion
  category: critical_scaling
  relation_type: power_law
  physical_meaning:
    es: Mide cuánto se extienden las correlaciones espaciales cuando el sistema se aproxima a la temperatura crítica.
    en: Measures how far spatial correlations extend as the system approaches the critical temperature.
  constraints:
    es: Usar magnitudes en SI y evaluar suficientemente cerca de la región crítica sin cruzar un régimen no aplicable.
    en: Use SI quantities and evaluate sufficiently near the critical region without crossing into an inapplicable regime.
  validity:
    es: Válida hasta que el tamaño de muestra o el alcance microscópico limiten la divergencia observable.
    en: Valid until sample size or microscopic range limits the observable divergence.
  dimension_check: length
  calculable: true
  motivo_no_calculable:
    es: ''
    en: ''
  used_in:
  - teoria.md
  - modelos.md
  - ejemplos.md
  - interpretacion.yaml
  - graficos.yaml
  interpretation_tags:
  - correlation_length
  - divergence
  - critical_region
  result_semantics:
    target: longitud_correlacion
    kind: scalar
    sign_meaning:
      es: El signo indica el lado térmico o la positividad física de la magnitud según la relación.
      en: The sign indicates the thermal side or the physical positivity of the quantity according to the relation.
    absolute_value_meaning:
      es: El valor absoluto mide la intensidad del comportamiento crítico observado.
      en: The absolute value measures the strength of the observed critical behavior.
  domain_checks:
  - id: longitud_correlacion_critica_temperatura_positiva
    status: warning
    condition: temperatura > 0
    text:
      es: La temperatura absoluta debe ser positiva.
      en: Absolute temperature must be positive.
  - id: longitud_correlacion_critica_cercania_critica
    status: info
    condition: abs(temperatura_reducida) < 0.1
    text:
      es: La ley de escala es más representativa cerca de la temperatura crítica.
      en: The scaling law is most representative near the critical temperature.
  coherence_checks:
  - id: longitud_correlacion_critica_dimensiones
    status: ok
    text:
      es: La dimensión del resultado debe coincidir con la magnitud objetivo.
      en: The result dimension must match the target quantity.
  - id: longitud_correlacion_critica_exponente
    status: warning
    text:
      es: El exponente crítico debe ser no negativo en esta lectura fenomenológica.
      en: The critical exponent should be nonnegative in this phenomenological reading.
  graph_implications:
    es: La longitud de correlació

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]
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
