const n=`version: 1
id: nodos-y-antinodos

nombre:
  es: Nodos y antinodos
  en: Nodes and Antinodes

area: fisica-clasica
bloque: ondas
subbloque: ondas-estacionarias
parent_id: ondas-estacionarias

ruta_relativa: fisica-clasica/ondas/ondas-estacionarias/nodos-y-antinodos
orden: 234200
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

icon: "✅"
descripcion: Puntos de cero y maxima amplitud en ondas estacionarias
description_en: Points of zero and maximum amplitude in standing waves

tags:
  es:
    - ondas estacionarias
    - nodos
    - antinodos
    - interferencia
    - amplitud
  en:
    - standing waves
    - nodes
    - antinodes
    - interference
    - amplitude

prerequisitos:
  - fisica-clasica/ondas/fundamentos/concepto-de-onda
  - fisica-clasica/ondas/fundamentos/velocidad-de-propagacion
  - fisica-clasica/ondas/fundamentos/longitud-de-onda

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

dificultad: 3
tiempo_estimado_min: 20

representacion_dominante: Coord
magnitud_dominante: distancia_entre_nodos

pregunta_fisica_central:
  es: ¿Donde se encuentran los puntos de cero amplitud y maxima amplitud en una onda estacionaria y como se relacionan espacialmente con la longitud de onda?
  en: Where are the points of zero amplitude and maximum amplitude located in a standing wave and how are they spatially related to the wavelength?

nucleo_didactico:
  idea_fisica_dominante:
    es: En una onda estacionaria, los nodos son puntos de amplitud nula permanentes y los antinodos son puntos de amplitud maxima, separados espacialmente por fracciones de la longitud de onda.
    en: In a standing wave, nodes are points of permanently zero amplitude and antinodes are points of maximum amplitude, spatially separated by fractions of the wavelength.
  magnitudes_nucleo:
    - lambda_onda
    - distancia_entre_nodos
    - posicion_nodo
    - posicion_antinodo
    - amplitud_maxima
  formulas_nucleo:
    - distancia_nodos
    - posicion_nodo_lambda
    - posicion_antinodo_lambda
    - distancia_nodo_antinodo
    - amplitud_maxima_antinodo

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
    formulas:
      - distancia_nodos
      - posicion_nodo_lambda
      - posicion_antinodo_lambda
      - distancia_nodo_antinodo
      - amplitud_maxima_antinodo
    magnitudes:
      - lambda_onda
      - distancia_entre_nodos
      - posicion_nodo
      - posicion_antinodo
      - distancia_nodo_antinodo
      - amplitud_maxima
      - numero_nodo
      - numero_antinodo
`;export{n as default};
