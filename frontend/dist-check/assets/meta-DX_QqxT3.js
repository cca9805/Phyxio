const e=`version: 5
id: sobreamortiguado
type: leaf
nombre:
  es: Sobreamortiguado
  en: Overdamped Regime
titulo:
  es: Sobreamortiguado
  en: Overdamped Regime
area: fisica-clasica
bloque: mecanica
subbloque: oscilaciones
parent_id: amortiguamiento
ruta_relativa: fisica-clasica/mecanica/oscilaciones/amortiguamiento/sobreamortiguado
orden: 217430
icon: "⚡"
descripcion: "Analiza respuestas no oscilatorias lentas cuando el amortiguamiento supera el umbral critico."
description_en: "Analyzes slow non-oscillatory responses when damping exceeds the critical threshold."
tags:
  es: [oscilaciones, amortiguamiento, sobreamortiguado]
  en: [oscillations, damping, overdamped]
prerequisitos:
  - fisica-clasica/mecanica/oscilaciones/amortiguamiento/critico
niveles:
  es: [BACHILLERATO]
  en: [Upper Secondary]
physical_role:
  es: concepto físico
  en: physical concept
graficos: [Coord]
representacion_dominante: Coord
magnitud_dominante: r1
pregunta_fisica_central:
  es: "¿Como predice el regimen sobreamortiguado un retorno sin oscilacion pero gobernado por un modo lento?"
  en: "How does the overdamped regime predict non-oscillatory return governed by a slow mode?"
dificultad: 3
tiempo_estimado_min: 50
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    auto_open: true
    show_summary_first: true
    highlight_severity: true
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    show_summary: true
    show_warnings: true
    show_next_step: true
    show_likely_errors: true
    max_inline_messages: 3
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
    enforce_formulas: true
    enforce_magnitudes: true
`;export{e as default};
