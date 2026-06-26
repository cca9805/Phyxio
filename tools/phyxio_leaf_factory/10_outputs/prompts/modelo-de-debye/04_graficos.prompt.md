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
Available magnitude ids: ['calor_especifico', 'calor_especifico_molar', 'temperatura', 'temperatura_debye', 'frecuencia_debye', 'hbar', 'constante_boltzmann', 'constante_gases', 'numero_atomos', 'temperatura_reducida', 'funcion_debye']
Available formula ids: ['temperatura_debye', 'variable_reducida_debye', 'calor_especifico_debye_baja_temperatura', 'limite_dulong_petit', 'calor_especifico_debye_integral']

Current graficos.yaml:
GRAFICOS_ACTUAL_INICIO
version: '1.0'
leaf: modelo-de-debye
coord:
  id: modelo-de-debye-Coord
  graphId: modelo-de-debye-Coord
  type: Coord
  graphType: Coord
  title:
    es: Calor específico reducido en el modelo de Debye
    en: Reduced heat capacity in the Debye model
  xAxis:
    es: Temperatura reducida T/ΘD
    en: Reduced temperature T/ΘD
  yAxis:
    es: Calor específico molar C_m
    en: Molar heat capacity C_m
  xMagnitude: temperatura_reducida
  yMagnitude: calor_especifico_molar
  relation:
    es: 'La gráfica responde cómo el calor específico de un sólido depende de la temperatura y de la temperatura de Debye:
      crece como T³ cuando T/ΘD es pequeño y se aproxima a 3R cuando la temperatura supera la escala ΘD.'
    en: 'The graph answers how the heat capacity of a solid depends on temperature and Debye temperature: it grows as T^3
      when T/ΘD is small and approaches 3R when temperature exceeds the ΘD scale.'
  physicalReading:
    es: Al aumentar la temperatura reducida, se excitan más modos vibracionales; la temperatura de Debye marca cuándo el sólido
      abandona el régimen cuántico frío y se acerca al comportamiento clásico.
    en: As reduced temperature increases, more vibrational modes are excited; Debye temperature marks when the solid leaves
      the cold quantum regime and approaches classical behavior.
  slopeMeaning:
    es: La pendiente inicial es pequeña pero aumenta rápidamente en el régimen T³; luego disminuye al acercarse la meseta
      clásica.
    en: The initial slope is small but rises quickly in the T^3 regime; then it decreases as the classical plateau is approached.
  interceptMeaning:
    es: En el límite T/ΘD igual a cero, la contribución vibracional al calor específico tiende a cero.
    en: At T/ΘD equal to zero, the vibrational heat capacity contribution tends to zero.
  curvatureMeaning:
    es: La curvatura positiva inicial refleja la activación progresiva de fonones; la curvatura posterior se aplana por saturación
      de modos.
    en: The initial positive curvature reflects progressive phonon activation; later curvature flattens because modes saturate.
  signMeaning:
    es: 'El calor específico es positivo: añadir temperatura exige energía térmica.'
    en: 'Heat capacity is positive: raising temperature requires thermal energy.'
  areaMeaning:
    es: El área bajo la curva no es la lectura principal; se usa como apoyo cualitativo para comparar acumulación de respuesta
      térmica.
    en: The area under the curve is not the main reading; it only supports qualitative comparison of accumulated thermal response.
  domainMeaning:
    es: El eje horizontal usa T/ΘD positivo; valores muy bajos describen la ley cúbica y valores grandes el límite de Dulong-Petit.
    en: The horizontal axis uses positive T/ΘD; very low values describe the cubic law and large values the Dulong-Petit limit.
  modelConnection:
    es: El gráfico visualiza la transición entre fonones poco excitados y el límite clásico del modelo de Debye.
    en: The graph visualizes the transition between sparsely excited phonons and the classical limit of the Debye model.
  formulaConnection:
    es: Conecta {{f:calor_especifico_debye_baja_temperatura}}, {{f:calor_especifico_debye_integral}} y {{f:limite_dulong_petit}}.
    en: It connects {{f:calor_especifico_debye_baja_temperatura}}, {{f:calor_especifico_debye_integral}}, and {{f:limite_dulong_petit}}.
  readingFocus:
    es: Lee primero T/ΘD, después compara el calor específico con 3R para decidir si domina el régimen cuántico de baja temperatura
      o el límite clásico.
    en: Read T/ΘD first, then compare heat capacity with 3R to decide whether the low-temperature quantum regime or classical
      limit dominates.
  agentHints:
    es:
    - Pregunta siempre si la temperatura está en kelvin.
    - Compara T con ΘD antes de elegir fórmula.
    - Usa la meseta 3R como control de plausibilidad.
    en:
    - Always ask whether temperature is in kelvin.
    - Compare T with ΘD before choosing a formula.
    - Use the 3R plateau as a plausibility check.
  commonMistakes:
    es:
    - Aplicar la ley T³ cerca de T≈ΘD.
    - Confundir calor específico total con molar.
    - Interpretar ΘD como temperatura ambiente.
    en:
    - Applying the T^3 law near T≈ΘD.
    - Confusing total heat capacity with molar heat capacity.
    - Interpreting ΘD as ambient temperature.
  curveProfile:
    type: saturating_cubic_rise
    expectedShape:
      es: Curva creciente con arranque cúbico y meseta alta cercana a 3R.
      en: Increasing curve with cubic onset and high plateau near 3R.
    keyPoints:
    - x: 0
      y: 0
      label:
        es: 'Límite frío: pocos fonones excitados'
        en: 'Cold limit: few phonons excited'
    - x: 0.1
      y: 0.05
      label:
        es: Régimen T³ aproximado
        en: Approximate T^3 regime
    - x: 1
      y: 0.92
      label:
        es: Transición hacia saturación clásica
        en: Transition toward classical saturation
    - x: 3
      y: 1
      label:
        es: Meseta de Dulong-Petit normalizada
        en: Normalized Dulong-Petit plateau
  dataRange:
    xMin: 0
    xMax: 3
    yMin: 0
    yMax: 1.05
    autoScale: true
  recommendedTab: graficas
