const n=`id: inductancia-mutua
nombre:
  es: Inductancia mutua
  en: Mutual Inductance
area: fisica-clasica
bloque: electromagnetismo
subbloque: induccion-electromagnetica
parent_id: inductancia
ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/inductancia-mutua
orden: 2100420
type: leaf
niveles:
  es:
    - UNIVERSIDAD
  en:
    - University
icon: 🔌
descripcion: Relaciona el cambio de corriente en una bobina con la fem inducida en otra.
description_en: Relates current change in one coil to induced emf in another coil.
tags:
  es:
    - inductancia mutua
    - acoplamiento
    - flujo
    - fem
    - bobinas
  en:
    - mutual inductance
    - coupling
    - flux
    - emf
    - coils
prerequisitos:
  - fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico
  - fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday
  - fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/autoinduccion
graficos:
  - Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 4
tiempo_estimado_min: 45
representacion_dominante: Coord
magnitud_dominante: M
idea_fisica_dominante:
  es: Una corriente variable en una bobina induce fem en otra si parte de su flujo queda enlazado con ella.
  en: A changing current in one coil induces emf in another if part of its flux links with it.
pregunta_fisica_central:
  es: ¿Como determina la inductancia mutua la fem inducida en una bobina por cambios de corriente en otra?
  en: How does mutual inductance determine the emf induced in one coil by current changes in another?
error_conceptual_dominante:
  es: Creer que cualquier bobina cercana induce la misma fem, sin atender al acoplamiento magnetico.
  en: Believing any nearby coil induces the same emf, without considering magnetic coupling.
criterio_de_aplicabilidad:
  es: El modelo lineal aplica si la geometria y los materiales mantienen proporcionalidad entre corriente fuente y flujo enlazado.
  en: The linear model applies if geometry and materials keep proportionality between source current and linked flux.
criterio_de_fallo_del_modelo:
  es: Falla con saturacion, fugas dominantes, movimiento de bobinas, parasitos rapidos o acoplamiento no lineal.
  en: It fails with saturation, dominant leakage, coil motion, fast parasitics, or nonlinear coupling.
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
    max_inline_messages: 2
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
