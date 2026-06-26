const n=`id: con-rozamiento
nombre:
  es: Con rozamiento
  en: Inclined Plane with Friction
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: planos-inclinados
ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-traslacional/planos-inclinados/con-rozamiento
orden: 212522
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
icon: 🧪
descripcion: 'Subtema: Con Rozamiento. Teoría, fórmulas, ejemplos y aplicaciones.'
description_en: Content about Con Friction.
tags:
  es:
  - rozamiento
  - plano-inclinado
  - dinamica-traslacional
  - friccion-estatica
  - friccion-cinetica
  en:
  - friction
  - inclined-plane
  - translational-dynamics
  - static-friction
  - kinetic-friction
prerequisitos:
- fisica-clasica/mecanica/dinamica/dinamica-traslacional/planos-inclinados/sin-rozamiento
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
pregunta_fisica_central:
  es: ¿Qué muestra la curva a(theta) sobre la variación de la aceleración con theta y dónde aparece la línea del ángulo crítico theta_c en un plano inclinado con rozamiento?
  en: What does the a(theta) curve show about acceleration versus theta, and where does the critical-angle line theta_c appear on an incline with friction?
representacion_dominante: Coord
magnitud_dominante: a
graficos:
- Coord
- Dcl
physical_role:
  es: modelo físico
  en: physical model
dificultad: 3
tiempo_estimado_min: 55
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
