const n=`version: 5
id: energia-potencial-gravitatoria
nombre:
  es: Energia potencial gravitatoria
  en: Gravitational Potential Energy
titulo:
  es: Energia potencial gravitatoria
  en: Gravitational Potential Energy
titulo_en: Gravitational Potential Energy
area: fisica-clasica
bloque: mecanica
subbloque: trabajo-y-energia
parent_id: energia-potencial
type: leaf
ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-gravitatoria
orden: 214310
icon: "📌"
descripcion: Energia de estado asociada a la altura en un campo gravitatorio uniforme.
description_en: State energy linked to height in a uniform gravitational field.
dificultad: 2
tiempo_estimado_min: 35
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  en:
  - Secondary
  - Upper Secondary
  - University
prerequisitos:
- fisica-clasica/mecanica/trabajo-y-energia/energia-cinetica
- fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo
tags:
  es:
  - energia-potencial-gravitatoria
  - gravedad
  - altura
  - trabajo
  - energia
  en:
  - gravitational-potential-energy
  - gravity
  - height
  - work
  - energy
physical_role:
  es: magnitud física
  en: physical quantity
graficos:
- Coord
representacion_dominante: Coord
magnitud_dominante: Ug
pregunta_fisica_central:
  es: ¿Como conecta la altura con la energia potencial gravitatoria y el trabajo de la gravedad?
  en: How does height connect to gravitational potential energy and gravity work?
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    show_tab: true
    show_inline_cards: true
    allow_contextual_feedback: true
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
    output_magnitude: Ug
  output_policy:
    show_summary: true
    show_summary_first: true
    show_physical_reading: true
    show_coherence_checks: true
    show_model_limitations: true
    show_warnings: true
    show_likely_errors: true
    max_inline_messages: 4
  dependencies:
    require_formulas: true
    require_magnitudes: true
    require_examples: true
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
