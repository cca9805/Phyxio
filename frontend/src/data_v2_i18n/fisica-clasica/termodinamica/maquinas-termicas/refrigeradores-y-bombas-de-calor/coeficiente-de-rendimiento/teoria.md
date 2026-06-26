# Teoría — Coeficiente de rendimiento

## Contexto conceptual

El coeficiente de rendimiento (COP) es la magnitud que cuantifica la eficiencia de los ciclos termodinámicos invertidos: refrigeradores y bombas de calor. A diferencia del rendimiento térmico de un motor, que siempre es menor que uno, el COP puede ser mucho mayor que uno porque mide calor transferido por unidad de trabajo, no calor convertido en trabajo. El problema central que resuelve es determinar cuánto calor puede extraerse de un espacio frío o entregarse a un espacio caliente por cada unidad de energía consumida, y cuál es el límite termodinámico impuesto por la segunda ley a esa capacidad.

## 🟢 Nivel esencial

Un refrigerador es una máquina que extrae calor [[Q_C]] de un foco frío (espacio refrigerado a temperatura [[T_C]]) y lo entrega al foco caliente (ambiente exterior a temperatura [[T_H]]), consumiendo trabajo [[W]] del compresor. Una bomba de calor es la misma máquina pero con objetivo inverso: entregar calor al espacio a calentar extrayéndolo del ambiente exterior frío.

El coeficiente de rendimiento de refrigeración [[COP_ref]] mide cuántas unidades de calor se extraen del foco frío por cada unidad de trabajo. El coeficiente de rendimiento de bomba de calor [[COP_bc]] mide cuántas unidades de calor se entregan al foco caliente por cada unidad de trabajo.

Ambos COP pueden ser mayores que uno porque no violan la segunda ley: no convierten calor en trabajo sino que transfieren calor de un foco a otro consumiendo trabajo. La relación fundamental entre ambos es que [[COP_bc]] es siempre exactamente [[COP_ref]] más uno, porque el foco caliente recibe tanto el calor extraído como el trabajo consumido.

## 🔵 Nivel formal

La definición de COP de refrigeración es:

{{f:cop_refrigeracion}}

La definición de COP de bomba de calor es:

{{f:cop_bomba_calor}}

El balance energético del ciclo invertido establece:

{{f:balance_energetico_cop}}

El COP máximo teórico de Carnot para refrigeración es:

{{f:cop_carnot_ref}}

El COP máximo teórico de Carnot para bomba de calor es:

{{f:cop_carnot_bc}}

La relación entre ambos COP se deduce directamente del balance energético:

{{f:relacion_cop}}

El [[COP_ref]] de Carnot depende exclusivamente de las temperaturas absolutas de los dos focos. Cuando [[T_C]] se acerca a [[T_H]], la diferencia en el denominador se reduce y el COP diverge: extraer calor entre dos focos a temperaturas similares requiere muy poco trabajo. Cuando [[T_C]] tiende a cero, el COP tiende a cero: extraer calor de un foco muy frío es termodinámicamente muy costoso. El [[COP_bc]] de Carnot sigue el mismo comportamiento pero desplazado una unidad hacia arriba. El [[W]] consumido disminuye cuando la diferencia [[T_H]] menos [[T_C]] se reduce, y aumenta cuando la diferencia crece.

El [[Q_H]] entregado al foco caliente siempre es mayor que [[Q_C]] porque incluye el trabajo [[W]] del compresor. Esta es la razón por la que las bombas de calor son más eficientes que la calefacción eléctrica directa: cada kWh eléctrico puede entregar 3 a 5 kWh térmicos.

## 🔴 Nivel estructural

La estructura del COP de Carnot revela una asimetría fundamental: mientras que el rendimiento de Carnot de un motor está acotado entre cero y uno, el COP de un ciclo invertido puede tomar cualquier valor positivo. Esto refleja la diferencia conceptual entre convertir calor en trabajo (limitado por la segunda ley) y transferir calor de un foco a otro (facilitado por trabajo externo).

La condición de validez más importante del modelo de COP de Carnot es la reversibilidad del ciclo. Los ciclos reales de refrigeración por compresión de vapor tienen irreversibilidades significativas: caídas de presión en tuberías, compresión no isentrópica, diferencias finitas de temperatura en los intercambiadores de calor, y pérdidas por subenfriamiento y sobrecalentamiento del refrigerante. Estas irreversibilidades reducen el COP real a un 30 a 60 % del COP de Carnot.

La dependencia del COP con la diferencia de temperaturas tiene implicaciones prácticas profundas. Para refrigeración doméstica con [[T_C]] de 255 K y [[T_H]] de 308 K, el COP de Carnot es 4.8 pero el COP real es 2 a 3. Para congelación industrial con [[T_C]] de 233 K y [[T_H]] de 308 K, el COP de Carnot cae a 3.1 y el real a 1 a 2. Para criogenia a 77 K (nitrógeno líquido) con [[T_H]] de 300 K, el COP de Carnot es solo 0.35, lo que explica el enorme coste energético de la licuefacción de gases.

La relación [[COP_bc]] igual a [[COP_ref]] más uno tiene una demostración elegante que parte del balance energético. Dividiendo el balance por [[W]] se obtiene que [[Q_H]] dividido entre [[W]] es igual a [[Q_C]] dividido entre [[W]] más uno, es decir, [[COP_bc]] es [[COP_ref]] más uno. Esta relación es exacta y universal, válida para cualquier ciclo invertido entre dos focos.

## Interpretación física profunda

El COP de Carnot para refrigeración tiene una interpretación geométrica en el diagrama T-s: el área bajo la isoterma inferior (proporcional a [[Q_C]]) dividida entre el área encerrada por el ciclo (proporcional a [[W]]). Cuando las dos isotermas se acercan, el área encerrada se reduce mucho más rápido que el área bajo la isoterma inferior, y el COP diverge.

