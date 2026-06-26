const e=`## Problema histórico\r
\r
Antes de Carnot no existía una forma universal de comparar máquinas térmicas. Cada diseño se juzgaba por combustible, fluido de trabajo o detalles mecánicos, pero faltaba una cota independiente de la tecnología. El problema era saber si una máquina podía tener rendimiento arbitrariamente alto o si la segunda ley imponía un límite absoluto.\r
\r
## Dificultad conceptual previa\r
\r
La teoría del calórico trataba el calor como una sustancia conservada y no separaba con claridad proceso real, proceso ideal y límite reversible. Tampoco existía aún la entropía como función de estado. Por eso era difícil expresar qué significaba exactamente que una máquina fuese ideal y por qué ninguna máquina real podía superarla.\r
\r
## Qué cambió\r
\r
### 1824 — Sadi Carnot publica «Reflexiones sobre la potencia motriz del fuego»\r
\r
Carnot estableció que la eficiencia de una máquina térmica depende solo de las temperaturas de los focos caliente y frío, no del fluido de trabajo. Describió el ciclo ideal, hoy ciclo de Carnot, como referencia de máximo rendimiento. Aunque trabajaba con la teoría del calórico, su conclusión fundamental fue correcta: ninguna máquina operando entre dos focos puede superar a una máquina reversible.\r
\r
### 1850 — Rudolf Clausius formaliza la segunda ley\r
\r
Clausius reformuló las ideas de Carnot con la entropía como función de estado y la condición de reversibilidad como balance nulo de [[DeltaS_univ]]. Su desigualdad cíclica proporcionó la herramienta cuantitativa que Carnot no tenía y separó formalmente procesos reversibles e irreversibles.\r
\r
### 1851 — William Thomson y la escala absoluta\r
\r
Kelvin mostro que el ciclo reversible permite definir una escala absoluta de temperatura independiente de cualquier sustancia termometrica. La relación entre el calor intercambiado y las temperaturas de los focos hizo que la reversibilidad quedara ligada a la propia definición de kelvin.\r
\r
### 1865 — Clausius introduce el término entropía\r
\r
Clausius acuno el termino entropía para la función de estado evaluada mediante calor reversible. Desde entonces, medir entropía implica construir conceptualmente un camino reversible entre estados.\r
\r
### 1875 — Gibbs extiende el formalismo\r
\r
Gibbs aplicó la reversibilidad a sistemas multicomponente, fases y reacciones químicas mediante potenciales termodinámicos. Esto extendió el concepto más allá de las máquinas térmicas y lo convirtió en herramienta central de química física e ingeniería.\r
\r
### 1975 — Curzon y Ahlborn\r
\r
Curzon y Ahlborn introdujeron la termodinámica de tiempo finito: ciclos internamente reversibles pero con transferencia de calor irreversible hacia los focos. Ese paso conectó el límite de Carnot con modelos de rendimiento real a potencia finita.\r
\r
## Impacto en la física\r
\r
La reversibilidad convirtio la segunda ley en una herramienta predictiva: permitio definir temperatura absoluta, eficiencia máxima, entropía como función de estado y limites de trabajo extraible. También establecio una forma rigurosa de comparar procesos reales con un ideal comun.\r
\r
## Conexión con física moderna\r
\r
La idea sigue viva en computación reversible, límites de Landauer, nanomotores, motores de Carnot microscópicos y termodinámica de tiempo finito. En todos esos campos, el proceso reversible funciona como referencia límite: no genera entropía neta y por eso marca el máximo trabajo recuperable.\r
\r
## Hilo conductor\r
\r
Carnot intuyó el límite de eficiencia; Clausius lo formalizó con entropía; Kelvin lo conectó con temperatura absoluta; Gibbs lo extendió a química y fases; Curzon y Ahlborn lo adaptaron a potencia finita. La idea central sigue siendo la misma: todo proceso real se mide contra el límite reversible.\r
`;export{e as default};
