const e=`id: sistemas-referencia\r
nombre:\r
  es: Sistemas referencia\r
  en: Reference Frames\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: movimiento-relativo\r
ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-relativo/sistemas-referencia\r
orden: 211410\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  en:\r
  - University\r
icon: 🧭\r
descripcion: Definición de observadores y marcos de referencia para la descripción\r
  objetiva de estados de movimiento.\r
description_en: Definition of observers and reference frames for the objective description\r
  of motion states.\r
tags:\r
  es:\r
  - cinematica\r
  - observador\r
  - inercial\r
  - coordenadas\r
  - galileo\r
  en:\r
  - kinematics\r
  - observer\r
  - inertial\r
  - coordinates\r
  - galileo\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/magnitudes-cinematicas\r
graficos:\r
- Coord\r
- Svg\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
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
  es: ¿Cómo cambia la descripción del movimiento cuando se cambia de observador o\r
    de sistema de referencia?\r
  en: How does the description of motion change when the observer or reference frame\r
    changes?\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad\r
`;export{e as default};
