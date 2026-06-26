const n=`\uFEFFid: cambios-de-estado

nombre:
  es: Cambios de estado
  en: Phase Changes

area: fisica-clasica
bloque: termodinamica
subbloque: calor-y-efectos-termicos
parent_id: calor-y-efectos-termicos
ruta_relativa: fisica-clasica/termodinamica/calor-y-efectos-termicos/cambios-de-estado
orden: 252700
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

icon: 📘

descripcion: "Transiciones de fase a temperatura constante mediante calor latente."
description_en: "Phase transitions at constant temperature through latent heat."

tags:
  es:
    - cambios de estado
    - calor latente
    - fusion
    - vaporizacion
    - solidificacion
    - condensacion
  en:
    - phase changes
    - latent heat
    - melting
    - vaporization
    - solidification
    - condensation

prerequisitos:
  - fisica-clasica/termodinamica/calor-y-efectos-termicos/temperatura
  - fisica-clasica/termodinamica/calor-y-efectos-termicos/calor
  - fisica-clasica/termodinamica/calor-y-efectos-termicos/calor-especifico
  - fisica-clasica/termodinamica/calor-y-efectos-termicos/calorimetria

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

dificultad: 3
tiempo_estimado_min: 40

pregunta_fisica_central:
  es: "Cuanta energia se necesita para cambiar el estado de una sustancia y por que la temperatura no varia durante la transicion?"
  en: "How much energy is needed to change the state of a substance, and why does the temperature not change during the transition?"

representacion_dominante: Coord
magnitud_dominante: Q_lat

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
    supports_graph_binding: true\r
\r
`;export{n as default};
