# Historia — Ciclo Diesel

## Problema histórico

A finales del siglo XIX, los motores de combustión interna basados en el ciclo Otto dominaban la industria, pero su rendimiento estaba limitado por la detonación prematura del combustible, que impedía usar relaciones de compresión superiores a 10 o 12. La pregunta central era si existía un modo de operación que permitiera comprimir mucho más el gas de trabajo sin riesgo de autoencendido destructivo, aprovechando así mejor la energía del combustible.

## Dificultad conceptual previa

La termodinámica de la época, consolidada por Carnot, Clausius y Thomson, establecía que mayor compresión significaba mayor rendimiento. Sin embargo, la práctica mostraba que los motores Otto no podían aumentar su relación de compresión sin provocar detonación. El problema era que en el ciclo Otto el combustible se mezcla con el aire antes de la compresión, por lo que la mezcla puede autoencenderse prematuramente a alta presión y temperatura.

Rudolf Diesel, ingeniero alemán formado en la Technische Hochschule de Múnich bajo la influencia de Carl von Linde, propuso en 1893 una solución radical: comprimir solo aire puro hasta alcanzar temperaturas superiores al punto de autoignición del combustible, e inyectar entonces el combustible directamente en el aire caliente comprimido. Al no existir mezcla premezclada, no había riesgo de detonación, y la relación de compresión podía elevarse significativamente.

## Qué cambió

Diesel patentó su concepto en 1893 y construyó el primer prototipo funcional en 1897 en la fábrica Maschinenfabrik Augsburg-Nürnberg (MAN). El primer motor alcanzó un rendimiento del 26 %, frente al 15 a 20 % típico de los mejores motores Otto de la época. Esta mejora demostró que el principio de encendido por compresión era viable y termodinámicamente superior para aplicaciones donde la eficiencia era prioritaria.

El ciclo termodinámico idealizado que describe este funcionamiento lleva su nombre: compresión adiabática del aire, adición de calor a presión constante durante la inyección del combustible, expansión adiabática y rechazo de calor a volumen constante. La diferencia clave respecto al Otto (calor a volumen constante) es la adición de calor a presión constante, que introduce la relación de corte como parámetro adicional.

## Impacto en la física

El motor Diesel demostró experimentalmente que las predicciones de la termodinámica clásica sobre el efecto de la relación de compresión en el rendimiento eran correctas. La posibilidad de operar con relaciones de compresión de 14 a 25, mucho mayores que las del Otto, confirmó que el rendimiento térmico es una función creciente de la compresión, limitada únicamente por las propiedades mecánicas de los materiales y la cinética de la combustión.

El análisis del ciclo Diesel también impulsó el desarrollo de la termodinámica de procesos isobáricos en sistemas cerrados y la comprensión de la entropía generada durante la adición de calor no isotérmica, conectando directamente con la formulación de la segunda ley y el teorema de Gouy-Stodola.

## Conexión con física moderna

En la ingeniería contemporánea, los motores Diesel son la tecnología dominante para transporte pesado, generación eléctrica de respaldo y propulsión naval, con rendimientos reales del 40 al 55 %. La modelización computacional de ciclos Diesel reales utiliza dinámica de fluidos computacional (CFD) acoplada con cinética química detallada de la combustión, integrando las ecuaciones de Navier-Stokes con modelos de turbulencia y spray. El concepto original de Diesel de separar la compresión de la inyección sigue siendo el principio fundamental de estos motores, y el ciclo idealizado que lleva su nombre permanece como la referencia termodinámica para evaluar el rendimiento de cualquier motor de encendido por compresión.
