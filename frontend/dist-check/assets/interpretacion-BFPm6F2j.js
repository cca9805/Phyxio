const e=`version: 2
id: interpretacion-sistemas-inerciales
leaf_id: sistemas-inerciales
nombre:
  es: Interpretacion de sistemas inerciales
  en: Interpretation of inertial frames
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: sistemas-de-referencia
  ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/sistemas-inerciales
dependencies:
  formulas:
  - criterio_inercial_primera_ley
  - segunda_ley_newton_SRI
  - transformacion_galileana_velocidad
  - invariancia_aceleracion_galileana
  magnitudes:
  - F_neta
  - m
  - a
  - v
  - V_rel
  - t
  - a_obs2
  - v_obs1
  - v_obs2
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
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  F_neta:
    summary_rules:
    - id: F_neta_summary
      when: "true"
      status: info
      text:
        es: F_neta resume el balance real de fuerzas e indica si el marco describe un movimiento sin aceleracion espuria.
        en: F_neta summarizes the real force balance and indicates whether the frame describes motion without spurious acceleration.
    coherence_rules:
    - id: F_neta_coherence
      when: "true"
      status: ok
      text:
        es: La direccion de F_neta debe ser compatible con la direccion de a cuando el marco es inercial.
        en: The direction of F_neta must be compatible with the direction of a when the frame is inertial.
    physical_reading_rules:
    - id: F_neta_physical
      when: "true"
      status: info
      text:
        es: F_neta representa la causa real del cambio de movimiento; si es cero y aun aparece aceleracion, el problema apunta a un marco no inercial o a una fuerza omitida.
        en: F_neta represents the real cause of the motion change; if it is zero and acceleration still appears, the problem points to a non-inertial frame or to a missing force.
    model_validity_rules:
    - id: F_neta_validity
      when: "true"
      status: ok
      text:
        es: Interpreta F_neta solo despues de validar que el observador puede usar segunda_ley_newton_SRI.
        en: Interpret F_neta only after validating that the observer may use segunda_ley_newton_SRI.
    graph_rules:
    - id: F_neta_graph
      when: "true"
      status: info
      text:
        es: El grafico debe mostrar si las fuerzas reales se compensan o dejan una resultante visible.
        en: The graph must show whether real forces cancel or leave a visible resultant.
    likely_errors:
    - id: F_neta_warn
      when: "true"
      status: warning
      text:
        es: No confundas F_neta = 0 con v = 0; ausencia de fuerza neta significa ausencia de aceleracion, no ausencia de movimiento.
        en: Do not confuse F_neta = 0 with v = 0; zero net force means zero acceleration, not zero motion.
    next_step_rules:
    - id: F_neta_next
      when: "true"
      status: info
      text:
        es: Usa F_neta para decidir si debes pasar a a con Newton o a un cambio de observador con velocidades.
        en: Use F_neta to decide whether to move to a through Newton or to an observer change through velocities.
  a:
    summary_rules:
    - id: a_summary
      when: "true"
      status: info
      text:
        es: a es la respuesta dinamica que todos los observadores inerciales deben compartir.
        en: a is the dynamical response that all inertial observers must share.
    coherence_rules:
    - id: a_coherence
      when: "true"
      status: ok
      text:
        es: Si F_neta no cambia de signo ni de sentido, a tampoco deberia hacerlo en el mismo eje.
        en: If F_neta does not change sign or direction, a should not either on the same axis.
    physical_reading_rules:
    - id: a_physical
      when: "true"
      status: info
      text:
        es: "a no es una opinion del observador: es la huella comun de las fuerzas reales cuando el marco es inercial."
        en: "a is not an observer's opinion: it is the common trace of real forces when the frame is inertial."
    model_validity_rules:
    - id: a_validity
      when: "true"
      status: ok
      text:
        es: Si el marco acelera por si mismo, la lectura de a deja de pertenecer al leaf tal como esta formulado.
        en: If the frame accelerates on its own, the reading of a no longer belongs to the leaf as formulated.
    graph_rules:
    - id: a_graph
      when: "true"
      status: info
      text:
        es: El grafico debe dejar claro que la aceleracion aparece alineada con la resultante real.
        en: The graph must make clear that acceleration appears aligned with the real resultant.
    likely_errors:
    - id: a_warn
      when: "true"
      status: warning
      text:
        es: Un cambio de observador inercial no crea una a nueva; revisa si estas mezclando velocidad relativa con aceleracion.
        en: An inertial observer change does not create a new a; check whether you are mixing relative velocity with acceleration.
    next_step_rules:
    - id: a_next
      when: "true"
      status: info
      text:
        es: Compara a con a_obs2 para verificar la invariancia galileana del problema.
        en: Compare a with a_obs2 to verify Galilean invariance in the problem.
  m:
    summary_rules:
    - id: m_summary
      when: "true"
      status: info
      text:
        es: m fija cuanta aceleracion produce una misma F_neta en un marco inercial.
        en: m fixes how much acceleration the same F_neta produces in an inertial frame.
    coherence_rules:
    - id: m_coherence
      when: "true"
      status: ok
      text:
        es: m no debe cambiar al pasar de un observador inercial a otro.
        en: m should not change when moving from one inertial observer to another.
    physical_reading_rules:
    - id: m_physical
      when: "true"
      status: info
      text:
        es: m mide la inercia del cuerpo, no una propiedad del marco de referencia.
        en: m measures the body's inertia, not a property of the reference frame.
    model_validity_rules:
    - id: m_validity
      when: "true"
      status: ok
      text:
        es: La interpretacion usual usa m constante; si la masa cambia, el problema ya no es el caso simple del leaf.
        en: The usual interpretation assumes constant m; if mass changes, the problem is no longer the simple case of the leaf.
    graph_rules:
    - id: m_graph
      when: "true"
      status: info
      text:
        es: El grafico puede tratar m como dato fijo que escala la respuesta dinamica.
        en: The graph may treat m as a fixed input scaling the dynamical response.
    likely_errors:
    - id: m_warn
      when: "true"
      status: warning
      text:
        es: No interpretes m como si dependiera del observador galileano.
        en: Do not interpret m as if it depended on the Galilean observer.
    next_step_rules:
    - id: m_next
      when: "true"
      status: info
      text:
        es: Con m y F_neta, pasa a la lectura de a.
        en: With m and F_neta, move to the reading of a.
  v_obs1:
    summary_rules:
    - id: v_obs1_summary
      when: "true"
      status: info
      text:
        es: v_obs1 es la velocidad medida por un observador concreto, no una velocidad absoluta del universo.
        en: v_obs1 is the velocity measured by one specific observer, not an absolute velocity of the universe.
    coherence_rules:
    - id: v_obs1_coherence
      when: "true"
      status: ok
      text:
        es: v_obs1 debe conectarse con v_obs2 mediante V_rel, no mediante una fuerza nueva.
        en: v_obs1 must connect to v_obs2 through V_rel, not through a new force.
    physical_reading_rules:
    - id: v_obs1_physical
      when: "true"
      status: info
      text:
        es: v_obs1 cambia cuando cambia el observador, pero ese cambio no altera la causa fisica del movimiento.
        en: v_obs1 changes when the observer changes, but that change does not alter the physical cause of motion.
    model_validity_rules:
    - id: v_obs1_validity
      when: "true"
      status: ok
      text:
        es: Interpreta v_obs1 con Galileo solo si el marco del segundo observador mantiene V_rel constante.
        en: Interpret v_obs1 with Galileo only if the second observer's frame keeps V_rel constant.
    graph_rules:
    - id: v_obs1_graph
      when: "true"
      status: info
      text:
        es: El grafico debe mostrar que dos observadores pueden asignar velocidades distintas al mismo movil.
        en: The graph must show that two observers may assign different velocities to the same body.
    likely_errors:
    - id: v_obs1_warn
      when: "true"
      status: warning
      text:
        es: No tomes v_obs1 como prueba de que el marco 2 sea no inercial; una velocidad distinta por si sola no demuestra nada.
        en: Do not take v_obs1 as proof that frame 2 is non-inertial; a different velocity alone proves nothing.
    next_step_rules:
    - id: v_obs1_next
      when: "true"
      status: info
      text:
        es: Usa v_obs1 junto con V_rel para reconstruir v_obs2.
        en: Use v_obs1 together with V_rel to reconstruct v_obs2.
  V_rel:
    summary_rules:
    - id: V_rel_summary
      when: "true"
      status: info
      text:
        es: V_rel es el parametro que cambia la descripcion cinematica entre dos marcos inerciales.
        en: V_rel is the parameter that changes the kinematic description between two inertial frames.
    coherence_rules:
    - id: V_rel_coherence
      when: "true"
      status: ok
      text:
        es: Si V_rel no es constante, la lectura ya no pertenece al modelo galileano simple del leaf.
        en: If V_rel is not constant, the reading no longer belongs to the leaf's simple Galilean model.
    physical_reading_rules:
    - id: V_rel_physical
      when: "true"
      status: info
      text:
        es: V_rel no es una fuerza ni una aceleracion; es la velocidad uniforme con la que un observador se desplaza respecto a otro.
        en: V_rel is not a force or an acceleration; it is the uniform speed with which one observer moves relative to another.
    model_validity_rules:
    - id: V_rel_validity
      when: "true"
      status: ok
      text:
        es: Solo usa V_rel para transformar velocidades si el cambio de marco no incluye giro ni frenado.
        en: Use V_rel to transform velocities only if the frame change includes neither rotation nor braking.
    graph_rules:
    - id: V_rel_graph
      when: "true"
      status: info
      text:
        es: El grafico debe representar V_rel como desplazamiento uniforme del observador, no como interaccion sobre el cuerpo.
        en: The graph must represent V_rel as uniform observer motion, not as an interaction on the body.
    likely_errors:
    - id: V_rel_warn
      when: "true"
      status: warning
      text:
        es: No sustituyas V_rel dentro de F = ma; pertenece al cambio de observador, no al balance de fuerzas reales.
        en: Do not substitute V_rel inside F = ma; it belongs to observer change, not to the balance of real forces.
    next_step_rules:
    - id: V_rel_next
      when: "true"
      status: info
      text:
        es: Con V_rel ya identificado, compara v_obs1 y v_obs2 antes de volver a la dinamica.
        en: Once V_rel is identified, compare v_obs1 and v_obs2 before returning to the dynamics.
  a_obs2:
    summary_rules:
    - id: a_obs2_summary
      when: "true"
      status: info
      text:
        es: a_obs2 es la prueba mas directa de que dos observadores inerciales comparten la misma dinamica.
        en: a_obs2 is the most direct proof that two inertial observers share the same dynamics.
    coherence_rules:
    - id: a_obs2_coherence
      when: "true"
      status: ok
      text:
        es: a_obs2 debe coincidir con a; si no coincide, revisa la inercialidad del marco o el balance real de fuerzas.
        en: a_obs2 must match a; if it does not, review frame inertiality or the real force balance.
    physical_reading_rules:
    - id: a_obs2_physical
      when: "true"
      status: info
      text:
        es: Cuando a_obs2 = a, el segundo observador no esta cambiando la causa del fenomeno, solo su descripcion de velocidad y posicion.
        en: When a_obs2 = a, the second observer is not changing the cause of the phenomenon, only its velocity and position description.
    model_validity_rules:
    - id: a_obs2_validity
      when: "true"
      status: ok
      text:
        es: Si a_obs2 difiere de a, conviene abandonar el modelo inercial y revisar si hay aceleracion del marco.
        en: If a_obs2 differs from a, it is time to leave the inertial model and check for frame acceleration.
    graph_rules:
    - id: a_obs2_graph
      when: "true"
      status: info
      text:
        es: El grafico debe dejar visible la igualdad entre aceleraciones aunque las velocidades observadas sean distintas.
        en: The graph must make the equality between accelerations visible even when the observed velocities differ.
    likely_errors:
    - id: a_obs2_warn
      when: "true"
      status: warning
      text:
        es: No derives a_obs2 restando directamente velocidades de marcos distintos sin pasar por la idea de invariancia.
        en: Do not derive a_obs2 by directly subtracting velocities from different frames without using the invariance idea.
    next_step_rules:
    - id: a_obs2_next
      when: "true"
      status: info
      text:
        es: Usa la igualdad a_obs2 = a para confirmar que el problema sigue dentro de sistemas inerciales.
        en: Use the equality a_obs2 = a to confirm that the problem still belongs to inertial frames.
`;export{e as default};
