# Ejemplo tipo examen

## Enunciado

Una máquina térmica de Carnot opera entre un foco caliente a 527 °C y un foco frío a 27 °C. El foco caliente suministra 2000 J por ciclo. Calcular: (a) la eficiencia de Carnot, (b) el trabajo neto por ciclo, (c) el calor cedido al foco frío por ciclo, (d) la variación de entropía del universo por ciclo. Verificar que el proceso es reversible.

## Datos

- Temperatura absoluta del foco caliente: [[T_caliente]] queda en 800 K tras convertir desde 527 grados C.
- Temperatura absoluta del foco frio: [[T_frio]] queda en 300 K tras convertir desde 27 grados C.
- Calor absorbido del foco caliente por ciclo: 2000 J.
- Proceso: ciclo de Carnot (reversible por definición)

## Definición del sistema

El sistema es el fluido de trabajo de la máquina (gas ideal, por ejemplo). El entorno está formado por los dos reservorios térmicos. El universo termodinámico es fluido + reservorio caliente + reservorio frío.

## Modelo físico

Se aplica la fórmula de eficiencia de Carnot para un ciclo reversible entre dos focos:

{{f:eficiencia_carnot}}

La condición de reversibilidad garantiza que el ciclo produce la máxima cantidad de trabajo posible para esas temperaturas:

{{f:condicion_reversibilidad}}

## Justificación del modelo

El modelo es válido porque:
- El ciclo de Carnot es, por definición, reversible: opera con gradientes infinitesimales y sin disipación.
- Los focos son reservorios ideales a temperatura constante.
- La eficiencia de Carnot es exacta como cota superior y como eficiencia real del ciclo ideal.

El modelo dejaría de valer si:
- La máquina tuviera fricción interna (turbina, pistón): la eficiencia real sería menor.
- Los focos fueran finitos (su temperatura cambiaría durante el ciclo).

## Resolución simbólica

Paso 1: Eficiencia de Carnot:

[[eta_Carnot]] = 1 − [[T_frio]] / [[T_caliente]]

Paso 2: Trabajo neto:

El trabajo neto se obtiene multiplicando la eficiencia reversible por el calor absorbido del foco caliente.

Paso 3: Calor cedido al foco frío:

El calor cedido al foco frio se obtiene restando el trabajo neto al calor absorbido; de forma equivalente, se usa la proporcion térmica entre [[T_frio]] y [[T_caliente]].

Paso 4: Variación de entropía del universo:

La variación de entropía del universo se verifica sumando la contribucion del sistema ciclico y las contribuciones de ambos focos.

En un ciclo, [[DeltaS_sis]] es nula porque el sistema vuelve al estado inicial.

## Sustitución numérica

**[[eta_Carnot]]**: sustituir [[T_frio]] = 300 K, [[T_caliente]] = 800 K. El cociente es 300/800 = 0.375. Entonces [[eta_Carnot]] = 1 − 0.375 = 0.625 = 62.5%.

**W_neto**: multiplicar 0.625 × 2000 = 1250 J.

**Q_C**: restar 2000 − 1250 = 750 J. Verificación: 2000 × 300/800 = 750 J. Consistente.

**[[DeltaS_univ]]**: [[DeltaS_sis]] = 0 (ciclo). [[DeltaS_ent]] = −Q_H/[[T_caliente]] + Q_C/[[T_frio]] = −2000/800 + 750/300 = −2.500 + 2.500 = 0 J/K. Así [[DeltaS_univ]] = 0 J/K.

## Validación dimensional

La razon de temperaturas compara kelvin con kelvin y produce una magnitud adimensional para [[eta_Carnot]].
El trabajo neto combina una eficiencia adimensional con energía absorbida, por lo que queda en joule.
El calor cedido al foco frio se obtiene como diferencia de energías, también en joule.
El balance entrópico divide energía entre temperatura absoluta, por lo que [[DeltaS_univ]] queda en J/K.

