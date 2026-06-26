const n=`id: balance-de-momento-con-flujo-de-masa\r
nombre:\r
  es: Balance de momento con flujo de masa\r
  en: Momentum Balance with Mass Flow\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: sistemas-de-masa-variable\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/sistemas-de-masa-variable/balance-de-momento-con-flujo-de-masa\r
orden: 215410\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  - EXTRACURRICULAR\r
  en:\r
  - University\r
  - Extracurricular\r
icon: 🧮\r
descripcion: Ecuación de control que incorpora flujo de masa al balance de momento\r
  lineal.\r
description_en: Control equation that incorporates mass flow into the linear-momentum\r
  balance.\r
tags:\r
  es:\r
  - masa-variable\r
  - balance-de-momento\r
  - flujo-de-masa\r
  - volumen-de-control\r
  - sistemas-abiertos\r
  en:\r
  - variable-mass\r
  - momentum-balance\r
  - mass-flow\r
  - control-volume\r
  - open-systems\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/sistemas-aislados-y-fuerzas-externas\r
- fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion\r
pregunta_fisica_central:\r
  es: "¿Cómo modifica un flujo de masa el balance de momento lineal del sistema?"\r
  en: "How does a mass flow modify the linear-momentum balance of the system?"\r
graficos:
- Coord
- Svg
representacion_dominante: Coord
magnitud_dominante: tasa de cambio de momento\r
physical_role:\r
  es: ecuacion de balance\r
  en: balance equation\r
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
`;export{n as default};
