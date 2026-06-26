const n=`id: mrua\r
nombre:\r
  es: Mrua\r
  en: Motion with Constant Acceleration\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: movimiento-rectilineo\r
ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mrua\r
orden: 211120\r
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
icon: 📈\r
descripcion: Modelo cinemático que describe el movimiento en línea recta con aceleración\r
  constante y cambio uniforme de velocidad.\r
description_en: Kinematic model describing straight-line motion with constant acceleration\r
  and uniform change in velocity.\r
tags:\r
  es:\r
  - cinematica\r
  - mrua\r
  - aceleracion-constante\r
  - una-dimension\r
  en:\r
  - kinematics\r
  - uniformly-accelerated-motion\r
  - constant-acceleration\r
  - one-dimension\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mru\r
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez\r
graficos:\r
- Coord\r
physical_role:\r
  es: fenómeno físico\r
  en: physical phenomenon\r
dificultad: 3\r
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
  es: ¿Cómo se conectan posición, velocidad y aceleración cuando el movimiento rectilíneo\r
    mantiene aceleración constante?\r
  en: How are position, velocity, and acceleration connected when straight-line motion\r
    has constant acceleration?\r
representacion_dominante: Coord\r
magnitud_dominante: aceleracion\r
`;export{n as default};
