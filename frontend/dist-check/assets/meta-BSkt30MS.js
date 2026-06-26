const n=`version: "v5"
id: principio-de-superposicion
orden: 291500
type: leaf

nombre:
  es: Principio de superposicion
  en: Superposition Principle

area: fisica-clasica
bloque: electromagnetismo
subbloque: fundamentos
parent_id: fundamentos
ruta_relativa: fisica-clasica/electromagnetismo/fundamentos/principio-de-superposicion

descripcion: "Principio que permite sumar vectorialmente campos y fuerzas de múltiples cargas."
description_en: "Principle allowing vector addition of fields and forces from multiple charges."

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

icon: 💨
tags:
  es:
    - superposición
    - campo eléctrico
    - fuerza eléctrica
    - linealidad
    - cargas múltiples
  en:
    - superposition
    - electric field
    - electric force
    - linearity
    - multiple charges

prerequisitos:
  - fuerza-electrica
  - campo-electrico

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

representacion_dominante: Coord
magnitud_dominante: F_total

pregunta_fisica_central:
  es: "¿Cómo se combina la acción de múltiples cargas sobre una carga de prueba para determinar la fuerza eléctrica y el campo eléctrico resultantes?"
  en: "How does the action of multiple charges on a test charge combine to determine the resulting electric force and electric field?"

dificultad: 2
tiempo_estimado_min: 25

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
