const e=`version: 5
id: marco-rotante-general
nombre:
  es: Marco rotante general
  en: General Rotating Frame
titulo:
  es: Marco rotante general
  en: General Rotating Frame
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: marcos-no-inerciales
ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/marco-rotante-general
orden: 212640
dificultad: 5
tiempo_estimado_min: 75
niveles:
  es:
  - UNIVERSIDAD
  en:
  - University
icon: 🧭
descripcion: Marco rotante general en mecanica avanzada.
description_en: General Rotating Frame in advanced mechanics.
descripcion_corta: un marco rotante general separa aceleracion relativa, transporte, Coriolis, centrifuga y Euler
magnitud_dominante: a_abs
representacion_dominante: none
physical_role:
  es: marco de referencia
  en: reference frame
pregunta_fisica_central:
  es: ¿Como se descompone la aceleracion absoluta cuando el observador pertenece a un marco rotante general?
  en: How is absolute acceleration decomposed in a general rotating frame?
prerequisitos:
- fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/sistemas-no-inerciales-intro
tags:
  es:
  - marco-rotante-general
  - mecanica-avanzada
  - modelo
  en:
  - marco-rotante-general
  - advanced-mechanics
  - model
objetivos:
- es: Identificar el objeto fisico central del leaf.
  en: Identify the central physical object of the leaf.
- es: Aplicar las formulas dentro de su dominio de validez.
  en: Apply the formulas within their validity domain.
- es: Interpretar el resultado como criterio de modelo avanzado.
  en: Interpret the result as an advanced model criterion.
suposiciones:
- es: Sistema clasico descrito por variables suaves y unidades coherentes.
  en: Classical system described by smooth variables and coherent units.
- es: Dominio fisico compatible con las hipotesis especificas del leaf.
  en: Physical domain compatible with the specific assumptions of the leaf.
competencias_lomloe:
- STEM
- modelizacion
- razonamiento_cientifico
- resolucion_problemas
graficos: []
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Interpretacion avanzada
      en: Advanced interpretation
    inline_calculator: true
    inline_graph: false
    dedicated_tab: true
    show_summary: true
    show_physical_reading: true
    show_coherence: true
    show_model_validity: true
    show_graph_reading: true
    show_likely_errors: true
    show_next_step: true
  mini_graph:
    enabled: false
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
    supports_graph_binding: false
`;export{e as default};
