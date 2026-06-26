## Contexto conceptual

La fuerza eléctrica es la interacción fundamental entre objetos que poseen carga eléctrica. Antes de que Coulomb la midiera con precisión en 1785, los filósofos naturales sabían que las cargas se atraían o repelían, pero no podían cuantificar esa acción. La ley de Coulomb puso número a la intuición y situó la electricidad al mismo nivel de rigor matemático que la gravitación newtoniana.

Dentro del árbol de Phyxio, la fuerza eléctrica ocupa el lugar de bisagra entre el concepto de carga (que describe la propiedad del objeto) y el concepto de campo eléctrico (que describe la propiedad del espacio). Comprender la fuerza eléctrica significa comprender por qué dos cargas "se sienten" a distancia y con qué intensidad lo hacen.

La relevancia práctica es enorme: la fuerza eléctrica mantiene los electrones ligados a los núcleos atómicos, determina la resistencia mecánica de los sólidos cristalinos y controla la química de los enlaces covalentes e iónicos. Sin la fuerza de Coulomb no habría materia condensada tal como la conocemos.

## 🟢 Nivel esencial

Dos partículas con [[q1]] y [[q2]] no nulas se atraen o se repelen mutuamente. Si ambas tienen el mismo tipo de carga, la fuerza [[fuerza_electrica_de_coulomb]] las separa; si tienen tipos contrarios, la fuerza las acerca. Este comportamiento es universal y no requiere contacto entre las partículas: actúa a distancia.

La intensidad de esa acción depende de cuánto valen [[q1]] y [[q2]], y de cuán lejos estén. Lo más importante a nivel intuitivo es que **duplicar la distancia no reduce la fuerza a la mitad, sino a una cuarta parte**: la dependencia con [[distancia_entre_cargas]] es cuadrática.

> [!NOTE]
> La fuerza eléctrica es siempre mutua: si [[q1]] empuja a [[q2]] con cierta fuerza, [[q2]] empuja a [[q1]] con exactamente la misma fuerza en sentido opuesto. Esto es la tercera ley de Newton aplicada a la electricidad.

## 🔵 Nivel formal

La relación matemática entre [[fuerza_electrica_de_coulomb]], [[q1]], [[q2]] y [[distancia_entre_cargas]] es la **ley de Coulomb**:

{{f:fuerza_coulomb}}

donde [[k_e]] es la constante de Coulomb, cuyo valor en el vacío es aproximadamente 8.988×10⁹ N·m²·C⁻². La fórmula muestra que [[fuerza_electrica_de_coulomb]] es **proporcional al producto de las cargas** y **proporcional a la inversa del cuadrado de la distancia**.

El signo de [[fuerza_electrica_de_coulomb]] sigue directamente del producto \([[q1]] \cdot [[q2]]\): si ambas cargas son positivas o ambas negativas, el producto es positivo y la fuerza es repulsiva; si tienen signos contrarios, el producto es negativo y la fuerza es atractiva.

De la ley de Coulomb se deduce directamente el **campo eléctrico** creado por [[q1]] en cualquier punto del espacio. En el punto donde se encuentra [[q2]], a distancia [[distancia_entre_cargas]], ese campo vale:

{{f:campo_electrico_coulomb}}

La diferencia conceptual entre [[fuerza_electrica_de_coulomb]] y [[campo_electrico_de_carga_puntual]] es fundamental: [[campo_electrico_de_carga_puntual]] es una propiedad del espacio creada por [[q1]] que existe aunque no haya [[q2]]. La fuerza [[fuerza_electrica_de_coulomb]] requiere la presencia de ambas cargas; el campo [[campo_electrico_de_carga_puntual]] solo requiere [[q1]].

> [!WARNING]
> La constante [[k_e]] tiene dimensiones de N·m²·C⁻². Trabajar con cargas en microcoulombios sin convertir a culombios introduce un error de factor 10⁻¹², haciendo el resultado completamente absurdo.

## 🔴 Nivel estructural

La ley de Coulomb comparte la misma estructura matemática de **cuadrado inverso** con la ley de gravitación universal de Newton, en la que la fuerza gravitatoria decrece con el cuadrado de la distancia. Sin embargo, hay diferencias físicas cruciales: la fuerza gravitatoria es siempre atractiva y proporcional a las masas, mientras que la fuerza eléctrica puede ser atractiva o repulsiva según los signos de las cargas. Además, [[k_e]] es del orden de 10⁹ N·m²·C⁻², lo que hace la interacción eléctrica miles de millones de veces más intensa que la gravitatoria a escala subatómica.

