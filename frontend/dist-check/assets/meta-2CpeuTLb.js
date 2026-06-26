const e=`id: concepto-fuerza-centripeta
nombre:
  es: Concepto fuerza centripeta
  en: The Concept of Centripetal Force
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: fuerza-centripeta
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/fuerza-centripeta/concepto-fuerza-centripeta
orden: 212261
type: leaf
niveles:
  es:
  - ESO
  - BACHILLERATO
  en:
  - Secondary
  - Upper Secondary
icon: "\\U0001F504"
descripcion: Fuerza neta radial que mantiene el movimiento circular.
description_en: Net radial force that sustains circular motion.
tags:
  es:
  - fuerza centripeta
  - movimiento circular
  - aceleracion centripeta
  - segunda ley radial
  en:
  - centripetal force
  - circular motion
  - centripetal acceleration
  - radial second law
prerequisitos:
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
graficos:
- Coord
- Dcl
- Svg
physical_role:
  es: "ley f\\u00EDsica"
  en: physical law
dificultad: 3
tiempo_estimado_min: 70
pregunta_fisica_central:
  es: "¿Como se identifica y se interpreta la fuerza centripeta como resultante radial de fuerzas reales en un movimiento circular?"
  en: "How do we identify and interpret centripetal force as the radial resultant of real forces in circular motion?"
representacion_dominante: Coord
magnitud_dominante: Fc
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
    supports_graph_binding: true
`;export{e as default};
