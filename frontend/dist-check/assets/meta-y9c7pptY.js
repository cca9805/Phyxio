const n=`id: movimiento-vertical-bajo-gravedad\r
nombre:\r
  es: Movimiento vertical bajo gravedad\r
  en: Motion Vertical under Gravity\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: movimiento-rectilineo\r
ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad\r
orden: 211130\r
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
descripcion: Estudio cinemático del movimiento rectilíneo bajo la influencia exclusiva\r
  de la gravedad en caída libre y lanzamientos verticales.\r
description_en: Kinematic study of rectilinear motion under the exclusive influence\r
  of gravity in free fall and vertical launches.\r
tags:\r
  es:\r
  - caida-libre\r
  - tiro-vertical\r
  - gravedad\r
  - aceleracion-constante\r
  - mrua\r
  en:\r
  - free-fall\r
  - vertical-launch\r
  - gravity\r
  - constant-acceleration\r
  - uvam\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mrua\r
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez\r
graficos:\r
- Coord\r
- Svg\r
physical_role:\r
  es: fenómeno físico\r
  en: physical phenomenon\r
dificultad: 3\r
tiempo_estimado_min: 75\r
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
  es: ¿Cómo cambia la velocidad de un cuerpo cuando solo actúa la gravedad en caídas\r
    y lanzamientos verticales?\r
  en: How does the velocity of a body change when only gravity acts in falls and vertical\r
    launches?\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad\r
`;export{n as default};
