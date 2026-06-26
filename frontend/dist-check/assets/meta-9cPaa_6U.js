const n=`id: centro-de-masas-en-cuerpos-extendidos\r
nombre:\r
  es: Centro de masas en cuerpos extendidos\r
  en: Center of Mass in Extended Bodies\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: centro-de-masas\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/centro-de-masas-en-cuerpos-extendidos\r
orden: 215223\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Upper Secondary\r
  - University\r
icon: 🧮\r
descripcion: Extensión del centro de masas a barras, láminas y cuerpos con distribución\r
  continua de masa.\r
description_en: Extension of the center of mass to rods, laminae, and bodies with\r
  continuous mass distribution.\r
tags:\r
  es:\r
  - centro-de-masas\r
  - cuerpos-extendidos\r
  - distribucion-continua\r
  - densidad-variable\r
  - integracion\r
  en:\r
  - center-of-mass\r
  - extended-bodies\r
  - continuous-distribution\r
  - variable-density\r
  - integration\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/definicion-centro-de-masas\r
pregunta_fisica_central:\r
  es: "¿Cómo se localiza el centro de masas cuando la masa se distribuye de forma continua?"\r
  en: "How is the center of mass located when mass is continuously distributed?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: posición del centro de masas\r
physical_role:\r
  es: magnitud física\r
  en: physical quantity\r
dificultad: 3\r
tiempo_estimado_min: 35\r
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
