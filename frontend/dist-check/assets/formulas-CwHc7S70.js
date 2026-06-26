const r=`version: 5\r
topic:\r
  id: velocidad-orbital\r
  title:\r
    es: Velocidad orbital\r
    en: Orbital velocity\r
\r
formulas:\r
- id: velocidad_orbital_circular\r
  title:\r
    es: Velocidad orbital circular\r
    en: Circular orbital velocity\r
  equation: v_orb = sqrt((G * M) / r)\r
  latex: v_{orb} = \\sqrt{\\frac{G M}{r}}\r
  category: gravitacion\r
  relation_type: law\r
  physical_meaning:\r
    es: Velocidad tangencial para orbita circular en campo central.\r
    en: Tangential speed for circular orbit in a central field.\r
  constraints: [ G > 0, M > 0, r > 0 ]\r
  validity:\r
    es: Valida en aproximacion de dos cuerpos con masa central dominante.\r
    en: Valid in two-body approximation with dominant central mass.\r
  dimension_check: "[L*T^-1] = sqrt(([M^-1*L^3*T^-2]*[M])/[L])"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere masa central y radio orbital en SI.\r
    en: Requires central mass and orbital radius in SI.\r
  used_in: [ estimacion_orbita_baja, diseno_mision ]\r
  interpretation_tags: [ circular, kepleriano ]\r
  result_semantics:\r
    target: v_orb\r
  domain_checks: [ r > 0 ]\r
  coherence_checks: [ v_orb > 0 ]\r
  graph_implications: Curva decreciente con raiz de uno sobre r.\r
  pedagogical_triggers: [ confusion_r_h ]\r
  rearrangements:\r
  - target: v_orb\r
    equation: v_orb = sqrt((G * M) / r)\r
  - target: M\r
    equation: M = (v_orb^2 * r) / G\r
  - target: r\r
    equation: r = (G * M) / (v_orb^2)\r
  variables: [ v_orb, G, M, r ]\r
\r
- id: velocidad_escape\r
  title:\r
    es: Velocidad de escape\r
    en: Escape velocity\r
  equation: v_escape = sqrt((2 * G * M) / r)\r
  latex: v_{esc} = \\sqrt{\\frac{2 G M}{r}}\r
  category: gravitacion\r
  relation_type: derived\r
  physical_meaning:\r
    es: Umbral minimo para no quedar ligado gravitatoriamente.\r
    en: Minimum threshold to avoid remaining gravitationally bound.\r
  constraints: [ G > 0, M > 0, r > 0 ]\r
  validity:\r
    es: Valida para salida radial ideal sin propulsion posterior.\r
    en: Valid for ideal radial departure without further propulsion.\r
  dimension_check: "[L*T^-1] = sqrt(([M^-1*L^3*T^-2]*[M])/[L])"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere radio de lanzamiento y masa central.\r
    en: Requires launch radius and central mass.\r
  used_in: [ analisis_escape, energia_orbital ]\r
  interpretation_tags: [ umbral, escape ]\r
  result_semantics:\r
    target: v_escape\r
  domain_checks: [ r > 0 ]\r
  coherence_checks: [ v_escape > 0 ]\r
  graph_implications: Curva paralela a v_orb con factor raiz de dos.\r
  pedagogical_triggers: [ confundir_escape_orbital ]\r
  rearrangements:\r
  - target: v_escape\r
    equation: v_escape = sqrt((2 * G * M) / r)\r
  - target: M\r
    equation: M = (v_escape^2 * r) / (2 * G)\r
  variables: [ v_escape, G, M, r ]\r
\r
- id: periodo_orbital\r
  title:\r
    es: Periodo orbital circular\r
    en: Circular orbital period\r
  equation: T = 2 * pi * sqrt((r^3) / (G * M))\r
  latex: T = 2\\pi\\sqrt{\\frac{r^3}{G M}}\r
  category: gravitacion\r
  relation_type: derived\r
  physical_meaning:\r
    es: Tiempo de una revolucion completa en orbita circular.\r
    en: Time for one full revolution in circular orbit.\r
  constraints: [ G > 0, M > 0, r > 0 ]\r
  validity:\r
    es: Valida para orbita circular estable en campo central.\r
    en: Valid for stable circular orbit in central field.\r
  dimension_check: "[T] = sqrt(([L^3])/([M^-1*L^3*T^-2]*[M]))"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere radio orbital y masa central.\r
    en: Requires orbital radius and central mass.\r
  used_in: [ sincronizacion, planeacion_temporal ]\r
  interpretation_tags: [ periodicidad, kepler ]\r
  result_semantics:\r
    target: T\r
  domain_checks: [ r > 0 ]\r
  coherence_checks: [ T > 0 ]\r
  graph_implications: A mayor r, el periodo aumenta de forma no lineal.\r
  pedagogical_triggers: [ linealizar_periodo ]\r
  rearrangements:\r
  - target: T\r
    equation: T = 2 * pi * sqrt((r^3) / (G * M))\r
  - target: r\r
    equation: r = ((G * M) * (T / (2 * pi))^2)^(1/3)\r
  variables: [ T, r, G, M ]\r
\r
- id: parametro_gravitacional\r
  title:\r
    es: Parametro gravitacional\r
    en: Gravitational parameter\r
  equation: mu = G * M\r
  latex: \\mu = G M\r
  category: gravitacion\r
  relation_type: definition\r
  physical_meaning:\r
    es: Producto que compacta constante universal y masa central.\r
    en: Product compacting universal constant and central mass.\r
  constraints: [ G > 0, M > 0 ]\r
  validity:\r
    es: Valida en modelo de fuente central dominante.\r
    en: Valid in dominant central-source model.\r
  dimension_check: "[L^3*T^-2] = [M^-1*L^3*T^-2]*[M]"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere G y M.\r
    en: Requires G and M.\r
  used_in: [ vis_viva, dinamica_orbital ]\r
  interpretation_tags: [ compactacion ]\r
  result_semantics:\r
    target: mu\r
  domain_checks: [ M > 0 ]\r
  coherence_checks: [ mu > 0 ]\r
  graph_implications: Ajusta escala de curvas orbitales.\r
  pedagogical_triggers: [ olvidar_unidades_mu ]\r
  rearrangements:\r
  - target: mu\r
    equation: mu = G * M\r
  - target: M\r
    equation: M = mu / G\r
  variables: [ mu, G, M ]\r
\r
- id: vis_viva\r
  title:\r
    es: Ecuacion vis viva\r
    en: Vis-viva equation\r
  equation: v_orb = sqrt(mu * (2 / r - 1 / a))\r
  latex: v = \\sqrt{\\mu\\left(\\frac{2}{r}-\\frac{1}{a}\\right)}\r
  category: gravitacion\r
  relation_type: law\r
  physical_meaning:\r
    es: Relacion entre velocidad, radio instantaneo y semieje mayor.\r
    en: Relation among speed, instantaneous radius, and semimajor axis.\r
  constraints: [ mu > 0, r > 0, a > 0 ]\r
  validity:\r
    es: Valida en orbitas keplerianas sin perturbacion fuerte.\r
    en: Valid in Keplerian orbits without strong perturbation.\r
  dimension_check: "[L*T^-1] = sqrt([L^3*T^-2]*[L^-1])"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere mu, r y a consistentes.\r
    en: Requires consistent mu, r, and a.\r
  used_in: [ elipticas, transferencia ]\r
  interpretation_tags: [ energia, geometria ]\r
  result_semantics:\r
    target: v_orb\r
  domain_checks: [ r > 0, a > 0 ]\r
  coherence_checks: [ v_orb > 0 ]\r
  graph_implications: Conecta punto orbital instantaneo con nivel energetico medio.\r
  pedagogical_triggers: [ confundir_a_r ]\r
  rearrangements:\r
  - target: v_orb\r
    equation: v_orb = sqrt(mu * (2 / r - 1 / a))\r
  - target: a\r
    equation: a = 1 / (2 / r - v_orb^2 / mu)\r
  variables: [ v_orb, mu, r, a ]\r
\r
- id: energia_orbital_especifica\r
  title:\r
    es: Energia orbital especifica\r
    en: Specific orbital energy\r
  equation: E = -mu / (2 * a)\r
  latex: \\epsilon = -\\frac{\\mu}{2a}\r
  category: energia\r
  relation_type: derived\r
  physical_meaning:\r
    es: Energia por unidad de masa que clasifica regimen orbital.\r
    en: Energy per unit mass classifying orbital regime.\r
  constraints: [ mu > 0, a > 0 ]\r
  validity:\r
    es: Valida para orbitas keplerianas ligadas en aproximacion clasica.\r
    en: Valid for bound Keplerian orbits in classical approximation.\r
  dimension_check: "[L^2*T^-2] = [L^3*T^-2]/[L]"\r
  calculable: true\r
  motivo_no_calculable:\r
    es: Requiere mu y semieje mayor.\r
    en: Requires mu and semimajor axis.\r
  used_in: [ clasificacion_orbital ]\r
  interpretation_tags: [ ligadura, energia ]\r
  result_semantics:\r
    target: E\r
  domain_checks: [ a > 0 ]\r
  coherence_checks: []\r
  graph_implications: Define si orbita es ligada segun signo de energia.\r
  pedagogical_triggers: [ ignorar_signo ]\r
  rearrangements:\r
  - target: E\r
    equation: E = -mu / (2 * a)\r
  - target: a\r
    equation: a = -mu / (2 * E)\r
  variables: [ E, mu, a ]\r
\r
ui:\r
  default_formula: velocidad_orbital_circular\r
  groups:\r
  - title:\r
      es: Formulas calculables\r
      en: Calculable formulas\r
    items:\r
    - velocidad_orbital_circular\r
    - velocidad_escape\r
    - periodo_orbital\r
    - parametro_gravitacional\r
    - vis_viva\r
    - energia_orbital_especifica\r
`;export{r as default};
