## Contexto conceptual

La interferencia de la luz es uno de los fenómenos fundamentales que revela la naturaleza ondulatoria de la radiación electromagnética. Cuando dos haces de luz coherentes se superponen en una región del espacio, sus amplitudes se suman vectorialmente, produciendo un patrón de intensidad que varía espacialmente entre máximos de reforzamiento y mínimos de anulación. Este fenómeno, imposible de explicar con modelos corpusculares simples, fue crucial en la historia de la física para establecer la óptica ondulatoria.

El experimento de doble rendija de Young (1801) constituye el paradigma experimental de la interferencia. Al iluminar dos rendijas cercanas con luz coherente y proyectar el resultado sobre una pantalla, se observa un característico patrón de franjas brillantes y oscuras. La separación entre estas franjas depende de tres factores: la longitud de onda de la luz, la separación entre rendijas y la distancia al plano de observación.

## 🟢 Nivel esencial

La interferencia de la luz ocurre cuando dos ondas luminosas procedentes de la misma fuente se superponen tras recorrer caminos diferentes. Para que el patrón sea estable y observable, las ondas deben ser coherentes: deben mantener una relación de fase constante en el tiempo. En la práctica esto se logra dividiendo un haz único en dos mediante un par de rendijas estrechas iluminadas simultáneamente.

Cuando la diferencia de camino entre los dos haces es un múltiplo entero de la longitud de onda, las ondas llegan en fase y se refuerzan mutuamente, produciendo una franja brillante. Cuando la diferencia de camino es un múltiplo semientero de la longitud de onda, las ondas llegan en contrafase y se anulan, produciendo una franja oscura. La alternancia de franjas brillantes y oscuras forma el patrón de interferencia.

La geometría del experimento determina dónde aparecen las franjas. Para ángulos pequeños, la separación entre franjas consecutivas es aproximadamente constante y depende de tres factores: la longitud de onda de la luz, la separación entre las rendijas y la distancia hasta la pantalla de observación. A mayor longitud de onda o mayor distancia a la pantalla, las franjas se separan más. A mayor separación entre rendijas, las franjas se acercan.

## 🔵 Nivel formal

El tratamiento matemático de la interferencia en doble rendija parte de la geometría del experimento. Consideremos dos rendijas separadas una distancia [[separacion_entre_rendijas]] que actúan como fuentes secundarias coherentes. Un punto en la pantalla, situado a ángulo [[theta]] respecto a la dirección central, recibe contribuciones de ambas rendijas. La diferencia de camino óptico entre ambos haces es:

{{f:diferencia_camino}}

La diferencia de camino [[delta]] representa la distancia adicional que recorre la luz desde la rendija más alejada respecto a la más cercana. Cuando [[theta]] es positivo, [[delta]] resulta positivo.

La condición para interferencia constructiva (máximos de intensidad) requiere que las ondas lleguen en fase:

{{f:condicion_maximos}}

Donde [[orden_de_la_franja]] es un número entero que identifica el orden del máximo. Valores positivos y negativos de [[orden_de_la_franja]] corresponden a franjas a ambos lados del centro. El orden cero corresponde al máximo central donde ambos caminos son iguales.

Para interferencia destructiva (mínimos de intensidad), las ondas deben llegar en contrafase:

{{f:condicion_minimos}}

En este caso, [[orden_de_la_franja]] sigue siendo entero, pero el desplazamiento de medio entero introduce el desfase de π radianes necesario para la anulación.

La posición lineal [[y_m]] de cada franja en la pantalla, a distancia [[distancia_a_la_pantalla]] de las rendijas, se obtiene mediante la aproximación de ángulos pequeños:

{{f:posicion_franja}}

Esta fórmula resulta de combinar la condición de máximo con la aproximación de ángulos pequeños, válida cuando [[y_m]] es mucho menor que [[distancia_a_la_pantalla]]. La separación entre franjas consecutivas es constante:

{{f:separacion_fringes}}

Esta relación permite medir la longitud de onda con precisión conociendo los parámetros geométricos del montaje.

## 🔴 Nivel estructural

Las cuatro ecuaciones anteriores forman un sistema encadenado que describe completamente el patrón de interferencia en régimen de ángulos pequeños. La diferencia de camino [[delta]] depende directamente de la separación [[separacion_entre_rendijas]] y del ángulo [[theta]]. La condición de máximo o mínimo establece valores discretos de [[delta]] para cada orden [[orden_de_la_franja]]. La posición [[y_m]] traduce estas condiciones angulares en posiciones lineales medibles sobre la pantalla.

