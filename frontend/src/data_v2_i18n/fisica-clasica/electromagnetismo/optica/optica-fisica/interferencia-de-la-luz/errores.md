## Errores conceptuales


### Error 1: Confundir interferencia con difracción

**Por qué parece correcto**

Ambos fenómenos producen patrones de intensidad variable en la pantalla y ambos involucran ondas que pasan por aberturas. El alumno los percibe como manifestaciones del mismo efecto.

**Por qué es incorrecto**

La interferencia es la superposición de ondas procedentes de fuentes coherentes discretas (dos o más rendijas), mientras que la difracción es la propagación de ondas a través de una abertura o alrededor de un obstáculo. Sus descripciones matemáticas son diferentes: la interferencia produce franjas equiespaciadas moduladas por el coseno cuadrado, mientras que la difracción produce una envolvente tipo sinc cuadrada centrada en el máximo central.

**Señal de detección**

El alumno usa la fórmula de posición de franjas [[y_m]] = [[orden_de_la_franja]] × [[lambda]] × [[distancia_a_la_pantalla]] / [[separacion_entre_rendijas]] sustituyendo [[separacion_entre_rendijas]] por el ancho de la rendija en lugar de la separación entre rendijas.

**Corrección conceptual**

Distinguir claramente entre [[separacion_entre_rendijas]] como separación entre rendijas (parámetro de interferencia) y el ancho de rendija (parámetro de difracción). La difracción de una sola rendija produce un patrón amplio centrado, mientras que la interferencia de doble rendija produce franjas múltiples dentro de esa envolvente.

**Mini-ejemplo de contraste**

Con una sola rendija de ancho 0.1 mm iluminada con [[lambda]] = 600 nm a distancia [[distancia_a_la_pantalla]] = 1 m, el primer mínimo de difracción está a 6 mm del centro. Con dos rendijas separadas [[separacion_entre_rendijas]] = 0.5 mm, las franjas de interferencia están separadas 1.2 mm. Si el alumno confunde ambos fenómenos y usa 0.1 mm como [[separacion_entre_rendijas]], obtiene franjas separadas 6 mm, confundiendo el mínimo de difracción con una franja de interferencia.


### Error 2: Sumar intensidades en lugar de amplitudes

**Por qué parece correcto**

En la experiencia cotidiana, dos fuentes de luz que iluminan la misma zona producen mayor brillo. El alumno generaliza esta observación sumando directamente las intensidades.

**Por qué es incorrecto**

Las amplitudes de campo eléctrico se suman vectorialmente, no las intensidades. La intensidad es proporcional al cuadrado de la amplitud total, lo que genera términos cruzados que dependen de la fase relativa. Son estos términos los responsables de las franjas.

**Señal de detección**

El alumno predice una pantalla uniformemente iluminada con intensidad igual a la suma de las intensidades individuales, sin franjas oscuras.

**Corrección conceptual**

La intensidad total contiene un término de interferencia proporcional al coseno de la diferencia de fase. Este término oscila entre valores positivos y negativos, generando máximos donde la fase relativa es cero y mínimos donde es π.

**Mini-ejemplo de contraste**

Dos haces de igual intensidad que se suman en intensidad dan siempre 2 × I₀ en todo punto. Sumados en amplitud dan 4 × I₀ en los máximos y 0 en los mínimos. La energía total integrada es la misma en ambos casos, pero la distribución espacial es radicalmente diferente.


### Error 3: Ignorar la condición de coherencia

**Por qué parece correcto**

El alumno ve que dos haces de luz se superponen y espera observar franjas, como en el experimento de Young, independientemente de la naturaleza de las fuentes.

**Por qué es incorrecto**

La interferencia requiere una relación de fase estable en el tiempo. Dos fuentes independientes fluctúan de manera incorrelacionada, produciendo un patrón que cambia demasiado rápido para ser observado, promediándose a iluminación uniforme.

**Señal de detección**

El alumno propone experimentos con dos lámparas o dos láseres independientes separados esperando observar franjas estables.

**Corrección conceptual**

La coherencia es requisito indispensable. Los métodos para obtener haces coherentes incluyen división del frente de onda (doble rendija de Young), división de amplitud (interferómetro de Michelson) o uso de una fuente única para ambos haces.

**Mini-ejemplo de contraste**

Dos punteros láser apuntando al mismo punto de una pared no producen franjas visibles porque sus osciladores son independientes. El mismo láser dividido por una doble rendija produce franjas estables perfectamente visibles, porque ambos haces provienen de la misma fuente coherente.

## Errores de modelo


### Error 4: Usar la aproximación de ángulos pequeños para órdenes altos

**Por qué parece correcto**

