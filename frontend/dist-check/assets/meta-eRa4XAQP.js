const r=`id: calculo-del-torque\r
nombre:\r
  es: Cálculo del Torque\r
  en: Calculating Torque\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: torque-momento\r
ruta_relativa: fisica-clasica/mecanica/rotacion/dinamica/torque-momento/calculo-del-torque
orden: 212412\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  - EXTRACURRICULAR\r
  en:\r
  - Upper Secondary\r
  - Extracurricular\r
icon: 🔧\r
descripcion: 'Subtema: Cálculo del Torque. Teoría, fórmulas, ejemplos y aplicaciones.'\r
description_en: 'Subtopic: Calculating Torque. Theory, formulas, examples, and applications.'\r
tags:\r
  es:\r
  - torque\r
  - calculo\r
  - brazo-de-palanca\r
  - rotacion\r
  - dinamica\r
  en:\r
  - torque\r
  - calculation\r
  - lever-arm\r
  - rotation\r
  - dynamics\r
pregunta_fisica_central:\r
  es: ¿Cómo se calcula el torque tau producido por una fuerza F a partir de r, theta,\r
    b, F_x y F_y?\r
  en: How is the torque tau calculated from a force F using r, theta, b, F_x, and\r
    F_y?\r
representacion_dominante: Coord\r
magnitud_dominante: tau\r
prerequisitos:\r
- definicion-torque\r
- producto-vectorial\r
graficos:\r
- Coord\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
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
titulo: Cálculo del Torque\r
titulo_en: Calculating Torque\r
`;export{r as default};
