const e=`version: 2\r
id: interpretacion-teorema-trabajo-energia\r
leaf_id: teorema-trabajo-energia\r
nombre:\r
  es: Interpretacion del teorema trabajo-energia\r
  en: Interpretation of the work-energy theorem\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: trabajo-y-energia\r
  parent_id: fundamentos\r
  ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/fundamentos/teorema-trabajo-energia\r
dependencies:\r
  formulas:\r
  - variacion_energia_cinetica\r
  - teorema_trabajo_energia\r
  - trabajo_neto_desde_estados\r
  - velocidad_final_desde_trabajo_neto\r
  magnitudes:\r
  - Wnet\r
  - dK\r
  - Ki\r
  - Kf\r
  - m\r
  - vi\r
  - vf\r
output_contract:\r
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura estructural\r
      en: Structural reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  Wnet:\r
    summary_rules:\r
    - id: wnet_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Wnet resume el efecto conjunto de todas las fuerzas relevantes sobre el cambio de movimiento."\r
        en: "Wnet summarizes the combined effect of all relevant forces on the change of motion."\r
    physical_reading_rules:\r
    - id: wnet_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Wnet positiva aporta energia cinetica neta; Wnet negativa la extrae."\r
        en: "Positive Wnet adds net kinetic energy; negative Wnet removes it."\r
    coherence_rules:\r
    - id: wnet_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Wnet debe coincidir en signo y valor con dK si el teorema se aplico bien."\r
        en: "Wnet must match dK in sign and value if the theorem was applied correctly."\r
    model_validity_rules:\r
    - id: wnet_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "La validez exige incluir todas las fuerzas relevantes del proceso completo."\r
        en: "Validity requires including all relevant forces over the complete process."\r
    graph_rules:\r
    - id: wnet_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Aunque el leaf no declare grafico, la lectura correcta sigue siendo una comparacion por estados y balance global."\r
        en: "Even without a declared graph, the correct reading remains a state comparison and a global balance."\r
    likely_errors:\r
    - id: wnet_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error comun: atribuir Wnet solo a la fuerza mas visible y olvidar rozamiento, peso u otras contribuciones."\r
        en: "Common mistake: assigning Wnet only to the most visible force and forgetting friction, weight, or other contributions."\r
    next_step_rules:\r
    - id: wnet_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Tras hallar Wnet, decide si conviene descomponerla por trabajos parciales o cerrar ya el balance de estados."\r
        en: "After finding Wnet, decide whether to decompose it into partial works or close the state balance directly."\r
  dK:\r
    summary_rules:\r
    - id: dk_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "dK indica si el sistema gana, pierde o conserva energia cinetica entre el inicio y el final."\r
        en: "dK states whether the system gains, loses, or preserves kinetic energy between start and finish."\r
    physical_reading_rules:\r
    - id: dk_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "dK positiva suele leerse como aceleracion neta; dK negativa, como frenado o extraccion energetica."\r
        en: "Positive dK usually reads as net speeding up; negative dK as braking or energetic extraction."\r
    coherence_rules:\r
    - id: dk_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "dK debe ser Kf menos Ki usando el mismo sistema y la misma convencion de estados."\r
        en: "dK must be Kf minus Ki using the same system and the same state convention."\r
    model_validity_rules:\r
    - id: dk_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "La lectura es fiable si Ki y Kf pertenecen exactamente al mismo sistema fisico."\r
        en: "The reading is reliable if Ki and Kf belong to exactly the same physical system."\r
    graph_rules:\r
    - id: dk_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Piensa dK como salto entre dos niveles energeticos de estado."\r
        en: "Think of dK as the jump between two energetic state levels."\r
    likely_errors:\r
    - id: dk_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "No conviertas dK en modulo si el signo decide el sentido fisico del cambio."\r
        en: "Do not turn dK into a magnitude if the sign decides the physical direction of change."\r
    next_step_rules:\r
    - id: dk_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Si ya tienes dK, comprueba si el problema pide explicarla por Wnet o resolver una rapidez final."\r
        en: "If you already have dK, check whether the problem asks you to explain it through Wnet or solve for a final speed."\r
  Ki:\r
    summary_rules:\r
    - id: ki_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Ki fija el presupuesto energetico de partida del sistema."\r
        en: "Ki sets the system's starting energy budget."\r
    physical_reading_rules:\r
    - id: ki_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Un Ki grande no garantiza aceleracion; solo marca el estado inicial antes del balance."\r
        en: "A large Ki does not guarantee speeding up; it only marks the initial state before the balance."\r
    coherence_rules:\r
    - id: ki_coherence\r
      when: Ki >= 0\r
      status: ok\r
      text:\r
        es: "Ki no negativa, consistente con energia cinetica clasica."\r
        en: "Non-negative Ki, consistent with classical kinetic energy."\r
    model_validity_rules:\r
    - id: ki_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Ki debe corresponder al mismo sistema que despues se usa en Kf y Wnet."\r
        en: "Ki must correspond to the same system later used in Kf and Wnet."\r
    graph_rules:\r
    - id: ki_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Ki se interpreta como nivel inicial del presupuesto cinetico."\r
        en: "Ki is interpreted as the initial level of the kinetic budget."\r
    likely_errors:\r
    - id: ki_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: mezclar la rapidez inicial de un objeto con la masa de otro."\r
        en: "Common mistake: mixing the initial speed of one object with the mass of another."\r
    next_step_rules:\r
    - id: ki_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Usa Ki junto con Kf o con Wnet; sola no cuenta la historia del proceso."\r
        en: "Use Ki together with Kf or Wnet; by itself it does not tell the process story."\r
  Kf:\r
    summary_rules:\r
    - id: kf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Kf cierra el balance de energia cinetica en el estado final."\r
        en: "Kf closes the kinetic-energy balance in the final state."\r
    physical_reading_rules:\r
    - id: kf_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Comparada con Ki, permite decidir si el proceso acelero o freno al sistema."\r
        en: "Compared with Ki, it lets you decide whether the process sped the system up or slowed it down."\r
    coherence_rules:\r
    - id: kf_coherence\r
      when: Kf >= 0\r
      status: ok\r
      text:\r
        es: "Kf no negativa, consistente con el modelo clasico."\r
        en: "Non-negative Kf, consistent with the classical model."\r
    model_validity_rules:\r
    - id: kf_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Kf debe pertenecer al mismo cierre temporal y al mismo sistema que Ki."\r
        en: "Kf must belong to the same time closure and the same system as Ki."\r
    graph_rules:\r
    - id: kf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Kf es el nivel final frente al cual se lee el salto dK."\r
        en: "Kf is the final level against which dK is read."\r
    likely_errors:\r
    - id: kf_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "No aceptes Kf negativa; revisa signos o radicandos antes de cerrar."\r
        en: "Do not accept a negative Kf; recheck signs or radicands before closing."\r
    next_step_rules:\r
    - id: kf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Tras obtener Kf, compara con Ki para leer dK y validar Wnet."\r
        en: "After obtaining Kf, compare it with Ki to read dK and validate Wnet."\r
  vi:\r
    summary_rules:\r
    - id: vi_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "vi fija la rapidez de partida desde la que el trabajo neto modifica el estado."\r
        en: "vi sets the starting speed from which net work modifies the state."\r
    physical_reading_rules:\r
    - id: vi_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Con el mismo Wnet y la misma masa, un vi mayor cambia el cierre final de forma distinta."\r
        en: "With the same Wnet and the same mass, a larger vi changes the final closure differently."\r
    coherence_rules:\r
    - id: vi_coherence\r
      when: vi >= 0\r
      status: ok\r
      text:\r
        es: "vi se interpreta como rapidez no negativa del estado inicial."\r
        en: "vi is interpreted as a non-negative initial-state speed."\r
    model_validity_rules:\r
    - id: vi_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "vi debe corresponder al mismo sistema fisico que despues se usa en vf y Wnet."\r
        en: "vi must correspond to the same physical system later used in vf and Wnet."\r
    graph_rules:\r
    - id: vi_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "vi actua como nivel inicial de la lectura por estados."\r
        en: "vi acts as the initial level of the state-based reading."\r
    likely_errors:\r
    - id: vi_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar una velocidad algebraica con signo donde el leaf trabaja con rapidez."\r
        en: "Common mistake: using an algebraic signed velocity where the leaf works with speed."\r
    next_step_rules:\r
    - id: vi_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Tras fijar vi, comprueba si el problema pide cerrar por vf o por dK."\r
        en: "After fixing vi, check whether the problem asks you to close through vf or through dK."\r
  vf:\r
    summary_rules:\r
    - id: vf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "vf resume el cierre del proceso en terminos de rapidez final compatible con el balance."\r
        en: "vf summarizes the process closure as the final speed compatible with the balance."\r
    physical_reading_rules:\r
    - id: vf_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Si Wnet es positiva, vf tiende a superar vi; si es negativa, tiende a disminuir."\r
        en: "If Wnet is positive, vf tends to exceed vi; if it is negative, it tends to decrease."\r
    coherence_rules:\r
    - id: vf_coherence\r
      when: vf >= 0\r
      status: ok\r
      text:\r
        es: "vf se interpreta como rapidez no negativa."\r
        en: "vf is interpreted as a non-negative speed."\r
    model_validity_rules:\r
    - id: vf_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "La formula cerrada exige masa aproximadamente constante y balance completo de trabajo neto."\r
        en: "The closed form requires approximately constant mass and a complete net-work balance."\r
    graph_rules:\r
    - id: vf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "vf es una lectura final de estado, no una velocidad instantanea intermedia."\r
        en: "vf is a final-state reading, not an intermediate instantaneous velocity."\r
    likely_errors:\r
    - id: vf_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Si el radicando sale negativo, el problema esta mal planteado o el sistema no llega a ese estado."\r
        en: "If the radicand becomes negative, the problem is ill-posed or the system cannot reach that state."\r
    next_step_rules:\r
    - id: vf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Tras hallar vf, comprueba si tiene sentido fisico con la historia del proceso."\r
        en: "After finding vf, check whether it makes physical sense for the process story."\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "m regula cuanto trabajo hace falta para cambiar la rapidez entre estados."\r
        en: "m regulates how much work is needed to change speed between states."\r
    physical_reading_rules:\r
    - id: m_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "A igual cambio de rapidez, una masa mayor exige mayor trabajo neto."\r
        en: "For the same speed change, a larger mass requires larger net work."\r
    coherence_rules:\r
    - id: m_coherence\r
      when: m > 0\r
      status: ok\r
      text:\r
        es: "m positiva, consistente con el dominio fisico del leaf."\r
        en: "Positive m, consistent with the physical domain of the leaf."\r
    model_validity_rules:\r
    - id: m_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "La forma cerrada por velocidades requiere masa aproximadamente constante."\r
        en: "The closed form in terms of speeds requires approximately constant mass."\r
    graph_rules:\r
    - id: m_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "m funciona como parametro del balance, no como resultado principal."\r
        en: "m acts as a balance parameter rather than the main result."\r
    likely_errors:\r
    - id: m_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar gramos o toneladas sin convertir a SI."\r
        en: "Common mistake: using grams or tons without converting to SI."\r
    next_step_rules:\r
    - id: m_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Verifica unidades de m antes de interpretar cualquier energia o rapidez final."\r
        en: "Check the units of m before interpreting any energy or final speed."\r
`;export{e as default};
