const e=`version: 5
id: polea
nombre:
  es: Polea
  en: Pulley
titulo:
  es: "Polea: Multiplicación de fuerzas por tramos"
  en: "Pulley: Force multiplication by segments"
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: aplicaciones
parent_id: maquinas-simples
orden: 210512
niveles:
  es:
  - ESO
  en:
  - Secondary
icon: 🏗️
ruta_relativa: fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea
descripcion: Poleas fijas, móviles y aparejos; ventaja mecánica, rendimiento y regla de oro.
description_en: Fixed and movable pulleys; mechanical advantage, efficiency and the golden rule.
dificultad: 2
tiempo_estimado_min: 45
prerequisitos:
- fisica-clasica/mecanica/dinamica/fuerzas/tension/tension-en-cuerdas-y-cables
pregunta_fisica_central:
  es: "¿Cómo permite el número de tramos de cuerda de una polea repartir el peso de un objeto entre varios puntos de apoyo?"
  en: "How does the number of rope segments in a pulley system distribute an object's weight among several support points?"
representacion_dominante: Svg
magnitud_dominante: n
tags:
  es:
  - poleas
  - aparejos
  - ventaja-mecanica
  - rendimiento
  en:
  - pulleys
  - tackles
  - mechanical-advantage
  - efficiency
fisical_role:
  es: aplicacion mecanica
  en: mechanical application
physical_role:
  es: aplicacion mecanica
  en: mechanical application
objetivos:
- es: Calcular el esfuerzo necesario en sistemas de poleas ideales y reales.
  en: Calculate the required effort in ideal and real pulley systems.
- es: Diferenciar entre aparejos factoriales y potenciales.
  en: Differentiate between factorial and potential tackles.
- es: Aplicar la conservación de la energía para relacionar fuerza y recorrido de cuerda.
  en: Apply energy conservation to relate force and rope travel.
graficos:
- Svg
grafico_principal: Svg
perfiles_graficos:
  Svg:
    id: PoleaGraphsSvg
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
