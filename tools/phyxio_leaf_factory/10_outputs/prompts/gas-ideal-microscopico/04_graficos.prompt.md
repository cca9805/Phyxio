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
Available magnitude ids: ['temperatura', 'energia_cinetica_media', 'constante_boltzmann', 'presion', 'volumen', 'numero_particulas', 'masa_particula', 'velocidad_rms']
Available formula ids: ['energia_cinetica_media_temperatura', 'presion_microscopica_gas_ideal', 'ecuacion_estado_gas_ideal_particulas', 'velocidad_cuadratica_media']

Current graficos.yaml:
GRAFICOS_ACTUAL_INICIO
version: '1.0'
leaf: gas-ideal-microscopico
coord:
  id: gas-ideal-microscopico-Coord
  graphId: gas-ideal-microscopico-Coord
  type: Coord
  graphType: Coord
  title:
    es: Energía cinética media frente a temperatura
    en: Mean kinetic energy versus temperature
  xAxis:
    es: Temperatura absoluta [[temperatura]] (K)
    en: Absolute temperature [[temperatura]] (K)
  yAxis:
    es: Energía cinética media [[energia_cinetica_media]] (J)
    en: Mean kinetic energy [[energia_cinetica_media]] (J)
  xMagnitude: temperatura
  yMagnitude: energia_cinetica_media
  relation:
    es: El gas ideal microscópico relaciona la [[temperatura]] con la [[energia_cinetica_media]] mediante una proporcionalidad
      directa.
    en: The microscopic ideal gas relates [[temperatura]] to [[energia_cinetica_media]] through direct proportionality.
  physicalReading:
    es: Cada aumento de [[temperatura]] aumenta en la misma proporción la [[energia_cinetica_media]] de sus partículas.
    en: Each increase in [[temperatura]] increases the particles' [[energia_cinetica_media]] in the same proportion.
  slopeMeaning:
    es: La pendiente representa (3/2) k_B, la energía añadida por kelvin a cada partícula.
    en: The slope represents (3/2) k_B, the energy added per kelvin to each particle.
  interceptMeaning:
    es: El origen indica que al extrapolar a T=0 no queda energía cinética traslacional clásica.
    en: The origin indicates that extrapolating to T=0 leaves no classical translational kinetic energy.
  curvatureMeaning:
    es: No hay curvatura en el modelo ideal monoatómico clásico; la dependencia es lineal.
    en: There is no curvature in the classical monatomic ideal model; the dependence is linear.
  signMeaning:
    es: Ambas magnitudes son no negativas; puntos negativos señalarían escala o modelo incorrectos.
    en: Both quantities are nonnegative; negative points would signal a wrong scale or model.
  areaMeaning:
    es: El área bajo esta recta no tiene una lectura física principal en este leaf.
    en: The area under this line has no primary physical reading in this leaf.
  domainMeaning:
    es: El dominio útil es T>0 y régimen clásico diluido; cerca de T=0 fallan las hipótesis clásicas.
    en: The useful domain is T>0 and dilute classical regime; near T=0 classical assumptions fail.
  modelConnection:
    es: La recta visualiza el puente entre temperatura macroscópica y agitación microscópica del gas ideal.
    en: The line visualizes the bridge between macroscopic temperature and microscopic agitation in an ideal gas.
  formulaConnection:
    es: Corresponde a {{f:energia_cinetica_media_temperatura}} y es coherente con {{f:ecuacion_estado_gas_ideal_particulas}}.
    en: It corresponds to {{f:energia_cinetica_media_temperatura}} and is consistent with {{f:ecuacion_estado_gas_ideal_particulas}}.
  readingFocus:
    es: Lee cómo la [[temperatura]] controla la [[energia_cinetica_media]] de cada partícula del gas ideal microscópico.
    en: Read how [[temperatura]] controls the [[energia_cinetica_media]] of each microscopic ideal-gas particle.
  agentHints:
    es:
    - Comprueba que la temperatura esté en kelvin.
    - Recuerda que la pendiente contiene k_B, no R.
    - 'La recta responde a la pregunta central: más temperatura implica más energía cinética media.'
    en:
    - Check that temperature is in kelvin.
    - Remember that the slope contains k_B, not R.
    - 'The line answers the central question: more temperature means more mean kinetic energy.'
  commonMistakes:
    es:
    - Usar grados Celsius como si fueran kelvin.
    - Confundir energía cinética media por partícula con energía total del gas.
    - Esperar una curva porque las velocidades siguen una distribución.
    en:
    - Using Celsius degrees as if they were kelvin.
    - Confusing mean kinetic energy per particle with total gas energy.
    - Expecting a curve because speeds follow a distribution.
  curveProfile:
    type: linear
    expectedShape:
      es: Recta creciente que pasa por el origen.
      en: Increasing straight line through the origin.
    keyPoints:
    - x: 0
      y: 0
      label:
        es: Límite clásico extrapolado
        en: Extrapolated classical limit
    - x: 300
      y: 6.21e-21
      label:
        es: Temperatura ambiente aproximada
        en: Approximate room temperature
    - x: 600
      y: 1.24e-20
      label:
        es: Doble temperatura, doble energía
        en: Double temperature, double energy
  dataRange:
    xMin: 0
    xMax: 1000
    yMin: 0
    yMax: 2.1e-20
    autoScale: true
  recommendedTab: graficas
