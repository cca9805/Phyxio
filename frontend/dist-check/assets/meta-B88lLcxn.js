const r=`area: fisica-clasica\r
bloque: mecanica\r
descripcion: Subtema de marcos no inerciales que define el termino centrifugo, su\r
  dependencia con radio y velocidad angular, y su diferencia\r
description_en: Definition of Centrifugal Force. Rotating-frame meaning, equivalent\r
  formulas, and physical interpretation.\r
dificultad: 3\r
graficos:\r
- Coord\r
icon: 🪢\r
id: definicion-fuerza-centrifuga\r
interpretacion:\r
  archivo: interpretacion.yaml\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
  enabled: true\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
  output_policy:\r
    max_inline_messages: 3\r
    show_likely_errors: true\r
    show_summary_first: true\r
    show_warnings: true\r
  ui:\r
    dedicated_tab: true\r
    inline_calculator: true\r
    inline_graph: true\r
    tab_label:\r
      en: Interpretation\r
      es: Interpretacion\r
magnitud_dominante: F_cf\r
niveles:\r
  en:\r
  - University\r
  es:\r
  - UNIVERSIDAD\r
nombre:\r
  en: Definition of Centrifugal Force\r
  es: Definicion fuerza centrifuga\r
orden: 212621\r
parent_id: fuerza-centrifuga\r
physical_role:\r
  en: reference frame\r
  es: marco de referencia\r
pregunta_fisica_central:\r
  en: What does centrifugal force really mean inside a rotating frame, which magnitudes\r
    control it, and why must it not be confused with the real centripetal force?\r
  es: ¿Que significa realmente la fuerza centrifuga dentro de un marco rotatorio,\r
    de que magnitudes depende y por que no debe confundirse con la fuerza centripeta\r
    real??\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerzas-ficticias/concepto-fuerzas-ficticias\r
- fisica-clasica/mecanica/dinamica/fuerzas/fuerza-centripeta/concepto-fuerza-centripeta\r
representacion_dominante: Coord\r
ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-centrifuga/definicion-fuerza-centrifuga\r
subbloque: dinamica\r
tags:\r
  en:\r
  - centrifugal force\r
  - rotating frame\r
  - angular speed\r
  - radius\r
  - centripetal force\r
  es:\r
  - fuerza centrifuga\r
  - marco rotatorio\r
  - omega\r
  - radio\r
  - fuerza centripeta\r
tiempo_estimado_min: 40\r
type: leaf\r
`;export{r as default};
