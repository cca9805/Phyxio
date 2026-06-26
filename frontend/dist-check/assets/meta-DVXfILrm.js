const e=`id: ley-de-snell
nombre:
  es: Ley de snell
  en: "Snell's Law"
area: fisica-clasica
bloque: electromagnetismo
subbloque: optica
parent_id: refraccion
ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-geometrica/refraccion/ley-de-snell
orden: 297121
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
icon: "\\U0001F4D8"
descripcion: "Relacion entre angulos de incidencia y refraccion en la interfaz entre dos medios con diferente indice de refraccion."
description_en: "Relation between incidence and refraction angles at the interface between two media with different refractive indices."
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
  - fisica-clasica/electromagnetismo/optica/optica-geometrica/refraccion/indice-de-refraccion
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
`;export{e as default};
