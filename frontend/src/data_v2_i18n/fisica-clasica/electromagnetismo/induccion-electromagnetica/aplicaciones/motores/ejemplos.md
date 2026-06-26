# Ejemplo tipo examen


## Enunciado

Un motor de corriente continua tiene [[numero_de_conductores_activos]] iguales a 400 conductores activos, longitud activa [[longitud_activa_del_conductor]] de 0.06 m, campo magnético [[campo_magnetico_del_estator]] de 0.9 T y radio de armadura [[r_a]] de 0.04 m. El motor opera con [[sin_theta]] igual a 1. La corriente de armadura [[corriente_de_armadura]] es de 4 A y la velocidad angular [[omega]] es de 80 rad/s. La potencia eléctrica consumida [[potencia_electrica_consumida]] es de 210 W. Calcular la fuerza de Laplace total, el par motor, la fem contraelectromotriz, la potencia mecánica y el rendimiento del motor.

## Datos

- [[numero_de_conductores_activos]] es 400 conductores activos
- [[longitud_activa_del_conductor]] es 0.06 m
- [[campo_magnetico_del_estator]] es 0.9 T
- [[r_a]] es 0.04 m
- [[sin_theta]] es 1
- [[corriente_de_armadura]] es 4 A
- [[omega]] es 80 rad/s
- [[potencia_electrica_consumida]] es 210 W

## Definición del sistema

El sistema es un motor de corriente continua con rotor bobinado y campo magnético uniforme en el entrehierro. Los parámetros geométricos y eléctricos definen completamente el estado del motor en régimen estacionario.

## Modelo físico

Se aplica el modelo ideal de motor de CC. La fuerza de Laplace sobre [[numero_de_conductores_activos]] conductores activos de longitud [[longitud_activa_del_conductor]] que transportan corriente [[corriente_de_armadura]] en el campo magnético [[campo_magnetico_del_estator]] genera una fuerza total proporcional al producto de estas magnitudes. Esta fuerza actúa a distancia [[r_a]] del eje de rotación para producir el par motor [[tau_m]].

La rotación a velocidad angular [[omega]] induce una fem contraelectromotriz [[epsilon_c]] proporcional a la tasa de variación de flujo, que se opone a la tensión de alimentación y limita la corriente de armadura. La potencia mecánica [[potencia_mecanica]] entregada al eje equivale al producto del par por la velocidad angular, mientras que el rendimiento [[eta]] representa el cociente entre la potencia mecánica de salida y la potencia eléctrica de entrada [[potencia_electrica_consumida]].

## Justificación del modelo

El campo magnético es uniforme y constante, los conductores son rectos de longitud fija, y el motor opera en régimen estacionario con velocidad angular constante. Estas condiciones justifican el uso de las fórmulas de fuerza de Laplace y fem contraelectromotriz sin correcciones por saturación ni efectos dinámicos.

## Resolución simbólica

La fuerza de Laplace total sobre todos los conductores activos es el producto de [[numero_de_conductores_activos]], [[corriente_de_armadura]], [[longitud_activa_del_conductor]], [[campo_magnetico_del_estator]] y [[sin_theta]].

El par motor es el producto de [[fuerza_de_laplace]] por [[r_a]], o de forma equivalente el producto de todos los factores anteriores más [[r_a]].

La fem contraelectromotriz es el producto de [[numero_de_conductores_activos]], [[longitud_activa_del_conductor]], [[campo_magnetico_del_estator]], [[r_a]] y [[omega]].

La potencia mecánica es el producto de [[tau_m]] y [[omega]].

El rendimiento es el cociente entre [[potencia_mecanica]] y [[potencia_electrica_consumida]].

{{f:eficiencia_motor}}

{{f:fem_contragiro_motor}}

## Sustitución numérica

La fuerza de Laplace total [[fuerza_de_laplace]] resulta del producto de 400 por 4 A por 0.06 m por 0.9 T por 1, que da 86.4 N.

El par motor [[tau_m]] es 86.4 N por 0.04 m, igual a 3.456 N·m. Redondeando, aproximadamente 3.46 N·m.

