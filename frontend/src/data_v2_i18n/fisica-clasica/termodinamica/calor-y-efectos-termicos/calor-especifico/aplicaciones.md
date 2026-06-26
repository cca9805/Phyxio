## 1. Gestión del frío en sistemas de climatización con agua como fluido caloportador

Los sistemas de refrigeración de grandes edificios y centros de datos usan agua enfriada como fluido caloportador en circuitos cerrados. El agua absorbe el calor disipado por los equipos y lo transporta hasta las enfriadoras exteriores. La eficacia del sistema depende directamente de [[c]] del agua: al ser alto (4186 J/(kg·K)), se puede extraer una gran cantidad de calor con variaciones de temperatura modestas (típicamente [[DeltaT]] de 5 a 10 K entre ida y retorno). Esto reduce el caudal necesario y, en consecuencia, el consumo energético de las bombas.

Si se usara un fluido con [[c]] más bajo, como aceite mineral (≈2000 J/(kg·K)), se necesitaría el doble de caudal másico para transferir la misma potencia con el mismo [[DeltaT]], lo que duplicaría la potencia hidráulica de las bombas y el coste operativo.

Variable dominante: el calor específico [[c]] del fluido caloportador, que determina la energía por unidad de masa y de variación de temperatura que puede transportar el circuito.
Límite de validez: el modelo de calor sensible con [[c]] constante es válido mientras el fluido permanezca en fase líquida. Si la temperatura baja por debajo del punto de congelación del fluido, la mezcla anticongelante puede alterar [[c]] y el modelo requiere ajuste tabular.

## 2. Identificación de materiales por calorimetría de mezclas en química analítica

La determinación del calor específico de un material desconocido mediante calorimetría de mezclas es una técnica estándar en química analítica y ciencia de materiales. Se calienta una muestra del material hasta una temperatura conocida, se introduce en un calorímetro con agua a temperatura conocida, y se mide la temperatura de equilibrio. A partir de [[c]] del agua, la masa del material y del agua, y las variaciones de temperatura, se calcula [[c]] del material desconocido.

La precisión del método depende de minimizar las pérdidas del calorímetro y de medir [[DeltaT]] con suficiente resolución. Una incertidumbre del 1 % en la medida de temperatura produce una incertidumbre directa del 1 % en [[c]], porque [[c]] es proporcional al cociente [[Q]] / [[DeltaT]]. Comparando el [[c]] obtenido con tablas de referencia, es posible acotar el material entre unas pocas opciones y confirmar la identificación con otros análisis.

Variable dominante: el [[DeltaT]] del agua en el calorímetro, que es el denominador efectivo del cálculo de [[c]] del material desconocido. Un [[DeltaT]] del agua mayor reduce el error relativo de la medida.
Límite de validez: la técnica es válida mientras [[c]] del material sea constante en el rango de temperatura del experimento. Para materiales con [[c]] fuertemente variable con T (como ciertos polímeros o aleaciones), el valor determinado es solo un promedio del rango ensayado.

## 3. Diseño de disipadores térmicos en electrónica de potencia

Los disipadores de calor en convertidores de potencia, amplificadores de audio y módulos de iluminación LED deben absorber los picos de calor transitorios sin que la temperatura del componente supere el límite de seguridad. El parámetro de diseño es la capacidad calorífica total [[C_total]] del disipador, que determina cuánta energía puede absorber por cada kelvin de aumento de temperatura.

El aluminio (c ≈ 900 J/(kg·K), densidad ≈ 2700 kg/m³) es el material estándar para disipadores porque combina una capacidad calorífica volumétrica razonable (densidad × c ≈ 2 430 000 J/(m³·K)) con baja densidad y alta conductividad térmica. El cobre (c ≈ 386 J/(kg·K), densidad ≈ 8900 kg/m³) tiene una capacidad calorífica volumétrica similar (≈ 3 430 000 J/(m³·K)) pero es más pesado y costoso, por lo que se reserva para aplicaciones de alta potencia donde la conductividad térmica superior es determinante.

Variable dominante: la capacidad calorífica total [[C_total]] del disipador, que escala con la masa del material y determina el amortiguamiento de los picos de temperatura durante transitorios de potencia.
Límite de validez: el modelo de [[c]] constante es válido en el rango operativo habitual de disipadores (0–150 °C). La conductividad térmica del material, no solo [[c]], determina la uniformidad de temperatura en el disipador; un [[c]] alto sin alta conductividad solo amortigua la temperatura superficial, no la distribución interna.

## 4. Regulación climática oceánica y estabilidad del clima costero

Los océanos actúan como el principal regulador térmico del sistema climático terrestre gracias al alto [[c]] del agua líquida. Los océanos pueden absorber o liberar enormes cantidades de energía solar con variaciones de temperatura relativamente pequeñas, amortiguando las fluctuaciones térmicas estacionales. Las zonas costeras tienen climas más suaves que las continentales porque la proximidad al océano les proporciona un gigantesco depósito de calor cuya temperatura varía lentamente.

La capacidad calorífica total del océano global (masa ≈ 1.4 × 10²¹ kg, [[c]] ≈ 3900 J/(kg·K) para agua marina) es aproximadamente 5.5 × 10²⁴ J/K. Esto significa que para que la temperatura media del océano superficial subía un kelvin, se necesita absorber unos 5.5 × 10²⁴ julios de energía extra, una cantidad equivalente a varias décadas de la potencia solar que llega a la Tierra. Esta inercia térmica masiva explica por qué el océano responde tan lentamente a los cambios en el forzamiento climático.

Variable dominante: el calor específico [[c]] del agua de mar, que determina la cantidad de energía solar que pueden absorber los océanos por kelvin de calentamiento.
Límite de validez: el modelo de [[c]] constante es una buena aproximación para el agua de mar en el rango 0–30 °C de temperatura superficial. [[c]] del agua de mar varía ligeramente con la salinidad y la presión en aguas profundas, pero el efecto es inferior al 2 % en condiciones oceánicas normales.

## 5. Control de temperatura en moldes de inyección de plástico industrial

En los procesos de moldeo por inyección, el plástico fundido (a temperaturas entre 200 °C y 300 °C) se inyecta en un molde metálico que debe enfriarlo rápidamente hasta la temperatura de desmolde (60–80 °C). El tiempo de ciclo del proceso —y por tanto la productividad de la máquina— depende directamente de la velocidad con que el molde puede absorber el calor del plástico y cederlo al agua de refrigeración que circula por sus canales internos.

El acero del molde (c ≈ 490 J/(kg·K)) tiene una [[C_total]] determinada por su masa. Para un ciclo dado, el calor que debe extraerse del plástico es el producto de la masa de la pieza, [[c]] del plástico y [[DeltaT]] de solidificación. El agua de refrigeración extrae ese calor absorbiendo [[Q]] a través de los canales; la eficacia del enfriamiento depende del caudal de agua, [[c]] del agua y la diferencia de temperatura entre el molde y el agua de refrigeración.

Variable dominante: la capacidad calorífica total [[C_total]] del sistema molde + pieza, que determina el tiempo de enfriamiento necesario para que la temperatura baje hasta el valor de desmolde.
Límite de validez: el modelo de [[c]] constante es válido para el acero del molde en el rango 20–300 °C con error inferior al 8 %. Para el plástico, [[c]] puede variar de forma significativa durante la solidificación (especialmente en plásticos semicristalinos, donde hay un calor latente de cristalización), y en ese rango el modelo de calor sensible solo es una aproximación.
