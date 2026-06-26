## Modelo ideal

El modelo que describe la naturaleza del sonido en este leaf es el de la **onda plana armónica** en un medio elástico lineal. En este modelo, la perturbación de presión [[p_ac]] en cualquier punto del espacio y en cualquier instante es una función sinusoidal de la posición y el tiempo, con amplitud [[p0_ac]] constante e independiente de la posición.

El medio se trata como **homogéneo, isótropo y no absorbente**: sus propiedades (densidad y módulo de compresibilidad) son iguales en todos los puntos y en todas las direcciones, y no disipan energía. Bajo estas condiciones, la onda se propaga indefinidamente sin atenuación y la [[v_son]] es constante en todo el dominio. Las compresiones y rarefacciones forman frentes de onda planos y paralelos entre sí, perpendiculares a la dirección de propagación.

Este modelo es la base del análisis de ondas sonoras en la mayoría de los contextos de física de bachillerato y primer ciclo universitario.

## Hipótesis

- **Amplitudes pequeñas (régimen lineal):** [[p0_ac]] es mucho menor que la presión estática del medio. Para el aire, esto significa [[p0_ac]] muy inferior a 101 325 Pa. Si esta hipótesis se viola, aparecen efectos no lineales: generación de armónicos, distorsión de la forma de onda y, en el límite, ondas de choque. La consecuencia de violarla sería que la forma de la onda dejaría de ser sinusoidal.

- **Frente de onda plano:** El área del frente de onda es constante y perpendicular a la dirección de propagación. Esta hipótesis es válida lejos de una fuente puntual, donde el frente esférico puede aproximarse localmente como plano. Si se viola, la intensidad decae con la distancia y la amplitud disminuye espacialmente.

- **Medio no dispersivo:** [[v_son]] no depende de [[f_son]]. En el aire a frecuencias audibles, la dispersión es despreciable. Si el medio fuera dispersivo, distintas frecuencias viajarían a velocidades diferentes, deformando la señal temporal.

- **Proceso adiabático:** Las compresiones y rarefacciones ocurren sin intercambio de calor con el entorno. Si el proceso fuera isotérmico (lento), la [[v_son]] resultaría menor que la medida experimentalmente. Newton cometió este error al derivar la velocidad del sonido antes de que Laplace añadiera la corrección adiabática.

- **Medio sin flujo:** Las partículas del medio no tienen velocidad de deriva macroscópica. Si hay viento o corriente, la [[v_son]] efectiva se modifica por efecto Doppler de medio en movimiento.

## Dominio de validez cuantitativo

El modelo de onda plana armónica es válido cuando:

- [[p0_ac]] es menor que 1 % de la presión estática del medio: para el aire, [[p0_ac]] debe ser inferior a 1000 Pa. Por encima de este nivel, los efectos no lineales se vuelven significativos.
- La frecuencia satisface que la [[lambda_son]] es mucho mayor que la distancia intermolecular del medio: para el aire a temperatura ambiente, esto se cumple hasta frecuencias del orden de cientos de MHz. El rango audible (20 Hz a 20 kHz) cumple esta condición con margen amplio.
- La distancia a la fuente es mayor que unas pocas [[lambda_son]], de modo que el frente de onda puede aproximarse como plano localmente. Para una fuente puntual, la aproximación de onda plana es válida a distancias mayores que unas 10 longitudes de onda.
- El medio tiene variaciones de propiedades a escalas espaciales mucho mayores que [[lambda_son]]: gradientes de temperatura o densidad que varían en distancias menores que [[lambda_son]] producen dispersión y el modelo de onda plana no es directamente aplicable.

Condición numérica concreta: la presión acústica [[p0_ac]] debe ser < 1000 Pa para que el modelo lineal sea válido en el aire.

## Señales de fallo del modelo

- **Distorsión armónica:** Si la señal medida contiene frecuencias que son múltiplos de la fundamental aunque la fuente emita a una sola frecuencia, el régimen no lineal ha comenzado. En la gráfica Coord, la onda ya no es sinusoidal perfecta sino que muestra asimetrías o "aplanamiento" de los picos.
- **Atenuación espacial de la amplitud:** Si [[p0_ac]] disminuye con la distancia aunque no haya reflexiones ni absorción geométrica esperada, el modelo de onda plana ha fallado y debe usarse la geometría esférica o cilíndrica.
- **Variación de [[v_son]] con la amplitud:** En el régimen no lineal, zonas de compresión muy intensa viajan más rápido que las zonas de rarefacción, deformando progresivamente la onda hasta formar un frente de choque (onda de choque acústica).
- **Cambio de forma de onda en medios dispersivos:** Si la forma del pulso sonoro cambia al propagarse (por ejemplo, un pulso rectangular se ensancha), el medio es dispersivo y el modelo de onda armónica de frecuencia única ya no describe el conjunto correctamente.

## Modelo extendido o alternativo

El modelo de **onda esférica** extiende el de onda plana a fuentes puntuales reales. En él, [[p_ac]] decae inversamente con la distancia a la fuente y [[I_ac]] decae con el cuadrado de la distancia (ley del inverso del cuadrado). Este modelo es esencial para calcular el nivel sonoro a distintas distancias de un altavoz, una sirena o cualquier fuente compacta.

Para altas amplitudes, la **acústica no lineal** (modelo de Burgers) describe cómo la onda sinusoidal se deforma progresivamente generando armónicos. Este modelo es necesario en sonoterapia de alta intensidad (HIFU), en litotripsia y en estudios de ondas de choque.

Cuando conviene pasar al modelo esférico: cuando la distancia a la fuente es comparable o menor que las dimensiones de la fuente, o cuando se necesita calcular cómo varía [[I_ac]] con la distancia; cambiar a la acústica no lineal cuando [[p0_ac]] supera el 1 % de la presión estática del medio o cuando la forma de onda muestra distorsión observable.

## Comparación operativa

| Criterio | Onda plana armónica | Onda esférica | Acústica no lineal |
|---|---|---|---|
| Amplitud | Constante en el espacio | Decrece como 1/r | Varía de forma compleja |
| Forma de onda | Sinusoide pura | Sinusoide pura (campo lejano) | Sinusoide distorsionada |
| Intensidad | Uniforme en el frente | Decrece como 1/r² | Variable y con armónicos |
| Aplicación típica | Análisis cualitativo, aulas | Altavoces, sirenas, exposición | HIFU, ondas de choque, sonar |
| Complejidad matemática | Baja | Media | Alta |
| Validez del rango lineal | Siempre (por hipótesis) | Siempre (por hipótesis) | Solo en régimen no lineal |
