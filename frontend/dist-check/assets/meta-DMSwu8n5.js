const n=`id: normal-en-planos\r
nombre:\r
  es: Normal en planos\r
  en: Normal Force on Inclined Planes\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: normal\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/normal/normal-en-planos\r
orden: 212221\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  en:\r
  - Secondary\r
icon: 🧪\r
descripcion: La fuerza normal es la reaccion de contacto perpendicular a la superficie.
  Su valor depende del balance perpendicular al plano.
description_en: Normal force on planes from perpendicular balance and contact conditions.
tags:
  es:
  - dinamica
  - fuerza normal
  - plano inclinado
  - contacto
  - balance perpendicular
  en:
  - dynamics
  - normal force
  - inclined plane
  - contact
  - perpendicular balance
prerequisitos:\r
- fundamentos/conceptos-estructurales/sistema-fisico\r
- fundamentos/conceptos-estructurales/estado-del-sistema\r
- fundamentos/conceptos-estructurales/interacciones-y-fuerzas\r
- fundamentos/conceptos-estructurales/fuerza-neta-y-resultante\r
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez\r
- fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/diagramas-cuerpo-libre\r
- fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/descomposicion-vectorial\r
- fisica-clasica/mecanica/dinamica/fuerzas/peso/definicion-y-expresion\r
graficos:\r
- Coord\r
- Dcl\r
physical_role:
  es: modelo físico
  en: physical model
dificultad: 2
tiempo_estimado_min: 60
pregunta_fisica_central:
  es: ¿Como determina la geometria del plano la fuerza normal?
  en: How does plane geometry determine the normal force?
representacion_dominante: Coord
magnitud_dominante: N
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
