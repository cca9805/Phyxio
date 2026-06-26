const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de masa [[m]] descansa sobre una rampa rígida de longitud de tramo conocida e inclinación [[theta]]. El contacto tiene rozamiento estático [[mu_e]] y, si el bloque desliza, rozamiento cinético [[mu_c]]. Se pide decidir si el bloque permanece en reposo o se mueve, calcular el umbral angular [[theta_c]], y, si hay deslizamiento, determinar la aceleración [[a]], la velocidad final y el tiempo de recorrido.\r
\r
## Datos\r
\r
- [[m]] = 5.0 kg\r
- [[theta]] = 24 grados\r
- [[mu_e]] = 0.40\r
- [[mu_c]] = 0.28\r
- [[g]] = 9.8 m/s2\r
- Longitud del tramo: 3.0 m\r
- Velocidad inicial [[v]] = 0\r
\r
Criterios de interpretación:\r
\r
- Si tan([[theta]]) <= [[mu_e]], el bloque puede permanecer en reposo.\r
- Si tan([[theta]]) > [[mu_e]], el reposo es inestable y el bloque desliza.\r
- En un margen cercano al umbral conviene revisar bien el redondeo del ángulo.\r
\r
## Definición del sistema\r
\r
Sistema: bloque de masa [[m]] sobre una rampa fija. Las fuerzas relevantes son el peso total, la normal [[N]] y la fricción [[f_r]].\r
\r
Ejes elegidos:\r
\r
- Eje paralelo al plano: dirección de posible deslizamiento.\r
- Eje perpendicular al plano: dirección de la reacción de contacto.\r
\r
Magnitudes clave:\r
\r
- [[N]] fija la escala máxima de rozamiento.\r
- [[f_s_max]] es la mayor fricción estática posible.\r
- [[f_r]] es la fricción cinética cuando ya existe deslizamiento.\r
- [[theta_c]] separa reposo y movimiento.\r
\r
## Modelo físico\r
\r
El modelo tiene dos ramas.\r
\r
Primero, la rama estática:\r
\r
{{f:normal_plano_inclinado}}\r
\r
{{f:friccion_estatica_maxima}}\r
\r
{{f:umbral_reposo}}\r
\r
{{f:angulo_critico}}\r
\r
Si tan([[theta]]) <= [[mu_e]], el bloque no se mueve y la fricción estática compensa exactamente la componente paralela del peso hasta su máximo.\r
\r
Segundo, la rama cinética:\r
\r
{{f:friccion_cinetica}}\r
\r
{{f:aceleracion_plano_rozamiento}}\r
\r
Si tan([[theta]]) > [[mu_e]], el bloque desliza y la fricción pasa a ser cinética, ya no estática. Esa transición es el corazón del tema.\r
\r
## Justificación del modelo\r
\r
La justificación física es doble. Primero, la fuerza normal [[N]] determina cuánto contacto real existe entre bloque y rampa; por tanto, controla la escala de fricción. Segundo, el umbral [[theta_c]] resume en una sola condición si la gravedad paralela supera o no la capacidad de adherencia del contacto.\r
\r
No basta con decir "hay rozamiento": hay que saber si el contacto está sosteniendo el reposo o ya está disipando energía durante el movimiento. Esa distinción cambia completamente la respuesta dinámica.\r
\r
## Resolución simbólica\r
\r
1. Cerrar el eje normal:\r
\r
{{f:normal_plano_inclinado}}\r
\r
2. Calcular la fricción estática máxima:\r
\r
{{f:friccion_estatica_maxima}}\r
\r
3. Comparar con el peso paralelo para decidir el régimen:\r
\r
{{f:umbral_reposo}}\r
\r
{{f:angulo_critico}}\r
\r
4. Si el bloque desliza, usar la fricción cinética:\r
\r
{{f:friccion_cinetica}}\r
\r
5. Obtener la aceleración real en la rampa:\r
\r
{{f:aceleracion_plano_rozamiento}}\r
\r
6. Con aceleración constante, calcular velocidad final y tiempo con las relaciones cinemáticas del movimiento uniformemente acelerado.\r
\r
La clave simbólica es que la existencia o no de movimiento depende de comparar [[theta]] con [[theta_c]], no solo de mirar el peso total.\r
\r
## Sustitución numérica\r
\r
Primero el umbral:\r
\r
- [[theta_c]] = arctan(0.40) ~= 21.8 grados.\r
- Como [[theta]] = 24 grados > [[theta_c]], el bloque desliza.\r
\r
Luego la normal:\r
\r
- [[N]] = [[m]] [[g]] cos([[theta]]) = 5.0 x 9.8 x cos(24 grados)\r
- [[N]] ~= 49.0 x 0.9135 ~= 44.8 N.\r
\r
Fricción estática máxima:\r
\r
- [[f_s_max]] = [[mu_e]] [[N]] = 0.40 x 44.8 ~= 17.9 N.\r
\r
Componente paralela del peso:\r
\r
- [[m]] [[g]] sen([[theta]]) = 5.0 x 9.8 x sen(24 grados)\r
- ~= 49.0 x 0.4067 ~= 19.9 N.\r
\r
Como 19.9 N > 17.9 N, el reposo no es posible.\r
\r
Fricción cinética:\r
\r
- [[f_r]] = [[mu_c]] [[N]] = 0.28 x 44.8 ~= 12.5 N.\r
\r
Fuerza neta a lo largo del plano:\r
\r
- fuerza neta ~= 19.9 - 12.5 = 7.4 N.\r
\r
Aceleración:\r
\r
- [[a]] = fuerza neta / [[m]] ~= 7.4 / 5.0 = 1.48 m/s2.\r
\r
Velocidad final:\r
\r
- velocidad final aproximada de 2.98 m/s.\r
\r
Tiempo:\r
\r
- tiempo de recorrido aproximado de 2.01 s.\r
\r
## Validación dimensional\r
\r
- [[N]] y [[f_r]] se expresan en newtons.\r
- [[a]] se expresa en m/s2.\r
- La velocidad se expresa en m/s.\r
- El tiempo se expresa en segundos.\r
\r
Chequeos de coherencia:\r
\r
- Si [[theta]] bajara por debajo de [[theta_c]], el bloque no debería deslizar.\r
- Si [[mu_c]] aumentara, [[a]] debería disminuir.\r
- Si [[mu_e]] aumentara, [[theta_c]] debería aumentar también.\r
\r
## Interpretación física\r
\r
El resultado enseña tres ideas importantes. La primera es que no todo plano inclinado produce movimiento: hay un umbral angular real. La segunda es que la fricción estática y la cinética no cumplen el mismo papel; una decide si se rompe el reposo y la otra gobierna el movimiento una vez iniciado. La tercera es que la normal [[N]] no es un detalle matemático, sino la magnitud que fija la escala de fricción.\r
\r
La lectura conceptual correcta no termina en el número [[a]]. El verdadero mensaje es que un aumento pequeño de [[theta]] puede empujar el sistema por encima de [[theta_c]], y entonces todo el régimen cambia.\r
\r
La cadena causal completa es esta: al aumentar [[theta]], crece la componente paralela del peso; si esa componente supera la capacidad máxima de adherencia [[f_s_max]], el contacto deja de sostener reposo y pasa a disipar energía por fricción cinética [[f_r]]. En ese instante cambia la ley efectiva del sistema y, con ella, cambia la predicción dinámica.\r
\r
Por eso, este resultado no describe solo "cuánto acelera" el bloque, sino "qué mecanismo físico está activo". Esa distinción permite anticipar comportamientos: cerca de [[theta_c]] una variación pequeña de superficie o ángulo puede provocar un cambio brusco de respuesta, mientras que lejos del umbral el sistema es más robusto frente a perturbaciones.\r
\r
La utilidad didáctica es que el estudiante aprende a leer transiciones de régimen y no solo resultados numéricos aislados. Eso es lo que convierte la resolución en criterio físico aplicable a diseño y diagnóstico.\r
\r
En otras palabras, el ejemplo no solo resuelve un problema de cinemática: muestra cuándo una rampa deja de ser un apoyo pasivo y pasa a controlar el flujo de energía. Ese salto de régimen es lo que importa en diseño, porque obliga a pensar en seguridad, capacidad de salida y continuidad del proceso, no solo en la aceleración instantánea.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una plataforma industrial necesita una rampa de descarga para cajas ligeras. Se sabe que el revestimiento superficial tiene [[mu_e]] de 0.55 y [[mu_c]] de 0.42. La longitud disponible del tramo es 2.5 m. El equipo quiere que la rampa ayude a descargar sin que las cajas salgan disparadas al final.\r
\r
Se prueban tres ángulos: 20 grados, 30 grados y 35 grados. El problema práctico no es solo si las cajas se mueven, sino con qué margen de seguridad lo hacen.\r
\r
## Estimación física\r
\r
Para [[mu_e]] = 0.55:\r
\r
- [[theta_c]] = arctan(0.55) ~= 28.8 grados.\r
\r
Entonces:\r
\r
1. A 20 grados:\r
\r
- tan(20 grados) ~= 0.36 < 0.55, así que la caja permanece en reposo.\r
- La fricción estática disponible supera la componente paralela del peso.\r
- No hay descarga espontánea.\r
\r
2. A 30 grados:\r
\r
- tan(30 grados) ~= 0.58 > 0.55, así que la caja desliza.\r
- [[N]] ~= [[m]] [[g]] cos(30 grados).\r
- [[f_r]] ~= [[mu_c]] [[N]] y la aceleración queda moderada.\r
\r
3. A 35 grados:\r
\r
- el bloque desliza con mayor aceleración que a 30 grados.\r
- la velocidad final aumenta y el impacto en la salida se vuelve más severo.\r
\r
Lectura de diseño:\r
\r
- 20 grados no sirve si se quiere descarga automática.\r
- 30 grados funciona, pero entra en una zona donde la velocidad de salida debe vigilarse.\r
- 35 grados puede ser útil solo si hay tope, amortiguación o transición a otra etapa de transporte.\r
\r
Si la caja pesa 8 kg, el caso de 30 grados permite una estimación concreta: [[N]] ~= 8 x 9.8 x cos(30 grados) ~= 67.9 N, la fricción cinética ~= 0.42 x 67.9 ~= 28.5 N, y la componente paralela del peso es 8 x 9.8 x sen(30 grados) = 39.2 N. La fuerza neta queda en torno a 10.7 N, así que [[a]] ~= 1.34 m/s2. En un tramo de 2.5 m, eso produce una velocidad final cercana a 2.6 m/s y un tiempo de unos 1.93 s.\r
\r
## Interpretación\r
\r
La aplicación real muestra por qué el modelo con rozamiento es más útil que el ideal cuando el objetivo es seguridad y control. El ángulo crítico [[theta_c]] no es un dato decorativo: define una frontera de diseño. Un sistema bien diseñado no busca simplemente "que se mueva", sino que se mueva dentro del rango correcto.\r
\r
La lección operativa es clara. Si el ángulo está por debajo de [[theta_c]], no habrá descarga por gravedad y el proceso fallará por falta de flujo. Si el ángulo está bastante por encima, el flujo ocurre, pero puede volverse demasiado rápido. El diseño bueno vive entre esos dos extremos y usa la fricción como herramienta, no como accidente.\r
\r
La conclusión cuantitativa es importante: pasar de un ángulo inservible para flujo automático a uno de trabajo no solo cambia la presencia o ausencia de movimiento, sino también la escala de salida. Un margen de apenas unos grados puede significar la diferencia entre una caja que permanece inmóvil, una caja que sale a velocidad moderada y una caja que llega con demasiada energía al siguiente módulo.\r
\r
Lo decisivo no es solo el número final, sino la lectura del proceso: la fricción estática fija si hay arranque, la fricción cinética fija cómo se desarrolla el arranque, y el ángulo fija el presupuesto energético disponible. Esa cadena causal hace que el modelo sea útil para decidir, no solo para calcular.\r
\r
La interpretación física completa es que el sistema no se diseña para "quitar fricción", sino para ubicarla en el lugar correcto. En una rampa útil, la fricción estática evita deslizamientos no deseados durante la carga, y la fricción cinética ayuda a limitar la energía de salida una vez que el movimiento ya empezó. Esa doble función explica por qué el mismo contacto puede ser deseable o problemático según el objetivo operativo.\r
\r
Por eso, el ángulo de trabajo no se elige para maximizar o minimizar una ecuación aislada, sino para que el flujo de cajas sea estable a escala de sistema. Un ángulo cercano a [[theta_c]] puede ser perfecto para arrancar el movimiento, pero todavía demasiado alto si la etapa siguiente no acepta esa energía de salida. La física útil es la que conecta umbral, velocidad y proceso completo.\r
\r
En otras palabras, el ejemplo no se limita a la cifra de salida: enseña a pensar en el comportamiento de la rampa como parte de una cadena logística. Cuando el umbral se cruza, la rampa deja de ser un plano neutro y se convierte en una decisión de diseño que afecta al ritmo de trabajo, a la seguridad y al control del proceso.\r
\r
La lectura física profunda es causal: no se trata de "meter números" en una fórmula, sino de entender qué mecanismo cambia cuando se supera el umbral. Debajo del umbral domina la adherencia y la energía no se transforma en avance. Por encima del umbral empieza la disipación cinética y el sistema entra en un régimen donde cada grado extra de inclinación impacta en toda la línea de operación.\r
\r
La conclusión de ingeniería es directa: si el objetivo del proceso es regular el flujo, el ángulo no se fija por comodidad geométrica, sino por el régimen que activa en el contacto. Un diseño robusto busca una zona donde pequeñas variaciones de superficie, carga o humedad no cambien de golpe el comportamiento del sistema. Esa sensibilidad de régimen es el núcleo físico que este ejemplo quiere enseñar.\r
\r
Por eso, la interpretación correcta no es "la aceleración vale tanto", sino "el sistema está en tal régimen y por eso responde así". Ese cambio de mirada separa una resolución escolar de una lectura profesional: permite anticipar fallos, justificar márgenes y explicar decisiones de diseño con base causal.`;export{e as default};
