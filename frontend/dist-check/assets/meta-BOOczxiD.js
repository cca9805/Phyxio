const e=`id: bloque-sobre-superficie
nombre:
  es: Bloque sobre superficie
  en: Block on a Surface
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: sistemas-simples
ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-traslacional/sistemas-simples/bloque-sobre-superficie
orden: 212511
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
descripcion: 'Bloque sobre superficie: cómo el umbral de rozamiento decide entre reposo y deslizamiento.'
description_en: 'Block on a surface: how the friction threshold decides between rest and sliding.'
tags:
  es:
  - bloque-sobre-superficie
  - rozamiento
  - friccion-estatica
  - friccion-cinetica
  - segunda-ley
  en:
  - block-on-surface
  - friction
  - static-friction
  - kinetic-friction
  - newton-second-law
prerequisitos:
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/diagrama-cuerpo-libre
pregunta_fisica_central:
  es: ¿Qué muestra la curva a(F) sobre la fuerza umbral F_s = μmg y la diferencia entre el caso sin rozamiento y el caso con rozamiento?
  en: What does the a(F) curve show about the threshold force F_s = μmg and the difference between the frictionless and friction cases?
representacion_dominante: Coord
magnitud_dominante: a
graficos:
- Coord
physical_role:
  es: fenómeno físico
  en: physical phenomenon
dificultad: 3
tiempo_estimado_min: 45
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
`;export{e as default};
