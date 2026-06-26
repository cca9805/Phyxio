# Ejemplo tipo examen

## Enunciado

Una turbina de gas industrial opera en ciclo Brayton ideal con aire como fluido de trabajo. La relación de presiones es 15 y el índice adiabático del aire es 1.40. Calcular el rendimiento térmico del ciclo.

## Datos

- Relación de presiones: 15
- Índice adiabático: 1.40
- Fluido de trabajo: aire (gas ideal, propiedades constantes)
- Ciclo ideal (procesos reversibles)

## Definición del sistema

El sistema es el fluido de trabajo (aire) que recorre el ciclo Brayton cerrado. Los cuatro estados termodinámicos del ciclo son: entrada al compresor (1), salida del compresor (2), salida de la cámara de combustión (3) y salida de la turbina (4). Se analiza el ciclo completo por kilogramo de aire.

## Modelo físico

Ciclo Brayton ideal con gas de propiedades constantes. La magnitud central es [[eta_th]] y la fórmula principal es:

{{f:rendimiento_brayton}}

Todos los procesos son internamente reversibles. El compresor y la turbina operan con eficiencia isentrópica del 100 %. No hay pérdidas de presión en la cámara de combustión ni en los conductos.

## Justificación del modelo

El ciclo Brayton ideal es válido para este problema porque el enunciado especifica explícitamente un ciclo ideal con aire como gas perfecto de propiedades constantes. La relación de presiones de 15 está dentro del rango de validez del modelo (4–40) y la suposición de [[gamma]] constante a 1.40 es razonable para aire a temperaturas moderadas. El modelo fallaría si las temperaturas fueran lo bastante altas como para modificar [[gamma]] (por encima de 1300 K en el compresor) o si se pidieran eficiencias isentrópicas reales.

## Resolución simbólica

El rendimiento del ciclo Brayton ideal se obtiene a partir de la fórmula de rendimiento con [[r_p]] y [[gamma]]:

{{f:rendimiento_brayton}}

donde [[r_p]] es la relación de presiones y [[gamma]] es el índice adiabático.

Para verificar la coherencia del resultado se aplica el balance energético del ciclo:

{{f:balance_energetico}}

En un ciclo Rankine equivalente, el rendimiento se calcularía mediante:

{{f:rendimiento_rankine}}

## Sustitución numérica

Se identifican los valores: relación de presiones igual a 15 e índice adiabático igual a 1.40.

El exponente del rendimiento es la fracción entre el complemento de [[gamma]] y [[gamma]], que para aire vale la fracción (1 menos 1.40) entre 1.40, igual a menos 0.2857.

Elevando la relación de presiones a ese exponente: 15 elevado a menos 0.2857 da aproximadamente 0.4738.

El rendimiento térmico resulta: uno menos 0.4738 igual a 0.5262, es decir, aproximadamente 52.6 %.

## Validación dimensional

[[eta_th]] es un cociente de energías: la dimensión de [[W_neto]] entre la dimensión de [[Q_H]] es M·L²·T⁻² entre M·L²·T⁻², que da adimensional. El resultado 0.526 es adimensional y está en el rango físicamente aceptable entre cero y uno. ✓

## Interpretación física

Un rendimiento del 52.6 % significa que de cada 100 kJ de calor suministrado en la cámara de combustión, 52.6 kJ se convierten en trabajo mecánico útil y los restantes 47.4 kJ se rechazan inevitablemente como [[Q_C]] a la atmósfera. Este valor corresponde al ciclo ideal sin pérdidas; en la práctica, con eficiencias isentrópicas del compresor y la turbina de 85–90 %, el rendimiento real se reduciría a 38–44 %.

El rendimiento de Carnot entre una temperatura mínima típica de 300 K y una temperatura máxima de 1500 K sería de aproximadamente el 80 %. El ciclo Brayton real opera muy por debajo de ese límite porque los procesos de adición y rechazo de calor no son isotérmicos. La brecha entre el rendimiento Brayton y el Carnot representa la exergía destruida por la irreversibilidad de los intercambios de calor a temperatura variable.

---

# Ejemplo de aplicación real

## Contexto

Una central de ciclo combinado (CCGT) de gas natural recibe [[Q_H]] igual a 500 kJ por kilogramo de gas en el ciclo Brayton. El ciclo Brayton produce [[W_neto]] de 210 kJ/kg y sus gases de escape a 550–600 °C alimentan un ciclo Rankine de recuperación que produce 95 kJ adicionales por kilogramo de gas original. El objetivo es calcular el rendimiento global del ciclo combinado y evaluar su eficiencia frente a centrales convencionales.

Las centrales CCGT representan la aplicación más eficiente del par Brayton-Rankine y son la tecnología dominante en generación eléctrica de base con gas natural. Su rendimiento global supera el 60 % en las instalaciones más modernas.

## Estimación física

El trabajo neto total del ciclo combinado se obtiene del balance energético global:

{{f:balance_energetico}}

La suma de ambos aportes da 210 kJ/kg del Brayton más 95 kJ/kg del Rankine, que resulta en 305 kJ/kg. El [[eta_th]] global se calcula con la fórmula de rendimiento aplicada al conjunto:

{{f:rendimiento_rankine}}

El cociente entre [[W_neto]] total y [[Q_H]] primario da 305 entre 500, es decir, 0.610 o 61.0 %.

Como orden de magnitud, este 61 % es coherente con las especificaciones de centrales CCGT de última generación (clase H/J). El rendimiento del Brayton solo sería 42 %, de modo que el Rankine de recuperación aporta 19 puntos porcentuales adicionales. Un resultado superior al 65 % sugeriría una sobreestimación o condiciones no realistas.

El calor rechazado al condensador del Rankine es 500 menos 305, igual a 195 kJ/kg, que representa el 39 % del [[Q_H]] primario. Esta cantidad es el mínimo irreducible impuesto por la segunda ley para las temperaturas de operación de la central.

## Interpretación

El rendimiento del 61 % del ciclo combinado supera al del ciclo Brayton solo gracias al aprovechamiento de los gases de escape calientes en el ciclo Rankine. Sin el ciclo de recuperación, esos 95 kJ adicionales por kilogramo se rechazarían como calor residual a la atmósfera, desperdiciando el 19 % del calor primario.

Esta es la razón por la que las centrales de ciclo combinado de gas natural han desplazado a las centrales de carbón convencionales en muchos países: con rendimientos reales del 55–62 % frente al 33–38 % del carbón, el ciclo combinado produce la misma electricidad con casi la mitad de combustible y de emisiones de dióxido de carbono.

La mejora de [[eta_th]] en el CCGT depende principalmente de elevar [[T_H]] en el ciclo Brayton. Cada 50 K de aumento en la temperatura de entrada a la turbina de gas aporta aproximadamente un punto porcentual al rendimiento global, lo que impulsa la investigación en superaleaciones y refrigeración de álabes.
