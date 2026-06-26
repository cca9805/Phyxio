# Rendimiento y eficiencia

## Contexto conceptual

Toda máquina térmica toma calor de un foco caliente, convierte parte de ese calor en trabajo mecánico y cede el resto a un foco frío. El **rendimiento térmico** mide qué fracción de la energía térmica absorbida se transforma en trabajo útil. Es la métrica central de cualquier ciclo motor: dos máquinas pueden operar con el mismo combustible, pero si sus rendimientos difieren, producen cantidades muy distintas de trabajo por unidad de energía consumida.

La necesidad de definir y cuantificar este rendimiento surge de una limitación fundamental: la segunda ley de la termodinámica impone que ningún ciclo puede convertir íntegramente el calor en trabajo. Siempre existe un calor residual que debe cederse al foco frío. El rendimiento no solo mide el desempeño de una máquina concreta; también permite comparar cualquier motor real con el límite teórico que Carnot estableció a principios del siglo XIX.

Comprender el rendimiento es indispensable para evaluar motores de combustión interna, turbinas de vapor, ciclos de cogeneración y cualquier sistema que convierta energía química o térmica en trabajo mecánico o eléctrico.

## 🟢 Nivel esencial

El **rendimiento** de una máquina térmica responde a una pregunta muy directa: de todo el calor que entra al motor, ¿cuánto sale como trabajo útil? Si un motor absorbe 100 J y entrega 35 J de trabajo, su rendimiento es 0.35, es decir, un 35%.

Este valor siempre queda entre cero y uno. Un rendimiento de cero significaría que todo el calor se desperdicia sin producir trabajo; un rendimiento de uno requeriría convertir íntegramente el calor en trabajo, algo que la segunda ley de la termodinámica prohíbe absolutamente.

La intuición clave es que **parte del calor siempre escapa** hacia el foco frío. No porque el motor sea defectuoso, sino porque la física así lo exige. Mejorar el rendimiento significa reducir ese calor residual [[Q_C]] acercando el ciclo al ideal reversible, no simplemente construir el motor con materiales más resistentes.

El rendimiento [[eta]] y el calor absorbido [[Q_H]] son las dos magnitudes fundamentales de este leaf. La diferencia entre ambas da el calor cedido [[Q_C]], y el cociente define la eficiencia real del ciclo.

## 🔵 Nivel formal

La definición operativa del rendimiento térmico se expresa como la razón entre el trabajo útil neto y el calor absorbido del foco caliente:

{{f:rendimiento_termico}}

Aplicando la primera ley de la termodinámica al ciclo completo, el trabajo neto es la diferencia entre los dos calores intercambiados:

{{f:balance_termico}}

Combinando ambas relaciones se obtiene una segunda forma equivalente del rendimiento que relaciona directamente los dos intercambios térmicos:

{{f:rendimiento_calores}}

Esta tercera expresión es especialmente útil porque permite calcular [[eta]] directamente a partir de [[Q_H]] y [[Q_C]], sin necesidad de conocer por separado [[W_util]]. También revela que **aumentar el rendimiento equivale a reducir el cociente [[Q_C]]/[[Q_H]]**, es decir, reducir la fracción de calor que se desecha respecto al que se absorbe.

Para el ciclo de Carnot, ese cociente coincide exactamente con la razón de temperaturas absolutas de los focos. En cualquier ciclo real con irreversibilidades, el cociente [[Q_C]]/[[Q_H]] es siempre mayor que la razón de temperaturas, lo que explica por qué [[eta]] real es siempre inferior a [[eta_Carnot]].

El límite de Carnot se alcanzaría solo con un ciclo completamente reversible; cualquier rozamiento, transferencia de calor con gradiente finito o mezcla irreversible aumenta el calor residual y reduce el rendimiento por debajo de ese límite teórico.

## 🔴 Nivel estructural

La expresión del rendimiento en función de los calores enmascara una profundidad termodinámica importante: **la segunda ley impone un mínimo ineliminable para [[Q_C]]**. Incluso en el ciclo ideal, [[Q_C]] no puede anularse a menos que el foco frío esté a 0 K, temperatura que la naturaleza no ofrece. Esto significa que el rendimiento nunca alcanza la unidad en condiciones físicamente realizables.