GRAFICOS_ACTUAL_FIN

meta.yaml context:
id: gas-ideal-microscopico
nombre:
  es: Gas ideal microscopico
  en: Microscopic Ideal Gas
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: sistemas-modelo
parent_id: sistemas-modelo
ruta_relativa: fisica-clasica/termodinamica-estadistica/sistemas-modelo/gas-ideal-microscopico
orden: 275100
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
icon: 🧪
descripcion: Modelo microscópico que conecta partículas, temperatura, presión y energía cinética.
description_en: Microscopic model linking particles, temperature, pressure, and kinetic energy.
tags:
  es:
  - gas ideal
  - modelo microscópico
  - energía cinética
  - temperatura
  - presión
  - partículas
  en:
  - ideal gas
  - microscopic model
  - kinetic energy
  - temperature
  - pressure
  - particles
prerequisitos: []
graficos:
- Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 30
pregunta_fisica_central:
  es: ¿Cómo relaciona el gas ideal microscópico la temperatura con la energía cinética media de sus partículas?
  en: How does the microscopic ideal gas relate temperature to the mean kinetic energy of its particles?
representacion_dominante: Coord
magnitud_dominante: energia_cinetica_media
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
    es: temperatura absoluta
    en: absolute temperature
  descripcion:
    es: Parámetro macroscópico que mide la agitación térmica microscópica del gas.
    en: Macroscopic parameter measuring the gas microscopic thermal agitation.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: thermal_state
  physical_role:
    es: variable térmica de control
    en: thermal control variable
  used_in:
  - energia_cinetica_media_temperatura
  - ecuacion_estado_gas_ideal_particulas
  - velocidad_cuadratica_media
  common_mistake: Usar grados Celsius directamente en fórmulas microscópicas.
  typical_range: 1 K a 3000 K en gases clásicos habituales.
  sign_behavior:
    has_sign: false
    meaning:
      es: La temperatura absoluta no se interpreta con signo en este modelo.
      en: Absolute temperature is not interpreted with sign in this model.
  zero_behavior:
    allowed: false
    meaning:
      es: T=0 queda fuera del tratamiento clásico del gas ideal.
      en: T=0 lies outside the classical ideal-gas treatment.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: T>0
  interpretation_role:
    primary_for:
    - energia_cinetica_media_temperatura
    - ecuacion_estado_gas_ideal_particulas
    secondary_for:
    - velocidad_cuadratica_media
  graph_binding:
    channels:
    - xAxis
    - parameter
    preferred_axis: xAxis
  pedagogical_notes:
    es: Al aumentar T aumenta linealmente la energía cinética media.
    en: Increasing T linearly increases mean kinetic energy.
