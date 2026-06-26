const n=`id: definicion-centro-de-masas\r
nombre:\r
  es: Definicion centro de masas\r
  en: Definition of the Center of Mass\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: centro-de-masas\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/definicion-centro-de-masas\r
orden: 215221\r
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
icon: 🎯\r
descripcion: Introducción al centro de masas como promedio ponderado por masa. En\r
  este leaf se trabaja con un modelo inicial de\r
description_en: Introduction to the center of mass as a mass-weighted average. This\r
  leaf uses an initial two-mass model on one axis\r
tags:\r
  es:\r
  - centro de masas\r
  - promedio ponderado\r
  - sistema de particulas\r
  - masa total\r
  - mecanica\r
  en:\r
  - center of mass\r
  - weighted average\r
  - particle system\r
  - total mass\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal\r
pregunta_fisica_central:\r
  es: "¿Qué punto resume el movimiento traslacional de un sistema de partículas?"\r
  en: "Which point summarises the translational motion of a system of particles?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: posición del centro de masas\r
physical_role:\r
  es: magnitud física\r
  en: physical quantity\r
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
`;export{n as default};
