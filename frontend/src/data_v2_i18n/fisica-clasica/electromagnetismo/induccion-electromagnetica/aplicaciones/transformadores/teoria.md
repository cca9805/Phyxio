## Contexto conceptual

Un transformador es un dispositivo estático que transfiere energía eléctrica entre dos circuitos mediante inducción electromagnética mutua. A diferencia de los generadores y motores, no tiene partes móviles: la transferencia de energía ocurre completamente a través del campo magnético en un núcleo ferromagnético compartido.

Los transformadores son la columna vertebral de los sistemas de potencia eléctrica mundiales. Permiten elevar la tensión para la transmisión a grandes distancias con mínimas pérdidas, y luego reducirla para su uso doméstico e industrial. Cada cargador de teléfono, cada subestación eléctrica y cada red de distribución dependen de ellos. Comprender su funcionamiento es comprender cómo la energía eléctrica llega desde las centrales generadoras hasta los enchufes de nuestras casas.

## 🟢 Nivel esencial

Un transformador consta de dos devanados de hilo conductor enrollados alrededor de un núcleo de hierro. Al aplicar tensión alterna al devanado primario, se genera un campo magnético variable que atraviesa el núcleo. Este campo variable induce una tensión en el devanado secundario, permitiendo la transferencia de energía sin conexión eléctrica directa entre ambos circuitos.

La relación entre las tensiones de entrada y salida depende únicamente del número de espiras de cada devanado. Si el secundario tiene más espiras que el primario, la tensión aumenta. Si tiene menos, la tensión disminuye. La corriente se comporta de manera inversa: donde la tensión aumenta, la corriente disminuye proporcionalmente, manteniendo constante la potencia transferida.

Esta simetría entre elevación de tensión y reducción de corriente es la clave de la eficiencia del transporte eléctrico. Las pérdidas por efecto Joule en los cables de transmisión dependen del cuadrado de la corriente, por lo que elevar la tensión y reducir la corriente minimiza dramáticamente las pérdidas en largas distancias.

## 🔵 Nivel formal

La descripción matemática del transformador ideal parte de la ley de Faraday de la inducción electromagnética. La tensión alterna aplicada al primario de [[numero_de_espiras_primario]] espiras genera un flujo magnético alterno en el núcleo. La relación entre las tensiones primaria [[tension_primaria]] y secundaria [[tension_secundaria]] es directamente proporcional a la relación entre el número de espiras:

{{f:relacion_transformacion}}

Esta ecuación revela que la transformación de tensión es puramente geométrica, dependiendo solo de la relación de espiras [[numero_de_espiras_primario]]/[[numero_de_espiras_secundario]]. Un transformador elevador tiene [[numero_de_espiras_secundario]] > [[numero_de_espiras_primario]], mientras que uno reductor tiene [[numero_de_espiras_secundario]] < [[numero_de_espiras_primario]].

La conservación de la potencia en el transformador ideal implica que la potencia aparente en el primario iguala a la del secundario. Como la potencia es el producto de tensión por corriente, las corrientes deben obedecer una relación inversa:

{{f:relacion_corriente}}

La potencia aparente [[potencia_aparente]], producto de [[tension_primaria]] por [[corriente_primaria]], representa la capacidad de transferencia del transformador. Este parámetro nominal limita las corrientes máximas admisibles en ambos devanados:

{{f:potencia_aparente}}

En un transformador real, las pérdidas energéticas reducen ligeramente la eficiencia. El rendimiento [[eta]] compara la potencia activa de salida [[potencia_activa_de_salida]] con la potencia activa de entrada [[potencia_activa_de_entrada]], cuantificando la fracción de potencia útil transferida:

{{f:rendimiento_transformador}}

Las pérdidas totales [[perdidas_totales]] se componen de las pérdidas en los devanados de cobre por efecto Joule [[perdidas_en_cobre]] y las pérdidas en el núcleo de hierro por histéresis y corrientes parásitas [[perdidas_en_hierro]]:

{{f:perdidas_totales}}

## 🔴 Nivel estructural

