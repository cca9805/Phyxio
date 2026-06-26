const e=`version: 1\r
formulas:\r
- id: fs_max_modelo\r
  title:\r
    es: Umbral estatico (modelo principal)\r
    en: Static Threshold (Main Model)\r
  equation: fs_max = mu_s*N\r
  latex: f_{s,\\\\max} = \\\\mu_s N\r
  rearrangements:\r
  - target: fs_max\r
    equation: fs_max = mu_s*N\r
    latex: f_{s,\\\\max} = \\\\mu_s N\r
    constraints: []\r
  - target: mu_s\r
    equation: mu_s = fs_max/N\r
    latex: \\\\mu_s = \\\\frac{f_{s,\\\\max}}{N}\r
    constraints:\r
    - expr: N != 0\r
      message:\r
        es: N != 0\r
        en: N != 0\r
  - target: N\r
    equation: N = fs_max/mu_s\r
    latex: N = \\\\frac{f_{s,\\\\max}}{\\\\mu_s}\r
    constraints:\r
    - expr: mu_s != 0\r
      message:\r
        es: mu_s != 0\r
        en: mu_s != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en coeficiente de rozamiento.\r
    en: Relacion fisica usada en coeficiente de rozamiento.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  interpretation_tags:\r
  - coeficiente-de-rozamiento\r
  result_semantics:\r
    target: fs_max\r
    meaning: Resulta util para interpretar fs_max en el contexto del leaf.\r
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
- id: fk_modelo\r
  title:\r
    es: Rozamiento dinamico (modelo principal)\r
    en: Kinetic Friction (Main Model)\r
  equation: fk = mu_k*N\r
  latex: f_k = \\\\mu_k N\r
  rearrangements:\r
  - target: fk\r
    equation: fk = mu_k*N\r
    latex: f_k = \\\\mu_k N\r
    constraints: []\r
  - target: mu_k\r
    equation: mu_k = fk/N\r
    latex: \\\\mu_k = \\\\frac{f_k}{N}\r
    constraints:\r
    - expr: N != 0\r
      message:\r
        es: N != 0\r
        en: N != 0\r
  - target: N\r
    equation: N = fk/mu_k\r
    latex: N = \\\\frac{f_k}{\\\\mu_k}\r
    constraints:\r
    - expr: mu_k != 0\r
      message:\r
        es: mu_k != 0\r
        en: mu_k != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en coeficiente de rozamiento.\r
    en: Relacion fisica usada en coeficiente de rozamiento.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  interpretation_tags:\r
  - coeficiente-de-rozamiento\r
  result_semantics:\r
    target: fk\r
    meaning: Resulta util para interpretar fk en el contexto del leaf.\r
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
- id: mu_s_angulo_critico\r
  title:\r
    es: Metodo del angulo critico (apoyo experimental)\r
    en: Critical-Angle Method (Experimental Support)\r
  equation: mu_s = tan(theta_c)\r
  latex: \\\\mu_s = \\\\tan(\\\\theta_c)\r
  rearrangements:\r
  - target: mu_s\r
    equation: mu_s = tan(theta_c)\r
    latex: \\\\mu_s = \\\\tan(\\\\theta_c)\r
    constraints: []\r
  - target: theta_c\r
    equation: theta_c = arctan(mu_s)\r
    latex: \\\\theta_c = \\\\arctan(\\\\mu_s)\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en coeficiente de rozamiento.\r
    en: Relacion fisica usada en coeficiente de rozamiento.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  interpretation_tags:\r
  - coeficiente-de-rozamiento\r
  result_semantics:\r
    target: mu_s\r
    meaning: Resulta util para interpretar mu_s en el contexto del leaf.\r
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
- id: condicion_estatica\r
  title:\r
    es: Condicion de regimen estatico (validacion)\r
    en: Static-Regime Condition (Validation)\r
  equation: fs <= mu_s*N\r
  latex: f_s \\le \\mu_s N\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en coeficiente de rozamiento.\r
    en: Relacion fisica usada en coeficiente de rozamiento.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Desigualdad de criterio; requiere informacion del estado del sistema.\r
    en: Criterion inequality; it requires information about the state of the system.\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  interpretation_tags:\r
  - coeficiente-de-rozamiento\r
  result_semantics:\r
    target: fs\r
    meaning: Resulta util para interpretar fs en el contexto del leaf.\r
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
- id: comparacion_coeficientes\r
  title:\r
    es: Relacion tipica entre coeficientes (validacion)\r
    en: Typical Relation Between Coefficients (Validation)\r
  equation: mu_k <= mu_s\r
  latex: \\\\mu_k \\\\le \\\\mu_s\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en coeficiente de rozamiento.\r
    en: Relacion fisica usada en coeficiente de rozamiento.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Tendencia empirica habitual, no identidad universal.\r
    en: Common empirical trend, not a universal identity.\r
  used_in:\r
  - coeficiente-de-rozamiento\r
  interpretation_tags:\r
  - coeficiente-de-rozamiento\r
  result_semantics:\r
    target: mu_k\r
    meaning: Resulta util para interpretar mu_k en el contexto del leaf.\r
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
