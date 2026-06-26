const e=`# Ejemplo tipo examen

## Enunciado

Un oscilador lineal tiene [[m]] = 1,0 kg, [[k]] = 100 N/m y [[b]] = 2,0 N*s/m. Se aplica una fuerza sinusoidal de amplitud [[F0]] = 10 N con pulsación [[omega_f]] = 8 rad/s. Calcula la amplitud estacionaria [[X]], el desfase [[delta]] y la expresión de [[x]] en régimen permanente para [[t]] medido en segundos.

## Datos

Los datos son [[m]], [[k]], [[b]], [[F0]] y [[omega_f]]. Las incógnitas son [[X]], [[delta]] y la señal [[x]]. Las magnitudes [[x_d]] y [[x_dd]] no se calculan directamente, pero explican por qué aparecen los términos de amortiguamiento e inercia en la ecuación de modelo.

## Definición del sistema

El sistema se trata como masa-muelle-amortiguador lineal. La fuerza externa se mantiene durante suficientes ciclos para poder analizar el régimen estacionario y no el arranque transitorio.

## Modelo físico

El modelo físico es una oscilación forzada lineal. La fuente impone [[omega_f]], mientras el sistema responde con una amplitud [[X]] y un retraso [[delta]]. No se está buscando todavía el máximo resonante; se calcula la respuesta para esta frecuencia concreta.

## Justificación del modelo

Se asume que [[m]], [[k]] y [[b]] son constantes, que la fuerza es sinusoidal y que la amplitud resultante no activa topes ni cambios de rigidez. Bajo esas hipótesis, la respuesta estacionaria se obtiene separando amplitud, fase y señal temporal.

## Resolución simbólica

El balance dinámico de partida es:

{{f:ecuacion_diferencial_forzada}}

La amplitud estacionaria se calcula con:

{{f:amplitud_forzada}}

El desfase se calcula con:

{{f:desfase_forzada}}

La respuesta temporal estacionaria queda:

{{f:respuesta_estacionaria}}

## Sustitución numérica

El término elástico menos inercial es 100 - 1,0·8^2 = 36 N/m. El término disipativo equivalente es 2,0·8 = 16 N/m. El denominador dinámico vale sqrt(36^2 + 16^2) = sqrt(1552) ≈ 39,4 N/m. Por tanto, [[X]] = 10/39,4 ≈ 0,254 m.

El desfase cumple [[delta]] = atan(16/36) ≈ 0,418 rad. La respuesta estacionaria puede escribirse como [[x]] = 0,254 cos(8[[t]] - 0,418), entendiendo que el argumento es adimensional y que [[t]] está en segundos.

## Validación dimensional

El denominador de [[X]] tiene unidades de N/m, de modo que [[F0]] dividido por él da metros. El cociente usado para [[delta]] es adimensional. En la respuesta temporal, [[omega_f]][[t]] y [[delta]] son ángulos en radianes.

## Interpretación física

El sistema responde a la frecuencia impuesta, no a una frecuencia libre. La amplitud de 0,254 m es grande frente a la deformación estática [[F0]]/[[k]] = 0,10 m, porque la frecuencia elegida reduce la oposición dinámica efectiva. El desfase indica que la respuesta no acompaña exactamente a la fuerza: se retrasa por la combinación de inercia y amortiguamiento.

Este resultado no demuestra por sí solo resonancia. Solo dice que, a 8 rad/s, la respuesta estacionaria tiene esa amplitud y ese desfase. Para hablar de resonancia habría que comparar [[X]] al variar [[omega_f]].

Conviene fijarse en el signo físico del cálculo. La parte elástica intenta devolver el sistema a equilibrio, la parte inercial se opone al cambio de movimiento y la parte disipativa consume energía en cada ciclo. La amplitud resulta grande porque la oposición elástica efectiva se ha reducido por la contribución inercial, aunque el amortiguamiento todavía evita una respuesta descontrolada.

También es importante leer el desfase como una información dinámica. Si se observan fuerza y desplazamiento en un osciloscopio o en un registro de datos, los máximos de [[x]] aparecerán después de los máximos de la fuerza. Ese retraso permite comprobar si el modelo usado es coherente con el experimento: no basta con acertar [[X]], también debe aparecer una fase compatible.

# Ejemplo de aplicación real

## Contexto

Un motor eléctrico transmite una fuerza periódica a una bancada. El ingeniero quiere saber si, a la velocidad de trabajo, la bancada vibrará con amplitud aceptable y si el retraso de la respuesta puede afectar al montaje.

## Estimación física

Se mide la fuerza periódica máxima y se estima la frecuencia angular de giro. Con una prueba de rigidez se obtiene [[k]], con la masa efectiva se estima [[m]] y con un ensayo de decaimiento se aproxima [[b]]. Al introducir esos valores en la respuesta forzada se obtiene [[X]] para la frecuencia de trabajo, no para todas las frecuencias posibles.

## Interpretación

Si [[X]] supera la tolerancia geométrica, se puede reducir [[F0]], aumentar rigidez, cambiar masa efectiva o modificar amortiguamiento. Si el problema principal es el desfase [[delta]], puede afectar a sincronización, fatiga o lectura de sensores. La decisión se toma sobre la respuesta estacionaria concreta antes de estudiar si existe un máximo resonante cercano.

La lectura práctica no termina en el número de metros. Si la bancada trabaja cerca de una máquina sensible, una amplitud aceptable puede seguir siendo problemática por ruido, fatiga o acoplamiento con otros elementos. Por eso el resultado debe traducirse en una decisión: cambiar la velocidad de operación, modificar soportes, medir otra vez tras el transitorio o planificar un barrido de frecuencias si se sospecha un pico cercano.
`;export{e as default};
