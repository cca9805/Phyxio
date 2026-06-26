const n=`id: eficiencia
nombre:
  es: Eficiencia
  en: Efficiency
area: fisica-clasica
bloque: electromagnetismo
subbloque: electricidad-domestica
parent_id: climatizacion
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/eficiencia
orden: 298830
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
icon: 📌
descripcion: "Cálculo del balance estacional, ahorro energético y rentabilidad económica en climatización."
description_en: "Calculation of seasonal balance, energy savings, and economic profitability in climate control."
tags:
  es:
    - eficiencia
    - ahorro
    - climatización
    - energía
    - SCOP
  en:
    - efficiency
    - savings
    - climatization
    - energy
    - SCOP
prerequisitos:
  - "fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/bomba-de-calor"
  - "fisica-clasica/electromagnetismo/electricidad-domestica/climatizacion/resistiva"
graficos: []
physical_role:
  es: "concepto físico"
  en: "physical concept"
representacion_dominante: none
magnitud_dominante: "SCOP"
pregunta_fisica_central:
  es: "¿Cómo influyen el aislamiento y el rendimiento del equipo en el ahorro energético anual?"
  en: "How do insulation and equipment performance influence annual energy savings?"
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
`;export{n as default};