GRAFICOS_ACTUAL_FIN

meta.yaml context:
id: modelo-de-debye
nombre:
  es: Modelo de debye
  en: Debye Model
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: sistemas-modelo
parent_id: solidos-y-calor-especifico
ruta_relativa: fisica-clasica/termodinamica-estadistica/sistemas-modelo/solidos-y-calor-especifico/modelo-de-debye
orden: 275320
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
icon: ✅
descripcion: Modelo que predice el calor específico sólido desde modos vibracionales cuantizados.
description_en: Model predicting solid heat capacity from quantized vibrational modes.
tags:
  es:
  - Debye
  - calor específico
  - fonones
  - sólidos
  - temperatura
  en:
  - Debye
  - specific heat
  - phonons
  - solids
  - temperature
prerequisitos:
- oscilador-armonico-estadistico
- equiparticion-de-la-energia
graficos:
- Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 4
tiempo_estimado_min: 35
pregunta_fisica_central:
  es: ¿Cómo depende el calor específico de un sólido de la temperatura y de la temperatura de Debye?
  en: How does the specific heat of a solid depend on temperature and the Debye temperature?
representacion_dominante: Coord
magnitud_dominante: calor_especifico_molar
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
- id: calor_especifico
  symbol: C_V
  nombre:
    es: calor específico
    en: heat capacity
  descripcion:
    es: Energía necesaria para elevar un kelvin la temperatura del sólido.
    en: Energy needed to raise the solid temperature by one kelvin.
  unidad_si: J/K
  dimension: M L^2 T^-2 Θ^-1
  is_vector: false
  components: []
  category: response
  physical_role: resultado térmico
  used_in:
  - calor_especifico_debye_baja_temperatura
  - limite_dulong_petit
  - calor_especifico_debye_integral
  common_mistake: Confundir calor específico total con calor específico molar.
  typical_range: 0 a 3Nk_B en la contribución vibracional armónica.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for:
    - calor_especifico_debye_integral
    secondary_for:
    - calor_especifico_debye_baja_temperatura
    - limite_dulong_petit
  graph_binding:
    channels:
    - yAxis
    preferred_axis: yAxis
  pedagogical_notes:
    es: Usa [[calor_especifico]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[calor_especifico]] within the Debye regime and always check SI units.
