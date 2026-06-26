const r=`area: fisica-clasica\r
bloque: mecanica\r
descripcion: Subtema aplicado sobre el uso de Coriolis en meteorologia, oceanografia,\r
  navegacion y balistica de largo alcance.\r
description_en: Applications of the Coriolis Force. When it matters, how to estimate\r
  it, and how to interpret it.\r
dificultad: 4\r
graficos:\r
- Coord\r
icon: 📘\r
id: aplicaciones-fisicas\r
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
magnitud_dominante: desviacion lateral\r
niveles:\r
  en:\r
  - University\r
  es:\r
  - UNIVERSIDAD\r
nombre:\r
  en: Applications of the Coriolis Force\r
  es: Aplicaciones fisicas\r
orden: 212632\r
parent_id: fuerza-coriolis\r
physical_role:\r
  en: reference frame\r
  es: marco de referencia\r
pregunta_fisica_central:\r
  en: When does Coriolis acceleration stop being a small correction and start reorganizing\r
    real trajectories?\r
  es: ¿Cuando la aceleracion de Coriolis deja de ser una correccion pequena y pasa\r
    a reorganizar trayectorias reales??\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-coriolis/definicion-fuerza-coriolis\r
representacion_dominante: Coord\r
ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-coriolis/aplicaciones-fisicas\r
subbloque: dinamica\r
tags:\r
  en:\r
  - dynamics\r
  - non-inertial-frames\r
  - coriolis\r
  - geophysics\r
  - navigation\r
  es:\r
  - dinamica\r
  - marcos-no-inerciales\r
  - coriolis\r
  - geofisica\r
  - navegacion\r
tiempo_estimado_min: 50\r
type: leaf\r
`;export{r as default};
