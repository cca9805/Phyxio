const n=`id: ley-de-snell
nombre:
  es: Ley de snell
  en: "Snell's Law"
area: fisica-clasica
bloque: ondas
subbloque: fenomenos-ondulatorios
parent_id: refraccion
ruta_relativa: fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/ley-de-snell
orden: 233210
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
icon: "\\U0001F30A"
descripcion: "Relacion entre angulos de incidencia, refraccion e indices de dos medios."
description_en: "Relation between incidence angle, refraction angle, and two medium indices."
tags:
  es:
    - refraccion
    - angulo critico
    - reflexion total
    - optica geometrica
    - interfaz
  en:
    - refraction
    - critical angle
    - total reflection
    - geometrical optics
    - interface
prerequisitos:
  - fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/cambio-de-velocidad
graficos:
  - Coord
physical_role:
  es: "ley física"
  en: physical law
dificultad: 2
tiempo_estimado_min: 20
representacion_dominante: Coord
magnitud_dominante: theta_2
pregunta_fisica_central:
  es: "Como relaciona la ley de Snell los angulos de incidencia y refraccion con los indices de refraccion de dos medios?"
  en: "How does Snell's law relate the angles of incidence and refraction to the refractive indices of two media?"
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: "Interpretación"
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