- id: calor_especifico_molar
  symbol: C_m
  nombre:
    es: calor específico molar
    en: molar heat capacity
  descripcion:
    es: Calor específico por mol de átomos del sólido.
    en: Heat capacity per mole of atoms in the solid.
  unidad_si: J/(mol*K)
  dimension: M L^2 T^-2 Θ^-1 N^-1
  is_vector: false
  components: []
  category: response
  physical_role: magnitud dominante
  used_in:
  - limite_dulong_petit
  common_mistake: Usar 3k_B en lugar de 3R para magnitudes molares.
  typical_range: 0 a aproximadamente 24.94 J/(mol*K) en el límite clásico.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for:
    - limite_dulong_petit
    secondary_for:
    - calor_especifico_debye_integral
  graph_binding:
    channels:
    - yAxis
    preferred_axis: yAxis
  pedagogical_notes:
    es: Usa [[calor_especifico_molar]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[calor_especifico_molar]] within the Debye regime and always check SI units.
- id: temperatura
  symbol: T
  nombre:
    es: temperatura
    en: temperature
  descripcion:
    es: Temperatura absoluta del sólido en equilibrio térmico.
    en: Absolute temperature of the solid in thermal equilibrium.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: thermal_state
  physical_role: variable independiente
  used_in:
  - variable_reducida_debye
  - calor_especifico_debye_baja_temperatura
  - calor_especifico_debye_integral
  common_mistake: Usar Celsius en cocientes térmicos.
  typical_range: 1 K a 1000 K según el material.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - variable_reducida_debye
  graph_binding:
    channels:
    - xAxis
    preferred_axis: xAxis
  pedagogical_notes:
    es: Usa [[temperatura]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[temperatura]] within the Debye regime and always check SI units.
- id: temperatura_debye
  symbol: ΘD
  nombre:
    es: temperatura de Debye
    en: Debye temperature
  descripcion:
    es: Temperatura característica asociada a la frecuencia máxima de fonones del sólido.
    en: Characteristic temperature associated with the maximum phonon frequency of the solid.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: material_parameter
  physical_role: parámetro de material
  used_in:
  - temperatura_debye
  - variable_reducida_debye
  - calor_especifico_debye_baja_temperatura
  - calor_especifico_debye_integral
  common_mistake: Tratarla como temperatura ambiental.
  typical_range: Decenas a miles de kelvin.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for:
    - temperatura_debye
    secondary_for:
    - variable_reducida_debye
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: Usa [[temperatura_debye]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[temperatura_debye]] within the Debye regime and always check SI units.
- id: frecuencia_debye
  symbol: ωD
  nombre:
    es: frecuencia de Debye
    en: Debye frequency
  descripcion:
    es: Frecuencia angular máxima del espectro de Debye.
    en: Maximum angular frequency of the Debye spectrum.
  unidad_si: rad/s
  dimension: T^-1
  is_vector: false
  components: []
  category: spectral_cutoff
  physical_role: corte espectral
  used_in:
  - temperatura_debye
  common_mistake: Confundir frecuencia angular con frecuencia en Hz sin factor 2π.
  typical_range: 10^12 a 10^14 rad/s.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for:
    - temperatura_debye
    secondary_for: []
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: Usa [[frecuencia_debye]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[frecuencia_debye]] within the Debye regime and always check SI units.
- id: hbar
  symbol: ℏ
  nombre:
    es: constante de Planck reducida
    en: reduced Planck constant
  descripcion:
    es: Constante cuántica que convierte frecuencia angular en energía.
    en: Quantum constant converting angular frequency into energy.
  unidad_si: J*s
  dimension: M L^2 T^-1
  is_vector: false
  components: []
  category: constant
  physical_role: constante física
  used_in:
  - temperatura_debye
  common_mistake: Cambiar ℏ por h sin ajustar 2π.
  typical_range: 1.054e-34 J*s.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: false
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - temperatura_debye
  graph_binding:
    channels:
    - constant
    preferred_axis: constant
  pedagogical_notes:
    es: Usa [[hbar]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[hbar]] within the Debye regime and always check SI units.
