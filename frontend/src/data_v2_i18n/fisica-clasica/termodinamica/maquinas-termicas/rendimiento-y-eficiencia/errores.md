## Errores conceptuales

### Error 1: Creer que el rendimiento puede ser 1 con suficiente ingeniería

**Por qué parece correcto**

El alumno razona que si se eliminan todas las fugas, se reducen los rozamientos a cero y se mejoran todos los materiales, eventualmente se puede fabricar un motor perfecto que convierta todo el calor en trabajo. La analogía con los circuitos eléctricos refuerza esta idea: en teoría, un conductor superconductor no tiene resistencia, así que un motor perfectamente construido debería poder capturar toda la energía.

**Por qué es incorrecto**

La limitación de rendimiento no viene de la imperfección constructiva sino de la segunda ley de la termodinámica, que es una ley fundamental de la naturaleza. Para que el ciclo se cierre y el fluido de trabajo regrese a su estado inicial, debe cederse calor al foco frío. Eliminar [[Q_C]] completamente requeriría un foco frío a 0 K, temperatura inalcanzable, o que el proceso fuera completamente reversible e infinitamente lento. Ninguna mejora de ingeniería puede sortear esta restricción termodinámica.

**Señal de detección**

El alumno obtiene [[eta]] igual a 1 o cercano a 1 sin que las temperaturas de los focos justifiquen ese límite de Carnot. También se manifiesta cuando el alumno afirma que "con materiales mejores se podría llegar al 100%" sin mencionar el límite de Carnot.

**Corrección conceptual**

El rendimiento máximo teórico es [[eta_Carnot]], que solo depende de las temperaturas absolutas de los focos. Ninguna mejora de materiales o de diseño puede superar ese límite. Las mejoras reales solo acercan [[eta]] a [[eta_Carnot]] reduciendo irreversibilidades, pero sin cruzar ese techo.

**Mini-ejemplo de contraste**

Un motor que opera entre 500 K y 300 K tiene un [[eta_Carnot]] de 0.40. Por muy perfecto que sea el diseño, su rendimiento nunca puede superar ese valor. Un motor real bien diseñado entre esos focos alcanzará quizás 0.32. Afirmar que con suficiente tecnología se puede alcanzar 0.95 entre esos mismos focos contradice directamente la segunda ley.

---

### Error 2: Confundir rendimiento con potencia

**Por qué parece correcto**

Intuitivamente, un motor más potente parece más eficiente porque "hace más". El lenguaje coloquial usa "rendimiento" y "potencia" como sinónimos en frases como "este motor rinde más". Esta ambigüedad lingüística hace que el alumno mezcle ambos conceptos.

**Por qué es incorrecto**

[[eta]] mide qué fracción de [[Q_H]] se convierte en [[W_util]], sin importar la velocidad del proceso. La potencia mide cuánto trabajo se produce por segundo. Un motor puede tener [[eta]] de 0.40 pero potencia de 10 kW si trabaja despacio, o [[eta]] de 0.30 y potencia de 500 kW si trabaja rápido. Son magnitudes independientes: un motor más eficiente no es necesariamente más potente.

**Señal de detección**

El alumno compara dos motores afirmando que el de mayor potencia tiene mayor rendimiento, sin calcular la razón [[W_util]]/[[Q_H]] para cada uno. También aparece cuando el alumno usa la fórmula del rendimiento con valores de potencia (vatios) en lugar de valores de energía (julios).

**Corrección conceptual**

[[eta]] es un cociente adimensional de energías (o de flujos de energía a la misma frecuencia de ciclo). La potencia es energía por unidad de tiempo. Para comparar rendimientos, usar siempre las energías por ciclo o los calores por ciclo, no la potencia instantánea a menos que ambos motores operen exactamente a la misma frecuencia.

**Mini-ejemplo de contraste**

Motor A: absorbe 1000 J por ciclo, produce 350 J de trabajo. Motor B: absorbe 10 000 J por ciclo, produce 2000 J de trabajo. Motor A tiene [[eta]] de 0.35; motor B tiene [[eta]] de 0.20. El motor B es diez veces más potente por ciclo pero menos eficiente. Afirmar que B rinde más porque "produce más trabajo" confunde magnitud absoluta con eficiencia de conversión.

## Errores de modelo

### Error 3: Aplicar el límite de Carnot a ciclos irreversibles sin corrección

**Por qué parece correcto**

