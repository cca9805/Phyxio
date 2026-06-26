const e=`version: 5
id: leyes-de-kepler
nombre:
  es: Leyes de kepler
  en: Kepler's Laws
titulo:
  es: Leyes de kepler
  en: Kepler's Laws
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: gravitacion
parent_id: orbitas-y-satelites
ruta_relativa: fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/leyes-de-kepler
orden: 216430
dificultad: 3
tiempo_estimado_min: 60
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: "🚀"
descripcion: Conecta forma de orbita, barrido de area y periodo kepleriano.
description_en: Connects orbital shape, area sweep, and Keplerian period.
descripcion_corta: Tres leyes para leer forma, ritmo y escala de orbitas.
magnitud_dominante: a
representacion_dominante: Coord
physical_role:
  es: concepto físico
  en: physical concept
pregunta_fisica_central:
  es: "¿Como conectan las leyes de Kepler la forma de la orbita, el barrido de area y el periodo?"
  en: "How do Kepler's laws connect orbital shape, swept area, and period?"
prerequisitos:
  - fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/velocidad-orbital
tags:
  es: [kepler, orbitas, periodo, elipse, gravitacion]
  en: [kepler, orbits, period, ellipse, gravitation]
objetivos:
  - es: Interpretar una orbita eliptica desde sus parametros geometricos.
    en: Interpret an elliptical orbit from its geometric parameters.
  - es: Usar el barrido areal como criterio de rapidez orbital variable.
    en: Use areal sweeping as a criterion for variable orbital speed.
  - es: Aplicar la tercera ley en forma absoluta y comparativa.
    en: Apply the third law in absolute and comparative form.
suposiciones:
  - es: Problema newtoniano de dos cuerpos con masa central dominante.
    en: Newtonian two-body problem with a dominant central mass.
  - es: Perturbaciones, rozamiento y empuje despreciables.
    en: Perturbations, drag, and thrust are negligible.
competencias_lomloe: [STEM, razonamiento_cientifico, modelizacion, resolucion_problemas]
graficos: [Coord, Svg]
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Lectura kepleriana
      en: Keplerian Reading
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    show_summary: true
    show_physical_reading: true
    show_coherence: true
    show_model_validity: true
    show_graph_reading: true
    show_likely_errors: true
    show_next_step: true
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
    max_inline_messages: 3
    show_status_icons: true
    allow_collapsible_sections: true
  dependencies:
    requires_magnitudes: true
    requires_formulas: true
    supports_graph_binding: true
`;export{e as default};