La interferencia es una manifestación del principio de superposición para campos electromagnéticos. La energía no se crea ni se destruye en el proceso; simplemente se redistribuye espacialmente. Lo que se pierde en las regiones de interferencia destructiva se gana en las regiones de interferencia constructiva, manteniendo el flujo total de energía constante a través de cualquier superficie que encierre la pantalla completa.

El patrón de interferencia establece una dualidad fundamental: a mayor separación entre rendijas [[separacion_entre_rendijas]], más comprimido es el patrón, con franjas más cercanas entre sí. Esta relación de reciprocidad espacial es análoga a la relación tiempo-frecuencia en el análisis de Fourier. Aumentar [[separacion_entre_rendijas]] equivale a aumentar la resolución angular del sistema, permitiendo resolver fuentes con separación angular menor. Este principio es la base de la interferometría astronómica de línea de base larga.

La visibilidad del patrón, definida como el contraste entre máximos y mínimos, depende del grado de coherencia entre las fuentes. La coherencia temporal limita la diferencia de camino máxima útil antes de que el patrón desaparezca. La coherencia espacial limita el ángulo sólido aceptable de la fuente. Estos límites conectan la interferencia con la teoría estadística de la luz desarrollada por Zernike y Van Cittert.

El mecanismo de autorregulación del patrón se manifiesta en que la intensidad integrada sobre toda la pantalla permanece constante independientemente de [[separacion_entre_rendijas]], [[distancia_a_la_pantalla]] o [[lambda]]. Al cambiar estos parámetros, las franjas se estrechan o ensanchan, se separan o acercan, pero la energía total depositada no varía. Este comportamiento refleja la conservación de la energía en la redistribución ondulatoria y permite verificar experimentalmente la consistencia del modelo midiendo la potencia total incidente sobre la pantalla.

## Interpretación física profunda

La interferencia de la luz encierra una de las revelaciones más profundas de la física: la naturaleza ondulatoria de lo que habitualmente percibimos como rayos de luz. En la óptica geométrica, la luz se describe como rayos que viajan en línea recta. La interferencia demuestra que esta descripción es insuficiente: la luz se propaga como ondas y su comportamiento en regiones de superposición solo puede predecirse considerando las amplitudes y sus fases relativas.

La diferencia de camino determina la fase relativa entre las ondas. Esta fase, no directamente observable como intensidad, controla completamente el resultado de la superposición. El patrón de interferencia convierte la fase relativa en una variación observable de intensidad. Esto es característico de los fenómenos de onda: variables que no se miden directamente se revelan a través de efectos de interferencia.

La interferencia es la manifestación experimental del principio de superposición, uno de los pilares de la física lineal. En óptica, significa que los campos electromagnéticos se suman vectorialmente, no las intensidades. La intensidad resultante, proporcional al cuadrado del campo total, contiene términos cruzados que dependen de la fase relativa y son responsables del patrón de franjas.

El experimento de doble rendija, en su versión moderna con partículas individuales, revela que incluso fotones o electrones aislados exhiben interferencia consigo mismos. Esto conecta la óptica ondulatoria clásica con los fundamentos de la mecánica cuántica, donde la función de onda evoluciona según principios de superposición análogos.

## Orden de magnitud

Las escalas típicas en experimentos de interferencia de doble rendija son las siguientes. La separación entre rendijas [[separacion_entre_rendijas]] es del orden de 0.1 mm a 0.5 mm. La distancia a la pantalla [[distancia_a_la_pantalla]] es del orden de 1 m a 2 m. La longitud de onda visible [[lambda]] está entre 400 nm y 700 nm. La separación entre franjas resultante [[separacion_entre_franjas_consecutivas]] es típicamente de 1 mm a 10 mm.

El factor adimensional [[lambda]]/[[separacion_entre_rendijas]], del orden de 5 × 10⁻³, determina la apertura angular del patrón. Un patrón típico contiene entre 10 y 20 franjas brillantes visibles antes de que la difracción por el ancho finito de las rendijas atenúe la intensidad. El número máximo observable de órdenes limita la precisión con la que puede medirse [[lambda]] a partir del patrón.

## Método de resolución personalizado

