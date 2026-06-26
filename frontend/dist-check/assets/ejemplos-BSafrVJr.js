const e=`# Ejemplo guiado\r
\r
## Situacion fisica\r
\r
Se mide una distancia de 2.0 m y un tiempo de 0.81 s para estimar una velocidad media.\r
\r
El objetivo es resolver la pregunta sin tratar la formula como una caja negra. Hay que reconocer que dato cambia, que condicion permanece fija y que tipo de relacion matematica representa el modelo.\r
\r
## Traduccion matematica\r
\r
La operacion es v = d/t. La distancia tiene dos cifras significativas y el tiempo tambien tiene dos. El resultado no debe prometer mas precision.\r
\r
La traduccion separa magnitudes fisicas de operaciones. Esa separacion evita elegir una herramienta por costumbre y obliga a justificar por que la operacion responde a la pregunta.\r
\r
## Calculo paso a paso\r
\r
v = 2.0/0.81 = 2.469... m/s. Con la precision de los datos, se comunica como 2.5 m/s, no como 2.4691358 m/s.\r
\r
Cada paso conserva la relacion original. Si se modifica un factor, una unidad o una condicion, se debe declarar antes de aceptar el resultado numerico.\r
\r
## Lectura del resultado\r
\r
El resultado significa una velocidad media aproximada. Los decimales largos no son informacion fisica, solo salida de calculadora.\r
\r
La lectura fisica incluye unidad, escala y dependencia. El numero final solo es valido si esta lectura coincide con el comportamiento esperado del sistema.\r
\r
## Error comun evitado\r
\r
Se evita aplicar una operacion mecanica sin mirar el modelo. Tambien se evita perder unidades, ignorar signos o extrapolar una regla fuera de su dominio.\r
\r
# Ejemplo inverso\r
\r
## Resultado dado\r
\r
Si un resultado se da como 9.8 +/- 0.2 m/s^2, puede responder si una medida es compatible con la gravedad terrestre dentro de la incertidumbre.\r
\r
## Que pregunta fisica permite responder\r
\r
Permite reconstruir que magnitud se estaba buscando y que modelo fisico estaba detras del calculo. Este paso es importante porque en problemas reales muchas veces se interpreta una salida matematica antes de conocer la pregunta exacta.\r
\r
<!-- algebra-depth-v2 -->\r
# Ejemplo de lectura por niveles\r
\r
## Nivel basico\r
\r
Identifica la magnitud que se busca, su unidad esperada y el dato que mas condiciona el resultado. Si no puedes decir esas tres cosas, todavia no debes usar la calculadora.\r
\r
## Nivel intermedio\r
\r
Resuelve el mismo planteamiento cambiando una entrada por un factor \`10\` o \`1/10\`. Observa si el resultado cambia linealmente, inversamente, por una potencia o por un factor acumulado. Esa comparacion revela la estructura real de cifras significativas e incertidumbre.\r
\r
## Nivel avanzado\r
\r
Pregunta que hipotesis permite usar el modelo. Puede ser una escala valida, una constante tratada como fija, una aproximacion lineal, independencia entre variables o un dominio donde una funcion inversa tiene sentido. Si esa hipotesis falla, el numero obtenido puede dejar de tener interpretacion fisica.\r
\r
`;export{e as default};
