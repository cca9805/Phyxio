## 1. Navegación aérea: posición vectorial y [[desplazamiento]] en ruta

Un avión comercial vuela de Madrid a Tokio. El sistema de navegación actualiza la **posición vectorial** \( \vec{r}(t) \) del avión respecto al centro de la Tierra cada segundo, con datos de GPS diferencial. El ** [[desplazamiento]] ** \( \Delta\vec{r} \) desde el despegue apunta directamente del aeropuerto de origen al punto actual, mientras que la ** [[distancia]] recorrida** \( s \) acumula cada metro de trayectoria independientemente de las desviaciones causadas por vientos favorables o zonas de tráfico aéreo restringido.

Para calcular la [[velocidad_media]] del vuelo completo se divide el [[desplazamiento]] (≈ 9 560 km) entre el [[intervalo_tiempo]] . La [[rapidez_media]] usa la [[distancia]] real de la ruta (≈ 10 100 km) entre el mismo [[intervalo_tiempo]] . La diferencia entre ambos valores alimenta el sistema de gestión de vuelo, que interpreta cuánto se ha alejado la ruta de la geodésica óptima y ajusta el consumo de combustible estimado.

Variable dominante: [[desplazamiento]] \( \Delta\vec{r} \), porque determina la componente útil del movimiento y da sentido físico a la [[velocidad]] media cuando interesa conectar dos puntos reales del mapa.

Límite de validez: en vuelos de más de \( 3\,000\;\text{km} \) la curvatura terrestre obliga a formular posición y [[desplazamiento]] en coordenadas esféricas. El modelo euclidiano plano subestima la [[distancia]] real y puede distorsionar la interpretación de la [[velocidad]] media.

---

## 2. Frenado de emergencia en homologación de vehículos

La homologación de un vehículo exige medir la **aceleración media** durante una frenada de emergencia. El procedimiento registra la [[velocidad]] inicial (27,8 m/s) y la [[velocidad]] final (0) sobre asfalto seco, con ABS activo. El intervalo temporal \( \Delta t \) se mide con instrumentación fotoeléctrica.

El ** [[cambio_velocidad]] ** es −27,8 m/s, y de ahí se obtiene la [[aceleracion_media]] dividiendo entre el [[intervalo_tiempo]] . Si el vehículo se detiene en \( 2{,}7\;\text{s} \), la aceleración media vale aproximadamente \( -10{,}3\;\text{m/s}^2 \), cifra muy próxima al límite de adherencia neumático-asfalto. Esa magnitud resume la eficacia global del sistema de frenado y permite comparar modelos distintos con un criterio común.

Variable dominante: [[aceleracion_media]] , porque convierte un proceso temporal complejo en un parámetro global comparable entre vehículos y condiciones de ensayo.

Límite de validez: la aceleración media no describe las oscilaciones instantáneas de \( a(t) \) durante la actuación del ABS. Para estudiar confort, vibraciones o desgaste térmico del sistema de frenos hace falta la señal temporal completa, no solo el promedio.

---

## 3. Atletismo de fondo: [[rapidez]] media frente a [[velocidad]] media

En una prueba de \( 10\,000\;\text{m} \) en pista, el atleta recorre una [[distancia]] grande pero termina prácticamente en el mismo punto geométrico en el que empezó. Si la carrera dura \( 1\,620\;\text{s} \), la ** [[rapidez_media]] ** es 10 000 m ÷ 1 620 s ≈ 6,17 m/s, mientras que la [[velocidad_media]] resulta casi nula porque el [[desplazamiento]] final es casi cero.

La diferencia no es una sutileza escolar. En deporte, el marcador, el récord y los parciales por kilómetro se expresan en [[rapidez]] media, no en [[velocidad]] media, porque lo que interesa es cuánto recorrido real se cubre por unidad de [[tiempo]] . La [[velocidad]] media sería una mala magnitud para comparar rendimiento en una pista cerrada.

Variable dominante: [[rapidez_media]] , porque es la única magnitud promedio que conserva significado operativo cuando el recorrido es cerrado y el [[desplazamiento]] neto pierde relevancia.

Límite de validez: la [[rapidez]] media no distingue entre un ritmo uniforme y una estrategia con cambios violentos de paso. Para estudiar táctica de carrera, fatiga o respuesta fisiológica se necesita información temporal más fina, idealmente la evolución de la [[velocidad]] instantánea.

---

## 4. Sismología: [[velocidad]] media de ondas para localizar el foco

Cuando ocurre un terremoto, distintas estaciones detectan la llegada de las ondas P en instantes diferentes. Con la separación entre foco y estación y el [[tiempo]] de tránsito, los sismólogos estiman la ** [[velocidad_media]] ** de propagación de la onda dividiendo la [[distancia]] entre el [[intervalo_tiempo]] de tránsito.

Si una estación está a \( 300\;\text{km} \) del epicentro y registra la llegada a los \( 52\;\text{s} \), se obtiene [[velocidad_media]] ≈ 5 800 m/s, valor compatible con la propagación en corteza continental. Al combinar datos de varias estaciones, esta magnitud permite triangular el foco sísmico y activar alertas tempranas en pocos segundos.

Variable dominante: [[velocidad_media]] , porque transforma tiempos de llegada en distancias efectivas y enlaza directamente el registro temporal con la localización espacial del evento.

Límite de validez: el modelo de trayecto recto funciona bien para distancias moderadas y estructuras relativamente homogéneas. En trayectos profundos o intercontinentales, la refracción en capas de distinta densidad obliga a usar modelos de propagación más complejos.

---

## 5. Biomecánica de la marcha: aceleración media en el apoyo del talón

En análisis clínico de la marcha, sensores colocados cerca de la cadera registran cómo cambia la [[velocidad]] del centro de masa durante cada apoyo. En el instante de contacto del talón, la componente longitudinal de la [[velocidad]] puede pasar de \( 1{,}30\;\text{m/s} \) a \( 1{,}10\;\text{m/s} \) en \( 0{,}12\;\text{s} \). El [[cambio_velocidad]] es −0,20 m/s y la [[aceleracion_media]] vale aproximadamente −1,7 m/s².

Ese valor sirve para comparar sesiones de rehabilitación, evaluar la dureza del impacto y detectar patrones de marcha excesivamente cautelosos o demasiado agresivos. La utilidad práctica es clínica: ayuda a decidir ajustes de calzado, ortesis o progresión terapéutica.

Variable dominante: [[aceleracion_media]] , porque cuantifica de forma compacta la intensidad global del cambio de [[velocidad]] durante una fase concreta y permite comparar individuos o sesiones.

Límite de validez: el promedio suaviza picos muy breves de impacto. Para diseño de calzado, prevención de lesiones por estrés o análisis fino del gesto motor, la aceleración instantánea contiene información que la media no puede conservar.
