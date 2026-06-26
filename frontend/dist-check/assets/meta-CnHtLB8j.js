const n=`version: 5
id: presion-hidrostatica
parent_id: estatica-de-fluidos
nombre:
  es: Presion hidrostatica
  en: Hydrostatic Pressure
titulo:
  es: Presión Hidrostática
  en: Hydrostatic Pressure
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
orden: 218210
niveles:
  es:
    - ESO
    - BACHILLERATO
    - UNIVERSIDAD
  en:
    - Secondary
    - Upper Secondary
    - University
icon: 💧
ruta_relativa: fisica-clasica/mecanica/fluidos/estatica-de-fluidos/presion-hidrostatica
descripcion: Variacion de presion con la profundidad.
description_en: Pressure in a fluid at rest.
descripcion_corta:
  es: Presión con la profundidad.
  en: Pressure with depth.
physical_role:
  es: concepto físico
  en: physical concept
pregunta_fisica_central:
  es: ¿De qué factores depende el aumento de la presión al sumergirnos en un fluido?
  en: What factors determine the increase in pressure when diving into a fluid?
representacion_dominante: Coord
magnitud_dominante: p
dificultad: 2
tiempo_estimado_min: 55
prerequisitos:
  - fisica-clasica/mecanica/fluidos/fundamentos/presion
  - fisica-clasica/mecanica/fluidos/fundamentos/densidad
tags:
  es:
    - fluidos
    - estática
    - presión
    - hidrostatica
  en:
    - fluids
    - statics
    - pressure
    - hydrostatic
graficos:
  - Coord
  - Svg
  - Dcl
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación Física
      en: Physical Interpretation
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