Las cinco ecuaciones anteriores forman un sistema coherente que describe completamente el funcionamiento del transformador en régimen estacionario. La tensión primaria [[tension_primaria]] y la relación de espiras [[numero_de_espiras_primario]]/[[numero_de_espiras_secundario]] determinan la tensión secundaria disponible [[tension_secundaria]]. La carga conectada al secundario demanda una corriente [[corriente_secundaria]] que, por conservación de potencia, impone una corriente primaria [[corriente_primaria]] ajustada por la misma relación de espiras pero de forma inversa.

Esta cadena de dependencias revela un principio fundamental: el transformador es un dispositivo pasivo que se adapta automáticamente a la carga. Si la impedancia del secundario disminuye, aumenta [[corriente_secundaria]] y consecuentemente [[corriente_primaria]], manteniendo el balance energético. El primario solo consume la corriente necesaria para suministrar la potencia demandada por el secundario más las pérdidas.

La potencia aparente nominal [[potencia_aparente]] es el parámetro de diseño que limita la capacidad máxima de transferencia. Para cualquier punto de operación, las corrientes deben satisfacer [[tension_primaria]] × [[corriente_primaria]] ≤ [[potencia_aparente]] y [[tension_secundaria]] × [[corriente_secundaria]] ≤ [[potencia_aparente]]. Exceder estos límites causa sobrecalentamiento por pérdidas excesivas en los conductores.

El rendimiento [[eta]] alcanza su máximo típicamente entre el 50% y el 75% de la carga nominal. A bajas cargas, las pérdidas fijas en el hierro dominan. A plena carga, las pérdidas variables en el cobre se vuelven significativas. Esta curva en forma de campana guía la selección del punto de operación óptimo en instalaciones industriales.

La estructura también depende de la frecuencia de trabajo y del estado magnético del núcleo. A frecuencia demasiado baja, el núcleo necesita más flujo para sostener la misma [[tension_primaria]] y puede acercarse a saturación; a frecuencia demasiado alta, aumentan las pérdidas asociadas al material y al diseño de los devanados. Por eso un transformador no es solo una relación de espiras: es un compromiso entre aislamiento, refrigeración, sección de cobre, material magnético y régimen de carga.

> [!WARNING]
> El modelo ideal deja de ser una guía fiable cuando aparecen saturación, calentamiento acumulado, carga no lineal o cortocircuito. En esos casos, [[tension_secundaria]] deja de seguir la relación geométrica simple y las pérdidas [[perdidas_totales]] pasan a controlar la lectura física.

## Interpretación física profunda

La inducción mutua entre devanados es la manifestación física de la interacción entre campos magnéticos variables y circuitos eléctricos. El flujo magnético alterno generado por la corriente primaria enlaza ambos devanados, actuando como puente de energía entre circuitos eléctricamente aislados. Esta separación galvanica permite manipular niveles de tensión sin riesgo de conexión directa entre sistemas de diferente potencial.

Las pérdidas en el hierro representan el costo energético de magnetizar y desmagnetizar cíclicamente el núcleo. La histéresis magnética disipa energía en cada ciclo como calor, mientras las corrientes de Foucault inducidas en el propio núcleo generan pérdidas adicionales. El uso de núcleos laminados reduce estas corrientes parásitas, mejorando la eficiencia global.

El rendimiento cercano al 99% en transformadores de potencia modernos demuestra que las pérdidas pueden minimizarse drásticamente mediante diseño cuidadoso. Sin embargo, la imposibilidad teórica de alcanzar el 100% refleja la naturaleza irreversible de los procesos de magnetización y la resistencia finita de los conductores.

## Orden de magnitud

Un transformador de distribución doméstico típico tiene una relación de 13800 V a 230 V, con una potencia nominal de 50 kVA. Las corrientes nominales son aproximadamente 3.6 A en el primario de alta tensión y 217 A en el secundario de baja tensión. El rendimiento típico es del 98.5%, con pérdidas totales de unos 750 W.

En la transmisión de potencia a larga distancia, transformadores de 500 MVA elevan la tensión de 20 kV a 400 kV. La reducción de corriente de 25000 A a 1250 A disminuye las pérdidas en las líneas por un factor de 400, haciendo viable el transporte eléctrico transcontinental.

## Método de resolución personalizado

