# Ejemplo tipo examen

## Enunciado

En un canal de laboratorio se genera una onda casi periodica. Al congelar una imagen, la distancia entre dos crestas consecutivas es 0.80 m. Un sensor fijo registra que pasan 3.0 crestas cada segundo. En otro registro de video, una cresta reconocible avanza 2.4 m durante 1.0 s.

Determina la velocidad de propagacion por los dos metodos y decide si ambas lecturas son compatibles. Explica tambien que error se cometeria si se midiera la oscilacion vertical del agua como si fuera avance del patron.

## Datos

- Longitud de onda observada: 0.80 m.
- Frecuencia de paso de crestas: 3.0 Hz.
- Desplazamiento horizontal de la cresta seguida: 2.4 m.
- Intervalo de seguimiento: 1.0 s.
- Medio observado: canal de agua con patron aproximadamente uniforme.

## Definición del sistema

El sistema es el patron superficial que se desplaza por el canal. La magnitud buscada es [[v]], entendida como rapidez horizontal del patron. La distancia entre crestas representa [[lambda]], el conteo de crestas por segundo representa [[f]], el avance observado representa [[Delta_x]] y el tiempo de seguimiento representa [[Delta_t]].

No se analiza la velocidad vertical de una particula de agua. Cada punto de la superficie puede subir y bajar mientras la forma de la onda se desplaza. La pregunta se refiere a la forma que viaja.

## Modelo físico

Se usa un modelo de onda viajera periodica y de medio casi uniforme. La primera lectura combina [[lambda]] y [[f]]. La segunda sigue una cresta durante [[Delta_t]] y mide su avance [[Delta_x]]. Ambas estiman [[v]], pero lo hacen desde evidencias distintas.

El modelo supone que la cresta seguida conserva identidad durante el registro y que el patron no cambia de velocidad de manera apreciable. Si hubiese reflexiones intensas, rotura de olas o deformacion fuerte, la lectura media seria mas dudosa.

## Justificación del modelo

La relacion periodica vale porque el sensor cuenta ciclos de la misma onda cuya separacion espacial fue medida en la imagen. Fisicamente, cada ciclo que pasa por el sensor corresponde al avance de una separacion espacial completa del patron.

La relacion por seguimiento directo vale porque se observa la misma cresta en dos instantes. Deja de valer si se confunde una cresta con otra, si el video tiene perspectiva no corregida o si el agua cambia de regimen durante el intervalo.

## Resolución simbólica

Para la lectura periodica, la rapidez del patron se obtiene con:

{{f:velocidad_onda_frecuencia}}

En esta lectura, [[lambda]] aporta la escala espacial y [[f]] aporta el ritmo temporal. El resultado [[v]] debe representar avance horizontal por segundo.

Para la lectura directa, se compara la distancia recorrida por la misma fase con el tiempo transcurrido:

{{f:velocidad_media_patron}}

Aqui [[Delta_x]] debe ser desplazamiento del patron y [[Delta_t]] duracion de la observacion. Si se mide una altura vertical, el calculo ya no responde a la pregunta fisica.

## Sustitución numérica

Con la lectura periodica, multiplicar 0.80 m por 3.0 ciclos por segundo da 2.4 m/s. Por tanto [[v]] es aproximadamente 2.4 m/s.

Con la lectura directa, dividir 2.4 m entre 1.0 s da tambien 2.4 m/s. Por tanto la segunda estimacion de [[v]] coincide con la primera dentro de los datos dados.

La coincidencia no demuestra que el experimento sea perfecto, pero si indica coherencia interna: el patron que se conto por ciclos parece ser el mismo patron que se siguio en el video.

## Validación dimensional

- Lectura periodica: una longitud `[L]` multiplicada por una frecuencia `[T⁻¹]` produce una rapidez `[L T⁻¹]`.
- Lectura directa: una distancia `[L]` dividida por un tiempo `[T]` produce una rapidez `[L T⁻¹]`.
- Resultado esperado: m/s, que corresponde a `[L T⁻¹]`.

La dimension confirma que ambas relaciones calculan rapidez. No confirma por si sola que se haya seguido la cresta correcta; esa parte depende de la definicion fisica del sistema.

## Interpretación física

El resultado indica que la forma de la onda avanza unos 2.4 m cada segundo por el canal. Esa rapidez pertenece al patron, no al movimiento vertical de las moleculas de agua. Una boya pequeña podria subir y bajar con poca traslacion neta mientras las crestas pasan a esa rapidez horizontal.

Si [[f]] aumentara y el medio mantuviera aproximadamente la misma rapidez, la separacion [[lambda]] tendria que reducirse. Si en cambio se observara la misma [[lambda]] con una frecuencia mayor, la rapidez calculada aumentaria y habria que preguntar si el medio o el regimen de generacion cambiaron.

La compatibilidad de los dos metodos es una señal fuerte de que [[Delta_x]], [[Delta_t]], [[lambda]] y [[f]] describen el mismo patron. Si la lectura directa hubiera dado un valor muy distinto, la primera sospecha seria un error de seguimiento, una escala de video mal calibrada o una onda que se deforma durante la medida.

# Ejemplo de aplicación real

## Contexto

En una piscina se quiere estimar la rapidez de pequeñas ondas superficiales generadas por un golpe periodico. No se dispone de sensores, pero se puede grabar un video desde arriba y contar el paso de crestas por una linea marcada en el borde.

El video muestra que las crestas estan separadas unos 0.50 m. En la marca del borde pasan aproximadamente 4 crestas por segundo. Ademas, una cresta concreta tarda cerca de 0.75 s en recorrer 1.5 m entre dos marcas del suelo.

## Estimación física

La lectura por repeticion espacial y temporal da una rapidez cercana a 2.0 m/s, porque 0.50 m por ciclo combinado con cuatro ciclos por segundo produce dos metros por segundo. La lectura por seguimiento directo tambien da cerca de 2.0 m/s, porque 1.5 m recorridos en 0.75 s corresponden al mismo orden.

Esta estimacion cuantitativa es razonable para pequeñas ondas superficiales de piscina. Si el resultado hubiera sido 200 m/s, seria absurdo para ese montaje; si hubiera sido 0.002 m/s, las crestas tardarian muchos minutos en recorrer la piscina, contradiciendo la observacion.

## Interpretación

La velocidad de propagacion permite pasar de una observacion visual a una magnitud fisica. La piscina no mide solo una forma bonita: mide como el medio transmite una perturbacion. La concordancia entre los dos metodos sugiere que se ha seguido el mismo patron y que el video tiene escala suficiente.

Tambien permite anticipar cambios. Si se golpea mas deprisa y la rapidez de la onda en ese regimen permanece parecida, las crestas se apretaran. Si cambian la profundidad o la amplitud de manera importante, la rapidez podria cambiar y la relacion entre frecuencia y longitud de onda tendria que revisarse.
