# Ejemplo tipo examen

## Enunciado

En una cuerda se observan cinco crestas consecutivas. La distancia entre la primera y la quinta cresta es 1,20 m. La onda vibra con frecuencia 8,0 Hz. Estima la longitud de onda, el número de onda y la rapidez de propagación. Interpreta si la separación espacial es razonable para una cuerda de laboratorio.

## Datos

Separación medida [[Delta_x]]: 1,20 m.

Número de intervalos completos [[n]]: 4.

Frecuencia [[f]]: 8,0 Hz.

El conteo de crestas se transforma en conteo de intervalos: cinco crestas consecutivas dejan cuatro separaciones completas entre estados equivalentes. Esa aclaración evita usar [[n]] de forma incorrecta.

## Definición del sistema

El sistema es una onda transversal aproximadamente periódica en una cuerda. Las crestas se consideran estados equivalentes de fase, por lo que la separación entre crestas consecutivas permite estimar [[lambda]]. La rapidez [[v]] se interpreta como avance del patrón, no como movimiento vertical de la cuerda.

## Modelo físico

El modelo usa una onda periódica con crestas bien definidas. [[Delta_x]] mide una distancia espacial total, [[n]] cuenta intervalos completos de longitud de onda, [[k]] expresa la densidad espacial de fase y [[f]] conecta la repetición temporal con la rapidez [[v]].

## Justificación del modelo

Medir desde la primera hasta la quinta cresta reduce el error frente a medir una sola separación, porque el error de localizar una cresta se reparte entre cuatro intervalos. La cuerda se trata como uniforme durante la observación, de modo que la separación entre crestas se mantiene aproximadamente constante.

La relación con la rapidez es físicamente causal: si en cada segundo pasan 8 ciclos y cada ciclo ocupa una distancia [[lambda]], el patrón avanza esa distancia ocho veces por segundo. No se está usando la amplitud porque la altura no determina la separación espacial.

## Resolución simbólica

Para estimar la longitud de onda desde varias crestas:

{{f:longitud_por_crestas}}

Para obtener el número de onda:

{{f:numero_onda_longitud}}

Para conectar longitud de onda y frecuencia con rapidez:

{{f:velocidad_longitud_frecuencia}}

La magnitud [[lambda]] sale de una lectura espacial; [[k]] expresa la misma repetición como ritmo de fase; [[v]] combina escala espacial y ritmo temporal.

## Sustitución numérica

Dividir 1,20 m entre 4 intervalos completos da una longitud de onda aproximada de 0,30 m. Esto significa que dos crestas consecutivas están separadas unos treinta centímetros.

Para el número de onda, dividir una vuelta angular completa entre 0,30 m da un valor cercano a 21 rad/m. El valor grande frente a 1 rad/m indica que la fase cambia bastante en cada metro.

Para la rapidez, multiplicar 0,30 m por 8,0 Hz da aproximadamente 2,4 m/s. Es una rapidez razonable para una cuerda de laboratorio.

## Validación dimensional

En la medición por crestas, una distancia `[L]` dividida entre un conteo `[1]` mantiene dimensión `[L]`.

El número de onda tiene dimensión `[L⁻¹]`, porque expresa fase por unidad de distancia.

En la rapidez, longitud `[L]` multiplicada por frecuencia `[T⁻¹]` da `[L T⁻¹]`, coherente con velocidad.

## Interpretación física

El resultado muestra una onda espacialmente visible: treinta centímetros entre crestas es una escala que puede medirse con regla o con una imagen de la cuerda. No describe la altura de la onda, sino la distancia necesaria para volver al mismo estado del ciclo.

Si la frecuencia aumentara manteniendo la misma rapidez de la cuerda, la longitud de onda tendría que disminuir. Si la rapidez del medio aumentara manteniendo la misma frecuencia, las crestas quedarían más separadas. Por eso [[lambda]] no se interpreta de forma aislada: depende del medio y del ritmo temporal cuando la onda se propaga.

El cálculo también muestra por qué medir varios intervalos es mejor que medir uno. Si una cresta se localiza con un pequeño error, repartir 1,20 m entre cuatro tramos suaviza la incertidumbre. En una práctica real, repetir la medida en otra zona de la cuerda comprobaría si el patrón es uniforme.

# Ejemplo de aplicación real

## Contexto

En una piscina se observan ondas superficiales que llegan a una pared. La distancia entre tres crestas consecutivas ocupa unos 80 cm. Se quiere estimar la longitud de onda para decidir si el patrón es de ondas cortas o largas comparado con el tamaño de la piscina.

## Estimación física

Tres crestas consecutivas encierran dos intervalos completos. Una separación total de 80 cm repartida entre dos intervalos da una longitud de onda de orden 40 cm. Si la piscina mide varios metros, caben muchas longitudes de onda en ella.

## Interpretación

La estimación indica que el patrón es espacialmente repetido a escala submétrica. Moverse medio metro puede llevar de una cresta a otra zona del ciclo, por lo que la posición importa para observar máximos y mínimos.

La lectura real exige contar intervalos, no crestas. Si se confundieran tres crestas con tres longitudes de onda, se subestimaría la separación real. Esta es una de las razones por las que conviene marcar estados equivalentes y contar los tramos entre ellos.

La estimación también ayuda a predecir cómo cambiaría el dibujo si la fuente oscilara más deprisa. En el mismo medio, mayor frecuencia produciría crestas más cercanas; si el medio cambiara y la rapidez aumentara, la separación podría crecer aunque el ritmo temporal no cambiara.
