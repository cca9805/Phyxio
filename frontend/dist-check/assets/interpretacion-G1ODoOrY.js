const e=`version: 5
id: interpretacion-plano-inclinado
leaf_id: plano-inclinado
scope: local
nombre:
  es: "Interpretación Experta del Plano Inclinado"
  en: "Expert Interpretation of the Inclined Plane"

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
    title: { es: "Resumen de la ventaja mecánica", en: "Mechanical advantage summary" }
  physical_reading:
    title: { es: "Lectura física del balance de fuerzas", en: "Physical reading of the force balance" }
  coherence:
    title: { es: "Validación de coherencia sistémica", en: "Systemic coherence validation" }
  model_validity:
    title: { es: "Límites del modelo y asunciones", en: "Model limits and assumptions" }
  graph_reading:
    title: { es: "Interpretación técnica del diagrama", en: "Technical diagram interpretation" }
  likely_errors:
    title: { es: "Detección proactiva de errores conceptuales", en: "Proactive conceptual error detection" }
  next_step:
    title: { es: "Siguiente paso sugerido", en: "Suggested next step" }

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [m, g, theta, L, h, W, Wpar, Wperp, N, mu, f, a, VM, eta, P]
  formulas: [ley_plano_ideal, ventaja_mecanica_geometria, descomposicion_paralela, normal_plano, fuerza_rozamiento, rendimiento_plano, relacion_h_L, peso_total, aceleracion_galileo, aceleracion_rampa, balance_energia_rampa, condicion_deslizamiento_critico, ventaja_mecanica_trig]

targets:
  P:
    summary_rules:
      - id: p-sum
        when: "P > 0"
        status: success
        text:
          es: "El esfuerzo [[P]] representa la fuerza externa necesaria para subir la carga."
          en: "The effort [[P]] represents the external force needed to lift the load."
    physical_reading_rules:
      - id: p-read
        when: "true"
        status: info
        text:
          es: "El valor de [[P]] es menor que el peso [[W]] porque la rampa desvía parte de la carga hacia el soporte de la Normal [[N]], reduciendo el requerimiento motriz."
          en: "The value of [[P]] is less than the weight [[W]] because the ramp diverts part of the load to the Normal [[N]] support, reducing the driving requirement."
    coherence_rules:
      - id: p-coh
        when: "P > W"
        status: warning
        text:
          es: "Existe una incoherencia de diseño: estás aplicando más fuerza que si levantaras el objeto verticalmente, lo que anula la ventaja de la máquina."
          en: "There is a design inconsistency: you are applying more force than if you lifted the object vertically, nullifying the machine's advantage."
    model_validity_rules:
      - id: p-val
        when: "true"
        status: success
        text:
          es: "El modelo asume que la fuerza [[P]] se aplica de forma constante y paralela a la superficie."
          en: "The model assumes that the force [[P]] is applied constantly and parallel to the surface."
    graph_rules:
      - id: p-graph
        when: "true"
        status: info
        text:
          es: "Se visualiza como un vector rampa arriba en el diagrama de cuerpo libre, indicando el sentido del esfuerzo."
          en: "It is visualized as a vector up the ramp in the free body diagram, indicating the direction of effort."
    likely_errors:
      - id: p-err
        when: "P < 1"
        status: error
        text:
          es: "Error de magnitud: el valor es demasiado bajo para la masa dada. Verifica si has confundido la masa [[m]] con el peso [[W]] al operar."
          en: "Magnitude error: the value is too low for the given mass. Check if you confused mass [[m]] with weight [[W]] during calculation."
    next_step_rules:
      - id: p-next
        when: "true"
        status: info
        text:
          es: "Calcula el trabajo realizado multiplicando el esfuerzo [[P]] por el recorrido [[L]] de la rampa."
          en: "Calculate the work done by multiplying the effort [[P]] by the ramp distance [[L]]."

  VM:
    summary_rules:
      - id: vm-sum
        when: "VM > 1"
        status: success
        text:
          es: "La ventaja mecánica [[VM]] confirma que el sistema multiplica la fuerza de entrada."
          en: "The mechanical advantage [[VM]] confirms that the system multiplies the input force."
    physical_reading_rules:
      - id: vm-read
        when: "true"
        status: info
        text:
          es: "Este factor indica cuántas veces se reduce el esfuerzo teórico debido a la inclinación geométrica de la rampa."
          en: "This factor indicates how many times the theoretical effort is reduced due to the geometric incline of the ramp."
    coherence_rules:
      - id: vm-coh
        when: "VM < 1"
        status: error
        text:
          es: "Incoherencia geométrica grave: la ventaja mecánica no puede ser inferior a la unidad en un plano inclinado."
          en: "Serious geometric inconsistency: mechanical advantage cannot be less than unity on an inclined plane."
    model_validity_rules:
      - id: vm-val
        when: "true"
        status: success
        text:
          es: "Válido para configuraciones rígidas donde la longitud es mayor que la altura."
          en: "Valid for rigid configurations where length is greater than height."
    graph_rules:
      - id: vm-graph
        when: "true"
        status: info
        text:
          es: "Se deduce visualmente comparando la longitud de la hipotenusa [[L]] con el cateto vertical [[h]]."
          en: "It is visually deduced by comparing the length of the hypotenuse [[L]] with the vertical leg [[h]]."
    likely_errors:
      - id: vm-err
        when: "VM == 1"
        status: warning
        text:
          es: "Confusión de diseño: un valor de 1 implica una rampa vertical (90°), lo que no ofrece ninguna ventaja mecánica real."
          en: "Design confusion: a value of 1 implies a vertical ramp (90°), which offers no real mechanical advantage."
    next_step_rules:
      - id: vm-next
        when: "true"
        status: info
        text:
          es: "Analiza cómo el rozamiento [[f]] reduce la ventaja mecánica práctica hacia un valor real menor."
          en: "Analyze how friction [[f]] reduces the practical mechanical advantage towards a lower actual value."

  Wpar:
    summary_rules:
      - id: wpar-sum
        when: "true"
        status: success
        text:
          es: "La componente paralela [[Wpar]] es la fracción del peso que causa la tendencia al deslizamiento."
          en: "The parallel component [[Wpar]] is the fraction of weight that causes the sliding tendency."
    physical_reading_rules:
      - id: wpar-read
        when: "true"
        status: info
        text:
          es: "Representa el efecto directo de la gravedad tirando del objeto hacia la base de la rampa."
          en: "Represents the direct effect of gravity pulling the object towards the ramp's base."
    coherence_rules:
      - id: wpar-coh
        when: "Wpar > W"
        status: error
        text:
          es: "Error matemático: una componente vectorial nunca puede ser mayor que el vector original [[W]]."
          en: "Mathematical error: a vector component can never be greater than the original vector [[W]]."
    model_validity_rules:
      - id: wpar-val
        when: "true"
        status: success
        text:
          es: "Asume que la masa se concentra en el centro de gravedad del bloque."
          en: "Assumes the mass is concentrated at the block's center of gravity."
    graph_rules:
      - id: wpar-graph
        when: "true"
        status: info
        text:
          es: "Vector proyectado sobre el eje X del sistema de referencia local del plano."
          en: "Vector projected on the X-axis of the plane's local reference system."
    likely_errors:
      - id: wpar-err
        when: "Wpar == 0"
        status: warning
        text:
          es: "Error de interpretación: un valor nulo implica un plano horizontal donde no hay tendencia de caída."
          en: "Interpretation error: a null value implies a horizontal plane where there is no falling tendency."
    next_step_rules:
      - id: wpar-next
        when: "true"
        status: info
        text:
          es: "Suma [[Wpar]] con el rozamiento [[f]] para hallar el esfuerzo neto necesario."
          en: "Add [[Wpar]] to friction [[f]] to find the required net effort."

  Wperp:
    summary_rules:
      - id: wperp-sum
        when: "true"
        status: success
        text:
          es: "La componente perpendicular [[Wperp]] presiona al objeto contra la superficie de la rampa."
          en: "The perpendicular component [[Wperp]] presses the object against the ramp's surface."
    physical_reading_rules:
      - id: wperp-read
        when: "true"
        status: info
        text:
          es: "Esta fuerza causa la aparición de la Normal [[N]] por el principio de acción y reacción."
          en: "This force causes the appearance of the Normal [[N]] by the action-reaction principle."
    coherence_rules:
      - id: wperp-coh
        when: "Wperp > W"
        status: error
        text:
          es: "Incoherencia vectorial: la componente normal al plano ha superado al peso total."
          en: "Vectorial inconsistency: the normal component to the plane has exceeded the total weight."
    model_validity_rules:
      - id: wperp-val
        when: "true"
        status: success
        text:
          es: "Depende exclusivamente del coseno del ángulo de inclinación [[theta]]."
          en: "Depends exclusively on the cosine of the incline angle [[theta]]."
    graph_rules:
      - id: wperp-graph
        when: "true"
        status: info
        text:
          es: "Vector proyectado sobre el eje Y local, perpendicular a la superficie de contacto."
          en: "Vector projected on the local Y-axis, perpendicular to the contact surface."
    likely_errors:
      - id: wperp-err
        when: "theta == 0 && Wperp != W"
        status: error
        text:
          es: "Error de cálculo: en plano horizontal, el peso perpendicular debe ser idéntico al peso total."
          en: "Calculation error: on a horizontal plane, perpendicular weight must be identical to total weight."
    next_step_rules:
      - id: wperp-next
        when: "true"
        status: info
        text:
          es: "Utiliza este valor para determinar la fuerza de rozamiento máxima disponible."
          en: "Use this value to determine the maximum available friction force."

  N:
    summary_rules:
      - id: n-sum
        when: "true"
        status: success
        text:
          es: "La fuerza normal [[N]] es la reacción de soporte que evita que el objeto atraviese el plano."
          en: "The normal force [[N]] is the support reaction that prevents the object from passing through the plane."
    physical_reading_rules:
      - id: n-read
        when: "true"
        status: info
        text:
          es: "Es una consecuencia del contacto físico y compensa exactamente a la componente [[Wperp]]."
          en: "It is a consequence of physical contact and exactly offsets the [[Wperp]] component."
    coherence_rules:
      - id: n-coh
        when: "N > W"
        status: error
        text:
          es: "Física imposible: la normal en un plano inclinado pasivo no puede ser mayor que el peso."
          en: "Impossible physics: the normal force on a passive inclined plane cannot be greater than the weight."
    model_validity_rules:
      - id: n-val
        when: "true"
        status: success
        text:
          es: "Válido mientras el objeto no rebote ni se hunda en la superficie."
          en: "Valid as long as the object does not bounce or sink into the surface."
    graph_rules:
      - id: n-graph
        when: "true"
        status: info
        text:
          es: "Se dibuja saliendo del punto de contacto hacia afuera del plano."
          en: "It is drawn starting from the contact point and pointing away from the plane."
    likely_errors:
      - id: n-err
        when: "N == W"
        status: warning
        text:
          es: "Error conceptual: asumes que la normal es igual al peso, lo cual solo ocurre en planos horizontales."
          en: "Conceptual error: you assume the normal is equal to the weight, which only occurs on horizontal planes."
    next_step_rules:
      - id: n-next
        when: "true"
        status: info
        text:
          es: "Calcula el rozamiento dinámico multiplicando [[N]] por el coeficiente [[mu]]."
          en: "Calculate dynamic friction by multiplying [[N]] by the coefficient [[mu]]."

  f:
    summary_rules:
      - id: f-sum
        when: "true"
        status: info
        text:
          es: "El rozamiento [[f]] representa la resistencia disipativa al deslizamiento."
          en: "Friction [[f]] represents the dissipative resistance to sliding."
    physical_reading_rules:
      - id: f-read
        when: "true"
        status: info
        text:
          es: "Esta fuerza surge debido a las irregularidades microscópicas entre el bloque y la rampa."
          en: "This force arises due to microscopic irregularities between the block and the ramp."
    coherence_rules:
      - id: f-coh
        when: "f > P + W"
        status: warning
        text:
          es: "Rozamiento excesivo: verifica si el valor de [[mu]] introducido es realista para materiales comunes."
          en: "Excessive friction: check if the entered [[mu]] value is realistic for common materials."
    model_validity_rules:
      - id: f-val
        when: "true"
        status: success
        text:
          es: "Sigue el modelo de Coulomb para rozamiento seco e independiente del área."
          en: "Follows the Coulomb model for dry friction, independent of area."
    graph_rules:
      - id: f-graph
        when: "true"
        status: info
        text:
          es: "Vector paralelo a la superficie en sentido opuesto al movimiento inminente."
          en: "Vector parallel to the surface in the opposite direction of impending motion."
    likely_errors:
      - id: f-err
        when: "f < 0"
        status: error
        text:
          es: "Error de signo: el rozamiento nunca puede favorecer el movimiento espontáneamente."
          en: "Sign error: friction can never spontaneously favor motion."
    next_step_rules:
      - id: f-next
        when: "true"
        status: info
        text:
          es: "Calcula la pérdida de energía mecánica por calor debida a esta fuerza."
          en: "Calculate the mechanical energy loss as heat due to this force."

  eta:
    summary_rules:
      - id: eta-sum
        when: "eta <= 1"
        status: success
        text:
          es: "El rendimiento [[eta]] mide qué tan eficiente es la rampa como máquina simple."
          en: "Efficiency [[eta]] measures how efficient the ramp is as a simple machine."
    physical_reading_rules:
      - id: eta-read
        when: "true"
        status: info
        text:
          es: "Un valor bajo indica que gran parte del esfuerzo se pierde venciendo al rozamiento [[f]]."
          en: "A low value indicates that much of the effort is lost overcoming friction [[f]]."
    coherence_rules:
      - id: eta-coh
        when: "eta > 1"
        status: error
        text:
          es: "Imposibilidad física: el rendimiento nunca puede superar el 100% (violación de termodinámica)."
          en: "Physical impossibility: efficiency can never exceed 100% (thermodynamics violation)."
    model_validity_rules:
      - id: eta-val
        when: "true"
        status: success
        text:
          es: "Válido para procesos de elevación en régimen estable."
          en: "Valid for lifting processes in steady state."
    graph_rules:
      - id: eta-graph
        when: "true"
        status: info
        text:
          es: "Se manifiesta en la diferencia de longitud entre el vector de esfuerzo ideal y el real."
          en: "Manifested in the length difference between the ideal and actual effort vectors."
    likely_errors:
      - id: eta-err
        when: "eta < 0.2"
        status: warning
        text:
          es: "Pérdida crítica: el sistema es muy ineficiente; revisa el coeficiente [[mu]]."
          en: "Critical loss: the system is very inefficient; check the [[mu]] coefficient."
    next_step_rules:
      - id: eta-next
        when: "true"
        status: info
        text:
          es: "Propón lubricación o cambio de materiales para aumentar este valor."
          en: "Propose lubrication or material change to increase this value."

  h:
    summary_rules:
      - id: h-sum
        when: "true"
        status: success
        text:
          es: "La altura [[h]] es el objetivo vertical que se desea alcanzar."
          en: "The height [[h]] is the vertical goal to be reached."
    physical_reading_rules:
      - id: h-read
        when: "true"
        status: info
        text:
          es: "Causa el aumento directo de la energía potencial gravitatoria del objeto."
          en: "Causes the direct increase in the object's gravitational potential energy."
    coherence_rules:
      - id: h-coh
        when: "h > L"
        status: error
        text:
          es: "Error geométrico: el cateto vertical no puede ser más largo que la hipotenusa [[L]]."
          en: "Geometric error: the vertical leg cannot be longer than the hypotenuse [[L]]."
    model_validity_rules:
      - id: h-val
        when: "true"
        status: success
        text:
          es: "Referencia escalar desde la base hasta el punto más alto."
          en: "Scalar reference from the base to the highest point."
    graph_rules:
      - id: h-graph
        when: "true"
        status: info
        text:
          es: "Se representa como la línea vertical que cierra el triángulo de la rampa."
          en: "Represented as the vertical line closing the ramp triangle."
    likely_errors:
      - id: h-err
        when: "h == 0"
        status: warning
        text:
          es: "Configuración trivial: sin altura no hay trabajo útil realizado contra la gravedad."
          en: "Trivial setup: without height there is no useful work done against gravity."
    next_step_rules:
      - id: h-next
        when: "true"
        status: info
        text:
          es: "Calcula el ángulo [[theta]] usando la relación entre [[h]] y [[L]]."
          en: "Calculate the angle [[theta]] using the relationship between [[h]] and [[L]]."

  W:
    summary_rules:
      - id: w-sum
        when: "true"
        status: success
        text:
          es: "El peso [[W]] es la fuerza total con la que la Tierra atrae al bloque."
          en: "The weight [[W]] is the total force with which the Earth attracts the block."
    physical_reading_rules:
      - id: w-read
        when: "true"
        status: info
        text:
          es: "Es la causa raíz de todas las tensiones y esfuerzos en el sistema del plano."
          en: "It is the root cause of all tensions and efforts in the plane system."
    coherence_rules:
      - id: w-coh
        when: "W < 0"
        status: error
        text:
          es: "Error físico: el peso debe ser una magnitud positiva apuntando hacia el centro terrestre."
          en: "Physical error: weight must be a positive magnitude pointing towards the Earth's center."
    model_validity_rules:
      - id: w-val
        when: "true"
        status: success
        text:
          es: "Asume un campo gravitatorio uniforme y masa constante."
          en: "Assumes a uniform gravitational field and constant mass."
    graph_rules:
      - id: w-graph
        when: "true"
        status: success
        text:
          es: "Vector vertical (siempre hacia abajo) independientemente de la inclinación del plano."
          en: "Vertical vector (always downwards) regardless of the plane's incline."
    likely_errors:
      - id: w-err
        when: "W != m * g"
        status: error
        text:
          es: "Error de definición: el peso debe ser el producto de la masa [[m]] por la gravedad [[g]]."
          en: "Definition error: weight must be the product of mass [[m]] times gravity [[g]]."
    next_step_rules:
      - id: w-next
        when: "true"
        status: info
        text:
          es: "Descompón este vector en sus ejes paralelo y perpendicular para el análisis dinámico."
          en: "Decompose this vector into its parallel and perpendicular axes for dynamic analysis."

  a:
    summary_rules:
      - id: a-sum
        when: "true"
        status: success
        text:
          es: "La aceleración [[a]] indica la rapidez con la que el objeto cambia su estado de movimiento."
          en: "The acceleration [[a]] indicates how fast the object changes its state of motion."
    physical_reading_rules:
      - id: a-read
        when: "true"
        status: info
        text:
          es: "Es el efecto resultante de la fuerza neta actuando a lo largo de la rampa."
          en: "It is the resulting effect of the net force acting along the ramp."
    coherence_rules:
      - id: a-coh
        when: "a > g"
        status: error
        text:
          es: "Incoherencia dinámica: en una rampa pasiva, la aceleración no puede superar la caída libre."
          en: "Dynamic inconsistency: on a passive ramp, acceleration cannot exceed free fall."
    model_validity_rules:
      - id: a-val
        when: "true"
        status: success
        text:
          es: "Válido para movimiento rectilíneo sobre una superficie plana rígida."
          en: "Valid for rectilinear motion on a rigid flat surface."
    graph_rules:
      - id: a-graph
        when: "true"
        status: info
        text:
          es: "Se deduce de la pendiente de la curva en un gráfico de velocidad vs tiempo."
          en: "It is deduced from the slope of the curve in a velocity vs time graph."
    likely_errors:
      - id: a-err
        when: "a < 0"
        status: warning
        text:
          es: "Aviso de sentido: un valor negativo indica que el objeto está frenando o retrocediendo."
          en: "Direction warning: a negative value indicates that the object is braking or moving backwards."
    next_step_rules:
      - id: a-next
        when: "true"
        status: info
        text:
          es: "Usa la aceleración para predecir el tiempo que tardará en recorrer la longitud [[L]]."
          en: "Use the acceleration to predict the time it will take to travel the length [[L]]."

  mu:
    summary_rules:
      - id: mu-sum
        when: "true"
        status: success
        text:
          es: "El coeficiente [[mu]] cuantifica la interacción entre los materiales en contacto."
          en: "The coefficient [[mu]] quantifies the interaction between the materials in contact."
    physical_reading_rules:
      - id: mu-read
        when: "true"
        status: info
        text:
          es: "Causa la fuerza de rozamiento proporcionalmente a la presión normal [[N]]."
          en: "Causes the friction force proportionally to the normal pressure [[N]]."
    coherence_rules:
      - id: mu-coh
        when: "mu > 3"
        status: warning
        text:
          es: "Valor inusual: coeficientes tan altos solo se dan en superficies extremadamente adhesivas."
          en: "Unusual value: such high coefficients only occur on extremely adhesive surfaces."
    model_validity_rules:
      - id: mu-val
        when: "true"
        status: success
        text:
          es: "Simplificación macroscópica que ignora la temperatura y la velocidad relativa."
          en: "Macroscopic simplification that ignores temperature and relative speed."
    graph_rules:
      - id: mu-graph
        when: "true"
        status: info
        text:
          es: "Define el tamaño relativo del vector de fricción en comparación con el de soporte."
          en: "Defines the relative size of the friction vector compared to the support vector."
    likely_errors:
      - id: mu-err
        when: "mu < 0"
        status: error
        text:
          es: "Error físico grave: un coeficiente negativo implicaría creación de energía por contacto."
          en: "Serious physical error: a negative coefficient would imply energy creation by contact."
    next_step_rules:
      - id: mu-next
        when: "true"
        status: info
        text:
          es: "Compara el rozamiento estático con el dinámico para ver si el objeto llegará a moverse."
          en: "Compare static and dynamic friction to see if the object will actually move."

  m:
    summary_rules:
      - id: m-sum
        when: "true"
        status: success
        text:
          es: "La masa [[m]] es la cantidad de materia e inercia que posee el objeto."
          en: "Mass [[m]] is the amount of matter and inertia possessed by the object."
    physical_reading_rules:
      - id: m-read
        when: "true"
        status: info
        text:
          es: "Determina directamente la magnitud del peso [[W]] y la inercia ante cambios de movimiento."
          en: "Directly determines the magnitude of weight [[W]] and the inertia to motion changes."
    coherence_rules:
      - id: m-coh
        when: "m < 0.1"
        status: warning
        text:
          es: "Masa despreciable: a este nivel, efectos como el empuje del aire pueden ser relevantes."
          en: "Negligible mass: at this level, effects like air buoyancy may be relevant."
    model_validity_rules:
      - id: m-val
        when: "true"
        status: success
        text:
          es: "Asume que la masa es invariante durante todo el trayecto por la rampa."
          en: "Assumes that mass is invariant throughout the journey along the ramp."
    graph_rules:
      - id: m-graph
        when: "true"
        status: info
        text:
          es: "No se dibuja directamente, pero escala todos los vectores de fuerza del diagrama."
          en: "It is not drawn directly but scales all force vectors in the diagram."
    likely_errors:
      - id: m-err
        when: "m == 0"
        status: error
        text:
          es: "Física nula: sin masa no hay peso ni interacción dinámica posible."
          en: "Null physics: without mass there is no weight or possible dynamic interaction."
    next_step_rules:
      - id: m-next
        when: "true"
        status: info
        text:
          es: "Varía la masa para comprobar que la aceleración ideal es independiente de este valor."
          en: "Vary the mass to check that ideal acceleration is independent of this value."

  L:
    summary_rules:
      - id: l-sum
        when: "true"
        status: success
        text:
          es: "La longitud [[L]] es la distancia de recorrido sobre la superficie del plano."
          en: "Length [[L]] is the travel distance over the plane's surface."
    physical_reading_rules:
      - id: l-read
        when: "true"
        status: info
        text:
          es: "A mayor longitud para elevar a la misma altura, menor será el esfuerzo requerido."
          en: "Greater length to lift to the same height results in less required effort."
    coherence_rules:
      - id: l-coh
        when: "L < h"
        status: error
        text:
          es: "Incoherencia pitagórica: la hipotenusa [[L]] no puede ser menor que el cateto vertical [[h]]."
          en: "Pythagorean inconsistency: the hypotenuse [[L]] cannot be less than the vertical leg [[h]]."
    model_validity_rules:
      - id: l-val
        when: "true"
        status: success
        text:
          es: "Válido para rampas rectilíneas y uniformes."
          en: "Valid for rectilinear and uniform ramps."
    graph_rules:
      - id: l-graph
        when: "true"
        status: info
        text:
          es: "Se visualiza como la superficie inclinada sobre la que desliza el cuerpo."
          en: "Visualized as the inclined surface over which the body slides."
    likely_errors:
      - id: l-err
        when: "L == h"
        status: warning
        text:
          es: "Caso límite: la rampa es vertical; has eliminado la utilidad de la máquina simple."
          en: "Limit case: the ramp is vertical; you have removed the utility of the simple machine."
    next_step_rules:
      - id: l-next
        when: "true"
        status: info
        text:
          es: "Calcula el tiempo de tránsito basándote en esta distancia y la aceleración [[a]]."
          en: "Calculate transit time based on this distance and the acceleration [[a]]."

  g:
    summary_rules:
      - id: g-sum
        when: "true"
        status: success
        text:
          es: "La gravedad [[g]] es la aceleración de caída libre en el entorno local."
          en: "Gravity [[g]] is the free-fall acceleration in the local environment."
    physical_reading_rules:
      - id: g-read
        when: "true"
        status: info
        text:
          es: "Es el motor que genera el peso [[W]] al interactuar con la masa del objeto."
          en: "It is the engine that generates weight [[W]] by interacting with the object's mass."
    coherence_rules:
      - id: g-coh
        when: "g > 30"
        status: warning
        text:
          es: "Valor extremo: una gravedad tan alta sugiere un entorno no terrestre (estrella masiva)."
          en: "Extreme value: such high gravity suggests a non-terrestrial environment (massive star)."
    model_validity_rules:
      - id: g-val
        when: "true"
        status: success
        text:
          es: "Se asume constante en toda la altura de la rampa (campo uniforme)."
          en: "Assumed constant throughout the ramp's height (uniform field)."
    graph_rules:
      - id: g-graph
        when: "true"
        status: info
        text:
          es: "Indica la dirección hacia la cual apuntan todos los vectores de peso del sistema."
          en: "Indicates the direction in which all weight vectors of the system point."
    likely_errors:
      - id: g-err
        when: "g == 0"
        status: error
        text:
          es: "Física ausente: sin gravedad no hay peso y el plano inclinado pierde su función."
          en: "Absent physics: without gravity there is no weight and the inclined plane loses its function."
    next_step_rules:
      - id: g-next
        when: "true"
        status: info
        text:
          es: "Compara el movimiento en la Tierra con el de la Luna para ver el efecto de la gravedad."
          en: "Compare motion on Earth with that on the Moon to see the gravity effect."

  theta:
    summary_rules:
      - id: theta-sum
        when: "true"
        status: success
        text:
          es: "El ángulo [[theta]] define la inclinación de la rampa respecto a la horizontal."
          en: "The angle [[theta]] defines the ramp's incline relative to the horizontal."
    physical_reading_rules:
      - id: th-read
        when: "true"
        status: info
        text:
          es: "Determina cómo se reparte el peso entre las componentes motriz y de presión."
          en: "Determines how weight is split between driving and pressure components."
    coherence_rules:
      - id: th-coh
        when: "theta > 90"
        status: error
        text:
          es: "Ángulo inválido: la inclinación debe estar entre 0° y 90°."
          en: "Invalid angle: the incline must be between 0° and 90°."
    model_validity_rules:
      - id: th-val
        when: "true"
        status: success
        text:
          es: "Referencia angular base para todas las proyecciones trigonométricas."
          en: "Base angular reference for all trigonometric projections."
    graph_rules:
      - id: th-graph
        when: "true"
        status: info
        text:
          es: "Se visualiza como la apertura en la base del triángulo del plano."
          en: "Visualized as the opening at the base of the plane's triangle."
    likely_errors:
      - id: th-err
        when: "theta > 45 && mu > 1"
        status: warning
        text:
          es: "Aviso de diseño: a ángulos altos, el rozamiento puede ser insuficiente para retener la carga."
          en: "Design warning: at high angles, friction may be insufficient to hold the load."
    next_step_rules:
      - id: th-next
        when: "true"
        status: info
        text:
          es: "Encuentra el ángulo crítico a partir del cual el objeto empieza a deslizar solo."
          en: "Find the critical angle at which the object starts sliding by itself."
`;export{e as default};
