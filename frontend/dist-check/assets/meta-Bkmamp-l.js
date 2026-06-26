const e=`id: calor-especifico

nombre:
  es: Calor especifico
  en: Specific Heat Capacity

area: fisica-clasica
bloque: termodinamica
subbloque: calor-y-efectos-termicos
parent_id: calor-y-efectos-termicos
ruta_relativa: fisica-clasica/termodinamica/calor-y-efectos-termicos/calor-especifico
orden: 252400
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

icon: ♨

descripcion: "Propiedad intensiva de una sustancia que cuantifica la energía necesaria por unidad de masa y de variación de temperatura."
description_en: "Intensive property of a substance quantifying the energy needed per unit mass per unit temperature change."

tags:
  es:
    - calor específico
    - capacidad calorífica
    - propiedad térmica
    - termodinámica
    - calorimetría
    - materiales
  en:
    - specific heat capacity
    - heat capacity
    - thermal property
    - thermodynamics
    - calorimetry
    - materials

prerequisitos:
  - fisica-clasica/termodinamica/calor-y-efectos-termicos/temperatura
  - fisica-clasica/termodinamica/calor-y-efectos-termicos/calor

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

dificultad: 2
tiempo_estimado_min: 30

pregunta_fisica_central:
  es: "¿Cuánta energía necesita absorber un kilogramo de una sustancia para aumentar su temperatura en un kelvin?"
  en: "How much energy must one kilogram of a substance absorb to raise its temperature by one kelvin?"

representacion_dominante: Coord
magnitud_dominante: c

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
`;export{e as default};
