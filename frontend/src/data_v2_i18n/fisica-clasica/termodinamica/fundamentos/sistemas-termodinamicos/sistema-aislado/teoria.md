# Sistema aislado

## Contexto conceptual

La termodinámica clasifica los sistemas según el tipo de intercambios que permiten con su entorno. Un **sistema aislado** es aquel cuya frontera prohíbe simultáneamente el intercambio de **materia**, **calor** y **trabajo mecánico**. Es la idealización más restrictiva de los tres tipos de sistemas termodinámicos y, paradójicamente, la que ofrece las leyes más potentes: el primer principio se reduce a una sola restricción y el segundo principio adquiere su forma más pura.

Comprender el sistema aislado no es un ejercicio abstracto. Es la base conceptual para entender por qué los procesos tienen dirección temporal, por qué el equilibrio es un estado preferente y por qué ciertas transformaciones son irreversibles en la naturaleza. Sin este tipo de sistema, el concepto de entropía pierde su fundamento más directo.

## 🟢 Nivel esencial

Un sistema aislado es, en términos intuitivos, un sistema que no puede "hablar" con su entorno. No recibe ni entrega calor, no realiza trabajo ni se lo hacen, y ninguna partícula cruza su frontera. Imagina un recipiente perfectamente sellado, con paredes absolutamente rígidas y sin conductividad térmica alguna: eso sería, idealmente, un sistema aislado.

La consecuencia inmediata es que la **energía total del sistema no cambia**. Lo que ocurre dentro —mezclas, reacciones, redistribuciones de temperatura— no altera la energía total, solo la reorganiza. Esto no significa que el sistema esté quieto: puede haber procesos internos intensos. La diferencia es que ninguno de esos procesos tiene "salida" energética al exterior.

La otra consecuencia, quizás menos obvia, es que el desorden microscópico del sistema puede aumentar pero nunca disminuir. Los sistemas aislados evolucionan espontáneamente hacia estados más desordenados hasta alcanzar el equilibrio, y allí se detienen.

## 🔵 Nivel formal

El primer principio de la termodinámica establece que la variación de [[DeltaU]] de un sistema es igual a la suma del calor [[Q_ais]] que recibe y el trabajo [[W_ais]] que recibe de su entorno. En un sistema aislado, ambas transferencias son nulas por definición de la frontera:

{{f:primer_principio_aislado}}

Esta expresión, aunque algebraicamente simple, condensa la definición completa del aislamiento. La frontera adiabática impone [[Q_ais]] nulo; la frontera rígida impone [[W_ais]] nulo; la frontera impermeable impone que ningún término de flujo de materia aparezca en el balance. El resultado es que [[DeltaU]] es siempre cero para un sistema perfectamente aislado.

El segundo principio introduce la restricción complementaria e irreversible. La variación de [[S_ais]] debe satisfacer la desigualdad de Clausius-Planck para sistemas aislados:

{{f:entropia_aislado}}

Esta inecuación distingue entre procesos **reversibles** (variación de entropía nula, límite teórico inalcanzable en sistemas macroscópicos reales) e **irreversibles** (variación de entropía estrictamente positiva, caso de cualquier proceso espontáneo real). Juntas, estas dos leyes determinan completamente qué procesos son posibles en un sistema aislado: aquellos que conservan la energía interna total y no disminuyen la entropía.

## 🔴 Nivel estructural

La profundidad del sistema aislado reside en la asimetría que introduce el segundo principio. Mientras que el primer principio es completamente simétrico en el tiempo —la conservación de [[DeltaU]] no distingue el pasado del futuro—, el segundo principio rompe esa simetría: la entropía crece o permanece constante, pero nunca decrece. Esta es la base de la **flecha del tiempo termodinámica**.

En términos estructurales, el sistema aislado alcanza su equilibrio cuando [[S_ais]] llega a su valor máximo compatible con las restricciones internas (volumen, energía, composición fija). En ese estado, todos los gradientes internos han desaparecido: no hay gradiente de temperatura, no hay gradiente de presión, no hay diferencia de potencial químico entre las partes del sistema. El equilibrio no es un estado de inactividad microscópica, sino de equipartición macroscópica.

> [!NOTE]
> Los procesos internos al sistema aislado —mezcla de gases, igualación de temperaturas, expansión libre de un gas hacia vacío— son precisamente los que producen generación de entropía. Cada uno de ellos incrementa [[S_ais]] irreversiblemente.

