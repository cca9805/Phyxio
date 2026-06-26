const n=`id: energia-en-rodadura\r
nombre:\r
  es: Energía en rodadura\r
  en: Energy in Rolling\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: energia\r
ruta_relativa: fisica-clasica/mecanica/rotacion/energia/energia-en-rodadura\r
orden: 213325\r
type: leaf\r
niveles:\r
  es:\r
    - BACHILLERATO\r
    - UNIVERSIDAD\r
  en:\r
    - Upper Secondary\r
    - University\r
icon: ⚡\r
descripcion: Descompone la energía de rodadura en traslación, rotación y condición de contacto.\r
description_en: Decomposes rolling energy into translation, rotation, and contact condition.\r
tags:\r
  es: [rodadura, energia, energia cinetica, inercia, radio]\r
  en: [rolling, energy, kinetic energy, inertia, radius]\r
prerequisitos:
  - fisica-clasica/mecanica/rotacion/energia/energia-cinetica-rotacional
  - fisica-clasica/mecanica/rotacion/rodadura/condicion-de-rodadura-sin-deslizamiento
  - fisica-clasica/mecanica/rotacion/dinamica/momento-de-inercia/definicion-momento-de-inercia
graficos:\r
  - Coord\r
physical_role:\r
  es: modelo físico\r
  en: physical model\r
dificultad: 3\r
tiempo_estimado_min: 45\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretación\r
      en: Interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
pregunta_fisica_central:\r
  es: ¿Cómo se reparte la energía cinética de un cuerpo que rueda sin deslizar?\r
  en: How is kinetic energy distributed in a body rolling without slipping?\r
representacion_dominante: Coord\r
magnitud_dominante: E_total\r
titulo: Energía en rodadura\r
titulo_en: Energy in Rolling\r
`;export{n as default};
