# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: definicion-y-significado
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Definicion y significado
## Modelo ideal
El modelo ideal considera un sistema en equilibrio térmico con un conjunto discreto y conocido de microestados. Cada microestado tiene una [[energia_microestado]], se le asigna un [[peso_boltzmann]] y todos los pesos se suman para construir la [[funcion_particion]]. La [[probabilidad_microestado]] aparece solo después de normalizar con esa suma. El objetivo no es describir una trayectoria microscópica, sino el reparto estadístico de ocupaciones cuando la [[temperatura]] fija la escala de comparación.

## Hipótesis
- Equilibrio térmico: si el sistema no comparte una [[temperatura]] bien definida con el entorno, el [[peso_boltzmann]] pierde significado.
- Microestados accesibles conocidos: si falta algún estado relevante, la [[funcion_particion]] queda incompleta y la [[probabilidad_microestado]] se sobreestima para los estados incluidos.
- Energías comparables en la misma escala: si una [[energia_microestado]] usa otra unidad sin convertir, la [[razon_energia_termica]] queda deformada.
- [[constante_boltzmann]] fija: cambiarla como si fuera un ajuste borra la conexión física entre [[temperatura]] y energía microscópica.

## Dominio de validez cuantitativo
El modelo canónico es razonable cuando la [[temperatura]] es positiva y estable, por ejemplo variaciones relativas menores del 1 % durante la observación. La lista de microestados debe incluir todos los pesos no despreciables: si un [[peso_boltzmann]] omitido supera aproximadamente el 1 % de la suma parcial, no puede ignorarse. Para lecturas de alta [[temperatura]], el criterio cualitativo es que las diferencias entre [[energia_microestado]] sean menores que unas pocas veces la escala térmica. Para baja [[temperatura]], basta conservar estados cuyo [[peso_boltzmann]] no sea inferior a 10⁻⁶ del peso dominante si solo se busca una estimación.

## Señales de fallo del modelo
Falla si las probabilidades calculadas no suman uno, si una [[probabilidad_microestado]] resulta negativa, si un estado de mayor [[energia_microestado]] aparece más favorecido sin cambio de degeneración o si la gráfica de [[peso_boltzmann]] frente a [[razon_energia_termica]] crece. También es señal de fallo que la [[funcion_particion]] se trate como una energía con unidades, o que se mezclen temperaturas Celsius con [[temperatura]] absoluta.

## Modelo extendido o alternativo
Si el sistema intercambia partículas, conviene pasar a un conjunto gran canónico. Si el número de estados es enorme o continuo, la suma de [[funcion_particion]] se sustituye por integrales o densidades de estados. Si no hay equilibrio, se necesitan modelos cinéticos o probabilidades dependientes del tiempo. En sistemas cuánticos con degeneración, el modelo debe contar multiplicidades de cada [[energia_microestado]].

## Comparación operativa
| Situación | Modelo simple | Modelo extendido |
|---|---|---|
| Estados discretos conocidos | Suma directa de [[peso_boltzmann]] | Degeneración explícita si hay niveles repetidos |
| Muchas energías cercanas | [[funcion_particion]] finita | Densidad de estados |
| [[temperatura]] estable | Conjunto canónico | Modelo fuera de equilibrio si cambia rápido |
| Probabilidades normalizadas | [[probabilidad_microestado]] directa | Correcciones si faltan estados accesibles |

