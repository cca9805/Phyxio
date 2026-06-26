# Aplicaciones

## 1. Precipitadores electrostáticos industriales

Los precipitadores electrostáticos son dispositivos que eliminan partículas sólidas o líquidas del interior de corrientes de gas antes de ser emitidas a la atmósfera. El principio de funcionamiento es directo: las partículas en suspensión se cargan mediante una descarga corona y, una vez cargadas, la fuerza de Coulomb [[fuerza_de_coulomb]] entre la partícula y el electrodo opuesto las arrastra hacia la placa de colección, donde se depositan. Esta separación funciona porque la fuerza coulombiana sobre partículas microscópicas cargadas es enormemente superior a su peso, permitiendo una captura eficiente incluso a alta velocidad de gas.

La eficiencia del proceso depende de que la partícula adquiera carga suficiente y de que la distancia al electrodo sea la adecuada. La ley de Coulomb cuantifica ambos parámetros: una mayor carga [[q2]] de la partícula aumenta [[fuerza_de_coulomb]] linealmente, pero reducir a la mitad la distancia [[r12]] entre partícula y electrodo cuadruplica la fuerza. Por eso los precipitadores se diseñan con placas de colección lo suficientemente próximas para que la fuerza en la zona de captura sea dominante.

Variable dominante: la distancia entre las partículas cargadas y el electrodo de colección, porque [[fuerza_de_coulomb]] varía con el cuadrado inverso de esa separación y es la magnitud que controla la eficiencia de captura.
Límite de validez: el modelo de Coulomb para dos cargas puntuales deja de ser exacto cuando las partículas son tan grandes que su extensión es comparable a la distancia al electrodo, o cuando hay redistribución de carga en la superficie conductora del electrodo.

## 2. Microscopía de fuerzas atómicas (AFM)

El microscopio de fuerzas atómicas mide interacciones a escala nanométrica entre una punta metálica y la muestra que se explora. En modo no contacto, una de las contribuciones dominantes a la fuerza medida es la interacción coulombiana entre los átomos superficiales de la punta y los átomos de la muestra, especialmente cuando la superficie tiene dominios con carga diferencial o cuando la punta está funcionalizada.

En este contexto, la fuerza de Coulomb [[fuerza_de_coulomb]] entre la carga efectiva de la punta y la carga local de la muestra determina la deflexión del cantilever. La ley de Coulomb predice que [[fuerza_de_coulomb]] varía inversamente con el cuadrado de la distancia punta-muestra [[r12]], lo que permite obtener imágenes de resolución sub-nanométrica: cambios de décimas de nanómetro en [[r12]] producen variaciones mensurables en [[fuerza_de_coulomb]].

Variable dominante: la separación entre la punta y la muestra [[r12]], ya que [[fuerza_de_coulomb]] es extremadamente sensible a pequeñas variaciones de distancia a escala nanométrica, siendo el parámetro de control en la realimentación del instrumento.
Límite de validez: a distancias menores de 0.3 nm domina la repulsión de Pauli y la interacción de van der Waals, no la ley de Coulomb. Además, a esas distancias el modelo clásico de carga puntual no es aplicable y se requiere un tratamiento cuántico.

## 3. Diseño de trampa iónica en espectrometría de masas

Las trampas iónicas —como las trampas de Penning o Paul— confinan iones cargados en el espacio usando campos eléctricos y magnéticos. La trayectoria estable de un ion dentro de la trampa depende del equilibrio entre la fuerza eléctrica restauradora de los electrodos y las interacciones coulombianas entre los propios iones confinados. Cuando hay varios iones presentes, la fuerza de Coulomb entre iones vecinos puede perturbar las trayectorias individuales y degradar la resolución de masa.

La ley de Coulomb permite estimar la perturbación que un ion con carga [[q1]] ejerce sobre un vecino con carga [[q2]] separado una distancia [[r12]] dentro de la trampa. Para iones de carga elemental a distancias de micras, [[fuerza_de_coulomb]] puede ser del orden de femtonewtons, pero dado que la masa iónica es del orden de daltons, produce aceleraciones apreciables que el operador del instrumento debe compensar.

