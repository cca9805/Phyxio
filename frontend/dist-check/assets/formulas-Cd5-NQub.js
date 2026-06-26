const e=`version: 1\r
formulas:\r
- id: hooke_1d\r
  title:\r
    es: Ley de Hooke en 1D\r
    en: Hooke's Law in 1D\r
  equation: Fel = -k*x\r
  latex: Fel = -k x\r
  rearrangements:\r
  - target: Fel\r
    equation: Fel = -k*x\r
    latex: Fel = -k x\r
    constraints: []\r
  - target: k\r
    equation: k = -Fel/x\r
    latex: k = -\\frac{Fel}{x}\r
    constraints:\r
    - expr: x != 0\r
      message:\r
        es: x != 0\r
        en: x != 0\r
  - target: x\r
    equation: x = -Fel/k\r
    latex: x = -\\frac{Fel}{k}\r
    constraints:\r
    - expr: k != 0\r
      message:\r
        es: k != 0\r
        en: k != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en ley de hooke.\r
    en: Relacion fisica usada en ley de hooke.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - ley-de-hooke\r
  interpretation_tags:\r
  - ley-de-hooke\r
  result_semantics:\r
    target: Fel\r
    meaning: Resulta util para interpretar Fel en el contexto del leaf.\r
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
- id: hooke_modulo\r
  title:\r
    es: Modulo de la fuerza elastica\r
    en: Magnitude of the Elastic Force\r
  equation: Fm = k*x\r
  latex: '|Fel| = k |x|'\r
  rearrangements:\r
  - target: Fm\r
    equation: Fm = k*x\r
    latex: '|Fel| = k |x|'\r
    constraints: []\r
  - target: k\r
    equation: k = Fm/x\r
    latex: k = \\frac{|Fel|}{|x|}\r
    constraints:\r
    - expr: x != 0\r
      message:\r
        es: x != 0\r
        en: x != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en ley de hooke.\r
    en: Relacion fisica usada en ley de hooke.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - ley-de-hooke\r
  interpretation_tags:\r
  - ley-de-hooke\r
  result_semantics:\r
    target: Fm\r
    meaning: Resulta util para interpretar Fm en el contexto del leaf.\r
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
- id: equilibrio_vertical_muelle\r
  title:\r
    es: Equilibrio vertical masa-muelle\r
    en: Vertical Mass-Spring Equilibrium\r
  equation: x_eq = m*g/k\r
  latex: x_eq = \\frac{m g}{k}\r
  rearrangements:\r
  - target: x_eq\r
    equation: x_eq = m*g/k\r
    latex: x_eq = \\frac{m g}{k}\r
    constraints:\r
    - expr: k != 0\r
      message:\r
        es: k != 0\r
        en: k != 0\r
  - target: k\r
    equation: k = m*g/x_eq\r
    latex: k = \\frac{m g}{x_eq}\r
    constraints:\r
    - expr: x_eq != 0\r
      message:\r
        es: x_eq != 0\r
        en: x_eq != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en ley de hooke.\r
    en: Relacion fisica usada en ley de hooke.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - ley-de-hooke\r
  interpretation_tags:\r
  - ley-de-hooke\r
  result_semantics:\r
    target: x_eq\r
    meaning: Resulta util para interpretar x_eq en el contexto del leaf.\r
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
- id: energia_potencial_elastica\r
  title:\r
    es: Energia potencial elastica\r
    en: Elastic Potential Energy\r
  equation: Uel = 0.5*k*x^2\r
  latex: Uel = \\frac{1}{2}k x^2\r
  rearrangements:\r
  - target: Uel\r
    equation: Uel = 0.5*k*x^2\r
    latex: Uel = \\frac{1}{2}k x^2\r
    constraints: []\r
  - target: k\r
    equation: k = 2*Uel/(x^2)\r
    latex: k = \\frac{2Uel}{x^2}\r
    constraints:\r
    - expr: x != 0\r
      message:\r
        es: x != 0\r
        en: x != 0\r
  - target: x\r
    equation: x = sqrt(2*Uel/k)\r
    latex: x = \\sqrt{\\frac{2Uel}{k}}\r
    constraints:\r
    - expr: k > 0\r
      message:\r
        es: k > 0\r
        en: k > 0\r
    - expr: Uel >= 0\r
      message:\r
        es: Uel >= 0\r
        en: Uel >= 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en ley de hooke.\r
    en: Relacion fisica usada en ley de hooke.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - ley-de-hooke\r
  interpretation_tags:\r
  - ley-de-hooke\r
  result_semantics:\r
    target: Uel\r
    meaning: Resulta util para interpretar Uel en el contexto del leaf.\r
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
- id: criterio_restaurador\r
  title:\r
    es: Criterio de restauracion\r
    en: Restoring-Force Criterion\r
  equation: Fel*x <= 0\r
  latex: Fel\\,x \\le 0\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en ley de hooke.\r
    en: Relacion fisica usada en ley de hooke.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Criterio cualitativo de direccion restauradora segun el signo de x.\r
    en: Qualitative criterion for restoring direction according to the sign of x.\r
  used_in:\r
  - ley-de-hooke\r
  interpretation_tags:\r
  - ley-de-hooke\r
  result_semantics:\r
    target: Fel\r
    meaning: Resulta util para interpretar Fel en el contexto del leaf.\r
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
