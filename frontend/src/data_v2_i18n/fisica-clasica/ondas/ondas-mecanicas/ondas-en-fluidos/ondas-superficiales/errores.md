## Errores conceptuales


### Error 1: Confundir la velocidad de la ola con la velocidad de las partículas de agua

**Por qué parece correcto**

Cuando se observa una ola en el mar, el agua parece desplazarse en la dirección de propagación. La cresta avanza visiblemente y genera la ilusión de que las moléculas de agua viajan con ella. Esta analogía incorrecta con el movimiento de partículas en una fila (como en una ola de estadio) refuerza la confusión.

**Por qué es incorrecto**

En una onda superficial lineal, las partículas de agua describen trayectorias casi circulares cerradas sin desplazamiento neto horizontal. Lo que avanza es la perturbación —el patrón de crestas y valles— no el fluido mismo. La [[rapidez_de_propagacion_de_ondas_superficiales]] de fase y la velocidad orbital de las partículas son magnitudes completamente distintas y no deben confundirse.

**Señal de detección**

El alumno escribe que [[rapidez_de_propagacion_de_ondas_superficiales]] es la velocidad a la que "viaja el agua" en vez de "viaja la perturbación de la interfaz", o calcula el tiempo de recorrido del fluido usando [[rapidez_de_propagacion_de_ondas_superficiales]] de la ola.

**Corrección conceptual**

[[rapidez_de_propagacion_de_ondas_superficiales]] es la celeridad de la forma de onda (velocidad de fase). La velocidad de las partículas de agua es proporcional a la amplitud, apunta en dirección circular y no tiene componente horizontal neta en el caso lineal. Son magnitudes independientes.

**Mini-ejemplo de contraste**

Una boya flotante sobre la superficie no avanza horizontalmente con las olas. Describe círculos casi cerrados mientras el patrón de ondas pasa bajo ella. Cualquier desplazamiento neto de la boya indica corrientes de deriva, no transporte por la onda.

---


### Error 2: Creer que [[frecuencia_de_la_onda_superficial]] y [[lambda]] son independientes en ondas superficiales

**Por qué parece correcto**

En una cuerda vibrada externamente se puede fijar libremente tanto la frecuencia del vibrador como la longitud de onda observada. El alumno generaliza esta independencia al caso de las ondas superficiales, creyendo que son dos parámetros libres.

**Por qué es incorrecto**

Las ondas superficiales tienen su propia relación de dispersión. Una vez fijado [[numero_de_onda]] (o [[lambda]]), la [[frecuencia_de_la_onda_superficial]] queda determinada unívocamente: el sistema no puede oscilar a una [[frecuencia_de_la_onda_superficial]] arbitraria para ese [[numero_de_onda]]. Esta acoplación es la esencia de la dispersión y no tiene equivalente en una cuerda no dispersiva.

**Señal de detección**

El alumno introduce valores de [[frecuencia_de_la_onda_superficial]] y [[lambda]] de forma independiente sin verificar si son mutuamente coherentes con la relación de dispersión del leaf.

**Corrección conceptual**

En ondas superficiales, [[frecuencia_de_la_onda_superficial]] resulta de [[rapidez_de_propagacion_de_ondas_superficiales]] dividido entre [[lambda]], y [[rapidez_de_propagacion_de_ondas_superficiales]] viene dada por la relación de dispersión para ese [[numero_de_onda]]. Dados [[numero_de_onda]] y los parámetros del fluido, [[frecuencia_de_la_onda_superficial]] está completamente determinada: no es un parámetro libre.

**Mini-ejemplo de contraste**

Con [[lambda]] de 0.5 m en agua pura, [[numero_de_onda]] es aproximadamente 12.6 m⁻¹ y la [[rapidez_de_propagacion_de_ondas_superficiales]] gravitatoria es aproximadamente 0.88 m/s; entonces [[frecuencia_de_la_onda_superficial]] es forzosamente unos 1.76 Hz. Pretender que [[frecuencia_de_la_onda_superficial]] vale 5 Hz para ese mismo [[lambda]] viola la relación de dispersión.

## Errores de modelo


### Error 3: Aplicar la fórmula gravitatoria a ondas de milímetros

**Por qué parece correcto**

La fórmula gravitatoria es la más sencilla y la que se presenta primero en los textos. El alumno la aplica de forma sistemática sin verificar el régimen de la onda, confiando en que la gravedad siempre domina.

**Por qué es incorrecto**

