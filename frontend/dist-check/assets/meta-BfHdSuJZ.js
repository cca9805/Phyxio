const n=`id: momento-lineal\r
nombre:\r
  es: Momento lineal\r
  en: Linear Momentum\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: fundamentos\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal\r
orden: 215110\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 💪\r
descripcion: Magnitud vectorial que mide la dificultad para cambiar el estado de movimiento\r
  de un cuerpo.\r
description_en: Vector quantity that measures how hard it is to change a body's state\r
  of motion.\r
tags:\r
  es:\r
  - momento-lineal\r
  - cantidad-de-movimiento\r
  - dinamica\r
  - magnitud-vectorial\r
  - impulso\r
  en:\r
  - linear-momentum\r
  - momentum\r
  - dynamics\r
  - vector-quantity\r
  - impulse\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mru\r
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa\r
pregunta_fisica_central:\r
  es: "¿Qué magnitud vectorial mide la dificultad para cambiar el estado de movimiento de un cuerpo?"\r
  en: "What vector quantity measures how hard it is to change a body's state of motion?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: p\r
physical_role:\r
  es: magnitud física\r
  en: physical quantity\r
dificultad: 2\r
tiempo_estimado_min: 35\r
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
