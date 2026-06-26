const e=`version: 1\r
formulas:\r
- id: tension_equilibrio_vertical\r
  title:\r
    es: Equilibrio vertical simple\r
    en: Simple vertical equilibrium\r
  equation: T = m*g\r
  latex: T = m g\r
  rearrangements:\r
  - target: T\r
    equation: T = m*g\r
    latex: T = m g\r
    constraints: []\r
  - target: m\r
    equation: m = T/g\r
    latex: m = \\frac{T}{g}\r
    constraints:\r
    - expr: g != 0\r
      message:\r
        es: g != 0\r
        en: g != 0\r
  - target: g\r
    equation: g = T/m\r
    latex: g = \\frac{T}{m}\r
    constraints:\r
    - expr: m != 0\r
      message:\r
        es: m != 0\r
        en: m != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en tension en cuerdas y cables.\r
    en: Relacion fisica usada en tension en cuerdas y cables.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  interpretation_tags:\r
  - tension-en-cuerdas-y-cables\r
  result_semantics:\r
    target: T\r
    meaning: Resulta util para interpretar T en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: tension_vertical_acelerada\r
  title:\r
    es: Movimiento vertical acelerado\r
    en: Vertically accelerated motion\r
  equation: T = m*(g + a)\r
  latex: T = m (g + a)\r
  rearrangements:\r
  - target: T\r
    equation: T = m*(g + a)\r
    latex: T = m (g + a)\r
    constraints: []\r
  - target: a\r
    equation: a = T/m - g\r
    latex: a = \\frac{T}{m} - g\r
    constraints:\r
    - expr: m != 0\r
      message:\r
        es: m != 0\r
        en: m != 0\r
  - target: m\r
    equation: m = T/(g + a)\r
    latex: m = \\frac{T}{g + a}\r
    constraints:\r
    - expr: (g + a) != 0\r
      message:\r
        es: (g + a) != 0\r
        en: (g + a) != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en tension en cuerdas y cables.\r
    en: Relacion fisica usada en tension en cuerdas y cables.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  interpretation_tags:\r
  - tension-en-cuerdas-y-cables\r
  result_semantics:\r
    target: T\r
    meaning: Resulta util para interpretar T en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: atwood_aceleracion\r
  title:\r
    es: Aceleracion en Atwood ideal\r
    en: Acceleration in an ideal Atwood machine\r
  equation: a = (m2 - m1)*g/(m1 + m2)\r
  latex: a = \\frac{(m_2 - m_1) g}{m_1 + m_2}\r
  rearrangements:\r
  - target: a\r
    equation: a = (m2 - m1)*g/(m1 + m2)\r
    latex: a = \\frac{(m_2 - m_1) g}{m_1 + m_2}\r
    constraints: []\r
  - target: g\r
    equation: g = a*(m1 + m2)/(m2 - m1)\r
    latex: g = \\frac{a (m_1 + m_2)}{m_2 - m_1}\r
    constraints:\r
    - expr: (m2 - m1) != 0\r
      message:\r
        es: (m2 - m1) != 0\r
        en: (m2 - m1) != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en tension en cuerdas y cables.\r
    en: Relacion fisica usada en tension en cuerdas y cables.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  interpretation_tags:\r
  - tension-en-cuerdas-y-cables\r
  result_semantics:\r
    target: a\r
    meaning: Resulta util para interpretar a en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: atwood_tension\r
  title:\r
    es: Tension en Atwood ideal\r
    en: Tension in an ideal Atwood machine\r
  equation: T = 2*m1*m2*g/(m1 + m2)\r
  latex: T = \\frac{2 m_1 m_2}{m_1 + m_2} g\r
  rearrangements:\r
  - target: T\r
    equation: T = 2*m1*m2*g/(m1 + m2)\r
    latex: T = \\frac{2 m_1 m_2}{m_1 + m_2} g\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en tension en cuerdas y cables.\r
    en: Relacion fisica usada en tension en cuerdas y cables.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  interpretation_tags:\r
  - tension-en-cuerdas-y-cables\r
  result_semantics:\r
    target: T\r
    meaning: Resulta util para interpretar T en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: componentes_tension_x\r
  title:\r
    es: Componente horizontal de tension\r
    en: Horizontal component of tension\r
  equation: Tx = T*cos(theta)\r
  latex: T_x = T \\cos\\theta\r
  rearrangements:\r
  - target: Tx\r
    equation: Tx = T*cos(theta)\r
    latex: T_x = T \\cos\\theta\r
    constraints: []\r
  - target: T\r
    equation: T = Tx/cos(theta)\r
    latex: T = \\frac{T_x}{\\cos\\theta}\r
    constraints:\r
    - expr: cos(theta) != 0\r
      message:\r
        es: cos(theta) != 0\r
        en: cos(theta) != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en tension en cuerdas y cables.\r
    en: Relacion fisica usada en tension en cuerdas y cables.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  interpretation_tags:\r
  - tension-en-cuerdas-y-cables\r
  result_semantics:\r
    target: Tx\r
    meaning: Resulta util para interpretar Tx en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: componentes_tension_y\r
  title:\r
    es: Componente vertical de tension\r
    en: Vertical component of tension\r
  equation: Ty = T*sin(theta)\r
  latex: T_y = T \\sin\\theta\r
  rearrangements:\r
  - target: Ty\r
    equation: Ty = T*sin(theta)\r
    latex: T_y = T \\sin\\theta\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en tension en cuerdas y cables.\r
    en: Relacion fisica usada en tension en cuerdas y cables.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  interpretation_tags:\r
  - tension-en-cuerdas-y-cables\r
  result_semantics:\r
    target: Ty\r
    meaning: Resulta util para interpretar Ty en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: gradiente_tension_cable_masivo\r
  title:\r
    es: Gradiente de tension en cable con masa\r
    en: Tension gradient in a massive cable\r
  equation: dT_dy = lambda*g\r
  latex: \\frac{dT}{dy} = \\lambda g\r
  rearrangements:\r
  - target: dT_dy\r
    equation: dT_dy = lambda*g\r
    latex: \\frac{dT}{dy} = \\lambda g\r
    constraints: []\r
  - target: lambda\r
    equation: lambda = dT_dy/g\r
    latex: \\lambda = \\frac{1}{g}\\frac{dT}{dy}\r
    constraints:\r
    - expr: g != 0\r
      message:\r
        es: g != 0\r
        en: g != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en tension en cuerdas y cables.\r
    en: Relacion fisica usada en tension en cuerdas y cables.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  interpretation_tags:\r
  - tension-en-cuerdas-y-cables\r
  result_semantics:\r
    target: dT_dy\r
    meaning: Resulta util para interpretar dT_dy en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: tension_uniforme_cuerda_ideal\r
  title:\r
    es: Uniformidad de tension en cuerda ideal\r
    en: Uniform tension in an ideal rope\r
  equation: T_1 = T_2\r
  latex: T_1 = T_2\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en tension en cuerdas y cables.\r
    en: Relacion fisica usada en tension en cuerdas y cables.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Criterio de modelo, no una ecuacion de resolucion numerica directa.\r
    en: Model criterion, not a direct numerical solving equation.\r
  used_in:\r
  - tension-en-cuerdas-y-cables\r
  interpretation_tags:\r
  - tension-en-cuerdas-y-cables\r
  result_semantics:\r
    target: T\r
    meaning: Resulta util para interpretar T en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
`;export{e as default};
