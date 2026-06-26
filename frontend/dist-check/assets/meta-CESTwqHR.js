const n=`id: tipos-de-palancas
nombre:
  es: Tipos de palancas
  en: Types of Levers
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: palancas
ruta_relativa: fisica-clasica/mecanica/dinamica/estatica/equilibrio-rotacion/palancas/tipos-de-palancas
orden: 212351
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
icon: 🧱
descripcion: "Clasifica las palancas según el orden de apoyo, potencia y resistencia."
description_en: "Classifies levers by the order of fulcrum, effort, and load."
tags:
  es:
    - palancas
    - equilibrio
    - brazo-de-palanca
    - ventaja-mecanica
    - biomecanica
  en:
    - levers
    - equilibrium
    - lever-arm
    - mechanical-advantage
    - biomechanics
pregunta_fisica_central:
  es: "¿Qué determina la clase de una palanca y cómo condiciona esa geometría la ventaja mecánica disponible?"
  en: "What determines the class of a lever and how does that geometry condition the available mechanical advantage?"
representacion_dominante: Svg
magnitud_dominante: VM
prerequisitos:
  - momento-de-una-fuerza
  - condicion-sumatoria-momentos
graficos:
  - Svg
physical_role:
  es: fenómeno físico
  en: physical phenomenon
dificultad: 2
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
    preferred_type: Svg
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
