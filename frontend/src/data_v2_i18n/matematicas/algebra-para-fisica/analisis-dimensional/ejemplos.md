# Ejemplo guiado

## Situacion fisica

Se propone que la distancia recorrida por un movil desde reposo sea d = a t. Hay que detectar si la expresion puede ser correcta.

El objetivo es resolver la pregunta sin tratar la formula como una caja negra. Hay que reconocer que dato cambia, que condicion permanece fija y que tipo de relacion matematica representa el modelo.

## Traduccion matematica

La distancia tiene dimension L. La aceleracion tiene L/T^2 y el tiempo T. El producto a t tiene L/T, que es velocidad.

La traduccion separa magnitudes fisicas de operaciones. Esa separacion evita elegir una herramienta por costumbre y obliga a justificar por que la operacion responde a la pregunta.

## Calculo paso a paso

Comparas dimensiones: [d] = L, [a t] = (L/T^2)T = L/T. Como L no coincide con L/T, la formula esta mal formada dimensionalmente.

Cada paso conserva la relacion original. Si se modifica un factor, una unidad o una condicion, se debe declarar antes de aceptar el resultado numerico.

## Lectura del resultado

El resultado no dice la formula exacta, pero descarta una forma imposible. Una opcion compatible seria contener a t^2, aunque aun habria que estudiar el factor numerico.

La lectura fisica incluye unidad, escala y dependencia. El numero final solo es valido si esta lectura coincide con el comportamiento esperado del sistema.

## Error comun evitado

Se evita aplicar una operacion mecanica sin mirar el modelo. Tambien se evita perder unidades, ignorar signos o extrapolar una regla fuera de su dominio.

# Ejemplo inverso

## Resultado dado

Si una expresion tiene dimension de energia, puede responder preguntas sobre trabajo, energia cinetica o energia potencial, pero no directamente sobre velocidad.

## Que pregunta fisica permite responder

Permite reconstruir que magnitud se estaba buscando y que modelo fisico estaba detras del calculo. Este paso es importante porque en problemas reales muchas veces se interpreta una salida matematica antes de conocer la pregunta exacta.

<!-- algebra-depth-v2 -->
# Ejemplo de lectura por niveles

## Nivel basico

Identifica la magnitud que se busca, su unidad esperada y el dato que mas condiciona el resultado. Si no puedes decir esas tres cosas, todavia no debes usar la calculadora.

## Nivel intermedio

Resuelve el mismo planteamiento cambiando una entrada por un factor `10` o `1/10`. Observa si el resultado cambia linealmente, inversamente, por una potencia o por un factor acumulado. Esa comparacion revela la estructura real de analisis dimensional.

## Nivel avanzado

Pregunta que hipotesis permite usar el modelo. Puede ser una escala valida, una constante tratada como fija, una aproximacion lineal, independencia entre variables o un dominio donde una funcion inversa tiene sentido. Si esa hipotesis falla, el numero obtenido puede dejar de tener interpretacion fisica.