- id: constante_boltzmann
  symbol: k_B
  nombre:
    es: constante de Boltzmann
    en: Boltzmann constant
  descripcion:
    es: Constante que conecta temperatura absoluta con energía térmica.
    en: Constant connecting absolute temperature with thermal energy.
  unidad_si: J/K
  dimension: M L^2 T^-2 Θ^-1
  is_vector: false
  components: []
  category: constant
  physical_role: constante física
  used_in:
  - temperatura_debye
  - calor_especifico_debye_baja_temperatura
  - limite_dulong_petit
  - calor_especifico_debye_integral
  common_mistake: Olvidar que k_B usa kelvin absoluto.
  typical_range: 1.381e-23 J/K.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: false
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - limite_dulong_petit
  graph_binding:
    channels:
    - constant
    preferred_axis: constant
  pedagogical_notes:
    es: Usa [[constante_boltzmann]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[constante_boltzmann]] within the Debye regime and always check SI units.
- id: constante_gases
  symbol: R
  nombre:
    es: constante de los gases
    en: gas constant
  descripcion:
    es: Constante molar equivalente a N_A k_B.
    en: Molar constant equal to N_A k_B.
  unidad_si: J/(mol*K)
  dimension: M L^2 T^-2 Θ^-1 N^-1
  is_vector: false
  components: []
  category: constant
  physical_role: constante molar
  used_in:
  - limite_dulong_petit
  common_mistake: Mezclar R con k_B sin convertir moles a partículas.
  typical_range: 8.314 J/(mol*K).
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: false
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - limite_dulong_petit
  graph_binding:
    channels:
    - constant
    preferred_axis: constant
  pedagogical_notes:
    es: Usa [[constante_gases]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[constante_gases]] within the Debye regime and always check SI units.
- id: numero_atomos
  symbol: N
  nombre:
    es: número de átomos
    en: number of atoms
  descripcion:
    es: Cantidad de átomos vibrantes incluidos en el sólido modelado.
    en: Number of vibrating atoms included in the modeled solid.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: count
  physical_role: tamaño del sistema
  used_in:
  - calor_especifico_debye_baja_temperatura
  - limite_dulong_petit
  - calor_especifico_debye_integral
  common_mistake: Usar número de moles donde se pide número de átomos.
  typical_range: Desde 1 hasta escala macroscópica.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: false
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - calor_especifico_debye_integral
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: Usa [[numero_atomos]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[numero_atomos]] within the Debye regime and always check SI units.
- id: temperatura_reducida
  symbol: x
  nombre:

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]

formulas.yaml context:
version: 5.0.0
ui:
  default_formula: calor_especifico_debye_integral
