const e=`## Modelo ideal

El modelo ideal del sistema aislado supone que la frontera del sistema es perfectamente adiabática, absolutamente rígida e impermeable a toda forma de materia. Bajo estas condiciones, [[Q_ais]] es exactamente nulo, [[W_ais]] es exactamente nulo y, por tanto, [[DeltaU]] es exactamente cero para cualquier proceso que ocurra dentro del sistema. La magnitud [[S_ais]] puede crecer o mantenerse constante, pero nunca disminuir.

En este modelo se conservan la energía interna [[U]] y la masa total del sistema. Se ignoran las pérdidas térmicas por conducción, convección y radiación a través de las paredes, la variación de volumen asociada a la elasticidad de la frontera, y cualquier flujo de materia por permeación o difusión a través del material de la frontera. La frontera se trata como un límite matemático ideal, no como un material físico con conductividad o elasticidad propias.

## Hipótesis

- La conductividad térmica de la frontera es igual a cero: no existe flujo de calor entre el sistema y el entorno en ninguna escala de tiempo.
- La frontera es perfectamente rígida: el volumen del sistema no cambia y no se realiza trabajo de presión-volumen con el entorno. Violar esta hipótesis introduciría un término de trabajo [[W_ais]] no nulo que modificaría [[DeltaU]].
- La frontera es impermeable a toda forma de materia, incluyendo gases disueltos, iones en solución e irradiación de partículas. Violar esta hipótesis requeriría incluir términos de entalpía de flujo en el balance energético.
- Los procesos internos del sistema (mezcla, reacción, redistribución térmica) no afectan a las condiciones de la frontera: la frontera permanece adiabática, rígida e impermeable independientemente de lo que ocurra en el interior.
- El tiempo de observación es suficientemente corto para que las inevitables imperfecciones reales de la frontera (conductividad térmica finita, elasticidad real) sean despreciables a los efectos del balance energético.

## Dominio de validez cuantitativo

El modelo ideal de sistema aislado es una aproximación válida cuando la energía intercambiada a través de la frontera durante el proceso es inferior al 1 % de la energía interna total del sistema. En términos prácticos, esto equivale a un tiempo de proceso inferior al tiempo de relajación térmico del sistema con el entorno.

Para un recipiente Dewar de laboratorio estándar con tasa de absorción de calor de 0.5 W y contenido de 300 kJ de energía interna, la aproximación es válida para tiempos de proceso menores de 100 minutos, puesto que en ese tiempo la energía intercambiada es inferior al 1 % del contenido energético total. Para tiempos mayores de 100 minutos, el error supera el orden de magnitud del 1 % y el modelo de sistema aislado deja de ser una buena aproximación.

La condición cuantitativa orientativa es que la pérdida de energía por la frontera sea menor al 0.01 % del [[U]] inicial por unidad de tiempo del proceso. Cuando esta condición se cumple, los resultados del modelo difieren de la realidad en menos del 1 %.

## Señales de fallo del modelo

La primera señal de fallo es una variación de temperatura interna que no puede explicarse por ningún proceso interno conocido. Si el sistema pierde temperatura de forma gradual sin que haya mezcla, reacción ni redistribución interna que lo justifique, hay intercambio de calor a través de la frontera y el modelo de sistema aislado no es válido.

La segunda señal es un cambio de masa del sistema a lo largo del tiempo. Si se detecta que el sistema pierde o gana masa (medida en una balanza de precisión), la hipótesis de impermeabilidad está fallando y hay flujo de materia a través de la frontera.

La tercera señal es una variación de presión interna que corresponde a una variación de volumen del recipiente. Si el recipiente se deforma visiblemente o si la presión interna cambia de forma que implica trabajo mecánico sobre el entorno, la hipótesis de frontera rígida falla.

Cuantitativamente: si [[DeltaU]] calculado a partir de medidas internas del sistema es distinto de cero en más de un 1 %, hay al menos una de las tres hipótesis de frontera que está fallando en el rango de condiciones del experimento.

## Modelo extendido o alternativo

Cuando las pérdidas térmicas son significativas pero el sistema no intercambia materia con el entorno, la extensión natural es el modelo de sistema cerrado. En este modelo, [[Q_ais]] deja de ser nulo y debe medirse o estimarse a partir de la conductividad de la frontera, el gradiente de temperatura entre el sistema y el entorno, y el área de transferencia de calor.

Cuando el sistema intercambia tanto calor como materia con el entorno (como un recipiente abierto o un sistema con válvulas), el modelo adecuado es el sistema abierto, que incluye términos de entalpía de flujo por cada corriente de masa que entra o sale.

Cuando conviene pasar al modelo de sistema cerrado: cuando el tiempo del proceso supera el tiempo de relajación térmica del recipiente y la pérdida de temperatura interna supera el 2 %; o cuando se necesita precisión mayor al 1 % en el balance energético. Cambiar a sistema abierto cuando se detecta flujo de masa a través de la frontera superior al 0.5 % de la masa inicial por hora.

## Comparación operativa

| Criterio | Sistema aislado ideal | Sistema cerrado | Sistema abierto |
|---|---|---|---|
| Intercambio de calor | Nulo por definición | Posible, medible | Posible, medible |
| Intercambio de trabajo | Nulo por definición | Posible, medible | Posible, medible |
| Intercambio de materia | Nulo por definición | Nulo | Posible, con entalpía de flujo |
| Complejidad del balance | Mínima: [[DeltaU]] nulo | Moderada: [[Q_ais]] no nulo | Alta: términos de flujo de masa |
| Precisión típica | Alta para procesos rápidos | Alta para procesos largos | Alta para sistemas continuos |
| Aplicación preferida | Colisiones, mezclas rápidas, calorimetría adiabática | Ciclos termodinámicos, procesos lentos | Turbinas, compresores, reactores en flujo |

El modelo aislado es el de menor complejidad y mayor rapidez de aplicación. Su ventaja principal es que [[DeltaU]] nulo elimina incógnitas del balance y permite calcular directamente el estado final sin necesidad de medir intercambios de energía con el entorno. Su límite fundamental es que ningún sistema real cumple perfectamente las tres condiciones de frontera de forma indefinida.
`;export{e as default};
