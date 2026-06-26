const e=`version: 5
id: principio-de-dalembert-y-trabajo-virtual
nombre:
  es: Principio de D'Alembert y trabajo virtual
  en: D'Alembert's Principle and Virtual Work
titulo:
  es: Principio de D'Alembert y trabajo virtual
  en: D'Alembert's Principle and Virtual Work
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: mecanica-analitica
parent_id: mecanica-analitica
ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/principio-de-dalembert-y-trabajo-virtual
orden: 219250
dificultad: 4
tiempo_estimado_min: 65
niveles:
  es: [ UNIVERSIDAD ]
  en: [ University ]
icon: "⚖️"
descripcion: Reformula la dinamica con ligaduras ideales mediante equilibrio dinamico y trabajo virtual.
description_en: Reformulates dynamics with ideal constraints through dynamic equilibrium and virtual work.
descripcion_corta: Puente entre Newton, ligaduras ideales y ecuaciones lagrangianas.
magnitud_dominante: Wv
representacion_dominante: none
physical_role:
  es: principio físico
  en: physical principle
pregunta_fisica_central:
  es: "¿Como permite el principio de D'Alembert eliminar fuerzas de ligadura ideales mediante trabajo virtual compatible?"
  en: "How does D'Alembert's principle eliminate ideal constraint forces through compatible virtual work?"
prerequisitos:
- fisica-clasica/mecanica/mecanica-analitica/ligaduras-y-grados-de-libertad
tags:
  es: [ dalembert, trabajo-virtual, ligaduras, fuerzas-generalizadas, mecanica-analitica ]
  en: [ dalembert, virtual-work, constraints, generalized-forces, analytical-mechanics ]
objetivos:
- es: Interpretar las fuerzas de inercia como parte de un equilibrio dinamico.
  en: Interpret inertial forces as part of a dynamic equilibrium.
- es: Reconocer cuando las fuerzas de ligadura no aportan trabajo virtual.
  en: Recognize when constraint forces contribute no virtual work.
- es: Conectar trabajo virtual con fuerzas generalizadas y ecuaciones de Lagrange.
  en: Connect virtual work with generalized forces and Lagrange's equations.
suposiciones:
- es: Ligaduras ideales, variaciones virtuales compatibles y masas constantes.
  en: Ideal constraints, compatible virtual variations, and constant masses.
- es: Desplazamientos virtuales instantaneos que no representan una evolucion temporal real.
  en: Instantaneous virtual displacements that do not represent a real time evolution.
competencias_lomloe: [ STEM, modelizacion, razonamiento_cientifico, resolucion_problemas ]
graficos: []
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Lectura virtual
      en: Virtual-work reading
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
