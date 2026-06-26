const e=`version: 1\r
formulas:\r
- id: newton_vectorial\r
  title:\r
    es: Segunda ley de Newton (vectorial)\r
    en: Newton's second law (vector form)\r
  equation: Fext = m*a\r
  latex: \\sum \\vec F_{ext}=m\\vec a\r
  rearrangements: []\r
  category: kinematic_law\r
  relation_type: law\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Ecuación vectorial global; para cálculo directo se proyecta por ejes.\r
    en: Global vector equation; direct calculations are usually performed on chosen\r
      axes.\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  interpretation_tags:\r
  - balance_global\r
  - diagnostico_dinamico\r
  result_semantics:\r
    target: Fext\r
    meaning: Resulta util para interpretar Fext en el contexto del leaf.\r
  domain_checks:\r
  - expr: m > 0\r
    message:\r
      es: La masa del sistema debe ser positiva.\r
      en: The system mass must be positive.\r
  coherence_checks:\r
  - expr: true\r
    message:\r
      es: La ecuación vectorial exige haber dibujado todas las fuerzas externas antes\r
        de proyectar por ejes.\r
      en: The vector equation requires all external forces to be drawn before projecting\r
        onto axes.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: true\r
    message:\r
      es: Si el balance aún mezcla escena real y fuerzas aisladas, primero corrige\r
        el DCL y luego calculas.\r
      en: If the balance still mixes the real scene and isolated forces, correct the\r
        FBD first and only then calculate.\r
- id: newton_x\r
  title:\r
    es: Segunda ley en eje x\r
    en: Newton's second law along x\r
  equation: Fx = m*ax\r
  latex: \\sum F_x = m a_x\r
  rearrangements:\r
  - target: ax\r
    equation: ax = Fx/m\r
    latex: a_x=\\frac{\\sum F_x}{m}\r
    constraints: []\r
  - target: Fx\r
    equation: Fx = m*ax\r
    latex: \\sum F_x = m a_x\r
    constraints: []\r
  category: kinematic_law\r
  relation_type: component_balance\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  interpretation_tags:\r
  - eje_x\r
  - aceleracion_por_componentes\r
  result_semantics:\r
    target: ax\r
    meaning: Resulta util para interpretar ax en el contexto del leaf.\r
  domain_checks:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser positiva para despejar la aceleración.\r
      en: Mass must be positive to solve for acceleration.\r
  coherence_checks:\r
  - expr: abs(Fx) < 1e-9 or abs(ax) > 0 or m > 0\r
    message:\r
      es: Si Fx es casi nula, la aceleración sobre x debe ser nula o despreciable\r
        salvo que falten fuerzas en el DCL.\r
      en: If Fx is nearly zero, the acceleration along x should be zero or negligible\r
        unless forces are missing from the FBD.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(Fx) < 1e-9\r
    message:\r
      es: Un eje con fuerza neta casi nula suele indicar equilibrio o velocidad constante\r
        en esa dirección.\r
      en: An axis with nearly zero net force usually indicates equilibrium or constant\r
        velocity in that direction.\r
- id: newton_y\r
  title:\r
    es: Segunda ley en eje y\r
    en: Newton's second law along y\r
  equation: Fy = m*ay\r
  latex: \\sum F_y = m a_y\r
  rearrangements:\r
  - target: ay\r
    equation: ay = Fy/m\r
    latex: a_y=\\frac{\\sum F_y}{m}\r
    constraints: []\r
  - target: Fy\r
    equation: Fy = m*ay\r
    latex: \\sum F_y = m a_y\r
    constraints: []\r
  category: kinematic_law\r
  relation_type: component_balance\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  interpretation_tags:\r
  - eje_y\r
  - restricciones\r
  result_semantics:\r
    target: ay\r
    meaning: Resulta util para interpretar ay en el contexto del leaf.\r
  domain_checks:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser positiva para usar la forma escalar de Newton.\r
      en: Mass must be positive to use the scalar form of Newton's law.\r
  coherence_checks:\r
  - expr: abs(Fy) < 1e-9 or abs(ay) > 0 or m > 0\r
    message:\r
      es: Si el cuerpo permanece apoyado sin despegar, una ay grande suele revelar\r
        ejes mal elegidos o fuerzas omitidas.\r
      en: If the body remains supported without lifting off, a large ay usually reveals\r
        poorly chosen axes or omitted forces.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(Fy) < 1e-9\r
    message:\r
      es: Cuando Fy se anula, el eje y está en equilibrio aunque el cuerpo pueda acelerar\r
        en otra dirección.\r
      en: When Fy vanishes, the y axis is in equilibrium even if the body accelerates\r
        in another direction.\r
- id: equilibrio_vertical\r
  title:\r
    es: Equilibrio vertical típico\r
    en: Typical vertical equilibrium\r
  equation: N = P\r
  latex: N=P\r
  rearrangements:\r
  - target: N\r
    equation: N = P\r
    latex: N=P\r
    constraints: []\r
  - target: P\r
    equation: P = N\r
    latex: P=N\r
    constraints: []\r
  category: kinematic_law\r
  relation_type: constraint_relation\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  interpretation_tags:\r
  - apoyo\r
  - equilibrio_normal\r
  result_semantics:\r
    target: N\r
    meaning: Resulta util para interpretar N en el contexto del leaf.\r
  domain_checks:\r
  - expr: P >= 0\r
    message:\r
      es: El peso debe ser no negativo.\r
      en: Weight must be non-negative.\r
  coherence_checks:\r
  - expr: N >= 0\r
    message:\r
      es: Una normal negativa indicaría pérdida de contacto o un modelo de apoyo mal\r
        planteado.\r
      en: A negative normal would indicate loss of contact or a poorly posed support\r
        model.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: true\r
    message:\r
      es: Esta igualdad solo vale si no hay otras fuerzas verticales ni aceleración\r
        vertical apreciable.\r
      en: This equality only holds when there are no other vertical forces and no\r
        appreciable vertical acceleration.\r
- id: rozamiento_cinetico\r
  title:\r
    es: Rozamiento cinético\r
    en: Kinetic friction\r
  equation: fk = mu_k*N\r
  latex: f_k=\\mu_k N\r
  rearrangements:\r
  - target: fk\r
    equation: fk = mu_k*N\r
    latex: f_k=\\mu_k N\r
    constraints: []\r
  - target: mu_k\r
    equation: mu_k = fk/N\r
    latex: \\mu_k=\\frac{f_k}{N}\r
    constraints:\r
    - expr: N != 0\r
      message:\r
        es: N != 0\r
        en: N != 0\r
  category: kinematic_law\r
  relation_type: constitutive_model\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  interpretation_tags:\r
  - rozamiento\r
  - contacto\r
  result_semantics:\r
    target: fk\r
    meaning: Resulta util para interpretar fk en el contexto del leaf.\r
  domain_checks:\r
  - expr: N >= 0\r
    message:\r
      es: La normal debe ser no negativa en un contacto ordinario.\r
      en: The normal force must be non-negative in an ordinary contact.\r
  - expr: mu_k >= 0\r
    message:\r
      es: El coeficiente cinético debe ser no negativo.\r
      en: The kinetic coefficient must be non-negative.\r
  coherence_checks:\r
  - expr: fk >= 0\r
    message:\r
      es: El módulo de la fuerza de rozamiento no puede ser negativo; el signo se\r
        fija con el eje, no con el valor absoluto.\r
      en: The friction-force magnitude cannot be negative; the sign is set by the\r
        axis, not by the absolute value.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: mu_k > 1.2\r
    message:\r
      es: Un coeficiente muy alto no es imposible, pero suele pedir revisar datos,\r
        unidades o tipo de material.\r
      en: A very high coefficient is not impossible, but it usually calls for checking\r
        the data, units, or material type.\r
- id: rozamiento_estatico\r
  title:\r
    es: Cota de rozamiento estático\r
    en: Static-friction bound\r
  equation: fs <= mu_s*N\r
  latex: f_s\\leq\\mu_s N\r
  rearrangements: []\r
  category: kinematic_law\r
  relation_type: inequality_bound\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es una desigualdad de umbral, no una igualdad universal.\r
    en: It is a threshold inequality, not a universal equality.\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  interpretation_tags:\r
  - rozamiento_estatico\r
  - umbral\r
  result_semantics:\r
    target: fs\r
    meaning: Resulta util para interpretar fs en el contexto del leaf.\r
  domain_checks:\r
  - expr: N >= 0\r
    message:\r
      es: La normal debe ser no negativa para que el límite tenga sentido físico.\r
      en: The normal force must be non-negative for the bound to make physical sense.\r
  coherence_checks:\r
  - expr: mu_s >= 0\r
    message:\r
      es: El coeficiente estático debe ser no negativo.\r
      en: The static coefficient must be non-negative.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: true\r
    message:\r
      es: 'Error típico: sustituir siempre fs por mu_s N aunque el cuerpo todavía\r
        no esté a punto de deslizar.'\r
      en: 'Typical mistake: always replacing fs with mu_s N even when the body is\r
        not yet about to slip.'\r
- id: componentes_peso_plano\r
  title:\r
    es: Componentes del peso en plano inclinado\r
    en: Weight components on an inclined plane\r
  equation: Fy = m*g*cos(theta); Fx = m*g*sin(theta)\r
  latex: P_{\\perp}=mg\\cos\\theta,\\quad P_{\\parallel}=mg\\sin\\theta\r
  rearrangements: []\r
  category: kinematic_law\r
  relation_type: geometric_projection\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Depende de la convención de ejes y signo adoptados.\r
    en: It depends on the chosen axis orientation and sign convention.\r
  used_in:\r
  - diagramas-cuerpo-libre\r
  interpretation_tags:\r
  - plano_inclinado\r
  - descomposicion\r
  result_semantics:\r
    target: Fy\r
    meaning: Resulta util para interpretar Fy en el contexto del leaf.\r
  domain_checks:\r
  - expr: m >= 0\r
    message:\r
      es: La masa no puede ser negativa.\r
      en: Mass cannot be negative.\r
  - expr: g >= 0\r
    message:\r
      es: La gravedad debe ser no negativa en este modelo escalar.\r
      en: Gravitational acceleration must be non-negative in this scalar model.\r
  coherence_checks:\r
  - expr: true\r
    message:\r
      es: Seno y coseno dependen de cómo se mida theta; primero fija el ángulo y luego\r
        proyecta.\r
      en: Sine and cosine depend on how theta is measured; fix the angle first and\r
        then project.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: true\r
    message:\r
      es: 'Error recurrente: intercambiar la componente paralela y la perpendicular\r
        al cambiar la referencia angular.'\r
      en: 'Recurrent mistake: swapping the parallel and perpendicular components when\r
        the angular reference changes.'\r
`;export{e as default};