formulas:
- id: temperatura_debye
  title:
    es: Temperatura de Debye
    en: Debye temperature
  equation: theta_D=hbar*omega_D/k_B
  latex: \Theta_D=\frac{\hbar\omega_D}{k_B}
  rearrangements:
  - id: despeje_frecuencia_debye
    target: frecuencia_debye
    equation: omega_D=k_B*theta_D/hbar
    latex: \omega_D=\frac{k_B\Theta_D}{\hbar}
  - id: despeje_hbar
    target: hbar
    equation: hbar=k_B*theta_D/omega_D
    latex: \hbar=\frac{k_B\Theta_D}{\omega_D}
  category: termodinamica-estadistica
  relation_type: definition
  physical_meaning:
    es: Convierte la frecuencia máxima del espectro de Debye en una temperatura característica del sólido.
    en: Converts the maximum Debye spectrum frequency into a characteristic temperature of the solid.
  constraints:
    es: Requiere frecuencia de corte positiva y constantes físicas positivas.
    en: Requires a positive cutoff frequency and positive physical constants.
  validity:
    es: Útil cuando el sólido puede describirse mediante modos acústicos colectivos hasta una frecuencia de corte.
    en: Useful when the solid can be described by collective acoustic modes up to a cutoff frequency.
  dimension_check: '[K]=([J*s]*[s^-1])/[J*K^-1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - calor_especifico_debye_baja_temperatura
  - calor_especifico_debye_integral
  interpretation_tags:
  - escala_termica
  - corte_fononico
  - comparacion_T_theta
  result_semantics:
    target: temperatura_debye
    kind: scale
    sign_meaning:
      es: Debe ser positiva; un valor negativo no tiene sentido físico.
      en: It must be positive; a negative value has no physical meaning.
    absolute_value_meaning:
      es: Indica la temperatura a partir de la cual se excita gran parte del espectro vibracional.
      en: Indicates the temperature above which much of the vibrational spectrum is excited.
  domain_checks:
  - id: theta_positive
    condition: theta_D>0
    message:
      es: La temperatura de Debye debe ser positiva.
      en: Debye temperature must be positive.
  coherence_checks:
  - id: omega_positive
    condition: omega_D>0
    message:
      es: La frecuencia de Debye debe ser positiva.
      en: Debye frequency must be positive.
  graph_implications:
    es: Fija la escala horizontal cuando se representa el calor específico frente a T/ΘD.
    en: Sets the horizontal scale when plotting heat capacity versus T/ΘD.
  pedagogical_triggers:
  - id: confundir_con_temperatura_actual
    text:
      es: No confundas ΘD con la temperatura real del experimento.
      en: Do not confuse ΘD with the actual experimental temperature.
- id: variable_reducida_debye
  title:
    es: Temperatura reducida de Debye
    en: Reduced Debye temperature
  equation: x=T/theta_D
  latex: x=\frac{T}{\Theta_D}
  rearrangements:
  - id: despeje_temperatura
    target: temperatura
    equation: T=x*theta_D
    latex: T=x\Theta_D
  - id: despeje_temperatura_debye
    target: temperatura_debye
    equation: theta_D=T/x
    latex: \Theta_D=\frac{T}{x}
  category: termodinamica-estadistica
  relation_type: scaling
  physical_meaning:
    es: Compara la temperatura del sólido con la escala vibracional marcada por la temperatura de Debye.
    en: Compares the solid temperature with the vibrational scale set by the Debye temperature.
  constraints:
    es: T y ΘD deben estar en kelvin y ΘD no puede ser cero.
    en: T and ΘD must be in kelvin and ΘD cannot be zero.
  validity:
    es: Sirve para decidir si domina el régimen cuántico frío o el límite clásico de alta temperatura.
    en: It indicates whether the cold quantum regime or the high-temperature classical limit dominates.
  dimension_check: '[1]=[K]/[K]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - calor_especifico_debye_baja_temperatura
  - calor_especifico_debye_integral
  - limite_dulong_petit
  interpretation_tags:
  - variable_adimensional
  - regimen_termico
  - comparacion
  result_semantics:
    target: temperatura_reducida
    kind: ratio
    sign_meaning:
      es: Debe ser positiva si T y ΘD son físicas.
      en: It must be positive if T and ΘD are physical.
    absolute_value_meaning:
      es: Valores mucho menores que 1 indican régimen cuántico de baja temperatura; valores grandes se acercan al límite clásico.
      en: Values much less than 1 indicate a low-temperature quantum regime; large values approach the classical limit.
  domain_checks:
  - id: theta_not_zero
    condition: theta_D>0
    message:
      es: No se puede dividir por una temperatura de Debye nula.
      en: Cannot divide by a zero Debye temperature.
  coherence_checks:
  - id: x_regime
    condition: x>=0
    message:
      es: La temperatura reducida no debe ser negativa.
      en: Reduced temperature should not be negative.
  graph_implications:
    es: Es la magnitud natural del eje horizontal en la curva de Debye.
    en: It is the natural quantity on the horizontal axis of the Debye curve.
  pedagogical_triggers:
  - id: usar_celsius
    text:
      es: Usar grados Celsius rompe la interpretación de T/ΘD.
      en: Using Celsius breaks the interpretation of T/ΘD.
