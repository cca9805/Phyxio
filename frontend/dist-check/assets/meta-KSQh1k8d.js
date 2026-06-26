const e=`id: campos-oscilantes-acoplados
nombre:
  es: Campos oscilantes acoplados
  en: Coupled Oscillating Fields
area: fisica-clasica
bloque: electromagnetismo
subbloque: ondas-electromagneticas
parent_id: ondas-electromagneticas
ruta_relativa: fisica-clasica/electromagnetismo/ondas-electromagneticas/campos-oscilantes-acoplados
orden: 296100
type: leaf
dificultad: 2
tiempo_estimado_min: 30
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
icon: "🧪"
descripcion: "Subtema: Campos oscilantes acoplados. Campos electrico y magnetico transversales, fase y propagacion electromagnetica."
description_en: "Content about coupled oscillating electric and magnetic fields in electromagnetic waves."
tags:
  es:
    - ondas em
    - velocidad de la luz
    - campos acoplados
    - onda plana
  en:
    - em waves
    - speed of light
    - coupled fields
    - plane wave
prerequisitos:
  - fisica-clasica/electromagnetismo/fundamentos/principio-de-superposicion
graficos: []
physical_role:
  es: "concepto físico"
  en: "physical concept"
representacion_dominante: none
magnitud_dominante: "c"
pregunta_fisica_central:
  es: "¿Cómo se acoplan dinámicamente los campos eléctrico y magnético para propagar energía sin soporte material en el vacío?"
  en: "How do electric and magnetic fields dynamically couple to propagate energy through a vacuum without a material medium?"
interpretacion:
  enabled: true
  archivo: "interpretacion.yaml"
  ui:
    dedicated_tab: true
    inline_calculator: true
    inline_graph: true
    tab_label:
      es: "Interpretación"
      en: "Interpretation"
    show_summary: true
    show_physical_reading: true
    show_coherence: true
    show_model_validity: true
    show_graph_reading: true
    show_likely_errors: true
    show_next_step: true
    allow_export: true
    collapsible: false
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
