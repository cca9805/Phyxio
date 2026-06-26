# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: hipotesis-fundamental
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen
## Enunciado
Un sistema aislado tiene [[energia_total]] fija, [[volumen]] fijo y [[numero_particulas]] fijo. Dentro de la ventana energética permitida se identifican 12 microestados accesibles. Tres de ellos producen el macroestado A y nueve producen el macroestado B. Se pide asignar la [[probabilidad_microestado]], comparar los macroestados, calcular la lectura entrópica relativa y decidir si una distribución propuesta con probabilidades no uniformes respeta la hipótesis fundamental.

## Datos
- [[numero_microestados_accesibles]]: 12
- [[multiplicidad_macroestado]] de A: 3
- [[multiplicidad_macroestado]] de B: 9
- [[energia_total]]: constante durante el proceso
- [[volumen]]: constante
- [[numero_particulas]]: constante
- Distribución propuesta: un microestado tiene probabilidad doble que otro

## Definición del sistema
El sistema se trata como aislado: no intercambia energía ni partículas, y sus paredes mantienen [[volumen]] constante. Por tanto, el conjunto accesible se define por las restricciones macroscópicas fijas. No se describe la trayectoria temporal de cada partícula, sino el reparto estadístico entre microestados compatibles. Los macroestados A y B no son microestados individuales; son agrupaciones con distinta [[multiplicidad_macroestado]].

## Modelo físico
El modelo es microcanónico. La hipótesis fundamental asigna igual [[probabilidad_microestado]] a todos los microestados accesibles. La probabilidad de un macroestado se obtiene sumando la probabilidad individual de todos los microestados que contiene. La [[entropia]] se interpreta como medida de multiplicidad, no como apariencia de desorden.

## Justificación del modelo
El uso del modelo se justifica porque [[energia_total]], [[volumen]] y [[numero_particulas]] están fijados, y no se declara ningún criterio físico que distinga un microestado accesible de otro. Si existiera una barrera, una conservación adicional o un sesgo de preparación, habría que revisar el conjunto accesible y medir [[desbalance_probabilidad]]. En ausencia de ese dato extra, cualquier asignación desigual introduciría información no contenida en el problema.

## Resolución simbólica
Primero se aplica el postulado microcanónico.

{{f:postulado_equiprobabilidad_microcanonica}}

Después se exige que la suma de todas las probabilidades accesibles sea la población estadística completa.

{{f:normalizacion_microestados_accesibles}}

Para comparar A y B se usa la multiplicidad de cada macroestado.

{{f:probabilidad_macroestado_desde_multiplicidad}}

La lectura de [[entropia]] asociada al conteo total se obtiene con la relación de Boltzmann.

{{f:entropia_boltzmann_microcanonica}}

Finalmente, una distribución no uniforme se contrasta con la equiprobabilidad ideal.

{{f:desbalance_frente_equiprobabilidad}}

## Sustitución numérica
Con 12 microestados accesibles, la [[probabilidad_microestado]] ideal de cada uno es 1/12, aproximadamente 0,083. El macroestado A contiene 3 microestados, por lo que su probabilidad es 3/12 = 0,25. El macroestado B contiene 9 microestados, por lo que su probabilidad es 9/12 = 0,75. La relación de probabilidades entre B y A es 3. Si una distribución propuesta asigna a un microestado el doble que a otro sin nueva restricción física, el [[desbalance_probabilidad]] no es compatible con el modelo ideal.

## Validación dimensional
La [[probabilidad_microestado]] es adimensional y la [[multiplicidad_macroestado]] también es un conteo puro. El logaritmo usado en [[entropia]] actúa sobre un número adimensional, de modo que la dimensión final procede de [[constante_boltzmann]]. Por eso la [[entropia]] tiene unidades de J/K. La [[energia_total]] no se calcula aquí, pero actúa como restricción de accesibilidad y conserva dimensión de energía.

## Interpretación física
El resultado muestra por qué la hipótesis fundamental no dice que todos los macroestados sean igual de probables. Lo uniforme es la [[probabilidad_microestado]] de cada microestado accesible, no la probabilidad de cada agrupación macroscópica. El macroestado B domina porque su [[multiplicidad_macroestado]] es mayor: contiene más formas microscópicas compatibles con las mismas restricciones. Esto explica por qué los estados macroscópicos de equilibrio suelen ser abrumadoramente probables en sistemas reales. Una distribución con un microestado privilegiado necesitaría una causa física adicional; si no existe, el [[desbalance_probabilidad]] indica que la respuesta rompe el supuesto microcanónico.

# Ejemplo de aplicación real
## Contexto
Imagina un modelo simplificado de moléculas de gas en una caja aislada. La caja mantiene [[volumen]] constante, el número de moléculas fija [[numero_particulas]] y la energía disponible fija [[energia_total]]. Muchas configuraciones microscópicas producen un gas aparentemente uniforme. Otras pocas configuraciones producen una concentración notable en una esquina. La hipótesis fundamental asigna igual peso a cada microestado accesible, pero las configuraciones uniformes suelen agrupar muchísimos más microestados.

## Estimación física
Si el macroestado uniforme agrupa aproximadamente 10^8 microestados y el macroestado concentrado agrupa 10^2, la razón de probabilidades es del orden de 10^6. Cada microestado individual conserva la misma [[probabilidad_microestado]], pero la suma favorece al macroestado de mayor [[multiplicidad_macroestado]]. La escala de [[entropia]] aumenta con el logaritmo de la multiplicidad, por lo que diferencias enormes de conteo se transforman en diferencias termodinámicas manejables. Si aparece un [[desbalance_probabilidad]] grande, probablemente la caja no está equilibrada o no está realmente aislada.

## Interpretación
La aplicación real enseña que equilibrio no significa que una configuración sea imposible, sino que algunas configuraciones están apoyadas por muchas más realizaciones microscópicas. La hipótesis fundamental permite separar dos niveles: el microestado individual, tratado de forma uniforme, y el macroestado, favorecido por su multiplicidad. Esa distinción es el corazón del razonamiento estadístico.

