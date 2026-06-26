const e=`id: marco-del-centro-de-masas-en-colisiones\r
nombre:\r
  es: Marco del centro de masas en colisiones\r
  en: Center-of-Mass Frame in Collisions\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: colisiones\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/marco-del-centro-de-masas-en-colisiones\r
orden: 215237\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  - EXTRACURRICULAR\r
  en:\r
  - University\r
  - Extracurricular\r
icon: 🗺\r
descripcion: Cambio de marco que convierte colisiones de dos cuerpos en problemas\r
  geométricamente más simples.\r
description_en: Frame change that turns two-body collisions into geometrically simpler\r
  problems.\r
tags:\r
  es:\r
  - marco-centro-de-masas\r
  - colisiones\r
  - referencia\r
  - simplificacion\r
  - momento-lineal\r
  - mecanica\r
  en:\r
  - center-of-mass-frame\r
  - collisions\r
  - reference-frame\r
  - simplification\r
  - linear-momentum\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-2d\r
- fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/marco-del-centro-de-masas\r
pregunta_fisica_central:\r
  es: "¿Por qué el análisis de colisiones es más simétrico en el marco del centro de masas?"\r
  en: "Why is the collision analysis more symmetric in the center-of-mass frame?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad en marco CM\r
physical_role:\r
  es: marco de referencia\r
  en: reference frame\r
dificultad: 4\r
tiempo_estimado_min: 60\r
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
