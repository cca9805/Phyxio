const n=`id: sistema-aislado

nombre:
  es: Sistema aislado
  en: Isolated System

area: fisica-clasica
bloque: termodinamica
subbloque: fundamentos
parent_id: sistemas-termodinamicos

ruta_relativa: fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-aislado
orden: 251130
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

icon: 📘

descripcion: Sistema termodinámico sin intercambio de materia ni energía con el entorno.
description_en: Thermodynamic system that exchanges neither matter nor energy with surroundings.

tags:
  es:
    - sistema aislado
    - termodinámica
    - frontera rígida
    - energía interna
    - equilibrio
    - conservación
  en:
    - isolated system
    - thermodynamics
    - rigid boundary
    - internal energy
    - equilibrium
    - conservation

prerequisitos:
  - fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-abierto
  - fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-cerrado

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

dificultad: 2
tiempo_estimado_min: 25

pregunta_fisica_central:
  es: Que sucede con la energia interna y la entropia de un sistema cuando su frontera impide todo intercambio con el entorno?
  en: What happens to the internal energy and entropy of a system when its boundary prevents all exchange with the surroundings?

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
