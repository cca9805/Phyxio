const n=`id: colisiones-2d\r
nombre:\r
  es: Colisiones 2d\r
  en: 2D Collisions\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: colisiones\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-2d\r
orden: 215235\r
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
icon: 📐\r
descripcion: Choques planos donde el momento se conserva por componentes y cambia\r
  la dirección final.\r
description_en: Planar collisions where momentum is conserved by components and the\r
  final direction changes.\r
tags:\r
  es:\r
  - colisiones-2d\r
  - conservacion-del-momento\r
  - componentes\r
  - dispersion-angular\r
  - colisiones\r
  - mecanica\r
  en:\r
  - two-dimensional-collisions\r
  - momentum-conservation\r
  - components\r
  - angular-scattering\r
  - collisions\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas\r
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal\r
pregunta_fisica_central:\r
  es: "¿Cómo se conserva el momento lineal por componentes en un choque bidimensional?"\r
  en: "How is linear momentum conserved by components in a two-dimensional collision?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad por componentes\r
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
