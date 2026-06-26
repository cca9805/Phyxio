const e=`id: coste-de-la-electricidad
nombre:
  es: Coste de la electricidad
  en: Cost of Electricity
area: fisica-clasica
bloque: electromagnetismo
subbloque: electricidad-domestica
parent_id: electricidad-domestica
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad
orden: 298900
type: leaf
dificultad: 2
tiempo_estimado_min: 35
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
icon: ⚡
descripcion: "Descomposición de la factura eléctrica en energía, potencia y extras. Cálculo del coste total y comparación de escenarios de ahorro."
description_en: "Breakdown of the electricity bill into energy, power and extras. Total cost calculation and savings scenario comparison."
tags:
  es:
    - coste eléctrico
    - factura eléctrica
    - término de energía
    - tarifa horaria
    - ahorro energético
    - potencia contratada
  en:
    - electricity cost
    - electricity bill
    - energy term
    - time-of-use tariff
    - energy savings
    - contracted power
prerequisitos:
  - fisica-clasica/electromagnetismo/electricidad-domestica/tension-y-potencia-en-casa
graficos:
  - Coord
physical_role:
  es: "concepto físico"
  en: "physical concept"
representacion_dominante: Coord
magnitud_dominante: "C_total"
pregunta_fisica_central:
  es: "¿Cómo se traduce el consumo eléctrico en coste real y qué decisiones físicas permiten reducirlo de forma estable?"
  en: "How does electrical consumption translate into real cost, and what physical decisions allow for a stable reduction?"
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
`;export{e as default};
