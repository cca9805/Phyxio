const e=`version: 5
topic:
  id: principio-de-dalembert-y-trabajo-virtual
  title:
    es: Principio de D'Alembert y trabajo virtual
    en: D'Alembert's principle and virtual work
variables:
- id: F
  symbol: F_i
  name: { es: fuerza aplicada, en: applied force }
  si_unit: N
- id: m
  symbol: m_i
  name: { es: masa, en: mass }
  si_unit: kg
- id: a
  symbol: a_i
  name: { es: aceleracion, en: acceleration }
  si_unit: m/s^2
- id: Feff
  symbol: F_i^{eff}
  name: { es: fuerza efectiva, en: effective force }
  si_unit: N
- id: dr
  symbol: \\delta r_i
  name: { es: desplazamiento virtual, en: virtual displacement }
  si_unit: m
- id: Wv
  symbol: \\delta W
  name: { es: trabajo virtual, en: virtual work }
  si_unit: J
- id: Qj
  symbol: Q_j
  name: { es: fuerza generalizada, en: generalized force }
  si_unit: context-dependent
- id: qi
  symbol: q_j
  name: { es: coordenada generalizada, en: generalized coordinate }
  si_unit: context-dependent
- id: Ri
  symbol: R_j
  name: { es: residuo lagrangiano, en: Lagrangian residual }
  si_unit: context-dependent
formulas:
- id: fuerza_efectiva_dalembert
  title: { es: Fuerza efectiva de D'Alembert, en: D'Alembert effective force }
  equation: Feff = F - m*a
  latex: \\vec F_i^{\\,eff}=\\vec F_i-m_i\\vec a_i
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Reescribe la dinamica como equilibrio entre fuerza aplicada y termino inercial.
    en: Rewrites dynamics as equilibrium between applied force and inertial term.
  constraints: [ m > 0 ]
  validity:
    es: Valida para masas constantes en mecanica clasica.
    en: Valid for constant masses in classical mechanics.
  dimension_check: "[N]=[N]-[kg*m/s^2]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ trabajo_virtual_dinamico ]
  interpretation_tags: [ dalembert, inercia, equilibrio-dinamico ]
  result_semantics: { target: Feff, meaning: El resultado no es una fuerza nueva, sino el balance dinamico reorganizado. }
  domain_checks:
  - expr: m > 0
    message: { es: La masa debe ser positiva., en: Mass must be positive. }
  coherence_checks:
  - expr: "true"
    message: { es: F y a deben referirse al mismo elemento i., en: F and a must refer to the same element i. }
  graph_implications: Una fuerza efectiva nula indica balance dinamico en la direccion ensayada.
  pedagogical_triggers:
  - when: "true"
    message: { es: Aclara que el termino inercial se resta para formar equilibrio dinamico., en: Clarify that the inertial term is subtracted to form dynamic equilibrium. }
  rearrangements:
  - target: Feff
    equation: Feff = F - m*a
    latex: \\vec F_i^{\\,eff}=\\vec F_i-m_i\\vec a_i
- id: trabajo_virtual_dinamico
  title: { es: Principio de D'Alembert en trabajo virtual, en: D'Alembert principle in virtual work }
  equation: Wv = sum((F - m*a)*dr) = 0
  latex: \\delta W=\\sum_i(\\vec F_i-m_i\\vec a_i)\\cdot\\delta \\vec r_i=0
  category: fundamental
  relation_type: variational_balance
  physical_meaning:
    es: El trabajo virtual total de fuerzas efectivas se anula para desplazamientos compatibles con ligaduras ideales.
    en: The total virtual work of effective forces vanishes for displacements compatible with ideal constraints.
  constraints: [ ligaduras_ideales, desplazamientos_virtuales_compatibles ]
  validity:
    es: Valida para ligaduras ideales que no realizan trabajo virtual neto.
    en: Valid for ideal constraints that perform no net virtual work.
  dimension_check: "[J]=[N]*[m]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ fuerza_generalizada_desde_trabajo_virtual ]
  interpretation_tags: [ trabajo-virtual, ligaduras, equilibrio-dinamico ]
  result_semantics: { target: Wv, meaning: Cero indica equilibrio dinamico virtual para todas las variaciones compatibles. }
  domain_checks:
  - expr: "true"
    message: { es: dr debe ser compatible con las ligaduras., en: dr must be compatible with the constraints. }
  coherence_checks:
  - expr: "true"
    message: { es: Las reacciones ideales no deben aportar trabajo virtual neto., en: Ideal reactions must contribute no net virtual work. }
  graph_implications: En una lectura de variaciones, solo las direcciones compatibles entran en el balance.
  pedagogical_triggers:
  - when: "true"
    message: { es: Diferencia trabajo virtual de trabajo real a lo largo de una trayectoria., en: Distinguish virtual work from real work along a path. }
  rearrangements:
  - target: Wv
    equation: Wv = 0
    latex: \\delta W=0
- id: fuerza_generalizada_desde_trabajo_virtual
  title: { es: Fuerza generalizada desde trabajo virtual, en: Generalized force from virtual work }
  equation: Qj = sum(F*dr_dqj)
  latex: Q_j=\\sum_i \\vec F_i\\cdot\\frac{\\partial \\vec r_i}{\\partial q_j}
  category: fundamental
  relation_type: projection
  physical_meaning:
    es: Proyecta fuerzas activas sobre la coordenada generalizada mediante el trabajo virtual.
    en: Projects active forces onto the generalized coordinate through virtual work.
  constraints: []
  validity:
    es: Valida cuando las posiciones dependen suavemente de la coordenada generalizada.
    en: Valid when positions depend smoothly on the generalized coordinate.
  dimension_check: depende de la unidad de q_j
  calculable: true
  motivo_no_calculable: null
  used_in: [ lagrange_dalembert ]
  interpretation_tags: [ fuerza-generalizada, coordenada-generalizada, proyeccion ]
  result_semantics: { target: Qj, meaning: El resultado mide el aporte dinamico activo en la coordenada q_j. }
  domain_checks:
  - expr: "true"
    message: { es: La derivada geometrica debe respetar las ligaduras., en: The geometric derivative must respect the constraints. }
  coherence_checks:
  - expr: "true"
    message: { es: Qj no tiene por que medirse en newtons si q_j no es longitud., en: Qj need not be measured in newtons if q_j is not a length. }
  graph_implications: La proyeccion cambia si cambia la geometria de la coordenada.
  pedagogical_triggers:
  - when: "true"
    message: { es: Lee Qj como coeficiente de trabajo virtual, no como fuerza cartesiana directa., en: Read Qj as a virtual-work coefficient, not as a direct Cartesian force. }
  rearrangements:
  - target: Qj
    equation: Qj = sum(F*dr_dqj)
    latex: Q_j=\\sum_i \\vec F_i\\cdot\\frac{\\partial \\vec r_i}{\\partial q_j}
- id: lagrange_dalembert
  title: { es: Forma de Lagrange-D'Alembert, en: Lagrange-D'Alembert form }
  equation: Ri = Qj
  latex: R_j=Q_j
  category: fundamental
  relation_type: equation_of_motion
  physical_meaning:
    es: Conecta el residuo lagrangiano con la fuerza generalizada obtenida por trabajo virtual.
    en: Connects the Lagrangian residual with the generalized force obtained from virtual work.
  constraints: []
  validity:
    es: Valida para fuerzas no potenciales representables mediante fuerzas generalizadas.
    en: Valid for non-potential forces representable through generalized forces.
  dimension_check: Ri y Qj comparten dimension generalizada
  calculable: true
  motivo_no_calculable: null
  used_in: [ ecuaciones_lagrange_forzadas ]
  interpretation_tags: [ lagrange-dalembert, fuerza-generalizada, residuo ]
  result_semantics: { target: Ri, meaning: El residuo dinamico queda equilibrado por el aporte generalizado externo. }
  domain_checks:
  - expr: "true"
    message: { es: Qj debe representar fuerzas compatibles con la coordenada elegida., en: Qj must represent forces compatible with the chosen coordinate. }
  coherence_checks:
  - expr: "true"
    message: { es: Si Qj es cero, se recupera el caso conservativo ideal., en: If Qj is zero, the ideal conservative case is recovered. }
  graph_implications: La fuerza generalizada desplaza la condicion de residuo nulo.
  pedagogical_triggers:
  - when: "true"
    message: { es: Usa esta forma para explicar como entran fuerzas no potenciales sin volver a ejes cartesianos., en: Use this form to explain how non-potential forces enter without returning to Cartesian axes. }
  rearrangements:
  - target: Ri
    equation: Ri = Qj
    latex: R_j=Q_j
`;export{e as default};
