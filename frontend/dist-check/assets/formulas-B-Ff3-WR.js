const e=`version: v5
leaf_id: ecuacion-de-onda
formulas:
  - id: ecuacion_onda_1d
    title:
      es: Ecuacion de onda unidimensional
      en: One-dimensional wave equation
    equation: "d2y_dt2 = v^2 * d2y_dx2"
    latex: "\\\\frac{\\\\partial^2 y}{\\\\partial t^2}=v^2\\\\frac{\\\\partial^2 y}{\\\\partial x^2} % y v x t"
    rearrangements:
      - target: y
        equation: "d2y_dt2 = v^2 * d2y_dx2"
        latex: "\\\\frac{\\\\partial^2 y}{\\\\partial t^2}=v^2\\\\frac{\\\\partial^2 y}{\\\\partial x^2} % y v x t"
      - target: v
        equation: "v = sqrt(d2y_dt2 / d2y_dx2)"
        latex: "v=\\\\sqrt{\\\\frac{\\\\partial^2 y/\\\\partial t^2}{\\\\partial^2 y/\\\\partial x^2}} % y v x t"
    category: fundamental
    relation_type: differential_law
    physical_meaning:
      es: La aceleracion temporal local de la perturbacion es proporcional a su curvatura espacial.
      en: The local temporal acceleration of the disturbance is proportional to its spatial curvature.
    constraints:
      - "medio lineal"
      - "velocidad de propagacion definida"
      - "perturbaciones pequeñas"
    validity:
      es: Valida para ondas lineales unidimensionales en medios aproximadamente uniformes.
      en: Valid for one-dimensional linear waves in approximately uniform media.
    dimension_check: "[L T^-2] = [L T^-2]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [ley_diferencial, curvatura, propagacion]
    result_semantics:
      target: y
      kind: signed_disturbance
      sign_meaning:
        es: El signo indica el lado de la perturbacion respecto al equilibrio.
        en: The sign indicates the side of the disturbance relative to equilibrium.
      absolute_value_meaning:
        es: El valor absoluto mide separacion instantanea local.
        en: The absolute value measures instantaneous local separation.
    domain_checks:
      - id: wave_speed_positive
        condition: "v > 0"
        message:
          es: La velocidad de propagacion debe ser positiva.
          en: Propagation speed must be positive.
    coherence_checks:
      - id: curvature_temporal_balance
        condition: "same_sign_curvature_acceleration"
        message:
          es: Curvatura espacial y cambio temporal deben mantener el balance de la ecuacion.
          en: Spatial curvature and temporal change must preserve the equation balance.
    graph_implications:
      es: Donde la curva se arquea mas, el cambio temporal requerido es mayor.
      en: Where the curve bends more, the required temporal change is larger.
    pedagogical_triggers:
      - id: derivative_as_substitution
        text:
          es: Si el alumno intenta sustituir solo numeros, pedir que describa curvatura y cambio temporal.
          en: If the student tries only numerical substitution, ask them to describe curvature and temporal change.
  - id: solucion_armonica
    title:
      es: Solucion armonica viajera
      en: Traveling harmonic solution
    equation: "y = A * sin(k*x - omega*t)"
    latex: "y=A\\\\sin(kx-\\\\omega t) % y A k x omega t"
    rearrangements:
      - target: y
        equation: "y = A * sin(k*x - omega*t)"
        latex: "y=A\\\\sin(kx-\\\\omega t) % y A k x omega t"
    category: structural
    relation_type: model_solution
    physical_meaning:
      es: Una forma sinusoidal viajera es una solucion ideal de la ecuacion de onda lineal.
      en: A traveling sinusoidal shape is an ideal solution of the linear wave equation.
    constraints:
      - "fase definida"
      - "amplitud constante"
      - "medio sin atenuacion apreciable"
    validity:
      es: Modelo ideal para ondas armonicas; no describe pulsos arbitrarios ni medios fuertemente dispersivos.
      en: Ideal model for harmonic waves; it does not describe arbitrary pulses or strongly dispersive media.
    dimension_check: "[L] = [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [solucion, fase, armonica]
    result_semantics:
      target: y
      kind: signed_disturbance
      sign_meaning:
        es: El signo indica lado instantaneo de la oscilacion.
        en: The sign indicates the instantaneous side of oscillation.
      absolute_value_meaning:
        es: El valor absoluto queda limitado por la amplitud.
        en: The absolute value is bounded by amplitude.
    domain_checks:
      - id: amplitude_nonnegative
        condition: "A >= 0"
        message:
          es: La amplitud debe ser no negativa.
          en: Amplitude must be non-negative.
    coherence_checks:
      - id: bounded_solution
        condition: "y <= A"
        message:
          es: La perturbacion armonica no debe superar la amplitud.
          en: The harmonic disturbance must not exceed amplitude.
    graph_implications:
      es: A controla la altura y k controla la compresion espacial de la curva.
      en: A controls height and k controls spatial compression of the curve.
    pedagogical_triggers:
      - id: amplitude_speed_confusion
        text:
          es: Si el alumno cambia A para cambiar v, recordar que A escala la forma.
          en: If the student changes A to change v, remind them that A scales the shape.
  - id: velocidad_fase
    title:
      es: Velocidad de fase
      en: Phase speed
    equation: "v = omega / k"
    latex: "v=\\\\omega/k % v omega k"
    rearrangements:
      - target: v
        equation: "v = omega / k"
        latex: "v=\\\\omega/k % v omega k"
      - target: omega
        equation: "omega = v * k"
        latex: "\\\\omega=v k % omega v k"
      - target: k
        equation: "k = omega / v"
        latex: "k=\\\\omega/v % k omega v"
    category: derived
    relation_type: phase_relation
    physical_meaning:
      es: La rapidez de avance de una fase es el cociente entre ritmo temporal y repeticion espacial.
      en: The advance speed of a phase is the quotient between temporal rate and spatial repetition.
    constraints:
      - "k positivo"
      - "onda armonica"
    validity:
      es: Valida para una fase armonica con numero de onda y frecuencia angular definidos.
      en: Valid for a harmonic phase with defined wavenumber and angular frequency.
    dimension_check: "[L T^-1] = [T^-1] [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [velocidad_fase, fase]
    result_semantics:
      target: v
      kind: positive_speed
      sign_meaning:
        es: Se interpreta como rapidez positiva de fase.
        en: It is interpreted as positive phase speed.
      absolute_value_meaning:
        es: Indica cuanto avanza una fase por unidad de tiempo.
        en: It indicates how far a phase advances per unit time.
    domain_checks:
      - id: k_positive
        condition: "k > 0"
        message:
          es: El numero de onda debe ser positivo.
          en: Wavenumber must be positive.
    coherence_checks:
      - id: speed_units
        condition: "dimension(v) == [L T^-1]"
        message:
          es: El resultado debe tener unidades de velocidad.
          en: The result must have speed units.
    graph_implications:
      es: Si omega aumenta con k fijo, la fase avanza mas deprisa.
      en: If omega increases with fixed k, phase advances faster.
    pedagogical_triggers:
      - id: omega_k_swap
        text:
          es: Si el alumno invierte omega y k, revisar dimensiones antes de calcular.
          en: If the student swaps omega and k, check dimensions before calculating.
`;export{e as default};
