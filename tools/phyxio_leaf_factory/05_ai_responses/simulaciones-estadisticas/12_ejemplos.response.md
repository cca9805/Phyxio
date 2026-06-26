# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: simulaciones-estadisticas
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen

## Enunciado

Una simulación Monte Carlo de un sistema térmico estima el valor medio de un [[observable]] asociado a la [[energia]] interna por partícula. Se han tomado 40000 muestras después de la fase de equilibrado. La [[media_muestral]] obtenida es 1,84 eV y la [[desviacion_estandar]] de los valores individuales es 0,60 eV. Se pide estimar el [[error_estadistico]], interpretar si la simulación permite distinguir un modelo alternativo que predice 1,82 eV, y explicar cómo cambiaría la incertidumbre si el [[numero_muestras]] aumentara a 160000.

## Datos

- [[numero_muestras]]: 40000 muestras.
- [[media_muestral]]: 1,84 eV.
- [[desviacion_estandar]]: 0,60 eV.
- Predicción alternativa del [[observable]]: 1,82 eV.
- Nuevo [[numero_muestras]] propuesto: 160000 muestras.
- La [[temperatura]] se mantiene fija durante el muestreo.
- La [[probabilidad_aceptacion]] media se considera razonable y el sistema no queda atrapado en una región única de [[energia]].

## Definición del sistema

El sistema es una colección de configuraciones microscópicas visitadas mediante un algoritmo Monte Carlo. Cada configuración posee una [[energia]] y produce un valor del [[observable]]. El objeto físico que se estudia no es una muestra aislada, sino el promedio estadístico del conjunto a [[temperatura]] fija. La simulación acumula una [[suma_observable]] y de ella obtiene una [[media_muestral]]. Como el número de configuraciones es finito, la estimación queda acompañada por un [[error_estadistico]]. Se supone que las muestras están suficientemente mezcladas para que el [[numero_muestras]] registrado se aproxime al número efectivo de datos independientes.

## Modelo físico

El modelo usa una estimación de media muestral y un error estándar de la media. Para un sistema térmico en equilibrio, las configuraciones deben aparecer con pesos compatibles con la [[probabilidad_boltzmann]], determinada por [[energia]], [[temperatura]], [[constante_boltzmann]] y [[constante_normalizacion]]. En una simulación Monte Carlo, la [[probabilidad_aceptacion]] controla si una propuesta con cierta [[diferencia_energia]] se incorpora al recorrido. Aquí no se calcula explícitamente la distribución de estados, pero se asume que el muestreo respeta el equilibrio térmico.

## Justificación del modelo

El uso de la media es adecuado porque el problema pregunta por un valor medio físico, no por una configuración concreta. El uso del [[error_estadistico]] es adecuado porque se quiere decidir si la diferencia entre 1,84 eV y 1,82 eV es significativa o solo fluctuación de muestreo. La [[desviacion_estandar]] de 0,60 eV indica que los valores individuales del [[observable]] fluctúan bastante, pero no impide obtener una media precisa si el [[numero_muestras]] es grande. La hipótesis delicada es la independencia efectiva: si las muestras estuvieran correlacionadas, el error real sería mayor.

## Resolución simbólica

Primero se expresa la media mediante la suma acumulada del observable:

{{f:media_muestral_observable}}

Después se relaciona la dispersión de muestras individuales con la incertidumbre de la media:

{{f:error_estadistico_media}}

Para interpretar el origen térmico del muestreo, se recuerda que los estados de menor [[energia]] tienen mayor peso a [[temperatura]] fija:

{{f:factor_boltzmann}}

Y que la aceptación de una propuesta Monte Carlo depende de la [[diferencia_energia]]:

{{f:aceptacion_monte_carlo}}

La comparación física se hace entre la diferencia de medias y el [[error_estadistico]] calculado.

## Sustitución numérica

Con [[desviacion_estandar]] de 0,60 eV y [[numero_muestras]] de 40000, la raíz de N es 200. Por tanto, el [[error_estadistico]] es aproximadamente 0,60 eV / 200 = 0,003 eV. La diferencia entre la [[media_muestral]] simulada, 1,84 eV, y el valor alternativo, 1,82 eV, es 0,02 eV. Esa diferencia equivale a unas 6,7 veces el [[error_estadistico]], por lo que resulta claramente distinguible bajo el modelo de muestras independientes. Si [[numero_muestras]] aumenta a 160000, la raíz de N pasa a 400 y el [[error_estadistico]] se reduce a 0,0015 eV.

## Validación dimensional

La [[media_muestral]] tiene la misma dimensión que el [[observable]], en este caso energía por partícula medida en eV. La [[desviacion_estandar]] también se mide en eV porque describe la dispersión de valores individuales del mismo observable. Al dividir por la raíz cuadrada de [[numero_muestras]], no se añade ninguna unidad, porque el número de muestras es adimensional. Por tanto, el [[error_estadistico]] queda en eV, la misma unidad que la diferencia entre modelos. La comparación 0,02 eV frente a 0,003 eV es dimensionalmente válida.

## Interpretación física

El resultado indica que la simulación ha reducido bastante la incertidumbre de la media: aunque cada valor individual del [[observable]] fluctúe con una escala de 0,60 eV, el promedio de 40000 muestras deja un [[error_estadistico]] de solo 0,003 eV. Físicamente, esto significa que la nube de configuraciones térmicas todavía fluctúa, pero su centro estadístico está localizado con bastante precisión. La diferencia de 0,02 eV respecto al modelo alternativo no queda enterrada en el ruido de muestreo; es varias veces mayor que la incertidumbre. Sin embargo, esta conclusión depende de que el muestreo explore bien los estados de [[energia]] y de que la [[probabilidad_aceptacion]] no produzca una cadena demasiado correlacionada.

# Ejemplo de aplicación real

## Contexto

Un grupo quiere estimar la capacidad calorífica de un material simplificado usando una simulación térmica. En cada paso se mide un [[observable]] relacionado con fluctuaciones de [[energia]]. Se trabaja a [[temperatura]] fija, y el algoritmo acepta o rechaza cambios con una [[probabilidad_aceptacion]] controlada por la [[diferencia_energia]]. El objetivo práctico no es obtener una cifra perfecta, sino decidir cuántas muestras hacen falta para que el [[error_estadistico]] no oculte la diferencia entre dos modelos microscópicos.

## Estimación física

Supongamos que el [[observable]] tiene una [[desviacion_estandar]] aproximada de 5 unidades y que se desea un [[error_estadistico]] cercano a 0,05 unidades. Como el error baja con la raíz de [[numero_muestras]], se necesita una raíz de N del orden de 100, es decir, un [[numero_muestras]] del orden de 10⁴ muestras efectivas. Si las muestras están correlacionadas, quizá haya que generar muchas más, por ejemplo 10⁵ pasos, para obtener esas 10⁴ muestras efectivas. La escala es razonable para una simulación de aula avanzada o un cálculo computacional ligero.

## Interpretación

La estimación muestra por qué las simulaciones estadísticas son potentes pero no mágicas. Para mejorar una cifra final diez veces no basta con repetir un poco más: normalmente hay que multiplicar el esfuerzo por cien. Esto obliga a decidir qué precisión es físicamente necesaria. Si dos modelos predicen valores separados por 1 unidad, un error de 0,05 es suficiente; si predicen valores separados por 0,02, esa misma simulación no decide nada. El [[error_estadistico]] funciona como un semáforo: verde cuando la diferencia buscada supera claramente la incertidumbre, rojo cuando la conclusión sería una decoración numérica sin soporte físico.

