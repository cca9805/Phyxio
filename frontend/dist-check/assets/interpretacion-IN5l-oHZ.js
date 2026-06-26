const e=`version: 2
id: interpretacion-enunciado-y-condiciones-de-aplicacion
leaf_id: enunciado-y-condiciones-de-aplicacion
nombre:
  es: "Interpretacion de Enunciado y condiciones de aplicacion"
  en: "Interpretation of Statement and Conditions for Application"
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cantidad-de-movimiento
  parent_id: principio-de-conservacion
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion
dependencies:
  formulas:
  - pi
  - P
  - DeltaP
  - cond
  - cons_principle
  - inelastic_collision
  - recoil_law
  - general_1d_balance
  magnitudes:
  - momento_lineal_individual
  - momento_lineal_total
  - masa_individual
  - velocidad_individual
  - masa_total
  - velocidad_centro_de_masas
  - fuerza_externa_neta
  - tiempo
  - variacion_momento_lineal
  - m1
  - m2
  - v1i
  - v2i
  - v1f
  - v2f
  - vf
  - Pinitial
  - Pfinal
  - Fext
output_contract:
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
result_blocks:
  summary:
    title:
      es: "Resumen de aislamiento dinámico"
      en: "Dynamic isolation summary"
  physical_reading:
    title:
      es: "Análisis del balance de momento"
      en: "Momentum balance analysis"
  coherence:
    title:
      es: "Coherencia del sistema"
      en: "System coherence"
  model_validity:
    title:
      es: "Verificación de condiciones de aplicación"
      en: "Verification of application conditions"
  graph_reading:
    title:
      es: "Interpretación de la trayectoria del CM"
      en: "Interpretation of CM trajectory"
  likely_errors:
    title:
      es: "Puntos críticos de error"
      en: "Critical error points"
  next_step:
    title:
      es: "Proyección dinámica"
      en: "Dynamic projection"
targets:
  momento_lineal_total:
    summary_rules:
    - id: momento_lineal_total_summary
      when: 'true'
      status: info
      text:
        es: "El momento lineal total representa el estado dinámico global del sistema, integrando todas sus masas y velocidades en una única cantidad conservada."
        en: "Total linear momentum represents the global dynamic state of the system, integrating all its masses and velocities into a single conserved quantity."
    coherence_rules:
    - id: momento_lineal_total_coherence
      when: 'true'
      status: ok
      text:
        es: "La suma vectorial de los momentos individuales debe coincidir exactamente con el momento total calculado a través del centro de masas."
        en: "The vector sum of individual momenta must exactly match the total momentum calculated through the center of mass."
    physical_reading_rules:
    - id: momento_lineal_total_physical
      when: 'true'
      status: info
      text:
        es: "Si el momento total es constante, el sistema carece de interacciones externas significativas, lo que valida el uso de leyes de conservación para predecir estados finales."
        en: "If total momentum is constant, the system lacks significant external interactions, which validates the use of conservation laws to predict final states."
    model_validity_rules:
    - id: momento_lineal_total_validity
      when: 'true'
      status: ok
      text:
        es: "La validez depende de que la frontera del sistema incluya a todos los cuerpos que intercambian fuerzas intensas."
        en: "Validity depends on the system boundary including all bodies that exchange intense forces."
    graph_rules:
    - id: momento_lineal_total_graph
      when: 'true'
      status: info
      text:
        es: "En una gráfica P vs t, la pendiente debe ser nula si se cumplen las condiciones de aislamiento del enunciado."
        en: "In a P vs t graph, the slope must be zero if the isolation conditions of the statement are met."
    likely_errors:
    - id: momento_lineal_total_warn
      when: 'true'
      status: warning
      text:
        es: "Error común: No incluir el carácter vectorial. Un momento total de cero no implica que no haya movimiento, sino que los movimientos individuales se cancelan."
        en: "Common error: Not including the vector character. A total momentum of zero does not imply no motion, but that individual motions cancel out."
    next_step_rules:
    - id: momento_lineal_total_next
      when: 'true'
      status: info
      text:
        es: "Con el momento total verificado, puedes proceder a analizar colisiones específicas o procesos de fragmentación en otros leaves."
        en: "With total momentum verified, you can proceed to analyze specific collisions or fragmentation processes in other leaves."
  fuerza_externa_neta:
    summary_rules:
    - id: fuerza_externa_neta_summary
      when: 'fuerza_externa_neta == 0'
      status: ok
      text:
        es: "Sistema aislado confirmado. La ausencia de fuerzas externas permite la aplicación directa del principio de conservación."
        en: "Isolated system confirmed. The absence of external forces allows for direct application of the conservation principle."
    - id: fuerza_externa_neta_warn
      when: 'fuerza_externa_neta != 0'
      status: warning
      text:
        es: "Ruptura de la conservación detectada. El momento cambiará proporcionalmente al impulso generado por esta fuerza externa."
        en: "Conservation rupture detected. Momentum will change proportionally to the impulse generated by this external force."
    physical_reading_rules:
    - id: fuerza_externa_neta_physical
      when: 'true'
      status: info
      text:
        es: "Cada Newton de fuerza externa neta desvía el balance de momento original, inyectando o extrayendo cantidad de movimiento del sistema."
        en: "Each Newton of net external force deviates the original momentum balance, injecting or extracting quantity of motion from the system."
    coherence_rules:
    - id: fuerza_externa_neta_coherence
      when: 'true'
      status: ok
      text:
        es: "Si la fuerza externa neta no es nula, la variación del momento del sistema debe ser proporcional al impulso generado."
        en: "If the net external force is non-zero, the system's momentum variation must be proportional to the generated impulse."
    model_validity_rules:
    - id: fuerza_externa_neta_validity
      when: 'true'
      status: ok
      text:
        es: "El modelo de conservación es válido solo cuando esta magnitud es nula o su impulso es despreciable frente al intercambio interno de momento."
        en: "The conservation model is valid only when this magnitude is zero or its impulse is negligible compared to the internal momentum exchange."
    graph_rules:
    - id: fuerza_externa_neta_graph
      when: 'true'
      status: info
      text:
        es: "Una fuerza externa neta no nula produce una pendiente positiva o negativa en la gráfica P vs t del sistema."
        en: "A non-zero net external force produces a positive or negative slope in the system's P vs t graph."
    likely_errors:
    - id: fuerza_externa_neta_error
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: Incluir la fuerza de choque entre los cuerpos del sistema como fuerza externa. Las fuerzas de contacto entre componentes del mismo sistema son internas y no alteran el momento total."
        en: "Frequent error: Including the collision force between system bodies as an external force. Contact forces between components of the same system are internal and do not alter total momentum."
    next_step_rules:
    - id: fuerza_externa_neta_next
      when: 'true'
      status: info
      text:
        es: "Si esta magnitud es nula, puedes aplicar directamente cons_principle. Si no lo es, verifica si la aproximación impulsiva permite despreciar su impulso durante el choque."
        en: "If this magnitude is zero, you can directly apply cons_principle. If not, verify whether the impulsive approximation allows neglecting its impulse during the collision."
  variacion_momento_lineal:
    summary_rules:
    - id: variacion_momento_lineal_summary
      when: 'variacion_momento_lineal == 0'
      status: ok
      text:
        es: "Invariancia dinámica confirmada. El sistema mantiene su estado de movimiento global a pesar de las interacciones internas."
        en: "Dynamic invariance confirmed. The system maintains its global state of motion despite internal interactions."
    physical_reading_rules:
    - id: variacion_momento_lineal_physical
      when: 'true'
      status: info
      text:
        es: "Una variación nula indica que el impulso neto recibido desde el exterior es cero durante el intervalo de estudio."
        en: "A zero variation indicates that the net impulse received from the outside is zero during the study interval."
    coherence_rules:
    - id: variacion_momento_lineal_coherence
      when: 'true'
      status: ok
      text:
        es: "La variación del momento total debe ser igual al impulso de la fuerza externa neta. Si Fext = 0, entonces DeltaP = 0 necesariamente."
        en: "The total momentum variation must equal the impulse of the net external force. If Fext = 0, then DeltaP = 0 necessarily."
    model_validity_rules:
    - id: variacion_momento_lineal_validity
      when: 'true'
      status: ok
      text:
        es: "Una variación nula confirma que el modelo de sistema aislado es válido para este proceso."
        en: "A zero variation confirms that the isolated system model is valid for this process."
    graph_rules:
    - id: variacion_momento_lineal_graph
      when: 'true'
      status: info
      text:
        es: "En una gráfica P vs t, una variación nula se visualiza como una línea completamente horizontal: el momento del sistema no cambia en ningún instante."
        en: "In a P vs t graph, a zero variation appears as a completely horizontal line: the system's momentum does not change at any instant."
    likely_errors:
    - id: variacion_momento_lineal_err
      when: 'true'
      status: warning
      text:
        es: "Cuidado: No confundas variación neta del sistema (que es cero en sistemas aislados) con la variación de una partícula individual (que puede ser muy grande)."
        en: "Careful: Do not confuse the system's net variation (which is zero in isolated systems) with an individual particle's variation (which can be very large)."
    next_step_rules:
    - id: variacion_momento_lineal_next
      when: 'true'
      status: info
      text:
        es: "Con la variación confirmada como nula, puedes usar cons_principle para calcular cualquier velocidad desconocida del estado final."
        en: "With the variation confirmed as zero, you can use cons_principle to calculate any unknown velocity of the final state."
  v1f:
    summary_rules:
    - id: v1f_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad final del primer cuerpo es la incógnita principal en procesos de retroceso y en el balance general 1D. Su signo respecto a v2f determina si los cuerpos se separan o se siguen."
        en: "The final velocity of the first body is the main unknown in recoil processes and in the general 1D balance. Its sign relative to v2f determines whether the bodies separate or follow each other."
    physical_reading_rules:
    - id: v1f_physical
      when: 'true'
      status: info
      text:
        es: "Un valor de v1f negativo (cuando v1i era positiva) indica que el primer cuerpo rebotó hacia atrás, transfiriendo más momento del que tenía al segundo."
        en: "A negative v1f value (when v1i was positive) indicates the first body bounced backward, transferring more momentum than it had to the second."
    coherence_rules:
    - id: v1f_coherence
      when: 'true'
      status: ok
      text:
        es: "La verificación de coherencia es: m1*v1f + m2*v2f debe ser igual al Pinitial calculado independientemente."
        en: "The coherence check is: m1*v1f + m2*v2f must equal the independently calculated Pinitial."
    model_validity_rules:
    - id: v1f_validity
      when: 'true'
      status: ok
      text:
        es: "En la ley de retroceso, v1f debe tener signo opuesto a v2f. Si ambas tienen el mismo signo, el modelo está mal aplicado."
        en: "In the recoil law, v1f must have the opposite sign to v2f. If both have the same sign, the model is misapplied."
    graph_rules:
    - id: v1f_graph
      when: 'true'
      status: info
      text:
        es: "En una gráfica v vs t, v1f es el valor en el instante justo posterior a la interacción para el cuerpo 1."
        en: "In a v vs t graph, v1f is the value at the instant just after the interaction for body 1."
    likely_errors:
    - id: v1f_error
      when: 'true'
      status: warning
      text:
        es: "Error típico: Confundir v1f con vf (velocidad final común) en el contexto de una colisión inelástica. v1f solo existe como magnitud diferenciada en colisiones que no son perfectamente inelásticas."
        en: "Typical error: Confusing v1f with vf (common final velocity) in the context of an inelastic collision. v1f only exists as a distinct quantity in collisions that are not perfectly inelastic."
    next_step_rules:
    - id: v1f_next
      when: 'true'
      status: info
      text:
        es: "Con v1f calculada, verifica el balance: m1*v1f + m2*v2f debe igualar al Pinitial. Si no coincide, revisa los signos de velocidad."
        en: "With v1f calculated, verify the balance: m1*v1f + m2*v2f must equal Pinitial. If it does not match, check the velocity signs."
  v2f:
    summary_rules:
    - id: v2f_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad final del segundo cuerpo es el resultado que adquiere la masa 2 tras el proceso de interacción. En explosiones desde el reposo, su signo es opuesto al de v1f."
        en: "The final velocity of the second body is the result acquired by mass 2 after the interaction process. In explosions from rest, its sign is opposite to v1f."
    physical_reading_rules:
    - id: v2f_physical
      when: 'true'
      status: info
      text:
        es: "En un choque donde m2 estaba en reposo, v2f siempre tiene el mismo signo que v1i: el segundo cuerpo siempre sale en la dirección del primer cuerpo entrante."
        en: "In a collision where m2 was at rest, v2f always has the same sign as v1i: the second body always exits in the direction of the incoming first body."
    coherence_rules:
    - id: v2f_coherence
      when: 'true'
      status: ok
      text:
        es: "Verificar que m1*v1f + m2*v2f = Pinitial. Si v2i = 0, entonces m2*v2f = Pinitial - m1*v1f."
        en: "Verify that m1*v1f + m2*v2f = Pinitial. If v2i = 0, then m2*v2f = Pinitial - m1*v1f."
    model_validity_rules:
    - id: v2f_validity
      when: 'true'
      status: ok
      text:
        es: "v2f no puede ser mayor en magnitud que la velocidad máxima que permite el balance de momento, que está acotada por el Pinitial y las masas."
        en: "v2f cannot be larger in magnitude than the maximum velocity allowed by the momentum balance, bounded by Pinitial and the masses."
    graph_rules:
    - id: v2f_graph
      when: 'true'
      status: info
      text:
        es: "En una gráfica v vs t, v2f es el valor discontinuo que adquiere el cuerpo 2 inmediatamente después del evento."
        en: "In a v vs t graph, v2f is the discontinuous value acquired by body 2 immediately after the event."
    likely_errors:
    - id: v2f_error
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: En retrocesos (Pinitial = 0), olvidar que m1*v1f + m2*v2f = 0 obliga a que v2f = -(m1/m2)*v1f. Un signo incorrecto viola la conservación."
        en: "Frequent error: In recoils (Pinitial = 0), forgetting that m1*v1f + m2*v2f = 0 forces v2f = -(m1/m2)*v1f. An incorrect sign violates conservation."
    next_step_rules:
    - id: v2f_next
      when: 'true'
      status: info
      text:
        es: "Con v2f calculada, el balance está completo. Puedes proceder a calcular la energía cinética final para verificar si la colisión fue elástica o inelástica."
        en: "With v2f calculated, the balance is complete. You can proceed to calculate the final kinetic energy to verify whether the collision was elastic or inelastic."
  vf:
    summary_rules:
    - id: vf_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad final común es el resultado de un choque perfectamente inelástico donde los cuerpos quedan unidos. Su valor siempre está entre v1i y v2i en magnitud."
        en: "The common final velocity is the result of a perfectly inelastic collision where the bodies stick together. Its value is always between v1i and v2i in magnitude."
    physical_reading_rules:
    - id: vf_physical
      when: 'true'
      status: info
      text:
        es: "vf es la velocidad del centro de masas del sistema antes de la colisión, lo que explica por qué se mantiene constante después: el sistema acoplado se mueve exactamente como el centro de masas original."
        en: "vf is the center-of-mass velocity of the system before the collision, which explains why it remains constant afterward: the coupled system moves exactly like the original center of mass."
    coherence_rules:
    - id: vf_coherence
      when: 'true'
      status: ok
      text:
        es: "Verificar: (m1 + m2)*vf debe igualar exactamente al Pinitial. Si v2i = 0, entonces vf = m1*v1i / (m1 + m2)."
        en: "Verify: (m1 + m2)*vf must exactly equal Pinitial. If v2i = 0, then vf = m1*v1i / (m1 + m2)."
    model_validity_rules:
    - id: vf_validity
      when: 'true'
      status: ok
      text:
        es: "La fórmula inelastic_collision es válida solo si los cuerpos realmente quedan acoplados. Si el enunciado no indica acoplamiento, usar general_1d_balance con las condiciones apropiadas."
        en: "The inelastic_collision formula is valid only if the bodies truly stick together. If the problem does not indicate coupling, use general_1d_balance with appropriate conditions."
    graph_rules:
    - id: vf_graph
      when: 'true'
      status: info
      text:
        es: "En una gráfica v vs t, ambos cuerpos muestran la misma velocidad vf después del evento, evidenciando el acoplamiento físico."
        en: "In a v vs t graph, both bodies show the same velocity vf after the event, evidencing the physical coupling."
    likely_errors:
    - id: vf_error
      when: 'true'
      status: warning
      text:
        es: "Error clásico: Aplicar inelastic_collision cuando la colisión no es perfectamente inelástica. Si los cuerpos rebotan (no quedan unidos), vf no existe como magnitud única: existen v1f ≠ v2f."
        en: "Classic error: Applying inelastic_collision when the collision is not perfectly inelastic. If the bodies rebound (do not stick), vf does not exist as a unique quantity: v1f ≠ v2f exist instead."
    next_step_rules:
    - id: vf_next
      when: 'true'
      status: info
      text:
        es: "Con vf calculada, determina la pérdida de energía cinética: ΔEk = (1/2)(m1*v1i² + m2*v2i²) - (1/2)(m1+m2)*vf². Esta diferencia es siempre positiva en choques inelásticos."
        en: "With vf calculated, determine the kinetic energy loss: ΔEk = (1/2)(m1*v1i² + m2*v2i²) - (1/2)(m1+m2)*vf². This difference is always positive in inelastic collisions."
  Pfinal:
    summary_rules:
    - id: Pfinal_summary
      when: 'true'
      status: info
      text:
        es: "El momento lineal final total es la verificación cuantitativa de la conservación. En un sistema aislado, Pfinal debe ser exactamente igual al Pinitial calculado independientemente."
        en: "The total final linear momentum is the quantitative verification of conservation. In an isolated system, Pfinal must be exactly equal to the independently calculated Pinitial."
    physical_reading_rules:
    - id: Pfinal_physical
      when: 'true'
      status: info
      text:
        es: "Pfinal no es una nueva cantidad de movimiento creada por la interacción; es la redistribución del Pinitial entre los cuerpos finales. El total siempre se mantiene."
        en: "Pfinal is not a new quantity of motion created by the interaction; it is the redistribution of Pinitial among the final bodies. The total always remains."
    coherence_rules:
    - id: Pfinal_coherence
      when: 'true'
      status: ok
      text:
        es: "Pfinal = m1*v1f + m2*v2f (o masa_total*vf en caso inelástico). Si difiere de Pinitial, hay un error de cálculo o el sistema no está realmente aislado."
        en: "Pfinal = m1*v1f + m2*v2f (or masa_total*vf in the inelastic case). If it differs from Pinitial, there is a calculation error or the system is not truly isolated."
    model_validity_rules:
    - id: Pfinal_validity
      when: 'true'
      status: ok
      text:
        es: "Si Pfinal ≠ Pinitial, el modelo de sistema aislado no es aplicable o hay una fuerza externa no contabilizada."
        en: "If Pfinal ≠ Pinitial, the isolated system model is not applicable or there is an unaccounted external force."
    graph_rules:
    - id: Pfinal_graph
      when: 'true'
      status: info
      text:
        es: "En la gráfica P vs t, Pfinal es el valor al que se estabiliza la línea horizontal después del evento de interacción."
        en: "In the P vs t graph, Pfinal is the value at which the horizontal line stabilizes after the interaction event."
    likely_errors:
    - id: Pfinal_error
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: Calcular Pfinal como suma escalar de módulos en lugar de suma vectorial. En choques frontales, los signos opuestos de los momentos individuales pueden hacer que Pfinal sea mucho menor que la suma de módulos."
        en: "Frequent error: Calculating Pfinal as a scalar sum of magnitudes instead of a vector sum. In head-on collisions, the opposite signs of individual momenta can make Pfinal much smaller than the sum of magnitudes."
    next_step_rules:
    - id: Pfinal_next
      when: 'true'
      status: info
      text:
        es: "Con Pfinal verificado igual a Pinitial, la solución del balance es correcta. Puedes continuar analizando la energía cinética o la velocidad del centro de masas en los leaves avanzados de colisiones."
        en: "With Pfinal verified equal to Pinitial, the balance solution is correct. You can continue analyzing kinetic energy or center-of-mass velocity in the advanced collision leaves."
  momento_lineal_individual:
    summary_rules:
    - id: pind_summary
      when: 'true'
      status: info
      text:
        es: "El momento lineal individual es el producto de la masa por la velocidad de cada cuerpo. Es la unidad básica que se suma para obtener el momento total del sistema."
        en: "Individual linear momentum is the product of mass times velocity of each body. It is the basic unit summed to obtain the total system momentum."
    physical_reading_rules:
    - id: pind_physical
      when: 'true'
      status: info
      text:
        es: "Un momento individual grande indica que ese cuerpo aporta mucho al estado dinámico total. Su variación durante el choque es igual y opuesta a la variación del otro cuerpo."
        en: "A large individual momentum indicates that body contributes significantly to the total dynamic state. Its change during the collision is equal and opposite to the other body's change."
    coherence_rules:
    - id: pind_coherence
      when: 'true'
      status: ok
      text:
        es: "La suma de todos los momentos individuales debe dar el momento total del sistema."
        en: "The sum of all individual momenta must give the total system momentum."
    model_validity_rules:
    - id: pind_validity
      when: 'true'
      status: ok
      text:
        es: "Válido cuando la velocidad del cuerpo es no relativista (v << c)."
        en: "Valid when the body's velocity is non-relativistic (v << c)."
    graph_rules:
    - id: pind_graph
      when: 'true'
      status: info
      text:
        es: "En una gráfica p_i vs t, cada cuerpo muestra un salto discontinuo en el instante de la interacción."
        en: "In a p_i vs t graph, each body shows a discontinuous jump at the instant of interaction."
    likely_errors:
    - id: pind_error
      when: 'true'
      status: warning
      text:
        es: "Error típico: Calcular el momento individual ignorando el signo de la velocidad. En choques frontales, un cuerpo tiene momento negativo y el otro positivo."
        en: "Typical error: Calculating individual momentum ignoring the sign of velocity. In head-on collisions, one body has negative momentum and the other positive."
    next_step_rules:
    - id: pind_next
      when: 'true'
      status: info
      text:
        es: "Con los momentos individuales calculados, súmalos vectorialmente para obtener el momento total del sistema y verificar la conservación."
        en: "With individual momenta calculated, add them vectorially to obtain the total system momentum and verify conservation."
  velocidad_individual:
    summary_rules:
    - id: vind_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad individual de cada cuerpo es la magnitud que cambia durante la interacción. A partir del balance de momentos se puede calcular la velocidad final de cualquier cuerpo desconocido."
        en: "The individual velocity of each body is the quantity that changes during the interaction. From the momentum balance, the final velocity of any unknown body can be calculated."
    physical_reading_rules:
    - id: vind_physical
      when: 'true'
      status: info
      text:
        es: "La velocidad individual refleja directamente cuánto momento tiene cada cuerpo. Cuerpos más lentos tienen menos momento; cuerpos más masivos tienen más aunque vayan despacio."
        en: "Individual velocity directly reflects how much momentum each body has. Slower bodies have less momentum; more massive bodies have more even at low speed."
    coherence_rules:
    - id: vind_coherence
      when: 'true'
      status: ok
      text:
        es: "La velocidad obtenida debe satisfacer el balance de momentos del sistema completo."
        en: "The obtained velocity must satisfy the momentum balance of the complete system."
    model_validity_rules:
    - id: vind_validity
      when: 'true'
      status: ok
      text:
        es: "El modelo clásico p = mv es válido para v << c. Para velocidades relativistas se necesita la corrección γmv."
        en: "The classical model p = mv is valid for v << c. For relativistic velocities the γmv correction is needed."
    graph_rules:
    - id: vind_graph
      when: 'true'
      status: info
      text:
        es: "En una gráfica v vs t, la velocidad individual es constante antes y después de la interacción, con un salto discontinuo en el instante del choque."
        en: "In a v vs t graph, individual velocity is constant before and after the interaction, with a discontinuous jump at the instant of collision."
    likely_errors:
    - id: vind_error
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: No asignar el signo correcto a la velocidad inicial o final. El signo depende del sentido de movimiento respecto al eje de referencia elegido."
        en: "Frequent error: Not assigning the correct sign to the initial or final velocity. The sign depends on the direction of motion relative to the chosen reference axis."
    next_step_rules:
    - id: vind_next
      when: 'true'
      status: info
      text:
        es: "Con la velocidad individual determinada, multiplica por la masa del cuerpo para obtener su momento lineal individual."
        en: "With the individual velocity determined, multiply by the body's mass to obtain its individual linear momentum."
  Pinitial:
    summary_rules:
    - id: Pinitial_summary
      when: 'true'
      status: info
      text:
        es: "El momento lineal inicial total es el valor constante que se conserva en todo sistema aislado. Es el dato de referencia fundamental del balance."
        en: "The total initial linear momentum is the constant value preserved in any isolated system. It is the fundamental reference data of the balance."
    physical_reading_rules:
    - id: Pinitial_physical
      when: 'true'
      status: info
      text:
        es: "Pinitial describe el estado dinámico completo del sistema antes de la interacción. Si el sistema estaba en reposo, Pinitial = 0 y el estado final también debe tener momento total nulo."
        en: "Pinitial describes the complete dynamic state of the system before the interaction. If the system was at rest, Pinitial = 0 and the final state must also have zero total momentum."
    coherence_rules:
    - id: Pinitial_coherence
      when: 'true'
      status: ok
      text:
        es: "En sistemas aislados, Pinitial = Pfinal. Si son distintos, hay un error de cálculo o una fuerza externa no contabilizada."
        en: "In isolated systems, Pinitial = Pfinal. If they differ, there is a calculation error or an unaccounted external force."
    model_validity_rules:
    - id: Pinitial_validity
      when: 'true'
      status: ok
      text:
        es: "El valor calculado de Pinitial es válido cuando las velocidades iniciales se miden en el mismo instante de referencia y en el mismo sistema de referencia inercial."
        en: "The calculated value of Pinitial is valid when initial velocities are measured at the same reference instant and in the same inertial reference frame."
    graph_rules:
    - id: Pinitial_graph
      when: 'true'
      status: info
      text:
        es: "En la gráfica P vs t, Pinitial es el valor constante antes del instante de interacción, representado como una línea horizontal."
        en: "In the P vs t graph, Pinitial is the constant value before the interaction instant, represented as a horizontal line."
    likely_errors:
    - id: Pinitial_error
      when: 'true'
      status: warning
      text:
        es: "Error habitual: Sumar los módulos de los momentos en lugar de sumarlos vectorialmente. En choques frontales, un cuerpo tiene v negativa y su momento se resta, no se suma."
        en: "Common error: Adding the magnitudes of momenta instead of adding them vectorially. In head-on collisions, one body has negative velocity and its momentum is subtracted, not added."
    next_step_rules:
    - id: Pinitial_next
      when: 'true'
      status: info
      text:
        es: "Con Pinitial calculado, aplica el principio de conservación: Pfinal = Pinitial. Usa esta ecuación para despejar la velocidad final desconocida."
        en: "With Pinitial calculated, apply the conservation principle: Pfinal = Pinitial. Use this equation to solve for the unknown final velocity."
  v1i:
    summary_rules:
    - id: v1i_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad inicial del primer cuerpo es un dato de entrada del problema. Determina cuánto momento lineal aporta el primer cuerpo al balance total."
        en: "The initial velocity of the first body is an input data of the problem. It determines how much linear momentum the first body contributes to the total balance."
    physical_reading_rules:
    - id: v1i_physical
      when: 'true'
      status: info
      text:
        es: "Un v1i positivo indica que el cuerpo 1 se mueve en el sentido positivo del eje. Si v1i es negativo, va en sentido contrario y su contribución al momento es negativa."
        en: "A positive v1i indicates body 1 moves in the positive axis direction. If v1i is negative, it moves in the opposite direction and its momentum contribution is negative."
    coherence_rules:
    - id: v1i_coherence
      when: 'true'
      status: ok
      text:
        es: "v1i debe ser consistente con el enunciado del problema: no puede cambiar de signo entre la definición del sistema y su uso en el balance."
        en: "v1i must be consistent with the problem statement: it cannot change sign between the system definition and its use in the balance."
    model_validity_rules:
    - id: v1i_validity
      when: 'true'
      status: ok
      text:
        es: "El modelo clásico es válido cuando v1i << c. A velocidades relativistas el momento es γm1v1i."
        en: "The classical model is valid when v1i << c. At relativistic speeds the momentum is γm1v1i."
    graph_rules:
    - id: v1i_graph
      when: 'true'
      status: info
      text:
        es: "En la gráfica v vs t, v1i es el valor plano antes del instante de colisión. El eje de referencia define si es positivo o negativo."
        en: "In the v vs t graph, v1i is the flat value before the collision instant. The reference axis defines whether it is positive or negative."
    likely_errors:
    - id: v1i_error
      when: 'true'
      status: warning
      text:
        es: "Error común: Asumir que v1i = 0 sin verificarlo en el enunciado. En muchos problemas el primer cuerpo está en reposo, pero no siempre."
        en: "Common error: Assuming v1i = 0 without verifying it in the problem statement. In many problems the first body is at rest, but not always."
    next_step_rules:
    - id: v1i_next
      when: 'true'
      status: info
      text:
        es: "Con v1i determinado, calcula m1*v1i para obtener el momento individual inicial del primer cuerpo y sumarlo al de los demás cuerpos."
        en: "With v1i determined, calculate m1*v1i to obtain the initial individual momentum of the first body and add it to the others."
  v2i:
    summary_rules:
    - id: v2i_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad inicial del segundo cuerpo completa la descripción del estado dinámico inicial. En muchos problemas básicos v2i = 0, pero en choques frontales puede ser negativo."
        en: "The initial velocity of the second body completes the description of the initial dynamic state. In many basic problems v2i = 0, but in head-on collisions it can be negative."
    physical_reading_rules:
    - id: v2i_physical
      when: 'true'
      status: info
      text:
        es: "Si v2i tiene el mismo signo que v1i, ambos cuerpos van en la misma dirección (choque de alcance). Si es opuesto, es un choque frontal y los momentos parcialmente se anulan."
        en: "If v2i has the same sign as v1i, both bodies move in the same direction (rear-end collision). If opposite, it is a head-on collision and momenta partially cancel."
    coherence_rules:
    - id: v2i_coherence
      when: 'true'
      status: ok
      text:
        es: "v2i debe ser consistente con el tipo de colisión descrita en el enunciado."
        en: "v2i must be consistent with the type of collision described in the problem statement."
    model_validity_rules:
    - id: v2i_validity
      when: 'true'
      status: ok
      text:
        es: "El modelo clásico es válido cuando v2i << c."
        en: "The classical model is valid when v2i << c."
    graph_rules:
    - id: v2i_graph
      when: 'true'
      status: info
      text:
        es: "En la gráfica v vs t, v2i es la velocidad constante del cuerpo 2 antes del evento de interacción."
        en: "In the v vs t graph, v2i is the constant velocity of body 2 before the interaction event."
    likely_errors:
    - id: v2i_error
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: Olvidar que en explosiones desde el reposo, tanto v1i como v2i son cero, y el momento total inicial es nulo. Esto implica que después de la explosión los momentos deben cancelarse."
        en: "Frequent error: Forgetting that in explosions from rest, both v1i and v2i are zero, and the total initial momentum is zero. This implies that after the explosion the momenta must cancel."
    next_step_rules:
    - id: v2i_next
      when: 'true'
      status: info
      text:
        es: "Con v2i determinado, calcula m2*v2i para el momento individual del segundo cuerpo y súmalo a m1*v1i para obtener el Pinitial del sistema."
        en: "With v2i determined, calculate m2*v2i for the individual momentum of the second body and add it to m1*v1i to obtain the system's Pinitial."
`;export{e as default};
