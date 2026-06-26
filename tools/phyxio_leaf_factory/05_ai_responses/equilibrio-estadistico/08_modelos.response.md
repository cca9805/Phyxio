# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: equilibrio-estadistico
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Equilibrio estadistico
## Modelo ideal
El modelo ideal describe un conjunto finito de estados accesibles con [[probabilidad_estado]] bien definida. Las transiciones entre estados ocurren con [[tasa_transicion]] promedio constante, y el equilibrio se reconoce cuando no hay [[flujo_probabilidad]] neto. No se sigue una partícula concreta, sino una distribución estadística completa.

## Hipótesis
- Estados accesibles fijos: si aparecen estados nuevos, la normalización deja de ser válida.
- Tasas estables: si [[tasa_transicion]] cambia con el [[tiempo]], la estacionariedad puede ser aparente.
- Conservación de probabilidad: si se pierde población estadística, falla {{f:normalizacion_probabilidades}}.
- Baño térmico estable cuando se usa [[peso_boltzmann]]: si [[temperatura]] no está controlada, la distribución térmica no es fiable.

## Dominio de validez cuantitativo
El modelo es razonable cuando la suma de [[probabilidad_estado]] difiere de 1 en menos de 10^-3, el [[desbalance_estadistico]] es menor que 10^-2 y las tasas cambian menos de un 5% durante 10 a 100 tiempos característicos. En un par de estados, el equilibrio detallado exige que el [[flujo_probabilidad]] sea compatible con cero dentro de la incertidumbre experimental.

## Señales de fallo del modelo
Falla si las probabilidades derivan sistemáticamente con el [[tiempo]], si existe una corriente circular persistente, si la [[entropia]] cambia de forma monótona durante la ventana de análisis, o si las transiciones muestran memoria fuerte. También falla si se interpreta un DCL estadístico como un diagrama de fuerzas mecánicas.

## Modelo extendido o alternativo
Cuando hay corrientes estacionarias se usa un modelo de estado estacionario no equilibrado. Si las tasas dependen del historial, conviene un modelo no markoviano. Si el entorno impone cambios de [[temperatura]], se necesita dinámica fuera del equilibrio.

## Comparación operativa
| Modelo | Señal central | Uso adecuado | Riesgo |
|---|---|---|---|
| Equilibrio estadístico | [[flujo_probabilidad]] nulo | Distribución estacionaria balanceada | Confundirlo con reposo |
| Estado estacionario no equilibrado | [[probabilidad_estado]] constante con flujo | Sistemas impulsados | Ignorar corrientes internas |
| Relajación transitoria | Probabilidades cambiantes | Evolución hacia equilibrio | Medir demasiado pronto |

