# Definición de la entropía

## Contexto conceptual

La entropía es la magnitud termodinámica que define la dirección de los procesos naturales. Mientras la primera ley dice que la energía se conserva, la segunda ley dice que los procesos ocurren en una sola dirección: la que aumenta la entropía total del universo. Sin entropía no hay flecha del tiempo en física.

Este leaf se centra en la definición operativa de Clausius: [[DeltaS]] como cociente entre [[Q_rev]] y [[T_abs]]. Esta definición es la base de toda la termodinámica de la segunda ley y el punto de partida para comprender por qué los motores térmicos tienen una eficiencia máxima, por qué el calor fluye espontáneamente de caliente a frío, y por qué ciertos procesos son irreversibles aunque estén permitidos por la primera ley.

En este leaf se trabaja el nivel macroscópico de Clausius, que permite calcular la dirección termodinámica sin usar mecánica estadística.

## 🟢 Nivel esencial

La entropía mide **cuánta dispersión tiene la energía** en un sistema. Cuando se calienta un cuerpo, su energía se distribuye entre más microestados posibles: la entropía aumenta. Cuando un gas se expande, sus moléculas tienen más espacio posible: la entropía aumenta. Los procesos naturales siempre evolucionan hacia mayor dispersión energética.

La variable [[DeltaS]] cuantifica ese cambio de dispersión. Su definición operativa es clara: [[DeltaS]] vale el calor reversible [[Q_rev]] dividido por la temperatura absoluta [[T_abs]] a la que se intercambia. **A mayor temperatura, el mismo calor produce menos cambio de entropía**: un sistema ya caliente está ya muy disperso, por lo que añadirle más calor cambia poco su grado de dispersión. A baja temperatura, en cambio, el mismo calor produce un cambio enorme.

El signo de [[DeltaS]] define la dirección: positivo si el sistema absorbe calor y gana dispersión, negativo si lo cede. La **segunda ley** establece que la suma [[DeltaS]] del sistema más [[DeltaS]] del entorno siempre es mayor o igual a cero en cualquier proceso real.

## 🔵 Nivel formal

La definición de Clausius para un proceso isotérmico reversible es:

{{f:definicion_entropia_clausius}}

donde [[Q_rev]] es el calor intercambiado de forma reversible, [[T_abs]] es la temperatura absoluta en kelvin y [[DeltaS]] es la variación de entropía del sistema. Para el caso más general de proceso no isotérmico, esta relación es la forma diferencial que debe integrarse a lo largo del camino reversible.

Para el caso especial y más frecuente en los cálculos de bachillerato y primer curso universitario —el proceso isotérmico (temperatura constante)— la fórmula integrada es:

{{f:entropia_isotermica}}

Esta es la expresión directamente aplicable a cambios de fase (fusión, vaporización, sublimación), a expansiones isotérmicas de gases ideales y a cualquier proceso donde la temperatura permanece constante. El hecho de que [[T_abs]] sea constante permite sacarlo del denominador de la integral, reduciendo el cálculo a una simple división.

Los despejes de la fórmula permiten calcular [[Q_rev]] a partir de [[DeltaS]] y [[T_abs]], o determinar [[T_abs]] del proceso a partir de [[Q_rev]] y [[DeltaS]]. El rearrangement [[Q_rev]] = [[DeltaS]] × [[T_abs]] tiene interpretación directa: el calor intercambiado en un proceso isotérmico reversible es exactamente el producto de la variación de entropía y la temperatura.

## 🔴 Nivel estructural

La entropía [[S]] es una **función de estado**: su valor depende únicamente del estado termodinámico del sistema (presión, volumen, temperatura), no del camino seguido para llegar a ese estado. Esta propiedad es fundamental y es la que justifica que [[DeltaS]] sea calculable mediante cualquier proceso reversible hipotético que conecte los estados inicial y final, aunque el proceso real haya sido irreversible.

La **desigualdad de Clausius** generaliza la definición al caso irreversible: para cualquier proceso real, [[DeltaS]] del sistema es mayor o igual a [[Q_rev]] dividido por [[T_abs]], con igualdad solo para procesos reversibles. Esto es la expresión analítica de la segunda ley: la entropía del universo nunca disminuye. Un proceso es espontáneo si [[DeltaS]]_universo > 0, reversible (ideal) si [[DeltaS]]_universo = 0, e imposible si [[DeltaS]]_universo < 0.