La sensibilidad del COP a la diferencia de temperaturas es la clave de diseño de todo sistema de refrigeración y calefacción. Un refrigerador doméstico que mantiene el interior a menos 18 grados Celsius con el condensador a 35 grados Celsius opera con una diferencia de 53 K. Si la temperatura del condensador sube a 45 grados Celsius (día caluroso), la diferencia sube a 63 K y el COP de Carnot cae de 4.8 a 4.0, un descenso del 17 % que se traduce directamente en mayor consumo eléctrico.

Para bombas de calor, el COP tiene una implicación económica directa: un [[COP_bc]] de 4 significa que por cada kWh eléctrico consumido se entregan 4 kWh térmicos al espacio calefactado. Si la electricidad cuesta cuatro veces más que el gas natural por kWh, la bomba de calor iguala el coste de la caldera de gas. Con [[COP_bc]] mayor que 4, la bomba de calor es más económica, lo que ocurre cuando la diferencia [[T_H]] menos [[T_C]] es pequeña (climas templados).

## Orden de magnitud

Para un refrigerador doméstico típico con [[T_C]] de 255 K y [[T_H]] de 308 K, el COP de Carnot de refrigeración es 4.8 y el COP real es 2 a 3. Para una bomba de calor geotérmica con [[T_C]] de 283 K y [[T_H]] de 318 K, el COP de Carnot de bomba de calor es 9.1 y el COP real es 3.5 a 5. Para sistemas de aire acondicionado con [[T_C]] de 297 K y [[T_H]] de 313 K, el COP de Carnot de refrigeración es 18.6 y el COP real es 3 a 5.

## Método de resolución personalizado

Para resolver un problema de COP se recomienda seguir estos pasos. Primero, identificar si el sistema opera como refrigerador o como bomba de calor, según cuál sea el efecto útil. Segundo, identificar las temperaturas de los focos en kelvin. Tercero, calcular el COP de Carnot correspondiente al modo de operación. Cuarto, si se conoce [[W]] o [[Q_C]] o [[Q_H]], aplicar la definición del COP para obtener las magnitudes desconocidas. Quinto, verificar la coherencia usando el balance energético y la relación [[COP_bc]] igual a [[COP_ref]] más uno. Sexto, verificar que el COP calculado no supere el de Carnot.

## Casos especiales y ejemplo extendido

Caso especial uno: si [[T_C]] tiende a [[T_H]], ambos COP de Carnot tienden a infinito porque la diferencia en el denominador tiende a cero. Transferir calor entre focos a temperaturas casi iguales requiere un trabajo despreciable. Caso especial dos: si [[T_C]] tiende a cero, el COP de refrigeración de Carnot tiende a cero. Extraer calor del cero absoluto requeriría un trabajo infinito, coherente con la tercera ley. Caso especial tres: el COP de bomba de calor de Carnot nunca es menor que uno porque siempre se entrega al menos el trabajo consumido.

Ejemplo extendido: un refrigerador opera entre [[T_C]] de 260 K y [[T_H]] de 310 K. El COP de Carnot de refrigeración es 260 dividido entre la diferencia 310 menos 260, es decir, 260 dividido entre 50, que da 5.2. Si el COP real es el 50 % del de Carnot, el COP real es 2.6. Si el refrigerador consume 200 [[W]] de potencia eléctrica, la capacidad de refrigeración es 2.6 multiplicado por 200, es decir, 520 vatios de calor extraído del interior. El calor rechazado al ambiente es 520 más 200, es decir, 720 vatios.

## Preguntas reales del alumno

Pregunta uno: por qué el COP puede ser mayor que uno si el rendimiento térmico no puede? Porque miden cosas diferentes. El rendimiento térmico mide calor convertido en trabajo (limitado por la segunda ley a ser menor que uno). El COP mide calor transferido por unidad de trabajo. Transferir calor no viola ninguna ley cuando se consume trabajo.

Pregunta dos: es más eficiente una bomba de calor que una caldera? En términos de energía primaria, sí, siempre que el COP sea suficientemente alto. Con un [[COP_bc]] de 4, cada kWh eléctrico entrega 4 kWh térmicos, mientras que una caldera de gas entrega como máximo 0.95 kWh térmicos por cada kWh de gas.

Pregunta tres: por qué los refrigeradores consumen más electricidad en verano? Porque la temperatura exterior [[T_H]] sube mientras [[T_C]] permanece constante, aumentando la diferencia de temperaturas y reduciendo el COP, lo que requiere más [[W]] para extraer la misma cantidad de [[Q_C]].

## Conexiones transversales y rutas de estudio

El COP se conecta hacia atrás con el rendimiento de Carnot de motores térmicos (como inverso conceptual) y con la segunda ley de la termodinámica que establece el límite. Se conecta hacia adelante con el diseño de sistemas de refrigeración por compresión de vapor y con el análisis exergético de sistemas térmicos. Lateralmente, la relación [[COP_bc]] igual a [[COP_ref]] más uno es análoga a la conservación de energía aplicada a la definición de eficiencia.

## Síntesis final

El coeficiente de rendimiento cuantifica la eficiencia de refrigeradores y bombas de calor como calor transferido por unidad de trabajo. El COP de Carnot establece el límite máximo, que depende exclusivamente de las temperaturas absolutas de los focos. La relación fundamental [[COP_bc]] igual a [[COP_ref]] más uno conecta ambos modos de operación. La dependencia del COP con la diferencia de temperaturas explica por qué los sistemas de climatización son más eficientes en climas templados y por qué la criogenia es energéticamente costosa.
