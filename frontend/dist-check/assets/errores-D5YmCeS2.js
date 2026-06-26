const e=`# Ecuación de Continuidad — Errores comunes y guía de corrección\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir Caudal con Velocidad\r
\r
**Por qué parece correcto**\r
Es muy intuitivo pensar que si el agua sale disparada con mucha fuerza y velocidad por una manguera estrecha, está saliendo "más agua". En la vida diaria solemos asociar velocidad visual con cantidad neta transportada.\r
\r
**Por qué es incorrecto**\r
La velocidad es una magnitud local dependiente de la geometría, mientras que el caudal volumétrico es una medida global de conservación. Un río ancho y lento puede transportar mil veces más agua (más caudal) que el chorro rápido de una manguera de bomberos.\r
\r
**Señal de detección**\r
El alumno iguala directamente velocidades entre dos secciones diferentes ignorando sus áreas o asume que el flujo sube porque la velocidad subió tras un estrechamiento.\r
\r
**Corrección conceptual**\r
Desvincular la velocidad del caudal en la mente. El caudal es la "cantidad total de pasajeros por segundo", el área es el "tamaño de la puerta" y la velocidad es "cuán rápido deben correr para pasar". Si la puerta es pequeña, deben correr rápido para mantener los mismos pasajeros.\r
\r
**Mini-ejemplo**\r
Si un tubo de 10\\,cm^2 se estrecha a 5\\,cm^2, la velocidad se duplica, pero el caudal volumétrico es exactamente el mismo en ambos tramos. \r
\r
### Error 2: Adivinar presiones basándose en la velocidad\r
\r
**Por qué parece correcto**\r
Al estrechar una manguera con el dedo sentimos más fuerza (velocidad), lo cual psicológicamente relacionamos de forma directa con un aumento de presión interna en el tubo. \r
\r
**Por qué es incorrecto**\r
La continuidad es pura cinemática; describe cómo se mueve la masa respecto a la geometría, pero no habla de las fuerzas ni de las energías requeridas. Asumir un cambio de presión sin plantear Bernoulli es adivinar fuera de la ley física correspondiente. \r
\r
**Señal de detección**\r
Afirmaciones no demostradas como "el diámetro se achica así que la presión debe crecer aquí", intentando justificar un diseño mecánico solo con continuidad.\r
\r
**Corrección conceptual**\r
Entender que la limitación fundamental de la Ecuación de Continuidad es que solo rige movimientos inerciales macroscópicos. Para hablar de esfuerzos, energía o presiones termodinámicas, es forzoso acoplar el modelo al principio de conservación de la energía.\r
\r
**Mini-ejemplo**\r
Un estrechamiento en un tubo Venturi aumenta la velocidad calculada por continuidad, pero en realidad, la presión estática disminuye bruscamente en esa misma contracción.\r
\r
## Errores de modelo\r
\r
### Error 3: Aplicar Q = Av a gases de alta velocidad\r
\r
**Por qué parece correcto**\r
La ley ideal proporciona resultados rápidos y suele ser el único modelo enseñado extensamente al principio, dando la falsa sensación de ser una norma universal para fluidos.\r
\r
**Por qué es incorrecto**\r
Esta ecuación asume explícitamente incompresibilidad (densidad constante). El aire o cualquier gas a velocidades importantes (Mach mayor a 0,3) cambia drásticamente su densidad según la presión. Usar volumen asume que un litro de aire comprimido pesa lo mismo que uno expandido.\r
\r
**Señal de detección**\r
Uso del volumen constante en sistemas descritos explícitamente como "aire a 200 m/s" o en flujos gaseosos supersónicos.\r
\r
**Corrección conceptual**\r
Para gases veloces, la masa es sagrada pero el volumen miente. Debe usarse inflexiblemente el balance de caudal másico:\r
\r
{{f:caudal_masico}}\r
\r
**Mini-ejemplo**\r
En la tobera de un cohete, aunque el área aumenta para la expansión del gas caliente, la velocidad aumenta violentamente porque el gas se vuelve simultáneamente mucho menos denso.\r
\r
### Error 4: Ignorar ramificaciones en el balance\r
\r
**Por qué parece correcto**\r
Se arrastra la inercia mental de resolver un tubo simple de única entrada y salida asumiendo que lo que entra debe salir exactamente por "la otra punta".\r
\r
**Por qué es incorrecto**\r
El Principio de Conservación de la Masa exige contabilizar todos los nodos. Toda masa entrante al nodo de control se divide, por lo que igualar una entrada a una única salida arbitraria viola brutalmente la regla física fundacional.\r
\r
**Señal de detección**\r
Planteamientos que igualan una sola entrada con una sola salida ignorando en la ecuación la existencia de un segundo ramal visible en el esquema.\r
\r
**Corrección conceptual**\r
Considerar cualquier ramificación como un nudo eléctrico elemental (leyes de Kirchhoff). El sumatorio de los caudales entrantes es exactamente igual al sumatorio de los caudales salientes; un nodo pasivo no los destruye ni crea.\r
\r
**Mini-ejemplo**\r
Si entran 10\\,L/s por el tronco principal y tenemos dos ramas de salida asimétricas, formular 10 = Q_1 + Q_2 impide el absurdo trágico computacional de deducir 10\\,L/s en la primera, ignorando de facto a la segunda.\r
\r
## Errores matemáticos\r
\r
### Error 5: La trampa del diámetro al cuadrado (Factor oculto de 4)\r
\r
**Por qué parece correcto**\r
Al ver una relación directa entre el área y el radio al cuadrado, se tiende a simplificar intuitivamente reemplazando r por el valor del diámetro directamente o no se usa el número pi ni la corrección geométrica en cálculos sueltos.\r
\r
**Por qué es incorrecto**\r
El área transversal de un conducto tubular es dependiente del diámetro al cuadrado. Si uno relaciona dos áreas con distintos diámetros, el ratio correcto es la división de los diámetros al cuadrado. El olvido de convertir adecuadamente radios y diámetros resulta en discrepancias cuadráticas abismales.\r
\r
**Señal de detección**\r
Despejar e igualar velocidades según proporciones lineales del diámetro: asumiendo que si el diámetro se reduce a la mitad formal, la velocidad se dobla (error) en lugar de cuadruplicarse.\r
\r
**Corrección conceptual**\r
Entender interiorizada y visualmente cómo la magnitud bidimensional de área explota al cambiar de escala: el crecimiento de las áreas no es isométrico lineal respecto de la sección geométrica radial. \r
\r
**Mini-ejemplo**\r
Un diámetro decapitado en un 50\\% hace que el área decrezca a un radical 25\\% original, exigiendo una velocidad matemáticamente multiplicada por cuatro.\r
\r
## Errores de interpretación\r
\r
### Error 6: El mito de la pérdida de masa\r
\r
**Por qué parece correcto**\r
Creer visualmente que si el tubo se ensancha gradualmente y el líquido se vuelve superlento, el fluido "pierde fuerza" porque se pierde masa inercial por el camino. \r
\r
**Por qué es incorrecto**\r
La conservación masiva es un principio fundamental inquebrantable; la materia en un régimen permanente no posee agujeros de disipación interna. La masa absoluta no se transfiere ni merma; se expande localmente rellenando más volumen transversal por cada milisegundo transcurrido.\r
\r
**Señal de detección**\r
El alumno verbaliza explícitamente comentarios descriptivos estipulando deficiencias volumétricas tras una expansión estructural gigantesca del ducto hidrodinámico.\r
\r
**Corrección conceptual**\r
Acatar radicalmente el precepto dictaminado por los volúmenes de control estacionarios: densidad y volumen acotado deciden el paso de paquetes idénticos temporales; no existen fugas espontáneas fantasma operativas durante la circulación de masa densa.\r
\r
**Mini-ejemplo**\r
El ensanchamiento abismal de un río que desemboca pasivamente al océano reduce severamente su violencia cinética natural pero acarrea milimétricamente cien por cien su entrega hidromásica pura al atlántico.\r
\r
## Regla de autocontrol rápido\r
Antes de entregar un ejercicio de continuidad, verifique sistemáticamente estos 4 puntos críticos obligatorios:\r
\r
1. **Check de Magnitud**: ¿La velocidad calculada tiene sentido? Si el resultado es 1000\\,m/s en una tubería de agua residencial, hay un error de unidades o un despeje fallido grosero.\r
2. **Check Geométrico**: Si el área disminuyó agresivamente transversalmente a favor del flujo, entonces la velocidad inercial local DEBE obligatoriamente haber experimentado un salto ascendente correlativo.\r
3. **Check de Unidades**: ¿Calculaste eficientemente la superficie en metros cuadrados integrales? ¿Sustituiste adecuadamente la variable del radio puro sobre su contraparte del diámetro comercial engañoso?\r
4. **Check de Régimen Evaluado**: ¿Comanda el diseño hibridado sobre agua estéril líquida incompresible estándar? Validemos con la ley formal paramétrica universal básica volumétrica. En contrapartida, ¿proyectamos sobre un chorro gaseoso violento superenfriado rápido? Transicionemos obligatoriamente hacia el caudal formal dictado por la ley másica densa.`;export{e as default};
