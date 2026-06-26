const e=`id: intensidad-de-corriente
nombre:
  es: Intensidad de corriente
  en: Electric Current
area: fisica-clasica
bloque: electromagnetismo
subbloque: corriente-electrica
parent_id: corriente-electrica
ruta_relativa: fisica-clasica/electromagnetismo/corriente-electrica/intensidad-de-corriente
orden: 293100
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
icon: "📘"
descripcion: Flujo de carga por unidad de tiempo y su lectura en circuitos y materiales conductores.
description_en: Electric charge flow per unit time and its interpretation in circuits and conductive materials.
pregunta_fisica_central:
  es: "¿Como se relacionan carga, tiempo y seccion para interpretar la intensidad y la densidad de corriente?"
  en: "How are charge, time, and area linked to interpret current intensity and current density?"
tags:
  es:
  - electromagnetismo
  - corriente
  - intensidad
  - carga
  - densidad-corriente
  en:
  - electromagnetism
  - current
  - electric-current
  - charge
  - current-density
prerequisitos:
- fisica-clasica/electromagnetismo/corriente-electrica/overview
graficos:
- Coord
representacion_dominante: Coord
magnitud_dominante: I
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 2
tiempo_estimado_min: 40
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
    supports_graph_binding: true
`;export{e as default};
