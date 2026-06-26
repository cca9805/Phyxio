# Ejemplo tipo examen


## Enunciado

Un gas encerrado en un cilindro con piston recibe 1800 J de calor desde una resistencia externa. Durante el mismo proceso, el entorno comprime el gas y realiza 450 J de trabajo sobre el sistema. El sistema esta cerrado: no entra ni sale masa. Calcula [[variacion_energia_interna]] del gas. Si al inicio la energia interna era 12 000 J, determina tambien [[energia_interna_final]]. Interpreta fisicamente el signo del resultado.

## Datos

- [[calor_intercambiado]]: 1800 J, entra al sistema.
- [[trabajo_sobre_sistema]]: 450 J, realizado por el entorno sobre el gas.
- [[energia_interna_inicial]]: 12 000 J.
- Sistema: gas cerrado en cilindro con piston.
- Convencion: calor y trabajo positivos cuando entran al sistema.

## Definición del sistema

El sistema elegido es solo el gas dentro del cilindro. El piston, la resistencia y el aire exterior pertenecen al entorno. Esta eleccion es importante porque [[calor_intercambiado]] cruza la frontera desde la resistencia hacia el gas y [[trabajo_sobre_sistema]] cruza la frontera por la compresion del piston. Como no entra ni sale gas, no hay energia transportada por masa. La magnitud que resume el efecto interno es [[variacion_energia_interna]], y se compara con [[energia_interna_inicial]] para obtener [[energia_interna_final]].

## Modelo físico

Se usa el modelo de sistema cerrado de la primera ley. El gas puede intercambiar energia con el entorno mediante calor y trabajo, pero su cantidad de materia permanece fija. La convencion del leaf toma positivo el trabajo sobre el sistema, de modo que una compresion externa aporta energia. El proceso no se asume reversible ni ideal; para este balance solo hace falta que todas las transferencias energeticas relevantes esten contabilizadas.

El modelo físico considera magnitudes fundamentales del sistema como [[calor_intercambiado]], [[energia_interna_final]], [[energia_interna_inicial]].


## Justificación del modelo

El enunciado especifica que el gas esta encerrado, por lo que el modelo cerrado es adecuado. La resistencia aporta calor y el piston aporta trabajo mecanico, justamente los dos mecanismos que aparecen en el balance. No se menciona perdida de calor al exterior, fuga de gas ni energia electrica que atraviese directamente la frontera del sistema elegido. Por tanto, el balance con [[calor_intercambiado]], [[trabajo_sobre_sistema]] y [[variacion_energia_interna]] es suficiente para describir la energia del gas.

## Resolución simbólica

Primero se aplica la primera ley con la convencion de trabajo sobre el sistema:

{{f:primera_ley_balance}}

Como se pide tambien el estado final, se usa la definicion de variacion de energia interna:

{{f:definicion_variacion_energia_interna}}

El primer paso proporciona [[variacion_energia_interna]]. El segundo permite sumar ese cambio a [[energia_interna_inicial]] para encontrar [[energia_interna_final]]. No se usa la formula de proceso adiabatico porque el problema indica que hay [[calor_intercambiado]] distinto de cero.

## Sustitución numérica

El balance energetico suma las dos entradas de energia: 1800 J de calor y 450 J de trabajo sobre el sistema. Por tanto, [[variacion_energia_interna]] es 2250 J.

Con [[energia_interna_inicial]] de 12 000 J, el estado final queda 2250 J por encima del inicial. Por tanto, [[energia_interna_final]] es 14 250 J.

## Validación dimensional

[[calor_intercambiado]] esta en julios y [[trabajo_sobre_sistema]] tambien esta en julios. Al sumarlos, el resultado queda en julios, que es la unidad correcta de [[variacion_energia_interna]]. Despues, [[energia_interna_inicial]] y [[variacion_energia_interna]] se suman porque ambas son energias. No hay mezcla de kJ, calorias ni unidades mecanicas sin convertir, por lo que la operacion dimensional es coherente.

## Interpretación física

El resultado positivo significa que el gas termina con mas energia interna que al principio. No solo se calienta por la entrada de [[calor_intercambiado]]; ademas, la compresion aporta [[trabajo_sobre_sistema]]. Fisicamente, las dos flechas energeticas apuntan hacia dentro de la frontera del sistema, por eso se refuerzan. Esto no obliga a que toda la energia se vea como aumento de temperatura, porque la energia interna puede repartirse entre agitacion molecular e interacciones internas, pero si indica acumulacion neta. Si alguien hubiera restado el trabajo, estaria usando otra convencion y obtendria una lectura incompatible con el DCL de este leaf.

# Ejemplo de aplicación real


## Contexto

En una bomba de bicicleta, el aire dentro del cilindro se comprime rapidamente. Durante una compresion rapida, el tiempo de contacto termico con el exterior es corto, de modo que [[calor_intercambiado]] puede aproximarse como pequeno. La mano realiza [[trabajo_sobre_sistema]] sobre el aire. La variable dominante es [[variacion_energia_interna]], porque explica por que la bomba se calienta despues de varias compresiones.

## Estimación física

Supongamos que en una compresion la mano realiza aproximadamente 25 J de trabajo sobre el aire encerrado. Si el proceso es casi adiabatico, la formula aplicable es:

{{f:proceso_adiabatico}}

Entonces [[variacion_energia_interna]] es del orden de 25 J para esa porcion de aire. Esa cantidad parece pequena, pero se concentra en una masa reducida de gas y en paredes cercanas, de modo que puede producir un aumento de temperatura perceptible. Tras muchas compresiones, parte de esa energia pasa a la pared de la bomba y a la mano como calor.

## Interpretación

La bomba se calienta porque el trabajo mecanico de la mano no desaparece: entra al aire como [[trabajo_sobre_sistema]] y aumenta inicialmente [[variacion_energia_interna]]. Despues, cuando el aire y las paredes estan mas calientes que el entorno, aparece [[calor_intercambiado]] hacia fuera. La primera ley separa claramente las etapas: primero hay transferencia mecanica hacia el sistema; luego puede haber transferencia termica hacia el entorno. Esta lectura evita explicar el calentamiento como "rozamiento" de forma vaga cuando el efecto principal es la compresion del gas.