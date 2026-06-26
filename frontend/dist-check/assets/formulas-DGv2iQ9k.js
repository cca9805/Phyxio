const e=`version: 1\r
formulas:\r
- id: fk_modelo\r
  title:\r
    es: Modelo de rozamiento dinámico\r
    en: Kinetic-friction model\r
  equation: fk = mu_k*N\r
  latex: f_k = \\mu_k N\r
  rearrangements:\r
  - target: fk\r
    equation: fk = mu_k*N\r
    latex: f_k = \\mu_k N\r
    constraints: []\r
  - target: mu_k\r
    equation: mu_k = fk/N\r
    latex: \\mu_k = \\frac{f_k}{N}\r
    constraints:\r
    - expr: N != 0\r
      message:\r
        es: N != 0\r
        en: N != 0\r
  - target: N\r
    equation: N = fk/mu_k\r
    latex: N = \\frac{f_k}{\\mu_k}\r
    constraints:\r
    - expr: mu_k != 0\r
      message:\r
        es: mu_k != 0\r
        en: mu_k != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en rozamiento dinamico.\r
    en: Relacion fisica usada en rozamiento dinamico.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - rozamiento-dinamico\r
  interpretation_tags:\r
  - rozamiento-dinamico\r
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
- id: direccion_fk\r
  title:\r
    es: Dirección del rozamiento (conceptual)\r
    en: Direction of friction (conceptual)\r
  equation: fk*v_rel <= 0\r
  latex: \\vec f_k \\;\\; \\vec v_{rel}\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en rozamiento dinamico.\r
    en: Relacion fisica usada en rozamiento dinamico.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: 'La dirección depende del sentido del deslizamiento relativo (vector velocidad\r
      relativa).\r
\r
      '\r
    en: 'The direction depends on the direction of the relative sliding, represented\r
      by the relative-velocity vector.\r
\r
      '\r
  used_in:\r
  - rozamiento-dinamico\r
  interpretation_tags:\r
  - rozamiento-dinamico\r
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
`;export{e as default};
