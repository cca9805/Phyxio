const e=`id: bomba-de-calor
nombre:
  es: "Bomba de calor"
  en: "Heat Pump"
area: fisica-clasica
bloque: electromagnetismo
subbloque: electricidad-domestica
parent_id: climatizacion
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/bomba-de-calor
orden: 298820
type: leaf
dificultad: 3
tiempo_estimado_min: 45
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
icon: "🔌"
descripcion: "Funcionamiento, eficiencia (COP) y balances energéticos de los sistemas de climatización por bomba de calor."
description_en: "Operation, efficiency (COP), and energy balances of heat pump climatization systems."
physical_role:
  es: "concepto físico"
  en: "physical concept"
pregunta_fisica_central:
  es: "¿Cómo permite una bomba de calor mover más energía térmica de la que consume eléctricamente?"
  en: "How does a heat pump move more thermal energy than it consumes electrically?"
magnitud_dominante: "cop"
representacion_dominante: none
interpretacion:
  enabled: true
  archivo: "interpretacion.yaml"
  ui:
    dedicated_tab: true
    inline_calculator: true
    inline_graph: true
    tab_label:
      es: "Interpretación"
      en: "Interpretation"
    show_summary: true
    show_physical_reading: true
    show_coherence: true
    show_model_validity: true
    show_graph_reading: true
    show_likely_errors: true
    show_next_step: true
    allow_export: true
    collapsible: false
  mini_graph:
    enabled: true
    preferred_type: none
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
graficos: []
tags:
  es:
    - termodinámica
    - eficiencia
    - climatización
    - sostenibilidad
    - energía
    - electromagnetismo
  en:
    - thermodynamics
    - efficiency
    - climatization
    - sustainability
    - energy
    - electromagnetism
prerequisitos:
  - "fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/resistiva"
`;export{e as default};
