const n=`id: condicion-de-estacionariedad
nombre:
  es: Condicion de estacionariedad
  en: Standing-Wave Condition
area: fisica-clasica
bloque: ondas
subbloque: ondas-estacionarias
parent_id: ondas-estacionarias
ruta_relativa: fisica-clasica/ondas/ondas-estacionarias/condicion-de-estacionariedad
orden: 234100
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: 🌊
descripcion: Criterio que permite modos estacionarios en una cavidad o cuerda.
description_en: Criterion that allows standing modes in a cavity or string.
tags:
  es: [ondas, estacionarias, modos, nodos, resonancia, longitud]
  en: [waves, standing, modes, nodes, resonance, length]
prerequisitos:
  - fisica-clasica/ondas/fundamentos/concepto-de-onda
  - fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda
  - fisica-clasica/ondas/fenomenos-ondulatorios/superposicion
graficos: [Coord]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 24
representacion_dominante: Coord
magnitud_dominante: f_n
pregunta_fisica_central:
  es: ¿Cómo decide la longitud de una cavidad qué modos enteros pueden formar una onda estacionaria?
  en: How does the length of a cavity decide which integer modes can form a standing wave?
nucleo:
  magnitudes: [L, lambda, n, v, f_n]
  formulas: [condicion_estacionaria_cuerda, frecuencia_modo_estacionario]
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