- id: energia_cinetica_media
  symbol: K_media
  nombre:
    es: energía cinética media
    en: mean kinetic energy
  descripcion:
    es: Energía cinética traslacional promedio por partícula en el gas ideal.
    en: Average translational kinetic energy per particle in the ideal gas.
  unidad_si: J
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: microscopic_energy
  physical_role:
    es: magnitud dominante
    en: dominant magnitude
  used_in:
  - energia_cinetica_media_temperatura
  - presion_microscopica_gas_ideal
  common_mistake: Confundirla con la energía total del conjunto del gas.
  typical_range: 10^-23 J a 10^-20 J por partícula en gases ordinarios.
  sign_behavior:
    has_sign: false
    meaning:
      es: No tiene signo direccional; representa una cantidad energética media.
      en: It has no directional sign; it represents an average energy amount.
  zero_behavior:
    allowed: true
    meaning:
      es: K_media=0 sería ausencia idealizada de agitación traslacional clásica.
      en: K_media=0 would be an idealized absence of classical translational agitation.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: K_media>=0
  interpretation_role:
    primary_for:
    - energia_cinetica_media_temperatura
    secondary_for:
    - presion_microscopica_gas_ideal
  graph_binding:
    channels:
    - yAxis
    preferred_axis: yAxis
  pedagogical_notes:
    es: Es la lectura microscópica directa de la temperatura.
    en: It is the direct microscopic reading of temperature.
- id: constante_boltzmann
  symbol: k_B
  nombre:
    es: constante de Boltzmann
    en: Boltzmann constant
  descripcion:
    es: Constante que convierte temperatura en escala energética por partícula.
    en: Constant converting temperature into energy scale per particle.
  unidad_si: J/K
  dimension: M L^2 T^-2 Θ^-1
  is_vector: false
  components: []
  category: constant
  physical_role:
    es: constante universal
    en: universal constant
  used_in:
  - energia_cinetica_media_temperatura
  - ecuacion_estado_gas_ideal_particulas
  - velocidad_cuadratica_media
  common_mistake: Sustituirla por R cuando se trabaja con número de partículas.
  typical_range: 1.380649e-23 J/K.
  sign_behavior:
    has_sign: false
    meaning:
      es: Es positiva por definición en el SI.
      en: It is positive by definition in SI.
  zero_behavior:
    allowed: false
    meaning:
      es: No puede anularse; fija la escala térmica microscópica.
      en: It cannot vanish; it sets the microscopic thermal scale.
  value_nature:
    kind: constant
    nonnegative_only: true
    expected_interval: k_B=1.380649e-23 J/K
  interpretation_role:
    primary_for:
    - energia_cinetica_media_temperatura
    secondary_for:
    - ecuacion_estado_gas_ideal_particulas
  graph_binding:
    channels:
    - constant
    preferred_axis: constant
  pedagogical_notes:
    es: Usa k_B cuando N cuenta partículas, no moles.
    en: Use k_B when N counts particles, not moles.
- id: presion
  symbol: p
  nombre:
    es: presión
    en: pressure
  descripcion:
    es: Fuerza normal media por unidad de área debida a choques de partículas.
    en: Mean normal force per unit area due to particle collisions.
  unidad_si: Pa
  dimension: M L^-1 T^-2
  is_vector: false
  components: []
  category: macroscopic_state
  physical_role:
    es: resultado macroscópico
    en: macroscopic result
  used_in:
  - presion_microscopica_gas_ideal
  - ecuacion_estado_gas_ideal_particulas
  common_mistake: Interpretarla como peso del gas en lugar de transferencia de momento.
  typical_range: 10^3 Pa a 10^7 Pa en gases clásicos comunes.
  sign_behavior:
    has_sign: false
    meaning:
      es: La presión absoluta no tiene signo en este modelo simple.
      en: Absolute pressure has no sign in this simple model.
  zero_behavior:
    allowed: false
    meaning:
      es: p=0 implicaría ausencia de choques o límite de vacío ideal.
      en: p=0 would imply no collisions or an ideal vacuum limit.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: p>0
  interpretation_role:
    primary_for:
    - presion_microscopica_gas_ideal
    secondary_for:
    - ecuacion_estado_gas_ideal_particulas
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: La presión traduce choques microscópicos en una magnitud macroscópica.
    en: Pressure translates microscopic collisions into a macroscopic quantity.
