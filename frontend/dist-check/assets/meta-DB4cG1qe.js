const e=`version: 5
id: ecuaciones-de-euler
nombre:
  es: Ecuaciones de Euler del solido rigido
  en: Euler Equations for a Rigid Body
titulo:
  es: Ecuaciones de Euler del solido rigido
  en: Euler Equations for a Rigid Body
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: rotacion
parent_id: solido-rigido-3d
ruta_relativa: fisica-clasica/mecanica/rotacion/dinamica/solido-rigido-3d/ecuaciones-de-euler
orden: 213290
dificultad: 5
tiempo_estimado_min: 75
niveles:
  es:
  - UNIVERSIDAD
  en:
  - University
icon: 🧭
descripcion: Ecuaciones de Euler del solido rigido en mecanica avanzada.
description_en: Euler Equations for a Rigid Body in advanced mechanics.
descripcion_corta: las ecuaciones de Euler acoplan las componentes de velocidad angular en ejes principales
magnitud_dominante: tau1
representacion_dominante: none
physical_role:
  es: ley fisica
  en: physical law
pregunta_fisica_central:
  es: ¿Como describen las ecuaciones de Euler la rotacion tridimensional de un solido rigido?
  en: How do Euler equations describe three-dimensional rotation of a rigid body?
prerequisitos:
- fisica-clasica/mecanica/rotacion/dinamica/momento-de-inercia/definicion-momento-de-inercia
tags:
  es:
  - ecuaciones-de-euler
  - mecanica-avanzada
  - modelo
  en:
  - ecuaciones-de-euler
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
