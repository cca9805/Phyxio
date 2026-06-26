const e=`# Errores comunes: velocidad relativa\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir velocidad relativa con velocidad absoluta\r
\r
**Por qué parece correcto**\r
Porque el valor num?rico puede coincidir con una velocidad medida desde el suelo en casos muy simples.\r
\r
**Por qué es incorrecto**\r
La velocidad relativa siempre compara dos descripciones. No dice cu?nto se mueve un cuerpo en sentido absoluto, sino c?mo lo ve otro móvil u observador.\r
\r
**Se?al de detección**\r
El alumno no puede decir qui?n observa a qui?n, aunque ya haya escrito una resta o una suma.\r
\r
**Corrección conceptual**\r
Nombrar el móvil observado, el observador móvil y el observador base antes de usar cualquier ecuaci?n.\r
\r
**Mini-ejemplo**\r
Dos coches a 25 m/s pueden tener velocidad relativa nula si circulan juntos, aunque ambos se muevan respecto a la carretera.\r
\r
## Errores de modelo\r
\r
### Error 2: Usar el modelo galileano cuando el marco acelera\r
\r
**Por qué parece correcto**\r
La f?rmula de composición parece funcionar con cualquier observador en movimiento.\r
\r
**Por qué es incorrecto**\r
Si el observador acelera, la velocidad del marco cambia durante el intervalo y ya no basta una ?nica velocidad constante para traducir la descripci?n.\r
\r
**Se?al de detección**\r
El enunciado habla de frenado, arranque, curva o giro del observador, pero el c?lculo usa una sola velocidad fija.\r
\r
**Corrección conceptual**\r
Dividir el problema por intervalos o pasar a un modelo con aceleración relativa.\r
\r
**Mini-ejemplo**\r
Una cinta que arranca desde reposo no puede tratarse igual que una cinta que ya se mueve a velocidad constante.\r
\r
## Errores matemáticos\r
\r
### Error 3: Aplicar signos sin comprobar el sentido físico\r
\r
**Por qué parece correcto**\r
Restar velocidades parece una operaci?n puramente algebraica.\r
\r
**Por qué es incorrecto**\r
El signo representa direcci?n. Cambiar el eje, el observador o el móvil observado cambia la interpretación de la resta.\r
\r
**Se?al de detección**\r
El resultado predice alejamiento cuando el dibujo muestra acercamiento, o reposo mutuo cuando las posiciones se separan.\r
\r
**Corrección conceptual**\r
Dibujar el eje positivo y escribir cada velocidad con signo antes de sustituir.\r
\r
**Mini-ejemplo**\r
Si un corredor alcanza a otro, la velocidad relativa de aproximaci?n debe apuntar hacia la reducci?n de la separaci?n.\r
\r
## Errores de interpretación\r
\r
### Error 4: Leer el resultado sin contrastarlo con la distancia real\r
\r
**Por qué parece correcto**\r
El c?lculo produce un número con unidades correctas y parece suficiente.\r
\r
**Por qué es incorrecto**\r
La velocidad relativa debe explicar si la separaci?n aumenta, disminuye o permanece constante. Sin esa lectura, el resultado queda desconectado del sistema físico.\r
\r
**Se?al de detección**\r
El alumno informa solo un m?dulo positivo y no interpreta el signo ni el cambio de distancia.\r
\r
**Corrección conceptual**\r
Despu?s de calcular, traducir el resultado a una frase física sobre acercamiento, alejamiento o reposo mutuo.\r
\r
**Mini-ejemplo**\r
Un valor de -3 m/s no es peor que +3 m/s; indica sentido opuesto bajo la convenci?n elegida.\r
\r
## Regla de autocontrol rápido\r
\r
1. ?He indicado respecto a qui?n se mide cada velocidad?\r
2. ?Todas las velocidades usan el mismo observador base antes de restar?\r
3. ?El signo coincide con el eje dibujado?\r
4. ?El resultado explica c?mo cambia la separaci?n entre los móviles?\r
5. ?El marco puede tratarse como galileano durante todo el intervalo?\r
`;export{e as default};
