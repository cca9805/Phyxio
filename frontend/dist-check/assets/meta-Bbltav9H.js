const n=`version: 5
id: tension-superficial
parent_id: fundamentos
nombre:
  es: "Tension superficial"
  en: "Surface Tension"
physical_role:
  es: "concepto físico"
  en: "physical concept"
pregunta_fisica_central:
  es: "¿Cómo explica la tensión superficial la fuerza de una interfaz y el ascenso capilar?"
  en: "How does surface tension explain interfacial force and capillary rise?"
representacion_dominante: "Coord"
magnitud_dominante: "sigma"
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
orden: 218150
niveles:
  es: ["ESO", "BACHILLERATO", "UNIVERSIDAD"]
  en: ["Secondary", "Upper Secondary", "University"]
icon: 💧
ruta_relativa: fisica-clasica/mecanica/fluidos/fundamentos/tension-superficial
descripcion: "Tensión superficial y capilaridad en interfaces líquidas."
description_en: "Surface tension and capillarity in liquid interfaces."
descripcion_corta:
  es: "Tensión superficial y fenómenos capilares."
  en: "Surface tension and capillary phenomena."
dificultad: 2
tiempo_estimado_min: 55
prerequisitos:
  - fisica-clasica/mecanica/fluidos/fundamentos/concepto-de-fluido
  - fisica-clasica/mecanica/fluidos/fundamentos/presion
tags:
  es: ["fluidos", "fundamentos", "tensión superficial", "capilaridad"]
  en: ["fluids", "fundamentals", "surface tension", "capillarity"]
graficos:
  - Coord
  - Svg
interpretacion:
  enabled: true
  archivo: "interpretacion.yaml"
  ui:
    tab_label:
      es: "Ver Tensión"
      en: "View Tension"
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
