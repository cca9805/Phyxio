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

Declared graph types: ['Svg']
Available magnitude ids: ['temperatura', 'temperatura_critica', 'parametro_de_orden', 'salto_parametro_de_orden', 'calor_latente', 'salto_entropia', 'energia_libre_gibbs', 'orden_de_transicion', 'exponente_critico_beta', 'amplitud_critica']
Available formula ids: ['salto_entropia_latente', 'salto_parametro_orden', 'criterio_derivada_energia_libre', 'exponente_parametro_orden']

Current graficos.yaml:
GRAFICOS_ACTUAL_INICIO
version: '1.0'
leaf: clasificacion-de-transiciones
svg:
  id: clasificacion-de-transiciones-Svg
  graphId: clasificacion-de-transiciones-Svg
  type: Svg
  graphType: Svg
  title:
    es: Clasificación visual de transiciones de fase
    en: Visual classification of phase transitions
  sceneId: phase_transition_classification_map
  sceneLabel:
    es: Mapa entre discontinuidades, parámetro de orden y tipo de transición
    en: Map between discontinuities, order parameter, and transition type
  objects:
    es:
    - fase inicial
    - fase final
    - frontera de transición
    - salto de calor latente
    - rama continua del parámetro de orden
    - punto crítico
    en:
    - initial phase
    - final phase
    - transition boundary
    - latent-heat jump
    - continuous order-parameter branch
    - critical point
  mainObject: frontera_transicion
  referenceFrame:
    es: Eje conceptual de control térmico con la frontera de fase en la temperatura crítica.
    en: Conceptual thermal-control axis with the phase boundary at the critical temperature.
  geometry:
    es: Dos paneles comparan una discontinuidad abrupta con una aproximación continua al punto crítico.
    en: Two panels compare an abrupt discontinuity with a continuous approach to the critical point.
  interactions:
    es:
    - Cruzar la frontera cambia la fase estable.
    - El parámetro de orden puede saltar o anularse suavemente.
    - El calor latente aparece solo en el caso discontinuo.
    en:
    - Crossing the boundary changes the stable phase.
    - The order parameter may jump or vanish smoothly.
    - Latent heat appears only in the discontinuous case.
  modelElements:
    es:
    - criterio por salto de [[parametro_de_orden]]
    - diagnóstico por [[calor_latente]]
    - lectura mediante derivadas de [[energia_libre_gibbs]]
    en:
    - criterion by [[parametro_de_orden]] jump
    - diagnosis through [[calor_latente]]
    - reading through derivatives of [[energia_libre_gibbs]]
  visualCues:
    es:
    - salto vertical para primer orden
    - curva continua para transición crítica
    - etiquetas de discontinuidad y continuidad
    en:
    - vertical jump for first order
    - continuous curve for critical transition
    - discontinuity and continuity labels
  scaleMeaning:
    es: 'La escala es conceptual: separa tipos de transición por discontinuidad, no por tamaño espacial real.'
    en: 'The scale is conceptual: it separates transition types by discontinuity, not by real spatial size.'
  relation:
    es: La escena responde cómo se clasifica una transición de fase observando si [[parametro_de_orden]], [[calor_latente]]
      o derivadas de [[energia_libre_gibbs]] presentan discontinuidad.
    en: The scene answers how a phase transition is classified by checking whether [[parametro_de_orden]], [[calor_latente]],
      or derivatives of [[energia_libre_gibbs]] show a discontinuity.
  physicalReading:
    es: Si aparece salto de [[parametro_de_orden]] o [[calor_latente]], la transición se lee como de primer orden; si el cambio
      es continuo pero la respuesta se vuelve singular, se interpreta como continua o crítica.
    en: If a [[parametro_de_orden]] jump or [[calor_latente]] appears, the transition is read as first order; if the change
      is continuous but the response becomes singular, it is interpreted as continuous or critical.
  modelConnection:
    es: 'El gráfico resume el criterio termodinámico: discontinuidades finitas frente a leyes críticas continuas.'
    en: 'The graphic summarizes the thermodynamic criterion: finite discontinuities versus continuous critical laws.'
  formulaConnection:
    es: Conecta {{f:salto_parametro_orden}}, {{f:salto_entropia_latente}}, {{f:criterio_derivada_energia_libre}} y {{f:exponente_parametro_orden}}
      como diagnósticos complementarios.
    en: Connects {{f:salto_parametro_orden}}, {{f:salto_entropia_latente}}, {{f:criterio_derivada_energia_libre}}, and {{f:exponente_parametro_orden}}
      as complementary diagnostics.
  readingFocus:
    es: Decide la clasificación mirando la discontinuidad de las magnitudes termodinámicas y el comportamiento del parámetro
      de orden en la frontera.
    en: Decide the classification by reading the discontinuity in thermodynamic quantities and the behavior of the order parameter
      at the boundary.
  agentHints:
    es:
    - Primero identifica si hay salto finito o cambio continuo.
    - Relaciona el salto con [[calor_latente]] o [[parametro_de_orden]].
    - No llames crítica a una transición solo porque ocurra en una temperatura concreta.
    en:
    - First identify whether there is a finite jump or a continuous change.
    - Relate the jump to [[calor_latente]] or [[parametro_de_orden]].
    - Do not call a transition critical only because it occurs at a specific temperature.
  commonMistakes:
    es:
    - Confundir calor latente con calor específico.
    - Clasificar por el nombre del material y no por la discontinuidad.
    - Olvidar que una transición continua puede tener susceptibilidades singulares.
    en:
    - Confusing latent heat with heat capacity.
    - Classifying by material name rather than by discontinuity.
    - Forgetting that a continuous transition may have singular susceptibilities.
  animationTriggers:
  - id: toggle_first_continuous
    label:
      es: Alternar primer orden/continua
      en: Toggle first order/continuous
    effect:
      es: Muestra u oculta el salto del parámetro de orden.
      en: Shows or hides the order-parameter jump.
  - id: highlight_latent_heat
    label:
      es: Resaltar calor latente
      en: Highlight latent heat
    effect:
      es: Marca el intercambio de energía en la frontera.
      en: Marks the energy exchange at the boundary.
  interactiveElements:
  - id: selector_tipo
    label:
      es: Selector de tipo de transición
      en: Transition type selector
    target: frontera_transicion
  - id: inspector_parametro
    label:
      es: Inspector de parámetro de orden
      en: Order-parameter inspector
    target: parametro_de_orden
  recommendedTab: graficas
