const e=`id: propagacion-en-medios
nombre:
  es: Propagacion en medios
  en: Propagation in Media
area: fisica-clasica
bloque: electromagnetismo
subbloque: ondas-electromagneticas
parent_id: ondas-electromagneticas
ruta_relativa: fisica-clasica/electromagnetismo/ondas-electromagneticas/propagacion-en-medios
orden: 296400
type: leaf
dificultad: 3
tiempo_estimado_min: 45
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
icon: "✅"
descripcion: "Velocidad, indice efectivo y longitud de onda de ondas electromagneticas en medios."
description_en: "Speed, effective index, and wavelength of electromagnetic waves in media."
tags:
  es: [ondas em, medios, indice, refraccion, velocidad, longitud de onda]
  en: [em waves, media, index, refraction, speed, wavelength]
prerequisitos:
  - fisica-clasica/electromagnetismo/ondas-electromagneticas/espectro-electromagnetico
graficos:
  - Coord
  - Svg
physical_role:
  es: "concepto físico"
  en: "physical concept"
representacion_dominante: Coord
magnitud_dominante: "v_m"
pregunta_fisica_central:
  es: "¿Como cambia la propagacion de una onda electromagnetica al entrar en un medio material?"
  en: "How does electromagnetic-wave propagation change when entering a material medium?"
interpretacion:
  enabled: true
  archivo: "interpretacion.yaml"
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: "Interpretacion"
      en: "Interpretation"
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
