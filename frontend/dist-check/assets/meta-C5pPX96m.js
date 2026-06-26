const n=`id: tiro-horizontal\r
nombre:\r
  es: Tiro horizontal\r
  en: Horizontal Projectile Motion\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: movimiento-en-dos-dimensiones\r
ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-en-dos-dimensiones/tiro-horizontal\r
orden: 211510\r
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
icon: ➡️\r
descripcion: Análisis del movimiento bidimensional resultante de proyectar un objeto\r
  horizontalmente bajo la influencia exclusiva de la gravedad.\r
description_en: Analysis of two-dimensional motion resulting from projecting an object\r
  horizontally under the exclusive influence of gravity.\r
tags:\r
  es:\r
  - cinematica\r
  - tiro-horizontal\r
  - movimiento-parabolico\r
  - caida-libre\r
  - alcance\r
  en:\r
  - kinematics\r
  - horizontal-launch\r
  - projectile-motion\r
  - free-fall\r
  - range\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mru\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad\r
- fundamentos/vectores-y-componentes\r
graficos:\r
- Coord\r
- Svg\r
physical_role:\r
  es: fenómeno físico\r
  en: physical phenomenon\r
dificultad: 2\r
tiempo_estimado_min: 45\r
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
  es: ¿Cómo se combinan la caída vertical y el avance horizontal para fijar el alcance\r
    y el tiempo de vuelo?\r
  en: How do vertical fall and horizontal advance combine to determine range and flight\r
    time?\r
representacion_dominante: Coord\r
magnitud_dominante: alcance\r
`;export{n as default};
