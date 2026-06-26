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

Declared graph types: ['Coord', 'Svg']
Available magnitude ids: ['energia_media', 'temperatura', 'frecuencia_angular', 'constante_boltzmann', 'hbar', 'beta', 'funcion_particion', 'numero_cuantico', 'probabilidad_ocupacion', 'energia_cuantica']
Available formula ids: ['energia_media_cuantica', 'limite_clasico_equiparticion', 'beta_inversa_termica', 'funcion_particion_cuantica', 'probabilidad_ocupacion_n']

Current graficos.yaml:
GRAFICOS_ACTUAL_INICIO
version: '1.0'
leaf: oscilador-armonico-estadistico
coord:
  id: oscilador-armonico-estadistico-Coord
  graphId: oscilador-armonico-estadistico-Coord
  type: Coord
  graphType: Coord
  title:
    es: Energía media frente a temperatura
    en: Mean energy versus temperature
  xAxis:
    es: Temperatura absoluta T (K)
    en: Absolute temperature T (K)
  yAxis:
    es: Energía media ⟨E⟩ (J)
    en: Mean energy ⟨E⟩ (J)
  xMagnitude: temperatura
  yMagnitude: energia_media
  relation:
    es: 'La gráfica responde cómo la energía media del oscilador armónico estadístico depende de la temperatura: crece suavemente
      desde la energía de punto cero y se aproxima a k_B*T cuando la temperatura domina sobre la frecuencia angular.'
    en: 'The graph answers how the mean energy of the statistical harmonic oscillator depends on temperature: it grows smoothly
      from zero-point energy and approaches k_B*T when temperature dominates over angular frequency.'
  physicalReading:
    es: Para una frecuencia angular fija, aumentar la temperatura puebla niveles excitados y eleva la energía media; si la
      frecuencia angular es mayor, la misma temperatura produce menos excitación relativa.
    en: For fixed angular frequency, increasing temperature populates excited levels and raises mean energy; if angular frequency
      is larger, the same temperature gives less relative excitation.
  slopeMeaning:
    es: La pendiente indica cuánto aumenta la energía media por cada kelvin; a alta temperatura tiende a k_B.
    en: The slope shows how much mean energy increases per kelvin; at high temperature it tends to k_B.
  interceptMeaning:
    es: El corte ideal en T cercana a cero representa la energía de punto cero 0.5*hbar*frecuencia_angular.
    en: The ideal near-zero-temperature intercept represents the zero-point energy 0.5*hbar*angular_frequency.
  curvatureMeaning:
    es: La curvatura inicial revela la transición entre régimen cuántico congelado y régimen clásico de equipartición.
    en: The initial curvature reveals the transition between frozen quantum behavior and classical equipartition.
  signMeaning:
    es: La energía media y la temperatura absoluta son positivas; no hay cambio de signo físico.
    en: Mean energy and absolute temperature are positive; there is no physical sign change.
  areaMeaning:
    es: El área bajo la curva no es la magnitud principal del modelo; la lectura clave es pendiente, curvatura y escala.
    en: The area under the curve is not the model’s main quantity; the key reading is slope, curvature, and scale.
  domainMeaning:
    es: El dominio exige temperatura positiva y frecuencia angular positiva; el límite clásico solo aparece cuando k_B*T supera
      claramente a hbar*frecuencia_angular.
    en: The domain requires positive temperature and positive angular frequency; the classical limit appears only when k_B*T
      clearly exceeds hbar*angular_frequency.
  modelConnection:
    es: El modelo conecta niveles discretos del oscilador con una media macroscópica mediante la distribución de Boltzmann.
    en: The model connects discrete oscillator levels to a macroscopic mean through the Boltzmann distribution.
  formulaConnection:
    es: La curva usa energia_media_cuantica y se compara con limite_clasico_equiparticion.
    en: The curve uses energia_media_cuantica and is compared with limite_clasico_equiparticion.
  readingFocus:
    es: Lee si la energía media depende casi linealmente de la temperatura o si la frecuencia angular mantiene visible la
      cuantización.
    en: Read whether mean energy depends almost linearly on temperature or whether angular frequency keeps quantization visible.
  agentHints:
    es:
    - Comprueba que el eje x sea temperatura absoluta, no Celsius.
    - Relaciona la meseta inicial con la energía de punto cero.
    - Compara la curva cuántica con la recta clásica k_B*T.
    en:
    - Check that the x-axis is absolute temperature, not Celsius.
    - Relate the initial plateau to zero-point energy.
    - Compare the quantum curve with the classical line k_B*T.
  commonMistakes:
    es:
    - Esperar que la energía media valga cero en T = 0.
    - Aplicar equipartición aunque k_B*T no supere hbar*frecuencia_angular.
    - Ignorar que la frecuencia angular cambia la escala vertical.
    en:
    - Expecting mean energy to be zero at T = 0.
    - Applying equipartition when k_B*T does not exceed hbar*angular_frequency.
    - Ignoring that angular frequency changes the vertical scale.
  curveProfile:
    type: increasing_saturating_to_linear
    expectedShape:
      es: Curva creciente, convexa al inicio y casi lineal a alta temperatura.
      en: Increasing curve, initially curved and nearly linear at high temperature.
    keyPoints:
    - x: 0
      y: 0.5
      label:
        es: Energía de punto cero
        en: Zero-point energy
    - x: 1
      y: 1.08
      label:
        es: Transición cuántico-clásica
        en: Quantum-classical transition
    - x: 5
      y: 5.0
      label:
        es: Régimen clásico aproximado
        en: Approximate classical regime
  dataRange:
    xMin: 0
    xMax: 5
    yMin: 0
    yMax: 5.5
    autoScale: true
  recommendedTab: graficas
