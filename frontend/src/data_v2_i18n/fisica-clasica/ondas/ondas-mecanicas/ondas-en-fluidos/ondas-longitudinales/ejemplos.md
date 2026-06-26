# Ejemplo tipo examen


## Enunciado

Un submarino emite un pulso de sónar con una [[frecuencia]] de 50 kHz en agua de mar. El módulo de compresibilidad volumétrica del agua de mar en esas condiciones es 2.34 GPa y la densidad es 1025 kg/m³. Determinar la rapidez de propagación de la onda acústica, la longitud de onda del pulso y la impedancia acústica del agua de mar.

## Datos

- Frecuencia del pulso: 50 kHz, equivalente a 50 000 Hz
- Módulo de compresibilidad volumétrica: 2.34 GPa, equivalente a 2.34×10⁹ Pa
- Densidad del agua de mar: 1025 kg/m³

## Definición del sistema

El sistema es una porción homogénea e isótropa de agua de mar en reposo a través de la cual se propaga una perturbación de presión longitudinal generada por el transductor del sónar. Se consideran condiciones de compresión adiabática y amplitud pequeña frente a la presión hidrostática.

## Modelo físico

Se aplica el modelo de onda longitudinal lineal en un fluido ideal. Las magnitudes nucleares del leaf involucradas son [[rapidez_de_propagacion]], [[modulo_de_compresibilidad_volumetrica]], [[rho]], [[lambda]], [[frecuencia]] y [[impedancia_acustica]]. La rapidez se obtiene del balance entre restauración elástica y inercia, la escala espacial resulta del cociente entre rapidez y [[frecuencia]], y la impedancia del producto de densidad y rapidez.

## Justificación del modelo

El modelo lineal es válido porque la amplitud de presión del sónar es del orden de decenas de kilopascales, muy inferior al 1 % de la presión ambiental subacuática (que a profundidades operativas supera los 100 kPa). La [[frecuencia]] de 50 kHz produce longitudes de onda de centímetros, muy superiores al recorrido libre medio molecular del agua, satisfaciendo la condición de medio continuo. El modelo dejaría de ser válido si se trabajara con pulsos de altísima potencia o a frecuencias del orden de gigahercios donde la dispersión viscoelástica se vuelve relevante.

## Resolución simbólica

Primero, la rapidez de propagación se obtiene de la relación fundamental del leaf:

{{f:velocidad_longitudinal_fluidos}}

A partir de la rapidez calculada, la escala espacial de la onda se determina mediante:

{{f:longitud_onda_longitudinal}}

Finalmente, la impedancia acústica del medio se obtiene por:

{{f:impedancia_acustica}}

## Sustitución numérica

Para la rapidez, se toma la raíz cuadrada del cociente entre 2.34×10⁹ Pa y 1025 kg/m³. Ese cociente da aproximadamente 2 282 926.8 m²/s². Extrayendo la raíz cuadrada se obtiene aproximadamente 1511.3 m/s. Por tanto [[rapidez_de_propagacion]] ≈ 1511 m/s.

Para la longitud de onda, dividir 1511 m/s entre 50 000 Hz da aproximadamente 0.03022 m. Por tanto [[lambda]] ≈ 3.02 cm.

Para la impedancia acústica, multiplicar 1025 kg/m³ por 1511 m/s da aproximadamente 1 548 775 kg/(m²·s). Por tanto [[impedancia_acustica]] ≈ 1.549×10⁶ kg/(m²·s).

## Validación dimensional

- Rapidez: `[M L⁻¹ T⁻²]` dividido entre `[M L⁻³]` da `[L² T⁻²]`; la raíz cuadrada produce `[L T⁻¹]` ✓
- Longitud de onda: `[L T⁻¹]` dividido entre `[T⁻¹]` da `[L]` ✓
- Impedancia acústica: `[M L⁻³]` multiplicado por `[L T⁻¹]` da `[M L⁻² T⁻¹]` ✓

