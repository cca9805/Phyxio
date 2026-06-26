const e=`version: 5
id: campo-y-potencial-gravitatorio
nombre:
  es: Campo y potencial gravitatorio
  en: Gravitational Field and Potential
titulo:
  es: Campo y potencial gravitatorio
  en: Gravitational Field and Potential
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: gravitacion
orden: 216200
parent_id: gravitacion
niveles:
  es: [ ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR ]
  en: [ Secondary, Upper Secondary, University, Extracurricular ]
icon: "🧨"
ruta_relativa: fisica-clasica/mecanica/gravitacion/campo-y-potencial-gravitatorio
descripcion: Relación entre campo gravitatorio, potencial y energía para modelar sistemas astronómicos.
description_en: Relationship between gravitational field, potential, and energy for astronomical modeling.
descripcion_corta: Diferencia entre campo (aceleración local) y potencial (estado energético).
dificultad: 3
tiempo_estimado_min: 60
magnitud_dominante: g
representacion_dominante: Coord
physical_role:
  es: magnitud física
  en: physical quantity
pregunta_fisica_central:
  es: "¿Cómo se conectan el campo y el potencial gravitatorio para predecir movimiento y energía?"
  en: "How do gravitational field and potential connect to predict motion and energy?"
objetivos:
  - es: Distinguir entre campo gravitatorio (descripción local) y potencial (descripción energética).
    en: Distinguish between gravitational field (local description) and potential (energy description).
  - es: Calcular cambios de energía potencial y trabajo gravitatorio entre dos radios.
    en: Calculate changes in potential energy and gravitational work between two radii.
  - es: Aplicar el principio de superposición en sistemas de múltiples masas.
    en: Apply the superposition principle in multiple mass systems.
suposiciones:
  - es: Modelo clásico no relativista de fuente esférica o puntual.
    en: Classical non-relativistic model of a spherical or point source.
  - es: Referencia de potencial nulo en el infinito.
    en: Zero potential reference at infinity.
competencias_lomloe: [STEM, razonamiento_cientifico, modelizacion, resolucion_problemas]
prerequisitos:
- fisica-clasica/mecanica/gravitacion/ley-de-gravitacion-universal
tags:
  es: [ gravitacion, campo, potencial, energia, mecanica ]
  en: [ gravitation, field, potential, energy, mechanics ]
graficos:
- Coord
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Lectura Campo-Potencial
      en: Field-Potential Reading
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
