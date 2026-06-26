const e=`version: 1
formulas:
  - id: th_posicion_x
    title:
      es: Posición horizontal en función del tiempo
      en: Horizontal position as a function of time
    equation: x = x0 + v0*t
    latex: x = x_0 + v_0\\,t
    rearrangements:
      - target: x
        equation: x = x0 + v0*t
        latex: x = x_0 + v_0\\,t
        constraints: []
      - target: v0
        equation: v0 = (x - x0)/t
        latex: v_0 = \\frac{x - x_0}{t}
        constraints: []
      - target: t
        equation: t = (x - x0)/v0
        latex: t = \\frac{x - x_0}{v_0}
        constraints: []
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: La posición horizontal crece linealmente con el tiempo porque no hay aceleración horizontal en el modelo ideal.
      en: Horizontal position grows linearly with time because there is no horizontal acceleration in the ideal model.
    constraints:
      - t ≥ 0
      - v0 ≠ 0 para los despejes de t y v0
    validity:
      es: Válida en el modelo ideal con aceleración horizontal nula y velocidad inicial puramente horizontal.
      en: Valid in the ideal model with zero horizontal acceleration and purely horizontal initial velocity.
    dimension_check:
      es: "[L] = [L] + [L T^-1][T] = [L]. Correcto."
      en: "[L] = [L] + [L T^-1][T] = [L]. Correct."
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria
      - ejemplos
      - aplicaciones
    interpretation_tags:
      - tiro-horizontal
    result_semantics:
      target: x
      meaning: Resulta util para interpretar x en el contexto del leaf.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
  - id: th_posicion_y
    title:
      es: Posición vertical en caída libre
      en: Vertical position in free fall
    equation: y = y0 - (1/2)*g*t^2
    latex: y = y_0 - \\frac{1}{2}\\,g\\,t^2
    rearrangements:
      - target: y
        equation: y = y0 - (1/2)*g*t^2
        latex: y = y_0 - \\frac{1}{2}\\,g\\,t^2
        constraints: []
      - target: t
        equation: t = sqrt(2*(y0 - y)/g)
        latex: t = \\sqrt{\\frac{2(y_0 - y)}{g}}
        constraints: []
      - target: y0
        equation: y0 = y + (1/2)*g*t^2
        latex: y_0 = y + \\frac{1}{2}\\,g\\,t^2
        constraints: []
    category: fundamental
    relation_type: integral_relation
    physical_meaning:
      es: La posición vertical disminuye parabólicamente con el tiempo bajo la acción de la gravedad constante, partiendo de velocidad vertical nula.
      en: Vertical position decreases parabolically with time under constant gravity, starting from zero vertical velocity.
    constraints:
      - t ≥ 0
      - g > 0 con eje y positivo hacia arriba
      - v_y0 = 0 (condición de tiro horizontal)
    validity:
      es: Válida únicamente cuando la velocidad vertical inicial es cero, es decir, en tiro horizontal puro.
      en: Valid only when the initial vertical velocity is zero, i.e., in pure horizontal launch.
    dimension_check:
      es: "[L] = [L] - [L T^-2][T^2] = [L]. Correcto."
      en: "[L] = [L] - [L T^-2][T^2] = [L]. Correct."
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria
      - ejemplos
      - aplicaciones
    interpretation_tags:
      - tiro-horizontal
    result_semantics:
      target: y
      meaning: Resulta util para interpretar y en el contexto del leaf.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
  - id: th_velocidad_vertical
    title:
      es: Velocidad vertical en función del tiempo
      en: Vertical velocity as a function of time
    equation: vy = -g*t
    latex: v_y = -g\\,t
    rearrangements:
      - target: vy
        equation: vy = -g*t
        latex: v_y = -g\\,t
        constraints: []
      - target: t
        equation: t = -vy/g
        latex: t = -\\frac{v_y}{g}
        constraints: []
    category: derived
    relation_type: differential_relation
    physical_meaning:
      es: La velocidad vertical parte de cero y crece en módulo linealmente con el tiempo; el signo negativo indica dirección descendente con eje y positivo hacia arriba.
      en: Vertical velocity starts from zero and grows in magnitude linearly with time; the negative sign indicates downward direction with upward positive y-axis.
    constraints:
      - t ≥ 0
      - g > 0
      - v_y0 = 0
    validity:
      es: Válida en el modelo ideal de tiro horizontal con aceleración gravitatoria constante.
      en: Valid in the ideal horizontal launch model with constant gravitational acceleration.
    dimension_check:
      es: "[L T^-1] = [L T^-2][T] = [L T^-1]. Correcto."
      en: "[L T^-1] = [L T^-2][T] = [L T^-1]. Correct."
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria
      - ejemplos
      - aplicaciones
    interpretation_tags:
      - tiro-horizontal
    result_semantics:
      target: vy
      meaning: Resulta util para interpretar vy en el contexto del leaf.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
  - id: th_alcance
    title:
      es: Alcance horizontal en el impacto
      en: Horizontal range at impact
    equation: R = v0*sqrt(2*y0/g)
    latex: R = v_0\\sqrt{\\frac{2\\,y_0}{g}}
    rearrangements:
      - target: R
        equation: R = v0*sqrt(2*y0/g)
        latex: R = v_0\\sqrt{\\frac{2\\,y_0}{g}}
        constraints: []
      - target: v0
        equation: v0 = R/sqrt(2*y0/g)
        latex: v_0 = \\frac{R}{\\sqrt{\\frac{2\\,y_0}{g}}}
        constraints: []
      - target: y0
        equation: y0 = (R^2*g)/(2*v0^2)
        latex: y_0 = \\frac{R^2\\,g}{2\\,v_0^2}
        constraints: []
    category: derived
    relation_type: derived
    physical_meaning:
      es: Expresa el alcance horizontal cuando el proyectil impacta en el nivel y = 0, combinando el tiempo de caída libre con la velocidad horizontal constante.
      en: Expresses the horizontal range when the projectile hits the y = 0 level, combining free-fall time with constant horizontal speed.
    constraints:
      - y0 > 0
      - v0 > 0
      - g > 0
      - impacto en y = 0
    validity:
      es: Válida solo cuando el nivel de impacto es y = 0 y la velocidad vertical inicial es cero.
      en: Valid only when the impact level is y = 0 and the initial vertical velocity is zero.
    dimension_check:
      es: "[L] = [L T^-1] * sqrt([L] / [L T^-2]) = [L T^-1][T] = [L]. Correcto."
      en: "[L] = [L T^-1] * sqrt([L] / [L T^-2]) = [L T^-1][T] = [L]. Correct."
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria
      - ejemplos
      - aplicaciones
    interpretation_tags:
      - tiro-horizontal
    result_semantics:
      target: R
      meaning: Resulta util para interpretar R en el contexto del leaf.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
  - id: th_velocidad_total
    title:
      es: Módulo de la velocidad en un instante
      en: Speed magnitude at a given instant
    equation: v = sqrt(v0^2 + (g*t)^2)
    latex: v = \\sqrt{v_0^2 + (g\\,t)^2}
    rearrangements:
      - target: v
        equation: v = sqrt(v0^2 + (g*t)^2)
        latex: v = \\sqrt{v_0^2 + (g\\,t)^2}
        constraints: []
      - target: t
        equation: t = sqrt(v^2 - v0^2)/g
        latex: t = \\frac{\\sqrt{v^2 - v_0^2}}{g}
        constraints: []
    category: derived
    relation_type: structural
    physical_meaning:
      es: Combina la componente horizontal constante y la componente vertical creciente para obtener la magnitud total de la velocidad en cualquier instante.
      en: Combines the constant horizontal component and the growing vertical component to obtain the total speed magnitude at any instant.
    constraints:
      - t ≥ 0
      - v ≥ v0
    validity:
      es: Válida en el modelo ideal de tiro horizontal para cualquier instante durante el vuelo.
      en: Valid in the ideal horizontal launch model for any instant during flight.
    dimension_check:
      es: "[L T^-1] = sqrt([L T^-1]^2 + [L T^-2]^2[T]^2) = sqrt([L T^-1]^2 + [L T^-1]^2) = [L T^-1]. Correcto."
      en: "[L T^-1] = sqrt([L T^-1]^2 + [L T^-2]^2[T]^2) = [L T^-1]. Correct."
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria
      - ejemplos
      - aplicaciones
    interpretation_tags:
      - tiro-horizontal
    result_semantics:
      target: v
      meaning: Resulta util para interpretar v en el contexto del leaf.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
  - id: th_trayectoria
    title:
      es: Ecuación de la trayectoria y(x)
      en: Trajectory equation y(x)
    equation: y = y0 - (g/(2*v0^2))*(x - x0)^2
    latex: y = y_0 - \\frac{g}{2\\,v_0^2}(x - x_0)^2
    rearrangements: []
    category: conceptual
    relation_type: geometric_interpretation
    physical_meaning:
      es: Muestra que la trayectoria espacial del proyectil es una parábola descendente cuya curvatura depende de g y de v0.
      en: Shows that the spatial trajectory of the projectile is a downward parabola whose curvature depends on g and v0.
    constraints:
      - v0 ≠ 0
      - g > 0
      - y ≤ y0
    validity:
      es: Útil para representación gráfica e interpretación cualitativa; para cálculo numérico de impacto usar x(t) e y(t).
      en: Useful for graphical representation and qualitative interpretation; for numerical impact calculation use x(t) and y(t).
    dimension_check:
      es: "[L] = [L] - [L T^-2]/[L T^-1]^2 * [L]^2 = [L] - [L^-1][L^2] = [L]. Correcto."
      en: "[L] = [L] - [L T^-2]/[L T^-1]^2 * [L]^2 = [L]. Correct."
    calculable: false
    motivo_no_calculable:
      es: Es una relación geométrica de interpretación; el cálculo directo de impacto se realiza con las ecuaciones paramétricas x(t) e y(t).
      en: It is a geometric interpretation relation; direct impact calculation is performed with the parametric equations x(t) and y(t).
    used_in:
      - teoria
      - modelos
    interpretation_tags:
      - tiro-horizontal
    result_semantics:
      target: y
      meaning: Resulta util para interpretar y en el contexto del leaf.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
  - id: th_velocidad_horizontal
    title:
      es: Componente horizontal de la velocidad (constante)
      en: Horizontal velocity component (constant)
    equation: vx = v0
    latex: v_x = v_0
    rearrangements:
      - target: vx
        equation: vx = v0
        latex: v_x = v_0
        constraints: []
    category: derived
    relation_type: identity
    physical_meaning:
      es: En el tiro horizontal, la componente horizontal de la velocidad no cambia porque no existe aceleracion horizontal. El proyectil conserva exactamente la velocidad de lanzamiento en la direccion x.
      en: In horizontal projectile motion, the horizontal velocity component does not change because there is no horizontal acceleration. The projectile retains exactly the launch speed in the x direction.
    constraints:
      - sin resistencia del aire
      - lanzamiento puramente horizontal (vy0 = 0)
    validity:
      es: Valida durante todo el vuelo bajo el modelo ideal de gravedad uniforme y sin rozamiento.
      en: Valid throughout the entire flight under the ideal model of uniform gravity and no air resistance.
    dimension_check: "[L T^-1] = [L T^-1]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria
      - ejemplos
    interpretation_tags:
      - tiro-horizontal
    result_semantics:
      target: vx
      meaning: Resulta util para recordar que la componente horizontal no se modifica en ningun instante del vuelo.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - En la grafica vx vs t la curva debe ser una recta horizontal.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Si calculas la velocidad total, no olvides que vx es constante e igual a v0.
          en: When computing total speed, remember that vx is constant and equal to v0.
  - id: th_tiempo_caida
    title:
      es: Tiempo de caida hasta y = 0
      en: Fall time to y = 0
    equation: t_caida = sqrt(2*y0/g)
    latex: t_{caida} = \\sqrt{\\frac{2y_0}{g}}
    rearrangements:
      - target: t_caida
        equation: t_caida = sqrt(2*y0/g)
        latex: t_{caida} = \\sqrt{\\frac{2y_0}{g}}
        constraints: []
      - target: y0
        equation: y0 = 0.5*g*t_caida^2
        latex: y_0 = \\frac{1}{2}g t_{caida}^2
        constraints: []
    category: derived
    relation_type: derived
    physical_meaning:
      es: Obtiene el tiempo de vuelo vertical cuando el proyectil se lanza horizontalmente desde altura y0 e impacta en el nivel y = 0.
      en: Gives the vertical flight time when the projectile is launched horizontally from height y0 and impacts the y = 0 level.
    constraints:
      - y0 >= 0
      - g > 0
      - v_y0 = 0
      - impacto en y = 0
    validity:
      es: Valida para tiro horizontal ideal sin resistencia del aire y con eje y positivo hacia arriba.
      en: Valid for ideal horizontal launch without air resistance and with upward positive y-axis.
    dimension_check: "[T] = sqrt([L]/[L T^-2]) = [T]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria
      - ejemplos
      - aplicaciones
    interpretation_tags:
      - tiro-horizontal
    result_semantics:
      target: t_caida
      meaning: Separa el calculo vertical del alcance horizontal.
    domain_checks:
      - expr: "true"
        message:
          es: Comprueba que el impacto se plantea en y = 0.
          en: Check that impact is set at y = 0.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que y0 y g sean no negativos y que g sea estrictamente positiva.
          en: Check that y0 and g are non-negative and that g is strictly positive.
    graph_implications:
      - En la grafica y-t coincide con el instante donde la parabola alcanza y = 0.
    pedagogical_triggers:
      - when: "true"
        message:
          es: El tiempo de caida no depende de v0 en el modelo ideal.
          en: Fall time does not depend on v0 in the ideal model.
`;export{e as default};