## Interpretación física

El resultado de [[rapidez_de_propagacion]] ≈ 1511 m/s es coherente con los valores de referencia del agua de mar, que oscilan entre 1450 y 1550 m/s según temperatura, salinidad y profundidad. Esto confirma que el módulo adiabático y la densidad utilizados son consistentes con un entorno marino típico. La rapidez en agua de mar es unas 4.4 veces mayor que en aire, lo que refleja el hecho de que el agua, pese a ser mucho más densa, posee un módulo de compresibilidad volumétrica enormemente superior al del aire.

La longitud de onda de 3.02 cm tiene implicaciones directas para la resolución del sónar. Objetos con dimensiones comparables o superiores a este valor producen ecos detectables, mientras que detalles muy inferiores a [[lambda]] pasan desapercibidos. Para mejorar la resolución espacial, el operador podría aumentar [[frecuencia]], lo que reduciría [[lambda]] proporcionalmente, pero a costa de una mayor atenuación por absorción viscosa.

La impedancia acústica de 1.549×10⁶ kg/(m²·s) es unas 3700 veces mayor que la del aire (aproximadamente 415 kg/(m²·s)). Esta diferencia explica por qué la interfaz aire-agua refleja casi toda la energía acústica: el coeficiente de reflexión en intensidad supera el 99.9 %. Si el módulo de compresibilidad fuera menor (por ejemplo, en agua dulce a baja temperatura con [[modulo_de_compresibilidad_volumetrica]] ≈ 2.07 GPa), la rapidez y la impedancia disminuirían, alterando la resolución del sónar y los coeficientes de reflexión en las fronteras con otros materiales como el casco del submarino.

# Ejemplo de aplicación real


## Contexto

En ecografía médica, un transductor emite pulsos ultrasónicos de [[frecuencia]] típica entre 2 MHz y 18 MHz hacia el interior del cuerpo humano. La rapidez del sonido en tejido blando es aproximadamente 1540 m/s, valor cercano al del agua por la composición mayoritariamente acuosa del organismo. Cada vez que la onda encuentra una frontera entre tejidos con distinta [[impedancia_acustica]] (músculo-grasa, músculo-hueso, tejido-aire), parte de la energía se refleja y el transductor recibe el eco.

## Estimación física

Con una [[frecuencia]] de 5 MHz y una rapidez de 1540 m/s en tejido blando, la longitud de onda resulta del cociente entre ambas magnitudes: dividir 1540 m/s entre 5 000 000 Hz da aproximadamente 0.000308 m, es decir, unos 0.31 mm. Esta escala determina la resolución axial del equipo, que es del orden de una a dos veces [[lambda]], es decir, entre 0.3 mm y 0.6 mm.

La impedancia del tejido blando ronda 1.63×10⁶ kg/(m²·s), mientras que la del hueso alcanza unos 7.8×10⁶ kg/(m²·s). La gran diferencia de [[impedancia_acustica]] en la frontera tejido-hueso provoca una reflexión intensa que genera sombras acústicas detrás de estructuras óseas. En cambio, la frontera entre tejidos blandos con impedancias similares produce ecos débiles que requieren equipos con alta sensibilidad y procesamiento de señal avanzado.

## Interpretación

El diseño del equipo de ecografía es un compromiso directo entre resolución y penetración. Aumentar [[frecuencia]] reduce [[lambda]] y mejora la resolución espacial, pero la atenuación del tejido crece con la [[frecuencia]] (aproximadamente un decibelio por centímetro por cada megahercio adicional), limitando la profundidad explorable. Para órganos superficiales como la tiroides se usan transductores de alta [[frecuencia]] (12 a 18 MHz), mientras que para estructuras profundas como el hígado o el feto se emplean frecuencias menores (2 a 5 MHz). La impedancia acústica del gel de acoplamiento se diseña para igualar la del tejido, minimizando la reflexión en la superficie cutánea y maximizando la energía que penetra al cuerpo.