- id: volumen
  symbol: V
  nombre:
    es: volumen
    en: volume
  descripcion:
    es: Espacio disponible para el movimiento de las partículas del gas.
    en: Space available for gas particle motion.
  unidad_si: m^3
  dimension: L^3
  is_vector: false
  components: []
  category: macroscopic_state
  physical_role:
    es: variable geométrica
    en: geometric variable
  used_in:
  - presion_microscopica_gas_ideal
  - ecuacion_estado_gas_ideal_particulas
  common_mistake: Olvidar que reducir V aumenta la frecuencia de choques.
  typical_range: 10^-6 m^3 a 10^2 m^3 según el sistema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El volumen del recipiente no tiene signo.
      en: Container volume has no sign.
  zero_behavior:
    allowed: false
    meaning:
      es: V=0 no es un estado físico admisible para un gas.
      en: V=0 is not an admissible physical state for a gas.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: V>0
  interpretation_role:
    primary_for:
    - ecuacion_estado_gas_ideal_particulas
    secondary_for:
    - presion_microscopica_gas_ideal
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: A N y T fijos, mayor V reduce la presión.
    en: At fixed N and T, larger V lowers pressure.
- id: numero_particulas
  symbol: N
  nombre:
    es: número de partículas
    en: number of particles
  descripcion:
    es: Cantidad de partículas microscópicas representadas por el gas ideal.
    en: Number of microscopic particles represented by the ideal gas.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: amount
  physical_role:
    es: conteo microscópico
    en: microscopic count
  used_in:
  - presion_microscopica_gas_ideal
  - ecuacion_estado_gas_ideal_particulas
  common_mistake: Confundir número de partículas con número de moles.
  typical_range: 10^10 a 10^25 partículas según escala.
  sign_behavior:
    has_sign: false
    meaning:
      es: Es un conteo, no una magnitud con dirección.
      en: It is a count, not a directional quantity.
  zero_behavior:
    allowed: true
    meaning:
      es: N=0 describe vacío, no un gas con propiedades termodinámicas.
      en: N=0 describes vacuum, not a gas with thermodynamic properties.
  value_nature:
    kind: count
    nonnegative_only: true
    expected_interval: N>=0
  interpretation_role:
    primary_for:
    - ecuacion_estado_gas_ideal_particulas
    secondary_for:
    - presion_microscopica_gas_ideal
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: Al duplicar N a V y T fijos, se duplica la presión.
    en: Doubling N at fixed V and T doubles pressure.
- id: masa_particula
  symbol: m
  nombre:
    es: masa de partícula
    en: particle mass
  descripcion:
    es: Masa de una partícula individual del gas.
    en: Mass of an individual gas particle.
  unidad_si: kg
  dimension: M
  is_vector: false
  components: []
  category: particle_property
  physical_role:
    es: parámetro microscópico
    en: microscopic parameter
  used_in:
  - velocidad_cuadratica_media
  common_mistake: Usar masa total del gas en lugar de masa de una partícula.
  typical_range: 10^-27 kg a 10^-25 kg para gases atómicos y moleculares ligeros.
  sign_behavior:
    has_sign: false
    meaning:
      es: La masa de partícula es positiva.
      en: Particle mass is positive.
  zero_behavior:
    allowed: false
    meaning:
      es: m=0 no corresponde a un gas clásico material.
      en: m=0 does not correspond to a classical material gas.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: m>0
  interpretation_role:
    primary_for:
    - velocidad_cuadratica_media
    secondary_for: []
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: Partículas más ligeras se mueven más rápido a igual temperatura.
    en: Lighter particles move faster at the same temperature.