svg:
  id: oscilador-armonico-estadistico-Svg
  graphId: oscilador-armonico-estadistico-Svg
  type: Svg
  graphType: Svg
  title:
    es: Niveles de un oscilador armónico estadístico
    en: Levels of a statistical harmonic oscillator
  sceneId: oscillator_levels_boltzmann
  sceneLabel:
    es: Escalera de niveles y ocupación térmica
    en: Level ladder and thermal occupation
  objects:
    es:
    - oscilador
    - niveles energéticos
    - baño térmico
    - poblaciones de Boltzmann
    en:
    - oscillator
    - energy levels
    - heat bath
    - Boltzmann populations
  mainObject: oscilador
  referenceFrame:
    es: Descripción energética en equilibrio canónico; no representa una trayectoria espacial.
    en: Energy-space description at canonical equilibrium; it does not represent a spatial trajectory.
  geometry:
    es: Escalera vertical de niveles igualmente espaciados por hbar*frecuencia_angular con barras de ocupación decrecientes.
    en: Vertical ladder of equally spaced levels by hbar*angular_frequency with decreasing occupation bars.
  interactions:
    es:
    - Intercambio de energía con el baño térmico.
    - Ocupación probabilística de niveles discretos.
    - Separación energética controlada por la frecuencia angular.
    en:
    - Energy exchange with the heat bath.
    - Probabilistic occupation of discrete levels.
    - Energy spacing controlled by angular frequency.
  modelElements:
    es:
    - Niveles E_n = hbar*frecuencia_angular*(n + 1/2).
    - Pesos de Boltzmann normalizados por la función de partición.
    - Temperatura como control de ocupación de estados excitados.
    en:
    - Levels E_n = hbar*angular_frequency*(n + 1/2).
    - Boltzmann weights normalized by the partition function.
    - Temperature as the control of excited-state occupation.
  visualCues:
    es:
    - Separación vertical mayor si aumenta frecuencia angular.
    - Barras superiores más visibles si aumenta temperatura.
    - Nivel inferior no parte de energía cero, sino de punto cero.
    en:
    - Vertical spacing grows if angular frequency increases.
    - Upper bars become more visible if temperature increases.
    - The lowest level does not start at zero energy, but at zero-point energy.
  scaleMeaning:
    es: La escala vertical representa energía; el grosor de cada barra representa probabilidad de ocupación.
    en: The vertical scale represents energy; each bar thickness represents occupation probability.
  relation:
    es: 'El esquema muestra por qué la energía media depende de temperatura y frecuencia angular: la temperatura reparte ocupación
      y la frecuencia angular separa los niveles.'
    en: 'The diagram shows why mean energy depends on temperature and angular frequency: temperature redistributes occupation
      and angular frequency spaces the levels.'
  physicalReading:
    es: A baja temperatura domina el nivel fundamental; al subir la temperatura aparecen niveles excitados y crece la energía
      media.
    en: At low temperature the ground level dominates; as temperature rises, excited levels appear and mean energy grows.
  modelConnection:
    es: Es la imagen microscópica que sostiene la curva Coord de energía media frente a temperatura.
    en: It is the microscopic picture supporting the Coord curve of mean energy versus temperature.
  formulaConnection:
    es: Conecta funcion_particion_cuantica, probabilidad_ocupacion_n y energia_media_cuantica.
    en: Connects funcion_particion_cuantica, probabilidad_ocupacion_n, and energia_media_cuantica.
  readingFocus:
    es: Observa si el aumento de temperatura abre ocupación de niveles o si la frecuencia angular mantiene la energía concentrada
      abajo.
    en: Observe whether increasing temperature opens level occupation or whether angular frequency keeps energy concentrated
      below.
  agentHints:
    es:
    - Usa las barras como probabilidades, no como posiciones reales.
    - Relaciona la separación de niveles con hbar*frecuencia_angular.
    - Explica la energía media como promedio ponderado de niveles.
    en:
    - Use the bars as probabilities, not real positions.
    - Relate level spacing to hbar*angular_frequency.
    - Explain mean energy as a weighted average of levels.
  commonMistakes:
    es:
    - Dibujar niveles con separación variable.
    - Hacer que el nivel fundamental tenga energía cero.
    - Confundir ocupación térmica con amplitud de oscilación espacial.
    en:
    - Drawing levels with variable spacing.
    - Making the ground level have zero energy.
    - Confusing thermal occupation with spatial oscillation amplitude.
  animationTriggers:
  - id: increase_temperature
    label:
      es: Aumentar temperatura
      en: Increase temperature
    effect:
      es: Aumentan las ocupaciones de niveles excitados.
      en: Excited-level occupations increase.
  - id: increase_frequency
    label:
      es: Aumentar frecuencia angular
      en: Increase angular frequency
    effect:
      es: Se separan los niveles y disminuye la ocupación relativa superior.
      en: Levels spread apart and upper relative occupation decreases.
  interactiveElements:
  - id: temperature_slider
    label:
      es: Control de temperatura
      en: Temperature control
    bindsTo: temperatura
  - id: frequency_slider
    label:
      es: Control de frecuencia angular
      en: Angular frequency control
    bindsTo: frecuencia_angular
  recommendedTab: graficas
