const n=`version: 1
id: condicion-sumatoria-fuerzas
parent_id: equilibrio-traslacion
nombre:
  es: Condicion sumatoria fuerzas
  en: Net Force Balance Condition
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
ruta_relativa: fisica-clasica/mecanica/dinamica/estatica/equilibrio-traslacion/condicion-sumatoria-fuerzas
orden: 212311
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
icon: "\\U0001F9F1"
descripcion: Criterio de equilibrio traslacional por anulacion vectorial de fuerzas externas.
description_en: Translational equilibrium criterion via vector cancellation of external forces.
tags:
  es:
    - estatica
    - equilibrio
    - sumatoria-fuerzas
    - primera-ley-newton
  en:
    - statics
    - equilibrium
    - force-balance
    - newtons-first-law
prerequisitos:
  - fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
  - fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/diagramas-cuerpo-libre
graficos:
  - Coord
  - Dcl
physical_role:
  es: "ley física"
  en: physical law
dificultad: 3
tiempo_estimado_min: 60
pregunta_fisica_central:
  es: "¿Cómo verificar en el gráfico Coord la condición de sumatoria de fuerzas leyendo sumFx, sumFy y la resultante R para confirmar equilibrio traslacional?"
  en: "How can we verify in the Coord graph the force-balance condition by reading sumFx, sumFy, and the resultant R to confirm translational equilibrium?"
representacion_dominante: Coord
magnitud_dominante: R
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: "Interpretacion"
      en: Interpretation
  mini_graph:
    enabled: false
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: false
`;export{n as default};
