const n=`id: condicion-de-rodadura-sin-deslizamiento
nombre:
  es: Condición de rodadura sin deslizamiento
  en: No-Slip Rolling Condition
area: fisica-clasica
bloque: mecanica
subbloque: rotacion
parent_id: rodadura
ruta_relativa: fisica-clasica/mecanica/rotacion/rodadura/condicion-de-rodadura-sin-deslizamiento
orden: 211340
type: leaf
icon: 🛑
dificultad: 3
tiempo_estimado_min: 25
descripcion: Análisis cinemático del vínculo entre traslación y rotación en cuerpos que ruedan sin deslizar sobre superficies fijas.
description_en: Kinematic analysis of the constraint between translation and rotation in bodies rolling without slipping on fixed surfaces.
tags:
  es: [rodadura, cinemática, vínculo, sólido rígido, no-deslizamiento]
  en: [rolling, kinematics, constraint, rigid body, no-slip]
prerequisitos:
  - fisica-clasica/mecanica/rotacion/fundamentos/magnitudes-angulares
  - fisica-clasica/mecanica/rotacion/fundamentos/relacion-lineal-angular
niveles:
  es: [BACHILLERATO, UNIVERSIDAD]
  en: [Upper Secondary, University]
graficos: [Svg, Coord]
physical_role:
  es: concepto físico cinemático
  en: kinematic physical concept
pregunta_fisica_central:
  es: "¿Cómo se relacionan la velocidad del centro de masas y la velocidad angular para que un cuerpo ruede sin patinar?"
  en: "How are center-of-mass velocity and angular velocity related for a body to roll without slipping?"
representacion_dominante: Svg
magnitud_dominante: v
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Ver Interpretación
      en: View Interpretation
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    max_inline_messages: 3
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
  dependencies:
    auto_load_magnitudes: true
    auto_load_formulas: true
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
