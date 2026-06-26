const e=`id: poleas-compuestas\r
nombre:\r
  es: Poleas compuestas\r
  en: Compound Pulleys\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: sistemas-de-varios-cuerpos\r
ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-traslacional/sistemas-de-varios-cuerpos/poleas-compuestas\r
orden: 212543\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
icon: 🔄\r
descripcion: 'Poleas compuestas: n y eta determinan la fuerza real necesaria para mover la carga W.'\r
description_en: 'Compound pulleys: n and eta determine the real force needed to move load W.'\r
tags:\r
  es:\r
  - polipasto\r
  - aparejo\r
  - ventaja-mecanica-compuesta\r
  - eficiencia-mecanica\r
  - fuerza-real\r
  en:\r
  - compound-pulley\r
  - tackle-system\r
  - mechanical-advantage\r
  - mechanical-efficiency\r
  - real-force\r
prerequisitos:\r
- poleas-simples\r
- leyes-de-newton\r
graficos:\r
- Svg\r
- Coord\r
physical_role:\r
  es: fenómeno físico\r
  en: physical phenomenon\r
pregunta_fisica_central:\r
  es: "¿Como determinan n y eta la fuerza real F_real necesaria para mover la carga W?"\r
  en: "How do n and eta determine the real force F_real needed to move load W?"\r
representacion_dominante: Svg\r
magnitud_dominante: F_real\r
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
