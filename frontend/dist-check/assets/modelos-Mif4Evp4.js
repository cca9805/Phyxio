const e=`## Modelo ideal
El marco del centro de masas (CM) es un marco de referencia inercial que se desplaza con la velocidad [[vcm]] del baricentro del sistema. En este modelo, el sistema de partículas se trata como una unidad cuyo momento lineal total [[ptot]] es nulo, permitiendo estudiar las interacciones internas (como colisiones o explosiones) sin la interferencia de la traslación global del conjunto.

## Hipótesis
- **Inercialidad**: Se asume que el centro de masas se mueve con velocidad constante [[vcm]] (ausencia de fuerzas externas netas).
- **Mecánica Clásica**: Las velocidades involucradas son mucho menores que la velocidad de la luz, permitiendo el uso de la suma galileana de velocidades:



{{f:velocity_transformation}}


- **Conservación de la Masa**: La masa total [[M]] del sistema permanece constante durante el intervalo de observación.
- **Partículas Puntuales**: Los cuerpos se modelan como puntos materiales con masa concentrada en su posición respectiva.

## Dominio de validez cuantitativo
El modelo es altamente preciso siempre que se cumpla la condición clásica:
La velocidad *v* debe ser mucho menor que la velocidad de la luz *c* (donde *c* es aproximadamente 300,000 km/s).
Para velocidades de partículas [[v1]], [[v2]] o del centro de masas [[vcm]] superiores a 30,000,000 m/s (aprox. el 10% de la velocidad de la luz), el error en la energía cinética interna [[K_cm]] calculado mediante:

{{f:konig_energy}}

empieza a ser significativo (superior al 1%) y se requiere el uso de transformaciones de Lorentz.

## Señales de fallo del modelo
- **Aceleración del CM**: Si se detecta que la trayectoria del centro de masas no es rectilínea y uniforme, existen fuerzas externas no compensadas; el marco CM dejaría de ser inercial.
- **Cambio en la masa total**: Si el sistema gana o pierde masa (flujo de materia), las relaciones:

{{f:M_sum}}

y

{{f:vcm_formula}}

deben recalcularse dinámicamente.
- **Efectos relativistas**: Si la suma de energías cinéticas individuales difiere notablemente de la predicción clásica en colisiones de alta energía.

## Modelo extendido o alternativo
Para velocidades cercanas a la de la luz, se debe transitar al **Marco CM Relativista**. Conviene cambiar a este modelo extendido cuando la velocidad de cualquier partícula o del centro de masas supera el umbral de 0.1c (aprox. 30,000 km/s), punto en el cual el error de las transformaciones de Galileo 

{{f:velocity_transformation}}

 se vuelve inaceptable para aplicaciones de precisión. En este régimen, la velocidad del centro de masas se define mediante el cuadrimomento y la masa total [[M]] deja de ser una simple suma aditiva.

## Comparación operativa
Mientras que el marco de laboratorio es útil para situar el experimento en el mundo real, el marco CM es operativo para el cálculo de estados finales de colisión. El uso de la masa reducida [[mu]] simplifica un problema de dos cuerpos a uno de un solo cuerpo virtual, reduciendo la carga computacional y conceptual en la resolución de problemas dinámicos complejos.
`;export{e as default};