La brecha entre [[eta]] real y [[eta_Carnot]] puede descomponerse conceptualmente en dos categorías de irreversibilidades. La primera categoría engloba las irreversibilidades externas al ciclo: transferencia de calor con diferencia de temperatura finita entre el fluido de trabajo y los focos (cuanto mayor la diferencia, mayor la irreversibilidad). La segunda incluye irreversibilidades internas: rozamiento del fluido, turbulencias, mezclado de gases a distintas presiones, fugas a través de válvulas.

Cada fuente de irreversibilidad añade un incremento de entropía al fluido de trabajo y, al final del ciclo, ese incremento extra de entropía debe compensarse cediendo más calor al foco frío. El resultado es un [[Q_C]] mayor del mínimo termodinámico, y por tanto un [[eta]] menor del límite de Carnot.

Desde la perspectiva de los diagramas T-s, el rendimiento se lee geométricamente: el área encerrada por el ciclo representa [[W_util]]; el área total bajo el ciclo hasta el eje de entropías nula representa [[Q_H]]; la razón entre ambas es [[eta]]. Un ciclo con rectángulo perfecto (Carnot) maximiza la razón área interior/área total para unas temperaturas dadas. Cualquier distorsión de ese rectángulo (esquinas redondeadas, presiones no uniformes) reduce el cociente.

La dependencia de [[eta_Carnot]] con las temperaturas absolutas impone una estrategia de diseño clara: **elevar la temperatura del foco caliente** o **reducir la temperatura del foco frío** son los dos caminos para incrementar el límite teórico. Los materiales de alta temperatura en turbinas avanzadas o los sistemas de refrigeración del condensador en centrales térmicas responden exactamente a esta lógica.

Una consecuencia práctica directa es que motores con alta relación de compresión consiguen temperaturas de combustión más altas, lo que sube [[eta_Carnot]] y, si las irreversibilidades no aumentan proporcionalmente, también mejora [[eta]] real. Sin embargo, esta mejora está acotada por la resistencia mecánica y térmica de los materiales, lo que introduce un compromiso de diseño entre rendimiento termodinámico y durabilidad estructural.

## Interpretación física profunda

El rendimiento no es una propiedad del fluido de trabajo sino del **ciclo** que ese fluido recorre. Dos máquinas con el mismo fluido pueden tener rendimientos muy diferentes si operan entre focos distintos o con distintas irreversibilidades. Esta dependencia del rendimiento respecto al ciclo, y no al fluido, es una consecuencia directa de la segunda ley.

Una lectura fina del rendimiento requiere distinguir entre su valor instantáneo (en un instante del ciclo) y su valor medio por ciclo completo. El rendimiento definido como [[eta]] es siempre el valor integrado sobre un ciclo completo, no un valor local. En un motor de pistón, el trabajo se genera principalmente durante la expansión, pero el ciclo completo incluye fases de compresión que consumen trabajo; solo la diferencia neta cuenta para [[eta]].

Otra sutileza es que [[eta]] y potencia son independientes: un motor muy eficiente puede ser lento (baja potencia) si el ciclo tarda mucho en completarse. La maximización conjunta del rendimiento y la potencia requiere optimizar la velocidad del ciclo, lo que en la práctica conduce a compromisos entre el rendimiento máximo (ciclo infinitamente lento) y la máxima potencia (ciclo rápido con mayores irreversibilidades).

## Orden de magnitud

Los motores de automóvil de gasolina operan con rendimientos entre 0.25 y 0.35; los motores diesel más modernos alcanzan hasta 0.45. Las turbinas de vapor de grandes centrales eléctricas se aproximan a 0.40–0.50. Los ciclos combinados (turbina de gas más ciclo de vapor) superan el 0.60 en instalaciones avanzadas.

El límite de Carnot para un motor de combustión con temperatura de llama de 1500 K y temperatura ambiente de 300 K sería aproximadamente 0.80. La distancia entre ese límite y los rendimientos reales (0.40–0.60) refleja las irreversibilidades inevitables: transferencia de calor con gradientes, rozamientos mecánicos, apertura irreversible de válvulas y pérdidas de calor a través de paredes.

Un resultado que indique [[eta]] superior a 0.80 con focos ordinarios debería considerarse físicamente sospechoso y verificar si las temperaturas se expresaron en kelvin correctamente.

## Método de resolución personalizado

