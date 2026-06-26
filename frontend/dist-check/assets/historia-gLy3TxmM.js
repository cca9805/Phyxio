const a=`# Historia de la Fricción en Fluidos: De la Empiria a Darcy\r
\r
La comprensión de las pérdidas de carga es una de las epopeyas técnicas más largas de la física, extendiéndose desde la ingeniería civil de la antigua Roma hasta los complejos modelos computacionales del siglo XXI.\r
\r
## ## Problema histórico\r
Durante siglos, el problema central fue la incapacidad de predecir cuánta agua llegaría al final de un acueducto o una tubería. Los romanos, maestros en la construcción de infraestructuras, sabían por experiencia que las tuberías largas necesitaban más pendiente, pero carecían de una fórmula matemática para cuantificar esa "resistencia". El problema se agudizó con la Revolución Industrial, cuando el diseño de máquinas de vapor y redes de suministro de gas requería una precisión que la simple intuición artesanal ya no podía proporcionar.\r
\r
## ## Dificultad conceptual previa\r
Antes del siglo XVIII, la física de fluidos estaba dominada por la visión de **Daniel Bernoulli**, quien en 1738 publicó su famosa ecuación. Sin embargo, el modelo de Bernoulli era para un "fluido ideal" sin fricción. La gran dificultad conceptual era entender por qué la presión caía a lo largo de un tubo horizontal si, según Bernoulli, la energía debería conservarse. Los científicos no lograban unificar la naturaleza de la presión con el concepto de fricción viscosa interna. Se pensaba que el roce era solo un efecto superficial en las paredes, sin comprender que era un fenómeno que afectaba a todo el volumen del flujo.\r
\r
## ## Qué cambió\r
El cambio fundamental ocurrió en el siglo XIX a través de una serie de experimentos rigurosos. **Henry Darcy**, un ingeniero francés encargado del suministro de agua de Dijon, realizó miles de pruebas en tuberías de diferentes materiales y diámetros. Casi al mismo tiempo, **Julius Weisbach** en Alemania refinó la forma matemática de la relación. El gran salto fue proponer que la pérdida de energía era proporcional al cuadrado de la velocidad [[v]] y que dependía de un factor de fricción [[f]] que capturaba la complejidad del roce.\r
\r
Más tarde, en 1939, **Cyril Colebrook** y **White** unificaron los datos experimentales en una única ecuación que explicaba cómo el flujo pasaba de ser dominado por la viscosidad (laminar) a ser dominado por la rugosidad de la tubería (turbulento), cerrando el círculo teórico que Darcy y Weisbach habían iniciado.\r
\r
## ## Impacto en la física\r
La consolidación de la ecuación de Darcy-Weisbach permitió el nacimiento de la **mecánica de fluidos aplicada**. Por primera vez, los ingenieros pudieron diseñar sistemas basados en principios físicos universales en lugar de tablas empíricas locales. Esto impulsó la construcción de oleoductos transcontinentales, redes de alcantarillado modernas y sistemas de refrigeración industrial, demostrando que la energía "perdida" no desaparecía, sino que cumplía estrictamente con el primer principio de la termodinámica, transformándose en calor.\r
\r
## ## Conexión con física moderna\r
Hoy en día, el legado de Darcy y Colebrook vive en la **Dinámica de Fluidos Computacional (CFD)**. Aunque usamos superordenadores para simular turbulencias complejas, los resultados siempre se validan contrastándolos con las pérdidas de carga predichas por estos modelos clásicos. En la frontera de la física, el estudio de las pérdidas de carga en microfluídica y nanofluídica (donde el fluido se mueve en canales del tamaño de un átomo) está desafiando los límites de las ecuaciones tradicionales, abriendo la puerta a una nueva comprensión de la materia en escalas ultra-pequeñas.`;export{a as default};
