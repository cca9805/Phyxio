const e=`version: 1\r
formulas:\r
- id: comp_cartesianas\r
  title:\r
    es: descomposición cartesiana completa\r
    en: complete Cartesian decomposition\r
  equation: Fx = Fm*cos(theta); Fy = Fm*sin(theta)\r
  latex: F_x = F\\cos\\theta,\\quad F_y = F\\sin\\theta\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: geometric_projection\r
  physical_meaning:\r
    es: Una fuerza inclinada puede proyectarse sobre dos ejes ortogonales para analizar\r
      por separado sus efectos sobre cada dirección.\r
    en: An inclined force can be projected onto two orthogonal axes to analyze separately\r
      its effects along each direction.\r
  constraints:\r
  - expr: Fm >= 0\r
    message:\r
      es: El módulo de la fuerza debe ser no negativo.\r
      en: The force magnitude must be non-negative.\r
  validity:\r
    es: Válida cuando el ángulo se mide desde el eje x positivo de un sistema ortogonal\r
      y la fuerza se proyecta sobre esos mismos ejes.\r
    en: Valid when the angle is measured from the positive x axis of an orthogonal\r
      system and the force is projected onto those same axes.\r
  dimension_check: N = N\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Resume dos proyecciones distintas; el motor las resuelve por separado para\r
      cada target.\r
    en: It summarizes two different projections; the engine solves them separately\r
      for each target.\r
  used_in:\r
  - theory\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - projection\r
  - orthogonal_axes\r
  - trig_choice\r
  result_semantics:\r
    target: Fx\r
    meaning: Resulta util para interpretar Fx en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica siempre desde qué eje se mide el ángulo antes de usar seno y coseno.\r
      en: Always verify from which axis the angle is measured before using sine and\r
        cosine.\r
  coherence_checks:\r
  - expr: abs(Fm*Fm - (Fx*Fx + Fy*Fy)) < 1e-6\r
    severity: ok\r
    message:\r
      es: Las componentes reconstruyen el módulo con consistencia pitagórica.\r
      en: The components reconstruct the magnitude with Pythagorean consistency.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(Fx) > Fm || abs(Fy) > Fm\r
    message:\r
      es: Si una componente supera al módulo total, la función trigonométrica o el\r
        ángulo están mal elegidos.\r
      en: If a component exceeds the total magnitude, the trigonometric function or\r
        the angle choice is wrong.\r
- id: comp_cartesianas_fx\r
  title:\r
    es: componente x desde ángulo horizontal\r
    en: x component from horizontal angle\r
  equation: Fx = Fm*cos(theta)\r
  latex: F_x = F\\cos\\theta\r
  rearrangements:\r
  - target: Fx\r
    equation: Fx = Fm*cos(theta)\r
    latex: F_x = F\\cos\\theta\r
    constraints: []\r
  - target: Fm\r
    equation: Fm = Fx/cos(theta)\r
    latex: F = \\frac{F_x}{\\cos\\theta}\r
    constraints:\r
    - expr: cos(theta) != 0\r
      message:\r
        es: cos(theta) != 0\r
        en: cos(theta) != 0\r
  category: derived\r
  relation_type: geometric_projection\r
  physical_meaning:\r
    es: Esta proyección extrae la parte de la fuerza total que realmente actúa sobre\r
      el eje x.\r
    en: This projection extracts the part of the total force that actually acts along\r
      the x axis.\r
  constraints:\r
  - expr: Fm >= 0\r
    message:\r
      es: El módulo de la fuerza debe ser no negativo.\r
      en: The force magnitude must be non-negative.\r
  validity:\r
    es: Válida cuando theta se mide desde el eje x positivo y el sistema de ejes es\r
      ortogonal.\r
    en: Valid when theta is measured from the positive x axis and the axis system\r
      is orthogonal.\r
  dimension_check: N = N\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - calculator\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - x_projection\r
  - sign_consistency\r
  - horizontal_effect\r
  result_semantics:\r
    target: Fx\r
    meaning: Resulta util para interpretar Fx en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Si el ángulo no se mide desde la horizontal, esta ecuación debe reemplazarse\r
        por la variante geométrica correcta.\r
      en: If the angle is not measured from the horizontal, this equation must be\r
        replaced by the proper geometric variant.\r
  coherence_checks:\r
  - expr: abs(Fx) <= abs(Fm) + 1e-9\r
    severity: ok\r
    message:\r
      es: La componente x no supera al módulo total, como exige una proyección física\r
        correcta.\r
      en: The x component does not exceed the total magnitude, as required by a correct\r
        physical projection.\r
  - expr: abs(Fx) > abs(Fm) + 1e-9\r
    severity: warning\r
    message:\r
      es: Si |Fx| supera a Fm, hay un error de trigonometría, unidades o referencia\r
        angular.\r
      en: If |Fx| exceeds Fm, there is a trigonometric, unit, or angular-reference\r
        error.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(Fx) < 1e-9 && abs(theta) > 1e-9 && abs(theta-1.57079632679) >\r
      1e-3\r
    message:\r
      es: Una componente x casi nula con un ángulo no próximo a 90° suele indicar\r
        un seno/coseno intercambiado.\r
      en: An almost-zero x component with an angle not close to 90° usually indicates\r
        sine/cosine were swapped.\r
- id: comp_cartesianas_fy\r
  title:\r
    es: componente y desde ángulo horizontal\r
    en: y component from horizontal angle\r
  equation: Fy = Fm*sin(theta)\r
  latex: F_y = F\\sin\\theta\r
  rearrangements:\r
  - target: Fy\r
    equation: Fy = Fm*sin(theta)\r
    latex: F_y = F\\sin\\theta\r
    constraints: []\r
  - target: Fm\r
    equation: Fm = Fy/sin(theta)\r
    latex: F = \\frac{F_y}{\\sin\\theta}\r
    constraints:\r
    - expr: sin(theta) != 0\r
      message:\r
        es: sin(theta) != 0\r
        en: sin(theta) != 0\r
  category: derived\r
  relation_type: geometric_projection\r
  physical_meaning:\r
    es: Esta proyección identifica la parte de la fuerza que modifica el balance vertical\r
      o lateral del sistema.\r
    en: This projection identifies the part of the force that modifies the vertical\r
      or lateral balance of the system.\r
  constraints:\r
  - expr: Fm >= 0\r
    message:\r
      es: El módulo de la fuerza debe ser no negativo.\r
      en: The force magnitude must be non-negative.\r
  validity:\r
    es: Válida cuando theta se mide desde el eje x positivo y el sistema de ejes es\r
      ortogonal.\r
    en: Valid when theta is measured from the positive x axis and the axis system\r
      is orthogonal.\r
  dimension_check: N = N\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - calculator\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - y_projection\r
  - contact_effect\r
  - sign_consistency\r
  result_semantics:\r
    target: Fy\r
    meaning: Resulta util para interpretar Fy en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Si el ángulo viene dado desde la vertical o desde el plano, revisa la geometría\r
        antes de usar esta forma estándar.\r
      en: If the angle is given from the vertical or from the plane, check the geometry\r
        before using this standard form.\r
  coherence_checks:\r
  - expr: abs(Fy) <= abs(Fm) + 1e-9\r
    severity: ok\r
    message:\r
      es: La componente y no supera al módulo total.\r
      en: The y component does not exceed the total magnitude.\r
  - expr: abs(Fy) > abs(Fm) + 1e-9\r
    severity: warning\r
    message:\r
      es: Si |Fy| supera a Fm, la descomposición no es físicamente coherente.\r
      en: If |Fy| exceeds Fm, the decomposition is not physically coherent.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(Fy) < 1e-9 && abs(theta) > 1e-9 && abs(theta-3.14159265359/2)\r
      > 1e-3\r
    message:\r
      es: Una componente y casi nula con un ángulo no próximo a 0° suele señalar una\r
        referencia angular mal leída.\r
      en: An almost-zero y component with an angle not close to 0° usually signals\r
        a misread angular reference.\r
- id: modulo_desde_componentes\r
  title:\r
    es: módulo desde componentes ortogonales\r
    en: Magnitude from components\r
  equation: Fm = sqrt(Fx^2 + Fy^2)\r
  latex: F = \\sqrt{F_x^2 + F_y^2}\r
  rearrangements:\r
  - target: Fm\r
    equation: Fm = sqrt(Fx^2 + Fy^2)\r
    latex: F = \\sqrt{F_x^2 + F_y^2}\r
    constraints: []\r
  category: derived\r
  relation_type: reconstruction\r
  physical_meaning:\r
    es: El módulo total puede reconstruirse a partir de componentes ortogonales usando\r
      el teorema de Pitágoras.\r
    en: The total magnitude can be reconstructed from orthogonal components using\r
      the Pythagorean theorem.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: Fx y Fy deben pertenecer a la misma fuerza y al mismo sistema ortogonal\r
        de ejes.\r
      en: Fx and Fy must belong to the same force and to the same orthogonal axis\r
        system.\r
  validity:\r
    es: Válida solo si Fx y Fy son proyecciones ortogonales de un mismo vector.\r
    en: Valid only if Fx and Fy are orthogonal projections of the same vector.\r
  dimension_check: N = N\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - calculator\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - magnitude_reconstruction\r
  - pythagorean_check\r
  - orthogonality\r
  result_semantics:\r
    target: Fm\r
    meaning: Resulta util para interpretar Fm en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Si las componentes provienen de ejes no ortogonales, esta reconstrucción\r
        deja de ser válida.\r
      en: If the components come from non-orthogonal axes, this reconstruction is\r
        no longer valid.\r
  coherence_checks:\r
  - expr: Fm >= 0\r
    severity: ok\r
    message:\r
      es: El módulo reconstruido es no negativo, como exige una magnitud física.\r
      en: The reconstructed magnitude is non-negative, as required by a physical magnitude.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(Fx) < 1e-9 && abs(Fy) < 1e-9\r
    message:\r
      es: Si ambas componentes son nulas, el vector total también debe ser nulo.\r
      en: If both components are zero, the total vector must also be zero.\r
- id: comp_plano_inclinado\r
  title:\r
    es: proyección del peso en plano inclinado\r
    en: Weight projection on an inclined plane\r
  equation: Ppar = m*g*sin(theta); Pperp = m*g*cos(theta)\r
  latex: P_{\\parallel}=mg\\sin\\theta,\\quad P_{\\perp}=mg\\cos\\theta\r
  rearrangements: []\r
  category: applied\r
  relation_type: geometric_projection\r
  physical_meaning:\r
    es: El peso puede separarse en una parte que hace deslizar al cuerpo y otra que\r
      lo comprime contra la superficie.\r
    en: Weight can be separated into one part that makes the body slide and another\r
      that presses it against the surface.\r
  constraints:\r
  - expr: m > 0 && g > 0\r
    message:\r
      es: La masa y la gravedad deben ser positivas en el dominio usual del modelo.\r
      en: Mass and gravity must be positive in the usual model domain.\r
  validity:\r
    es: Válida cuando theta coincide con el ángulo geométrico del plano y los ejes\r
      se toman paralelo y perpendicular a la rampa.\r
    en: Valid when theta matches the geometric angle of the plane and the axes are\r
      chosen parallel and perpendicular to the ramp.\r
  dimension_check: N = kg·m/s^2\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Resume dos fórmulas aplicadas a objetivos distintos; el motor las maneja por\r
      separado para cada componente.\r
    en: It summarizes two formulas applied to different targets; the engine handles\r
      them separately for each component.\r
  used_in:\r
  - theory\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - inclined_plane\r
  - weight_projection\r
  - contact_reading\r
  result_semantics:\r
    target: Ppar\r
    meaning: Resulta util para interpretar Ppar en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Si los ejes no son paralelo-perpendicular al plano, estas expresiones ya\r
        no se leen de forma directa.\r
      en: If the axes are not chosen parallel-perpendicular to the plane, these expressions\r
        can no longer be read directly.\r
  coherence_checks:\r
  - expr: abs(Ppar) <= m*g + 1e-9 && abs(Pperp) <= m*g + 1e-9\r
    severity: ok\r
    message:\r
      es: Ninguna componente del peso supera al propio peso total.\r
      en: No component of weight exceeds the total weight itself.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(Ppar) > m*g + 1e-9 || abs(Pperp) > m*g + 1e-9\r
    message:\r
      es: Si una componente del peso supera a mg, el ángulo, la función trigonométrica\r
        o las unidades están mal planteados.\r
      en: If a weight component exceeds mg, the angle, trigonometric function, or\r
        units are misused.\r
- id: comp_plano_inclinado_paralela\r
  title:\r
    es: componente paralela del peso\r
    en: parallel component of weight\r
  equation: Ppar = m*g*sin(theta)\r
  latex: P_{\\parallel}=mg\\sin\\theta\r
  rearrangements:\r
  - target: Ppar\r
    equation: Ppar = m*g*sin(theta)\r
    latex: P_{\\parallel}=mg\\sin\\theta\r
    constraints: []\r
  category: applied\r
  relation_type: geometric_projection\r
  physical_meaning:\r
    es: Identifica la parte del peso que tiende a acelerar el cuerpo a lo largo de\r
      la rampa.\r
    en: It identifies the part of the weight that tends to accelerate the body along\r
      the ramp.\r
  constraints:\r
  - expr: m > 0 && g > 0\r
    message:\r
      es: La masa y la gravedad deben ser positivas.\r
      en: Mass and gravity must be positive.\r
  validity:\r
    es: Válida con ejes alineados con el plano y con theta igual al ángulo de inclinación.\r
    en: Valid with axes aligned with the plane and with theta equal to the inclination\r
      angle.\r
  dimension_check: N = kg·m/s^2\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - calculator\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - inclined_plane\r
  - downhill_component\r
  - driving_force\r
  result_semantics:\r
    target: Ppar\r
    meaning: Resulta util para interpretar Ppar en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Si el ángulo dado no es el de la rampa sino el complementario, la función\r
        trigonométrica debe revisarse.\r
      en: If the given angle is not the ramp angle but the complementary one, the\r
        trigonometric function must be revised.\r
  coherence_checks:\r
  - expr: abs(Ppar) <= m*g + 1e-9\r
    severity: ok\r
    message:\r
      es: La componente paralela es físicamente compatible con el peso total.\r
      en: The parallel component is physically compatible with total weight.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(Ppar) < 1e-9 && abs(theta) > 1e-9\r
    message:\r
      es: Una componente paralela casi nula con una rampa no horizontal suele indicar\r
        función trigonométrica intercambiada.\r
      en: An almost-zero parallel component on a non-horizontal ramp usually indicates\r
        the trigonometric function was swapped.\r
- id: comp_plano_inclinado_perpendicular\r
  title:\r
    es: componente perpendicular del peso\r
    en: perpendicular component of weight\r
  equation: Pperp = m*g*cos(theta)\r
  latex: P_{\\perp}=mg\\cos\\theta\r
  rearrangements:\r
  - target: Pperp\r
    equation: Pperp = m*g*cos(theta)\r
    latex: P_{\\perp}=mg\\cos\\theta\r
    constraints: []\r
  category: applied\r
  relation_type: geometric_projection\r
  physical_meaning:\r
    es: Identifica la parte del peso que carga el contacto normal entre cuerpo y superficie.\r
    en: It identifies the part of the weight that loads the normal contact between\r
      body and surface.\r
  constraints:\r
  - expr: m > 0 && g > 0\r
    message:\r
      es: La masa y la gravedad deben ser positivas.\r
      en: Mass and gravity must be positive.\r
  validity:\r
    es: Válida con ejes paralelo-perpendicular al plano y con theta igual al ángulo\r
      del plano.\r
    en: Valid with axes parallel-perpendicular to the plane and with theta equal to\r
      the plane angle.\r
  dimension_check: N = kg·m/s^2\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - calculator\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - inclined_plane\r
  - contact_loading\r
  - normal_relation\r
  result_semantics:\r
    target: Pperp\r
    meaning: Resulta util para interpretar Pperp en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Si el problema usa un eje vertical-horizontal, esta fórmula no puede leerse\r
        sin rotar antes los ejes.\r
      en: If the problem uses vertical-horizontal axes, this formula cannot be read\r
        without rotating the axes first.\r
  coherence_checks:\r
  - expr: abs(Pperp) <= m*g + 1e-9\r
    severity: ok\r
    message:\r
      es: La componente perpendicular es físicamente compatible con el peso total.\r
      en: The perpendicular component is physically compatible with total weight.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(Pperp) < 1e-9 && abs(theta) < 1.56\r
    message:\r
      es: Una componente perpendicular casi nula con una rampa no casi vertical suele\r
        señalar un error geométrico.\r
      en: An almost-zero perpendicular component on a ramp that is not nearly vertical\r
        usually signals a geometric error.\r
`;export{e as default};