La fórmula gravitatoria desprecia [[sigma]]. Para [[lambda]] inferior a aproximadamente 1.7 cm en agua, el término capilar supera al gravitatorio y la fórmula simplificada produce [[rapidez_de_propagacion_de_ondas_superficiales]] muy inferior a la real. La [[rapidez_de_propagacion_de_ondas_superficiales]] calculada sería menor de la real porque el término capilar contribuye positivamente a la raíz.

**Señal de detección**

El resultado de [[rapidez_de_propagacion_de_ondas_superficiales]] para una onda de milímetros resulta significativamente menor que los valores de referencia; capilares de 1 mm deberían dar [[rapidez_de_propagacion_de_ondas_superficiales]] del orden de 0.3 m/s, pero la fórmula gravitatoria produce menos de 0.1 m/s.

**Corrección conceptual**

Verificar siempre [[lambda]] frente a la longitud capilar crítica. Si [[lambda]] es menor de 1.7 cm en agua, usar la fórmula capilar o la combinada. La fórmula gravitatoria solo es válida cuando [[lambda]] supera ampliamente esa longitud crítica.

**Mini-ejemplo de contraste**

Para [[lambda]] de 1 mm en agua pura, la fórmula gravitatoria da [[rapidez_de_propagacion_de_ondas_superficiales]] de aproximadamente 0.039 m/s, mientras que la fórmula capilar da aproximadamente 0.27 m/s. La diferencia es un factor siete: aplicar la fórmula incorrecta para ese régimen produce resultados radicalmente erróneos.

---


### Error 4: Aplicar la fórmula de agua profunda en aguas someras

**Por qué parece correcto**

La fórmula de agua profunda es la que aparece en los textos sin restricción de profundidad explícita. Si el enunciado no menciona la profundidad, el alumno asume que la condición de agua profunda se cumple automáticamente.

**Por qué es incorrecto**

Cuando la profundidad es inferior a la mitad de [[lambda]], la interacción con el fondo modifica significativamente la relación de dispersión. Las ondas se ralentizan y se deforman. Ignorar la profundidad conduce a sobreestimar [[rapidez_de_propagacion_de_ondas_superficiales]], a veces en más de un 30%.

**Señal de detección**

El enunciado menciona una playa, un canal, una cubeta de laboratorio o da explícitamente una profundidad comparable a [[lambda]] o menor. La presencia de un fondo cercano es señal inequívoca de aguas someras.

**Corrección conceptual**

Verificar siempre la condición de agua profunda antes de aplicar la fórmula estándar. Si la profundidad es menor que [[lambda]] dividida entre dos, usar la relación de dispersión general que incluye la función tangente hiperbólica del producto de [[numero_de_onda]] por la profundidad.

**Mini-ejemplo de contraste**

Una ola de [[lambda]] de 20 m en aguas de 5 m de profundidad tiene [[rapidez_de_propagacion_de_ondas_superficiales]] notablemente reducida respecto al valor de agua profunda. Ignorar el fondo sobreestima [[rapidez_de_propagacion_de_ondas_superficiales]] en más de un 30%, lo que llevaría a predecir tiempos de llegada significativamente erróneos en un sistema de alerta costera.

## Errores matemáticos


### Error 5: Olvidar el factor 2π al convertir [[lambda]] a [[numero_de_onda]]

**Por qué parece correcto**

Intuitivamente, [[numero_de_onda]] parece ser simplemente la inversa de [[lambda]]: la escala espacial inverted. Este razonamiento dimensional es correcto en cuanto a unidades pero omite el factor geométrico de 2π que convierte una longitud de onda en un ciclo completo de fase.

**Por qué es incorrecto**

La definición correcta de [[numero_de_onda]] es dos pi dividido entre [[lambda]]. Omitir el factor 2π produce un [[numero_de_onda]] que es 6.28 veces menor de lo correcto, lo que hace que [[rapidez_de_propagacion_de_ondas_superficiales]] gravitatoria resulte un factor de aproximadamente 2.5 veces mayor del valor real.

**Señal de detección**

[[rapidez_de_propagacion_de_ondas_superficiales]] calculada para [[lambda]] métrica resulta unos 2.5 veces mayor que los valores de referencia. En agua dulce, para [[lambda]] de 1 m, el valor correcto es aproximadamente 3.13 m/s; si se omite 2π, el resultado es aproximadamente 9.9 m/s.

**Corrección conceptual**

Siempre escribir la conversión explícita: [[numero_de_onda]] es dos pi dividido entre [[lambda]]. La longitud de onda [[lambda]] mide la distancia para un ciclo completo, y la fase avanza en 2π radianes por ciclo, de ahí el factor geométrico obligatorio.

**Mini-ejemplo de contraste**

