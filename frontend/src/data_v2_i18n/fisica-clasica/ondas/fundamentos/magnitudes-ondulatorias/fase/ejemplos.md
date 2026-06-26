# Ejemplo tipo examen

## Enunciado

Una onda armónica se propaga por una cuerda. En una descripción compatible con el sentido positivo de [[x]], el número de onda es 4,0 rad/m, la frecuencia angular es 12 rad/s y la fase inicial es 0,30 rad. Se quiere comparar el estado de oscilación en un punto situado a 0,80 m en el instante 0,20 s con el origen en el instante inicial. Determina la fase de la lectura, el desfase respecto al origen y la rapidez de fase.

## Datos

Número de onda [[k]]: 4,0 rad/m.

Frecuencia angular [[omega]]: 12 rad/s.

Fase inicial [[phi0]]: 0,30 rad.

Posición [[x]]: 0,80 m.

Tiempo [[t]]: 0,20 s.

## Definición del sistema

El sistema es una componente armónica de una onda transversal en una cuerda ideal. La lectura se hace en un punto concreto y en un instante concreto, de modo que [[phi]] sirve para identificar el estado del ciclo. El origen espacial y temporal se usa como referencia para interpretar [[Delta_phi]].

## Modelo físico

El modelo supone una fase armónica bien definida. La magnitud [[k]] traduce separación espacial en avance de fase, [[omega]] traduce separación temporal en avance de fase, [[phi0]] fija el origen interno del ciclo, [[Delta_phi]] compara lecturas y [[v_phi]] indica cuánto avanza una misma fase por unidad de tiempo.

## Justificación del modelo

La cuerda se trata como un medio uniforme durante la observación. La forma armónica permite usar una sola fase para describir el estado de la oscilación. La causalidad física es que la onda conserva un patrón repetitivo: al avanzar en espacio o en tiempo, no se crea una oscilación distinta, sino que se recorre el mismo ciclo.

## Resolución simbólica

Para la fase de la lectura se usa:

{{f:fase_armonica}}

Para comparar dos lecturas de la misma onda se usa:

{{f:diferencia_fase}}

Para la rapidez de avance de una fase constante se usa:

{{f:velocidad_fase_phi}}

La fase absoluta [[phi]] incluye [[phi0]]. El desfase [[Delta_phi]] entre la lectura y el origen elimina la fase inicial común si ambas lecturas comparten la misma referencia. La rapidez [[v_phi]] depende de [[omega]] y [[k]], no de la amplitud.

## Sustitución numérica

Para la fase, multiplicar 4,0 rad/m por 0,80 m aporta 3,2 rad. Multiplicar 12 rad/s por 0,20 s aporta 2,4 rad. Al combinar el aporte espacial, restar el aporte temporal y añadir 0,30 rad, la fase de la lectura resulta aproximadamente 1,1 rad.

Para el desfase respecto al origen en el instante inicial, el aporte común de [[phi0]] no cambia la comparación. El aporte espacial de 3,2 rad y el temporal de 2,4 rad dejan una separación de fase de aproximadamente 0,80 rad.

Para la rapidez de fase, dividir 12 rad/s entre 4,0 rad/m da aproximadamente 3,0 m/s. Por tanto [[v_phi]] es del orden de una velocidad de propagación lenta, razonable para una cuerda de laboratorio.

## Validación dimensional

La fase es adimensional: el producto rad/m por m deja una lectura angular de ciclo, y el producto rad/s por s también deja una lectura angular. La dimensión final de [[phi]] es `[1]`.

El desfase [[Delta_phi]] compara dos lecturas del ciclo, por lo que también tiene dimensión `[1]`.

En la rapidez de fase, rad/s dividido entre rad/m deja metros por segundo. La dimensión de [[v_phi]] es `[L T⁻¹]`.

## Interpretación física

Una fase cercana a 1,1 rad indica que la lectura está dentro del primer tramo del ciclo después del origen elegido. No basta con decir que el número es positivo: físicamente significa que el punto está adelantado dentro de la oscilación respecto al estado de fase cero, pero no ha llegado a media vuelta.

El desfase de 0,80 rad respecto al origen indica que las dos lecturas no están en fase, aunque tampoco están en oposición. Si se observaran simultáneamente como señales, tenderían a reforzarse de forma parcial, no máxima. Si [[k]] aumentara manteniendo los demás datos, la misma separación espacial produciría más desfase; si aumentara [[omega]], el paso del tiempo restaría más fase en esta convención.

La rapidez de fase de 3,0 m/s no describe la rapidez vertical de un punto de la cuerda. Describe la rapidez con la que avanza una etiqueta de ciclo, por ejemplo una cresta. Esta distinción evita confundir propagación de la onda con movimiento material local.

# Ejemplo de aplicación real

## Contexto

Dos altavoces emiten el mismo tono y un micrófono recibe las señales con una diferencia de camino pequeña. Si la diferencia de fase entre las dos llegadas se acerca a media vuelta, el sonido puede debilitarse en esa posición; si se acerca a una vuelta completa, puede reforzarse.

## Estimación física

Para un tono de 500 Hz, la frecuencia angular es del orden de 3000 rad/s. En aire, una rapidez de fase de unos 340 m/s lleva a un número de onda de orden 9 rad/m. Una diferencia de camino de 0,17 m produce un desfase espacial del orden de 1,5 rad, que está cerca de un cuarto de vuelta grande pero todavía lejos de una oposición exacta.

## Interpretación

La estimación muestra que centímetros o decímetros pueden importar en acústica audible. La fase convierte una diferencia geométrica pequeña en una diferencia de estado dentro del ciclo. Por eso mover un micrófono o una silla puede cambiar de manera perceptible el refuerzo o debilitamiento de ciertas notas.

La lectura real no exige conocer la amplitud inicial con precisión. Lo decisivo para esta pregunta es [[Delta_phi]]: si las señales llegan casi juntas, suman de forma eficaz; si llegan casi opuestas, se cancelan parcialmente. La fase es el puente entre distancia, tiempo y percepción sonora.
