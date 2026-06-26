const e=`id: velocidad-relativa\r
nombre:\r
  es: Velocidad relativa\r
  en: Relative Velocity\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: movimiento-relativo\r
ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-relativo/velocidad-relativa\r
orden: 211420\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  en:\r
  - University\r
icon: 🧮\r
descripcion: Composición galileana de velocidades y transformación entre sistemas\r
  inerciales para describir el movimiento desde distintos observadores.\r
description_en: Galilean velocity composition and transformation between inertial\r
  systems to describe motion from different observers.\r
tags:\r
  es:\r
  - cinematica\r
  - composicion-velocidades\r
  - galileo\r
  - observador\r
  - vectores\r
  en:\r
  - kinematics\r
  - velocity-composition\r
  - galileo\r
  - observer\r
  - vectors\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/movimiento-relativo/sistemas-referencia\r
graficos:\r
- Coord\r
- Svg\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 2\r
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
pregunta_fisica_central:\r
  es: ¿Cómo se compone la velocidad observada cuando dos sistemas inerciales se mueven\r
    entre sí?\r
  en: How is observed velocity composed when two inertial frames move with respect\r
    to each other?\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad-relativa\r
`;export{e as default};
