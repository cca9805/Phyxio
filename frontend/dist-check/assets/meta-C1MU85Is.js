const n=`id: rozamiento-y-disipacion
nombre:
  es: Rozamiento y disipacion
  en: Friction and Dissipation
area: fisica-clasica
bloque: mecanica
subbloque: trabajo-y-energia
parent_id: fuerzas-no-conservativas
ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/fuerzas-no-conservativas/rozamiento-y-disipacion
orden: 214510
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
icon: 🔋
descripcion: Rozamiento, trabajo negativo y perdida de energia mecanica por disipacion.
description_en: Friction, negative work, and mechanical-energy loss by dissipation.
tags:
  es:
  - rozamiento
  - disipacion
  - trabajo
  - energia
  - potencia
  en:
  - friction
  - dissipation
  - work
  - energy
  - power
prerequisitos:
- fisica-clasica/mecanica/dinamica/fuerzas/rozamiento
- fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo
graficos:
- Coord
- Dcl
physical_role:
  es: magnitud física
  en: physical quantity
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
      es: Interpretacion
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
pregunta_fisica_central:
  es: ¿Como cuantifica el rozamiento la perdida de energia mecanica y su conversion en disipacion?
  en: How does friction quantify mechanical-energy loss and its conversion into dissipation?
representacion_dominante: Coord
magnitud_dominante: Edis
`;export{n as default};