- id: velocidad_rms
  symbol: v_rms
  nombre:
    es: velocidad cuadrática media
    en: root-mean-square speed
  descripcion:
    es: Rapidez típica asociada a la energía cinética media de las partículas.
    en: Typical speed associated with the mean kinetic energy of particles.
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: []
  category: microscopic_motion
  physical_role:
    es: escala de rapidez
    en: speed scale
  used_in:
  - velocidad_cuadratica_media
  common_mistake: Tratarla como velocidad vectorial neta del gas.
  typical_range: 10^2 m/s a 10^4 m/s en gases térmicos no relativistas.
  sign_behavior:
    has_sign: false
    meaning:
      es: Es rapidez media cuadrática, no componente con signo.
      en: It is rms speed, not a signed component.
  zero_behavior:
    allowed: true
    meaning:
      es: v_rms=0 sería ausencia de movimiento térmico clásico.
      en: v_rms=0 would be absence of classical thermal motion.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: v_rms>=0
  interpretation_role:
    primary_for:
    - velocidad_cuadratica_media
    secondary_for:
    - energia_cinetica_media_temperatura
  graph_binding:
    channels:
    - none
    preferred_axis: none
  pedagogical_notes:
    es: Crece como raíz cuadrada de T, no linealmente.
    en: It grows as the square root of T, not linearly.

formulas.yaml context:
version: 5.0.0
ui:
  default_formula: energia_cinetica_media_temperatura
formulas:
- id: energia_cinetica_media_temperatura
  title:
    es: Energía cinética media traslacional
    en: Mean translational kinetic energy
  equation: K_media=(3/2)*k_B*T
  latex: \overline{K}=\frac{3}{2}k_B T
  rearrangements:
  - id: temperatura_desde_energia_cinetica_media
    target: temperatura
    equation: T=(2*K_media)/(3*k_B)
    latex: T=\frac{2\overline{K}}{3k_B}
  - id: constante_boltzmann_desde_energia_temperatura
    target: constante_boltzmann
    equation: k_B=(2*K_media)/(3*T)
    latex: k_B=\frac{2\overline{K}}{3T}
  category: termodinamica_estadistica
  relation_type: proportionality
  physical_meaning:
    es: La temperatura absoluta mide la energía cinética media traslacional por partícula en un gas ideal monoatómico.
    en: Absolute temperature measures the mean translational kinetic energy per particle in a monatomic ideal gas.
  constraints:
    es: Requiere gas ideal diluido, partículas puntuales, equilibrio térmico y grados traslacionales clásicos.
    en: Requires a dilute ideal gas, pointlike particles, thermal equilibrium, and classical translational degrees of freedom.
  validity:
    es: Válida para gases clásicos monoatómicos cuando las interacciones y efectos cuánticos son despreciables.
    en: Valid for classical monatomic gases when interactions and quantum effects are negligible.
  dimension_check: J = J/K*K
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria
  - modelos
  - ejemplos
  - graficos
  - interpretacion
  interpretation_tags:
  - temperatura
  - energia_cinetica
  - modelo_microscopico
  result_semantics:
    target: energia_cinetica_media
    kind: scalar_nonnegative
    sign_meaning:
      es: No puede ser negativa; una energía negativa indicaría unidades o modelo mal aplicados.
      en: It cannot be negative; a negative value would indicate wrong units or a misapplied model.
    absolute_value_meaning:
      es: Su valor cuantifica la agitación microscópica media de las partículas.
      en: Its value quantifies the average microscopic agitation of the particles.
  domain_checks:
  - id: temperatura_positiva
    condition: T>0
    message:
      es: La temperatura absoluta debe ser positiva.
      en: Absolute temperature must be positive.
  - id: gas_monoatomico_clasico
    condition: modelo=='monoatomico_clasico'
    message:
      es: El factor 3/2 corresponde a tres grados traslacionales.
      en: The factor 3/2 corresponds to three translational degrees of freedom.
  coherence_checks:
  - id: energia_aumenta_con_temperatura
    condition: K_media aumenta si T aumenta
    message:
      es: Duplicar T duplica la energía cinética media.
      en: Doubling T doubles the mean kinetic energy.
  graph_implications:
    es: La gráfica de energía cinética media frente a temperatura es una recta creciente que pasa por el origen.
    en: The graph of mean kinetic energy versus temperature is an increasing straight line through the origin.
  pedagogical_triggers:
  - id: confundir_temperatura_con_calor
    text:
      es: La temperatura no es calor almacenado.
      en: Temperature is not stored heat.
  - id: olvidar_kelvin
    text:
      es: Debe usarse temperatura absoluta en kelvin.
      en: Absolute temperature in kelvin must be used.
