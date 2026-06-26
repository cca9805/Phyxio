## 1. Determinación experimental del calor específico de materiales por el método de mezclas

El método de mezclas calorimétrico es la técnica estándar para medir el calor específico [[c_i]] de materiales sólidos en el laboratorio. Se calienta la muestra hasta una temperatura conocida, se introduce en un calorímetro con agua a temperatura ambiente, y se mide la temperatura de equilibrio [[T_eq]]. Aplicando el principio de calorimetría con la condición de suma de [[Q_i]] igual a cero, se despeja [[c_i]] del material desconocido directamente.

La precisión del método depende de minimizar las pérdidas de calor al entorno (reduciendo el tiempo de transferencia y usando calorímetros de buen aislamiento) y de medir con exactitud las masas y temperaturas. Con cuidado experimental, se pueden obtener valores de [[c_i]] con incertidumbre inferior al 5 %, suficiente para identificar el material comparando con tablas de referencia.

Variable dominante: la temperatura de equilibrio [[T_eq]] medida experimentalmente, cuya precisión determina directamente la precisión del [[c_i]] calculado. Un error de 0.1 K en [[T_eq]] produce un error relativo de aproximadamente el 2 % en [[c_i]] para experimentos de laboratorio estándar.
Límite de validez: el método es válido mientras el material no sufra cambios de estado en el rango de temperatura del experimento y mientras [[c_i]] sea esencialmente constante en ese rango. Para materiales con [[c_i]] fuertemente dependiente de T, el valor determinado es solo un promedio del rango ensayado.

## 2. Control de temperatura en sistemas de calefacción solar de agua sanitaria

Los sistemas de calefacción solar de agua sanitaria acumulan energía solar en depósitos de agua caliente y la mezclan con agua fría de red para obtener el caudal a la temperatura de consumo deseada. El control de la mezcla sigue exactamente el principio calorimétrico: la temperatura de mezcla es la media ponderada de las temperaturas del agua caliente del acumulador y del agua fría de red, con pesos iguales a sus caudales másicos por el [[c_i]] del agua.

El diseñador del sistema calcula el caudal de agua caliente necesario para alcanzar una temperatura de ducha de 40 °C, dado que el acumulador está a 65 °C y el agua de red está a 12 °C. Aplicando el principio calorimétrico a flujo continuo (en lugar de a masas discretas), la fracción de agua caliente necesaria es (40 − 12) / (65 − 12) ≈ 0.53: aproximadamente el 53 % del caudal total debe ser agua caliente del acumulador.

Variable dominante: la temperatura del agua del acumulador solar, que determina la proporción de mezcla y por tanto el caudal total de agua utilizada por unidad de caudal de agua caliente solar disponible.
Límite de validez: el modelo de mezcla calorimétrica sin pérdidas es válido para tiempos de mezcla cortos en el interior de la válvula termostática. En conducciones largas, las pérdidas térmicas a las paredes modifican la temperatura de llegada y el modelo requiere corrección por las pérdidas de la conducción.

## 3. Templado y selección del fluido de temple en tratamientos térmicos de metales

En los procesos de temple de metales, una pieza caliente se sumerge en un fluido de temple (agua, aceite o polímero acuoso) para enfriarse rápidamente y fijar la microestructura deseada. La temperatura final del fluido de temple tras cada ciclo de temple determina si el proceso puede repetirse sin esperar al enfriamiento del baño, lo que afecta directamente a la productividad del taller. El principio de calorimetría permite estimar esta temperatura final sin necesidad de simulaciones complejas.

Para mantener la temperatura del baño de temple por debajo de un límite de seguridad (por ejemplo, 60 °C para el aceite o 40 °C para el agua), se calcula la masa mínima del fluido de temple como función del número de piezas templadas por hora y de sus capacidades caloríficas totales. Si la temperatura del baño supera el límite, se instala un sistema de refrigeración del baño cuyo diseño también se basa en el principio calorimétrico.