GRAFICOS_ACTUAL_FIN

meta.yaml context:
id: oscilador-armonico-estadistico
nombre:
  es: Oscilador armonico estadistico
  en: Statistical Harmonic Oscillator
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: sistemas-modelo
parent_id: sistemas-modelo
ruta_relativa: fisica-clasica/termodinamica-estadistica/sistemas-modelo/oscilador-armonico-estadistico
orden: 275200
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
icon: 💪
descripcion: Modelo que conecta energía térmica, frecuencia y ocupación de un oscilador armónico.
description_en: Model linking thermal energy, frequency, and occupation of a harmonic oscillator.
tags:
  es:
  - termodinámica estadística
  - oscilador armónico
  - equipartición
  - energía media
  - cuantización
  en:
  - statistical thermodynamics
  - harmonic oscillator
  - equipartition
  - mean energy
  - quantization
prerequisitos:
- energia-interna
- temperatura
- distribucion-boltzmann
graficos:
- Coord
- Svg
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 4
tiempo_estimado_min: 35
pregunta_fisica_central:
  es: ¿Cómo depende la energía media de un oscilador armónico estadístico de la temperatura y de la frecuencia angular?
  en: How does the mean energy of a statistical harmonic oscillator depend on temperature and angular frequency?
representacion_dominante: Coord
magnitud_dominante: energia_media
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
leaf: oscilador-armonico-estadistico
magnitudes:
- id: energia_media
  symbol: ⟨E⟩
  nombre:
    es: energía media
    en: mean energy
  descripcion:
    es: Energía esperada del oscilador en equilibrio térmico.
    en: Expected energy of the oscillator in thermal equilibrium.
  unidad_si: J
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: energia
  physical_role: resultado principal
  used_in:
  - energia_media_cuantica
  - limite_clasico_equiparticion
  common_mistake: Confundirla con la energía instantánea de una trayectoria concreta.
  typical_range: 10^-23 J a 10^-20 J en escalas microscópicas de aula.
  sign_behavior:
    has_sign: false
    meaning:
      es: No tiene signo mecánico; representa contenido energético.
      en: It has no mechanical sign; it represents energy content.
  zero_behavior:
    allowed: false
    meaning:
      es: En el modelo cuántico completo no llega a cero por la energía de punto cero.
      en: In the full quantum model it does not reach zero because of zero-point energy.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: energia_media >= 0
  interpretation_role:
    primary_for:
    - energia_media_cuantica
    - limite_clasico_equiparticion
    secondary_for:
    - funcion_particion_cuantica
  graph_binding:
    channels: yAxis
    description:
      es: Aparece como eje vertical en la curva frente a temperatura.
      en: Appears as the vertical axis in the curve versus temperature.
  pedagogical_notes:
    es: 'Es la magnitud dominante: traduce temperatura y frecuencia angular en energía observable.'
    en: 'It is the dominant quantity: it turns temperature and angular frequency into observable energy.'
- id: temperatura
  symbol: T
  nombre:
    es: temperatura
    en: temperature
  descripcion:
    es: Temperatura absoluta del baño térmico acoplado al oscilador.
    en: Absolute temperature of the heat bath coupled to the oscillator.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: estado termico
  physical_role: variable independiente
  used_in:
  - energia_media_cuantica
  - limite_clasico_equiparticion
  - beta_inversa_termica
  - funcion_particion_cuantica
  - probabilidad_ocupacion_n
  common_mistake: Usar grados Celsius en fórmulas canónicas.
  typical_range: 1 K a 1000 K en ejemplos básicos.
  sign_behavior:
    has_sign: false
    meaning:
      es: La temperatura absoluta positiva no marca dirección.
      en: Positive absolute temperature does not mark direction.
  zero_behavior:
    allowed: false
    meaning:
      es: T = 0 K es un límite ideal; las fórmulas con beta divergen.
      en: T = 0 K is an ideal limit; beta formulas diverge.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: temperatura > 0
  interpretation_role:
    primary_for:
    - energia_media_cuantica
    - limite_clasico_equiparticion
    - beta_inversa_termica
    secondary_for:
    - funcion_particion_cuantica
    - probabilidad_ocupacion_n
  graph_binding:
    channels: xAxis
    description:
      es: Es el eje horizontal que permite ver cómo crece la energía media.
      en: It is the horizontal axis used to see how mean energy grows.
  pedagogical_notes:
    es: 'Debe leerse como temperatura absoluta: es la escala que abre niveles excitados.'
    en: 'It must be read as absolute temperature: it is the scale that opens excited levels.'
