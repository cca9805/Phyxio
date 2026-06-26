# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: hipotesis-fundamental
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Hipotesis fundamental
## Modelo ideal
El modelo ideal es el ensemble microcanónico: un sistema aislado con [[energia_total]], [[volumen]] y [[numero_particulas]] fijos. Todos los microestados compatibles con esas restricciones forman el conjunto accesible. La hipótesis asigna la misma [[probabilidad_microestado]] a cada elemento de ese conjunto, y usa [[numero_microestados_accesibles]] para normalizar. El objetivo no es reconstruir trayectorias microscópicas, sino describir una distribución de equilibrio sin sesgos adicionales.

## Hipótesis
- Aislamiento efectivo: si entra o sale energía, la [[energia_total]] deja de definir el conjunto accesible.
- Restricciones macroscópicas fijas: si [[volumen]] o [[numero_particulas]] cambian, cambia el conteo de microestados.
- Equilibrio estadístico: si queda memoria de la preparación inicial, aparece [[desbalance_probabilidad]].
- Conteo homogéneo: si los microestados se agrupan con distinta granularidad, [[numero_microestados_accesibles]] pierde significado.
- Accesibilidad real: si una barrera dinámica impide visitar una región, no debe contarse como accesible.

## Dominio de validez cuantitativo
El modelo es razonable cuando las variaciones relativas de [[energia_total]], [[volumen]] y [[numero_particulas]] son despreciables frente a la escala macroscópica: ΔE/E << 1, ΔV/V << 1 y ΔN/N = 0 para un sistema estrictamente aislado. También exige [[numero_microestados_accesibles]] ≥ 2 y, en sistemas macroscópicos, típicamente [[numero_microestados_accesibles]] >> 1. Un diagnóstico práctico es [[desbalance_probabilidad]] < 0,01 si se compara una distribución empírica con la equiprobabilidad ideal.

## Señales de fallo del modelo
Falla si se observan corrientes persistentes de probabilidad entre regiones del espacio de fases, si la distribución depende claramente del estado inicial, si el entorno cambia [[energia_total]], o si un macroestado domina por una restricción no incluida. También falla cuando se confunde [[multiplicidad_macroestado]] con probabilidad individual: un macroestado puede ser probable por contener muchos microestados, no porque cada microestado tenga más peso.

## Modelo extendido o alternativo
Si el sistema intercambia energía con un baño térmico, conviene pasar al ensemble canónico. Si intercambia partículas, se necesita un modelo gran canónico. Si el sistema no mezcla bien, se requiere una descripción cinética con tiempos de relajación. Si hay restricciones ocultas, deben añadirse al conjunto accesible antes de aplicar equiprobabilidad.

## Comparación operativa
| Situación | Modelo útil | Magnitud clave | Lectura |
|---|---|---|---|
| Sistema aislado equilibrado | Microcanónico | [[probabilidad_microestado]] | Reparto uniforme |
| Muchos macroestados posibles | Multiplicidad | [[multiplicidad_macroestado]] | Suma de microestados |
| Intercambio térmico | Canónico | [[energia_total]] media | Pesos no uniformes |
| Sesgo persistente | Dinámica/relajación | [[desbalance_probabilidad]] | No hay equilibrio ideal |

