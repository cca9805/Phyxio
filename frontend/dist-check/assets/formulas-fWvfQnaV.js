const e=`version: 1\r
formulas:\r
- id: normal_horizontal_base\r
  title:\r
    es: Normal en plano horizontal base\r
    en: Normal force on a horizontal plane\r
  equation: N = m*g\r
  latex: N=mg\r
  rearrangements:\r
  - target: N\r
    equation: N = m*g\r
    latex: N=mg\r
    constraints: []\r
  - target: m\r
    equation: m = N/g\r
    latex: m=\\frac{N}{g}\r
    constraints:\r
    - expr: g != 0\r
      message:\r
        es: g != 0\r
        en: g != 0\r
  - target: g\r
    equation: g = N/m\r
    latex: g=\\frac{N}{m}\r
    constraints:\r
    - expr: m != 0\r
      message:\r
        es: m != 0\r
        en: m != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en normal en planos.\r
    en: Relacion fisica usada en normal en planos.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - normal-en-planos\r
  interpretation_tags:\r
  - normal-en-planos\r
  result_semantics:\r
    target: N\r
    meaning: Resulta util para interpretar N en el contexto del leaf.\r
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
- id: normal_inclinado_base\r
  title:\r
    es: Normal en plano inclinado sin aceleracion perpendicular\r
    en: Normal force on an inclined plane with no perpendicular acceleration\r
  equation: N = m*g*cos(theta)\r
  latex: N=mg\\cos\\theta\r
  rearrangements:\r
  - target: N\r
    equation: N = m*g*cos(theta)\r
    latex: N=mg\\cos\\theta\r
    constraints: []\r
  - target: m\r
    equation: m = N/(g*cos(theta))\r
    latex: m=\\frac{N}{g\\cos\\theta}\r
    constraints:\r
    - expr: g != 0\r
      message:\r
        es: g != 0\r
        en: g != 0\r
    - expr: cos(theta) != 0\r
      message:\r
        es: cos(theta) != 0\r
        en: cos(theta) != 0\r
  - target: g
    equation: g = N/(m*cos(theta))
    latex: g=\\frac{N}{m\\cos\\theta}
    constraints:
    - expr: m != 0
      message:\r
        es: m != 0\r
        en: m != 0\r
    - expr: cos(theta) != 0\r
      message:\r
        es: cos(theta) != 0\r
        en: cos(theta) != 0\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en normal en planos.\r
    en: Relacion fisica usada en normal en planos.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - normal-en-planos\r
  interpretation_tags:\r
  - normal-en-planos\r
  result_semantics:\r
    target: N\r
    meaning: Resulta util para interpretar N en el contexto del leaf.\r
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
- id: balance_perpendicular_general
  title:
    es: Balance general perpendicular al plano
    en: General balance perpendicular to the plane
  equation: N + Fextn - m*g*cos(theta) = m*aperp
  latex: N + F_{ext,\\perp} - mg\\cos\\theta = m a_{\\perp}
  rearrangements:
  - target: N
    equation: N = m*aperp + m*g*cos(theta) - Fextn
    latex: N = m a_{\\perp} + mg\\cos\\theta - F_{ext,\\perp}
    constraints: []
  - target: Fextn
    equation: Fextn = N + m*aperp - m*g*cos(theta)
    latex: F_{ext,\\perp} = N + m a_{\\perp} - mg\\cos\\theta
    constraints: []
  - target: aperp
    equation: aperp = (N + Fextn - m*g*cos(theta))/m
    latex: a_{\\perp} = \\frac{N + F_{ext,\\perp} - mg\\cos\\theta}{m}
    constraints:
    - expr: m != 0
      message:
        es: m != 0
        en: m != 0
  - target: g
    equation: g = (N + Fextn - m*aperp)/(m*cos(theta))
    latex: g = \\frac{N + F_{ext,\\perp} - m a_{\\perp}}{m\\cos\\theta}
    constraints:
    - expr: m != 0
      message:
        es: m != 0
        en: m != 0
    - expr: cos(theta) != 0
      message:
        es: cos(theta) != 0
        en: cos(theta) != 0
  - target: theta
    equation: theta = arccos(N/(m*g))
    latex: \\theta=\\arccos\\left(\\frac{N}{mg}\\right)
    constraints:
    - expr: m != 0
      message:
        es: m != 0
        en: m != 0
    - expr: g != 0
      message:
        es: g != 0
        en: g != 0
    - expr: abs(N/(m*g)) <= 1
      message:
        es: "|N/(m*g)| <= 1"
        en: "|N/(m*g)| <= 1"
  category: operative
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en normal en planos.\r
    en: Relacion fisica usada en normal en planos.\r
  constraints:\r
    es: Modelo clasico con ejes adaptados al plano y contacto activo.\r
    en: Classical model with axes adapted to the plane and an active contact constraint.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Requiere definir fuerzas externas y dinamica concreta del contacto.\r
    en: Requires the specific external forces and the actual perpendicular dynamics\r
      of the contact.\r
  used_in:\r
  - normal-en-planos\r
  interpretation_tags:\r
  - normal-en-planos\r
  result_semantics:\r
    target: N\r
    meaning: Resulta util para interpretar N en el contexto del leaf.\r
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
- id: condicion_contacto
  title:
    es: Condicion de contacto unilateral
    en: Unilateral contact condition\r
  equation: N >= 0\r
  latex: N\\ge 0\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en normal en planos.\r
    en: Relacion fisica usada en normal en planos.\r
  constraints:\r
    es: Aplicable a contacto unilateral sin adhesion.\r
    en: Applies to unilateral contact without adhesion.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Criterio de validez fisica del modelo de contacto; si falla, se pierde contacto.\r
    en: Physical validity criterion for the contact model; if it fails, the body loses\r
      contact with the surface.\r
  used_in:\r
  - normal-en-planos\r
  interpretation_tags:\r
  - normal-en-planos\r
  result_semantics:\r
    target: N\r
    meaning: Resulta util para interpretar N en el contexto del leaf.\r
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
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Comprueba signos, unidades y significado del resultado.
      en: Check signs, units, and meaning of the result.
- id: gravedad_desde_normal_horizontal
  title:
    es: Gravedad local desde la normal horizontal
    en: Local gravity from horizontal-plane normal force
  equation: g = N/m
  latex: g=\\frac{N}{m}
  rearrangements:
  - target: g
    equation: g = N/m
    latex: g=\\frac{N}{m}
    constraints:
    - expr: m != 0
      message:
        es: m != 0
        en: m != 0
  category: operative
  relation_type: derived_relation
  physical_meaning:
    es: Permite interpretar g a partir de la normal en el caso horizontal base.
    en: Allows g to be interpreted from the normal force in the basic horizontal case.
  constraints:
    es: Solo aplicable a plano horizontal sin aceleracion vertical.
    en: Only applies to a horizontal plane with no vertical acceleration.
  validity:
    es: Valida cuando el apoyo es horizontal y la normal coincide con el peso.
    en: Valid when the support is horizontal and the normal force matches weight.
  dimension_check: Comprobar unidades antes de interpretar.
  calculable: true
  motivo_no_calculable: null
  used_in:
  - normal-en-planos
  interpretation_tags:
  - normal-en-planos
  result_semantics:
    target: g
    meaning: Resulta util para interpretar g en el contexto del leaf.
  domain_checks:
  - expr: m != 0
    message:
      es: m != 0
      en: m != 0
  coherence_checks:
  - expr: 'true'
    message:
      es: Revisa que el resultado tenga sentido fisico.
      en: Check that the result makes physical sense.
  graph_implications:
  - La grafica debe reflejar cambios coherentes con la formula.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Comprueba si el problema pertenece realmente al caso horizontal base.
      en: Check whether the problem really belongs to the basic horizontal case.
`;export{e as default};
