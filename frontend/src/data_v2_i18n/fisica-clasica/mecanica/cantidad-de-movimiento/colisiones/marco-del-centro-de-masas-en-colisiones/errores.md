# Errores comunes en el marco del centro de masas

## Errores conceptuales

### Error 1: Asumir que la velocidad del centro de masas cambia tras el choque

**Por qué parece correcto**: Al ser el choque un proceso violento que cambia drásticamente las velocidades de los cuerpos individuales, parece intuitivo que la velocidad del promedio ponderado ([[Vcm]]) también deba verse alterada por el impacto.

**Por qué es incorrecto**: Físicamente, esto es imposible en un sistema aislado. Las fuerzas de colisión son fuerzas internas que, según la tercera ley de Newton, se cancelan por pares. Solo una fuerza externa neta puede acelerar el centro de masas del sistema. La velocidad central es una constante inercial que sobrevive a la colisión.

**Señal de detección**: Si al calcular el balance de momento lineal final obtienes una [[Vcm]] distinta a la inicial, has violado la conservación del momento.

**Corrección conceptual**: Recuerda que el centro de masas es el "ancla" del sistema; su movimiento es independiente de lo que ocurra internamente entre las partículas.

**Mini-ejemplo de contraste**: En una explosión interna de un proyectil en el aire, los fragmentos salen disparados, pero el centro de masas del conjunto sigue la misma parábola que traía el proyectil original.

### Error 2: Confundir la energía cinética total con la energía interna

**Por qué parece correcto**: Toda la energía cinética del sistema en el laboratorio [[K_total]] parece estar "ahí" para ser usada en el impacto.

**Por qué es incorrecto**: El teorema de König enseña que una parte de esa energía pertenece a la traslación global y es "energía bloqueada" por la ley de conservación del momento. Solo la energía interna [[K_cm]] (relativa al CM) está disponible para la interacción y disipación.

**Señal de detección**: Sobreestimar el calor generado o la deformación del material al usar [[K_total]] en lugar de [[K_cm]].

**Corrección conceptual**: Separa mentalmente la energía de traslación del conjunto de la energía de interacción de las partes.

**Mini-ejemplo de contraste**: Si un mosquito choca contra un tren en marcha, la energía cinética del tren es enorme, pero la energía disponible para el impacto es ínfima, limitada por el movimiento relativo.

## Errores de modelo

### Error 3: Aplicar el marco CM a sistemas no aislados

**Por qué parece correcto**: El marco del centro de masas parece una herramienta universal que siempre simplifica las cuentas.

**Por qué es incorrecto**: Si actúan fuerzas externas (como fricción intensa), el centro de masas acelera. El marco CM deja de ser inercial y las leyes de Newton no se aplican de forma estándar sin introducir fuerzas ficticias.

**Señal de detección**: Resultados que no coinciden con las observaciones de laboratorio al ignorar la aceleración del marco de referencia.

**Corrección conceptual**: Verifica siempre si hay fuerzas externas netas antes de asumir que [[Vcm]] es constante.

**Mini-ejemplo de contraste**: Un choque en una pista de hielo es un sistema aislado, pero un choque en asfalto con frenos bloqueados no lo es.

### Error 4: Olvidar que la masa reducida solo aplica a problemas de dos cuerpos

**Por qué parece correcto**: La masa reducida [[mu]] es tan cómoda que dan ganas de usarla para cualquier sistema de partículas.

**Por qué es incorrecto**: Es una solución específica para el problema de dos cuerpos que reduce el movimiento relativo a una sola partícula virtual. En sistemas de 3 o más cuerpos, no existe una única velocidad relativa ni una única [[mu]].

**Señal de detección**: Intentar meter tres masas en la fórmula de:

{{f:mu}}

**Corrección conceptual**: La masa reducida es para parejas cinemáticas; los sistemas complejos requieren análisis de N-cuerpos.

**Mini-ejemplo de contraste**: En un sistema de tres estrellas, hay que analizar las interacciones por pares, no se puede usar una sola masa reducida para todo el sistema.

## Errores matemáticos

### Error 5: Error de signo en las velocidades relativas

**Por qué parece correcto**: Restar módulos parece más sencillo que manejar vectores con signo.

**Por qué es incorrecto**: La transformación de Galileo es vectorial. Si ignoras el signo, puedes terminar con una rapidez relativa menor a la real, violando la nulidad del momento total [[p_cm_total]] es nulo.

**Señal de detección**: Obtener un momento lineal total distinto de cero en el marco del centro de masas.

**Corrección conceptual**: Define un eje positivo y respeta el signo de cada vector de velocidad al aplicar:

{{f:u1}}

**Mini-ejemplo de contraste**: Si [[Vcm]] = 5 y [[v1]] = -10, entonces [[u1]] = -15, no -5.

### Error 6: Mal uso de la fórmula de la masa reducida

**Por qué parece correcto**: La fórmula tiene un aspecto de promedio que puede confundir al estudiante novato.

**Por qué es incorrecto**: Un error común es multiplicar las masas pero olvidar dividir por la suma, o sumar en lugar de multiplicar.

**Señal de detección**: Obtener unidades incorrectas (kg² en lugar de kg) o valores de [[mu]] mayores que las masas individuales.

**Corrección conceptual**: La masa reducida siempre es MENOR que cualquiera de las masas individuales del par.

**Mini-ejemplo de contraste**: Para 2 kg y 3 kg, [[mu]] = 1,2 kg. Si obtienes 6 kg, has olvidado dividir.

## Errores de interpretación

### Error 7: Pensar que el marco CM "hace que el choque sea más suave"

**Por qué parece correcto**: Como las velocidades en el CM son menores, el impacto "se ve" menos violento.

**Por qué es incorrecto**: La física de la colisión (deformación, calor) depende de la energía interna [[K_cm]], que es la misma para todos los observadores inerciales. El daño físico es invariante.

**Señal de detección**: Creer que un accidente es menos grave si se mira desde un coche que viaja a la misma velocidad.

**Corrección conceptual**: El marco de referencia es una lente matemática; no cambia la realidad física del impacto.

**Mini-ejemplo de contraste**: Un choque a 100 km/h contra un muro duele igual si lo grabas desde la acera o desde un coche en paralelo.

### Error 8: Interpretar el momento nulo como ausencia de movimiento

**Por qué parece correcto**: "Momento total cero" suena a que nada se mueve.

**Por qué es incorrecto**: Significa que los movimientos se cancelan vectorialmente. Las partículas pueden tener mucha energía cinética individual aunque el momento neto sea nulo.

**Señal de detección**: Intentar poner [[u1]] = 0 o [[u2]] = 0 solo porque el sistema está "en reposo" en el CM.

**Corrección conceptual**: El marco CM está en reposo global, pero sus partes están en movimiento relativo frenético.

**Mini-ejemplo de contraste**: Dos patinadores empujándose con fuerzas iguales se separan en direcciones opuestas; su CM no se mueve, pero ellos sí.

## Regla de autocontrol rápido
Antes de dar por finalizado un ejercicio en el marco del centro de masas, verifica siempre que se cumple la **Condición de Nulidad del Momento**: multiplica cada masa por su velocidad en el CM y súmalas. Si el resultado no es cero (o muy cercano a cero permitiendo errores de redondeo), has cometido un error en el cálculo de [[Vcm]] o en la transformación de Galileo. **El momento en el CM no es opcional; es la definición misma del marco.**