GRAFICOS_ACTUAL_FIN

meta.yaml context:
id: clasificacion-de-transiciones
nombre:
  es: Clasificacion de transiciones
  en: Classification of Transitions
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: transiciones-de-fase
parent_id: transiciones-de-fase
ruta_relativa: fisica-clasica/termodinamica-estadistica/transiciones-de-fase/clasificacion-de-transiciones
orden: 276100
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
icon: 📌
descripcion: Clasifica transiciones de fase por discontinuidades termodinámicas y parámetros de orden.
description_en: Classifies phase transitions by thermodynamic discontinuities and order parameters.
tags:
  es:
  - transiciones de fase
  - calor latente
  - parámetro de orden
  - energía libre
  - criticidad
  en:
  - phase transitions
  - latent heat
  - order parameter
  - free energy
  - criticality
prerequisitos:
- equilibrio-termodinamico
- potenciales-termodinamicos
graficos:
- Svg
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: ¿Cómo se clasifica una transición de fase según la discontinuidad de las magnitudes termodinámicas y el parámetro de
    orden?
  en: How is a phase transition classified from discontinuities in thermodynamic quantities and the order parameter?
representacion_dominante: Svg
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
    es: Temperatura absoluta que controla el estado térmico del sistema.
    en: Absolute temperature controlling the thermal state of the system.
  unidad_si: K
  dimension: Theta
  is_vector: false
  components: []
  category: control_variable
  physical_role:
    es: Magnitud usada para clasificar o diagnosticar transiciones de fase.
    en: Quantity used to classify or diagnose phase transitions.
  used_in:
  - salto_entropia_latente
  - exponente_parametro_orden
  common_mistake: Confundir Celsius con kelvin en criterios termodinámicos.
  typical_range: 1 K a 1000 K
  sign_behavior:
    has_sign: false
    meaning:
      es: La temperatura absoluta no es negativa en equilibrio termodinámico ordinario.
      en: Absolute temperature is not negative in ordinary thermodynamic equilibrium.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero kelvin es el límite inferior ideal; no representa una transición por sí solo.
      en: Zero kelvin is an ideal lower limit; it does not represent a transition by itself.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: 1 K a 1000 K
  interpretation_role:
    primary_for: []
    secondary_for:
    - model_validity
    - graph_reading
  graph_binding:
    enabled: true
    channels:
    - parameter
    - xAxis
  pedagogical_notes:
    es: Usa [[temperatura]] como pieza de diagnóstico, no como etiqueta aislada; su sentido depende de continuidad, salto
      y régimen físico.
    en: Use [[temperatura]] as a diagnostic piece, not as an isolated label; its meaning depends on continuity, jump, and
      physical regime.
