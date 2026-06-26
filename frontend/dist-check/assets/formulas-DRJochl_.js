const n=`version: 1
formulas:
- id: cons_principle
  title:
    es: Principio de Conservación del Momento Lineal
    en: Principle of Conservation of Linear Momentum
  equation: Pinitial = Pfinal
  latex: \\vec{P}_i = \\vec{P}_f
  rearrangements:
  - target: Pfinal
    equation: Pfinal = Pinitial
    latex: \\vec{P}_f = \\vec{P}_i
    constraints: []
  category: fundamental
  relation_type: balance_law
  physical_meaning:
    es: En ausencia de fuerzas externas netas, el momento lineal total de un sistema permanece constante en el tiempo.
    en: In the absence of net external forces, the total linear momentum of a system remains constant over time.
  constraints:
  - expr: Fext == 0
    message:
      es: Solo es aplicable si la fuerza externa neta es nula o despreciable durante el intervalo.
      en: Only applicable if the net external force is zero or negligible during the interval.
  validity:
    es: Universal en mecánica clásica para sistemas aislados.
    en: Universal in classical mechanics for isolated systems.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - models
  - examples
  - calculator
  interpretation_tags:
  - conservacion
  - balance
  result_semantics:
    target: Pfinal
    meaning: Estado dinámico final del sistema tras la interacción.
  domain_checks: []
  coherence_checks: []
  graph_implications:
  - La línea de momento total en función del tiempo debe ser horizontal (constante).
  pedagogical_triggers: []

- id: recoil_law
  title:
    es: Ley de Retroceso (Explosión desde el reposo)
    en: Recoil Law (Explosion from rest)
  equation: m1*v1f + m2*v2f = 0
  latex: m_1 v_{1f} + m_2 v_{2f} = 0
  rearrangements:
  - target: v1f
    equation: v1f = -m2*v2f/m1
    latex: v_{1f} = -\\frac{m_2 v_{2f}}{m_1}
    constraints:
    - expr: m1 > 0
  - target: v2f
    equation: v2f = -m1*v1f/m2
    latex: v_{2f} = -\\frac{m_1 v_{1f}}{m_2}
    constraints:
    - expr: m2 > 0
  category: derived
  relation_type: conservation_consequence
  physical_meaning:
    es: Describe el movimiento de dos cuerpos que se separan impulsados por una fuerza interna partiendo del reposo. El signo negativo indica direcciones opuestas.
    en: Describes the motion of two bodies separating driven by an internal force starting from rest. The negative sign indicates opposite directions.
  constraints:
  - expr: v1i == 0 && v2i == 0
    message:
      es: Esta forma simplificada asume que el sistema estaba inicialmente en reposo.
      en: This simplified form assumes the system was initially at rest.
  validity:
    es: Típica en disparos de armas, saltos desde botes o desprendimiento de etapas.
    en: Typical in gun shots, jumping from boats, or stage separation.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - examples
  - applications
  interpretation_tags:
  - retroceso
  - explosion
  result_semantics:
    target: v1f
    meaning: Velocidad de retroceso del cuerpo principal.
  domain_checks: []
  coherence_checks:
  - expr: v1f * v2f <= 0
    message:
      es: Por conservación, los cuerpos deben alejarse en sentidos opuestos.
      en: By conservation, the bodies must move away in opposite directions.
  graph_implications: []
  pedagogical_triggers: []

- id: inelastic_collision
  title:
    es: Colisión Perfectamente Inelástica (Acoplamiento)
    en: Perfectly Inelastic Collision (Coupling)
  equation: m1*v1i + m2*v2i = (m1 + m2)*vf
  latex: m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f
  rearrangements:
  - target: vf
    equation: vf = (m1*v1i + m2*v2i)/(m1 + m2)
    latex: v_f = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}
    constraints:
    - expr: m1 + m2 > 0
  category: derived
  relation_type: conservation_consequence
  physical_meaning:
    es: Caso donde dos cuerpos chocan y quedan unidos, moviéndose con una velocidad común vf.
    en: Case where two bodies collide and stick together, moving with a common velocity vf.
  constraints: []
  validity:
    es: Válida para choques donde se maximiza la pérdida de energía cinética pero se conserva el momento.
    en: Valid for collisions where kinetic energy loss is maximized but momentum is conserved.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - examples
  - applications
  interpretation_tags:
  - choque-inelastico
  - acoplamiento
  result_semantics:
    target: vf
    meaning: Velocidad final del conjunto unido.
  domain_checks: []
  coherence_checks: []
  graph_implications: []
  pedagogical_triggers: []

- id: general_1d_balance
  title:
    es: Balance General de Momento 1D (2 cuerpos)
    en: General 1D Momentum Balance (2 bodies)
  equation: m1*v1i + m2*v2i = m1*v1f + m2*v2f
  latex: m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}
  rearrangements:
  - target: v1f
    equation: v1f = (m1*v1i + m2*v2i - m2*v2f)/m1
    latex: v_{1f} = \\frac{m_1 v_{1i} + m_2 v_{2i} - m_2 v_{2f}}{m_1}
    constraints:
    - expr: m1 > 0
  category: fundamental
  relation_type: balance_law
  physical_meaning:
    es: Ecuación maestra para cualquier interacción aislada entre dos masas en una dimensión.
    en: Master equation for any isolated interaction between two masses in one dimension.
  constraints:
  - expr: F_ext == 0
    message:
      es: Esta forma del balance asume sistema aislado (sin impulso externo neto). Si F_ext ≠ 0, usar la fórmula ruptura_conservacion.
      en: This balance form assumes isolated system (no net external impulse). If F_ext ≠ 0, use the ruptura_conservacion formula.
  validity:
    es: Aplicable a choques elásticos, inelásticos o explosiones.
    en: Applicable to elastic, inelastic collisions or explosions.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - models
  - examples
  interpretation_tags:
  - balance
  - colision
  result_semantics:
    target: v1f
    meaning: Velocidad final de una de las partículas tras el proceso.
  domain_checks: []
  coherence_checks: []
  graph_implications: []
  pedagogical_triggers: []

- id: P
  title:
    es: Definición de Momento Lineal
    en: Definition of Linear Momentum
  equation: P = m*v
  latex: \\vec{p} = m \\vec{v}
  rearrangements: []
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Cantidad de movimiento de un cuerpo de masa m y velocidad v.
    en: Quantity of motion of a body with mass m and velocity v.
  constraints: []
  validity:
    es: Definición fundamental en mecánica clásica no relativista.
    en: Fundamental definition in non-relativistic classical mechanics.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - models
  - examples
  interpretation_tags:
  - definicion
  result_semantics:
    target: P
    meaning: Momento lineal de la partícula.
  domain_checks: []
  coherence_checks: []
  graph_implications:
  - Relación lineal entre momento y velocidad para una masa constante.
  pedagogical_triggers: []

- id: DeltaP
  title:
    es: Variación del Momento Lineal
    en: Variation of Linear Momentum
  equation: DeltaP = Pfinal - Pinitial
  latex: \\Delta \\vec{P} = \\vec{P}_f - \\vec{P}_i
  rearrangements:
  - target: Pfinal
    equation: Pfinal = DeltaP + Pinitial
    latex: \\vec{P}_f = \\Delta \\vec{P} + \\vec{P}_i
    constraints: []
  category: fundamental
  relation_type: physical_change
  physical_meaning:
    es: Cambio en la cantidad de movimiento total del sistema durante un intervalo.
    en: Change in the total quantity of motion of the system during an interval.
  constraints: []
  validity:
    es: Aplicable a cualquier sistema donde se definan estados inicial y final.
    en: Applicable to any system where initial and final states are defined.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - models
  - examples
  interpretation_tags:
  - cambio
  - balance
  result_semantics:
    target: DeltaP
    meaning: Variación neta del momento total del sistema.
  domain_checks: []
  coherence_checks: []
  graph_implications:
  - Representa el salto vertical entre dos niveles de momento en la gráfica P(t).
  pedagogical_triggers: []

- id: cond
  title:
    es: Condición de Aislamiento
    en: Isolation Condition
  equation: F_ext = 0
  latex: \\sum \\vec{F}_{ext} = 0
  rearrangements: []
  category: formal
  relation_type: constraint
  physical_meaning:
    es: Ausencia de fuerzas externas netas, requisito para la conservación.
    en: Absence of net external forces, requirement for conservation.
  constraints: []
  validity:
    es: Condición estricta para aplicar el principio de conservación del momento.
    en: Strict condition for applying the momentum conservation principle.
  dimension_check:
    es: M L T^-2
    en: M L T^-2
  calculable: false
  motivo_no_calculable: Se trata de una condición lógica de contorno, no de un cálculo operativo.
  used_in:
  - theory
  - models
  interpretation_tags:
  - condicion
  - aislamiento
  result_semantics:
    target: F_ext
    meaning: Fuerza neta externa nula, requisito del principio de conservación.
  domain_checks: []
  coherence_checks: []
  graph_implications:
  - Asegura que la pendiente del momento respecto al tiempo sea cero.
  pedagogical_triggers: []

- id: pi
  title:
    es: Momento Lineal Inicial (Suma)
    en: Initial Linear Momentum (Sum)
  equation: Pinitial = m1*v1i + m2*v2i
  latex: \\vec{P}_i = m_1 \\vec{v}_{1i} + m_2 \\vec{v}_{2i}
  rearrangements:
  - target: v1i
    equation: v1i = (Pinitial - m2*v2i)/m1
    latex: v_{1i} = \\frac{P_i - m_2 v_{2i}}{m_1}
    constraints:
    - expr: m1 > 0
  category: formal
  relation_type: definition
  physical_meaning:
    es: Suma de los momentos de las partículas antes de la interacción.
    en: Sum of the momenta of the particles before the interaction.
  constraints: []
  validity:
    es: Válida para un sistema de dos partículas en el estado inicial.
    en: Valid for a two-particle system in the initial state.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - models
  - examples
  interpretation_tags:
  - suma
  - inicial
  result_semantics:
    target: Pinitial
    meaning: Momento total de entrada al proceso.
  domain_checks: []
  coherence_checks: []
  graph_implications:
  - Define el valor de la meseta inicial en la gráfica de P(t).
  pedagogical_triggers: []

- id: DeltaP_ext
  title:
    es: Variación del momento por impulso externo
    en: Momentum variation by external impulse
  equation: DeltaP = J
  latex: \\Delta \\vec{P} = \\vec{J}_{ext}
  rearrangements:
  - target: J
    equation: J = DeltaP
    latex: \\vec{J}_{ext} = \\Delta \\vec{P}
    constraints: []
  category: derived
  relation_type: physical_change
  physical_meaning:
    es: Relación entre el impulso externo neto y el cambio en el momento total.
    en: Relationship between net external impulse and total momentum change.
  constraints: []
  validity:
    es: Válida para cualquier sistema bajo la acción de un impulso externo neto.
    en: Valid for any system under the action of a net external impulse.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - examples
  interpretation_tags:
  - impulso
  - ruptura
  result_semantics:
    target: DeltaP
    meaning: Variación del momento total causada por el impulso externo.
  domain_checks: []
  coherence_checks: []
  graph_implications:
  - La pendiente de la curva P(t) es proporcional a la fuerza externa neta aplicada.
  pedagogical_triggers: []

- id: J
  title:
    es: Impulso externo
    en: External impulse
  equation: J = F_ext*t
  latex: \\vec{J}_{ext} = \\vec{F}_{ext} \\Delta t
  rearrangements:
  - target: F_ext
    equation: F_ext = J/t
    latex: F_{ext} = \\frac{J}{t}
    constraints:
    - expr: t > 0
  - target: t
    equation: t = J/F_ext
    latex: t = \\frac{J}{F_{ext}}
    constraints:
    - expr: F_ext != 0
  category: formal
  relation_type: definition
  physical_meaning:
    es: Efecto de la fuerza externa neta aplicada durante un intervalo de tiempo.
    en: Effect of net external force applied during a time interval.
  constraints:
  - expr: t > 0
    message:
      es: El intervalo de tiempo debe ser positivo.
      en: The time interval must be positive.
  validity:
    es: Válida para fuerzas constantes o promediadas sobre el intervalo temporal.
    en: Valid for constant or time-averaged forces over the interval.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - examples
  interpretation_tags:
  - impulso
  - tiempo
  result_semantics:
    target: J
    meaning: Impulso externo neto sobre el sistema durante el intervalo.
  domain_checks: []
  coherence_checks: []
  graph_implications:
  - El área bajo la curva F(t) representa el impulso externo total.
  pedagogical_triggers: []

- id: ruptura_conservacion
  title:
    es: Ruptura de la conservación por impulso externo
    en: Breakdown of conservation by external impulse
  equation: Pfinal = Pinitial + J
  latex: \\vec{P}_f = \\vec{P}_i + \\vec{J}_{ext}
  rearrangements:
  - target: J
    equation: J = Pfinal - Pinitial
    latex: \\vec{J}_{ext} = \\vec{P}_f - \\vec{P}_i
    constraints: []
  - target: Pinitial
    equation: Pinitial = Pfinal - J
    latex: \\vec{P}_i = \\vec{P}_f - \\vec{J}_{ext}
    constraints: []
  category: fundamental
  relation_type: balance_law
  physical_meaning:
    es: Ecuación central del leaf. Muestra explícitamente que el momento final difiere del inicial exactamente en el impulso externo neto. Cuando J = 0 recupera la conservación; cuando J ≠ 0 la rompe cuantitativamente.
    en: Central equation of the leaf. Explicitly shows that final momentum differs from initial by exactly the net external impulse. When J = 0 conservation is recovered; when J ≠ 0 it is broken quantitatively.
  constraints: []
  validity:
    es: Válida para cualquier sistema bajo impulso externo constante o promediado. Cuando J = 0 es equivalente al principio de conservación.
    en: Valid for any system under constant or time-averaged external impulse. When J = 0 it is equivalent to the conservation principle.
  dimension_check:
    es: M L T^-1
    en: M L T^-1
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - models
  - examples
  - calculator
  interpretation_tags:
  - ruptura
  - impulso
  - balance
  result_semantics:
    target: Pfinal
    meaning: Momento total final del sistema tras recibir el impulso externo neto.
  domain_checks:
  - expr: Pfinal == Pinitial + J
    message:
      es: El balance impulso-momento debe ser exacto.
      en: The impulse-momentum balance must be exact.
  coherence_checks:
  - expr: (J == 0) => (Pfinal == Pinitial)
    message:
      es: Cuando no hay impulso externo, la conservación debe ser exacta.
      en: When there is no external impulse, conservation must be exact.
  graph_implications:
  - La diferencia vertical entre Pfinal y Pinitial en la gráfica P(t) es exactamente J.
  - La pendiente de P(t) durante el intervalo es igual a F_ext.
  pedagogical_triggers: []
`;export{n as default};
