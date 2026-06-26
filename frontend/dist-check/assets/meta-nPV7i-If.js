const e=`version: 1\r
id: ejemplos-tipicos\r
nombre:\r
  es: Ejemplos tipicos\r
  en: Typical Examples\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/fuerza-centripeta/ejemplos-tipicos\r
parent_id: fuerza-centripeta\r
type: leaf\r
orden: 212262\r
dificultad: 3\r
niveles:\r
  es:\r
    - ESO\r
    - BACHILLERATO\r
  en:\r
    - Secondary\r
    - Upper Secondary\r
prerequisitos:\r
  - fisica-clasica/mecanica/dinamica/fuerzas/fuerza-centripeta/concepto-fuerza-centripeta\r
descripcion: Ejemplos radiales en curva plana, peralte, loop y orbita.\r
description_en: Radial examples on flat curve, banking, loop and orbit.\r
tags:\r
  es:\r
    - dinamica\r
    - fuerzas\r
    - centripeta\r
    - movimiento-circular\r
    - ejemplos\r
  en:\r
    - dynamics\r
    - forces\r
    - centripetal\r
    - circular-motion\r
    - examples\r
objetivos:\r
  - es: Identificar la fuerza real que aporta la componente radial.\r
    en: Identify the real force providing the radial component.\r
  - es: Resolver problemas con la segunda ley de Newton radial.\r
    en: Solve problems using Newton radial second law.\r
tiempo_estimado_min: 70
pregunta_fisica_central:
  es: "¿Que fuerza real o que componente de fuerza aporta la resultante radial en los casos tipicos de movimiento circular?"
  en: "Which real force or force component provides the radial resultant in typical circular-motion problems?"
representacion_dominante: Coord
magnitud_dominante: Frad
graficos:\r
  - Coord\r
titulo:\r
  es: Ejemplos tipicos\r
  en: Typical Examples\r
icon: "\\U0001FAA2"\r
physical_role:\r
  es: "fenómeno físico"\r
  en: "physical phenomenon"\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: false\r
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
    show_warnings: true\r
    show_likely_errors: true\r
    max_inline_messages: 3\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true
`;export{e as default};
