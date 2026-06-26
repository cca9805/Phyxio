const e=`id: segunda-ley-fuerza-masa\r
nombre:\r
  es: Segunda ley fuerza masa\r
  en: Newton's Second Law (Force, Mass, and Acceleration)\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: leyes-de-newton\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa\r
orden: 212112\r
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
icon: 🧪\r
descripcion: Relación entre fuerza neta, masa y aceleración del sistema.\r
description_en: Relation between net force, mass, and system acceleration.\r
tags:\r
  es:\r
  - segunda ley\r
  - fuerza neta\r
  - aceleración\r
  - dinámica\r
  - newton\r
  en:\r
  - second law\r
  - net force\r
  - acceleration\r
  - dynamics\r
  - newton\r
pregunta_fisica_central:\r
  es: ¿Cómo determina la fuerza neta la aceleración de un cuerpo de masa m?\r
  en: How does the net force determine the acceleration of a body with mass m?\r
representacion_dominante: Coord\r
magnitud_dominante: F_net\r
prerequisitos:\r
- fundamentos/conceptos-estructurales/interacciones-y-fuerzas\r
- fundamentos/conceptos-estructurales/fuerza-neta-y-resultante\r
graficos:\r
- Coord\r
- Dcl\r
physical_role:\r
  es: ley física\r
  en: physical law\r
dificultad: 2\r
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
