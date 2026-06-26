## Modelo ideal

El modelo ideal del motor de corriente continua describe una bobina plana de [[numero_de_conductores_activos]] conductores activos que gira en un campo magnético uniforme [[campo_magnetico_del_estator]] producido por un estátor de imán permanente o de bobina de excitación. El conmutador garantiza que la corriente [[corriente_de_armadura]] en los conductores activos mantenga siempre la misma dirección relativa respecto al campo, de modo que el par resultante sea siempre en el mismo sentido de giro. Las pérdidas eléctricas se resumen en una resistencia interna constante y todas las demás disipaciones se agrupan en un rendimiento global [[eta]].

En este modelo, la fuerza de Laplace, el par, la fem contraelectromotriz y la potencia mecánica son las cuatro magnitudes núcleo que resultan directamente de los parámetros constructivos y de las condiciones de operación. El modelo es lineal: el par es estrictamente proporcional a la corriente y la fem contraelectromotriz es estrictamente proporcional a la velocidad angular.

## Hipótesis

Las hipótesis del modelo ideal son las siguientes. El campo magnético [[campo_magnetico_del_estator]] en el entrehierro es uniforme y constante, independientemente de la carga. Los conductores activos son rectos y tienen todos la misma longitud activa [[longitud_activa_del_conductor]]. El radio de armadura [[r_a]] es constante para todos los conductores. El conmutador funciona sin chisporroteo y sin pérdidas, manteniendo [[sin_theta]] próximo a la unidad en todo momento. La resistencia interna del bobinado es constante e independiente de la temperatura. Las pérdidas magnéticas en el núcleo (histéresis y corrientes de Foucault) son despreciables o están incluidas implícitamente en [[eta]]. El rozamiento mecánico en los cojinetes es despreciable o está incluido en [[eta]].

## Dominio de validez cuantitativo

El modelo ideal es válido cuando el motor opera a velocidad estacionaria y carga moderada. Cuantitativamente, el campo en el entrehierro debe mantenerse por debajo de 1.5 T para evitar la saturación del núcleo. La corriente de armadura no debe superar el doble de la corriente nominal para que la hipótesis de linealidad no colapse. La velocidad angular debe ser superior a 10 rad/s para que la fem contraelectromotriz sea significativa respecto a la caída resistiva interna. En motores de laboratorio, el régimen de validez cubre el intervalo de par desde el 20 % hasta el 100 % del par nominal.

## Señales de fallo del modelo

El modelo deja de ser fiable en las siguientes situaciones. Si el motor arranca de forma brusca, la corriente transitoria puede superar diez veces la nominal: el modelo estacionario no puede predecir ese comportamiento. Si la temperatura del bobinado sube más de 40 grados sobre la temperatura de diseño, la resistencia interna aumenta significativamente y la hipótesis de resistencia constante falla. Si el campo supera 1.5 T, la saturación del núcleo hace que el par ya no sea proporcional a [[corriente_de_armadura]]: la curva par-corriente se aplana. Si hay escobillas gastadas o conmutador sucio, las pérdidas eléctricas adicionales no están incluidas en el modelo y el rendimiento real será inferior al calculado.

## Modelo extendido o alternativo

Existen extensiones progresivas para corregir las limitaciones del modelo ideal. La transición a un modelo extendido se recomienda cuando las condiciones de operación exceden los límites de validez cuantitativos del modelo ideal, o cuando la aplicación requiere precisión superior a la que puede proporcionar la aproximación lineal.

Cuando conviene pasar al modelo extendido: cuando los datos experimentales difieren del modelo ideal en más del 10 por ciento; cuando el motor opera fuera de su régimen nominal o a temperaturas elevadas, cambiar al modelo con resistencia variable; cuando se requiere modelar fenómenos dinámicos como el arranque, pasar al modelo transitorio.

El modelo con resistencia variable introduce la dependencia de la resistencia interna con la temperatura, permitiendo estimar el par y la corriente en condiciones de operación cálida. Esta extensión se vuelve necesaria cuando la temperatura del devanado supera los 30 grados sobre la temperatura ambiente, ya que el aumento de resistencia altera significativamente la relación entre corriente y tensión.

El modelo de saturación magnética reemplaza el campo constante [[campo_magnetico_del_estator]] por una curva de magnetización no lineal que vincula el flujo con la corriente de excitación. Este modelo debe usarse cuando la corriente de armadura excede el doble del valor nominal o cuando el campo en el entrehierro se aproxima a 1.5 T, pues la saturación del núcleo hace que la relación entre par y corriente se desvíe sustancialmente de la linealidad.

Para describir el arranque y la respuesta dinámica se requiere el modelo transitorio del circuito de armadura. Este modelo incluye la inductancia del bobinado y la inercia mecánica del rotor, y exige resolver un sistema de ecuaciones diferenciales acopladas. Es esencial cuando el motor debe acelerar rápidamente, cuando ocurren cambios frecuentes de velocidad, o al diseñar controladores PID de velocidad y variadores de frecuencia modernos.

## Comparación operativa

El modelo ideal predice el par, la potencia mecánica y el rendimiento con una precisión suficiente para dimensionamiento y ejercicios de diseño cuando el motor trabaja en su punto nominal. Para aplicaciones de alta precisión, como robótica o máquinas de control numérico, se necesitan modelos más complejos que incluyan la no linealidad magnética, el rozamiento estático y las armónicas de tensión del inversor. La transición al modelo extendido se justifica cuando el error del modelo ideal supera el 10 % respecto a las medidas experimentales o cuando el diseño requiere predecir el comportamiento fuera del punto nominal.