const n=`id: interpretacion\r
nombre:\r
  es: Interpretacion\r
  en: Interpretation of Fictitious Forces\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: fuerzas-ficticias\r
ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerzas-ficticias/interpretacion\r
orden: 212612\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  en:\r
  - University\r
icon: 🔄\r
descripcion: 'Subtema centrado en criterio fisico de interpretacion: como distinguir\r
  efectos de marco, usar signos correctos y evitar mezclar ecuaciones d'\r
description_en: Interpreting Fictitious Forces. Conceptual overview, key equations,\r
  solved examples, and practical applications.\r
tags:
  es:
  - dinamica
  - interpretacion
  - marcos-no-inerciales
  - fuerzas-ficticias
  en:
  - dynamics
  - interpretation
  - non-inertial-frames
  - fictitious-forces
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerzas-ficticias/concepto-fuerzas-ficticias\r
graficos:
- Dcl
- Svg
pregunta_fisica_central:
  es: "¿Como interpretar a_in, a_rel y a_marco sin mezclar marcos al aplicar las ecuaciones de movimiento?"
  en: "How should a_in, a_rel, and a_marco be interpreted without mixing frames when applying the equations of motion?"
representacion_dominante: Dcl
magnitud_dominante: a_in
physical_role:
  es: marco de referencia
  en: reference frame
dificultad: 3\r
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
    preferred_type: Dcl\r
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
