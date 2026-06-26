const n=`id: magnitudes-cinematicas\r
nombre:\r
  es: Magnitudes cinematicas\r
  en: Kinematic Quantities\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: cinematica\r
ruta_relativa: fisica-clasica/mecanica/cinematica/magnitudes-cinematicas\r
orden: 211050\r
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
icon: ⚙️\r
descripcion: Magnitudes físicas fundamentales para describir la posición, el cambio\r
  de posición y la evolución temporal del movimiento.\r
description_en: Fundamental physical quantities to describe position, change of position,\r
  and the temporal evolution of motion.\r
tags:\r
  es:\r
  - cinematica\r
  - posicion\r
  - desplazamiento\r
  - velocidad\r
  - aceleracion\r
  - tiempo\r
  en:\r
  - kinematics\r
  - position\r
  - displacement\r
  - velocity\r
  - acceleration\r
  - time\r
prerequisitos:\r
- fundamentos/magnitudes-y-unidades\r
- fundamentos/sistemas-de-referencia\r
graficos:\r
- Coord\r
physical_role:\r
  es: magnitud física\r
  en: physical quantity\r
dificultad: 1\r
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
pregunta_fisica_central:\r
  es: ¿Qué magnitudes permiten describir de forma completa la posición y la evolución\r
    temporal de un movimiento?\r
  en: Which quantities allow a complete description of position and the time evolution\r
    of motion?\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad\r
`;export{n as default};
