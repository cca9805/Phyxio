const e=`version: 5
topic:
  id: inductiva
  title:
    es: Reactancia inductiva
    en: Inductive Reactance
variables:
- id: Xl
  symbol: X_L
  name:
    es: reactancia inductiva
    en: Inductive Reactance
  si_unit: ohm
- id: omega
  symbol: \\omega
  name:
    es: frecuencia angular
    en: Angular Frequency
  si_unit: rad/s
- id: L
  symbol: L
  name:
    es: inductancia
    en: Inductance
  si_unit: H
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
- id: Il
  symbol: I_L
  name:
    es: corriente inductiva eficaz
    en: RMS Inductive Current
  si_unit: A
- id: Ql
  symbol: Q_L
  name:
    es: potencia reactiva inductiva
    en: Inductive Reactive Power
  si_unit: var
formulas:
- id: reactancia_inductiva
  title:
    es: Reactancia inductiva ideal
    en: Ideal inductive reactance
  equation: Xl = omega*L
  latex: X_L=\\omega L
  rearrangements:
  - target: omega
    equation: omega = Xl/L
    latex: \\omega=\\frac{X_L}{L}
  - target: L
    equation: L = Xl/omega
    latex: L=\\frac{X_L}{\\omega}
  constraints:
  - expr: omega >= 0 and L >= 0
    message:
      es: Frecuencia angular e inductancia deben ser no negativas.
      en: Angular frequency and inductance must be non-negative.
  category: structural
  relation_type: direct_dependence
  physical_meaning:
    es: Expresa que la oposición inductiva aumenta al aumentar frecuencia angular o inductancia.
    en: States that inductive opposition increases as angular frequency or inductance increase.
  validity:
    es: Válida para inductor ideal en régimen sinusoidal estacionario.
    en: Valid for ideal inductor in sinusoidal steady regime.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - análisis de reactancia
  - dimensionamiento de ramas inductivas
  interpretation_tags: [ reactancia, frecuencia, inductancia ]
  result_semantics:
    target: Xl
    meaning: El resultado cuantifica oposición inductiva no disipativa en AC.
  domain_checks:
  - expr: "true"
    message:
      es: Si la frecuencia aumenta, la reactancia inductiva también debe aumentar.
      en: If frequency rises, inductive reactance must rise as well.
  coherence_checks:
  - expr: "true"
    message:
      es: A mayor omega o L, Xl debe crecer proporcionalmente.
      en: Larger angular frequency or inductance must increase reactance proportionally.
  graph_implications:
  - Relación lineal entre reactancia e incremento de frecuencia.
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
- id: corriente_inductiva
  title:
    es: Corriente eficaz en rama inductiva
    en: RMS current in inductive branch
  equation: Il = V/Xl
  latex: I_L=\\frac{V}{X_L}
  rearrangements:
  - target: Il
    equation: Il = V/Xl
    latex: I_L=\\frac{V}{X_L}
  constraints:
  - expr: V >= 0 and Xl > 0
    message:
      es: Tensión eficaz no negativa y reactancia positiva.
      en: Non-negative RMS voltage and positive reactance.
  category: operative
  relation_type: branch_response
  physical_meaning:
    es: Relaciona excitación de tensión con corriente de rama en comportamiento inductivo ideal.
    en: Relates voltage excitation with branch current in ideal inductive behavior.
  validity:
    es: Válida para rama inductiva ideal en régimen sinusoidal.
    en: Valid for ideal inductive branch in sinusoidal regime.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - estimación de corriente magnetizante
  interpretation_tags: [ corriente, rama, reactancia ]
  result_semantics:
    target: Il
    meaning: El resultado cuantifica exigencia de corriente de la rama inductiva.
  domain_checks:
  - expr: "true"
    message:
      es: Si Xl aumenta, la corriente de rama disminuye.
      en: If reactance increases, branch current decreases.
  coherence_checks:
  - expr: "true"
    message:
      es: Debe crecer con tensión eficaz y decrecer con reactancia.
      en: It must grow with RMS voltage and decrease with reactance.
  graph_implications:
  - Permite leer limitación de corriente en altas frecuencias.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Verifica que V e Il estén ambos en valores RMS.
      en: Check that voltage and current are both RMS values.
- id: reactiva_inductiva
  title:
    es: Potencia reactiva inductiva
    en: Inductive reactive power
  equation: Ql = V*Il
  latex: Q_L=V\\cdot I_L
  rearrangements:
  - target: Ql
    equation: Ql = V*Il
    latex: Q_L=V\\cdot I_L
  constraints:
  - expr: V >= 0 and Il >= 0
    message:
      es: Se usan magnitudes RMS no negativas para estimación de magnitud reactiva.
      en: Non-negative RMS magnitudes are used for reactive magnitude estimate.
  category: energetic
  relation_type: reactive_exchange
  physical_meaning:
    es: Estima magnitud de intercambio reactivo en la rama inductiva.
    en: Estimates reactive exchange magnitude in the inductive branch.
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
    target: Ql
    meaning: El resultado expresa magnitud del intercambio reactivo asociado al inductor.
  domain_checks:
  - expr: "true"
    message:
      es: La interpretación completa requiere convención explícita de signo.
      en: Full interpretation requires explicit sign convention.
  coherence_checks:
  - expr: "true"
    message:
      es: Si aumentan V o Il, la magnitud reactiva debe aumentar.
      en: If voltage or current increase, reactive magnitude must increase.
  graph_implications:
  - Conecta corriente de rama con impacto en demanda reactiva.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No interpretes Ql como potencia activa consumida.
      en: Do not interpret reactive power as active consumption.
ui:
  default_formula: reactancia_inductiva
  groups:
  - title:
      es: Basicas
      en: Basics
    items:
    - reactancia_inductiva
    - omega_f
    - corriente_inductiva
    - reactiva_inductiva
`;export{e as default};