Variable dominante: la distancia entre iones confinados [[r12]], que controla la perturbación mutua entre trayectorias; aumentar la dilución del haz iónico (mayor [[r12]] promedio) reduce drásticamente [[fuerza_de_coulomb]] y mejora la resolución espectral.
Límite de validez: el modelo Coulomb clásico no distingue los estados cuánticos de los iones. Para iones en trampas de muy alta precisión (relojes de iones atrapados), las correcciones cuánticas y relativistas son relevantes aunque la fuerza dominante siga siendo coulombiana.

## 4. Estabilidad estructural de cristales iónicos

En un cristal iónico como el cloruro de sodio, la cohesión del sólido proviene de la suma de millones de interacciones coulombianas entre iones de carga opuesta (Na⁺ y Cl⁻) y la repulsión entre iones del mismo signo. La energía de red de Madelung es precisamente la suma de todas estas contribuciones coulombianas según la ley de Coulomb. El hecho de que los sólidos iónicos sean duros pero frágiles es consecuencia directa de la geometría de estas interacciones.

La ley de Coulomb predice que la energía de atracción entre iones opuestos es proporcional al producto de sus cargas y decae con [[r12]]. En la posición de equilibrio del cristal, la distancia interionica [[r12]] resulta del balance entre la atracción coulombiana y la repulsión de corto alcance entre núcleos. Modificar la presión equivale a cambiar [[r12]], lo que modifica [[fuerza_de_coulomb]] de forma inversa cuadrática y se refleja en el módulo de compresibilidad del cristal.

Variable dominante: la distancia interionica [[r12]], que determina tanto la cohesión (atracción entre iones opuestos [[fuerza_de_coulomb]]) como la resistencia a la compresión; la curva [[fuerza_de_coulomb]] vs [[r12]] tiene un mínimo en la distancia de equilibrio de red.
Límite de validez: la ley de Coulomb clásica entre pares de iones es válida para distancias superiores a la longitud de onda de De Broglie iónica. A presiones extremas que llevan los iones a separaciones subnanométricas, los efectos cuánticos de intercambio y correlación son comparables a Coulomb.

## 5. Aceleración y enfoque de haces de partículas en aceleradores

En los aceleradores de partículas lineales y circulares, las partículas cargadas —protones, iones pesados, electrones— forman paquetes que se propagan a lo largo del tubo de vacío. Dentro de cada paquete, las partículas se repelen mutuamente por la fuerza de Coulomb entre cargas del mismo signo, lo que tiende a dispersar el haz. Este efecto —llamado carga espacial— es la limitación principal para la intensidad del haz en aceleradores de baja y media energía.

La magnitud de la repulsión entre dos partículas del haz depende de [[q1]], [[q2]] (iguales para partículas idénticas) y de [[r12]] entre ellas. La ley de Coulomb establece que reducir la densidad de partículas (aumentar [[r12]] promedio) disminuye cuadráticamente la fuerza disruptiva. Los ingenieros de aceleradores diseñan la óptica magnética del haz —cuadrupolos y sextupolos— para compensar la divergencia inducida por [[fuerza_de_coulomb]] y mantener el haz enfocado.

Variable dominante: la separación media entre partículas del haz [[r12]], que determina la intensidad de la repulsión coulombiana intra-haz; la optimización del haz consiste en encontrar el compromiso entre densidad de partículas (necesaria para alta luminosidad) y separación suficiente (necesaria para reducir [[fuerza_de_coulomb]] y la divergencia).
Límite de validez: a energías relativistas, la fuerza de Coulomb se modifica por transformaciones de Lorentz: la componente transversal crece con el factor Lorentz mientras que la componente longitudinal se reduce. El modelo clásico de Coulomb no relativista solo es válido para partículas con velocidades inferiores al 10% de la velocidad de la luz.