La fórmula de Carnot con temperaturas de focos es sencilla y accesible. Si se conocen las temperaturas del motor, parece razonable usarla directamente como predictor del rendimiento real, especialmente si el motor parece bien construido y sin defectos obvios.

**Por qué es incorrecto**

[[eta_Carnot]] es el límite teórico máximo, no el rendimiento real. Todo ciclo con irreversibilidades —rozamiento, gradientes de temperatura, mezcla de gases— opera muy por debajo de ese límite. Usar [[eta_Carnot]] como predicción del rendimiento real sobreestima sistemáticamente el valor real entre un 20% y un 50% en motores industriales.

**Señal de detección**

El alumno calcula [[eta_Carnot]] con las temperaturas del motor y lo presenta como el rendimiento esperado del ciclo real, sin mencionar que es un límite teórico inaccesible. También se detecta cuando el alumno obtiene un rendimiento real medido muy inferior al de Carnot y lo considera un error de medición.

**Corrección conceptual**

[[eta_Carnot]] es un techo, no una predicción. El rendimiento real siempre es menor, y la distancia entre ambos mide cuánto trabajo se destruye por irreversibilidades. Para predecir el rendimiento real se necesita el modelo extendido con rendimientos isentrópicos de cada componente.

**Mini-ejemplo de contraste**

Un motor de vapor entre 500 K y 300 K tiene [[eta_Carnot]] de 0.40. El rendimiento medido en el banco de pruebas es 0.26. La diferencia de 14 puntos porcentuales no es un error de medición: refleja la entropía generada por rozamiento en pistones, transferencia de calor con gradiente finito y apertura irreversible de válvulas. Presentar 0.40 como "el rendimiento esperado" induce a error de diseño.

### Error 4: Creer que reducir [[Q_C]] a cero es solo una cuestión de aislamiento térmico

**Por qué parece correcto**

Si [[Q_C]] es calor que escapa hacia el ambiente, parece que basta con aislar el motor perfectamente para evitar esa pérdida. El alumno asimila [[Q_C]] a una fuga accidental que el diseño puede eliminar con suficiente aislamiento.

**Por qué es incorrecto**

[[Q_C]] no es una fuga accidental sino una necesidad termodinámica: es el calor que el fluido de trabajo debe ceder para regresar a su estado inicial y completar el ciclo. Sin cesión de [[Q_C]], el fluido acumularía entropía ciclo tras ciclo y el motor dejaría de operar en régimen estacionario. El aislamiento solo reduce las pérdidas de calor laterales, no el [[Q_C]] intrínseco del ciclo.

**Señal de detección**

El alumno propone "aislar mejor el condensador" como solución para aumentar el rendimiento eliminando [[Q_C]]. También se detecta cuando confunde las pérdidas por conducción a través de paredes con el calor cedido al foco frío en el proceso de rechazo del ciclo.

**Corrección conceptual**

Distinguir entre [[Q_C]] del ciclo (necesario termodinámicamente) y las pérdidas de calor parásitas por conducción o convección desde las paredes del motor. Solo las segundas pueden reducirse con aislamiento. El primero es estructural al ciclo y solo puede reducirse acercando el ciclo al ideal reversible.

**Mini-ejemplo de contraste**

Aislar perfectamente el exterior del motor elimina, digamos, 50 J de pérdidas laterales por ciclo. Si [[Q_H]] es 1000 J y [[Q_C]] intrínseco es 700 J, el rendimiento mejora de (1000 − 700 − 50)/1000 a (1000 − 700)/1000, es decir, de 0.25 a 0.30. Pero [[Q_C]] sigue siendo 700 J: el aislamiento no lo toca. Para subir el rendimiento más allá de 0.30 hay que modificar el ciclo, no el aislante.

## Errores matemáticos

### Error 5: Calcular el límite de Carnot con temperaturas en Celsius

**Por qué parece correcto**

Las temperaturas del foco caliente y frío se suelen dar en grados Celsius en los enunciados de problemas. El alumno aplica la fórmula directamente con esos valores sin convertir, porque la fórmula "parece funcionar" al producir un número entre 0 y 1 para la mayoría de las combinaciones de temperaturas habituales.

**Por qué es incorrecto**

La fórmula de Carnot se deriva de la definición termodinámica de temperatura, que usa la escala kelvin. El cociente de temperaturas solo tiene sentido físico en la escala absoluta. Usar Celsius produce errores graves: para un motor entre 400 °C y 100 °C, el valor correcto en kelvin sería aproximadamente 0.44, pero en Celsius daría 0.75, sobreestimando el límite real en más del 70%.

