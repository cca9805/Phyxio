const n=`id: colision-con-pared\r
nombre:\r
  es: Colision con pared\r
  en: Collision with a Wall\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: colisiones\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colision-con-pared\r
orden: 215234\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  - EXTRACURRICULAR\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
  - Extracurricular\r
icon: 🧱\r
descripcion: Choque contra pared rígida, útil para signos, restitución e impulso normal.\r
description_en: Collision against a rigid wall, useful for signs, restitution, and\r
  normal impulse.\r
tags:\r
  es:\r
  - colision-con-pared\r
  - coeficiente-de-restitucion\r
  - impulso\r
  - choque-normal\r
  - colisiones\r
  - mecanica\r
  en:\r
  - wall-collision\r
  - coefficient-of-restitution\r
  - impulse\r
  - normal-impact\r
  - collisions\r
  - mechanics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas\r
- fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion\r
pregunta_fisica_central:\r
  es: "¿Cómo cambia el momento lineal de un objeto al chocar contra una pared rígida?"\r
  en: "How does an object's linear momentum change when it collides with a rigid wall?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad después del choque\r
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
