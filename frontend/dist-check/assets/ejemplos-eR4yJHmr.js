const e=`# Ejemplo tipo examen

## Enunciado

En un experimento de doble rendija de Young, se ilumina con un láser de helio-neón cuya longitud de onda es [[lambda]] igual a 632.8 nm. La separación entre las dos rendijas es [[d]] igual a 0.25 mm y la distancia desde las rendijas hasta la pantalla de observación es [[L]] igual a 1.80 m. Calcular la posición del tercer máximo lateral y la separación entre franjas consecutivas.

## Datos

- [[lambda]] es 632.8 nm igual a 6.328 × 10⁻⁷ m
- [[d]] es 0.25 mm igual a 2.5 × 10⁻⁴ m
- [[L]] es 1.80 m
- Orden solicitado: [[m]] igual a 3

## Definición del sistema

El sistema consiste en dos rendijas estrechas separadas que actúan como fuentes coherentes secundarias. La luz de ambas rendijas se superpone en la pantalla, creando un patrón de interferencia con franjas alternadas de máxima y mínima intensidad. La variable de salida es la posición lineal [[y_m]] de los máximos sobre la pantalla.

## Modelo físico

Se aplica el modelo de interferencia de doble rendija en aproximación de ángulos pequeños. La posición de cada máximo depende linealmente del orden [[m]], de la longitud de onda [[lambda]], de la distancia a la pantalla [[L]] y de la separación entre rendijas [[d]]. La separación entre franjas consecutivas es constante.

## Justificación del modelo

El láser proporciona luz altamente coherente y monocromática. La separación entre rendijas es mucho mayor que la longitud de onda, permitiendo observar múltiples franjas. La distancia a la pantalla es suficientemente grande para que la aproximación de ángulos pequeños sea válida para los primeros órdenes. El ángulo del tercer máximo será aproximadamente 0.008 radianes, muy inferior al límite de 0.1 radianes de la aproximación.

## Resolución simbólica

El punto de partida es la diferencia de camino óptico [[delta]] entre los dos haces:

{{f:diferencia_camino}}

Para que exista un máximo de intensidad, la diferencia de camino debe satisfacer la condición de interferencia constructiva:

{{f:condicion_maximos}}

Para los mínimos de intensidad, la diferencia de camino debe satisfacer la condición de interferencia destructiva:

{{f:condicion_minimos}}

Combinando la condición de máximos con la aproximación de ángulos pequeños, la posición del máximo de orden [[m]] en la pantalla es:

{{f:posicion_franja}}

La separación entre franjas consecutivas es:

{{f:separacion_fringes}}

## Sustitución numérica

La separación entre franjas es [[Delta_y]] igual a 6.328 × 10⁻⁷ m multiplicado por 1.80 m dividido por 2.5 × 10⁻⁴ m igual a 4.56 × 10⁻³ m, aproximadamente 4.6 mm.

La posición del tercer máximo es [[y_m]] para orden 3, igual a 3 × 4.56 × 10⁻³ m igual a 1.37 × 10⁻² m, aproximadamente 13.7 mm.

## Validación dimensional

Para [[y_m]]: adimensional por m por m dividido por m da m. Correcto.

Para [[Delta_y]]: m por m dividido por m da m. Correcto.

Verificación de orden de magnitud: 13.7 mm a 1.80 m de distancia implica un ángulo de aproximadamente 0.008 radianes, validando la aproximación de ángulos pequeños.

## Interpretación física

El tercer máximo se encuentra a 13.7 mm del centro del patrón, lo que significa que la diferencia de camino óptico [[delta]] en ese punto vale exactamente 3 × [[lambda]], es decir, [[delta]] igual a 1898.4 nm. La condición de máximo se cumple porque [[delta]] es un múltiplo entero de [[lambda]]. La separación entre franjas consecutivas de 4.6 mm es típica de un experimento con láser visible y rendijas de escala submilimétrica. Duplicar la separación entre rendijas reduciría la separación entre franjas a la mitad. Cambiar a un láser azul de 450 nm acercaría las franjas proporcionalmente. El primer mínimo de intensidad se encuentra entre los órdenes cero y uno, donde [[delta]] vale 0.5 × [[lambda]], produciendo anulación completa.

# Ejemplo de aplicación real

## Contexto

Un interferómetro de Michelson se utiliza para medir desplazamientos en un sistema de posicionamiento nanométrico. El dispositivo divide un haz láser de helio-neón con [[lambda]] igual a 632.8 nm en dos brazos perpendiculares. Un espejo fijo refleja un haz de referencia y un espejo móvil refleja el haz de medida. Al recombinarse, los dos haces interfieren produciendo un patrón cuya intensidad depende de la diferencia de camino óptico entre ambos brazos.

## Estimación física

Cuando el espejo móvil se desplaza una distancia dada, el cambio en la diferencia de camino [[delta]] es el doble del desplazamiento porque la luz viaja ida y vuelta. Cada vez que el espejo se mueve [[lambda]]/2, el patrón de interferencia completa un ciclo completo. Para [[lambda]] igual a 632.8 nm, el desplazamiento mínimo detectable por conteo de franjas es [[lambda]]/2 igual a 316.4 nm.

Mediante técnicas de interpolación electrónica de franja, se pueden detectar cambios de una centésima de franja, alcanzando resoluciones del orden de 3 nm. Para un desplazamiento de 1 mm, el número de franjas contadas es 2 × 10⁻³ m dividido por 632.8 × 10⁻⁹ m, aproximadamente 3161 franjas.

## Interpretación

La precisión del interferómetro proviene de convertir un desplazamiento mecánico en un cambio de fase luminosa, detectable como variación de intensidad. La longitud de onda del láser define la escala de medición fundamental. La interferencia permite detectar cambios de fracción de longitud de onda, proporcionando resolución nanométrica. El límite práctico lo establecen las fluctuaciones térmicas del montaje y las vibraciones mecánicas, no la física de la interferencia. Este principio es el mismo que utilizan los detectores de ondas gravitacionales LIGO, donde brazos de 4 km permiten detectar desplazamientos de 10⁻¹⁸ m.
`;export{e as default};
