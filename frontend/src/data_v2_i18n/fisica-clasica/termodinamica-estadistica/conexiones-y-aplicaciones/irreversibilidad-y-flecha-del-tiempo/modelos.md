## Modelo ideal

El modelo ideal considera un sistema y un entorno bien definidos. La dirección física se decide mediante [[variacion_entropia_universo]], no por la apariencia visual del proceso. Si hay irreversibilidad real, aparece [[entropia_producida]] y el proceso se aleja del límite reversible.

## Hipótesis

- La frontera sistema-entorno está definida; si cambia, [[variacion_entropia_sistema]] y [[variacion_entropia_entorno]] pierden comparación directa.
- Los estados macroscópicos tienen [[entropia]] definida; si no hay equilibrio local, el balance es aproximado.
- La estadística de macroestados es relevante; si [[numero_microestados]] no representa configuraciones accesibles, la lectura probabilística falla.
- Las unidades de entropía son coherentes; si se mezclan J/K y múltiplos de [[constante_boltzmann]] sin conversión, el resultado se deforma.

## Dominio de validez cuantitativo

Para procesos espontáneos aislados, [[variacion_entropia_universo]] >= 0. El límite reversible ideal se aproxima cuando [[entropia_producida]] <= 10^-6 J/K en un proceso macroscópico de referencia o cuando el valor es despreciable frente a la resolución experimental. En sistemas microscópicos, comparar con [[constante_boltzmann]] es más adecuado.

> [!NOTE]
> Límite cuantitativo: El error relativo respecto a la solución real se mantiene inferior al 5%.

## Señales de fallo del modelo

El modelo simple falla si se observa una tendencia negativa sostenida de [[variacion_entropia_universo]], si se omite el entorno, si se interpreta una fluctuación local como inversión global o si el proceso está tan lejos del equilibrio que no puede asignarse [[entropia]] de estado.

## Modelo extendido o alternativo

Se necesita un modelo extendido en sistemas fuera del equilibrio, fluctuaciones mesoscópicas, dinámica de información o procesos con transporte espacial complejo. Allí puede ser necesario usar producción local de entropía, ecuaciones de transporte o termodinámica estocástica. El modelo extendido no invalida el simple: lo contiene como límite cuando las correcciones son despreciables frente a la resolución del problema.

Cuando conviene realizar un cálculo de mayor precisión, la transición al modelo extendido o alternativo introduce correcciones de segundo orden. Conviene cambiar a un modelo más detallado cuando la producción de entropía muestra dependencia espacial que el balance global no captura, o cuando la escala del sistema es comparable con [[constante_boltzmann]] y las fluctuaciones no son despreciables.

## Comparación operativa

| Situación | Modelo útil | Criterio |
| Proceso reversible ideal | Balance límite | [[entropia_producida]] casi nula |
| Proceso real | Segunda ley total | [[variacion_entropia_universo]] positiva |
| Sistema local | Balance parcial | revisar entorno |
| Fluctuación microscópica | Modelo estadístico | probabilidad finita pero pequeña |

## Criterio de transición entre modelos

El criterio para pasar al modelo extendido es observacional: si el modelo simple reproduce las medidas dentro de la incertidumbre experimental, no hay razón para aumentar la complejidad. Si las predicciones del balance total difieren de lo medido en más del margen aceptable, o si la distribución espacial de la producción de entropía es relevante para el problema, entonces conviene cambiar a un modelo de transporte o estocástico. La variable [[grado_irreversibilidad]] actúa como centinela: valores muy altos en comparación con la escala del experimento señalan que el modelo simple sigue siendo adecuado, mientras que valores cercanos a la resolución del instrumento pueden exigir refinamiento.