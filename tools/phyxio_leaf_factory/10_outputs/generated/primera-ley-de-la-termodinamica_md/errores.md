# Errores frecuentes

## Errores conceptuales

### Error 1: Creer que el sistema contiene calor

**Por qué parece correcto**

En el lenguaje cotidiano se dice que un cuerpo "tiene calor". Esa frase lleva a pensar que [[calor_intercambiado]] es una sustancia almacenada dentro del sistema.

**Por qué es incorrecto**

El sistema contiene energia interna. El calor es energia en transito por diferencia de temperatura. Una vez cruzada la frontera, ya no se llama calor: pasa a modificar [[variacion_energia_interna]] o se compensa con [[trabajo_sobre_sistema]].

**Señal de detección**

El alumno escribe que aumenta el calor interno del sistema en lugar de decir que aumenta la energia interna.

**Corrección conceptual**

Reservar [[calor_intercambiado]] para la transferencia y [[variacion_energia_interna]] para el cambio del estado interno.

**Mini-ejemplo de contraste**

Un gas puede recibir calor y expandirse haciendo trabajo. Si toda la energia recibida sale como trabajo, [[variacion_energia_interna]] puede ser cero.

### Error 2: Mezclar convenciones de trabajo

**Por qué parece correcto**

Muchos libros usan trabajo hecho por el sistema como positivo. Este leaf usa [[trabajo_sobre_sistema]] positivo cuando el entorno actua sobre el sistema.

**Por qué es incorrecto**

La primera ley cambia de forma al cambiar la convencion. No se puede usar el mismo signo para una expansion si antes se habia definido positivo el trabajo de compresion.

**Señal de detección**

El resultado predice que una compresion adiabática enfria el gas sin que salga calor.

**Corrección conceptual**

Antes de operar, declarar si el trabajo del problema es sobre el sistema o hecho por el sistema. Con este leaf, compresion externa positiva aumenta [[variacion_energia_interna]].

**Mini-ejemplo de contraste**

Si un piston comprime un gas aislado, [[calor_intercambiado]] es nulo y [[trabajo_sobre_sistema]] positivo. La energia interna aumenta.

## Errores matemáticos

### Error 3: Restar estados en orden inverso

**Por qué parece correcto**

El alumno recuerda que hay que restar dos energias, pero no distingue estado final e inicial.

**Por qué es incorrecto**

[[variacion_energia_interna]] se obtiene comparando [[energia_interna_final]] con [[energia_interna_inicial]]. Invertir el orden cambia el signo y cambia la interpretacion fisica.

**Señal de detección**

El calculo dice que el sistema pierde energia aunque todos los datos indican entrada neta de energia.

**Corrección conceptual**

Usar la definicion de cambio de estado antes de aplicar el balance:

{{f:definicion_variacion_energia_interna}}

**Mini-ejemplo de contraste**

Si el estado final esta por encima del inicial, el cambio debe ser positivo. Si el calculo da negativo, se invirtio el orden o el signo de una transferencia.

### Error 4: Mezclar unidades de energia

**Por qué parece correcto**

Los valores numericos de J y kJ pueden parecer parecidos si no se atiende al prefijo.

**Por qué es incorrecto**

La suma de [[calor_intercambiado]] y [[trabajo_sobre_sistema]] solo tiene sentido si ambas magnitudes estan en la misma unidad.

**Señal de detección**

El resultado queda mil veces mayor o menor que la escala esperada.

**Corrección conceptual**

Convertir todo a julios antes de aplicar el balance:

{{f:primera_ley_balance}}

**Mini-ejemplo de contraste**

Sumar 2 kJ y 300 J no da 302 J; primero se escribe 2000 J y 300 J, y despues se suman.

## Lista de comprobación

- La frontera del sistema esta definida.
- [[calor_intercambiado]] entra positivo y sale negativo.
- [[trabajo_sobre_sistema]] es positivo si el entorno trabaja sobre el sistema.
- Todas las magnitudes estan en unidades de energia.
- Si el proceso es ciclico, [[variacion_energia_interna]] debe ser cero.
