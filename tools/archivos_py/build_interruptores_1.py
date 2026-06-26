"""Build interruptores leaf from scratch."""
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')
base.mkdir(parents=True, exist_ok=True)

# ── meta.yaml ────────────────────────────────────────────────────────────────
(base / 'meta.yaml').write_text("""\
id: interruptores
type: leaf
orden: 298400
titulo: Interruptores
titulo_en: Switches
descripcion: 'El interruptor controla el paso de corriente: en OFF corta el circuito, en ON lo conduce con pérdida resistiva R_on.'
description_en: 'A switch controls current flow: in OFF state it breaks the circuit, in ON state it conducts with resistive loss R_on.'
nombre:
  es: Interruptores
  en: Switches
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
icon: "\U0001f39b"
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/interruptores
graficos: []
physical_role:
  es: concepto físico
  en: physical concept
representacion_dominante: none
magnitud_dominante: P_on
pregunta_fisica_central:
  es: '¿Cuánta energía disipa un interruptor real al conducir corriente y cuándo esa pérdida se convierte en un riesgo térmico?'
  en: 'How much energy does a real switch dissipate when conducting current, and when does that loss become a thermal risk?'
tags:
  es:
  - interruptor
  - resistencia ON
  - pérdida resistiva
  - circuito doméstico
  - maniobra
  - disipación
  en:
  - switch
  - ON resistance
  - resistive loss
  - domestic circuit
  - switching
  - dissipation
prerequisitos:
  - fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas
output_policy:
  show_formula_derivation: true
  show_graph: false
  show_interpretation: true
interpretation_config:
  show_summary: true
  show_physical_reading: true
  show_coherence: true
  show_model_validity: true
  show_graph_reading: false
  show_likely_errors: true
  show_next_step: true
""", encoding='utf-8')
print('meta.yaml OK')

