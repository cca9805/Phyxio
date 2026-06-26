const e=`area: fisica-clasica\r
bloque: mecanica\r
descripcion: Marco acelerado en el que aparecen fuerzas ficticias para escribir la\r
  dinamica con variables relativas.\r
description_en: Accelerated frame where fictitious forces must be added to write dynamics\r
  with relative variables.\r
dificultad: 3\r
graficos:\r
- Dcl\r
- Svg\r
icon: 🏃\r
id: sistemas-no-inerciales-intro\r
interpretacion:\r
  archivo: interpretacion.yaml\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
  enabled: true\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Dcl\r
  output_policy:\r
    max_inline_messages: 3\r
    show_likely_errors: true\r
    show_summary_first: true\r
    show_warnings: true\r
  ui:\r
    dedicated_tab: true\r
    inline_calculator: true\r
    inline_graph: true\r
    tab_label:\r
      en: Interpretation\r
      es: Interpretacion\r
magnitud_dominante: F_ficticia\r
niveles:\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
nombre:\r
  en: Introduction to Non-Inertial Frames\r
  es: Sistemas no inerciales intro\r
orden: 212122\r
parent_id: sistemas-de-referencia\r
physical_role:\r
  en: reference frame\r
  es: marco de referencia\r
pregunta_fisica_central:\r
  en: Which additional force must be introduced when describing a body from an accelerated\r
    frame, and how does the relation between F_real, F_ficticia, and a_rel change\r
    there?\r
  es: ¿Que fuerza adicional debe introducirse al describir un cuerpo desde un marco\r
    acelerado, y como cambia ahi la relacion entre F_real, F_ficticia y a_rel??\r
prerequisitos:\r
- fundamentos/conceptos-estructurales/estado-del-sistema\r
- fundamentos/conceptos-estructurales/fuerza-neta-y-resultante\r
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez\r
- fundamentos/conceptos-estructurales/interacciones-y-fuerzas\r
- fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/sistemas-inerciales\r
representacion_dominante: Dcl\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/sistemas-no-inerciales-intro\r
subbloque: dinamica\r
tags:\r
  en:\r
  - non-inertial frame\r
  - fictitious force\r
  - frame acceleration\r
  - centrifugal force\r
  - coriolis force\r
  es:\r
  - sistema no inercial\r
  - fuerza ficticia\r
  - aceleracion del marco\r
  - fuerza centrifuga\r
  - fuerza de coriolis\r
tiempo_estimado_min: 40\r
type: leaf\r
`;export{e as default};
