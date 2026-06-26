const e=`version: 5
id: fase
type: leaf
nombre:
  es: Fase
  en: Phase
titulo:
  es: Fase
  en: Phase
area: fisica-clasica
bloque: mecanica
subbloque: oscilaciones
parent_id: mhs
ruta_relativa: fisica-clasica/mecanica/oscilaciones/mhs/fase
orden: 217130
icon: 🎓
descripcion: "Subtema: Fase. Teoría, fórmulas, ejemplos y aplicaciones."
description_en: "Content about Fase."
tags:
  es: [ oscilaciones, mhs, fase, desfase ]
  en: [ oscillations, shm, phase, phase-difference ]
prerequisitos:
- fisica-clasica/mecanica/oscilaciones/mhs/ecuacion-movimiento
- fisica-clasica/mecanica/oscilaciones/mhs/energia-en-mhs
niveles:
  es: [ ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR ]
  en: [ Secondary, Upper Secondary, University, Extracurricular ]
physical_role:
  es: concepto físico
  en: physical concept
graficos: [ Coord ]
representacion_dominante: Coord
magnitud_dominante: phi_t
pregunta_fisica_central:
  es: "¿Cómo determina [[phi_t]] el estado instantáneo y cómo se interpreta [[delta_phi]] entre osciladores del mismo MHS ideal?"
  en: "How does [[phi_t]] determine the instantaneous state and how is [[delta_phi]] interpreted between oscillators in the same ideal SHM?"
dificultad: 2
tiempo_estimado_min: 50
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
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
