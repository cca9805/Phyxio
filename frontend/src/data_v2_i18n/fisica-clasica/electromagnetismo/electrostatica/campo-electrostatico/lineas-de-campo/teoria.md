## Contexto conceptual

El campo eléctrico [[campo_electrico]] es una magnitud vectorial: en cada punto del espacio tiene módulo, dirección y sentido. Escribir un número en cada punto no es suficiente para comunicar esa información de forma rápida e intuitiva. Las líneas de campo son la solución gráfica: una familia de curvas orientadas que codifica simultáneamente la dirección, el sentido y la intensidad relativa del campo en todo el espacio.

Esta representación fue sistematizada por Michael Faraday en la primera mitad del siglo XIX, antes de que existiera el formalismo matemático de campo vectorial. Faraday concibió el espacio alrededor de las cargas como lleno de "tubos de fuerza" que transmitían la acción eléctrica de un punto a otro. Esa imagen intuitiva resultó ser físicamente correcta y matemáticamente poderosa.

Las líneas de campo no son una simplificación pedagógica: son la base de la ley de Gauss, del concepto de flujo eléctrico y de la interpretación geométrica del potencial eléctrico. Dominar su lectura e interpretación es prerequisito para comprender electrostática avanzada, electrodinámica y el comportamiento de condensadores.

## 🟢 Nivel esencial

Imagina que colocas una carga de prueba positiva en un punto del espacio donde hay un campo eléctrico. Esa carga siente una fuerza en una dirección determinada. Si en lugar de dejarla quieta la dejas moverse libremente siguiendo la fuerza en cada instante, traza una curva continua. Esa curva es una **línea de campo**.

La regla más importante es la de la **densidad**: donde las líneas están juntas, el campo [[campo_electrico]] es intenso; donde están separadas, el campo es débil. En las inmediaciones de una carga puntual las líneas se aprietan porque el campo crece mucho al acercarse. Lejos de ella se separan porque el campo decae.

Dos reglas completan el cuadro: las líneas **nacen en cargas positivas** y **terminan en cargas negativas**. Nunca se cruzan, porque en el punto de cruce el campo tendría dos direcciones simultáneas, lo que es imposible.

> [!NOTE]
> Las líneas de campo no son la trayectoria real de ninguna carga. Solo coinciden con la trayectoria cuando el campo es rectilíneo y la velocidad inicial de la carga es tangente a la línea. En campos curvos, la inercia desvía la trayectoria.

## 🔵 Nivel formal

La definición precisa de una línea de campo es: **una curva cuya tangente en cada punto es paralela al vector [[campo_electrico]] en ese punto**. Matemáticamente, si la curva se parametriza como r(s), la condición es dr/ds es paralelo a E(r).

El número de líneas que salen de una carga [[q_fuente]] es proporcional al valor absoluto de esa carga. Esta convención garantiza que la **densidad de líneas** [[rho_lineas]] sea proporcional al módulo del campo:

{{f:densidad_lineas_campo}}

donde la constante de proporcionalidad k depende del número total de líneas elegido para la carga de referencia. Esta relación es la que permite "leer" el módulo de [[campo_electrico]] en un diagrama sin calcular nada: basta contar las líneas por unidad de área perpendicular.

El flujo eléctrico [[flujo_electrico]] formaliza la idea de "cuántas líneas atraviesan una superficie". Para una superficie plana en un campo uniforme y con el ángulo [[angulo_campo]] entre [[campo_electrico]] y la normal:

{{f:flujo_electrico_superficie}}

El factor coseno es fundamental: si el campo es perpendicular a la superficie (ángulo nulo), todas las líneas la atraviesan y el flujo es máximo. Si el campo es tangente (ángulo de noventa grados), ninguna línea la atraviesa y el flujo es cero. Esta geometría es el núcleo de la ley de Gauss.

La **ley de Gauss** conecta el flujo total con la carga que genera las líneas. Para una superficie cerrada que encierra [[q_fuente]]:

{{f:carga_fuente_gauss}}

Esta relación cuantifica la convención: el número de líneas que salen de [[q_fuente]] es proporcional a su valor absoluto.

