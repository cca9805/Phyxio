const e=`# Errores frecuentes\r
\r
## Error 1: elegir la operacion equivocada\r
\r
El error aparece al sumar exponentes cuando se esta dividiendo, o al restarlos cuando se esta multiplicando. Parece un detalle algebraico, pero en fisica puede cambiar la respuesta por muchos factores de diez.\r
\r
Por ejemplo, si \`v = d / t\`, una distancia de \`10^3 m\` y un tiempo de \`10^1 s\` dan \`10^2 m/s\`, no \`10^4 m/s\`. Detectalo escribiendo la operacion fisica antes de operar exponentes.\r
\r
## Error 2: perder el significado de la variable\r
\r
Comparar exponentes sin mirar la magnitud lleva a conclusiones falsas. \`10^3 Pa\`, \`10^3 J\` y \`10^3 m\` tienen el mismo exponente, pero no representan el mismo tipo de realidad fisica.\r
\r
Corrige este error nombrando la variable. Di presion, energia, longitud, fuerza o tiempo antes de comparar. El orden de magnitud solo se interpreta dentro de una magnitud y una unidad.\r
\r
## Error 3: ignorar unidades\r
\r
Una estimacion sin unidades puede parecer correcta y ser inutil. Si obtienes \`10^2\` sin saber si es metros por segundo, newtons o julios, no puedes decidir si el resultado tiene sentido.\r
\r
Detectalo revisando la unidad final de la formula. Corrigelo conservando unidades simplificadas: metros entre segundos, newtons por metro, culombios entre segundos. La escala y la unidad deben viajar juntas.\r
\r
## Error 4: confundir signo con modulo\r
\r
El orden de magnitud suele referirse al tamaño, no al signo. Una velocidad de \`-30 m/s\` tiene modulo del orden de \`10^1 m/s\`, pero el signo indica direccion respecto al eje elegido.\r
\r
El error consiste en borrar el signo y perder informacion fisica. Corrigelo separando dos preguntas: cual es la escala del valor y que significa su signo en el modelo.\r
\r
## Error 5: aplicar una regla fuera de dominio\r
\r
La estimacion no basta cuando dos cantidades son cercanas y su diferencia importa. Si comparas dos fuerzas de \`1.1 N\` y \`1.3 N\`, ambas tienen el mismo orden de magnitud, pero la diferencia puede ser importante en un equilibrio delicado.\r
\r
Tampoco basta cuando el problema pide precision experimental. El orden de magnitud detecta errores grandes, no sustituye cifras significativas, incertidumbre o analisis estadistico.\r
\r
## Regla rapida de deteccion\r
\r
Si el resultado estimado cae en una escala imposible para el fenomeno, hay que revisar antes de calcular mas. Una persona no camina a \`10^4 m/s\`, una mesa no mide \`10^-6 m\` y una pila pequena no almacena \`10^9 J\`.\r
\r
La regla rapida es: unidad compatible, exponente razonable y comparacion con una escala conocida. Si una de las tres falla, la solucion todavia no es fiable.\r
\r
<!-- algebra-depth-v2 -->\r
## Diagnostico rapido\r
\r
Error de entrada: usar un dato sin unidad, sin escala o sin decidir si es constante. En orden de magnitud, una cifra aislada rara vez contiene toda la informacion fisica.\r
\r
Error de estructura: aplicar una operacion correcta a una relacion equivocada. La aritmetica puede estar bien y la fisica mal si el patron elegido no representa el fenomeno.\r
\r
Error de salida: aceptar un numero sin compararlo con una estimacion. Un resultado debe tener unidad, orden de magnitud, signo y dependencia razonables.\r
\r
`;export{e as default};