- id: temperatura_critica
  symbol: T_c
  nombre:
    es: temperatura crítica
    en: critical temperature
  descripcion:
    es: Temperatura donde se produce o se aproxima la transición de fase.
    en: Temperature at which the phase transition occurs or is approached.
  unidad_si: K
  dimension: Theta
  is_vector: false
  components: []
  category: threshold
  physical_role:
    es: Magnitud usada para clasificar o diagnosticar transiciones de fase.
    en: Quantity used to classify or diagnose phase transitions.
  used_in:
  - salto_entropia_latente
  - exponente_parametro_orden
  common_mistake: Usarla como temperatura cualquiera y no como escala de frontera entre fases.
  typical_range: 10 K a 1000 K
  sign_behavior:
    has_sign: false
    meaning:
      es: Debe ser positiva para una transición térmica ordinaria.
      en: It must be positive for an ordinary thermal transition.
  zero_behavior:
    allowed: false
    meaning:
      es: Si no hay temperatura crítica definida, este criterio no se aplica directamente.
      en: If no critical temperature is defined, this criterion does not apply directly.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: 10 K a 1000 K
  interpretation_role:
    primary_for: []
    secondary_for:
    - model_validity
    - graph_reading
  graph_binding:
    enabled: true
    channels:
    - constant
    - parameter
  pedagogical_notes:
    es: Usa [[temperatura_critica]] como pieza de diagnóstico, no como etiqueta aislada; su sentido depende de continuidad,
      salto y régimen físico.
    en: Use [[temperatura_critica]] as a diagnostic piece, not as an isolated label; its meaning depends on continuity, jump,
      and physical regime.
- id: parametro_de_orden
  symbol: Phi
  nombre:
    es: parámetro de orden
    en: order parameter
  descripcion:
    es: Magnitud macroscópica que distingue fases por simetría u organización interna.
    en: Macroscopic quantity distinguishing phases by symmetry or internal organization.
  unidad_si: depende del sistema
  dimension: variable
  is_vector: false
  components: []
  category: state_variable
  physical_role:
    es: Magnitud usada para clasificar o diagnosticar transiciones de fase.
    en: Quantity used to classify or diagnose phase transitions.
  used_in:
  - salto_parametro_orden
  - exponente_parametro_orden
  common_mistake: Creer que cualquier variable medible es automáticamente un parámetro de orden.
  typical_range: 0 a 1 en normalizaciones habituales
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo puede codificar una rama de simetría; la clasificación depende de continuidad y módulo.
      en: The sign may encode a symmetry branch; classification depends on continuity and magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero suele representar la fase desordenada o simétrica bajo el convenio elegido.
      en: Zero often represents the disordered or symmetric phase under the chosen convention.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: 0 a 1 en normalizaciones habituales
  interpretation_role:
    primary_for:
    - classification
    secondary_for:
    - model_validity
    - graph_reading
  graph_binding:
    enabled: true
    channels:
    - yAxis
    - parameter
  pedagogical_notes:
    es: Usa [[parametro_de_orden]] como pieza de diagnóstico, no como etiqueta aislada; su sentido depende de continuidad,
      salto y régimen físico.
    en: Use [[parametro_de_orden]] as a diagnostic piece, not as an isolated label; its meaning depends on continuity, jump,
      and physical regime.
