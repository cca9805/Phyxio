const n=`version: 5
id: principio-de-arquimedes
parent_id: estatica-de-fluidos
type: leaf
orden: 218240
icon: 💧
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
ruta_relativa: fisica-clasica/mecanica/fluidos/estatica-de-fluidos/principio-de-arquimedes
nombre:
  es: Principio de arquimedes
  en: Archimedes' Principle
physical_role:
  es: concepto físico
  en: physical concept
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD]
  en: [Secondary, Upper Secondary, University]
descripcion: Empuje y condiciones de flotación.
description_en: Buoyancy and flotation conditions.
pregunta_fisica_central:
  es: ¿Cómo afecta el empuje a la flotabilidad de un cuerpo y qué determina si se hunde o flota?
  en: How does buoyancy affect an object's flotation and what determines if it sinks or floats?
representacion_dominante: Coord
magnitud_dominante: E
dificultad: 2
tiempo_estimado_min: 55
tags:
  es: [arquimedes, empuje, flotacion, fluidos, densidad]
  en: [archimedes, buoyancy, flotation, fluids, density]
prerequisitos:
  - fisica-clasica/mecanica/fluidos/fundamentos/densidad
graficos: [Coord, Svg, Dcl]
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Análisis de Flotación
      en: Flotation Analysis
  mini_graph:
    enabled: true
    preferred_type: Svg
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
