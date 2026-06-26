# Ejemplos — Ciclo Diesel

# Ejemplo tipo examen

## Enunciado

Un motor Diesel ideal opera con aire ([[gamma]] de 1.4) y tiene una relación de compresión [[r]] de 18. La relación de corte [[r_c]] es 2.5. El motor absorbe 1200 kJ/kg de calor durante la combustión isobárica. Determinar el rendimiento térmico del ciclo, el trabajo neto por kilogramo y el calor rechazado al foco frío.

## Datos

- Relación de compresión [[r]] de 18, correspondiente a un motor Diesel industrial de tamaño medio
- Relación de corte [[r_c]] de 2.5, indicando una inyección de combustible moderada
- Índice adiabático [[gamma]] de 1.4, modelo de aire frío estándar
- Calor absorbido [[Q_H]] de 1200 kJ/kg, suministrado durante la combustión isobárica

## Definición del sistema

Sistema cerrado compuesto por aire ideal con propiedades constantes que recorre un ciclo Diesel reversible de cuatro procesos: compresión adiabática, expansión isobárica (combustión), expansión adiabática y rechazo isocórico de calor.

## Modelo físico

Se asume gas ideal con [[gamma]] constante de 1.4, procesos reversibles sin pérdidas por fricción ni transferencia de calor a las paredes. La combustión se modela como adición de calor a presión constante y el escape como rechazo de calor a volumen constante.

## Justificación del modelo

El ciclo Diesel ideal con gas de propiedades constantes es el modelo termodinámico de referencia para motores de encendido por compresión. Se elige este modelo porque permite calcular el límite superior teórico del rendimiento con una expresión algebraica cerrada que depende únicamente de tres parámetros medibles: la relación de compresión geométrica del cilindro, la relación de corte operativa controlada por la inyección, y el índice adiabático del gas de trabajo. Este modelo es apropiado cuando las temperaturas del ciclo no superan 2000 K y la relación de compresión está entre 12 y 25, condiciones que se cumplen en este problema. El ciclo Diesel es el modelo de referencia para motores de encendido por compresión. La fórmula del rendimiento permite evaluar el límite termodinámico teórico antes de considerar pérdidas reales.

## Resolución simbólica

El rendimiento del ciclo Diesel se obtiene de la fórmula central:

{{f:rendimiento_diesel}}

Con el rendimiento conocido, el trabajo neto se calcula mediante:

{{f:rendimiento_alternativo_diesel}}

Y el calor rechazado se obtiene por balance energético:

{{f:balance_energetico_diesel}}

## Sustitución numérica

Para calcular [[eta_D]], primero se evalúa el factor de compresión: uno dividido entre [[r]] elevado a [[gamma]] menos uno, es decir, uno dividido entre 18 elevado a 0.4. Calculando 18 elevado a 0.4 se obtiene 3.178, por tanto el factor de compresión es uno dividido entre 3.178, es decir, 0.3147.

El factor de corte es ([[r_c]] elevado a [[gamma]] menos uno) dividido entre ([[gamma]] multiplicado por ([[r_c]] menos uno)): (2.5 elevado a 1.4 menos 1) dividido entre (1.4 multiplicado por 1.5). Calculando 2.5 elevado a 1.4 se obtiene 3.343, por tanto el numerador es 3.343 menos 1 que es 2.343, y el denominador es 1.4 por 1.5 que es 2.1. El factor de corte resulta 2.343 dividido entre 2.1, es decir, 1.116.

El producto de ambos factores es 0.3147 multiplicado por 1.116, es decir, 0.3512. Por tanto [[eta_D]] es uno menos 0.3512, es decir, 0.6488 o 64.9 %.

El [[W_neto]] se obtiene como [[eta_D]] multiplicado por [[Q_H]]: 0.6488 por 1200 da aproximadamente 778.6 kJ/kg. Por tanto [[W_neto]] es aproximadamente 778.6 kJ/kg.

