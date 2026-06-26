const e=`# Introducción al Sonido - Perspectiva Histórica\r
\r
## Problema histórico\r
El gran desafío histórico de la acústica fue determinar qué dictaba la velocidad del sonido. Si bien desde la antigüedad se sabía que el sonido tardaba tiempo en viajar (observando un martillo a lo lejos), no fue hasta el siglo XVII cuando se intentó una medición rigurosa. Isaac Newton, en su obra *Principia*, intentó derivar teóricamente la velocidad del sonido en el aire. Usando un modelo mecánico, propuso que la velocidad dependía de la presión y la densidad del aire. Sin embargo, su resultado fue de aproximadamente 298 m/s, un 15% más bajo que los valores experimentales medidos por la Academia de Ciencias de París.\r
\r
## Dificultad conceptual previa\r
La dificultad residía en entender la termodinámica del proceso. Newton asumió que las compresiones y rarefacciones del aire ocurrían de forma **isoterma** (a temperatura constante). Se pensaba que el aire intercambiaba calor con su entorno tan rápido que la temperatura no cambiaba durante el paso de la onda. Bajo esta hipótesis, el módulo elástico del aire era simplemente igual a su presión ([[B]] = P). Esta discrepancia entre la teoría de Newton y la realidad fue uno de los grandes misterios de la física durante más de un siglo.\r
\r
## Qué cambió\r
A principios del siglo XIX, Pierre-Simon Laplace resolvió el misterio. Laplace se dio cuenta de que el sonido se propaga tan rápidamente que el proceso es en realidad **adiabático**: el calor generado por la compresión no tiene tiempo de disiparse. Esto significa que el aire se calienta ligeramente al comprimirse y se enfría al expandirse. Este cambio térmico aumenta la "rigidez" efectiva del aire, elevando el módulo elástico en un factor gamma (el coeficiente adiabático). Al introducir este factor en la fórmula\r
\r
{{f:sonido_compresible}}\r
\r
, el resultado teórico coincidió perfectamente con los 340 m/s observados experimentalmente.\r
\r
## Impacto en la física\r
Este descubrimiento fue un pilar fundamental para la naciente termodinámica. Demostró que las leyes del calor y las leyes de la mecánica estaban profundamente entrelazadas. La corrección de Laplace validó la naturaleza del aire como un fluido elástico y sentó las bases para el estudio de las ondas de choque y la dinámica de gases. Además, permitió usar el sonido como un termómetro indirecto: midiendo la velocidad del sonido, los científicos podían determinar la temperatura del medio o la composición química del gas.\r
\r
## Conexión con física moderna\r
Hoy en día, la "fórmula de Laplace" sigue siendo la base para la aerodinámica supersónica y la acústica atmosférica. En la física moderna, el estudio del sonido se ha extendido a los **fonones** en la mecánica cuántica, donde las vibraciones de una red cristalina se tratan como partículas de sonido. La precisión que Laplace aportó a la relación\r
\r
{{f:onda_basica}}\r
\r
permitió el desarrollo del radar, el sonar y la exploración sísmica de la Tierra, demostrando que un pequeño ajuste térmico podía abrir las puertas a la exploración de las profundidades marinas y terrestres.`;export{e as default};
