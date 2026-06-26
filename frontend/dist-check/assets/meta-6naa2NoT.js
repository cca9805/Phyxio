const n=`id: sistemas-aislados\r
nombre:\r
  es: Sistemas aislados\r
  en: Isolated Systems\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: fundamentos\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/sistemas-aislados\r
orden: 215130\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 📈\r
descripcion: Modelo de sistema con impulso externo despreciable, clave para conservar el momento total.\r
description_en: System model with negligible external impulse, essential for conserving total momentum.\r
tags:\r
  es:\r
  - sistemas-aislados\r
  - conservacion\r
  - impulso-externo\r
  - modelo-fisico\r
  - momento-total\r
  en:\r
  - isolated-systems\r
  - conservation\r
  - external-impulse\r
  - physical-model\r
  - total-momentum\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal\r
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/impulso\r
pregunta_fisica_central:\r
  es: "¿Qué condiciones debe cumplir un sistema para que su momento lineal total se conserve?"\r
  en: "What conditions must a system meet for its total linear momentum to be conserved?"\r
graficos:\r
- Svg\r
- Coord\r
representacion_dominante: Svg\r
magnitud_dominante: momento lineal total\r
physical_role:\r
  es: modelo físico\r
  en: physical model\r
dificultad: 2\r
tiempo_estimado_min: 40\r
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
