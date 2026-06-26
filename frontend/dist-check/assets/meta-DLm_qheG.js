const n=`id: impulso\r
nombre:\r
  es: Impulso y Teorema Impulso-Momento\r
  en: Impulse and Impulse-Momentum Theorem\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: fundamentos\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/impulso\r
orden: 215120\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 📘\r
descripcion: Estudio de la acumulación temporal de fuerza y su equivalencia con la variación del momento lineal.\r
description_en: Study of the time accumulation of force and its equivalence with the change in linear momentum.\r
tags:\r
  es:\r
  - impulso\r
  - cantidad-de-movimiento\r
  - fuerza-tiempo\r
  - cambio-de-momento\r
  - dinamica\r
  en:\r
  - impulse\r
  - momentum\r
  - force-time\r
  - momentum-change\r
  - dynamics\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal\r
pregunta_fisica_central:\r
  es: "¿Cómo se acumula temporalmente la fuerza para producir un cambio finito del momento?"\r
  en: "How does force accumulate over time to produce a finite change in momentum?"\r
graficos:\r
- Coord\r
- Svg\r
representacion_dominante: Coord\r
magnitud_dominante: impulso\r
physical_role:\r
  es: ley física\r
  en: physical law\r
dificultad: 2\r
tiempo_estimado_min: 35\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
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
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{n as default};
