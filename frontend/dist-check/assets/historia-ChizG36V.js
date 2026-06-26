const e=`# Historia\r
\r
## Problema histórico\r
\r
¿Cómo representar el cambio de [[velocidad]] de un cuerpo de manera que se pueda calcular la distancia que recorre, sin disponer de álgebra ni de cálculo infinitesimal?\r
\r
A lo largo de los siglos XIV al XVII, este problema impulsó la invención de los diagramas cinemáticos mucho antes de que existiera una notación matemática formal para derivadas e integrales.\r
\r
## Dificultad conceptual previa\r
\r
Antes de los trabajos de los calculadores de Oxford y de la escuela de París, la idea de que la [[velocidad]] pudiera **variar de forma continua** resultaba problemática. La tradición aristotélica distinguía entre "movimiento natural" y "movimiento violento", pero no ofrecía un marco cuantitativo para describir cómo una magnitud cambia instante a instante. No existía una forma clara de responder a la pregunta: "si la [[velocidad]] cambia, ¿cuánta distancia se recorre en total?".\r
\r
## Qué cambió\r
\r
### Nicole Oresme y el diagrama de configuraciones (c. 1350)\r
\r
El filósofo y matemático Nicole Oresme, en su obra *Tractatus de configurationibus qualitatum et motuum*, propuso representar la intensidad de una cualidad (por ejemplo, la [[velocidad]] ) como la altura de una figura geométrica cuya base es el intervalo de [[tiempo]] . De este modo, un movimiento uniformemente acelerado se representaba como un **triángulo rectángulo** y un movimiento uniforme como un **rectángulo**. La clave de su aportación fue darse cuenta de que el **área de la figura** equivale a la distancia recorrida, anticipándose al concepto de integral en más de tres siglos.\r
\r
### Los calculadores de Merton College, Oxford (c. 1330-1350)\r
\r
El *Teorema de [[velocidad]] media de Merton* —enunciado por William Heytesbury, Richard Swineshead y John Dumbleton— estableció que un cuerpo con aceleración uniforme recorre la misma distancia que si se moviera durante el mismo [[tiempo]] a la [[velocidad]] media entre la inicial y la final. Este resultado, equivalente al área del triángulo, es la primera formulación cuantitativa de la relación entre [[velocidad]] variable y [[desplazamiento]] .\r
\r
### Galileo Galilei (c. 1604-1638)\r
\r
Galileo retomó las ideas de Oresme y de los mertonianos y les dio contenido experimental. En sus *Discorsi e dimostrazioni matematiche intorno a due nuove scienze* (1638) usó diagramas de [[velocidad]] frente a [[tiempo]] para analizar la caída libre y el movimiento en un plano inclinado. Al medir tiempos con un reloj de agua y distancias con marcas en la rampa, verificó que la ley d ∝ t² era coherente con un **gráfico triangular** de [[velocidad]] , consolidando la lectura gráfica como herramienta predictiva.\r
\r
## Impacto en la física\r
\r
| Época | Avance |\r
|------------------|--------------------------------------------------------------|\r
| s. XIV | Representación cualitativa de magnitudes cambiantes (Oresme, Merton) |\r
| s. XVII | Verificación experimental del gráfico \\(v\\)-\\(t\\) (Galileo) |\r
| s. XVII–XVIII | Newton y Leibniz formalizan pendientes como derivadas y áreas como integrales; el gráfico pasa de herramienta visual a representación rigurosa de funciones |\r
| s. XIX | Clapeyron usa diagramas \\(P\\)-\\(V\\) en termodinámica, siguiendo la misma lógica de "área = magnitud integrada" |\r
| s. XX–XXI | Sensores digitales y software generan gráficos en [[tiempo]] real; el análisis gráfico se convierte en competencia estándar de laboratorio |\r
\r
## Conexión con física moderna\r
\r
La técnica de leer pendientes y áreas en un gráfico no se limita a la cinemática elemental. En física de partículas, los diagramas de Feynman codifican amplitudes de dispersión como elementos gráficos; en cosmología, el diagrama de Hubble ( [[velocidad]] de recesión frente a distancia) reveló la expansión del universo, leyendo la pendiente como la constante de Hubble. Incluso en relatividad general, los diagramas de Minkowski trazan líneas de mundo cuya pendiente relaciona la [[velocidad]] con la [[velocidad]] de la luz.\r
\r
En todas estas áreas, el principio didáctico es el mismo que se practica aquí: **la pendiente de una curva indica una razón de cambio y el área bajo la curva indica una cantidad acumulada**. Lo que Oresme descubrió con figuras rectangulares y triangulares en el siglo XIV sigue siendo la piedra angular del análisis gráfico en toda la física.\r
`;export{e as default};
