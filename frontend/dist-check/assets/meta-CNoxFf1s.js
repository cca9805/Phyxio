const e=`version: 5
id: ley-de-gravitacion-universal
nombre:
  es: Ley de gravitacion universal
  en: Universal Law of Gravitation
titulo:
  es: Ley de gravitacion universal
  en: Universal Law of Gravitation
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: gravitacion
orden: 216100
parent_id: gravitacion
niveles:
  es: [ ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR ]
  en: [ Secondary, Upper Secondary, University, Extracurricular ]
icon: "🎳"
ruta_relativa: fisica-clasica/mecanica/gravitacion/ley-de-gravitacion-universal
descripcion: Ley fisica que relaciona fuerza, masa y distancia con dependencia inversa cuadratica.
description_en: Physical law relating force, mass, and distance through inverse-square dependence.
descripcion_corta: Fuerza gravitatoria, campo y aceleración bajo dependencia inversa cuadrática.
dificultad: 2
tiempo_estimado_min: 55
magnitud_dominante: F
representacion_dominante: Coord
physical_role:
  es: ley física
  en: physical law
pregunta_fisica_central:
  es: "¿Como determina la ley de gravitacion universal la fuerza entre masas y como cambia esa fuerza al variar la distancia?"
  en: "How does the universal law of gravitation determine force between masses, and how does that force change with distance?"
objetivos:
  - es: Relacionar la fuerza gravitatoria con las masas y la distancia radial.
    en: Relate gravitational force with masses and radial distance.
  - es: Diferenciar entre fuerza de interacción, campo gravitatorio y peso.
    en: Differentiate between interaction force, gravitational field, and weight.
  - es: Predecir cambios en la fuerza mediante la ley del inverso del cuadrado.
    en: Predict changes in force through the inverse square law.
suposiciones:
  - es: Masas puntuales o cuerpos con simetría esférica.
    en: Point masses or bodies with spherical symmetry.
  - es: Régimen newtoniano clásico sin efectos relativistas.
    en: Classical Newtonian regime without relativistic effects.
competencias_lomloe: [STEM, razonamiento_cientifico, modelizacion, resolucion_problemas]
prerequisitos:
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
- fisica-clasica/mecanica/trabajo-y-energia/energia-potencial
tags:
  es: [ gravitacion, ley-de-newton, campo-gravitatorio, peso, mecanica ]
  en: [ gravitation, newton-law, gravitational-field, weight, mechanics ]
graficos:
- Coord
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Lectura de la Ley
      en: Law Reading
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
  output_policy:
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
    max_inline_messages: 3
    show_status_icons: true
    allow_collapsible_sections: true
  dependencies:
    requires_magnitudes: true
    requires_formulas: true
    supports_graph_binding: true
`;export{e as default};