- id: calor_especifico_debye_baja_temperatura
  title:
    es: Ley T cúbica de Debye
    en: Debye cubic low-temperature law
  equation: C_V=(12*pi^4/5)*N*k_B*(T/theta_D)^3
  latex: C_V=\frac{12\pi^4}{5}Nk_B\left(\frac{T}{\Theta_D}\right)^3
  rearrangements:
  - id: despeje_numero_atomos
    target: numero_atomos
    equation: N=C_V/((12*pi^4/5)*k_B*(T/theta_D)^3)
    latex: N=\frac{C_V}{(12\pi^4/5)k_B(T/\Theta_D)^3}
  - id: despeje_temperatura_aproximada
    target: temperatura
    equation: T=theta_D*(C_V/((12*pi^4/5)*N*k_B))^(1/3)
    latex: T=\Theta_D\left(\frac{C_V}{(12\pi^4/5)Nk_B}\right)^{1/3}
  category: termodinamica-estadistica
  relation_type: approximation
  physical_meaning:
    es: Predice que a baja temperatura solo se excita una fracción pequeña de modos acústicos y el calor específico crece
      como T cúbica.
    en: Predicts that at low temperature only a small fraction of acoustic modes is excited and heat capacity grows cubically
      with T.
  constraints:
    es: Requiere T mucho menor que ΘD y un sólido cristalino con modos acústicos dominantes.
    en: Requires T much smaller than ΘD and a crystalline solid dominated by acoustic modes.
  validity:
    es: Adecuada típicamente para T/ΘD menor que 0.1, antes de que el espectro completo participe.
    en: Typically appropriate for T/ΘD below 0.1, before the full spectrum participates.
  dimension_check: '[J*K^-1]=[1]*[1]*[J*K^-1]*[1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - estimacion_baja_temperatura
  - comparacion_experimental
  interpretation_tags:
  - baja_temperatura
  - ley_cubica
  - fonones_acusticos
  result_semantics:
    target: calor_especifico
    kind: response
    sign_meaning:
      es: Debe ser positivo; un valor negativo indica datos o modelo incorrectos.
      en: It must be positive; a negative value indicates wrong data or model.
    absolute_value_meaning:
      es: Mide cuánta energía debe añadirse para aumentar un kelvin la temperatura del sólido.
      en: Measures how much energy must be added to raise the solid temperature by one kelvin.
  domain_checks:
  - id: low_temp_domain
    condition: T/theta_D<0.1
    message:
      es: La ley cúbica solo es fiable en baja temperatura.
      en: The cubic law is reliable only at low temperature.
  coherence_checks:
  - id: cv_less_dulong
    condition: C_V<3*N*k_B
    message:
      es: En baja temperatura el calor específico debe quedar por debajo del límite de Dulong-Petit.
      en: At low temperature heat capacity should remain below the Dulong-Petit limit.
  graph_implications:
    es: La curva arranca casi horizontal y se curva hacia arriba con dependencia cúbica.
    en: The curve starts almost flat and bends upward with cubic dependence.
  pedagogical_triggers:
  - id: aplicar_t_cubica_fuera_rango
    text:
      es: No extiendas la ley T³ hasta temperaturas comparables con ΘD.
      en: Do not extend the T³ law to temperatures comparable with ΘD.
