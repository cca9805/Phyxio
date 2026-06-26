const e=`version: 5
id: concepto-de-fluido
type: leaf
icon: "💧"
nombre:
  es: Concepto de fluido
  en: Concept of a Fluid
descripcion: "Define la naturaleza de los fluidos como sustancias que se deforman continuamente bajo esfuerzos cortantes."
description_en: "Defines the nature of fluids as substances that deform continuously under shear stress."
pregunta_fisica_central:
  es: "¿Qué diferencia a un fluido de un sólido desde el punto de vista de su respuesta mecánica?"
  en: "What distinguishes a fluid from a solid in terms of its mechanical response?"
representacion_dominante: Svg
magnitud_dominante: mu
tags:
  es: [fluidos, mecanica, viscosidad, deformacion, materia]
  en: [fluids, mechanics, viscosity, deformation, matter]
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD]
  en: [Secondary, Upper Secondary, University]
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
parent_id: fundamentos
ruta_relativa: fisica-clasica/mecanica/fluidos/fundamentos/concepto-de-fluido
physical_role:
  es: concepto físico
  en: physical concept
graficos: [Svg, Coord]
orden: 218110
dificultad: 1
tiempo_estimado_min: 30
prerequisitos: [materia-y-energia]
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: "Análisis de Fluidez"
      en: "Fluidity Analysis"
  mini_graph:
    enabled: true
    preferred_type: Svg
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
