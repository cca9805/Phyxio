const e=`version: 1\r
formulas:\r
- id: fuerza_ideal_poleas_compuestas\r
  title:\r
    es: fuerza ideal en poleas compuestas\r
    en: ideal force in compound pulleys\r
  equation: F_ideal = W / nSel\r
  latex: F_{ideal} = \\frac{W}{n}\r
  rearrangements:\r
  - target: F_ideal\r
    equation: F_ideal = W / nSel\r
    latex: F_{ideal} = \\frac{W}{n}\r
    constraints: []\r
  - target: W\r
    equation: W = F_ideal * nSel\r
    latex: W = F_{ideal}\\, n\r
    constraints: []\r
  - target: nSel\r
    equation: nSel = W / F_ideal\r
    latex: n = \\frac{W}{F_{ideal}}\r
    constraints: []\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Relaciona el peso de la carga con la fuerza de tracción necesaria en el modelo\r
      ideal mediante la ventaja mecánica del sistema.\r
    en: Relates load weight to the pulling force required in the ideal model through\r
      the system mechanical advantage.\r
  constraints:\r
  - cuerda inextensible\r
  - poleas ideales sin rozamiento\r
  - tramos portantes con igual tensión\r
  - nSel representa el número de tramos que sostienen la carga\r
  validity:\r
    es: Válida en un modelo ideal de poleas compuestas en el que las pérdidas son\r
      despreciables y la tensión es uniforme en cada tramo.\r
    en: Valid in an ideal compound-pulley model where losses are negligible and tension\r
      is uniform along each segment.\r
  dimension_check: '[MLT^-2] = [MLT^-2] / [1]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria.md\r
  - ejemplos.md\r
  - aplicaciones.md\r
  interpretation_tags:\r
  - ventaja_mecanica\r
  - modelo_ideal\r
  - distribucion_del_esfuerzo\r
  result_semantics:\r
    target: F_ideal\r
    meaning: Resulta util para interpretar F_ideal en el contexto del leaf.\r
  domain_checks:\r
  - id: carga_no_negativa\r
    expr: W >= 0\r
    message:\r
      es: El peso de la carga debe ser no negativo.\r
      en: The load weight must be non-negative.\r
  - id: tramos_validos\r
    expr: nSel >= 1\r
    message:\r
      es: El número de tramos portantes debe ser al menos 1.\r
      en: The number of supporting segments must be at least 1.\r
  coherence_checks:\r
  - id: fuerza_ideal_no_negativa\r
    expr: F_ideal >= 0\r
    message:\r
      es: La fuerza ideal no puede ser negativa en este modelo.\r
      en: The ideal force cannot be negative in this model.\r
  - id: fuerza_ideal_menor_igual_peso\r
    expr: F_ideal <= W if W >= 0 else True\r
    message:\r
      es: En el modelo ideal, la fuerza requerida no debe superar el peso si nSel\r
        >= 1.\r
      en: In the ideal model, the required force should not exceed the weight if nSel\r
        >= 1.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - id: contar_poleas_en_lugar_de_tramos\r
    detect_when: nSel >= 1\r
    message:\r
      es: Recuerda contar tramos portantes, no simplemente el número de poleas visibles.\r
      en: Remember to count supporting rope segments, not merely the number of visible\r
        pulleys.\r
- id: fuerza_real_poleas_compuestas\r
  title:\r
    es: fuerza real con eficiencia\r
    en: real force with efficiency\r
  equation: F_real = W / (eta * nSel)\r
  latex: F_real = \\frac{W}{\\eta\\, n}\r
  rearrangements:\r
  - target: F_real\r
    equation: F_real = W / (eta * nSel)\r
    latex: F_real = \\frac{W}{\\eta\\, n}\r
    constraints: []\r
  - target: eta\r
    equation: eta = W / (F_real * nSel)\r
    latex: \\eta = \\frac{W}{F_real\\, n}\r
    constraints: []\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Corrige la fuerza ideal introduciendo una eficiencia menor que la unidad para\r
      modelar pérdidas reales del sistema.\r
    en: Corrects the ideal force by introducing an efficiency lower than one to model\r
      real system losses.\r
  constraints:\r
  - modelo de eficiencia global\r
  - 0 < eta <= 1\r
  - cuerda inextensible\r
  - distribucion ideal de tensiones salvo pérdidas resumidas en eta\r
  validity:\r
    es: Válida cuando las pérdidas del sistema pueden resumirse razonablemente mediante\r
      un factor global de eficiencia eta.\r
    en: Valid when system losses can be reasonably summarized by a global efficiency\r
      factor eta.\r
  dimension_check: '[MLT^-2] = [MLT^-2] / ([1][1])'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria.md\r
  - ejemplos.md\r
  - aplicaciones.md\r
  interpretation_tags:\r
  - eficiencia\r
  - fuerza_real\r
  - modelo_no_ideal\r
  result_semantics:\r
    target: F_real\r
    meaning: Resulta util para interpretar F_real en el contexto del leaf.\r
  domain_checks:\r
  - id: carga_no_negativa_real\r
    expr: W >= 0\r
    message:\r
      es: El peso de la carga debe ser no negativo.\r
      en: The load weight must be non-negative.\r
  - id: tramos_validos_real\r
    expr: nSel >= 1\r
    message:\r
      es: El número de tramos portantes debe ser al menos 1.\r
      en: The number of supporting segments must be at least 1.\r
  - id: eficiencia_valida\r
    expr: eta > 0 and eta <= 1\r
    message:\r
      es: La eficiencia debe estar entre 0 y 1.\r
      en: Efficiency must lie between 0 and 1.\r
  coherence_checks:\r
  - id: fuerza_real_no_negativa\r
    expr: F_real >= 0\r
    message:\r
      es: La fuerza real no puede ser negativa en este modelo.\r
      en: The real force cannot be negative in this model.\r
  - id: fuerza_real_mayor_igual_ideal\r
    expr: F_real >= W / nSel if nSel > 0 else True\r
    message:\r
      es: Con eficiencia menor o igual que 1, la fuerza real debe ser al menos la\r
        ideal.\r
      en: With efficiency less than or equal to 1, the real force should be at least\r
        the ideal force.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - id: usar_eta_mayor_que_uno\r
    detect_when: eta > 1\r
    message:\r
      es: Una eficiencia mayor que 1 haría el sistema más que ideal y no es físicamente\r
        aceptable.\r
      en: An efficiency greater than 1 would make the system better than ideal and\r
        is not physically acceptable.\r
  - id: olvidar_perdidas\r
    detect_when: eta == 1\r
    message:\r
      es: Si tomas eta = 1, estás volviendo al modelo ideal sin pérdidas.\r
      en: If you set eta = 1, you are returning to the ideal lossless model.\r
`;export{e as default};
