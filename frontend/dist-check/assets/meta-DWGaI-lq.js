const e=`version: 5
id: teorema-de-transporte-de-reynolds
nombre:
  es: Teorema de transporte de Reynolds
  en: Reynolds Transport Theorem
titulo:
  es: Teorema de transporte de Reynolds
  en: Reynolds Transport Theorem
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
parent_id: dinamica-de-fluidos
ruta_relativa: fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/teorema-de-transporte-de-reynolds
orden: 218356
dificultad: 5
tiempo_estimado_min: 75
niveles:
  es:
  - UNIVERSIDAD
  en:
  - University
icon: 🔁
descripcion: Teorema de transporte de Reynolds en mecanica avanzada.
description_en: Reynolds Transport Theorem in advanced mechanics.
descripcion_corta: el teorema de transporte separa acumulacion interna y flujo a traves de la superficie de control
magnitud_dominante: B
representacion_dominante: none
physical_role:
  es: metodo de resolucion
  en: resolution method
pregunta_fisica_central:
  es: ¿Como convierte el teorema de transporte de Reynolds una ley de sistema en un balance de volumen de control?
  en: How does Reynolds transport theorem convert a system law into a control-volume balance?
prerequisitos:
- fisica-clasica/mecanica/fluidos/fluidos-reales/flujo-en-tuberias
tags:
  es:
  - teorema-de-transporte-de-reynolds
  - mecanica-avanzada
  - modelo
  en:
  - teorema-de-transporte-de-reynolds
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
