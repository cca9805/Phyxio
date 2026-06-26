const e=`version: 5\r
magnitudes:\r
- id: Ue\r
  symbol: U_e\r
  nombre:\r
    es: energia potencial elastica\r
    en: elastic potential energy\r
  descripcion:\r
    es: Energia almacenada por la deformacion de un resorte o elemento elastico ideal.\r
    en: Energy stored by the deformation of an ideal spring or elastic element.\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: state_energy\r
  used_in: [ formulas, theory, examples, interpretation, graph ]\r
  common_mistake:\r
    es: Confundir energia almacenada con rigidez del resorte.\r
    en: Confusing stored energy with spring stiffness.\r
  typical_range:\r
    es: Desde fracciones de julio hasta cientos de julios en problemas introductorios.\r
    en: From fractions of a joule to hundreds of joules in introductory problems.\r
  sign_behavior:\r
    es: Puede tomarse no negativa si la referencia es la longitud natural.\r
    en: It may be taken as non-negative when the natural length is the reference.\r
  zero_behavior:\r
    es: Ue = 0 en la longitud natural del elemento elastico ideal.\r
    en: Ue = 0 at the natural length of the ideal elastic element.\r
  value_nature: derived\r
  interpretation_role: target\r
  graph_binding: Coord_y\r
  pedagogical_notes:\r
    es: Leerla como energia de estado, no como propiedad del material aislada.\r
    en: Read it as a state energy, not as an isolated material property.\r
- id: k\r
  symbol: k\r
  nombre:\r
    es: constante elastica\r
    en: spring constant\r
  descripcion:\r
    es: Rigidez lineal que conecta fuerza y deformacion en la ley de Hooke.\r
    en: Linear stiffness that links force and deformation in Hooke's law.\r
  unidad_si: N/m\r
  dimension: M T^-2\r
  is_vector: false\r
  components: []\r
  category: parameter\r
  physical_role: model_parameter\r
  used_in: [ formulas, theory, examples, interpretation, graph ]\r
  common_mistake:\r
    es: Tratar k como energia en lugar de parametro de rigidez.\r
    en: Treating k as energy instead of a stiffness parameter.\r
  typical_range:\r
    es: Depende del resorte; a menudo entre decenas y miles de N/m.\r
    en: Depends on the spring; often between tens and thousands of N/m.\r
  sign_behavior:\r
    es: En el modelo ideal se toma positiva.\r
    en: In the ideal model it is taken as positive.\r
  zero_behavior:\r
    es: k = 0 elimina la capacidad elastica del modelo.\r
    en: k = 0 removes the elastic capacity of the model.\r
  value_nature: positive_scalar\r
  interpretation_role: input\r
  graph_binding: parameter\r
  pedagogical_notes:\r
    es: A mayor k, mayor energia almacenada para la misma deformacion.\r
    en: Larger k means more energy stored for the same deformation.\r
- id: x\r
  symbol: x\r
  nombre:\r
    es: deformacion\r
    en: deformation\r
  descripcion:\r
    es: Extension o compresion medida respecto de la longitud natural.\r
    en: Extension or compression measured from the natural length.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: base_or_parameter\r
  physical_role: state_variable\r
  used_in: [ formulas, theory, examples, interpretation, graph ]\r
  common_mistake:\r
    es: Medir x desde una posicion arbitraria en vez de desde la longitud natural.\r
    en: Measuring x from an arbitrary position instead of the natural length.\r
  typical_range:\r
    es: Positiva por convencion de modulo de deformacion.\r
    en: Positive by convention when treated as a deformation magnitude.\r
  sign_behavior:\r
    es: Si se usa con signo, la energia depende de x^2 y no cambia entre compresion y extension.\r
    en: If signed, energy depends on x^2 and does not change between compression and extension.\r
  zero_behavior:\r
    es: x = 0 corresponde al estado natural.\r
    en: x = 0 corresponds to the natural state.\r
  value_nature: scalar\r
  interpretation_role: input\r
  graph_binding: Coord_x\r
  pedagogical_notes:\r
    es: El cuadrado de x explica por que compresion y extension almacenan energia de forma similar.\r
    en: The square of x explains why compression and extension store energy in a similar way.\r
- id: xi\r
  symbol: x_i\r
  nombre:\r
    es: deformacion inicial\r
    en: initial deformation\r
  descripcion:\r
    es: Deformacion del resorte en el estado inicial del problema.\r
    en: Spring deformation in the initial state of the problem.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: boundary_condition\r
  physical_role: initial_state\r
  used_in: [ formulas, examples, interpretation ]\r
  common_mistake:\r
    es: Confundir x_i con el desplazamiento geometrico total.\r
    en: Confusing x_i with the total geometric displacement.\r
  typical_range:\r
    es: Depende del estado inicial elegido.\r
    en: Depends on the chosen initial state.\r
  sign_behavior:\r
    es: Su signo no afecta por si solo a la energia; lo hace x_i^2.\r
    en: Its sign alone does not affect energy; x_i^2 does.\r
  zero_behavior:\r
    es: x_i = 0 indica inicio en longitud natural.\r
    en: x_i = 0 indicates the start at the natural length.\r
  value_nature: scalar\r
  interpretation_role: input\r
  graph_binding: boundary\r
  pedagogical_notes:\r
    es: Declarar siempre la referencia inicial antes de comparar estados.\r
    en: Always declare the initial reference before comparing states.\r
- id: xf\r
  symbol: x_f\r
  nombre:\r
    es: deformacion final\r
    en: final deformation\r
  descripcion:\r
    es: Deformacion del resorte en el estado final del problema.\r
    en: Spring deformation in the final state of the problem.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: boundary_condition\r
  physical_role: final_state\r
  used_in: [ formulas, examples, interpretation ]\r
  common_mistake:\r
    es: Tratar x_f como si fuera una variable independiente del mismo estado.\r
    en: Treating x_f as if it were an independent variable of the same state.\r
  typical_range:\r
    es: Depende del estado final elegido.\r
    en: Depends on the chosen final state.\r
  sign_behavior:\r
    es: La energia depende de x_f^2.\r
    en: Energy depends on x_f^2.\r
  zero_behavior:\r
    es: x_f = 0 indica estado final en longitud natural.\r
    en: x_f = 0 indicates the final state at the natural length.\r
  value_nature: scalar\r
  interpretation_role: input\r
  graph_binding: boundary\r
  pedagogical_notes:\r
    es: Puede diferir de x_i incluso si la energia final resulta mayor o menor.\r
    en: It may differ from x_i even if the final energy is larger or smaller.\r
- id: dUe\r
  symbol: \\Delta U_e\r
  nombre:\r
    es: variacion de energia potencial elastica\r
    en: change in elastic potential energy\r
  descripcion:\r
    es: Cambio de energia elastica entre dos estados del mismo sistema.\r
    en: Change in elastic energy between two states of the same system.\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: []\r
  category: difference\r
  physical_role: energy_change\r
  used_in: [ formulas, theory, examples, interpretation ]\r
  common_mistake:\r
    es: Interpretar dUe como energia absoluta en vez de diferencia de estados.\r
    en: Interpreting dUe as an absolute energy instead of a state difference.\r
  typical_range:\r
    es: Puede ser positiva o negativa segun aumente o disminuya la deformacion.\r
    en: It may be positive or negative depending on whether deformation increases or decreases.\r
  sign_behavior:\r
    es: Signo firmado segun el cambio entre x_f y x_i.\r
    en: Signed according to the change between x_f and x_i.\r
  zero_behavior:\r
    es: dUe = 0 si no cambia la deformacion entre estados.\r
    en: dUe = 0 if deformation does not change between states.\r
  value_nature: signed_scalar\r
  interpretation_role: input\r
  graph_binding: delta\r
  pedagogical_notes:\r
    es: Sirve para comparar dos configuraciones y enlazar energia con trabajo.\r
    en: Useful for comparing two configurations and linking energy with work.\r
- id: We\r
  symbol: W_e\r
  nombre:\r
    es: trabajo de la fuerza elastica\r
    en: work done by the elastic force\r
  descripcion:\r
    es: Trabajo realizado por la fuerza del resorte durante el cambio de deformacion.\r
    en: Work done by the spring force during the deformation change.\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: []\r
  category: transfer\r
  physical_role: work_transfer\r
  used_in: [ formulas, theory, examples, interpretation ]\r
  common_mistake:\r
    es: Darle signo positivo por defecto aunque el resorte recupere energia.\r
    en: Assigning a positive sign by default even when the spring is releasing energy.\r
  typical_range:\r
    es: Del mismo orden que Ue en el intervalo estudiado.\r
    en: Same order of magnitude as Ue over the studied interval.\r
  sign_behavior:\r
    es: En el modelo ideal We = -dUe.\r
    en: In the ideal model We = -dUe.\r
  zero_behavior:\r
    es: We = 0 si no hay cambio de deformacion.\r
    en: We = 0 if there is no deformation change.\r
  value_nature: signed_scalar\r
  interpretation_role: target\r
  graph_binding: work\r
  pedagogical_notes:\r
    es: El signo debe concordar con si el resorte entrega o recibe energia.\r
    en: The sign must match whether the spring delivers or receives energy.\r
`;export{e as default};
