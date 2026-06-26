const e=`id: extensivas
nombre:
  es: Extensivas
  en: Extensive Variables
area: fisica-clasica
bloque: termodinamica
subbloque: fundamentos
parent_id: variables-termodinamicas
ruta_relativa: fisica-clasica/termodinamica/fundamentos/variables-termodinamicas/extensivas
orden: 251220
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD]
  en: [Secondary, Upper Secondary, University]
icon: 💪
descripcion: "Variables extensivas: crecen con el tamaño del sistema."
description_en: "Extensive variables: grow with system size."
tags:
  es: [termodinamica, extensivas, masa, volumen, energia]
  en: [thermodynamics, extensive, mass, volume, energy]
prerequisitos: []
graficos: [Coord]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: Como reconocemos que una magnitud termodinamica aumenta al juntar copias del sistema?
  en: How do we recognize that a thermodynamic magnitude increases when copies of the system are joined?
representacion_dominante: Coord
magnitud_dominante: X_ext
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label: { es: Interpretacion fisica, en: Physical interpretation }
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
