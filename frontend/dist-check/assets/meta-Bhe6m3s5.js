const n=`id: mru\r
nombre:\r
  es: Mru\r
  en: Uniform Rectilinear Motion\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: movimiento-rectilineo\r
ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mru\r
orden: 211110\r
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
icon: ➖\r
descripcion: Modelo cinemático fundamental caracterizado por una trayectoria rectilínea\r
  y velocidad constante en el tiempo.\r
description_en: Fundamental kinematic model characterized by a rectilinear path and\r
  constant velocity over time.\r
tags:\r
  es:\r
  - cinematica\r
  - mru\r
  - velocidad-constante\r
  - una-dimension\r
  en:\r
  - kinematics\r
  - uniform-rectilinear-motion\r
  - constant-velocity\r
  - one-dimension\r
prerequisitos:\r
- fundamentos/magnitudes-y-unidades\r
- fundamentos/sistemas-de-referencia\r
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez\r
graficos:\r
- Coord\r
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
  es: ¿Cómo se obtiene la posición de un móvil cuando su velocidad permanece constante\r
    en una trayectoria rectilínea?\r
  en: How can the position of an object be obtained when its velocity stays constant\r
    along a straight path?\r
representacion_dominante: Coord\r
magnitud_dominante: posicion\r
`;export{n as default};
