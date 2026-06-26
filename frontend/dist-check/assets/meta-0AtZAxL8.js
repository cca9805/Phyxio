const n=`id: introduccion
orden: 232310
nombre:
  es: Introduccion
  en: Introduction
area: fisica-clasica
bloque: ondas
subbloque: ondas-mecanicas
parent_id: ondas-en-solidos
descripcion: "Conceptos fundamentales de propagacion de ondas mecanicas en medios solidos."
description_en: "Fundamental concepts of mechanical wave propagation in solid media."
ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/introduccion
type: leaf
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  - EXTRACURRICULAR
  en:
  - Secondary
  - Upper Secondary
  - University
  - Extracurricular
icon: "\\U0001F9EA"
graficos:
- Coord
- Svg
physical_role:
  es: "concepto f\\xEDsico"
  en: physical concept
dificultad: 2
tiempo_estimado_min: 35
representacion_dominante: Coord
magnitud_dominante: v_fase
pregunta_fisica_central:
  es: "¿Cómo se propagan las ondas mecánicas a través de un sólido y qué determina su velocidad?"
  en: "How do mechanical waves propagate through a solid and what determines their speed?"
tags:
  es:
  - ondas en solidos
  - propagacion mecanica
  - velocidad de fase
  - elasticidad
  - modos de onda
  en:
  - waves in solids
  - mechanical propagation
  - phase velocity
  - elasticity
  - wave modes
prerequisitos:
- fisica-clasica/ondas/ondas-mecanicas/ondas-transversales
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
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
