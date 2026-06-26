## Modelo ideal

El modelo ideal trata la cuerda como un medio continuo, flexible, uniforme y sometido a una tension constante. La perturbacion transversal es pequena, de modo que la tension no cambia de forma apreciable durante la oscilacion. En este marco, la rapidez [[velocidad_de_propagacion]] se determina por el balance entre [[tension_de_la_cuerda]] y [[mu]].

La cuerda no se considera rigida a flexion, no se estira de manera apreciable durante el paso de la onda y no pierde energia por rozamiento. El resultado es un modelo local: predice la rapidez de propagacion antes de imponer condiciones de contorno o modos estacionarios.

## Hipótesis

- **Cuerda uniforme:** [[mu]] es constante a lo largo del tramo analizado.
- **Tension constante:** [[tension_de_la_cuerda]] no cambia durante la oscilacion pequena.
- **Amplitud pequena:** la pendiente transversal es reducida y el modelo lineal es suficiente.
- **Flexibilidad ideal:** la cuerda no aporta rigidez de flexion apreciable.
- **Medio no dispersivo:** para el rango usado, [[velocidad_de_propagacion]] no depende de [[frecuencia]].

Estas hipotesis convierten el problema en una lectura mecanica limpia. La fuente puede cambiar [[frecuencia]], pero el medio mantiene su rapidez si [[tension_de_la_cuerda]] y [[mu]] permanecen iguales.

## Dominio de validez cuantitativo

El modelo es una buena aproximacion si la amplitud transversal es menor que el 5 % de [[longitud_efectiva]], si la variacion relativa de tension durante la oscilacion es menor que el 10 %, y si la cuerda puede considerarse uniforme en el tramo medido. Para cuerdas musicales o de laboratorio, tambien conviene que la rigidez de flexion sea pequena frente a la tension aplicada.

Como criterio operativo, si una medicion de [[velocidad_de_propagacion]] repetida a dos frecuencias distintas cambia menos del 5 % manteniendo la misma cuerda y tension, el modelo no dispersivo es razonable. Si la diferencia supera ese margen, hay que sospechar rigidez, amortiguamiento, error de montaje o variacion de tension.

## Señales de fallo del modelo

Una senal clara de fallo aparece cuando pulsos de distinta anchura viajan a velocidades distintas. Eso indica dispersion o comportamiento no ideal. Otra senal es que al aumentar moderadamente [[tension_de_la_cuerda]] la rapidez medida no siga la tendencia esperada: puede haber deslizamiento en los soportes, mala medida de [[mu]] o tension real diferente de la nominal.

Tambien falla si la cuerda vibra con amplitud grande y cambia perceptiblemente su tono durante la oscilacion. En ese caso, la tension efectiva deja de ser constante. En cuerdas metalicas gruesas, la rigidez puede elevar las frecuencias altas respecto a la prediccion simple.

## Modelo extendido o alternativo

Un modelo extendido puede incluir rigidez de flexion, amortiguamiento y tension dependiente de la deformacion. En instrumentos reales, estas correcciones explican inarmonicidad, perdida de energia y diferencias entre cuerdas con la misma [[tension_de_la_cuerda]] y [[mu]] nominales.

Para cuerdas no uniformes se usa un modelo por tramos: cada region tiene su propia densidad lineal y por tanto una rapidez local distinta. En puntos de cambio de material aparecen reflexiones y transmisiones parciales. Esta extension es necesaria para cables compuestos, cuerdas con entorchado irregular o montajes con nudos.

## Comparación operativa

| Situacion | Modelo ideal | Modelo extendido |
|---|---|---|
| Cuerda fina y uniforme | Adecuado | No necesario |
| Amplitud pequena | Adecuado | No necesario |
| Cuerda gruesa o rigida | Aproximado | Recomendado |
| Densidad variable | Insuficiente | Necesario |
| Medidas de alta precision | Punto de partida | Recomendado |

El modelo ideal es preferible para aprender la causa fisica de [[velocidad_de_propagacion]] y resolver problemas basicos. Conviene cambiar a un modelo extendido cuando las medidas revelan dispersion, perdidas fuertes o desviaciones sistematicas, lo que marca la transicion al analisis avanzado.