# Ejemplo guiado

## Situacion fisica

Una senal se reduce a la mitad cada cierto intervalo. Se quiere hallar cuanto queda tras varios intervalos.

El objetivo es resolver la pregunta sin tratar la formula como una caja negra. Hay que reconocer que dato cambia, que condicion permanece fija y que tipo de relacion matematica representa el modelo.

## Traduccion matematica

La herramienta es exponencial porque el cambio es por factor, no por resta constante. Si cada intervalo conserva 1/2, la cantidad se multiplica repetidamente.

La traduccion separa magnitudes fisicas de operaciones. Esa separacion evita elegir una herramienta por costumbre y obliga a justificar por que la operacion responde a la pregunta.

## Calculo paso a paso

Tras n intervalos queda N = N0 (1/2)^n. Si n = 3, queda N0/8. Si se conoce N/N0 y se pide n, se usa logaritmo.

Cada paso conserva la relacion original. Si se modifica un factor, una unidad o una condicion, se debe declarar antes de aceptar el resultado numerico.

## Lectura del resultado

El resultado significa fraccion restante. No se interpreta como perdida lineal: los primeros intervalos eliminan mas cantidad absoluta que los ultimos.

La lectura fisica incluye unidad, escala y dependencia. El numero final solo es valido si esta lectura coincide con el comportamiento esperado del sistema.

## Error comun evitado

Se evita aplicar una operacion mecanica sin mirar el modelo. Tambien se evita perder unidades, ignorar signos o extrapolar una regla fuera de su dominio.

# Ejemplo inverso

## Resultado dado

Si aparece ln(N0/N), la pregunta fisica natural es cuanto tiempo tarda un decaimiento exponencial en alcanzar una fraccion dada.

## Que pregunta fisica permite responder

Permite reconstruir que magnitud se estaba buscando y que modelo fisico estaba detras del calculo. Este paso es importante porque en problemas reales muchas veces se interpreta una salida matematica antes de conocer la pregunta exacta.

<!-- algebra-depth-v2 -->
# Ejemplo de lectura por niveles

## Nivel basico

Identifica la magnitud que se busca, su unidad esperada y el dato que mas condiciona el resultado. Si no puedes decir esas tres cosas, todavia no debes usar la calculadora.

## Nivel intermedio

Resuelve el mismo planteamiento cambiando una entrada por un factor `10` o `1/10`. Observa si el resultado cambia linealmente, inversamente, por una potencia o por un factor acumulado. Esa comparacion revela la estructura real de logaritmos y exponenciales.

## Nivel avanzado

Pregunta que hipotesis permite usar el modelo. Puede ser una escala valida, una constante tratada como fija, una aproximacion lineal, independencia entre variables o un dominio donde una funcion inversa tiene sentido. Si esa hipotesis falla, el numero obtenido puede dejar de tener interpretacion fisica.