**Señal de detección**

El alumno presenta un límite de Carnot superior al que corresponde a las temperaturas kelvin de los focos. También se detecta cuando el cálculo usa directamente los valores del enunciado (generalmente en Celsius) sin conversión explícita a kelvin.

**Corrección conceptual**

Siempre convertir las temperaturas a kelvin añadiendo 273.15 antes de aplicar cualquier fórmula que involucre cocientes de temperaturas. Verificar que [[eta_Carnot]] calculado en kelvin sea siempre inferior a 1 y mayor que cero.

**Mini-ejemplo de contraste**

Motor entre 300 °C y 30 °C. En Celsius: cociente 30/300 da 0.10, y el rendimiento aparente sería 0.90. En kelvin: focos a 573 K y 303 K. El cociente correcto es 303/573 aproximadamente 0.529, y el rendimiento de Carnot es aproximadamente 0.471. La diferencia es enorme: 0.90 frente a 0.47. Ningún motor real entre esos focos puede superar 0.47.

## Errores de interpretación

### Error 6: Interpretar [[eta]] bajo como señal de mal diseño siempre

**Por qué parece correcto**

Si el rendimiento es bajo, el motor convierte poca energía en trabajo, lo que parece indicar que está mal diseñado o deteriorado. El alumno asimila cualquier [[eta]] bajo a un problema de ingeniería corregible.

**Por qué es incorrecto**

Un [[eta]] bajo puede deberse simplemente a que los focos están a temperaturas próximas entre sí, lo que limita el [[eta_Carnot]] a un valor pequeño aunque el ciclo sea casi perfecto. Por ejemplo, una planta de energía geotérmica que extrae calor de una fuente a 120 °C y rechaza calor al ambiente a 20 °C tiene un [[eta_Carnot]] de solo 0.25. Un rendimiento real de 0.15 sobre ese techo representa un ciclo bien diseñado, no un mal diseño.

**Señal de detección**

El alumno critica el rendimiento de una instalación sin compararlo con [[eta_Carnot]] para los mismos focos. La interpretación correcta siempre requiere comparar [[eta]] con [[eta_Carnot]], no con un valor absoluto de referencia universal.

**Corrección conceptual**

El criterio de calidad termodinámica de un motor es la razón [[eta]]/[[eta_Carnot]], llamada eficiencia relativa o segundo-ley-eficiencia. Una instalación con [[eta]] de 0.15 y [[eta_Carnot]] de 0.25 tiene una eficiencia relativa de 0.60, que es razonablemente buena. Una instalación con [[eta]] de 0.30 y [[eta_Carnot]] de 0.70 tiene eficiencia relativa de 0.43, que indica mayores pérdidas por irreversibilidades.

**Mini-ejemplo de contraste**

Comparar una central geotérmica ([[eta]] de 0.12, [[eta_Carnot]] de 0.20) con un motor de combustión ([[eta]] de 0.35, [[eta_Carnot]] de 0.65). La central geotérmica tiene eficiencia relativa de 0.60; el motor de combustión tiene eficiencia relativa de 0.54. Aunque el motor de combustión tiene mayor [[eta]] absoluto, la central geotérmica está mejor aprovechando su potencial termodinámico disponible.

## Regla de autocontrol rápido

Antes de dar por correcta una resolución con rendimientos térmicos, verificar los cinco puntos siguientes:

1. **Kelvin obligatorio**: si el problema involucra temperaturas de focos, comprobar que la conversión a kelvin se realizó antes de cualquier cociente.
2. **Intervalo (0, 1)**: [[eta]] debe ser estrictamente mayor que cero y estrictamente menor que uno. Un valor fuera de ese intervalo indica error de signo o datos intercambiados.
3. **Balance de primera ley**: la suma de [[W_util]] más [[Q_C]] debe ser igual a [[Q_H]]. Si no cuadra, hay un error aritmético.
4. **Límite de Carnot respetado**: [[eta]] calculado no puede superar [[eta_Carnot]] para los focos dados. Si lo supera, revisar los datos de entrada.
5. **Interpretación relativa**: no juzgar [[eta]] como alto o bajo sin comparar con [[eta_Carnot]] para los mismos focos. El cociente [[eta]]/[[eta_Carnot]] es el indicador de calidad del diseño.
