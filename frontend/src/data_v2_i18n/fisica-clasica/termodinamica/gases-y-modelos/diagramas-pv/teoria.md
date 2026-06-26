# Diagramas pv

## Contexto conceptual

Los diagramas p-V son la representación gráfica esencial para leer procesos termodinámicos en gases. Cada punto del plano une una presión [[P]] con un volumen [[V]] y ofrece una lectura directa del estado macroscópico del gas.

Este leaf se centra en la interpretación del área bajo la trayectoria y en la forma que toma un proceso en el diagrama. Esa lectura geométrica conecta magnitudes de estado con conceptos de trabajo y sentido de la transferencia energética.

## 🟢 Nivel esencial

La idea esencial es que la forma de la curva en un diagrama p-V cuenta lo que hizo el gas. Una trayectoria horizontal significa que la presión se mantuvo constante; una trayectoria hacia la derecha significa que el volumen aumentó y, por lo tanto, el gas hizo trabajo.

Cuando el volumen no cambia, el área bajo la curva es cero y no hay trabajo mecánico. Si la curva cierra un ciclo, el área encerrada representa el trabajo neto intercambiado entre el gas y su entorno.

En expansión, la trayectoria se desplaza hacia mayores volúmenes. En compresión, la trayectoria se mueve hacia volúmenes más pequeños. El signo del trabajo se deduce del sentido del cambio de volumen.

El diagrama p-V también permite distinguir cuándo un tramo no hace trabajo, como un segmento vertical, de cuando el área bajo la trayectoria sí suma energía intercambiada.

## 🔵 Nivel formal

La relación fundamental para el gas ideal se escribe así:

{{f:gas_ideal}}

Esta fórmula describe las variables de estado del gas ideal: presión [[P]], volumen [[V]], cantidad de sustancia [[n]], temperatura [[T]] y constante [[R]]. Para un proceso isobárico, la presión permanece constante mientras el volumen cambia.

El trabajo en un proceso a presión constante está dado por:

{{f:trabajo_isobarico}}

En ese caso, [[DeltaV]] es la diferencia entre volumen final e inicial. El trabajo es proporcional a esa diferencia y su signo depende de la dirección del cambio de volumen.

El gas ideal también permite leer qué ocurre cuando una curva cruza familias de isotermas: si [[T]] es constante, la curva es una hipérbola suave en el diagrama p-V. Si [[P]] es constante, la curva es una línea horizontal. Estas formas son lecturas formales de la misma relación física.

La expresión de trabajo isobárico refuerza que no basta conocer el volumen aislado: el trabajo depende de la variación de volumen y de que la presión considerada sea realmente la presión del proceso.

Ambas fórmulas están vinculadas: la ley del gas ideal fija qué combinaciones de [[P]], [[V]] y [[T]] son estados posibles, mientras que la fórmula de trabajo isobárico cuantifica la energía mecánica intercambiada cuando el sistema avanza entre dos de esos estados a [[P]] constante. La coherencia entre ambas expresiones es la base formal del análisis de ciclos termodinámicos en el diagrama p-V.

## 🔴 Nivel estructural

En un diagrama p-V, la estructura física del proceso se organiza por regímenes. Un proceso isobárico es un tramo horizontal. Un proceso isocórico es un tramo vertical con trabajo nulo. Un proceso isotérmico se dibuja como una curva que mantiene constante la temperatura efectiva del gas.

El diagrama p-V distingue magnitudes de estado y magnitudes de proceso. [[P]] y [[V]] son magnitudes de estado que definen cada punto. [[W]] y [[DeltaV]] son magnitudes de proceso que describen cómo evoluciona la trayectoria.

Esta separación es importante porque la misma curva puede ser leída de dos maneras: como valores de estado en cada punto y como área acumulada entre puntos sucesivos. El trabajo aparece como un valor derivado de la forma de la curva, no como un valor independiente del estado.

En un proceso real, la curva puede combinar tramos diferentes. Por ejemplo, un ciclo cerrado tiene un tramo de expansión y un tramo de compresión. El trabajo neto del ciclo es la diferencia entre el área del proceso en un sentido y el área en el sentido opuesto.

También importa el contexto: si la presión no es constante, el área bajo la curva ya no es simplemente el producto de presión por volumen. Hay que integrar la curva p-V. Esa distinción sitúa el trabajo como una propiedad geométrica de la trayectoria, no solo como una multiplicación simple.

Además, la validez del diagrama p-V depende de que cada punto represente un estado termodinámico bien definido. Si el proceso es muy rápido o irreversiblemente fuera de equilibrio, la trayectoria deja de describir estados sucesivos nítidos y la interpretación del área pierde precisión.

El uso del diagrama p-V es más directo para gases ideales o procesos cercanos a la cuasiestaticidad. Para gases reales o procesos con cambios bruscos de fase, la forma y la posición de la curva pueden ser afectadas por no idealidad, y la relación entre área y trabajo debe evaluarse con más cuidado.

Para resumir los límites: el diagrama es válido cuando la presión y el volumen pueden medirse en cada estado, cuando el proceso puede aproximarse por una sucesión de estados cercanos y cuando el cierre de un ciclo define de forma neta el trabajo entregado o recibido.

