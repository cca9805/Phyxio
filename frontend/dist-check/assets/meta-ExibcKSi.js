const a=`version: 5
id: principio-variacional-y-accion
nombre:
  es: Principio variacional y accion
  en: Variational Principle and Action
titulo:
  es: Principio variacional y accion
  en: Variational Principle and Action
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: mecanica-analitica
parent_id: lagrangiano
ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/lagrangiano/principio-variacional-y-accion
orden: 219315
dificultad: 4
tiempo_estimado_min: 65
niveles:
  es: [ UNIVERSIDAD ]
  en: [ University ]
icon: "🧭"
descripcion: Accion, variacion estacionaria y significado fisico del principio de Hamilton.
description_en: Action, stationary variation, and the physical meaning of Hamilton's principle.
descripcion_corta: La accion selecciona la trayectoria fisica mediante estacionariedad variacional.
magnitud_dominante: S
representacion_dominante: none
physical_role:
  es: principio físico
  en: physical principle
pregunta_fisica_central:
  es: "¿Como selecciona el principio de accion estacionaria la trayectoria fisica entre todas las trayectorias cinematicamente posibles?"
  en: "How does the stationary-action principle select the physical path among all kinematically possible paths?"
prerequisitos:
- fisica-clasica/mecanica/mecanica-analitica/lagrangiano/energia-cinetica-y-potencial
tags:
  es: [ accion, principio-variacional, principio-de-hamilton, lagrangiano, euler-lagrange ]
  en: [ action, variational-principle, hamilton-principle, lagrangian, euler-lagrange ]
objetivos:
- es: Interpretar la accion como acumulacion temporal del lagrangiano.
  en: Interpret action as the time accumulation of the Lagrangian.
- es: Distinguir trayectoria posible, trayectoria fisica y variacion virtual de la trayectoria.
  en: Distinguish a possible path, the physical path, and a virtual variation of the path.
- es: Entender por que Euler-Lagrange aparece como condicion local de accion estacionaria.
  en: Understand why Euler-Lagrange appears as the local condition for stationary action.
suposiciones:
- es: Sistema clasico con coordenadas generalizadas suaves y extremos temporales fijados.
  en: Classical system with smooth generalized coordinates and fixed time endpoints.
- es: Lagrangiano regular y variaciones compatibles con las condiciones de contorno.
  en: Regular Lagrangian and variations compatible with boundary conditions.
competencias_lomloe: [ STEM, modelizacion, razonamiento_cientifico, resolucion_problemas ]
graficos: []
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Lectura variacional
      en: Variational reading
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
`;export{a as default};
