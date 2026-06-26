const e=`# Historia y desarrollo\r
\r
## Problema histórico\r
\r
A mediados del siglo XVII, los físicos tenían dificultades para predecir qué ocurría tras el choque entre cuerpos. Algunos experimentos con péndulos mostraban que una cierta cantidad se conservaba en los choques, pero no existía un marco conceptual claro para explicar cuándo y por qué. El problema central era: **¿qué cantidad se conserva en una colisión, y bajo qué condiciones?** La respuesta dependía de una distinción que nadie había formulado con precisión: la frontera del sistema y el papel de las fuerzas externas.\r
\r
René Descartes fue el primero en formular, alrededor de 1644, una ley de conservación de la cantidad de movimiento en su obra *Principia Philosophiae*. Descartes reconoció que el producto de la masa por la velocidad se conservaba en ciertos tipos de choques, pero su formulación empleaba valores escalares sin signo, lo que hacía que la ley fallara en colisiones oblicuas o con rebote. Christiaan Huygens, en sus experimentos con péndulos, demostró empíricamente que los resultados de Descartes eran incorrectos en muchos casos concretos, pero no disponía del lenguaje matemático para corregirlos sistemáticamente.\r
\r
## Dificultad conceptual previa\r
\r
Antes de Newton, el concepto de "sistema aislado" no existía como tal. Los físicos no tenían una forma sistemática de distinguir entre fuerzas internas y externas a un sistema. Todo se trataba como una interacción bilateral entre dos cuerpos, sin considerar que la elección de qué cuerpos pertenecían al sistema era arbitraria y determinante del resultado. Esta dificultad conceptual llevó a que Descartes formulara una conservación incorrecta y a que la controversia entre la escuela de Leibniz —que prefería la vis viva mv²— y la de Newton se prolongara décadas. El debate no era solo técnico: era sobre qué magnitud capturaba realmente la "cantidad de movimiento" del universo.\r
\r
Leibniz introdujo el concepto de *vis viva* (fuerza viva), proporcional a mv², que compitió con el momento newtoniano hasta que d'Alembert y Euler demostraron que ambas eran cantidades válidas pero con roles distintos: el momento describe la interacción con fuerzas externas, la energía cinética describe el trabajo. La confusión persistió porque nadie había formulado explícitamente la condición de frontera: para aplicar la conservación, hay que definir primero qué pertenece al sistema.\r
\r
## Qué cambió\r
\r
Isaac Newton, en sus *Philosophiæ Naturalis Principia Mathematica* (1687), enunció explícitamente que la variación del momento lineal es igual a la fuerza externa aplicada. La condición de sistema aislado surge directamente de su Segunda Ley como un caso límite: cuando la fuerza neta es nula, el momento se conserva. Joseph-Louis Lagrange, en su *Mécanique Analytique* (1788), formalizó definitivamente la distinción entre fuerzas internas (que se cancelan en pares por la Tercera Ley) y fuerzas externas (que modifican el estado dinámico del sistema). Leonhard Euler había sistematizado antes las ecuaciones de movimiento para sistemas de partículas, dejando claro que solo las fuerzas externas contribuyen al cambio del momento total del sistema.\r
\r
El cambio clave fue reconocer que las fuerzas internas entre partes del sistema siempre suman cero (Tercera Ley), por lo que el estado de aislamiento se refiere exclusivamente a la interacción con el entorno exterior. Esta reformulación convirtió el principio de conservación en una herramienta operativa precisa.\r
\r
## Impacto en la física\r
\r
La clarificación del concepto de sistema aislado tuvo consecuencias profundas y prácticas. Permitió desarrollar la mecánica de sistemas de partículas, la mecánica del sólido rígido y la teoría de colisiones aplicada a la ingeniería. En el siglo XIX, la analogía con los sistemas termodinámicos cerrados fue fructífera: la conservación del momento se convirtió en uno de los pilares de la física teórica y experimental. En la mecánica relativista, el momento lineal adquirió una forma corregida (p = γmv) que se conserva igualmente en sistemas aislados. En mecánica cuántica, el operador de momento satisface las mismas leyes de conservación cuando el Hamiltoniano es invariante ante traslaciones.\r
\r
## Conexión con física moderna\r
\r
En 1915, Emmy Noether demostró que toda simetría continua de las leyes de la física implica una cantidad conservada. La homogeneidad del espacio —las leyes físicas son las mismas en cualquier punto— implica la conservación del momento lineal. Esta derivación, conocida como el **teorema de Noether**, proporciona la justificación profunda del principio: no es una ley empírica, sino una consecuencia inevitable de la simetría traslacional del universo.\r
\r
En física de partículas, la conservación del momento en colisiones es la herramienta principal para inferir la existencia de partículas no observadas directamente, como el neutrino (propuesto por Pauli en 1930 para explicar el momento faltante en la desintegración beta) o las partículas del Modelo Estándar descubiertas en aceleradores. Desde Descartes hasta Noether, la idea de sistema aislado recorrió tres siglos, pasando de ser una observación empírica sobre choques a convertirse en una consecuencia inevitable de la simetría del espacio.\r
`;export{e as default};