El **principio de superposición** es la propiedad que permite extender la ley de Coulomb a sistemas con más de dos cargas: la fuerza total sobre una carga es la suma vectorial de las fuerzas individuales de cada una de las demás cargas. Esta linealidad es una característica del electromagnetismo clásico y permite construir el campo eléctrico de cualquier distribución de carga mediante integración.

La ley de Coulomb tiene un **dominio de validez** bien definido. Funciona con alta precisión para cargas puntuales o distribuciones esféricas a distancias mucho mayores que el tamaño de las cargas. Falla a distancias menores de 10⁻¹⁵ m (escala nuclear), donde la fuerza fuerte supera con creces a la eléctrica. También falla si las cargas se mueven a velocidades cercanas a la de la luz, donde hay que usar el electromagnetismo relativista.

> [!TIP]
> La constante de Coulomb [[k_e]] y la permitividad del vacío están relacionadas de forma que [[k_e]] equivale a uno partido por cuatro pi veces la permitividad del vacío. Esta forma alternativa resulta más natural cuando se trabaja con la ley de Gauss o con condensadores planos, donde aparece la permitividad del vacío de forma directa.

La estructura del campo creado por una carga puntual es **radialmente simétrica**: [[campo_electrico_de_carga_puntual]] tiene el mismo módulo en todos los puntos a la misma distancia [[distancia_entre_cargas]], y apunta radialmente hacia fuera (para [[q1]] positiva) o hacia dentro (para [[q1]] negativa). Esta simetría es la que permite aplicar la ley de Gauss de forma elemental para obtener el campo de distribuciones esféricas, cilíndricas o planas con simetría alta.

El comportamiento límite más relevante es la **energía potencial eléctrica** asociada a la fuerza de Coulomb. Dado que la fuerza es conservativa (su trabajo no depende del camino, solo de las posiciones inicial y final), existe una función de energía potencial proporcional al producto de [[q1]] por [[q2]] dividida entre [[distancia_entre_cargas]] y multiplicada por [[k_e]]. Esta función de energía es la base del potencial eléctrico y conecta la ley de Coulomb con toda la electroestática de potenciales.

## Interpretación física profunda

El signo de [[fuerza_electrica_de_coulomb]] no es solo un convenio algebraico: es información física directa. Cuando el resultado de sustituir en la fórmula es negativo, el sistema es **energéticamente favorable** para acercarse: la fuerza hace trabajo positivo al reducir [[distancia_entre_cargas]], lo que se traduce en reducción de energía potencial. Cuando el resultado es positivo, separar las cargas requiere trabajo externo.

La magnitud de [[k_e]] explica por qué la materia ordinaria es eléctricamente neutra en su mayor parte: las fuerzas entre cargas de signo contrario son tan intensas que cualquier separación macroscópica de cargas genera fuerzas restauradoras enormes. Un gramo de electrones separado un metro de un gramo de protones experimentaría una fuerza del orden de 10²³ N, lo que es imposible de sostener mecánicamente.

> [!NOTE]
> La constante dieléctrica del medio reduce efectivamente [[k_e]] por la permitividad relativa del medio: en agua líquida, con permitividad relativa de aproximadamente 80, la fuerza entre dos iones es ochenta veces menor que en vacío. Este efecto explica la alta solubilidad de sales iónicas en agua.

## Orden de magnitud

Para dos cargas de 1 µC (10⁻⁶ C) separadas 1 cm (10⁻² m), la fuerza resultante es del orden de 90 N. Eso es el peso de unos 9 kg: una fuerza muy apreciable para cargas microscópicas.

Para el sistema electrón-protón en el átomo de hidrógeno, con cargas de ±1.6×10⁻¹⁹ C y distancia de 0.53×10⁻¹⁰ m, [[fuerza_electrica_de_coulomb]] es del orden de 8×10⁻⁸ N, lo que equivale a una aceleración del electrón de casi 10²² m/s². Cualquier resultado en un problema de cargas atómicas inferior a 10⁻¹⁰ N o superior a 10⁻⁶ N debe hacer saltar una señal de alerta.

Para detectar un resultado absurdo: si [[fuerza_electrica_de_coulomb]] supera el peso de un objeto macroscópico con cargas de laboratorio habituales (microculombios), algo está mal. Las cargas de laboratorio raramente superan 10 µC.

## Método de resolución personalizado

Para resolver cualquier problema con la ley de Coulomb, seguir esta secuencia:

1. **Identificar las cargas y sus valores en culombios**. Convertir explícitamente si están en µC o nC.
2. **Medir [[distancia_entre_cargas]] en metros**. No en centímetros ni en angstroms.
3. **Sustituir en la fórmula** manteniendo los signos de [[q1]] y [[q2]].
4. **Interpretar el signo del resultado**: positivo para repulsión, negativo para atracción.
5. **Verificar el orden de magnitud**: comparar con los rangos típicos antes de concluir.

