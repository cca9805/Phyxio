const n=`id: longitud-de-onda
nombre:
  es: Longitud de onda
  en: Wavelength
area: fisica-clasica
bloque: ondas
subbloque: fundamentos
parent_id: magnitudes-ondulatorias
ruta_relativa: fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda
orden: 231410
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: 🌊
descripcion: Distancia espacial entre estados equivalentes de una onda.
description_en: Spatial distance between equivalent states of a wave.
tags:
  es: [ondas, longitud de onda, fase, crestas, frecuencia, propagacion]
  en: [waves, wavelength, phase, crests, frequency, propagation]
prerequisitos:
  - fisica-clasica/ondas/fundamentos/concepto-de-onda
graficos: [Coord, Svg]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 2
tiempo_estimado_min: 22
representacion_dominante: Coord
magnitud_dominante: lambda
pregunta_fisica_central:
  es: ¿Cómo mide la longitud de onda la separación espacial entre estados equivalentes de una onda?
  en: How does wavelength measure the spatial separation between equivalent states of a wave?
nucleo:
  magnitudes: [lambda, k, f, T, v, Delta_x]
  formulas: [numero_onda_longitud, velocidad_longitud_frecuencia, longitud_por_crestas]
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label: { es: Interpretación, en: Interpretation }
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
