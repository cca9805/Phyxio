const n=`id: velocidad-de-propagacion
nombre:
  es: Velocidad de propagacion
  en: Wave Speed
area: fisica-clasica
bloque: ondas
subbloque: ondas-mecanicas
parent_id: ondas-en-cuerdas
ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/velocidad-de-propagacion
orden: 232110
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: "🧪"
descripcion: "Subtema: Velocidad de Propagacion. Teoría, fórmulas, ejemplos y aplicaciones."
description_en: Content about Wave Speed.
tags:
  es: [cuerdas, velocidad, tension, densidad lineal, ondas mecanicas, propagacion]
  en: [strings, speed, tension, linear density, mechanical waves, propagation]
prerequisitos:
  - fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/velocidad-de-propagacion
  - fisica-clasica/ondas/fundamentos/tipos-de-ondas/mecanicas
graficos: [Coord, Svg]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25
representacion_dominante: Coord
magnitud_dominante: v
pregunta_fisica_central:
  es: "¿Como determinan la tension y la densidad lineal la velocidad con que una perturbacion viaja por una cuerda?"
  en: "How do tension and linear density determine the speed at which a disturbance travels along a string?"
nucleo:
  magnitudes: [T, mu, v, L, lambda, f]
  formulas: [velocidad_cuerda_tensa, frecuencia_desde_velocidad, longitud_onda_desde_velocidad, frecuencia_fundamental_cuerda]
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
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
