const e=`version: 1
id: rueda-y-eje
nombre:
  es: Rueda y eje
  en: Wheel and Axle
titulo:
  es: 'Rueda y eje: torque, radios y ventaja mecánica'
  en: 'Wheel and Axle: torque, radii, and mechanical advantage'
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: aplicaciones
parent_id: maquinas-simples
orden: 210514
niveles:
  es:
  - ESO
  en:
  - Secondary
icon: 🛞
ruta_relativa: fisica-clasica/mecanica/aplicaciones/maquinas-simples/rueda-y-eje
descripcion: 'Rueda y eje coaxiales; ventaja mecánica, torque, rendimiento y regla de oro.'
description_en: 'Coaxial wheel and axle; mechanical advantage, torque, efficiency and the golden rule.'
pregunta_fisica_central:
  es: '¿Qué razón de radios R/r necesito para obtener la ventaja mecánica deseada con un rendimiento dado?'
  en: 'What radius ratio R/r do I need to achieve the desired mechanical advantage for a given efficiency?'
representacion_dominante: Svg
magnitud_dominante: VM
dificultad: 2
tiempo_estimado_min: 40
prerequisitos:
- fisica-clasica/mecanica/aplicaciones/maquinas-simples/palanca
tags:
  es:
  - rueda-y-eje
  - maquinas-simples
  - torque
  - ventaja-mecanica
  en:
  - wheel-and-axle
  - simple-machines
  - torque
  - mechanical-advantage
physical_role:
  es: aplicacion mecanica
  en: mechanical application
objetivos:
- es: Calcular la ventaja mecánica ideal y real de un sistema rueda-eje.
  en: Calculate the ideal and real mechanical advantage of a wheel-and-axle system.
- es: Relacionar los arcos de entrada y salida mediante la restricción cinemática.
  en: Relate input and output arcs using the kinematic constraint.
- es: Aplicar el balance energético para verificar la regla de oro.
  en: Apply the energy balance to verify the golden rule.
suposiciones:
- es: Rueda y eje rígidos, coaxiales y solidarios.
  en: Rigid, coaxial wheel and axle rotating together.
- es: Rozamiento modelado con rendimiento constante eta.
  en: Friction modelled with constant efficiency eta.
graficos:
- Svg
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
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{e as default};
