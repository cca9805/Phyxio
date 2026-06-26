const e=`id: coeficiente-de-restitucion\r
nombre:\r
  es: Coeficiente de restitucion\r
  en: Coefficient of Restitution\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: colisiones\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion\r
orden: 215236\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  - EXTRACURRICULAR\r
  en:\r
  - Upper Secondary\r
  - University\r
  - Extracurricular\r
icon: 📏\r
descripcion: Parámetro que mide la fracción de velocidad relativa normal recuperada\r
  tras el impacto.\r
description_en: Parameter that measures the fraction of normal relative speed recovered\r
  after impact.\r
tags:\r
  es:\r
  - coeficiente-de-restitucion\r
  - impacto\r
  - velocidad-relativa\r
  - modelo-de-colision\r
  - colisiones\r
  - mecanica\r
  en:\r
  - coefficient-of-restitution\r
  - impact\r
  - relative-speed\r
  - collision-model\r
  - collisions\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas\r
pregunta_fisica_central:\r
  es: "¿Qué fracción de la velocidad relativa normal se recupera tras el choque?"\r
  en: "What fraction of the normal relative speed is recovered after the collision?"\r
graficos:
- Coord
representacion_dominante: Coord
magnitud_dominante: coeficiente de restitución\r
physical_role:\r
  es: parámetro de modelo\r
  en: model parameter\r
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
