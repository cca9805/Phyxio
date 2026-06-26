const e=`# Errores frecuentes en Pequenas oscilaciones y modos normales\r
\r
## Errores conceptuales\r
\r
### Error 1: Tratar la notacion como fisica\r
\r
Por que parece correcto: los simbolos de Pequenas oscilaciones y modos normales parecen potentes y compactos.\r
\r
Por que es incorrecto: [[omega]] solo tiene significado fisico cuando se cumplen las hipotesis de dominio.\r
\r
Senal de deteccion: se acepta la respuesta sin explicar que se conserva, transforma, separa o linealiza.\r
\r
Correccion conceptual: declara el criterio fisico antes de hacer algebra.\r
\r
Mini-ejemplo de contraste: si no se recupera el limite de particula libre, oscilador armonico, sistema autonomo o equilibrio estable, el paso formal no es fiable.\r
\r
### Error 2: Olvidar el dominio del modelo\r
\r
Por que parece correcto: la misma formula puede copiarse en muchos ejercicios.\r
\r
Por que es incorrecto: cada formula pertenece a un dominio clasico regular y puede fallar con ligaduras, variables singulares, no linealidad o perdida de suavidad.\r
\r
Senal de deteccion: se usa un resultado aunque unidades, escalas o comportamiento limite ya no coincidan con el sistema original.\r
\r
Correccion conceptual: comprueba las hipotesis antes de sustituir.\r
\r
Mini-ejemplo de contraste: un cambio de variable con apariencia canonica que rompe la preservacion de corchetes no es una transformacion canonica.\r
\r
## Errores de modelo\r
\r
### Error 3: Confundir estructura exacta con aproximacion\r
\r
Por que parece correcto: tanto los criterios exactos como los modelos aproximados pueden producir ecuaciones cortas.\r
\r
Por que es incorrecto: una estructura canonica o de Poisson exacta no es lo mismo que una aproximacion lineal pequena.\r
\r
Senal de deteccion: el calculo tolera una deriva estructural que deberia ser exactamente cero o exactamente uno.\r
\r
Correccion conceptual: distingue identidades exactas de aproximaciones controladas.\r
\r
Mini-ejemplo de contraste: una frecuencia normal puede desplazarse por aproximacion, pero un corchete canonico fundamental no puede derivar arbitrariamente.\r
\r
### Error 4: Ignorar la magnitud dominante\r
\r
Por que parece correcto: el alumno suele fijarse en la ecuacion mas larga.\r
\r
Por que es incorrecto: la interpretacion se organiza alrededor de [[omega]], porque determina la lectura fisica del leaf.\r
\r
Senal de deteccion: la respuesta final contiene formulas pero no dice que significa [[omega]].\r
\r
Correccion conceptual: termina toda solucion con una frase sobre el papel fisico de [[omega]].\r
\r
Mini-ejemplo de contraste: una frecuencia numerica sin forma modal no explica una oscilacion acoplada.\r
\r
## Errores matematicos\r
\r
### Error 5: Mezclar variables de descripciones distintas\r
\r
Por que parece correcto: las variables antiguas y nuevas pueden tener simbolos parecidos.\r
\r
Por que es incorrecto: las variables de descripciones distintas no se combinan sin justificar la transformacion o reduccion.\r
\r
Senal de deteccion: aparecen ecuaciones con variables antiguas y nuevas sin puente declarado.\r
\r
Correccion conceptual: escribe explicitamente el mapa, la generatriz, la separacion o la base modal.\r
\r
Mini-ejemplo de contraste: usar \`q\` con \`P\` como si formasen un par canonico puede cambiar el sistema.\r
\r
### Error 6: Perder control dimensional\r
\r
Por que parece correcto: las expresiones avanzadas suelen ocultar unidades bajo notacion compacta.\r
\r
Por que es incorrecto: una inconsistencia dimensional revela que el objeto formal ya no tiene el papel fisico declarado.\r
\r
Senal de deteccion: se comparan accion, energia, frecuencia o criterios adimensionales como si tuvieran la misma unidad.\r
\r
Correccion conceptual: comprueba la unidad de la magnitud objetivo antes de interpretar el resultado.\r
\r
Mini-ejemplo de contraste: una frecuencia extraida de un autovalor debe tener unidades compatibles con inverso de tiempo.\r
\r
## Errores de interpretacion\r
\r
### Error 7: Dar solo una respuesta numerica\r
\r
Por que parece correcto: las respuestas numericas parecen concretas.\r
\r
Por que es incorrecto: este leaf esta disenado para probar estructura, no solo tamano.\r
\r
Senal de deteccion: la solucion termina sin las palabras valido, preservado, equivalente, separable, conservado o fisicamente coherente.\r
\r
Correccion conceptual: anade una frase de interpretacion fisica despues del calculo.\r
\r
Mini-ejemplo de contraste: dos descripciones pueden dar el mismo numero mientras una viola la estructura canonica.\r
\r
## Regla de autocontrol rapido\r
\r
Antes de aceptar una respuesta, declara el dominio, la magnitud dominante, la condicion estructural, el caso limite y el significado fisico del resultado. Si falta una de esas cinco comprobaciones, la solucion no esta completa.\r
`;export{e as default};
