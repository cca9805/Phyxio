const e=`id: tercera-ley-accion-reaccion
nombre:
  es: Tercera ley accion reaccion
  en: Newton's Third Law (Action and Reaction)
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: leyes-de-newton
ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/tercera-ley-accion-reaccion
orden: 212113
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
icon: ✅
descripcion: Toda interaccion entre dos sistemas produce fuerzas iguales en modulo
  y opuestas sobre cuerpos distintos.
description_en: Every interaction between two systems produces forces equal in magnitude
  and opposite on different bodies.
tags:
  es:
  - dinamica
  - tercera-ley
  - accion-reaccion
  - interacciones
  - par-de-fuerzas
  en:
  - dynamics
  - third-law
  - action-reaction
  - interactions
  - force-pairs
prerequisitos:
- fundamentos/conceptos-estructurales/sistema-fisico
- fundamentos/conceptos-estructurales/fuerza-neta-y-resultante
- fundamentos/conceptos-estructurales/interacciones-y-fuerzas
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/primera-ley-inercia
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
pregunta_fisica_central:
  es: "¿Cómo se relacionan las fuerzas que dos cuerpos se ejercen mutuamente en una interacción mecánica?"
  en: "How are the forces that two bodies exert on each other in a mechanical interaction related?"
graficos:
- Dcl
- Svg
representacion_dominante: Dcl
magnitud_dominante: FBA
physical_role:
  es: ley física
  en: physical law
dificultad: 3
tiempo_estimado_min: 60
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
    preferred_type: Dcl
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
