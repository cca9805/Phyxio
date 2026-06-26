const e=`version: 5
id: mareas-y-perturbaciones
nombre:
  es: Mareas y perturbaciones
  en: Tides and Perturbations
titulo:
  es: Mareas y perturbaciones
  en: Tides and Perturbations
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: gravitacion
orden: 216500
parent_id: gravitacion
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: "📘"
ruta_relativa: fisica-clasica/mecanica/gravitacion/mareas-y-perturbaciones
descripcion: Explica mareas y perturbaciones orbitales mediante gradientes gravitatorios y criterio perturbativo.
description_en: Explains tides and orbital perturbations through gravitational gradients and perturbative criteria.
descripcion_corta: Gradientes gravitatorios, mareas y perturbaciones orbitales de primer orden.
dificultad: 3
tiempo_estimado_min: 60
magnitud_dominante: am
representacion_dominante: Coord
physical_role:
  es: concepto físico
  en: physical concept
pregunta_fisica_central:
  es: "¿Cuándo una fuerza gravitatoria externa deja de ser solo atracción global y produce deformación, marea o deriva orbital acumulada?"
  en: "When does an external gravitational force stop being only global attraction and produce deformation, tides, or accumulated orbital drift?"
prerequisitos:
  - fisica-clasica/mecanica/gravitacion/campo-y-potencial-gravitatorio
  - fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/leyes-de-kepler
tags:
  es: [gravitacion, mareas, perturbaciones, orbitas, gradiente]
  en: [gravitation, tides, perturbations, orbits, gradient]
objetivos:
  - es: Interpretar las mareas como diferencias de campo gravitatorio entre puntos de un cuerpo.
    en: Interpret tides as differences in gravitational field between points of a body.
  - es: Estimar aceleraciones mareales y comparar cuerpos perturbadores.
    en: Estimate tidal accelerations and compare perturbing bodies.
  - es: Usar un parámetro perturbativo para decidir si una aproximación de primer orden es suficiente.
    en: Use a perturbative parameter to decide whether a first-order approximation is sufficient.
suposiciones:
  - es: Régimen newtoniano clásico con velocidades no relativistas.
    en: Classical Newtonian regime with non-relativistic speeds.
  - es: Separación grande frente al radio del cuerpo afectado cuando se usa la aproximación mareal.
    en: Separation large compared with the affected body's radius when using the tidal approximation.
competencias_lomloe:
  - STEM
  - razonamiento_cientifico
  - modelizacion
  - resolucion_problemas
graficos:
  - Coord
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Lectura mareal
      en: Tidal Reading
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
