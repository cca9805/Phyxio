# Errores frecuentes

## Error 1: elegir la operacion equivocada

Parece razonable restar valores en una escala logaritmica como si fuese lineal. Falla porque las diferencias logaritmicas representan factores. Se detecta preguntando si cada marca suma o multiplica. Se corrige convirtiendo saltos logaritmicos a razones.

## Error 2: perder el significado de la variable

El logaritmo de intensidad, concentracion o distancia no significa lo mismo. Si se olvida la variable o la referencia, el numero pierde sentido fisico. Se detecta leyendo eje y definicion. Se corrige escribiendo el cociente usado, como `I/I0`.

## Error 3: ignorar unidades

Tomar logaritmo de una magnitud con unidad sin referencia es peligroso. En escalas fisicas se usa una razon adimensional. Se detecta buscando la referencia de la escala. Se corrige formando el cociente antes del logaritmo.

## Error 4: confundir signo con modulo

Un exponente negativo o un signo menos en pH cambia la lectura. No se borra por comodidad. Se detecta probando que ocurre cuando la magnitud aumenta. Se corrige interpretando si el resultado crece, decrece o invierte la escala.

## Error 5: aplicar una regla fuera de dominio

Los logaritmos no aceptan cero ni valores negativos reales. En datos con ruido puede aparecer un valor cero que impide la transformacion. Se detecta revisando datos antes de graficar. Se corrige con otro modelo, referencia o tratamiento experimental justificado.

## Regla rapida de deteccion

Si al terminar no puedes decir "esto se multiplica por...", no has interpretado una escala logaritmica. La lectura correcta siempre vuelve a factores, razones u ordenes de magnitud.
