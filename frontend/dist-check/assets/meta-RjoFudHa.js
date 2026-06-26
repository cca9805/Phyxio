const n=`id: palanca
nombre:
  es: Palanca
  en: Lever
area: fisica-clasica
bloque: mecanica
subbloque: aplicaciones
parent_id: maquinas-simples
ruta_relativa: fisica-clasica/mecanica/aplicaciones/maquinas-simples/palanca
orden: 210511
type: leaf
niveles:
  es:
  - ESO
  en:
  - Secondary
icon: 🔧
descripcion: Análisis del equilibrio de momentos en máquinas simples para amplificar fuerza o desplazamiento.
description_en: Analysis of torque balance in simple machines to amplify force or displacement.
tags:
  es:
  - palancas
  - máquinas simples
  - ventaja mecánica
  - momento
  - estática
  en:
  - levers
  - simple machines
  - mechanical advantage
  - torque
  - statics
prerequisitos:
- fisica-clasica/mecanica/dinamica/estatica/equilibrio-rotacion/momento-de-una-fuerza
pregunta_fisica_central:
  es: "¿Cómo permite la geometría vencer una carga con poco esfuerzo?"
  en: "How does geometry allow overcoming a load with little effort?"
graficos:
- Svg
representacion_dominante: Svg
magnitud_dominante: ventaja mecánica
physical_role:
  es: aplicacion mecanica
  en: mechanical application
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
