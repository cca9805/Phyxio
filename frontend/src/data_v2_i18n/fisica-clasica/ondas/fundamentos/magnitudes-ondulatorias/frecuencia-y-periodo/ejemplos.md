# Ejemplo tipo examen

## Enunciado

En un laboratorio se observa una cuerda que completa 12 ciclos en una ventana temporal de 3,0 s. Se pide estimar la frecuencia, el periodo y la frecuencia angular de la oscilación. Interpreta además si el ritmo es lento o rápido para una experiencia escolar visible.

## Datos

Número de ciclos [[N]]: 12 ciclos completos.

Intervalo de observación [[Delta_t]]: 3,0 s.

La observación corresponde a ciclos completos, contados siempre desde el mismo estado de la cuerda. No se mezclan medios ciclos ni crestas incompletas al inicio o al final de la ventana.

## Definición del sistema

El sistema es un punto de una cuerda que oscila de forma casi periódica. Se estudia solo el ritmo temporal, no la rapidez con la que la perturbación viaja a lo largo de la cuerda. La lectura se centra en [[f]], [[T]] y [[omega]].

## Modelo físico

El modelo supone ciclos reconocibles y ritmo estable durante la ventana. [[N]] permite estimar una frecuencia media en [[Delta_t]]. Luego [[T]] se obtiene como duración de un ciclo y [[omega]] traduce el mismo ritmo a avance angular de fase.

## Justificación del modelo

Contar varios ciclos reduce el error frente a medir un solo ciclo porque el retraso humano al iniciar o parar el cronómetro se reparte entre muchas repeticiones. Si la cuerda mantiene un patrón repetido, cada ciclo vuelve al mismo estado de oscilación y el cociente entre [[N]] y [[Delta_t]] representa el ritmo temporal medio del punto observado.

La relación inversa entre frecuencia y periodo es causalmente temporal: más ciclos en el mismo tiempo implican menos tiempo disponible para cada ciclo. No se está suponiendo nada sobre la velocidad espacial de la onda; solo se está usando la repetición local del movimiento para conectar conteo, duración y avance angular de fase.

## Resolución simbólica

Para estimar la frecuencia desde un conteo se usa:

{{f:frecuencia_por_conteo}}

Para relacionar frecuencia y periodo se usa:

{{f:frecuencia_periodo}}

Para expresar el ritmo como avance angular se usa:

{{f:frecuencia_angular}}

La magnitud [[f]] mide ciclos por segundo. La magnitud [[T]] mide segundos por ciclo. La magnitud [[omega]] mide avance angular por segundo y no debe leerse como Hz.

## Sustitución numérica

Dividir 12 ciclos completos entre 3,0 s da una frecuencia aproximada de 4,0 Hz. Esto significa que el punto completa cuatro ciclos en cada segundo.

El periodo asociado se obtiene leyendo el inverso de 4,0 Hz. El resultado es aproximadamente 0,25 s por ciclo, de modo que cada repetición dura una cuarta parte de segundo.

Para la frecuencia angular, multiplicar 2 pi por 4,0 Hz da un valor cercano a 25 rad/s. Por tanto [[omega]] describe un avance de fase de unas cuatro vueltas por segundo.

## Validación dimensional

En la frecuencia por conteo, [[N]] es adimensional y [[Delta_t]] tiene dimensión de tiempo. El resultado tiene dimensión `[T⁻¹]`.

En la relación con el periodo, el inverso de una duración también tiene dimensión `[T⁻¹]`, coherente con [[f]].

La frecuencia angular conserva dimensión `[T⁻¹]`, aunque se exprese en rad/s porque el radián etiqueta fase sin añadir dimensión física.

## Interpretación física

Una frecuencia de 4,0 Hz es lenta comparada con sonido audible, pero rápida para seguir cada ciclo con la vista sin ayuda. El periodo de 0,25 s permite imaginar la oscilación: cuatro subidas y bajadas completas caben en un segundo.

Si el conteo [[N]] aumentara manteniendo la misma ventana [[Delta_t]], la frecuencia subiría y el periodo bajaría. Si se duplicara la ventana manteniendo el mismo número de ciclos, la frecuencia estimada bajaría. La interpretación física depende de comparar ciclos y tiempo, no de la amplitud de la cuerda.

La frecuencia angular de unas decenas de rad/s es la misma información expresada para cálculos de fase. No indica una nueva oscilación, sino otra forma de escribir el ritmo temporal.

El resultado también muestra por qué no se puede inferir la rapidez de propagación con estos datos. Para saber cómo avanza la perturbación por la cuerda haría falta una escala espacial, como longitud de onda o distancia recorrida por una cresta.

# Ejemplo de aplicación real

## Contexto

Un móvil graba una cuerda vibrando y se cuentan 30 oscilaciones completas durante 5,0 s. Se quiere saber si el ritmo observado corresponde a una vibración lenta de laboratorio o a una señal sonora audible.

## Estimación física

Treinta ciclos en 5,0 s dan una frecuencia de orden 6 Hz. El periodo correspondiente es de orden 0,17 s. Esta escala es visible como vibración mecánica lenta y queda muy por debajo del rango sonoro humano habitual, que empieza cerca de decenas de Hz.

## Interpretación

La estimación muestra que la cuerda puede oscilar claramente sin producir una nota audible fuerte. El ojo puede seguir parte del movimiento porque el periodo es una fracción apreciable de segundo.

La lectura también muestra por qué medir varios ciclos es útil. Si se midiera un solo periodo con una cámara poco precisa, el error sería grande; contar [[N]] ciclos en [[Delta_t]] suaviza pequeñas imprecisiones y da una frecuencia media más estable.
