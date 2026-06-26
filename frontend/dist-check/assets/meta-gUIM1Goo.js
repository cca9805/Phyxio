const e=`version: "v5"
id: espejos
nombre:
  es: Espejos
  en: Mirrors
area: fisica-clasica
bloque: electromagnetismo
subbloque: optica
parent_id: optica-geometrica
ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-geometrica/espejos
orden: 297130
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: "💡"
descripcion: Formacion de imagenes por reflexion en superficies planas y esfericas, incluyendo la ecuacion del espejo y el aumento lateral.
description_en: Image formation by reflection from flat and spherical surfaces, including the mirror equation and lateral magnification.
tags:
  es: [espejos, espejo concavo, espejo convexo, ecuacion del espejo, aumento lateral, foco]
  en: [mirrors, concave mirror, convex mirror, mirror equation, lateral magnification, focus]
prerequisitos:
  - fisica-clasica/electromagnetismo/optica/optica-geometrica/reflexion
graficos: [Svg]
physical_role:
  es: concepto físico
  en: physical concept
representacion_dominante: Svg
magnitud_dominante: d_i
pregunta_fisica_central:
  es: "Como determinan la distancia del objeto al espejo y la curvatura de la superficie la posicion y el tamano de la imagen formada?"
  en: "How do the object distance and the surface curvature determine the position and size of the image formed?"
dificultad: 3
tiempo_estimado_min: 45
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
