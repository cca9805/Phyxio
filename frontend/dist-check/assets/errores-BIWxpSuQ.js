const e=`# Errores comunes: tiro horizontal\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir la idea central del leaf con una explicación física completa\r
\r
**Por qué parece correcto**\r
Porque el nombre del leaf y su fórmula principal parecen suficientes para explicar por sí solos todo el fenómeno.\r
\r
**Por qué es incorrecto**\r
El error conceptual mas comun consiste en olvidar que la cinematica no explica la causa del movimiento; organiza su descripcion cuantitativa. En cuanto se toma la etiqueta del leaf como si fuera una sustancia independiente, se confunden agente, cuerpo y respuesta. Ese desorden hace que dos alumnos con la misma ecuacion verbal lleguen a diagramas distintos y a interpretaciones incompatibles. La cura no es memorizar mas, sino volver a preguntar que interaccion real sostiene la afirmacion. Tambien ayuda reformular el problema con palabras propias antes de mirar la formula. Ese pequeno cambio obliga a pasar de la consigna al mecanismo.\r
\r
**Señal de detección**\r
El alumno repite la relación central, pero no puede decir qué cambia realmente en el sistema ni qué magnitud la sostiene.\r
\r
**Corrección conceptual**\r
Separar descripción, causa y respuesta antes de sustituir números.\r
\r
**Mini-ejemplo de contraste**\r
Si dos situaciones comparten ecuación pero no mecanismo, no deben leerse con la misma explicación física.\r
\r
## Errores de modelo\r
\r
### Error 2: Mantener el mismo modelo fuera de su dominio de validez\r
\r
**Por qué parece correcto**\r
Porque reutilizar una plantilla conocida suele producir una cuenta ordenada.\r
\r
**Por qué es incorrecto**\r
El error de modelo aparece cuando se mezcla el tiempo horizontal con otro vertical distinto o se introduce una fuerza no modelada y aun asi se mantiene la misma expresion como si nada hubiera cambiado. Esto pasa mucho cuando se exporta una solucion tipo a un contexto nuevo: el calculo puede ser impecable, pero la hipotesis que lo justificaba ya no esta presente. Por eso hay que escribir siempre una frase corta que diga que se esta suponiendo y que se esta despreciando. Ese gesto obliga a reconocer si el contexto nuevo pide otro regimen o una correccion adicional. Si no puede escribirse esa frase, probablemente tampoco puede defenderse el modelo.\r
\r
**Señal de detección**\r
El alumno conserva la misma expresión aunque cambien la geometría, el marco o la condición cinemática relevante.\r
\r
**Corrección conceptual**\r
Escribir una frase explícita de aplicabilidad antes de calcular: qué se supone y qué obligaría a cambiar de modelo.\r
\r
**Mini-ejemplo de contraste**\r
Si una corrección cambia el signo o el orden de magnitud, ya no estás en el mismo régimen del modelo original.\r
\r
## Errores matemáticos\r
\r
### Error 3: Aplicar signos y símbolos sin comprobar el contexto físico\r
\r
**Por qué parece correcto**\r
Porque una sustitución algebraica limpia da sensación de control.\r
\r
**Por qué es incorrecto**\r
El error matematico mas frecuente no es una cuenta larga, sino una proyeccion mal hecha, un signo elegido sin criterio o una magnitud sustituida en una unidad que no le corresponde. Cuando se mezclan esos fallos, el resultado deja de dialogar con el diagrama y pierde capacidad explicativa. Conviene revisar cada paso preguntando si la expresion todavia coincide con el eje, el sentido y la unidad definidos al principio. Una comprobacion extra es rehacer el ultimo paso sin numeros para ver si la dependencia cualitativa sigue teniendo sentido. Esa segunda pasada suele descubrir errores invisibles en la primera lectura.\r
\r
**Señal de detección**\r
El resultado parece correcto, pero contradice la unidad, el signo esperado o la tendencia cualitativa del fenómeno.\r
\r
**Corrección conceptual**\r
Revisar cada paso con tres preguntas: qué magnitud es, en qué eje actúa y qué unidad conserva.\r
\r
**Mini-ejemplo de contraste**\r
Si el número final obliga a reinterpretar el signo al final, el error estaba antes en la construcción matemática.\r
\r
## Errores de interpretación\r
\r
### Error 4: Leer el resultado sin contrastarlo con el sistema real\r
\r
**Por qué parece correcto**\r
Porque cerrar con un valor final produce la impresión de que el problema ya está resuelto.\r
\r
**Por qué es incorrecto**\r
El error de interpretacion surge cuando el numero final se lee fuera del escenario fisico. Un valor razonable de modulo puede seguir siendo incorrecto si contradice la direccion del efecto, la comparacion con otros casos o el mecanismo indicado por la independencia entre eje x y eje y dentro de una trayectoria parabolica. Leer bien el resultado exige compararlo con un caso limite, no solo con la intuicion del momento. Cuando esa comparacion falla, casi siempre hay un supuesto mal elegido o una variable mal entendida. La interpretacion correcta siempre recupera el relato fisico que el calculo resume.\r
\r
**Señal de detección**\r
El alumno acepta el número porque sale bien, pero no puede explicar si aumenta, disminuye o contradice el comportamiento esperado.\r
\r
**Corrección conceptual**\r
Comparar siempre el valor con un caso límite, con la tendencia del gráfico y con la lectura física dominante del leaf.\r
\r
**Mini-ejemplo de contraste**\r
Si el resultado no cambia al variar la magnitud dominante, la interpretación está desconectada del fenómeno.\r
\r
## Regla de autocontrol rápido\r
\r
La regla de autocontrol rapido es esta: definir sistema, dibujar interacciones, justificar la ecuacion y comparar el resultado con una prediccion cualitativa. Si una de esas cuatro piezas no puede explicarse en voz alta, todavia no se ha entendido el problema aunque la calculadora entregue cifras limpias. Esta rutina parece simple, pero separa muy bien comprension real y repeticion automatica. Repetirla al final del ejercicio convierte el cierre en una verificacion conceptual y no solo numerica. Con practica, termina funcionando como un filtro mental durante todo el desarrollo.\r
`;export{e as default};
