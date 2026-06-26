const n=`version: 5\r
id: pendulo-simple\r
type: leaf\r
nombre:\r
  es: Pendulo simple\r
  en: Simple Pendulum\r
titulo:\r
  es: Pendulo simple\r
  en: Simple Pendulum\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: oscilaciones\r
parent_id: oscilaciones\r
ruta_relativa: fisica-clasica/mecanica/oscilaciones/pendulo-simple\r
orden: 217300\r
dificultad: 2\r
tiempo_estimado_min: 60\r
icon: "⚙️"\r
descripcion: Oscilación de masa puntual con ángulos pequeños.\r
description_en: Small-angle oscillation of a point mass.\r
tags:\r
  es:\r
  - oscilaciones\r
  - pendulo\r
  - periodo\r
  - pequenos-angulos\r
  en:\r
  - oscillations\r
  - pendulum\r
  - period\r
  - small-angles\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/fuerzas/peso/definicion-y-expresion\r
- fisica-clasica/mecanica/dinamica/fuerzas/segunda-ley-newton\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: T\r
pregunta_fisica_central:\r
  es: "¿Cómo dependen el periodo y la frecuencia de la longitud y la gravedad en un péndulo simple?"\r
  en: "How do period and frequency depend on length and gravity in a simple pendulum?"\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretación\r
      en: Interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
    x_axis: L\r
    y_axis: T\r
  output_policy:\r
    show_summary_first: true\r
    show_warnings: true\r
    show_likely_errors: true\r
    require_units: true\r
    require_domain_check: true\r
    require_graph_link: true\r
    max_inline_messages: 4\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{n as default};
