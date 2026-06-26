const e=`id: ecuaciones-de-estado

nombre:
  es: Ecuaciones de estado
  en: Equations of State

area: fisica-clasica
bloque: termodinamica
subbloque: gases-y-modelos
parent_id: gases-y-modelos
ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/ecuaciones-de-estado
orden: 253200
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

icon: 🫧

descripcion: "Relaciones matemáticas entre presión, volumen, temperatura y cantidad de sustancia que caracterizan el estado de un gas."
description_en: "Mathematical relations among pressure, volume, temperature and amount of substance characterising the state of a gas."

tags:
  es:
    - ley del gas ideal
    - ecuación de estado
    - presión
    - volumen
    - temperatura
    - Van der Waals
  en:
    - ideal gas law
    - equation of state
    - pressure
    - volume
    - temperature
    - Van der Waals

prerequisitos:
  - fisica-clasica/termodinamica/gases-y-modelos/gas-ideal
  - fisica-clasica/termodinamica/calor-y-efectos-termicos/temperatura

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

dificultad: 2
tiempo_estimado_min: 35

pregunta_fisica_central:
  es: "¿Cómo se relacionan presión, volumen y temperatura de un gas para predecir su comportamiento en distintas condiciones?"
  en: "How are the pressure, volume and temperature of a gas related to predict its behaviour under different conditions?"

representacion_dominante: Coord
magnitud_dominante: P

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
