# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: probabilidad-y-ensembles
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Probabilidad y ensembles
## Modelo ideal
El modelo ideal representa un [[ensemble]] como una colección de [[numero_copias_ensemble]] copias igualmente preparadas bajo la misma [[restriccion_macroscopica]]. Cada copia ocupa un [[estado_microscopico]] compatible y contribuye a una [[probabilidad_estado]]. El objetivo no es describir una copia concreta, sino convertir el reparto estadístico en un [[valor_medio_ensemble]] y en una [[fluctuacion_ensemble]].

## Hipótesis
- Misma preparación macroscópica: todas las copias comparten la misma [[restriccion_macroscopica]]. Si se viola, se mezclan ensembles distintos.
- Estados compatibles bien definidos: cada [[estado_microscopico]] pertenece o no pertenece al ensemble. Si la clasificación cambia, el [[conteo_sistemas]] no es interpretable.
- Probabilidades normalizadas: toda [[probabilidad_estado]] debe formar parte de una distribución completa. Si falta una parte, el [[valor_medio_ensemble]] queda sesgado.
- Valores de estado medibles: cada [[valor_estado]] representa la misma magnitud observable. Si se mezclan magnitudes, la media pierde dimensión física.
- Pesos comparables: el [[peso_estadistico]] solo puede compararse dentro del mismo conjunto de estados.

## Dominio de validez cuantitativo
El modelo funciona bien cuando [[numero_copias_ensemble]] es grande, por ejemplo mayor que 10³ para estimaciones escolares y mucho mayor en interpretación termodinámica. Cada [[probabilidad_estado]] debe cumplir 0 ≤ p_i ≤ 1 y la suma total debe ser 1 dentro de tolerancias numéricas menores que 10⁻⁶. Si se usan frecuencias, [[conteo_sistemas]] debe ser suficientemente grande para que n_i/N_ens no dependa de una sola copia. La [[fluctuacion_ensemble]] debe compararse con el [[valor_medio_ensemble]]: si sigma_A/A_prom es del orden de 1, la media necesita acompañarse de dispersión.

## Señales de fallo del modelo
El modelo falla si aparecen probabilidades negativas, suma distinta de 1, [[conteo_sistemas]] incompatible con [[numero_copias_ensemble]], o valores con unidades mezcladas. También falla si una misma copia se cuenta en dos estados excluyentes, si la [[restriccion_macroscopica]] cambia durante el muestreo o si el [[peso_estadistico]] se interpreta como probabilidad sin normalizar.

## Modelo extendido o alternativo
Cuando los estados evolucionan en el tiempo, conviene pasar a una descripción cinética o de equilibrio estadístico. Si los pesos dependen de energía y temperatura, aparece el ensemble canónico. Si la preparación fija energía, volumen y número de partículas, el modelo microcanónico puede ser más adecuado. Si los datos proceden de pocas muestras, se necesita inferencia estadística con incertidumbre explícita.

## Comparación operativa
| Enfoque | Qué conserva | Qué calcula | Cuándo usarlo |
|---|---|---|---|
| Ensemble ideal | [[restriccion_macroscopica]] | [[probabilidad_estado]], [[valor_medio_ensemble]] | Preparaciones equivalentes |
| Frecuencia finita | [[numero_copias_ensemble]] aproximado | [[conteo_sistemas]] relativo | Simulaciones o experimentos |
| Pesos normalizados | Razones de [[peso_estadistico]] | Probabilidades comparables | Estados con pesos relativos |
| Modelo dinámico | Evolución temporal | Cambios de población | Sistemas no estacionarios |

