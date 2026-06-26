const a=`version: 5
topic:
  id: principio-variacional-y-accion
  title:
    es: Principio variacional y accion
    en: Variational principle and action
variables:
- id: S
  symbol: S
  name: { es: accion, en: action }
  si_unit: J*s
- id: L
  symbol: L
  name: { es: lagrangiano, en: Lagrangian }
  si_unit: J
- id: t1
  symbol: t_1
  name: { es: tiempo inicial, en: initial time }
  si_unit: s
- id: t2
  symbol: t_2
  name: { es: tiempo final, en: final time }
  si_unit: s
- id: deltaS
  symbol: \\delta S
  name: { es: primera variacion de la accion, en: first variation of action }
  si_unit: J*s
- id: qi
  symbol: q_i
  name: { es: coordenada generalizada, en: generalized coordinate }
  si_unit: context-dependent
- id: qdi
  symbol: \\dot{q}_i
  name: { es: velocidad generalizada, en: generalized velocity }
  si_unit: context-dependent/s
- id: Ri
  symbol: R_i
  name: { es: residuo variacional, en: variational residual }
  si_unit: context-dependent
formulas:
- id: accion_lagrangiana
  title: { es: Accion lagrangiana, en: Lagrangian action }
  equation: S = integral(L,t1,t2)
  latex: S=\\int_{t_1}^{t_2} L(q_i,\\dot{q}_i,t)\\,dt
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Define la accion como acumulacion temporal del lagrangiano sobre una trayectoria completa.
    en: Defines action as the time accumulation of the Lagrangian over a complete path.
  constraints: [ t2 > t1 ]
  validity:
    es: Valida para trayectorias suaves y lagrangiano definido en el intervalo temporal.
    en: Valid for smooth paths and a Lagrangian defined on the time interval.
  dimension_check: "[J*s]=[J]*[s]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ condicion_accion_estacionaria ]
  interpretation_tags: [ accion, lagrangiano, trayectoria ]
  result_semantics: { target: S, meaning: La accion asigna un numero a cada trayectoria candidata, no solo a un estado instantaneo. }
  domain_checks:
  - expr: t2 > t1
    message: { es: El intervalo temporal debe estar ordenado., en: The time interval must be ordered. }
  coherence_checks:
  - expr: "true"
    message: { es: L debe evaluarse sobre la misma trayectoria qi(t) que se compara., en: L must be evaluated on the same path qi(t) being compared. }
  graph_implications: Una familia de trayectorias tendria valores de S; la fisica aparece donde S es estacionaria.
  pedagogical_triggers:
  - when: "true"
    message: { es: Explica que S compara caminos completos, no energias instantaneas., en: Explain that S compares full paths, not instantaneous energies. }
  rearrangements:
  - target: S
    equation: S = integral(L,t1,t2)
    latex: S=\\int_{t_1}^{t_2} L\\,dt
- id: condicion_accion_estacionaria
  title: { es: Condicion de accion estacionaria, en: Stationary-action condition }
  equation: deltaS = 0
  latex: \\delta S=0
  category: fundamental
  relation_type: variational_condition
  physical_meaning:
    es: La trayectoria fisica anula la primera variacion de la accion frente a variaciones admisibles.
    en: The physical path cancels the first variation of the action under admissible variations.
  constraints: [ extremos_fijos ]
  validity:
    es: Valida con variaciones suaves que respetan los extremos fijados y las ligaduras admitidas.
    en: Valid with smooth variations respecting fixed endpoints and admitted constraints.
  dimension_check: "[J*s]=0 como condicion de estacionariedad"
  calculable: true
  motivo_no_calculable: null
  used_in: [ residuo_variacional_euler_lagrange ]
  interpretation_tags: [ estacionariedad, variacion, hamilton ]
  result_semantics: { target: deltaS, meaning: Cero indica estacionariedad de primer orden, no necesariamente minimo absoluto. }
  domain_checks:
  - expr: "true"
    message: { es: Las variaciones deben ser compatibles con los extremos y las ligaduras., en: Variations must be compatible with endpoints and constraints. }
  coherence_checks:
  - expr: "true"
    message: { es: Accion estacionaria no significa accion minima en todos los casos., en: Stationary action does not always mean minimum action. }
  graph_implications: En una representacion de S frente a una familia de caminos, la pendiente local se anula.
  pedagogical_triggers:
  - when: "true"
    message: { es: Sustituye la frase minimo de accion por accion estacionaria., en: Replace least action language with stationary action. }
  rearrangements:
  - target: deltaS
    equation: deltaS = 0
    latex: \\delta S=0
- id: residuo_variacional_euler_lagrange
  title: { es: Residuo variacional local, en: Local variational residual }
  equation: Ri = 0
  latex: R_i=\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_i}\\right)-\\frac{\\partial L}{\\partial q_i}
  category: fundamental
  relation_type: operator
  physical_meaning:
    es: Convierte la estacionariedad global de la accion en una condicion local sobre cada coordenada.
    en: Turns global stationarity of action into a local condition on each coordinate.
  constraints: []
  validity:
    es: Valida para coordenadas diferenciables y lagrangiano suficientemente regular.
    en: Valid for differentiable coordinates and a sufficiently regular Lagrangian.
  dimension_check: coincide con la fuerza generalizada asociada
  calculable: true
  motivo_no_calculable: null
  used_in: [ ecuacion_euler_lagrange_desde_accion ]
  interpretation_tags: [ euler-lagrange, residuo, coordenada-generalizada ]
  result_semantics: { target: Ri, meaning: El residuo mide si la trayectoria candidata satisface la condicion local de estacionariedad. }
  domain_checks:
  - expr: "true"
    message: { es: Revisa que qi y qdi describan la misma trayectoria., en: Check that qi and qdi describe the same path. }
  coherence_checks:
  - expr: "true"
    message: { es: Sobre la trayectoria fisica conservativa, Ri debe anularse., en: On the conservative physical path, Ri must vanish. }
  graph_implications: Un residuo no nulo marca desviacion local respecto de la trayectoria dinamica.
  pedagogical_triggers:
  - when: "true"
    message: { es: Lee Ri como condicion local derivada de una comparacion global de caminos., en: Read Ri as a local condition derived from a global comparison of paths. }
  rearrangements:
  - target: Ri
    equation: Ri = 0
    latex: R_i=\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_i}\\right)-\\frac{\\partial L}{\\partial q_i}
- id: ecuacion_euler_lagrange_desde_accion
  title: { es: Euler-Lagrange desde accion estacionaria, en: Euler-Lagrange from stationary action }
  equation: Ri = 0
  latex: \\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_i}\\right)-\\frac{\\partial L}{\\partial q_i}=0
  category: fundamental
  relation_type: equation_of_motion
  physical_meaning:
    es: Expresa que la trayectoria fisica conservativa hace estacionaria la accion para cada coordenada independiente.
    en: States that the conservative physical path makes the action stationary for each independent coordinate.
  constraints: [ fuerzas_conservativas_o_incluidas_en_L ]
  validity:
    es: Valida si las fuerzas relevantes estan incluidas en L y las variaciones son admisibles.
    en: Valid if the relevant forces are included in L and the variations are admissible.
  dimension_check: ambos lados tienen dimension de fuerza generalizada
  calculable: true
  motivo_no_calculable: null
  used_in: [ derivacion_de_movimiento ]
  interpretation_tags: [ trayectoria-fisica, accion-estacionaria, euler-lagrange ]
  result_semantics: { target: Ri, meaning: El resultado identifica la trayectoria compatible con el principio variacional. }
  domain_checks:
  - expr: "true"
    message: { es: No impongas cero si queda una fuerza no potencial externa sin modelar., en: Do not impose zero if an external non-potential force remains unmodeled. }
  coherence_checks:
  - expr: "true"
    message: { es: Debe recuperar la ecuacion de movimiento conocida en casos simples., en: It must recover the known equation of motion in simple cases. }
  graph_implications: Los estados fisicos se leen donde el residuo variacional se anula.
  pedagogical_triggers:
  - when: "true"
    message: { es: Conecta esta ecuacion con deltaS igual a cero antes de usarla como receta., en: Connect this equation with deltaS equal to zero before using it as a recipe. }
  rearrangements:
  - target: Ri
    equation: Ri = 0
    latex: R_i=0
`;export{a as default};
