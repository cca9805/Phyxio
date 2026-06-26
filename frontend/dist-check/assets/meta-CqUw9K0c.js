const n=`version: 5
id: ondas-longitudinales
parent_id: ondas-en-fluidos
nombre:
  es: "Ondas longitudinales"
  en: "Longitudinal Waves"
physical_role:
  es: "concepto físico"
  en: "physical concept"
pregunta_fisica_central:
  es: "¿Cómo se describe matemáticamente el desplazamiento de las partículas en una onda de compresión y qué relación guarda con la variación de presión local?"
  en: "How is particle displacement mathematically described in a compression wave and what is its relationship with local pressure variation?"
representacion_dominante: "Coord"
magnitud_dominante: "p_hat"
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
orden: 218620
niveles:
  es: ["ESO", "BACHILLERATO", "UNIVERSIDAD"]
  en: ["Secondary", "Upper Secondary", "University"]
icon: 💧
ruta_relativa: fisica-clasica/mecanica/fluidos/ondas-en-fluidos/ondas-longitudinales
descripcion: "Estudio detallado de la propagación de ondas longitudinales en medios fluidos."
description_en: "Detailed study of longitudinal wave propagation in fluid media."
descripcion_corta:
  es: "Análisis físico de ondas de compresión."
  en: "Physical analysis of compression waves."
dificultad: 3
tiempo_estimado_min: 60
prerequisitos:
  - fisica-clasica/mecanica/fluidos/fundamentos/compresibilidad
  - fisica-clasica/mecanica/fluidos/ondas-en-fluidos/introduccion-al-sonido
tags:
  es: ["Ondas", "Fluidos", "Presión", "Longitudinal"]
  en: ["Waves", "Fluids", "Pressure", "Longitudinal"]
graficos:
  - Coord
  - Svg
interpretacion:
  enabled: true
  archivo: "interpretacion.yaml"
  ui:
    tab_label:
      es: "Ver Acústica"
      en: "View Acoustics"
    show_summary: true
    show_physical_reading: true
    show_coherence: true
    show_model_validity: true
    show_graph_reading: true
    show_likely_errors: true
    show_next_step: true
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
  mini_graph:
    enabled: true
    preferred_type: "Svg"
  output_policy:
    max_inline_messages: 3
    show_severity_icons: true
    collapse_advanced_sections: false
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_magnitudes: true
    requires_formulas: true
    supports_graph_binding: true
`;export{n as default};
