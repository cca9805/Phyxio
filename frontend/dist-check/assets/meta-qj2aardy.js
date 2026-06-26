const n=`id: relacion-lineal-angular\r
nombre:\r
  es: Relacion lineal angular\r
  en: Relationships Between Linear and Angular Quantities\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: fundamentos\r
ruta_relativa: fisica-clasica/mecanica/rotacion/fundamentos/relacion-lineal-angular\r
orden: 211330\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  en:\r
  - Upper Secondary\r
icon: 📏\r
descripcion: Conexión matemática y física entre magnitudes de arco y magnitudes de\r
  giro mediante el radio de curvatura.\r
description_en: Mathematical and physical connection between arc and angular quantities\r
  through the radius of curvature.\r
tags:\r
  es:\r
  - rotacion\r
  - radio\r
  - velocidad-tangencial\r
  - aceleracion-tangencial\r
  - aceleracion-normal\r
  en:\r
  - rotation\r
  - radius\r
  - tangential-velocity\r
  - tangential-acceleration\r
  - normal-acceleration\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/rotacion/magnitudes-angulares\r
graficos:\r
- Coord\r
physical_role:\r
  es: fenómeno físico\r
  en: physical phenomenon\r
dificultad: 3\r
tiempo_estimado_min: 45\r
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
pregunta_fisica_central:\r
  es: ¿Cómo conecta el radio las magnitudes lineales y angulares de un movimiento\r
    curvilíneo?\r
  en: How does the radius connect linear and angular quantities in curvilinear motion?\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad-tangencial\r
bloque_en: Rotation\r
subbloque_en: Rotation Fundamentals\r
titulo: Relacion lineal angular\r
titulo_en: Relationships Between Linear and Angular Quantities\r
`;export{n as default};
