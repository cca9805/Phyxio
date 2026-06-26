## Contexto conceptual

Un motor eléctrico es un dispositivo que convierte energía eléctrica en energía mecánica de rotación. Es la inversión funcional del generador: mientras el generador mueve un conductor en un campo para inducir tensión, el motor alimenta un conductor con corriente para que el campo le imponga un movimiento. Esta inversión no es casual; ambos fenómenos son manifestaciones del mismo principio de interacción entre cargas en movimiento y campos magnéticos, y comparten las mismas ecuaciones de base.

Los motores son la máquina más extendida de la civilización moderna. Mueven desde las ventanas eléctricas de un automóvil hasta los trenes de alta velocidad, pasando por los compresores de los climatizadores, los discos duros y las bombas de los hospitales. Comprender su funcionamiento a nivel físico no es un ejercicio académico: es entender por qué algunas decisiones de diseño tienen consecuencias energéticas y mecánicas inevitables.

## 🟢 Nivel esencial

Un motor eléctrico convierte energía eléctrica en rotación mediante la fuerza que ejerce un campo magnético sobre un conductor con corriente. Esa fuerza, perpendicular tanto al conductor como al campo, produce par de rotación cuando el conductor está unido a un eje mecánico. La dirección de giro depende de la dirección de la corriente: invertir la corriente invierte el sentido de rotación.

El motor es conceptualmente un generador funcionando a la inversa. Mientras el generador produce electricidad al girar, el motor consume electricidad para girar. Ambos dispositivos comparten la misma estructura física: un conductor que se mueve dentro de un campo magnético. La diferencia es la fuente de energía que impulsa el proceso.

Esta simetría entre motor y generador revela una propiedad profunda de la naturaleza: la electricidad y el movimiento están íntimamente relacionados. Un mismo dispositivo puede funcionar como motor o como generador dependiendo de cómo se energice.

## 🔵 Nivel formal

La descripción matemática parte de la fuerza de Laplace sobre un conductor. Un conductor de longitud [[longitud_activa_del_conductor]] con corriente [[corriente_de_armadura]] dentro de campo [[campo_magnetico_del_estator]] experimenta fuerza proporcional al producto de estas magnitudes y al seno del ángulo. Con [[numero_de_conductores_activos]] conductores activos, la fuerza total es:

{{f:fuerza_laplace_motor}}

Esta fuerza actúa tangencialmente a distancia [[r_a]] del eje, generando el par motor [[tau_m]] que vence la resistencia de la carga:

{{f:par_motor_electrico}}

El giro del rotor dentro del campo genera variación de flujo que, según Faraday, induce una tensión que se opone a la alimentación. A mayor velocidad angular [[omega]], mayor la fem contraelectromotriz [[epsilon_c]], limitando automáticamente la corriente:

{{f:fem_contragiro_motor}}

La potencia mecánica útil en el eje resulta del producto del par por la velocidad angular. Este producto cuantifica la energía por unidad de tiempo transferida desde el dominio eléctrico al mecánico, representando la capacidad efectiva del motor para realizar trabajo contra resistencias externas:

{{f:potencia_mecanica_motor}}

El rendimiento [[eta]] mide la fracción de potencia eléctrica consumida convertida en potencia mecánica útil. La diferencia representa pérdidas por efecto Joule en el bobinado, pérdidas magnéticas en el núcleo y rozamiento mecánico:

{{f:eficiencia_motor}}

## 🔴 Nivel estructural

Las cinco fórmulas anteriores forman un sistema encadenado donde cada variable se determina secuencialmente a partir de las anteriores. La corriente de armadura [[corriente_de_armadura]], impuesta por la diferencia entre la tensión de alimentación y la fem contraelectromotriz, determina la fuerza de Laplace [[fuerza_de_laplace]] sobre cada conductor activo. Esta fuerza, distribuida entre los [[numero_de_conductores_activos]] conductores del bobinado, genera una acción mecánica colectiva.

La fuerza resultante, aplicada a distancia [[r_a]] del eje de rotación, crea el par motor [[tau_m]] que vence la resistencia mecánica ofrecida por la carga. La velocidad angular [[omega]] que alcanza el sistema motor-carga determina a su vez la fem contraelectromotriz [[epsilon_c]] inducida, que limita la corriente disponible en régimen estacionario. Este cierre de lazo establece una retroalimentación negativa inherente al funcionamiento del motor.

