const n=`id: mapa-conceptual-de-rotacion
nombre:
  es: Mapa conceptual de rotación
  en: Rotational Concept Map
area: fisica-clasica
bloque: mecanica
subbloque: rotacion
parent_id: fundamentos
ruta_relativa: fisica-clasica/mecanica/rotacion/fundamentos/mapa-conceptual-de-rotacion
orden: 213105
type: leaf
prerequisitos:
- fisica-clasica/mecanica/rotacion/fundamentos/magnitudes-angulares
niveles:
  es:
  - BACHILLERATO
  - UNIVERSIDAD
  en:
  - Upper Secondary
  - University
icon: 🗺️
descripcion: Una visión global de la mecánica de rotación, integrando cinemática, dinámica y energía.
description_en: A global vision of rotational mechanics, integrating kinematics, dynamics, and energy.
tags:
  es: [rotacion, mapa conceptual, fisica, fundamentos]
  en: [rotation, concept map, physics, fundamentals]
graficos:
- Svg
physical_role:
  es: concepto estructural
  en: structural concept
dificultad: 1
tiempo_estimado_min: 15
pregunta_fisica_central:
  es: ¿Cómo se conectan los diferentes conceptos de la rotación para formar una descripción coherente del movimiento?
  en: How do different rotational concepts connect to form a coherent description of motion?
representacion_dominante: Svg
magnitud_dominante: velocidad-angular
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: false
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Svg
  output_policy:
    show_summary_first: true
    max_inline_messages: 2
    show_warnings: false
    show_likely_errors: false
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
titulo: Mapa conceptual de rotación
titulo_en: Rotational Concept Map
bloque_en: Rotation
subbloque_en: Rotation Fundamentals
`;export{n as default};
