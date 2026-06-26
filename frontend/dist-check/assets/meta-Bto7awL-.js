const r=`area: fisica-clasica\r
bloque: mecanica\r
descripcion: Metodo operativo para resolver problemas integrados de dinamica con masas\r
  vinculadas, rozamiento y cierre por DCL mas vinculo.\r
description_en: Operational method for solving integrated dynamics problems with linked\r
  masses, friction, and closure through FBD plus kinematic constraint.\r
dificultad: 4\r
graficos:\r
- Coord\r
- Svg\r
icon: 🧪\r
id: problemas-tipo-examen\r
interpretacion:\r
  archivo: interpretacion.yaml\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
  enabled: true\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
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
magnitud_dominante: aceleracion del sistema\r
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
  en: Exam-Type Problems\r
  es: Problemas tipo examen\r
orden: 212731\r
parent_id: problemas-integrados\r
physical_role:\r
  en: problem-solving method\r
  es: método de resolución\r
pregunta_fisica_central:\r
  en: How is a dynamics problem with linked masses and friction constructed and closed\r
    without losing the physical meaning of the result?\r
  es: ¿?Como se construye y se cierra un problema de dinamica con masas vinculadas\r
    y rozamiento sin perder el sentido fisico del resultado??\r
prerequisitos:\r
- leyes-de-newton\r
- rozamiento\r
- sistemas-vinculados\r
- diagramas-cuerpo-libre\r
representacion_dominante: Coord\r
ruta_relativa: fisica-clasica/mecanica/dinamica/aplicaciones/problemas-integrados/problemas-tipo-examen\r
subbloque: dinamica\r
tags:\r
  en:\r
  - integrated-dynamics\r
  - linked-systems\r
  - friction\r
  - fbd\r
  - solving-method\r
  es:\r
  - dinamica-integrada\r
  - sistemas-vinculados\r
  - rozamiento\r
  - dcl\r
  - metodo-de-resolucion\r
tiempo_estimado_min: 75\r
type: leaf\r
`;export{r as default};
