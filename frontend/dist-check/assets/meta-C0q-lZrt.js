const n=`id: cinematica-rotacional\r
nombre:\r
  es: Cinematica rotacional\r
  en: Rotational Kinematics\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: fundamentos\r
ruta_relativa: fisica-clasica/mecanica/rotacion/fundamentos/cinematica-rotacional\r
orden: 211320\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  en:\r
  - Upper Secondary\r
icon: 🛞\r
descripcion: Modelo cinemático que describe el cambio de posición angular mediante\r
  las ecuaciones análogas al movimiento rectilíneo.\r
description_en: Kinematic model describing angular position changes through equations\r
  analogous to rectilinear motion.\r
tags:\r
  es:\r
  - rotacion\r
  - cinematica\r
  - mcu\r
  - mcua\r
  - ecuaciones\r
  en:\r
  - rotation\r
  - kinematics\r
  - ucm\r
  - ucam\r
  - equations\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/rotacion/magnitudes-angulares\r
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
  es: ¿Cómo se escriben y se interpretan las ecuaciones angulares análogas al MRU\r
    y al MRUA?\r
  en: How are the angular equations analogous to uniform and uniformly accelerated\r
    motion written and interpreted?\r
representacion_dominante: Coord\r
magnitud_dominante: posicion-angular\r
bloque_en: Rotation\r
subbloque_en: Rotation Fundamentals\r
titulo: Cinematica rotacional\r
titulo_en: Rotational Kinematics\r
`;export{n as default};
