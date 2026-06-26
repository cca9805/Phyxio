# Aplicaciones

## 1. Calorimetría reversible de laboratorio
Variable dominante: [[delta_entropia]]
Límite de validez: [[temperatura]] entre 250 K y 400 K y proceso casi reversible

En calorimetría lenta se mide [[calor_reversible]] y se registra [[temperatura]] para estimar cómo cambia la [[entropia]] de una muestra. Lo importante es controlar que el intercambio sea cercano al equilibrio, porque entonces el cociente térmico puede compararse con una lectura estadística. El experimento predice si el estado final tiene mayor multiplicidad compatible. También restringe interpretaciones: el calor medido no es automáticamente [[delta_entropia]], debe ponderarse por la escala térmica. Una misma energía añadida a distinta [[temperatura]] no produce el mismo cambio entrópico.

La validación estadística de este resultado requiere conocer el [[ratio_microestados]] entre el estado final y el inicial para la misma muestra. En un experimento bien controlado, el cociente entre [[calor_reversible]] y [[temperatura]] concuerda con el resultado que daría un conteo estadístico independiente de [[numero_microestados]]. Si hay discrepancia, el proceso incluye irreversibilidades no contabilizadas o el sistema no ha alcanzado el equilibrio. Este acuerdo entre lectura clásica y estadística es lo que da robustez experimental al modelo de conexión entre ambas descripciones de la [[entropia]].

## 2. Expansión reversible de un gas
Variable dominante: [[ratio_microestados]]
Límite de validez: gas diluido, equilibrio cuasiestático y [[ratio_microestados]] > 0

En una expansión reversible, el gas accede a más configuraciones espaciales sin dejar de describirse mediante variables macroscópicas suaves. La lectura clásica puede usar [[calor_reversible]] y [[temperatura]], mientras la estadística interpreta el aumento mediante [[numero_microestados]]. Se predice que un volumen final mayor suele aumentar la [[entropia]]. La aplicación ayuda a separar expansión ordenada de simple desorden visual: el núcleo físico es la multiplicidad compatible con el nuevo estado.

Para cuantificar el cambio estadístico, se compara el [[numero_microestados]] accesible al volumen inicial con el del volumen final. El [[ratio_microestados]] resultante, introducido en la fórmula de Boltzmann, reproduce la misma [[delta_entropia]] que se obtendría midiendo [[calor_reversible]] en un proceso isotérmico equivalente. Si la expansión ocurre libremente, sin contacto térmico ni control reversible, el [[calor_reversible]] no puede aplicarse directamente y hay que construir un camino alternativo para calcular [[delta_entropia]] y verificar el signo del [[ratio_microestados]].

## 3. Diseño de ciclos térmicos
Variable dominante: [[calor_reversible]]
Límite de validez: reservorios con [[temperatura]] bien definida y sin irreversibilidades dominantes

En máquinas térmicas ideales, cada etapa reversible tiene un balance de [[delta_entropia]] asociado al calor intercambiado. Esta lectura permite comprobar si un ciclo está bien cerrado: la [[entropia]] del sistema vuelve al valor inicial, aunque los reservorios cambien. Estadísticamente, el ciclo no destruye la conexión con [[numero_microestados]], sino que redistribuye accesibilidades entre sistema y entorno. La aplicación predice límites y detecta pérdidas cuando aparecen irreversibilidades.

Un criterio práctico es que la suma de todas las [[delta_entropia]] del sistema a lo largo del ciclo sea nula. Cualquier desviación positiva indica pérdidas irreversibles no contempladas en el diseño ideal. En términos estadísticos, el ciclo solo puede cerrarse perfectamente si el [[numero_microestados]] del sistema recupera su valor inicial, lo que equivale a que el [[ratio_microestados]] global del sistema sea uno. La [[temperatura]] de cada reservorio fija la escala del [[calor_reversible]] intercambiado y limita la eficiencia máxima del ciclo conforme al segundo principio.

## 4. Cambios de fase cercanos al equilibrio
Variable dominante: [[temperatura]]
Límite de validez: transición a [[temperatura]] aproximadamente constante y estados de equilibrio

Durante una fusión reversible ideal, el sistema absorbe [[calor_reversible]] casi a [[temperatura]] constante. La [[delta_entropia]] mide el cambio de accesibilidad microscópica entre sólido y líquido. El líquido suele tener más configuraciones compatibles, lo que se relaciona con mayor [[numero_microestados]]. Esta aplicación permite medir, predecir y restringir el salto entrópico de la transición. La lectura estadística evita decir simplemente que el líquido está más desordenado: especifica que hay más maneras microscópicas compatibles.

En una fusión típica a [[temperatura]] fija, el calor de fusión y la [[temperatura]] de transición determinan directamente [[delta_entropia]] mediante la lectura clásica. La lectura estadística asocia ese valor a un enorme [[ratio_microestados]] entre el estado líquido y el sólido. Ambas lecturas comparten el mismo [[k_boltzmann]] como factor de escala y deben producir resultados coherentes si el sistema permanece en equilibrio durante la transición. Los valores de [[calor_reversible]], [[temperatura]] y [[numero_microestados]] deben referirse siempre al mismo sistema en la misma transición para que la comparación tenga sentido físico.

## 5. Validación de simulaciones estadísticas
Variable dominante: [[numero_microestados]]
Límite de validez: conteo consistente del mismo sistema y restricciones fijas

En simulaciones de modelos microscópicos se estiman [[numero_microestados]] o cambios relativos de multiplicidad. La conexión clásica permite comprobar si esos conteos producen una [[delta_entropia]] compatible con balances térmicos esperados. Se mide el peso estadístico, se predice el signo del cambio y se restringen estados imposibles. Si el [[ratio_microestados]] calculado contradice el signo del [[calor_reversible]] en una transformación equivalente, hay error de modelo o de conteo.

Un protocolo práctico de validación consiste en comparar la [[delta_entropia]] obtenida estadísticamente con la esperada por calorimetría ideal a la misma [[temperatura]]. Si la diferencia supera el margen de error del conteo, el modelo estadístico necesita revisión de sus hipótesis. También es útil verificar que el signo de la [[delta_entropia]] estadística coincida con el comportamiento esperado del [[calor_reversible]]: si el sistema absorbe calor, la [[entropia]] debe crecer y [[numero_microestados]] debe aumentar en consecuencia. Esta validación cruzada entre la lectura clásica y la estadística aumenta la fiabilidad de los resultados del modelo microscópico.