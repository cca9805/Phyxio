# Ejemplo tipo examen: Colisión 1D entre partículas

## Enunciado
Dos esferas metálicas de alta precisión, tratadas como partículas puntuales para este análisis, se mueven en una guía lineal sin fricción. La primera esfera, de masa [[m1]] = 2.0 kg, se desplaza hacia la derecha con una velocidad inicial [[v1i]] = 5.0 m/s. La segunda esfera, con una masa [[m2]] = 1.0 kg, se mueve en sentido contrario (hacia la izquierda) con una velocidad [[v2i]] = -3.0 m/s. Suponiendo que el impacto es perfectamente elástico, calcula las velocidades finales [[v1f]] y [[v2f]] de ambas esferas tras el impacto y verifica que se cumple la conservación de la energía cinética del sistema.

## Datos
- Masa del cuerpo 1: [[m1]] = 2.0 kg.
- Velocidad inicial 1: [[v1i]] = 5.0 m/s (sentido positivo).
- Masa del cuerpo 2: [[m2]] = 1.0 kg.
- Velocidad inicial 2: [[v2i]] = -3.0 m/s (sentido negativo).
- Coeficiente de restitución: [[e]] = 1 (condición de choque elástico).

## Definición del sistema
El sistema está compuesto por las dos esferas. Durante el intervalo de tiempo extremadamente corto del choque, las fuerzas impulsivas de contacto dominan sobre cualquier otra fuerza externa (como la fricción residual del aire o la guía, que despreciamos). Por tanto, el sistema puede considerarse aislado en términos de cantidad de movimiento lineal. Además, al ser un choque elástico, no hay disipación de energía interna.

## Modelo físico
Se aplica el **Modelo de Colisión Elástica Unidimensional**. Este modelo asume que:
1. El movimiento ocurre estrictamente a lo largo de una línea recta (eje X).
2. Se conserva el momento lineal total [[p]].
3. Se conserva la energía cinética total [[K]].
4. Los cuerpos recuperan su forma original instantáneamente tras el contacto, devolviendo toda la energía potencial elástica acumulada durante la deformación máxima.

## Justificación del modelo
El uso de esferas metálicas endurecidas en una guía de bajo rozamiento justifica el modelo elástico. La rigidez de los materiales minimiza la disipación de energía por deformación irreversible o calor. La guía lineal garantiza que el problema sea unidimensional, permitiendo el uso de las ecuaciones de balance escalar para el momento y la energía sin necesidad de considerar ángulos de deflexión.

## Resolución simbólica

El problema se resuelve partiendo de las dos leyes de conservación y la condición de elasticidad:

{{f:e_definition}}

Primero, planteamos la conservación del momento lineal [[p]]:

{{f:p}}

Segundo, planteamos la conservación de la energía cinética del sistema comparando los estados inicial [[Ki]] y final [[Kf]]:

{{f:ki_system}}

{{f:kf_system}}

{{f:K}}

Para evitar resolver un sistema de ecuaciones cuadráticas, utilizamos la relación de velocidades relativas, que es una consecuencia directa de las dos leyes anteriores:

{{f:rel}}

Despejando las velocidades finales de las ecuaciones combinadas (o utilizando directamente las fórmulas de solución general para un choque elástico 1D), obtenemos:

{{f:v1f}}

{{f:v2f}}

Finalmente, calculamos la variación de energía cinética [[DeltaK]] para confirmar la validez del resultado y la eficiencia mediante la fracción de transferencia:

{{f:delta_k}}

{{f:energy_transfer}}

## Sustitución numérica
1. **Cálculo de velocidades finales**:
   - [[v1f]] = ((2.0 - 1.0)/(2.0 + 1.0)) * 5.0 + (2 * 1.0 / (2.0 + 1.0)) * (-3.0)
   - [[v1f]] = (1/3) * 5.0 + (2/3) * (-3.0) = 1.667 - 2.0 = -0.333 m/s
   - [[v2f]] = (2 * 2.0 / (2.0 + 1.0)) * 5.0 + ((1.0 - 2.0) / (2.0 + 1.0)) * (-3.0)
   - [[v2f]] = (4/3) * 5.0 + (-1/3) * (-3.0) = 6.667 + 1.0 = 7.667 m/s

2. **Verificación de energía cinética**:
   - [[Ki]] = 0.5 * 2.0 * (5.0)^2 + 0.5 * 1.0 * (-3.0)^2 = 25.0 + 4.5 = 29.5 Julios
   - [[Kf]] = 0.5 * 2.0 * (-0.333)^2 + 0.5 * 1.0 * (7.667)^2 = 29.5 Julios
   - [[DeltaK]] = 0 Julios (Se confirma la elasticidad perfecta).

## Validación dimensional
Todas las magnitudes de velocidad resultantes tienen unidades de metros por segundo, y las energías tienen unidades de Julios, lo cual es coherente con el análisis dimensional del SI. El balance de momento mantiene la consistencia de unidades kg por metro partido por segundo.

## Interpretación física
El resultado muestra que la esfera 1 ha invertido su sentido de marcha (rebota) debido a que su velocidad final [[v1f]] es negativa, mientras que la esfera 2 ha sido lanzada violentamente hacia la derecha con una velocidad [[v2f]] muy superior a su inicial. La variación nula de energía [[DeltaK]] nos indica que el proceso ha sido energéticamente ideal, una característica distintiva del leaf de colisiones elásticas.

# Ejemplo de aplicación real: El Péndulo de Newton

## Contexto
El **Péndulo de Newton** (o Cuna de Newton) es el ejemplo clásico de colisiones elásticas en serie. Consiste en una fila de esferas metálicas idénticas suspendidas por hilos. Cuando se suelta una esfera de un extremo, esta golpea a las demás y, casi instantáneamente, solo la esfera del extremo opuesto sale disparada, mientras las esferas centrales permanecen en reposo aparente.

## Estimación física
Consideramos una esfera de masa [[m1]] = 0.05 kg (50 g) que impacta a una velocidad de 1.5 m/s contra una fila de esferas idénticas en reposo. Al ser masas iguales, la fracción de transferencia de energía cinética [[T_fraction]] es máxima:

{{f:energy_transfer}}

Si sustituimos masas iguales en la fórmula, obtenemos un **valor razonable** de transferencia del 100 por ciento (donde T es igual a 1). Esto significa que la primera esfera cede toda su energía y momento a la segunda, esta a la tercera, y así sucesivamente, hasta que la última esfera recibe todo el impulso. Es un proceso de transferencia de un **orden de magnitud** temporal de microsegundos, donde la energía potencial se conserva casi íntegramente.

## Interpretación
El dispositivo de Newton es una demostración visual de que en colisiones elásticas entre masas iguales, los cuerpos simplemente "intercambian" sus vectores de velocidad. La primera esfera transfiere su velocidad al resto de la cadena. Si el choque no fuera elástico, las esferas centrales se moverían y el sistema perdería su sincronía rápidamente debido a la acumulación de [[DeltaK]] negativa. La persistencia del movimiento en estos dispositivos es un testimonio directo de la baja disipación de energía de los metales endurecidos.