Si el problema pide el campo [[campo_electrico_de_carga_puntual]] en lugar de [[fuerza_electrica_de_coulomb]], usar la segunda fórmula del leaf y recordar que [[campo_electrico_de_carga_puntual]] no depende de [[q2]].

## Casos especiales y ejemplo extendido

**Carga nula**: si [[q1]] o [[q2]] es cero, [[fuerza_electrica_de_coulomb]] es exactamente cero. No hay interacción aunque las cargas estén en contacto.

**Distancia tendiendo a cero**: la ley de Coulomb predice una fuerza que tiende a infinito. Físicamente esto no ocurre porque a distancias nucleares el modelo falla; en la práctica, los objetos cargados tienen tamaño finito y sus centros de carga no pueden coincidir.

**Sistema de tres cargas**: si hay tres cargas [[q1]], [[q2]] y una tercera \(q_3\), la fuerza total sobre [[q2]] es la suma vectorial de la fuerza de [[q1]] sobre [[q2]] y la de \(q_3\) sobre [[q2]]. El principio de superposición garantiza que cada par interactúa independientemente.

**Equilibrio electrostático**: se puede buscar el punto entre dos cargas donde una tercera carga de prueba queda en equilibrio. En ese punto, la fuerza de [[q1]] y la de [[q2]] sobre la carga de prueba se anulan exactamente. La posición de equilibrio depende de la razón entre [[q1]] y [[q2]] y de la distancia total entre ellas.

## Preguntas reales del alumno

**¿Por qué la fuerza disminuye con el cuadrado de la distancia y no simplemente con la distancia?**

La dependencia cuadrática no es arbitraria: refleja que la interacción se "diluye" en el espacio tridimensional. El "flujo" de la fuerza se reparte sobre una superficie esférica que crece con [[distancia_entre_cargas]]², por eso la densidad de fuerza cae con [[distancia_entre_cargas]]². Esta misma lógica explica la gravitación y la intensidad de la luz.

**¿Por qué multiplicar las cargas en lugar de sumarlas?**

La fuerza de Coulomb es una interacción entre pares de cargas. Duplicar cualquiera de las dos duplica el número de interacciones elementales que contribuyen a la fuerza total.

**¿Existe la fuerza eléctrica en el vacío absoluto, sin ninguna partícula intermediaria?**

Desde la perspectiva de la física clásica, sí. La teoría cuántica de campos explica la interacción mediante el intercambio de fotones virtuales, pero el resultado macroscópico es idéntico a la ley de Coulomb. A efectos del nivel formal, la fuerza actúa a través del vacío sin necesidad de ningún medio.

**¿Cómo sé si usar [[fuerza_electrica_de_coulomb]] o [[campo_electrico_de_carga_puntual]] para resolver un problema?**

Si el enunciado pregunta la fuerza sobre una carga específica, usa [[fuerza_electrica_de_coulomb]]. Si pregunta qué aceleración o fuerza experimentaría cualquier carga (sin especificarla), la respuesta correcta es [[campo_electrico_de_carga_puntual]], que no depende de la carga de prueba. Si el enunciado da [[campo_electrico_de_carga_puntual]] y pide [[fuerza_electrica_de_coulomb]], basta multiplicar por [[q2]].

## Conexiones transversales y rutas de estudio

La fuerza eléctrica conecta directamente con el **campo eléctrico** (leaf siguiente): el campo es simplemente la fuerza por unidad de carga. Comprender la ley de Coulomb en forma vectorial es el paso previo imprescindible para aplicar el principio de superposición en problemas con múltiples cargas.

Más adelante, la **ley de Gauss** reformula la misma información de la ley de Coulomb en términos de flujo de campo eléctrico, lo que resulta mucho más práctico para distribuciones de carga con simetría. La conexión matemática entre Coulomb y Gauss es la del teorema de la divergencia.

La analogía con la gravitación newtoniana es poderosa: misma estructura \(1/r^2\), superposición lineal y existencia de un potencial conservativo. La diferencia cualitativa es que la masa siempre es positiva (solo atracción gravitatoria) mientras que la carga puede ser positiva o negativa (atracción y repulsión eléctrica).

## Síntesis final

La ley de Coulomb es la relación cuantitativa que gobierna la fuerza entre cargas puntuales: proporcional al producto de [[q1]] y [[q2]], e inversamente proporcional al cuadrado de [[distancia_entre_cargas]]. Su estructura de cuadrado inverso es la misma que la de la gravedad, pero la presencia de signos en [[q1]] y [[q2]] añade la posibilidad de repulsión, que la gravitación no tiene. Es el punto de partida de toda la electrostática clásica.