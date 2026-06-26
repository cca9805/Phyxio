const e=`version: 1
id: tornillo
parent_id: maquinas-simples
nombre:
  es: Tornillo
  en: Screw
titulo:
  es: Tornillo
  en: Screw
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: aplicaciones
orden: 210515
niveles:
  es:
    - ESO
  en:
    - Secondary
icon: 🔩
ruta_relativa: fisica-clasica/mecanica/aplicaciones/maquinas-simples/tornillo
descripcion: Análisis del tornillo como plano inclinado helicoidal, ventaja mecánica y rendimiento.
description_en: Analysis of the screw as a helical inclined plane, mechanical advantage and efficiency.
descripcion_corta:
  es: 'Teoría, fórmulas y ejemplos sobre la multiplicación de fuerza axial en sistemas roscados.'
  en: 'Theory, formulas, and examples on axial force multiplication in threaded systems.'
physical_role:
  es: aplicacion mecanica
  en: mechanical application
pregunta_fisica_central:
  es: "¿Cómo depende la ventaja mecánica [[ventaja_mecanica]] y la fuerza [[F]] del radio [[r]] y el paso [[p]] para mover la carga [[R]]?"
  en: "How do mechanical advantage [[ventaja_mecanica]] and force [[F]] depend on radius [[r]] and pitch [[p]] to move the load [[R]]?"
representacion_dominante: Coord
magnitud_dominante: ventaja_mecanica
dificultad: 2
tiempo_estimado_min: 45
prerequisitos:
  - fisica-clasica/mecanica/aplicaciones/maquinas-simples/plano-inclinado
tags:
  es:
    - tornillo
    - maquinas-simples
    - mecanica
  en:
    - screw
    - simple-machines
    - mechanics
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Interpretación
      en: Interpretation
    show_physical_reading: true
    show_coherence: true
    show_model_validity: true
    show_likely_errors: true
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
  output_policy:
    show_error_codes: true
    allow_retry: true
    max_inline_messages: 3
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
  mini_graph:
    enabled: true
    preferred_type: Svg
  dependencies:
    magnitude_ids: [R, F, r, p, eta, ventaja_mecanica, tau, error_relativo]
    formula_ids: [fuerza_real, ventaja_mecanica_ideal, eficiencia, fuerza_ideal, torque_real, torque_basico, condicion_geometria, error_rendimiento]
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
objetivos:
  - es: Entender cómo el tornillo multiplica la fuerza axial a partir de un giro.
    en: Understand how the screw multiplies axial force from a rotation.
  - es: Relacionar el paso de rosca y el radio de acción con el esfuerzo requerido.
    en: Relate thread pitch and action radius with the required effort.
  - es: Distinguir entre el comportamiento ideal y real considerando la fricción.
    en: Distinguish between ideal and real behavior considering friction.
  - es: Aplicar fórmulas en el diseño y ajuste de uniones mecánicas.
    en: Apply formulas in the design and adjustment of mechanical joints.
suposiciones:
  - es: Movimiento cuasiestático por vuelta completa.
    en: Quasi-static motion per full turn.
  - es: Geometría de rosca aproximada por un plano inclinado helicoidal.
    en: Thread geometry approximated by a helical inclined plane.
graficos:
  - Coord
  - Svg
`;export{e as default};
