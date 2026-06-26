const e=`area: fisica-clasica
bloque: mecanica
descripcion: Modelo de arrastre proporcional a la velocidad para movimientos lentos en fluidos viscosos.
description_en: Drag model proportional to speed for slow motion in viscous fluids.
dificultad: 3
graficos:
- Coord
- Dcl
icon: 💨
id: arrastre-lineal
interpretacion:
  archivo: interpretacion.yaml
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
  enabled: true
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    max_inline_messages: 3
    show_likely_errors: true
    show_summary_first: true
    show_warnings: true
  ui:
    dedicated_tab: true
    inline_calculator: true
    inline_graph: true
    tab_label:
      en: Interpretation
      es: Interpretacion
magnitud_dominante: F_d
niveles:
  en:
  - Secondary
  - Upper Secondary
  es:
  - ESO
  - BACHILLERATO
nombre:
  en: Linear Drag
  es: Arrastre lineal
orden: 212271
parent_id: fuerza-de-arrastre
physical_role:
  en: physical model
  es: modelo fisico
pregunta_fisica_central:
  en: How can we read in an FBD and in a drag-versus-speed graph that linear drag grows in proportion to relative speed and introduces a characteristic response time?
  es: ¿Como leer en un DCL y en una grafica de arrastre frente a rapidez que el arrastre lineal crece en proporcion a la rapidez relativa e introduce un tiempo caracteristico de respuesta?
prerequisitos:
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
representacion_dominante: Coord
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/fuerza-de-arrastre/arrastre-lineal
subbloque: dinamica
tags:
  en:
  - dynamics
  - drag
  - viscosity
  - stokes
  - linear-model
  es:
  - dinamica
  - arrastre
  - viscosidad
  - stokes
  - modelo-lineal
tiempo_estimado_min: 50
type: leaf
version: 5
`;export{e as default};
