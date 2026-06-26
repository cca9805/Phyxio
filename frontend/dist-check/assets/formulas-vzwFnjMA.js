const e=`version: 1\r
formulas:\r
  - id: energia_rotacional_basica\r
    title: { es: "Energía cinética rotacional de eje fijo", en: "Rotational kinetic energy for a fixed axis" }\r
    equation: "Erot = 0.5 * I * omega^2"\r
    latex: 'E_{rot}=\\frac{1}{2}I\\omega^2'
    rearrangements:\r
      - "I = 2 * Erot / omega^2"\r
      - "omega = sqrt(2 * Erot / I)"\r
    category: "energy"\r
    relation_type: "definition"\r
    physical_meaning:\r
      es: "La energía crece linealmente con el momento de inercia y cuadráticamente con la velocidad angular."\r
      en: "Energy grows linearly with moment of inertia and quadratically with angular speed."\r
    constraints:\r
      - "I > 0"\r
      - "omega en rad/s"\r
      - "cuerpo rígido alrededor de un eje definido"\r
    validity:\r
      es: "Válida para rotación rígida alrededor de un eje fijo o principal con momento de inercia constante."\r
      en: "Valid for rigid rotation about a fixed or principal axis with constant moment of inertia."\r
    dimension_check: "[M L^2] [T^-2] = M L^2 T^-2"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    interpretation_tags: ["quadratic", "nonnegative", "state_quantity"]\r
    result_semantics:\r
      target: "Erot"\r
      kind: "scalar_nonnegative"\r
      sign_meaning: "no tiene signo de orientación"\r
      absolute_value_meaning: "cantidad de energía mecánica almacenada en el giro"\r
    domain_checks:\r
      - "Convertir rpm a rad/s antes de sustituir."\r
      - "Verificar que I corresponde al eje real de giro."\r
      - "No sumar energía traslacional salvo que el centro de masa también se mueva."\r
    coherence_checks:\r
      - "Si omega se duplica y I no cambia, Erot debe multiplicarse por cuatro."\r
      - "Si omega es cero, Erot debe ser cero."\r
      - "Cambiar el signo de omega no debe cambiar Erot."\r
    graph_implications:\r
      - "La gráfica Erot frente a omega es una parábola abierta hacia arriba."\r
      - "Para mayor I, la curva es más empinada."\r
    pedagogical_triggers:\r
      - "Confusión entre masa e inercia rotacional."\r
      - "Uso directo de revoluciones por minuto."\r
\r
  - id: trabajo_rotacional_variacion
    title: { es: "Trabajo rotacional y variación de energía", en: "Rotational work and energy change" }\r
    equation: "Wrot = Erotf - Eroti"\r
    latex: 'W_{rot}=E_{rot,f}-E_{rot,i}'
    rearrangements:\r
      - "Erotf = Eroti + Wrot"\r
      - "Eroti = Erotf - Wrot"\r
    category: "work_energy"\r
    relation_type: "balance"\r
    physical_meaning:\r
      es: "El trabajo neto de los torques externos cambia la energía cinética rotacional del sistema."\r
      en: "The net work of external torques changes the rotational kinetic energy of the system."\r
    constraints:\r
      - "sistema elegido de forma explícita"\r
      - "trabajo neto externo"\r
      - "pérdidas separadas si hay disipación"\r
    validity:\r
      es: "Válida como balance energético siempre que las transferencias y pérdidas se contabilicen con el mismo sistema."\r
      en: "Valid as an energy balance when transfers and losses are accounted for using the same system."\r
    dimension_check: "J = J - J"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    interpretation_tags: ["energy_balance", "signed_work", "state_change"]\r
    result_semantics:\r
      target: "Wrot"\r
      kind: "signed_scalar"\r
      sign_meaning: "positivo si aumenta la energía rotacional"\r
      absolute_value_meaning: "magnitud de la transferencia neta"\r
    domain_checks:\r
      - "No confundir trabajo con energía final."\r
      - "Separar trabajo motor, trabajo resistente y energía disipada."\r
      - "Usar los mismos ejes para los estados inicial y final."\r
    coherence_checks:\r
      - "Trabajo positivo debe aumentar Erot salvo que existan pérdidas declaradas."\r
      - "Trabajo negativo debe reducir Erot o aparecer como disipación."\r
      - "Si Eroti y Erotf son iguales, el trabajo neto debe ser cero."\r
    graph_implications:\r
      - "El área bajo torque frente a ángulo representa trabajo rotacional."\r
      - "Un cambio vertical entre marcadores de energía representa Wrot."\r
    pedagogical_triggers:
      - "Olvidar la energía inicial."
      - "Sumar trabajos internos del sistema."

  - id: energia_rotacional_inicial
    title: { es: "Energía rotacional inicial", en: "Initial rotational energy" }
    equation: "Eroti = 0.5 * I * omega_i^2"
    latex: 'E_{rot,i}=\\frac{1}{2}I\\omega_i^2'
    rearrangements:
      - "omega_i = sqrt(2 * Eroti / I)"
    category: "initial_state"
    relation_type: "definition"
    physical_meaning:
      es: "Calcula la energía rotacional al inicio del proceso con el eje elegido."
      en: "Computes rotational energy at the beginning of the process with the chosen axis."
    constraints:
      - "I > 0"
      - "omega_i en rad/s"
    validity:
      es: "Válida si el momento de inercia inicial corresponde al eje real."
      en: "Valid if the initial moment of inertia corresponds to the real axis."
    dimension_check: "[M L^2] [T^-2] = M L^2 T^-2"
    calculable: true
    motivo_no_calculable: null
    used_in: ["ejemplos", "interpretacion"]
    interpretation_tags: ["initial_state", "nonnegative"]
    result_semantics:
      target: "Eroti"
      kind: "scalar_nonnegative"
      sign_meaning: "no tiene signo de orientación"
      absolute_value_meaning: "energía almacenada al inicio"
    domain_checks:
      - "No asumir Eroti cero sin dato explícito."
    coherence_checks:
      - "Si omega_i es cero, Eroti debe ser cero."
    graph_implications:
      - "Marca el nivel inicial de energía."
    pedagogical_triggers:
      - "Olvidar estado inicial no nulo."

  - id: energia_rotacional_final
    title: { es: "Energía rotacional final", en: "Final rotational energy" }
    equation: "Erotf = 0.5 * I * omega_f^2"
    latex: 'E_{rot,f}=\\frac{1}{2}I\\omega_f^2'
    rearrangements:
      - "omega_f = sqrt(2 * Erotf / I)"
    category: "final_state"
    relation_type: "definition"
    physical_meaning:
      es: "Calcula la energía rotacional que queda almacenada al final del proceso."
      en: "Computes the rotational energy stored at the end of the process."
    constraints:
      - "I > 0"
      - "omega_f en rad/s"
    validity:
      es: "Válida si el eje final y el momento de inercia final están bien definidos."
      en: "Valid if final axis and final moment of inertia are well defined."
    dimension_check: "[M L^2] [T^-2] = M L^2 T^-2"
    calculable: true
    motivo_no_calculable: null
    used_in: ["ejemplos", "interpretacion"]
    interpretation_tags: ["final_state", "nonnegative"]
    result_semantics:
      target: "Erotf"
      kind: "scalar_nonnegative"
      sign_meaning: "no tiene signo de orientación"
      absolute_value_meaning: "energía almacenada al final"
    domain_checks:
      - "Usar el I final si la geometría cambia."
    coherence_checks:
      - "Si omega_f es cero, Erotf debe ser cero."
    graph_implications:
      - "Marca el nivel final de energía."
    pedagogical_triggers:
      - "Confundir energía final con trabajo."
`;export{e as default};
