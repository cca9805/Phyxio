const n=`id: tubo-de-pitot
nombre:
  es: Tubo de pitot
  en: Pitot Tube
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
parent_id: aplicaciones-de-bernoulli
ruta_relativa: fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/aplicaciones-de-bernoulli/tubo-de-pitot
orden: 218332
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
icon: 💧
descripcion: Medición de velocidad en conductos mediante presión de estancamiento.
description_en: Fluid velocity measurement in ducts using stagnation pressure.
tags:
  es:
  - Pitot
  - Bernoulli
  - velocidad
  - presion
  - estancamiento
  en:
  - Pitot
  - Bernoulli
  - velocity
  - pressure
  - stagnation
prerequisitos:
- fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuacion-de-bernoulli
graficos:
- Coord
- Svg
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 2
tiempo_estimado_min: 55
pregunta_fisica_central:
  es: ¿Cómo permite la diferencia de presión en un tubo de Pitot determinar la velocidad del flujo?
  en: How does the pressure difference in a Pitot tube allow determining the flow speed?
representacion_dominante: Coord
magnitud_dominante: v
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Svg
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
