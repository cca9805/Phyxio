const e=`# Errores frecuentes en motores eléctricos

## Errores conceptuales

### Error 1: Confundir fuerza de Laplace con par motor

**Por qué parece correcto**

El alumno calcula la fuerza total sobre los conductores usando la expresión de la fuerza de Laplace y presenta ese valor como el par del motor, sin multiplicar por el radio de armadura [[r_a]].

**Por qué es incorrecto**

La fuerza y el par son magnitudes con dimensiones distintas: la fuerza se mide en newtons y el par en newton-metro. El par es el momento de la fuerza respecto al eje de rotación, que se obtiene multiplicando la fuerza por el brazo de palanca. Sin ese paso no se puede comparar el par motor con el par resistente de la carga ni calcular la potencia mecánica.

**Señal de detección**

El alumno reporta el par en newtons en lugar de newton-metro, o usa la fuerza directamente en la fórmula de potencia mecánica.

**Corrección conceptual**

El par es la fuerza multiplicada por el radio de armadura [[r_a]]. Una vez calculada la fuerza de Laplace [[F_L]], el par se obtiene multiplicando por la distancia del conductor al eje. Solo entonces tiene sentido compararlo con el par de la carga.

**Mini-ejemplo de contraste**

Un motor con 120 N de fuerza total sobre los conductores y un radio de armadura de 0.05 m tiene un par de 6 N·m, no de 120 N. Si se usara 120 como valor del par y se multiplicara por la velocidad angular en rad/s, la potencia resultante estaría veinte veces sobredimensionada.

## Errores de modelo

### Error 2: Ignorar la fuerza contraelectromotriz al calcular la corriente en régimen

**Por qué parece correcto**

En el arranque, toda la tensión de alimentación cae en la resistencia interna y la corriente es la tensión dividida entre la resistencia. El alumno aplica esa misma fórmula en el régimen estacionario, donde el motor ya gira.

**Por qué es incorrecto**

Cuando el motor gira a velocidad [[omega]], el bobinado actúa como generador e induce una fem contraelectromotriz [[epsilon_c]] que se opone a la alimentación. La corriente de régimen no es la tensión total dividida entre la resistencia: es la diferencia entre la tensión de alimentación y [[epsilon_c]], dividida entre la resistencia interna. Ignorar [[epsilon_c]] sobreestima la corriente, el par y la potencia eléctrica consumida.

**Señal de detección**

La corriente calculada supera en mucho la corriente nominal del motor, o el rendimiento calculado es absurdamente bajo porque la potencia eléctrica calculada es mucho mayor que la real.

**Corrección conceptual**

En régimen estacionario, la corriente de armadura se calcula restando la fem contraelectromotriz [[epsilon_c]] a la tensión de alimentación y dividiendo entre la resistencia interna del bobinado. La fem contraelectromotriz aumenta con la velocidad: a plena velocidad, [[epsilon_c]] puede ocupar el 90 % de la tensión de alimentación.

**Mini-ejemplo de contraste**

Un motor alimentado a 120 V con resistencia interna de 2 Ω y fem contraelectromotriz de 110 V tiene una corriente de régimen de 5 A. Si se ignora [[epsilon_c]] y se divide 120 V entre 2 Ω, se obtiene 60 A: una corriente doce veces mayor que la real, lo que daría un par absurdamente alto.

## Errores matemáticos

### Error 3: Introducir la velocidad angular en rpm en lugar de rad/s

**Por qué parece correcto**

Las fichas técnicas de los motores dan la velocidad en revoluciones por minuto. El alumno copia ese valor directamente en las fórmulas de fem contraelectromotriz y de potencia mecánica.

**Por qué es incorrecto**

Las fórmulas de la física se expresan en el Sistema Internacional. La velocidad angular [[omega]] debe estar en radianes por segundo. Un valor en rpm es numéricamente cien veces mayor que el valor en rad/s para velocidades típicas, lo que produce errores del mismo orden en [[epsilon_c]] y en [[P_mec]]. Una velocidad de 1500 rpm equivale a 157 rad/s, no a 1500 rad/s.

**Señal de detección**

La potencia mecánica calculada es cien veces mayor que la potencia nominal del motor, o la fem contraelectromotriz supera ampliamente la tensión de alimentación.

**Corrección conceptual**

Convertir siempre rpm a rad/s multiplicando por 2π y dividiendo entre 60. Una revolución completa corresponde a 2π radianes, y hay 60 segundos en un minuto: la velocidad en rad/s es el valor en rpm multiplicado por 2π/60, que es aproximadamente 0.1047.

**Mini-ejemplo de contraste**

Un motor a 3000 rpm tiene una velocidad angular de 314 rad/s, no de 3000 rad/s. Si se usa 3000 en la fórmula de potencia con un par de 10 N·m, se obtendría 30 000 W en lugar de los correctos 3140 W.

## Errores de interpretación

### Error 4: Confundir la longitud total del conductor con la longitud activa en el campo

**Por qué parece correcto**

El alumno mide o le dan la longitud total del bobinado del motor e introduce ese valor como [[L_c]] en la fórmula de fuerza de Laplace.

**Por qué es incorrecto**

Solo la parte del conductor que está dentro del campo magnético del entrehierro contribuye a la fuerza de Laplace. Los cabezales de bobina, que son los tramos que unen los conductores activos en los extremos del rotor, están fuera del campo y no producen fuerza útil. Usar la longitud total en lugar de la longitud activa [[L_c]] sobreestima la fuerza y el par del motor.

**Señal de detección**

La longitud introducida en el cálculo es mayor que la longitud axial del estátor del motor, que es el límite físico de la longitud activa.

**Corrección conceptual**

La longitud activa [[L_c]] es la longitud axial del estátor: la distancia entre los dos bordes del paquete de chapas del núcleo magnético. Los cabezales de bobina cuelgan fuera de esa zona y aunque transportan la misma corriente, no están en el campo y no generan fuerza.

**Mini-ejemplo de contraste**

Un motor tiene conductores de 0.20 m de longitud total, pero solo 0.10 m están dentro del campo del entrehierro. Si se usa 0.20 m en la fórmula, la fuerza calculada será el doble de la real. En un problema de laboratorio, eso llevaría a un par calculado de 12 N·m cuando el par real medido es 6 N·m.

### Error 5: Usar el rendimiento como porcentaje en lugar de como fracción decimal

**Por qué parece correcto**

Las fichas técnicas y los catálogos de motores expresan el rendimiento en porcentaje: 85 %, 90 %, 92 %. El alumno copia ese número directamente en la fórmula de potencia mecánica o de potencia eléctrica sin convertirlo.

**Por qué es incorrecto**

El rendimiento [[eta]] en las fórmulas es una fracción adimensional entre 0 y 1. Introducir 85 en lugar de 0.85 hace que el resultado quede multiplicado por 100. La potencia mecánica calculada sería cien veces la potencia real, lo que viola la conservación de la energía de forma manifiesta.

**Señal de detección**

La potencia mecánica calculada supera la potencia eléctrica consumida, o la potencia eléctrica calculada es apenas el 1 % de la potencia mecánica.

**Corrección conceptual**

Un rendimiento del 85 % significa que 85 de cada 100 julios eléctricos se convierten en trabajo mecánico. Expresado como fracción, eso es 0.85. Siempre que se vea un rendimiento en porcentaje, hay que dividir entre 100 antes de usarlo en cualquier fórmula.

**Mini-ejemplo de contraste**

Un motor con rendimiento del 80 % consume una potencia eléctrica de 500 W. La potencia mecánica es 0.80 veces 500 W, igual a 400 W. Si se usa 80 en lugar de 0.80, el resultado es 40 000 W: ochenta veces mayor que la potencia eléctrica de entrada, lo que es imposible por conservación de energía.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado sobre un motor eléctrico, verificar las tres condiciones siguientes. La potencia mecánica debe ser estrictamente menor que la potencia eléctrica consumida. El rendimiento debe estar entre 0 y 1 expresado como decimal. La velocidad angular utilizada en los cálculos debe estar en rad/s: si el dato era en rpm, dividir entre 9.55 (que es 60 dividido entre 2π) o multiplicar por 0.1047 para convertir.
`;export{e as default};