Para calcular el rendimiento de una máquina térmica real, seguir esta secuencia:

1. **Identificar los datos disponibles**: ¿Se conocen [[Q_H]] y [[W_util]] directamente? ¿O se conocen [[Q_H]] y [[Q_C]]? ¿O las temperaturas de los focos para el límite de Carnot?
2. **Si se conocen [[Q_H]] y [[W_util]]**: aplicar la definición directa [[eta]] como cociente.
3. **Si se conocen [[Q_H]] y [[Q_C]]**: aplicar la fórmula equivalente con los calores y verificar que [[Q_C]] sea menor que [[Q_H]].
4. **Verificar la coherencia**: comprobar que [[eta]] está en el intervalo abierto (0, 1) y que el balance [[W_util]] más [[Q_C]] reproduce [[Q_H]].
5. **Comparar con el límite de Carnot**: si se conocen las temperaturas de los focos, calcular [[eta_Carnot]] con temperaturas en kelvin y confirmar que [[eta]] real es inferior.

La señal de error más habitual es obtener [[eta]] mayor que 1 o negativo, lo que siempre indica un error de signo o datos intercambiados.

## Casos especiales y ejemplo extendido

**Ciclo con alta irreversibilidad**: Un motor antiguo con rozamientos elevados puede tener [[eta]] de 0.20 aunque sus focos permitirían [[eta_Carnot]] de 0.65. El 45% de diferencia es trabajo potencial destruido por irreversibilidades; [[Q_C]] real supera con creces el mínimo termodinámico.

**Ciclo de cogeneración**: Cuando [[Q_C]] se aprovecha para calefacción, el rendimiento global del sistema puede superar el 0.80, aunque el rendimiento eléctrico [[eta]] siga siendo 0.40. Distinguir rendimiento eléctrico de rendimiento global es fundamental en análisis energético.

## Preguntas reales del alumno

**¿Por qué no se puede construir un motor con [[eta]] del 100%?** Requeriría un foco frío a 0 K o la supresión completa de [[Q_C]], lo que contradice la segunda ley. Incluso un ciclo perfectamente reversible necesita ceder calor al foco frío para que el fluido retorne a su estado inicial.

**¿Mejorar los materiales mejora [[eta]]?** Materiales más resistentes permiten elevar la temperatura del foco caliente, subiendo [[eta_Carnot]] y en principio [[eta]] real. Sin embargo, no reducen irreversibilidades internas; solo amplían el margen de operación.

**¿Por qué usar kelvin y no Celsius para [[eta_Carnot]]?** Porque [[eta_Carnot]] es cociente de temperaturas absolutas. Un motor entre 100 °C y 0 °C daría [[eta_Carnot]] nulo en Celsius pero 0.268 en kelvin, resultado físicamente correcto.

## Conexiones transversales y rutas de estudio

El rendimiento está directamente vinculado al ciclo de Carnot, que establece su límite superior absoluto para focos a temperatura fija. Comprender [[eta_Carnot]] requiere haber trabajado previamente los ciclos reversibles y la entropía como función de estado. Consultar el leaf [Ciclo de Carnot](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/carnot) para el desarrollo formal del límite teórico.

Los ciclos reales —Otto, Diesel, Brayton-Rankine— tienen expresiones específicas del rendimiento en función de sus parámetros geométricos (relación de compresión, relación de corte) que se derivan de la fórmula general de este leaf. El rendimiento de este leaf es el marco general del que los rendimientos específicos son casos particulares.

La segunda ley de la termodinámica y el concepto de entropía son el sustento teórico profundo del rendimiento. El refrigerador y la bomba de calor son la aplicación inversa: en vez de producir trabajo a partir del calor, consumen trabajo para transferir calor en sentido contrario al espontáneo. El coeficiente de rendimiento de esos dispositivos es el recíproco conceptual del rendimiento motor.

## Síntesis final

El rendimiento [[eta]] de una máquina térmica cuantifica la fracción del calor absorbido [[Q_H]] que se transforma en trabajo útil [[W_util]], con el calor residual [[Q_C]] como pérdida impuesta por la segunda ley. Su valor siempre está entre cero y uno, y nunca puede superar el límite de Carnot para los mismos focos. Reducir las irreversibilidades del ciclo es el único camino para acercar el rendimiento real a ese máximo teórico.
