const e=`version: 1\r
formulas:\r
- id: condicion_estatica\r
  title:\r
    es: Condicion de ajuste estatico\r
    en: Static adjustment condition\r
  equation: fs <= fsmax\r
  latex: f_s\\le f_{s,max}\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en rozamiento estatico.\r
    en: Relacion fisica usada en rozamiento estatico.\r
  constraints:\r
    es: Contacto en regimen estatico antes del deslizamiento.\r
    en: Contact in the static regime before sliding begins.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Criterio de regimen; requiere contexto dinamico para fijar el valor de fs.\r
    en: Regime criterion; it requires the dynamical context to determine the actual\r
      value of fs.\r
  used_in:\r
  - rozamiento-estatico\r
  interpretation_tags:\r
  - rozamiento-estatico\r
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
- id: umbral_estatico\r
  title:\r
    es: Umbral maximo del rozamiento estatico\r
    en: Maximum static-friction threshold\r
  equation: fsmax = mus*N\r
  latex: f_{s,max}=\\mu_s N\r
  rearrangements:\r
  - target: fsmax\r
    equation: fsmax = mus*N\r
    latex: f_{s,max}=\\mu_s N\r
    constraints: []\r
  - target: mus\r
    equation: mus = fsmax/N\r
    latex: \\mu_s=\\frac{f_{s,max}}{N}\r
    constraints:\r
    - expr: N != 0\r
      message:\r
        es: N != 0\r
        en: N != 0\r
  - target: N\r
    equation: N = fsmax/mus\r
    latex: N=\\frac{f_{s,max}}{\\mu_s}\r
    constraints:\r
    - expr: mus != 0\r
      message:\r
        es: mus != 0\r
        en: mus != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en rozamiento estatico.\r
    en: Relacion fisica usada en rozamiento estatico.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - rozamiento-estatico\r
  interpretation_tags:\r
  - rozamiento-estatico\r
  result_semantics:\r
    target: fsmax\r
    meaning: Resulta util para interpretar fsmax en el contexto del leaf.\r
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
- id: criterio_deslizamiento\r
  title:\r
    es: Criterio de inicio de deslizamiento\r
    en: Criterion for the onset of sliding\r
  equation: Ft > fsmax\r
  latex: F_t>f_{s,max}\\Rightarrow\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en rozamiento estatico.\r
    en: Relacion fisica usada en rozamiento estatico.\r
  constraints:\r
    es: Transicion del regimen estatico al dinamico.\r
    en: Transition from the static regime to the kinetic regime.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Regla de decision de regimen, no ecuacion de sustitucion directa universal.\r
    en: Regime-decision rule, not a universal direct-substitution equation.\r
  used_in:\r
  - rozamiento-estatico\r
  interpretation_tags:\r
  - rozamiento-estatico\r
  result_semantics:\r
    target: Ft\r
    meaning: Resulta util para interpretar Ft en el contexto del leaf.\r
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
