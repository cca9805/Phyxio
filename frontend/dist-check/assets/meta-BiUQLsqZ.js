const n=`id: formulacion-integral
nombre:
  es: Formulacion integral
  en: Integral Formulation
type: leaf
orden: 295100
area: fisica-clasica
bloque: electromagnetismo
subbloque: ecuaciones-de-maxwell
parent_id: ecuaciones-de-maxwell
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
ruta_relativa: fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-integral
descripcion: 'Subtema: Formulacion Integral. Teoría, fórmulas, ejemplos y aplicaciones.'
description_en: 'Content about Integral Formulation.'
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 4
tiempo_estimado_min: 40
prerequisitos:
  - fundamentos/conceptos-estructurales/flujo-y-circulacion
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación Global
      en: Global Interpretation
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
graficos:
  - Coord
representacion_dominante: Coord
magnitud_dominante: flux_E
pregunta_fisica_central:
  es: "¿Cómo determinan las fuentes el comportamiento global de los campos en regiones finitas?"
  en: "How do sources determine the global behavior of fields in finite regions?"
tags:
  es:
    - electromagnetismo
    - ecuaciones-de-maxwell
    - flujo
    - circulacion
    - induccion
    - fisica-clasica
  en:
    - electromagnetism
    - maxwell-equations
    - flux
    - circulation
    - induction
    - classical-physics
`;export{n as default};
