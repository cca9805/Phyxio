const e=`\uFEFF# Ejemplo tipo examen

## Enunciado

Se desea elevar un bloque de hormigón de peso [[W]] con valor 2000 N utilizando un aparejo factorial con [[Np]] igual a 2 poleas móviles y 2 poleas fijas. El sistema se considera ideal (sin rozamiento). Determina el esfuerzo [[P]] necesario para mantener la carga en equilibrio y la longitud de cuerda [[sP]] que debe recoger el operador para elevar el bloque una altura [[sW]] de 1,5 m.

## Datos

- Peso de la carga ([[W]]): 2000 N
- Número de poleas móviles ([[Np]]): 2
- Desplazamiento de la carga ([[sW]]): 1,5 m
- Rendimiento del sistema ([[eta]]): 1,0 (ideal)

## Definición del sistema

El sistema es un aparejo factorial (polispasto paralelo) montado en un entorno gravitatorio estándar terrestre. La cuerda es inextensible y de masa despreciable. El proceso es cuasiestático: velocidad de elevación baja, sin aceleración apreciable.

## Modelo físico

El aparejo factorial distribuye el peso de la carga [[W]] entre [[n]] tramos de cuerda en paralelo. Cada tramo soporta una tensión igual a [[P]], que resulta de dividir [[W]] entre [[n]]. El número de tramos activos depende del número de poleas móviles [[Np]] según la relación del aparejo factorial. La restricción cinemática impone que el desplazamiento [[sP]] del extremo libre sea [[n]] veces el desplazamiento de la carga [[sW]].

## Justificación del modelo

Un aparejo factorial tiene la ventaja mecánica [[VM]] igual a [[n]], que a su vez es el doble de [[Np]], porque cada polea móvil añade dos tramos de cuerda que soportan la carga. Con dos poleas móviles, cuatro tramos reparten el peso de 2000 N: cada uno soporta 500 N. El modelo ideal es aplicable porque el enunciado especifica ausencia de rozamiento y velocidad baja. El rendimiento [[eta]] de valor 1,0 confirma la elección.

## Resolución simbólica

**Paso 1 — Número de tramos efectivos:**

{{f:aparejo_factorial}}

**Paso 2 — Esfuerzo del operador:**

{{f:ley_polea_ideal}}

**Paso 3 — Desplazamiento de la cuerda:**

{{f:relacion_desplazamientos}}

## Sustitución numérica

Con [[Np]] igual a 2 poleas móviles, el número de tramos activos n resulta 4.

Esfuerzo del operador: P resulta W dividido entre n, es decir, 2000 dividido entre 4, igual a 500 N.

Longitud de cuerda a recoger: [[sP]] resulta n por [[sW]], es decir, 4 por 1,5 m, igual a 6 m.

## Validación dimensional

La fuerza [[P]] tiene unidades de N y el cociente [[W]]/[[n]] es [N]/[1] = [N]. Correcto.

La longitud [[sP]] tiene unidades de m y el producto [[n]] por [[sW]] es [1]·[m] = [m]. Correcto.

Verificación energética: trabajo de entrada es 500 N por 6 m, igual a 3000 J; trabajo útil es 2000 N por 1,5 m, igual a 3000 J. Coinciden exactamente: la solución es energéticamente consistente.

## Interpretación física

El aparejo reduce el esfuerzo en el factor [[n]] de valor 4, que es exactamente la ventaja mecánica ideal [[VM]] del sistema. El operador aplica solo 500 N —un cuarto del peso— pero recorre 6 m de cuerda para elevar la carga solo 1,5 m. Este intercambio entre fuerza y desplazamiento es la firma característica de toda máquina simple: el trabajo total se conserva; la ventaja mecánica solo redistribuye el esfuerzo en el espacio.

El rendimiento [[eta]] de valor 1,0 indica que no hay disipación de energía. En sistemas reales, [[eta]] es menor que 1 y el esfuerzo necesario es mayor que [[W]] dividido entre [[n]].

# Ejemplo de aplicación real

## Contexto

En un taller mecánico se utiliza una polea móvil simple para extraer el motor de un vehículo. El técnico dispone de un polipasto con [[Np]] igual a 1 polea móvil. Debido al desgaste de los rodamientos y la suciedad acumulada, el sistema presenta un rendimiento [[eta]] de 0,75. El motor tiene un peso [[W]] de 1500 N. El taller necesita saber qué esfuerzo máximo debe aplicar el técnico y si un operador de complexión estándar (fuerza máxima sostenida ~800 N) puede realizar la operación con seguridad.

## Estimación física

Con una sola polea móvil, el número de tramos activos [[n]] es 2. La estimación de orden de magnitud del modelo ideal da un esfuerzo P de 1500 entre 2, igual a 750 N, dentro del rango del técnico.

Pero con [[eta]] de 0,75, el esfuerzo real aumenta según el modelo con rendimiento:

{{f:ley_polea_real}}

Sustituyendo: P real resulta 1500 entre (2 por 0,75), es decir, 1500 entre 1,5, igual a 1000 N.

La ventaja mecánica real [[VM]] combina [[n]] con [[eta]]: con n de valor 2 y [[eta]] de 0,75, [[VM]] resulta 1,5. El técnico debe aplicar 1000 N, lo que supera la fuerza sostenida de un operador estándar de ~800 N.

Recomendación cuantitativa: limpiar y relubricar los rodamientos para elevar [[eta]] a un valor de al menos 0,87, lo que reduciría el esfuerzo a como máximo 862 N, dentro del rango seguro. Alternativamente, usar un aparejo con [[n]] de valor 4 que, incluso con [[eta]] de 0,75, requeriría solo 500 N.

## Interpretación

El rozamiento eleva el esfuerzo real a 1000 N, un 33 % por encima del valor ideal de 750 N. Este exceso representa la energía disipada como calor en los ejes y la deformación del cable. La diferencia entre los dos valores no es simplemente numérica: tiene consecuencias ergonómicas (riesgo de lesión) y de seguridad (la carga puede soltarse si el técnico se fatiga).

El concepto clave es la ventaja mecánica real [[VM]], que combina [[n]] con [[eta]] y que integra tanto la geometría del aparejo como las pérdidas internas del sistema. Un aumento del 12 % en el rendimiento (de 0,75 a 0,87) reduce el esfuerzo en 13,8 %, lo que ilustra la sensibilidad del sistema a las condiciones de mantenimiento.
`;export{e as default};
