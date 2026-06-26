const e=`\uFEFF# Tensión superficial\r
\r
## Contexto conceptual\r
La **tensión superficial** [[sigma]] es una manifestación macroscópica de las fuerzas de cohesión intermolecular que actúan en la interfaz entre un líquido y otro medio (ya sea aire, vapor, otro líquido inmiscible o una superficie sólida). A diferencia de una molécula situada en el seno del líquido, que experimenta una fuerza neta nula debido a la simetría de sus interacciones con las moléculas vecinas, una molécula en la superficie carece de vecinos en el lado exterior. Esta asimetría genera una fuerza neta hacia el interior del líquido, creando un estado de tensión que hace que la superficie se comporte como una membrana elástica estirada.\r
\r
Este leaf no estudia la tensión superficial como una simple curiosidad de gotas redondas o insectos caminando sobre el agua. La aborda como un **criterio físico operativo** fundamental para explicar la estabilidad de las interfaces, el exceso de presión en burbujas y gotas (Presión de Laplace), y el fenómeno de la capilaridad. La pregunta central es cómo la energía almacenada en la interfaz dicta la geometría del fluido y bajo qué condiciones estas fuerzas superficiales llegan a dominar sobre las fuerzas de volumen como la gravedad.\r
\r
## 🟢 Nivel esencial\r
Desde una perspectiva intuitiva, la tensión superficial puede entenderse como el "coste energético" de crear nueva superficie. Los sistemas físicos tienden naturalmente a estados de mínima energía, lo que en los líquidos se traduce en minimizar su área superficial. Por esta razón, pequeñas cantidades de líquido adoptan formas esféricas: la esfera es la figura geométrica que encierra un volumen dado con la menor área posible.\r
\r
Cuando la superficie de un líquido entra en contacto con un objeto sólido (como un clip metálico o la pata de un insecto), la interfaz se deforma pero intenta recuperar su forma plana original. Esta resistencia a la deformación genera una fuerza superficial [[F]] que actúa tangencialmente a la interfaz. Si la línea de contacto tiene una longitud [[L]], la fuerza total será directamente proporcional a dicha longitud.\r
\r
Esta proporcionalidad se formaliza después, en el nivel matemático, cuando se separa la fuerza superficial de la longitud de contacto.
\r
Un fenómeno derivado de gran importancia es la **capilaridad**. Es la capacidad de un líquido de ascender o descender por un tubo muy estrecho (capilar) venciendo la gravedad. Este efecto depende de la competencia entre las fuerzas de cohesión (entre moléculas del líquido) y las fuerzas de adhesión (entre el líquido y la pared del tubo). Si la adhesión es mayor, el líquido "moja" la pared, formando un menisco cóncavo y ascendiendo por el tubo. Si la cohesión predomina (como en el mercurio), el líquido "no moja", forma un menisco convexo y desciende.\r
\r
## 🔵 Nivel formal\r
En la física clásica, definimos formalmente la tensión superficial [[sigma]] de dos maneras equivalentes:\r
1.  **Energética**: Es el trabajo requerido para aumentar el área de la superficie en una unidad (J/m al cuadrado).\r
2.  **Mecánica**: Es la fuerza normal a una línea imaginaria de longitud unitaria dibujada sobre la superficie (N/m).\r
\r
Para el cálculo operativo en ingeniería y laboratorio, utilizamos la relación de fuerza de borde:\r
\r
{{f:fuerza_superficial}}\r
\r
Donde [[L]] es la longitud efectiva de contacto. Es vital considerar que en láminas delgadas (como una pompa de jabón), existen dos superficies (interna y externa), por lo que la longitud efectiva de contacto con un contorno suele ser el doble de la longitud geométrica.\r
\r
Un pilar del análisis formal es la **Ley de Young-Laplace**. Esta ley establece que existe una diferencia de presión [[dp]] a través de una interfaz curva. Para una gota o burbuja esférica de radio [[R]], la presión interna es mayor que la externa en un valor dado por:\r
\r
{{f:laplace}}\r
\r
Este "exceso de presión" es inversamente proporcional al radio. Esto explica por qué es más difícil empezar a inflar un globo pequeño que mantenerlo inflado una vez que ha crecido: la curvatura inicial es tan alta que requiere una sobrepresión interna masiva para ser vencida por la tensión de la pared.\r
\r
Finalmente, el ascenso capilar se cuantifica mediante la **Ley de Jurin**. La altura [[h]] que alcanza la columna de líquido en un tubo de radio [[r]] viene dada por el equilibrio entre la componente vertical de la tensión superficial y el peso de la columna:\r
\r
{{f:ascenso_capilar}}\r
\r
Donde [[theta]] es el ángulo de contacto, [[rho]] la densidad del líquido y [[g]] la gravedad. Esta fórmula es la herramienta estándar para predecir el comportamiento de fluidos en suelos, textiles y sistemas microfluídicos.\r
\r
## 🔴 Nivel estructural\r
Estructuralmente, la tensión superficial representa el límite del modelo de medio continuo cuando las fuerzas de superficie compiten con las fuerzas de volumen. Esta competencia se resume en el **Número de Bond** (o número de Eötvös), que compara el peso del fluido con la tensión capilar. En escalas métricas, la gravedad domina; en escalas milimétricas, la tensión superficial se vuelve el actor principal.\r
\r
El primer criterio estructural es la **curvatura media**. Según la ecuación general de Laplace, el salto de presión depende de la suma de las curvaturas principales de la superficie. En superficies de curvatura constante (como esferas o cilindros), el sistema alcanza un equilibrio estático estable. En superficies complejas, la tensión superficial impulsa el movimiento del fluido hacia zonas que minimicen la energía total, un proceso fundamental en la atomización de chorros y la coalescencia de gotas.\r
\r
El segundo criterio es la **termodinámica de interfaces**. La tensión superficial no es constante; depende fuertemente de la temperatura y de la composición química. Al aumentar la temperatura, la agitación térmica debilita las fuerzas de cohesión, disminuyendo [[sigma]]. La presencia de **surfactantes** (agentes tensioactivos como el jabón) altera drásticamente la estructura de la superficie, reduciendo la tensión superficial y permitiendo que el agua penetre en fibras o emulsione grasas que de otro modo serían inalcanzables.\r
\r
El tercer criterio es la **histéresis del ángulo de contacto**. En superficies reales (no ideales), el ángulo [[theta]] no es único, sino que varía si el líquido está avanzando o retrocediendo. Esta propiedad estructural es la que permite que una gota de lluvia "se pegue" a un cristal vertical sin deslizarse inmediatamente, equilibrando su peso mediante la diferencia entre el ángulo de contacto superior e inferior.\r
\r
## Aplicaciones Ingenieriles y Biológicas\r
La tensión superficial es vital en múltiples campos:\r
-   **Biología**: Los insectos zapateros (*Gerridae*) utilizan la tensión del agua para desplazarse sin hundirse. En los pulmones humanos, el surfactante pulmonar reduce la tensión superficial de los alvéolos, permitiendo que se expandan fácilmente durante la respiración y evitando su colapso.\r
-   **Ingeniería de Materiales**: El diseño de recubrimientos repelentes al agua (hidrofóbicos) o superficies que favorezcan el mojado (hidrofílicos) se basa íntegramente en el control de la energía superficial.\r
-   **Medicina**: Los diagnósticos basados en microfluídica aprovechan la capilaridad para mover muestras de sangre a través de canales microscópicos sin necesidad de bombas externas.\r
\r
## Interpretación física profunda\r
La tensión superficial debe interpretarse como la **resistencia del sistema a la creación de desorden superficial**. Desde el punto de vista de la física estadística, las moléculas en la superficie están en un estado de mayor energía porque tienen "enlaces insatisfechos". Por tanto, la tensión superficial es la medida de cuánto "odia" un líquido tener fronteras abiertas.\r
\r
## Orden de magnitud\r
Para navegar problemas de física de interfaces, es útil recordar:\r
-   **Agua (20°C)**: aproximadamente 0.072 N/m.\r
-   **Mercurio**: aproximadamente 0.480 N/m (fuerzas de cohesión metálica muy altas).\r
-   **Alcohol etílico**: aproximadamente 0.022 N/m (tensión baja, moja fácilmente).\r
\r
Un resultado absurdo (ej. una tensión superficial de 50 N/m) suele indicar que se han confundido Newtons con milinewtons o que se ha omitido el factor de escala decimal en el radio de curvatura.\r
\r
## Método de resolución personalizado\r
1.  **Identificar el Régimen**: ¿El problema trata de una fuerza en un borde ([[F]]), de una sobrepresión en un volumen curvo ([[dp]]), o de una altura de columna ([[h]])?\r
2.  **Analizar la Geometría de Contacto**: Determine la longitud [[L]]. ¿Es un aro, una aguja, una película con dos caras?\r
3.  **Definir la Curvatura**: En problemas de Laplace, verifique si es una gota (1 interfaz) o una burbuja de jabón (2 interfaces, lo que duplica el efecto).\r
4.  **Balance de Fuerzas**: Para capilaridad, plantee siempre F sub vertical = Peso. No confíe solo en la fórmula memorizada; el ángulo [[theta]] puede cambiar el sentido del efecto.\r
5.  **Verificación de Unidades**: La tensión superficial suele darse en mN/m o dyn/cm. Convierta siempre a N/m para usar el SI.\r
\r
## Casos especiales y ejemplo extendido\r
Un caso de gran relevancia pedagógica es el **Efecto de Punta**. Considere un cuchillo afilado: al reducir el área de contacto a una línea casi microscópica, una fuerza moderada de la mano se convierte en una presión capaz de romper los enlaces moleculares del material cortado. Este mismo principio explica por qué los tacones de aguja pueden dañar suelos que soportan camiones: la concentración de carga es el factor determinante.\r
\r
## Preguntas reales del alumno\r
**¿Por qué el jabón ayuda a limpiar?** Porque reduce la tensión superficial del agua, permitiendo que esta "moje" mejor las fibras de la ropa y penetre en los poros donde está la suciedad.\r
**¿Puede un objeto más denso que el agua flotar en ella?** Sí, si es lo suficientemente pequeño para que su peso sea compensado por la fuerza superficial [[F]] antes de romper la membrana del líquido.\r
**¿Qué pasa con la tensión superficial en el espacio (gravedad cero)?** Sin gravedad, la tensión superficial domina completamente, haciendo que cualquier masa de líquido adopte una forma esférica perfecta y permitiendo que se mueva por capilaridad a lo largo de distancias ilimitadas.\r
\r
## Conexiones transversales y rutas de estudio\r
El concepto de tensión superficial es el núcleo que conecta:\r
1.  **Hidrostática**: Fundamental para derivar el fenómeno de capilaridad.\r
2.  **Leyes de los Gases**: Conecta con la formación de burbujas en procesos de ebullición.\r
3.  **Biología**: Explica el transporte de nutrientes en capilares vegetales.\r
\r
## Síntesis final\r
La tensión superficial [[sigma]] es la propiedad que define la frontera del mundo líquido. Controla la forma de las gotas, la presión en las burbujas y el ascenso en los poros. Dominarla exige entender la dualidad entre fuerza por longitud y energía por área, y reconocer que en la escala micrométrica, la "piel" del agua es una fuerza mucho más poderosa que su propio peso.\r
`;export{e as default};
