const e=`version: 5
id: aerodinamica-interp
leaf_id: aerodinamica-basica
scope: local
nombre:
  es: Análisis Aerodinámico
  en: Aerodynamic Analysis

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
      es: Resumen de Fuerzas
      en: Force Summary
  physical_reading:
    title:
      es: Significado Físico
      en: Physical Meaning
  coherence:
    title:
      es: Coherencia del Sistema
      en: System Coherence
  model_validity:
    title:
      es: Validez del Modelo
      en: Model Validity
  graph_reading:
    title:
      es: Interpretación Visual
      en: Visual Interpretation
  likely_errors:
    title:
      es: Posibles Errores
      en: Possible Errors
  next_step:
    title:
      es: Pasos Siguientes
      en: Next Steps

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [D_f, L_f, rho, v, A, C_D, C_L]
  formulas: [arrastre, lift_aero]

targets:
  D_f:
    summary_rules:
      - id: drag-val
        when: D_f >= 0
        status: success
        text:
          es: "La fuerza de arrastre [[D_f]] resultante es de {{D_f}} N. Físicamente, esta magnitud representa la resistencia total que el aire opone al avance del cuerpo, combinando los efectos de la presión diferencial y el rozamiento viscoso superficial."
          en: "The resulting drag force [[D_f]] is {{D_f}} N. Physically, this magnitude represents the total resistance the air opposes to the body's progress, combining the effects of differential pressure and surface viscous friction."
    physical_reading_rules:
      - id: drag-meaning
        when: D_f > 1000
        status: info
        text:
          es: "Esto se debe a la alta resistencia del aire a esta velocidad, lo que genera una carga estructural considerable sobre el cuerpo que debe ser compensada por el empuje de los motores."
          en: "This is due to the high air resistance at this speed, which generates a considerable structural load on the body that must be compensated by engine thrust."
    coherence_rules:
      - id: drag-coh
        when: D_f > 0 and v == 0
        status: error
        text:
          es: "Error: No puede haber arrastre aerodinámico si la velocidad relativa es cero."
          en: "Error: There can be no aerodynamic drag if the relative velocity is zero."
    model_validity_rules:
      - id: drag-valid
        when: v > 340
        status: warning
        text:
          es: "Aviso: A velocidades supersónicas (v > 340 m/s), el modelo subsónico simple deja de ser preciso debido a la aparición de ondas de choque."
          en: "Warning: At supersonic speeds (v > 340 m/s), the simple subsonic model ceases to be accurate due to the appearance of shock waves."
    graph_rules:
      - id: drag-graph
        when: D_f > 0
        status: success
        text:
          es: "El vector de arrastre en el DCL se escala proporcionalmente a la magnitud de la fuerza, apuntando siempre en sentido opuesto al flujo."
          en: "The drag vector in the DCL is scaled proportionally to the force magnitude, always pointing in the opposite direction to the flow."
    likely_errors:
      - id: err-drag-v
        when: D_f > 0
        status: warning
        text:
          es: "Riesgo: Olvidar que si duplicas la velocidad, el arrastre se cuadruplica por la naturaleza cuadrática de la ecuación."
          en: "Risk: Forgetting that if you double the velocity, the drag quadruples due to the quadratic nature of the equation."
    next_step_rules:
      - id: next-drag
        when: D_f > 0
        status: info
        text:
          es: "Prueba a reducir el coeficiente [[C_D]] para ver cómo mejora la eficiencia aerodinámica del diseño."
          en: "Try reducing the [[C_D]] coefficient to see how the design's aerodynamic efficiency improves."

  L_f:
    summary_rules:
      - id: lift-val
        when: L_f >= 0
        status: success
        text:
          es: "La fuerza de sustentación [[L_f]] generada es de {{L_f}} N. Esta fuerza ascendente es el resultado de la circulación del aire alrededor del perfil, permitiendo contrarrestar el peso gravitatorio del objeto."
          en: "The generated lift force [[L_f]] is {{L_f}} N. This upward force is the result of air circulation around the profile, allowing it to counteract the object's gravitational weight."
    physical_reading_rules:
      - id: lift-meaning
        when: L_f > 0
        status: success
        text:
          es: "Como consecuencia del flujo asimétrico alrededor del perfil, se genera una diferencia de presión neta que resulta en esta fuerza ascendente necesaria para el vuelo."
          en: "As a consequence of the asymmetric flow around the profile, a net pressure difference is generated resulting in this upward force necessary for flight."
    coherence_rules:
      - id: lift-coh
        when: L_f > 0 and rho == 0
        status: error
        text:
          es: "Incoherencia: La sustentación aerodinámica requiere un fluido con densidad finita para existir."
          en: "Incoherence: Aerodynamic lift requires a fluid with finite density to exist."
    model_validity_rules:
      - id: lift-valid
        when: C_L > 2
        status: warning
        text:
          es: "Precaución: Coeficientes [[C_L]] superiores a 2 suelen estar muy cerca del límite de pérdida (stall) física del perfil."
          en: "Caution: [[C_L]] coefficients higher than 2 are usually very close to the profile's physical stall limit."
    graph_rules:
      - id: lift-graph
        when: L_f > 0
        status: success
        text:
          es: "El vector de sustentación se representa perpendicular a la velocidad del flujo incidente en el esquema de fuerzas."
          en: "The lift vector is represented perpendicular to the incident flow velocity in the force diagram."
    likely_errors:
      - id: err-lift-a
        when: L_f > 0
        status: warning
        text:
          es: "Fallo: Creer que el área [[A]] es el volumen total del objeto y no su superficie de referencia."
          en: "Failure: Believing that area [[A]] is the object's total volume and not its reference surface."
    next_step_rules:
      - id: next-lift
        when: L_f > 0
        status: info
        text:
          es: "Observa qué sucede con la capacidad de carga si la densidad del aire [[rho]] disminuye al ascender a gran altitud."
          en: "Observe what happens to the load capacity if the air density [[rho]] decreases when climbing to high altitude."

  C_D:
    summary_rules:
      - id: cd-val
        when: C_D > 0
        status: success
        text:
          es: "Coeficiente de arrastre [[C_D]] = {{C_D}}. Este valor adimensional cuantifica la 'calidad aerodinámica' de la forma del cuerpo."
          en: "Drag coefficient [[C_D]] = {{C_D}}. This dimensionless value quantifies the 'aerodynamic quality' of the body's shape."
    physical_reading_rules:
      - id: cd-meaning
        when: C_D < 0.1
        status: info
        text:
          es: "Esto se debe a un diseño altamente aerodinámico (forma de gota o perfil alar optimizado) que minimiza la separación del flujo."
          en: "This is due to a highly aerodynamic design (teardrop shape or optimized airfoil) that minimizes flow separation."
    coherence_rules:
      - id: cd-coh
        when: C_D <= 0
        status: error
        text:
          es: "Error: El coeficiente de arrastre debe ser positivo para cualquier cuerpo real inmerso en un flujo."
          en: "Error: The drag coefficient must be positive for any real body immersed in a flow."
    model_validity_rules:
      - id: cd-valid
        when: C_D > 0
        status: success
        text:
          es: "Valor dentro del rango esperado para perfiles aerodinámicos estándar."
          en: "Value within the expected range for standard aerodynamic profiles."
    graph_rules:
      - id: cd-graph
        when: C_D > 0
        status: success
        text:
          es: "Influye indirectamente en la magnitud del vector de arrastre visualizado."
          en: "Indirectly influences the magnitude of the visualized drag vector."
    likely_errors:
      - id: err-cd-unit
        when: C_D > 0
        status: warning
        text:
          es: "Aviso: Recordar que [[C_D]] es adimensional; no tiene unidades físicas."
          en: "Warning: Remember that [[C_D]] is dimensionless; it has no physical units."
    next_step_rules:
      - id: next-cd
        when: C_D > 0
        status: info
        text:
          es: "Compara este valor con el de una placa plana (CD ≈ 1.28) para apreciar la importancia del diseño."
          en: "Compare this value with that of a flat plate (CD ≈ 1.28) to appreciate the importance of design."

  C_L:
    summary_rules:
      - id: cl-val
        when: C_L >= 0
        status: success
        text:
          es: "Coeficiente de sustentación [[C_L]] = {{C_L}}. Indica la eficiencia del perfil para generar fuerza vertical a partir del flujo horizontal."
          en: "Lift coefficient [[C_L]] = {{C_L}}. Indicates the profile's efficiency in generating vertical force from horizontal flow."
    physical_reading_rules:
      - id: cl-meaning
        when: C_L > 1.5
        status: info
        text:
          es: "Esto se debe a un ángulo de ataque elevado o al uso de dispositivos de hipersustentación (flaps)."
          en: "This is due to a high angle of attack or the use of high-lift devices (flaps)."
    coherence_rules:
      - id: cl-coh
        when: C_L > 3
        status: warning
        text:
          es: "Duda: Coeficientes de sustentación tan altos son difíciles de alcanzar sin tecnología avanzada."
          en: "Doubt: Such high lift coefficients are difficult to achieve without advanced technology."
    model_validity_rules:
      - id: cl-valid
        when: C_L >= 0
        status: success
        text:
          es: "Modelo de perfil alar estándar aplicado correctamente."
          en: "Standard airfoil model applied correctly."
    graph_rules:
      - id: cl-graph
        when: C_L > 0
        status: success
        text:
          es: "Define la proporción entre la fuerza de sustentación y la presión dinámica en el gráfico."
          en: "Defines the proportion between the lift force and the dynamic pressure in the graph."
    likely_errors:
      - id: err-cl-const
        when: C_L > 0
        status: warning
        text:
          es: "Fallo: Pensar que [[C_L]] es constante; en realidad varía linealmente con el ángulo de ataque."
          en: "Failure: Thinking that [[C_L]] is constant; in reality, it varies linearly with the angle of attack."
    next_step_rules:
      - id: next-cl
        when: C_L > 0
        status: info
        text:
          es: "Investiga cómo cambiaría el [[C_L]] si el ala tuviera una curvatura diferente."
          en: "Investigate how [[C_L]] would change if the wing had a different curvature."

  v:
    summary_rules:
      - id: v-val
        when: v >= 0
        status: success
        text:
          es: "Velocidad relativa de flujo [[v]] = {{v}} m/s. Esta es la rapidez con la que el objeto 'corta' el aire circundante."
          en: "Relative flow velocity [[v]] = {{v}} m/s. This is the speed at which the object 'cuts' through the surrounding air."
    physical_reading_rules:
      - id: v-meaning
        when: v > 100
        status: info
        text:
          es: "A esta velocidad, los efectos dinámicos del aire dominan totalmente sobre las fuerzas de gravedad en términos de control del vehículo."
          en: "At this speed, air dynamic effects totally dominate over gravity forces in terms of vehicle control."
    coherence_rules:
      - id: v-coh
        when: v < 0
        status: error
        text:
          es: "Error: La rapidez relativa debe ser un valor no negativo por definición cinemática."
          en: "Error: Relative speed must be a non-negative value by kinematic definition."
    model_validity_rules:
      - id: v-mod
        when: v > 0
        status: success
        text:
          es: "Modelo de flujo externo incompresible aplicable para este rango de velocidades."
          en: "Incompressible external flow model applicable for this speed range."
    graph_rules:
      - id: v-graph
        when: v > 0
        status: success
        text:
          es: "La velocidad define la escala y dirección de las líneas de corriente en el esquema visual."
          en: "The velocity defines the scale and direction of the streamlines in the visual diagram."
    likely_errors:
      - id: err-v-square
        when: v > 0
        status: warning
        text:
          es: "Recordatorio: La fuerza aerodinámica escala con el cuadrado de [[v]], lo que implica una alta sensibilidad a los cambios de velocidad."
          en: "Reminder: Aerodynamic force scales with the square of [[v]], implying high sensitivity to velocity changes."
    next_step_rules:
      - id: next-v
        when: v > 0
        status: info
        text:
          es: "Compara el arrastre a baja velocidad frente a alta velocidad para entender por qué los coches consumen tanto en autopista."
          en: "Compare drag at low speed versus high speed to understand why cars consume so much on the highway."

guidance:
  es: Ajusta la velocidad y el área para observar cómo cambian las fuerzas de sustentación y arrastre en el DCL.
  en: Adjust the velocity and area to observe how lift and drag forces change in the DCL.
physical_summary:
  es: La aerodinámica básica describe el equilibrio de fuerzas que surge del movimiento relativo entre un cuerpo y el aire.
  en: Basic aerodynamics describes the balance of forces arising from the relative motion between a body and the air.
didactic_analysis:
  es: Este módulo se centra en las leyes cuadráticas del arrastre y la sustentación, pilares del diseño aeronáutico y automotriz.
  en: This module focuses on the quadratic laws of drag and lift, pillars of aeronautical and automotive design.
`;export{e as default};
