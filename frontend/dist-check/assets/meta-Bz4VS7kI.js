const e=`version: 5
id: resonancia
type: leaf
nombre: { es: Resonancia, en: Resonance }
titulo: { es: Resonancia, en: Resonance }
area: fisica-clasica
bloque: mecanica
subbloque: oscilaciones
parent_id: forzadas-y-resonancia
ruta_relativa: fisica-clasica/mecanica/oscilaciones/forzadas-y-resonancia/resonancia
orden: 217620
dificultad: 3
tiempo_estimado_min: 60
icon: "✅"
descripcion: Maximo de respuesta de un oscilador forzado lineal.
description_en: Maximum response of a linear forced oscillator.
tags:
  es: [oscilaciones, resonancia, frecuencia, amortiguamiento]
  en: [oscillations, resonance, frequency, damping]
prerequisitos:
  - fisica-clasica/mecanica/oscilaciones/forzadas-y-resonancia/fuerza-forzada
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
physical_role: { es: concepto físico, en: physical concept }
graficos: [Coord]
representacion_dominante: Coord
magnitud_dominante: X
pregunta_fisica_central:
  es: "¿Cuando alcanza un oscilador forzado su maxima respuesta y como la limita el amortiguamiento?"
  en: "When does a forced oscillator reach its maximum response and how does damping limit it?"
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    show_summary: true
    show_physical_reading: true
    show_model_validity: true
    show_graph_reading: true
    tab_label: { es: Interpretacion, en: Interpretation }
  mini_graph:
    enabled: true
    preferred_type: Coord
    x_axis: omega_f
    y_axis: X
  output_policy:
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
    require_units: true
    require_domain_check: true
    require_graph_link: true
    max_inline_messages: 4
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
    formulas: [amplitud_respuesta, frecuencia_resonancia, factor_calidad, criterio_resonancia]
    magnitudes: [omega_r, Q, X, b, omega0, omega_f, m, k, F0]
    require_formula_context: true
    require_magnitude_context: true
`;export{e as default};
