const e=`## Modelo ideal

El modelo ideal describe una onda periódica con ritmo temporal constante. En ese caso, [[f]] y [[T]] son inversos estables y [[omega]] expresa el mismo ritmo como avance angular de fase.

La onda puede observarse en un punto fijo del medio: no hace falta conocer aún cómo viaja por el espacio.

## Hipótesis

La primera hipótesis es que los ciclos se repiten con duración prácticamente constante. La segunda es que se identifica con claridad qué cuenta como un ciclo completo. La tercera es que la ventana [[Delta_t]] contiene suficientes repeticiones para que el conteo [[N]] tenga sentido.

También se supone que el instrumento de medida no altera el ritmo observado.

## Dominio de validez cuantitativo

El modelo funciona bien si la variación de periodo entre ciclos es menor que un 5 % durante la medición. Para conteos manuales, conviene observar al menos 5 ciclos completos; con menos ciclos, un error de una cresta altera mucho la frecuencia estimada.

Si la señal tiene 100 Hz, el periodo es de orden 0,01 s. Si tiene 1 Hz, el periodo es de orden 1 s. Esas escalas ayudan a elegir una ventana de observación razonable.

## Señales de fallo del modelo

El modelo falla cuando el ritmo cambia durante la observación, cuando hay pulsos aislados o cuando varias frecuencias se mezclan con amplitudes comparables. También falla si el conteo incluye medios ciclos sin declararlo.

Una señal clara de fallo es que dos ventanas distintas den frecuencias muy diferentes sin que haya una causa física reconocida.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si la señal cambia con el tiempo, se usa frecuencia instantánea, frecuencia media por ventanas o análisis espectral. En señales musicales, vibraciones amortiguadas y pulsos, una sola [[f]] puede no describir todo el fenómeno.

El modelo extendido mantiene la idea de ritmo, pero permite que ese ritmo dependa del tiempo o de la componente analizada.

## Comparación operativa

El modelo ideal es suficiente para ondas sinusoidales estables, ejercicios de periodo y conteos regulares. El modelo extendido es necesario si el patrón se deforma, si el ritmo no es constante o si la pregunta depende de varias componentes.

Operativamente, empieza midiendo [[N]] en [[Delta_t]]. Si el resultado se mantiene al cambiar la ventana, usa el modelo ideal; si cambia mucho, describe la señal por tramos.

La comparación práctica es sencilla: una señal estable admite una única pareja [[f]] y [[T]]; una señal cambiante necesita indicar cuándo se midió y sobre qué intervalo.
`;export{e as default};
