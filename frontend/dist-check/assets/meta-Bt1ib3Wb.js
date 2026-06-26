const e=`version: 5
id: problemas-con-ligaduras
nombre:
  es: Problemas con ligaduras
  en: Problems with Constraints
titulo:
  es: Problemas con ligaduras
  en: Problems with Constraints
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: mecanica-analitica
parent_id: aplicaciones
ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/aplicaciones/problemas-con-ligaduras
orden: 219530
dificultad: 3
tiempo_estimado_min: 60
niveles:
  es: [ UNIVERSIDAD ]
  en: [ University ]
icon: "🧪"
descripcion: Analiza aceleracion comun y tension en sistemas acoplados con ligaduras ideales.
description_en: Analyzes common acceleration and tension in coupled systems with ideal constraints.
descripcion_corta: Dinamica de masas acopladas por cuerda y polea en regimen ideal.
magnitud_dominante: a
representacion_dominante: Coord
physical_role:
  es: concepto físico
  en: physical concept
pregunta_fisica_central:
  es: "¿Como fijan las ligaduras ideales la aceleracion comun y la tension interna en sistemas acoplados?"
  en: "How do ideal constraints set common acceleration and internal tension in coupled systems?"
prerequisitos:
- fisica-clasica/mecanica/mecanica-analitica/ligaduras-y-grados-de-libertad
tags:
  es: [ ligaduras, atwood, tension, aceleracion, dinamica ]
  en: [ constraints, atwood, tension, acceleration, dynamics ]
objetivos:
- es: Calcular aceleracion comun en sistemas de masas acopladas.
  en: Compute common acceleration in coupled-mass systems.
- es: Interpretar tension interna como efecto de acoplamiento y no fuerza externa independiente.
  en: Interpret internal tension as a coupling effect rather than an independent external force.
- es: Delimitar cuando el modelo ideal de cuerda y polea deja de ser suficiente.
  en: Delimit when the ideal rope-pulley model stops being sufficient.
suposiciones:
- es: Cuerda inextensible, masa despreciable y polea ideal sin friccion.
  en: Inextensible rope, negligible rope mass, and ideal frictionless pulley.
- es: Campo gravitatorio uniforme y ausencia de perdidas disipativas dominantes.
  en: Uniform gravitational field and absence of dominant dissipative losses.
competencias_lomloe: [ STEM, modelizacion, razonamiento_cientifico, resolucion_problemas ]
graficos: [ Coord, Svg ]
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Lectura de ligaduras
      en: Constraint Reading
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
