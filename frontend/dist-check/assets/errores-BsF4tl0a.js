const e=`# Errores frecuentes\r
\r
## Error 1: elegir la operacion equivocada\r
\r
Parece razonable porque muchas formulas se resuelven con pasos parecidos. Falla porque la pregunta puede pedir comparar, estimar, despejar o validar, no siempre calcular directamente. Se detecta preguntando que informacion fisica debe producir la respuesta. Se corrige eligiendo la herramienta que conserva la dependencia entre magnitudes. Mini-ejemplo: usar una resta lineal cuando el fenomeno cambia por factor produce una escala falsa.\r
\r
## Error 2: perder el significado de la variable\r
\r
Parece razonable porque las letras se manipulan como simbolos. Falla porque cada letra representa una magnitud con unidad, dominio y condicion. Se detecta si no puedes decir que mide cada simbolo. Se corrige escribiendo nombre fisico junto a la variable. Mini-ejemplo: tratar tiempo, frecuencia y periodo como letras intercambiables destruye la interpretacion.\r
\r
## Error 3: ignorar unidades\r
\r
Parece razonable porque la calculadora solo maneja numeros. Falla porque una operacion puede ser aritmeticamente posible y fisicamente absurda. Se detecta arrastrando unidades hasta el final. Se corrige convirtiendo unidades antes de operar y rechazando sumas de magnitudes incompatibles. Mini-ejemplo: sumar metros con metros por segundo no representa ninguna magnitud fisica simple.\r
\r
## Error 4: confundir signo con modulo\r
\r
Parece razonable porque muchas respuestas escolares se piden positivas. Falla cuando el signo indica direccion, oposicion, perdida o sentido elegido. Se detecta comparando el signo con el eje o criterio del problema. Se corrige interpretando el signo antes de tomar valor absoluto. Mini-ejemplo: trabajo negativo puede significar disipacion, no un calculo mal hecho.\r
\r
## Error 5: aplicar una regla fuera de dominio\r
\r
Parece razonable porque una regla conocida da una respuesta rapida. Falla si el modelo ya no describe el fenomeno: escalas extremas, rozamiento no despreciable, pequenas variaciones convertidas en grandes extrapolaciones. Se detecta revisando las condiciones de validez. Se corrige declarando el dominio antes de usar la relacion. Mini-ejemplo: extrapolar una proporcionalidad medida en laboratorio a escalas astronomicas puede ser falso.\r
\r
## Regla rapida de deteccion\r
\r
Si el resultado no conserva unidades, no responde la pregunta, cambia en sentido contrario al modelo o promete mas precision de la disponible, hay que detenerse. El error no esta al final: probablemente aparecio al elegir la operacion o al interpretar una variable.\r
\r
<!-- algebra-depth-v2 -->\r
## Diagnostico rapido\r
\r
Error de entrada: usar un dato sin unidad, sin escala o sin decidir si es constante. En proporcionalidad y escala, una cifra aislada rara vez contiene toda la informacion fisica.\r
\r
Error de estructura: aplicar una operacion correcta a una relacion equivocada. La aritmetica puede estar bien y la fisica mal si el patron elegido no representa el fenomeno.\r
\r
Error de salida: aceptar un numero sin compararlo con una estimacion. Un resultado debe tener unidad, orden de magnitud, signo y dependencia razonables.\r
\r
`;export{e as default};
