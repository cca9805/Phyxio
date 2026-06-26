const e=`id: ecuacion-del-cohete\r
nombre:\r
  es: Ecuacion del cohete\r
  en: Rocket Equation\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: sistemas-de-masa-variable\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/sistemas-de-masa-variable/ecuacion-del-cohete\r
orden: 215420\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  - EXTRACURRICULAR\r
  en:\r
  - University\r
  - Extracurricular\r
icon: 🚀\r
descripcion: Modelo de propulsión que vincula masa variable, velocidad de eyección\r
  y cambio de velocidad.\r
description_en: Propulsion model linking variable mass, exhaust speed, and velocity\r
  change.\r
tags:\r
  es:\r
  - ecuacion-del-cohete\r
  - masa-variable\r
  - propulsion\r
  - velocidad-de-eyeccion\r
  - momento\r
  en:\r
  - rocket-equation\r
  - variable-mass\r
  - propulsion\r
  - exhaust-speed\r
  - momentum\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/sistemas-de-masa-variable/balance-de-momento-con-flujo-de-masa\r
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/impulso\r
pregunta_fisica_central:\r
  es: "¿Cómo se vinculan masa variable, velocidad de eyección y cambio de velocidad en un cohete?"\r
  en: "How are variable mass, exhaust speed, and velocity change linked in a rocket?"\r
graficos:
- Coord
- Svg
representacion_dominante: Coord
magnitud_dominante: velocidad del cohete\r
physical_role:\r
  es: modelo fisico\r
  en: physical model\r
dificultad: 4\r
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
  mini_graph:
    enabled: true
    preferred_type: Svg
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{e as default};
