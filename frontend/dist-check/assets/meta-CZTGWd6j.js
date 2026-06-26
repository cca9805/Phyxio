const n=`version: "v5"
id: flujo-magnetico
nombre:
  es: Flujo magnetico
  en: Magnetic Flux

area: fisica-clasica
bloque: electromagnetismo
subbloque: induccion-electromagnetica
parent_id: induccion-electromagnetica
ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico
orden: 2100100
type: leaf

niveles:
  es:
    - BACHILLERATO
    - UNIVERSIDAD
    - EXTRACURRICULAR
  en:
    - Upper Secondary
    - University
    - Extracurricular

icon: "📘"

descripcion: Medida del campo magnetico que atraviesa una superficie orientada.
description_en: Measure of magnetic field crossing an oriented surface.

tags:
  es:
    - flujo magnetico
    - campo magnetico
    - superficie orientada
    - induccion electromagnetica
    - weber
    - proyeccion
  en:
    - magnetic flux
    - magnetic field
    - oriented surface
    - electromagnetic induction
    - weber
    - projection

prerequisitos:
  - fisica-clasica/electromagnetismo/magnetismo/campo-magnetico

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

representacion_dominante: Coord
magnitud_dominante: Phi_B

pregunta_fisica_central:
  es: "¿Cómo depende el flujo magnetico del campo, del area y de la orientacion de la superficie?"
  en: "How does magnetic flux depend on field, area, and surface orientation?"

dificultad: 3
tiempo_estimado_min: 35

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
