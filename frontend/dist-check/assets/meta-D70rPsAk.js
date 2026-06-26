const e=`area: fisica-clasica\r
bloque: mecanica\r
descripcion: Rigidez equivalente en serie y paralelo con reparto interno.\r
description_en: Equivalent stiffness in series and parallel with internal distribution.\r
dificultad: 3\r
graficos:\r
- Coord\r
- Dcl\r
- Svg\r
icon: 🔄\r
id: sistemas-con-muelles\r
interpretacion:\r
  archivo: interpretacion.yaml\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
  enabled: true\r
  mini_graph:
    enabled: false
    preferred_type: Coord
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
magnitud_dominante: keq\r
niveles:\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
nombre:\r
  en: Spring Systems\r
  es: Sistemas con muelles\r
orden: 212252\r
parent_id: fuerza-elastica\r
physical_role:\r
  en: physical model\r
  es: modelo físico\r
pregunta_fisica_central:\r
  en: How does the equivalent stiffness of a spring system change when springs are\r
    connected in series or in parallel, and how is deformation or force distributed\r
    internally?\r
  es: ¿Como cambia la rigidez equivalente de un sistema con muelles cuando se conectan\r
    en serie o en paralelo, y como se reparte internamente la deformacion o la fuerza??\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/fuerzas/fuerza-elastica/ley-de-hooke\r
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa\r
representacion_dominante: Coord\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/fuerza-elastica/sistemas-con-muelles\r
subbloque: dinamica\r
tags:\r
  en:\r
  - springs\r
  - series\r
  - parallel\r
  - equivalent stiffness\r
  - internal distribution\r
  es:\r
  - muelles\r
  - serie\r
  - paralelo\r
  - rigidez equivalente\r
  - reparto interno\r
tiempo_estimado_min: 75\r
type: leaf\r
`;export{e as default};
