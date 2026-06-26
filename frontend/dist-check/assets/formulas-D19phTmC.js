const e=`version: v5_n5

formulas:
  - id: intensidad_potencia
    title:
      es: Intensidad sonora desde potencia
      en: Sound intensity from power
    equation: I = P / (4 * pi * r^2)
    latex: I = \\\\frac{P}{4\\\\pi r^{2}}
    rearrangements:
      - target: I
        equation: I = P / (4 * pi * r^2)
        latex: I = \\\\frac{P}{4\\\\pi r^{2}}
      - target: P
        equation: P = I * 4 * pi * r^2
        latex: P = 4\\\\pi r^{2} I
      - target: r
        equation: r = sqrt(P / (4 * pi * I))
        latex: r = \\\\sqrt{\\\\frac{P}{4\\\\pi I}}
    category: derived
    relation_type: definition
    physical_meaning:
      es: La intensidad es la potencia distribuida uniformemente sobre una esfera de radio r centrada en la fuente puntual
      en: Intensity is the power uniformly distributed over a sphere of radius r centered at the point source
    constraints:
      - Fuente puntual omnidireccional
      - Medio homogeneo sin absorcion
      - Campo lejano (r >> dimension de la fuente)
      - Propagacion esferica libre
    validity:
      es: Válida para fuentes pequenas en espacio libre. En recintos cerrados, hay reflexiones que complican el patron.
      en: Valid for small sources in free space. In enclosed rooms, reflections complicate the pattern.
    dimension_check:
      es: "[P] = W, [r] = m, entonces [I] = W/m² = M L⁻² T⁻³ ✓"
      en: "[P] = W, [r] = m, so [I] = W/m² = M L⁻² T⁻³ ✓"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Calculo de nivel sonoro a distancia conocida
      - Estimacion de potencia de fuente desconocida
    interpretation_tags:
      - intensity
      - spherical_propagation
      - inverse_square_law
    result_semantics:
      target: I
      kind: nonnegative_scalar
      sign_meaning:
        es: No aplica, siempre positiva
        en: Not applicable, always positive
      absolute_value_meaning:
        es: Densidad de potencia acustica en el punto de observacion
        en: Acoustic power density at the observation point
    domain_checks:
      - condition: I > 0
        severity: error
        message:
          es: La intensidad debe ser positiva
          en: Intensity must be positive
      - condition: r > 0.1
        severity: warning
        message:
          es: Distancia muy pequena, modelo de fuente puntual puede fallar
          en: Very small distance, point source model may fail
    coherence_checks:
      - condition: I < 1000
        severity: warning
        message:
          es: Intensidad extremadamente alta, verificar unidades de P
          en: Extremely high intensity, verify P units
    graph_implications: []
    pedagogical_triggers:
      - id: fuente_no_puntual
        when: r < 1.0
        message:
          es: A distancias menores a 1 metro, la fuente real tiene dimension finita y el modelo esferico es aproximado
          en: At distances less than 1 meter, the real source has finite size and the spherical model is approximate

  - id: nivel_intensidad
    target: I_0
    title:
      es: Nivel de intensidad en decibelios
      en: Sound intensity level in decibels
    equation: L = 10 * log10(I / I_0)
    latex: L = 10\\\\log_{10}\\\\left(\\\\frac{I}{I_{0}}\\\\right)
    rearrangements:
      - target: L
        equation: L = 10 * log10(I / I_0)
        latex: L = 10\\\\log_{10}\\\\left(\\\\frac{I}{I_{0}}\\\\right)
      - target: I
        equation: I = I_0 * 10^(L / 10)
        latex: I = I_{0}\\\\cdot 10^{L/10}
      - target: I_0
        equation: I_0 = I / 10^(L / 10)
        latex: I_{0} = \\\\frac{I}{10^{L/10}}
    category: derived
    relation_type: definition
    physical_meaning:
      es: Escala logaritmica que cuantifica la percepcion subjetiva del sonido, usando como referencia el umbral de audicion
      en: Logarithmic scale that quantifies the subjective perception of sound, using the hearing threshold as reference
    constraints:
      - I debe ser positiva
      - I_0 es constante estandar 10⁻¹² W/m²
      - Logaritmo base 10
    validity:
      es: Válida para cualquier intensidad medible. Notar que L puede ser negativo si I < I_0.
      en: Valid for any measurable intensity. Note that L can be negative if I < I_0.
    dimension_check:
      es: Argumento del logaritmo es adimensional (W/m²)/(W/m²), resultado en dB (adimensional) ✓
      en: Logarithm argument is dimensionless (W/m²)/(W/m²), result in dB (dimensionless) ✓
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Conversion entre intensidad fisica y nivel perceptivo
      - Sumar niveles de fuentes multiples
    interpretation_tags:
      - decibel_scale
      - logarithmic_response
      - hearing_threshold
    result_semantics:
      target: L
      kind: signed_scalar
      sign_meaning:
        es: Negativo indica sonido inaudible para oido promedio; positivo indica sonido audible
        en: Negative indicates sound inaudible to average ear; positive indicates audible sound
      absolute_value_meaning:
        es: Magnitud en escala logaritmica relativa al umbral de audicion
        en: Magnitude on logarithmic scale relative to hearing threshold
    domain_checks:
      - condition: I > 0
        severity: error
        message:
          es: La intensidad debe ser positiva para calcular logaritmo
          en: Intensity must be positive to calculate logarithm
    coherence_checks:
      - condition: L > -20 && L < 140
        severity: warning
        message:
          es: Nivel fuera de rango fisiologico tipico (-20 a 140 dB)
          en: Level outside typical physiological range (-20 to 140 dB)
    graph_implications: []
    pedagogical_triggers:
      - id: escala_log_vs_lineal
        when: true
        message:
          es: Recuerda que +10 dB significa multiplicar la intensidad fisica por 10, pero solo se percibe como el doble de fuerte
          en: Remember that +10 dB means multiplying physical intensity by 10, but it is only perceived as twice as loud

  - id: intensidad_distancia
    title:
      es: Relacion de intensidades entre dos distancias
      en: Intensity relation between two distances
    equation: I_2 / I_1 = (r_1 / r_2)^2
    latex: \\\\frac{I_{2}}{I_{1}} = \\\\left(\\\\frac{r_{1}}{r_{2}}\\\\right)^{2}
    rearrangements:
      - target: I
        equation: I_2 = I_1 * (r_1 / r_2)^2
        latex: I_{2} = I_{1}\\\\left(\\\\frac{r_{1}}{r_{2}}\\\\right)^{2}
      - target: r
        equation: r_2 = r_1 * sqrt(I_1 / I_2)
        latex: r_{2} = r_{1}\\\\sqrt{\\\\frac{I_{1}}{I_{2}}}
    category: derived
    relation_type: structural
    physical_meaning:
      es: La intensidad decae con el cuadrado de la distancia; duplicar la distancia reduce la intensidad a un cuarto
      en: Intensity decays with the square of distance; doubling the distance reduces intensity to one quarter
    constraints:
      - Misma fuente, mismo medio
      - Campo lejano para ambas posiciones
      - Sin obstaculos ni reflexiones significativas
    validity:
      es: Válida para propagacion esferica libre. En interiores con reverberacion, la ley del inverso del cuadrado se altera.
      en: Valid for free spherical propagation. In interiors with reverberation, the inverse square law is altered.
    dimension_check:
      es: Ambos lados son adimensionales (relacion de intensidades = relacion de distancias al cuadrado) ✓
      en: Both sides are dimensionless (intensity ratio = distance ratio squared) ✓
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Estimacion de nivel a distancia diferente sin conocer potencia
      - Calculo de reduccion de ruido con distancia
    interpretation_tags:
      - inverse_square_law
      - distance_attenuation
      - free_field_propagation
    result_semantics:
      target: I
      kind: nonnegative_scalar
      sign_meaning:
        es: No aplica
        en: Not applicable
      absolute_value_meaning:
        es: Intensidad en la posicion 2, relativa a la posicion 1
        en: Intensity at position 2, relative to position 1
    domain_checks:
      - condition: r_1 > 0 && r_2 > 0
        severity: error
        message:
          es: Las distancias deben ser positivas
          en: Distances must be positive
      - condition: r_1 != r_2
        severity: info
        message:
          es: Distancias iguales dan intensidades iguales
          en: Equal distances give equal intensities
    coherence_checks:
      - condition: I_2 > 0 && I_1 > 0
        severity: error
        message:
          es: Las intensidades deben ser positivas
          en: Intensities must be positive
    graph_implications: []
    pedagogical_triggers:
      - id: ley_cuadrado_inverso
        when: r_2 > 2 * r_1
        message:
          es: A mas del doble de distancia, la intensidad cae a menos de la cuarta parte
          en: At more than twice the distance, intensity falls to less than one quarter

ui:
  default_formula: intensidad_potencia
  ordering:
    - intensidad_potencia
    - nivel_intensidad
    - intensidad_distancia
  labels:
    es:
      intensidad_potencia: Intensidad desde potencia
      nivel_intensidad: Nivel en decibelios
      intensidad_distancia: Cambio con distancia
    en:
      intensidad_potencia: Intensity from power
      nivel_intensidad: Level in decibels
      intensidad_distancia: Change with distance
`;export{e as default};
