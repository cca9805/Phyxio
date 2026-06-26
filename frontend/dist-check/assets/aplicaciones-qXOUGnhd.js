const e=`# Aplicaciones de la Flotación en el Mundo Real\r
\r
## 1. Ingeniería Naval y Diseño de Grandes Buques\r
La aplicación más evidente del Principio de Flotación es la construcción de embarcaciones modernas. Aquí, el desafío no es solo lograr que el barco flote, sino que lo haga de forma estable y eficiente bajo diferentes condiciones de carga en alta mar. Los ingenieros navales utilizan el concepto de **tonelaje de desplazamiento**, que es literalmente el peso del agua que el barco desplaza cuando flota en equilibrio estático.\r
\r
Para que un barco de acero flote, el casco debe desplazar un volumen de agua cuyo peso sea igual al peso total del barco (incluyendo carga, combustible y tripulación). Esto se logra diseñando cascos con grandes espacios huecos rellenos de aire, lo que reduce drásticamente la densidad promedio del sistema total. Un aspecto crítico es el **metacentro**. El diseño estructural garantiza que, ante una inclinación lateral producida por el oleaje, el centro de carena se desplace de tal manera que la fuerza de empuje genere un par restaurador que devuelva al barco a su posición vertical de equilibrio de forma pasiva. Sin esta estabilidad rotacional, incluso un barco que flota perfectamente terminaría zozobrando ante la mínima perturbación del viento o las olas.\r
\r
Variable dominante: [[frac_sum]]\r
Límite de validez: Válido mientras el casco mantenga su integridad estructural y no se supere la carga máxima de diseño (francobordo), evitando que el agua entre por la cubierta superior.\r
\r
## 2. Sistemas de Lastre en Submarinos y Batiscafos\r
A diferencia de un barco de superficie que mantiene una flotación positiva constante, los submarinos deben ser capaces de alternar entre flotación positiva, neutra y negativa para cumplir sus misiones. Esto se logra mediante el control de densidad en los **tanques de lastre**. \r
\r
- **Inmersión**: Para sumergirse, el submarino abre válvulas que permiten que el agua de mar entre en los tanques de lastre, desplazando el aire. Esto aumenta la densidad promedio del submarino hasta que iguala o supera ligeramente la densidad del agua circundante [[rho_f]].\r
- **Emersión**: Para volver a la superficie, se utiliza aire comprimido de alta presión para expulsar el agua de los tanques, reduciendo la masa total del sistema sin cambiar el volumen exterior. Esto disminuye la densidad estructural y permite que el empuje sea superior al peso, elevando la nave.\r
\r
Variable dominante: [[rho_obj]]\r
Límite de validez: Limitado por la profundidad de aplastamiento del casco ante la presión hidrostática extrema y la capacidad de las bombas de aire comprimido para vencer el gradiente de presión.\r
\r
## 3. Biología Marina: Vejigas Natatorias y Control de Densidad\r
La naturaleza ha perfeccionado el uso del Principio de Arquímedes millones de años antes de que el hombre construyera el primer bote. La mayoría de los peces óseos poseen un órgano especializado llamado **vejiga natatoria**, un saco de paredes elásticas lleno de gas que les permite controlar su profundidad sin gastar energía muscular nadando.\r
\r
Al ajustar la cantidad de gas en la vejiga mediante procesos químicos en la sangre, el pez cambia su volumen total [[Vtot]] mientras mantiene su masa casi constante. Esto altera su densidad promedio. Si el pez quiere ascender, aumenta el volumen de gas, lo que incrementa el empuje. Si desea descender, absorbe gas al torrente sanguíneo, reduciendo su volumen y permitiendo que su peso lo lleve hacia el fondo de manera controlada.\r
\r
Variable dominante: [[Vtot]]\r
Límite de validez: Válido para peces óseos; los condrictios (tiburones) utilizan un mecanismo alternativo basado en lípidos hepáticos menos densos y portancia dinámica.\r
\r
## 4. Oceanografía y los Peligros de los Icebergs\r
La flotación de los icebergs es una de las aplicaciones más críticas para la meteorología y la seguridad global. Debido a que el hielo es solo un $10\\%$ menos denso que el agua de mar, los icebergs actúan como gigantescas "anclas" térmicas que se mueven con las corrientes submarinas profundas más que con el viento superficial.\r
\r
La **fracción sumergida [[frac_sum]]** de un iceberg determina cuánta energía térmica del océano es capaz de absorber. Dado que el $90\\%$ del volumen está en contacto directo con el agua profunda, la tasa de derretimiento de los icebergs está gobernada por la transferencia de calor en la interfaz fluido-sólido sumergida. Este fenómeno es crucial para predecir el aumento del nivel del mar debido al cambio climático inducido por el calentamiento de las corrientes oceánicas profundas.\r
\r
Variable dominante: [[frac_sum]]\r
Límite de validez: El modelo asume agua de mar uniforme; variaciones de salinidad o temperatura pueden alterar el equilibrio local y la fragmentación del bloque.\r
\r
## 5. Instrumentación Industrial: Hidrómetros y Detección de Contaminantes\r
En la industria química y alimentaria, el **hidrómetro** es un dispositivo sencillo pero potente basado puramente en las leyes de la flotación. Consiste en un tubo de vidrio lastrado con una escala graduada de alta precisión. Al sumergerlo en un líquido, el hidrómetro se hunde hasta una profundidad exacta determinada por la densidad del fluido [[rho_f]].\r
\r
En la producción de vino y cerveza, se utiliza para medir el contenido de azúcar; a medida que el azúcar se fermenta en alcohol (que es menos denso que el agua), la densidad del líquido disminuye y el hidrómetro se hunde más profundamente. Esto permite a los técnicos conocer el grado alcohólico sin necesidad de análisis químicos complejos de laboratorio. Es una prueba clara de cómo un objeto calibrado traduce un estado de equilibrio en una medición cuantitativa útil para la sociedad.\r
\r
Variable dominante: [[Vsum]]\r
Límite de validez: Requiere que el hidrómetro no toque las paredes del recipiente debido a la tensión superficial y que la temperatura esté calibrada a $20^\\circ \\text{C}$.`;export{e as default};
