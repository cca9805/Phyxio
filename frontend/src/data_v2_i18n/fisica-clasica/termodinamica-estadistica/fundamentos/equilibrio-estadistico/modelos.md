## Modelo ideal

El modelo ideal describe un conjunto finito de estados accesibles con [[probabilidad_estado]] bien definida. Las transiciones entre estados ocurren con [[tasa_transicion]] promedio constante, y el equilibrio se reconoce cuando no hay [[flujo_probabilidad]] neto. No se sigue una partícula concreta, sino una distribución estadística completa.

## Hipótesis

- Estados accesibles fijos: si aparecen estados nuevos, la normalización deja de ser válida.
- Tasas estables: si [[tasa_transicion]] cambia con el [[tiempo]], la estacionariedad puede ser aparente.
- Conservación de probabilidad: si se pierde población estadística, falla

{{f:normalizacion_probabilidades}}

.
- Baño térmico estable cuando se usa [[peso_boltzmann]]: si [[temperatura]] no está controlada, la distribución térmica no es fiable.

## Dominio de validez cuantitativo

El modelo es razonable cuando la suma de [[probabilidad_estado]] difiere de 1 en menos de 10^-3, el [[desbalance_estadistico]] es menor que 10^-2 y las tasas cambian menos de un 5% durante 10 a 100 tiempos característicos. En un par de estados, el equilibrio detallado exige que el [[flujo_probabilidad]] sea compatible con cero dentro de la incertidumbre experimental.

## Señales de fallo del modelo

Falla si las probabilidades derivan sistemáticamente con el [[tiempo]], si existe una corriente circular persistente, si la [[entropia]] cambia de forma monótona durante la ventana de análisis, o si las transiciones muestran memoria fuerte. También falla si se interpreta un DCL estadístico como un diagrama de fuerzas mecánicas.

## Modelo extendido o alternativo

Cuando hay corrientes estacionarias se usa un modelo de estado estacionario no equilibrado, donde [[flujo_probabilidad]] neto puede ser constante y distinto de cero sin que eso implique deriva de [[probabilidad_estado]]. Si las [[tasa_transicion]] dependen del historial de estados previos, conviene un modelo no markoviano que incorpore memoria explícita entre saltos. Si el entorno impone cambios lentos de [[temperatura]], el sistema puede atravesar una sucesión de distribuciones cuasi-estáticas, cada una conectada con las anteriores por la [[constante_boltzmann]] y la [[energia_estado]] del estado correspondiente, pero una dinámica fuera del equilibrio formal siempre añade términos de [[flujo_probabilidad]] adicionales que la descripción estacionaria simple no captura.

## Comparación operativa

| Modelo | Señal central | Uso adecuado | Riesgo |
| Equilibrio estadístico | [[flujo_probabilidad]] nulo | Distribución estacionaria balanceada | Confundirlo con reposo |
| Estado estacionario no equilibrado | [[probabilidad_estado]] constante con flujo | Sistemas impulsados | Ignorar corrientes internas |
| Relajación transitoria | Probabilidades cambiantes | Evolución hacia equilibrio | Medir demasiado pronto |

El criterio operativo más útil en la práctica es comparar [[desbalance_estadistico]] con el ruido de medición. Si el desbalance es menor que el ruido, el modelo de equilibrio no puede rechazarse con los datos disponibles. Si es mayor, conviene antes revisar si falta algún estado accesible o si las [[tasa_transicion]] han variado durante la observación. Una [[temperatura]] inestable puede inflar artificialmente el [[desbalance_estadistico]] sin que el sistema haya salido del equilibrio dinámico. La [[entropia]] calculada sobre la distribución observada sirve como indicador complementario: si crece de forma monótona durante la ventana de análisis, el sistema todavía no ha alcanzado el equilibrio estadístico.