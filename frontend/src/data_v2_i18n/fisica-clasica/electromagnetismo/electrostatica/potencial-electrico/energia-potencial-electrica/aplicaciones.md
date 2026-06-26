# Aplicaciones

## 1. Acelerador electrostático de partículas (Van de Graaff)

El generador Van de Graaff acumula cargas en un electrodo esférico hasta alcanzar potenciales de varios millones de voltios. Las partículas cargadas (protones, iones ligeros) se inyectan en un tubo de aceleración donde el campo entre el electrodo de alta tensión y el electrodo de tierra las impulsa. La totalidad de la energía cinética que adquiere la partícula proviene de la conversión de su energía potencial eléctrica inicial: la partícula parte de la zona de alto potencial y llega al extremo de bajo potencial con una energía cinética proporcional a la diferencia de potencial multiplicada por su carga.

La variable crítica que controla la energía de salida es [[potencial_electrico_en_el_punto_a]] en el electrodo de alta tensión. El diseñador del acelerador no ajusta la fuerza instantánea sobre la partícula (que varía a lo largo del tubo) sino la diferencia de potencial entre los electrodos: esa diferencia, multiplicada por la carga de la partícula, determina directamente la energía cinética final. El modelo de [[energia_potencial_electrica]] permite calcular la velocidad de las partículas sin conocer la geometría exacta del campo dentro del tubo.

Variable dominante: la diferencia de potencial entre los electrodos, que determina la totalidad de la energía cinética entregada a la partícula.
Límite de validez: el modelo es válido mientras la velocidad final de la partícula sea inferior al 10 % de la velocidad de la luz; por encima de este límite se requiere la corrección relativista para calcular la velocidad exacta.

## 2. Condensador de alta tensión en desfibrilador cardíaco

Un desfibrilador cardíaco almacena energía eléctrica en un condensador que se carga a varios miles de voltios y se descarga en milisegundos a través del pecho del paciente. La energía disponible para la descarga terapéutica es, en su totalidad, energía potencial eléctrica almacenada en el campo entre las placas del condensador. El médico o técnico que configura el desfibrilador selecciona la energía de descarga (típicamente entre 100 y 360 julios), que determina a qué potencial debe cargarse el condensador.

La relación entre la energía almacenada y el potencial del condensador depende de su capacidad, pero el principio energético es invariable: todo el trabajo realizado por la fuente de alimentación al cargar el condensador queda almacenado como [[energia_potencial_electrica]] y se libera íntegramente sobre la carga (el paciente) durante la descarga. La interpretación de [[energia_potencial_electrica]] permite estimar si la energía almacenada es suficiente para producir la corriente terapéutica durante el tiempo necesario, sin necesitar conocer la forma exacta de la onda de descarga.

Variable dominante: la energía potencial almacenada en el condensador, que determina la intensidad y duración del pulso eléctrico aplicado al paciente.
Límite de validez: el modelo electrostático es válido para el cálculo de energía almacenada; la dinámica de la descarga (que involucra resistencia del cuerpo y evolución temporal) requiere modelos de circuito RC.

## 3. Separación de isótopos por diferencia de energía potencial

En la espectrometría de masas, los iones de diferentes masas pero la misma carga son acelerados por la misma diferencia de potencial. Dado que la energía potencial convertida a cinética es igual para todos (misma carga, mismo campo), los iones más pesados adquieren menor velocidad y los más ligeros mayor velocidad. Esta diferencia de velocidades permite separar espacialmente isótopos de un mismo elemento en el campo magnético posterior, donde el radio de curvatura depende de la velocidad.

El principio que permite predecir cuánto difieren las velocidades de dos isótopos es directamente la conservación de energía: la energía potencial [[energia_potencial_electrica]] cedida por el campo es la misma para ambos, pero la energía cinética resultante se distribuye de forma distinta según la masa de cada ion. La diferencia relativa de velocidades entre dos isótopos de masas muy similares (como el uranio-235 y el uranio-238) es pequeña pero suficiente para diseñar sistemas de separación en cascada.

Variable dominante: la carga del ion multiplicada por la diferencia de potencial de aceleración, que determina la energía cinética idéntica para todos los iones de la misma carga independientemente de su masa.
Límite de validez: el modelo es válido para iones únicamente cargados que se pueden tratar como puntuales; la presencia de varios estados de carga o de colisiones entre iones invalida la predicción de velocidades individuales.

## 4. Electrostática de la membrana celular

La membrana celular actúa como una barrera dieléctrica de unos 7 nm de espesor que separa el interior celular (potencial típicamente −70 mV en células nerviosas en reposo) del exterior (referencia de 0 mV). Los iones que atraviesan la membrana a través de canales proteicos cambian su [[energia_potencial_electrica]] al cruzar esta diferencia de potencial. Un ion sodio (carga +e) que entra al interior celular cede energía potencial porque se mueve de mayor a menor potencial: esa energía impulsa la propagación del impulso nervioso.

Este mecanismo convierte la diferencia de potencial de membrana en energía disponible para el trabajo fisiológico: el gradiente electroquímico (diferencia de potencial más diferencia de concentración) es la verdadera fuente de energía para el transporte de iones. La estimación de [[energia_potencial_electrica]] por ion que cruza la membrana permite cuantificar cuánta energía química (ATP) es necesaria para reponer el gradiente: la bomba sodio-potasio consume una molécula de ATP para mover tres iones sodio hacia fuera y dos iones potasio hacia dentro, y ese trabajo va contra el gradiente eléctrico.

Variable dominante: la diferencia de potencial transmembrana, que determina la energía potencial eléctrica de cada ion al cruzar la membrana y, por tanto, la fuerza electromotriz del impulso nervioso.
Límite de validez: el modelo electrostático simple es válido como estimación; la dinámica real de apertura y cierre de canales, las concentraciones iónicas y los efectos de apantallamiento en solución acuosa requieren modelos más detallados de biofísica.

## 5. Energía de enlace en cristales iónicos

Un cristal iónico como el cloruro de sodio está formado por capas alternadas de iones sodio (carga +e) e iones cloro (carga −e) dispuestos en una red cúbica. La energía total de cohesión del cristal —la energía necesaria para separar todos los iones hasta el infinito— es la suma de las energías de interacción coulombiana entre todos los pares. Esta suma, que involucra infinitos pares a distintas distancias y con distintos signos, converge a un valor finito proporcional al inverso de la separación entre primeros vecinos.

El resultado se expresa a través de la constante de Madelung, que encapsula la geometría específica de la red cristalina. Para el cristal de NaCl, la energía de cohesión es aproximadamente −787 kJ por mol. Esta cifra se puede estimar de orden de magnitud con la fórmula de [[energia_potencial_electrica]] para un único par de iones adyacentes y multiplicar por el número de pares en el mol, lo que da resultados del mismo orden. La energía de cohesión explica por qué los cristales iónicos tienen puntos de fusión elevados y son mecánicamente duros: se necesita energía considerable para romper la red de interacciones coulombianas que mantiene unida la estructura.

Variable dominante: la distancia entre primeros vecinos en la red cristalina, que determina la escala de la energía de interacción entre iones adyacentes y, a través de la suma de Madelung, la energía total de cohesión.
Límite de validez: el modelo de cargas puntuales con solo interacción coulombiana es una buena aproximación para la parte electrostática de la energía de enlace; la energía total real incluye también términos repulsivos de corto alcance (repulsión del núcleo y exclusión de Pauli) que el modelo coulombiano puro ignora.