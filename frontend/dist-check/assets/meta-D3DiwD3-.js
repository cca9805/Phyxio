const r=`area: fisica-clasica\r
bloque: mecanica\r
descripcion: Casos resueltos de fuerza centrifuga con conversion desde rpm y comparacion\r
  entre escenarios.\r
description_en: Worked centrifugal-force cases with rpm conversion and cross-scenario\r
  comparison.\r
dificultad: 3\r
graficos:\r
- Coord\r
icon: ✅\r
id: ejemplos-fuerza-centrifuga\r
interpretacion:\r
  archivo: interpretacion.yaml\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
  enabled: true\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
  output_policy:\r
    max_inline_messages: 3\r
    show_likely_errors: true\r
    show_summary_first: true\r
    show_warnings: true\r
  ui:\r
    dedicated_tab: true\r
    inline_calculator: true\r
    inline_graph: true\r
    tab_label:\r
      en: Interpretation\r
      es: Interpretacion\r
magnitud_dominante: F_cf\r
niveles:\r
  en:\r
  - University\r
  es:\r
  - UNIVERSIDAD\r
nombre:\r
  en: Examples of Centrifugal Force\r
  es: Ejemplos fuerza centrifuga\r
orden: 212622\r
parent_id: fuerza-centrifuga\r
physical_role:\r
  en: reference frame\r
  es: marco de referencia\r
pregunta_fisica_central:\r
  en: How are centrifugal-force problems solved and compared when data are given in\r
    rpm, radius, or angular speed, and what changes physically when omega varies?\r
  es: ¿Como se resuelven y comparan problemas de fuerza centrifuga cuando los datos\r
    llegan en rpm, radio o velocidad angular, y que cambia fisicamente al variar omega??\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-centrifuga/definicion-fuerza-centrifuga\r
representacion_dominante: Coord\r
ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-centrifuga/ejemplos-fuerza-centrifuga\r
subbloque: dinamica\r
tags:\r
  en:\r
  - centrifugal force\r
  - rpm\r
  - angular conversion\r
  - worked problems\r
  - case comparison\r
  es:\r
  - fuerza centrifuga\r
  - rpm\r
  - conversion angular\r
  - problemas resueltos\r
  - comparacion de casos\r
tiempo_estimado_min: 45\r
type: leaf\r
`;export{r as default};
