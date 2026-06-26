const e=`magnitudes:

  - id: d_eco
    symbol: "d"
    nombre:
      es: Distancia al objeto detectado por eco
      en: Distance to object detected by echo
    descripcion:
      es: "Distancia desde el transductor emisor hasta el objeto reflectante, calculada a partir del tiempo de vuelo del eco y la velocidad del sonido en el medio."
      en: "Distance from the emitting transducer to the reflecting object, calculated from the echo travel time and the speed of sound in the medium."
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - sonar activo de deteccion submarina
      - ecografia medica modo B
      - ultrasonidos de inspeccion de materiales
    common_mistake: "Dividir el tiempo total de vuelo directamente entre la velocidad sin tener en cuenta que el eco recorre el doble de la distancia (ida y vuelta); el resultado correcto usa la mitad del tiempo de vuelo."
    typical_range: "0.001 m (ecografia medica) a 10000 m (sonar oceanico)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La distancia es siempre positiva; el signo indica solo que el objeto esta delante del transductor."
        en: "Distance is always positive; the sign only indicates that the object is in front of the transducer."
    zero_behavior:
      allowed: false
      meaning:
        es: "Distancia cero implicaria que el objeto reflectante coincide con el transductor, lo que no es fisicamente util."
        en: "Zero distance would imply the reflecting object coincides with the transducer, which is not physically useful."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0.001, 10000] m"
    interpretation_role:
      primary_for:
        - calculo de distancia por sonar o ecografia
      secondary_for:
        - estimacion de profundidad de defecto en ultrasonidos industriales
    graph_binding:
      channels:
        - eje Y en grafico distancia vs tiempo de vuelo
    pedagogical_notes:
      es: "El factor 2 en el denominador es el error mas frecuente: el pulso viaja de ida al objeto y de vuelta al receptor, por lo que el tiempo medido corresponde al doble de la distancia buscada. Dividir el tiempo entre la velocidad sin ese factor da una distancia doble a la real."
      en: "The factor of 2 in the denominator is the most frequent error: the pulse travels to the object and back to the receiver, so the measured time corresponds to twice the sought distance. Dividing time by velocity without that factor gives twice the real distance."

  - id: t_vuelo
    symbol: "t"
    nombre:
      es: Tiempo de vuelo del eco
      en: Echo travel time
    descripcion:
      es: "Tiempo transcurrido entre la emision del pulso sonoro y la recepcion del eco reflejado en el objeto."
      en: "Time elapsed between emission of the sound pulse and reception of the echo reflected from the object."
    unidad_si: "s"
    dimension: "[T]"
    is_vector: false
    components: []
    category: observable
    physical_role: core_physical_quantity
    used_in:
      - calculo de distancia por sonar
      - ecografia modo A y modo B
      - medicion de espesor por ultrasonidos
    common_mistake: "Confundir el tiempo de vuelo total (ida y vuelta) con el tiempo de propagacion de una sola trayectoria."
    typical_range: "microsegundos (ecografia medica) a segundos (sonar de gran profundidad)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positivo; es un intervalo temporal medido desde la emision."
        en: "Always positive; it is a time interval measured from emission."
    zero_behavior:
      allowed: false
      meaning:
        es: "Tiempo de vuelo nulo indicaria que el objeto esta en el mismo punto que el emisor."
        en: "Zero travel time would indicate the object is at the same point as the emitter."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1e-6, 10] s"
    interpretation_role:
      primary_for:
        - calculo de distancia por eco
      secondary_for:
        - estimacion de velocidad de sonido si la distancia es conocida
    graph_binding:
      channels:
        - eje X en grafico distancia vs tiempo de vuelo
    pedagogical_notes:
      es: "El tiempo de vuelo es la medida primaria del sonar y la ecografia; la distancia es siempre un calculo derivado. Medir con precision [[t_vuelo]] es el reto tecnico principal de estos sistemas."
      en: "Travel time is the primary measurement of sonar and ultrasound; distance is always a derived calculation. Accurately measuring [[t_vuelo]] is the main technical challenge of these systems."

  - id: v_sonido
    symbol: "v"
    nombre:
      es: Velocidad del sonido en el medio
      en: Speed of sound in the medium
    descripcion:
      es: "Velocidad de propagacion de la onda de presion en el medio especifico por el que viaja el pulso (agua, tejido biologico, acero, aire)."
      en: "Propagation speed of the pressure wave in the specific medium through which the pulse travels (water, biological tissue, steel, air)."
    unidad_si: "m/s"
    dimension: "[L T⁻¹]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - calculo de distancia por sonar
      - calibracion de equipos de ecografia
      - calculo de longitud de onda a frecuencia dada
    common_mistake: "Usar la velocidad del sonido en el aire (340 m/s) para calcular distancias en agua o tejido biologico; la velocidad en agua es de aproximadamente 1500 m/s, lo que produce un error de un factor 4 en la distancia."
    typical_range: "340 m/s (aire, 20 °C) a 5900 m/s (acero)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positiva; indica rapidez de propagacion de la perturbacion de presion."
        en: "Always positive; indicates the propagation speed of the pressure disturbance."
    zero_behavior:
      allowed: false
      meaning:
        es: "Velocidad nula implicaria ausencia del medio o temperatura de cero absoluto, ambos casos fisicamente no aplicables."
        en: "Zero velocity would imply absence of medium or absolute zero temperature, both physically non-applicable."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[300, 6000] m/s"
    interpretation_role:
      primary_for:
        - calculo de distancia por eco
        - calibracion de equipos sonicos
      secondary_for:
        - estimacion de propiedades del medio
    graph_binding:
      channels:
        - parametro de pendiente en grafico distancia vs tiempo
    pedagogical_notes:
      es: "La velocidad del sonido en el medio es el parametro de calibracion critico de cualquier sistema de eco. Un error del 5 % en [[v_sonido]] produce un error del 5 % en todas las distancias calculadas por ese sistema."
      en: "The speed of sound in the medium is the critical calibration parameter of any echo system. A 5% error in [[v_sonido]] produces a 5% error in all distances calculated by that system."

  - id: IL
    symbol: "IL"
    nombre:
      es: Nivel de intensidad sonora
      en: Sound intensity level
    descripcion:
      es: "Nivel logaritmico de intensidad sonora expresado en decibelios, que cuantifica la potencia acustica por unidad de area respecto a la referencia auditiva."
      en: "Logarithmic sound intensity level expressed in decibels, quantifying the acoustic power per unit area relative to the auditory reference."
    unidad_si: "dB"
    dimension: "adimensional (escala logaritmica)"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - evaluacion del nivel de ruido en entornos urbanos e industriales
      - diseño de aislamiento acustico
      - especificacion de requisitos de silencio en salas de concierto
    common_mistake: "Sumar decibeles linealmente como si fueran vatios: la suma de dos fuentes de 60 dB no es 120 dB sino 63 dB, porque la suma se realiza en escala de intensidad (lineal) y luego se convierte a dB."
    typical_range: "0 dB (umbral de audicion) a 140 dB (motor de avion a reaccion)"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Valores negativos de IL son posibles pero indican intensidades por debajo del umbral de referencia; en la practica se trabaja con valores entre 0 y 140 dB."
        en: "Negative IL values are possible but indicate intensities below the reference threshold; in practice values between 0 and 140 dB are used."
    zero_behavior:
      allowed: true
      meaning:
        es: "IL de 0 dB corresponde al umbral de audicion humana (intensidad de referencia 10⁻¹² W/m²)."
        en: "IL of 0 dB corresponds to the threshold of human hearing (reference intensity 10⁻¹² W/m²)."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[0, 200] dB"
    interpretation_role:
      primary_for:
        - evaluacion de exposicion al ruido
        - diseño de barreras acusticas
      secondary_for:
        - calculo de perdida de insercion de materiales aislantes
    graph_binding:
      channels:
        - eje Y en grafico nivel vs distancia a la fuente
    pedagogical_notes:
      es: "El decibel es una escala logaritmica porque el oido humano percibe la intensidad de forma logaritmica (ley de Weber-Fechner). Un incremento de 10 dB corresponde a multiplicar la intensidad por 10, pero perceptivamente suena aproximadamente el doble de fuerte."
      en: "The decibel is a logarithmic scale because the human ear perceives intensity logarithmically (Weber-Fechner law). An increase of 10 dB corresponds to multiplying intensity by 10, but perceptually sounds approximately twice as loud."

  - id: I
    symbol: "I"
    nombre:
      es: Intensidad acustica
      en: Acoustic intensity
    descripcion:
      es: "Potencia acustica que atraviesa una unidad de area perpendicular a la direccion de propagacion."
      en: "Acoustic power crossing a unit area perpendicular to the propagation direction."
    unidad_si: "W/m²"
    dimension: "[M T⁻3]"
    is_vector: false
    components: []
    category: observable
    physical_role: core_physical_quantity
    used_in:
      - calculo de nivel de intensidad sonora
      - suma energetica de fuentes sonoras
      - evaluacion de exposicion acustica
    common_mistake: "Usar milivatios por metro cuadrado como si fueran vatios por metro cuadrado, desplazando el nivel en 30 dB."
    typical_range: "10⁻¹² W/m² (umbral auditivo) a 1 W/m² (umbral de dolor)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La intensidad usada en el nivel sonoro es positiva; describe flujo de energia acustica por area."
        en: "The intensity used in sound level is positive; it describes acoustic energy flux per area."
    zero_behavior:
      allowed: false
      meaning:
        es: "Intensidad nula no puede entrar en el logaritmo del nivel sonoro."
        en: "Zero intensity cannot enter the logarithm of sound level."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1e-12, 1] W/m²"
    interpretation_role:
      primary_for:
        - calculo del nivel sonoro en decibelios
      secondary_for:
        - combinacion de varias fuentes sonoras
    graph_binding:
      channels:
        - variable lineal antes de convertir a dB
    pedagogical_notes:
      es: "La intensidad se suma linealmente; los decibelios se calculan despues. Esta separacion evita el error de sumar niveles en dB directamente."
      en: "Intensity is added linearly; decibels are calculated afterwards. This separation avoids the error of adding dB levels directly."

  - id: IL_fuente
    symbol: "IL_s"
    nombre:
      es: Nivel de intensidad en la fuente
      en: Source intensity level
    descripcion:
      es: "Nivel sonoro emitido o medido en el recinto fuente antes de atravesar una particion acustica."
      en: "Sound level emitted or measured in the source room before crossing an acoustic partition."
    unidad_si: "dB"
    dimension: "adimensional (escala logaritmica)"
    is_vector: false
    components: []
    category: observable
    physical_role: boundary_condition
    used_in:
      - calculo de aislamiento requerido
      - control de ruido industrial
      - diseño de barreras acusticas
    common_mistake: "Confundirlo con el nivel recibido despues de la particion; el aislamiento se obtiene de la diferencia entre ambos."
    typical_range: "50 dB a 120 dB"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Puede ser negativo solo si la fuente esta por debajo de la referencia auditiva."
        en: "Can be negative only if the source is below the auditory reference."
    zero_behavior:
      allowed: true
      meaning:
        es: "0 dB corresponde al umbral de audicion."
        en: "0 dB corresponds to the hearing threshold."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[0, 140] dB"
    interpretation_role:
      primary_for:
        - calculo de reduccion sonora requerida
      secondary_for:
        - estimacion de exposicion al ruido
    graph_binding:
      channels:
        - valor inicial antes de aplicar aislamiento
    pedagogical_notes:
      es: "El nivel fuente fija la exigencia acustica: cuanto mayor sea, mayor debe ser [[R_aislamiento]] para alcanzar el objetivo receptor."
      en: "The source level sets the acoustic requirement: the larger it is, the larger [[R_aislamiento]] must be to reach the receiver target."

  - id: IL_rec
    symbol: "IL_r"
    nombre:
      es: Nivel de intensidad en el receptor
      en: Receiver intensity level
    descripcion:
      es: "Nivel sonoro objetivo o medido en el recinto receptor despues de la barrera o particion."
      en: "Target or measured sound level in the receiving room after the barrier or partition."
    unidad_si: "dB"
    dimension: "adimensional (escala logaritmica)"
    is_vector: false
    components: []
    category: observable
    physical_role: boundary_condition
    used_in:
      - calculo de aislamiento requerido
      - verificacion de normativa de ruido
      - diseño de recintos protegidos
    common_mistake: "Usar el nivel receptor como si fuera el indice de aislamiento; el aislamiento es la diferencia entre nivel fuente y receptor."
    typical_range: "20 dB a 85 dB"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Puede ser negativo solo por debajo del umbral de referencia."
        en: "Can be negative only below the reference threshold."
    zero_behavior:
      allowed: true
      meaning:
        es: "0 dB corresponde al umbral de audicion."
        en: "0 dB corresponds to the hearing threshold."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[0, 100] dB"
    interpretation_role:
      primary_for:
        - verificacion de nivel maximo permitido
      secondary_for:
        - calculo de aislamiento disponible
    graph_binding:
      channels:
        - valor final despues de aplicar aislamiento
    pedagogical_notes:
      es: "El nivel receptor es el criterio de cumplimiento: si supera el limite normativo, debe aumentarse [[R_aislamiento]] o reducirse [[IL_fuente]]."
      en: "The receiver level is the compliance criterion: if it exceeds the regulatory limit, [[R_aislamiento]] must be increased or [[IL_fuente]] reduced."

  - id: R_aislamiento
    symbol: "R"
    nombre:
      es: Indice de reduccion sonora
      en: Sound reduction index
    descripcion:
      es: "Parametro que caracteriza la capacidad de un elemento constructivo (tabique, ventana, forjado) para reducir la transmision de energia acustica entre dos espacios."
      en: "Parameter characterising the capacity of a building element (partition, window, floor) to reduce acoustic energy transmission between two spaces."
    unidad_si: "dB"
    dimension: "adimensional (escala logaritmica)"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - diseño de aislamiento acustico en edificios
      - evaluacion de cumplimiento de normativa acustica
      - seleccion de materiales para salas tecnicas y estudios de grabacion
    common_mistake: "Confundir el indice de reduccion sonora R con la absorcion acustica; R describe cuanto sonido no pasa de un espacio a otro (aislamiento), mientras que la absorcion describe cuanto sonido se transforma en calor dentro del mismo espacio."
    typical_range: "20 dB (tabique simple de yeso) a 60 dB (muro de hormigon de alta masa con doble hoja)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positivo; un R mayor indica mejor aislamiento."
        en: "Always positive; a higher R indicates better sound isolation."
    zero_behavior:
      allowed: false
      meaning:
        es: "R nulo indicaria transmision total, es decir, el elemento no aisla nada."
        en: "Zero R would indicate total transmission, meaning the element provides no isolation."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[15, 70] dB"
    interpretation_role:
      primary_for:
        - diseño de particiones acusticas
        - cumplimiento de normas de habitabilidad
      secondary_for:
        - calculo del nivel de presion en el recinto receptor
    graph_binding:
      channels:
        - eje Y en grafico R vs frecuencia (curva de aislamiento)
    pedagogical_notes:
      es: "El indice R varia con la frecuencia: los elementos constructivos suelen aislar peor en las frecuencias de coincidencia mecanica, donde la velocidad de la onda de flexion en el panel iguala a la del sonido en el aire, produciendo un minimo de aislamiento llamado hueco de coincidencia."
      en: "The R index varies with frequency: building elements typically isolate worse at the coincidence frequency, where the bending wave speed in the panel equals the sound speed in air, producing an isolation minimum called the coincidence dip."
`;export{e as default};
