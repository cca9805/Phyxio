const e=`id: sistema-abierto
nombre:
  es: Sistema abierto
  en: Open System
area: fisica-clasica
bloque: termodinamica
subbloque: fundamentos
parent_id: sistemas-termodinamicos
ruta_relativa: fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-abierto
orden: 251110
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD]
  en: [Secondary, Upper Secondary, University]
icon: ⚡
descripcion: "Sistema abierto: intercambia energia y masa con el entorno."
description_en: "Open system: exchanges energy and mass with surroundings."
tags:
  es: [termodinamica, sistema, abierto, masa, energia]
  en: [thermodynamics, system, open, mass, energy]
prerequisitos: []
graficos: [Coord]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: Como cambia la energia de un sistema abierto cuando cruzan masa, calor y trabajo por su frontera?
  en: How does the energy of an open system change when mass, heat, and work cross its boundary?
representacion_dominante: Coord
magnitud_dominante: m_dot
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