- id: presion_microscopica_gas_ideal
  title:
    es: Presión microscópica del gas ideal
    en: Microscopic pressure of an ideal gas
  equation: p*V=(2/3)*N*K_media
  latex: pV=\frac{2}{3}N\overline{K}
  rearrangements:
  - id: presion_desde_energia
    target: presion
    equation: p=(2*N*K_media)/(3*V)
    latex: p=\frac{2N\overline{K}}{3V}
  - id: energia_desde_presion
    target: energia_cinetica_media
    equation: K_media=(3*p*V)/(2*N)
    latex: \overline{K}=\frac{3pV}{2N}
  category: teoria_cinetica
  relation_type: microscopic_macro_link
  physical_meaning:
    es: La presión macroscópica surge del impulso transferido por muchas partículas al chocar con las paredes.
    en: Macroscopic pressure arises from momentum transfer by many particles colliding with the walls.
  constraints:
    es: Supone choques elásticos, distribución isotrópica de velocidades y volumen mucho mayor que el tamaño molecular.
    en: Assumes elastic collisions, isotropic velocity distribution, and volume much larger than molecular size.
  validity:
    es: Adecuada para gases diluidos lejos de condensación y sin interacciones intermoleculares relevantes.
    en: Suitable for dilute gases far from condensation and without relevant intermolecular interactions.
  dimension_check: Pa*m^3 = J
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria
  - modelos
  - ejemplos
  - interpretacion
  interpretation_tags:
  - presion
  - choques
  - energia_cinetica
  result_semantics:
    target: presion
    kind: scalar_nonnegative
    sign_meaning:
      es: La presión absoluta es no negativa; presión negativa no describe este gas ideal simple.
      en: Absolute pressure is nonnegative; negative pressure does not describe this simple ideal gas.
    absolute_value_meaning:
      es: Mide la fuerza normal media por unidad de área causada por choques microscópicos.
      en: It measures the mean normal force per unit area caused by microscopic collisions.
  domain_checks:
  - id: volumen_positivo
    condition: V>0
    message:
      es: El volumen debe ser positivo.
      en: Volume must be positive.
  - id: numero_particulas_positivo
    condition: N>0
    message:
      es: El número de partículas debe ser positivo.
      en: The particle number must be positive.
  coherence_checks:
  - id: presion_crece_con_energia
    condition: p aumenta si K_media aumenta a N y V constantes
    message:
      es: Más agitación microscópica produce más presión.
      en: More microscopic agitation produces higher pressure.
  graph_implications:
    es: A volumen y número de partículas constantes, la presión crece linealmente con la energía cinética media.
    en: At constant volume and particle number, pressure grows linearly with mean kinetic energy.
  pedagogical_triggers:
  - id: presion_como_peso
    text:
      es: La presión no es el peso del gas, sino choques microscópicos.
      en: Pressure is not the gas weight, but microscopic collisions.
  - id: ignorar_volumen
    text:
      es: El mismo gas tiene mayor presión si se reduce el volumen.
      en: The same gas has higher pressure if volume is reduced.
