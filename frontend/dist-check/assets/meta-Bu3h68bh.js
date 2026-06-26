const n=`version: 5
id: viscosidad
nombre:
  es: Viscosidad
  en: Viscosity
titulo:
  es: Viscosidad y Ley de Newton de los Fluidos
  en: Viscosity and Newton's Law of Fluids
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
orden: 218410
parent_id: viscosidad-y-regimenes
niveles:
  es: [UNIVERSIDAD, EXTRACURRICULAR]
  en: [University, Extracurricular]
icon: "💧"
ruta_relativa: fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/viscosidad
descripcion: Estudio de la resistencia interna al flujo y la relación entre esfuerzo cortante y tasa de deformación.
description_en: Study of internal resistance to flow and the relationship between shear stress and strain rate.
descripcion_corta: Resistencia interna y Ley de Newton de la viscosidad.
dificultad: 3
tiempo_estimado_min: 55
magnitud_dominante: mu
representacion_dominante: Coord
physical_role:
  es: "concepto físico"
  en: "physical concept"
pregunta_fisica_central:
  es: "¿Cómo se opone un fluido al movimiento relativo entre sus capas?"
  en: "How does a fluid oppose the relative motion between its layers?"
prerequisitos:
- fisica-clasica/mecanica/fluidos/fundamentos/concepto-de-fluido
tags:
  es: [fluidos, viscosidad, newtoniano, rozamiento, reologia]
  en: [fluids, viscosity, newtonian, friction, rheology]
graficos:
- Coord
- Svg
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Análisis de Viscosidad
      en: Viscosity Analysis
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
    preferred_type: Svg
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
    magnitudes:
      - mu
      - tau
      - dudy
      - nu
      - rho
      - Re
    formulas:
      - tau_mu
      - dudy_mu
      - nu_mu
      - re_mu
`;export{n as default};