> [!TIP]
> Para calcular el flujo, lo primero es identificar el ángulo entre [[campo_electrico]] y la **normal exterior** a la superficie, no la normal interior. Un error en este signo invierte el signo del flujo.

## 🔴 Nivel estructural

Las líneas de campo satisfacen tres propiedades topológicas que se derivan directamente de las ecuaciones de Maxwell en régimen estático:

1. **Nacen y mueren en cargas**: en ausencia de cargas, las líneas no pueden comenzar ni terminar en el vacío. Si se observa una región sin cargas con líneas que se originan dentro de ella, hay un error en el diagrama.
2. **Nunca se cruzan**: la unicidad de la solución de las ecuaciones de Laplace y Poisson garantiza que [[campo_electrico]] tiene un único valor en cada punto regular del espacio. Dos líneas que se cruzaran implicarían dos valores distintos de [[campo_electrico]] en ese punto.
3. **Se cierran al infinito o en la carga opuesta**: para una carga positiva aislada, las líneas van al infinito. Para un dipolo, todas nacen en la carga positiva y terminan en la negativa.

La **arquitectura de las líneas** revela la geometría del campo inmediatamente. Para una carga puntual son radiales y su separación crece con el cuadrado de la distancia. Para un condensador ideal son paralelas y equidistantes (campo uniforme) y se curvan en los bordes. Para un dipolo dibujan un patrón toroidal que refleja la superposición vectorial de ambas cargas.

La ley de Gauss establece que el flujo neto [[flujo_electrico]] a través de cualquier superficie cerrada es proporcional a la carga encerrada: **el número neto de líneas que salen es proporcional a la carga interior**. Si el mismo número entra y sale, la carga neta es cero.

> [!WARNING]
> En campos variables en el tiempo (electrodinámica), [[campo_electrico]] tiene una componente inducida que genera líneas que se **cierran sobre sí mismas** (no nacen ni terminan en cargas). En ese régimen, la interpretación estática de líneas de campo es incompleta y debe complementarse con las líneas del campo magnético (campo B) y la propagación ondulatoria.

Los **efectos de borde** son una consecuencia directa de la ruptura de la simetría. En los extremos de un capacitor, las líneas de campo se curvan hacia el exterior porque no hay carga que las "guíe" en esa dirección. Este efecto es cuantificable y produce una capacitancia efectiva mayor que la del modelo ideal de placas infinitas.

## Interpretación física profunda

La densidad de líneas no es solo un artificio visual: es la proyección geométrica de la ley de Coulomb sobre el espacio. Una carga puntual emite líneas radiales en todas las direcciones. A medida que nos alejamos, esas líneas deben cubrir superficies esféricas cada vez más grandes. El área de una esfera crece con el cuadrado del radio, de modo que la densidad de líneas cae con el cuadrado de la distancia — exactamente como el campo. La geometría tridimensional del espacio es la causa profunda de la ley 1/r².

Cuando dos cargas de signos opuestos están presentes, sus campos se superponen vectorialmente. El resultado es que las líneas se curvan buscando los focos de carga opuesta. La zona entre las cargas, donde los campos de ambas se suman en la misma dirección, muestra las líneas más densas y por tanto el campo más intenso. Esta concentración de líneas en la zona intermedia es la visualización geométrica de la atracción coulombiana.

## Orden de magnitud

Un campo eléctrico atmosférico en día despejado vale aproximadamente 100 V/m, con las líneas apuntando hacia el suelo. En una tormenta, el campo puede alcanzar valores de orden 10 kV/m, y la ruptura dieléctrica del aire ocurre alrededor de 3 MV/m. En las proximidades de un conductor con carga superficial típica de 10 nC/m², el campo inmediatamente exterior ronda los 1000 V/m.

Para detectar resultados absurdos: si un cálculo de campo eléctrico para una carga de laboratorio (del orden de microcoulombios) a un centímetro de distancia da un valor inferior a 1 kV/m, hay un error. El campo de Coulomb a esa distancia supera los 100 MV/m. Del mismo modo, un campo de 10¹⁵ V/m para una carga normal indica un error de orden de magnitud.

## Método de resolución personalizado

Para trazar o interpretar un diagrama de líneas de campo:

