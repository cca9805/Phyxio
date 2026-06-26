## Contexto conceptual

El electromagnetismo clásico descansa sobre un pilar matemático que lo distingue de muchas otras ramas de la física: la **linealidad**. Cuando varios objetos cargados coexisten en el espacio, cada uno crea su propio campo eléctrico y ejerce su propia fuerza sobre los demás. La pregunta central es cómo se combinan todas esas influencias para producir el efecto total sobre una carga de prueba.

El principio de superposición responde a esa pregunta con una afirmación sorprendentemente simple: **la presencia de otras cargas no modifica la fuerza o el campo que cada carga individual crearía si estuviera sola**. Esto convierte un problema de N interacciones simultáneas en N problemas independientes cuyos resultados se suman vectorialmente.

Este principio no es una hipótesis de trabajo ni una aproximación: es una consecuencia directa de la linealidad de las ecuaciones de Maxwell. Sin él, la construcción de condensadores, antenas, circuitos integrados o resonadores de microondas sería computacionalmente inabordable.

## 🟢 Nivel esencial

Imagina que tres cargas rodean una carga de prueba. Cada una la atrae o la repele con su propia fuerza, como si las otras dos no existieran. El efecto total es la suma de esas tres fuerzas individuales, pero **sumadas como vectores**, es decir, teniendo en cuenta la dirección y el sentido de cada una.

Lo mismo ocurre con el campo eléctrico: si quieres saber el campo en un punto del espacio, calculas el campo que crearía cada carga fuente por separado y sumas todos esos campos vectorialmente. El resultado es [[campo_electrico_total]], que existe en ese punto del espacio independientemente de si colocas alguna carga de prueba allí.

La intuición clave es que **las cargas eléctricas no se perciben mutuamente en el cálculo de la fuerza sobre la carga de prueba**: cada una actúa directamente sobre ella como si las demás no estuvieran. Esta independencia es lo que hace que la física eléctrica sea calculable con los métodos del álgebra lineal.

## 🔵 Nivel formal

El principio de superposición para la fuerza eléctrica afirma que la fuerza total [[fuerza_electrica_total]] sobre una carga de prueba debida a [[numero_de_cargas_fuente]] cargas fuente es la suma vectorial de las [[numero_de_cargas_fuente]] fuerzas de Coulomb individuales:

{{f:superposicion_fuerza}}

donde cada término de la suma es la fuerza de Coulomb entre la carga fuente [[q_i]] y la carga de prueba, calculada a la distancia [[r_i]] entre ellas, y con el vector unitario que apunta desde [[q_i]] hacia el punto de observación.

De forma completamente paralela, el campo eléctrico total [[campo_electrico_total]] en cualquier punto del espacio es la suma vectorial de los campos individuales de cada carga fuente:

{{f:superposicion_campo}}

La diferencia conceptual fundamental entre las dos fórmulas es que [[fuerza_electrica_total]] depende de la carga de prueba (su valor aparece como factor multiplicativo), mientras que [[campo_electrico_total]] es una propiedad del espacio que no depende de si hay carga de prueba ni de cuánto vale. [[campo_electrico_total]] preexiste; [[fuerza_electrica_total]] solo aparece cuando se coloca una carga en ese punto.

La constante [[k_e]] actúa como factor de escala en cada término de la suma y tiene el mismo valor para todas las contribuciones. Las distancias [[r_i]] son específicas de cada carga fuente al punto de observación y en general son todas distintas.

> [!WARNING]
> La suma de superposición es **vectorial**, no escalar. Sumar los módulos de las fuerzas individuales sin respetar las direcciones es el error más común y siempre sobreestima [[fuerza_electrica_total]] salvo cuando todas las contribuciones son paralelas.

## 🔴 Nivel estructural

La superposición es una consecuencia de la **linealidad de las ecuaciones de Maxwell**. La ley de Gauss, la ley de Faraday y las demás ecuaciones son lineales en los campos eléctrico y magnético: si un conjunto de cargas genera un campo, y otro conjunto distinto genera otro campo, la combinación de ambos conjuntos genera exactamente la suma de los dos campos. No hay términos cruzados, no hay interferencia no lineal, no hay saturación en el vacío.

