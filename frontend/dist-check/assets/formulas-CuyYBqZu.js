const e=`version: 1\r
formulas:\r
- id: velocidad_terminal_lineal\r
  title:\r
    es: Velocidad terminal con arrastre lineal\r
    en: Terminal velocity with linear drag\r
  equation: v_t = m*g/b\r
  latex: v_t = \\frac{m g}{b}\r
  rearrangements:\r
  - target: v_t\r
    equation: v_t = m*g/b\r
    latex: v_t = \\frac{m g}{b}\r
    constraints:\r
    - expr: b != 0\r
      message:\r
        es: b != 0\r
        en: b != 0\r
  - target: b\r
    equation: b = m*g/v_t\r
    latex: b = \\frac{m g}{v_t}\r
    constraints:\r
    - expr: v_t != 0\r
      message:\r
        es: v_t != 0\r
        en: v_t != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en velocidad terminal.\r
    en: Relacion fisica usada en velocidad terminal.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - velocidad-terminal\r
  interpretation_tags:\r
  - velocidad-terminal\r
  result_semantics:\r
    target: v_t\r
    meaning: Resulta util para interpretar v_t en el contexto del leaf.\r
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
      en: Check signs, units, && meaning of the result.\r
- id: velocidad_terminal_cuadratica\r
  title:\r
    es: Velocidad terminal con arrastre cuadratico\r
    en: Terminal velocity with quadratic drag\r
  equation: v_t = sqrt(2*m*g/(rho*C_d*A))\r
  latex: v_t = \\sqrt{\\frac{2 m g}{\\rho C_d A}}\r
  rearrangements:\r
  - target: v_t\r
    equation: v_t = sqrt(2*m*g/(rho*C_d*A))\r
    latex: v_t = \\sqrt{\\frac{2 m g}{\\rho C_d A}}\r
    constraints:\r
    - expr: rho > 0 && C_d > 0 && A > 0\r
      message:\r
        es: rho > 0 && C_d > 0 && A > 0\r
        en: rho > 0 && C_d > 0 && A > 0\r
  - target: C_d\r
    equation: C_d = 2*m*g/(rho*A*v_t^2)\r
    latex: C_d = \\frac{2 m g}{\\rho A v_t^2}\r
    constraints:\r
    - expr: rho > 0 && A > 0 && v_t != 0\r
      message:\r
        es: rho > 0 && A > 0 && v_t != 0\r
        en: rho > 0 && A > 0 && v_t != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en velocidad terminal.\r
    en: Relacion fisica usada en velocidad terminal.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - velocidad-terminal\r
  interpretation_tags:\r
  - velocidad-terminal\r
  result_semantics:\r
    target: v_t\r
    meaning: Resulta util para interpretar v_t en el contexto del leaf.\r
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
      en: Check signs, units, && meaning of the result.\r
`;export{e as default};
