const e=`formulas:

  - id: conversion_celsius_kelvin
    title:
      es: Conversión entre Celsius y kelvin
      en: Conversion between Celsius and kelvin

    equation: "T_K = T_C + 273.15"
    latex: "T_K = T_C + 273.15"

    rearrangements:
      - target: T_K
        equation: "T_K = T_C + 273.15"
        latex: "T_K = T_C + 273.15"
      - target: T_C
        equation: "T_C = T_K - 273.15"
        latex: "T_C = T_K - 273.15"

    category: fundamental
    relation_type: definition

    physical_meaning:
      es: "Establece la relación exacta entre la escala kelvin (termodinámica absoluta) y la escala Celsius (práctica). La diferencia de 273.15 unidades refleja que el cero Celsius corresponde al punto de fusión del agua, que se sitúa 273.15 kelvins por encima del cero absoluto."
      en: "Establishes the exact relationship between the kelvin scale (absolute thermodynamic) and the Celsius scale (practical). The offset of 273.15 units reflects that Celsius zero corresponds to the melting point of water, which lies 273.15 kelvins above absolute zero."

    constraints:
      - "T_K > 0 (el cero absoluto no se alcanza en la práctica)"
      - "T_C > -273.15 (límite inferior físico)"
      - "La relación es exacta por definición del SI desde 1954"

    validity:
      es: "Válida para cualquier temperatura por encima del cero absoluto. Es una relación de definición exacta establecida por el Bureau International des Poids et Mesures; no tiene límites de validez física, solo el límite inferior T_K > 0."
      en: "Valid for any temperature above absolute zero. It is an exact definitional relationship established by the Bureau International des Poids et Mesures; it has no physical validity limits, only the lower bound T_K > 0."

    dimension_check: "[Θ] = [Θ] + escalar → dimensionalmente consistente; 273.15 es un desplazamiento de escala numérico sin dimensión propia en el contexto de conversión de escalas."

    calculable: true
    motivo_no_calculable: ""

    used_in:
      - conversión de datos meteorológicos a SI
      - aplicación de leyes de gases ideales y radiación
      - calibración de termómetros

    interpretation_tags:
      - conversion_scale
      - absolute_temperature
      - practical_temperature

    result_semantics:
      target: T_K
      kind: scalar_unsigned
      sign_meaning:
        es: "T_K siempre es positiva. Un resultado negativo indica un error en T_C (valor menor de -273.15 °C), físicamente imposible."
        en: "T_K is always positive. A negative result indicates an error in T_C (value below -273.15 °C), which is physically impossible."
      absolute_value_meaning:
        es: "El valor numérico de T_K indica cuántos kelvins separan al sistema del cero absoluto. A mayor T_K, mayor agitación térmica de las partículas."
        en: "The numerical value of T_K indicates how many kelvins separate the system from absolute zero. Higher T_K means greater thermal agitation of particles."

    domain_checks:
      - "T_K >= 0"
      - "T_C >= -273.15"

    coherence_checks:
      - "T_K debe ser siempre aproximadamente 273 unidades mayor que T_C para temperaturas cerca del cero Celsius"
      - "Si T_C es positivo, T_K debe ser mayor que 273"

    graph_implications:
      - "En la gráfica T_K vs T_C la relación es una recta de pendiente 1 con ordenada en el origen 273.15; el punto (0, 273.15) corresponde al punto de fusión del agua"

    pedagogical_triggers:
      - "Si el alumno obtiene T_K < 0, casi siempre es porque confundió el signo o el valor de T_C"
      - "Si el alumno obtiene T_K = T_C, ha olvidado añadir el desplazamiento de 273.15"

  - id: conversion_fahrenheit_celsius
    title:
      es: Conversión entre Fahrenheit y Celsius
      en: Conversion between Fahrenheit and Celsius

    equation: "T_F = 9/5 * T_C + 32"
    latex: "T_F = \\\\frac{9}{5} T_C + 32"

    rearrangements:
      - target: T_F
        equation: "T_F = 9/5 * T_C + 32"
        latex: "T_F = \\\\frac{9}{5} T_C + 32"
      - target: T_C
        equation: "T_C = 5/9 * (T_F - 32)"
        latex: "T_C = \\\\frac{5}{9}(T_F - 32)"

    category: fundamental
    relation_type: definition

    physical_meaning:
      es: "Establece la relación entre las escalas Fahrenheit y Celsius. El factor 9/5 refleja que el intervalo entre los puntos de fusión (0 °C / 32 °F) y ebullición del agua (100 °C / 212 °F) se divide en 100 partes en Celsius y en 180 partes en Fahrenheit. El término +32 desplaza el origen."
      en: "Establishes the relationship between the Fahrenheit and Celsius scales. The factor 9/5 reflects that the interval between the water freezing (0 °C / 32 °F) and boiling (100 °C / 212 °F) points is divided into 100 parts in Celsius and 180 parts in Fahrenheit. The +32 term shifts the origin."

    constraints:
      - "T_F > -459.67 (cero absoluto en Fahrenheit)"
      - "T_C > -273.15 (cero absoluto en Celsius)"
      - "La relación es exacta por definición"

    validity:
      es: "Válida para cualquier temperatura por encima del cero absoluto. Relación de definición exacta entre ambas escalas; sin límites de validez física salvo T_K > 0."
      en: "Valid for any temperature above absolute zero. An exact definitional relationship between both scales; no physical validity limits other than T_K > 0."

    dimension_check: "[Θ] = (adimensional) · [Θ] + escalar → consistente en escala; ambos lados tienen la misma dimensión de temperatura una vez aplicado el desplazamiento de escala."

    calculable: true
    motivo_no_calculable: ""

    used_in:
      - conversión de pronósticos meteorológicos EE.UU. a SI
      - recetas de cocina con temperaturas en Fahrenheit
      - datos clínicos y temperatura corporal en contexto anglosajón

    interpretation_tags:
      - conversion_scale
      - fahrenheit
      - celsius

    result_semantics:
      target: T_F
      kind: scalar_signed
      sign_meaning:
        es: "T_F negativo corresponde a temperaturas por debajo de -17.78 °C. Es posible en condiciones de frío extremo (inviernos continentales, aplicaciones criogénicas). No indica error por sí solo."
        en: "Negative T_F corresponds to temperatures below -17.78 °C. This is possible under extreme cold conditions (continental winters, cryogenic applications). It does not indicate an error by itself."
      absolute_value_meaning:
        es: "El valor absoluto de T_F indica la distancia numérica al cero de la escala Fahrenheit, que es una referencia histórica sin significado físico especial."
        en: "The absolute value of T_F indicates the numerical distance from the Fahrenheit scale zero, which is a historical reference with no special physical significance."

    domain_checks:
      - "T_F >= -459.67"
      - "T_C >= -273.15"

    coherence_checks:
      - "El punto de fusión del agua debe producir T_F = 32 cuando T_C = 0"
      - "El punto de ebullición del agua debe producir T_F = 212 cuando T_C = 100"
      - "La temperatura corporal normal (~37 °C) corresponde aproximadamente a 98.6 °F"

    graph_implications:
      - "En la gráfica T_F vs T_C la relación es una recta de pendiente 1.8 con ordenada en el origen 32; las dos escalas coinciden en el valor -40 (tanto -40 °C como -40 °F)"

    pedagogical_triggers:
      - "Si el alumno olvida el +32 al convertir desde Celsius, obtendrá un resultado 32 unidades menor"
      - "Si el alumno usa el factor 9/5 en la dirección incorrecta (multiplica cuando debería dividir), el error es un factor de 3.24 aproximadamente"
      - "El punto de equivalencia -40 = -40 es un buen punto de verificación de la fórmula"

  - id: variacion_temperatura
    title:
      es: Variación de temperatura
      en: Temperature change

    equation: "DeltaT = T_K"
    latex: "\\\\Delta T = T_{K,f} - T_{K,i}"

    rearrangements:
      - target: DeltaT
        equation: "DeltaT = T_K"
        latex: "\\\\Delta T = T_{K,f} - T_{K,i}"

    category: fundamental
    relation_type: definition

    physical_meaning:
      es: "Define la variación de temperatura como la diferencia entre el estado final y el estado inicial del sistema. El signo de DeltaT determina el sentido del proceso: positivo para calentamiento, negativo para enfriamiento. En diferencias de temperatura, Celsius y kelvin producen el mismo valor numérico."
      en: "Defines temperature change as the difference between the final and initial state of the system. The sign of DeltaT determines the direction of the process: positive for heating, negative for cooling. For temperature differences, Celsius and kelvin give the same numerical value."

    constraints:
      - "T_final y T_inicial deben estar en la misma escala (ambas en Celsius o ambas en kelvin)"
      - "No mezclar escalas en la resta"

    validity:
      es: "Válida para cualquier proceso en el que la temperatura inicial y final estén definidas. Es una definición de proceso, no una ley física; siempre válida mientras el proceso sea cuasi-estático o el estado inicial y final estén bien definidos."
      en: "Valid for any process in which the initial and final temperatures are defined. It is a process definition, not a physical law; always valid as long as the process is quasi-static or the initial and final states are well defined."

    dimension_check: "[Θ] = [Θ] - [Θ] → dimensionalmente consistente."

    calculable: false
    motivo_no_calculable: "DeltaT es una magnitud de entrada directa: el usuario introduce la diferencia de temperaturas. No se calcula como output de esta fórmula sino que se introduce manualmente a partir de T_final y T_inicial medidos."

    used_in:
      - ley de calor específico
      - ley de dilatación térmica
      - análisis de procesos de calentamiento y enfriamiento
      - calorimetría y equilibrio térmico

    interpretation_tags:
      - process_variable
      - heating_cooling
      - sign_convention

    result_semantics:
      target: DeltaT
      kind: scalar_signed
      sign_meaning:
        es: "DeltaT positivo indica calentamiento del sistema (T_final > T_inicial). DeltaT negativo indica enfriamiento (T_final < T_inicial). El signo es información física esencial."
        en: "Positive DeltaT indicates heating of the system (T_final > T_inicial). Negative DeltaT indicates cooling (T_final < T_inicial). The sign is essential physical information."
      absolute_value_meaning:
        es: "El valor absoluto de DeltaT indica cuántos grados o kelvins cambió la temperatura del sistema, independientemente del sentido del proceso."
        en: "The absolute value of DeltaT indicates how many degrees or kelvins the system's temperature changed, regardless of the direction of the process."

    domain_checks:
      - "T_final y T_inicial deben ser positivas en kelvin"
      - "DeltaT puede ser positivo, negativo o cero"

    coherence_checks:
      - "Si el enunciado describe calentamiento, DeltaT debe ser positivo"
      - "Si el enunciado describe enfriamiento, DeltaT debe ser negativo"
      - "DeltaT cero puede indicar equilibrio térmico o proceso isotérmico"

    graph_implications:
      - "En la gráfica T vs t (temperatura frente a tiempo), DeltaT es la diferencia de ordenadas entre dos instantes; una pendiente positiva indica DeltaT positivo en ese intervalo"

    pedagogical_triggers:
      - "El error más frecuente es calcular T_inicial menos T_final, obteniendo el signo opuesto al correcto"
      - "Algunos alumnos confunden DeltaT con la temperatura absoluta T_K, especialmente al aplicar la ley de gases ideales"
`;export{e as default};