La **temperatura absoluta [[T_abs]]** en el denominador de la fórmula de Clausius cuantifica la calidad de la energía térmica. Un julio de calor a 1000 K aporta mucha menos entropía que el mismo julio a 10 K. Por eso los motores de alta temperatura pueden ser más eficientes: aprovechan energía de mayor calidad.

El diagrama T-S (temperatura frente a entropía) es la representación natural de la entropía. En él, los procesos isotérmicos son líneas horizontales, los procesos adiabáticos reversibles son líneas verticales, y el área bajo cualquier curva T-S es el calor [[Q_rev]] intercambiado. El ciclo de Carnot forma un rectángulo en este plano.

La entropía tiene un **límite inferior absoluto** fijado por el tercer principio. En la práctica de este leaf, trabajamos con [[DeltaS]], que no necesita esa referencia absoluta.

## Interpretación física profunda

La magnitud [[DeltaS]] no es una medida de "desorden" en el sentido coloquial, sino una medida precisa de **dispersión energética**: cuántos microestados son accesibles para el sistema a la energía dada. Cuando un ice cube se funde, las moléculas pasan de una red cristalina ordenada (pocos microestados) a una fase líquida donde cada molécula puede ocupar muchas posiciones distintas (muchos microestados): [[DeltaS]] > 0.

La asimetría entre [[DeltaS]] positivo y negativo para el sistema refleja la asimetría fundamental de los procesos naturales. El sistema puede reducir su entropía ([[DeltaS]]_sistema < 0) —un refrigerador hace exactamente eso— pero solo transfiriendo más entropía al entorno. El **universo** nunca puede reducir su entropía: esa es la segunda ley.

El denominador [[T_abs]] en la fórmula de Clausius convierte una cantidad de energía ([[Q_rev]], en joules) en una variación de entropía (en J/K). La temperatura actúa como divisor porque a alta temperatura el sistema ya tiene mucha energía distribuida entre sus moléculas, y agregar más calor no cambia significativamente esa distribución. A baja temperatura, el sistema está en un estado de menor acceso a microestados, y el mismo calor lo perturba mucho más.

## Orden de magnitud

Entropías de referencia para comparación:

- Fusión de 1 mol de hielo a 0 °C (273 K): [[DeltaS]] ≈ 22 J/(mol·K)
- Vaporización de 1 mol de agua a 100 °C (373 K): [[DeltaS]] ≈ 109 J/(mol·K)
- Expansión isotérmica de 1 mol de gas ideal al doble de volumen a 300 K: [[DeltaS]] ≈ 5.76 J/(mol·K)
- Reacción de combustión del hidrógeno (moles de gas → mol de líquido): [[DeltaS]] ≈ −130 J/(mol·K)

La vaporización produce aproximadamente 5 veces más variación de entropía que la fusión para el agua. Esto es coherente con el hecho de que el calor latente de vaporización (2260 J/g) es unas 7 veces mayor que el de fusión (334 J/g) y la temperatura de vaporización (373 K) es algo mayor que la de fusión (273 K): 2260/373 frente a 334/273 da la proporción correcta.

Un resultado de [[DeltaS]] mayor de 1000 J/(mol·K) para procesos ordinarios es físicamente sospechoso y casi siempre indica que [[T_abs]] se ha introducido en Celsius en lugar de kelvin.

## Método de resolución personalizado

1. **Identificar el tipo de proceso**: ¿Es isotérmico (T constante)? ¿Es un cambio de fase? ¿Es una expansión/compresión? Para isotérmico, aplicar directamente la fórmula integrada.
2. **Verificar que [[T_abs]] está en kelvin**: convertir siempre desde Celsius a escala absoluta antes de calcular.
3. **Determinar el signo de [[Q_rev]]**: positivo si el sistema absorbe calor, negativo si lo cede.
4. **Calcular [[DeltaS]]** como [[Q_rev]] / [[T_abs]]; el resultado tiene unidades J/K.
5. **Verificar coherencia**: [[DeltaS]] y [[Q_rev]] deben tener el mismo signo. Comparar el valor con referencias (fusión del agua ≈ 22 J/(mol·K), vaporización ≈ 109 J/(mol·K)).
6. **Si se pide [[DeltaS]] del universo**: calcular también [[DeltaS]] del entorno como −[[Q_rev]] / [[T_abs]]_entorno y sumar.

## Casos especiales y ejemplo extendido

