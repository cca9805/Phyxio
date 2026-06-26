const n=`version: v5_n5

magnitudes:
  - id: I
    symbol: I
    nombre:
      es: Intensidad sonora
      en: Sound intensity
    descripcion:
      es: Potencia acustica que atraviesa una superficie unitaria perpendicular a la direccion de propagacion
      en: Acoustic power passing through a unit surface perpendicular to the propagation direction
    unidad_si: W/m²
    dimension: M L⁻² T⁻³
    is_vector: false
    components: null
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - Calculo de nivel sonoro en decibelios
      - Evaluacion de exposicion al ruido
      - Diseno de barreras acusticas
    common_mistake: Confundir con presion acustica o pensar que se mide en decibelios
    typical_range:
      es: Umbral de audicion 10⁻¹² W/m², umbral de dolor 1 W/m²
      en: Hearing threshold 10⁻¹² W/m², pain threshold 1 W/m²
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud siempre positiva, representa energia transferida
        en: Always positive magnitude, represents transferred energy
    zero_behavior:
      allowed: true
      meaning:
        es: Ausencia completa de onda sonora (vacio o condicion idealizada)
        en: Complete absence of sound wave (vacuum or idealized condition)
    value_nature:
      kind: nonnegative_scalar
      nonnegative_only: true
      expected_interval:
        min: 0
        max: 10
        unit: W/m²
    interpretation_role:
      primary_for: sound_energy_density
      secondary_for:
        - sound_level_calculation
        - acoustic_power_estimation
    graph_binding:
      channels: []
    pedagogical_notes:
      es: La intensidad es la magnitud fisica fundamental; el nivel en dB es la percepcion psicofisica. Es crucial distinguir entre cantidad fisica y escala de sensacion.
      en: Intensity is the fundamental physical magnitude; the level in dB is the psycho-physical perception. It is crucial to distinguish between physical quantity and sensation scale.

  - id: L
    symbol: L
    nombre:
      es: Nivel de intensidad sonora
      en: Sound intensity level
    descripcion:
      es: Logaritmo base 10 de la relacion entre la intensidad y el umbral de audicion, expresado en decibelios (dB)
      en: Base-10 logarithm of the ratio between intensity and hearing threshold, expressed in decibels (dB)
    unidad_si: dB
    dimension: adimensional
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Especificacion de nivel de ruido ambiental
      - Normativas de seguridad laboral
      - Calibracion de equipos de audio
    common_mistake: Interpretar 20 dB como "el doble de intenso" que 10 dB
    typical_range:
      es: Susurro 20 dB, conversacion 60 dB, concierto rock 110 dB, umbral de dolor 120 dB
      en: Whisper 20 dB, conversation 60 dB, rock concert 110 dB, pain threshold 120 dB
    sign_behavior:
      has_sign: true
      meaning:
        es: Negativo indica intensidad inferior al umbral de audicion; positivo es lo habitual
        en: Negative indicates intensity below hearing threshold; positive is the usual case
    zero_behavior:
      allowed: true
      meaning:
        es: Intensidad exactamente igual al umbral de audicion (10⁻¹² W/m²)
        en: Intensity exactly equal to hearing threshold (10⁻¹² W/m²)
    value_nature:
      kind: signed_scalar
      nonnegative_only: false
      expected_interval:
        min: -20
        max: 140
        unit: dB
    interpretation_role:
      primary_for: human_perception_scale
      secondary_for:
        - hearing_damage_assessment
        - environmental_noise_rating
    graph_binding:
      channels: []
    pedagogical_notes:
      es: El decibelio no es una unidad lineal. Cada aumento de 10 dB representa multiplicar la intensidad fisica por 10, pero solo se percibe como "el doble de fuerte".
      en: The decibel is not a linear unit. Each 10 dB increase represents multiplying physical intensity by 10, but is only perceived as "twice as loud".

  - id: P
    symbol: P
    nombre:
      es: Potencia acustica
      en: Acoustic power
    descripcion:
      es: Energia sonora emitida por la fuente por unidad de tiempo
      en: Sound energy emitted by the source per unit time
    unidad_si: W
    dimension: M L² T⁻³
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Calculo de intensidad a partir de la fuente
      - Especificacion de equipos de audio
      - Diseno de sistemas de sonorizacion
    common_mistake: Confundir potencia electrica del amplificador con potencia acustica radiada
    typical_range:
      es: Conversacion 10⁻⁵ W, orquesta sinfonica 10 W, motor jet 100000 W
      en: Conversation 10⁻⁵ W, symphony orchestra 10 W, jet engine 100000 W
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva, representa emision de energia
        en: Always positive, represents energy emission
    zero_behavior:
      allowed: true
      meaning:
        es: Fuente sonora apagada o ausente
        en: Sound source turned off or absent
    value_nature:
      kind: nonnegative_scalar
      nonnegative_only: true
      expected_interval:
        min: 0
        max: 1000000
        unit: W
    interpretation_role:
      primary_for: source_emission
      secondary_for:
        - intensity_at_distance
        - total_energy_budget
    graph_binding:
      channels: []
    pedagogical_notes:
      es: La potencia acustica de una fuente es una propiedad intrinseca de la fuente, mientras que la intensidad depende de donde se mide (distancia y geometria).
      en: The acoustic power of a source is an intrinsic property of the source, while intensity depends on where it is measured (distance and geometry).

  - id: r
    symbol: r
    nombre:
      es: Distancia a la fuente
      en: Distance from source
    descripcion:
      es: Separacion entre el centro emisor de ondas y el punto de observacion
      en: Separation between the wave emission center and the observation point
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Calculo de intensidad en propagacion esferica
      - Diseno de perimetros de seguridad acustica
      - Planificacion urbana contra ruido
    common_mistake: Usar distancia en centimetros sin convertir a metros en la formula
    typical_range:
      es: Audifonos 0.01 m, conversacion cara a cara 1 m, trafico urbano 10 m, avion 1000 m
      en: Earphones 0.01 m, face-to-face conversation 1 m, urban traffic 10 m, airplane 1000 m
    sign_behavior:
      has_sign: false
      meaning:
        es: Distancia siempre positiva, medida desde la fuente
        en: Distance always positive, measured from the source
    zero_behavior:
      allowed: false
      meaning:
        es: Distancia nula implicaria estar dentro de la fuente, modelo no valido
        en: Zero distance would imply being inside the source, model not valid
    value_nature:
      kind: positive_scalar
      nonnegative_only: true
      expected_interval:
        min: 0.001
        max: 10000
        unit: m
    interpretation_role:
      primary_for: wave_propagation_geometry
      secondary_for:
        - intensity_falloff
        - safe_distance_calculation
    graph_binding:
      channels: []
    pedagogical_notes:
      es: La distancia es el factor geometrico que, junto con la potencia, determina la intensidad. En ondas esfericas, la intensidad decae con el inverso del cuadrado de la distancia.
      en: Distance is the geometric factor that, together with power, determines intensity. In spherical waves, intensity decays with the inverse square of distance.

  - id: I_0
    symbol: I_0
    nombre:
      es: Intensidad umbral de audicion
      en: Hearing threshold intensity
    descripcion:
      es: Intensidad de referencia internacionalmente estandarizada, 10⁻¹² W/m², correspondiente al umbral de audicion humano promedio a 1000 Hz
      en: Internationally standardized reference intensity, 10⁻¹² W/m², corresponding to average human hearing threshold at 1000 Hz
    unidad_si: W/m²
    dimension: M L⁻² T⁻³
    is_vector: false
    components: null
    category: constant
    physical_role: parameter
    used_in:
      - Definicion de nivel de intensidad en decibelios
      - Calibracion de equipos de medicion
    common_mistake: Confundir este valor estandar con el umbral individual de una persona
    typical_range:
      es: Valor fijo 10⁻¹² W/m² = 1 pW/m²
      en: Fixed value 10⁻¹² W/m² = 1 pW/m²
    sign_behavior:
      has_sign: false
      meaning:
        es: Constante positiva de referencia
        en: Positive reference constant
    zero_behavior:
      allowed: false
      meaning:
        es: Es una constante definida, no puede ser cero
        en: It is a defined constant, cannot be zero
    value_nature:
      kind: positive_constant
      nonnegative_only: true
      expected_interval:
        min: 1.0e-12
        max: 1.0e-12
        unit: W/m²
    interpretation_role:
      primary_for: decibel_reference
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: Este valor fue elegido porque corresponde aproximadamente al umbral de audicion de un oido humano joven y sano para tonos puros de 1000 Hz.
      en: This value was chosen because it approximately corresponds to the hearing threshold of a young, healthy human ear for pure tones of 1000 Hz.
`;export{n as default};
