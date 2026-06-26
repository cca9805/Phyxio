## 1. Bancadas de máquinas rotativas

Una máquina que gira puede excitar una bancada con una frecuencia [[omega_f]] ligada a su velocidad. Si esa frecuencia cae cerca de [[omega_r]], la amplitud [[X]] puede crecer aunque la fuerza [[F0]] no sea extraordinaria. La resonancia permite decidir si conviene cambiar la velocidad de operación, añadir amortiguamiento o desplazar la rigidez del soporte.

Variable dominante: [[omega_r]], porque localiza la frecuencia crítica que debe compararse con la velocidad de trabajo.

Límite de validez: si hay holguras, impactos o rigidez variable, el pico observado puede no responder al modelo lineal.

En mantenimiento predictivo, el valor práctico está en construir una curva. Medir una sola velocidad no basta: hay que observar si [[X]] sube y baja alrededor de una frecuencia concreta. Si el pico aparece siempre en la misma zona, se puede actuar sobre [[b]], [[m]] o [[k]] con criterio.

## 2. Diseño de instrumentos musicales

Un instrumento aprovecha resonancias para amplificar frecuencias concretas. La caja, cuerda o columna de aire tiene modos que responden con amplitud elevada cuando la excitación coincide con la zona adecuada. En este caso un [[Q]] alto puede ser deseable porque concentra energía en un tono definido.

Variable dominante: [[Q]], porque controla la selectividad y la permanencia del sonido.

Límite de validez: materiales no lineales, acoplamientos entre modos o grandes amplitudes requieren un modelo modal más completo.

La lectura física no es solo acústica. Una resonancia demasiado estrecha puede producir un sonido pobre fuera de una nota, mientras que una resonancia demasiado ancha puede perder definición. El diseño busca un equilibrio entre amplificación, timbre y disipación.

## 3. Aislamiento sísmico y estructural

Edificios, pasarelas y componentes estructurales pueden recibir excitaciones periódicas o casi periódicas. Si la excitación se acerca a [[omega_r]], el desplazamiento puede aumentar de forma peligrosa. La ingeniería intenta alejar la frecuencia propia de las excitaciones habituales o aumentar [[b]] para reducir el pico.

Variable dominante: [[b]], porque el amortiguamiento limita la acumulación de energía y reduce la altura de [[X]].

Límite de validez: cargas extremas, daño material y comportamiento plástico quedan fuera del oscilador lineal simple.

En estructuras reales, la decisión no consiste solo en evitar una frecuencia. También se evalúa el ancho del pico: un sistema con [[Q]] bajo puede tolerar mejor pequeñas variaciones de excitación, mientras que un sistema con [[Q]] alto exige márgenes de seguridad más estrictos.

## 4. Sensores y filtros mecánicos

Algunos sensores se diseñan para responder mucho cerca de una frecuencia de interés. La resonancia amplifica señales pequeñas, lo que mejora la sensibilidad. La misma propiedad puede ser un problema si el sensor debe medir una señal amplia sin distorsionar una banda estrecha.

Variable dominante: [[X]], porque representa la salida observable que se quiere amplificar o limitar.

Límite de validez: si la electrónica, el acoplamiento o la saturación modifican la respuesta, la curva mecánica aislada no basta.

Aquí [[F0]] fija la escala de entrada, pero no decide por sí solo si el sensor es selectivo. La selectividad depende de [[Q]] y de la forma de la curva de respuesta. Por eso el diseño compara sensibilidad, ancho de banda y riesgo de saturación.

## 5. Ensayos de respuesta en frecuencia

En laboratorio se aplica una excitación controlada y se mide [[X]] para muchos valores de [[omega_f]]. El objetivo es encontrar [[omega_r]], estimar [[Q]] y detectar si el sistema se comporta como un oscilador lineal. Este ensayo convierte la resonancia en una evidencia gráfica y no en una suposición.

Variable dominante: [[omega_f]], porque es la variable que se barre para revelar la curva.

Límite de validez: si no se espera al régimen estacionario en cada punto, la curva mezcla transitorio y respuesta permanente.

El procedimiento permite comparar teoría y experimento. Si la curva medida tiene el pico previsto, el modelo con [[m]], [[k]] y [[b]] es útil. Si el pico se desplaza con la amplitud o cambia al repetir el barrido, hay no linealidad, calentamiento o acoplamiento con otros modos.

En conjunto, la resonancia se usa para amplificar, diagnosticar o evitar respuestas grandes. Su valor didáctico está en enseñar que una frecuencia crítica se demuestra con una curva, que el amortiguamiento limita el fenómeno y que una decisión técnica debe mirar simultáneamente [[omega_r]], [[Q]], [[X]] y la frecuencia de operación [[omega_f]].

Esta forma de pensar evita dos decisiones pobres: sobredimensionar todo sin saber dónde está el pico, o ignorar una frecuencia crítica porque la fuerza aplicada parece pequeña. En resonancia, una entrada moderada puede ser suficiente si llega con el ritmo adecuado. Por eso el diseño responsable mide la curva, estima márgenes y decide si conviene desplazar el pico, reducir la excitación o aumentar la disipación.

También permite comunicar el riesgo con claridad. No se informa solo "vibra mucho", sino "la frecuencia de operación cae dentro de una banda resonante, con esta amplitud y esta selectividad". Esa formulación ayuda a priorizar medidas, justificar cambios de diseño y explicar por qué una solución funciona.
