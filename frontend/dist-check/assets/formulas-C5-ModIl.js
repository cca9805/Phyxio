const e=`version: 1
formulas:
  - id: aceleracion_atwood
    title:
      es: aceleración de dos masas unidas por cuerda
      en: acceleration of two masses connected by a rope
    equation: a = g*(m2 - m1)/(m1 + m2)
    latex: a = g\\,\\frac{m_2 - m_1}{m_1 + m_2}
    rearrangements:
      - target: a
        equation: a = g*(m2 - m1)/(m1 + m2)
        latex: a = g\\,\\frac{m_2 - m_1}{m_1 + m_2}
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: La aceleración resulta de la diferencia de pesos dividida por la masa total arrastrada.
      en: Acceleration results from the weight difference divided by the total dragged mass.
    constraints:
      - cuerda ideal e inextensible
      - polea ideal sin masa ni rozamiento
      - movimiento vertical unidimensional
      - ambas masas comparten el mismo módulo de aceleración
    validity:
      es: Válida en la máquina de Atwood ideal o en sistemas equivalentes con dos masas acopladas por una cuerda ideal.
      en: Valid in the ideal Atwood machine or equivalent systems with two masses coupled by an ideal rope.
    dimension_check: "[LT^-2] = [LT^-2]*[M]/[M]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria.md, ejemplos.md, interpretacion.yaml]
    interpretation_tags: [asimetria_de_masas, sentido_del_movimiento, respuesta_dinamica]
    result_semantics:
      target: a
      kind: dynamic_result
      sign_meaning:
        es: Un valor positivo indica que el sentido supuesto coincide con la caída de m2; un valor negativo invierte el sentido.
        en: A positive value means the assumed direction matches the fall of m2; a negative value reverses the direction.
      absolute_value_meaning:
        es: Su valor absoluto mide cuán rápidamente se separa el sistema del equilibrio ideal.
        en: Its absolute value measures how quickly the system departs from ideal equilibrium.
    domain_checks:
      - id: masas_positivas
        expr: m1 > 0 and m2 > 0
        message:
          es: Las dos masas deben ser positivas.
          en: Both masses must be positive.
      - id: gravedad_positiva
        expr: g > 0
        message:
          es: La gravedad debe ser positiva.
          en: Gravity must be positive.
    coherence_checks:
      - id: aceleracion_acotada
        expr: abs(a) <= g
        message:
          es: En el modelo ideal el módulo de la aceleración no puede superar g.
          en: In the ideal model the magnitude of acceleration cannot exceed g.
      - id: equilibrio_si_masas_iguales
        expr: not (m1 == m2) or a == 0
        message:
          es: Si las masas son iguales, la aceleración debe anularse.
          en: If the masses are equal, acceleration must vanish.
    graph_implications:
      - id: coord_balance_curve
        es: El gráfico Coord debe mostrar que la aceleración cambia de signo al cruzar m1 = m2.
        en: The Coord graph should show that acceleration changes sign when crossing m1 = m2.
    pedagogical_triggers:
      - id: olvidar_masa_total
        detect_when: abs(a) > g
        message:
          es: Probablemente se ha dividido por una sola masa y no por la masa total del sistema.
          en: You probably divided by only one mass instead of the total system mass.

  - id: tension_atwood
    title:
      es: tensión en la cuerda ideal
      en: tension in the ideal rope
    equation: T = 2*m1*m2*g/(m1 + m2)
    latex: T = \\frac{2 m_1 m_2 g}{m_1 + m_2}
    rearrangements:
      - target: T
        equation: T = 2*m1*m2*g/(m1 + m2)
        latex: T = \\frac{2 m_1 m_2 g}{m_1 + m_2}
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: La tensión expresa la fuerza interna común que transmite la cuerda ideal a ambas masas.
      en: Tension expresses the common internal force that the ideal rope transmits to both masses.
    constraints:
      - cuerda ideal sin masa
      - polea ideal
      - cuerda siempre tensa
      - sistema con dos masas acopladas
    validity:
      es: Válida cuando la cuerda es ideal y la tensión es uniforme en ambos lados de la polea.
      en: Valid when the rope is ideal and tension is uniform on both sides of the pulley.
    dimension_check: "[MLT^-2] = [M][M][LT^-2]/[M]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria.md, ejemplos.md, interpretacion.yaml]
    interpretation_tags: [fuerza_interna, acoplamiento, restriccion]
    result_semantics:
      target: T
      kind: internal_force
      sign_meaning:
        es: Se interpreta como módulo positivo de la tracción interna si la cuerda permanece tensa.
        en: It is interpreted as the positive magnitude of the internal pulling force while the rope remains taut.
      absolute_value_meaning:
        es: Su valor absoluto indica cuánto esfuerzo común transmite la cuerda a ambos cuerpos.
        en: Its absolute value indicates how much common force the rope transmits to both bodies.
    domain_checks:
      - id: masas_validas_t
        expr: m1 > 0 and m2 > 0
        message:
          es: Las dos masas deben ser positivas para que la tensión sea física.
          en: Both masses must be positive for tension to be physical.
      - id: gravedad_valida_t
        expr: g > 0
        message:
          es: La gravedad debe ser positiva.
          en: Gravity must be positive.
    coherence_checks:
      - id: tension_positiva
        expr: T > 0
        message:
          es: La tensión debe ser positiva en una cuerda ideal tensa.
          en: Tension must be positive in a taut ideal rope.
      - id: tension_entre_pesos
        expr: T >= min(m1*g, m2*g) and T <= max(m1*g, m2*g)
        message:
          es: En el modelo ideal la tensión queda entre ambos pesos.
          en: In the ideal model tension lies between both weights.
    graph_implications:
      - id: coord_tension_band
        es: El gráfico puede mostrar que T queda entre m1 g y m2 g mientras la cuerda sigue tensa.
        en: The graph may show that T lies between m1 g and m2 g while the rope remains taut.
    pedagogical_triggers:
      - id: tension_igual_a_un_peso
        detect_when: T == m1*g or T == m2*g
        message:
          es: Revisa si has confundido la tensión con uno de los pesos en lugar de resolver el sistema completo.
          en: Check whether you confused tension with one of the weights instead of solving the full system.
`;export{e as default};