- id: ecuacion_estado_gas_ideal_particulas
  title:
    es: Ecuación de estado microscópica
    en: Microscopic ideal-gas equation of state
  equation: p*V=N*k_B*T
  latex: pV=Nk_B T
  rearrangements:
  - id: presion_desde_temperatura
    target: presion
    equation: p=(N*k_B*T)/V
    latex: p=\frac{Nk_B T}{V}
  - id: temperatura_desde_estado
    target: temperatura
    equation: T=(p*V)/(N*k_B)
    latex: T=\frac{pV}{Nk_B}
  - id: numero_particulas_desde_estado
    target: numero_particulas
    equation: N=(p*V)/(k_B*T)
    latex: N=\frac{pV}{k_B T}
  category: ecuacion_estado
  relation_type: state_equation
  physical_meaning:
    es: Conecta presión, volumen, número de partículas y temperatura desde la interpretación microscópica del gas ideal.
    en: Connects pressure, volume, particle number, and temperature from the microscopic interpretation of an ideal gas.
  constraints:
    es: Usa temperatura absoluta, presión absoluta y partículas suficientemente separadas.
    en: Uses absolute temperature, absolute pressure, and sufficiently separated particles.
  validity:
    es: Funciona cuando el gas es diluido y no hay fuerzas intermoleculares apreciables salvo choques.
    en: Works when the gas is dilute and there are no appreciable intermolecular forces except collisions.
  dimension_check: Pa*m^3 = 1*J/K*K
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria
  - modelos
  - ejemplos
  - interpretacion
  interpretation_tags:
  - estado
  - presion
  - temperatura
  - particulas
  result_semantics:
    target: presion
    kind: scalar_nonnegative
    sign_meaning:
      es: La presión absoluta del modelo es positiva para N, T y V positivos.
      en: The model's absolute pressure is positive for positive N, T, and V.
    absolute_value_meaning:
      es: Indica la intensidad macroscópica de los choques por unidad de área.
      en: It indicates the macroscopic intensity of collisions per unit area.
  domain_checks:
  - id: estado_fisico_valido
    condition: p>0 and V>0 and T>0 and N>0
    message:
      es: Todas las magnitudes de estado absolutas deben ser positivas.
      en: All absolute state quantities must be positive.
  coherence_checks:
  - id: linealidad_temperatura_presion
    condition: p proporcional a T si N y V son constantes
    message:
      es: A N y V constantes, presión y temperatura absoluta son proporcionales.
      en: At constant N and V, pressure and absolute temperature are proportional.
  graph_implications:
    es: La representación dominante puede leer cómo la temperatura controla la energía y la presión microscópica.
    en: The dominant representation can read how temperature controls microscopic energy and pressure.
  pedagogical_triggers:
  - id: usar_celsius
    text:
      es: No sustituyas grados Celsius directamente.
      en: Do not substitute Celsius degrees directly.
  - id: mezclar_moles_y_particulas
    text:
      es: Si usas partículas, la constante correcta es k_B, no R.
      en: If using particles, the correct constant is k_B, not R.
