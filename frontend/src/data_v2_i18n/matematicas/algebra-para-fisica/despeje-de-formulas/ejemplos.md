# Ejemplo guiado

## Situacion fisica

Un carrito se mueve con velocidad constante de `3 m/s` y recorre `24 m`. Queremos calcular el tiempo que tarda. La relacion fisica adecuada para movimiento uniforme es que la distancia recorrida es igual a la velocidad multiplicada por el tiempo.

La pregunta no es que numero falta, sino durante cuanto tiempo debe mantenerse esa velocidad para cubrir esa distancia. Por eso la incognita es el tiempo, y la unidad esperada debe ser segundos.

## Traduccion matematica

Escribimos la relacion como `d = v t`. Aqui `d` es distancia, `v` es velocidad constante y `t` es tiempo. La incognita `t` esta multiplicada por `v`, de modo que para dejarla sola hay que dividir ambos miembros entre `v`.

El despeje simbolico queda `t = d / v`, siempre que la velocidad no sea cero. Esta condicion tiene sentido fisico: si la velocidad es cero, el carrito no recorre distancia y no hay un tiempo finito para cubrir `24 m`.

## Calculo paso a paso

Partimos de `d = v t`. Dividimos ambos lados por `v`: `d / v = t`. Reordenamos el resultado como `t = d / v`, que es la forma mas natural porque deja la incognita a la izquierda.

Sustituimos los datos: `t = 24 m / (3 m/s)`. Las unidades se simplifican: metro dividido entre metro por segundo da segundo. El resultado numerico es `t = 8 s`.

## Lectura del resultado

El resultado significa que, si el carrito mantiene una velocidad constante de `3 m/s`, necesita `8 s` para recorrer `24 m`. No dice nada sobre aceleraciones, frenadas o cambios de direccion, porque esos fenomenos no pertenecen al modelo usado.

Tambien se ve la dependencia: si la distancia aumenta y la velocidad se mantiene, el tiempo aumenta; si la velocidad aumenta y la distancia se mantiene, el tiempo disminuye. Esa lectura confirma que el despeje tiene sentido fisico.

## Error comun evitado

Un error habitual seria escribir `t = v / d`, porque se recuerda que hay que dividir pero se invierte la relacion. Las unidades lo detectan enseguida: `(m/s)/m` da `1/s`, no segundos.

Otro error seria sustituir numeros antes de despejar y perder el significado de cada cantidad. Mantener primero la forma simbolica `t = d / v` permite revisar unidades, condicion de velocidad no nula y dependencia fisica antes de calcular.

## Segundo caso guiado: despeje con raiz y rama fisica

La energia cinetica de una particula en traslacion se escribe `K = (1/2) m v^2`. Si se conoce `K` y `m`, queremos obtener la rapidez asociada. La incognita aparece elevada al cuadrado, asi que no basta con dividir: primero se aisla `v^2` y despues se toma raiz.

Multiplicamos por `2`: `2K = m v^2`. Dividimos por `m`, con `m > 0`: `2K/m = v^2`. Tomamos raiz: `v = +/- sqrt(2K/m)`. Si el problema pregunta por rapidez, se toma `v = sqrt(2K/m)` porque la rapidez es modulo. Si pregunta por velocidad en un eje, el signo debe decidirse con el sentido del movimiento.

La condicion fisica es doble. La masa debe ser positiva y la energia cinetica no puede ser negativa en este modelo clasico. Si al sustituir datos aparece una raiz de numero negativo, no hay que forzar el calculo: hay que revisar datos, unidades o modelo.

## Tercer caso guiado: incognita en denominador

La presion media puede escribirse como `p = F/A`. Si se conoce la fuerza y la presion, despejar el area exige sacar primero `A` del denominador. Multiplicamos ambos miembros por `A`: `p A = F`. Despues dividimos por `p`: `A = F/p`, siempre que `p` no sea cero.

La lectura fisica es importante: para una misma fuerza, mayor presion implica menor area de contacto. Si el despeje diera un area negativa, el problema no seria solo algebraico, porque el area geometrica no puede ser negativa. Esa restriccion obliga a revisar el signo usado para fuerza normal, presion o convencion del problema.

## Cuarto caso guiado: variable repetida

En algunos modelos la incognita aparece mas de una vez. Por ejemplo, una relacion simplificada de fuerza resistiva puede escribirse como `F = b v + c v^2`. Si se conoce `F`, despejar `v` no se consigue pasando un unico termino: hay una ecuacion cuadratica `c v^2 + b v - F = 0`.

La solucion formal usa la formula cuadratica: `v = (-b +/- sqrt(b^2 + 4 c F))/(2c)`, si `c` no es cero. Pero la fisica filtra las ramas. Si `b`, `c` y `F` son positivos y se busca una rapidez positiva, normalmente se elige la rama con `+` delante de la raiz. La otra rama puede ser negativa y no representar la situacion planteada.

# Ejemplo inverso

## Resultado dado

Supongamos que el despeje final de un problema es `F = m a` y al sustituir datos se obtiene `F = 12 N`. Ese resultado no solo dice doce; dice que la fuerza neta necesaria para producir la aceleracion indicada sobre esa masa es de doce newtons.

Si el eje positivo se eligio hacia la derecha y el resultado fuese negativo, indicaria que la fuerza neta apunta hacia la izquierda. El signo no se borra sin analizar el eje.

## Que pregunta fisica permite responder

Ese resultado permite responder preguntas como: que fuerza neta necesita un objeto de cierta masa para acelerar de una forma dada, que aceleracion resultaria si se aplicara otra fuerza, o que masa podria acelerarse con una fuerza disponible.

El despeje inverso ayuda a reconocer que una formula es una relacion entre magnitudes, no una receta fija. La misma igualdad permite formular varias preguntas fisicas si se identifica correctamente la incognita, las unidades y las condiciones del modelo.

<!-- algebra-depth-v2 -->
# Ejemplo de lectura por niveles

## Nivel basico

Identifica la magnitud que se busca, su unidad esperada y el dato que mas condiciona el resultado. Si no puedes decir esas tres cosas, todavia no debes usar la calculadora.

## Nivel intermedio

Resuelve el mismo planteamiento cambiando una entrada por un factor `10` o `1/10`. Observa si el resultado cambia linealmente, inversamente, por una potencia o por un factor acumulado. Esa comparacion revela la estructura real de despeje de formulas.

## Nivel avanzado

Pregunta que hipotesis permite usar el modelo. Puede ser una escala valida, una constante tratada como fija, una aproximacion lineal, independencia entre variables o un dominio donde una funcion inversa tiene sentido. Si esa hipotesis falla, el numero obtenido puede dejar de tener interpretacion fisica.

