# Errores frecuentes

## Error 1: elegir la operacion equivocada

El error aparece cuando se pasa un termino al otro lado sin reconocer que operacion lo une a la incognita. Parece razonable porque en clase se habla de pasar sumando, restando, multiplicando o dividiendo, pero esa frase solo es segura si se entiende la estructura de la expresion.

Por ejemplo, en `F = m a`, despejar `a` exige dividir entre `m`, no restar la masa. En `E = P t`, despejar `t` exige dividir la energia entre la potencia. Detectalo preguntando que operacion tendrias que hacer para construir el termino original. Corrigelo aplicando la operacion inversa a ambos miembros.

## Error 2: perder el significado de la variable

Una misma letra puede representar cosas distintas segun el tema, y una misma magnitud puede aparecer con subindices. Confundir `v`, `v_0` y `v_f` en movimiento no es un detalle de notacion: cambia la pregunta fisica. El despeje puede quedar algebraicamente bonito y aun asi responder otra cosa.

Para detectarlo, vuelve al enunciado y escribe una frase: `v_0` es la velocidad inicial, `t` es el intervalo de tiempo, `F` es la fuerza neta. Si no puedes nombrar la variable, no la despejes todavia. La correccion consiste en etiquetar cada simbolo antes de operar.

## Error 3: ignorar unidades

Este error parece menor porque muchas formulas escolares se escriben solo con letras. En realidad, las unidades son parte de la informacion. Si despejas una aceleracion y obtienes metros por segundo, algo esta mal: falta una division por tiempo o se ha usado una formula inadecuada.

En energia, trabajo y potencia, ignorar unidades lleva a mezclar julios, vatios y segundos como si fueran numeros sin tipo. Detectalo haciendo analisis dimensional despues de cada paso importante. Corrigelo convirtiendo datos a unidades compatibles y verificando la unidad final.

## Error 4: confundir signo con modulo

El signo no siempre indica que el resultado sea imposible. En una dimension, una velocidad negativa puede significar movimiento hacia el lado opuesto al eje positivo. Un trabajo negativo puede indicar que una fuerza extrae energia del sistema. El error es borrar el signo sin interpretarlo.

Detectalo cuando el resultado tiene sentido numerico pero contradice una direccion o una perdida de energia. Corrigelo preguntando si la magnitud buscada es escalar, vectorial, componente o modulo. Solo se toma valor absoluto cuando el problema pide explicitamente una intensidad, rapidez o distancia positiva.

## Error 5: aplicar una regla fuera de dominio

Algunas operaciones tienen condiciones. No puedes dividir por una masa nula, tomar logaritmo de una cantidad con unidades sin formar una razon adimensional, ni tomar raiz cuadrada y olvidar que puede haber dos soluciones algebraicas. En fisica, ademas, el modelo puede exigir velocidad constante, campo uniforme o rozamiento despreciable.

Detectalo buscando denominadores, raices, potencias pares y funciones especiales. Corrigelo escribiendo la condicion junto al despeje: `m != 0`, tiempo positivo, argumento adimensional, solucion compatible con el movimiento descrito. El dominio evita respuestas que solo existen en el papel.

## Regla rapida de deteccion

Si un despeje produce una unidad incorrecta, una dependencia absurda o una solucion que no responde al enunciado, esta mal aunque los pasos parezcan algebraicos. La regla rapida es: variable sola, unidad correcta, signo interpretable y modelo valido.

En caso de duda, prueba con un caso extremo. Si duplicar la distancia reduce el tiempo cuando la velocidad es constante, el despeje esta invertido. Si aumentar la masa reduce la fuerza necesaria para la misma aceleracion, has dividido donde debias multiplicar.

<!-- algebra-depth-v2 -->
## Diagnostico rapido

Error de entrada: usar un dato sin unidad, sin escala o sin decidir si es constante. En despeje de formulas, una cifra aislada rara vez contiene toda la informacion fisica.

Error de estructura: aplicar una operacion correcta a una relacion equivocada. La aritmetica puede estar bien y la fisica mal si el patron elegido no representa el fenomeno.

Error de salida: aceptar un numero sin compararlo con una estimacion. Un resultado debe tener unidad, orden de magnitud, signo y dependencia razonables.

