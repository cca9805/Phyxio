# Aplicaciones

## 1. Transformador de distribución eléctrica doméstica

En cada calle de una ciudad o en cada urbanización, un transformador reduce la tensión de distribución de miles de voltios a los 230 V domésticos. El transformador está ubicado en una caseta o subestación cercana al punto de consumo, alimentando decenas o centenares de viviendas. La tensión primaria típica en Europa es de 15 kV o 20 kV, mientras que el secundario proporciona 400 V trifásicos o 230 V monofásicos.

El análisis de esta aplicación comienza con la relación de transformación. La potencia nominal del transformador, típicamente entre 50 kVA y 1000 kVA, determina cuántas viviendas puede alimentar simultáneamente. La hipótesis simplificadora es que la carga está distribuida uniformemente entre fases y que el factor de potencia medio es próximo a 0.9.

Variable dominante: la potencia aparente [[potencia_aparente]] limita la capacidad máxima del transformador y decide cuántas viviendas puede alimentar sin sobrecarga térmica.
Límite de validez: el modelo ideal deja de bastar en horas punta, cuando la carga desequilibrada entre fases causa corrientes de neutro significativas que el modelo básico no contempla.

## 2. Transformador de aislamiento en hospitales y quirófanos

Los transformadores de aislamiento tienen una relación de transformación uno a uno, es decir, igual número de espiras en primario y secundario. Su función no es cambiar la tensión sino separar galvánicamente el circuito alimentado de la red general, aumentando la seguridad eléctrica en ambientes médicos donde los pacientes pueden estar en contacto directo con equipos conductores.

En un quirófano, el transformador de aislamiento alimenta las mesas de operaciones, los equipos de monitorización y los sistemas de iluminación quirúrgica. La hipótesis crítica es que la capacitancia parásita entre devanados es mínima, lo que limita la corriente de fuga en caso de contacto accidental.

Variable dominante: la tensión secundaria [[tension_secundaria]] debe mantenerse dentro de límites estrictos aunque fluctúe la red primaria.
Límite de validez: el modelo ideal es válido solo si el aislamiento galvánico se conserva con impedancia muy alta; cuando aparecen fugas capacitivas o degradación del aislamiento, el análisis debe incluir corrientes de fuga y monitorización clínica.

## 3. Transformador de soldadura por arco eléctrico

Las máquinas de soldadura por arco utilizan transformadores especiales que proporcionan baja tensión, típicamente entre 20 V y 80 V en vacío, y alta corriente, de cientos de amperios, cuando se establece el arco entre el electrodo y la pieza a soldar. El transformador debe soportar cortocircuitos frecuentes y variaciones bruscas de carga.

El diseño de estos transformadores incluye una reactancia de dispersión elevada que limita la corriente de cortocircuito y estabiliza el arco. La hipótesis operativa es que la impedancia interna del transformador es significativa, del orden del 10% a 20%, lo que desvía sustancialmente del modelo ideal.

Variable dominante: la corriente secundaria [[corriente_secundaria]] determina la intensidad del arco, la penetración y el régimen térmico de la soldadura.
Límite de validez: el modelo simple deja de servir cuando el arco es inestable; entonces hay que incluir impedancia de dispersión y la característica no lineal del arco eléctrico.

## 4. Transformador de medida y protección

Los transformadores de corriente y de tensión reducen las magnitudes eléctricas de alta potencia a niveles medibles y seguros para instrumentos y relés de protección. Un transformador de corriente puede reducir 1000 A de una línea de alta tensión a 5 A estandarizados para los equipos de medida.

La precisión es crítica en esta aplicación. Los errores de relación y de ángulo deben mantenerse dentro de límites estrictos definidos por normas internacionales. La hipótesis es que el transformador opera prácticamente en cortocircuito en el secundario para transformadores de corriente, o en vacío para transformadores de tensión.

Variable dominante: la relación de transformación [[numero_de_espiras_primario]]/[[numero_de_espiras_secundario]] debe ser exacta y estable en todo el rango de operación.
Límite de validez: la saturación del núcleo es el efecto limitante; si la corriente primaria excede el valor nominal de diseño, la relación de transformación deja de ser válida y aparecen errores de medida inaceptables.

## 5. Transformador de impedancias en amplificadores de audio

Los transformadores de salida de válvulas en amplificadores de audio adaptan la alta impedancia interna de las válvulas a la baja impedancia de los altavoces. Una válvula puede tener una impedancia de salida de 3000 ohmios, mientras que un altavoz típico tiene 8 ohmios. El transformador realiza esta adaptación conservando la potencia.

La relación óptima de espiras es la raíz cuadrada de la relación de impedancias. En el ejemplo, la relación entre [[numero_de_espiras_primario]] y [[numero_de_espiras_secundario]] debe aproximarse a la raíz cuadrada de 3000 entre 8, alrededor de 19.4. La hipótesis es que el transformador tiene respuesta de frecuencia plana en la banda de audio, entre 20 Hz y 20 kHz.

Variable dominante: la impedancia reflejada depende del cuadrado de la relación de espiras y controla cuánta potencia llega realmente al altavoz.
Límite de validez: el modelo ideal falla en frecuencias extremas, donde capacidades parásitas e inductancias de dispersión degradan la respuesta y aumentan la distorsión.