# ── magnitudes.yaml ───────────────────────────────────────────────────────────
(base / 'magnitudes.yaml').write_text("""\
version: 2
magnitudes:
  - id: P
    symbol: P
    nombre:
      es: Potencia de la carga
      en: Load power
    descripcion:
      es: Potencia nominal del equipo conectado al interruptor. Determina la corriente que circula por el interruptor al cerrar el circuito.
      en: Nominal power of the device connected to the switch. Determines the current flowing through the switch when the circuit is closed.
    unidad: W
    unidad_en: W
    dimension: M L^2 T^-3
    rol_fisico:
      es: magnitud de entrada
      en: input quantity
    rango_tipico:
      min: 1
      max: 4000
      unidad: W
    comportamiento: escalar positivo
    interpretation_role: input
    pedagogical_note:
      es: Se lee directamente de la etiqueta del equipo. Base para calcular I = P/V.
      en: Read directly from the device label. Base for calculating I = P/V.

  - id: V
    symbol: V
    nombre:
      es: Tensión de alimentación
      en: Supply voltage
    descripcion:
      es: Tensión nominal de la instalación donde opera el interruptor. En Europa, 230 V a 50 Hz en corriente alterna.
      en: Nominal voltage of the installation where the switch operates. In Europe, 230 V at 50 Hz AC.
    unidad: V
    unidad_en: V
    dimension: M L^2 T^-3 I^-1
    rol_fisico:
      es: parámetro de contexto
      en: context parameter
    rango_tipico:
      min: 12
      max: 400
      unidad: V
    comportamiento: escalar positivo
    interpretation_role: input
    pedagogical_note:
      es: Fija el contexto eléctrico. En instalaciones domésticas europeas es 230 V.
      en: Sets the electrical context. In European domestic installations it is 230 V.

  - id: I
    symbol: I
    nombre:
      es: Corriente de maniobra
      en: Switching current
    descripcion:
      es: Corriente que circula por los contactos del interruptor cuando está en ON. Se calcula como P/V para cargas resistivas.
      en: Current flowing through the switch contacts when in ON state. Calculated as P/V for resistive loads.
    unidad: A
    unidad_en: A
    dimension: I
    rol_fisico:
      es: magnitud derivada
      en: derived quantity
    rango_tipico:
      min: 0.01
      max: 50
      unidad: A
    comportamiento: escalar no negativo
    interpretation_role: intermediate
    pedagogical_note:
      es: Vincula la potencia de la carga con la pérdida resistiva. Cuanto mayor es I, mayor es P_on al cuadrado.
      en: Links load power with resistive loss. The larger I, the larger P_on quadratically.

  - id: R_on
    symbol: R_on
    nombre:
      es: Resistencia en estado ON
      en: ON-state resistance
    descripcion:
      es: Resistencia de los contactos del interruptor cuando está cerrado (ON). En interruptores de calidad es miliohmios; en interruptores degradados puede subir a décimas de ohmio.
      en: Resistance of the switch contacts when closed (ON). In quality switches it is milliohms; in degraded switches it can rise to tenths of an ohm.
    unidad: Ω
    unidad_en: Ω
    dimension: M L^2 T^-3 I^-2
    rol_fisico:
      es: parámetro de calidad del contacto
      en: contact quality parameter
    rango_tipico:
      min: 0.001
      max: 2
      unidad: Ω
    comportamiento: escalar no negativo
    interpretation_role: input
    pedagogical_note:
      es: Es el parámetro que diferencia un interruptor ideal (R_on = 0) del real. Su aumento indica degradación.
      en: It is the parameter that distinguishes an ideal switch (R_on = 0) from a real one. Its increase indicates degradation.

  - id: P_on
    symbol: P_on
    nombre:
      es: Pérdida resistiva en ON
      en: Resistive loss in ON state
    descripcion:
      es: Potencia disipada en los contactos del interruptor cuando conduce corriente. Crece con el cuadrado de I y con R_on.
      en: Power dissipated in the switch contacts when conducting current. Grows with the square of I and with R_on.
    unidad: W
    unidad_en: W
    dimension: M L^2 T^-3
    rol_fisico:
      es: magnitud de riesgo
      en: risk quantity
    rango_tipico:
      min: 0
      max: 50
      unidad: W
    comportamiento: escalar no negativo
    interpretation_role: output
    pedagogical_note:
      es: Es el resultado central del análisis. Indica si el interruptor genera calor localmente al conducir.
      en: It is the central analysis result. Indicates whether the switch generates local heat when conducting.

  - id: t_on
    symbol: t_on
    nombre:
      es: Tiempo de conducción
      en: Conduction time
    descripcion:
      es: Tiempo durante el que el interruptor permanece cerrado (ON) en un período de análisis. Determina la energía total disipada.
      en: Time during which the switch remains closed (ON) in an analysis period. Determines total dissipated energy.
    unidad: s
    unidad_en: s
    dimension: T
    rol_fisico:
      es: parámetro temporal
      en: temporal parameter
    rango_tipico:
      min: 1
      max: 86400
      unidad: s
    comportamiento: escalar positivo
    interpretation_role: input
    pedagogical_note:
      es: Permite pasar de la potencia instantánea P_on a la energía acumulada E_on en el período de uso.
      en: Allows moving from instantaneous power P_on to accumulated energy E_on over the usage period.

  - id: E_on
    symbol: E_on
    nombre:
      es: Energía disipada en conducción
      en: Energy dissipated during conduction
    descripcion:
      es: Energía total disipada en los contactos del interruptor durante un período de conducción. Es el producto de P_on por t_on.
      en: Total energy dissipated in the switch contacts during a conduction period. It is the product of P_on and t_on.
    unidad: J
    unidad_en: J
    dimension: M L^2 T^-2
    rol_fisico:
      es: magnitud acumulada
      en: accumulated quantity
    rango_tipico:
      min: 0
      max: 1000000
      unidad: J
    comportamiento: escalar no negativo
    interpretation_role: output
    pedagogical_note:
      es: Útil para estimar el calentamiento acumulado en períodos largos de uso. Se convierte fácilmente a kWh dividiendo entre 3 600 000.
      en: Useful for estimating accumulated heating over long usage periods. Easily converted to kWh by dividing by 3,600,000.
""", encoding='utf-8')
print('magnitudes.yaml OK')

