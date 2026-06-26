## 1. Calefacción doméstica por combustión de gas natural

En los sistemas de calefacción doméstica, el quemador opera a presión constante y convierte la entalpía química del metano en calor transferido al agua del radiador. La variable dominante es [[DeltaH]] de combustión del metano, que determina el calor aportado por metro cúbico de gas quemado.

La hipótesis dominante es que la presión es constante durante la combustión y que los productos de combustión salen a la temperatura del gas de escape. El límite de validez del modelo es que la combustión sea completa; si hay combustión incompleta, [[DeltaH]] efectiva es menor y la eficiencia del quemador cae. En calderas de condensación, se recupera además la entalpía de vaporización del agua en los gases de escape, incrementando significativamente el rendimiento.

**Variable dominante:** [[DeltaH]] de combustión del metano (aproximadamente menos 890 kJ/mol).

**Límite de validez:** combustión completa y presión del quemador constante.

En la práctica, esta lectura permite comparar poder calorífico inferior y superior sin cambiar de lenguaje físico: ambos son balances de entalpía, pero uno ignora la condensación del agua formada y el otro la recupera. Para el profesor, este caso conecta directamente una magnitud abstracta con facturas energéticas, rendimiento de calderas y emisiones.

## 2. Diseño de reactores químicos industriales

En el diseño de reactores para síntesis industrial (amoníaco, metanol, ácido sulfúrico), [[DeltaH]] de reacción determina si el reactor necesita enfriamiento o calentamiento externo para operar de forma controlada. Los reactores exotérmicos requieren sistemas de extracción de calor; los endotérmicos, aporte continuo de energía.

El balance entálpico del reactor se calcula sumando las [[DeltaH]] de todas las reacciones que ocurren simultáneamente, ponderadas por sus velocidades relativas. La hipótesis del modelo es que el proceso es cuasi-estático y que las capacidades caloríficas son constantes en el rango de operación. El límite es que si las temperaturas de operación difieren en más de 200 K de la temperatura de referencia de las tablas, es necesario aplicar la corrección de Kirchhoff.

**Variable dominante:** [[DeltaH]] de la reacción principal de síntesis.

**Límite de validez:** temperaturas de operación en el rango donde [[DeltaH]] es aproximadamente constante.

El interés didáctico está en que el signo de [[DeltaH]] no solo clasifica la reacción, sino que decide la arquitectura del reactor. Una reacción muy exotérmica exige control térmico para evitar runaway; una reacción endotérmica exige suministro de calor distribuido para no detener la conversión.

## 3. Calorimetría diferencial de barrido en materiales

La calorimetría diferencial de barrido mide [[DeltaH]] de transiciones de fase (fusión, cristalización, transición vítrea) en materiales poliméricos, aleaciones y compuestos farmacéuticos. La técnica compara el flujo de calor de la muestra con el de una referencia inerte mientras se varía [[T]] a velocidad controlada.

El área bajo el pico de flujo de calor versus temperatura proporciona [[DeltaH]] de la transición. La variable dominante es la diferencia de [[DeltaH]] entre la fase de alta temperatura y la fase de baja temperatura. El modelo es válido cuando la velocidad de calentamiento es suficientemente lenta para que el proceso sea cuasi-estático; a velocidades altas, los picos se desplazan y ensanchan, reduciendo la precisión.

**Variable dominante:** [[DeltaH]] de la transición de fase estudiada.

**Límite de validez:** velocidades de calentamiento inferiores a 20 °C/min para la mayoría de polímeros.

## 4. Bioquímica: energética de reacciones metabólicas

En bioquímica, [[DeltaH]] de hidrólisis del ATP (aproximadamente menos 30 kJ/mol) cuantifica la energía entálpica disponible para impulsar reacciones biosintéticas, transporte activo y trabajo mecánico muscular. Las rutas metabólicas se diseñan para acoplar reacciones exotérmicas con reacciones endotérmicas de modo que el balance global sea termodinámicamente favorable.

La hipótesis del modelo bioquímico es que las reacciones ocurren en solución acuosa a presión constante (presión atmosférica en el citoplasma). El límite de validez es que las concentraciones de reactivos y productos no deben apartarse demasiado de las condiciones fisiológicas estándar (pH 7, concentraciones millimolares), porque [[DeltaH]] depende de las condiciones de solución.

**Variable dominante:** [[DeltaH]] de hidrólisis de los enlaces de alta energía.

**Límite de validez:** condiciones fisiológicas de pH, temperatura y concentración iónica.

Esta aplicación también muestra el límite de interpretar [[DeltaH]] como criterio único de espontaneidad. En metabolismo importa además la entropía y la energía libre; aun así, [[DeltaH]] informa de la carga térmica que debe disipar el organismo o el biorreactor durante la ruta.

## 5. Ingeniería criogénica: licuefacción de gases industriales

En la producción de oxígeno, nitrógeno y argón líquidos para uso industrial y médico, el ciclo de licuefacción se diseña utilizando las entalpías de vaporización de los gases. [[DeltaH]] de vaporización del nitrógeno (aproximadamente 5.6 kJ/mol) y del oxígeno (aproximadamente 6.8 kJ/mol) determinan la cantidad de trabajo de compresión y el intercambio de calor en los intercambiadores del ciclo Linde.

El modelo supone procesos cuasi-estáticos a presión constante en cada etapa del ciclo. La variable dominante es [[DeltaH]] de cambio de fase a la temperatura de ebullición a la presión de operación. El límite de validez es que las presiones de operación deben estar en el rango donde el comportamiento se aproxima al de gas ideal en la fase gaseosa; cerca del punto crítico, las desviaciones son significativas y se requiere una ecuación de estado real.

**Variable dominante:** [[DeltaH]] de vaporización a la presión de operación del ciclo.

**Límite de validez:** presiones alejadas del punto crítico del gas licuado.
