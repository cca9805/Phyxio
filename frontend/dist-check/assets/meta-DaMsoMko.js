const e=`version: 5
id: pendulo-fisico-avanzado
type: leaf
nombre: { es: Pendulo fisico avanzado, en: Advanced Physical Pendulum }
titulo: { es: Pendulo fisico avanzado, en: Advanced Physical Pendulum }
area: fisica-clasica
bloque: mecanica
subbloque: oscilaciones
parent_id: oscilaciones
ruta_relativa: fisica-clasica/mecanica/oscilaciones/pendulo-fisico-avanzado
orden: 217510
dificultad: 5
tiempo_estimado_min: 85
icon: "🧱"
descripcion: Modelo avanzado del pendulo fisico con inercia, energia y no linealidad.
description_en: Advanced physical pendulum model with inertia, energy, and nonlinearity.
tags:
  es: [oscilaciones, pendulo, inercia, no-linealidad, energia]
  en: [oscillations, pendulum, inertia, nonlinearity, energy]
prerequisitos:
  - fisica-clasica/mecanica/oscilaciones/pendulo-fisico
  - fisica-clasica/mecanica/dinamica/dinamica-rotacional/momento-de-inercia/teorema-de-ejes-paralelos
niveles:
  es: [UNIVERSIDAD, EXTRACURRICULAR]
  en: [University, Extracurricular]
physical_role: { es: concepto físico, en: physical concept }
graficos: [Coord, Svg]
representacion_dominante: Coord
magnitud_dominante: T0
pregunta_fisica_central:
  es: "¿Como determinan la distribucion de masa y la amplitud el periodo real de un pendulo fisico?"
  en: "How do mass distribution and amplitude determine the real period of a physical pendulum?"
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
    x_axis: d
    y_axis: T0
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
    formulas: [ecuacion_no_lineal_pf, omega0_pf_av, periodo_lineal_pf_av, steiner_pf_av, longitud_equivalente_pf_av, energia_pf_av]
    magnitudes: [I_O, I_cm, m, d, g, theta, omega0, T0, leq, theta_dd, E, theta_dot]
    require_formula_context: true
    require_magnitude_context: true
`;export{e as default};
