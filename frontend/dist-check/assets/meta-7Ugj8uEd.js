const r=`id: trabajo-y-torque\r
nombre:\r
  es: Trabajo y torque\r
  en: Work and Torque\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: energia\r
ruta_relativa: fisica-clasica/mecanica/rotacion/energia/trabajo-y-torque\r
orden: 214620\r
type: leaf\r
niveles:\r
  es: [BACHILLERATO, UNIVERSIDAD]\r
  en: [Upper Secondary, University]\r
icon: 🔨\r
descripcion: Relaciona torque, desplazamiento angular, trabajo rotacional y potencia.\r
description_en: Relates torque, angular displacement, rotational work, and power.\r
tags:\r
  es: [torque, trabajo, potencia, rotacion, energia]\r
  en: [torque, work, power, rotation, energy]\r
prerequisitos:\r
  - definicion-torque\r
  - energia-cinetica-rotacional\r
graficos:\r
  - Coord\r
physical_role:\r
  es: magnitud física\r
  en: physical quantity\r
dificultad: 3\r
tiempo_estimado_min: 45\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label: { es: Interpretación, en: Interpretation }\r
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
pregunta_fisica_central:\r
  es: ¿Cómo calcula el torque el trabajo rotacional y la potencia durante un giro?\r
  en: How does torque determine rotational work and power during a turn?\r
representacion_dominante: Coord\r
magnitud_dominante: W\r
titulo: Trabajo y torque\r
titulo_en: Work and Torque\r
`;export{r as default};
