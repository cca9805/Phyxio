const e=`version: 5
id: fuerza-forzada
type: leaf
nombre: { es: Fuerza forzada, en: Forced Oscillation }
titulo: { es: Fuerza forzada, en: Forced Oscillation }
area: fisica-clasica
bloque: mecanica
subbloque: oscilaciones
parent_id: forzadas-y-resonancia
ruta_relativa: fisica-clasica/mecanica/oscilaciones/forzadas-y-resonancia/fuerza-forzada
orden: 217610
dificultad: 4
tiempo_estimado_min: 60
icon: "🌊"
descripcion: Respuesta estacionaria de un oscilador ante una fuerza periodica externa.
description_en: Steady response of an oscillator driven by an external periodic force.
tags:
  es: [oscilaciones, forzada, amplitud, desfase]
  en: [oscillations, forced, amplitude, phase]
prerequisitos:
  - fisica-clasica/mecanica/oscilaciones/amortiguamiento/subamortiguado
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
physical_role: { es: concepto físico, en: physical concept }
graficos: [Coord]
representacion_dominante: Coord
magnitud_dominante: X
pregunta_fisica_central:
  es: "¿Como determina una fuerza periodica externa la amplitud y el desfase de la respuesta estacionaria?"
  en: "How does an external periodic force determine the amplitude and phase lag of the steady response?"
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
    formulas: [ecuacion_diferencial_forzada, amplitud_forzada, desfase_forzada, respuesta_estacionaria]
    magnitudes: [F0, omega_f, m, k, b, X, delta, x, t, x_d, x_dd]
    require_formula_context: true
    require_magnitude_context: true
`;export{e as default};
