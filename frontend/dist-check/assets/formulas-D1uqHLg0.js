const e=`version: "1.0"
leaf_id: aplicaciones

ui:
  default_formula: distancia_eco

formulas:

  - id: distancia_eco
    title:
      es: "Distancia por eco (sonar y ecografia)"
      en: "Echo distance (sonar and ultrasound)"
    equation: "d_eco = v_sonido * t_vuelo / 2"
    latex: "d = \\\\frac{v \\\\cdot t}{2}"
    rearrangements:
      - target: d_eco
        equation: "d_eco = v_sonido * t_vuelo / 2"
        latex: "d = \\\\frac{v \\\\cdot t}{2}"
      - target: t_vuelo
        equation: "t_vuelo = 2 * d_eco / v_sonido"
        latex: "t = \\\\frac{2d}{v}"
      - target: v_sonido
        equation: "v_sonido = 2 * d_eco / t_vuelo"
        latex: "v = \\\\frac{2d}{t}"
    category: fundamental
    relation_type: kinematic_relation
    physical_meaning:
      es: "La distancia al objeto se obtiene multiplicando la velocidad del sonido en el medio por la mitad del tiempo de vuelo del eco. El factor 1/2 aparece porque el pulso recorre dos veces la distancia: ida hasta el objeto y vuelta al receptor. Esta ecuacion es el fundamento fisico del sonar, la ecografia medica y los ultrasonidos de inspeccion industrial."
      en: "The distance to the object is obtained by multiplying the speed of sound in the medium by half the echo travel time. The factor 1/2 appears because the pulse covers twice the distance: outward to the object and back to the receiver. This equation is the physical basis of sonar, medical ultrasound and industrial inspection ultrasonics."
    constraints:
      - "El medio es homogeneo: la velocidad del sonido es constante en el recorrido ida y vuelta"
      - "El objeto es suficientemente grande para producir un eco detectable"
      - "El pulso es lo bastante corto para que el eco no se superponga con la emision"
      - "La velocidad del sonido en el medio debe conocerse con precision"
    validity:
      es: "Valido en medios homogeneos y para objetos cuya distancia supera la longitud de resolucion del sistema (mitad de la longitud espacial del pulso). En medios estratificados (agua con gradiente de temperatura, tejido con capas de distinta velocidad), se producen errores sistematicos que requieren correcciones de velocidad."
      en: "Valid in homogeneous media and for objects whose distance exceeds the system resolution length (half the spatial pulse length). In stratified media (water with temperature gradient, tissue with layers of different velocity), systematic errors arise requiring velocity corrections."
    dimension_check: "[L T⁻¹] * [T] / 1 = [L] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - sonar activo de deteccion y navegacion submarina
      - ecografia medica en modo A y modo B
      - medicion ultrasonics de espesor de chapas
      - sensores de aparcamiento por ultrasonidos
    interpretation_tags:
      - distancia_por_eco
      - tiempo_de_vuelo
      - velocidad_en_medio
    result_semantics:
      target: d_eco
      kind: distancia
      sign_meaning:
        es: "Positiva; indica la distancia desde el transductor hasta el objeto reflectante."
        en: "Positive; indicates the distance from the transducer to the reflecting object."
      absolute_value_meaning:
        es: "El valor absoluto de [[d_eco]] da la separacion fisica entre el emisor-receptor y el objeto que produjo el eco."
        en: "The absolute value of [[d_eco]] gives the physical separation between the emitter-receiver and the object that produced the echo."
    domain_checks:
      - "d_eco > 0"
      - "t_vuelo > 0"
      - "v_sonido > 0"
    coherence_checks:
      - "Para sonar en agua (v_sonido cerca de 1500 m/s) y t_vuelo de 1 s, d_eco debe resultar cerca de 750 m"
      - "Para ecografia medica (v_sonido cerca de 1540 m/s) y t_vuelo de 13 µs, d_eco debe resultar cerca de 1 cm"
    graph_implications:
      - "En un grafico d vs t, la relacion es lineal con pendiente v_sonido/2"
      - "Diferentes medios producen rectas de diferente pendiente para el mismo objeto"
    pedagogical_triggers:
      - "Si d_eco resulta el doble del esperado, probablemente se olvido dividir entre 2"
      - "Si d_eco resulta muy pequena para un sonar submarino, verificar que v_sonido esta en m/s y no en km/s"

  - id: nivel_intensidad
    title:
      es: "Nivel de intensidad sonora en decibelios"
      en: "Sound intensity level in decibels"
    equation: "IL = 10 * log10(I / I0)"
    latex: "IL = 10 \\\\log_{10}\\\\!\\\\left(\\\\frac{I}{I_0}\\\\right)"
    rearrangements:
      - target: IL
        equation: "IL = 10 * log10(I / I0)"
        latex: "IL = 10 \\\\log_{10}\\\\!\\\\left(\\\\frac{I}{I_0}\\\\right)"
      - target: I
        equation: "I = I0 * 10^(IL / 10)"
        latex: "I = I_0 \\\\cdot 10^{IL/10}"
    category: derived
    relation_type: definition
    physical_meaning:
      es: "El nivel de intensidad sonora expresa en una escala logaritmica la razon entre la intensidad acustica I y la intensidad de referencia I0, que corresponde al umbral de audicion humana. La escala logaritmica es adecuada porque el oido humano responde proporcionalmente al logaritmo de la intensidad, abarcando un rango de 12 ordenes de magnitud con percepcion casi lineal."
      en: "The sound intensity level expresses in a logarithmic scale the ratio between acoustic intensity I and the reference intensity I0, corresponding to the threshold of human hearing. The logarithmic scale is appropriate because the human ear responds proportionally to the logarithm of intensity, covering 12 orders of magnitude with nearly linear perception."
    constraints:
      - "I0 es la intensidad de referencia de 10⁻¹² W/m² (umbral de audicion en 1 kHz)"
      - "I debe ser positiva (intensidad es potencia por area, siempre no negativa)"
      - "La formula solo aplica a la intensidad acustica, no a la presion directamente"
    validity:
      es: "Valido para cualquier intensidad sonora positiva. Para fuentes en campo libre, la intensidad decae con el cuadrado de la distancia (ley del cuadrado inverso), lo que permite relacionar [[IL]] con la posicion. En recintos cerrados, la contribucion del sonido reverberante modifica esta ley."
      en: "Valid for any positive acoustic intensity. For sources in free field, intensity decays with the square of distance (inverse square law), allowing [[IL]] to be related to position. In enclosed spaces, the reverberant sound contribution modifies this law."
    dimension_check: "log10(W/m² / W/m²) = log10(adimensional) * 10 dB ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - evaluacion de niveles de ruido ambiental
      - diseño de zonas de proteccion acustica
      - especificacion de aislamiento en normativa de edificacion
      - calibracion de sonometros
    interpretation_tags:
      - nivel_de_ruido
      - escala_decibel
      - percepcion_auditiva
    result_semantics:
      target: IL
      kind: nivel_logaritmico
      sign_meaning:
        es: "Puede ser negativo si la intensidad es menor que I0, aunque en la practica el rango util es 0 a 140 dB."
        en: "Can be negative if intensity is below I0, though in practice the useful range is 0 to 140 dB."
      absolute_value_meaning:
        es: "El valor de [[IL]] indica cuantos ordenes de magnitud (en escala de 10 dB por decada) supera la intensidad al umbral de referencia."
        en: "The value of [[IL]] indicates how many orders of magnitude (on a scale of 10 dB per decade) the intensity exceeds the reference threshold."
    domain_checks:
      - "I > 0 (intensidad siempre positiva)"
      - "I0 = 1e-12 W/m² (constante de referencia)"
    coherence_checks:
      - "Para I de 10⁻⁶ W/m², IL debe resultar 60 dB (conversacion normal)"
      - "Para I de 1 W/m², IL debe resultar 120 dB (umbral de dolor)"
    graph_implications:
      - "En un grafico IL vs distancia en campo libre, IL disminuye 6 dB cada vez que la distancia se duplica"
    pedagogical_triggers:
      - "Si IL resulta negativo en una sala normal, verificar que I esta en W/m² y no en mW/m²"
      - "Si dos fuentes de 70 dB suman 140 dB en el calculo, se ha sumado linealmente; la suma correcta da 73 dB"

  - id: aislamiento_requerido
    title:
      es: "Indice de reduccion sonora requerido"
      en: "Required sound reduction index"
    equation: "R_aislamiento = IL_fuente - IL_rec"
    latex: "R = IL_s - IL_r"
    rearrangements:
      - target: R_aislamiento
        equation: "R_aislamiento = IL_fuente - IL_rec"
        latex: "R = IL_s - IL_r"
    category: derived
    relation_type: design_requirement
    physical_meaning:
      es: "El aislamiento minimo requerido es la diferencia entre el nivel sonoro de la fuente y el nivel maximo admisible en el receptor. Si la particion tiene un indice R menor que esa diferencia, el recinto receptor no cumple el limite de ruido."
      en: "The minimum required isolation is the difference between the source sound level and the maximum admissible level at the receiver. If the partition has an R index below that difference, the receiving room does not meet the noise limit."
    constraints:
      - "Los niveles deben referirse a la misma banda de frecuencia o al mismo descriptor global"
      - "El campo acustico debe aproximarse a condiciones difusas o de diseño conservador"
      - "IL_fuente debe ser mayor que IL_rec para requerir aislamiento positivo"
    validity:
      es: "Valido como estimacion inicial de aislamiento en particiones y barreras cuando se comparan niveles de la misma banda o descriptor. En proyectos reales se corrige por area, absorcion del recinto receptor, flanqueos y espectro de la fuente."
      en: "Valid as an initial isolation estimate for partitions and barriers when comparing levels in the same band or descriptor. Real projects correct for area, absorption in the receiving room, flanking paths and source spectrum."
    dimension_check: "dB - dB = dB ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - diseño de mamparas acusticas
      - barreras de trafico
      - cumplimiento de limites de ruido
    interpretation_tags:
      - aislamiento_acustico
      - reduccion_sonora
      - control_de_ruido
    result_semantics:
      target: R_aislamiento
      kind: nivel_logaritmico
      sign_meaning:
        es: "Positivo; indica cuantos decibelios debe reducir la particion."
        en: "Positive; indicates how many decibels the partition must reduce."
      absolute_value_meaning:
        es: "El valor de [[R_aislamiento]] es la reduccion minima de nivel requerida entre fuente y receptor."
        en: "The value of [[R_aislamiento]] is the minimum level reduction required between source and receiver."
    domain_checks:
      - "R_aislamiento >= 0"
      - "IL_fuente >= IL_rec"
    coherence_checks:
      - "Si IL_fuente es 92 dB e IL_rec es 75 dB, R_aislamiento debe ser 17 dB"
      - "Un requisito menor de 10 dB suele ser facil; uno mayor de 50 dB exige particiones especializadas"
    graph_implications:
      - "En un grafico R requerido vs nivel fuente, la relacion es lineal de pendiente 1 para un limite receptor fijo"
    pedagogical_triggers:
      - "Si R_aislamiento resulta negativo, se ha invertido fuente y receptor o el limite receptor es mayor que el nivel fuente"
`;export{e as default};
