const n=`id: sin-rozamiento
nombre:
  es: Sin rozamiento
  en: Frictionless Inclined Plane
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: planos-inclinados
ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-traslacional/planos-inclinados/sin-rozamiento
orden: 212521
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
icon: ✅
descripcion: 'Subtema: Sin Rozamiento. Teoría, fórmulas, ejemplos y aplicaciones.'
description_en: Content about Sin Friction.
tags:
  es:
  - plano-inclinado
  - sin-rozamiento
  - dinamica-traslacional
  - gravedad
  - descomposicion-vectorial
  en:
  - inclined-plane
  - frictionless
  - translational-dynamics
  - gravity
  - vector-decomposition
prerequisitos:
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
- fundamentos/vectores-y-componentes
pregunta_fisica_central:
  es: ¿Qué muestra la curva a(theta) sobre cómo varía la aceleración con el ángulo theta en un plano inclinado ideal sin rozamiento?
  en: What does the a(theta) curve show about how acceleration varies with angle theta on an ideal frictionless incline?
representacion_dominante: Coord
magnitud_dominante: a
graficos:
- Coord
- Dcl
physical_role:
  es: modelo físico
  en: physical model
dificultad: 2
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
