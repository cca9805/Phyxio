# Ejemplo tipo examen


## Enunciado

Una placa plana separa el interior caliente de una cámara del exterior frío. La cara interior se mantiene a ochenta grados Celsius y la exterior a veinte grados Celsius. La placa tiene dos metros cuadrados de superficie útil, cuatro centímetros de grosor y una [[conductividad_termica]] típica de material aislante rígido. Se desea estimar la [[diferencia_temperatura]], el [[gradiente_temperatura]], la [[potencia_termica]], el [[flujo_calor]], la [[resistencia_termica]] y el [[calor_transferido]] durante media hora de funcionamiento estable.

## Datos

- [[temperatura_caliente]]: ochenta grados Celsius
- [[temperatura_fria]]: veinte grados Celsius
- [[area]]: dos metros cuadrados
- [[espesor]]: cuatro centímetros
- [[conductividad_termica]]: cero coma cero cuatro W/(m·K)
- [[tiempo]]: media hora
- Magnitudes a calcular: [[diferencia_temperatura]], [[gradiente_temperatura]], [[potencia_termica]], [[flujo_calor]], [[resistencia_termica]], [[calor_transferido]]

## Definición del sistema

El sistema físico es una placa homogénea atravesada por calor desde la cara asociada a [[temperatura_caliente]] hacia la cara asociada a [[temperatura_fria]]. La superficie efectiva de paso se representa mediante [[area]], y el recorrido térmico principal mediante [[espesor]]. Se supone que la placa no tiene huecos, puentes metálicos ni bordes dominantes, de modo que el intercambio lateral es pequeño frente al paso normal a las caras. La duración del proceso queda representada por [[tiempo]], que permitirá transformar una rapidez térmica en [[calor_transferido]] acumulado.

## Modelo físico

El modelo físico es conducción estacionaria unidimensional. La [[diferencia_temperatura]] se obtiene comparando [[temperatura_caliente]] y [[temperatura_fria]]. El [[gradiente_temperatura]] reparte esa diferencia a lo largo de [[espesor]]. Con [[conductividad_termica]] y [[area]] se calcula la [[potencia_termica]] total. El [[flujo_calor]] permite comparar la intensidad superficial y la [[resistencia_termica]] resume la oposición de la placa al paso de energía. Las fórmulas que organizan el modelo son:

{{f:diferencia_temperatura}}

{{f:gradiente_temperatura_1d}}

{{f:ley_fourier_conduccion_1d}}

{{f:flujo_calor_conduccion}}

{{f:flujo_potencia_area}}

{{f:calor_potencia_tiempo}}

{{f:resistencia_termica_conduccion}}

{{f:potencia_resistencia_termica}}

## Justificación del modelo

Este modelo es adecuado porque la geometría se aproxima a una placa plana con caras paralelas. La [[area]] es mucho mayor que el grosor visible, por lo que el paso normal a la superficie domina sobre pérdidas por bordes. Además, la [[conductividad_termica]] se toma constante porque el rango térmico es moderado para una estimación escolar. La presencia de [[temperatura_caliente]] y [[temperatura_fria]] mantenidas permite usar una [[potencia_termica]] estable. Si las temperaturas cambiaran de forma rápida durante el [[tiempo]], habría que usar un modelo transitorio, pero aquí el objetivo es una lectura estacionaria.

## Resolución simbólica

Primero se determina la separación térmica mediante:

{{f:diferencia_temperatura}}

Después se calcula el cambio espacial de temperatura con:

{{f:gradiente_temperatura_1d}}

La rapidez total de transferencia por conducción se obtiene con:

{{f:ley_fourier_conduccion_1d}}

La intensidad superficial puede leerse directamente como:

{{f:flujo_calor_conduccion}}

O también a partir de la potencia total:

{{f:flujo_potencia_area}}

La energía acumulada durante el intervalo se calcula mediante:

{{f:calor_potencia_tiempo}}

La oposición térmica de la placa se estima con:

{{f:resistencia_termica_conduccion}}

Y la potencia puede comprobarse de nuevo con:

{{f:potencia_resistencia_termica}}

## Sustitución numérica