El par motor y la velocidad angular combinados determinan la potencia mecánica [[potencia_mecanica]] transferida al eje. Comparando esta potencia útil con la potencia eléctrica total consumida [[potencia_electrica_consumida]] se obtiene el rendimiento [[eta]], que cuantifica la calidad de la conversión energética. Las pérdidas, representadas por la diferencia entre potencia entrante y útil, se disipan principalmente como calor en el bobinado.

Esta cadena de dependencias revela que el motor es inherentemente estable: si la carga aumenta, la velocidad tiende a disminuir, reduciendo la fem contraelectromotriz, lo que permite un incremento de corriente y par que compensa la perturbación. Este mecanismo de autorregulación permite que los motores de CC mantengan velocidad aproximadamente constante ante variaciones moderadas de carga sin requerir control electrónico externo.

El diseño de motores se centra en optimizar el producto constructivo que vincula los dominios eléctrico y mecánico. La combinación del número de conductores, su longitud activa, la intensidad del campo magnético y el radio de armadura determina la constante de par del motor. Maximizar esta constante permite obtener mayor par con menor corriente, reduciendo pérdidas por efecto Joule y mejorando el rendimiento global del dispositivo.

## Interpretación física profunda

La fuerza de Laplace no actúa sobre el electrón aislado sino sobre el conductor completo, incluida la red cristalina del metal. La corriente arrastra electrones que colisionan con los iones de la red; esas colisiones transfieren impulso a la red y, con ella, al conductor. Por eso el conductor completo se mueve, no solo los electrones.

La fem contraelectromotriz tiene una interpretación igualmente profunda: es la manifestación de la ley de Lenz en el motor. Al girar, el bobinado actúa como generador y produce una tensión que se opone a la alimentación. Esa oposición no es un defecto del motor: es el mecanismo por el cual la energía eléctrica se transfiere al eje mecánico. Sin fem contraelectromotriz no habría conversión de energía, solo disipación en la resistencia interna.

El rendimiento [[eta]] nunca alcanza la unidad porque siempre existen pérdidas Joule en el bobinado, pérdidas magnéticas en el núcleo y rozamiento mecánico en los cojinetes. Mejorar [[eta]] implica reducir simultáneamente las tres fuentes de pérdida, lo que ha impulsado el desarrollo de los motores de imán permanente y los núcleos laminados de alta calidad.

## Orden de magnitud

Un motor de CC de laboratorio típico tiene un radio de armadura de unos 0.03 m, 200 conductores activos de 0.05 m de longitud activa, un campo de 0.8 T y una corriente nominal de 2 A. El par nominal resulta aproximadamente 0.5 N·m. A 1000 rpm (unos 105 rad/s) la potencia mecánica es aproximadamente 52 W. Esa escala es la típica de los trabajos prácticos de laboratorio de electromagnetismo y contrasta con los motores industriales, donde el par puede ser de cientos de N·m y la potencia de decenas de kW.

En un motor de CC para vehículo eléctrico pequeño, la corriente puede ser de 50 A y el campo de 1.0 T, con 500 conductores activos de 0.10 m y radio de 0.08 m, lo que da un par de unos 200 N·m, suficiente para mover el vehículo desde el reposo.

## Método de resolución personalizado

Para resolver cualquier problema de motor eléctrico, el orden recomendado es el siguiente. Primero identificar los datos conocidos entre [[numero_de_conductores_activos]], [[corriente_de_armadura]], [[longitud_activa_del_conductor]], [[campo_magnetico_del_estator]], [[r_a]], [[sin_theta]] y [[omega]]. Segundo, calcular [[fuerza_de_laplace]] con la primera fórmula y verificar la dimensión. Tercero, obtener [[tau_m]] multiplicando [[fuerza_de_laplace]] por [[r_a]]. Cuarto, si se conoce [[omega]], calcular [[epsilon_c]] y [[potencia_mecanica]]. Quinto, con [[potencia_electrica_consumida]] y [[potencia_mecanica]], obtener [[eta]]. En cada paso, verificar que el resultado tiene el orden de magnitud esperado antes de avanzar al siguiente.

Si la velocidad angular está en rpm, convertir a rad/s multiplicando por 2π/60 antes de cualquier cálculo. Si el rendimiento se da como porcentaje, dividir entre 100 antes de usarlo en las fórmulas.

