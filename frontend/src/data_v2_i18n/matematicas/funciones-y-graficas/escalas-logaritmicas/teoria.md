# Escalas logaritmicas

## Que es

Una escala logaritmica representa multiplicaciones como pasos iguales. En una escala lineal, avanzar una marca suma una cantidad fija; en una escala logaritmica, avanzar una marca multiplica por un factor fijo.

Esto permite comparar magnitudes que cubren muchos ordenes de magnitud sin aplastar los valores pequenos ni perder los grandes. La herramienta central no es "hacer logaritmos", sino leer razones y exponentes.

## Por que aparece en fisica

Aparece en sonido, pH, intensidad luminosa, espectros, sismologia, datos astronomicos y leyes de potencia. Muchos fenomenos cambian por factores de `10`, `100` o `1000`, no por diferencias absolutas pequenas.

Tambien aparece al linealizar datos. Una exponencial se vuelve recta en semilog, y una ley de potencia se vuelve recta en log-log. Asi una grafica revela exponentes y tasas relativas.

## Idea visual o geometrica

La imagen visual es una regla donde los espacios iguales representan razones iguales. De `1` a `10`, de `10` a `100` y de `100` a `1000` hay la misma distancia si la base es `10`.

En semilog, solo un eje es logaritmico; sirve para exponenciales. En log-log, ambos ejes son logaritmicos; sirve para leyes de potencia. La recta que aparece no significa lo mismo que una recta en escala lineal.

## Lenguaje simbolico minimo

El logaritmo responde a la pregunta: a que exponente hay que elevar la base para obtener un numero. En base `10`, `log(1000) = 3` porque `10^3 = 1000`.

En fisica se usan expresiones como `L = 10 log10(I/I0)` para decibelios o `pH = -log10([H+])`. En graficas log-log, si `y = C x^n`, entonces `log(y) = log(C) + n log(x)`, y la pendiente es `n`.

## Que significa el resultado

Un resultado logaritmico suele significar razon, no diferencia absoluta. Subir `20 dB` no suma una intensidad fija: multiplica la razon de intensidades por `100`. Bajar una unidad de pH multiplica la concentracion de `H+` por `10`.

En una grafica log-log, una pendiente `-2` significa que al multiplicar `x` por `10`, `y` se divide por `100`. Esta lectura de escalado es mas importante que el dibujo visual.

## Cuando no debes usarlo

No debes aplicar logaritmos a magnitudes con signo negativo o a ceros. Antes de graficar en escala logaritmica, comprueba que las cantidades sean positivas y que el cociente usado sea adimensional cuando corresponda.

Tampoco debes comparar distancias visuales en log como si fueran diferencias lineales. En log, espacios iguales significan factores iguales; si olvidas esto, interpretas mal pendientes, separaciones y medias.

## Resumen operativo

Identifica si el problema compara razones, factores o muchos ordenes de magnitud. Decide si necesitas escala lineal, semilog o log-log. Lee multiplicaciones, no sumas, y traduce cada pendiente o salto a un factor fisico.

Nivel basico: reconocer que cada decada multiplica por `10`. Nivel intermedio: interpretar dB, pH y pendientes log-log. Nivel avanzado: usar escalas logaritmicas para diagnosticar exponenciales, leyes de potencia y limites de datos.