La [[diferencia_temperatura]] entre ochenta grados Celsius y veinte grados Celsius es sesenta kelvin. El [[espesor]] de cuatro centímetros se convierte a cero coma cero cuatro metros. El [[gradiente_temperatura]] resulta de repartir sesenta kelvin en cero coma cero cuatro metros, por lo que su tamaño es mil quinientos kelvin por metro. Con [[conductividad_termica]] de cero coma cero cuatro W/(m·K), [[area]] de dos metros cuadrados y ese salto térmico, la [[potencia_termica]] es ciento veinte vatios. El [[flujo_calor]] es sesenta vatios por metro cuadrado. La [[resistencia_termica]] de la placa es cero coma cinco K/W. Durante un [[tiempo]] de mil ochocientos segundos, el [[calor_transferido]] es doscientos dieciséis mil julios.

## Validación dimensional

Para la [[potencia_termica]], la combinación dimensional de [[conductividad_termica]], [[area]], [[diferencia_temperatura]] y [[espesor]] produce vatios. En dimensiones, W/(m·K) multiplicado por m² y por K, dividido entre m, termina en W. El vatio equivale a J/s y a `[M L² T⁻³]`.

Para el [[flujo_calor]], W dividido entre m² termina en W/m², cuya dimensión es `[M T⁻³]`.
Para el [[calor_transferido]], W multiplicado por s termina en J, con dimensión `[M L² T⁻²]`.
Para la [[resistencia_termica]], m dividido entre W/(m·K) y m² termina en K/W.

## Interpretación física

El resultado indica que la placa deja pasar una [[potencia_termica]] de ciento veinte vatios en las condiciones dadas. No es una energía total, sino un ritmo: cada segundo cruza una cantidad apreciable de energía desde la zona de [[temperatura_caliente]] hacia la zona de [[temperatura_fria]]. El [[flujo_calor]] de sesenta vatios por metro cuadrado permite comparar esta placa con otras superficies sin que el tamaño de [[area]] confunda la lectura.

Durante media hora, el [[calor_transferido]] acumulado es significativo. La [[resistencia_termica]] de cero coma cinco K/W muestra que la placa ofrece cierta oposición, pero no bloquea completamente el paso térmico. Si aumentara el [[espesor]] o bajara la [[conductividad_termica]], la transferencia disminuiría. Si creciera la [[diferencia_temperatura]], el proceso se intensificaría.

# Ejemplo de aplicación real


## Contexto

En una vivienda, una ventana simple puede comportarse como una zona débil del aislamiento. Aunque el muro tenga buena [[resistencia_termica]], una parte acristalada con menor [[espesor]] efectivo y mayor [[conductividad_termica]] equivalente puede concentrar pérdidas. Durante una noche fría, la [[temperatura_caliente]] interior puede mantenerse cerca de veinte grados Celsius, mientras la [[temperatura_fria]] exterior cae a cero grados Celsius. La [[area]] acristalada quizá sea de un metro cuadrado y el [[tiempo]] de exposición dure varias horas. Este escenario permite entender por qué las ventanas influyen tanto en la [[potencia_termica]] necesaria para calefacción.

## Estimación física

Tomemos una ventana idealizada con [[area]] de un metro cuadrado, [[espesor]] de cuatro milímetros y [[conductividad_termica]] aproximada de uno W/(m·K). La [[diferencia_temperatura]] es veinte kelvin y el [[gradiente_temperatura]] aproximado es cinco mil kelvin por metro. La [[potencia_termica]] estimada es unos cinco mil vatios si solo se usara vidrio puro idealizado sin resistencias superficiales, lo que es demasiado alto para una ventana real completa. El [[flujo_calor]] sería también muy grande. En la práctica, las capas de aire, los tratamientos y las resistencias superficiales elevan la [[resistencia_termica]] efectiva y reducen el [[calor_transferido]] durante el [[tiempo]] nocturno.

## Interpretación

La estimación muestra por qué el modelo ideal es útil y peligroso a la vez. Sirve para detectar que un pequeño [[espesor]] y una [[conductividad_termica]] relativamente alta favorecen pérdidas, pero también avisa de que una ventana real necesita un modelo extendido. La lectura física importante no es solo el número, sino qué variable conviene modificar para reducir el paso térmico.