Una distinción crítica para el alumno avanzado: el sistema aislado no debe confundirse con el **universo termodinámico**. El universo (sistema + entorno) es el sistema aislado máximo, y por eso el segundo principio se enuncia frecuentemente como "la entropía del universo no disminuye". Pero cuando el foco del análisis es un sistema concreto de laboratorio declarado aislado, las mismas reglas se aplican directamente a ese subsistema.

La **frontera** es el elemento definitorio del sistema aislado, y sus propiedades son más exigentes que las de cualquier otro tipo de sistema. Una frontera adiabática prohíbe el flujo de calor (conductividad térmica nula en el límite); una frontera rígida prohíbe el trabajo de presión-volumen (indeformable mecánicamente); una frontera impermeable prohíbe el flujo de materia (sin poros ni grietas). En la práctica, el **recipiente Dewar** (frasco Dewar o termo de vacío) es la mejor aproximación tecnológica: su vacío interior elimina la conducción y convección térmica, y el revestimiento reflectante reduce drásticamente la radiación.

> [!WARNING]
> Ningún sistema físico real es perfectamente aislado. El aislamiento es siempre una aproximación válida durante un intervalo de tiempo finito, cuya duración depende de la calidad constructiva de la frontera. Para tiempos muy largos, incluso el mejor termo Dewar intercambia energía con el entorno.

La conexión con los otros tipos de sistemas es importante: un **sistema cerrado** permite intercambio de calor y trabajo, pero no de materia; un **sistema abierto** permite los tres intercambios. El sistema aislado es el límite más restringido. Conocer sus propiedades es el punto de partida obligado para entender los otros dos tipos, porque el sistema aislado revela qué leyes son absolutas (la conservación de [[DeltaU]] y la no disminución de [[S_ais]]) frente a las que requieren hipótesis adicionales.

## Interpretación física profunda

La conservación de [[DeltaU]] en el sistema aislado es una manifestación directa de la homogeneidad temporal: las leyes de la física no cambian con el tiempo, y eso se traduce, vía el teorema de Noether, en conservación de energía. El sistema aislado es el escenario donde esta conservación se manifiesta sin complicaciones de intercambio: la energía interna es una constante de movimiento del sistema termodinámico.

La no disminución de [[S_ais]] tiene una interpretación estadística igualmente profunda: los microestados del sistema son equiprobables, y el macroestado más probable es el de máxima entropía (máximo número de microestados). El sistema aislado evoluciona estadísticamente hacia ese macroestado porque hay abrumadoramente más microestados de equilibrio que de no equilibrio. La irreversibilidad no es una ley "extra", sino una consecuencia estadística de la enorme diferencia en el número de microestados.

## Orden de magnitud

Para un kilogramo de agua líquida que pasa de 20 °C a 21 °C por procesos internos en un sistema aislado, el incremento de entropía asociado es del orden de 14 J/K. En comparación, la entropía de la mezcla de dos gases a temperatura ambiente puede generar incrementos de varias decenas de J/K por mol. Estos valores contrastan con la precisión requerida en procesos de refrigeración industrial, donde los incrementos indeseados de entropía por irreversibilidades mecánicas pueden superar los 1000 J/K por ciclo.

Para detectar si un sistema es realmente aislado en el laboratorio, la señal más clara es una variación de temperatura o presión interna que no puede explicarse por procesos internos conocidos: cualquier cambio de [[DeltaU]] no nulo apunta a una fuga energética a través de la frontera. Un resultado de [[DeltaU]] igual a 0.01 J en un sistema de 1 kJ de energía interna representa una fuga del 0.001%, que en muchos contextos es despreciable, pero en calorimetría de alta precisión sería inaceptable.

## Método de resolución personalizado

Para analizar un sistema aislado, sigue este protocolo:

1. **Identificar la frontera** y verificar explícitamente que es adiabática (sin conductividad térmica), rígida (sin variación de volumen externo) e impermeable (sin flujo de materia).
2. **Establecer [[Q_ais]] y [[W_ais]] como nulos** con justificación de la frontera, no por conveniencia.
3. **Aplicar el primer principio**: dado que [[Q_ais]] y [[W_ais]] son nulos, [[DeltaU]] es nulo de forma inmediata. Si el problema da un valor diferente, revisar el paso anterior.
4. **Analizar procesos internos**: identificar si hay redistribución de calor, mezcla de sustancias o reacciones, y determinar cómo afectan a [[S_ais]].
5. **Aplicar el segundo principio**: calcular o estimar [[S_ais]] y verificar que sea mayor o igual a cero. Un valor positivo confirma proceso espontáneo; un valor nulo indica reversibilidad ideal.
6. **Describir el estado de equilibrio final**: identificar qué variables se igualan (temperatura, presión, potencial químico) cuando el sistema alcanza el máximo de [[S_ais]].

