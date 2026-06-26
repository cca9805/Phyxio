# Hidrodinámica - Ejemplos Guiados y Resolución

# Ejemplo tipo examen
## Enunciado
Una manguera de bomberos con un diámetro interno de 8text{ cm} transporta agua con un caudal de 1200text{ litros por minuto}. Al final de la manguera se acopla una boquilla (pitón) que reduce el diámetro de salida a solo 2.5text{ cm}. Si la manguera descansa sobre el suelo y la presión manométrica en la sección ancha es de 5.5text{ bar}, calcula:
1.  La velocidad del agua en la manguera y en la salida de la boquilla.
2.  La presión manométrica justo antes de la salida (asumiendo flujo ideal sin pérdidas).
3.  La altura máxima que alcanzaría el chorro si se apunta verticalmente hacia arriba.

## Datos
- Diámetro manguera (D_1): 8text{ cm}  igual a  0.08text{ m}
- Diámetro boquilla (D_2): 2.5text{ cm}  igual a  0.025text{ m}
- Caudal [[Q]]: 1200text{ L/min}  igual a  frac{1.2text{ m}^3}{60text{ s}}  igual a  0.02text{ m}^3/text{s}
- Presión manométrica 1 (p_1): 5.5text{ bar}  igual a  5.5 cdot 10^5text{ Pa}
- Densidad agua [[rho]]: 1000text{ kg/m}^3
- Gravedad [[g]]: 9.81text{ m/s}^2

## Definición del sistema
El sistema es el volumen de control que comprende el tramo final de la manguera y la boquilla. Es un sistema abierto donde el agua entra por la sección 1 y sale por la sección 2. Las variables objetivo son las velocidades [[v]] y la presión final [[p]].

## Modelo físico
Se emplea el modelo de **Hidrodinámica Ideal**. Se asume flujo estacionario (partial v / partial t  igual a  0), fluido incompresible [[rho]] y flujo irrotacional. Utilizaremos la ecuación de continuidad

{{f:caudal_hidro}}

 para las velocidades [[v]] y el balance de energía de Bernoulli

{{f:head_hidro}}

para la presión [[p]] y la altura de energía [[H]].

## Justificación del modelo
Este modelo es **válido** **porque** la densidad [[rho]] del agua es constante y su compresibilidad se desprecia. **Se asume** un flujo ideal ya que, en la boquilla, el incremento de energía cinética domina sobre el rozamiento. **Se considera** que el número de Reynolds numero de Reynolds es suficientemente alto para tener un perfil de velocidad [[v]] uniforme. El balance de energía

{{f:head_hidro}}

es aplicable **porque** no hay bombas ni turbinas en este tramo, permitiendo una resolución exacta del intercambio entre presión [[p]] y velocidad.

## Resolución simbólica
1.  **Cálculo de áreas y velocidades**:
    Utilizamos la definición de área circular [[A]]

{{f:area_circular}}

 y la ecuación de continuidad

{{f:caudal_hidro}}

:
    
    A  igual a  frac{pi D^2}{4} implies v  igual a  frac{Q}{A}  igual a  frac{4Q}{pi D^2}
    
2.  **Cálculo de presión**:
    Aplicamos el balance de energía de Bernoulli

{{f:head_hidro}}

entre los puntos 1 (manguera) y 2 (salida):
    
    p_1 + frac{1}{2}[[rho]] v_1^2  igual a  p_2 + frac{1}{2}[[rho]] v_2^2
    
    Despejando la presión p_2:
3.  **Altura máxima**:
    Por conservación de energía

{{f:head_hidro}}

(Bernoulli entre salida y punto más alto):
    
    frac{1}{2}[[rho]] v_2^2  igual a  [[rho]] g z_{max} implies z_{max}  igual a  frac{v_2^2}{2g}
    

## Sustitución numérica
1.  **Velocidades**:
    - v_1  igual a  frac{0.02}{pi(0.04)^2} approx 3.98text{ m/s}
    - v_2  igual a  frac{0.02}{pi(0.0125)^2} approx 40.74text{ m/s}
2.  **Altura máxima**:
    - z_{max}  igual a  frac{40.74^2}{2 cdot 9.81} approx 84.6text{ metros}

## Validación dimensional
- La velocidad calculada queda expresada en metros por segundo, que es la unidad física esperada para esta magnitud.
- La altura máxima resultante queda en metros, por lo que la consistencia de unidades del procedimiento es correcta.

## Interpretación física
El resultado **indica** que una reducción moderada del diámetro produce un incremento masivo de la velocidad. Esto **significa** que la energía de presión se transforma casi totalmente en energía cinética. Es **coherente** con la potencia de un equipo de incendios y **físicamente** razonable para el caudal [[Q]] manejado.

# Ejemplo de aplicación real
## Contexto
**Suministro de agua en una torre de presión urbana**. Las ciudades utilizan torres de agua elevadas para mantener la presión en la red sin depender constantemente de bombas eléctricas. Consideremos una torre donde el nivel del agua está a 45text{ metros} sobre el suelo de un barrio residencial.

## Estimación física
Para realizar una **estimación** del **orden de magnitud** de la presión, utilizamos la ecuación de la **Altura de Energía [[H]]**:
{{f:head_hidro}}
En la parte superior de la torre (punto 1), la velocidad es casi nula y la presión es atmosférica (0 manométrica). La energía total es puramente potencial: H_1  igual a  z_1  igual a  45text{ m}.
En la tubería de entrada de la casa (punto 2), a nivel del suelo (z_2  igual a  0), la energía potencial se ha convertido en energía de presión y cinética.
Si no hay consumo (velocidad cero), la presión estática sería:

p  igual a  [[rho]] g z  igual a  1000 cdot 9.81 cdot 45 approx 4.4 cdot 10^5text{ Pa}

Este valor de 4.4text{ bar} es una **aproximación** cuantitativa robusta que permite asegurar el suministro a edificios de hasta 10 plantas, validando el diseño hidráulico basado en la cota de la torre.

## Interpretación
La torre de agua funciona como una batería de energía potencial. La hidrodinámica nos enseña que el diseño de la red debe equilibrar el diámetro de las tuberías: si el diámetro es muy pequeño, al abrir los grifos la velocidad [[v]] aumentará tanto que las pérdidas por fricción reducirán la presión [[p]] disponible de forma drástica.
