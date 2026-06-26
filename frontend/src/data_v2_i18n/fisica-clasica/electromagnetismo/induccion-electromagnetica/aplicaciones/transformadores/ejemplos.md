# Ejemplo tipo examen


## Enunciado

Un transformador monofásico tiene un devanado primario de [[numero_de_espiras_primario]] igual a 800 espiras y un devanado secundario de [[numero_de_espiras_secundario]] igual a 160 espiras. El primario se conecta a una tensión alterna de [[tension_primaria]] igual a 230 V. El transformador alimenta una carga resistiva que consume una potencia activa de [[potencia_activa_de_salida]] igual a 500 W. El rendimiento del transformador [[eta]] es de 0.96. Calcular la tensión secundaria, la corriente en ambos devanados, la potencia de entrada y las pérdidas totales del transformador.

## Datos

- [[numero_de_espiras_primario]] es 800 espiras
- [[numero_de_espiras_secundario]] es 160 espiras
- [[tension_primaria]] es 230 V
- [[potencia_activa_de_salida]] es 500 W
- [[eta]] es 0.96

Los datos describen un transformador reductor porque el devanado secundario tiene menos espiras que el primario. La carga se interpreta desde [[potencia_activa_de_salida]], no desde una resistencia dada, de modo que primero debe obtenerse [[tension_secundaria]] y despues deducirse [[corriente_secundaria]]. El rendimiento [[eta]] no modifica la relacion de espiras, pero si permite estimar [[potencia_activa_de_entrada]] y las perdidas [[perdidas_totales]].

## Definición del sistema

El sistema es un transformador monofásico reductor de tensión con carga resistiva conectada al secundario. Los parámetros geométricos del transformador definen la relación de transformación. Las condiciones de operación incluyen tensión primaria fija y carga activa determinada.

## Modelo físico

Se aplica el modelo de transformador ideal con pérdidas consideradas mediante el rendimiento. La relación entre [[tension_primaria]] y [[tension_secundaria]] queda controlada por [[numero_de_espiras_primario]] y [[numero_de_espiras_secundario]], mientras que la relación entre [[corriente_primaria]] y [[corriente_secundaria]] es inversa a la de espiras. La potencia aparente [[potencia_aparente]] sirve como referencia de capacidad de los devanados, y [[eta]] cuantifica la fracción de potencia activa transferida al secundario.

## Justificación del modelo

El campo magnético en el núcleo es aproximadamente uniforme. El transformador opera en régimen estacionario con carga lineal resistiva. Las pérdidas son consideradas a través del rendimiento experimental proporcionado. Las condiciones justifican el uso de las relaciones de transformación básicas con corrección por rendimiento.

## Resolución simbólica

La tensión secundaria se obtiene de la relación de transformación. La tensión es inversamente proporcional a la relación de espiras:

{{f:relacion_transformacion}}

[[tension_secundaria]] es igual a [[tension_primaria]] multiplicado por [[numero_de_espiras_secundario]] dividido por [[numero_de_espiras_primario]]

La corriente secundaria se calcula a partir de la potencia de salida y la tensión secundaria:

[[corriente_secundaria]] es igual a [[potencia_activa_de_salida]] dividido por [[tension_secundaria]]

La corriente primaria se obtiene de la conservación de la potencia aparente, usando la relación inversa de espiras:

{{f:relacion_corriente}}

[[corriente_primaria]] es igual a [[corriente_secundaria]] multiplicado por [[numero_de_espiras_secundario]] dividido por [[numero_de_espiras_primario]]

La misma capacidad de transferencia se puede leer mediante la potencia aparente en el devanado primario:

{{f:potencia_aparente}}

La potencia de entrada se calcula a partir de la potencia de salida y el rendimiento:

{{f:rendimiento_transformador}}

[[potencia_activa_de_entrada]] es igual a [[potencia_activa_de_salida]] dividido por [[eta]]

Las pérdidas totales son la diferencia entre potencia de entrada y salida:

{{f:perdidas_totales}}

