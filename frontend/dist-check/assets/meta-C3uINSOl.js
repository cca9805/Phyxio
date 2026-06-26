const n=`id: ecuacion-fundamental\r
nombre:\r
  es: Ecuación Fundamental\r
  en: Fundamental Equation of Rotational Dynamics\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: segunda-ley-rotacional\r
ruta_relativa: fisica-clasica/mecanica/rotacion/dinamica/segunda-ley-rotacional/ecuacion-fundamental
orden: 212422\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Upper Secondary\r
  - University\r
icon: ✅\r
descripcion: 'Subtema: Ecuación Fundamental. Teoría, fórmulas, ejemplos y aplicaciones.'\r
description_en: 'Subtopic: Fundamental Equation. Theory, formulas, examples, and applications.'\r
tags:\r
  es:\r
  - segunda-ley-rotacional\r
  - torque-neto\r
  - aceleracion-angular\r
  - inercia\r
  - dinamica-rotacional\r
  en:\r
  - rotational-second-law\r
  - net-torque\r
  - angular-acceleration\r
  - inertia\r
  - rotational-dynamics\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/dinamica-rotacional/segunda-ley-rotacional/analogia-traslacional\r
- fisica-clasica/mecanica/dinamica/dinamica-rotacional/torque-momento/calculo-del-torque\r
- fisica-clasica/mecanica/dinamica/dinamica-rotacional/momento-de-inercia/definicion-momento-de-inercia\r
graficos:\r
- Coord\r
physical_role:\r
  es: ley física\r
  en: physical law\r
dificultad: 4\r
pregunta_fisica_central:\r
  es: ¿Cómo determina el torque neto tau la aceleración angular alpha de un cuerpo\r
    rígido con momento de inercia I?\r
  en: How does the net torque tau determine the angular acceleration alpha of a rigid\r
    body with moment of inertia I?\r
representacion_dominante: Coord\r
magnitud_dominante: alpha\r
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
titulo: Ecuación Fundamental\r
titulo_en: Fundamental Equation of Rotational Dynamics\r
`;export{n as default};
