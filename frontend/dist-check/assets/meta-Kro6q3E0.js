const e=`id: movimiento-del-centro-de-masas\r
nombre:\r
  es: Movimiento del centro de masas\r
  en: Motion of the Center of Mass\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: centro-de-masas\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/movimiento-del-centro-de-masas\r
orden: 215224\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Upper Secondary\r
  - University\r
icon: 🚦\r
descripcion: Relación entre la fuerza externa neta, el momento total y la evolución\r
  del centro de masas de un sistema.\r
description_en: Relationship between net external force, total momentum, and the evolution\r
  of a system's center of mass.\r
tags:\r
  es:\r
  - centro de masas\r
  - movimiento colectivo\r
  - fuerza externa\r
  - momento total\r
  - mecanica\r
  en:\r
  - center of mass\r
  - collective motion\r
  - external force\r
  - total momentum\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/centro-de-masas-sistemas-discretos\r
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/sistemas-aislados\r
pregunta_fisica_central:\r
  es: "¿Cómo relaciona la fuerza externa neta la aceleración del centro de masas?"\r
  en: "How does the net external force relate to the acceleration of the center of mass?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: aceleración del centro de masas\r
physical_role:\r
  es: magnitud física\r
  en: physical quantity\r
dificultad: 3\r
tiempo_estimado_min: 35\r
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
