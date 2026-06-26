## 1. Ciclo de Brayton en turbinas de gas y motores a reacción

El **ciclo de Brayton** describe el funcionamiento de las turbinas de gas industriales y los motores a reacción. De sus cuatro etapas, dos son aproximadamente isobáricas: la **combustión** (expansión a alta presión) y el **enfriamiento de escape** (contracción a baja presión). La presión permanece constante en cada etapa porque la cámara de combustión está abierta hacia la tobera y la válvula de descarga.

Durante la combustión el combustible se quema a [[p]] constante y el gas caliente se expande. El calor absorbido [[Q]] se distribuye entre la energía interna del gas (elevación de [[T2]]) y el trabajo [[W]] que hace girar la turbina. La eficiencia del ciclo aumenta con la razón de presiones entre las dos etapas isobáricas, y calcular [[W]] = [[p]] · [[DeltaV]] en cada una es el punto de partida para obtener el rendimiento global.

En un motor a reacción civil, el flujo másico puede alcanzar 200 kg/s y la temperatura en cámara supera 1800 K. La potencia útil extraída en la turbina es del orden de \(10^7\) W, lo que ilustra cómo la misma fórmula isobárica escala desde el laboratorio hasta la aviación comercial.

Variable dominante: [[Q]]
Límite de validez: El modelo isobárico pierde validez si la presión en cámara varía más de un 5% durante la combustión, lo que ocurre en motores de pistón a alta carga; en ese caso el proceso es politrópico.

## 2. Evaporadores y condensadores en sistemas de refrigeración

Los sistemas de refrigeración por compresión de vapor operan con procesos isobáricos en dos etapas: la **evaporación** (baja presión, temperatura [[T1]] constante durante el cambio de fase) y el **subenfriamiento del condensador** (alta presión, sin cambio de fase). En las fases sin cambio de fase, el fluido cambia [[DeltaT]] a [[p]] constante y el análisis isobárico es directamente aplicable.

El balance [[Q]] = [[DeltaU]] + [[W]] aplicado a cada etapa determina cuánto calor se extrae del espacio refrigerado y cuánto trabajo consume el compresor. Un refrigerador doméstico extrae unos 200 W del interior a −18 °C y cede unos 260 W al entorno, con un trabajo del compresor de ~60 W. Optimizar el COP (coeficiente de funcionamiento) exige modelar correctamente las etapas isobáricas para minimizar las irreversibilidades.

La variable central en el diseño es [[DeltaT]] entre el fluido y el espacio refrigerado: reducirla a presión constante disminuye el trabajo del compresor y mejora la eficiencia, pero aumenta el tamaño del evaporador necesario.

Variable dominante: [[DeltaT]]
Límite de validez: El modelo isobárico falla cuando el refrigerante se acerca al punto crítico (alta presión reducida), donde la distinción líquido-vapor desaparece y las propiedades termodinámicas varían rápidamente con [[p]].

## 3. Dilatación del gas en globos meteorológicos y estratosféricos

Los **globos meteorológicos** ascienden desde el nivel del mar hasta 30–40 km de altitud. La presión exterior cae de 1013 hPa a menos de 10 hPa. El globo es elástico y mantiene la presión interior esencialmente igual a la exterior (proceso isobárico local en cada instante), por lo que [[p]] varía lentamente con la altitud.

La ley de Gay-Lussac indica que [[V2]]/[[V1]] = [[T2]]/[[T1]] a cada nivel de presión. Como la temperatura exterior cae de ~293 K a ~213 K entre el suelo y 35 km, el volumen crece más de lo que la temperatura haría prever; la caída de presión domina y un globo de 1 m³ puede alcanzar 100 m³ antes de reventar. Este volumen máximo es el criterio de diseño del tamaño del globo.

El trabajo [[W]] = [[p]] · [[DeltaV]] que el gas realiza contra la atmósfera proviene del calor solar y del calor ambiental absorbido durante el ascenso, y representa la energía que la sonda lleva hasta la estratosfera para transmitir datos meteorológicos.

Variable dominante: [[V2]]
Límite de validez: El modelo isobárico puro es solo aproximado; el proceso real combina cambio de temperatura y cambio de presión (proceso politrópico). La aproximación isobárica es suficiente para estimar órdenes de magnitud del volumen máximo con un error menor del 10%.

## 4. Calefacción de edificios y sistemas HVAC a presión constante

Los sistemas de calefacción por aire forzado operan a presión atmosférica constante. El aire se calienta en un intercambiador y se distribuye por los conductos. La potencia de calefacción necesaria es el producto del caudal másico por la capacidad calorífica específica a presión constante por [[DeltaT]]. En un edificio de oficinas con caudal de 5 kg/s y [[DeltaT]] = 20 K, la potencia requerida es ~100 kW.

El proceso isobárico también explica la **convección natural**: cuando el aire se calienta a [[p]] constante, su volumen aumenta (ley de Gay-Lussac), su densidad disminuye y asciende por flotabilidad. Las corrientes convectivas verticales en habitaciones, chimeneas y torres de enfriamiento son consecuencia directa del proceso isobárico sobre el aire caliente.

La eficiencia energética del edificio depende de minimizar [[Q]] manteniendo [[DeltaT]] lo más pequeño posible mediante aislamiento. El modelo isobárico permite cuantificar directamente el ahorro que produce cada kelvin de reducción en la diferencia de temperatura interior-exterior.

Variable dominante: [[DeltaT]]
Límite de validez: El modelo falla si el ducto está cerrado y el ventilador eleva [[p]] apreciablemente (diferencias de presión superiores a 500 Pa en sistemas industriales); en ese caso el proceso ya no es isobárico y hay que añadir el trabajo de compresión.

## 5. Termoquímica de reacciones gaseosas a presión atmosférica

En la industria química y en el laboratorio, la mayoría de las reacciones que implican gases ocurren a [[p]] constante (reactores abiertos, matraces en atmósfera). El calor intercambiado a presión constante es exactamente la entalpía de reacción, que se relaciona con [[DeltaU]] y [[W]] mediante el balance isobárico (entalpía igual a energía interna más el término de expansión isobárica).

La síntesis del amoníaco (proceso Haber) consume 2 moles menos de gas por mol de reacción. A 500 °C y 1 atm el término isobárico [[W]] es aproximadamente −12,9 kJ/mol, mientras que la entalpía de reacción es −92,4 kJ/mol. La diferencia, [[DeltaU]] ≈ −79,5 kJ/mol, mide la variación real de energía interna del sistema. Ignorar el término isobárico introduce un error del 14% en el balance de calor, con consecuencias directas en el diseño del intercambiador de calor del reactor.

La razón por la que la termoquímica usa entalpías en lugar de energías internas es precisamente que el proceso isobárico es la condición normal de laboratorio. El concepto de [[Q]] a presión constante es así la puerta de entrada de la termodinámica clásica a la química cuantitativa.

Variable dominante: [[DeltaU]]
Límite de validez: El modelo isobárico es exacto para gases ideales; para gases reales a alta presión (>1 MPa), el término de corrección de Van der Waals puede modificar [[W]] en más del 5% y es necesario usar ecuaciones de estado más precisas.
