const e=`# Energía potencial eléctrica

## Contexto conceptual

La energía potencial eléctrica es el concepto que conecta la geometría de un sistema de cargas con la energía que puede liberar o absorber al cambiar esa geometría. Así como un objeto elevado sobre el suelo almacena energía potencial gravitatoria que puede convertirse en energía cinética al caer, una carga situada en un campo eléctrico almacena energía potencial que puede convertirse en movimiento o en trabajo.

Este leaf pertenece al nodo de potencial eléctrico y se apoya directamente en la diferencia de potencial. Mientras la diferencia de potencial describe una propiedad del campo eléctrico independiente de cualquier carga de prueba, la energía potencial eléctrica describe la energía que tiene una carga específica en ese campo. La distinción entre las dos magnitudes es una de las confusiones más frecuentes en electrostática y es el eje central de este leaf.

Entender la energía potencial eléctrica permite resolver un tipo de problema fundamental: predecir la velocidad que adquiere una carga al moverse entre dos puntos del campo, aplicando únicamente la conservación de energía sin necesidad de conocer la fuerza en cada instante.

## 🟢 Nivel esencial

La **energía potencial eléctrica** [[U_e]] es la energía que almacena una carga [[q]] por estar situada en un campo eléctrico. Cuando la carga se mueve a una posición donde el campo le resulta más favorable, esa energía se convierte en energía cinética. Cuando se mueve a una posición desfavorable, hay que aportarle energía desde el exterior.

La idea intuitiva es directa: imagina que colocas una carga positiva cerca de otra carga positiva. Como ambas se repelen, hay energía almacenada en esa configuración. Si las sueltas, la repulsión las acelera y la energía potencial se convierte en movimiento. Por el contrario, para acercar dos cargas del mismo signo tienes que empujar contra la repulsión, y ese trabajo que realizas queda almacenado como energía potencial del sistema.

El convenio de referencia estándar establece que [[U_e]] es cero cuando las cargas están infinitamente separadas. Cualquier sistema de cargas con separación finita tiene, en general, una energía potencial distinta de cero.

## 🔵 Nivel formal

La energía potencial eléctrica de una carga [[q]] situada en un punto del campo donde el potencial eléctrico vale [[V_A]] se expresa mediante la relación fundamental:

{{f:energia_potencial_punto}}

Esta expresión define [[U_e]] como el producto de la carga por el potencial en el punto. Su importancia física radica en que [[V_A]] es una propiedad del campo externo —generado por otras cargas o por el entorno—, mientras que [[q]] es la carga cuya energía se calcula. Duplicar [[q]] duplica [[U_e]]; duplicar [[V_A]] también duplica [[U_e]]. El signo de [[U_e]] lo determina el producto de los signos de [[q]] y [[V_A]].

Para un sistema específico de dos cargas puntuales [[q_1]] y [[q_2]] separadas una distancia [[r_12]], la energía potencial de interacción viene dada por la ley de Coulomb en forma energética:

{{f:energia_interaccion_coulomb}}

donde [[k_e]] es la constante de Coulomb. Esta fórmula muestra explícitamente la dependencia con la geometría del sistema: la energía es inversamente proporcional a la distancia. Si el producto [[q_1]]·[[q_2]] es positivo (cargas del mismo signo), [[U_e]] es positiva —interacción repulsiva, sistema con energía disponible para separarse—. Si el producto es negativo (cargas de signo opuesto), [[U_e]] es negativa —interacción atractiva, sistema ligado que necesita energía para separarse—.

Cuando una carga se desplaza entre dos puntos, la variación de energía potencial [[DeltaU_e]] está relacionada con el trabajo que realiza el campo eléctrico:

{{f:variacion_energia_potencial}}

El campo eléctrico realiza trabajo positivo sobre la carga cuando [[DeltaU_e]] es negativa, es decir, cuando la carga cede energía potencial al moverse. Esta relación es la base del principio de conservación de energía mecánica en sistemas electrostáticos: la suma de energía cinética y [[U_e]] se conserva cuando no actúan fuerzas no eléctricas.

## 🔴 Nivel estructural

La estructura más profunda de la energía potencial eléctrica reside en que el campo eléctrico es **conservativo**. Esto significa que el trabajo realizado por el campo al mover una carga entre dos puntos cualesquiera es independiente de la trayectoria seguida: solo depende de los puntos de inicio y llegada. Esta propiedad es la que hace posible definir la energía potencial como función del estado del sistema, no de su historia.

La independencia de la trayectoria tiene consecuencias profundas para la resolución de problemas. No hace falta conocer la fuerza en cada punto del camino; basta con evaluar [[U_e]] en el estado inicial y en el estado final. Esta es la razón por la que la energía potencial permite resolver con elegancia problemas que serían intratables si se intentara integrar la fuerza a lo largo de una trayectoria arbitraria.

La relación entre la energía potencial y la fuerza eléctrica también revela la arquitectura del campo. En una dimensión, la componente de la fuerza sobre la carga en una dirección es el negativo de la derivada de [[U_e]] respecto a la coordenada en esa dirección. Esto significa que la fuerza siempre apunta en la dirección en que [[U_e]] decrece más rápidamente. Una carga positiva libre, bajo la acción exclusiva del campo, siempre se desplazará hacia regiones de menor [[U_e]], es decir, hacia regiones de menor [[V_A]] (las líneas de campo van de mayor a menor potencial). Una carga negativa libre hará lo contrario.

La dependencia inversa con la distancia [[r_12]] de la energía de interacción coulombiana tiene consecuencias estructurales importantes. A diferencia de la energía gravitatoria entre masas —que también decae con la distancia pero siempre es negativa—, la energía potencial eléctrica puede ser positiva o negativa según el signo de las cargas. Esto permite sistemas ligados (cargas opuestas con [[U_e]] negativa) y barreras de potencial (regiones donde [[U_e]] positiva frena a la carga).

El principio de superposición garantiza que la energía de un sistema de más de dos cargas es la suma de las energías de todos los pares posibles. Esta suma se extiende a una integral para distribuciones continuas, conduciendo al concepto de densidad de energía del campo eléctrico.

Los límites del modelo son claros: es exacto solo para cargas puntuales en el vacío. En medios materiales, la permitividad apantalla la interacción; a distancias sub-atómicas, la electrodinámica cuántica toma el relevo.

## Interpretación física profunda

El signo de [[U_e]] es la primera lectura física que debe hacerse al calcularla. Un valor positivo indica una configuración con energía disponible: si se deja evolucionar libremente, el sistema puede liberar energía. Un valor negativo indica un estado ligado: el sistema necesita energía exterior para alcanzar la separación infinita. El valor absoluto de [[U_e]] cuando esta es negativa se llama energía de enlace y mide la estabilidad de la configuración.

[[DeltaU_e]] iguala el trabajo que realiza un agente externo moviendo la carga a velocidad constante. Un agente que lleva [[q]] positiva hacia mayor potencial realiza trabajo positivo que aumenta [[U_e]]; el campo realiza trabajo positivo al contrario. Además, [[U_e]] es siempre propiedad del sistema: hablar de “la energía de la carga [[q]]” significa la energía de interacción de [[q]] con el campo generado por el resto, no algo que [[q]] lleve consigo.

## Orden de magnitud

Las escalas típicas de [[U_e]] varían en muchos órdenes de magnitud según el contexto. En física atómica y molecular, la energía de interacción entre el electrón y el protón en el átomo de hidrógeno es aproximadamente −13.6 eV, equivalente a unos −2.2×10⁻¹⁸ J. Esta pequeña cantidad de energía es, suficiente para mantener el electrón ligado al núcleo.

## Método de resolución personalizado

Para calcular [[U_e]] de una carga [[q]] en un campo de potencial [[V_A]] conocido:

1. Identificar cuál es la carga cuya energía se busca y cuál es el potencial del campo externo en la posición de esa carga.
2. Aplicar la relación fundamental, verificando los signos de [[q]] y [[V_A]].
3. El resultado en joules es la energía almacenada en la interacción.

Para calcular la energía de interacción entre dos cargas puntuales [[q_1]] y [[q_2]]:

1. Medir o calcular la distancia de separación [[r_12]].
2. Introducir los valores con sus signos correctos en la fórmula coulombiana.
3. Interpretar el signo del resultado: positivo implica repulsión, negativo implica atracción.

Para aplicar la conservación de energía cuando una carga se mueve entre dos puntos:
1. Calcular [[U_e]] en el estado inicial y en el estado final.
2. La variación [[DeltaU_e]] es igual al negativo del trabajo del campo eléctrico.
3. Si la energía cinética inicial y final son conocidas, la diferencia de [[U_e]] da el trabajo neto de todos los agentes no eléctricos.

## Casos especiales y ejemplo extendido

**Carga en el interior de un conductor**: dentro de un conductor en equilibrio electrostático, el campo eléctrico es nulo y el potencial es constante. Por tanto, [[U_e]] de cualquier carga situada en cualquier punto del interior del conductor es la misma. Una carga pequeña moviéndose dentro del conductor no experimenta variación de [[U_e]] y, por tanto, el campo no realiza trabajo sobre ella: esto es coherente con el campo nulo interior.

**Sistema de carga negativa y potencial positivo**: si [[q]] es negativa y [[V_A]] es positivo, [[U_e]] es negativa. La carga tiende a moverse hacia regiones de mayor potencial (a diferencia de las cargas positivas, que van hacia menor potencial). Esta asimetría es fundamental en el movimiento de electrones en circuitos y en la física de semiconductores.

**Dos cargas iguales acercándose**: al reducir [[r_12]] entre dos cargas del mismo signo, [[U_e]] aumenta monótonamente. Todo ese incremento de energía proviene del trabajo que realizó el agente externo que las acercó. Si en un momento dado se retira ese agente, la repulsión convierte esa energía potencial en energía cinética: las cargas se alejan acelerando hasta que prácticamente toda la [[U_e]] inicial se ha convertido en energía cinética.

## Preguntas reales del alumno

**¿Por qué [[U_e]] puede ser negativa?**

El sistema está en un estado más estable que la referencia (cargas en el infinito). [[U_e]] negativa no viola ningún principio: para separar el sistema hasta la referencia hay que aportarle exactamente esa cantidad de energía.

**¿Por qué la energía no depende de la trayectoria si la fuerza sí varía de un punto a otro?**

Porque el campo eléctrico es conservativo: el trabajo solo depende de los extremos, no del camino. El campo deriva de un potencial escalar, lo que matemáticamente garantiza esta propiedad.

**¿Es [[U_e]] una propiedad de la carga o del campo?**

Es propiedad del sistema: de la interacción entre [[q]] y el campo del resto del sistema. No pertenece solo a [[q]] (que al moverse adquiere diferente [[U_e]]) ni solo al campo (que existiría sin carga de prueba).

## Conexiones transversales y rutas de estudio

La energía potencial eléctrica conecta directamente con la [diferencia de potencial](leaf:fisica-clasica/electromagnetismo/electrostatica/potencial-electrico/diferencia-de-potencial), que es [[DeltaU_e]] dividida entre la carga de prueba. Dominar este leaf es imprescindible para entender por qué la diferencia de potencial es el concepto operativo más útil en circuitos: elimina la dependencia en [[q]] y da una característica pura del campo.

Hacia adelante, la energía potencial eléctrica es la clave para entender la energía almacenada en condensadores, donde la energía es proporcional al cuadrado de la tensión aplicada. También es el punto de entrada a la física de sólidos: la energía de enlace entre iones en una red cristalina se calcula sumando energías de interacción coulombiana entre todos los pares.

La conexión con la mecánica clásica a través de la conservación de energía total (cinética más potencial eléctrica) es el puente que permite analizar aceleradores de partículas, tubos de rayos catódicos y la física del átomo de Bohr sin resolver ecuaciones diferenciales de movimiento.

## Síntesis final

La energía potencial eléctrica [[U_e]] cuantifica la energía almacenada en la interacción entre una carga y el campo eléctrico circundante. Su cálculo exige conocer el potencial [[V_A]] en la posición de la carga —o la geometría del sistema en el caso de la interacción directa entre dos cargas— y requiere prestar atención rigurosa a los signos, que determinan si la interacción es atractiva o repulsiva y si la energía está disponible para ser liberada o debe ser aportada desde el exterior.
`;export{e as default};
