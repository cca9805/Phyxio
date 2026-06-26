## Modelo ideal

El modelo estándar de la energía libre de Gibbs trata [[DeltaH]] y [[DeltaS]] como **constantes independientes de la temperatura** a lo largo de todo el proceso. Con esta simplificación, [[DeltaG]] resulta una función lineal de [[T]], lo que permite calcular la espontaneidad de un proceso con solo conocer dos parámetros termodinámicos. El modelo conserva la presión y la temperatura constantes como hipótesis operativas fundamentales, y asume que el sistema es cerrado y no realiza otro trabajo que el expansivo frente al entorno.

Esta simplificación tiene un valor pedagógico y práctico enorme: permite clasificar cualquier proceso en cuatro categorías según el signo de [[DeltaH]] y [[DeltaS]], identificar si existe [[T_inv]] y estimar cuantitativamente la magnitud de la espontaneidad. En la mayoría de las aplicaciones de laboratorio y en los ejercicios de nivel universitario, el modelo produce predicciones que coinciden con los datos experimentales dentro de un margen razonable.

## Hipótesis

- [[DeltaH]] es independiente de [[T]] en el rango de temperatura considerado. Consecuencia de violarla: la recta [[DeltaG]] vs [[T]] deja de ser lineal y [[T_inv]] real puede diferir notablemente del estimado.
- [[DeltaS]] es independiente de [[T]] en el rango de temperatura considerado. Consecuencia de violarla: la pendiente de [[DeltaG]] vs [[T]] varía con la temperatura, introduciendo curvatura en la gráfica.
- La presión se mantiene constante durante todo el proceso. Si la presión varía significativamente, hay que incorporar el término de volumen en la expresión de [[DeltaG]].
- El sistema es cerrado: no hay intercambio de materia con el entorno. Si hay intercambio de materia, la expresión correcta involucra potenciales químicos.
- El único trabajo externo es el trabajo expansivo frente a la presión atmosférica. Si existe trabajo no expansivo (eléctrico, mecánico adicional), [[DeltaG]] sigue siendo el criterio pero su interpretación como trabajo útil máximo se matiza.

## Dominio de validez cuantitativo

El modelo es más preciso cuando la variación de [[T]] en el proceso es inferior al 20 % del valor en kelvin. Para un proceso a temperatura ambiente de 298 K, una variación de hasta 60 K es manejable sin pérdida apreciable de precisión.

La aproximación comienza a fallar cuando el rango de temperaturas supera los 200 K en torno al valor de referencia, o cuando la variación relativa de las capacidades caloríficas supera el 15 %. En términos prácticos, la precisión del modelo cae por debajo del 5 % cuando se trabaja en intervalos donde la capacidad calorífica varía en más del 10 %, condición que suele cumplirse para variaciones de [[T]] menores de 100 K en procesos sin cambio de fase.

Cuantitativamente: la condición de validez estricta es una variación de temperatura inferior a 100 K respecto al valor de referencia. Para variaciones de [[T]] entre 100 K y 500 K, la corrección de Kirchhoff introduce un término cuadrático en [[T]] que puede modificar [[DeltaG]] en más del 10 %.

## Señales de fallo del modelo

- La gráfica experimental de [[DeltaG]] vs [[T]] muestra **curvatura visible** en lugar de ser lineal: indica que [[DeltaH]] o [[DeltaS]] varían con [[T]].
- El valor calculado de [[T_inv]] no coincide con la temperatura experimental a la que el proceso se observa en equilibrio: diferencia superior al 15 % exige corrección de Kirchhoff.
- [[DeltaH]] calculada a partir de datos de equilibrio en dos temperaturas distintas da valores inconsistentes entre sí: señal de dependencia de [[DeltaH]] con [[T]].
- La reacción cruza un cambio de fase en el rango de temperatura estudiado: la constancia de [[DeltaS]] se rompe abruptamente en la temperatura de transición.
- Los productos o reactivos son mezclas multicomponente con interacciones no ideales: [[DeltaH]] y [[DeltaS]] de mezcla no son simples sumas de las propiedades puras.

## Modelo extendido o alternativo

El modelo extendido de Gibbs incorpora la dependencia de [[DeltaH]] y [[DeltaS]] con la temperatura mediante la ley de Kirchhoff:

La variación de [[DeltaH]] con [[T]] se escribe como la integral de la diferencia de capacidades caloríficas de productos y reactivos entre los límites de temperatura. Análogamente, la variación de [[DeltaS]] se obtiene integrando esa diferencia dividida por [[T]]. El resultado es una expresión cuadrática o logarítmica de [[DeltaG]] en función de [[T]], que deja de ser lineal.

Para sistemas multicomponente, el modelo alternativo utiliza potenciales químicos parciales: cada componente contribuye a [[DeltaG]] con su actividad y su potencial químico estándar. Este modelo puede describir fenómenos de no idealidad como la disminución de presión de vapor de un disolvente al disolver una soluto.

Cuando conviene pasar al modelo extendido: cuando el proceso traversa un intervalo de temperatura superior a 200 K, cuando hay cambios de fase dentro del rango de estudio, o cuando la precisión requerida es inferior al 5 % y se trabaja en condiciones industriales con mezclas no ideales. Cambiar a este modelo cuando los datos experimentales muestren una curvatura sistemática en el diagrama [[DeltaG]] vs [[T]].

## Comparación operativa

| Criterio | Modelo estándar ([[DeltaH]], [[DeltaS]] constantes) | Modelo extendido (Kirchhoff) |
|----------|---------------------------------------------|------------------------------|
| Complejidad | Baja; cálculo directo con dos parámetros | Alta; requiere datos de capacidad calorífica |
| Precisión | Buena para rangos de T menores de 100 K | Excelente para rangos amplios |
| Linealidad de [[DeltaG]] vs T | Sí, siempre | No; curvatura perceptible |
| Aplicabilidad a mezclas | Solo mezclas ideales | Mezclas no ideales con actividades |
| Identificación de [[T_inv]] | Directa (cociente [[DeltaH]]/[[DeltaS]]) | Requiere resolución numérica |

El modelo estándar es la herramienta de primera elección en docencia y en estimaciones rápidas. El modelo extendido es obligatorio en diseño de procesos industriales, farmacología y cualquier aplicación donde la precisión cuantitativa sea crítica.
