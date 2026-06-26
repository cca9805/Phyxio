const n=`version: 1
id: densidad
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
parent_id: fundamentos
orden: 218120
nombre:
  es: "Densidad"
  en: "Density"
titulo:
  es: "Densidad y relación masa-volumen"
  en: "Density and mass-volume relationship"
icon: "💧"
ruta_relativa: fisica-clasica/mecanica/fluidos/fundamentos/densidad
niveles:
  es: ["ESO", "BACHILLERATO", "UNIVERSIDAD"]
  en: ["Secondary", "Upper Secondary", "University"]
dificultad: 2
tiempo_estimado_min: 55
descripcion: "Estudio de la densidad como propiedad intensiva, relación masa-volumen y densidad relativa."
description_en: "Study of density as an intensive property, mass-volume relationship, and relative density."
descripcion_corta:
  es: "Densidad y relación masa-volumen."
  en: "Density and mass-volume relationship."
pregunta_fisica_central:
  es: "¿Cómo se distribuye la masa en el espacio ocupado por un fluido?"
  en: "How is mass distributed in the space occupied by a fluid?"
representacion_dominante: Coord
magnitud_dominante: rho
physical_role:
  es: "concepto físico"
  en: "physical concept"
tags:
  es: ["fluidos", "fundamentos", "densidad", "masa", "volumen"]
  en: ["fluids", "fundamentals", "density", "mass", "volume"]
prerequisitos:
- fisica-clasica/mecanica/fluidos/fundamentos/concepto-de-fluido
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