- id: limite_dulong_petit
  title:
    es: Límite de Dulong-Petit
    en: Dulong-Petit limit
  equation: C_V=3*N*k_B
  latex: C_V=3Nk_B
  rearrangements:
  - id: despeje_numero_atomos_dulong
    target: numero_atomos
    equation: N=C_V/(3*k_B)
    latex: N=\frac{C_V}{3k_B}
  - id: calor_especifico_molar_dulong
    target: calor_especifico_molar
    equation: C_m=3*R
    latex: C_m=3R
  category: termodinamica-estadistica
  relation_type: limit
  physical_meaning:
    es: Da el valor clásico de alta temperatura cuando cada átomo aporta tres modos vibracionales equipartidos.
    en: Gives the high-temperature classical value when each atom contributes three equipartitioned vibrational modes.
  constraints:
    es: Requiere T mayor o comparable con ΘD y comportamiento armónico sin efectos electrónicos dominantes.
    en: Requires T greater than or comparable to ΘD and harmonic behavior without dominant electronic effects.
  validity:
    es: Funciona como límite superior clásico de la contribución vibracional en muchos sólidos simples.
    en: Works as the classical upper limit of the vibrational contribution in many simple solids.
  dimension_check: '[J*K^-1]=[1]*[1]*[J*K^-1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - limite_alta_temperatura
  - calor_especifico_molar
  interpretation_tags:
  - alta_temperatura
  - limite_clasico
  - equiparticion
  result_semantics:
    target: calor_especifico
    kind: limit
    sign_meaning:
      es: El límite es positivo porque añadir temperatura requiere aportar energía.
      en: The limit is positive because raising temperature requires adding energy.
    absolute_value_meaning:
      es: Representa el máximo clásico vibracional antes de introducir correcciones no armónicas o electrónicas.
      en: Represents the classical vibrational maximum before adding anharmonic or electronic corrections.
  domain_checks:
  - id: high_temp_domain
    condition: T/theta_D>=1
    message:
      es: El límite clásico se alcanza cuando T es comparable o mayor que ΘD.
      en: The classical limit is reached when T is comparable to or greater than ΘD.
  coherence_checks:
  - id: molar_3r
    condition: C_m≈3*R
    message:
      es: Por mol, el valor esperado se acerca a 3R.
      en: Per mole, the expected value approaches 3R.
  graph_implications:
    es: La curva se aproxima a una meseta horizontal.
    en: The curve approaches a horizontal plateau.
  pedagogical_triggers:
  - id: olvidar_limite
    text:
      es: Un crecimiento indefinido de C_V con T contradice el límite clásico.
      en: An unlimited growth of C_V with T contradicts the classical limit.
