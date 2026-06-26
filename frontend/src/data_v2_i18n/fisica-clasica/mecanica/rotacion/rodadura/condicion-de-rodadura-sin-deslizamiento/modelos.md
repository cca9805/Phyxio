# Modelos físicos de la condición de rodadura

## Modelo ideal

El modelo ideal representa la rueda como un cuerpo rígido de radio efectivo constante sobre una superficie fija. La idea central es que avance y giro quedan coordinados por el contacto. En esa descripción, el punto inferior no arrastra suelo y la lectura del contacto puede resumirse con residuo nulo.

Este modelo es extremadamente útil porque comprime una realidad compleja en una ligadura simple. Permite pasar de una escena física con muchas fuerzas y detalles microscópicos a una relación geométrica clara entre traslación, rotación y velocidad del apoyo.

## Hipótesis

Se supone que el cuerpo mantiene forma estable, que el radio efectivo [[R]] no cambia de manera apreciable y que la superficie no introduce saltos, rebotes o pérdidas intermitentes de contacto. También se asume adherencia suficiente para sostener fricción estática y un convenio de signos coherente entre [[v]], [[omega]] y el sentido de giro.

Además, la zona de contacto debe ser lo bastante pequeña para que tenga sentido hablar de un punto de apoyo con velocidad instantánea bien definida. Esta hipótesis es excelente para ruedas rígidas o para tratamientos introductorios, pero ya es menos inocente en neumáticos muy deformables o en terrenos blandos.

## Dominio de validez cuantitativo

El modelo es razonable mientras la fricción estática disponible pueda sostener la ligadura. En una estimación básica debe cumplirse

{{f:condicion_rodadura}}

y, si el movimiento está acelerado con radio constante,

{{f:velocidad_contacto}}

Como criterio cuantitativo práctico, en un experimento bien medido conviene pedir que el valor absoluto de [[delta]] sea menor que 0.05 m/s o, de forma relativa, un residuo menor que 1 % de la velocidad lineal. Si el error supera claramente esos umbrales, la descripción ideal deja de ser fiable aunque la rueda siga pareciendo “casi normal” a simple vista.

## Señales de fallo del modelo

El modelo falla cuando la velocidad de contacto deja de ser casi nula, cuando [[delta]] adquiere un signo estable distinto de cero o cuando la fricción requerida rebasa la adherencia disponible. También aparecen señales observables: chirrido, calentamiento local, humo, desgaste anómalo o desacuerdo persistente entre distancia recorrida y distancia inferida a partir de vueltas.

En sistemas instrumentados, otra señal clara es el desacoplamiento entre sensores de rueda y sensores de velocidad del vehículo. Cuando ambos empiezan a contar historias distintas, el modelo ideal ya no está describiendo el contacto real.

## Modelo extendido o alternativo

Cuando la ligadura se rompe, hay que pasar al modelo de rodadura con deslizamiento. En ese régimen [[v]] y [[omega]] siguen estando acoplados por la dinámica, pero ya no por una igualdad exacta de compatibilidad geométrica. Aparece fricción cinética, disipación y un residuo [[delta]] que clasifica si domina derrape o patinamiento.

Cuándo conviene pasar al modelo alternativo? Conviene hacerlo cuando el residuo deja de ser pequeño frente a la escala de `v`, cuando hay evidencia de fricción cinética o cuando la predicción ideal deja de reproducir la medición. Insistir en la ligadura ideal más allá de ese punto solo es esconder el error debajo del álgebra.

## Comparación operativa

Operativamente, el modelo ideal sirve para problemas donde la pregunta principal es verificar compatibilidad entre giro y avance o usar esa compatibilidad para cerrar otra ecuación. El modelo con deslizamiento sirve cuando interesa ya la potencia disipada, el desgaste, el control de tracción o el bloqueo en frenada.

La diferencia no es solo matemática. En el modelo ideal, el residuo debe leerse como comprobación. En el modelo extendido, el mismo residuo pasa a ser variable física relevante. Esa es la comparación operativa importante: no cambia solo una ecuación, cambia el papel físico del contacto en el problema.