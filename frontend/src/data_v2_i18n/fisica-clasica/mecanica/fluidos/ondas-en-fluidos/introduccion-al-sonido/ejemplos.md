# Ejemplo tipo examen: Análisis de un Sonar Submarino

## Enunciado
Un buque oceanográfico de vanguardia utiliza un sistema SONAR para cartografiar el lecho marino en una región del Atlántico Norte. El sistema emite un pulso sonoro periódico con una frecuencia [[f]] de 1200 Hz. En el punto de emisión, las condiciones del agua marina han sido medidas con precisión, arrojando una densidad [[rho]] de 1028 kg/m^3 y un módulo de compresibilidad adiabático [[B]] de 2.31 x 10^9 Pa.

Se solicita al equipo de ingeniería acústica realizar el siguiente análisis técnico:
1.  **Cálculo de la velocidad de fase**: Determinar la rapidez [[c]] con la que el pulso se propaga a través del agua en esas condiciones específicas.
2.  **Análisis de escala espacial**: Calcular la longitud de onda [[lambda]] de la perturbación bajo el agua.
3.  **Estudio comparativo**: Si el buque emergiera y emitiera el mismo tono de 1200 Hz en el aire ([[[[c]]]] del aire ~ 343 m/s), determine la nueva longitud de onda y proporcione una justificación física profunda sobre por qué el sonido cambia sus dimensiones espaciales al cambiar de medio, manteniendo su frecuencia constante.

## Datos
- Frecuencia de la fuente [[f]]: 1200 Hz.
- Densidad del medio líquido [[rho]]: 1028 kg/m^3.
- Módulo de compresibilidad [[B]]: 2.31 x 10^9 Pa.
- Velocidad de referencia en aire: [[[[c]]]] del aire = 343 m/s.

## Definición del sistema
El sistema físico consiste en la propagación de una onda mecánica longitudinal en un fluido compresible (agua salada). Se asume que el agua se comporta como un medio lineal, homogéneo e isótropo en el rango de presiones emitidas por el sonar. El foco emisor se considera puntual para simplificar el análisis de la onda viajera.

## Modelo físico
Para resolver este problema, emplearemos dos modelos fundamentales de la acústica física:
1.  **Modelo Dinámico de Newton-Laplace**: Utilizado para determinar la velocidad de propagación a partir de las propiedades mecánicas intrínsecas del fluido (elasticidad e inercia).
2.  **Modelo Cinemático de Ondas Periódicas**: Utilizado para relacionar la velocidad de fase con los parámetros temporales (frecuencia) y espaciales (longitud de onda).

## Justificación del modelo
Elegimos la fórmula

{{f:sonido_compresible}}

 porque disponemos de los datos de rigidez volumétrica y densidad, que son los determinantes físicos de la rapidez de una onda de presión. El uso de la relación

{{f:onda_basica}}

se justifica por la naturaleza periódica y armónica de la señal emitida por el transductor del sonar. Se ignora la atenuación viscosa dado que se solicita un análisis de fase inicial.

## Resolución simbólica
1.  **Velocidad de propagación**:
    La velocidad de propagacion se obtiene con la relacion de Newton-Laplace ya seleccionada en el modelo.

2.  **Longitud de onda en el medio**:
    La longitud de onda se obtiene despejando [[lambda]] en la relacion basica de onda.

3.  **Relación de longitudes de onda entre medios (1=agua, 2=aire)**:
    Para la misma frecuencia de fuente, la razon entre longitudes de onda en dos medios coincide con la razon entre sus velocidades sonoras.

## Sustitución numérica
1.  **Velocidad en el agua**:
    Sustituyendo [[B]] = 2.31 por 10^9 Pa y [[rho]] = 1028 kg/m^3 se obtiene [[c]] = 1499.03 m/s en agua marina.

2.  **Longitud de onda en el agua**:
    Con [[f]] = 1200 Hz en agua, resulta [[lambda]] = 1.249 m.

3.  **Longitud de onda en el aire**:
    Con la misma frecuencia en aire, resulta [[lambda]] = 0.286 m.

## Validación dimensional
Dimensionalmente, el pascal dividido por densidad se reduce a metros cuadrados por segundo cuadrado antes de tomar la raiz, por lo que el resultado tiene unidades de velocidad.
La unidad resultante es metros por segundo, lo cual es coherente con una velocidad. Para la longitud de onda: [m/s] / [1/s] = m, coherente con una longitud.

## Interpretación física
El análisis revela que el sonido viaja aproximadamente 4.37 veces más rápido en el agua que en el aire. Esta diferencia es causada por el hecho de que el agua, aunque es unas 800 veces más densa que el aire, es cerca de 15,000 veces más difícil de comprimir. La "rigidez" del agua gana a su "pesadez", resultando en una transmisión de información mecánica mucho más eficiente. Como consecuencia directa de que la frecuencia [[f]] se mantiene constante (ya que depende solo de la fuente), la longitud de onda [[lambda]] debe estirarse en el agua para compensar la mayor velocidad, resultando en una perturbación físicamente más "larga" en el espacio.

# Ejemplo de aplicación real: Resolución en Ecografía Médica

## Contexto
En el diagnóstico por imagen mediante ultrasonidos, la capacidad de distinguir dos estructuras pequeñas y cercanas (resolución espacial) depende críticamente de la longitud de onda [[lambda]]. Los médicos necesitan conocer la resolución límite para detectar anomalías submilimétricas en órganos blandos.

## Estimación física
Consideremos un tejido hepático típico con un módulo de compresibilidad [[B]] ~ 2.25 x 10^9 Pa y una densidad [[rho]] ~ 1050 kg/m^3. El ecógrafo opera a una frecuencia de ultrasonido de 5 MHz (5 x 10^6 Hz).

1.  **Velocidad en el tejido**: Aplicando la relación dinámica, obtenemos una velocidad aproximada de 1464 m/s. Este valor es fundamental ya que el software del equipo lo usa para convertir el tiempo de llegada del eco en una posición espacial en la pantalla.
2.  **Cálculo de la resolución**: La resolución máxima teórica es del orden de una longitud de onda. La relacion de onda da [[lambda]] = 0.29 mm para esa frecuencia.

## Interpretación
Este cálculo **indica** que el médico puede detectar quistes o lesiones de aproximadamente 0.3 mm.
 Si se intentara realizar la misma prueba con un sonido audible de 1000 Hz, la longitud de onda sería de 1.46 metros, lo que haría imposible ver cualquier estructura interna del cuerpo humano. Por tanto, la alta frecuencia es la que **garantiza** la precisión diagnóstica. Sin embargo, frecuencias más altas tienen menor penetración debido a la absorción, por lo que el físico médico debe elegir el balance óptimo entre resolución y profundidad de estudio. Este balance es el pilar de la seguridad y eficacia en la radiología moderna.