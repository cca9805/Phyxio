const n=`id: colisiones-totalmente-inelasticas\r
nombre:\r
  es: Colisiones totalmente inelasticas\r
  en: Perfectly Inelastic Collisions\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: colisiones\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-totalmente-inelasticas\r
orden: 215233\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 🛑\r
descripcion: Choques con unión posterior de cuerpos y máxima pérdida de energía cinética compatible.\r
description_en: Collisions where bodies stick together and kinetic-energy loss is maximal.\r
tags:\r
  es:\r
  - colisiones-totalmente-inelasticas\r
  - conservacion-del-momento\r
  - union-de-cuerpos\r
  - choques\r
  - colisiones\r
  - mecanica\r
  en:\r
  - perfectly-inelastic-collisions\r
  - momentum-conservation\r
  - sticking-bodies\r
  - impacts\r
  - collisions\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-inelasticas\r
pregunta_fisica_central:\r
  es: "¿Cuál es la velocidad final cuando dos cuerpos quedan unidos tras el choque?"\r
  en: "What is the final velocity when two bodies stick together after the collision?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: vf\r
physical_role:\r
  es: fenómeno físico\r
  en: physical phenomenon\r
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
`;export{n as default};
