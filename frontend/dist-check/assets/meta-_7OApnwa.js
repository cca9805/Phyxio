const n=`id: colisiones-elasticas\r
nombre:\r
  es: Colisiones elasticas\r
  en: Elastic Collisions\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: colisiones\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas\r
orden: 215231\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 🔫\r
descripcion: Choques que conservan momento lineal y energía cinética dentro de un modelo ideal.\r
description_en: Collisions that conserve linear momentum and kinetic energy within an ideal model.\r
tags:\r
  es:\r
  - colisiones-elasticas\r
  - conservacion-del-momento\r
  - energia-cinetica\r
  - choques\r
  - colisiones\r
  - mecanica\r
  en:\r
  - elastic-collisions\r
  - momentum-conservation\r
  - kinetic-energy\r
  - impacts\r
  - collisions\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion\r
- fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/sistemas-aislados-y-fuerzas-externas\r
pregunta_fisica_central:\r
  es: "¿Qué condiciones cumplen las velocidades finales cuando se conservan momento y energía cinética?"\r
  en: "What conditions do the final velocities satisfy when both momentum and kinetic energy are conserved?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: v1f\r
physical_role:\r
  es: fenómeno físico\r
  en: physical phenomenon\r
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
