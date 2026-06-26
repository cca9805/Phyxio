const e=`id: centro-de-masas-sistemas-discretos\r
nombre:\r
  es: Centro de masas sistemas discretos\r
  en: Center of Mass in Discrete Systems\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: centro-de-masas\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/centro-de-masas-sistemas-discretos\r
orden: 215222\r
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
icon: 🚶\r
descripcion: Cálculo del centro de masas cuando la masa está concentrada en partículas\r
  o bloques discretos. En este leaf, el modelo\r
description_en: Calculation of the center of mass when mass is concentrated in particles\r
  or discrete blocks. In this leaf, the operational\r
tags:\r
  es:\r
  - centro de masas\r
  - sistemas discretos\r
  - particulas\r
  - promedio ponderado\r
  - mecanica\r
  en:\r
  - center of mass\r
  - discrete systems\r
  - particles\r
  - weighted average\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/definicion-centro-de-masas\r
pregunta_fisica_central:\r
  es: "¿Cómo se calcula el centro de masas de un conjunto de partículas puntuales?"\r
  en: "How is the center of mass of a set of point particles calculated?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: posición del centro de masas\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 2\r
tiempo_estimado_min: 25\r
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
`;export{e as default};