## Casos especiales y ejemplo extendido

**Expansión libre hacia el vacío (experimento de Joule):** Un gas perfecto se expande hacia una cámara de vacío dentro de un recipiente aislado. La frontera exterior es rígida y adiabática, por lo que [[DeltaU]] es cero. La temperatura del gas perfecto no cambia (sus interacciones moleculares no dependen del volumen). Sin embargo, [[S_ais]] aumenta porque el gas ocupa ahora un mayor número de microestados accesibles. Este proceso es irreversible: el gas nunca se comprime espontáneamente de vuelta a su mitad.

**Mezcla de gases a la misma temperatura y presión:** Dos gases inertes a igual temperatura y presión se mezclan en un sistema aislado. [[DeltaU]] sigue siendo cero (sin reacción, sin cambio de temperatura). Sin embargo, [[S_ais]] aumenta por la entropía de mezcla, que es siempre positiva para mezclas ideales. Este incremento es irreversible: la separación espontánea de los gases es estadísticamente imposible.

**Sistema aislado con reacción química interna:** Una reacción exotérmica ocurre dentro de un sistema aislado. La energía liberada por la reacción incrementa la temperatura interna del sistema. [[DeltaU]] total permanece cero (la energía química se convierte en energía térmica sin salir de la frontera). [[S_ais]] aumenta por la mayor temperatura y por la generación de entropía de reacción.

## Preguntas reales del alumno

**¿Un sistema aislado puede tener procesos internos?**

Sí, y esto es un punto crucial. El aislamiento se refiere exclusivamente a los intercambios con el entorno a través de la frontera. Dentro del sistema pueden ocurrir mezclas, reacciones, redistributribuaciones de temperatura, expansiones internas. Ninguno de esos procesos viola el aislamiento porque no implican cruce de la frontera exterior.

**¿Por qué [[S_ais]] no puede disminuir si la energía interna se conserva?**

La conservación de [[DeltaU]] es una restricción cuantitativa (cuánta energía hay en total) pero no determina cómo está distribuida microscópicamente. El segundo principio añade la restricción cualitativa: la distribución microscópica de esa energía fija tiende espontáneamente hacia las configuraciones más probables, que son las de máxima entropía. Son dos restricciones distintas que operan sobre aspectos diferentes del sistema.

**¿El universo es un sistema aislado?**

En el modelo cosmológico estándar, el universo no tiene "exterior" definido, por lo que el segundo principio se enuncia como "la entropía del universo no decrece".

**¿Cuánto tiempo puede considerarse aislado un sistema real?**

Depende de la calidad de la frontera y de la precisión requerida. Un termo doméstico puede considerarse aislado durante horas para medidas con error del 1 %. Un calorímetro de investigación mantiene el aislamiento durante días con errores del 0.01 %. En cálculos de aula, un recipiente cerrado puede aproximarse como aislado durante los primeros segundos de un proceso rápido.

## Conexiones transversales y rutas de estudio

El sistema aislado está directamente conectado con los otros tipos de sistemas de este bloque. Comprender el sistema aislado es el requisito conceptual previo para entender el [sistema cerrado](leaf:física-clasica/termodinámica/fundamentos/sistemas-termodinámicos/sistema-cerrado), que agrega la posibilidad de intercambiar calor y trabajo, y el [sistema abierto](leaf:física-clasica/termodinámica/fundamentos/sistemas-termodinámicos/sistema-abierto), que agrega el flujo de materia.

Hacia bloques más avanzados, el sistema aislado conecta directamente con las **variables termodinámicas** (temperatura, presión, entropía como variables de estado) y con los **procesos termodinámicos** donde se analiza cómo evoluciona el sistema bajo diferentes restricciones de frontera. El concepto de **equilibrio termodinámico** adquiere su definición más precisa en el contexto del sistema aislado: es el estado que maximiza [[S_ais]] dado el [[U]] total fijo.

## Síntesis final

El sistema aislado permite enunciar las dos leyes fundamentales en su forma más limpia. La conservación de [[DeltaU]] expresa la imposibilidad de crear o destruir energía; la no disminución de [[S_ais]] expresa la dirección irreversible de los procesos espontáneos. Juntas definen qué puede ocurrir dentro de un sistema sin influencias exteriores.
