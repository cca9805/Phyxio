const n=`id: ondas-superficiales\r
orden: 232210\r
nombre:\r
  es: Ondas superficiales\r
  en: Surface Waves\r
area: fisica-clasica\r
bloque: ondas\r
subbloque: ondas-mecanicas\r
parent_id: ondas-en-fluidos\r
descripcion: Ondas confinadas a la interfaz entre dos medios, dominadas por tensión superficial o gravedad.\r
description_en: Waves confined to the interface between two media, dominated by surface tension or gravity.\r
ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-fluidos/ondas-superficiales\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  - EXTRACURRICULAR\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
  - Extracurricular\r
icon: "🧪"\r
graficos:\r
- Coord\r
- Svg\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 4\r
tiempo_estimado_min: 40\r
representacion_dominante: Coord\r
magnitud_dominante: v\r
pregunta_fisica_central:\r
  es: "¿Como se propagan las ondas sobre la interfaz aire-agua balanceando gravedad y tension superficial?"\r
  en: "How do waves propagate at the air-water interface while balancing gravity and surface tension?"\r
tags:\r
  es:\r
  - ondas superficiales\r
  - ondas de gravedad\r
  - ondas capilares\r
  - tension superficial\r
  - interfaz aire-agua\r
  - dispersión ondulatoria\r
  en:\r
  - surface waves\r
  - gravity waves\r
  - capillary waves\r
  - surface tension\r
  - air-water interface\r
  - wave dispersion\r
prerequisitos:\r
- fisica-clasica/ondas/ondas-mecanicas/ondas-en-fluidos/ondas-longitudinales\r
- fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/velocidad-de-propagacion\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretacion\r
      en: Interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 4\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{n as default};
