const e=`version: 5
topic:
  id: resonancia-electrica
  title:
    es: Resonancia electrica
    en: Electrical Resonance
variables:
- id: omega0
  symbol: \\omega_0
  name:
    es: frecuencia angular resonante
    en: Resonant Angular Frequency
  si_unit: rad/s
- id: f0
  symbol: f_0
  name:
    es: frecuencia resonante
    en: Resonant Frequency
  si_unit: Hz
- id: L
  symbol: L
  name:
    es: inductancia
    en: Inductance
  si_unit: H
- id: C
  symbol: C
  name:
    es: capacitancia
    en: Capacitance
  si_unit: F
- id: R
  symbol: R
  name:
    es: resistencia total serie
    en: Total Series Resistance
  si_unit: ohm
- id: Q
  symbol: Q
  name:
    es: factor de calidad
    en: Quality Factor
  si_unit: '-'
- id: BW
  symbol: BW
  name:
    es: ancho de banda
    en: Bandwidth
  si_unit: Hz
- id: V
  symbol: V
  name:
    es: tension eficaz
    en: RMS Voltage
  si_unit: V
- id: Ires
  symbol: I_res
  name:
    es: corriente resonante
    en: Resonant Current
  si_unit: A
formulas:
- id: omega_resonancia
  title:
    es: Frecuencia angular resonante
    en: Resonant angular frequency
  equation: omega0 = 1/sqrt(L*C)
  latex: \\omega_0=\\frac{1}{\\sqrt{L\\,C}}
  rearrangements:
  - target: L
    equation: L = 1/(omega0^2*C)
    latex: L=\\frac{1}{\\omega_0^2C}
  - target: C
    equation: C = 1/(omega0^2*L)
    latex: C=\\frac{1}{\\omega_0^2L}
  constraints:
  - expr: L > 0 and C > 0
    message:
      es: L y C deben ser positivas para resonancia fisica.
      en: Inductance and capacitance must be positive for physical resonance.
  category: structural
  relation_type: balance_condition
  physical_meaning:
    es: Define la frecuencia angular donde reactancias inductiva y capacitiva se equilibran.
    en: Defines angular frequency where inductive and capacitive reactances balance.
  validity:
    es: Válida para modelo RLC lineal en régimen sinusoidal estable.
    en: Valid for linear RLC model in stable sinusoidal regime.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - sintonia de filtros
  - diseño de resonadores
  interpretation_tags: [ resonancia, sintonia, balance-reactivo ]
  result_semantics:
    target: omega0
    meaning: El resultado fija la escala angular del fenómeno resonante.
  domain_checks:
  - expr: "true"
    message:
      es: Si L o C aumentan, omega0 debe disminuir.
      en: If inductance or capacitance rise, resonant angular frequency must decrease.
  coherence_checks:
  - expr: "true"
    message:
      es: El producto L*C gobierna la posición de resonancia.
      en: Product L*C governs resonance position.
  graph_implications:
  - Ubica el pico principal de respuesta en frecuencia.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No confundas frecuencia angular con frecuencia en Hz.
      en: Do not confuse angular frequency with frequency in Hz.
- id: frecuencia_resonancia
  title:
    es: Frecuencia de resonancia
    en: Resonant frequency
  equation: f0 = omega0/(2*pi)
  latex: f_0=\\frac{\\omega_0}{2\\pi}
  rearrangements:
  - target: omega0
    equation: omega0 = 2*pi*f0
    latex: \\omega_0=2\\pi f_0
  constraints:
  - expr: omega0 > 0
    message:
      es: La frecuencia angular debe ser positiva.
      en: Angular frequency must be positive.
  category: operative
  relation_type: conversion
  physical_meaning:
    es: Convierte la escala angular resonante a frecuencia en hertz.
    en: Converts resonant angular scale into hertz frequency.
  validity:
    es: Válida en régimen periódico con frecuencia definida.
    en: Valid in periodic regime with defined frequency.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - especificación de filtros pasabanda
  interpretation_tags: [ conversion, frecuencia ]
  result_semantics:
    target: f0
    meaning: El resultado ubica el centro de sintonía en Hz.
  domain_checks:
  - expr: "true"
    message:
      es: Al crecer omega0 también debe crecer f0.
      en: As angular frequency rises, resonant frequency must rise.
  coherence_checks:
  - expr: "true"
    message:
      es: La conversión debe respetar el factor 2pi.
      en: Conversion must preserve the 2pi factor.
  graph_implications:
  - Determina frecuencia central de curva de amplitud.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Verifica unidades para evitar error de escala.
      en: Verify units to avoid scale errors.
- id: factor_calidad
  title:
    es: Factor de calidad serie
    en: Series quality factor
  equation: Q = omega0*L/R
  latex: Q=\\frac{\\omega_0L}{R}
  rearrangements:
  - target: R
    equation: R = omega0*L/Q
    latex: R=\\frac{\\omega_0L}{Q}
  constraints:
  - expr: omega0 > 0 and L > 0 and R > 0
    message:
      es: omega0, L y R deben ser positivas.
      en: Resonant angular frequency, inductance, and resistance must be positive.
  category: energetic
  relation_type: selectivity_measure
  physical_meaning:
    es: Cuantifica selectividad y amortiguamiento de la resonancia.
    en: Quantifies resonance selectivity and damping.
  validity:
    es: Válida para circuito serie con modelo lineal equivalente.
    en: Valid for series circuit with equivalent linear model.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - estimación de selectividad
  interpretation_tags: [ selectividad, amortiguamiento ]
  result_semantics:
    target: Q
    meaning: El resultado refleja cuán estrecha es la respuesta resonante.
  domain_checks:
  - expr: "true"
    message:
      es: Si R disminuye, Q tiende a aumentar.
      en: If resistance decreases, quality factor tends to increase.
  coherence_checks:
  - expr: "true"
    message:
      es: Q alta implica respuesta más selectiva.
      en: High quality factor implies more selective response.
  graph_implications:
  - Controla agudeza del pico resonante.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No interpretes Q como eficiencia energética directa.
      en: Do not interpret quality factor as direct energy efficiency.
- id: ancho_banda
  title:
    es: Ancho de banda aproximado
    en: Approximate bandwidth
  equation: BW = f0/Q
  latex: BW=\\frac{f_0}{Q}
  rearrangements:
  - target: Q
    equation: Q = f0/BW
    latex: Q=\\frac{f_0}{BW}
  constraints:
  - expr: f0 > 0 and Q > 0
    message:
      es: Frecuencia resonante y factor de calidad deben ser positivos.
      en: Resonant frequency and quality factor must be positive.
  category: operative
  relation_type: bandwidth_estimate
  physical_meaning:
    es: Estima anchura espectral alrededor del pico resonante.
    en: Estimates spectral width around resonant peak.
  validity:
    es: Aproximación clásica útil en resonadores de banda relativamente estrecha.
    en: Classical approximation useful for relatively narrowband resonators.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - especificación de filtros
  interpretation_tags: [ ancho-de-banda, selectividad ]
  result_semantics:
    target: BW
    meaning: El resultado resume rango de frecuencias con respuesta significativa.
  domain_checks:
  - expr: "true"
    message:
      es: Al aumentar Q, el ancho de banda debe reducirse.
      en: As quality factor increases, bandwidth must shrink.
  coherence_checks:
  - expr: "true"
    message:
      es: Debe mantener coherencia con f0 y selectividad objetivo.
      en: Must remain coherent with resonant frequency and target selectivity.
  graph_implications:
  - Define separación entre frecuencias de semipotencia.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Recuerda que BW = f0/Q es una aproximación de ingeniería.
      en: Remember bandwidth relation is an engineering approximation.
- id: corriente_resonancia
  title:
    es: Corriente en resonancia serie
    en: Current at series resonance
  equation: Ires = V/R
  latex: I_{res}=\\frac{V}{R}
  rearrangements:
  - target: V
    equation: V = Ires*R
    latex: V=I_{res}R
  constraints:
  - expr: V >= 0 and R > 0
    message:
      es: Tensión eficaz no negativa y resistencia positiva.
      en: Non-negative RMS voltage and positive resistance.
  category: operative
  relation_type: resonant_response
  physical_meaning:
    es: Estima corriente eficaz máxima aproximada en condición resonante serie.
    en: Estimates approximate maximum RMS current at series resonant condition.
  validity:
    es: Válida cuando la rama serie domina y la excitación es sinusoidal estable.
    en: Valid when series branch dominates and excitation is sinusoidally stable.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - verificación de límite térmico
  interpretation_tags: [ corriente, seguridad, resonancia ]
  result_semantics:
    target: Ires
    meaning: El resultado cuantifica exigencia de corriente en el punto resonante.
  domain_checks:
  - expr: "true"
    message:
      es: Si R baja, la corriente resonante estimada debe subir.
      en: If resistance drops, estimated resonant current must rise.
  coherence_checks:
  - expr: "true"
    message:
      es: Debe revisarse contra límites de diseño y protección.
      en: Must be checked against design and protection limits.
  graph_implications:
  - Marca altura aproximada del pico de corriente en respuesta frecuencial.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No uses esta relación fuera de condición resonante de serie.
      en: Do not use this relation outside series resonant condition.
ui:
  default_formula: omega_resonancia
  groups:
  - title:
      es: Basicas
      en: Basics
    items:
    - omega_resonancia
    - frecuencia_resonancia
    - factor_calidad
    - ancho_banda
    - corriente_resonancia
`;export{e as default};
