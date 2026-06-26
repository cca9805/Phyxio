const e=`version: 2
id: interpretacion-sistemas-aislados-y-fuerzas-externas
leaf_id: sistemas-aislados-y-fuerzas-externas
nombre:
  es: Interpretación de Sistemas Aislados y Fuerzas Externas
  en: Interpretation of Isolated Systems and External Forces
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cantidad-de-movimiento
  parent_id: principio-de-conservacion
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/sistemas-aislados-y-fuerzas-externas
dependencies:
  formulas:
  - cons_principle
  - recoil_law
  - inelastic_collision
  - general_1d_balance
  - P
  - DeltaP
  - cond
  - pi
  - momento_total
  magnitudes:
  - momento_lineal_total
  - momento_lineal_individual
  - masa_individual
  - velocidad_individual
  - fuerza_externa_neta
  - impulso_externo
  - variacion_momento_total
  - tiempo
  - Pfinal
  - v1f
  - v2f
  - vf
  - Pinitial
  - m
  - v
  - v1i
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
      es: Balance Global del Sistema
      en: Global System Balance
  physical_reading:
    title:
      es: Análisis de Interacciones Externas e Internas
      en: External and Internal Interaction Analysis
  coherence:
    title:
      es: Verificación de Conservación de Momento
      en: Momentum Conservation Verification
  model_validity:
    title:
      es: Auditoría de Aislamiento Dinámico
      en: Dynamic Isolation Audit
  graph_reading:
    title:
      es: Diagnóstico de la Evolución del Sistema
      en: System Evolution Diagnosis
  likely_errors:
    title:
      es: Alerta de Sesgos en el Contorno del Sistema
      en: System Boundary Bias Alert
  next_step:
    title:
      es: Proyección y Estabilidad del Sistema
      en: System Projection and Stability
targets:
  momento_lineal_individual:
    summary_rules:
    - id: momento_lineal_individual_summary_god
      when: 'true'
      status: info
      text:
        es: "El momento lineal individual describe la contribución de un solo componente al transporte total de inercia del sistema."
        en: "The individual linear momentum describes the contribution of a single component to the system's total inertia transport."
    physical_reading_rules:
    - id: momento_lineal_individual_physical_god
      when: 'true'
      status: info
      text:
        es: "Indica cómo se reparte el movimiento; en un sistema aislado, los cambios en los momentos individuales deben compensarse exactamente para mantener el total constante."
        en: "It indicates how motion is distributed; in an isolated system, changes in individual momenta must compensate exactly to keep the total constant."
    coherence_rules:
    - id: momento_lineal_individual_coherence_god
      when: 'true'
      status: ok
      text:
        es: "El valor individual es coherente con la masa y velocidad asignadas a este componente dentro del marco inercial."
        en: "The individual value is consistent with the mass and velocity assigned to this component within the inertial frame."
    model_validity_rules:
    - id: momento_lineal_individual_validity_god
      when: 'true'
      status: ok
      text:
        es: "Se asume que el cuerpo puede tratarse como una partícula o sólido rígido con un centro de masas bien definido."
        en: "It is assumed the body can be treated as a particle or rigid solid with a well-defined center of mass."
    graph_rules:
    - id: momento_lineal_individual_graph_god
      when: 'true'
      status: info
      text:
        es: "Gráficamente, los vectores de momento individual se suman punta a cola para formar el vector de momento lineal total."
        en: "Graphically, the individual momentum vectors are added tip-to-tail to form the total linear momentum vector."
    likely_errors:
    - id: momento_lineal_individual_errors_god
      when: 'true'
      status: warning
      text:
        es: "Error de enfoque: No olvides que aunque el sistema total esté aislado, las partes individuales sufren impulsos internos que cambian su momento."
        en: "Focus error: Do not forget that although the total system is isolated, individual parts undergo internal impulses that change their momentum."
    next_step_rules:
    - id: momento_lineal_individual_next_god
      when: 'true'
      status: tip
      text:
        es: "Calcula las variaciones individuales para verificar que la suma de impulsos internos es nula (Tercera Ley de Newton)."
        en: "Calculate individual variations to verify that the sum of internal impulses is zero (Newton's Third Law)."

  impulso_externo:
    summary_rules:
    - id: impulso_externo_summary_god
      when: 'true'
      status: info
      text:
        es: "El impulso externo es el 'intruso' que rompe el aislamiento del sistema; cuantifica la interferencia del entorno sobre el balance total."
        en: "External impulse is the 'intruder' that breaks the system's isolation; it quantifies environmental interference on the total balance."
    physical_reading_rules:
    - id: impulso_externo_physical_god
      when: 'result == 0'
      status: ok
      text:
        es: "Aislamiento perfecto: Al ser nulo, el sistema conserva su momento lineal total de forma íntegra; las fuerzas externas están compensadas o son inexistentes."
        en: "Perfect isolation: Being zero, the system conserves its total linear momentum fully; external forces are balanced or nonexistent."
    - id: impulso_externo_not_null_god
      when: 'result != 0'
      status: warning
      text:
        es: "Ruptura de conservación: El impulso externo inyecta o extrae movimiento del sistema, invalidando la hipótesis de sistema aislado ideal."
        en: "Conservation breakdown: External impulse injects or extracts motion from the system, invalidating the ideal isolated system hypothesis."
    coherence_rules:
    - id: impulso_externo_coherence_god
      when: 'true'
      status: ok
      text:
        es: "El impulso externo medido explica cuantitativamente por qué el momento total del sistema ha variado en el tiempo."
        en: "The measured external impulse quantitatively explains why the system's total momentum has varied over time."
    model_validity_rules:
    - id: impulso_externo_validity_god
      when: 'true'
      status: ok
      text:
        es: "El modelo es válido si se han identificado todas las fuerzas externas (gravedad, fricción, apoyos) que actúan sobre el contorno del sistema."
        en: "The model is valid if all external forces (gravity, friction, supports) acting on the system boundary have been identified."
    graph_rules:
    - id: impulso_externo_graph_god
      when: 'true'
      status: info
      text:
        es: "En el diagrama, el impulso externo se visualiza como el área bajo la curva de la fuerza neta externa o como el vector que desplaza el centro de masas."
        en: "In the diagram, the external impulse is visualized as the area under the net external force curve or as the vector shifting the center of mass."
    likely_errors:
    - id: impulso_externo_errors_god
      when: 'true'
      status: warning
      text:
        es: "Sesgo común: Incluir fuerzas internas (como choques entre piezas) en el cálculo del impulso externo; estas se cancelan por pares."
        en: "Common bias: Including internal forces (like collisions between parts) in the external impulse calculation; these cancel out in pairs."
    next_step_rules:
    - id: impulso_externo_next_god
      when: 'true'
      status: tip
      text:
        es: "Si el impulso externo no es despreciable, redefine las fronteras del sistema para incluir la fuente de la fuerza y recuperar la conservación."
        en: "If the external impulse is not negligible, redefine the system boundaries to include the force source and recover conservation."

  variacion_momento_total:
    summary_rules:
    - id: variacion_momento_total_summary_god
      when: 'true'
      status: info
      text:
        es: "Describe el cambio global en el transporte de inercia del conjunto de partículas; es el termómetro de la influencia externa."
        en: "Describes the global change in the momentum transport of the particle set; it is the thermometer of external influence."
    physical_reading_rules:
    - id: variacion_momento_total_zero_god
      when: 'result == 0'
      status: ok
      text:
        es: "Estado de conservación: La variación nula confirma que el sistema se comporta como un bloque cerrado frente al exterior."
        en: "Conservation state: Zero variation confirms the system behaves as a closed block relative to the outside."
    - id: variacion_momento_total_not_zero_god
      when: 'result != 0'
      status: warning
      text:
        es: "Desequilibrio dinámico: El sistema está ganando o perdiendo momento neto debido a la interacción con el entorno."
        en: "Dynamic imbalance: The system is gaining or losing net momentum due to interaction with the environment."
    coherence_rules:
    - id: variacion_momento_total_coherence_god
      when: 'true'
      status: ok
      text:
        es: "La variación total coincide exactamente con la suma vectorial de las variaciones de cada componente individual."
        en: "The total variation matches exactly the vector sum of each individual component's variations."
    model_validity_rules:
    - id: variacion_momento_total_validity_god
      when: 'true'
      status: ok
      text:
        es: "Solo es válida si el sistema de partículas se ha mantenido constante (sin fugas ni entradas de masa) durante el intervalo."
        en: "Only valid if the particle system remained constant (no leaks or mass entries) during the interval."
    graph_rules:
    - id: variacion_momento_total_graph_god
      when: 'true'
      status: info
      text:
        es: "Visualmente, es el vector que une el momento total inicial con el momento total final en el diagrama de balance."
        en: "Visually, it is the vector joining the initial total momentum with the final total momentum in the balance diagram."
    likely_errors:
    - id: variacion_momento_total_errors_god
      when: 'true'
      status: warning
      text:
        es: "Error clásico: Pensar que si los componentes se mueven rápido, el momento total debe cambiar. Solo las fuerzas externas cambian el total."
        en: "Classic error: Thinking that if components move fast, total momentum must change. Only external forces change the total."
    next_step_rules:
    - id: variacion_momento_total_next_god
      when: 'true'
      status: tip
      text:
        es: "Usa la variación nula para despejar una velocidad desconocida de uno de los componentes tras una interacción interna."
        en: "Use the zero variation to solve for an unknown velocity of one component after an internal interaction."

  Pfinal:
    summary_rules:
    - id: Pfinal_summary
      when: 'true'
      status: info
      text:
        es: "El momento total final refleja el estado dinámico del sistema después de la interacción; debe igualar al inicial si el sistema estuvo aislado."
        en: "The final total momentum reflects the dynamic state of the system after the interaction; it must equal the initial one if the system was isolated."
    physical_reading_rules:
    - id: Pfinal_physical
      when: 'true'
      status: info
      text:
        es: "Compara Pfinal con Pinitial: si coinciden, la conservación se verificó; si difieren, existió un impulso externo neto."
        en: "Compare Pfinal with Pinitial: if they match, conservation is verified; if they differ, a net external impulse was present."
    coherence_rules:
    - id: Pfinal_coherence
      when: 'true'
      status: ok
      text:
        es: "Pfinal se calcula sumando m·v de cada cuerpo en el estado final; verifica que la suma tenga las unidades correctas."
        en: "Pfinal is calculated by summing m·v of each body in the final state; verify the sum has correct units."
    model_validity_rules:
    - id: Pfinal_validity
      when: 'true'
      status: ok
      text:
        es: "El cálculo es válido si se identificaron correctamente todas las partes del sistema y sus velocidades finales."
        en: "The calculation is valid if all parts of the system and their final velocities were correctly identified."
    graph_rules:
    - id: Pfinal_graph
      when: 'true'
      status: info
      text:
        es: "En el diagrama SVG, Pfinal es la longitud total del vector resultante en el estado post-interacción."
        en: "In the SVG diagram, Pfinal is the total length of the resultant vector in the post-interaction state."
    likely_errors:
    - id: Pfinal_errors
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: olvidar sumar todos los componentes del sistema al calcular Pfinal; un cuerpo omitido viola la conservación artificialmente."
        en: "Frequent error: forgetting to sum all system components when calculating Pfinal; an omitted body artificially violates conservation."
    next_step_rules:
    - id: Pfinal_next
      when: 'true'
      status: tip
      text:
        es: "Si Pfinal = Pinitial, el sistema se comportó como aislado; si no, cuantifica el impulso externo y revalúa la frontera del sistema."
        en: "If Pfinal = Pinitial, the system behaved as isolated; if not, quantify the external impulse and re-evaluate the system boundary."

  v1f:
    summary_rules:
    - id: v1f_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad final del cuerpo 1 es el resultado principal en colisiones o explosiones donde se busca el estado post-interacción."
        en: "The final velocity of body 1 is the main result in collisions or explosions where the post-interaction state is sought."
    physical_reading_rules:
    - id: v1f_physical
      when: 'true'
      status: info
      text:
        es: "El signo de v1f indica la dirección del movimiento; en explosiones desde reposo, v1f es negativo si v2f es positivo."
        en: "The sign of v1f indicates the direction of motion; in explosions from rest, v1f is negative if v2f is positive."
    coherence_rules:
    - id: v1f_coherence
      when: 'true'
      status: ok
      text:
        es: "Verifica que m1·v1f + m2·v2f = Pinitial para confirmar que la conservación se satisface."
        en: "Verify that m1·v1f + m2·v2f = Pinitial to confirm that conservation is satisfied."
    model_validity_rules:
    - id: v1f_validity
      when: 'true'
      status: ok
      text:
        es: "El valor es físicamente razonable si |v1f| no supera un límite impuesto por la energía disponible en el sistema."
        en: "The value is physically reasonable if |v1f| does not exceed a limit imposed by the energy available in the system."
    graph_rules:
    - id: v1f_graph
      when: 'true'
      status: info
      text:
        es: "La flecha de v1f en el DCL muestra hacia la izquierda si es negativo, confirmando el sentido de retroceso."
        en: "The v1f arrow in the DCL points left if negative, confirming the recoil direction."
    likely_errors:
    - id: v1f_errors
      when: 'true'
      status: warning
      text:
        es: "Error típico en retroceso: calcular |v1f| pero olvidar agregar el signo negativo según el convenio."
        en: "Typical error in recoil: calculating |v1f| but forgetting to add the negative sign according to the convention."
    next_step_rules:
    - id: v1f_next
      when: 'true'
      status: tip
      text:
        es: "Con v1f conocido, calcula la energía cinética final del cuerpo 1 y compara con la inicial para cuantificar la energía disipada."
        en: "With v1f known, calculate the final kinetic energy of body 1 and compare with the initial to quantify dissipated energy."

  v2f:
    summary_rules:
    - id: v2f_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad final del cuerpo 2 completa el balance de la interacción; junto a v1f, determina completamente el estado post-interacción."
        en: "The final velocity of body 2 completes the interaction balance; together with v1f, it fully determines the post-interaction state."
    physical_reading_rules:
    - id: v2f_physical
      when: 'true'
      status: info
      text:
        es: "En explosiones desde el reposo, v2f tiene signo opuesto a v1f; ambos cuerpos se alejan en direcciones contrarias."
        en: "In explosions from rest, v2f has opposite sign to v1f; both bodies move away in opposite directions."
    coherence_rules:
    - id: v2f_coherence
      when: 'true'
      status: ok
      text:
        es: "Verifica que m1·v1f + m2·v2f = Pinitial; cualquier discrepancia indica un error en la aplicación de la conservación."
        en: "Verify that m1·v1f + m2·v2f = Pinitial; any discrepancy indicates an error in applying conservation."
    model_validity_rules:
    - id: v2f_validity
      when: 'true'
      status: ok
      text:
        es: "El modelo es válido si el sistema estuvo aislado durante la interacción y no hubo pérdidas de masa."
        en: "The model is valid if the system was isolated during the interaction and there were no mass losses."
    graph_rules:
    - id: v2f_graph
      when: 'true'
      status: info
      text:
        es: "En el DCL, la flecha de v2f apunta en la dirección opuesta a v1f cuando el sistema se origina desde reposo."
        en: "In the DCL, the v2f arrow points in the opposite direction to v1f when the system originates from rest."
    likely_errors:
    - id: v2f_errors
      when: 'true'
      status: warning
      text:
        es: "Error común: en una explosión desde el reposo, calcular v2f con signo positivo ignorando la dirección de la reacción."
        en: "Common error: in an explosion from rest, calculating v2f with positive sign ignoring the reaction direction."
    next_step_rules:
    - id: v2f_next
      when: 'true'
      status: tip
      text:
        es: "Calcula la energía cinética total post-interacción sumando las contribuciones de ambos cuerpos para evaluar si el proceso fue elástico o inelástico."
        en: "Calculate the total post-interaction kinetic energy by summing contributions from both bodies to evaluate whether the process was elastic or inelastic."

  vf:
    summary_rules:
    - id: vf_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad común final es el resultado central de una colisión perfectamente inelástica; ambos cuerpos se mueven solidariamente tras el choque."
        en: "The common final velocity is the central result of a perfectly inelastic collision; both bodies move together after the impact."
    physical_reading_rules:
    - id: vf_physical
      when: 'true'
      status: info
      text:
        es: "vf siempre es menor en módulo que la velocidad del cuerpo más rápido antes del choque, ya que la inercia del conjunto es mayor."
        en: "vf is always smaller in magnitude than the velocity of the fastest body before the collision, as the inertia of the combined set is greater."
    coherence_rules:
    - id: vf_coherence
      when: 'true'
      status: ok
      text:
        es: "Verifica que (m1+m2)·vf = m1·v1i + m2·v2i para confirmar la conservación."
        en: "Verify that (m1+m2)·vf = m1·v1i + m2·v2i to confirm conservation."
    model_validity_rules:
    - id: vf_validity
      when: 'true'
      status: ok
      text:
        es: "Válida solo si los cuerpos quedan efectivamente unidos; si rebotan, usar la fórmula de colisión elástica o parcialmente inelástica."
        en: "Valid only if the bodies effectively stick together; if they rebound, use the elastic or partially inelastic collision formula."
    graph_rules:
    - id: vf_graph
      when: 'true'
      status: info
      text:
        es: "En el SVG, vf aparece como un único vector de mayor masa y menor velocidad que los vectores individuales previos."
        en: "In the SVG, vf appears as a single vector of greater mass and lower velocity than the previous individual vectors."
    likely_errors:
    - id: vf_errors
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: dividir Pinitial entre m1 en lugar de (m1+m2), olvidando incluir la masa del cuerpo 2 en el denominador."
        en: "Frequent error: dividing Pinitial by m1 instead of (m1+m2), forgetting to include the mass of body 2 in the denominator."
    next_step_rules:
    - id: vf_next
      when: 'true'
      status: tip
      text:
        es: "Con vf calculado, determina la energía cinética perdida en la colisión para clasificar el grado de inelasticidad del proceso."
        en: "With vf calculated, determine the kinetic energy lost in the collision to classify the degree of inelasticity of the process."

  Pinitial:
    summary_rules:
    - id: Pinitial_summary
      when: 'true'
      status: info
      text:
        es: "El momento lineal total inicial es el estado de referencia para verificar la conservación tras la interacción."
        en: "The initial total linear momentum is the reference state for verifying conservation after the interaction."
    physical_reading_rules:
    - id: Pinitial_physical
      when: 'true'
      status: info
      text:
        es: "Pinitial = m1·v1i + m2·v2i; si el sistema estaba en reposo, Pinitial = 0 y todo momento final debe anularse."
        en: "Pinitial = m1·v1i + m2·v2i; if the system was at rest, Pinitial = 0 and all final momenta must cancel."
    coherence_rules:
    - id: Pinitial_coherence
      when: 'true'
      status: ok
      text:
        es: "Pinitial se calcula sumando m·v de cada cuerpo en el estado inicial; la comparación con Pfinal verifica la conservación."
        en: "Pinitial is calculated by summing m·v of each body in the initial state; comparing with Pfinal verifies conservation."
    model_validity_rules:
    - id: Pinitial_validity
      when: 'true'
      status: ok
      text:
        es: "Válido si todas las masas y velocidades iniciales están definidas y el marco de referencia es inercial."
        en: "Valid if all initial masses and velocities are defined and the reference frame is inertial."
    graph_rules:
    - id: Pinitial_graph
      when: 'true'
      status: info
      text:
        es: "En el SVG, Pinitial es la longitud total del vector resultante en el estado pre-interacción."
        en: "In the SVG, Pinitial is the total length of the resultant vector in the pre-interaction state."
    likely_errors:
    - id: Pinitial_errors
      when: 'true'
      status: warning
      text:
        es: "Error común: olvidar el signo de las velocidades iniciales al calcular Pinitial, especialmente cuando los cuerpos se mueven en sentidos contrarios."
        en: "Common error: forgetting the sign of initial velocities when calculating Pinitial, especially when bodies move in opposite directions."
    next_step_rules:
    - id: Pinitial_next
      when: 'true'
      status: tip
      text:
        es: "Usa Pinitial como comprobación final: si Pfinal ≠ Pinitial, busca la fuerza externa que causó el cambio."
        en: "Use Pinitial as a final check: if Pfinal ≠ Pinitial, find the external force that caused the change."

  fuerza_externa_neta:
    summary_rules:
    - id: fuerza_externa_neta_summary
      when: 'true'
      status: info
      text:
        es: "La fuerza externa neta determina si el sistema está aislado: si es cero, el momento total se conserva."
        en: "The net external force determines if the system is isolated: if zero, total momentum is conserved."
    physical_reading_rules:
    - id: fuerza_externa_neta_zero
      when: 'result == 0'
      status: ok
      text:
        es: "Fuerza externa nula: el sistema está aislado y el principio de conservación es aplicable directamente."
        en: "Zero external force: the system is isolated and the conservation principle applies directly."
    - id: fuerza_externa_neta_nonzero
      when: 'result != 0'
      status: warning
      text:
        es: "Fuerza externa no nula: el momento del sistema varía; usa el teorema impulso-momento para cuantificar el efecto."
        en: "Non-zero external force: the system's momentum changes; use the impulse-momentum theorem to quantify the effect."
    coherence_rules:
    - id: fuerza_externa_neta_coherence
      when: 'true'
      status: ok
      text:
        es: "La fuerza externa neta es la suma vectorial de todas las fuerzas que actúan desde fuera del contorno del sistema."
        en: "The net external force is the vector sum of all forces acting from outside the system boundary."
    model_validity_rules:
    - id: fuerza_externa_neta_validity
      when: 'true'
      status: ok
      text:
        es: "Verificar que no se han incluido fuerzas internas (par acción-reacción entre partes del sistema) en el cálculo."
        en: "Verify that internal forces (action-reaction pairs between system parts) have not been included in the calculation."
    graph_rules:
    - id: fuerza_externa_neta_graph
      when: 'true'
      status: info
      text:
        es: "En el DCL, las flechas de fuerza externa apuntan desde fuera del contorno; su suma vectorial es Fext."
        en: "In the DCL, external force arrows point from outside the boundary; their vector sum is Fext."
    likely_errors:
    - id: fuerza_externa_neta_errors
      when: 'true'
      status: warning
      text:
        es: "Error de frontera: incluir la fuerza de reacción entre los dos cuerpos como fuerza externa en lugar de reconocerla como fuerza interna."
        en: "Boundary error: including the reaction force between the two bodies as an external force instead of recognizing it as an internal force."
    next_step_rules:
    - id: fuerza_externa_neta_next
      when: 'true'
      status: tip
      text:
        es: "Si Fext ≠ 0 pero es pequeña durante un tiempo muy corto (colisión), puede ser despreciable frente a las fuerzas internas; evalúa el impulso externo total."
        en: "If Fext ≠ 0 but is small during a very short time (collision), it may be negligible compared to internal forces; evaluate the total external impulse."

  momento_lineal_total:
    summary_rules:
    - id: momento_lineal_total_summary
      when: 'true'
      status: info
      text:
        es: "El momento lineal total cuantifica el transporte de inercia del sistema completo; es la magnitud que se conserva cuando el sistema está aislado."
        en: "Total linear momentum quantifies the inertia transport of the complete system; it is the quantity conserved when the system is isolated."
    physical_reading_rules:
    - id: momento_lineal_total_physical
      when: 'true'
      status: info
      text:
        es: "El momento total se calcula como suma de los momentos individuales; si el sistema está aislado, este valor no cambia con el tiempo."
        en: "Total momentum is calculated as the sum of individual momenta; if the system is isolated, this value does not change over time."
    coherence_rules:
    - id: momento_lineal_total_coherence
      when: 'true'
      status: ok
      text:
        es: "Verifica que P_total = Σ(mi·vi) sumando todos los componentes del sistema con sus signos correctos."
        en: "Verify that P_total = Σ(mi·vi) by summing all system components with their correct signs."
    model_validity_rules:
    - id: momento_lineal_total_validity
      when: 'true'
      status: ok
      text:
        es: "Válido en un marco de referencia inercial cuando todas las masas y velocidades están bien definidas."
        en: "Valid in an inertial reference frame when all masses and velocities are well-defined."
    graph_rules:
    - id: momento_lineal_total_graph
      when: 'true'
      status: info
      text:
        es: "En el diagrama SVG, el vector de momento total es el resultado de la suma vectorial de todos los momentos individuales."
        en: "In the SVG diagram, the total momentum vector is the result of the vector sum of all individual momenta."
    likely_errors:
    - id: momento_lineal_total_errors
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: sumar solo los módulos de los momentos en lugar de sus proyecciones con signo correcto."
        en: "Frequent error: summing only the magnitudes of momenta instead of their projections with correct sign."
    next_step_rules:
    - id: momento_lineal_total_next
      when: 'true'
      status: tip
      text:
        es: "Conserva el momento total como restricción para despejar velocidades desconocidas en colisiones o explosiones."
        en: "Use the conserved total momentum as a constraint to solve for unknown velocities in collisions or explosions."

  v:
    summary_rules:
    - id: v_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad genérica v de un cuerpo determina su momento lineal individual p = m·v."
        en: "The generic velocity v of a body determines its individual linear momentum p = m·v."
    physical_reading_rules:
    - id: v_physical
      when: 'true'
      status: info
      text:
        es: "El signo de v indica la dirección del movimiento; positivo en la dirección convencional, negativo en la opuesta."
        en: "The sign of v indicates the direction of motion; positive in the conventional direction, negative in the opposite."
    coherence_rules:
    - id: v_coherence
      when: 'true'
      status: ok
      text:
        es: "Verificar que v se ha despejado correctamente de p = m·v dividiendo el momento entre la masa."
        en: "Verify that v has been correctly solved from p = m·v by dividing momentum by mass."
    model_validity_rules:
    - id: v_validity
      when: 'true'
      status: ok
      text:
        es: "Válido en mecánica clásica cuando v << c (velocidad de la luz); para velocidades relativistas usar p = γmv."
        en: "Valid in classical mechanics when v << c (speed of light); for relativistic speeds use p = γmv."
    graph_rules:
    - id: v_graph
      when: 'true'
      status: info
      text:
        es: "El vector velocidad v apunta en la dirección del movimiento del cuerpo; su módulo determina la longitud del vector de momento."
        en: "The velocity vector v points in the direction of body motion; its magnitude determines the length of the momentum vector."
    likely_errors:
    - id: v_errors
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: confundir velocidad con rapidez al despejar v de p=mv; el resultado debe incluir signo."
        en: "Frequent error: confusing velocity with speed when solving v from p=mv; the result must include sign."
    next_step_rules:
    - id: v_next
      when: 'true'
      status: tip
      text:
        es: "Con v conocido, calcula p=mv para cada cuerpo y suma para obtener el momento total del sistema."
        en: "With v known, calculate p=mv for each body and sum to obtain the total momentum of the system."

  m:
    summary_rules:
    - id: m_summary
      when: 'true'
      status: info
      text:
        es: "La masa m es el parámetro inercial del cuerpo; junto a v, determina su momento lineal p = m·v."
        en: "Mass m is the inertial parameter of the body; together with v, it determines its linear momentum p = m·v."
    physical_reading_rules:
    - id: m_physical
      when: 'true'
      status: info
      text:
        es: "Una masa mayor implica mayor momento lineal para la misma velocidad; determina la resistencia del cuerpo a cambios de movimiento."
        en: "A larger mass implies greater linear momentum for the same velocity; it determines the body's resistance to changes in motion."
    coherence_rules:
    - id: m_coherence
      when: 'true'
      status: ok
      text:
        es: "La masa se despeja de p = m·v dividiendo el momento entre la velocidad; verificar unidades (kg)."
        en: "Mass is solved from p = m·v by dividing momentum by velocity; verify units (kg)."
    model_validity_rules:
    - id: m_validity
      when: 'true'
      status: ok
      text:
        es: "En mecánica clásica, la masa se considera constante; en sistemas con pérdida de masa (cohetes), se requiere la ecuación de Tsiolkovsky."
        en: "In classical mechanics, mass is considered constant; in systems with mass loss (rockets), the Tsiolkovsky equation is required."
    graph_rules:
    - id: m_graph
      when: 'true'
      status: info
      text:
        es: "La masa no aparece directamente en los gráficos de momento, pero escala la longitud de los vectores momento para cada cuerpo."
        en: "Mass does not appear directly in momentum graphs, but it scales the length of momentum vectors for each body."
    likely_errors:
    - id: m_errors
      when: 'true'
      status: warning
      text:
        es: "Error habitual: confundir la masa genérica m con la masa total del sistema m1+m2 en problemas de dos cuerpos."
        en: "Common error: confusing the generic mass m with the total system mass m1+m2 in two-body problems."
    next_step_rules:
    - id: m_next
      when: 'true'
      status: tip
      text:
        es: "Con m despejado de p=mv, verifica que la masa sea positiva y consistente con el contexto del problema."
        en: "With m solved from p=mv, verify that mass is positive and consistent with the problem context."

  v1i:
    summary_rules:
    - id: v1i_summary
      when: 'true'
      status: info
      text:
        es: "La velocidad inicial del cuerpo 1 es un dato de entrada clave para calcular el momento total inicial del sistema."
        en: "The initial velocity of body 1 is a key input to calculate the initial total momentum of the system."
    physical_reading_rules:
    - id: v1i_physical
      when: 'true'
      status: info
      text:
        es: "El signo de v1i define la dirección convencional positiva; todos los demás vectores del problema deben referenciarse a esta elección."
        en: "The sign of v1i defines the conventional positive direction; all other vectors in the problem must be referenced to this choice."
    coherence_rules:
    - id: v1i_coherence
      when: 'true'
      status: ok
      text:
        es: "Verificar que v1i esté expresado en el mismo sistema de referencia que v2i para evitar errores de signo en Pinitial."
        en: "Verify that v1i is expressed in the same reference frame as v2i to avoid sign errors in Pinitial."
    model_validity_rules:
    - id: v1i_validity
      when: 'true'
      status: ok
      text:
        es: "v1i debe ser conocido como dato del problema; si no está dado, es posible despejarlo de la conservación si se conocen todos los estados finales."
        en: "v1i must be known as problem data; if not given, it can be solved from conservation if all final states are known."
    graph_rules:
    - id: v1i_graph
      when: 'true'
      status: info
      text:
        es: "En el DCL, la flecha de v1i apunta hacia la derecha si es positivo; su longitud es proporcional al módulo."
        en: "In the DCL, the v1i arrow points right if positive; its length is proportional to the magnitude."
    likely_errors:
    - id: v1i_errors
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: asumir que v1i y v2i tienen la misma dirección cuando el problema no lo especifica; revisar el enunciado."
        en: "Frequent error: assuming v1i and v2i have the same direction when the problem does not specify it; review the statement."
    next_step_rules:
    - id: v1i_next
      when: 'true'
      status: tip
      text:
        es: "Con v1i y v2i definidos, calcula Pinitial = m1·v1i + m2·v2i antes de plantear la ecuación de conservación."
        en: "With v1i and v2i defined, calculate Pinitial = m1·v1i + m2·v2i before setting up the conservation equation."
`;export{e as default};
