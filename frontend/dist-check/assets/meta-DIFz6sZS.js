const r=`version: 1\r
id: ejemplos-aplicados\r
nombre:\r
  es: Ejemplos Aplicados\r
  en: Worked Examples in Rotational Motion with Friction\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: rozamiento-en-rotacion-y-rodadura
ruta_relativa: fisica-clasica/mecanica/rotacion/dinamica/rozamiento-en-rotacion-y-rodadura/ejemplos-aplicados
orden: 212431\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  en:\r
  - University\r
icon: 🧪\r
descripcion: Ejemplos resueltos de frenado rotacional con rozamiento seco y viscoso.\r
description_en: Solved examples of rotational braking with dry and viscous friction.\r
tags:\r
  es:\r
  - rotacion\r
  - rozamiento\r
  - frenado angular\r
  - torque disipativo\r
  - energia rotacional\r
  en:\r
  - rotation\r
  - friction\r
  - angular braking\r
  - dissipative torque\r
  - rotational energy\r
pregunta_fisica_central:\r
  es: Como decidir, a partir de omega y del torque disipativo, si un frenado rotacional\r
    se explica mejor con rozamiento seco, viscoso o mixto?\r
  en: How can omega and dissipative torque be used to decide whether rotational braking\r
    is better explained by dry, viscous, or mixed friction?\r
representacion_dominante: Coord\r
magnitud_dominante: omega\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/rotacion/cinematica-rotacional\r
- fisica-clasica/mecanica/cinematica/rotacion/magnitudes-angulares\r
- fisica-clasica/mecanica/dinamica/fuerzas/rozamiento-dinamico\r
graficos:\r
- Coord\r
physical_role:\r
  es: modelo físico\r
  en: physical model\r
dificultad: 5\r
tiempo_estimado_min: 60\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Calculadora e interpretacion\r
      en: Calculator and interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 6\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
titulo: Ejemplos Aplicados\r
titulo_en: Worked Examples in Rotational Motion with Friction\r
`;export{r as default};