- id: velocidad_cuadratica_media
  title:
    es: Velocidad cuadrática media
    en: Root-mean-square speed
  equation: v_rms=sqrt((3*k_B*T)/m)
  latex: v_{\mathrm{rms}}=\sqrt{\frac{3k_B T}{m}}
  rearrangements:
  - id: temperatura_desde_velocidad_rms
    target: temperatura
    equation: T=(m*v_rms^2)/(3*k_B)
    latex: T=\frac{m v_{\mathrm{rms}}^2}{3k_B}
  - id: masa_desde_velocidad_temperatura
    target: masa_particula
    equation: m=(3*k_B*T)/(v_rms^2)
    latex: m=\frac{3k_B T}{v_{\mathrm{rms}}^2}
  category: teoria_cinetica
  relation_type: square_root_dependence
  physical_meaning:
    es: La rapidez microscópica típica aumenta con la temperatura y disminuye con la masa de la partícula.
    en: Typical microscopic speed increases with temperature and decreases with particle mass.
  constraints:
    es: Supone partículas no relativistas con distribución térmica clásica.
    en: Assumes nonrelativistic particles with a classical thermal distribution.
  validity:
    es: No debe usarse cuando las velocidades se acercan a la velocidad de la luz o aparecen efectos cuánticos fuertes.
    en: It should not be used when speeds approach the speed of light or strong quantum effects appear.
  dimension_check: m/s = sqrt((kg*m^2*s^-2)/kg)
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - teoria
  - modelos
  - ejemplos
  - interpretacion
  interpretation_tags:
  - velocidad
  - temperatura
  - masa
  result_semantics:
    target: velocidad_rms
    kind: scalar_nonnegative
    sign_meaning:
      es: Es una rapidez típica, por tanto no tiene signo direccional.
      en: It is a typical speed, so it has no directional sign.
    absolute_value_meaning:
      es: Da la escala de movimiento microscópico medio de las partículas.
      en: It gives the scale of average microscopic particle motion.
  domain_checks:
  - id: masa_positiva
    condition: m>0
    message:
      es: La masa de una partícula debe ser positiva.
      en: A particle mass must be positive.
  - id: regimen_no_relativista
    condition: v_rms << c
    message:
      es: La fórmula es clásica y no relativista.
      en: The formula is classical and nonrelativistic.
  coherence_checks:
  - id: raiz_temperatura
    condition: v_rms crece como sqrt(T)
    message:
      es: Cuadruplicar T duplica la rapidez rms.
      en: Quadrupling T doubles the rms speed.
  graph_implications:
    es: 'La rapidez rms frente a temperatura no es recta: crece con raíz cuadrada.'
    en: 'Rms speed versus temperature is not a straight line: it grows as a square root.'
  pedagogical_triggers:
  - id: confundir_rapidez_velocidad
    text:
      es: v_rms es rapidez típica, no velocidad vectorial neta.
      en: v_rms is a typical speed, not a net vector velocity.
  - id: linealidad_falsa
    text:
      es: La rapidez no se duplica al duplicar la temperatura.
      en: Speed does not double when temperature doubles.

graficos.yaml contract:
- version must be "1.0".
- leaf must be "gas-ideal-microscopico".
- Include only sections declared by meta.yaml/map.
- Do not include JSX, HTML, React components, or <MathInline />.
- All bilingual fields require es and en.
- agentHints and commonMistakes require at least 3 entries in es and 3 in en.
- recommendedTab must be "graficas".
- Required sections for this leaf: ['coord']

Coord required fields:
- id and graphId: "gas-ideal-microscopico-Coord"; type and graphType: "Coord".
- title, xAxis, yAxis, xMagnitude, yMagnitude.
- relation, physicalReading, slopeMeaning, interceptMeaning, curvatureMeaning, signMeaning, areaMeaning, domainMeaning, modelConnection, formulaConnection, readingFocus.
- agentHints, commonMistakes, curveProfile, dataRange, recommendedTab.
- curveProfile: type, expectedShape.es/en, keyPoints with at least 2 points. Each point has x, y, label.es/en.
- dataRange: xMin, xMax, yMin, yMax, autoScale.
- To pass graph_pfc_coherence, relation.es/en, physicalReading.es/en, and readingFocus.es/en must directly answer meta.yaml.pregunta_fisica_central.
- Reuse at least two significant terms from pregunta_fisica_central in the graph text, such as the dominant magnitude, independent variable, material/parameter, and physical dependency.
- Do not write a generic graph description disconnected from the central question.

Dcl required fields:
- id and graphId: "gas-ideal-microscopico-Dcl"; type and graphType: "Dcl".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, forceVectors, equilibriumState, recommendedTab.
- forceVectors: at least one vector; each has id, label.es/en, targetObject, direction, magnitudeRef, signConvention.es/en, formulaRefs.
- equilibriumState.conditionDescription.es/en is required.

Svg required fields:
- id and graphId: "gas-ideal-microscopico-Svg"; type and graphType: "Svg".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, animationTriggers, interactiveElements, recommendedTab.
- animationTriggers and interactiveElements are lists; they may be empty if no interaction applies.

If no graph types are declared, output only:
version: "1.0"
leaf: "gas-ideal-microscopico"

Physics quality:
- A Coord graph must encode a real quantitative relation from formulas.yaml.
- A Dcl graph must represent actual forces/interactions of the model, not decorative arrows.
- A Svg graph must represent an interpretable physical scene, not a generic illustration.
- formulaConnection should use text/LaTeX, never JSX.
