const n=`version: 1\r
id: coeficiente-de-rozamiento\r
nombre:\r
  es: Coeficiente de rozamiento\r
  en: Coefficient of Friction\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: rozamiento\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/rozamiento/coeficiente-de-rozamiento\r
orden: 212233\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 🔄
descripcion: Parametro adimensional que relaciona la fuerza de rozamiento con la normal.
description_en: Dimensionless parameter that relates friction force to the normal force.
tags:\r
  es:\r
    - dinamica\r
    - rozamiento\r
    - coeficiente\r
    - plano-inclinado\r
    - fuerzas\r
    - experimental\r
  en:\r
    - dynamics\r
    - friction\r
    - coefficient\r
    - inclined-plane\r
    - forces\r
    - experimental\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/fuerzas/rozamiento/rozamiento-estatico\r
- fisica-clasica/mecanica/dinamica/fuerzas/rozamiento/rozamiento-dinamico\r
- fisica-clasica/mecanica/dinamica/fuerzas/normal/normal-en-planos\r
- fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/diagramas-cuerpo-libre\r
- fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/descomposicion-vectorial\r
graficos:\r
- Coord\r
- Dcl\r
physical_role:\r
  es: parámetro de modelo\r
  en: model parameter\r
dificultad: 2\r
tiempo_estimado_min: 55\r
pregunta_fisica_central:
  es: ¿Como se relacionan el rozamiento, la normal y el coeficiente de friccion?
  en: How are friction, normal force, and the friction coefficient related?
representacion_dominante: Coord
magnitud_dominante: mu_s
interpretacion:
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
