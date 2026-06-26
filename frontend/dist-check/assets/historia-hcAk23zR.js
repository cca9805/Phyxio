const e=`# Historia del campo de distribuciones continuas de carga

## Problema histórico

La pregunta sin respuesta a finales del siglo XVIII era la siguiente: ¿cómo calcular la fuerza eléctrica que ejerce un cuerpo cargado de forma extendida — una barra, una placa, una esfera — sobre una carga de prueba situada en su exterior? La ley de Coulomb (1785) daba la fuerza entre dos cargas puntuales, pero no describía directamente la interacción con objetos macroscópicos. Entender el campo de distribuciones reales exigía extender esa ley a infinitos elementos simultáneamente.

## Dificultad conceptual previa

El obstáculo intelectual fundamental era la ausencia de una noción operativa de **densidad de carga continua**. La electricidad se concebía como un fluido que habitaba en los cuerpos, sin que existiera una descripción matemática precisa de cómo se repartía. Sin la noción de [[lambda]], [[sigma]] o [[rho_vol]] como funciones del espacio, no era posible formular el integrando de [[dE]].

El segundo obstáculo era la falta de confianza en el principio de superposición para fuerzas eléctricas: no era obvio para los físicos del siglo XVIII que la fuerza total sobre una carga pudiera obtenerse simplemente sumando las contribuciones individuales de cada porción del cuerpo fuente. Esta hipótesis, que hoy parece natural, requería justificación experimental y teórica.

## Qué cambió

Siméon Denis Poisson fue el primero en formular, entre 1812 y 1813, la teoría matemática completa del potencial de distribuciones continuas. Introdujo explícitamente la densidad volumétrica [[rho_vol]] como función del espacio, estableció la ecuación diferencial que lleva su nombre — que conecta la distribución de carga con el potencial eléctrico — y demostró que la integración de [[dE]] sobre toda la distribución producía el campo resultante [[E]] por superposición. Este avance transformó el cálculo del campo eléctrico de un problema físico vago en un procedimiento matemático sistemático.

Carl Friedrich Gauss complementó este avance en 1835 con su ley del flujo: el flujo de [[E]] a través de cualquier superficie cerrada es proporcional a la carga total encerrada. Esta formulación es matemáticamente equivalente a la integración directa de [[dE]], pero aprovecha la simetría geométrica de forma mucho más eficiente para hilo infinito, plano infinito y esfera.

## Impacto en la física

El trabajo de Poisson y Gauss transformó la electrostática de una disciplina fenomenológica en una rama matemáticamente rigurosa de la física. La noción de densidad de carga [[rho_vol]] se convirtió en el puente entre la física macroscópica y la microscópica: los problemas de distribuciones de carga pasaron a formularse como ecuaciones diferenciales parciales resolubles.

James Clerk Maxwell unificó este resultado en 1865: la primera de sus ecuaciones en forma diferencial, que conecta la divergencia de [[E]] con [[rho_vol]] dividida entre ε₀, es la forma local de la ley de Gauss. Esta ecuación no es solo un resultado de electrostática: es el punto de partida de toda la teoría clásica del electromagnetismo y de la óptica electromagnética.

## Conexión con física moderna

La ecuación de Poisson para distribuciones de carga continua sigue siendo el núcleo computacional de todos los simuladores de dispositivos electrónicos modernos (transistores, diodos, circuitos integrados). Los métodos de elementos finitos resuelven numéricamente esta ecuación para geometrías tridimensionales arbitrarias con [[rho_vol]] variable, permitiendo diseñar chips de nanómetros de escala.

En física de plasmas y astrofísica, las distribuciones de carga continua modeladas con [[rho_vol]] describen desde el interior de una estrella de neutrones hasta la ionosfera terrestre. La misma integral de [[dE]] que Poisson formuló para barras de laboratorio sigue siendo la base del cálculo de campos en entornos de cientos de miles de grados kelvin y densidades de millones de coulombios por metro cúbico.
`;export{e as default};