## Interpretación física

La eficiencia de Carnot es 62.5% y significa que, de cada 2000 J absorbidos del foco caliente, la máquina convierte como máximo 1250 J en trabajo útil y debe ceder obligatoriamente 750 J al foco frío. Esta cesión indica una exigencia de la segunda ley, no un defecto del diseño.

[[DeltaS_univ]] nula confirma que el ciclo es reversible: no se genera entropía neta en el universo. Toda la calidad energética se conserva. El reservorio caliente pierde 2.500 J/K de entropía, pero el reservorio frio gana exactamente 2.500 J/K. La compensacion es perfecta y por eso el ciclo sirve como referencia máxima para cualquier maquina real entre esos focos.

Si la maquina real alcanzara el 45% de eficiencia en lugar del 62.5% ideal, la diferencia de 17.5 puntos cuantificaria perdidas por irreversibilidades internas como friccion y gradientes finitos de temperatura. La eficiencia de segunda ley seria cercana al 72%, una lectura útil porque separa la limitacion inevitable de Carnot de las perdidas que si pueden atacarse con diseno.

# Ejemplo de aplicación real

## Contexto

Un ingeniero evalúa una central geotérmica que extrae vapor a 180 °C (453 K) de un pozo geotérmico y rechaza calor al ambiente a 15 °C (288 K). La central produce 5 MW eléctricos. El ingeniero necesita calcular la eficiencia de Carnot como referencia, la eficiencia real de la central, y la eficiencia de segunda ley para determinar si hay margen de mejora significativo.

## Estimación física

Como estimacion de orden de magnitud, la referencia de Carnot entre 453 K y 288 K da [[eta_Carnot]] cercana al 36.4%.

Esa cifra se lee como techo termodinámico, no como rendimiento esperado: el foco geotérmico está solo 165 K por encima del ambiente, por lo que la razón entre foco frío y foco caliente es grande y reduce el trabajo máximo recuperable.

Para producir 5 MW con esa referencia reversible, el calor mínimo necesario del foco caliente seria cercano a 13.7 MW térmicos.

Si la central real consume 18 MW térmicos del pozo geotermico para producir 5 MW electricos, su eficiencia real queda cerca del 27.8%.

La eficiencia de segunda ley compara ese rendimiento real con [[eta_Carnot]] y queda cerca del 76.4%.

La lectura cuantitativa es que de cada 100 unidades de potencial reversible disponibles, la planta aprovecha unas 76 y pierde unas 24 por irreversibilidades reales.

## Interpretación

La eficiencia de segunda ley del 76.4% indica que la central aprovecha el 76% del potencial termodinámico máximo. Esto es un rendimiento razonablemente bueno para una central geotérmica (donde las temperaturas del foco caliente son relativamente bajas, limitando [[eta_Carnot]]).

La causa física principal no es solo que la turbina sea imperfecta: el propio salto térmico disponible es modesto. Por eso [[eta_Carnot]] actúa como frontera dura y la eficiencia de segunda ley separa dos efectos: límite reversible por temperaturas y pérdidas internas por diseño real.

El margen de mejora teórico es del 23.6%. Las fuentes de irreversibilidad principales son: pérdidas de presión en las tuberías de vapor, gradientes finitos de T en los intercambiadores, y disipación mecánica en la turbina. El análisis exergético por componente identificaría cuál de estas fuentes es dominante.

La limitación fundamental es que la temperatura geotérmica (453 K) es baja comparada con centrales de combustibles fósiles (800-1500 K), lo que limita [[eta_Carnot]] al 36%. Incluso con una máquina perfecta, más del 63% del calor geotérmico debe cederse al ambiente. La inversión en mejora del ciclo (ciclo binario con fluido orgánico, por ejemplo) podría subir eta_II del 76% al 82-85%, pero nunca superar el techo de Carnot.
