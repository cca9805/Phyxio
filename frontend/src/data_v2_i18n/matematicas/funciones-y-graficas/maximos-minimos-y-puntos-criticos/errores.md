# Errores frecuentes

## Error 1: elegir la operacion equivocada

Parece razonable buscar siempre `f'(x) = 0`. Falla si el extremo esta en un borde del dominio o si la funcion no es derivable. Se detecta revisando dominio y puntos especiales. Se corrige evaluando candidatos interiores y bordes.

## Error 2: perder el significado de la variable

Un maximo de velocidad, energia o temperatura no significa lo mismo. El error aparece al decir "hay un maximo" sin indicar de que magnitud. Se detecta leyendo ejes. Se corrige escribiendo variable, unidad y pregunta fisica.

## Error 3: ignorar unidades

La coordenada del extremo y el valor extremo tienen unidades distintas. Decir solo `4` puede ser `4 s`, `4 m` o `4 J`. Se detecta separando `x` del valor `f(x)`. Se corrige escribiendo ambos con unidades.

## Error 4: confundir signo con modulo

Una pendiente cero no garantiza minimo ni maximo. Puede ser un punto plano sin extremo. Se detecta mirando el signo de la pendiente antes y despues. Se corrige clasificando con cambio de signo o curvatura.

## Error 5: aplicar una regla fuera de dominio

Un extremo matematico puede estar fuera de las condiciones fisicas posibles. Se detecta comparando el resultado con restricciones como tiempo positivo, longitud positiva o rango de validez. Se corrige descartando candidatos no fisicos.

## Regla rapida de deteccion

Todo extremo debe responder: de que magnitud, en que punto, con que unidad, dentro de que dominio y con que significado fisico. Si una respuesta omite dos de estas cinco, esta incompleta.
