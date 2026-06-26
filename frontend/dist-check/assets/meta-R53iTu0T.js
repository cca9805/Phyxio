const e=`id: formulacion-diferencial
nombre:
  es: Formulacion diferencial
  en: Differential Formulation
type: leaf
orden: 295200
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
icon: "🔌"
ruta_relativa: fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-diferencial
descripcion: 'Subtema: Formulacion Diferencial. Teoría, fórmulas, ejemplos y aplicaciones.'
description_en: Content about Differential Formulation.
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 5
tiempo_estimado_min: 45
prerequisitos:
  - fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-integral
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación Local
      en: Local Interpretation
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
magnitud_dominante: divE
pregunta_fisica_central:
  es: ¿Cómo describen las ecuaciones de Maxwell el comportamiento local de los campos en cada punto del espacio?
  en: How do Maxwell's equations describe the local behavior of fields at every point in space?
tags:
  es:
    - electromagnetismo
    - ecuaciones-de-maxwell
    - calculo-vectorial
    - campos-locales
    - fisica-teorica
  en:
    - electromagnetism
    - maxwell-equations
    - vector-calculus
    - local-fields
    - theoretical-physics
`;export{e as default};
