const n=`version: 5
id: perdidas-de-carga
nombre:
  es: Perdidas de carga
  en: Head Loss
titulo:
  es: Perdidas de carga
  en: Head Loss
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
orden: 218450
parent_id: viscosidad-y-regimenes
niveles:
  es: [UNIVERSIDAD, EXTRACURRICULAR]
  en: [University, Extracurricular]
icon: "💧"
ruta_relativa: fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/perdidas-de-carga
descripcion: Análisis de la disipación de energía por fricción viscosa y accesorios en conductos.
description_en: Analysis of energy dissipation through viscous friction and fittings in ducts.
descripcion_corta: Pérdidas energéticas por fricción y singularidades en flujo real.
dificultad: 2
tiempo_estimado_min: 55
magnitud_dominante: dp
representacion_dominante: Coord
physical_role:
  es: "concepto físico"
  en: "physical concept"
pregunta_fisica_central:
  es: "¿Cómo afecta la fricción interna a la presión del fluido a lo largo de un conducto?"
  en: "How does internal friction affect fluid pressure along a duct?"
prerequisitos:
- fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/numero-de-reynolds
- fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/viscosidad
tags:
  es: [fluidos, friccion, viscosidad, energia, darcy-weisbach]
  en: [fluids, friction, viscosity, energy, darcy-weisbach]
graficos:
- Coord
- Svg
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Análisis Energético
      en: Energy Analysis
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
`;export{n as default};
