const e=`id: equilibrio-termodinamico
nombre:
  es: Equilibrio termodinamico
  en: Thermodynamic Equilibrium
area: fisica-clasica
bloque: termodinamica
subbloque: fundamentos
parent_id: fundamentos
ruta_relativa: fisica-clasica/termodinamica/fundamentos/equilibrio-termodinamico
orden: 251300
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD]
  en: [Secondary, Upper Secondary, University]
icon: ✅
descripcion: "Equilibrio termodinamico: gradientes internos anulados en sistemas macroscopicos."
description_en: "Thermodynamic equilibrium: internal gradients vanished in macroscopic systems."
tags:
  es: [termodinamica, equilibrio, temperatura, presion, potencial]
  en: [thermodynamics, equilibrium, temperature, pressure, potential]
prerequisitos:
  - fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos
  - fisica-clasica/termodinamica/fundamentos/variables-termodinamicas
graficos: [Dcl, Svg]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: Como se reconoce que un sistema termodinamico dejo de cambiar porque sus gradientes internos se anularon?
  en: How do we recognize that a thermodynamic system stopped changing because its internal gradients vanished?
representacion_dominante: Dcl
magnitud_dominante: T
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
