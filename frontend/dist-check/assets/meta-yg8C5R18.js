const n=`version: 5
id: oscilador-armonico
nombre:
  es: Oscilador armonico
  en: Harmonic Oscillator
titulo:
  es: Oscilador armonico
  en: Harmonic Oscillator
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: mecanica-analitica
parent_id: aplicaciones
ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/aplicaciones/oscilador-armonico
orden: 219510
dificultad: 3
tiempo_estimado_min: 60
niveles:
  es: [UNIVERSIDAD]
  en: [University]
icon: "⚡"
descripcion: Analiza frecuencia, periodo y energia de un oscilador armonico ideal.
description_en: Analyzes frequency, period, and energy of an ideal harmonic oscillator.
descripcion_corta: Frecuencia natural, periodo y energia en movimiento armonico simple.
magnitud_dominante: omega
representacion_dominante: Coord
physical_role:
  es: concepto físico
  en: physical concept
pregunta_fisica_central:
  es: "¿Como fijan masa, rigidez y amplitud el ritmo y la energia del oscilador armonico?"
  en: "How do mass, stiffness, and amplitude set the rhythm and energy of a harmonic oscillator?"
prerequisitos:
  - fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/ecuaciones-de-hamilton
tags:
  es: [oscilador, frecuencia, periodo, energia, lagrangiano]
  en: [oscillator, frequency, period, energy, lagrangian]
objetivos:
  - es: Calcular frecuencia angular y periodo natural.
    en: Compute angular frequency and natural period.
  - es: Interpretar energia total desde amplitud y rigidez.
    en: Interpret total energy from amplitude and stiffness.
  - es: Conectar el oscilador con modelos analiticos lineales.
    en: Connect the oscillator with linear analytical models.
suposiciones:
  - es: Muelle lineal, masa constante y rozamiento despreciable.
    en: Linear spring, constant mass, and negligible damping.
  - es: Oscilaciones pequenas alrededor del equilibrio estable.
    en: Small oscillations around stable equilibrium.
competencias_lomloe: [STEM, modelizacion, razonamiento_cientifico, resolucion_problemas]
graficos: [Coord, Svg]
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Lectura oscilatoria
      en: Oscillatory Reading
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
`;export{n as default};
