const e=`id: sistemas-inerciales\r
nombre:\r
  es: Sistemas inerciales\r
  en: Inertial Frames\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: sistemas-de-referencia\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/sistemas-inerciales\r
orden: 212121\r
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
icon: 📘\r
descripcion: Un sistema de referencia inercial es aquel en el que se cumplen las leyes\r
  de Newton sin necesidad de introducir.\r
description_en: An inertial reference frame is one where Newton's laws hold without\r
  introducing fictitious forces. They are non-accelerated frames where spa\r
tags:\r
  es: [sistemas inerciales, primera ley newton, relatividad galileana, principio inercia, marco inercial]\r
  en: [inertial frames, newtons first law, galilean relativity, principle of inertia, inertial reference]\r
pregunta_fisica_central:\r
  es: ¿Qué condición de fuerzas y movimiento identifica un sistema de referencia como inercial y garantiza que la primera ley de Newton se cumple sin fuerzas ficticias?\r
  en: What force and motion condition identifies a reference frame as inertial and guarantees that Newton's first law holds without fictitious forces?\r
representacion_dominante: Dcl\r
magnitud_dominante: F_neta\r
prerequisitos:\r
- fundamentos/conceptos-estructurales/estado-del-sistema\r
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez\r
- fundamentos/conceptos-estructurales/fuerza-neta-y-resultante\r
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/primera-ley-inercia\r
graficos:\r
- Dcl\r
- Svg\r
physical_role:\r
  es: marco de referencia\r
  en: reference frame\r
dificultad: 3\r
tiempo_estimado_min: 40\r
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
    preferred_type: Dcl\r
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
