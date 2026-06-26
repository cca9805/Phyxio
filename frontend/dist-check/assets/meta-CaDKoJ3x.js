const e=`version: 5
id: teorema-trabajo-energia
nombre:
  es: Teorema trabajo-energia
  en: Work-Energy Theorem
titulo:
  es: Teorema trabajo-energia
  en: Work-Energy Theorem
titulo_en: Work-Energy Theorem
area: fisica-clasica
bloque: mecanica
subbloque: trabajo-y-energia
parent_id: fundamentos
type: leaf
ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/fundamentos/teorema-trabajo-energia
orden: 214125
icon: "⚖️"
descripcion: Relaciona trabajo neto y cambio de energia cinetica entre estados.
description_en: Relates net work to the change in kinetic energy between states.
dificultad: 3
tiempo_estimado_min: 40
niveles:
  es: [ ESO, BACHILLERATO, UNIVERSIDAD ]
  en: [ Secondary, Upper Secondary, University ]
prerequisitos:
- fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo
- fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo-fuerza-variable
tags:
  es: [ trabajo-neto, energia-cinetica, teorema, estados, cambio ]
  en: [ net-work, kinetic-energy, theorem, states, change ]
physical_role:
  es: ley física
  en: physical law
graficos: []
representacion_dominante: none
magnitud_dominante: Wnet
pregunta_fisica_central:
  es: "¿Como conecta el trabajo neto el cambio de energia cinetica entre dos estados?"
  en: "How does net work connect the change in kinetic energy between two states?"
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    show_tab: true
    show_inline_cards: true
    allow_contextual_feedback: true
    inline_calculator: true
    inline_graph: false
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: false
    preferred_type: Coord
    output_magnitude: Wnet
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
    supports_graph_binding: false
`;export{e as default};
