## Modelo ideal

El modelo ideal para la interpretación física de Maxwell es el de la **onda plana armónica en el vacío**. En este marco, se asume que los campos eléctrico [[campo_electrico]] y magnético [[campo_magnetico]] son perpendiculares entre sí y también a la dirección de propagación. Además, se considera que el medio es un vacío perfecto, lo que significa que no hay cargas ni corrientes libres que puedan dispersar o absorber la energía. Bajo estas condiciones, la relación entre las amplitudes de los campos es constante e igual a la velocidad de la luz [[velocidad_de_la_luz_en_el_vacio]], y la energía se transporta sin ninguna pérdida de intensidad a medida que la onda avanza. Este modelo permite simplificar las ecuaciones vectoriales de Maxwell en relaciones escalares directas entre densidades de energía [[densidad_de_energia_electromagnetica]] e intensidades medias [[intensidad_media]], proporcionando una base clara para entender el transporte de potencia electromagnética.

## Hipótesis

Para que este modelo de interpretación sea válido, se deben cumplir las siguientes hipótesis fundamentales:
1.  **Aproximación de campo lejano**: Se asume que el punto de observación está lo suficientemente lejos de las fuentes como para que el frente de onda sea localmente plano.
2.  **Linealidad del medio**: Se considera que el vacío (o el medio analizado) es lineal, isótropo y homogéneo, lo que garantiza que la velocidad [[velocidad_de_la_luz_en_el_vacio]] sea constante y no dependa de la frecuencia o la dirección.
3.  **Ausencia de dispersión**: Se ignora la variación de las constantes eléctricas [[epsilon0]] y magnéticas [[mu0]] con la frecuencia, tratando el vacío como un medio no dispersivo.
4.  **Régimen estacionario o armónico**: Se asume que las fuentes han estado oscilando el tiempo suficiente para que los campos sigan un patrón sinusoidal regular, facilitando el uso de la intensidad media [[intensidad_media]] como medida de potencia.
5.  **Desprecio de efectos cuánticos**: El modelo trata los campos como continuos, ignorando la naturaleza discreta (fotónica) de la luz, lo cual es válido para densidades de energía moderadas.

## Dominio de validez cuantitativo

Este modelo es extremadamente preciso en el vacío y en el aire para un rango inmenso de frecuencias, desde ondas de radio hasta luz ultravioleta. Cuantitativamente, el modelo es aplicable siempre que la escala espacial L del sistema cumpla la condición **L >> 10^-10 metros**, asegurando que nos mantenemos fuera del régimen donde la cuantización del espacio-tiempo o los efectos atómicos dominan. Asimismo, la relación de magnitudes de campo [[relacion_entre_campos]] se cumple con un error despreciable siempre que el medio tenga una conductividad casi nula. En términos de intensidad, la fórmula para la intensidad media [[intensidad_media]] es válida mientras la amplitud del campo eléctrico [[amplitud_del_campo_electrico]] no supere el límite de ionización del aire (aproximadamente 3e6 V/m a presión atmosférica).

## Señales de fallo del modelo

Un analista puede detectar que el modelo ideal de interpretación de Maxwell está fallando si observa las siguientes señales:
-   **Desfase entre campos**: Si los campos [[campo_electrico]] y [[campo_magnetico]] no están en fase (sus máximos no coinciden en el tiempo), significa que el medio tiene pérdidas significativas o es conductor.
-   **Inconsistencia en la relación E/B**: Si el cociente entre las magnitudes de los campos se desvía significativamente de la velocidad de la luz [[velocidad_de_la_luz_en_el_vacio]], indica la presencia de campos cercanos reactivos o efectos de reflexión.
-   **Atenuación no geométrica**: Si la intensidad media [[intensidad_media]] disminuye más rápido de lo que predice la ley del inverso del cuadrado de la distancia, existe absorción en el medio.
-   **Aparición de componentes longitudinales**: Si se detecta una componente de campo en la dirección de propagación, el modelo de onda transversal plana ya no es aplicable (típico en guías de onda o fibras ópticas).

## Modelo extendido o alternativo

Cuando el modelo ideal falla debido a la presencia de materia densa o frecuencias extremas, se debe transitar hacia modelos más complejos:
-   **Modelo de medios disipativos**: Incorpora la conductividad eléctrica y una parte imaginaria en la permitividad para dar cuenta de la absorción de energía por calor.
-   **Electrodinámica cuántica (QED)**: Es el modelo alternativo necesario cuando se trabaja con intensidades de luz extremadamente bajas (pocos fotones) o energías de rayos gamma.

## Comparación operativa

La transición del modelo de Maxwell ideal al modelo cuántico **cuando conviene cambiar al modelo** es cuando la energía del fotón (hf) es comparable a la energía total del sistema estudiado, o cuando se requiere explicar fenómenos como el efecto fotoeléctrico o la dispersión Compton. Operativamente, el modelo ideal es preferido para cálculos rápidos de enlace de comunicaciones y protección radiológica, ya que permite obtener órdenes de magnitud correctos con un esfuerzo computacional mínimo. En cambio, los modelos extendidos son obligatorios en el diseño de circuitos integrados de alta frecuencia o en la ingeniería de materiales con propiedades exóticas (metamateriales), donde las hipótesis de isotropía y falta de pérdidas son simplemente irreales. El éxito de la interpretación física reside en saber cuándo la simplicidad del modelo de onda plana es suficiente y cuándo la complejidad del medio exige una descripción estructural más profunda.