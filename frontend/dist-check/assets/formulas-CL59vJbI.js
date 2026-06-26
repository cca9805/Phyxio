const e=`version: "1.0"
leaf_id: efecto-doppler

ui:
  default_formula: doppler_general

formulas:

  - id: doppler_general
    title:
      es: "Formula general del efecto Doppler"
      en: "General Doppler effect formula"
    equation: "f_obs = f_fuente * (v_sonido + v_receptor) / (v_sonido - v_fuente)"
    latex: "f_{obs} = f_s \\\\cdot \\\\frac{v + v_r}{v - v_s}"
    rearrangements:
      - target: f_obs
        equation: "f_obs = f_fuente * (v_sonido + v_receptor) / (v_sonido - v_fuente)"
        latex: "f_{obs} = f_s \\\\cdot \\\\frac{v + v_r}{v - v_s}"
      - target: f_fuente
        equation: "f_fuente = f_obs * (v_sonido - v_fuente) / (v_sonido + v_receptor)"
        latex: "f_s = f_{obs} \\\\cdot \\\\frac{v - v_s}{v + v_r}"
      - target: v_fuente
        equation: "v_fuente = v_sonido - f_fuente * (v_sonido + v_receptor) / f_obs"
        latex: "v_s = v - f_s \\\\cdot \\\\frac{v + v_r}{f_{obs}}"
      - target: v_receptor
        equation: "v_receptor = f_obs * (v_sonido - v_fuente) / f_fuente - v_sonido"
        latex: "v_r = f_{obs} \\\\cdot \\\\frac{v - v_s}{f_s} - v"
    category: fundamental
    relation_type: wave_kinematics
    physical_meaning:
      es: "La formula Doppler general describe como cambia la frecuencia percibida por un receptor en movimiento cuando escucha una fuente también en movimiento, a traves de un medio cuya velocidad de propagacion es [[v_sonido]]. El numerador (v_sonido mas v_receptor) cuantifica el efecto del movimiento del receptor: si se mueve hacia la fuente, intercepta mas frentes de onda por unidad de tiempo. El denominador (v_sonido menos v_fuente) cuantifica el efecto del movimiento de la fuente: si se acerca al receptor, comprime los frentes de onda en la direccion de avance. Convenio de signos estandar: [[v_receptor]] positivo cuando se mueve hacia la fuente; [[v_fuente]] positivo cuando se aleja del receptor."
      en: "The general Doppler formula describes how the frequency perceived by a moving receiver changes when it listens to a also-moving source, through a medium whose propagation speed is [[v_sonido]]. The numerator (v_sonido plus v_receptor) quantifies the effect of receiver motion: moving toward the source intercepts more wavefronts per unit time. The denominator (v_sonido minus v_fuente) quantifies the effect of source motion: approaching the receiver compresses wavefronts in the forward direction. Standard sign convention: [[v_receptor]] positive when moving toward source; [[v_fuente]] positive when moving away from receiver."
    constraints:
      - "La velocidad de la fuente debe ser menor que [[v_sonido]]; de lo contrario se produce el cono de Mach y la formula no aplica"
      - "La formula es valida para movimiento a lo largo de la linea que une fuente y receptor; para angulos oblicuos se necesita la componente radial de la velocidad"
      - "Las velocidades [[v_fuente]] y [[v_receptor]] son respecto al medio, no respecto entre si"
      - "El convenio de signos debe aplicarse consistentemente: v_receptor positivo hacia la fuente; v_fuente positivo alejandose del receptor"
    validity:
      es: "Valida para fuentes y receptores moviendose a velocidades subsonicas (v_fuente menor que v_sonido y v_receptor menor que v_sonido) a lo largo de la linea de vision. Para el efecto Doppler relativista (velocidades comparables a la luz) se requiere la formula relativista. Para movimiento transversal puro (angulo de 90 grados) el efecto Doppler clasico es nulo pero el efecto Doppler relativista no."
      en: "Valid for sources and receivers moving at subsonic speeds (v_fuente less than v_sonido and v_receptor less than v_sonido) along the line of sight. For the relativistic Doppler effect (velocities comparable to light) the relativistic formula is required. For purely transverse motion (90-degree angle) the classical Doppler effect is zero but the relativistic Doppler effect is not."
    dimension_check: "Hz * ([m/s] + [m/s]) / ([m/s] - [m/s]) = Hz * [adimensional] = Hz ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - radar de velocidad de vehiculos en carretera
      - ecografia Doppler de flujo sanguineo y cardiaco
      - sonar Doppler de navegacion submarina
      - meteorologia Doppler para deteccion de vientos
      - astrometria y medicion de velocidades radiales estelares
    interpretation_tags:
      - frecuencia_observada
      - movimiento_relativo
      - efecto_doppler
    result_semantics:
      target: f_obs
      kind: frecuencia
      sign_meaning:
        es: "Siempre positiva. El efecto Doppler no cambia el signo de la frecuencia sino su magnitud."
        en: "Always positive. The Doppler effect does not change the sign of frequency, only its magnitude."
      absolute_value_meaning:
        es: "Si [[f_obs]] mayor que [[f_fuente]], la fuente se acerca al receptor. Si [[f_obs]] menor que [[f_fuente]], se aleja."
        en: "If [[f_obs]] is greater than [[f_fuente]], the source approaches the receiver. If [[f_obs]] is less than [[f_fuente]], it recedes."
    domain_checks:
      - "v_sonido - v_fuente > 0 (condicion subsonica de la fuente)"
      - "f_obs > 0"
      - "f_fuente > 0"
      - "v_sonido > 0"
    coherence_checks:
      - "Con v_fuente igual a 0 y v_receptor igual a 0, f_obs debe ser igual a f_fuente (sin movimiento, sin desplazamiento Doppler)"
      - "Con fuente acercandose (v_fuente negativo en la convencion), f_obs debe ser mayor que f_fuente"
      - "Con fuente alejandose (v_fuente positivo en la convencion), f_obs debe ser menor que f_fuente"
    graph_implications:
      - "En un grafico f_obs vs v_fuente, la relacion es hiperbola con asintota en v_fuente igual a v_sonido"
      - "La curva es monotonamente creciente conforme v_fuente va de positivo (alejandose) a negativo (acercandose)"
    pedagogical_triggers:
      - "Si f_obs resulta negativa, el denominador es negativo: la fuente supera la velocidad del sonido y la formula no aplica"
      - "Si f_obs igual a f_fuente para velocidades distintas de cero, verificar el convenio de signos"
      - "Si el resultado parece el doble o la mitad de lo esperado, revisar si se esta usando la version fuente en movimiento o la version receptor en movimiento aisladamente"

  - id: doppler_fuente_movil
    title:
      es: "Efecto Doppler con fuente movil y receptor fijo"
      en: "Doppler effect with moving source and fixed receiver"
    equation: "f_obs = f_fuente * v_sonido / (v_sonido - v_fuente)"
    latex: "f_{obs} = f_s \\\\cdot \\\\frac{v}{v - v_s}"
    rearrangements:
      - target: f_obs
        equation: "f_obs = f_fuente * v_sonido / (v_sonido - v_fuente)"
        latex: "f_{obs} = f_s \\\\cdot \\\\frac{v}{v - v_s}"
      - target: v_fuente
        equation: "v_fuente = v_sonido * (1 - f_fuente / f_obs)"
        latex: "v_s = v \\\\left(1 - \\\\frac{f_s}{f_{obs}}\\\\right)"
    category: fundamental
    relation_type: wave_kinematics
    physical_meaning:
      es: "Caso particular de la formula general para receptor fijo (v_receptor igual a 0). Aqui el unico factor activo es el movimiento de la fuente, que comprime los frentes de onda cuando se acerca (v_fuente negativo, denominador mayor, f_obs mayor) o los estira cuando se aleja (v_fuente positivo, denominador menor, f_obs menor). La convencion de esta formula es: v_fuente positivo cuando la fuente se acerca al receptor."
      en: "Particular case of the general formula for fixed receiver (v_receptor equals 0). Here the only active factor is source motion, which compresses wavefronts when approaching (v_fuente positive, smaller denominator, higher f_obs) or stretches them when receding (v_fuente negative, larger denominator, lower f_obs). Convention here: v_fuente positive when source approaches the receiver."
    constraints:
      - "Receptor en reposo respecto al medio"
      - "v_fuente menor que v_sonido (movimiento subsónico)"
    validity:
      es: "Valida cuando el receptor es fijo respecto al medio y la fuente se mueve subsonicamente."
      en: "Valid when the receiver is stationary relative to the medium and the source moves subsonically."
    dimension_check: "Hz * [m/s] / [m/s] = Hz ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - paso de un vehiculo con sirena frente a un observador fijo
      - paso de un avion frente a un detector en tierra
      - sonar activo con receptor fijo en el fondo marino
    interpretation_tags:
      - fuente_movil
      - receptor_fijo
    result_semantics:
      target: f_obs
      kind: frecuencia
      sign_meaning:
        es: "Siempre positiva."
        en: "Always positive."
      absolute_value_meaning:
        es: "Cuanto mayor es la velocidad de acercamiento de la fuente, mayor es [[f_obs]] respecto a [[f_fuente]]."
        en: "The greater the source approach speed, the greater [[f_obs]] relative to [[f_fuente]]."
    domain_checks:
      - "v_sonido - v_fuente > 0"
    coherence_checks:
      - "Para v_fuente igual a 0.5 veces v_sonido acercandose, f_obs debe ser 2 veces f_fuente"
      - "Para v_fuente igual a 0.5 veces v_sonido alejandose, f_obs debe ser dos tercios de f_fuente"
    graph_implications:
      - "Asintota vertical en v_fuente igual a v_sonido (boom sonico): f_obs tiende a infinito"
    pedagogical_triggers:
      - "Si f_obs resulta negativa o infinita, v_fuente ha superado v_sonido"

  - id: doppler_receptor_movil
    title:
      es: "Efecto Doppler con receptor movil y fuente fija"
      en: "Doppler effect with moving receiver and fixed source"
    equation: "f_obs = f_fuente * (v_sonido + v_receptor) / v_sonido"
    latex: "f_{obs} = f_s \\\\cdot \\\\frac{v + v_r}{v}"
    rearrangements:
      - target: f_obs
        equation: "f_obs = f_fuente * (v_sonido + v_receptor) / v_sonido"
        latex: "f_{obs} = f_s \\\\cdot \\\\frac{v + v_r}{v}"
      - target: v_receptor
        equation: "v_receptor = v_sonido * (f_obs / f_fuente - 1)"
        latex: "v_r = v \\\\left(\\\\frac{f_{obs}}{f_s} - 1\\\\right)"
    category: fundamental
    relation_type: wave_kinematics
    physical_meaning:
      es: "Caso particular de la formula general para fuente fija (v_fuente igual a 0). El receptor en movimiento intercepta mas frentes de onda por segundo cuando se mueve hacia la fuente (v_receptor positivo) o menos cuando se aleja (v_receptor negativo). El cociente (v_sonido mas v_receptor) partido entre v_sonido es el factor por el que se multiplica [[f_fuente]]. Convencion: v_receptor positivo cuando el receptor se acerca a la fuente."
      en: "Particular case of the general formula for fixed source (v_fuente equals 0). The moving receiver intercepts more wavefronts per second when moving toward the source (v_receptor positive) or fewer when moving away (v_receptor negative). The ratio (v_sonido plus v_receptor) divided by v_sonido is the factor by which [[f_fuente]] is multiplied. Convention: v_receptor positive when the receiver moves toward the source."
    constraints:
      - "Fuente en reposo respecto al medio"
      - "No hay restriccion de velocidad subsonica para el receptor (puede acercarse a cualquier velocidad)"
    validity:
      es: "Valida cuando la fuente es fija respecto al medio y el receptor se mueve. No hay singularidad en v_receptor igual a v_sonido (la formula da f_obs igual a 2 veces f_fuente, un resultado finito)."
      en: "Valid when the source is fixed relative to the medium and the receiver moves. There is no singularity at v_receptor equals v_sonido (the formula gives f_obs equals 2 times f_fuente, a finite result)."
    dimension_check: "Hz * ([m/s] + [m/s]) / [m/s] = Hz ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - camion de bomberos que pasa frente al receptor
      - ciclista que pasa junto a un altavoz fijo
      - receptor en movimiento en campo acustico estatico
    interpretation_tags:
      - receptor_movil
      - fuente_fija
    result_semantics:
      target: f_obs
      kind: frecuencia
      sign_meaning:
        es: "Siempre positiva para velocidades del receptor inferiores a v_sonido en sentido contrario."
        en: "Always positive for receiver speeds below v_sonido in the opposite direction."
      absolute_value_meaning:
        es: "El factor (v_sonido mas v_receptor) partido entre v_sonido da directamente la razon de frecuencias [[f_obs]]/[[f_fuente]]."
        en: "The factor (v_sonido plus v_receptor) divided by v_sonido directly gives the frequency ratio [[f_obs]]/[[f_fuente]]."
    domain_checks:
      - "v_sonido > 0"
    coherence_checks:
      - "Para v_receptor igual a v_sonido acercandose, f_obs debe ser 2 veces f_fuente"
      - "Para v_receptor igual a 0, f_obs debe ser igual a f_fuente"
    graph_implications:
      - "En un grafico f_obs vs v_receptor, la relacion es lineal (a diferencia del caso de fuente movil que es hiperbola)"
    pedagogical_triggers:
      - "Si f_obs resulta negativa, v_receptor (en sentido contrario) supera v_sonido"

  - id: desplazamiento_doppler
    title:
      es: "Desplazamiento Doppler"
      en: "Doppler shift"
    equation: "delta_f = f_obs - f_fuente"
    latex: "\\\\Delta f = f_{obs} - f_s"
    rearrangements:
      - target: delta_f
        equation: "delta_f = f_obs - f_fuente"
        latex: "\\\\Delta f = f_{obs} - f_s"
      - target: f_obs
        equation: "f_obs = f_fuente + delta_f"
        latex: "f_{obs} = f_s + \\\\Delta f"
    category: derived
    relation_type: definition
    physical_meaning:
      es: "El desplazamiento Doppler es la diferencia de frecuencia entre lo que el receptor percibe y lo que la fuente emite. Es positivo cuando la fuente se acerca (frecuencia sube) y negativo cuando se aleja (frecuencia baja). En muchos sistemas de medicion, es directamente la señal que se procesa para extraer la velocidad del objeto en movimiento."
      en: "The Doppler shift is the frequency difference between what the receiver perceives and what the source emits. It is positive when the source approaches (frequency rises) and negative when it recedes (frequency falls). In many measurement systems, it is directly the signal processed to extract the velocity of the moving object."
    constraints:
      - "Requiere que f_obs y f_fuente sean conocidas o calculadas"
    validity:
      es: "Definicion exacta, siempre valida."
      en: "Exact definition, always valid."
    dimension_check: "Hz - Hz = Hz ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - analisis espectral de señales Doppler
      - calibracion de sistemas de medicion de velocidad
    interpretation_tags:
      - desplazamiento_de_frecuencia
      - velocidad_relativa
    result_semantics:
      target: delta_f
      kind: diferencia_de_frecuencia
      sign_meaning:
        es: "Positivo: acercamiento entre fuente y receptor. Negativo: alejamiento."
        en: "Positive: approach between source and receiver. Negative: recession."
      absolute_value_meaning:
        es: "El valor absoluto de [[delta_f]] es proporcional a la velocidad relativa radial entre fuente y receptor."
        en: "The absolute value of [[delta_f]] is proportional to the radial relative velocity between source and receiver."
    domain_checks:
      - "f_fuente > 0"
    coherence_checks:
      - "Para objeto en reposo, delta_f debe ser 0"
    graph_implications:
      - "En un grafico delta_f vs velocidad radial, la relacion es aproximadamente lineal para velocidades mucho menores que v_sonido"
    pedagogical_triggers:
      - "Si delta_f es positivo y el objeto parece alejarse segun el contexto, revisar el convenio de signos de las velocidades en la formula general"
`;export{e as default};