**Proceso adiabático reversible (isentrópico)**: [[Q_rev]] = 0, por tanto [[DeltaS]] = 0. La entropía del sistema no cambia. Es el proceso más "eficiente" termodinámicamente. En un compresor adiabático ideal o en la etapa de compresión del ciclo de Carnot, la entropía es constante.

**Proceso isotérmico de gas ideal**: cuando un gas ideal se expande isotérmicamente, su temperatura no varía, por lo que todo el trabajo de expansión se compensa con calor absorbido. La variación de entropía aumenta con la cantidad de gas y con el cociente entre volumen final e inicial. Para una expansión, [[DeltaS]] es positiva: el gas ocupa más espacio y tiene más microestados accesibles.

**Calentamiento sensible (sin cambio de fase)**: cuando [[T_abs]] varía, la fórmula isotérmica no aplica. En ese caso se usa el modelo integrado de calentamiento con capacidad calorífica específica constante. Esto está fuera del alcance directo de este leaf pero es el paso natural siguiente.

**Mezcla de gases a temperatura constante**: cada gas se expande al volumen total. La contribución de mezcla es siempre positiva para mezclas reales, lo que confirma que la mezcla es un proceso espontáneo e irreversible.

## Preguntas reales del alumno

**¿Por qué [[DeltaS]] del sistema puede ser negativo si la segunda ley dice que la entropía aumenta?**
Porque la segunda ley se aplica al universo, no al sistema aislado. El sistema puede perder entropía si el entorno gana más de la que él pierde. Un refrigerador reduce la entropía de los alimentos fríos, pero el compresor calienta el entorno más de lo que enfría el interior: [[DeltaS]]_universo > 0.

**¿Por qué [[T_abs]] debe estar en kelvin y no en Celsius?**
Porque la definición de Clausius usa la temperatura termodinámica absoluta, que tiene su cero en el punto de energía térmica mínima. Un valor de [[T_abs]] = 0 en la fórmula haría [[DeltaS]] divergir para cualquier [[Q_rev]] no nulo; eso es correcto físicamente (cerca del cero absoluto, cualquier calor cambia enormemente la entropía) pero es imposible para temperaturas en Celsius, que pueden ser cero o negativas sin significar ausencia de energía térmica.

**¿Cuál es la diferencia entre [[S]] y [[DeltaS]]?**
[[S]] es la función de estado: su valor en un instante dado requiere una referencia absoluta fijada por el tercer principio. [[DeltaS]] es la variación entre dos estados y es la magnitud directamente calculable con la fórmula de Clausius sin necesitar la referencia absoluta. En la mayoría de los problemas de termodinámica se trabaja con [[DeltaS]], no con valores absolutos de [[S]].

**¿Qué ocurre con la entropía en un proceso reversible?**
En un proceso completamente reversible, [[DeltaS]]_universo = 0. Esto no significa que [[DeltaS]]_sistema = 0 (puede haber intercambio de calor reversible), sino que el sistema y el entorno intercambian exactamente la misma entropía: lo que gana uno lo pierde el otro. Un proceso reversible es el límite ideal al que los procesos reales se aproximan pero nunca alcanzan.

## Conexiones transversales y rutas de estudio

La definición de Clausius de este leaf es la base directa de la eficiencia de Carnot, del criterio de espontaneidad de Gibbs y de la tercera ley de la termodinámica. Sin dominar la relación entre [[DeltaS]], [[Q_rev]] y [[T_abs]], es imposible entender por qué los motores de vapor no pueden ser completamente eficientes o por qué las reacciones químicas tienen una dirección preferida.

La conexión con la mecánica estadística de Boltzmann proporciona la interpretación microscópica: [[S]] crece con el número de microestados compatibles con el estado macroscópico. Esta conexión explica por qué los procesos isotérmicos de expansión aumentan la entropía (más microestados de posición) y por qué los cambios de fase la aumentan en la dirección de mayor desorden molecular.

En física moderna, la entropía es central en termodinámica de agujeros negros (entropía de Bekenstein-Hawking proporcional al área del horizonte de sucesos), en teoría de la información (entropía de Shannon como medida de información) y en física estadística de sistemas fuera del equilibrio.

## Síntesis final

La entropía [[S]] es la magnitud que da dirección a los procesos termodinámicos: siempre aumenta en el universo. La definición operativa de Clausius, [[DeltaS]] = [[Q_rev]] / [[T_abs]], traduce esta idea abstracta en una fórmula calculable: la misma cantidad de calor produce más cambio de entropía a temperatura baja que a temperatura alta, capturando la diferencia de calidad entre la energía térmica a distintas temperaturas.
