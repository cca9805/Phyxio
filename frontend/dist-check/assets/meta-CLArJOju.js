const e=`version: 5\r
id: critico\r
type: leaf\r
nombre:\r
  es: Critico\r
  en: Critical Damping\r
titulo:\r
  es: Critico\r
  en: Critical Damping\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: oscilaciones\r
parent_id: amortiguamiento\r
ruta_relativa: fisica-clasica/mecanica/oscilaciones/amortiguamiento/critico\r
orden: 217420\r
icon: 🧪\r
descripcion: "Subtema: Critico. Teoría, fórmulas, ejemplos y aplicaciones."\r
description_en: "Content about Critico."\r
tags:\r
  es: [ oscilaciones, amortiguamiento, critico ]\r
  en: [ oscillations, damping, critical ]\r
prerequisitos:\r
- fisica-clasica/mecanica/oscilaciones/amortiguamiento/subamortiguado\r
niveles:\r
  es: [ BACHILLERATO ]\r
  en: [ Upper Secondary ]\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
graficos: [ Coord ]\r
representacion_dominante: Coord\r
magnitud_dominante: x\r
pregunta_fisica_central:\r
  es: "¿Qué condición física define el amortiguamiento crítico y cómo cambia la respuesta temporal del sistema respecto a otros regímenes?"\r
  en: "What physical condition defines critical damping, and how does it change the system's time response compared with other regimes?"\r
dificultad: 3\r
tiempo_estimado_min: 50\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    auto_open: true
    show_summary_first: true
    highlight_severity: true
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:\r
      es: Interpretación\r
      en: Interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
  output_policy:
    show_summary_first: true
    show_summary: true
    show_warnings: true
    show_next_step: true
    show_likely_errors: true\r
    max_inline_messages: 3\r
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
    enforce_formulas: true
    enforce_magnitudes: true\r
`;export{e as default};