- id: calor_especifico_debye_integral
  title:
    es: Calor específico integral de Debye
    en: Debye integral heat capacity
  equation: C_V=9*N*k_B*(T/theta_D)^3*D3(theta_D/T)
  latex: C_V=9Nk_B\left(\frac{T}{\Theta_D}\right)^3D_3\left(\frac{\Theta_D}{T}\right)
  rearrangements: []
  category: termodinamica-estadistica
  relation_type: model
  physical_meaning:
    es: Resume la suma de modos fonónicos con densidad de estados de Debye entre baja y alta temperatura.
    en: Summarizes the phonon mode sum with Debye density of states between low and high temperature.
  constraints:
    es: D3 representa la integral de Debye y suele evaluarse numéricamente; T y ΘD deben ser positivos.
    en: D3 represents the Debye integral and is usually evaluated numerically; T and ΘD must be positive.
  validity:
    es: Modelo central para sólidos cristalinos simples donde los fonones acústicos dominan el calor específico.
    en: Central model for simple crystalline solids where acoustic phonons dominate heat capacity.
  dimension_check: '[J*K^-1]=[1]*[1]*[J*K^-1]*[1]*[1]'
  calculable: false
  motivo_no_calculable: Requiere evaluar una integral especial de Debye o una tabla numérica.
  used_in:
  - curva_debye
  - ajuste_temperatura_debye
  interpretation_tags:
  - integral_debye
  - curva_completa
  - fonones
  result_semantics:
    target: calor_especifico
    kind: model_output
    sign_meaning:
      es: Debe ser positivo y crecer hacia una meseta al aumentar T.
      en: It must be positive and grow toward a plateau as T increases.
    absolute_value_meaning:
      es: Cuantifica la respuesta térmica vibracional completa predicha por el modelo de Debye.
      en: Quantifies the full vibrational thermal response predicted by the Debye model.
  domain_checks:
  - id: positive_temperatures
    condition: T>0 and theta_D>0
    message:
      es: La integral de Debye necesita temperaturas positivas.
      en: The Debye integral needs positive temperatures.
  coherence_checks:
  - id: low_high_limits
    condition: C_V approaches T^3 at low T and 3*N*k_B at high T
    message:
      es: La curva debe unir la ley T³ con el límite de Dulong-Petit.
      en: The curve must connect the T³ law with the Dulong-Petit limit.
  graph_implications:
    es: La gráfica normalizada debe crecer desde cero hasta una meseta cerca de 3R por mol.
    en: The normalized graph should rise from zero to a plateau near 3R per mole.
  pedagogical_triggers:
  - id: integral_no_es_constante
    text:
      es: La función de Debye no es una constante; cambia con ΘD/T.
      en: The Debye function is not constant; it changes with ΘD/T.

graficos.yaml contract:
- version must be "1.0".
- leaf must be "modelo-de-debye".
- Include only sections declared by meta.yaml/map.
- Do not include JSX, HTML, React components, or <MathInline />.
- All bilingual fields require es and en.
- agentHints and commonMistakes require at least 3 entries in es and 3 in en.
- recommendedTab must be "graficas".
- Required sections for this leaf: ['coord']

Coord required fields:
- id and graphId: "modelo-de-debye-Coord"; type and graphType: "Coord".
- title, xAxis, yAxis, xMagnitude, yMagnitude.
- relation, physicalReading, slopeMeaning, interceptMeaning, curvatureMeaning, signMeaning, areaMeaning, domainMeaning, modelConnection, formulaConnection, readingFocus.
- agentHints, commonMistakes, curveProfile, dataRange, recommendedTab.
- curveProfile: type, expectedShape.es/en, keyPoints with at least 2 points. Each point has x, y, label.es/en.
- dataRange: xMin, xMax, yMin, yMax, autoScale.
- To pass graph_pfc_coherence, relation.es/en, physicalReading.es/en, and readingFocus.es/en must directly answer meta.yaml.pregunta_fisica_central.
- Reuse at least two significant terms from pregunta_fisica_central in the graph text, such as the dominant magnitude, independent variable, material/parameter, and physical dependency.
- Do not write a generic graph description disconnected from the central question.

Dcl required fields:
- id and graphId: "modelo-de-debye-Dcl"; type and graphType: "Dcl".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, forceVectors, equilibriumState, recommendedTab.
- forceVectors: at least one vector; each has id, label.es/en, targetObject, direction, magnitudeRef, signConvention.es/en, formulaRefs.
- equilibriumState.conditionDescription.es/en is required.

Svg required fields:
- id and graphId: "modelo-de-debye-Svg"; type and graphType: "Svg".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, animationTriggers, interactiveElements, recommendedTab.
- animationTriggers and interactiveElements are lists; they may be empty if no interaction applies.

If no graph types are declared, output only:
version: "1.0"
leaf: "modelo-de-debye"

Physics quality:
- A Coord graph must encode a real quantitative relation from formulas.yaml.
- A Dcl graph must represent actual forces/interactions of the model, not decorative arrows.
- A Svg graph must represent an interpretable physical scene, not a generic illustration.
- formulaConnection should use text/LaTeX, never JSX.