1. **Identificar las cargas fuente** y su signo. Las líneas nacen en las positivas y terminan en las negativas.
2. **Asignar un número de líneas proporcional** al valor absoluto de cada carga. Si hay una carga de valor doble, debe tener el doble de líneas.
3. **Trazar las líneas saliendo radialmente** de cada carga positiva (y entrando radialmente en las negativas) para distancias pequeñas.
4. **Curvar las líneas** de modo que sean tangentes al campo resultante en cada punto, usando la superposición vectorial cuando hay varias cargas.
5. **Verificar que no se crucen** y que el número de líneas que salen de cada superficie cerrada sea consistente con la carga encerrada.
6. **Leer la densidad**: contar las líneas por unidad de longitud perpendicular en dos regiones para comparar módulos de [[campo_electrico]] relativos.

## Casos especiales y ejemplo extendido

**Campo uniforme entre placas paralelas.** Entre las placas de un condensador ideal, las líneas son rectas, paralelas y equidistantes. Esto significa que [[campo_electrico]] es constante en módulo, dirección y sentido. La densidad de líneas es la misma en todo el interior. Este es el único caso práctico donde la densidad de líneas es literalmente uniforme en una región extensa.

**Dipolo eléctrico.** Con una carga positiva y una negativa iguales, todas las líneas de la positiva terminan en la negativa. En el plano ecuatorial el campo apunta opuesto al momento dipolar; en el eje apunta igual al momento dipolar.

**Punto de equilibrio entre dos cargas del mismo signo.** Existe un punto donde [[campo_electrico]] es nulo: las contribuciones se cancelan. Las líneas rodean ese punto sin pasar por él. Una carga de prueba allí no siente fuerza neta.

## Preguntas reales del alumno

**¿Las líneas de campo son reales o son solo una representación?** Son una representación geométrica, no objetos físicos. El campo [[campo_electrico]] existe en cada punto del espacio y las líneas son una forma de visualizarlo. No hay un número fijo de líneas; elegimos cuántas trazar para que el diagrama sea informativo.

**¿Por qué una carga positiva no siempre sigue la línea de campo si la fuerza sobre ella es proporcional a [[campo_electrico]]?** Para una carga positiva, la fuerza es paralela a [[campo_electrico]] y por tanto tangente a la línea en ese instante. Sin embargo, si la carga tiene velocidad inicial no tangente a la línea, su inercia la desvía y la trayectoria resultante no coincide con la línea de campo.

**¿Qué pasa en el punto donde el campo es cero?** En ese punto no hay ninguna línea de campo. Las líneas se aproximan al punto pero se curvan para no pasar por él. Un ejemplo es el punto neutro entre dos cargas iguales del mismo signo.

**¿Cómo interpreto las líneas de campo en una zona sin cargas?** En ese espacio, las líneas pasan sin nacer ni morir. El espaciado entre ellas indica la variación de [[campo_electrico]]: si se aproximan al atravesar la zona, el campo crece; si se separan, el campo decrece.

## Conexiones transversales y rutas de estudio

Las líneas de campo son el punto de partida visual del **flujo eléctrico** y la **ley de Gauss**, que permite calcular campos con alta simetría de forma mucho más eficiente que la integración de contribuciones diferenciales. Ver el leaf sobre ley de Gauss.

La densidad de líneas entre las placas de un capacitor está directamente relacionada con la **capacitancia** y con la **energía almacenada**. Ver los leafs de condensadores y dieléctricos.

En electrodinámica, las líneas del campo eléctrico y las del campo magnético forman patrones acoplados en las **ondas electromagnéticas**. Las líneas de [[campo_electrico]] son transversales a la dirección de propagación y perpendiculares a las líneas del campo magnético (campo B).

## Síntesis final

Las líneas de campo eléctrico son la representación geométrica del vector [[campo_electrico]]: su tangente indica la dirección y sentido del campo, su densidad [[rho_lineas]] es proporcional al módulo, nacen en cargas positivas y terminan en negativas, y nunca se cruzan. El flujo [[flujo_electrico]] formaliza cuantitativamente la idea de "líneas que atraviesan una superficie", y la ley de Gauss convierte esa cuenta de líneas en una herramienta de cálculo precisa.