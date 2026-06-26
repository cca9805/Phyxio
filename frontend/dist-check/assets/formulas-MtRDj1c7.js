const r=`version: 5\r
topic:\r
  id: ley-de-gravitacion-universal\r
  title:\r
    es: Ley de gravitacion universal\r
    en: Universal Law of Gravitation\r
\r
formulas:\r
- id: ley_newton_gravitacion\r
  title:\r
    es: Ley de gravitacion universal\r
    en: Universal law of gravitation\r
  equation: F = (G * m1 * m2) / (r^2)\r
  latex: F = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}\r
  category: gravitacion\r
  relation_type: law\r
  physical_meaning:\r
    es: Fuerza atractiva entre dos masas en funcion de su separacion.\r
    en: Attractive force between two masses as a function of separation.\r
  constraints: [ G > 0, m1 > 0, m2 > 0, r > 0 ]\r
  validity:\r
    es: Valida para masas puntuales o distribuciones esfericas equivalentes.\r
    en: Valid for point masses or equivalent spherical distributions.\r
  dimension_check: "[M*L*T^-2] = ([M^-1*L^3*T^-2]*[M]*[M])/[L^2]"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere valores numericos de masas y distancia.\r
    en: Requires numeric mass and distance values.\r
  used_in: [ estimacion_fuerza, comparacion_radial ]\r
  interpretation_tags: [ inversa_cuadrado, atraccion ]\r
  result_semantics:\r
    target: F\r
  domain_checks: [ r > 0 ]\r
  coherence_checks: [ F > 0 ]\r
  graph_implications: Curva F(r) decreciente con pendiente alta en radios pequenos.\r
  pedagogical_triggers: [ confusion_masa_peso ]\r
  rearrangements:\r
  - target: F\r
    equation: F = (G * m1 * m2) / (r^2)\r
  - target: m1\r
    equation: m1 = (F * r^2) / (G * m2)\r
  - target: m2\r
    equation: m2 = (F * r^2) / (G * m1)\r
  - target: r\r
    equation: r = sqrt((G * m1 * m2) / F)\r
  variables: [ F, G, m1, m2, r ]\r
\r
- id: campo_gravitatorio\r
  title:\r
    es: Campo gravitatorio de masa puntual\r
    en: Point-mass gravitational field\r
  equation: g = (G * M) / (r^2)\r
  latex: g = \\frac{G \\cdot M}{r^2}\r
  category: gravitacion\r
  relation_type: derived\r
  physical_meaning:\r
    es: Intensidad del campo producido por una masa fuente.\r
    en: Field intensity produced by a source mass.\r
  constraints: [ G > 0, M > 0, r > 0 ]\r
  validity:\r
    es: Modelo clasico de campo radial para simetria esferica.\r
    en: Classical radial field model for spherical symmetry.\r
  dimension_check: "[L*T^-2] = ([M^-1*L^3*T^-2]*[M])/[L^2]"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere M y r definidos en SI.\r
    en: Requires M and r in SI units.\r
  used_in: [ peso_local, aceleracion_local ]\r
  interpretation_tags: [ campo, intensidad ]\r
  result_semantics:\r
    target: g\r
  domain_checks: [ r > 0 ]\r
  coherence_checks: [ g > 0 ]\r
  graph_implications: Misma forma radial que F por unidad de masa.\r
  pedagogical_triggers: [ diferencia_fuerza_campo ]\r
  rearrangements:\r
  - target: g\r
    equation: g = (G * M) / (r^2)\r
  - target: M\r
    equation: M = (g * r^2) / G\r
  - target: r\r
    equation: r = sqrt((G * M) / g)\r
  variables: [ g, G, M, r ]\r
\r
- id: peso_desde_campo\r
  title:\r
    es: Peso desde campo gravitatorio\r
    en: Weight from gravitational field\r
  equation: P = m * g\r
  latex: P = m \\cdot g\r
  category: dinamica\r
  relation_type: definition\r
  physical_meaning:\r
    es: Fuerza gravitatoria que actua sobre un cuerpo de masa m.\r
    en: Gravitational force acting on a body of mass m.\r
  constraints: [ m > 0, g > 0 ]\r
  validity:\r
    es: Valida en entorno local donde g se considera conocida.\r
    en: Valid in local settings where g is known.\r
  dimension_check: "[M*L*T^-2] = [M]*[L*T^-2]"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere conocer m y g del punto de analisis.\r
    en: Requires known m and g at analysis point.\r
  used_in: [ peso_superficial, ingenieria_basica ]\r
  interpretation_tags: [ peso, respuesta ]\r
  result_semantics:\r
    target: P\r
  domain_checks: [ m > 0 ]\r
  coherence_checks: [ P > 0 ]\r
  graph_implications: Relacion lineal de P con m para g fijo.\r
  pedagogical_triggers: [ peso_no_es_masa ]\r
  rearrangements:\r
  - target: P\r
    equation: P = m * g\r
  - target: m\r
    equation: m = P / g\r
  - target: g\r
    equation: g = P / m\r
  variables: [ P, m, g ]\r
\r
- id: aceleracion_gravitatoria\r
  title:\r
    es: Aceleracion gravitatoria radial\r
    en: Radial gravitational acceleration\r
  equation: a = (G * M) / (r^2)\r
  latex: a = \\frac{G \\cdot M}{r^2}\r
  category: dinamica\r
  relation_type: derived\r
  physical_meaning:\r
    es: Aceleracion radial que experimenta una masa de prueba.\r
    en: Radial acceleration experienced by a test body.\r
  constraints: [ G > 0, M > 0, r > 0 ]\r
  validity:\r
    es: Valida cuando domina gravedad newtoniana de una fuente.\r
    en: Valid when Newtonian gravity from one source dominates.\r
  dimension_check: "[L*T^-2] = ([M^-1*L^3*T^-2]*[M])/[L^2]"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere M y r sin ambiguedad geometrica.\r
    en: Requires M and r with clear geometric definition.\r
  used_in: [ caida_libre, dinamica_orbital ]\r
  interpretation_tags: [ aceleracion, campo ]\r
  result_semantics:\r
    target: a\r
  domain_checks: [ r > 0 ]\r
  coherence_checks: [ a > 0 ]\r
  graph_implications: Curva equivalente a g(r) en modulo.\r
  pedagogical_triggers: [ a_vs_g ]\r
  rearrangements:\r
  - target: a\r
    equation: a = (G * M) / (r^2)\r
  - target: M\r
    equation: M = (a * r^2) / G\r
  variables: [ a, G, M, r ]\r
\r
- id: variacion_inversa_cuadrado\r
  title:\r
    es: Variacion de fuerza por cambio de distancia\r
    en: Force variation from distance change\r
  equation: F2 = F1 * (r1 / r2)^2\r
  latex: F_2 = F_1 \\left(\\frac{r_1}{r_2}\\right)^2\r
  category: comparacion\r
  relation_type: scaling\r
  physical_meaning:\r
    es: Compara fuerza gravitatoria entre dos configuraciones radiales.\r
    en: Compares gravitational force across two radial configurations.\r
  constraints: [ F1 > 0, r1 > 0, r2 > 0 ]\r
  validity:\r
    es: Valida si m1 y m2 se mantienen constantes entre estados.\r
    en: Valid if m1 and m2 remain constant between states.\r
  dimension_check: "[M*L*T^-2] = [M*L*T^-2]*([L]/[L])^2"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere estado inicial coherente y radios comparables.\r
    en: Requires coherent initial state and comparable radii.\r
  used_in: [ estimacion_rapida, razonamiento_escalar ]\r
  interpretation_tags: [ proporcion, inversa_cuadrado ]\r
  result_semantics:\r
    target: F2\r
  domain_checks: [ r1 > 0, r2 > 0 ]\r
  coherence_checks: [ F2 > 0 ]\r
  graph_implications: Permite lectura de razon F2/F1 en eje radial.\r
  pedagogical_triggers: [ error_doble_distancia ]\r
  rearrangements:\r
  - target: F2\r
    equation: F2 = F1 * (r1 / r2)^2\r
  - target: F1\r
    equation: F1 = F2 * (r2 / r1)^2\r
  - target: r2\r
    equation: r2 = r1 * sqrt(F1 / F2)\r
  variables: [ F2, F1, r1, r2 ]\r
\r
- id: forma_vectorial_conceptual\r
  title:\r
    es: Forma vectorial conceptual\r
    en: Conceptual vector form\r
  equation: F_vec = -(G * m1 * m2 / r^2) * r_hat\r
  latex: \\vec F = -\\frac{G \\cdot m_1 \\cdot m_2}{r^2} \\hat r\r
  category: gravitacion\r
  relation_type: conceptual\r
  physical_meaning:\r
    es: Describe direccion atractiva radial de la fuerza gravitatoria.\r
    en: Describes radial attractive direction of gravitational force.\r
  constraints: [ r > 0 ]\r
  validity:\r
    es: Requiere marco vectorial y direccion radial definida.\r
    en: Requires vector framework and defined radial direction.\r
  dimension_check: "[M*L*T^-2]"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es relation conceptual sin resolver componentes automaticamente.\r
    en: It is conceptual and does not auto-resolve components.\r
  used_in: [ interpretacion_direccional ]\r
  interpretation_tags: [ direccion, radial ]\r
  result_semantics:\r
    target: F\r
  domain_checks: [ r > 0 ]\r
  coherence_checks: []\r
  graph_implications: Apoya lectura de direccion sin cambiar modulo de F(r).\r
  pedagogical_triggers: [ modulo_vs_vector ]\r
  rearrangements:\r
  - target: F\r
    equation: F = (G * m1 * m2) / (r^2)\r
  variables: [ F, G, m1, m2, r ]\r
\r
- id: superposicion_conceptual\r
  title:\r
    es: Superposicion de campo gravitatorio\r
    en: Gravitational-field superposition\r
  equation: g_total = sum(g_i)\r
  latex: \\vec g_{total} = \\sum_i \\vec g_i\r
  category: gravitacion\r
  relation_type: conceptual\r
  physical_meaning:\r
    es: El campo total resulta de suma vectorial de contribuciones.\r
    en: Total field is the vector sum of source contributions.\r
  constraints: []\r
  validity:\r
    es: Valida en regimen clasico lineal de superposicion.\r
    en: Valid in classical linear superposition regime.\r
  dimension_check: "[L*T^-2]"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Requiere geometria completa y orientaciones de fuentes.\r
    en: Requires full geometry and source orientations.\r
  used_in: [ sistemas_multiples ]\r
  interpretation_tags: [ superposicion, vectorial ]\r
  result_semantics:\r
    target: g\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: Explica refuerzo o cancelacion de campos.\r
  pedagogical_triggers: [ simetria ]\r
  rearrangements:\r
  - target: g\r
    equation: g_total = sum(g_i)\r
  variables: [ g ]\r
\r
ui:\r
  default_formula: ley_newton_gravitacion\r
  groups:\r
  - title:\r
      es: Formulas calculables\r
      en: Calculable formulas\r
    items:\r
    - ley_newton_gravitacion\r
    - campo_gravitatorio\r
    - peso_desde_campo\r
    - aceleracion_gravitatoria\r
    - variacion_inversa_cuadrado\r
  - title:\r
      es: Formulas conceptuales\r
      en: Conceptual formulas\r
    items:\r
    - forma_vectorial_conceptual\r
    - superposicion_conceptual\r
`;export{r as default};
