const n=`version: v5
id: interferencia-constructiva
nombre:
  es: Interferencia constructiva
  en: Constructive Interference
area: fisica-clasica
bloque: ondas
subbloque: fenomenos-ondulatorios
parent_id: interferencia
ruta_relativa: fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-constructiva
orden: 233410
type: leaf
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
descripcion: Refuerzo de ondas coherentes cuando llegan en fase.
description_en: Reinforcement of coherent waves when they arrive in phase.
tags:
  es:
    - ondas
    - interferencia
    - fase
    - superposicion
    - intensidad
  en:
    - waves
    - interference
    - phase
    - superposition
    - intensity
prerequisitos:
  - fisica-clasica/ondas/fenomenos-ondulatorios/superposicion
graficos:
  - Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: ¿Cuando dos ondas coherentes se refuerzan y como se predice la intensidad resultante?
  en: When do two coherent waves reinforce each other and how is the resulting intensity predicted?
representacion_dominante: Coord
magnitud_dominante: I_resultante
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    max_inline_messages: 4
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
