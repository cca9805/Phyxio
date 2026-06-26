const e=`## Modelo ideal

El modelo ideal es un oscilador lineal masa-muelle-amortiguador sometido a una fuerza sinusoidal mantenida. A diferencia del leaf de fuerza forzada, aquí no se estudia solo una frecuencia: se barre [[omega_f]] para encontrar dónde la amplitud estacionaria [[X]] alcanza un máximo.

## Hipótesis

La masa [[m]], la rigidez [[k]] y el amortiguamiento [[b]] son constantes. La excitación tiene amplitud [[F0]] y frecuencia angular controlable [[omega_f]]. La respuesta se mide en régimen estacionario, con amplitudes suficientemente pequeñas para que el sistema siga siendo lineal y no aparezcan topes, holguras ni rigidez variable.

## Dominio de validez cuantitativo

El modelo exige [[m]] > 0, [[k]] > 0, [[b]] > 0 y [[omega_f]] > 0. Para que haya un pico de desplazamiento definido, el término que determina [[omega_r]] debe ser positivo; físicamente, el amortiguamiento no puede dominar tanto como para borrar el máximo. Como criterio operativo, amplitudes menores que el 5% o 10% de la longitud característica suelen mantener la linealidad en montajes de laboratorio.

También se requiere un barrido con resolución suficiente. Si [[Q]] es alto, la separación entre frecuencias ensayadas debe ser pequeña, porque el pico puede ser estrecho. Si [[Q]] es bajo, el máximo será más ancho y menos sensible a un ajuste exacto de frecuencia.

## Señales de fallo del modelo

El modelo falla si la curva no tiene un pico reproducible, si la amplitud depende del sentido del barrido, si aparecen armónicos fuertes o si [[X]] cambia aunque [[F0]] y [[omega_f]] se mantengan fijos. También falla si la medida se hace durante el transitorio inicial o si la respuesta se satura por límites mecánicos.

Otra señal de fallo es que el pico observado se desplace al aumentar [[F0]]. En un sistema lineal, cambiar la fuerza escala la amplitud, pero no debería mover de forma apreciable [[omega_r]]. Si lo hace, probablemente hay no linealidad o calentamiento.

## Modelo extendido o alternativo

Conviene cambiar de modelo cuando el amortiguamiento no es viscoso lineal, cuando hay rozamiento seco, cuando la amplitud cambia la rigidez o cuando varios modos están cerca. En esos casos se usan modelos no lineales, análisis modal, respuesta en frecuencia experimental o integración numérica.

Cuando conviene cambiar a un modelo alternativo es cuando el pico medido se desplaza al cambiar [[F0]], cuando el barrido ascendente no coincide con el descendente o cuando aparecen dos máximos cercanos. Esas señales indican que el oscilador de un solo grado de libertad ya no basta.

Si el objetivo es solo calcular la respuesta para una frecuencia concreta, basta el modelo de fuerza forzada. Si el objetivo es localizar el máximo y evaluar su riesgo, se usa este modelo de resonancia. Si hay varios picos, el modelo debe extenderse a modos múltiples.

## Comparación operativa

Fuerza forzada responde: qué amplitud tiene el sistema para una [[omega_f]] dada. Resonancia responde: qué ocurre al variar [[omega_f]] y dónde aparece el máximo. Esta diferencia es esencial en problemas reales, porque una amplitud alta en un único punto no demuestra por sí sola que se haya encontrado el pico.

Operativamente, se calcula [[omega_r]], se estima [[Q]] y se compara la frecuencia de trabajo con la zona crítica. Si [[omega_f]] cae cerca del pico, se modifica [[b]], [[m]], [[k]] o la fuente. Si queda lejos, el diseño puede ser aceptable aunque la fuerza externa exista.
`;export{e as default};
