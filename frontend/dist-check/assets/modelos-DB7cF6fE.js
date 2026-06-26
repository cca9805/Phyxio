const e=`## Modelo ideal

El modelo ideal trata el **índice de refracción** [[n]] como una constante escalar independiente de la longitud de onda, la temperatura y la dirección de propagación. La luz se modela como rayos rectilíneos que cambian de velocidad y dirección al cruzar interfaces planas entre medios homogéneos e isótropos. Se conservan la frecuencia y la componente tangencial del vector de onda.

En este modelo, la velocidad de la luz en el medio [[v_medio]] es simplemente [[c]] dividida por [[n]], y la longitud de onda [[lambda_medio]] es [[lambda_0]] dividida por [[n]]. La ley de Snell permite calcular la desviación angular del rayo usando únicamente los índices de los dos medios y el ángulo de incidencia [[theta_1]].

## Hipótesis

- **Medio homogéneo**: el índice [[n]] es uniforme en todo el volumen del material. Si existieran gradientes de índice, el rayo seguiría trayectorias curvas en lugar de rectas.
- **Medio isótropo**: el índice no depende de la dirección de propagación ni de la polarización. Violar esta hipótesis conduciría a birrefringencia y desdoblamiento del rayo.
- **Luz monocromática**: el índice no varía con la longitud de onda. Si se usa luz policromática sin corregir, cada color experimenta un índice distinto y los cálculos pierden precisión.
- **Interfaz plana e ideal**: la superficie de separación es lisa a escala de la longitud de onda. Rugosidades producirían dispersión difusa en lugar de refracción especular.

## Dominio de validez cuantitativo

El modelo de índice constante es razonable cuando el ancho de banda espectral de la fuente es inferior a 10 nm, lo que mantiene la variación de [[n]] por debajo de 0.001 en vidrios comunes. Para fuentes de banda más ancha, la dispersión cromática genera errores que pueden superar > 0.5 grados en la desviación angular de un prisma.

En cuanto al orden de magnitud de las dimensiones, el modelo geométrico requiere que las estructuras del sistema óptico sean mucho mayores que la longitud de onda: diámetros de lentes y aperturas > 100 veces [[lambda_0]] (típicamente > 50 micrometros para luz visible). Por debajo de ese umbral, los efectos de difracción dominan y el concepto de rayo pierde sentido.

## Señales de fallo del modelo

- Al iluminar un prisma con luz blanca, el rayo de salida muestra un abanico de colores en lugar de un rayo único: la dispersión cromática indica que [[n]] depende de la longitud de onda.
- La imagen formada por una lente muestra bordes coloreados (aberración cromática): el modelo de índice constante no predice este defecto.
- Al medir el índice con dos láseres de longitudes de onda muy separadas se obtienen valores distintos de [[n]], confirmando la dispersión.
- En cristales birrefringentes se observan dos imágenes de un mismo objeto, señal de que el índice depende de la dirección de polarización.

## Modelo extendido o alternativo

El **modelo dispersivo** reemplaza la constante [[n]] por una función que depende de la longitud de onda [[lambda_0]], habitualmente descrita por la ecuación de Sellmeier con coeficientes empíricos específicos del material. Este modelo permite calcular la separación angular de colores en prismas y la aberración cromática de lentes con precisión de centésimas de grado.

Para cristales anisótropos se emplea el **modelo tensorial**, donde el índice es un tensor de segundo orden. Cada dirección de polarización experimenta un índice diferente, lo que produce birrefringencia y doble refracción.

Cuando conviene pasar al modelo dispersivo: siempre que la fuente de luz tenga un ancho de banda superior a 10 nm o cuando el diseño óptico exija precisión angular mejor que una décima de grado. Cuando conviene pasar al modelo tensorial: cuando el medio sea cristalino no cúbico o cuando se trabaje con polarización controlada.

## Comparación operativa

| Criterio | Modelo ideal (índice constante) | Modelo dispersivo (Sellmeier) |
|---|---|---|
| Precisión angular | Suficiente para banda estrecha | Alta para todo el espectro visible |
| Complejidad | Una sola constante por medio | Curva completa con coeficientes empíricos |
| Aberración cromática | No la predice | La cuantifica con exactitud |
| Rango de aplicación | Láseres y fuentes filtradas | Luz blanca, LEDs y diseño de lentes |
| Birrefringencia | No contemplada | Requiere extensión tensorial |
`;export{e as default};
