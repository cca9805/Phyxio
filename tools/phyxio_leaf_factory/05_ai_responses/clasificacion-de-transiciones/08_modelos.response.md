# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: clasificacion-de-transiciones
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Clasificacion de transiciones
## Modelo ideal
El modelo ideal trata cada transición de fase como un cambio entre estados de equilibrio bien definidos. La variable de control principal es la [[temperatura]], y el entorno relevante se concentra alrededor de la [[temperatura_critica]]. La fase estable se decide comparando la [[energia_libre_gibbs]], mientras que el [[parametro_de_orden]] identifica si las fases tienen distinta organización interna. La clasificación no busca describir toda la microdinámica, sino reconocer si aparecen [[calor_latente]], [[salto_entropia]], [[salto_parametro_de_orden]] o una ley crítica continua.

## Hipótesis
- El sistema está cerca del equilibrio termodinámico. Si no se cumple, la histéresis puede confundirse con una discontinuidad real.
- La [[temperatura_critica]] está bien definida. Si el cambio ocurre en una banda amplia por impurezas o tamaño finito, el diagnóstico debe incluir incertidumbre.
- La [[energia_libre_gibbs]] es el potencial correcto. Si presión o composición no están controladas, puede requerirse otro potencial.
- El [[parametro_de_orden]] elegido distingue las fases. Si no lo hace, un [[salto_parametro_de_orden]] nulo no prueba continuidad.
- Las medidas de [[calor_latente]] y [[salto_entropia]] tienen resolución suficiente. Si la señal es débil, una transición de primer orden puede parecer continua.

## Dominio de validez cuantitativo
El análisis es fiable si |[[temperatura]] - [[temperatura_critica]]|/[[temperatura_critica]] < 10⁻¹ para estudiar la zona de transición, pero no tan cerca que el ruido domine. Para primer orden, un criterio operativo es [[calor_latente]] > 10² J/mol o [[salto_entropia]] > 1 J/(mol·K), siempre comparado con la resolución experimental. Para comportamiento crítico, la ley con [[exponente_critico_beta]] se usa típicamente en 10⁻⁴ < |[[temperatura]] - [[temperatura_critica]]|/[[temperatura_critica]] < 10⁻¹. Un [[salto_parametro_de_orden]] debe superar claramente el error instrumental.

## Señales de fallo del modelo
Falla si las curvas dependen mucho de la velocidad de barrido, si aparece coexistencia metastable prolongada, si el [[parametro_de_orden]] no es reproducible o si la [[temperatura_critica]] cambia con la historia térmica. También falla cuando se intenta clasificar solo con una fotografía del estado final. La ausencia de [[calor_latente]] no basta si la calorimetría no resuelve señales pequeñas. Del mismo modo, un cambio brusco visual no garantiza primer orden sin [[salto_entropia]] o discontinuidad en derivadas de [[energia_libre_gibbs]].

## Modelo extendido o alternativo
Cuando las fluctuaciones dominan, conviene pasar de una clasificación termodinámica simple a modelos críticos con escalado y exponentes. Si hay nucleación, sobreenfriamiento o crecimiento de dominios, se necesita un modelo cinético. Para transiciones con simetría compleja, el [[parametro_de_orden]] puede ser vectorial, tensorial o multicomponente, aunque aquí se trabaja con una versión escalar. En materiales desordenados puede ser necesario hablar de transición redondeada o de crossover.

## Comparación operativa
| Situación | Señal dominante | Clasificación práctica |
|---|---|---|
| [[calor_latente]] finito y [[salto_entropia]] finito | Energía intercambiada en coexistencia | Primer orden |
| [[salto_parametro_de_orden]] finito | Cambio brusco de organización | Usualmente primer orden |
| Sin [[calor_latente]], [[parametro_de_orden]] continuo | Ley crítica con [[exponente_critico_beta]] | Continua o crítica |
| Señales redondeadas por tamaño finito | Dependencia de muestra y resolución | Diagnóstico no concluyente |
| Histéresis intensa | Cinética domina la observación | Requiere modelo extendido |

