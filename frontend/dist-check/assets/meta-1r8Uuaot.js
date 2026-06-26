const e=`id: ecuacion-de-onda-electromagnetica
nombre:
  es: Ecuacion de onda electromagnetica
  en: Electromagnetic Wave Equation
type: leaf
orden: 295400
area: fisica-clasica
bloque: electromagnetismo
subbloque: ecuaciones-de-maxwell
parent_id: ecuaciones-de-maxwell
niveles:
  es:
    - ESO
    - BACHILLERATO
    - UNIVERSIDAD
    - EXTRACURRICULAR
  en:
    - Secondary
    - Upper Secondary
    - University
    - Extracurricular
icon: "🌊"
ruta_relativa: fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/ecuacion-de-onda-electromagnetica
descripcion: 'Consecuencia matemática de Maxwell: ecuación de onda para E y B en el vacío y deducción de c.'
description_en: 'Mathematical consequence of Maxwell: wave equation for E and B in vacuum and derivation of c.'
physical_role:
  es: consecuencia matemática
  en: mathematical consequence
dificultad: 5
tiempo_estimado_min: 45
prerequisitos:
  - fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-diferencial
graficos:
  - Coord
  - Svg
representacion_dominante: Coord
magnitud_dominante: c
pregunta_fisica_central:
  es: ¿Cómo predice el electromagnetismo de Maxwell la existencia de ondas que se propagan a la velocidad de la luz?
  en: How does Maxwell's electromagnetism predict the existence of waves that propagate at the speed of light?
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación de la onda EM
      en: EM Wave Interpretation
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
tags:
  es:
    - ondas-electromagneticas
    - ecuaciones-de-maxwell
    - velocidad-de-la-luz
    - electromagnetismo
    - fisica-teorica
  en:
    - electromagnetic-waves
    - maxwell-equations
    - speed-of-light
    - electromagnetism
    - theoretical-physics
`;export{e as default};
