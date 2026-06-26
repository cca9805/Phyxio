const e=`version: 5\r
topic:\r
  id: problemas-con-ligaduras\r
  title:\r
    es: Problemas con ligaduras\r
    en: Problems with Constraints\r
\r
formulas:\r
- id: a_comun\r
  title: { es: Aceleracion comun del sistema acoplado, en: Common acceleration of the coupled system }\r
  equation: a = ((m2 - m1)*g)/(m1 + m2)\r
  latex: a=\\frac{(m_2-m_1)g}{m_1+m_2}\r
  category: dinamica\r
  relation_type: coupled_acceleration\r
  physical_meaning:\r
    es: Determina la respuesta comun impuesta por la ligadura ideal entre las dos masas.\r
    en: Determines the shared response imposed by the ideal constraint between the two masses.\r
  constraints: [ m1 > 0, m2 > 0, g > 0 ]\r
  validity:\r
    es: Valida con cuerda inextensible, polea ideal y ausencia de perdidas dominantes.\r
    en: Valid with inextensible rope, ideal pulley, and no dominant losses.\r
  dimension_check: "[L/T^2] = ([M]-[M])*[L/T^2]/[M]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[m1]], [[m2]] y [[g]].", en: "Requires [[m1]], [[m2]], and [[g]]." }\r
  used_in: [ T ]\r
  interpretation_tags: [ ligadura, desbalance, respuesta_compartida ]\r
  result_semantics:\r
    target: a\r
  domain_checks: [ m1 > 0, m2 > 0, g > 0 ]\r
  coherence_checks: [ abs(a) <= g ]\r
  graph_implications: "En barrido de masas, [[a]] cruza por cero cuando [[m1]] coincide con [[m2]]."\r
  pedagogical_triggers: [ signo_y_convencion, simetria ]\r
  rearrangements:\r
  - target: a\r
    equation: ((m2 - m1)*g)/(m1 + m2)\r
  - target: m2\r
    equation: m1*(g + a)/(g - a)\r
  - target: m1\r
    equation: m2*(g - a)/(g + a)\r
  variables: [ a, m1, m2, g ]\r
\r
- id: T\r
  title: { es: Tension interna de la cuerda ideal, en: Internal tension of the ideal rope }\r
  equation: T = (2*m1*m2*g)/(m1 + m2)\r
  latex: T=\\frac{2m_1m_2g}{m_1+m_2}\r
  category: dinamica\r
  relation_type: internal_coupling_force\r
  physical_meaning:\r
    es: Mide el esfuerzo interno que transmite la ligadura para sostener movimiento compatible.\r
    en: Measures the internal effort transmitted by the constraint to sustain compatible motion.\r
  constraints: [ m1 > 0, m2 > 0, g > 0 ]\r
  validity:\r
    es: Valida para cuerda ideal tensa y polea sin friccion relevante.\r
    en: Valid for a taut ideal rope and a pulley with negligible friction.\r
  dimension_check: "[M*L/T^2] = [M]*[M]*[L/T^2]/[M]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[m1]], [[m2]] y [[g]].", en: "Requires [[m1]], [[m2]], and [[g]]." }\r
  used_in: [ a ]\r
  interpretation_tags: [ fuerza_interna, acoplamiento, coherencia ]\r
  result_semantics:\r
    target: T\r
  domain_checks: [ m1 > 0, m2 > 0, g > 0 ]\r
  coherence_checks: [ T > 0 ]\r
  graph_implications: "[[T]] aumenta con la carga global y refleja acoplamiento entre ramas."\r
  pedagogical_triggers: [ interna_vs_externa, cierre_sistema ]\r
  rearrangements:\r
  - target: T\r
    equation: (2*m1*m2*g)/(m1 + m2)\r
  - target: m2\r
    equation: (T*m1)/(2*m1*g - T)\r
  - target: m1\r
    equation: (T*m2)/(2*m2*g - T)\r
  variables: [ T, m1, m2, g ]\r
\r
ui:\r
  default_formula: a_comun\r
  groups:\r
  - title:\r
      es: Respuesta compartida\r
      en: Shared response\r
    items: [ a_comun ]\r
  - title:\r
      es: Fuerza interna\r
      en: Internal force\r
    items: [ T ]\r
`;export{e as default};
