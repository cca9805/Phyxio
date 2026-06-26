const n=`id: sobre-conductores
nombre:
  es: "Sobre conductores"
  en: "Magnetic Force on Conductors"
area: fisica-clasica
bloque: electromagnetismo
subbloque: magnetismo
parent_id: fuerzas-magneticas
ruta_relativa: fisica-clasica/electromagnetismo/magnetismo/fuerzas-magneticas/sobre-conductores
orden: 299220
type: leaf
niveles:
  es:
    - BACHILLERATO
    - UNIVERSIDAD
  en:
    - Upper Secondary
    - University
icon: "🧪"
descripcion: "Fuerza magnetica sobre conductores con corriente en un campo magnetico."
description_en: "Magnetic force on current-carrying conductors in a magnetic field."
tags:
  es:
    - magnetismo
    - fuerza magnetica
    - conductor
    - corriente
    - motor electrico
  en:
    - magnetism
    - magnetic force
    - conductor
    - current
    - electric motor
prerequisitos:
  - fisica-clasica/electromagnetismo/magnetismo/campo-magnetico
  - fisica-clasica/electromagnetismo/corriente-electrica/intensidad-de-corriente
graficos:
  - Coord
physical_role:
  es: "concepto físico"
  en: "physical concept"
representacion_dominante: Coord
magnitud_dominante: F_B
pregunta_fisica_central:
  es: "¿Como ejerce un campo magnetico fuerza sobre un conductor con corriente?"
  en: "How does a magnetic field exert force on a current-carrying conductor?"
dificultad: 3
tiempo_estimado_min: 35
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    max_inline_messages: 2
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