- id: salto_parametro_de_orden
  symbol: DeltaPhi
  nombre:
    es: salto del parámetro de orden
    en: order-parameter jump
  descripcion:
    es: Diferencia finita del parámetro de orden entre dos fases vecinas.
    en: Finite difference in the order parameter between two neighboring phases.
  unidad_si: depende del sistema
  dimension: variable
  is_vector: false
  components: []
  category: diagnostic
  physical_role:
    es: Magnitud usada para clasificar o diagnosticar transiciones de fase.
    en: Quantity used to classify or diagnose phase transitions.
  used_in:
  - salto_parametro_orden
  common_mistake: Interpretar el signo del salto como más importante que su existencia.
  typical_range: 0 a 1 en escala normalizada
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende del sentido de comparación entre fases.
      en: The sign depends on the comparison direction between phases.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de salto detectable, compatible con transición continua si otros criterios lo apoyan.
      en: Zero indicates no detectable jump, compatible with a continuous transition if other criteria support it.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: 0 a 1 en escala normalizada
  interpretation_role:
    primary_for: []
    secondary_for:
    - model_validity
    - graph_reading
  graph_binding:
    enabled: true
    channels:
    - parameter
  pedagogical_notes:
    es: Usa [[salto_parametro_de_orden]] como pieza de diagnóstico, no como etiqueta aislada; su sentido depende de continuidad,
      salto y régimen físico.
    en: Use [[salto_parametro_de_orden]] as a diagnostic piece, not as an isolated label; its meaning depends on continuity,
      jump, and physical regime.
- id: calor_latente
  symbol: L
  nombre:
    es: calor latente molar
    en: molar latent heat
  descripcion:
    es: Energía intercambiada por mol durante una transición de primer orden.
    en: Energy exchanged per mole during a first-order transition.
  unidad_si: J mol^-1
  dimension: M L^2 T^-2 mol^-1
  is_vector: false
  components: []
  category: energy
  physical_role:
    es: Magnitud usada para clasificar o diagnosticar transiciones de fase.
    en: Quantity used to classify or diagnose phase transitions.
  used_in:
  - salto_entropia_latente
  common_mistake: Confundir calor latente con calor específico.
  typical_range: 0 a 10^5 J mol^-1
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo indica absorción o cesión según el sentido del proceso.
      en: The sign indicates absorption or release depending on process direction.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero significa que este diagnóstico no identifica una transición de primer orden.
      en: Zero means this diagnostic does not identify a first-order transition.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: 0 a 10^5 J mol^-1
  interpretation_role:
    primary_for: []
    secondary_for:
    - model_validity
    - graph_reading
  graph_binding:
    enabled: true
    channels:
    - parameter
  pedagogical_notes:
    es: Usa [[calor_latente]] como pieza de diagnóstico, no como etiqueta aislada; su sentido depende de continuidad, salto
      y régimen físico.
    en: Use [[calor_latente]] as a diagnostic piece, not as an isolated label; its meaning depends on continuity, jump, and
      physical regime.
- id: salto_entropia
  symbol: DeltaS
  nombre:
    es: salto de entropía molar
    en: molar entropy jump
  descripcion:
    es: Cambio discontinuo de entropía entre fases coexistentes.
    en: Discontinuous entropy change between coexisting phases.
  unidad_si: J mol^-1 K^-1
  dimension: M L^2 T^-2 Theta^-1 mol^-1
  is_vector: false
  components: []
  category: state_change
  physical_role:
    es: Magnitud usada para clasificar o diagnosticar transiciones de fase.
    en: Quantity used to classify or diagnose phase transitions.
  used_in:
  - salto_entropia_latente
  common_mistake: Olvidar que el salto se evalúa justo en la transición.
  typical_range: 0 a 10^3 J mol^-1 K^-1
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende de qué fase se tome como final.
      en: The sign depends on which phase is taken as final.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero descarta calor latente molar por esta vía.
      en: Zero rules out molar latent heat through this route.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: 0 a 10^3 J mol^-1 K^-1
  interpretation_role:
    primary_for: []
    secondary_for:
    - model_validity
    - graph_reading
  graph_binding:
    enabled: true
    channels:
    - parameter
  pedagogical_notes:
    es: Usa [[salto_entropia]] como pieza de diagnóstico, no como etiqueta aislada; su sentido depende de continuidad, salto
      y régimen físico.
    en: Use [[salto_entropia]] as a diagnostic piece, not as an isolated label; its meaning depends on continuity, jump, and
      physical regime.
