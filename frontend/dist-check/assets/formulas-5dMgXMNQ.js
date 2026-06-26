const e=`version: 5
topic:
  id: transformacion-legendre
  title: { es: Transformacion legendre, en: Legendre Transformation }
variables:
- id: L
  symbol: L
  name: { es: lagrangiano, en: Lagrangian }
  si_unit: J
- id: H
  symbol: H
  name: { es: hamiltoniano, en: Hamiltonian }
  si_unit: J
- id: qi
  symbol: q
  name: { es: coordenada generalizada, en: generalized coordinate }
  si_unit: context-dependent
- id: qdi
  symbol: qdot
  name: { es: velocidad generalizada, en: generalized velocity }
  si_unit: context-dependent
- id: p
  symbol: p
  name: { es: momento conjugado, en: conjugate momentum }
  si_unit: kg*m/s
- id: DLv
  symbol: dL_dqdot
  name: { es: derivada de L respecto de la velocidad, en: derivative of L with respect to velocity }
  si_unit: kg*m/s
- id: m
  symbol: m
  name: { es: masa efectiva, en: effective mass }
  si_unit: kg
- id: V
  symbol: V
  name: { es: energia potencial, en: potential energy }
  si_unit: J
- id: W
  symbol: W
  name: { es: hessiano de velocidades, en: velocity Hessian }
  si_unit: kg
formulas:
- id: lagrangiano_cuadratico
  title: { es: Lagrangiano cuadratico, en: Quadratic Lagrangian }
  equation: L = 0.5*m*qdi^2 - V
  latex: L=\\frac{1}{2}m\\dot{q}^{2}-V
  category: model_expression
  relation_type: definition
  physical_meaning:
    es: Fija el caso regular donde la energia cinetica es cuadratica y el potencial no depende de la velocidad.
    en: Sets the regular case where kinetic energy is quadratic and the potential does not depend on velocity.
  constraints: [ m > 0 ]
  validity:
    es: Valido para una coordenada con masa efectiva constante y potencial conservativo.
    en: Valid for one coordinate with constant effective mass and conservative potential.
  dimension_check: "[J]=[kg][qdot^2]-[J]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ momento_conjugado_legendre, hamiltoniano_legendre ]
  interpretation_tags: [ lagrangiano, energia, regularidad ]
  result_semantics: { target: L, meaning: El lagrangiano combina parte cinetica y potencial con signo relativo. }
  domain_checks:
  - expr: m > 0
    message: { es: La masa efectiva debe ser positiva., en: Effective mass must be positive. }
  coherence_checks:
  - expr: "true"
    message: { es: El signo de L puede variar sin incoherencia fisica., en: The sign of L may vary without physical inconsistency. }
  graph_implications: Aumentar qdi eleva la contribucion cinetica que alimenta la pendiente p.
  pedagogical_triggers:
  - when: "true"
    message: { es: Comprueba que V no contiene dependencia en qdi antes de usar el caso simple., en: Check that V has no qdi dependence before using the simple case. }
  rearrangements:
  - target: L
    equation: L = 0.5*m*qdi^2 - V
    latex: L=\\frac{1}{2}m\\dot{q}^{2}-V
- id: momento_conjugado_legendre
  title: { es: Momento conjugado, en: Conjugate momentum }
  equation: p = DLv
  latex: p=\\frac{\\partial L}{\\partial \\dot{q}}
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Define el momento conjugado como pendiente de L respecto de la velocidad generalizada.
    en: Defines conjugate momentum as the slope of L with respect to generalized velocity.
  constraints: [ L differentiable ]
  validity:
    es: Valido si el lagrangiano es diferenciable respecto de la velocidad considerada.
    en: Valid if the Lagrangian is differentiable with respect to the considered velocity.
  dimension_check: "[kg*m/s]=[dJ/d(m/s)]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ hamiltoniano_legendre ]
  interpretation_tags: [ momento-conjugado, pendiente, legendre ]
  result_semantics: { target: p, meaning: p es la variable conjugada que sustituye a la velocidad. }
  domain_checks:
  - expr: "true"
    message: { es: La derivada debe hacerse manteniendo fija la coordenada., en: The derivative must be taken while holding the coordinate fixed. }
  coherence_checks:
  - expr: "true"
    message: { es: El momento conjugado no tiene por que ser momento lineal cartesiano., en: Conjugate momentum need not be Cartesian linear momentum. }
  graph_implications: En el grafico, p es la curva de pendiente frente a qdi.
  pedagogical_triggers:
  - when: "true"
    message: { es: Deriva respecto de qdi, no respecto de qi., en: Differentiate with respect to qdi, not qi. }
  rearrangements:
  - target: p
    equation: p = DLv
    latex: p=\\frac{\\partial L}{\\partial \\dot{q}}
- id: momento_cuadratico
  title: { es: Momento cuadratico, en: Quadratic momentum }
  equation: p = m*qdi
  latex: p=m\\dot{q}
  category: model_expression
  relation_type: proportionality
  physical_meaning:
    es: En el caso cuadratico, el momento conjugado crece linealmente con la velocidad.
    en: In the quadratic case, conjugate momentum grows linearly with velocity.
  constraints: [ m > 0 ]
  validity:
    es: Valido con masa efectiva constante y energia cinetica cuadratica.
    en: Valid with constant effective mass and quadratic kinetic energy.
  dimension_check: "[kg*m/s]=[kg][m/s]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ velocidad_desde_momento, hamiltoniano_cuadratico ]
  interpretation_tags: [ caso-cuadratico, invertibilidad ]
  result_semantics: { target: p, meaning: La pendiente es monotona si m es positiva. }
  domain_checks:
  - expr: m > 0
    message: { es: m positiva garantiza inversion directa., en: Positive m guarantees direct inversion. }
  coherence_checks:
  - expr: "true"
    message: { es: El signo de p sigue el signo de qdi., en: The sign of p follows the sign of qdi. }
  graph_implications: La pendiente de p frente a qdi es m.
  pedagogical_triggers:
  - when: "true"
    message: { es: No uses esta forma si la energia cinetica no es cuadratica., en: Do not use this form if kinetic energy is not quadratic. }
  rearrangements:
  - target: p
    equation: p = m*qdi
    latex: p=m\\dot{q}
- id: velocidad_desde_momento
  title: { es: Velocidad desde momento, en: Velocity from momentum }
  equation: qdi = p/m
  latex: \\dot{q}=\\frac{p}{m}
  category: rearrangement
  relation_type: inversion
  physical_meaning:
    es: Expresa la inversion necesaria para eliminar velocidades del hamiltoniano.
    en: Expresses the inversion needed to remove velocities from the Hamiltonian.
  constraints: [ m != 0 ]
  validity:
    es: Valida en el caso cuadratico regular con masa efectiva no nula.
    en: Valid in the regular quadratic case with nonzero effective mass.
  dimension_check: "[m/s]=[kg*m/s]/[kg]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ hamiltoniano_legendre, hamiltoniano_cuadratico ]
  interpretation_tags: [ inversion, espacio-de-fases ]
  result_semantics: { target: qdi, meaning: La velocidad se reconstruye desde p si el mapa es regular. }
  domain_checks:
  - expr: m > 0
    message: { es: No puede dividirse por una masa efectiva nula., en: One cannot divide by zero effective mass. }
  coherence_checks:
  - expr: "true"
    message: { es: La velocidad recuperada debe pertenecer a la misma coordenada q., en: The recovered velocity must belong to the same coordinate q. }
  graph_implications: Para m fija, aumentar p aumenta qdi linealmente.
  pedagogical_triggers:
  - when: "true"
    message: { es: Esta inversion es el control clave de regularidad., en: This inversion is the key regularity check. }
  rearrangements:
  - target: qdi
    equation: qdi = p/m
    latex: \\dot{q}=\\frac{p}{m}
- id: hamiltoniano_legendre
  title: { es: Hamiltoniano por transformada de Legendre, en: Hamiltonian by Legendre transform }
  equation: H = p*qdi - L
  latex: H=p\\dot{q}-L
  category: fundamental
  relation_type: transformation
  physical_meaning:
    es: Construye la funcion hamiltoniana que cambia velocidades por momentos conjugados.
    en: Builds the Hamiltonian function that replaces velocities with conjugate momenta.
  constraints: [ velocity-momentum map invertible ]
  validity:
    es: Valida si qdi puede expresarse como funcion de p.
    en: Valid if qdi can be expressed as a function of p.
  dimension_check: "[J]=[kg*m/s][m/s]-[J]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ hamiltoniano_cuadratico ]
  interpretation_tags: [ hamiltoniano, legendre, espacio-de-fases ]
  result_semantics: { target: H, meaning: H organiza la dinamica en variables de fase. }
  domain_checks:
  - expr: "true"
    message: { es: Sustituye qdi antes de considerar cerrada la funcion H., en: Substitute qdi before considering H closed. }
  coherence_checks:
  - expr: "true"
    message: { es: H debe depender de q y p, no de velocidades libres., en: H must depend on q and p, not on free velocities. }
  graph_implications: La curva de H muestra como cambia la funcion de fase al variar qdi o p.
  pedagogical_triggers:
  - when: "true"
    message: { es: Revisa si H puede interpretarse como energia en tu modelo., en: Check whether H can be interpreted as energy in your model. }
  rearrangements:
  - target: H
    equation: H = p*qdi - L
    latex: H=p\\dot{q}-L
- id: hamiltoniano_cuadratico
  title: { es: Hamiltoniano cuadratico, en: Quadratic Hamiltonian }
  equation: H = p^2/(2*m) + V
  latex: H=\\frac{p^{2}}{2m}+V
  category: model_expression
  relation_type: energy_form
  physical_meaning:
    es: En el caso conservativo regular, H toma la forma de energia cinetica en p mas potencial.
    en: In the regular conservative case, H takes the form of kinetic energy in p plus potential.
  constraints: [ m > 0 ]
  validity:
    es: Valido para energia cinetica cuadratica y potencial independiente de la velocidad.
    en: Valid for quadratic kinetic energy and velocity-independent potential.
  dimension_check: "[J]=[kg^2*m^2/s^2]/[kg]+[J]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ transformacion-legendre ]
  interpretation_tags: [ energia, hamiltoniano, caso-regular ]
  result_semantics: { target: H, meaning: H coincide con energia mecanica bajo hipotesis conservativas simples. }
  domain_checks:
  - expr: m > 0
    message: { es: La masa efectiva debe ser positiva., en: Effective mass must be positive. }
  coherence_checks:
  - expr: "true"
    message: { es: V debe compartir la misma referencia fisica que el lagrangiano inicial., en: V must share the same physical reference as the initial Lagrangian. }
  graph_implications: H crece cuadraticamente con p para V fija.
  pedagogical_triggers:
  - when: "true"
    message: { es: No confundas esta forma particular con la definicion general de H., en: Do not confuse this particular form with the general definition of H. }
  rearrangements:
  - target: H
    equation: H = p^2/(2*m) + V
    latex: H=\\frac{p^{2}}{2m}+V
- id: condicion_regularidad_legendre
  title: { es: Condicion de regularidad de Legendre, en: Legendre regularity condition }
  equation: W != 0
  latex: \\left|\\frac{\\partial^2 L}{\\partial \\dot{q}_i\\partial \\dot{q}_j}\\right|\\neq 0
  category: structural
  relation_type: regularity_condition
  physical_meaning:
    es: Exige que el mapa entre velocidades generalizadas y momentos conjugados sea invertible.
    en: Requires the map between generalized velocities and conjugate momenta to be invertible.
  constraints: [ L twice differentiable, Hessian nonsingular ]
  validity:
    es: Valida como criterio local para poder pasar de L a H sin perder informacion dinamica.
    en: Valid as a local criterion for moving from L to H without losing dynamical information.
  dimension_check: "[kg]!=0 en el caso mecanico cuadratico simple"
  calculable: true
  motivo_no_calculable: null
  used_in: [ hamiltoniano_legendre, hamiltoniano_cuadratico ]
  interpretation_tags: [ regularidad, hessiano, invertibilidad ]
  result_semantics: { target: W, meaning: Un Hessiano no singular permite reconstruir velocidades desde momentos. }
  domain_checks:
  - expr: W != 0
    message: { es: Si el Hessiano se anula, la transformacion ordinaria no es regular., en: If the Hessian vanishes, the ordinary transformation is not regular. }
  coherence_checks:
  - expr: "true"
    message: { es: La condicion debe evaluarse respecto de velocidades, no de coordenadas., en: The condition must be evaluated with respect to velocities, not coordinates. }
  graph_implications: Un Hessiano no singular mantiene pendiente diferenciable entre qdot y p.
  pedagogical_triggers:
  - when: "true"
    message: { es: Antes de escribir H(q,p), comprueba que el mapa velocidad-momento no colapsa estados distintos., en: Before writing H(q,p), check that the velocity-momentum map does not collapse distinct states. }
  rearrangements:
  - target: W
    equation: W != 0
    latex: \\left|\\frac{\\partial^2 L}{\\partial \\dot{q}_i\\partial \\dot{q}_j}\\right|\\neq 0
`;export{e as default};
