const e=`\uFEFFarea: fisica-clasica
bloque: mecanica
descripcion: Criterio adimensional para decidir si dominan viscosidad o inercia y que modelo de arrastre conviene.
description_en: Dimensionless criterion deciding whether viscosity or inertia dominates and which drag model is appropriate.
dificultad: 4
graficos:
- Coord
- Svg
icon: 🌊
id: numero-de-reynolds-y-regimenes-de-arrastre
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
magnitud_dominante: Re
niveles:
  en:
  - Upper Secondary
  - University
  es:
  - BACHILLERATO
  - UNIVERSIDAD
nombre:
  en: Reynolds Number and Drag Regimes
  es: Numero de Reynolds y regimenes de arrastre
orden: 212274
parent_id: fuerza-de-arrastre
physical_role:
  en: model validity criterion
  es: criterio de validez del modelo
pregunta_fisica_central:
  en: How can we read in Coord and in the SVG that Re is not a force, but the criterion deciding whether viscosity or inertia dominates and therefore which drag model should be used?
  es: ¿Como leer en Coord y en SVG que Re no es una fuerza, sino el criterio que decide si domina la viscosidad o la inercia y, por tanto, que modelo de arrastre conviene usar?
prerequisitos:
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez
- fisica-clasica/mecanica/dinamica/fuerzas/fuerza-de-arrastre/arrastre-lineal
- fisica-clasica/mecanica/dinamica/fuerzas/fuerza-de-arrastre/arrastre-cuadratico
representacion_dominante: Coord
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/fuerza-de-arrastre/numero-de-reynolds-y-regimenes-de-arrastre
subbloque: dinamica
tags:
  en:
  - dynamics
  - reynolds
  - drag-regimes
  - viscosity
  - fluid-inertia
  es:
  - dinamica
  - reynolds
  - regimenes-de-arrastre
  - viscosidad
  - inercia-del-fluido
tiempo_estimado_min: 60
type: leaf
version: 5

`;export{e as default};
