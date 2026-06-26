const n=`id: analisis-completo
nombre:
  es: Analisis completo
  en: Complete Analysis of Frictional Systems
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: sistemas-con-rozamiento
ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-traslacional/sistemas-con-rozamiento/analisis-completo
orden: 212531
type: leaf
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  en:
  - Secondary
  - Upper Secondary
  - University
icon: 📘
descripcion: 'Subtema: Analisis Completo. Teoría, fórmulas, ejemplos y aplicaciones.'
description_en: Content about Complete Friction Analysis.
tags:
  es:
  - rozamiento
  - friccion
  - dinamica-traslacional
  - analisis-completo
  en:
  - friction
  - regime-analysis
  - translational-dynamics
  - threshold-method
prerequisitos:
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
- fisica-clasica/mecanica/dinamica/dinamica-traslacional/planos-inclinados/con-rozamiento
pregunta_fisica_central:
  es: ¿Qué muestra la curva a(F_ext) sobre el umbral F_ext_crit y el cambio entre reposo posible y deslizamiento con rozamiento?
  en: What does the a(F_ext) curve show about the threshold F_ext_crit and the change from possible rest to sliding with friction?
representacion_dominante: Coord
magnitud_dominante: a
graficos:
- Coord
physical_role:
  es: método de resolución
  en: problem-solving method
dificultad: 4
tiempo_estimado_min: 50
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    max_inline_messages: 4
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