Para resolver problemas de interferencia de doble rendija, seguir este procedimiento. Primero, identificar los valores de [[separacion_entre_rendijas]], [[distancia_a_la_pantalla]] y [[lambda]], verificando que todas las unidades sean consistentes en metros. Segundo, calcular la diferencia de camino para la posición o ángulo dado. Tercero, aplicar la condición de interferencia constructiva o destructiva según se busquen máximos o mínimos. Cuarto, despejar la incógnita: [[y_m]], [[orden_de_la_franja]], [[lambda]], [[separacion_entre_rendijas]] o [[distancia_a_la_pantalla]]. Quinto, verificar la consistencia física: el orden [[orden_de_la_franja]] debe ser entero, la posición [[y_m]] debe ser razonable y la separación entre franjas debe estar en el rango de milímetros para parámetros típicos. Sexto, validar calculando la separación entre franjas consecutivas como [[lambda]] × [[distancia_a_la_pantalla]] / [[separacion_entre_rendijas]] y verificar coherencia con los resultados parciales.

## Casos especiales y ejemplo extendido

El caso [[orden_de_la_franja]] = 0 corresponde al máximo central, donde la diferencia de camino es nula y las ondas siempre llegan en fase independientemente de [[lambda]]. Este máximo es blanco cuando se usa luz policromatica.

Ejemplo extendido: un experimento usa un láser de helio-neón con [[lambda]] de 632.8 nm, separación entre rendijas [[separacion_entre_rendijas]] de 0.20 mm y distancia a pantalla [[distancia_a_la_pantalla]] de 2.0 m. Sustituyendo en la fórmula de separación entre franjas se obtiene aproximadamente 6.3 mm. La posición del tercer máximo lateral resulta aproximadamente 18.9 mm. Si [[separacion_entre_rendijas]] se duplica, las franjas se acercan a la mitad. Si [[lambda]] aumenta un 10%, las franjas se separan un 10%. Este análisis demuestra que el patrón permite medir [[lambda]] con precisión del 0.1% conociendo los parámetros geométricos.

## Preguntas reales del alumno

¿Por qué con luz blanca se ven franjas de colores que se desvanecen? Porque cada longitud de onda produce un patrón con separación diferente. Solo en el centro coinciden todos los máximos, produciendo blanco. Fuera del centro, los patrones se desfasan progresivamente y el contraste se pierde.

¿Qué sucede si una de las rendijas vibra? La vibración introduce fluctuaciones rápidas en la diferencia de camino. Si estas fluctuaciones son mayores que [[lambda]]/4 durante el tiempo de exposición, el patrón se promedia y pierde visibilidad.

¿Se puede usar la fórmula de ángulos pequeños para cualquier orden? No. La aproximación es válida solo cuando [[y_m]] es mucho menor que [[distancia_a_la_pantalla]]. Para órdenes altos donde el ángulo supera 0.1 radianes, debe usarse la expresión exacta con arcoseno.

¿Cómo puedo aumentar el contraste del patrón? Usando fuentes más coherentes y monocromáticas, igualando las intensidades en ambas rendijas, asegurando polarización paralela, eliminando vibraciones mecánicas y reduciendo la luz de fondo.

## Conexiones transversales y rutas de estudio

La interferencia conecta directamente con la conservación de la energía: la energía luminosa no se crea ni destruye, solo se redistribuye espacialmente entre máximos y mínimos. También es aplicación directa del principio de superposición, válido para todos los sistemas lineales en mecánica, electromagnetismo y acústica.

El concepto de coherencia necesario para la interferencia conecta con la óptica física avanzada y con la correlación de fluctuaciones en física estadística. En experimentos reales, la difracción por el ancho finito de las rendijas modula el patrón de interferencia, conectando ambos fenómenos.

Los principios de interferencia se aplican en interferómetros de Michelson y Fabry-Perot, instrumentos fundamentales en metrología y detección de ondas gravitacionales. El experimento de doble rendija con partículas individuales es el puente conceptual hacia la mecánica cuántica.

## Síntesis final

La interferencia de la luz demuestra que la óptica no puede reducirse a rayos que viajan en línea recta. El fenómeno revela la naturaleza ondulatoria de la radiación electromagnética y la importancia de la fase como variable física. Dominar la interferencia requiere comprender la diferencia de camino como determinante de la fase relativa, las condiciones de interferencia constructiva y destructiva como resultado de la superposición de amplitudes, y la geometría del experimento como factor que escala el patrón observable. El experimento de doble rendija, aparentemente simple, conecta óptica clásica, electromagnetismo, mecánica cuántica y metrología de precisión.