- id: energia_libre_gibbs
  symbol: G
  nombre:
    es: energía libre de Gibbs
    en: Gibbs free energy
  descripcion:
    es: Potencial termodinámico usado para comparar fases a presión y temperatura controladas.
    en: Thermodynamic potential used to compare phases at controlled pressure and temperature.
  unidad_si: J mol^-1
  dimension: M L^2 T^-2 mol^-1
  is_vector: false
  components: []
  category: thermodynamic_potential
  physical_role:
    es: Magnitud usada para clasificar o diagnosticar transiciones de fase.
    en: Quantity used to classify or diagnose phase transitions.
  used_in:
  - criterio_derivada_energia_libre
  common_mistake: Mirar solo G y no sus derivadas relevantes.
  typical_range: -10^6 a 10^6 J mol^-1
  sign_behavior:
    has_sign: true
    meaning:
      es: El cero depende de la referencia elegida; importan diferencias y derivadas.
      en: Zero depends on the chosen reference; differences and derivatives matter.
  zero_behavior:
    allowed: true
    meaning:
      es: El cero absoluto de G no tiene significado universal sin referencia.
      en: Absolute zero of G has no universal meaning without a reference.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: -10^6 a 10^6 J mol^-1
  interpretation_role:
    primary_for: []
    secondary_for:
    - model_validity
    - graph_reading
  graph_binding:
    enabled: false
    channels:
    - none
  pedagogical_notes:
    es: Usa [[energia_libre_gibbs]] como pieza de diagnóstico, no como etiqueta aislada; su sentido depende de continuidad,
      salto y régimen físico.
    en: Use [[energia_libre_gibbs]] as a diagnostic piece, not as an isolated label; its meaning depends on continuity, jump,
      and physical regime.
- id: orden_de_transicion
  symbol: n
  nombre:
    es: orden de transición
    en: transition order
  descripcion:
    es: Categoría que indica qué derivada termodinámica presenta discontinuidad o singularidad.
    en: Category indicating which thermodynamic derivative has a discontinuity or singularity.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: classification
  physical_role:
    es: Magnitud usada para clasificar o diagnosticar transiciones de fase.
    en: Quantity used to classify or diagnose phase transitions.
  used_in:
  - criterio_derivada_energia_libre
  common_mistake: Tomarlo como un número medido continuo en lugar de una etiqueta de criterio.
  typical_range: 1, 2 o continua/crítica según el criterio
  sign_behavior:
    has_sign: false
    meaning:
      es: No posee signo físico porque clasifica el tipo de transición.
      en: It has no physical sign because it classifies the transition type.
  zero_behavior:
    allowed: false
    meaning:
      es: Cero no es una clasificación termodinámica ordinaria.
      en: Zero is not an ordinary thermodynamic classification.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: 1, 2 o continua/crítica según el criterio
  interpretation_role:
    primary_for:
    - classification
    secondary_for:
    - model_validity
    - graph_reading
  graph_binding:
    enabled: false
    channels:
    - none
  pedagogical_notes:
    es: Usa [[orden_de_transicion]] como pieza de diagnóstico, no como etiqueta aislada; su sentido depende de continuidad,
      salto y régimen físico.
    en: Use [[orden_de_transicion]] as a diagnostic piece, not as an isolated label; its meaning depends

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]

formulas.yaml context:
version: 5.0.0
leaf: clasificacion-de-transiciones
ui:
  default_formula: salto_parametro_orden