- id: frecuencia_angular
  symbol: ω
  nombre:
    es: frecuencia angular
    en: angular frequency
  descripcion:
    es: Parámetro que fija la rigidez dinámica y la separación entre niveles energéticos.
    en: Parameter fixing dynamical stiffness and spacing between energy levels.
  unidad_si: rad/s
  dimension: T^-1
  is_vector: false
  components: []
  category: parametro del modelo
  physical_role: parámetro físico
  used_in:
  - energia_media_cuantica
  - funcion_particion_cuantica
  - probabilidad_ocupacion_n
  common_mistake: Olvidar que cambia la energía de punto cero y la escala cuántica.
  typical_range: 10^1 rad/s a 10^15 rad/s según sistema macroscópico o microscópico.
  sign_behavior:
    has_sign: false
    meaning:
      es: No usa signo para el sentido de giro; aquí mide frecuencia positiva.
      en: It does not use sign for rotation sense; here it measures positive frequency.
  zero_behavior:
    allowed: false
    meaning:
      es: ω = 0 rompe el oscilador armónico y la cuantización usada.
      en: ω = 0 breaks the harmonic oscillator and the quantization used.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: frecuencia_angular > 0
  interpretation_role:
    primary_for:
    - energia_media_cuantica
    - funcion_particion_cuantica
    secondary_for:
    - probabilidad_ocupacion_n
  graph_binding:
    channels: parameter
    description:
      es: Actúa como parámetro que eleva o baja la curva de energía media.
      en: Acts as a parameter that raises or lowers the mean-energy curve.
  pedagogical_notes:
    es: Una frecuencia angular mayor separa más los niveles y hace visible la cuantización a mayor temperatura.
    en: A larger angular frequency spaces levels further and makes quantization visible at higher temperature.
- id: constante_boltzmann
  symbol: k_B
  nombre:
    es: constante de Boltzmann
    en: Boltzmann constant
  descripcion:
    es: Constante que convierte temperatura absoluta en escala energética térmica.
    en: Constant converting absolute temperature into thermal energy scale.
  unidad_si: J/K
  dimension: M L^2 T^-2 Θ^-1
  is_vector: false
  components: []
  category: constante
  physical_role: constante universal
  used_in:
  - energia_media_cuantica
  - limite_clasico_equiparticion
  - beta_inversa_termica
  - funcion_particion_cuantica
  - probabilidad_ocupacion_n
  common_mistake: Tratarla como una variable ajustable del sistema.
  typical_range: 1.380649e-23 J/K.
  sign_behavior:
    has_sign: false
    meaning:
      es: Es positiva y no codifica sentido físico.
      en: It is positive and does not encode physical direction.
  zero_behavior:
    allowed: false
    meaning:
      es: No puede ser cero en el modelo físico.
      en: It cannot be zero in the physical model.
  value_nature:
    kind: constant
    nonnegative_only: true
    expected_interval: constante_boltzmann = 1.380649e-23
  interpretation_role:
    primary_for:
    - limite_clasico_equiparticion
    - beta_inversa_termica
    secondary_for:
    - energia_media_cuantica
  graph_binding:
    channels: constant
    description:
      es: Fija la pendiente del límite clásico energía media frente a temperatura.
      en: Sets the slope of the classical mean-energy versus temperature limit.
  pedagogical_notes:
    es: Es el puente entre kelvin y joule; sin ella la temperatura no se compara con niveles energéticos.
    en: It bridges kelvin and joule; without it temperature cannot be compared with energy levels.
- id: hbar
  symbol: ℏ
  nombre:
    es: constante de Planck reducida
    en: reduced Planck constant
  descripcion:
    es: Constante cuántica que relaciona frecuencia angular con separación energética.
    en: Quantum constant relating angular frequency to energy spacing.
  unidad_si: J s
  dimension: M L^2 T^-1
  is_vector: false
  components: []
  category: constante
  physical_role: constante universal
  used_in:
  - energia_media_cuantica
  - funcion_particion_cuantica
  - probabilidad_ocupacion_n
  common_mistake: Confundir hbar con h o eliminarla en el régimen cuántico.
  typical_range: 1.054571817e-34 J s.
  sign_behavior:
    has_sign: false
    meaning:
      es: Es positiva y no representa orientación.
      en: It is positive and does not represent orientation.
  zero_behavior:
    allowed: false
    meaning:
      es: No puede anularse en la descripción cuántica.
      en: It cannot vanish in the quantum description.
  value_nature:
    kind: constant
    nonnegative_only: true
    expected_interval: hbar = 1.054571817e-34
  interpretation_role:
    primary_for:
    - energia_media_cuantica
    secondary_for:
    - funcion_particion_cuantica
    - probabilidad_ocupacion_n
  graph_binding:
    channels: constant
    description:
      es: Aporta la escala cuántica vertical asociada a la frecuencia angular.
      en: Provides the vertical quantum scale associated with angular frequency.
  pedagogical_notes:
    es: Cuando hbar*frecuencia_angular compite con k_B*T aparecen desviaciones del límite clásico.
    en: When hbar*angular frequency competes with k_B*T, deviations from the classical limit appear.
