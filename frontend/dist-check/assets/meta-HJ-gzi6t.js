const n=`id: tension-en-cuerdas-y-cables
nombre:
  es: Tension en cuerdas y cables
  en: Tension in Ropes and Cables
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: tension\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/tension/tension-en-cuerdas-y-cables\r
orden: 212241\r
type: leaf
niveles:
  es:
  - ESO
  - BACHILLERATO
  en:
  - Secondary
  - Upper Secondary
icon: 🔄
descripcion: Fuerza transmitida por cuerdas y cables ideales o casi ideales.
description_en: Force transmitted by ideal or nearly ideal ropes and cables.
tags:
  es:
    - dinamica
    - tension
    - cuerdas
    - cables
    - poleas
    - atwood
  en:
    - dynamics
    - tension
    - ropes
    - cables
    - pulleys
    - atwood
prerequisitos:
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
- fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/diagramas-cuerpo-libre
- fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/descomposicion-vectorial\r
- fisica-clasica/mecanica/dinamica/fuerzas/peso/definicion-y-expresion\r
- fisica-clasica/mecanica/dinamica/fuerzas/normal/normal-en-planos\r
graficos:
- Coord
- Dcl
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 2
tiempo_estimado_min: 60
pregunta_fisica_central:
  es: ¿Como se transmite, descompone y cambia la tension en una cuerda o cable segun el modelo usado?
  en: How is tension transmitted, decomposed, and changed along a rope or cable depending on the chosen model?
representacion_dominante: Coord
magnitud_dominante: T
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
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
