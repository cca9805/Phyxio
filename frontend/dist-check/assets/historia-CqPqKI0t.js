const e=`## Problema histórico

A mediados del siglo XIX, los ingenieros y físicos se enfrentaban a una pregunta operativa urgente: ¿cómo medir la **eficiencia máxima** de una máquina térmica? Sadi Carnot había demostrado en 1824 que existe un límite superior de eficiencia que depende solo de las temperaturas de los focos, pero no proporcionó una magnitud medible que cuantificase la «pérdida» en procesos reales.

Rudolf Clausius (1822–1888) se propuso formalizar lo que Carnot había intuido. Necesitaba una función de estado que capturase cuantitativamente la dirección irreversible de los procesos naturales y que permitiese calcular, para cada proceso concreto, cuánta «capacidad de trabajo» se destruía. El obstáculo era que el calor (Q) no es función de estado: depende del camino. Hacía falta encontrar una transformación de Q que sí lo fuera.

## Dificultad conceptual previa

El paradigma calórico (la idea del calor como sustancia conservada) dominaba todavía el pensamiento de muchos contemporáneos de Clausius. Bajo este paradigma, todo intercambio de calor debería ser simétrico y no habría razón fundamental para que los procesos naturales tuvieran una dirección preferida.

Además, el concepto de «función de estado» frente a «función de proceso» no estaba plenamente consolidado. La comunidad científica aceptaba que la energía interna U era función de estado (primer principio), pero faltaba una segunda función de estado que discriminase procesos posibles de imposibles. Sin esa función, el segundo principio quedaba como una observación empírica (el calor fluye de lo caliente a lo frío) sin potencia cuantitativa.

La dificultad específica era matemática: ¿cómo convertir dQ (que es inexacta, dependiente del camino) en una diferencial exacta? La respuesta —dividir por T— no era obvia, porque T no es un simple factor numérico sino la variable termodinámica que acopla energía con desorden.

## Qué cambió

En 1854 y 1865, Clausius publicó los trabajos donde introdujo la integral reversible de Clausius y demostró que:
- Para un ciclo reversible, la integral ciclica de Clausius es nula en todo ciclo cerrado reversible.
- Para un ciclo irreversible, ∮ dQ/T < 0 (desigualdad de Clausius).

Esto demostraba que el cociente reversible entre calor y temperatura puede definir una función de estado. Clausius la bautizó **entropía** (del griego τροπή, transformación) en 1865. La variación de entropía entre dos estados quedaba definida mediante un camino reversible equivalente, independientemente del camino reversible elegido.

El avance clave fue comprender que dividir por T no es un truco algebraico sino un reflejo profundo de la física: la misma cantidad de calor tiene diferente «valor termodinámico» según la temperatura a la que se intercambia. A baja temperatura, cada julio vale más en términos de capacidad para producir trabajo.

## Impacto en la física

La definición operativa de [[DeltaS]] transformó la termodinámica de una colección de observaciones cualitativas en una ciencia cuantitativa predictiva:

- Permitió calcular eficiencias máximas de cualquier máquina térmica.
- Proporcionó un criterio universal de espontaneidad: un proceso es espontáneo si y solo si [[DeltaS]]_universo > 0.
- Conectó la termodinámica macroscópica con la estadística de Boltzmann, que vino dos décadas después.
- Cambió la ingeniería térmica para siempre: el análisis exergético moderno es esencialmente un cálculo sistemático de variaciones de entropía.

La formulación de Clausius estableció además que el universo tiende hacia un estado de máxima entropía («muerte térmica»), una idea que impactó profundamente en la filosofía de la ciencia y en la cosmología del siglo XIX.

## Conexión con física moderna

El cálculo de [[DeltaS]] permanece inalterado en la termodinámica actual y se ha extendido:

- En **termodinámica estadística**, [[DeltaS]] se interpreta como cambio en el logaritmo del número de microestados accesibles.
- En **teoría de la información** (Shannon, 1948), la entropía mide la incertidumbre de un canal de comunicación, usando la misma estructura matemática de Clausius.
- En **física de materiales**, el cálculo de [[DeltaS]] por tramos con [[c_p]] dependiente de [[T]] es la base del método CALPHAD para predicción de diagramas de fase.
- En **ingeniería criogénica** y **computación cuántica**, minimizar [[DeltaS]] en operaciones de enfriamiento es esencial para alcanzar las temperaturas milikelvin requeridas.

La fórmula de Clausius sigue siendo la herramienta operativa fundamental para cualquier cálculo entrópico, desde un ejercicio de bachillerato hasta el diseño de reactores de fusión nuclear.
`;export{e as default};
