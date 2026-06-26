const e=`# Temperatura\r
\r
## Contexto conceptual\r
\r
La temperatura es una de las magnitudes más cotidianas y, a la vez, una de las más difíciles de definir con rigor físico. Todo el mundo tiene una intuición de lo que significa "caliente" o "frío", pero esa percepción subjetiva no basta para la física. La temperatura necesita una definición cuantitativa, una escala reproducible y una conexión con la estructura microscópica de la materia.\r
\r
Históricamente, las primeras escalas de temperatura fueron operacionales: se escogían dos puntos de referencia reproducibles (fusión del hielo, ebullición del agua) y se dividía el intervalo en partes iguales. Celsius, Fahrenheit y Réaumur adoptaron este enfoque y obtuvieron escalas con ceros arbitrarios. El avance conceptual decisivo llegó con la termodinámica del siglo XIX, cuando se demostró que existía un límite inferior absoluto de temperatura —el cero absoluto— y que era posible definir una escala independiente del material termométrico.\r
\r
Este leaf se centra en tres aspectos prácticos e imprescindibles: la definición física de temperatura como magnitud de estado, las tres escalas de uso más frecuente (Celsius, Kelvin y Fahrenheit) con sus conversiones exactas, y la distinción crucial entre temperatura absoluta [[T_K]] y variación de temperatura [[DeltaT]], que es el error más frecuente de termodinámica en secundaria y bachillerato.\r
\r
## 🟢 Nivel esencial\r
\r
La temperatura mide **cuán caliente o frío** está un cuerpo. Pero más precisamente: es la magnitud que determina si hay flujo de calor entre dos cuerpos en contacto. Si dos cuerpos tienen la misma temperatura, no hay flujo de calor entre ellos; si tienen temperaturas distintas, el calor fluye espontáneamente del más caliente al más frío.\r
\r
Para medir la temperatura necesitamos una **escala**. En ciencia se usan principalmente tres:\r
\r
- **Kelvin (K)**: la escala absoluta del SI. Su cero es el cero absoluto, el punto de menor energía térmica posible. Nunca hay temperaturas negativas en kelvin. El agua congela a 273 K y hierve a 373 K.\r
\r
- **Celsius (°C)**: la escala cotidiana en Europa y ciencia aplicada. El cero corresponde al punto de fusión del agua y 100 °C a su ebullición. Puede ser negativa. Un grado Celsius tiene el mismo tamaño que un kelvin.\r
\r
- **Fahrenheit (°F)**: predomina en EE.UU. El agua congela a 32 °F y hierve a 212 °F. El grado Fahrenheit es más pequeño que el Celsius.\r
\r
Las tres escalas miden la misma magnitud física con distintos ceros y distintos tamaños de grado.\r
\r
## 🔵 Nivel formal\r
\r
La relación exacta entre Celsius y kelvin es:\r
\r
{{f:conversion_celsius_kelvin}}\r
\r
El desplazamiento de 273.15 refleja que el cero Celsius está 273.15 kelvins por encima del cero absoluto. Esta relación es una definición exacta del Bureau Internacional de Pesos y Medidas, no una aproximación.\r
\r
La relación entre Fahrenheit y Celsius es:\r
\r
{{f:conversion_fahrenheit_celsius}}\r
\r
El factor 9/5 aparece porque el intervalo entre los puntos de referencia del agua se divide en 180 partes en Fahrenheit y 100 partes en Celsius: 180/100 es igual a 9/5. El término +32 desplaza el origen de la escala Fahrenheit.\r
\r
La variación de temperatura en un proceso se define como:\r
\r
{{f:variacion_temperatura}}\r
\r
donde [[DeltaT]] positivo indica calentamiento y [[DeltaT]] negativo indica enfriamiento. Para variaciones de temperatura —a diferencia de temperaturas absolutas— Celsius y kelvin producen el mismo valor numérico, ya que el desplazamiento de 273.15 se cancela en la resta.\r
\r
Formalmente hay que separar dos operaciones: convertir un estado absoluto y calcular una diferencia entre estados. La primera conserva el estado físico cambiando origen y escala; la segunda compara estados y elimina desplazamientos fijos.\r
\r
Los despejes de estas fórmulas permiten calcular cualquiera de las tres temperaturas conociendo las demás, o determinar qué temperatura inicial o final produce una variación [[DeltaT]] especificada.\r
\r
## 🔴 Nivel estructural\r
\r
La definición termodinámica de temperatura es independiente de cualquier material termométrico. Se basa en el concepto de **equilibrio térmico**: dos sistemas que no intercambian calor cuando están en contacto tienen la misma temperatura. El zeroth law (ley cero de la termodinámica) formaliza esto: si A está en equilibrio con B, y B está en equilibrio con C, entonces A está en equilibrio con C. Esta propiedad transitiva es lo que hace posible definir la temperatura como una magnitud escalar consistente.\r
\r
La escala termodinámica kelvin puede definirse sin depender de una sustancia concreta. En una máquina reversible, los cocientes entre temperaturas absolutas determinan límites de eficiencia, de modo que [[T_K]] no es solo una escala práctica: es la escala físicamente fundamental.\r
\r
El cero absoluto representa el mínimo energético accesible del sistema. No significa ausencia total de movimiento microscópico, pero sí marca el límite inferior de la escala absoluta. El tercer principio afirma que no puede alcanzarse en un número finito de operaciones.\r
\r
La relación entre [[DeltaT]] en Celsius y en kelvin es exactamente igual porque ambas escalas tienen el mismo tamaño de grado: 1 K es igual a 1 °C en diferencias. La confusión entre temperatura absoluta y variación de temperatura es la fuente del error más dañino en termodinámica de secundaria: usar [[T_K]] cuando se necesita [[DeltaT]] (o viceversa) introduce errores de hasta varios órdenes de magnitud en las leyes de gases, la radiación o la dilatación.\r
\r
La temperatura tiene límite inferior absoluto, 0 K, pero no límite superior clásico. En laboratorio pueden alcanzarse nanokelvins; en cosmología temprana aparecen escalas enormes.\r
\r
## Interpretación física profunda\r
\r
La temperatura es una propiedad de **estado**, no de proceso. Un sistema tiene una temperatura en cada momento de su historia, y esa temperatura determina en qué dirección fluye el calor cuando entra en contacto con otro sistema. [[DeltaT]] es una propiedad de **proceso**: describe el cambio de temperatura a lo largo de un proceso, pero no es la temperatura en ningún instante específico.\r
\r
Esta distinción explica por qué [[DeltaT]] puede medirse en Celsius o en kelvin indistintamente (los 273.15 se cancelan), pero [[T_K]] no puede sustituirse por [[T_C]] en las leyes absolutas. Un gas a 27 °C está a 300 K, no a 27 K; si se usa [[T_C]] en la ley de los gases ideales, el volumen calculado sería más de diez veces menor que el real.\r
\r
## Orden de magnitud\r
\r
La temperatura de algunos sistemas representativos:\r
\r
- Cero absoluto: 0 K (–273 °C). Solo alcanzable experimentalmente hasta unos pocos nanokelvins.\r
- Nitrógeno líquido: 77 K (–196 °C). Referencia habitual en criogenia.\r
- Hielo en fusión: 273 K (0 °C). Punto de referencia del Celsius.\r
- Temperatura ambiente: aprox. 293 K (20 °C).\r
- Agua hirviendo: 373 K (100 °C).\r
- Temperatura corporal: aprox. 310 K (37 °C).\r
- Superficie solar: aprox. 5778 K (5505 °C).\r
\r
La magnitud de un grado Fahrenheit es 5/9 de un grado Celsius; por eso el rango entre fusión y ebullición del agua ocupa 180 °F y solo 100 °C.\r
\r
## Método de resolución personalizado\r
\r
1. **Identificar qué escala se necesita**: ¿se pide temperatura absoluta ([[T_K]]) para una ley termodinámica, temperatura práctica ([[T_C]]) para contexto cotidiano, o [[T_F]] para contexto anglosajón?\r
2. **Aplicar la conversión correcta**: de [[T_C]] a [[T_K]] sumar 273.15; de [[T_K]] a [[T_C]] restar 273.15; de [[T_C]] a [[T_F]] multiplicar por 9/5 y sumar 32; de [[T_F]] a [[T_C]] restar 32 y multiplicar por 5/9.\r
3. **Verificar el signo y el orden de magnitud**: [[T_K]] debe ser siempre positivo; [[T_C]] puede ser negativo; [[T_F]] puede ser negativo por debajo de –18 °C.\r
4. **Para variaciones de temperatura**: [[DeltaT]] se calcula como temperatura final menos temperatura inicial, en cualquier escala (Celsius o kelvin). Verificar que el signo coincida con el tipo de proceso (positivo para calentamiento, negativo para enfriamiento).\r
5. **No mezclar escalas**: si se trabaja con [[T_C]], mantener Celsius en todo el cálculo y convertir solo al final si es necesario.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Punto de equivalencia Celsius-Fahrenheit**: las dos escalas producen el mismo valor numérico en exactamente –40. Para valores por encima de –40, [[T_F]] es siempre numéricamente mayor que [[T_C]]. Para valores por debajo de –40, [[T_F]] es numéricamente menor que [[T_C]] (ambas negativas y [[T_F]] más negativa).\r
\r
**Temperatura corporal en distintas escalas**: la temperatura corporal normal humana es aproximadamente 37 °C, que equivale a 98.6 °F y a 310 K. En fiebre leve (38.5 °C), la conversión da 101.3 °F y 311.5 K. Esta correspondencia es un punto de verificación práctico para detectar errores en la conversión Celsius-Fahrenheit.\r
\r
**Variación nula y procesos isotérmicos**: un proceso isotérmico tiene [[DeltaT]] igual a cero. Esto no significa que la temperatura sea cero (lo que implicaría estar en el cero absoluto), sino que no ha cambiado. Un cambio de estado (fusión, ebullición) es el ejemplo paradigmático: se absorbe calor latente sin que la temperatura varíe, lo que produce [[DeltaT]] igual a cero aunque el proceso sea energéticamente activo.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué no puedo usar grados Celsius en la ley de los gases ideales?**\r
Porque esa ley requiere temperatura absoluta. [[T_C]] puede ser cero o negativo sin que el sistema tenga energía térmica nula; por eso debe usarse [[T_K]].\r
\r
**¿Por qué un cambio de 1 °C equivale a un cambio de 1 K?**\r
Porque ambas escalas tienen el mismo tamaño de grado. El desplazamiento de 273.15 solo afecta al valor del estado (temperatura en un instante dado), no a la diferencia entre dos estados. Al restar dos temperaturas en Celsius, los 273.15 se cancelan y el resultado es el mismo que en kelvin.\r
\r
**¿De dónde sale el factor 9/5 en Fahrenheit?**\r
Del cociente entre 180 divisiones Fahrenheit y 100 divisiones Celsius entre los puntos de referencia del agua.\r
\r
**¿Es posible una temperatura negativa en kelvin?**\r
En termodinámica clásica de equilibrio, no. Algunos sistemas cuánticos especiales permiten una definición efectiva negativa, pero quedan fuera de este leaf.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
La temperatura es el prerequisito directo de todos los demás leafs del bloque de calor: el leaf de [calor específico](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/calor-específico) usa [[DeltaT]] como variable central, el leaf de [dilatación](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/dilatacion) depende de [[DeltaT]] para calcular el cambio dimensional, y el leaf de [cambios de estado](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/cambios-de-estado) es precisamente el proceso donde [[DeltaT]] es cero aunque haya intercambio de energía.\r
\r
En mecánica estadística, la temperatura se conecta con la energía cinética media de traslación de las partículas de un gas ideal: la energía cinética media es proporcional a [[T_K]]. Esta es la conexión micro-macro más directa y pedagógicamente poderosa de la termodinámica.\r
\r
En termodinámica aplicada, [[T_K]] aparece en la eficiencia de Carnot, la ley de Stefan-Boltzmann (la potencia radiada es proporcional a [[T_K]] elevado a 4), la ley de Planck para la distribución espectral de la radiación y la ley de Wien para el pico del espectro de emisión.\r
\r
## Síntesis final\r
\r
La temperatura es la magnitud de estado que determina el equilibrio térmico entre sistemas y el sentido del flujo de calor. Las tres escalas de uso principal —kelvin, Celsius y Fahrenheit— miden la misma realidad física con ceros y tamaños de grado distintos. [[T_K]] es la única escala adecuada para leyes termodinámicas absolutas; [[T_C]] es equivalente a [[T_K]] solo en diferencias ([[DeltaT]]), no en valores absolutos. La conversión entre escalas es una definición exacta del SI, sin hipótesis físicas ni límites de validez adicionales más allá del cero absoluto.\r
`;export{e as default};
