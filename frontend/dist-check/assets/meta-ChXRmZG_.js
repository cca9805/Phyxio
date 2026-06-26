const n=`id: instrumentos-opticos
nombre:
  es: Instrumentos opticos
  en: Optical Instruments
area: fisica-clasica
bloque: electromagnetismo
subbloque: optica
parent_id: optica-geometrica
ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-geometrica/instrumentos-opticos
orden: 297150
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
icon: "✨"
descripcion: "Formacion de imagenes y aumento angular en lupa, microscopio compuesto y telescopio refractor."
description_en: "Image formation and angular magnification in magnifying glass, compound microscope and refracting telescope."
physical_role:
  es: concepto físico
  en: physical concept
tags:
  es:
    - instrumentos opticos
    - lupa
    - microscopio
    - telescopio
    - aumento angular
    - optica geometrica
  en:
    - optical instruments
    - magnifying glass
    - microscope
    - telescope
    - angular magnification
    - geometrical optics
prerequisitos:
  - fisica-clasica/electromagnetismo/optica/optica-geometrica/lentes
  - fisica-clasica/electromagnetismo/optica/optica-geometrica/espejos
graficos:
  - Coord
dificultad: 3
tiempo_estimado_min: 25
representacion_dominante: Coord
magnitud_dominante: M_angular
pregunta_fisica_central:
  es: "Como determina la combinacion de lentes de un instrumento optico el aumento angular y la posicion de la imagen final observada por el ojo?"
  en: "How does the lens combination in an optical instrument determine the angular magnification and the position of the final image observed by the eye?"
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: "Interpretacion"
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
