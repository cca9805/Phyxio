# Ejemplo guiado

## Situacion fisica

Una onda se propaga por el mismo medio, de modo que su velocidad `v` permanece constante. Se pregunta que ocurre con la longitud de onda `lambda` cuando la frecuencia `f` se duplica. La situacion es sencilla, pero obliga a separar dato que cambia, condicion fija y magnitud que responde.

Esta misma forma de pensar sirve despues para casos mas avanzados: intensidad que se reparte sobre superficies, campos que decrecen con la distancia o modelos geometricos que cambian de tamano.

## Traduccion matematica

El modelo es `v = f lambda`. Si `v` permanece constante, el producto `f lambda` debe conservarse. Por tanto, `lambda` no es directamente proporcional a `f`; es inversamente proporcional a `f`.

La traduccion no consiste solo en despejar. Consiste en leer la dependencia: si una variable del producto aumenta por un factor, la otra debe disminuir por el mismo factor para mantener constante el resultado.

## Calculo paso a paso

Frecuencia inicial: `f`. Longitud de onda inicial: `lambda`. Velocidad inicial: `v = f lambda`.

Si la nueva frecuencia es `2f`, la nueva longitud de onda debe ser `lambda/2`, porque `(2f)(lambda/2) = f lambda = v`. El factor de escala de la frecuencia es `2`; el factor de escala de la longitud de onda es `1/2`.

Como comprobacion fisica, la unidad de `lambda` sigue siendo longitud. No aparece una unidad nueva, solo cambia el valor de la longitud que separa dos crestas.

## Lectura del resultado

El resultado significa que, en el mismo medio, ondas mas frecuentes tienen crestas mas cercanas. Si la frecuencia se duplica, la longitud de onda se reduce a la mitad. La conclusion depende de que `v` permanezca fija; si cambia el medio, la relacion puede cambiar.

Esta lectura es mas importante que memorizar el despeje. Permite anticipar el sentido del cambio antes de poner numeros y evita aceptar resultados donde frecuencia y longitud de onda aumentan juntas sin que haya cambiado la velocidad.

## Error comun evitado

Se evita decir "si una cosa se duplica, la otra tambien". Ese razonamiento solo vale para proporcionalidad directa. En un producto constante, el aumento de una magnitud obliga a la disminucion de la otra.

# Ejemplo inverso

## Resultado dado

Un informe dice: "al duplicar la distancia a una fuente, la intensidad medida baja a la cuarta parte". El resultado no da todos los valores absolutos, pero si da una estructura de escala clara.

## Que pregunta fisica permite responder

Permite preguntar si el fenomeno se reparte sobre una superficie esferica o si obedece una ley inversa cuadratica. En una relacion `I proporcional a 1/r^2`, pasar de `r` a `2r` convierte la intensidad en `I/4`.

Tambien permite detectar errores: si alguien esperaba `I/2`, estaba usando una ley `1/r`; si esperaba `2I`, estaba tratando la distancia como proporcionalidad directa. La escala no solo calcula: identifica que modelo puede estar detras del dato.

<!-- algebra-depth-v2 -->
# Ejemplo de lectura por niveles

## Nivel basico

Identifica la magnitud que se busca, su unidad esperada y el dato que mas condiciona el resultado. Si no puedes decir esas tres cosas, todavia no debes usar la calculadora.

## Nivel intermedio

Resuelve el mismo planteamiento cambiando una entrada por un factor `10` o `1/10`. Observa si el resultado cambia linealmente, inversamente, por una potencia o por un factor acumulado. Esa comparacion revela la estructura real de proporcionalidad y escala.

## Nivel avanzado

Pregunta que hipotesis permite usar el modelo. Puede ser una escala valida, una constante tratada como fija, una aproximacion lineal, independencia entre variables o un dominio donde una funcion inversa tiene sentido. Si esa hipotesis falla, el numero obtenido puede dejar de tener interpretacion fisica.

