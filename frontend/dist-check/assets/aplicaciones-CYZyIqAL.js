const e=`# Aplicaciones de los motores eléctricos

## 1. Motor de tracción en vehículos eléctricos

En un vehículo eléctrico, el motor convierte directamente la energía de la batería en par sobre las ruedas. La ausencia de caja de cambios mecánica es posible porque el par de un motor eléctrico es máximo desde el reposo, a diferencia de un motor de combustión interna que necesita rpm para producir potencia útil. El motor trabaja con corrientes de armadura muy elevadas en la aceleración desde cero, donde la fem contraelectromotriz es pequeña y la demanda de corriente al banco de baterías es máxima. A velocidad de crucero, la fem contraelectromotriz ocupa la mayor parte de la tensión del bus de continua y la corriente cae a valores moderados.

La hipótesis simplificadora dominante en el análisis de tracción es que el campo magnético es constante y uniforme en el entrehierro durante todo el ciclo de operación, lo que permite usar el modelo lineal entre corriente y par. La variable que el sistema de control regula momento a momento es la corriente de armadura, porque controlar la corriente equivale a controlar el par y, por tanto, la aceleración del vehículo.

Variable dominante: la corriente de armadura gobierna el par instantáneo y, con él, la aceleración del vehículo.
Límite de validez: el modelo lineal corriente-par deja de ser preciso cuando la corriente supera el valor que satura el núcleo magnético, típicamente el doble de la corriente nominal, a partir del cual el par crece más lentamente que la corriente.

## 2. Motor de bomba hidráulica en instalaciones industriales

Las bombas centrífugas de las instalaciones de agua, climatización o proceso industrial son accionadas casi universalmente por motores eléctricos. En este contexto, el par resistente de la bomba crece con el cuadrado de la velocidad de giro, mientras que el par del motor es prácticamente constante a corriente constante. El punto de operación estable se establece donde ambas curvas se cruzan. Reducir la velocidad de la bomba a la mitad usando un variador de frecuencia reduce el par resistente a una cuarta parte y la potencia consumida a una octava parte: el ahorro energético es cuadrático respecto a la reducción de velocidad.

El análisis de este sistema parte de la fórmula de potencia mecánica: la potencia entregada al eje de la bomba es el producto del par y la velocidad angular. La hipótesis relevante es que las pérdidas mecánicas de la bomba son proporcionales al cuadrado de la velocidad, lo que hace que los variadores de velocidad sean la medida de ahorro energético más efectiva en bombas de caudal variable.

Variable dominante: la velocidad angular determina el punto de operación y la potencia consumida por la bomba.
Límite de validez: el modelo de par cuadrático de la bomba deja de ser válido si hay cavitación o si el caudal baja por debajo del mínimo hidráulico de la bomba, condiciones que no están contempladas en el modelo del motor ideal.

## 3. Servomotor en robótica y control de posición

En los brazos robóticos y en los ejes de las máquinas de control numérico, el motor opera como servomotor: su velocidad y posición angular se controlan con precisión milimétrica mediante lazos de realimentación electrónica. El par necesario para un movimiento suave y preciso a baja velocidad exige que el motor genere suficiente [[tau_m]] incluso cuando [[omega]] es pequeño y la fem contraelectromotriz es prácticamente nula. En esas condiciones toda la tensión de alimentación está disponible para forzar la corriente de armadura y la respuesta de par es instantánea.

La magnitud crítica en el servomotor es la constante de par, que agrupa los factores [[N_c]], [[L_c]], [[B]] y [[r_a]]. Una constante de par alta permite obtener el par deseado con poca corriente, lo que reduce el calentamiento del bobinado y mejora la precisión. Por eso los servomotores modernos usan imanes permanentes de tierras raras, que generan campos [[B]] de hasta 1.2 T en un volumen compacto.

Variable dominante: el par instantáneo, que depende linealmente de la corriente de armadura, es la variable que el controlador regula para producir el movimiento deseado.
Límite de validez: a muy bajas velocidades, el rozamiento estático del eje puede superar el par generado y provocar movimiento espasmódico. El modelo ideal no incluye fricción estática y subestima el par mínimo necesario para iniciar el movimiento.

## 4. Motor de arranque de motor de explosión

El motor de arranque de un automóvil de combustión interna es un motor de CC de potencia elevada que opera durante solo unos segundos. Debe generar un par suficiente para vencer la resistencia de compresión del motor de explosión, que puede requerir varios decenas de newton-metro dependiendo del cilindrado. En esas condiciones, el motor de arranque opera a velocidad muy baja o incluso estacionario durante los primeros instantes, con fem contraelectromotriz prácticamente nula y corriente de armadura máxima.

La batería del vehículo debe suministrar corrientes de 150 A a 400 A durante el arranque, lo que impone requisitos severos sobre la resistencia interna de la batería y el calibre del cableado. El análisis del circuito en el arranque se basa en la condición de fem contraelectromotriz nula: la corriente es la tensión de batería dividida entre la resistencia total del circuito (bobinado más cables). El par de arranque es directamente proporcional a esa corriente y al campo del estátor.

Variable dominante: la corriente de armadura máxima en el arranque determina el par disponible para vencer la compresión del motor de explosión.
Límite de validez: el modelo es válido para los instantes iniciales del arranque. Una vez que el motor de explosión supera la primera compresión y comienza a girar, la velocidad del motor de arranque sube y la fem contraelectromotriz limita la corriente: el modelo estático ya no es aplicable.

## 5. Motor en discos duros y actuadores de precisión

Los motores de los discos duros mecánicos y de los actuadores de precisión óptica operan en el extremo opuesto del espectro: velocidades muy altas (varios miles de rpm), corrientes bajas y par pequeño. En estos sistemas la fem contraelectromotriz ocupa prácticamente toda la tensión de alimentación y la corriente de régimen es mínima. La potencia mecánica es modesta en valor absoluto (décimas de vatio) pero el rendimiento debe ser máximo para minimizar el calentamiento en un espacio confinado donde la disipación térmica es difícil.

El diseño de estos motores maximiza el producto [[N_c]] por [[L_c]] por [[B]] por [[r_a]] para obtener una fem contraelectromotriz elevada a bajas corrientes, reduciendo las pérdidas Joule. El análisis de eficiencia es central: [[eta]] elevado reduce el calor generado y prolonga la vida del sistema, que en un disco duro puede operar durante años ininterrumpidamente.

Variable dominante: la velocidad angular en régimen determina la fem contraelectromotriz y, con ella, la corriente residual y las pérdidas Joule que limitan la vida del actuador.
Límite de validez: a velocidades superiores a las de diseño, la fem contraelectromotriz puede superar la tensión de alimentación disponible, lo que hace que la corriente se invierta y el motor pase a operar como freno regenerativo, un régimen no deseado en estos dispositivos.
`;export{e as default};
