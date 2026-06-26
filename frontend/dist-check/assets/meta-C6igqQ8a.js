const n=`version: v5
id: difraccion
nombre:
  es: Difraccion
  en: Diffraction
area: fisica-clasica
bloque: ondas
subbloque: fenomenos-ondulatorios
parent_id: fenomenos-ondulatorios
ruta_relativa: fisica-clasica/ondas/fenomenos-ondulatorios/difraccion
orden: 233500
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
icon: "🧪"
descripcion: Desviacion de ondas al rodear obstaculos o atravesar aperturas. Fenomeno ondulatorio caracteristico.
description_en: Wave bending around obstacles or through apertures. Characteristic wave phenomenon.
tags:
  es:
    - difraccion
    - ondas
    - interferencia
    - optica
    - fisica
    - apertura
  en:
    - diffraction
    - waves
    - interference
    - optics
    - physics
    - aperture
prerequisitos:
  - fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-constructiva
  - fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-destructiva
graficos:
  - Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: Como se desvia una onda al encontrar un obstaculo y que patrones de intensidad emerge?
  en: How does a wave deviate when encountering an obstacle and what intensity patterns emerge?
representacion_dominante: Coord
magnitud_dominante: theta_dif
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
    max_inline_messages: 4
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
