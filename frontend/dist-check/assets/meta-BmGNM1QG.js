const n=`version: 1
id: presion
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
parent_id: fundamentos
orden: 218130
nombre:
  es: "Presion"
  en: "Pressure"
titulo:
  es: "Concepto de Presión y su distribución"
  en: "Concept of Pressure and its distribution"
icon: "💧"
ruta_relativa: fisica-clasica/mecanica/fluidos/fundamentos/presion
niveles:
  es: ["ESO", "BACHILLERATO", "UNIVERSIDAD"]
  en: ["Secondary", "Upper Secondary", "University"]
dificultad: 2
tiempo_estimado_min: 55
descripcion: "Estudio de la presión como fuerza distribuida, presión manométrica y absoluta."
description_en: "Study of pressure as distributed force, gauge and absolute pressure."
descripcion_corta:
  es: "Definición de presión y unidades."
  en: "Definition of pressure and units."
pregunta_fisica_central:
  es: "¿Cómo se convierte una fuerza física en una presión distribuida sobre un área?"
  en: "How does a physical force convert into a distributed pressure over an area?"
representacion_dominante: Coord
magnitud_dominante: p
physical_role:
  es: "concepto físico"
  en: "physical concept"
tags:
  es: ["fluidos", "fundamentos", "presion", "fuerza", "area"]
  en: ["fluids", "fundamentals", "pressure", "force", "area"]
prerequisitos:
- fisica-clasica/mecanica/fluidos/fundamentos/concepto-de-fluido
- fisica-clasica/mecanica/fluidos/fundamentos/densidad
graficos:
- Coord
- Svg
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: "Ver Interpretación"
      en: "View Interpretation"
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    show_on_calculate: true
    allow_manual_trigger: true
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
    max_inline_messages: 3
    show_coherence_alerts: true
    show_model_limits: true
  dependencies:
    requires_magnitudes: true
    requires_formulas: true
    supports_graph_binding: true
`;export{n as default};
