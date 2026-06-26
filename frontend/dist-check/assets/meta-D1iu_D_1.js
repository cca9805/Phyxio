const n=`id: sistema-cerrado

nombre:
  es: Sistema cerrado
  en: Closed System

area: fisica-clasica
bloque: termodinamica
subbloque: fundamentos
parent_id: sistemas-termodinamicos

ruta_relativa: fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-cerrado
orden: 251120
type: leaf

niveles:
  es:
    - ESO
    - BACHILLERATO
    - UNIVERSIDAD
  en:
    - Secondary
    - Upper Secondary
    - University

icon: 💪

descripcion: Sistema termodinámico que puede intercambiar energía pero no materia con su entorno.
description_en: Thermodynamic system that can exchange energy but not matter with its surroundings.

tags:
  es:
    - sistema cerrado
    - termodinámica
    - primer principio
    - calor
    - trabajo
    - energía interna
  en:
    - closed system
    - thermodynamics
    - first law
    - heat
    - work
    - internal energy

prerequisitos:
  - fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-aislado

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

dificultad: 2
tiempo_estimado_min: 30

pregunta_fisica_central:
  es: Como cambia la energia interna de un sistema cuando intercambia calor y trabajo con su entorno a traves de una frontera impermeable a la materia?
  en: How does the internal energy of a system change when it exchanges heat and work with its surroundings through a boundary impermeable to matter?

representacion_dominante: Coord
magnitud_dominante: DeltaU

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
`;export{n as default};
