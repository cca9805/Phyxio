const e=`id: concepto-fuerzas-ficticias\r
nombre:\r
  es: Concepto fuerzas ficticias\r
  en: Concept of Fictitious Forces\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: fuerzas-ficticias\r
ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerzas-ficticias/concepto-fuerzas-ficticias\r
orden: 212611\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  en:\r
  - University\r
icon: 📘\r
descripcion: Subtema de dinamica sobre marcos no inerciales. Explica por que aparecen\r
  fuerzas ficticias en marcos acelerados y como se usan\r
description_en: Concept of Fictitious Forces. Conceptual overview, key equations,\r
  solved examples, and practical applications.\r
tags:
  es:
  - dinamica
  - marcos-no-inerciales
  - fuerzas-ficticias
  - sistemas-de-referencia
  - segunda-ley
  en:
  - dynamics
  - non-inertial-frames
  - fictitious-forces
  - reference-frames
  - second-law
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/sistemas-no-inerciales-intro\r
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa\r
graficos:
- Coord
- Svg
- Dcl
pregunta_fisica_central:
  es: "¿Por que aparecen fuerzas ficticias cuando describimos el movimiento desde un marco acelerado y como se relacionan con a_marco?"
  en: "Why do fictitious forces appear when motion is described from an accelerated frame and how are they related to a_marco?"
representacion_dominante: Coord
magnitud_dominante: F_fict
physical_role:
  es: marco de referencia
  en: reference frame
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
`;export{e as default};