formulas:
- id: salto_entropia_latente
  title:
    es: Calor latente y salto de entropía
    en: Latent heat and entropy jump
  equation: L = T_c*DeltaS
  latex: L = T_c\,\Delta S
  rearrangements:
  - id: despeje_deltaS
    equation: DeltaS = L/T_c
    latex: \Delta S = \frac{L}{T_c}
    target: salto_entropia
  - id: despeje_Tc
    equation: T_c = L/DeltaS
    latex: T_c = \frac{L}{\Delta S}
    target: temperatura_critica
  category: termodinamica
  relation_type: constitutive
  physical_meaning:
    es: En una transición de primer orden, el calor latente mide el salto de entropía en la temperatura crítica.
    en: In a first-order transition, latent heat measures the entropy jump at the critical temperature.
  constraints:
    es: Requiere equilibrio de fases, temperatura crítica positiva y salto de entropía finito.
    en: Requires phase equilibrium, positive critical temperature, and a finite entropy jump.
  validity:
    es: Útil para cambios de fase con coexistencia y calor latente no nulo; no describe transiciones continuas.
    en: Useful for phase changes with coexistence and nonzero latent heat; it does not describe continuous transitions.
  dimension_check: '[L] = [Theta]*[M L^2 T^-2 Theta^-1 mol^-1] = [M L^2 T^-2 mol^-1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - clasificacion_primer_orden
  interpretation_tags:
  - primer_orden
  - calor_latente
  - entropia
  result_semantics:
    target: calor_latente
    kind: scalar
    sign_meaning:
      es: Un valor positivo indica calor absorbido por mol al cruzar la transición en el sentido elegido.
      en: A positive value indicates heat absorbed per mole when crossing the transition in the chosen direction.
    absolute_value_meaning:
      es: Su valor absoluto mide la energía molar intercambiada sin cambio continuo de temperatura.
      en: Its absolute value measures the molar energy exchanged without a continuous temperature change.
  domain_checks:
  - id: temperatura_positiva
    condition: T_c > 0
    message:
      es: La temperatura crítica debe ser positiva en kelvin.
      en: The critical temperature must be positive in kelvin.
  - id: primer_orden
    condition: abs(DeltaS) > 0
    message:
      es: Un salto de entropía no nulo señala primer orden.
      en: A nonzero entropy jump signals first order.
  coherence_checks:
  - id: sin_calor_latente_continua
    condition: L == 0
    message:
      es: Si el calor latente se anula, no clasifiques como primer orden solo por esta fórmula.
      en: If latent heat vanishes, do not classify as first order using this formula alone.
  graph_implications:
    es: En el esquema Svg se muestra como salto vertical o discontinuidad entre fases coexistentes.
    en: In the Svg diagram it appears as a vertical jump or discontinuity between coexisting phases.
  pedagogical_triggers:
  - id: confundir_L_con_C
    text:
      es: 'No confundas calor latente con capacidad calorífica: uno es intercambio finito, la otra es pendiente térmica.'
      en: 'Do not confuse latent heat with heat capacity: one is a finite exchange, the other a thermal slope.'
- id: salto_parametro_orden
  title:
    es: Salto del parámetro de orden
    en: Order parameter jump
  equation: DeltaPhi = Phi_2 - Phi_1
  latex: \Delta \Phi = \Phi_2 - \Phi_1
  rearrangements:
  - id: despeje_phi2
    equation: Phi_2 = DeltaPhi + Phi_1
    latex: \Phi_2 = \Delta\Phi + \Phi_1
    target: parametro_de_orden
  - id: despeje_phi1
    equation: Phi_1 = Phi_2 - DeltaPhi
    latex: \Phi_1 = \Phi_2 - \Delta\Phi
    target: parametro_de_orden
  category: clasificacion
  relation_type: definition
  physical_meaning:
    es: Compara el valor del parámetro de orden a ambos lados de la transición para detectar una discontinuidad.
    en: Compares the order parameter on both sides of the transition to detect a discontinuity.
  constraints:
    es: Los dos valores deben pertenecer a fases vecinas medidas bajo el mismo convenio de normalización.
    en: Both values must belong to neighboring phases measured with the same normalization convention.
  validity:
    es: Sirve si existe un parámetro de orden identificable; puede ser insuficiente en transiciones topológicas.
    en: Applies when an identifiable order parameter exists; it may be insufficient for topological transitions.
  dimension_check: '[DeltaPhi] = [Phi]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - clasificacion_primer_orden
  - clasificacion_continua
  interpretation_tags:
  - parametro_orden
  - discontinuidad
  - simetria
  result_semantics:
    target: salto_parametro_de_orden
    kind: scalar
    sign_meaning:
      es: El signo depende de qué fase se tome como final; la clasificación usa sobre todo si el salto es nulo o no.
      en: The sign depends on which phase is taken as final; classification mainly uses whether the jump is zero or nonzero.
    absolute_value_meaning:
      es: El módulo mide la intensidad de la discontinuidad del orden macroscópico.
      en: The magnitude measures the strength of the discontinuity in macroscopic order.
  domain_checks:
  - id: mismo_convenio
    condition: same_normalization == true
    message:
      es: Compara solo valores con el mismo convenio de escala.
      en: Compare only values using the same scale convention.
  coherence_checks:
  - id: salto_no_nulo
    condition: abs(DeltaPhi) > 0
    message:
      es: Un salto finito del parámetro de orden es señal fuerte de primer orden.
      en: A finite order-parameter jump is a strong signal of first order.
  graph_implications:
    es: En el Svg separa una transición continua, con curva suave, de una transición con salto abrupto.
    en: In the Svg it separates a continuous transition, with a smooth curve, from a transition with an abrupt jump.
  pedagogical_triggers:
  - id: valor_no_salto
    text:
      es: 'No basta con que el parámetro sea distinto de cero: mira si cambia de forma discontinua.'
      en: 'It is not enough that the parameter is nonzero: check whether it changes discontinuously.'
