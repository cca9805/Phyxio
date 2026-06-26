const e=`version: 5
id: energia-cinetica-y-potencial
nombre:
  es: Energia cinetica y potencial
  en: Kinetic and Potential Energy
titulo:
  es: Energia cinetica y potencial
  en: Kinetic and Potential Energy
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: mecanica-analitica
parent_id: lagrangiano
ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/lagrangiano/energia-cinetica-y-potencial
orden: 219310
dificultad: 3
tiempo_estimado_min: 60
niveles:
  es: [ UNIVERSIDAD ]
  en: [ University ]
icon: "📗"
descripcion: Construccion lagrangiana a partir de energia cinetica y energia potencial.
description_en: Lagrangian construction from kinetic and potential energy.
descripcion_corta: Relacion entre energia cinetica, potencial y funcion lagrangiana.
magnitud_dominante: L
representacion_dominante: none
physical_role:
  es: magnitud física
  en: physical quantity
pregunta_fisica_central:
  es: "¿Como se construye el lagrangiano a partir de energia cinetica y potencial para describir la dinamica con coordenadas generalizadas?"
  en: "How is the Lagrangian built from kinetic and potential energy to describe dynamics with generalized coordinates?"
prerequisitos:
- fundamentos/vectores-y-componentes
tags:
  es: [ lagrangiano, energia-cinetica, energia-potencial, coordenadas-generalizadas, mecanica-analitica ]
  en: [ lagrangian, kinetic-energy, potential-energy, generalized-coordinates, analytical-mechanics ]
objetivos:
- es: Construir T y V en las coordenadas del problema antes de formar L.
  en: Build T and V in the problem coordinates before forming L.
- es: Distinguir energia mecanica E de lagrangiano L aunque compartan unidades.
  en: Distinguish mechanical energy E from Lagrangian L even though they share units.
- es: Interpretar que parte del modelo domina cuando T supera a V o V supera a T.
  en: Interpret which part of the model dominates when T exceeds V or V exceeds T.
suposiciones:
- es: Sistema clasico con energia cinetica y potencial expresables de forma diferenciable.
  en: Classical system with kinetic and potential energy expressible differentiably.
- es: Las energias comparadas pertenecen al mismo sistema, referencia y conjunto de coordenadas.
  en: Compared energies belong to the same system, reference, and coordinate set.
competencias_lomloe: [ STEM, modelizacion, razonamiento_cientifico, resolucion_problemas ]
graficos: []
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Lectura energetica
      en: Energy reading
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
