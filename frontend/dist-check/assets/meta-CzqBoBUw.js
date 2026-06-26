const e=`version: 5
id: circuitos-rlc
nombre:
  es: Circuitos rlc
  en: RLC Circuits
titulo:
  es: Circuitos rlc
  en: RLC Circuits
titulo_en: RLC Circuits
area: fisica-clasica
bloque: electromagnetismo
subbloque: corriente-alterna
parent_id: corriente-alterna
type: leaf
ruta_relativa: fisica-clasica/electromagnetismo/corriente-alterna/circuitos-rlc
orden: 294300
icon: "📘"
descripcion: Analiza impedancia, fase y potencias en circuitos RLC serie en corriente alterna.
description_en: Analyzes impedance, phase, and power in AC series RLC circuits.
dificultad: 4
tiempo_estimado_min: 75
niveles:
  es: [ UNIVERSIDAD ]
  en: [ University ]
prerequisitos:
- fisica-clasica/electromagnetismo/corriente-alterna/reactancia/capacitiva
- fisica-clasica/electromagnetismo/corriente-alterna/reactancia/inductiva
tags:
  es: [ circuitos-rlc, impedancia, desfase, potencia-reactiva, corriente-alterna ]
  en: [ rlc-circuits, impedance, phase-shift, reactive-power, alternating-current ]
physical_role:
  es: concepto físico
  en: physical concept
graficos: []
representacion_dominante: none
magnitud_dominante: Z
pregunta_fisica_central:
  es: "¿Como se combinan resistencia y reactancias para fijar la corriente, el desfase y la potencia en un circuito RLC?"
  en: "How do resistance and reactances combine to set current, phase shift, and power in an RLC circuit?"
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    show_tab: true
    show_inline_cards: true
    allow_contextual_feedback: true
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
    output_magnitude: Z
  output_policy:
    show_summary: true
    show_summary_first: true
    show_physical_reading: true
    show_coherence_checks: true
    show_model_limitations: true
    show_warnings: true
    show_likely_errors: true
    max_inline_messages: 4
  dependencies:
    require_formulas: true
    require_magnitudes: true
    require_examples: true
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{e as default};