- id: criterio_derivada_energia_libre
  title:
    es: Criterio de derivadas de la energía libre
    en: Free-energy derivative criterion
  equation: orden_transicion = n_si_discontinua_derivada_n_de_G
  latex: \text{orden} = n \; \text{si la derivada } n \text{ de } G \text{ es discontinua}
  rearrangements: []
  category: clasificacion
  relation_type: criterion
  physical_meaning:
    es: Clasifica la transición por la primera derivada de la energía libre que presenta una discontinuidad.
    en: Classifies the transition by the first derivative of the free energy that presents a discontinuity.
  constraints:
    es: Necesita una energía libre termodinámica adecuada y variables de control bien definidas.
    en: Requires an appropriate thermodynamic free energy and well-defined control variables.
  validity:
    es: Es un criterio macroscópico útil cerca del equilibrio; no captura siempre transiciones topológicas o fuera de equilibrio.
    en: It is a macroscopic criterion useful near equilibrium; it does not always capture topological or nonequilibrium transitions.
  dimension_check: Criterio cualitativo; las derivadas conservan dimensiones compatibles con la variable conjugada evaluada.
  calculable: false
  motivo_no_calculable: Es un criterio de clasificación, no una fórmula numérica directa.
  used_in:
  - clasificacion_general
  interpretation_tags:
  - energia_libre
  - derivadas
  - orden_transicion
  result_semantics:
    target: orden_de_transicion
    kind: classification
    sign_meaning:
      es: No tiene signo físico; devuelve una categoría de clasificación.
      en: It has no physical sign; it returns a classification category.
    absolute_value_meaning:
      es: El número de orden identifica qué derivada se vuelve singular o discontinua.
      en: The order number identifies which derivative becomes singular or discontinuous.
  domain_checks:
  - id: equilibrio
    condition: near_equilibrium == true
    message:
      es: El criterio presupone una descripción de equilibrio o casi equilibrio.
      en: The criterion assumes an equilibrium or near-equilibrium description.
  coherence_checks:
  - id: primer_derivada
    condition: derivative_order >= 1
    message:
      es: La discontinuidad debe asociarse a una derivada física concreta.
      en: The discontinuity must be associated with a concrete physical derivative.
  graph_implications:
    es: El Svg organiza las transiciones según saltos en magnitudes conjugadas o singularidades de respuesta.
    en: The Svg organizes transitions by jumps in conjugate quantities or response singularities.
  pedagogical_triggers:
  - id: clasificar_por_nombre
    text:
      es: No clasifiques por el nombre de la sustancia; clasifica por la variable que se rompe o se vuelve singular.
      en: Do not classify by the substance name; classify by the variable that jumps or becomes singular.
