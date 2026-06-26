const a=`id: analogia-traslacional\r
nombre:\r
  es: Analogía Traslacional\r
  en: Analogy with Translational Dynamics\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: segunda-ley-rotacional\r
ruta_relativa: fisica-clasica/mecanica/rotacion/dinamica/segunda-ley-rotacional/analogia-traslacional
orden: 212421\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Upper Secondary\r
  - University\r
icon: 🧲\r
descripcion: Analogía entre dinámica lineal y rotacional para transferir estructura\r
  física.\r
description_en: Analogy between linear and rotational dynamics for physical transfer.\r
tags:\r
  es:\r
  - analogia dinamica\r
  - fuerza y torque\r
  - masa e inercia\r
  - momento lineal\r
  - momento angular\r
  en:\r
  - dynamical analogy\r
  - force and torque\r
  - mass and inertia\r
  - linear momentum\r
  - angular momentum\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa\r
- fisica-clasica/mecanica/dinamica/dinamica-rotacional/segunda-ley-rotacional/ecuacion-fundamental\r
- fisica-clasica/mecanica/dinamica/dinamica-rotacional/momento-de-inercia/definicion-momento-de-inercia\r
graficos:\r
- Coord\r
physical_role:\r
  es: ley física\r
  en: physical law\r
dificultad: 4\r
pregunta_fisica_central:\r
  es: ¿Qué se conserva y qué cambia al pasar de F_net = m a a tau = I alpha, y cómo\r
    ayuda esa analogía a modelar un sistema rotacional?\r
  en: What stays the same and what changes when moving from F_net = m a to tau = I\r
    alpha, and how does that analogy help model a rotational system?\r
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
titulo: Analogía Traslacional\r
titulo_en: Analogy with Translational Dynamics\r
`;export{a as default};