- id: beta
  symbol: β
  nombre:
    es: beta termodinámica
    en: thermodynamic beta
  descripcion:
    es: Inversa de la energía térmica kBT usada en factores de Boltzmann.
    en: Inverse of thermal energy kBT used in Boltzmann factors.
  unidad_si: J^-1
  dimension: M^-1 L^-2 T^2
  is_vector: false
  components: []
  category: parametro estadistico
  physical_role: parámetro auxiliar
  used_in:
  - beta_inversa_termica
  common_mistake: Creer que aumenta con la temperatura en lugar de disminuir.
  typical_range: 10^18 J^-1 a 10^24 J^-1 en escalas microscópicas habituales.
  sign_behavior:
    has_sign: false
    meaning:
      es: Beta positiva corresponde a temperatura absoluta positiva.
      en: Positive beta corresponds to positive absolute temperature.
  zero_behavior:
    allowed: false
    meaning:
      es: Beta cero corresponde al límite de temperatura infinita, no a reposo térmico.
      en: Zero beta corresponds to the infinite-temperature limit, not thermal rest.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: beta > 0
  interpretation_role:
    primary_for:
    - beta_inversa_termica
    secondary_for:
    - funcion_particion_cuantica
  graph_binding:
    channels: none
    description:
      es: No es eje principal, pero explica el peso de los niveles.
      en: It is not a main axis, but explains level weights.
  pedagogical_notes:
    es: 'Beta funciona como un selector: valores grandes apagan estados excitados.'
    en: 'Beta acts as a selector: large values suppress excited states.'
- id: funcion_particion
  symbol: Z
  nombre:
    es: función de partición
    en: partition function
  descripcion:
    es: Suma estadística adimensional que normaliza pesos de Boltzmann.
    en: Dimensionless statistical sum normalizing Boltzmann weights.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: funcion estadistica
  physical_role: normalización estadística
  used_in:
  - funcion_particion_cuantica
  common_mistake: Interpretarla como energía o probabilidad de un único estado.
  typical_range: Mayor que 0; puede crecer mucho a alta temperatura.
  sign_behavior:
    has_sign: false
    meaning:
      es: No tiene signo; debe ser positiva.
      en: It has no sign; it must be positive.
  zero_behavior:
    allowed: false
    meaning:
      es: Z = 0 impediría normalizar probabilidades.
      en: Z = 0 would prevent probability normalization.
  value_nature:
    kind: dimensionless
    nonnegative_only: true
    expected_interval: funcion_particion > 0
  interpretation_role:
    primary_for:
    - funcion_particion_cuantica
    secondary_for:
    - probabilidad_ocupacion_n
    - energia_media_cuantica
  graph_binding:
    channels: none
    description:
      es: Sirve de soporte conceptual para la forma de la curva energética.
      en: Conceptually supports the shape of the energy curve.
  pedagogical_notes:
    es: 'No se mide como energía: organiza la contabilidad de estados accesibles.'
    en: 'It is not measured as energy: it organizes the accounting of accessible states.'
- id: numero_cuantico
  symbol: n
  nombre:
    es: número cuántico
    en: quantum number
  descripcion:
    es: Índice entero que etiqueta los niveles excitados del oscilador.
    en: Integer index labeling excited levels of the oscillator.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: indice discreto
  physical_role: etiqueta de estado
  used_in:
  - probabilidad_ocupacion_n
  common_mistake: Tratarlo como una coordenada continua sin discreción.
  typical_range: 0, 1, 2, ...
  sign_behavior:
    has_sign: false
    meaning:
      es: No tiene signo; valores negativos no pertenecen al modelo.
      en: It has no sign; negative values do not belong to the model.
  zero_behavior:
    allowed: true
    meaning:
      es: n = 0 identifica el nivel fundamental.
      en: n = 0 identifies the ground level.
  value_nature:
    kind: integer
    nonnegative_only: true
    expected_interval: numero_cuantico >= 0
  interpretation_role:
    primary_for:
    - probabilidad_ocupacion_n
    secondary_for:
    - funcion_particion_cuantica
  graph_binding:
    channels: parameter
    description:
      es: Puede usarse como parámetro discreto en lecturas de ocupación.
      en: Can be used as a discrete parameter in occupation readings.
  pedagogical_notes:
    es: Recuerda que el oscilador estadístico cuántico se construye sobre niveles contables.
    en: It reminds that the quantum statistical oscillator is built on countable levels.
- id: probabilidad_ocupacion
  symbol: P_n
  nombre:
    es: probabilidad de ocupación
    en: occupation probability
  descripcion:
    es: Probabilidad de encontrar el oscilador en el nivel n.
    en: Probability of finding the oscillator in level n.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: probabilidad
  physical_role: resultado estadístico
  used_in:
  - probabilidad_ocupacion_n
  common_mistake: Sumar probabilidades sin comprobar normalización.
  typical_range: Entre 0 y 1.
  sign_behavior:
    has_sign: false
    meaning:
      es: No tiene signo; expresa una fracción esperada.
      en: It has no sign; it expresses an expected fraction.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser prácticamente cero p

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]

formulas.yaml context:
version: 5.0.0
leaf: oscilador-armonico-estadistico
ui:
  default_formula: energia_media_cuantica
