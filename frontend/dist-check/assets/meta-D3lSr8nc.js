const e=`id: coherencia
nombre:
  es: Coherencia
  en: Coherence
area: fisica-clasica
bloque: electromagnetismo
subbloque: optica
parent_id: optica-fisica
ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-fisica/coherencia
orden: 297240
type: leaf
dificultad: 3
tiempo_estimado_min: 45
niveles:
  es:
    - ESO
    - BACHILLERATO
    - UNIVERSIDAD
    - EXTRACURRICULAR
  en:
    - Secondary
    - Upper Secondary
    - University
    - Extracurricular
icon: "📘"
descripcion: "Coherencia temporal, visibilidad de franjas y estabilidad de fase en optica fisica."
description_en: "Temporal coherence, fringe visibility, and phase stability in physical optics."
tags:
  es: [coherencia, interferencia, franjas, fase, optica fisica]
  en: [coherence, interference, fringes, phase, physical optics]
prerequisitos:
  - fisica-clasica/electromagnetismo/optica/optica-fisica/interferencia-de-la-luz
graficos:
  - Coord
physical_role:
  es: "concepto físico"
  en: "physical concept"
representacion_dominante: Coord
magnitud_dominante: "C_rel"
pregunta_fisica_central:
  es: "¿Como determina la coherencia si una fuente mantiene franjas de interferencia observables?"
  en: "How does coherence determine whether a source maintains observable interference fringes?"
interpretacion:
  enabled: true
  archivo: "interpretacion.yaml"
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: "Interpretacion"
      en: "Interpretation"
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{e as default};