El [[Q_C]] se obtiene por balance: [[Q_H]] menos [[W_neto]], es decir, 1200 menos 778.6, lo que da aproximadamente 421.4 kJ/kg. Por tanto [[Q_C]] es aproximadamente 421.4 kJ/kg.

## Validación dimensional

- Rendimiento: cociente adimensional `[1]` ✓
- Trabajo neto: `[1]` multiplicado por `[kJ/kg]` resulta `[kJ/kg]` ✓
- Calor rechazado: diferencia de energías `[kJ/kg] - [kJ/kg]` resulta `[kJ/kg]` ✓

## Interpretación física

Un rendimiento de 64.9 % significa que, en el mejor caso teórico posible, casi dos tercios de la energía suministrada como calor se convierten en trabajo mecánico. El tercio restante debe rechazarse obligatoriamente al foco frío. Si la relación de corte [[r_c]] se redujera de 2.5 a 1.5 (menos combustible inyectado), el rendimiento subiría a 68.2 %, pero el [[W_neto]] por kilogramo disminuiría porque se inyecta menos calor. Si [[r_c]] aumentara a 3.5, el rendimiento caería a 60.1 %, mostrando que inyectar más combustible penaliza la eficiencia. El [[W_neto]] de 778.6 kJ/kg confirma que la mayor parte de la energía inyectada se aprovecha como trabajo útil en este ciclo idealizado.

# Ejemplo de aplicación real

## Contexto

Un ingeniero evalúa un motor Diesel marino con relación de compresión [[r]] de 22 y relación de corte [[r_c]] de 3. El motor consume 15 MW térmicos de combustible y su rendimiento real medido es del 42 %. Se necesita determinar el límite teórico y cuantificar el margen de mejora disponible.

## Estimación física

El rendimiento máximo teórico del ciclo Diesel se obtiene de la fórmula con [[gamma]] de 1.4 para el modelo de aire frío:

{{f:rendimiento_diesel}}

Calculando, el factor de compresión es uno dividido entre 22 elevado a 0.4. El valor 22 elevado a 0.4 es aproximadamente 3.427, dando un factor de 0.2918. El factor de corte es (3 elevado a 1.4 menos 1) dividido entre (1.4 por 2): el numerador es 4.656 menos 1 que da 3.656, y el denominador es 2.8. El cociente es 1.306. El producto es 0.2918 por 1.306 que da 0.3811. Esta estimación del orden de magnitud del límite termodinámico permite evaluar la escala del margen de mejora. El rendimiento teórico es uno menos 0.3811, es decir, aproximadamente 61.9 %.

Si el motor consume 15 MW térmicos de [[Q_H]], el [[W_neto]] máximo sería 15 multiplicado por 0.619, es decir, 9.29 MW. El [[Q_C]] mínimo sería 15 menos 9.29, es decir, 5.71 MW. El trabajo real es 15 multiplicado por 0.42, es decir, 6.3 MW, con un rechazo real de 8.7 MW.

{{f:balance_energetico_diesel}}

## Interpretación

La eficiencia real del 42 % frente al teórico del 61.9 % indica que el motor opera al 67.9 % de su límite termodinámico. Las principales fuentes de irreversibilidad son la transferencia de calor a las paredes del cilindro, la fricción del pistón y la combustión incompleta del combustible pesado marino.

Para evaluar si la inversión en mejoras merece la pena, el ingeniero compara: si se instalara un sistema de recuperación de calor de los gases de escape para precalentar el aire de admisión, se podrían recuperar aproximadamente 1.5 MW, elevando la potencia efectiva a 7.8 MW y la eficiencia global al 52 %. En términos de [[W_neto]], cada punto porcentual de mejora representa 0.15 MW adicionales de potencia en el eje, justificando inversiones en turbocompresores de dos etapas y sistemas de inyección de alta presión con control electrónico.