La fórmula [[y_m]] = [[orden_de_la_franja]] × [[lambda]] × [[distancia_a_la_pantalla]] / [[separacion_entre_rendijas]] es simple y directa. El alumno la aplica para cualquier valor de [[orden_de_la_franja]] sin verificar su rango de validez.

**Por qué es incorrecto**

La aproximación sin(θ) ≈ θ solo es válida para ángulos menores que 0.1 radianes. Para órdenes altos donde [[orden_de_la_franja]] × [[lambda]] / [[separacion_entre_rendijas]] supera 0.1, el error crece rápidamente y la posición real difiere significativamente de la predicha por la fórmula lineal.

**Señal de detección**

El alumno obtiene valores de [[y_m]] que se acercan o superan a [[distancia_a_la_pantalla]], o calcula implícitamente ángulos superiores a 6 grados sin reconocer la invalidez de la aproximación.

**Corrección conceptual**

Verificar que [[orden_de_la_franja]] × [[lambda]] / [[separacion_entre_rendijas]] < 0.1 antes de usar la aproximación. Para órdenes altos, usar la expresión exacta con arcoseno.

**Mini-ejemplo de contraste**

Para [[separacion_entre_rendijas]] = 0.1 mm y [[lambda]] = 600 nm, el orden [[orden_de_la_franja]] = 100 da un ángulo sin(θ) = 0.6, equivalente a 37 grados. La fórmula lineal predice [[y_m]] = 1.2 m para [[distancia_a_la_pantalla]] = 2 m. La expresión exacta da [[y_m]] = 2 m × tan(37°) = 1.5 m, un error del 25%.

## Errores matemáticos


### Error 5: Confundir unidades entre nanómetros, milímetros y metros

**Por qué parece correcto**

Los datos de los problemas vienen en unidades cómodas: [[lambda]] en nm y [[separacion_entre_rendijas]] en mm. El alumno los introduce directamente en la fórmula sin convertir.

**Por qué es incorrecto**

Las fórmulas requieren consistencia de unidades. Mezclar nm y mm sin convertir a metros produce factores de error de hasta 10⁶ en el resultado.

**Señal de detección**

El alumno obtiene separaciones entre franjas del orden de metros o kilómetros, o del orden de nanómetros, valores absurdos para un montaje de laboratorio.

**Corrección conceptual**

Convertir todas las magnitudes a metros antes de sustituir. Verificar que la separación entre franjas resultante está en el rango de milímetros para parámetros típicos de laboratorio.

**Mini-ejemplo de contraste**

Con [[lambda]] = 600 nm y [[separacion_entre_rendijas]] = 0.5 mm a [[distancia_a_la_pantalla]] = 1.5 m: usando unidades correctas, [[separacion_entre_franjas_consecutivas]] = 6 × 10⁻⁷ × 1.5 / (5 × 10⁻⁴) = 1.8 mm. Si el alumno usa 600 y 0.5 sin convertir, obtiene 600 × 1.5 / 0.5 = 1800 unidades sin sentido.

## Errores de interpretación


### Error 6: Interpretar mínimos como ausencia de luz de una fuente

**Por qué parece correcto**

El alumno razona geométricamente: si hay un punto oscuro, debe ser porque la luz de alguna rendija no llega allí, como una sombra.

**Por qué es incorrecto**

La luz de ambas rendijas llega a todos los puntos de la pantalla. Los mínimos ocurren porque las ondas llegan en contrafase y se anulan vectorialmente, no porque una falte. La interferencia destructiva es un fenómeno de cancelación de amplitudes, no de bloqueo geométrico.

**Señal de detección**

Explicaciones como "en ese punto solo llega luz de una rendija" o "la otra rendija está en sombra allí".

**Corrección conceptual**

La energía no desaparece en los mínimos; se redistribuye hacia los máximos. Si se tapa una de las rendijas, la intensidad en los antiguos mínimos aumenta, demostrando que ambas rendijas contribuían con luz a esos puntos.

**Mini-ejemplo de contraste**

Con ambas rendijas abiertas, un mínimo tiene intensidad cero. Al tapar una rendija, ese mismo punto tiene intensidad I₀, demostrando que la luz llegaba pero se cancelaba con la de la otra rendija.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado sobre interferencia, verificar las siguientes condiciones. La separación entre franjas debe estar en el rango de milímetros para parámetros típicos de laboratorio. El orden [[orden_de_la_franja]] debe ser entero para máximos perfectos. La posición [[y_m]] debe ser mucho menor que [[distancia_a_la_pantalla]] si se usó la aproximación de ángulos pequeños. Las unidades deben ser consistentes en metros en toda la fórmula. La intensidad total integrada sobre la pantalla debe ser igual a la suma de las intensidades individuales de cada rendija.