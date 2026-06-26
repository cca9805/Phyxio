const e=`id: calor

nombre:
  es: Calor
  en: Heat

area: fisica-clasica
bloque: termodinamica
subbloque: calor-y-efectos-termicos
parent_id: calor-y-efectos-termicos
ruta_relativa: fisica-clasica/termodinamica/calor-y-efectos-termicos/calor
orden: 252200
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

icon: 💪

descripcion: "Energía en tránsito entre sistemas por diferencia de temperatura."
description_en: "Energy transferred between systems due to a temperature difference."

tags:
  es:
    - calor
    - transferencia de energía
    - temperatura
    - termodinámica
    - calor sensible
    - calor latente
  en:
    - heat
    - energy transfer
    - temperature
    - thermodynamics
    - sensible heat
    - latent heat

prerequisitos:
  - fisica-clasica/termodinamica/calor-y-efectos-termicos/temperatura

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

dificultad: 2
tiempo_estimado_min: 35

pregunta_fisica_central:
  es: "¿Cuánta energía se transfiere como calor cuando un cuerpo cambia de temperatura o de estado?"
  en: "How much energy is transferred as heat when a body changes temperature or phase?"

representacion_dominante: Coord
magnitud_dominante: Q

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
