# Ejemplo tipo examen

## Enunciado

Dos rendijas coherentes iluminan una pantalla lejana con luz monocromática. En un punto de la pantalla, la diferencia de camino [[Delta_r]] entre las dos ondas es de 1.20 micrómetros. La longitud de onda [[lambda]] es de 600 nanómetros. Las intensidades individuales que llegarían al punto si cada rendija actuara sola son iguales: [[I1]] y [[I2]] tienen el mismo valor. Determina si el punto corresponde a interferencia constructiva y estima la intensidad relativa [[I_resultante]] respecto a la intensidad de una sola rendija.

## Datos

- [[Delta_r]] de 1.20 micrómetros.
- [[lambda]] de 600 nanómetros.
- [[I1]] e [[I2]] iguales.
- Fuentes coherentes con frecuencia común.
- Pantalla suficientemente lejana para asignar una diferencia de camino definida a cada punto.

## Definición del sistema

El sistema físico es el punto observado de la pantalla junto con las dos ondas que llegan desde las rendijas. No se estudia toda la figura de interferencia, sino una posición concreta donde la comparación entre recorridos permite decidir si hay máximo. La variable geométrica de control es [[Delta_r]], la escala ondulatoria es [[lambda]] y la variable de lectura final es [[I_resultante]].

La referencia de intensidad es una sola rendija. Esto permite expresar el resultado como intensidad relativa sin introducir valores absolutos de potencia por área. El orden [[m_orden]] se usa para clasificar el máximo, no para describir una onda nueva.

## Modelo físico

El modelo es el de dos ondas coherentes, sinusoidales y de igual frecuencia. La condición de máximo se decide comparando [[Delta_r]] con [[lambda]], y la intensidad se interpreta con [[I1]], [[I2]] y [[delta_phi]]. El punto será constructivo si la diferencia de camino contiene un número entero de longitudes de onda.

En este modelo, primero se suman perturbaciones con fase y después se obtiene intensidad. Por eso [[I_resultante]] no tiene por qué coincidir con una suma directa de [[I1]] e [[I2]]. Cuando ambas contribuciones llegan en fase, el término de interferencia es positivo y el máximo puede ser mucho más intenso que una suma incoherente.

## Justificación del modelo

Se asume una pantalla lejana porque así las ondas que llegan al punto pueden describirse por una fase relativa bien definida. Las rendijas proceden de la misma iluminación, así que la coherencia es una hipótesis física razonable y el modelo ideal es válido para decidir máximos de fase. Además, al usar luz monocromática, [[lambda]] permanece fija durante la observación y la relación entre camino y fase no se borra por mezcla de colores.

La causalidad del refuerzo es clara: el camino adicional retrasa una onda, pero si ese retraso equivale a ciclos completos, las crestas vuelven a llegar con crestas. No se está afirmando que la distancia extra sea irrelevante; se afirma que su efecto sobre la fase se repite periódicamente.

## Resolución simbólica

La condición de máximo constructivo por diferencia de camino es:

{{f:condicion_constructiva_camino}}

La traducción entre geometría y fase se realiza mediante:

{{f:fase_desde_camino}}

La intensidad de dos ondas coherentes se estima con:

{{f:intensidad_interferencia_dos_ondas}}

En el problema, [[Delta_r]] contiene un número entero de [[lambda]], así que [[m_orden]] identifica un máximo constructivo. La fase [[delta_phi]] equivale a ciclos completos y el término de interferencia aumenta [[I_resultante]]. Como [[I1]] e [[I2]] son iguales, el máximo ideal corresponde al caso de contraste más alto para dos rendijas.

## Sustitución numérica

Al expresar 1.20 micrómetros y 600 nanómetros en la misma escala, la diferencia de camino contiene dos longitudes de onda. Por tanto, el punto corresponde al segundo orden constructivo. La fase asociada completa dos vueltas, así que las ondas llegan de nuevo en fase.

Si la intensidad de una rendija se toma como una unidad relativa, cada contribución individual aporta una unidad. La suma coherente en fase duplica la amplitud, y la intensidad asociada queda en cuatro unidades relativas. En el modelo ideal, [[I_resultante]] es cuatro veces la intensidad de una rendija aislada.

## Validación dimensional

[[Delta_r]] y [[lambda]] son longitudes, por lo que su cociente da un número puro que puede interpretarse como [[m_orden]].

`[L] / [L]` produce una magnitud adimensional.

[[I_resultante]], [[I1]] e [[I2]] son intensidades y conservan dimensión de potencia por unidad de área.

`[M T⁻³]` es la dimensión de intensidad.

## Interpretación física

El punto de la pantalla es brillante porque las dos ondas llegan sincronizadas. La diferencia de camino no es cero, pero eso no impide el refuerzo: un retraso de dos longitudes de onda deja la misma fase final. Esta es la idea central del leaf. La igualdad de caminos no es obligatoria; lo obligatorio es la equivalencia de fase.

El resultado también explica por qué sumar intensidades directamente sería una lectura incompleta. Si se ignorara la fase, se esperaría solo el doble de intensidad de una rendija. La franja constructiva revela que la suma física relevante ocurrió antes, en la perturbación ondulatoria. Si [[I1]] e [[I2]] dejaran de ser iguales, el máximo seguiría existiendo, pero el contraste disminuiría porque una onda dominaría sobre la otra.

La energía no se crea en esa franja. El patrón completo redistribuye intensidad: donde hay máximos constructivos también aparecen regiones con menor intensidad. Esa compensación global es lo que hace compatible el máximo local con la conservación de energía.

# Ejemplo de aplicación real

## Contexto

Dos altavoces emiten el mismo tono continuo y están conectados al mismo generador. Un estudiante camina lentamente por una línea del aula y nota zonas donde el sonido se vuelve más intenso. En una posición concreta, la diferencia entre las distancias al altavoz izquierdo y al altavoz derecho es de 0.68 metros. El tono usado tiene una longitud de onda [[lambda]] de 0.34 metros en el aire de la sala.

## Estimación física

La diferencia de camino [[Delta_r]] contiene dos longitudes de onda, de modo que la posición corresponde a [[m_orden]] dos. Esta es una lectura cuantitativa simple: el camino adicional equivale a dos ciclos completos y la fase [[delta_phi]] vuelve a coincidir. Si ambos altavoces aportan intensidades parecidas al oído, [[I_resultante]] puede aumentar de forma perceptible respecto a escuchar solo uno.

La estimación es razonable porque las fuentes comparten generador y mantienen una relación de fase estable durante la escucha. El máximo real, sin embargo, no será perfecto: las paredes reflejan sonido, la cabeza del oyente modifica el campo y los altavoces no son fuentes puntuales ideales.

## Interpretación

El estudiante no oye una zona intensa simplemente porque esté cerca de ambos altavoces a la vez. La causa principal es la comparación entre dos recorridos. Al moverse unos decímetros, [[Delta_r]] cambia y el oído atraviesa regiones de refuerzo y regiones de menor intensidad.

Este ejemplo muestra el alcance práctico del modelo. La interferencia constructiva permite predecir dónde habrá refuerzo, pero una sala real añade caminos reflejados que deforman el patrón. Por eso el criterio de fase directa es una primera lectura física, no una descripción completa de toda la acústica del aula.
