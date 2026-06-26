const e=`version: 5
id: analisis-dinamico-rodadura-interp
leaf_id: analisis-dinamico-de-la-rodadura
scope: local
nombre:
  es: Análisis Dinámico de la Rodadura
  en: Dynamic Analysis of Rolling

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
      es: Resumen de la Dinámica
      en: Dynamics Summary
  physical_reading:
    title:
      es: Lectura Física del Sistema
      en: Physical Reading of the System
  coherence:
    title:
      es: Coherencia Matemática y Física
      en: Mathematical and Physical Coherence
  model_validity:
    title:
      es: Validez de la Rodadura Pura
      en: Pure Rolling Validity
  graph_reading:
    title:
      es: Análisis Visual
      en: Visual Analysis
  likely_errors:
    title:
      es: Errores Comunes Identificados
      en: Common Errors Identified
  next_step:
    title:
      es: Próximos Pasos de Estudio
      en: Next Study Steps

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes:
    - a
    - fs
    - I
    - M
    - R
    - alpha
    - theta
    - beta
  formulas:
    - ley-traslacion-rodadura
    - ley-rotacion-rodadura
    - vinculo-rodadura-acel
    - aceleracion-rodadura-combinada

targets:
  a:
    summary_rules:
      - id: a-accel-val
        when: a > 0
        status: success
        text:
          es: "La aceleración [[a]] describe el ritmo de avance lineal del centro de masas."
          en: "The acceleration [[a]] describes the rate of linear advancement of the center of mass."
    physical_reading_rules:
      - id: a-accel-meaning
        when: a > 0
        status: success
        text:
          es: "Indica que el cuerpo está ganando velocidad lineal de manera constante bajo la acción de fuerzas externas y torques."
          en: "Indicates that the body is gaining linear velocity steadily under the action of external forces and torques."
    coherence_rules:
      - id: a-accel-formula
        when: a > 0
        status: success
        text:
          es: "El valor es coherente con la [[ley-traslacion-rodadura]] y el [[vinculo-rodadura-acel]]."
          en: "The value is coherent with the [[ley-traslacion-rodadura]] and the [[vinculo-rodadura-acel]]."
    model_validity_rules:
      - id: a-accel-valid
        when: a > 0
        status: success
        text:
          es: "Representa el estado de movimiento acelerado sin deslizamiento."
          en: "Represents the state of accelerated motion without slipping."
    graph_rules:
      - id: a-accel-graph
        when: a > 0
        status: success
        text:
          es: "Se visualiza como el aumento de la velocidad [[v]] en el tiempo."
          en: "It is visualized as the increase of velocity [[v]] over time."
    likely_errors:
      - id: err-a-slip
        when: a == 0
        status: error
        text:
          es: "Error conceptual al omitir fuerzas: si hay una fuerza neta positiva, la aceleración no puede ser nula en rodadura pura."
          en: "Conceptual error by omitting forces: if there is a positive net force, acceleration cannot be zero in pure rolling."
    next_step_rules:
      - id: next-a-dynamics
        when: a > 0
        status: info
        text:
          es: "Calcula la velocidad después de un tiempo t usando cinemática."
          en: "Calculate the velocity after a time t using kinematics."

  fs:
    summary_rules:
      - id: fs-friction-val
        when: fs != 0
        status: success
        text:
          es: "La fuerza de fricción estática [[fs]] es la responsable de generar el torque necesario para el giro."
          en: "The static friction force [[fs]] is responsible for generating the necessary torque for rotation."
    physical_reading_rules:
      - id: fs-friction-meaning
        when: fs > 0
        status: success
        text:
          es: "Indica que la superficie 'empuja' el punto de contacto para evitar que deslice."
          en: "Indicates that the surface 'pushes' the contact point to prevent it from slipping."
    coherence_rules:
      - id: fs-friction-check
        when: fs != 0
        status: success
        text:
          es: "Es coherente porque vincula la [[ley-traslacion-rodadura]] con la [[ley-rotacion-rodadura]]."
          en: "It is coherent because it links the [[ley-traslacion-rodadura]] with the [[ley-rotacion-rodadura]]."
    model_validity_rules:
      - id: fs-friction-limit
        when: fs > 0
        status: warning
        text:
          es: "Válido siempre que sea menor al límite estático máximo mu_s * N."
          en: "Valid as long as it is less than the maximum static limit mu_s * N."
    graph_rules:
      - id: fs-friction-vector
        when: fs != 0
        status: success
        text:
          es: "Se representa como un vector en el punto de contacto opuesto a la tendencia al movimiento relativo."
          en: "It is represented as a vector at the contact point opposite to the relative motion tendency."
    likely_errors:
      - id: err-fs-work
        when: fs != 0
        status: error
        text:
          es: "Error al suponer que [[fs]] realiza trabajo negativo; en rodadura pura la disipación es nula."
          en: "Error in assuming that [[fs]] performs negative work; in pure rolling dissipation is zero."
    next_step_rules:
      - id: next-fs-slip
        when: fs > 0
        status: info
        text:
          es: "Investiga qué sucede si la pendiente aumenta y [[fs]] supera el límite."
          en: "Investigate what happens if the slope increases and [[fs]] exceeds the limit."

  theta:
    summary_rules:
      - id: theta-angle-val
        when: theta >= 0
        status: success
        text:
          es: "El ángulo [[theta]] define la inclinación de la superficie."
          en: "The angle [[theta]] defines the inclination of the surface."
    physical_reading_rules:
      - id: theta-angle-meaning
        when: theta > 0
        status: success
        text:
          es: "A mayor inclinación, mayor es la componente del peso que impulsa el movimiento."
          en: "The greater the inclination, the greater the weight component driving the motion."
    coherence_rules:
      - id: theta-angle-coh
        when: theta < 1.57
        status: success
        text:
          es: "El ángulo está dentro del rango físico de un plano inclinado."
          en: "The angle is within the physical range of an inclined plane."
    model_validity_rules:
      - id: theta-angle-limit
        when: theta > 0.78
        status: warning
        text:
          es: "Ángulo elevado; verifica si la fricción [[fs]] es suficiente para evitar el deslizamiento."
          en: "High angle; check if friction [[fs]] is sufficient to avoid slipping."
    graph_rules:
      - id: theta-angle-graph
        when: theta >= 0
        status: success
        text:
          es: "Modifica la pendiente de la rampa en el simulador."
          en: "Modifies the slope of the ramp in the simulator."
    likely_errors:
      - id: err-theta-90
        when: theta >= 1.57
        status: error
        text:
          es: "Error: Un plano a 90 grados es una caída libre, no un plano inclinado estándar."
          en: "Error: A 90-degree plane is free fall, not a standard inclined plane."
    next_step_rules:
      - id: next-theta-horizontal
        when: theta > 0
        status: info
        text:
          es: "Analiza qué sucede cuando [[theta]] tiende a cero (plano horizontal)."
          en: "Analyze what happens when [[theta]] approaches zero (horizontal plane)."
`;export{e as default};
