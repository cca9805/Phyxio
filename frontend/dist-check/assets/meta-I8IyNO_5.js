const n=`id: analisis-grafico-del-movimiento\r
nombre:\r
  es: Analisis grafico del movimiento\r
  en: Graphical Analysis of Motion\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: cinematica\r
ruta_relativa: fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento\r
orden: 211060\r
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
icon: 📊\r
descripcion: Interpretación técnica del movimiento mediante diagramas posición-tiempo, velocidad-tiempo y aceleración-tiempo en contextos cinemáticos.\r
description_en: Technical interpretation of motion using position–time, velocity–time, and acceleration–time diagrams in kinematic contexts.\r
pregunta_fisica_central:\r
  es: "¿Cómo se extraen posición, velocidad y aceleración a partir de las pendientes y áreas de gráficas cinemáticas?"\r
  en: "How are position, velocity, and acceleration extracted from the slopes and areas of kinematic graphs?"\r
tags:\r
  es:\r
  - cinemática\r
  - gráficas\r
  - movimiento\r
  - interpretación\r
  - método\r
  - representación\r
  en:\r
  - kinematics\r
  - graphs\r
  - motion\r
  - interpretation\r
  - method\r
  - representation\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/magnitudes-cinematicas\r
- fundamentos/sistemas-de-referencia\r
graficos:
- Coord
representacion_dominante: Coord\r
magnitud_dominante: velocidad\r
physical_role:\r
  es: método de representación e interpretación física\r
  en: physical representation and interpretation method\r
dificultad: 3\r
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
`;export{n as default};
