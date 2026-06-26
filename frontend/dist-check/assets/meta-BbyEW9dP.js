const r=`version: 5\r
id: energia-potencial-elastica\r
nombre:\r
  es: Energia potencial elastica\r
  en: Elastic Potential Energy\r
titulo:\r
  es: Energia potencial elastica\r
  en: Elastic Potential Energy\r
titulo_en: Elastic Potential Energy\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: trabajo-y-energia\r
parent_id: energia-potencial\r
type: leaf\r
ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-elastica\r
orden: 214320\r
icon: "⚡"\r
descripcion: Energia almacenada en una deformacion elastica lineal respecto de la longitud natural.\r
description_en: Energy stored in a linear elastic deformation measured from the natural length.\r
dificultad: 3\r
tiempo_estimado_min: 45\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
prerequisitos:\r
- fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo\r
- fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo-fuerza-variable\r
- fisica-clasica/mecanica/dinamica/fuerzas/fuerza-elastica/ley-de-hooke\r
tags:\r
  es:\r
  - energia-potencial-elastica\r
  - resorte\r
  - hooke\r
  - trabajo\r
  - deformacion\r
  en:\r
  - elastic-potential-energy\r
  - spring\r
  - hooke\r
  - work\r
  - deformation\r
physical_role:\r
  es: magnitud física\r
  en: physical quantity\r
graficos:\r
- Coord\r
- Dcl\r
representacion_dominante: Coord\r
magnitud_dominante: Ue\r
pregunta_fisica_central:\r
  es: ¿Como cuantifica la energia potencial elastica la deformacion de un resorte y su trabajo asociado?\r
  en: How does elastic potential energy quantify a spring deformation and its associated work?\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    show_tab: true\r
    show_inline_cards: true\r
    allow_contextual_feedback: true\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretacion\r
      en: Interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
    output_magnitude: Ue\r
  output_policy:\r
    show_summary: true\r
    show_summary_first: true\r
    show_physical_reading: true\r
    show_coherence_checks: true\r
    show_model_limitations: true\r
    show_warnings: true\r
    show_likely_errors: true\r
    max_inline_messages: 4\r
  dependencies:\r
    require_formulas: true\r
    require_magnitudes: true\r
    require_examples: true\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{r as default};
