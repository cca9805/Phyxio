const r=`id: sistemas-reales\r
nombre:\r
  es: Sistemas reales\r
  en: Real-World Systems\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: sistemas-mixtos\r
ruta_relativa: fisica-clasica/mecanica/dinamica/aplicaciones/sistemas-mixtos/sistemas-reales\r
orden: 212722\r
type: leaf\r
leaf_level: 5\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
icon: 🧲\r
descripcion: Estudio de sistemas reales con pérdidas por fricción, eficiencia mecánica\r
  y aceleración efectiva.\r
description_en: Study of real systems with friction losses, mechanical efficiency,\r
  and effective acceleration.\r
tags:\r
  es:\r
  - dinamica\r
  - sistemas-reales\r
  - eficiencia\r
  - friccion\r
  - potencia\r
  en:\r
  - dynamics\r
  - real-systems\r
  - efficiency\r
  - friction\r
  - power\r
pregunta_fisica_central:\r
  es: "¿Qué fracción de la fuerza aplicada logra realmente acelerar el sistema tras descontar las pérdidas?"\r
  en: "What fraction of the applied force actually accelerates the system after discounting losses?"\r
representacion_dominante: Coord\r
magnitud_dominante: a\r
prerequisitos:\r
- leyes-de-newton\r
- traslacion-y-rotacion\r
- rozamiento\r
- energia-y-potencia\r
graficos:\r
- Coord\r
- Svg\r
physical_role:\r
  es: modelo físico\r
  en: physical model\r
dificultad: 4\r
tiempo_estimado_min: 60\r
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
`;export{r as default};