- id: exponente_parametro_orden
  title:
    es: Ley crítica del parámetro de orden
    en: Critical law for the order parameter
  equation: Phi = A*abs(1 - T/T_c)^beta
  latex: \Phi = A\left|1-\frac{T}{T_c}\right|^{\beta}
  rearrangements:
  - id: despeje_A
    equation: A = Phi/(abs(1 - T/T_c)^beta)
    latex: A = \frac{\Phi}{|1-T/T_c|^{\beta}}
    target: amplitud_critica
  category: criticidad
  relation_type: scaling_law
  physical_meaning:
    es: Describe cómo el parámetro de orden se aproxima continuamente a cero cerca de una transición crítica.
    en: Describes how the order parameter continuously approaches zero near a critical transition.
  constraints:
    es: Debe aplicarse cerca de la temperatura crítica y en la fase donde el parámetro de orden existe.
    en: Must be applied near the critical temperature and in the phase where the order parameter exists.
  validity:
    es: Es una ley asintótica de transición continua; lejos de la criticidad puede fallar.
    en: It is an asymptotic law for continuous transitions; far from criticality it may fail.
  dimension_check: '[Phi] = [A] porque el factor reducido es adimensional.'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - clasificacion_continua
  interpretation_tags:
  - critico
  - exponente
  - continuidad
  result_semantics:
    target: parametro_de_orden
    kind: scalar
    sign_meaning:
      es: Normalmente se usa el módulo o una rama positiva; el signo depende de la simetría rota.
      en: Usually the magnitude or a positive branch is used; the sign depends on the broken symmetry.
    absolute_value_meaning:
      es: El valor mide la intensidad del orden al alejarse del punto crítico.
      en: The value measures the strength of order as the system moves away from the critical point.
  domain_checks:
  - id: cerca_tc
    condition: abs(1 - T/T_c) < 0.1
    message:
      es: La ley crítica es fiable solo cerca de la temperatura crítica.
      en: The critical law is reliable only near the critical temperature.
  - id: beta_positivo
    condition: beta > 0
    message:
      es: Un exponente positivo permite que el parámetro tienda a cero en la criticidad.
      en: A positive exponent lets the parameter tend to zero at criticality.
  coherence_checks:
  - id: continuidad_phi
    condition: Phi -> 0 cuando T -> T_c
    message:
      es: 'En una transición continua, el parámetro de orden no salta: se anula gradualmente.'
      en: 'In a continuous transition, the order parameter does not jump: it vanishes gradually.'
  graph_implications:
    es: En el Svg aparece como rama que se estrecha hacia el punto crítico sin salto vertical.
    en: In the Svg it appears as a branch narrowing toward the critical point without a vertical jump.
  pedagogical_triggers:
  - id: usar_ley_fuera
    text:
      es: No extrapoles la ley crítica a temperaturas muy alejadas de T_c.
      en: Do not extrapolate the critical law to temperatures far from T_c.

graficos.yaml contract:
- version must be "1.0".
- leaf must be "clasificacion-de-transiciones".
- Include only sections declared by meta.yaml/map.
- Do not include JSX, HTML, React components, or <MathInline />.
- All bilingual fields require es and en.
- agentHints and commonMistakes require at least 3 entries in es and 3 in en.
- recommendedTab must be "graficas".
- Required sections for this leaf: ['svg']

Coord required fields:
- id and graphId: "clasificacion-de-transiciones-Coord"; type and graphType: "Coord".
- title, xAxis, yAxis, xMagnitude, yMagnitude.
- relation, physicalReading, slopeMeaning, interceptMeaning, curvatureMeaning, signMeaning, areaMeaning, domainMeaning, modelConnection, formulaConnection, readingFocus.
- agentHints, commonMistakes, curveProfile, dataRange, recommendedTab.
- curveProfile: type, expectedShape.es/en, keyPoints with at least 2 points. Each point has x, y, label.es/en.
- dataRange: xMin, xMax, yMin, yMax, autoScale.
- To pass graph_pfc_coherence, relation.es/en, physicalReading.es/en, and readingFocus.es/en must directly answer meta.yaml.pregunta_fisica_central.
- Reuse at least two significant terms from pregunta_fisica_central in the graph text, such as the dominant magnitude, independent variable, material/parameter, and physical dependency.
- Do not write a generic graph description disconnected from the central question.

Dcl required fields:
- id and graphId: "clasificacion-de-transiciones-Dcl"; type and graphType: "Dcl".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, forceVectors, equilibriumState, recommendedTab.
- forceVectors: at least one vector; each has id, label.es/en, targetObject, direction, magnitudeRef, signConvention.es/en, formulaRefs.
- equilibriumState.conditionDescription.es/en is required.

Svg required fields:
- id and graphId: "clasificacion-de-transiciones-Svg"; type and graphType: "Svg".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, animationTriggers, interactiveElements, recommendedTab.
- animationTriggers and interactiveElements are lists; they may be empty if no interaction applies.

If no graph types are declared, output only:
version: "1.0"
leaf: "clasificacion-de-transiciones"

Physics quality:
- A Coord graph must encode a real quantitative relation from formulas.yaml.
- A Dcl graph must represent actual forces/interactions of the model, not decorative arrows.
- A Svg graph must represent an interpretable physical scene, not a generic illustration.
- formulaConnection should use text/LaTeX, never JSX.
