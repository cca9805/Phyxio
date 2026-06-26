const e=`version: 5\r
id: coordenadas-generalizadas\r
nombre:\r
  es: Coordenadas generalizadas\r
  en: Generalized Coordinates\r
titulo:\r
  es: Coordenadas generalizadas\r
  en: Generalized Coordinates\r
type: leaf\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: mecanica-analitica\r
parent_id: mecanica-analitica\r
ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/coordenadas-generalizadas\r
orden: 219100\r
dificultad: 3\r
tiempo_estimado_min: 60\r
niveles:\r
  es: [ UNIVERSIDAD ]\r
  en: [ University ]\r
icon: "💧"\r
descripcion: Coordenadas generalizadas y grados de libertad para describir sistemas con ligaduras.\r
description_en: Generalized coordinates and degrees of freedom for constrained mechanical systems.\r
descripcion_corta: Cambio de representación y conteo de grados de libertad en mecánica analítica.\r
magnitud_dominante: f\r
representacion_dominante: Coord\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
pregunta_fisica_central:\r
  es: "¿Cómo simplifican las coordenadas generalizadas la descripción de sistemas con ligaduras y grados de libertad reducidos?"\r
  en: "How do generalized coordinates simplify the description of constrained systems with reduced degrees of freedom?"\r
prerequisitos:\r
- fundamentos/vectores-y-componentes\r
tags:\r
  es: [ coordenadas, ligaduras, grados-de-libertad, modelizacion, mecanica-analitica ]\r
  en: [ coordinates, constraints, degrees-of-freedom, modeling, analytical-mechanics ]\r
objetivos:\r
- es: Representar el mismo estado mecánico en bases cartesianas y polar-generalizadas.\r
  en: Represent the same mechanical state in Cartesian and polar-generalized bases.\r
- es: Contar grados de libertad de forma trazable en presencia de ligaduras independientes.\r
  en: Count degrees of freedom consistently in the presence of independent constraints.\r
- es: Elegir coordenadas convenientes para reducir complejidad algebraica y conceptual.\r
  en: Choose convenient coordinates to reduce algebraic and conceptual complexity.\r
suposiciones:\r
- es: Sistema clásico con configuración diferenciable y ligaduras holónomas idealizadas.\r
  en: Classical system with differentiable configuration and idealized holonomic constraints.\r
- es: Transformaciones de coordenadas invertibles dentro del dominio operativo analizado.\r
  en: Coordinate transformations invertible within the analyzed operating domain.\r
competencias_lomloe: [ STEM, modelizacion, razonamiento_cientifico, resolucion_problemas ]\r
graficos: [ Coord ]\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    tab_label:\r
      es: Lectura de coordenadas\r
      en: Coordinate Reading\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    show_summary: true\r
    show_physical_reading: true\r
    show_coherence: true\r
    show_model_validity: true\r
    show_graph_reading: true\r
    show_likely_errors: true\r
    show_next_step: true\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
  output_policy:\r
    show_summary_first: true\r
    show_warnings: true\r
    show_likely_errors: true\r
    max_inline_messages: 3\r
    show_status_icons: true\r
    allow_collapsible_sections: true\r
  dependencies:\r
    requires_magnitudes: true\r
    requires_formulas: true\r
    supports_graph_binding: true\r
`;export{e as default};
