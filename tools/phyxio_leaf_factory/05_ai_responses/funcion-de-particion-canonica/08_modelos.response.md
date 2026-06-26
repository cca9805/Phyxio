# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: funcion-de-particion-canonica
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Funcion de particion canonica
## Modelo ideal
El modelo ideal considera un sistema en equilibrio térmico con un baño que fija la [[temperatura]]. Los microestados accesibles están bien definidos, cada uno tiene una [[energia_microestado]], y su contribución relativa se calcula mediante un [[peso_boltzmann]]. La [[funcion_particion]] suma esos pesos y permite normalizar cada [[probabilidad_microestado]]. El objetivo no es describir la dinámica de tránsito entre microestados, sino la distribución estadística compatible con la [[temperatura]].

## Hipótesis
- Baño térmico grande: si el sistema modifica la [[temperatura]] del entorno, el ensamble canónico deja de ser adecuado.
- Microestados identificables: si las [[energia_microestado]] están mal contadas, la [[funcion_particion]] queda sesgada.
- Equilibrio térmico: si hay relajación incompleta, la [[probabilidad_microestado]] calculada no representa ocupaciones reales.
- Energías del modelo constantes: si cambian por campos externos no incluidos, el [[peso_boltzmann]] pierde significado.
- Normalización finita: si la suma diverge, no pueden definirse probabilidades físicas.

## Dominio de validez cuantitativo
El modelo es fiable cuando la temperatura absoluta cumple [[temperatura]] > 0 K, el baño es mucho mayor que el sistema y las energías incluidas cubren los estados con [[peso_boltzmann]] apreciable. En cálculos prácticos, pueden truncarse estados con contribuciones relativas menores que 10^-6 si no afectan a [[energia_media]]. Para un sistema discreto finito, la [[funcion_particion]] debe ser positiva y finita. Si una diferencia de [[energia_microestado]] supera unas 20 veces la escala térmica, su peso suele ser despreciable frente al estado bajo.

## Señales de fallo del modelo
Falla si la suma de pesos no converge, si aparecen probabilidades negativas, si la suma de [[probabilidad_microestado]] no es uno, o si [[energia_media]] queda fuera del intervalo de energías accesibles. También falla cuando los datos experimentales muestran ocupaciones no compatibles con una única [[temperatura]], o cuando degeneraciones omitidas alteran la distribución.

## Modelo extendido o alternativo
Si el número de partículas fluctúa, conviene pasar al ensamble gran canónico. Si el sistema está aislado, el microcanónico es más natural. Si las interacciones son fuertes y no separables, hay que redefinir los microestados y sus [[energia_microestado]]. En sistemas clásicos continuos, la suma se sustituye por una integral con medida física adecuada.

## Comparación operativa
| Situación | Modelo recomendado | Señal clave |
|---|---|---|
| Sistema con baño térmico fijo | Canónico | [[temperatura]] definida |
| Sistema aislado | Microcanónico | energía total fija |
| Intercambio de partículas | Gran canónico | número de partículas variable |
| Estados continuos | Integral de partición | medida de fase necesaria |

