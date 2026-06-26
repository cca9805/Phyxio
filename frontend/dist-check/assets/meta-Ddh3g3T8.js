const r=`id: enchufes-y-tomas\r
nombre:\r
  es: Enchufes y tomas\r
  en: Plugs and Sockets\r
area: fisica-clasica\r
bloque: electromagnetismo\r
subbloque: electricidad-domestica\r
parent_id: electricidad-domestica\r
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas\r
orden: 298300\r
type: leaf\r
dificultad: 2\r
tiempo_estimado_min: 25\r
descripcion: Enchufes y tomas de corriente. Limites de carga, riesgo termico y diagnostico de sobrecargas.\r
description_en: Plugs and sockets. Load limits, thermal risk and overload diagnosis.\r
description:\r
  es: 'Enchufes y tomas de corriente domésticas: límites de carga, riesgo térmico por contacto y diagnóstico de sobrecargas en regletas.'\r
  en: 'Domestic plugs and sockets: load limits, local thermal risk from contact resistance, and overload diagnosis in power strips.'\r
prerequisitos: []\r
pregunta_fisica_central:\r
  es: '¿Cuándo supera una toma de corriente su límite seguro de carga y qué riesgo térmico genera el contacto degradado?'\r
  en: 'When does a socket exceed its safe load limit and what thermal risk does a degraded contact generate?'\r
tags:\r
  es:\r
  - enchufes\r
  - tomas\r
  - sobrecarga\r
  - riesgo termico\r
  - electricidad domestica\r
  en:\r
  - plugs\r
  - sockets\r
  - overload\r
  - thermal risk\r
  - domestic electricity\r
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
icon: "🌡"\r
graficos: []\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
representacion_dominante: none\r
magnitud_dominante: margen_uso\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    tab_label:\r
      es: Interpretación\r
      en: Interpretation\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
  mini_graph:\r
    enabled: true\r
    preferred_type: none\r
  output_policy:\r
    show_summary_first: true\r
    show_warnings: true\r
    show_likely_errors: true\r
    max_inline_messages: 4\r
    collapse_after: 2\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: false\r
`;export{r as default};
