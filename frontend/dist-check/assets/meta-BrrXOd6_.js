const e=`id: ventaja-mecanica
nombre:
  es: Ventaja mecanica
  en: Mechanical Advantage
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: palancas
ruta_relativa: fisica-clasica/mecanica/dinamica/estatica/equilibrio-rotacion/palancas/ventaja-mecanica
orden: 212352
type: leaf
niveles:
  es:
    - ESO
    - BACHILLERATO
    - UNIVERSIDAD
  en:
    - Secondary
    - Upper Secondary
    - University
icon: 📘
descripcion: "Compara la ayuda ideal y real que una maquina ofrece para reducir la fuerza necesaria."
description_en: "Compares the ideal and real help that a machine provides to reduce the required force."
tags:
  es:
    - ventaja-mecanica
    - palancas
    - eficiencia
    - maquinas-simples
    - equilibrio
  en:
    - mechanical-advantage
    - levers
    - efficiency
    - simple-machines
    - equilibrium
pregunta_fisica_central:
  es: "¿Cómo se calcula e interpreta la ventaja mecánica ideal y real de una máquina simple?"
  en: "How is the ideal and real mechanical advantage of a simple machine calculated and interpreted?"
representacion_dominante: Coord
magnitud_dominante: VM
prerequisitos:
  - tipos-de-palancas
  - condicion-sumatoria-momentos
graficos:
  - Coord
physical_role:
  es: parámetro de modelo
  en: model parameter
dificultad: 2
tiempo_estimado_min: 45
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{e as default};