[[perdidas_totales]] es igual a [[potencia_activa_de_entrada]] menos [[potencia_activa_de_salida]]

## Sustitución numérica

La relación de transformación es 800 entre 160 igual a 5.

La tensión secundaria [[tension_secundaria]] es 230 V multiplicado por 160 dividido entre 800 igual a 46 V.

La corriente secundaria [[corriente_secundaria]] es 500 W dividido entre 46 V aproximadamente 10.87 A.

La corriente primaria [[corriente_primaria]] es 10.87 A multiplicado por 160 dividido entre 800 aproximadamente 2.17 A.

La potencia de entrada [[potencia_activa_de_entrada]] es 500 W dividido entre 0.96 aproximadamente 520.8 W.

Las pérdidas totales [[perdidas_totales]] son 520.8 W menos 500 W igual a 20.8 W.

## Validación dimensional

Para [[tension_secundaria]]: V por adimensional entre adimensional da V. Correcto.

Para [[corriente_secundaria]]: W dividido entre V da A. Correcto.

Para [[corriente_primaria]]: A por adimensional entre adimensional da A. Correcto.

Para [[potencia_activa_de_entrada]]: W entre adimensional da W. Correcto.

Para [[perdidas_totales]]: W menos W da W. Correcto.

## Interpretación física

El transformador reduce la tensión de 230 V a 46 V con una relación de 5 a 1. La corriente aumenta de aproximadamente 2.2 A en el primario a aproximadamente 10.9 A en el secundario, manteniendo la potencia. El rendimiento del 96% es típico de un transformador de pequeña potencia bien diseñado. Las pérdidas de aproximadamente 21 W se disipan como calor en los devanados y el núcleo. Este transformador podría alimentar una carga de baja tensión como un sistema de iluminación o electrónica de consumo.

# Ejemplo de aplicación real


## Contexto

Un transformador de distribución doméstica en una urbanización tiene una potencia nominal [[potencia_aparente]] de 50 kVA. El primario se conecta a la red de media tensión a 13800 V. El secundario proporciona la tensión doméstica de 230 V monofásica. El transformador tiene un rendimiento nominal del 98.5%. En una medida en hora punta, el consumo registrado en el secundario es de 42 kW con un factor de potencia próximo a la unidad.

## Estimación física

La relación de transformación aproximada es 13800 V dividido entre 230 V igual a 60. El número de espiras del primario es aproximadamente 60 veces el del secundario.

La corriente nominal secundaria se estima como [[potencia_aparente]] dividido entre [[tension_secundaria]] igual a 50000 VA entre 230 V aproximadamente 217 A.

La corriente actual estimada con 42 kW y factor de potencia unitario es aproximadamente 42000 W entre 230 V igual a 183 A.

El transformador opera al 183 entre 217 por cien aproximadamente 84% de su carga nominal, dentro de su rango óptimo de operación.

Las pérdidas estimadas son el 1.5% de la potencia transferida. Con 42 kW de salida, las pérdidas son aproximadamente 0.015 multiplicado por 42000 W igual a 630 W.

La potencia de entrada es aproximadamente 42630 W. A 13800 V, la corriente primaria es aproximadamente 3.1 A.

## Interpretación

El transformador de distribución está operando dentro de parámetros normales, cerca de su punto de máxima eficiencia. Las pérdidas de aproximadamente 630 W se disipan principalmente como calor en el núcleo y los devanados, requiriendo ventilación natural o forzada según el diseño. La reducción de corriente de aproximadamente 183 A en el secundario a solo 3.1 A en el primario demuestra la ventaja de la distribución en alta tensión. Sin el transformador, distribuir 42 kW a 230 V requeriría cables capaces de transportar la corriente completa de 183 A, mucho más gruesos y costosos que los necesarios para 3.1 A a 13800 V.

Este ejemplo muestra cómo los transformadores de distribución permiten el suministro eléctrico eficiente a vecindarios completos, minimizando las pérdidas en las líneas de alimentación y reduciendo el costo de la infraestructura eléctrica.