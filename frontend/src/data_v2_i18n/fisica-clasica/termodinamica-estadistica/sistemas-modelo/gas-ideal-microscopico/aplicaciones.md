# Aplicaciones

## 1. Calibración de sensores de [[presion]] en gases ligeros

Variable dominante: [[presion]]
Límite de validez: [[presion]] menor que 10^6 Pa y gas suficientemente diluido

En cámaras de laboratorio, la [[presion]] de helio o nitrógeno se interpreta a menudo mediante el modelo de gas ideal. El sensor no mide moléculas individuales; mide el efecto colectivo de muchos choques contra una superficie. El modelo microscópico permite entender que, si la [[temperatura]] aumenta a [[volumen]] fijo, también aumenta la energía de agitación y los choques se vuelven más intensos. La variable medida es [[presion]], pero la lectura física se apoya en [[energia_cinetica_media]], [[numero_particulas]] y [[volumen]]. La predicción se vuelve dudosa si el gas se comprime mucho, si aparecen fugas o si el sensor trabaja con gradientes térmicos. Una forma de validar la calibración es comparar la [[presion]] medida con el valor predicho por la ecuación de estado usando [[numero_particulas]] conocido y [[temperatura]] controlada. Si la discrepancia supera el margen aceptable, puede indicar adsorción de moléculas en las paredes, entrada de impurezas o que las condiciones se acercan al límite de validez del modelo ideal.

## 2. Estimación de velocidades moleculares

Variable dominante: [[velocidad_rms]]
Límite de validez: [[temperatura]] en kelvin y gas clásico no cuántico

La [[velocidad_rms]] permite estimar una rapidez típica sin seguir todas las partículas. En gases ligeros como helio, puede ser muy alta incluso cuando el gas macroscópico está quieto. La aplicación es útil para comprender difusión, tiempo de llegada a paredes y escalas de choque. Se mide o fija la [[temperatura]], se conoce la [[masa_particula]] y se estima la rapidez mediante

{{f:velocidad_cuadratica_media}}

. El resultado no debe interpretarse como velocidad idéntica de todas las partículas ni como dirección de flujo. El límite aparece a baja [[temperatura]], donde efectos cuánticos pueden alterar la imagen clásica. Comparar gases de distinta [[masa_particula]] a la misma [[temperatura]] muestra que la [[velocidad_rms]] es mayor para partículas más ligeras, lo que explica por qué el helio escapa más rápidamente de recipientes con pequeñas fugas que gases más pesados como el argón o el nitrógeno.

## 3. Diseño de recipientes térmicos cerrados

Variable dominante: [[temperatura]]
Límite de validez: [[volumen]] constante, equilibrio térmico y sin condensación

En un recipiente rígido, aumentar la [[temperatura]] de un gas ideal incrementa la [[energia_cinetica_media]] de las partículas. Si [[numero_particulas]] y [[volumen]] permanecen constantes, ese aumento se refleja en mayor [[presion]]. Esta idea se usa para estimar márgenes de seguridad en botellas, cámaras y dispositivos térmicos. La magnitud controlada puede ser [[temperatura]], pero la restricción de diseño suele ser la [[presion]] máxima admisible. El modelo deja de ser suficiente si el gas reacciona químicamente, se aproxima a licuefacción o si el recipiente no mantiene equilibrio uniforme. El cálculo práctico consiste en tomar la [[presion]] a [[temperatura]] inicial, multiplicarla por el cociente de temperaturas absolutas y comparar el resultado con la presión de diseño. Si la [[temperatura]] de operación puede subir mucho por fallo de control o incendio externo, este factor puede superar la resistencia del recipiente y el diseño debe incorporar válvulas de alivio dimensionadas con el mismo modelo.

## 4. Comparación de gases a igual [[temperatura]]

Variable dominante: [[energia_cinetica_media]]
Límite de validez: gases monoatómicos ideales en equilibrio

Comparar helio y argón a la misma [[temperatura]] revela una idea muy potente: la [[energia_cinetica_media]] traslacional media por partícula es la misma, aunque la [[velocidad_rms]] sea diferente. La [[masa_particula]] del argón es mayor, por eso su rapidez típica es menor. Esta aplicación ayuda a separar energía de rapidez, dos conceptos que los alumnos suelen mezclar. Se predice una energía media común usando

{{f:energia_cinetica_media_temperatura}}

, y después se contrasta la rapidez con

{{f:velocidad_cuadratica_media}}

. El límite aparece si los gases no son monoatómicos o si intervienen modos internos relevantes. Esta comparación es también la base del principio de equipartición: a la misma [[temperatura]], todos los grados de libertad traslacionales reciben la misma energía media, independientemente de la [[masa_particula]]. La diferencia entre gases solo aparece en la rapidez, no en la energía media por grado de libertad traslacional.

## 5. Simulación molecular educativa

Variable dominante: [[numero_particulas]]
Límite de validez: número de partículas grande para medias estables, típicamente [[numero_particulas]] mayor que 10^3 en simulaciones didácticas

En una simulación por ordenador, se pueden representar partículas rebotando dentro de un recipiente. Aunque el [[numero_particulas]] simulado sea muchísimo menor que en un gas real, la relación entre [[temperatura]] y [[energia_cinetica_media]] puede observarse si se promedian suficientes choques y velocidades. La simulación mide posiciones y velocidades, calcula [[velocidad_rms]] y muestra cómo aparece la [[presion]] como efecto colectivo. Es útil para ver el nacimiento de una ley macroscópica desde muchas acciones microscópicas. El límite es estadístico: con pocas partículas, las fluctuaciones son grandes y la lectura de [[temperatura]] o [[presion]] se vuelve ruidosa. Para que la [[velocidad_rms]] simulada coincida con el valor predicho por el modelo, es necesario que las partículas hayan tenido tiempo de intercambiar energía mediante choques y que el promedio se realice sobre una muestra representativa de instantes temporales. Sin esa termalización previa, la [[energia_cinetica_media]] medida puede estar lejos del equilibrio y la comparación con la [[temperatura]] termodinámica no es válida.