const e=`# Historia y evolucion del concepto de ondas estacionarias\r
\r
## Problema histórico\r
\r
Desde la antiguedad, los musicos y filosofos observaban que cuerdas tensadas producian sonidos distintos segun su longitud, tension y grosor. Pitagoras, en el siglo VI a.C., establecio relaciones numericas entre longitudes de cuerdas y alturas de sonidos. Sin embargo, la pregunta sin respuesta durante siglos fue mas profunda: por que una cuerda solo puede vibrar en ciertos patrones y no en cualquier forma arbitraria? Por que las frecuencias permitidas forman una serie discreta de multiplos enteros y no un continuo?\r
\r
Esta pregunta no era solo musical: era la primera manifestacion observada de cuantizacion en un sistema fisico. La incapacidad de explicar formalmente este fenomeno limitaba tanto la acustica como la mecanica, y no seria resuelta hasta el siglo XVIII con el desarrollo del calculo.\r
\r
## Dificultad conceptual previa\r
\r
El obstaculo principal era la ausencia de un formalismo matematico para las oscilaciones continuas. Antes de d'Alembert, no existia el concepto de ecuacion de ondas ni la nocion de funcion de onda que debe satisfacer condiciones de contorno. Los filosofos naturales pensaban en terminos de masas discretas y fuerzas, no de campos continuos con restricciones en sus fronteras.\r
\r
Tampoco existia el concepto de superposicion de modos: se creia que una cuerda podia vibrar en un unico patron a la vez. Daniel Bernoulli propuso en 1753 que la vibracion general era superposicion de modos normales, pero esta idea fue rechazada por d'Alembert y Euler, quienes no aceptaban que funciones arbitrarias pudieran representarse como sumas infinitas de sinusoides. La cuestion solo se resolvio definitivamente con Fourier en el siglo XIX.\r
\r
## Qué cambió\r
\r
Fue Jean le Rond d'Alembert quien, en 1746, dedujo la ecuacion de ondas unidimensional y demostro que sus soluciones generales son superposiciones de funciones que viajan en sentidos opuestos. Cuando se imponen las condiciones de contorno de nodos en los extremos, la superposicion de ondas viajeras produce automaticamente los patrones estacionarios observados, con frecuencias que son exactamente multiplos enteros de la fundamental.\r
\r
Ernst Chladni en 1787 proporciono la evidencia experimental mas convincente: esparciendo arena sobre placas vibrantes, mostro visualmente los nodos y vientres de modos estacionarios en dos dimensiones. Sus figuras de arena transformaron los modos estacionarios de abstracciones matematicas en fenomenos visibles y reproducibles. Joseph Fourier completo el marco teorico demostrando que cualquier funcion periodica puede expresarse como suma de sinusoides, justificando formalmente la idea de Bernoulli.\r
\r
## Impacto en la física\r
\r
La comprension de las ondas estacionarias transformo la acustica de arte empirico en ciencia matematica. Lord Rayleigh sistematizo el analisis en su tratado sobre el sonido (1877-1878), introduciendo correcciones para cuerdas reales con rigidez e identificando la inarmonicidad como fenomeno cuantificable. Esto explico por que los pianos requieren afinacion ajustada para compensar la desviacion de los armonicos altos respecto a la serie ideal.\r
\r
Mas transformador fue el impacto en la fisica del siglo XX. La mecanica cuantica adopto el mismo formalismo: las funciones de onda de particulas en potenciales acotados satisfacen condiciones de contorno identicas a las de cuerdas con extremos fijos, produciendo niveles de energia discretos. Erwin Schrödinger reconocio explicitamente esta analogia al desarrollar su ecuacion de onda para particulas. La cuantizacion de energia en atomos emergio como consecuencia directa de condiciones de contorno, no como un postulado arbitrario.\r
\r
## Conexión con física moderna\r
\r
Las cavidades laser son la realizacion tecnologica mas precisa de ondas estacionarias electromagneticas. Los espejos del laser actuan como extremos fijos para ondas de luz, cuantizando los modos longitudinales de emision. La separacion espectral entre modos consecutivos, inversamente proporcional a la longitud de la cavidad, es el principio de las tecnicas de peine de frecuencias que han revolucionado la metrologia.\r
\r
En fisica de estado solido, los modos de vibracion de redes cristalinas (fonones) son el analogo cuantico de los modos estacionarios de cuerdas. El numero de modo [[numero_armonico]] que etiqueta cada patron estacionario clasico se convierte en el numero cuantico que caracteriza cada estado de energia en sistemas cuanticos. La estructura matematica desarrollada para cuerdas vibrantes en el siglo XVIII sigue siendo operativa en la fisica del siglo XXI.\r
`;export{e as default};
