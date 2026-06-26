const n=`id: definicion-momento-de-inercia\r
nombre:\r
  es: Definición\r
  en: Definition of the Moment of Inertia\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: momento-de-inercia\r
ruta_relativa: fisica-clasica/mecanica/rotacion/dinamica/momento-de-inercia/definicion-momento-de-inercia
orden: 212441\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Upper Secondary\r
  - University\r
icon: 🧲\r
descripcion: Cómo cambia la inercia cuando la masa se aleja o acerca al eje.\r
description_en: How inertia changes when mass moves farther from or closer to the\r
  axis.\r
tags:\r
  es:\r
  - inercia\r
  - rotacion\r
  - torque\r
  - masa\r
  - momento-de-inercia\r
  - cuerpo-rigido\r
  en:\r
  - inertia\r
  - rotation\r
  - moment of force\r
  - mass\r
  - moment-of-inertia\r
  - rigid-body\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/cinematica-rotacional\r
graficos:\r
- Svg\r
pregunta_fisica_central:\r
  es: ¿Cómo cambia el momento de inercia cuando la misma masa se distribuye a distinta\r
    distancia del eje?\r
  en: How does the moment of inertia change when the same mass is distributed at different\r
    distances from the axis?\r
representacion_dominante: Svg\r
magnitud_dominante: I\r
physical_role:\r
  es: magnitud física\r
  en: physical quantity\r
dificultad: 3\r
tiempo_estimado_min: 45\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: false\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretación\r
      en: Interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Svg\r
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: false\r
titulo: Definición\r
titulo_en: Definition of the Moment of Inertia\r
`;export{n as default};
