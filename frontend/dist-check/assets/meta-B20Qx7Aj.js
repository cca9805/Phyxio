const n=`version: 5
id: sistemas-con-ligaduras-y-dirac
nombre:
  es: Sistemas con ligaduras y Dirac
  en: Constrained Systems and Dirac Brackets
titulo:
  es: Sistemas con ligaduras y Dirac
  en: Constrained Systems and Dirac Brackets
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: mecanica-analitica
parent_id: hamiltoniano
ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/sistemas-con-ligaduras-y-dirac
orden: 219460
dificultad: 5
tiempo_estimado_min: 75
niveles:
  es:
  - UNIVERSIDAD
  en:
  - University
icon: 🔒
descripcion: Sistemas con ligaduras y Dirac en mecanica avanzada.
description_en: Constrained Systems and Dirac Brackets in advanced mechanics.
descripcion_corta: Dirac separa hamiltoniano canonico, ligaduras y corchetes modificados para preservar el espacio fisico
magnitud_dominante: HT
representacion_dominante: none
physical_role:
  es: metodo de resolucion
  en: resolution method
pregunta_fisica_central:
  es: ¿Como organiza el formalismo de Dirac un sistema hamiltoniano con ligaduras en el espacio de fases?
  en: How does Dirac formalism organize a Hamiltonian system with constraints in phase space?
prerequisitos:
- fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/corchetes-de-poisson
tags:
  es:
  - sistemas-con-ligaduras-y-dirac
  - mecanica-avanzada
  - modelo
  en:
  - sistemas-con-ligaduras-y-dirac
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
`;export{n as default};
