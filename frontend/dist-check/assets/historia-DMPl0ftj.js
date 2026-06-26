const e=`## Problema histórico

El régimen sobreamortiguado nace del estudio de sistemas que vuelven al equilibrio después de una perturbación: muelles con rozamiento, instrumentos de aguja, galvanómetros, suspensiones y mecanismos de cierre. Antes de formularse con ecuaciones diferenciales, el problema práctico ya existía: evitar rebotes sin hacer que el sistema quedara demasiado lento.

## Dificultad conceptual previa

La dificultad inicial era distinguir entre amortiguar mucho y amortiguar bien. La observación cotidiana sugería que añadir freno eliminaba rebotes, pero no explicaba por qué algunos sistemas quedaban lentos. Faltaba un lenguaje que separase estabilidad, ausencia de oscilación y tiempo de respuesta.

## Qué cambió

La física clásica organizó estos comportamientos mediante el oscilador lineal de segundo orden. Al introducir amortiguamiento proporcional a la velocidad, la clasificación se volvió algebraica: una ecuación característica decide si la respuesta contiene oscilación o solo decaimientos reales. El caso sobreamortiguado quedó asociado a dos raíces reales negativas, [[r1]] y [[r2]], producidas cuando [[gamma]] supera a [[omega0]].

Esta clasificación permitió convertir observaciones cualitativas en criterios de diseño. Ya no bastaba decir que un mecanismo estaba muy frenado; se podía calcular si el exceso de disipación eliminaba el sobrepaso y cuánto retrasaba el retorno. La mejora histórica fue pasar de una descripción visual a una lectura de modos temporales.

## Impacto en la física

El concepto sigue apareciendo en sensores, actuadores, puertas hidráulicas, controles mecánicos, circuitos equivalentes y algoritmos de estabilización. Aunque muchos sistemas reales son no lineales, el modelo sobreamortiguado conserva valor como referencia: si una respuesta real se parece a una suma de dos exponentes, el ingeniero puede estimar modos dominantes y tiempos de asentamiento.

## Conexión con física moderna

El mismo patrón aparece en sistemas de control, electrónica analógica, biomecánica y materiales blandos. Didácticamente, el leaf corrige una intuición incompleta: más amortiguamiento no siempre mejora el sistema. La historia del concepto muestra que el diseño físico exige equilibrio entre ausencia de oscilación y rapidez, por eso se estudia junto al régimen subamortiguado y al crítico.
`;export{e as default};
