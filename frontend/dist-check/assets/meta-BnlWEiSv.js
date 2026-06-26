const e=`id: velocidad-orbital
parent_id: orbitas-y-satelites
type: leaf
version: 5
nombre:
  es: Velocidad orbital
  en: Orbital Velocity
titulo:
  es: Velocidad orbital
  en: Orbital Velocity
icon: ⚖
orden: 216410
dificultad: 3
tiempo_estimado_min: 40
descripcion: Velocidad orbital y umbral de escape en campo gravitatorio central.
description_en: Orbital speed and escape threshold in a central gravitational field.
descripcion_corta: Velocidad necesaria para mantener órbita estable y umbral de escape.
niveles:
  es: [ ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR ]
  en: [ Secondary, Upper Secondary, University, Extracurricular ]
tags:
  es: [ velocidad orbital, velocidad de escape, vis viva, gravitacion ]
  en: [ orbital velocity, escape velocity, vis viva, gravitation ]
objetivos:
  - es: Calcular la rapidez circular necesaria en un radio dado.
    en: Calculate the necessary circular speed at a given radius.
  - es: Distinguir entre rapidez orbital y umbral de escape.
    en: Distinguish between orbital speed and escape threshold.
  - es: Aplicar la ecuación de vis viva en trayectorias no circulares.
    en: Apply the vis viva equation in non-circular trajectories.
suposiciones:
  - es: Fuente central puntual o con simetría esférica.
    en: Point central source or with spherical symmetry.
  - es: Masa del satélite despreciable frente a la masa central.
    en: Satellite mass negligible compared to central mass.
competencias_lomloe: [STEM, razonamiento_cientifico, modelizacion, resolucion_problemas]
prerequisitos:
  - fisica-clasica/mecanica/gravitacion/ley-de-gravitacion-universal
  - fisica-clasica/mecanica/gravitacion/campo-y-potencial-gravitatorio
ruta_relativa: fisica-clasica/mecanica/gravitacion/orbitas-y-satelites/velocidad-orbital
area: fisica-clasica
bloque: mecanica
subbloque: gravitacion
graficos: [ Coord, Svg ]
representacion_dominante: Coord
magnitud_dominante: v_orb
physical_role:
  es: concepto físico
  en: physical concept
pregunta_fisica_central:
  es: "¿Como se determina la velocidad orbital y como cambia al variar la distancia radial?"
  en: "How is orbital velocity determined and how does it change with radial distance?"
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Interpretación
      en: Interpretation
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    show_summary: true
    show_physical_reading: true
    show_coherence: true
    show_model_validity: true
    show_graph_reading: true
    show_likely_errors: true
    show_next_step: true
  mini_graph:
    enabled: true
    preferred_type: Coord
    fallback_order: [ Coord, Svg ]
  output_policy:
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
    max_inline_messages: 3
    show_status_icons: true
    allow_collapsible_sections: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{e as default};