La fem contraelectromotriz [[epsilon_c]] es 400 por 0.06 m por 0.9 T por 0.04 m por 80 rad/s, igual a 69.12 V. Redondeando, aproximadamente 69.1 V.

La potencia mecánica [[potencia_mecanica]] es 3.456 N·m por 80 rad/s, igual a 276.5 W.

El rendimiento [[eta]] es 276.5 W dividido entre 210 W, igual a 1.317.

## Validación dimensional

Para [[fuerza_de_laplace]]: adimensional por A por m por T. Como T es kg·A⁻¹·s⁻², el resultado es A·m·kg·A⁻¹·s⁻² igual a kg·m·s⁻², que es N. Correcto.

Para [[tau_m]]: N por m igual a N·m. Correcto.

Para [[epsilon_c]]: adimensional por m por T por m por rad/s. Desarrollando, m² por kg·A⁻¹·s⁻² por rad·s⁻¹ igual a kg·m²·A⁻¹·s⁻³ igual a V. Correcto.

Para [[potencia_mecanica]]: N·m por rad/s igual a W. Correcto.

## Interpretación física

El par de 3.46 N·m es el que el motor aplica al eje para vencer la carga. La fem contraelectromotriz de 69.1 V ocupa la mayor parte de la tensión de alimentación, lo que confirma que el motor opera en régimen estacionario con una corriente moderada.

Sin embargo, el rendimiento calculado es mayor que 1, lo que viola la conservación de la energía y señala que los datos del enunciado son inconsistentes: con esos parámetros, la potencia mecánica de 276.5 W supera la potencia eléctrica de 210 W. En un examen real, eso indicaría un error en los datos o en el enunciado. El rendimiento de un motor real siempre es estrictamente menor que 1. Para que el ejemplo sea consistente, la potencia eléctrica consumida debería ser al menos 310 W (correspondiente a un rendimiento del 89 %).

Este tipo de inconsistencia es precisamente una señal de detección del error de confundir la potencia mecánica calculada con la potencia eléctrica real, o de haber omitido alguna pérdida adicional en el balance.

# Ejemplo de aplicación real


## Contexto

Un motor de CC de uso educativo equipado en un laboratorio de bachillerato tiene [[numero_de_conductores_activos]] iguales a 250 conductores activos, [[longitud_activa_del_conductor]] de 0.05 m, [[campo_magnetico_del_estator]] de 0.8 T y [[r_a]] de 0.035 m. Opera a [[omega]] de 1200 rpm con [[sin_theta]] igual a 1. Se mide una corriente de armadura [[corriente_de_armadura]] de 3 A y una potencia eléctrica consumida [[potencia_electrica_consumida]] de 155 W.

## Estimación física

Convertir primero la velocidad: 1200 rpm multiplicado por 2π/60 da aproximadamente 125.7 rad/s.

La fuerza de Laplace total [[fuerza_de_laplace]] es 250 por 3 A por 0.05 m por 0.8 T por 1, que resulta 30 N.

El par motor [[tau_m]] es 30 N por 0.035 m, igual a 1.05 N·m.

La fem contraelectromotriz [[epsilon_c]] es 250 por 0.05 por 0.8 por 0.035 por 125.7, lo que da aproximadamente 43.9 V. Con una resistencia interna de 2.7 Ω, la caída resistiva interna es 3 A por 2.7 Ω igual a 8.1 V. La tensión de alimentación estimada es 43.9 V más 8.1 V, aproximadamente 52 V. Eso es coherente con una fuente de laboratorio de 0 a 60 V.

La potencia mecánica [[potencia_mecanica]] es 1.05 N·m por 125.7 rad/s, aproximadamente 132 W.

El rendimiento [[eta]] es 132 W dividido entre 155 W, igual a 0.85 o 85 %. Eso es un rendimiento razonable para un motor de laboratorio en su punto de operación nominal. El 15 % restante, unos 23 W, se disipa como calor en el bobinado y en las pérdidas mecánicas de los cojinetes.

## Interpretación

Este ejercicio muestra que incluso un motor educativo pequeño convierte la mayor parte de la energía eléctrica en trabajo mecánico útil, y que la fem contraelectromotriz ocupa la fracción dominante de la tensión de alimentación en régimen estacionario.