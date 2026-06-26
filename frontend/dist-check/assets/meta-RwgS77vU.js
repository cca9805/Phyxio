const n=`id: encuentros-y-persecuciones\r
nombre:\r
  es: Encuentros y persecuciones\r
  en: Pursuit and Interception Problems\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: movimiento-relativo\r
ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-relativo/encuentros-y-persecuciones\r
orden: 211430\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  en:\r
  - University\r
icon: 🏎️\r
descripcion: Cálculo del punto y momento exacto de coincidencia espacio-temporal de\r
  dos o más cuerpos en movimiento.\r
description_en: Calculation of the exact point and moment of space-time coincidence\r
  for two or more moving bodies.\r
tags:\r
  es:\r
  - cinematica\r
  - encuentros\r
  - persecuciones\r
  - interceptacion\r
  - velocidad-relativa\r
  en:\r
  - kinematics\r
  - meetings\r
  - pursuit\r
  - interception\r
  - relative-velocity\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mru\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mrua\r
- fisica-clasica/mecanica/cinematica/movimiento-relativo/velocidad-relativa\r
graficos:\r
- Coord\r
- Svg\r
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
  es: ¿Qué condición cinemática permite predecir el instante y la posición de encuentro\r
    entre móviles distintos?\r
  en: Which kinematic condition predicts the meeting time and position between different\r
    moving bodies?\r
representacion_dominante: Coord\r
magnitud_dominante: tiempo\r
`;export{n as default};
