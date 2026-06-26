const n=`id: dos-masas-unidas-por-cuerda
nombre:
  es: Dos masas unidas por cuerda
  en: Two Masses Connected by a Rope
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: sistemas-de-varios-cuerpos
ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-traslacional/sistemas-de-varios-cuerpos/dos-masas-unidas-por-cuerda
orden: 212541
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
icon: 🪢
descripcion: Sistema acoplado ideal con dos masas y una cuerda sobre polea ideal.
description_en: Content about Dos Masas Unidas Por Cuerda.
tags:
  es:
  - tensión
  - acoplamiento
  - máquina-de-atwood
  - newton
  en:
  - tension
  - coupling
  - atwood-machine
  - newton-laws
prerequisitos:
- leyes-de-newton
- diagramas-de-fuerzas
graficos:
- Svg
- Coord
physical_role:
  es: fenómeno físico
  en: physical phenomenon
pregunta_fisica_central:
  es: "¿Como determinan m1 y m2 la aceleracion a y la tension T del sistema acoplado?"
  en: "How do m1 and m2 determine the acceleration a and tension T of the coupled system?"
representacion_dominante: Svg
magnitud_dominante: a
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
`;export{n as default};
