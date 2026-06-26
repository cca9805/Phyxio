const e=`# Naturaleza del sonido

## Contexto conceptual

El sonido es una de las experiencias físicas más inmediatas de la vida cotidiana, y sin embargo su naturaleza no siempre se comprende con precisión. Oímos, hablamos y escuchamos música, pero rara vez nos preguntamos qué agita el aire entre la fuente y nuestro oído. Este leaf responde a esa pregunta desde su raíz: el sonido es una **perturbación mecánica que se propaga** a través de un medio material mediante la transmisión de energía de una capa a la siguiente.

A diferencia de la luz, que puede viajar en el vacío, el sonido **necesita un medio material** para existir. No hay sonido en el espacio exterior porque no hay materia que transmita la oscilación. Esta dependencia del medio es, al mismo tiempo, la clave que explica por qué el sonido viaja a velocidades tan distintas en el aire, el agua o el acero, y por qué sus propiedades cambian al cruzar de un medio a otro.

El leaf de naturaleza del sonido es el punto de partida de todo el bloque de sonido. Antes de hablar de reflexión, resonancia o efecto Doppler, es indispensable entender qué se propaga, cómo se propaga y con qué magnitudes se describe esa propagación.

## 🟢 Nivel esencial

Imagina una columna de aire dentro de un tubo. Cuando una membrana vibra en un extremo, empuja la capa de aire adyacente, que se **comprime** ligeramente. Esa compresión empuja a la capa siguiente, y así sucesivamente: la perturbación viaja a lo largo del tubo. Entre compresión y compresión existe una zona de **rarefacción**, donde el aire está ligeramente menos denso que en reposo.

Este es el mecanismo del sonido: una cadena de compresiones y rarefacciones que avanza en la misma dirección en que se desplazan las partículas. Por eso el sonido es una **onda longitudinal**: la oscilación de las partículas es paralela a la dirección de propagación.

Las magnitudes que caracterizan este fenómeno son la **presión acústica** [[p_ac]] —la variación de presión respecto al equilibrio—, la **frecuencia** [[f_son]] —cuántas oscilaciones ocurren por segundo—, la **longitud de onda** [[lambda_son]] —la distancia entre dos compresiones consecutivas— y la **velocidad de propagación** [[v_son]], que depende del medio, no de la fuente.

> [!NOTE]
> El oído humano detecta variaciones de presión [[p_ac]] tan pequeñas como 20 micropascales, equivalentes a un desplazamiento de partícula [[xi]] del orden del diámetro de un átomo. Esto ilustra la extraordinaria sensibilidad del sistema auditivo.

## 🔵 Nivel formal

La descripción matemática más completa del sonido en su caso más simple —una **onda plana armónica** que se propaga en la dirección positiva del eje x— viene dada por la ecuación de presión acústica:

{{f:onda_presion_armonica}}

donde [[p0_ac]] es la amplitud de presión, [[f_son]] es la frecuencia, [[lambda_son]] es la longitud de onda y [[v_son]] es la velocidad de propagación. La ecuación muestra que la presión en cada punto oscila sinusoidalmente en el tiempo y varía sinusoidalmente en el espacio. El argumento del coseno —llamado **fase**— avanza en el tiempo y decrece con la distancia, lo que refleja que el frente de onda se aleja de la fuente.

Las tres magnitudes cinemáticas de la onda quedan ligadas por la relación de dispersión fundamental:

{{f:relacion_vel_freq_lambda}}

Esta ecuación tiene una consecuencia importante: cuando el sonido pasa de un medio a otro, [[f_son]] permanece invariante (la fija la fuente), mientras que [[v_son]] cambia según las propiedades del nuevo medio. Por tanto, [[lambda_son]] también cambia. Esto es la base de la refracción del sonido.

La energía que transporta la onda se cuantifica mediante la **intensidad acústica** [[I_ac]], que es la potencia sonora por unidad de área perpendicular a la propagación:

{{f:intensidad_acustica}}

La dependencia cuadrática de [[I_ac]] con [[p0_ac]] es física y perceptivamente crucial: el oído no responde linealmente al aumento de energía, sino logarítmicamente. Por eso se usa la escala de decibelios para medir niveles sonoros.

> [!TIP]
> El desplazamiento de partícula [[xi]] y la presión acústica [[p_ac]] están desfasados 90°. Donde [[p_ac]] es máxima (pico de compresión), [[xi]] es cero y la velocidad de la partícula es también cero. Donde [[p_ac]] es cero (transición), [[xi]] es máxima y las partículas se mueven a máxima velocidad.

## 🔴 Nivel estructural

La onda sonora es fundamentalmente un **proceso termodinámico oscilante**. Cuando una compresión avanza por el aire, el gas se comprime y calienta ligeramente; cuando llega la rarefacción, se expande y enfría. A frecuencias audibles, este proceso ocurre tan rápido que no hay tiempo para intercambio de calor con el entorno: es un proceso **adiabático**. Esta condición es la que determina que la velocidad del sonido en un gas ideal dependa de la temperatura absoluta y del coeficiente adiabático del gas, no de la presión estática.

La **impedancia acústica** del medio, definida como el producto de la densidad por la velocidad de propagación, gobierna cuánto del sonido se refleja y cuánto se transmite en una interfaz entre dos medios. Una gran diferencia de impedancias —como ocurre entre el aire y el agua— produce reflexión casi total, lo que explica por qué resulta difícil comunicarse acústicamente entre estos dos medios.

El rango de amplitudes físicamente relevantes es enorme. La [[I_ac]] varía doce órdenes de magnitud entre el umbral de audición y el umbral de dolor. La [[p0_ac]] varía seis órdenes de magnitud en ese mismo rango. Esta escala gigantesca explica por qué la percepción subjetiva de la intensidad sonora sigue una ley aproximadamente logarítmica (ley de Weber-Fechner), y por qué el decibelio es una unidad tan natural para describir el sonido.

La longitud de onda [[lambda_son]] del sonido audible en el aire oscila entre unos 17 mm (a 20 kHz) y unos 17 m (a 20 Hz). Esta escala, comparable a la de los objetos cotidianos, tiene consecuencias geométricas directas: el sonido se difracta fácilmente alrededor de esquinas, puertas y obstáculos. En cambio, el ultrasonido de diagnóstico médico (entre 1 y 20 MHz) tiene longitudes de onda submilimétricas, lo que le permite formar imágenes de estructuras internas con resolución espacial fina.

> [!WARNING]
> El modelo de onda plana armónica es una aproximación de campo lejano en medio uniforme; cerca de fuentes, bordes o gradientes de temperatura debe sustituirse por un modelo más completo.

## Interpretación física profunda

La presión acústica [[p_ac]] es la magnitud más directamente vinculada con la percepción auditiva, pero el **desplazamiento de partícula** [[xi]] es la que revela la naturaleza mecánica del proceso. A frecuencias altas, la misma [[p0_ac]] corresponde a desplazamientos [[xi]] cada vez más pequeños, porque la velocidad de oscilación de las partículas crece con la frecuencia aunque la amplitud de posición disminuya.

La intensidad acústica [[I_ac]] es la magnitud energética operativa: es lo que determina el daño auditivo, la eficiencia de los altavoces y el alcance de un sistema de amplificación. Su dependencia cuadrática con [[p0_ac]] significa que **reducir la amplitud a la mitad reduce la intensidad a un cuarto**, no a la mitad. Este hecho tiene implicaciones directas en el diseño de aislamiento acústico: doblar el espesor del aislante no duplica la atenuación en decibelios, sino que la suma.

## Orden de magnitud

En el aire a 20 °C, [[v_son]] es aproximadamente 343 m/s. Para una nota musical de 440 Hz (la4), [[lambda_son]] es aproximadamente 0.78 m, comparable al tamaño de una persona. Para 20 kHz, [[lambda_son]] baja a 17 mm, del orden de un dedo. Para 20 Hz, [[lambda_son]] es 17 m, mayor que una habitación estándar.

La [[I_ac]] del umbral de audición es un billonésimo de watio por metro cuadrado (10⁻¹² W/m²). La conversación normal produce alrededor de 10⁻⁶ W/m², seis órdenes de magnitud por encima del umbral. La [[p0_ac]] correspondiente a la conversación es del orden de 0.02 Pa, dieciséis millones de veces menor que la presión atmosférica.

Detectar un resultado absurdo: si un cálculo produce [[lambda_son]] de micrómetros para una frecuencia audible en el aire, el error es de varios órdenes de magnitud —probablemente se confundió la frecuencia en Hz con la frecuencia angular en rad/s.

## Método de resolución personalizado

Para caracterizar completamente una onda sonora, el procedimiento operativo es:

- **Identificar el medio** y obtener su [[v_son]] (para el aire a temperatura conocida, usar la aproximación de dependencia con la temperatura).
- **Extraer [[f_son]]** del enunciado o del espectro; recordar que [[f_son]] no cambia al cambiar el medio.
- **Calcular [[lambda_son]]** aplicando la relación cinemática [[v_son]] dividida entre [[f_son]].
- **Determinar [[p0_ac]]** del enunciado o de [[I_ac]] usando la fórmula de intensidad despejada.
- **Verificar la coherencia**: la [[lambda_son]] calculada debe caer en el rango esperado para el medio y la frecuencia; [[I_ac]] debe estar dentro del rango audible o del rango de interés del problema.

## Casos especiales y ejemplo extendido

**Caso 1 — Sonido en medios distintos:** Una nota de 440 Hz viaja del aire al agua. En el aire, [[lambda_son]] es 0.78 m con [[v_son]] de 343 m/s. Al entrar en el agua, [[v_son]] es 1480 m/s y [[lambda_son]] pasa a ser 3.36 m. La [[f_son]] permanece en 440 Hz porque es la tasa de oscilación de la fuente, no una propiedad del medio. Este cambio de longitud de onda produce refracción: si el sonido entra oblicuamente en el agua, el frente de onda cambia de dirección.

## Preguntas reales del alumno

**¿Por qué el sonido no puede viajar en el vacío?**
El sonido es una perturbación mecánica: necesita materia para comprimirse y expandirse. Sin partículas que transmitan el impulso de una capa a la siguiente, no hay mecanismo de propagación. Una campana que vibra en el vacío no emite sonido audible porque no hay medio que transporte la oscilación hasta el oído.

**¿Por qué el sonido viaja más rápido en el agua que en el aire si el agua es más densa?**
[[v_son]] en un fluido depende del cociente entre el módulo de compresibilidad y la densidad. El agua es mucho menos compresible que el aire: su módulo de compresibilidad es unas diez mil veces mayor. Aunque su densidad también es unas ochocientas veces mayor, el módulo "gana" y la velocidad resulta unas cuatro veces superior a la del aire.

**¿Por qué [[f_son]] no cambia al pasar de un medio a otro pero [[lambda_son]] sí?**
La [[f_son]] la impone la fuente: es la tasa a la que la membrana de un altavoz, por ejemplo, comprime y expande el fluido. Esa tasa no puede cambiar en la interfaz porque si lo hiciera, las partículas en la frontera recibirían más o menos ciclos de los que emite la fuente, lo que violaría la continuidad del movimiento. En cambio, [[lambda_son]] es el producto de [[v_son]] por el periodo, y como [[v_son]] cambia al cambiar el medio, [[lambda_son]] cambia proporcionalmente.

## Conexiones transversales y rutas de estudio

La naturaleza del sonido conecta directamente con el leaf de [velocidad del sonido](leaf:fisica-clasica/ondas/sonido/velocidad-del-sonido), donde se explica en detalle la dependencia de [[v_son]] con las propiedades del medio. Una vez comprendida la onda plana, el leaf de [intensidad ondulatoria](leaf:fisica-clasica/ondas/energia-y-transporte/intensidad-ondulatoria) extiende el concepto de [[I_ac]] a geometrías esféricas y cilíndricas.

El concepto de longitud de onda [[lambda_son]] es fundamental para comprender la difracción y la reflexión del sonido, tratadas en el bloque de [fenómenos ondulatorios](leaf:fisica-clasica/ondas/fenomenos-ondulatorios). La relación cuadrática entre [[I_ac]] y [[p0_ac]] anticipa el concepto de nivel sonoro en decibelios, que se desarrolla en el leaf de intensidad acústica.

## Síntesis final

El sonido es una onda mecánica longitudinal: una sucesión de compresiones y rarefacciones que se propaga a través de la materia transportando energía sin transporte neto de masa. Sus magnitudes descriptivas fundamentales —[[p_ac]], [[f_son]], [[lambda_son]], [[v_son]] e [[I_ac]]— están relacionadas entre sí de manera precisa y verificable. La [[f_son]] pertenece a la fuente; la [[v_son]] pertenece al medio; [[lambda_son]] resulta de ambas. La [[I_ac]] crece como el cuadrado de [[p0_ac]], lo que explica la escala logarítmica de la percepción sonora y la utilidad del decibelio.
`;export{e as default};
