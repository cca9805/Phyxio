const r=`area: fisica-clasica\r
bloque: mecanica\r
descripcion: Subtema que define el termino de Coriolis en marcos rotatorios, sus condiciones\r
  de existencia y su direccion vectorial.\r
description_en: Definition of the Coriolis Force. Formula, direction, and domain of\r
  application.\r
dificultad: 4\r
graficos:\r
- Coord\r
- Svg\r
icon: 🧪\r
id: definicion-fuerza-coriolis\r
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
magnitud_dominante: fuerza de Coriolis\r
niveles:\r
  en:\r
  - University\r
  es:\r
  - UNIVERSIDAD\r
nombre:\r
  en: Definition of the Coriolis Force\r
  es: Definicion fuerza coriolis\r
orden: 212631\r
parent_id: fuerza-coriolis\r
physical_role:\r
  en: reference frame\r
  es: marco de referencia\r
pregunta_fisica_central:\r
  en: Which quantities fix the magnitude and direction of the Coriolis term in a rotating\r
    frame?\r
  es: ¿Que magnitudes fijan el modulo y la direccion del termino de Coriolis en un\r
    marco rotatorio??\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerzas-ficticias/concepto-fuerzas-ficticias\r
representacion_dominante: Coord\r
ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-coriolis/definicion-fuerza-coriolis\r
subbloque: dinamica\r
tags:\r
  en:\r
  - dynamics\r
  - non-inertial-frames\r
  - coriolis-force\r
  - rotating-frame\r
  - lateral-deflection\r
  es:\r
  - dinamica\r
  - marcos-no-inerciales\r
  - fuerza-coriolis\r
  - marco-rotatorio\r
  - desviacion-lateral\r
tiempo_estimado_min: 45\r
type: leaf\r
`;export{r as default};
