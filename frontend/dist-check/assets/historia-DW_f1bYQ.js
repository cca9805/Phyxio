const e=`## Problema histórico

La pregunta que motivó el desarrollo del concepto de energía potencial eléctrica no era abstracta: era la pregunta práctica de cuánto trabajo hay que realizar para mover una carga en un campo eléctrico, y si ese trabajo depende del camino seguido o solo de los puntos de inicio y llegada. A finales del siglo XVIII, cuando Coulomb estableció su ley de fuerzas entre cargas y los físicos comenzaron a estudiar los campos eléctricos de forma sistemática, no existía ningún marco conceptual para describir la energía almacenada en configuraciones de carga. Se podía calcular la fuerza en cada punto, pero no había manera directa de obtener la velocidad de una carga tras recorrer un camino sin integrar laboriosamente esa fuerza paso a paso.

El problema era especialmente agudo porque la fuerza eléctrica cambia de dirección y magnitud a lo largo del camino de forma no trivial. Para trayectorias curvas en campos no uniformes, la integración era prácticamente imposible con los métodos disponibles. La física necesitaba una magnitud de estado que capturara toda la información energética de la posición de la carga sin depender de la historia de su movimiento.

## Dificultad conceptual previa

El obstáculo principal era la ausencia del concepto de campo como entidad física autónoma. Para los físicos de la época de Coulomb y Franklin, la interacción eléctrica era una acción a distancia: una carga ejercía fuerza sobre otra sin mediación de nada en el espacio intermedio. En este marco conceptual, hablar de "energía almacenada en el campo" no tenía sentido, porque el campo no existía como entidad real: solo existían las fuerzas entre cargas.

La segunda dificultad era de naturaleza matemática. El teorema de conservación de la energía para fuerzas conservativas —que establece que el trabajo solo depende de los extremos del camino— no estaba formulado de forma general. Aunque Leibniz y sus contemporáneos habían desarrollado el concepto de vis viva (energía cinética), la idea de una función de energía potencial escalar de la que se podía derivar la fuerza era un concepto genuinamente nuevo. Sin ese formalismo, demostrar que el trabajo del campo eléctrico es independiente de la trayectoria requería hacer el cálculo explícito para cada camino, lo que hacía el concepto difícilmente generalizable.

## Qué cambió

El paso clave lo dio Siméon Denis Poisson en la primera década del siglo XIX, formalizando el concepto de función potencial para el campo newtoniano de la gravedad y extendiéndolo a la electrostática. Poisson mostró que para fuerzas que decaen como el inverso del cuadrado de la distancia, existe una función escalar —el potencial— cuya derivada negativa en cualquier dirección da la componente de la fuerza en esa dirección. Esto significaba que toda la información del campo estaba encapsulada en un solo número por punto del espacio: el potencial.

George Green desarrolló independientemente herramientas matemáticas equivalentes a través de lo que hoy se llama funciones de Green y el teorema de Green, que relacionan el potencial con las distribuciones de carga que lo generan. La publicación de Green en 1828 fue seminal, aunque pasó desapercibida durante años hasta que Lord Kelvin la redescubrió. El resultado combinado fue un formalismo completo donde la energía potencial de una carga en un campo quedaba completamente determinada por el potencial escalar del campo, sin necesidad de especificar ninguna trayectoria.

## Impacto en la física

El formalismo del potencial transformó la electrostática de un conjunto de cálculos de fuerzas caso a caso en una disciplina con una arquitectura matemática coherente. En lugar de trabajar con vectores de fuerza en cada punto, los físicos podían trabajar con una función escalar y recuperar la fuerza tomando el gradiente. Esta simplificación no era solo computacional: revelaba una profunda estructura de la naturaleza, la existencia de cantidades conservadas asociadas a campos que pueden derivarse de potenciales escalares.

El formalismo del potencial fue el prototipo que Maxwell usó al desarrollar su teoría del electromagnetismo. La extensión del potencial eléctrico estático al potencial electromagnético dinámico (que incluye el potencial vectorial magnético) fue conceptualmente posible precisamente porque el formalismo escalar ya estaba establecido. Sin la energía potencial eléctrica como concepto consolidado, la teoría de Maxwell habría sido mucho más difícil de formular.

La importancia trasciende la electrostática: el mismo formalismo de función potencial aparece en la mecánica cuántica (el potencial de Coulomb en la ecuación de Schrödinger define los niveles de energía del átomo de hidrógeno), en la física estadística (la energía potencial coulombiana entre iones determina la termodinámica de los electrolitos) y en la relatividad general (donde el potencial newtoniano es la aproximación de campo débil del tensor métrico).

## Conexión con física moderna

La energía potencial eléctrica es el fundamento conceptual de la electroquímica y de toda la tecnología de baterías. Cuando una batería entrega corriente, convierte diferencia de potencial eléctrico (y por tanto [[U_e]]) en energía química o en trabajo mecánico. El voltaje de una celda electroquímica no es sino la diferencia de [[U_e]] por unidad de carga entre los dos electrodos, determinada por las reacciones redox que ocurren en cada uno.

En física de partículas, la energía de las partículas en aceleradores se mide habitualmente en electronvoltios (eV), una unidad directamente definida como la energía potencial que gana o pierde un electrón al cruzar una diferencia de potencial de 1 voltio. Esta unidad, que combina el concepto de [[U_e]] con la carga elemental, atraviesa todas las escalas de la física: desde los electrones de conducción en metales (algunas décimas de eV) hasta los protones del Gran Colisionador de Hadrones (TeV). La omnipresencia del electronvoltio en la física moderna es el testimonio de que la energía potencial eléctrica no es un concepto histórico sino un pilar activo del edificio científico.
`;export{e as default};
