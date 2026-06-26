const n=`id: precesion\r
nombre:\r
  es: Precesion\r
  en: Gyroscopic Precession\r
area: fisica-clasica\r
bloque: mecanica
subbloque: rotacion
parent_id: momento-angular\r
ruta_relativa: fisica-clasica/mecanica/rotacion/momento-angular/precesion\r
orden: 215330\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  en:\r
  - University\r
icon: 🔝\r
descripcion: Respuesta giroscópica donde el eje de giro cambia de dirección bajo un\r
  torque externo.\r
description_en: Gyroscopic response in which the spin axis changes direction under\r
  an external torque.\r
tags:\r
  es:\r
  - precesion\r
  - giroscopio\r
  - torque\r
  - momento-angular\r
  - rotacion\r
  en:\r
  - precession\r
  - gyroscope\r
  - torque\r
  - angular-momentum\r
  - rotation\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/conservacion-momento-angular\r
- fisica-clasica/mecanica/dinamica/dinamica-rotacional/torque-momento/definicion-torque\r
pregunta_fisica_central:\r
  es: ¿Por qué el eje de giro cambia de dirección bajo un torque perpendicular al\r
    momento angular?\r
  en: Why does the spin axis change direction under a torque perpendicular to the\r
    angular momentum?\r
graficos:\r
- Svg\r
representacion_dominante: Svg\r
magnitud_dominante: velocidad de precesión\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
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
    preferred_type: Svg\r
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
bloque_en: Rotation\r
subbloque_en: Angular Momentum\r
titulo: Precesion\r
titulo_en: Gyroscopic Precession\r
`;export{n as default};
