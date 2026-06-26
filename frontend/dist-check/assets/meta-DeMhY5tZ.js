const n=`id: cuerdas
nombre:
  es: Cuerdas
  en: Ropes
area: fisica-clasica
bloque: ondas
subbloque: ondas-estacionarias
parent_id: ejemplos-clasicos
ruta_relativa: fisica-clasica/ondas/ondas-estacionarias/ejemplos-clasicos/cuerdas
orden: 234410
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: 🧪
descripcion: Modos estacionarios de una cuerda tensa con extremos fijos.
description_en: Standing modes of a taut string with fixed ends.
tags:
  es: [cuerdas, estacionarias, tension, modos, frecuencia, armonicos]
  en: [strings, standing, tension, modes, frequency, harmonics]
prerequisitos:
  - fisica-clasica/ondas/ondas-estacionarias/condicion-de-estacionariedad
  - fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/velocidad-de-propagacion
  - fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda
graficos: [Coord]
physical_role:
  es: fenómeno físico
  en: physical phenomenon
dificultad: 3
tiempo_estimado_min: 25
representacion_dominante: Coord
magnitud_dominante: f_n
pregunta_fisica_central:
  es: ¿Cómo determinan la longitud, la tensión y la densidad lineal las frecuencias estacionarias de una cuerda?
  en: How do length, tension, and linear density determine the standing frequencies of a string?
nucleo:
  magnitudes: [L, T, mu, v, n, lambda_n, f_n]
  formulas: [velocidad_cuerda_tensa, frecuencia_modo_cuerda, longitud_onda_modo_cuerda]
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
    max_inline_messages: 4
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
