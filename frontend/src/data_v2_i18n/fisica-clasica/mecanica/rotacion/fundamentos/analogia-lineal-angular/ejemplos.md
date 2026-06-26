# Ejemplo tipo examen

## Enunciado

Un bloque de masa [[m]]. Un disco rígido tiene momento de inercia [[I]]. En ambos casos se pide calcular la respuesta dinámica y explicar qué significa la analogía lineal-angular.

## Datos

- [[m]] de 2 kg
- [[F]] de 10 N
- [[I]] de 2 kg·m²
- [[tau]] de 10 N·m
- Eje de rotación fijo y perpendicular al disco
- Rozamiento despreciable

## Definición del sistema

El primer sistema es traslacional: se estudia el centro de masa del bloque sobre un eje recto. El segundo sistema es rotacional: se estudia el giro del disco alrededor de un eje ya definido. La correspondencia lineal-angular se usa para comparar causa, resistencia y respuesta, no para afirmar que las magnitudes sean físicamente iguales.

## Modelo físico

En traslación se aplica la segunda ley de Newton, con estructura

{{f:segunda_ley_newton}}

. En rotación se aplica la segunda ley rotacional, con estructura

{{f:segunda_ley_rotacional}}

. La correspondencia lineal-angular organiza el puente:

{{f:correspondencia_lineal_angular}}

.

## Justificación del modelo

El modelo es válido porque la masa del bloque no cambia, el disco se trata como rígido y el eje de giro está fijado antes de calcular el torque. Además, las fuerzas y torques se interpretan como resultantes netas. Si el eje cambiara, si el disco se deformara o si hubiera pérdidas importantes, la analogía seguiría siendo útil como guía conceptual, pero no bastaría para resolver el problema con estas dos ecuaciones simples.

## Resolución simbólica

Para el bloque:

{{f:segunda_ley_newton}}

.

Para el disco:

{{f:segunda_ley_rotacional}}

.

Para fijar explícitamente el mapeo de magnitudes entre ambos lados del problema:

{{f:correspondencia_lineal_angular}}

.

La estructura matemática es la misma: respuesta igual a causa dividida entre resistencia. La diferencia está en el significado físico de cada magnitud.

## Sustitución numérica

Para la traslación:

{{f:segunda_ley_newton}}

.

Para la rotación:

{{f:segunda_ley_rotacional}}

.

Los valores numéricos coinciden porque se eligieron datos simétricos, no porque [[a]] y [[alpha]] sean la misma magnitud. Sus unidades y su interpretación son distintas.

## Validación dimensional

En traslación,

{{f:segunda_ley_newton}}

por lo que la aceleración lineal es dimensionalmente correcta. En rotación,

{{f:segunda_ley_rotacional}}

que se expresa como rad/s^2 porque el radián es adimensional pero conserva significado geométrico. Esta validación muestra por qué [[m]] e [[I]] no pueden confundirse: sus dimensiones no son iguales.

## Interpretación física

El bloque acelera porque la fuerza neta cambia su movimiento lineal. El disco acelera angularmente porque el torque neto cambia su estado de giro. La analogía permite leer ambos problemas con el mismo patrón causal, pero obliga a añadir una pregunta extra en rotación: ¿respecto a qué eje se calcula [[I]] y [[tau]]? Esto significa que la respuesta angular depende de una decisión geométrica previa. Esa pregunta no aparece de la misma forma en el problema lineal.

La igualdad numérica del resultado no debe ocultar la diferencia conceptual. Si se duplicara la distancia de la masa al eje, [[I]] cambiaría aunque [[m]] siguiera igual, y entonces [[alpha]] ya no coincidiría con [[a]]. Por eso el resultado útil del ejercicio no es solo "5", sino la lectura: misma estructura matemática, distinto contenido físico.

# Ejemplo de aplicación real

## Contexto

Una rueda de bicicleta y un disco macizo pueden tener la misma masa, pero no responder igual ante el mismo torque aplicado por el eje. La rueda concentra más masa cerca del borde, por lo que su momento de inercia es mayor. El disco reparte más masa cerca del centro, por lo que su momento de inercia es menor.

## Estimación física

Supón dos objetos de [[m]] de 1 kg y radio 0.30 m. Para un aro ideal, [[I]]. Para un disco macizo, [[I]]. Si ambos reciben [[tau]] de 0.9 N·m, entonces el aro tiene,

{{f:segunda_ley_rotacional}}

mientras que el disco tiene.

{{f:segunda_ley_rotacional}}

La estimación es deliberadamente sencilla, pero contiene la idea esencial: con la misma masa y el mismo radio externo, cambiar la distribución espacial duplica la aceleración angular esperada. Esa lectura cuantitativa es justo lo que la analogía aporta: permite anticipar que mayor resistencia rotacional implica menor respuesta para el mismo torque.

## Interpretación

La masa total no decide por sí sola la respuesta rotacional. La analogía con

{{f:correspondencia_lineal_angular}}

ayuda a entenderlo, pero también enseña el límite central del tema: en rotación importa dónde está la masa respecto al eje. Esto significa que el diseño geométrico puede dominar sobre la masa total. Por tanto, la analogía es potente para organizar el razonamiento y peligrosa si se usa como tabla mecánica de sustituciones.

## Chequeo de validez y límites

Para que la comparación entre el bloque y los cuerpos en rotación sea físicamente legítima, hay que auditar condiciones del modelo antes de aceptar el resultado. Primera condición: el eje de giro debe estar definido y mantenerse estable durante el intervalo de análisis. Segunda condición: el cuerpo debe poder aproximarse como rígido, de modo que [[I]] no cambie por deformación apreciable. Tercera condición: las pérdidas por rozamiento no deben dominar el balance energético si se está usando la forma ideal de la segunda ley.

Este chequeo no es decorativo: modifica la interpretación final. Si el eje no está bien definido, [[tau]] deja de representar una causa neta comparable con [[F]]. Si [[I]] cambia en el tiempo, la respuesta angular ya no se interpreta con una sola sustitución directa. Y si hay disipación alta, la analogía sigue ordenando ideas, pero no basta para cuantificar con precisión la evolución real. En resumen, el ejemplo no termina en la cuenta numérica: termina cuando se justifica que el dominio de validez del modelo coincide con el fenómeno descrito.