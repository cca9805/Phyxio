const n=`id: pendulo-fisico\r
nombre:\r
  es: Pendulo fisico\r
  en: Physical Pendulum\r
titulo:\r
  es: Pendulo fisico\r
  en: Physical Pendulum\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: oscilaciones\r
parent_id: oscilaciones\r
ruta_relativa: fisica-clasica/mecanica/oscilaciones/pendulo-fisico\r
orden: 217500\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 📌\r
descripcion: Oscilaciones de un cuerpo rigido alrededor de eje fijo con aproximacion de angulos pequenos.\r
description_en: Oscillations of a rigid body about a fixed axis using the small-angle approximation.\r
pregunta_fisica_central:\r
  es: "¿Como controlan la inercia y la geometria el periodo y la respuesta angular de un pendulo fisico?"\r
  en: "How do inertia and geometry control period and angular response in a physical pendulum?"\r
tags:\r
  es:\r
  - pendulo\r
  - oscilaciones\r
  - inercia\r
  - periodo\r
  - rotacion\r
  - rigido\r
  en:\r
  - pendulum\r
  - oscillations\r
  - inertia\r
  - period\r
  - rotation\r
  - rigid-body\r
prerequisitos:\r
- fisica-clasica/mecanica/oscilaciones/pendulo-simple\r
- fisica-clasica/mecanica/dinamica/dinamica-rotacional/torque-momento/definicion-torque\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: T\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 3\r
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
`;export{n as default};
