const n=`id: colisiones-inelasticas\r
nombre:\r
  es: Colisiones inelasticas\r
  en: Inelastic Collisions\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: colisiones\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-inelasticas\r
orden: 215232\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 💥\r
descripcion: Choques que conservan momento lineal pero disipan parte de la energía cinética.\r
description_en: Collisions that conserve linear momentum but dissipate part of the kinetic energy.\r
tags:\r
  es:\r
  - colisiones-inelasticas\r
  - conservacion-del-momento\r
  - disipacion\r
  - choques\r
  - colisiones\r
  - mecanica\r
  en:\r
  - inelastic-collisions\r
  - momentum-conservation\r
  - dissipation\r
  - impacts\r
  - collisions\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion\r
- fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/sistemas-aislados-y-fuerzas-externas\r
pregunta_fisica_central:\r
  es: "¿Cuánta energía cinética se pierde en un choque que conserva momento pero no energía?"\r
  en: "How much kinetic energy is lost in a collision that conserves momentum but not energy?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: DeltaK\r
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