Esta propiedad se rompe en materiales no lineales: en un ferroeléctico o en un plasma intenso, el campo resultante no es la suma de los campos individuales porque el medio responde de forma diferente a cada frecuencia o intensidad. El principio de superposición es, por tanto, tanto una propiedad del campo eléctrico en el vacío como un criterio de clasificación de materiales: los que lo cumplen son los materiales lineales.

La estructura matemática de la suma de superposición tiene consecuencias geométricas importantes. Para dos cargas del mismo signo, [[fuerza_electrica_total]] sobre una tercera carga siempre tiene un **punto de fuerza nula** entre ellas donde las contribuciones se cancelan exactamente. Para dos cargas de signo contrario, ese punto de fuerza nula no existe entre ellas sino fuera del segmento que las une. La posición de ese punto de equilibrio depende del cociente de magnitudes de las cargas y de sus distancias al punto de prueba.

La generalización a distribuciones continuas de carga reemplaza la suma discreta por una integral: el principio de superposición sigue siendo válido pero ahora cada diferencial de carga contribuye a [[campo_electrico_total]] con su propio término. Esta continuación natural es el puente hacia la ley de Gauss y el potencial eléctrico, donde la superposición se expresa de forma global en lugar de punto a punto.

El número de términos marca la transición de método: dos o tres cargas admiten suma vectorial directa; distribuciones simétricas se resuelven mejor con la ley de Gauss; distribuciones arbitrarias requieren integración numérica.

> [!TIP]
> Para simplificar una suma de superposición, identificar primero la simetría del sistema. Si hay simetría de reflexión, muchos términos se cancelan por pares y la suma efectiva tiene muchos menos términos que [[numero_de_cargas_fuente]].

## Interpretación física profunda

El resultado [[fuerza_electrica_total]] nulo no significa que no haya fuerzas; significa que las fuerzas se **equilibran exactamente**. Un punto de equilibrio electrostático es una posición donde la carga de prueba no experimenta fuerza neta, pero sí experimenta fuerzas individuales de cada carga fuente. Si la carga se desplaza ligeramente del equilibrio, la suma de superposición cambia: si [[fuerza_electrica_total]] la devuelve a la posición original, el equilibrio es **estable**; si la aleja más, es **inestable**.

El signo de cada [[q_i]] en la suma determina el sentido de la contribución vectorial. Cambiar el signo de una carga fuente invierte su contribución al campo y a la fuerza, lo que puede transformar un punto de equilibrio estable en inestable o crear nuevos puntos de campo nulo.

La independencia del campo respecto a la carga de prueba tiene una implicación profunda: [[campo_electrico_total]] es una **descripción completa del efecto eléctrico** en una región del espacio, válida para cualquier carga que pase por allí, sea cual sea su valor. Esta independencia es la que justifica hablar de campo eléctrico como una entidad física real, no solo como un artificio de cálculo.

## Orden de magnitud

Para un sistema de dos cargas de 1 µC separadas 10 cm, el campo de cada una en el punto medio es del orden de 3.6×10⁵ N/C. Si las cargas son del mismo signo, los campos en el punto medio son iguales y opuestos y [[campo_electrico_total]] es nulo allí. Si son de signo contrario, los campos en el punto medio son iguales y del mismo sentido, y [[campo_electrico_total]] dobla el valor individual: del orden de 7.2×10⁵ N/C.

Un resultado de [[campo_electrico_total]] mayor de 10⁷ N/C para cargas de laboratorio (del orden de microcoulombios) debe hacer sospechar un error de unidades o una distancia expresada en centímetros sin convertir a metros.

Si [[fuerza_electrica_total]] sobre una carga de 1 nC en ese campo de 7.2×10⁵ N/C resulta ser del orden de 7.2×10⁻⁴ N, la verificación dimensional está bien: newtons por culombio multiplicado por culombios da newtons.

## Método de resolución personalizado

Para resolver cualquier problema de superposición:

