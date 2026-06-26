const n=`id: variacion-de-entropia

nombre:
  es: Variacion de entropia
  en: Entropy Change

area: fisica-clasica
bloque: termodinamica
subbloque: entropia-y-segunda-ley
parent_id: entropia
ruta_relativa: fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/variacion-de-entropia
orden: 255220
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

icon: ⚡

descripcion: "Cálculo de la variación de entropía en procesos isotérmicos, no isotérmicos y cambios de fase."
description_en: "Calculation of entropy change in isothermal, non-isothermal processes and phase transitions."

tags:
  es:
    - variación de entropía
    - proceso isotérmico
    - cambio de fase
    - gas ideal
    - capacidad calorífica
    - integral de Clausius
  en:
    - entropy change
    - isothermal process
    - phase change
    - ideal gas
    - heat capacity
    - Clausius integral

prerequisitos:
  - fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/definicion
  - fisica-clasica/termodinamica/calor-y-efectos-termicos/calor-especifico

graficos:
  - Coord

physical_role:
  es: ley física
  en: physical law

dificultad: 4
tiempo_estimado_min: 35

pregunta_fisica_central:
  es: "¿Cómo se calcula la variación de entropía de un sistema en diferentes tipos de procesos termodinámicos?"
  en: "How is the entropy change of a system calculated for different types of thermodynamic processes?"

representacion_dominante: Coord
magnitud_dominante: DeltaS

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
`;export{n as default};
