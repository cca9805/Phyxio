const n=`version: 1\r
id: curvas-planas-y-peraltadas\r
nombre:\r
  es: Curvas planas y peraltadas\r
  en: Flat and Banked Curves\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/fuerza-centripeta/curvas-planas-y-peraltadas\r
parent_id: fuerza-centripeta\r
type: leaf\r
orden: 212263\r
dificultad: 3\r
niveles:\r
  es:\r
    - ESO\r
    - BACHILLERATO\r
    - UNIVERSIDAD\r
  en:\r
    - Secondary\r
    - Upper Secondary\r
    - University\r
prerequisitos:\r
  - fisica-clasica/mecanica/dinamica/fuerzas/fuerza-centripeta/concepto-fuerza-centripeta\r
descripcion: Friccion y peralte como fuentes de fuerza centripeta en curvas.\r
description_en: Friction and banking as centripetal force sources on curves.\r
tags:\r
  es:\r
    - dinamica\r
    - fuerzas\r
    - centripeta\r
    - peralte\r
  en:\r
    - dynamics\r
    - forces\r
    - centripetal\r
    - banking\r
objetivos:\r
  - es: Calcular la velocidad maxima en una curva plana con friccion.\r
    en: Calculate the maximum speed on a flat curve with friction.\r
  - es: Derivar el angulo de peralte ideal para una velocidad dada.\r
    en: Derive the ideal banking angle for a given speed.\r
tiempo_estimado_min: 80
pregunta_fisica_central:
  es: "¿Como se reparte la componente radial entre rozamiento y normal en una curva plana o peraltada, y que velocidad sigue siendo segura?"
  en: "How is the radial component shared between friction and the normal force on a flat or banked curve, and what speed remains safe?"
representacion_dominante: Coord
magnitud_dominante: Frad
graficos:\r
  - Coord\r
  - Dcl\r
  - Svg\r
titulo:\r
  es: Curvas planas y peraltadas\r
  en: Flat and Banked Curves\r
icon: 🛣️
physical_role:\r
  es: "modelo fisico"\r
  en: "physical model"\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: false\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretacion\r
      en: Interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
  output_policy:\r
    show_summary_first: true\r
    show_warnings: true\r
    show_likely_errors: true\r
    max_inline_messages: 3\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true
`;export{n as default};
