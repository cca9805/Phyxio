const n=`id: definicion-torque\r
nombre:\r
  es: Definición de Torque\r
  en: Definition of Torque\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: torque-momento\r
ruta_relativa: fisica-clasica/mecanica/rotacion/dinamica/torque-momento/definicion-torque
orden: 212411\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  - EXTRACURRICULAR\r
  en:\r
  - UPPER_SECONDARY\r
  - EXTRACURRICULAR\r
icon: ⚖\r
descripcion: 'Subtema: Definicion. Teoría, fórmulas, ejemplos y aplicaciones.'\r
description_en: 'Subtopic: Definition. Theory, formulas, examples, and applications.'\r
tags:\r
  es:\r
  - torque\r
  - momento\r
  - rotacion\r
  - definicion\r
  - dinamica\r
  en:\r
  - torque\r
  - moment\r
  - rotation\r
  - definition\r
  - dynamics\r
pregunta_fisica_central:\r
  es: ¿Cómo se calcula el torque tau que produce una fuerza F sobre un eje en función\r
    de la distancia r y el ángulo theta?\r
  en: How is the torque tau produced by a force F about a rotation axis calculated\r
    as a function of distance r and angle theta?\r
representacion_dominante: Dcl\r
magnitud_dominante: tau\r
prerequisitos:\r
- fuerzas-y-leyes-de-newton\r
- concepto-de-vector\r
graficos:\r
- Dcl\r
- Svg\r
physical_role:\r
  es: ley física\r
  en: physical law\r
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
titulo: Definición de Torque\r
titulo_en: Definition of Torque\r
`;export{n as default};