formulas:
- id: energia_media_cuantica
  title:
    es: Energía media cuántica
    en: Quantum mean energy
  equation: energia_media = hbar*frecuencia_angular*(0.5 + 1/(exp(hbar*frecuencia_angular/(constante_boltzmann*temperatura))-1))
  latex: \langle E\rangle=\hbar\omega\left(\frac{1}{2}+\frac{1}{e^{\hbar\omega/(k_B T)}-1}\right)
  rearrangements:
  - target: temperatura
    equation: temperatura = hbar*frecuencia_angular/(constante_boltzmann*ln(1 + 1/(energia_media/(hbar*frecuencia_angular)-0.5)))
    latex: T=\frac{\hbar\omega}{k_B\ln\left(1+\frac{1}{\langle E\rangle/(\hbar\omega)-1/2}\right)
  - target: energia_cuantica
    equation: energia_cuantica = hbar*frecuencia_angular
    latex: \epsilon=\hbar\omega
  category: termodinamica-estadistica
  relation_type: modelo_cuantico
  physical_meaning:
    es: Da la energía media de un oscilador armónico en equilibrio térmico, incluyendo energía de punto cero y excitaciones.
    en: Gives the mean energy of a harmonic oscillator in thermal equilibrium, including zero-point energy and excitations.
  constraints:
    es: Temperatura positiva, frecuencia angular positiva y equilibrio con un baño térmico canónico.
    en: Positive temperature, positive angular frequency, and canonical equilibrium with a heat bath.
  validity:
    es: Válida para un oscilador armónico cuántico no interactuante con niveles igualmente espaciados.
    en: Valid for a non-interacting quantum harmonic oscillator with equally spaced levels.
  dimension_check: '[M L^2 T^-2] = [M L^2 T^-1]*[T^-1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria.md
  - modelos.md
  - ejemplos.md
  - interpretacion.yaml
  - graficos.yaml
  interpretation_tags:
  - energia_media
  - temperatura
  - frecuencia_angular
  - cuantizacion
  result_semantics:
    target: energia_media
    kind: scalar_nonnegative
    sign_meaning:
      es: La energía media es no negativa; no cambia de signo porque representa contenido energético.
      en: Mean energy is nonnegative; it does not change sign because it represents energy content.
    absolute_value_meaning:
      es: Su tamaño mide cuántos cuantos térmicos están ocupados sobre la energía de punto cero.
      en: Its size measures how many thermal quanta are occupied above the zero-point energy.
  domain_checks:
  - id: temperatura_positiva
    condition: temperatura > 0
    severity: error
  - id: frecuencia_angular_positiva
    condition: frecuencia_angular > 0
    severity: error
  coherence_checks:
  - id: limite_alta_temperatura
    expected: energia_media ≈ constante_boltzmann*temperatura cuando constante_boltzmann*temperatura >> hbar*frecuencia_angular
  - id: limite_baja_temperatura
    expected: energia_media ≈ 0.5*hbar*frecuencia_angular cuando constante_boltzmann*temperatura << hbar*frecuencia_angular
  graph_implications:
    coord: La curva energia_media frente a temperatura crece desde 0.5*hbar*frecuencia_angular y se vuelve casi lineal a alta
      temperatura.
  pedagogical_triggers:
  - id: confundir_cero_clasico
    message:
      es: 'A temperatura baja no desaparece la energía: queda energía de punto cero.'
      en: 'At low temperature energy does not vanish: zero-point energy remains.'
  - id: olvidar_frecuencia
    message:
      es: La frecuencia angular fija la separación entre niveles y cambia la escala vertical.
      en: Angular frequency fixes level spacing and changes the vertical scale.
- id: limite_clasico_equiparticion
  title:
    es: Límite clásico por equipartición
    en: Classical equipartition limit
  equation: energia_media = constante_boltzmann*temperatura
  latex: \langle E\rangle=k_B T
  rearrangements:
  - target: temperatura
    equation: temperatura = energia_media/constante_boltzmann
    latex: T=\langle E\rangle/k_B
  category: termodinamica-estadistica
  relation_type: limite_clasico
  physical_meaning:
    es: En el régimen clásico, la energía media total suma dos contribuciones cuadráticas de medio kBT.
    en: In the classical regime, total mean energy adds two quadratic half-kBT contributions.
  constraints:
    es: Requiere constante_boltzmann*temperatura mucho mayor que hbar*frecuencia_angular.
    en: Requires constante_boltzmann*temperatura much larger than hbar*frecuencia_angular.
  validity:
    es: Aproximación de alta temperatura o baja frecuencia respecto a la escala cuántica.
    en: High-temperature or low-frequency approximation relative to the quantum scale.
  dimension_check: '[M L^2 T^-2] = [M L^2 T^-2 K^-1]*[K]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria.md
  - modelos.md
  - ejemplos.md
  - interpretacion.yaml
  - graficos.yaml
  interpretation_tags:
  - equiparticion
  - energia_media
  - temperatura
  result_semantics:
    target: energia_media
    kind: scalar_nonnegative
    sign_meaning:
      es: Un valor positivo indica energía térmica media almacenada en el oscilador.
      en: A positive value indicates mean thermal energy stored in the oscillator.
    absolute_value_meaning:
      es: Es proporcional a la temperatura absoluta y no depende de la frecuencia en este límite.
      en: It is proportional to absolute temperature and independent of frequency in this limit.
  domain_checks:
  - id: temperatura_positiva
    condition: temperatura > 0
    severity: error
  - id: regimen_clasico
    condition: constante_boltzmann*temperatura >> hbar*frecuencia_angular
    severity: warning
  coherence_checks:
  - id: pendiente_kb
    expected: La pendiente energia_media-temperatura debe ser constante_boltzmann.
  graph_implications:
    coord: A alta temperatura la curva energia_media frente a temperatura se aproxima a una recta de pendiente constante_boltzmann.
  pedagogical_triggers:
  - id: usar_con_T_celsius
    message:
      es: 'No se usa temperatura Celsius: la temperatura debe ser absoluta.'
      en: 'Celsius temperature is not used: temperature must be absolute.'
  - id: aplicar_fuera_de_regimen
    message:
      es: Si la frecuencia angular es grande, el límite clásico puede fallar.
      en: If angular frequency is large, the classical limit can fail.
- id: beta_inversa_termica
  title:
    es: Beta termodinámica
    en: Thermodynamic beta
  equation: beta = 1/(constante_boltzmann*temperatura)
  latex: \beta=\frac{1}{k_B T}
  rearrangements:
  - target: temperatura
    equation: temperatura = 1/(constante_boltzmann*beta)
    latex: T=1/(k_B\beta)
  category: termodinamica-estadistica
  relation_type: definicion
  physical_meaning:
    es: Define la escala inversa de energía térmica que pondera los niveles del oscilador.
    en: Defines the inverse thermal energy scale that weights oscillator levels.
  constraints:
    es: Temperatura absoluta positiva y constante de Boltzmann positiva.
    en: Positive absolute temperature and positive Boltzmann constant.
  validity:
    es: Válida en ensambles canónicos de equilibrio térmico.
    en: Valid in canonical ensembles at thermal equilibrium.
  dimension_check: '[M^-1 L^-2 T^2] = 1/[M L^2 T^-2]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria.md
  - modelos.md
  - ejemplos.md
  - interpretacion.yaml
  - graficos.yaml
  interpretation_tags:
  - beta
  - temperatura
  - boltzmann
  result_semantics:
    target: beta
    kind: scalar_positive
    sign_meaning:
      es: Beta positiva corresponde a temperaturas absolutas positivas.
      en: Positive beta corresponds to positive absolute temperatures.
    absolute_value_meaning:
      es: Cuanto mayor es beta, más fuerte se penalizan los niveles excitados.
      en: Larger beta more strongly suppresses excited levels.
  domain_checks:
  - id: temperatura_positiva
    condition: temperatura > 0
    severity: error
  coherence_checks:
  - id: beta_decrece_con_T
    expected: beta debe disminuir cuando aumenta temperatura.
  graph_implications:
    coord: Beta no es el eje dominante, pero explica por qué la energía media crece al aumentar temperatura.
  pedagogical_triggers:
  - id: confundir_beta_T
    message:
      es: 'Beta no es temperatura: es su escala inversa energética.'
      en: 'Beta is not temperature: it is its inverse energy scale.'
- id: funcion_particion_cuantica
  title:
    es: Función de partición cuántica
    en: Quantum partition function
  equation: funcion_particion = exp(-0.5*hbar*frecuencia_angular/(constante_boltzmann*temperatura))/(1 - exp(-hbar*frecuencia_angular/(constante_boltzmann*temperatura)))
  latex: Z=\frac{e^{-\hbar\omega/(2k_B T)}}{1-e^{-\hbar\omega/(k_B T)}}
  rearrangements:
  - target: energia_cuantica
    equation: energia_cuantica = hbar*frecuencia_angular
    latex: \epsilon=\hbar\omega
  category: termodinamica-estadistica
  relation_type: funcion_particion
  physical_meaning:
    es: Resume la contribución estadística de todos los niveles energéticos del oscilador.
    en: Summarizes the statistical contribution of all oscillator energy levels.
  constraints:
    es: Temperatura y frecuencia angular positivas; niveles armónicos igualmente espaciados.
    en: Positive temperature and angular frequency; equally spaced harmonic levels.
  validity:
    es: Ensambles canónicos sin interacción entre osciladores.
    en: Canonical ensembles without interaction between oscillators.
  dimension_check: '[1] = [1]/[1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria.md
  - modelos.md
  - ejemplos.md
  - interpretacion.yaml
  - graficos.yaml
  interpretation_tags:
  - funcion_particion
  - niveles
  - boltzmann
  result_semantics:
    target: funcion_particion
    kind: dimensionless_positive
    sign_meaning:
      es: La función de partición es positiva y adimensional.
      en: The partition function is positive and dimensionless.
    absolute_value_meaning:
      es: Su valor mide el peso estadístico total disponible al equilibrio.
      en: Its value measures the total statistical weight available at equilibrium.
  domain_checks:
  - id: denominador_no_nulo
    condition: 1 - exp(-hbar*frecuencia_angular/(constante_boltzmann*temperatura)) > 0
    severity: error
  coherence_checks:
  - id: Z_crece_con_T
    expected: funcion_particion debe aumentar al aumentar temperatura.
  graph_implications:
    coord: Aunque no sea el eje principal, la función de partición gobierna la forma de energia_media frente a temperatura.
  pedagogical_triggers:
  - id: interpretar_Z_como_energia
    message:
      es: Z no es una energía; es una suma estadística adimensional.
      en: Z is not an energy; it is a dimensionless statistical sum.
- id: probabilidad_ocupacion_n
  title:
    es: Probabilidad de ocupación del nivel n
    en: Occupation probability of level n
  equation: probabilidad_ocupacion = (1 - exp(-hbar*frecuencia_angular/(constante_boltzmann*temperatura)))*exp(-numero_cuantico*hbar*frecuencia_angular/(constante_boltzmann*temperatura))
  latex: P_n=\left(1-e^{-\hbar\omega/(k_B T)}\right)e^{-n\hbar\omega/(k_B T)}
  rearrangements:
  - target: numero_cuantico
    equation: numero_cuantico = -ln(probabilidad_ocupacion/(1 - exp(-hbar*frecuencia_angular/(constante_boltzmann*temperatura))))*(constante_boltzmann*temperatura)/(hbar*frecuencia_angular)
    latex: n=-\ln\left(P_n/(1-e^{-\hbar\omega/(k_BT)})\right)k_BT/(\hbar\omega)
  category: termodinamica-estadistica
  relation_type: distribucion_boltzmann
  physical_meaning:
    es: Expresa cómo se reparte la población térmica entre niveles separados por hbar por frecuencia angular.
    en: Expresses how thermal population is distributed among levels spaced by hbar times angular frequency.
  constraints:
    es: Número cuántico entero no negativo, temperatura positiva y frecuencia angular positiva.
    en: Nonnegative integer quantum number, positive temperature, and positive angular frequency.
  validity:
    es: Válida para un único oscilador armónico cuántico en equilibrio canónico.
    en: Valid for a single quantum harmonic oscillator in canonical equilibrium.
  dimension_check: '[1] = [1]*[1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria.md
  - modelos.md
  - ejemplos.md
  - interpretacion.yaml
  - graficos.yaml
  interpretation_tags:
  - ocupacion
  - probabilidad
  - numero_cuantico
  - temperatura
  result_semantics:
    target: probabilidad_ocupacion
    kind: probability
    sign_meaning:
      es: La probabilidad no tiene signo; debe estar entre 0 y 1.
      en: Probability has no sign; it must lie between 0 and 1.
    absolute_value_meaning:
      es: Su valor indica la fracción esperada de veces que aparece el nivel n.
      en: Its value indicates the expected fraction of times level n appears.
  domain_checks:
  - id: numero_cuantico_entero
    condition: numero_cuantico >= 0
    severity: error
  - id: probabilidad_rango
    condition: 0 <= probabilidad_ocupacion <= 1
    severity: error
  coherence_checks:
  - id: monotonia_n
    expected: probabilidad_ocupacion debe decrecer cuando aumenta numero_cuantico.
  graph_implications:
    coord: Ayuda a interpretar por qué la energía media aumenta con temperatura al poblar niveles más altos.
  pedagogical_triggers:
  - id: tratar_n_continuo
    message:
      es: El número cuántico n etiqueta niveles discretos, no una coordenada continua.
      en: Quantum number n labels discrete levels, not a continuous coordinate.

graficos.yaml contract:
- version must be "1.0".
- leaf must be "oscilador-armonico-estadistico".
- Include only sections declared by meta.yaml/map.
- Do not include JSX, HTML, React components, or <MathInline />.
- All bilingual fields require es and en.
- agentHints and commonMistakes require at least 3 entries in es and 3 in en.
- recommendedTab must be "graficas".
- Required sections for this leaf: ['coord', 'svg']

Coord required fields:
- id and graphId: "oscilador-armonico-estadistico-Coord"; type and graphType: "Coord".
- title, xAxis, yAxis, xMagnitude, yMagnitude.
- relation, physicalReading, slopeMeaning, interceptMeaning, curvatureMeaning, signMeaning, areaMeaning, domainMeaning, modelConnection, formulaConnection, readingFocus.
- agentHints, commonMistakes, curveProfile, dataRange, recommendedTab.
- curveProfile: type, expectedShape.es/en, keyPoints with at least 2 points. Each point has x, y, label.es/en.
- dataRange: xMin, xMax, yMin, yMax, autoScale.
- To pass graph_pfc_coherence, relation.es/en, physicalReading.es/en, and readingFocus.es/en must directly answer meta.yaml.pregunta_fisica_central.
- Reuse at least two significant terms from pregunta_fisica_central in the graph text, such as the dominant magnitude, independent variable, material/parameter, and physical dependency.
- Do not write a generic graph description disconnected from the central question.

Dcl required fields:
- id and graphId: "oscilador-armonico-estadistico-Dcl"; type and graphType: "Dcl".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, forceVectors, equilibriumState, recommendedTab.
- forceVectors: at least one vector; each has id, label.es/en, targetObject, direction, magnitudeRef, signConvention.es/en, formulaRefs.
- equilibriumState.conditionDescription.es/en is required.

Svg required fields:
- id and graphId: "oscilador-armonico-estadistico-Svg"; type and graphType: "Svg".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, animationTriggers, interactiveElements, recommendedTab.
- animationTriggers and interactiveElements are lists; they may be empty if no interaction applies.

If no graph types are declared, output only:
version: "1.0"
leaf: "oscilador-armonico-estadistico"

Physics quality:
- A Coord graph must encode a real quantitative relation from formulas.yaml.
- A Dcl graph must represent actual forces/interactions of the model, not decorative arrows.
- A Svg graph must represent an interpretable physical scene, not a generic illustration.
- formulaConnection should use text/LaTeX, never JSX.
