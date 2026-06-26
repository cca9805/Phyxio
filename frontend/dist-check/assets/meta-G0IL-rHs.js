const n=`version: v5
id: intensidad-ondulatoria
nombre:
  es: Intensidad ondulatoria
  en: Wave Intensity
area: fisica-clasica
bloque: ondas
subbloque: energia-y-transporte
parent_id: energia-y-transporte
ruta_relativa: fisica-clasica/ondas/energia-y-transporte/intensidad-ondulatoria
orden: 237200
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
descripcion: Potencia por unidad de area en ondas tridimensionales.
description_en: Power per unit area in three-dimensional waves.
tags:
  es:
    - ondas
    - intensidad
    - acústica
    - potencia
    - decibelios
    - nivel sonoro
  en:
    - waves
    - intensity
    - acoustics
    - power
    - decibels
    - sound level
prerequisitos:
  - fisica-clasica/ondas/energia-y-transporte/flujo-de-energia
graficos:
  - Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 4
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: ¿Cómo se cuantifica la intensidad de una onda tridimensional y qué factores determinan su atenuación con la distancia?
  en: How is the intensity of a three-dimensional wave quantified and what factors determine its attenuation with distance?
representacion_dominante: Coord
magnitud_dominante: I_intensidad
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
    max_inline_messages: 4
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