Variable dominante: la capacidad calorífica total del baño de temple ([[m_i]] · [[c_i]] del fluido), que determina cuánta energía puede absorber por cada kelvin de calentamiento del baño.
Límite de validez: el modelo asume mezcla instantánea y homogénea del fluido de temple, lo que es una aproximación para baños grandes con agitación. En baños sin agitación, se forman gradientes de temperatura que hacen que la temperatura local en contacto con la pieza sea superior a la temperatura media del baño; el modelo subestima la temperatura máxima local.

## 4. Diseño de sistemas de almacenamiento de energía térmica por cambio de temperatura

Los sistemas de almacenamiento de energía por calor sensible (sin cambio de estado) acumulan energía calentando un depósito de material de alta capacidad calorífica volumétrica durante periodos de excedente energético y la liberan enfriando el depósito cuando se necesita. El dimensionado del depósito sigue directamente el principio calorimétrico: la energía almacenada es la capacidad calorífica total del depósito multiplicada por la variación de temperatura entre carga y descarga.

Un depósito de agua de 1000 litros calentado de 45 °C a 80 °C almacena 1000 × 4186 × (80 − 45) / 1000 ≈ 146 510 kJ ≈ 40.7 kWh. Un depósito equivalente de hormigón (densidad 2200 kg/m³, [[c_i]] ≈ 880 J/(kg·K)) de 0.45 m³ (misma masa de 1000 kg) en el mismo rango de temperatura almacena 1000 × 880 × 35 / 1000 ≈ 30 800 kJ ≈ 8.6 kWh, menos de una cuarta parte. El agua es el material de almacenamiento por calor sensible más eficiente por unidad de masa.

Variable dominante: la capacidad calorífica total del depósito ([[m_i]] · [[c_i]]), que determina la energía almacenada por kelvin de variación de temperatura. Aumentar la masa del depósito aumenta la energía almacenada proporcionalmente, mientras que la variación de temperatura es la segunda palanca de diseño.
Límite de validez: el modelo de calor sensible puro es válido mientras el material del depósito no cruce ninguna transición de fase en el rango de operación. Si el agua se calienta por encima de 100 °C a presión atmosférica, debe presurizarse el sistema o usar un fluido de mayor punto de ebullición.

## 5. Calibración de calorímetros en ciencia de alimentos y farmacología

La calorimetría diferencial de barrido (DSC) es una técnica analítica que mide el calor absorbido o cedido por una muestra en función de la temperatura, con altísima precisión. Se usa para determinar calores específicos, calores de reacción, temperaturas de fusión y estabilidad térmica de fármacos, polímeros y alimentos. La calibración del equipo requiere aplicar el principio calorimétrico con patrones de [[c_i]] conocido con exactitud (zafiro, indio).

En la industria alimentaria, la calorimetría se usa para determinar el calor específico de alimentos compuestos y diseñar procesos de pasteurización, esterilización y enfriamiento rápido. El principio de calorimetría garantiza que la energía necesaria para calentar un alimento del almacén a la temperatura de proceso es exactamente la suma de las capacidades caloríficas totales de todos sus componentes (agua, grasas, proteínas, carbohidratos) multiplicadas por [[DeltaT_i]] de cada componente.

Variable dominante: la temperatura de equilibrio [[T_eq]] alcanzada por la muestra en contacto con el sistema de referencia del DSC, cuya medición de alta precisión permite calcular [[c_i]] de la muestra con incertidumbre inferior al 0.5 % si el equipo está bien calibrado.
Límite de validez: el método DSC es válido para muestras homogéneas o cuasi-homogéneas en equilibrio termodinámico local. Para materiales heterogéneos con gradientes de composición o para procesos irreversibles rápidos, la señal del DSC requiere interpretación cuidadosa y el modelo simple de equilibrio calorimétrico puede no ser suficiente.
