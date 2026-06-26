const e=`id: poleas-simples
nombre:
  es: Poleas simples
  en: Simple Pulleys
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: sistemas-de-varios-cuerpos
ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-traslacional/sistemas-de-varios-cuerpos/poleas-simples
orden: 212542
type: leaf
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  en:
  - Secondary
  - Upper Secondary
  - University
icon: 📘
descripcion: 'Poleas simples: cómo cambia la fuerza según el número de tramos nSel y el tipo de polea.'
description_en: 'Simple pulleys: how force changes according to nSel segments and pulley type supporting the load.'
tags:
  es:
  - ventaja-mecanica
  - polea-fija
  - polea-movil
  - fuerza-aplicada
  en:
  - mechanical-advantage
  - fixed-pulley
  - movable-pulley
  - applied-force
prerequisitos:
- dos-masas-unidas-por-cuerda
- leyes-de-newton
graficos:
- Svg
- Coord
physical_role:
  es: fenómeno físico
  en: physical phenomenon
pregunta_fisica_central:
  es: "¿Como cambia F segun el tipo de polea y el numero de tramos nSel que sostienen la carga?"
  en: "How does F change according to pulley type and the number of supporting segments nSel?"
representacion_dominante: Svg
magnitud_dominante: F
dificultad: 3
tiempo_estimado_min: 50
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
`;export{e as default};
