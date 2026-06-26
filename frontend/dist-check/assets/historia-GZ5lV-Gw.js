const e=`# Historia del Flujo en Tuberías\r
\r
## Problema histórico\r
Desde la antigüedad, la humanidad ha necesitado transportar agua. Los romanos construyeron acueductos masivos, pero su comprensión del flujo era puramente geométrica y basada en la pendiente. El gran problema histórico surgió con la llegada de la Revolución Industrial y las máquinas de vapor: se necesitaba mover grandes volúmenes de agua y combustibles a través de tuberías cerradas y bajo presión controlada. Los ingenieros de la época notaron que la presión caía mucho más de lo que predecía la hidrostática simple, pero no tenían una fórmula para cuantificar cuánta energía se perdía por el camino.\r
\r
## Dificultad conceptual previa\r
Antes del siglo XIX, se creía que el agua se deslizaba por las tuberías sin ninguna resistencia interna, o que la resistencia era independiente de la velocidad. No se entendía el concepto de **viscosidad** como una fuerza interna de fricción. Incluso figuras como Daniel Bernoulli se centraron en fluidos ideales donde la energía se conservaba perfectamente. La mayor dificultad era reconciliar la elegancia de las matemáticas teóricas con la realidad "sucia" y rugosa de las tuberías de hierro y plomo de las primeras redes industriales.\r
\r
## Qué cambió\r
El cambio fundamental llegó de la mano de **Henri Darcy** (ingeniero francés que diseñó el sistema de agua de Dijon) y **Julius Weisbach**. Darcy realizó experimentos meticulosos midiendo la caída de presión en diferentes tipos de tubos, demostrando que la pérdida de energía era proporcional al cuadrado de la velocidad y inversamente proporcional al diámetro. Casi simultáneamente, Weisbach propuso la forma matemática de la ecuación que hoy lleva sus nombres. Más tarde, Osborne Reynolds (1883) aportaría la pieza final del rompecabezas al identificar el número de Reynolds, permitiendo distinguir entre el flujo ordenado y el caótico, lo que finalmente permitió calcular el factor de fricción [[f]] de manera científica.\r
\r
## Impacto en la física\r
Este avance transformó la hidráulica de un arte empírico basado en el ensayo y error a una ciencia predictiva. Permitió el nacimiento de la ingeniería de procesos y la termodinámica aplicada a sistemas abiertos. La física aprendió que las fronteras (las paredes del tubo) imponen condiciones críticas al movimiento de la materia, dando origen al estudio de la **capa límite**, un concepto que luego sería fundamental para la aerodinámica y el vuelo supersónico.\r
\r
## Conexión con física moderna\r
Hoy en día, los principios de Darcy-Weisbach se aplican en escalas que los pioneros nunca imaginaron. Desde la refrigeración de los imanes superconductores del Gran Colisionador de Hadrones (LHC) hasta el diseño de microchips refrigerados por líquido, la gestión de la caída de presión sigue siendo un reto crítico. Además, la comprensión de la turbulencia en tuberías es uno de los "grandes problemas no resueltos" de la física clásica que se sigue estudiando mediante supercomputación y teoría del caos para optimizar el transporte de energía a nivel global.`;export{e as default};
