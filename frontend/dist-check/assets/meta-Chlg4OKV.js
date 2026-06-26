const r=`id: errores-frecuentes\r
nombre:\r
  es: Errores frecuentes\r
  en: Common Errors in Dynamics Problems\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: problemas-integrados\r
ruta_relativa: fisica-clasica/mecanica/dinamica/aplicaciones/problemas-integrados/errores-frecuentes\r
orden: 212732\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
icon: ✅\r
descripcion: Análisis de sesgos cognitivos y fallos procedimentales en dinámica.\r
description_en: Analysis of cognitive biases and procedural failures in dynamics problem\r
  solving.\r
tags:\r
  es:\r
  - dinamica\r
  - errores\r
  - diagnostico\r
  - fuerzas\r
  - dcl\r
  en:\r
  - dynamics\r
  - errors\r
  - diagnostics\r
  - forces\r
  - fbd\r
pregunta_fisica_central:\r
  es: "¿Qué error conceptual o procedimental hace que la aceleración del sistema no coincida con el resultado real?"\r
  en: "What conceptual or procedural error causes the calculated system acceleration to diverge from the real result?"\r
representacion_dominante: Coord\r
magnitud_dominante: aceleracion_sistema\r
prerequisitos:\r
- leyes-de-newton\r
- sistemas-vinculados\r
- diagramas-cuerpo-libre\r
graficos:\r
- Coord\r
physical_role:\r
  es: aplicación física\r
  en: physical application\r
dificultad: 3\r
tiempo_estimado_min: 60\r
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
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{r as default};
