const e=`version: 5
topic:
  id: capacitiva
  title:
    es: Reactancia capacitiva
    en: Capacitive Reactance
variables:
- id: Xc
  symbol: X_C
  name:
    es: reactancia capacitiva
    en: Capacitive Reactance
  si_unit: ohm
- id: omega
  symbol: \\omega
  name:
    es: frecuencia angular
    en: Angular Frequency
  si_unit: rad/s
- id: C
  symbol: C
  name:
    es: capacitancia
    en: Capacitance
  si_unit: F
- id: f
  symbol: f
  name:
    es: frecuencia
    en: Frequency
  si_unit: Hz
- id: V
  symbol: V
  name:
    es: tension eficaz
    en: RMS Voltage
  si_unit: V
- id: Ic
  symbol: I_C
  name:
    es: corriente capacitiva eficaz
    en: RMS Capacitive Current
  si_unit: A
- id: Qc
  symbol: Q_C
  name:
    es: potencia reactiva capacitiva
    en: Capacitive Reactive Power
  si_unit: var
formulas:
- id: reactancia_capacitiva
  title:
    es: Reactancia capacitiva ideal
    en: Ideal capacitive reactance
  equation: Xc = 1/(omega*C)
  latex: X_C=\\frac{1}{\\omega C}
  rearrangements:
  - target: C
    equation: C = 1/(omega*Xc)
    latex: C=\\frac{1}{\\omega X_C}
  - target: omega
    equation: omega = 1/(Xc*C)
    latex: \\omega=\\frac{1}{X_C C}
  constraints:
  - expr: omega > 0 and C > 0
    message:
      es: Frecuencia angular y capacitancia deben ser positivas.
      en: Angular frequency and capacitance must be positive.
  category: structural
  relation_type: inverse_dependence
  physical_meaning:
    es: Expresa que la oposición capacitiva disminuye al aumentar frecuencia o capacitancia.
    en: States that capacitive opposition decreases as frequency or capacitance increases.
  validity:
    es: Válida para capacitor ideal en régimen sinusoidal estacionario.
    en: Valid for ideal capacitor in sinusoidal steady regime.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - análisis de reactancia
  - dimensionamiento de ramas capacitivas
  interpretation_tags: [ reactancia, frecuencia, capacitancia ]
  result_semantics:
    target: Xc
    meaning: El resultado cuantifica oposición capacitiva no disipativa en AC.
  domain_checks:
  - expr: "true"
    message:
      es: Si la frecuencia se aproxima a cero, la reactancia crece fuertemente.
      en: If frequency approaches zero, reactance grows strongly.
  coherence_checks:
  - expr: "true"
    message:
      es: A mayor omega o C, Xc debe disminuir.
      en: Larger angular frequency or capacitance must reduce reactance.
  graph_implications:
  - Relación hiperbólica entre reactancia y frecuencia.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No confundas reactancia con resistencia activa.
      en: Do not confuse reactance with active resistance.
- id: omega_f
  title:
    es: Conversión de frecuencia
    en: Frequency conversion
  equation: omega = 2*pi*f
  latex: \\omega=2\\pi f
  rearrangements:
  - target: omega
    equation: omega = 2*pi*f
    latex: \\omega=2\\pi f
  constraints:
  - expr: f >= 0
    message:
      es: La frecuencia en este contexto es no negativa.
      en: Frequency is non-negative in this context.
  category: operative
  relation_type: conversion
  physical_meaning:
    es: Convierte frecuencia en ciclos por segundo a frecuencia angular.
    en: Converts frequency in cycles per second to angular frequency.
  validity:
    es: Válida para señal periódica de frecuencia definida.
    en: Valid for periodic signal with defined frequency.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - cálculo de reactancia
  interpretation_tags: [ conversion, frecuencia ]
  result_semantics:
    target: omega
    meaning: El resultado fija rapidez angular para análisis reactivo.
  domain_checks:
  - expr: "true"
    message:
      es: Si f está en Hz, omega queda en rad/s.
      en: If frequency is in Hz, angular frequency is in rad/s.
  coherence_checks:
  - expr: "true"
    message:
      es: La proporcionalidad entre omega y f debe ser lineal.
      en: Proportionality between angular and ordinary frequency must be linear.
  graph_implications:
  - Modifica escala temporal de oscilación.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Evita sustituir f donde la ecuación requiere omega.
      en: Avoid substituting frequency where equation requires angular frequency.
- id: corriente_capacitiva
  title:
    es: Corriente eficaz en rama capacitiva
    en: RMS current in capacitive branch
  equation: Ic = V/Xc
  latex: I_C=\\frac{V}{X_C}
  rearrangements:
  - target: Ic
    equation: Ic = V/Xc
    latex: I_C=\\frac{V}{X_C}
  constraints:
  - expr: V >= 0 and Xc > 0
    message:
      es: Tensión eficaz no negativa y reactancia positiva.
      en: Non-negative RMS voltage and positive reactance.
  category: operative
  relation_type: branch_response
  physical_meaning:
    es: Relaciona excitación de tensión con corriente de rama en comportamiento capacitivo ideal.
    en: Relates voltage excitation with branch current in ideal capacitive behavior.
  validity:
    es: Válida para rama capacitiva ideal en régimen sinusoidal.
    en: Valid for ideal capacitive branch in sinusoidal regime.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - estimación de corriente de compensación
  interpretation_tags: [ corriente, rama, reactancia ]
  result_semantics:
    target: Ic
    meaning: El resultado cuantifica exigencia de corriente de la rama capacitiva.
  domain_checks:
  - expr: "true"
    message:
      es: Si Xc disminuye, la corriente de rama aumenta.
      en: If reactance decreases, branch current rises.
  coherence_checks:
  - expr: "true"
    message:
      es: Debe crecer con tensión eficaz y decrecer con reactancia.
      en: It must grow with RMS voltage and decrease with reactance.
  graph_implications:
  - Permite leer sobrecorriente potencial en altas frecuencias.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Verifica que V y Ic estén ambos en valores RMS.
      en: Check that voltage and current are both RMS values.
- id: reactiva_capacitiva
  title:
    es: Potencia reactiva capacitiva
    en: Capacitive reactive power
  equation: Qc = V*Ic
  latex: Q_C=V\\cdot I_C
  rearrangements:
  - target: Qc
    equation: Qc = V*Ic
    latex: Q_C=V\\cdot I_C
  constraints:
  - expr: V >= 0 and Ic >= 0
    message:
      es: Se usan magnitudes RMS no negativas para estimación de magnitud reactiva.
      en: Non-negative RMS magnitudes are used for reactive magnitude estimate.
  category: energetic
  relation_type: reactive_exchange
  physical_meaning:
    es: Estima magnitud de intercambio reactivo en la rama capacitiva.
    en: Estimates reactive exchange magnitude in the capacitive branch.
  validity:
    es: Válida como estimación de magnitud en régimen sinusoidal.
    en: Valid as magnitude estimate in sinusoidal regime.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - compensación de potencia reactiva
  interpretation_tags: [ reactiva, energia, compensacion ]
  result_semantics:
    target: Qc
    meaning: El resultado expresa magnitud del intercambio reactivo asociado al capacitor.
  domain_checks:
  - expr: "true"
    message:
      es: La interpretación completa requiere convención explícita de signo.
      en: Full interpretation requires explicit sign convention.
  coherence_checks:
  - expr: "true"
    message:
      es: Si aumentan V o Ic, la magnitud reactiva debe aumentar.
      en: If voltage or current increase, reactive magnitude must increase.
  graph_implications:
  - Conecta corriente de rama con impacto de compensación.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No interpretes Qc como potencia activa consumida.
      en: Do not interpret Qc as consumed active power.
ui:
  default_formula: reactancia_capacitiva
  groups:
  - title:
      es: Basicas
      en: Basics
    items:
    - reactancia_capacitiva
    - omega_f
    - corriente_capacitiva
    - reactiva_capacitiva
`;export{e as default};
