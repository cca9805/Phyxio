const n=`version: "v5"
id: generadores
orden: 2100510
type: leaf

nombre:
  es: Generadores
  en: Generators

area: fisica-clasica
bloque: electromagnetismo
subbloque: induccion-electromagnetica
parent_id: aplicaciones
ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/aplicaciones/generadores

descripcion: "Máquina que convierte trabajo mecánico en fem eléctrica mediante variación de flujo magnético."
description_en: "Machine that converts mechanical work into electrical emf through magnetic flux variation."

niveles:
  es:
    - BACHILLERATO
    - UNIVERSIDAD
    - EXTRACURRICULAR
  en:
    - Upper Secondary
    - University
    - Extracurricular

icon: "✅"
tags:
  es:
    - generador
    - fem inducida
    - flujo magnético
    - inducción electromagnética
    - rendimiento
  en:
    - generator
    - induced emf
    - magnetic flux
    - electromagnetic induction
    - efficiency

prerequisitos:
  - ley-de-faraday
  - flujo-magnetico
  - campo-magnetico

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

representacion_dominante: Coord
magnitud_dominante: epsilon_0

pregunta_fisica_central:
  es: "¿Cómo convierte un generador una variación de flujo magnético en fem eléctrica útil?"
  en: "How does a generator turn changing magnetic flux into useful electrical emf?"

dificultad: 3
tiempo_estimado_min: 30

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
