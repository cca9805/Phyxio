const e=`version: 5
topic:
  id: ecuaciones-de-hamilton
  title: { es: Ecuaciones de hamilton, en: Hamilton's Equations }
variables:
- id: H
  symbol: H
  name: { es: hamiltoniano, en: Hamiltonian }
  si_unit: J
- id: qi
  symbol: q
  name: { es: coordenada generalizada, en: generalized coordinate }
  si_unit: context-dependent
- id: p
  symbol: p
  name: { es: momento conjugado, en: conjugate momentum }
  si_unit: kg*m/s
- id: qd
  symbol: qdot
  name: { es: velocidad hamiltoniana de la coordenada, en: Hamiltonian coordinate velocity }
  si_unit: context-dependent/s
- id: pd
  symbol: pdot
  name: { es: evolucion temporal del momento, en: time evolution of momentum }
  si_unit: N
- id: DHp
  symbol: dH_dp
  name: { es: derivada de H respecto de p, en: derivative of H with respect to p }
  si_unit: context-dependent/s
- id: DHq
  symbol: dH_dq
  name: { es: derivada de H respecto de q, en: derivative of H with respect to q }
  si_unit: N
- id: m
  symbol: m
  name: { es: masa efectiva, en: effective mass }
  si_unit: kg
- id: k
  symbol: k
  name: { es: rigidez, en: stiffness }
  si_unit: N/m
- id: dHdt
  symbol: dH_dt
  name: { es: variacion temporal del hamiltoniano, en: time variation of the Hamiltonian }
  si_unit: W
- id: Ht
  symbol: dH_dt_exp
  name: { es: dependencia temporal explicita de H, en: explicit time dependence of H }
  si_unit: W
formulas:
- id: ecuacion_hamilton_q
  title: { es: Primera ecuacion de Hamilton, en: First Hamilton equation }
  equation: qd = DHp
  latex: \\dot{q}=\\frac{\\partial H}{\\partial p}
  category: fundamental
  relation_type: canonical_equation
  physical_meaning:
    es: La velocidad de la coordenada se obtiene como pendiente del hamiltoniano respecto del momento.
    en: Coordinate velocity is obtained as the slope of the Hamiltonian with respect to momentum.
  constraints: [ H differentiable ]
  validity:
    es: Valida para variables canonicas y hamiltoniano diferenciable.
    en: Valid for canonical variables and a differentiable Hamiltonian.
  dimension_check: "[q/s]=[dJ/dp]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ qdot_oscilador ]
  interpretation_tags: [ hamilton, espacio-de-fases, velocidad ]
  result_semantics: { target: qd, meaning: La pendiente en p gobierna como avanza q. }
  domain_checks:
  - expr: "true"
    message: { es: H debe estar escrito en q y p., en: H must be written in q and p. }
  coherence_checks:
  - expr: "true"
    message: { es: qdot no se calcula derivando H respecto de q., en: qdot is not computed by differentiating H with respect to q. }
  graph_implications: En el grafico, qdot cambia con p y con la curvatura cinetica.
  pedagogical_triggers:
  - when: "true"
    message: { es: Deriva H respecto de p manteniendo q fijo., en: Differentiate H with respect to p while holding q fixed. }
  rearrangements:
  - target: qd
    equation: qd = DHp
    latex: \\dot{q}=\\frac{\\partial H}{\\partial p}
- id: ecuacion_hamilton_p
  title: { es: Segunda ecuacion de Hamilton, en: Second Hamilton equation }
  equation: pd = -DHq
  latex: \\dot{p}=-\\frac{\\partial H}{\\partial q}
  category: fundamental
  relation_type: canonical_equation
  physical_meaning:
    es: La evolucion del momento es menos la pendiente del hamiltoniano respecto de la coordenada.
    en: Momentum evolution is minus the slope of the Hamiltonian with respect to coordinate.
  constraints: [ H differentiable ]
  validity:
    es: Valida para pares canonicos con hamiltoniano diferenciable.
    en: Valid for canonical pairs with a differentiable Hamiltonian.
  dimension_check: "[N]=[J/q]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ pdot_oscilador ]
  interpretation_tags: [ hamilton, fuerza-generalizada, pendiente ]
  result_semantics: { target: pd, meaning: El signo menos convierte pendiente energetica en evolucion del momento. }
  domain_checks:
  - expr: "true"
    message: { es: La coordenada debe ser canonica con p., en: The coordinate must be canonical with p. }
  coherence_checks:
  - expr: "true"
    message: { es: El signo menos es parte estructural de la ecuacion., en: The minus sign is a structural part of the equation. }
  graph_implications: En el grafico, pdot cambia con q y apunta hacia menor energia potencial.
  pedagogical_triggers:
  - when: "true"
    message: { es: Revisa el signo de la segunda ecuacion., en: Check the sign of the second equation. }
  rearrangements:
  - target: pd
    equation: pd = -DHq
    latex: \\dot{p}=-\\frac{\\partial H}{\\partial q}
- id: ecuaciones_hamilton_indexadas
  title: { es: Forma indexada de Hamilton, en: Indexed Hamilton form }
  equation: qd = DHp
  latex: \\dot{q}_i=\\frac{\\partial H}{\\partial p_i},\\qquad \\dot{p}_i=-\\frac{\\partial H}{\\partial q_i}
  category: structural
  relation_type: canonical_equation_system
  physical_meaning:
    es: Expresa el mismo flujo canonico para cada par coordenada-momento de un sistema con varios grados de libertad.
    en: Expresses the same canonical flow for each coordinate-momentum pair in a multi-degree-of-freedom system.
  constraints: [ canonical_coordinates, H differentiable ]
  validity:
    es: Valida cuando cada coordenada q_i tiene su momento canonico p_i y H esta escrito en esas variables.
    en: Valid when each coordinate q_i has its canonical momentum p_i and H is written in those variables.
  dimension_check: "[q_i/s]=[dH/dp_i] y [p_i/s]=[dH/dq_i]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ ecuacion_hamilton_q, ecuacion_hamilton_p ]
  interpretation_tags: [ forma-indexada, pares-canonicos, grados-de-libertad ]
  result_semantics: { target: qd, meaning: Cada grado de libertad aporta un flujo horizontal y uno vertical en fase. }
  domain_checks:
  - expr: "true"
    message: { es: Cada q_i debe emparejarse con su p_i canonico., en: Each q_i must be paired with its canonical p_i. }
  coherence_checks:
  - expr: "true"
    message: { es: El indice no permite mezclar variables no canonicas., en: The index does not allow noncanonical variables to be mixed. }
  graph_implications: En muchos grados de libertad, el campo de fase tiene dos componentes por cada indice i.
  pedagogical_triggers:
  - when: "true"
    message: { es: Lee la forma indexada como una familia de pares canonicos, no como una receta distinta., en: Read the indexed form as a family of canonical pairs, not as a different recipe. }
  rearrangements:
  - target: qd
    equation: qd = DHp
    latex: \\dot{q}_i=\\frac{\\partial H}{\\partial p_i}
  - target: pd
    equation: pd = -DHq
    latex: \\dot{p}_i=-\\frac{\\partial H}{\\partial q_i}
- id: hamiltoniano_oscilador
  title: { es: Hamiltoniano del oscilador cuadratico, en: Quadratic oscillator Hamiltonian }
  equation: H = p^2/(2*m) + 0.5*k*qi^2
  latex: H=\\frac{p^2}{2m}+\\frac{1}{2}k\\cdot q^2
  category: model_expression
  relation_type: energy_form
  physical_meaning:
    es: Modelo regular que separa energia cinetica en p y energia potencial elastica en q.
    en: Regular model separating kinetic energy in p and elastic potential energy in q.
  constraints: [ m > 0, k >= 0 ]
  validity:
    es: Valido para un modo armonico conservativo con masa efectiva y rigidez constantes.
    en: Valid for a conservative harmonic mode with constant effective mass and stiffness.
  dimension_check: "[J]=[p^2/kg]+[N/m][q^2]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ qdot_oscilador, pdot_oscilador ]
  interpretation_tags: [ oscilador, energia, fase ]
  result_semantics: { target: H, meaning: H mide la energia del oscilador en variables canonicas. }
  domain_checks:
  - expr: m > 0
    message: { es: La masa efectiva debe ser positiva., en: Effective mass must be positive. }
  coherence_checks:
  - expr: H >= 0
    message: { es: Con referencia elastica usual, H no debe ser negativa., en: With the usual elastic reference, H should not be negative. }
  graph_implications: Las curvas H constante son elipses en espacio de fases.
  pedagogical_triggers:
  - when: "true"
    message: { es: Usa este caso para leer geometricamente las ecuaciones canonicas., en: Use this case to read canonical equations geometrically. }
  rearrangements:
  - target: H
    equation: H = p^2/(2*m) + 0.5*k*qi^2
    latex: H=\\frac{p^2}{2m}+\\frac{1}{2}k\\cdot q^2
- id: qdot_oscilador
  title: { es: Velocidad canonica del oscilador, en: Canonical velocity of the oscillator }
  equation: qd = p/m
  latex: \\dot{q}=\\frac{p}{m}
  category: derived
  relation_type: derivative_result
  physical_meaning:
    es: En el oscilador cuadratico, la pendiente cinetica convierte momento en velocidad.
    en: In the quadratic oscillator, the kinetic slope converts momentum into velocity.
  constraints: [ m > 0 ]
  validity:
    es: Valida para energia cinetica cuadratica con masa efectiva constante.
    en: Valid for quadratic kinetic energy with constant effective mass.
  dimension_check: "[m/s]=[kg*m/s]/[kg]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ ecuacion_hamilton_q ]
  interpretation_tags: [ velocidad, momento, oscilador ]
  result_semantics: { target: qd, meaning: La coordenada avanza mas rapido cuanto mayor es p y menor es m. }
  domain_checks:
  - expr: m > 0
    message: { es: No se puede dividir por masa efectiva nula., en: One cannot divide by zero effective mass. }
  coherence_checks:
  - expr: "true"
    message: { es: El signo de qdot sigue el signo de p., en: The sign of qdot follows the sign of p. }
  graph_implications: qdot es horizontal frente a q si p se fija como parametro.
  pedagogical_triggers:
  - when: "true"
    message: { es: "Distingue p de qdot: coinciden solo tras dividir por m.", en: "Distinguish p from qdot: they match only after dividing by m." }
  rearrangements:
  - target: qd
    equation: qd = p/m
    latex: \\dot{q}=\\frac{p}{m}
- id: pdot_oscilador
  title: { es: Evolucion del momento del oscilador, en: Momentum evolution of the oscillator }
  equation: pd = -k*qi
  latex: \\dot{p}=-k\\cdot q
  category: derived
  relation_type: derivative_result
  physical_meaning:
    es: La pendiente elastica empuja el momento hacia el equilibrio.
    en: The elastic slope drives momentum back toward equilibrium.
  constraints: [ k >= 0 ]
  validity:
    es: Valida en el regimen elastico lineal.
    en: Valid in the linear elastic regime.
  dimension_check: "[N]=[N/m][m]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ ecuacion_hamilton_p ]
  interpretation_tags: [ fuerza-restauradora, momento, oscilador ]
  result_semantics: { target: pd, meaning: El signo menos expresa la tendencia restauradora. }
  domain_checks:
  - expr: k >= 0
    message: { es: La rigidez estable no debe ser negativa., en: Stable stiffness must not be negative. }
  coherence_checks:
  - expr: "true"
    message: { es: Si q es positiva, pdot debe apuntar en sentido negativo., en: If q is positive, pdot must point in the negative direction. }
  graph_implications: pdot es una recta descendente frente a q.
  pedagogical_triggers:
  - when: "true"
    message: { es: El signo de pdot codifica la fuerza restauradora., en: The sign of pdot encodes the restoring force. }
  rearrangements:
  - target: pd
    equation: pd = -k*qi
    latex: \\dot{p}=-k\\cdot q
- id: conservacion_hamiltoniano
  title: { es: Cambio temporal del hamiltoniano, en: Time change of the Hamiltonian }
  equation: dHdt = Ht
  latex: \\frac{dH}{dt}=\\frac{\\partial H}{\\partial t}
  category: structural
  relation_type: conservation_condition
  physical_meaning:
    es: Si H no depende explicitamente del tiempo, el hamiltoniano se conserva a lo largo de la evolucion.
    en: If H has no explicit time dependence, the Hamiltonian is conserved along the evolution.
  constraints: [ canonical_evolution ]
  validity:
    es: Valida para evolucion hamiltoniana canonica.
    en: Valid for canonical Hamiltonian evolution.
  dimension_check: "[W]=[W]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ hamiltoniano_oscilador ]
  interpretation_tags: [ conservacion, tiempo, energia ]
  result_semantics: { target: dHdt, meaning: La conservacion depende de la dependencia temporal explicita de H. }
  domain_checks:
  - expr: "true"
    message: { es: Comprueba si H contiene tiempo de forma explicita., en: Check whether H contains time explicitly. }
  coherence_checks:
  - expr: "true"
    message: { es: H constante no significa necesariamente q o p constantes., en: Constant H does not imply constant q or p. }
  graph_implications: Con H constante, el movimiento sigue curvas de nivel.
  pedagogical_triggers:
  - when: "true"
    message: { es: Distingue conservacion de H de reposo del sistema., en: Distinguish conservation of H from rest of the system. }
  rearrangements:
  - target: dHdt
    equation: dHdt = Ht
    latex: \\frac{dH}{dt}=\\frac{\\partial H}{\\partial t}
`;export{e as default};