## Casos especiales y ejemplo extendido

El arranque del motor es el caso especial más importante. En el instante inicial [[omega]] es cero, por lo que [[epsilon_c]] es cero y toda la tensión de alimentación cae en la resistencia interna. La corriente de arranque puede ser diez o más veces la corriente nominal, lo que puede dañar el bobinado. En la práctica, se limita la corriente de arranque mediante resistencias en serie (arranque reóstático) o variadores de velocidad (arranque electrónico suave).

El caso de motor bloqueado, donde el rotor no puede girar por exceso de carga, es eléctricamente idéntico al arranque: [[omega]] es cero, [[epsilon_c]] es cero y la corriente es máxima. Si no existe protección térmica, el calor generado puede quemar el bobinado en segundos.

Ejemplo extendido: un motor de CC con 300 conductores activos, [[longitud_activa_del_conductor]] de 0.08 m, [[campo_magnetico_del_estator]] de 1.0 T, [[r_a]] de 0.05 m y [[corriente_de_armadura]] de 5 A opera a [[omega]] de 100 rad/s con [[sin_theta]] igual a 1. La fuerza por conductor es [[corriente_de_armadura]] por [[longitud_activa_del_conductor]] por [[campo_magnetico_del_estator]], es decir 0.4 N. La fuerza total sobre los [[numero_de_conductores_activos]] conductores es 120 N. El par es 120 por 0.05, igual a 6 N·m. La potencia mecánica es 6 por 100, igual a 600 W. La fem contraelectromotriz es 300 por 0.08 por 1.0 por 0.05 por 100, igual a 120 V. Con una tensión de alimentación de 130 V y la fem contraelectromotriz de 120 V, la corriente de régimen es aproximadamente (130 - 120) dividido entre la resistencia interna del bobinado. Con 2 Ω de resistencia, la corriente es 5 A, lo que verifica la coherencia del sistema.

## Preguntas reales del alumno

¿Por qué el motor consume más corriente cuando está parado que cuando gira? Porque en reposo la fem contraelectromotriz es cero y toda la tensión cae en la pequeña resistencia interna. Al girar, [[epsilon_c]] crece y reduce la diferencia de tensión disponible para impulsar la corriente.

¿Por qué invertir la polaridad de la alimentación invierte el giro? Porque invierte la dirección de [[corriente_de_armadura]], lo que invierte la dirección de la fuerza de Laplace según la regla de la mano derecha.

¿Puede un motor funcionar como generador? Sí. Si se aplica una fuerza externa que gira el eje más rápido de lo que corresponde a la tensión de alimentación, [[epsilon_c]] supera a la tensión y la corriente se invierte: el motor devuelve energía a la red. Este fenómeno se llama frenado regenerativo.

¿Por qué los motores se calientan más con carga pesada? Porque la carga exige más par, el par exige más corriente, y las pérdidas Joule son proporcionales al cuadrado de la corriente.

## Conexiones transversales y rutas de estudio

El motor eléctrico conecta directamente con el leaf de generadores porque ambos son aplicaciones simétricas de la misma interacción campo-corriente. Conecta con la ley de Lenz a través de la fem contraelectromotriz, y con la ley de conservación de la energía a través del balance de potencias. La curva par-velocidad del motor es el dual de la curva de carga del generador. Quien comprende el generador puede entender el motor invirtiendo la pregunta: en lugar de preguntar qué tensión produce un movimiento, se pregunta qué movimiento produce una tensión.

A nivel avanzado, el motor de CC es el prototipo de todos los motores eléctricos, incluidos los de CA y los motores de reluctancia. Las diferencias son de circuito y de geometría, no de principio físico.

## Síntesis final

El motor eléctrico convierte energía eléctrica en par mecánico mediante la fuerza que el campo del estátor ejerce sobre la corriente del rotor. El par es proporcional a la corriente, al campo y a los parámetros constructivos del motor. La fem contraelectromotriz, generada por el mismo rotor al girar, limita la corriente en régimen y es el mecanismo por el que la energía se transfiere al eje. El rendimiento mide la calidad de esa conversión y siempre es menor que uno por las pérdidas inevitables. El punto de operación del motor es la intersección entre su curva par-velocidad y la curva de par resistente de la carga.