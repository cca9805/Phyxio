const n=`id: momento-de-una-fuerza
nombre:
  es: Momento de una fuerza
  en: Moment of a Force
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: equilibrio-rotacion
ruta_relativa: fisica-clasica/mecanica/dinamica/estatica/equilibrio-rotacion/momento-de-una-fuerza
orden: 212321
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
icon: ⚖
descripcion: "Magnitud que mide el efecto de giro de una fuerza respecto a un eje."
description_en: "Magnitude that measures the turning effect of a force about an axis."
tags:
  es:
    - torque
    - momento
    - brazo-de-palanca
    - rotacion
    - angulo
    - estatica
  en:
    - torque
    - moment
    - lever-arm
    - rotation
    - angle
    - statics
pregunta_fisica_central:
  es: "¿Cómo determinan la distancia y el ángulo de aplicación el efecto giratorio de una fuerza sobre un cuerpo?"
  en: "How do the distance and angle of application determine the rotational effect of a force on a body?"
representacion_dominante: Coord
magnitud_dominante: tau
prerequisitos:
  - condicion-sumatoria-fuerzas
  - diagramas-de-cuerpo-libre
  - descomposicion-vectorial
graficos:
  - Coord
physical_role:
  es: ley física
  en: physical law
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
`;export{n as default};
