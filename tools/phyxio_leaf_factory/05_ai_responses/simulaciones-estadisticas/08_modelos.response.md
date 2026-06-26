# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: simulaciones-estadisticas
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Simulaciones estadisticas

## Modelo ideal

El modelo ideal considera una simulación que produce muestras representativas de un sistema térmico. En cada muestra se mide un [[observable]], se acumula la [[suma_observable]] y se estima una [[media_muestral]]. La incertidumbre asociada no se identifica con la dispersión completa de los datos, sino con el [[error_estadistico]] de la media. En este modelo, las configuraciones visitadas son compatibles con la [[probabilidad_boltzmann]] cuando hay equilibrio térmico a una [[temperatura]] definida. La [[probabilidad_aceptacion]] de un paso Monte Carlo ayuda a construir esa distribución cuando depende de la [[diferencia_energia]].

## Hipótesis

- Las muestras son representativas. Si no lo son, la [[media_muestral]] puede estar sesgada aunque el [[error_estadistico]] sea pequeño.
- Las muestras son independientes o tienen correlación débil. Si están muy correlacionadas, el [[numero_muestras]] efectivo es menor que el registrado.
- La [[desviacion_estandar]] describe bien la dispersión del [[observable]]. Si hay colas largas o eventos raros, el error puede estar subestimado.
- La [[temperatura]] se mantiene fija cuando se usa [[probabilidad_boltzmann]]. Si cambia durante el muestreo, la distribución objetivo ya no es única.
- La regla de [[probabilidad_aceptacion]] respeta el balance estadístico. Si no lo hace, los pesos de [[energia]] no corresponden al equilibrio esperado.

## Dominio de validez cuantitativo

El modelo de error estándar es fiable cuando [[numero_muestras]] efectivo es grande, típicamente N_eff ≥ 30 para una estimación inicial y N_eff ≥ 10³ para una lectura estable. Debe cumplirse que [[error_estadistico]] sea mucho menor que la escala física que se quiere distinguir, por ejemplo delta_X < 0,1·|[[media_muestral]]| si se busca una precisión relativa del 10 %. Si al duplicar [[numero_muestras]] la [[media_muestral]] cambia más que 2·[[error_estadistico]], la simulación aún no ha convergido. En Monte Carlo térmico conviene que la [[probabilidad_aceptacion]] no sea extrema: valores del orden 0,2 a 0,8 suelen indicar exploración útil, aunque dependen del problema.

## Señales de fallo del modelo

Una señal clara de fallo es que el gráfico de [[error_estadistico]] frente a [[numero_muestras]] no decrezca de forma aproximadamente suave. Otra señal es que ejecuciones independientes den [[media_muestral]] incompatibles fuera de sus barras de error. También falla el modelo si la [[energia]] queda atrapada durante mucho tiempo en una región estrecha, si la [[probabilidad_aceptacion]] tiende casi a cero, o si la [[desviacion_estandar]] cambia de manera abrupta al ampliar la simulación.

## Modelo extendido o alternativo

Cuando hay correlaciones fuertes, debe usarse un modelo con [[numero_muestras]] efectivo y tiempo de autocorrelación. Si el sistema presenta cambios de fase, estados metaestables o colas anómalas, conviene usar muestreo por bloques, réplicas independientes o técnicas de reponderación. Si la distribución no es canónica, la [[probabilidad_boltzmann]] debe sustituirse por la distribución física adecuada.

## Comparación operativa

| Situación | Modelo simple | Modelo extendido |
|---|---|---|
| Muestras casi independientes | Usa [[numero_muestras]] directo | No suele ser necesario |
| Cadena Monte Carlo correlacionada | Subestima [[error_estadistico]] | Usa N_eff y bloques |
| [[probabilidad_aceptacion]] razonable | Muestreo estable | Ajuste fino opcional |
| Estados raros dominantes | Puede fallar | Muestreo especializado |
| Objetivo de alta precisión | Coste alto por raíz | Paralelización y análisis de convergencia |