Para [[lambda]] de 1 m, [[numero_de_onda]] correcto es 6.28 m⁻¹; si se omite 2π se obtiene [[numero_de_onda]] de 1 m⁻¹. La [[rapidez_de_propagacion_de_ondas_superficiales]] gravitatoria con [[numero_de_onda]] incorrecto resulta aproximadamente 9.9 m/s en lugar del correcto 3.13 m/s, un error del 216% que invalida completamente el cálculo.

## Errores de interpretación


### Error 6: Interpretar [[rapidez_de_propagacion_de_ondas_superficiales]] como la velocidad de transporte de energía

**Por qué parece correcto**

La idea intuitiva de "velocidad de ola" sugiere que es la velocidad a la que viaja todo lo que lleva la ola, incluyendo la energía. Si una tormenta genera una ola a 1000 km, el alumno usa directamente [[rapidez_de_propagacion_de_ondas_superficiales]] para estimar el tiempo de llegada de la energía.

**Por qué es incorrecto**

[[rapidez_de_propagacion_de_ondas_superficiales]] es la velocidad de fase: la velocidad a la que avanza un punto de fase constante (la cresta). La energía se transporta a la velocidad de grupo, que en medios dispersivos difiere de [[rapidez_de_propagacion_de_ondas_superficiales]]. En el régimen gravitatorio, la velocidad de grupo es la mitad de [[rapidez_de_propagacion_de_ondas_superficiales]]; usar [[rapidez_de_propagacion_de_ondas_superficiales]] directamente sobreestima la velocidad de llegada de la energía en un factor dos.

**Señal de detección**

El alumno usa [[rapidez_de_propagacion_de_ondas_superficiales]] para calcular el tiempo de llegada de las olas de una tormenta en lugar de usar la velocidad de grupo. El resultado es la mitad del tiempo correcto.

**Corrección conceptual**

Distinguir siempre entre velocidad de fase [[rapidez_de_propagacion_de_ondas_superficiales]] (celeridad de la cresta) y velocidad de grupo (velocidad de transporte de energía). En el régimen gravitatorio, la velocidad de grupo es [[rapidez_de_propagacion_de_ondas_superficiales]] dividida entre dos. En el régimen capilar es [[rapidez_de_propagacion_de_ondas_superficiales]] multiplicada por tres medios.

**Mini-ejemplo de contraste**

Si una tormenta genera olas de [[lambda]] de 100 m con [[rapidez_de_propagacion_de_ondas_superficiales]] de 13 m/s, la energía llega a una costa a 1000 km con un tiempo estimado usando la velocidad de grupo de 6.5 m/s, es decir, unos 43 horas, no 21 horas. Usar [[rapidez_de_propagacion_de_ondas_superficiales]] de fase produce una predicción con error del 100%.

## Regla de autocontrol rápido

Antes de declarar un cálculo de ondas superficiales correcto, verificar cinco puntos:

**1. ¿Se ha identificado el régimen?** Calcular [[numero_de_onda]] a partir de [[lambda]] usando el factor dos pi, y comparar los términos gravitatorio y capilar. Si [[lambda]] es mayor de 1.7 cm en agua, el régimen es gravitatorio; si es menor, capilar. En caso de duda, usar la fórmula combinada completa.

**2. ¿Se ha verificado la condición de agua profunda?** La profundidad del fluido debe superar [[lambda]] dividida entre dos. Si el enunciado da una profundidad comparable a [[lambda]], la fórmula estándar no aplica.

**3. ¿Están todas las magnitudes en SI?** Verificar que [[aceleracion_gravitatoria]] esté en m por segundo cuadrado, [[numero_de_onda]] en m⁻¹, [[sigma]] en N por metro y [[rho]] en kg por metro cúbico. Un error de unidades en [[aceleracion_gravitatoria]] o [[rho]] produce [[rapidez_de_propagacion_de_ondas_superficiales]] errónea por factores de decenas.

**4. ¿Es [[rapidez_de_propagacion_de_ondas_superficiales]] físicamente razonable?** Para agua con [[lambda]] entre 1 mm y 10 m, [[rapidez_de_propagacion_de_ondas_superficiales]] debe estar entre 0.2 y 10 m/s aproximadamente. Valores fuera de este rango señalan un error de cálculo o de régimen.

**5. ¿Se distingue [[rapidez_de_propagacion_de_ondas_superficiales]] de fase de la velocidad de grupo?** Si el problema pide el tiempo de llegada de la energía o de las olas de una tormenta, usar la velocidad de grupo, que en el régimen gravitatorio es la mitad de [[rapidez_de_propagacion_de_ondas_superficiales]]. Confundirlas produce errores del 100% en la predicción.