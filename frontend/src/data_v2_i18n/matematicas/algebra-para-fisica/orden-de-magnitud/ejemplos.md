# Ejemplo guiado

## Situacion fisica

Queremos estimar la velocidad media de una persona que recorre una calle de unos `800 m` en unos `200 s`. No buscamos una respuesta con muchos decimales; queremos saber si la escala corresponde a caminar, correr, conducir o volar.

El dato de distancia esta cerca de `10^3 m` y el tiempo cerca de `10^2 s`. La formula fisica es velocidad igual a distancia dividida entre tiempo.

## Traduccion matematica

Escribimos `v = d / t`. Para orden de magnitud usamos `d ~ 10^3 m` y `t ~ 10^2 s`. Al dividir, restamos exponentes: `10^3 / 10^2 = 10^1`.

La estimacion produce `v ~ 10^1 m/s`. Esta escala significa decenas de metros por segundo, aunque el valor real aproximado sea `4 m/s`.

## Calculo paso a paso

Primero redondeamos `800 m` a `10^3 m`. Despues redondeamos `200 s` a `10^2 s`. Restamos exponentes porque la formula divide distancia entre tiempo.

El resultado estimado es `10^(3-2) m/s = 10^1 m/s`. Si hacemos el calculo fino, `800/200 = 4 m/s`, que esta cerca del mismo orden de magnitud.

## Lectura del resultado

La escala `10^0` a `10^1 m/s` es razonable para una persona moviendose deprisa. Si hubieramos obtenido `10^3 m/s`, seria absurdo para caminar y avisaria de un error de unidades o de exponentes.

El orden de magnitud no dice si la persona camina exactamente a `4 m/s` o `5 m/s`; dice que no esta en escala de avion, de caracol ni de proyectil.

## Error comun evitado

Un error comun seria sumar exponentes y obtener `10^5 m/s`. Eso equivale a tratar una division como multiplicacion. La lectura fisica lo detecta: ninguna persona recorre una calle a cien mil metros por segundo.

Otro error seria exigir exactitud a la estimacion. Que el valor fino sea `4 m/s` y la estimacion `10 m/s` no es fracaso: ambos estan dentro de una escala cercana para el proposito de control.

# Ejemplo inverso

## Resultado dado

Supongamos que una estimacion de energia da `10^6 J`. Antes de conocer el valor exacto, ya sabemos que la escala es de megajulios, mucho mayor que la energia de un pequeno movimiento cotidiano.

Ese resultado podria ser razonable para un vehiculo, una explosion pequena o un proceso industrial, pero no para levantar un lapiz unos centimetros.

## Que pregunta fisica permite responder

El resultado permite preguntar si cierto efecto puede despreciarse. Si el sistema principal maneja `10^8 J`, una perdida de `10^6 J` puede ser pequena pero no necesariamente irrelevante. Si el sistema maneja `10^5 J`, esa perdida domina.

El ejemplo inverso muestra que un orden de magnitud sirve para decidir comparaciones fisicas, no solo para estimar numeros aislados.

<!-- algebra-depth-v2 -->
# Ejemplo de lectura por niveles

## Nivel basico

Identifica la magnitud que se busca, su unidad esperada y el dato que mas condiciona el resultado. Si no puedes decir esas tres cosas, todavia no debes usar la calculadora.

## Nivel intermedio

Resuelve el mismo planteamiento cambiando una entrada por un factor `10` o `1/10`. Observa si el resultado cambia linealmente, inversamente, por una potencia o por un factor acumulado. Esa comparacion revela la estructura real de orden de magnitud.

## Nivel avanzado

Pregunta que hipotesis permite usar el modelo. Puede ser una escala valida, una constante tratada como fija, una aproximacion lineal, independencia entre variables o un dominio donde una funcion inversa tiene sentido. Si esa hipotesis falla, el numero obtenido puede dejar de tener interpretacion fisica.

