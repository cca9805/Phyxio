const e=`id: lentes
nombre:
  es: Lentes
  en: Lenses
area: fisica-clasica
bloque: electromagnetismo
subbloque: optica
parent_id: optica-geometrica
ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-geometrica/lentes
orden: 297140
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
descripcion: "Formacion de imagenes reales y virtuales mediante lentes delgadas convergentes y divergentes."
description_en: "Real and virtual image formation through thin converging and diverging lenses."
physical_role:
  es: "concepto físico"
  en: "physical concept"
tags:
  es:
    - lentes
    - optica geometrica
    - distancia focal
    - imagen real
    - imagen virtual
    - aumento lateral
  en:
    - lenses
    - geometrical optics
    - focal length
    - real image
    - virtual image
    - lateral magnification
prerequisitos:
  - fisica-clasica/electromagnetismo/optica/optica-geometrica/refraccion
graficos:
  - Svg
dificultad: 3
tiempo_estimado_min: 25
representacion_dominante: Svg
magnitud_dominante: d_i
pregunta_fisica_central:
  es: "Como determina la distancia focal de una lente delgada la posicion y el tamano de la imagen formada?"
  en: "How does the focal length of a thin lens determine the position and size of the image formed?"
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
    preferred_type: Svg
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
