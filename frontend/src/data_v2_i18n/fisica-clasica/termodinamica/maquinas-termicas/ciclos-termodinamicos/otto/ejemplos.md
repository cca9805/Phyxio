# Ejemplos — Ciclo Otto

# Ejemplo tipo examen

## Enunciado

Un motor de gasolina ideal opera con aire ([[gamma]] de 1.4) y tiene una relación de compresión [[r]] de 10. El motor absorbe 1000 kJ/kg de calor durante la combustión isocórica. Determinar el rendimiento térmico del ciclo, el trabajo neto por kilogramo y el calor rechazado al foco frío.

## Datos

- Relación de compresión [[r]] de 10, correspondiente a un motor de gasolina de inyección directa moderno
- Índice adiabático [[gamma]] de 1.4, modelo de aire frío estándar
- Calor absorbido [[Q_H]] de 1000 kJ/kg, suministrado durante la combustión isocórica instantánea
- Se buscan: [[eta_O]], [[W_neto]] y [[Q_C]]

## Definición del sistema

Sistema cerrado compuesto por aire ideal con propiedades constantes que recorre un ciclo Otto reversible de cuatro procesos: compresión adiabática, combustión isocórica, expansión adiabática y rechazo isocórico de calor.

## Modelo físico

Se asume gas ideal con [[gamma]] constante de 1.4, procesos reversibles sin pérdidas por fricción ni transferencia de calor a las paredes. La combustión se modela como adición de calor a volumen constante y el escape como rechazo de calor a volumen constante.

## Justificación del modelo

El ciclo Otto ideal con gas de propiedades constantes es el modelo termodinámico de referencia para motores de encendido por chispa. Se elige este modelo porque permite calcular el límite superior teórico del rendimiento con una expresión algebraica cerrada que depende únicamente de dos parámetros medibles: la relación de compresión geométrica del cilindro y el índice adiabático del gas de trabajo. Este modelo es apropiado cuando las temperaturas del ciclo no superan 2000 K y la relación de compresión está entre 6 y 13, condiciones que se cumplen en este problema. La simplicidad de la fórmula Otto, que no depende de [[Q_H]], permite aislar el efecto puramente geométrico de la compresión sobre la eficiencia.

## Resolución simbólica

El rendimiento del ciclo Otto se obtiene de la fórmula central:

{{f:rendimiento_otto}}

Con el rendimiento conocido, el trabajo neto se calcula mediante:

{{f:rendimiento_alternativo_otto}}

Y el calor rechazado se obtiene del balance energético:

{{f:balance_energetico_otto}}

## Sustitución numérica

Para calcular [[eta_O]], se evalúa [[r]] elevado a [[gamma]] menos uno, es decir, 10 elevado a 0.4. Calculando 10 elevado a 0.4 se obtiene 2.512. El rendimiento es uno menos uno dividido entre 2.512, es decir, uno menos 0.3981, que da 0.6019 o 60.2 %.

El trabajo neto es [[eta_O]] multiplicado por [[Q_H]]: 0.6019 por 1000 kJ/kg, es decir, 601.9 kJ/kg.

El calor rechazado es [[Q_H]] menos [[W_neto]]: 1000 menos 601.9, es decir, 398.1 kJ/kg.

## Validación dimensional

El rendimiento es adimensional: [1] menos [1] dividido entre [1] da [1]. El trabajo neto tiene unidades de [kJ/kg], coherente con energía específica. El calor rechazado tiene las mismas unidades.

## Interpretación física

El rendimiento de 60.2 % significa que, de cada 1000 kJ/kg de calor absorbido, 602 kJ/kg se convierten en trabajo mecánico y 398 kJ/kg se rechazan obligatoriamente al foco frío. Este valor es el máximo teórico para esta relación de compresión; cualquier motor real con [[r]] de 10 tendrá un rendimiento inferior debido a pérdidas por fricción, combustión no instantánea y transferencia de calor a las paredes. Es importante notar que si se duplicara [[Q_H]] a 2000 kJ/kg, el rendimiento seguiría siendo exactamente 60.2 %, pero [[W_neto]] se duplicaría a 1204 kJ/kg y [[Q_C]] a 796 kJ/kg. Esta independencia del rendimiento respecto a [[Q_H]] es exclusiva del ciclo Otto y no se cumple en el ciclo Diesel, donde la relación de corte introduce una dependencia adicional.

# Ejemplo de aplicación real

## Contexto

Un motor de automóvil turboalimentado tiene una relación de compresión [[r]] de 10. Se desea hacer una estimación del orden de magnitud del rendimiento térmico máximo con el modelo de aire frío y compararlo con la eficiencia real del motor.

## Estimación física

El rendimiento máximo teórico del ciclo Otto se obtiene de la fórmula con [[gamma]] de 1.4 para el modelo de aire frío:

{{f:rendimiento_otto}}

Con [[r]] de 10 y [[gamma]] de 1.4: [[eta_O]] es uno menos uno dividido entre 10 elevado a 0.4, es decir, uno menos 0.3981, que da aproximadamente 0.60 o 60 %. Esta es una estimación de orden de magnitud del techo termodinámico. Los motores de gasolina modernos alcanzan rendimientos reales del 30 al 38 %, lo que representa un 50 a 63 % del valor teórico. La diferencia se debe a la combustión no instantánea, las pérdidas de calor a las paredes, la fricción mecánica y el bombeo de gases. El valor razonable de la aproximación es que permite evaluar rápidamente la escala del rendimiento sin necesidad de simulaciones complejas.

## Interpretación

La estimación muestra que incluso con un modelo simplificado, el orden de magnitud del rendimiento teórico (60 %) permite evaluar que los motores reales aprovechan solo la mitad del potencial termodinámico. Las mejoras tecnológicas (inyección directa, turboalimentación, distribución variable) se miden por cuánto acercan el rendimiento real al límite Otto.