## Interpretación física profunda

La interpretación física profunda de un diagrama p-V consiste en leer las direcciones y las áreas. Una trayectoria hacia la derecha indica expansión del gas. Una trayectoria hacia la izquierda indica compresión. El signo de [[W]] se extrae del sentido del cambio de volumen y de si la presión actúa en el mismo sentido de desplazamiento.

La forma de la curva también revela si el proceso fue rápido o lento, cercano a un proceso quasiestático, y si el gas permaneció en un régimen ideal desplazándose entre estados bien definidos.

Desde la perspectiva de la termodinámica, el diagrama p-V es una herramienta de diagnóstico: los estados de mayor volumen y menor presión ocupan una región baja del gráfico, mientras que los estados comprimidos aparecen en la región alta y a la izquierda.

Por eso, la lectura física no se limita a los valores numéricos. Se trata de interpretar la geometría del camino que une los estados inicial y final en términos de transferencia de energía y condiciones de equilibrio.

## Orden de magnitud

Para gases de laboratorio, una presión de orden 10⁵ Pa es típica. Si la presión se mantiene constante y el volumen cambia en decenas de mililitros, el trabajo puede ser de varios cientos de julios, no de kilojulios. Una variación de volumen de 0.03 m³ a 1.2×10⁵ Pa produce trabajo del orden de 3×10³ J.

Un volumen de 0.01 m³ es pequeño comparado con un litro completo, mientras que 0.05 m³ es un cuarto de litro. En el diagrama p-V, esos cambios corresponden a desplazamientos horizontales visibles y áreas que pueden medirse con precisión.

Una diferencia de temperatura de 10 K en un gas ideal a presión constante no es tan relevante para el trabajo como lo es el cambio de volumen. Esa escala de comparación ayuda a distinguir cuando conviene mantener la interpretación del diagrama o cuando hay que considerar efectos reales no ideales.

## Método de resolución personalizado

1. Identifica si el proceso mantiene alguna variable constante. En el diagrama p-V, eso aparece como un tramo horizontal, vertical o de forma hiperbólica.
2. Clasifica el proceso: isobárico, isocórico, isotérmico o una combinación de tramos.
3. Anota los estados inicial y final con [[P]], [[V]] y, si es necesario, [[T]] y [[n]].
4. Calcula [[DeltaV]] como la diferencia entre volumen final e inicial.
5. Si la presión es constante, utiliza la fórmula de trabajo isobárico. Si no, interpreta el trabajo como el área bajo la curva.
6. Verifica que el resultado numérico tenga sentido con la forma de la trayectoria del diagrama.

## Casos especiales y ejemplo extendido

Un caso especial ocurre cuando la presión es casi constante pero no exactamente. En un ciclo real de motor, el tramo de expansión puede parecer horizontal en una escala pequeña, pero la desviación del isobárico cambia el trabajo a integrar.

Otro caso es un proceso con un tramo vertical seguido de un tramo horizontal. El tramo vertical no hace trabajo; el tramo horizontal sí. El área total es la del único tramo que cambia volumen.

Un ejemplo extendido es un pistón que primero se calienta a volumen fijo y luego se expande a presión casi constante. En el diagrama p-V se ven dos segmentos distintos: primero vertical, luego horizontal. La interpretación es que el gas recibió calor sin trabajo y luego hizo trabajo contra la presión constante.

Este tipo de construcción muestra por qué es fundamental distinguir la forma de la trayectoria y no solo los estados inicial y final.

## Preguntas reales del alumno

¿Si la curva en el diagrama p-V es horizontal, siempre es un proceso sin cambio de temperatura? No. Puede ser un proceso isobárico que cambie de temperatura y aun así mantenga la presión constante.

¿Un ciclo cerrado siempre produce trabajo neto positivo? No. Si la compresión consume más área que la expansión, el trabajo neto puede ser negativo.

¿Cómo sé si debo interpretar el área como trabajo realizado por el gas o sobre el gas? Mira el sentido del cambio de volumen: hacia la derecha indica expansión y trabajo del gas; hacia la izquierda indica compresión y trabajo sobre el gas.

## Conexiones transversales y rutas de estudio

Este leaf se conecta con el estudio de la ley del gas ideal, los procesos termodinámicos y la primera ley. También enlaza con temas de energía interna y ciclos termodinámicos porque el trabajo definido en un diagrama p-V es la base de cualquier análisis de eficiencia.

La ruta recomendada es: primero dominar la lectura de [[P]] y [[V]], luego entender cómo clasificar procesos por la forma de la trayectoria y finalmente usar el diagrama para comparar trabajos de distintos ciclos.

## Síntesis final

Los diagramas p-V son una forma potente de traducir la termodinámica de gases a una geometría comprensible. El trabajo es el área bajo la trayectoria y la forma del proceso dice si el gas se expande, se comprime o pasa por tramos con variable fija.

Interpretar bien ese gráfico permite responder a la pregunta central del leaf: cómo asociar formas y áreas del diagrama con trabajo y cambio de estado.