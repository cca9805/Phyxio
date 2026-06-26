const e=`# Modelos y validez\r
\r
## Modelo ideal\r
\r
El modelo ideal de este leaf describe un oscilador armónico simple cuyo estado puede resumirse mediante una fase bien definida. Bajo este marco, [[omega]] permanece estable, la amplitud [[A]] no deriva de manera apreciable y la referencia temporal se mantiene fija durante todo el análisis. Gracias a esas condiciones, [[phi_t]] permite ubicar el sistema dentro del ciclo y [[delta_phi]] permite comparar señales de forma consistente.\r
\r
La principal ventaja del modelo es que organiza información dispersa en una lectura compacta. En lugar de tratar [[x]] y [[v]] como datos aislados, los interpreta como proyecciones del mismo estado cíclico. Esto hace que la fase sea especialmente útil cuando interesa distinguir adelanto, retraso, sincronización o diferencia de estado entre dos osciladores formalmente comparables.\r
\r
## Hipótesis\r
\r
1. El movimiento es sinusoidal y suficientemente lineal.\r
2. [[omega]] puede tratarse como aproximadamente constante en la ventana analizada.\r
3. La referencia temporal es única y no cambia durante la resolución.\r
4. La comparación entre [[phi1]] y [[phi2]] usa la misma convención de signo.\r
5. Las magnitudes observables [[x]] y [[v]] representan bien el estado del sistema.\r
\r
Estas hipótesis son decisivas porque la fase deja de ser una lectura fiable si cambian la convención o el régimen dinámico sin declararlo.\r
\r
## Dominio de validez cuantitativo\r
\r
Criterios operativos de uso:\r
\r
- deriva relativa de [[omega]] <= 5% a lo largo de al menos 5 ciclos;\r
- variación relativa de [[A]] <= 10% durante la ventana usada para interpretar fase ideal;\r
- error temporal de sincronización <= 5% del periodo cuando se compara [[delta_phi]];\r
- diferencia entre lectura prevista y observada de cruce por equilibrio <= 10% del tiempo de ciclo;\r
- ruido angular efectivo sobre [[phi_t]] o [[delta_phi]] <= 0.2 rad para comparaciones didácticas limpias.\r
\r
Estos umbrales no son universales, pero proporcionan una guía clara para decidir si la descripción por fase simple sigue siendo pedagógica y físicamente defendible.\r
\r
## Señales de fallo del modelo\r
\r
1. [[omega]] cambia de forma sistemática y la evolución angular deja de parecer lineal en el tiempo.\r
2. Dos señales supuestamente comparables requieren redefinir la referencia temporal para que el desfase tenga sentido.\r
3. La amplitud varía tanto que una sola fase deja de resumir el comportamiento de forma limpia.\r
4. [[x]] y [[v]] ya no se comportan como proyecciones coherentes de un ciclo sinusoidal.\r
5. El signo de [[delta_phi]] cambia solo por problemas de convención y no por física real del sistema.\r
\r
Estas señales son observables y exigen revisar el modelo antes de seguir calculando como si nada hubiera cambiado.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando la fase simple deja de bastar, el siguiente paso depende del origen del fallo. Si aparece amortiguamiento visible, conviene pasar a un modelo donde la fase efectiva se lea junto con el decaimiento de amplitud. Si la respuesta está forzada, conviene pasar a un modelo de fase relativa respecto de la excitación externa. Si la frecuencia no es estable, se necesita una lectura de fase más local o directamente otro tipo de descripción temporal.\r
\r
El punto importante es que el modelo alternativo no se elige por gusto formal, sino porque la fase ideal deja de condensar bien el estado del sistema. Mantener el modelo viejo más allá de su rango útil produce interpretaciones engañosas aunque la aritmética sea correcta.\r
\r
## Comparación operativa\r
\r
Cuando conviene cambiar de modelo: cuando la deriva de [[omega]] supera el 5%, cuando la amplitud cambia más de 10% en la ventana de análisis o cuando la comparación de señales exige redefinir la referencia para mantener estable el signo de [[delta_phi]].\r
\r
Modelo ideal de fase:\r
- muy claro para ubicar el sistema dentro del ciclo;\r
- muy útil para comparar señales con la misma referencia;\r
- suficiente cuando [[omega]] y [[A]] permanecen estables.\r
\r
Modelo extendido:\r
- necesario cuando hay amortiguamiento, forzamiento o deriva de frecuencia;\r
- exige más contexto físico y mejor control experimental;\r
- ofrece más fidelidad cuando el ciclo ya no puede leerse como repetición simple.\r
\r
En ese punto, seguir hablando de fase ideal simple oculta física importante y deteriora la calidad de la interpretación.`;export{e as default};
