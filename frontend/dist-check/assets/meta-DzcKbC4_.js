const e=`\uFEFFid: capacidad-calorifica

nombre:
  es: Capacidad calorifica
  en: Heat Capacity

area: fisica-clasica
bloque: termodinamica
subbloque: calor-y-efectos-termicos
parent_id: calor-y-efectos-termicos
ruta_relativa: fisica-clasica/termodinamica/calor-y-efectos-termicos/capacidad-calorifica
orden: 252300
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

icon: 🌡

descripcion: "Energía necesaria por kelvin para un cuerpo concreto."
description_en: "Energy needed per kelvin for a specific body."

tags:
  es:
    - capacidad calorífica
    - calor sensible
    - temperatura
    - propiedad extensiva
    - termodinámica
    - energía térmica
  en:
    - heat capacity
    - sensible heat
    - temperature
    - extensive property
    - thermodynamics
    - thermal energy

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
  es: "¿Cuánta energía necesita absorber o ceder un cuerpo concreto para cambiar su temperatura en un grado?"
  en: "How much energy does a specific body need to absorb or release to change its temperature by one degree?"

representacion_dominante: Coord
magnitud_dominante: C

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
\r
`;export{e as default};
