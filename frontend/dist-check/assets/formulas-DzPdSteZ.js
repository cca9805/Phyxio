const e=`version: 1\r
formulas:\r
- id: arrastre_cuadratico_estandar\r
  title:\r
    es: Fuerza de arrastre con coeficiente de arrastre\r
    en: Drag force using drag coefficient\r
  equation: F_d = 0.5*rho*C_d*A*v^2\r
  latex: F_d = \\frac{1}{2} \\rho C_d A v^2\r
  rearrangements:\r
  - target: F_d\r
    equation: F_d = 0.5*rho*C_d*A*v^2\r
    latex: F_d = \\frac{1}{2} \\rho C_d A v^2\r
    constraints:\r
    - expr: rho >= 0 && C_d >= 0 && A >= 0\r
      message:\r
        es: rho >= 0 && C_d >= 0 && A >= 0\r
        en: rho >= 0 && C_d >= 0 && A >= 0\r
  - target: C_d\r
    equation: C_d = 2*F_d/(rho*A*v^2)\r
    latex: C_d = \\frac{2 F_d}{\\rho A v^2}\r
    constraints:\r
    - expr: rho > 0 && A > 0 && v != 0\r
      message:\r
        es: rho > 0 && A > 0 && v != 0\r
        en: rho > 0 && A > 0 && v != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en coeficiente de arrastre.\r
    en: Relacion fisica usada en coeficiente de arrastre.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - coeficiente-de-arrastre\r
  interpretation_tags:\r
  - coeficiente-de-arrastre\r
  result_semantics:\r
    target: F_d\r
    meaning: Resulta util para interpretar F_d en el contexto del leaf.\r
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
- id: potencia_de_arrastre\r
  title:\r
    es: Potencia necesaria para vencer el arrastre\r
    en: Power needed to overcome drag\r
  equation: P_d = F_d*v\r
  latex: P_d = F_d v\r
  rearrangements:\r
  - target: P_d\r
    equation: P_d = F_d*v\r
    latex: P_d = F_d v\r
    constraints: []\r
  - target: F_d\r
    equation: F_d = P_d/v\r
    latex: F_d = \\frac{P_d}{v}\r
    constraints:\r
    - expr: v != 0\r
      message:\r
        es: v != 0\r
        en: v != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en coeficiente de arrastre.\r
    en: Relacion fisica usada en coeficiente de arrastre.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - coeficiente-de-arrastre\r
  interpretation_tags:\r
  - coeficiente-de-arrastre\r
  result_semantics:\r
    target: P_d\r
    meaning: Resulta util para interpretar P_d en el contexto del leaf.\r
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
