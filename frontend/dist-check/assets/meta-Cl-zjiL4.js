const n=`version: 5
id: principio-de-pascal
parent_id: estatica-de-fluidos
type: leaf
orden: 218230
icon: 💧
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
ruta_relativa: fisica-clasica/mecanica/fluidos/estatica-de-fluidos/principio-de-pascal
nombre:
  es: Principio de pascal
  en: Pascal's Principle
physical_role:
  es: concepto físico
  en: physical concept
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD]
  en: [Secondary, Upper Secondary, University]
descripcion: Transmisión de presión en fluidos confinados.
description_en: Transmission of pressure in confined fluids.
pregunta_fisica_central:
  es: ¿Cómo se transmite la presión a través de un fluido confinado y cómo permite multiplicar fuerzas?
  en: How is pressure transmitted through a confined fluid and how does it allow force multiplication?
representacion_dominante: Coord
magnitud_dominante: F2
dificultad: 2
tiempo_estimado_min: 55
tags:
  es: [presion, pascal, prensa-hidraulica, fluidos, transmision]
  en: [pressure, pascal, hydraulic-press, fluids, transmission]
prerequisitos:
  - fisica-clasica/mecanica/fluidos/fundamentos/presion
graficos: [Coord, Svg, Dcl]
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Análisis Hidráulico
      en: Hydraulic Analysis
  mini_graph:
    enabled: true
    preferred_type: Svg
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
