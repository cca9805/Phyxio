# Ejemplo tipo examen


## Enunciado

Un [[ensemble]] contiene copias ideales de un sistema con tres [[estado_microscopico]] compatibles con la misma [[restriccion_macroscopica]]. Los estados tienen pesos estadísticos relativos 1, 2 y 7. La magnitud observable tiene valores 0 J, 4 J y 10 J. Determina la [[probabilidad_estado]] de cada estado, el [[valor_medio_ensemble]] y una lectura de la [[fluctuacion_ensemble]].

## Datos

- [[peso_estadistico]] del estado 1: 1
- [[peso_estadistico]] del estado 2: 2
- [[peso_estadistico]] del estado 3: 7
- [[valor_estado]] del estado 1: 0 J
- [[valor_estado]] del estado 2: 4 J
- [[valor_estado]] del estado 3: 10 J
- [[numero_copias_ensemble]] ideal: muy grande

## Definición del sistema

El sistema no es una copia única, sino un [[ensemble]] de copias equivalentes. Todas comparten la misma [[restriccion_macroscopica]], por lo que los tres estados son comparables. Cada [[estado_microscopico]] recibe una fracción de ocupación definida por su [[probabilidad_estado]]. La pregunta física es cómo una distribución de copias, con pesos desiguales, se convierte en una predicción macroscópica para el observable representado por [[valor_estado]].

## Modelo físico

Usamos un modelo de [[ensemble]] discreto. Los [[peso_estadistico]] se consideran relativos y deben normalizarse antes de hablar de probabilidad física. Después, el [[valor_medio_ensemble]] se obtiene como media ponderada. La [[fluctuacion_ensemble]] mide si los valores individuales quedan cerca o lejos del promedio.

## Justificación del modelo

El modelo es apropiado porque todos los estados pertenecen a la misma preparación macroscópica y los valores del observable tienen la misma unidad. No se estudia evolución temporal ni interacción entre copias, sino el reparto estadístico de copias ideales. Como los pesos son positivos, pueden convertirse en una distribución normalizada. Si fueran negativos o si los estados pertenecieran a restricciones distintas, el modelo fallaría.

## Resolución simbólica

Primero convertimos pesos relativos en probabilidades normalizadas.

{{f:peso_ensemble_normalizado}}

Después comprobamos que todas las probabilidades reparten la población completa.

{{f:normalizacion_ensemble}}

El promedio del observable se calcula ponderando cada [[valor_estado]].

{{f:promedio_ensemble}}

Para estimar dispersión, usamos la relación de varianza del [[ensemble]].

{{f:varianza_ensemble}}

La interpretación frecuencial puede conectarse con copias ideales mediante:

{{f:probabilidad_frecuencia_ensemble}}

## Sustitución numérica

La suma de pesos es 1 + 2 + 7 = 10. Las probabilidades resultan 0,1; 0,2; y 0,7. El [[valor_medio_ensemble]] se obtiene como 0,1·0 + 0,2·4 + 0,7·10, que da 7,8 J. Si se interpreta con [[numero_copias_ensemble]] de 1000 copias, el [[conteo_sistemas]] de cada estado sería 100, 200 y 700. Para la dispersión, los desvíos cuadráticos ponderados son 0,1·(0 − 7,8)², 0,2·(4 − 7,8)² y 0,7·(10 − 7,8)². La varianza resulta aproximadamente 12,36 J² y la [[fluctuacion_ensemble]] es aproximadamente 3,5 J.

## Validación dimensional

La [[probabilidad_estado]] es adimensional y procede de normalizar [[peso_estadistico]]. El [[valor_medio_ensemble]] conserva la unidad de [[valor_estado]], por eso se expresa en J. La varianza tiene unidad J² y la [[fluctuacion_ensemble]] vuelve a J al tomar raíz cuadrada. No se han sumado magnitudes incompatibles: todos los valores microscópicos representan el mismo observable.

## Interpretación física

El resultado indica que la mayoría de las copias del [[ensemble]] se concentran en el tercer [[estado_microscopico]], porque su [[probabilidad_estado]] es 0,7. Por eso el [[valor_medio_ensemble]] queda cerca de 10 J, aunque no llega a ese valor porque existen copias en estados de menor [[valor_estado]]. La [[fluctuacion_ensemble]] de unos 3,5 J no es despreciable: señala que una copia individual puede diferir bastante del promedio. Físicamente, el promedio resume la predicción macroscópica, mientras la fluctuación conserva memoria de la diversidad microscópica. La clave es que los pesos relativos no son todavía probabilidades hasta pasar por la normalización.

# Ejemplo de aplicación real


## Contexto

En una simulación molecular simplificada, muchas configuraciones compatibles con la misma temperatura efectiva y geometría se agrupan como un [[ensemble]]. Cada [[estado_microscopico]] tiene un valor de energía potencial o de una coordenada observable. En lugar de elegir una sola configuración como representativa, se calcula una distribución de [[probabilidad_estado]] y se obtiene un [[valor_medio_ensemble]].

## Estimación física

Supongamos 10⁵ configuraciones generadas bajo la misma [[restriccion_macroscopica]]. Si unas 2·10⁴ caen en un grupo de estados, la probabilidad estimada es de orden 0,2. Si el observable típico está entre 1 eV y 3 eV, un [[valor_medio_ensemble]] alrededor de 2 eV es razonable. Si la [[fluctuacion_ensemble]] se acerca a 1 eV, el promedio no describe una nube estrecha, sino una población con diferencias microscópicas relevantes. En una escala de simulación, aumentar [[numero_copias_ensemble]] reduce ruido de frecuencia, no elimina la dispersión física real.

## Interpretación

El [[ensemble]] permite convertir una simulación de muchas configuraciones en una predicción macroscópica sin fingir que todas las copias son iguales. Las probabilidades informan de ocupación estadística, el promedio da el valor observable esperado y la [[fluctuacion_ensemble]] avisa de cuánto varían las copias. Cuando una [[restriccion_macroscopica]] cambia, por ejemplo el volumen o la energía disponible, ya no se compara el mismo [[ensemble]] y deben recalcularse pesos, probabilidades y promedios. El [[conteo_sistemas]] de cada estado en el muestreo es la base empírica de la [[probabilidad_estado]] estimada.