1. **Etiquetar todas las cargas fuente** con subíndices del 1 al [[numero_de_cargas_fuente]], anotando su valor con signo.
2. **Medir la distancia [[r_i]]** desde cada carga fuente al punto de observación, expresada en metros.
3. **Calcular la contribución individual** de cada carga al campo o a la fuerza, con su módulo y su dirección.
4. **Descomponer en componentes** x e y cada contribución vectorial.
5. **Sumar por componentes** separadamente: todas las componentes x entre sí, todas las y entre sí.
6. **Calcular el módulo** del vector resultante con el teorema de Pitágoras y el ángulo con el arco tangente.

Si el sistema tiene simetría, identificarla primero: puede eliminar componentes enteras por cancelación sin necesidad de calcularlas.

## Casos especiales y ejemplo extendido

**Dos cargas iguales y del mismo signo:** las contribuciones al campo en el punto medio perpendicular al segmento que las une son iguales y paralelas (ambas apuntan en la misma dirección perpendicular), por lo que el campo en ese punto no es nulo sino el doble del campo individual. En cambio, en el punto medio del segmento las contribuciones son antiparalelas y se cancelan: [[campo_electrico_total]] es nulo.

**Dos cargas iguales y de signo contrario (dipolo eléctrico):** en el punto medio [[campo_electrico_total]] es máximo porque ambas contribuciones apuntan en el mismo sentido. A gran distancia el campo decae como la inversa del cubo, más rápido que el de una carga aislada, por cancelación parcial entre las dos contribuciones.

**Tres cargas en vértices de un triángulo equilátero, todas iguales y del mismo signo:** por simetría, la suma vectorial de los campos en el centro del triángulo es nula. Este resultado se puede obtener sin cálculo explícito, reconociendo que los tres vectores forman ángulos de 120° entre sí y se cancelan exactamente.

## Preguntas reales del alumno

**¿Por qué no se puede simplemente sumar los módulos de las fuerzas?**

Porque las fuerzas son vectores con dirección, no solo intensidades. Si dos fuerzas de 5 N actúan en sentidos contrarios, la fuerza resultante es cero, no 10 N. La suma de módulos solo es correcta cuando todas las contribuciones apuntan exactamente en la misma dirección.

**¿El principio de superposición vale para el campo magnético también?**

Sí, por la misma razón: las ecuaciones de Maxwell son lineales en todos los campos. El campo magnético total de varios imanes o corrientes es la suma vectorial de sus contribuciones individuales.

**¿Por qué [[campo_electrico_total]] puede ser nulo sin que ninguna carga individual haya desaparecido?**

Porque el campo eléctrico es un vector. Dos vectores iguales en módulo pero opuestos en dirección suman cero. Cada carga sigue estando presente y creando su propio campo; lo que se cancela es el efecto neto en ese punto particular del espacio, no las cargas en sí.

**¿Cuándo deja de ser válido el principio de superposición?**

En materiales no lineales cuya respuesta depende de la intensidad del campo. A efectos prácticos de ingeniería y física clásica, el principio es universalmente válido.

## Conexiones transversales y rutas de estudio

El principio de superposición es el puente directo hacia la **ley de Gauss**, que reformula la misma información de forma global usando el flujo del campo a través de una superficie cerrada. La ley de Gauss es más eficiente cuando el sistema tiene alta simetría.

La superposición del campo eléctrico es también el punto de partida del **potencial eléctrico**: el potencial total es la suma escalar de los potenciales individuales, lo que hace su cálculo más sencillo que la suma vectorial de campos. Después del potencial, la siguiente ruta es la energía del sistema de cargas y su relación con el trabajo de ensamblaje.

El mismo patrón de linealidad rige el campo magnético, la radiación y la mecánica cuántica de ondas, lo que convierte la superposición en una de las estructuras conceptuales más potentes de la física teórica.

## Síntesis final

El principio de superposición establece que el campo eléctrico total y la fuerza eléctrica total sobre una carga de prueba son las sumas vectoriales de las contribuciones individuales de cada carga fuente, calculadas independientemente. Esta propiedad, consecuencia directa de la linealidad de las ecuaciones de Maxwell, transforma el problema de N interacciones simultáneas en N cálculos independientes. Su correcto uso exige suma vectorial estricta por componentes, inclusión de todos los signos, y medición de las distancias [[r_i]] desde cada carga fuente al punto de observación.