Para resolver problemas de transformadores, seguir el siguiente orden. Primero identificar los datos conocidos: [[numero_de_espiras_primario]], [[numero_de_espiras_secundario]], [[tension_primaria]], [[tension_secundaria]], [[corriente_primaria]], [[corriente_secundaria]], [[potencia_aparente]], o [[eta]]. Segundo, determinar la relación de transformación [[numero_de_espiras_primario]]/[[numero_de_espiras_secundario]]. Tercero, calcular la magnitud desconocida usando la relación directa para tensiones o la inversa para corrientes. Cuarto, verificar la conservación de la potencia aparente. Quinto, si hay datos de pérdidas o rendimiento, aplicar el balance energético correspondiente.

Recordar que en el transformador ideal el cociente entre tensiones sigue el cociente entre espiras, mientras que el cociente entre corrientes sigue la relación inversa. Si se conoce [[potencia_aparente]], cada corriente nominal se obtiene dividiendo esa potencia aparente por la tensión del devanado correspondiente.

## Casos especiales y ejemplo extendido

El transformador en vacío es el caso donde no hay carga conectada al secundario. La corriente [[corriente_secundaria]] es cero, y el primario solo consume la pequeña corriente de magnetización necesaria para establecer el flujo en el núcleo. Este ensayo permite medir las pérdidas en el hierro [[perdidas_en_hierro]].

El cortocircuito es el caso límite donde el secundario está directamente cortado. La corriente teórica sería infinita, pero la impedancia interna del transformador la limita a un valor finito pero muy elevado. El ensayo de cortocircuito permite determinar las pérdidas en cobre [[perdidas_en_cobre]] a plena carga.

Ejemplo extendido: un transformador con mil espiras en el primario y cincuenta en el secundario tiene una relación de transformación de veinte a uno. Con [[tension_primaria]] de 230 V, la tensión secundaria resulta de 11.5 V. Si la carga conectada demanda [[corriente_secundaria]] de 4 A, la potencia de salida es aproximadamente 46 W. La corriente primaria queda alrededor de 0.2 A, porque la corriente se reduce en el primario en la misma proporción inversa. Con un rendimiento del 95%, las pérdidas son aproximadamente 2.4 W y la potencia de entrada aproximadamente 48.4 W. Estas magnitudes son típicas de un transformador de pequeña potencia para aplicaciones electrónicas.

## Preguntas reales del alumno

¿Por qué un transformador no funciona con corriente continua? Porque se necesita un campo magnético variable para inducir tensión en el secundario. Con CC, el flujo es constante y no hay inducción.

¿Por qué hace ruido un transformador? Por la magnetostricción: el núcleo de hierro cambia ligeramente de dimensiones al magnetizarse cíclicamente, generando vibraciones mecánicas.

¿Puede un transformador elevar la potencia? No. La potencia activa de salida siempre es menor que la de entrada debido a las pérdidas. Solo transforma el producto tensión-corriente, manteniendo aproximadamente constante la potencia.

¿Qué pasa si sobrecargo un transformador? Las pérdidas en cobre crecen con el cuadrado de la corriente, generando calor excesivo que puede dañar el aislamiento y provocar cortocircuitos internos.

## Conexiones transversales y rutas de estudio

El transformador conecta directamente con los conceptos de inducción electromagnética de Faraday y con la conservación de la energía. Es la aplicación práctica más importante de la inducción mutua entre circuitos. La relación inversa entre tensión y corriente refleja la conservación de la potencia en sistemas sin partes móviles.

Conecta también con la ley de Ohm, ya que la carga del secundario determina la corriente demandada. El análisis de circuitos con transformadores requiere comprender la reflexión de impedancias del secundario al primario.

A nivel avanzado, los transformadores trifásicos son la base de la generación, transmisión y distribución de energía eléctrica moderna. La comprensión del transformador monofásico es el prerrequisito indispensable para abordar estos sistemas.

## Síntesis final

El transformador transfiere energía eléctrica entre circuitos mediante inducción electromagnética mutua en un núcleo ferromagnético común. La relación de transformación entre tensiones es directa a la relación de espiras, mientras que entre corrientes es inversa, conservando la potencia. Las pérdidas en cobre e hierro reducen la eficiencia por debajo del 100%, aunque los transformadores modernos alcanzan rendimientos superiores al 98%. La ausencia de partes móviles los hace robustos y confiables, constituyendo el elemento fundamental de los sistemas de potencia eléctrica modernos.