# ── formulas.yaml ─────────────────────────────────────────────────────────────
(base / 'formulas.yaml').write_text("""\
version: 2
topic:
  id: interruptores
  titulo:
    es: Interruptores
    en: Switches

formulas:
  - id: corriente
    titulo:
      es: Corriente de maniobra
      en: Switching current
    equation: I = P / V
    latex: 'I = \\\\frac{P}{V}'
    rearrangements:
      - equation: P = I * V
        latex: 'P = I \\\\cdot V'
      - equation: V = P / I
        latex: 'V = \\\\frac{P}{I}'
    categoria: definicion
    significado_fisico:
      es: La corriente que el interruptor debe conducir es la potencia de la carga dividida entre la tensión de alimentación. A mayor potencia o menor tensión, mayor corriente y mayor pérdida resistiva.
      en: The current the switch must conduct is the load power divided by the supply voltage. Higher power or lower voltage means higher current and higher resistive loss.
    restricciones:
      - V > 0
      - carga resistiva con factor de potencia unitario
    validez:
      es: Régimen permanente, carga resistiva pura, factor de potencia = 1.
      en: Steady state, purely resistive load, power factor = 1.
    dimension_check: 'W/V = A → correcto'
    calculable: true
    uso:
      es: Primer paso para dimensionar el interruptor y estimar pérdidas.
      en: First step to size the switch and estimate losses.
    interpretation_tags:
      - corriente_maniobra
      - dimensionamiento
    result_semantics:
      target: I
      direction: proportional_to_P
      inverse_to: V
    domain_checks:
      - condition: 'I <= I_nominal_switch'
        consequence:
          es: Si I supera la corriente nominal del interruptor, el contacto se degrada aceleradamente.
          en: If I exceeds the switch nominal current, the contact degrades rapidly.
    coherence_checks:
      - check: 'P / V = I'
        note:
          es: Coherencia dimensional W/V = A verificada.
          en: Dimensional coherence W/V = A verified.
    graph_implications:
      - type: linear
        x: P
        y: I
        note: 'I crece linealmente con P a V fija.'
    pedagogical_triggers:
      - trigger: I > 10
        note:
          es: Con I > 10 A, verificar que el interruptor esté diseñado para esa corriente.
          en: With I > 10 A, verify the switch is rated for that current.

  - id: perdida_on
    titulo:
      es: Pérdida resistiva en estado ON
      en: Resistive loss in ON state
    equation: P_on = I^2 * R_on
    latex: 'P_{on} = I^2 \\\\cdot R_{on}'
    rearrangements:
      - equation: R_on = P_on / I^2
        latex: 'R_{on} = \\\\frac{P_{on}}{I^2}'
      - equation: I = sqrt(P_on / R_on)
        latex: 'I = \\\\sqrt{\\\\frac{P_{on}}{R_{on}}}'
    categoria: ley_joule
    significado_fisico:
      es: La potencia disipada en los contactos del interruptor crece con el cuadrado de la corriente y con R_on. Duplicar la corriente cuadruplica la pérdida. Esta dependencia cuadrática hace que los interruptores de alta corriente sean especialmente sensibles a la calidad del contacto.
      en: Power dissipated in switch contacts grows with the square of current and with R_on. Doubling current quadruples the loss. This quadratic dependence makes high-current switches especially sensitive to contact quality.
    restricciones:
      - I >= 0
      - R_on >= 0
    validez:
      es: Régimen permanente, contacto óhmico puro. No válido para arcos eléctricos ni contactos intermitentes.
      en: Steady state, purely ohmic contact. Not valid for electric arcs or intermittent contacts.
    dimension_check: 'A^2 * Ω = W → correcto'
    calculable: true
    uso:
      es: Estimación del riesgo térmico local en el interruptor.
      en: Estimation of local thermal risk in the switch.
    interpretation_tags:
      - riesgo_termico
      - joule_localizado
    result_semantics:
      target: P_on
      direction: quadratic_in_I
      proportional_to: R_on
    domain_checks:
      - condition: 'P_on > 5'
        consequence:
          es: P_on > 5 W indica disipación elevada; inspeccionar el contacto.
          en: P_on > 5 W indicates high dissipation; inspect the contact.
    coherence_checks:
      - check: 'A^2 * Ω = W'
        note:
          es: Coherencia dimensional verificada.
          en: Dimensional coherence verified.
    graph_implications:
      - type: parabolic
        x: I
        y: P_on
        note: 'P_on crece como I^2 a R_on fija.'
    pedagogical_triggers:
      - trigger: P_on > 1
        note:
          es: Con P_on > 1 W, el calentamiento del contacto es apreciable en uso continuo.
          en: With P_on > 1 W, contact heating is noticeable in continuous use.

  - id: energia_on
    titulo:
      es: Energía disipada durante la conducción
      en: Energy dissipated during conduction
    equation: E_on = P_on * t_on
    latex: 'E_{on} = P_{on} \\\\cdot t_{on}'
    rearrangements:
      - equation: t_on = E_on / P_on
        latex: 't_{on} = \\\\frac{E_{on}}{P_{on}}'
      - equation: P_on = E_on / t_on
        latex: 'P_{on} = \\\\frac{E_{on}}{t_{on}}'
    categoria: energia_acumulada
    significado_fisico:
      es: La energía total disipada en el interruptor es el producto de la potencia de pérdida por el tiempo de conducción. Esta energía se convierte en calor en los contactos. En interruptores de uso continuo (como los termostatos), E_on puede ser significativa a lo largo de un día o una semana.
      en: Total energy dissipated in the switch is the product of loss power and conduction time. This energy is converted to heat in the contacts. In continuously used switches (like thermostats), E_on can be significant over a day or a week.
    restricciones:
      - P_on >= 0
      - t_on >= 0
    validez:
      es: Válido cuando P_on es aproximadamente constante durante t_on. Para ciclos de carga variable, E_on = integral de P_on dt.
      en: Valid when P_on is approximately constant during t_on. For variable load cycles, E_on = integral of P_on dt.
    dimension_check: 'W * s = J → correcto'
    calculable: true
    uso:
      es: Análisis energético de interruptores en uso continuo. Conversión a kWh: E_on / 3 600 000.
      en: Energy analysis of continuously used switches. Conversion to kWh: E_on / 3,600,000.
    interpretation_tags:
      - energia_acumulada
      - analisis_temporal
    result_semantics:
      target: E_on
      direction: proportional_to_P_on
      proportional_to: t_on
    domain_checks:
      - condition: 'E_on > 3600'
        consequence:
          es: E_on > 1 Wh indica disipación acumulada relevante en el período.
          en: E_on > 1 Wh indicates relevant accumulated dissipation in the period.
    coherence_checks:
      - check: 'W * s = J'
        note:
          es: Coherencia dimensional verificada.
          en: Dimensional coherence verified.
    graph_implications:
      - type: linear
        x: t_on
        y: E_on
        note: 'E_on crece linealmente con t_on a P_on fija.'
    pedagogical_triggers:
      - trigger: t_on > 3600
        note:
          es: Con t_on > 1 hora, calcular E_on para estimar el coste energético de las pérdidas.
          en: With t_on > 1 hour, calculate E_on to estimate the energy cost of losses.

ui:
  default_formula: corriente
  groups:
    - title:
        es: Ecuaciones base
        en: Base equations
      items:
        - corriente
        - perdida_on
        - energia_on
""", encoding='utf-8')
print('formulas.yaml OK')

print('\nPhase 1 done.')
