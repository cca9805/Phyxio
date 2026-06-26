# Ejemplo tipo examen


## Enunciado

Un gas ideal monoatómico contenido en un cilindro cerrado con un pistón móvil experimenta una expansión lenta a presión constante. Se solicita calcular la energía interna absoluta del gas en su estado inicial, su valor en el estado final tras la expansión, y determinar la variación neta de energía interna experimentada por el sistema termodinámico durante todo el proceso.

## Datos

- Cantidad de sustancia del gas: 2 mol
- [[temperatura]] absoluta en el estado inicial: 300 K
- [[temperatura]] absoluta en el estado final: 450 K
- Capacidad calorífica molar a volumen constante: 12,47 J/(mol·K)
- Constante universal de los gases ideales: 8,314 J/(mol·K)
- Grados de libertad moleculares activos del gas: 3

## Definición del sistema

El sistema físico bajo estudio está constituido por una muestra cerrada de gas ideal monoatómico confinada en un cilindro adiabático de paredes rígidas en su base, provisto de un pistón móvil libre de fricción en su parte superior que mantiene la presión del gas constante.

## Modelo físico

Para analizar este proceso, se aplica el modelo clásico de gas ideal de una partícula sin fuerzas intermoleculares. En este modelo, toda la energía del sistema se reduce a la energía cinética de traslación de los átomos de gas, haciendo que la energía interna absoluta [[energia_interna]] sea una función exclusiva de la [[temperatura]] absoluta [[temperatura]].

## Justificación del modelo

El uso de este modelo es válido debido a que el gas opera en condiciones de baja presión y alta [[temperatura]] en relación con su punto de licuación. En este régimen diluido, las distancias medias intermoleculares son sumamente grandes, permitiendo despreciar por completo las fuerzas atractivas y el volumen de exclusión de las moléculas. El modelo fallaría si el gas se comprimiera fuertemente o descendiera a temperaturas cercanas a la condensación.

## Resolución simbólica

Para determinar la energía interna absoluta en el estado inicial, se emplea la relación matemática de definición para un gas ideal monoatómico:

{{f:energia_interna_gas_ideal}}

Esta misma relación se aplica para el estado final sustituyendo la [[temperatura]] correspondiente. Para calcular la variación de energía interna [[variacion_de_energia_interna]] que conecta ambos estados termodinámicos, se utiliza la relación:

{{f:variacion_energia_interna}}

Donde intervienen el número de moles, la capacidad calorífica molar [[capacidad_calorifica_a_volumen_constante]] y la variación térmica.

## Sustitución numérica

Para la energía interna absoluta del estado inicial, multiplicar los 2 mol por la constante universal de los gases, la [[temperatura]] absoluta de 300 K y el factor de grados de libertad dividido por dos da aproximadamente 7483 J. Por tanto, [[energia_interna]] inicial ≈ 7483 J.

Para el estado final, repetir la operación utilizando la [[temperatura]] absoluta de 450 K resulta en aproximadamente 11224 J. Por tanto, [[energia_interna]] final ≈ 11224 J.

Para evaluar la variación de la energía interna [[variacion_de_energia_interna]], la [[variacion_de_temperatura]] (450 K menos 300 K) es 150 K. Al multiplicar esta variación por los 2 mol de sustancia y por la capacidad calorífica molar de 12,47 J/(mol·K), se obtiene un incremento energético de aproximadamente 3741 J. Por tanto, [[variacion_de_energia_interna]] ≈ 3741 J.

## Validación dimensional

Realizamos el análisis dimensional de las ecuaciones aplicadas utilizando la notación física reglamentaria:
- Para la energía interna absoluta: [[temperatura]] y [[numero_de_moles]] contribuyen con dimensiones `[Θ]` y `[N]`; junto con la capacidad calorífica molar `[M L² T⁻² Θ⁻¹ N⁻¹]`, el producto resulta en `[M L² T⁻²]`, equivalente al julio en el SI.
- Para la variación de la energía interna: la [[variacion_de_temperatura]] aporta dimensión `[Θ]`; junto con los moles `[N]` y la capacidad calorífica molar `[M L² T⁻² Θ⁻¹ N⁻¹]`, el producto resulta igualmente en `[M L² T⁻²]`, validando la consistencia dimensional.

## Interpretación física

El aumento de la energía interna absoluta de 7483 J a 11224 J significa que los átomos de helio han incrementado su agitación térmica promedio, moviéndose con mayor velocidad cuadrática media en el estado final. Al tratarse de un gas monoatómico sin enlaces químicos activos, toda esta energía adicional de 3741 J reside estrictamente en el movimiento traslacional de las partículas.

Si la variación de [[temperatura]] fuera el doble (300 K en lugar de 150 K), la variación [[variacion_de_energia_interna]] resultante se duplicaría exactamente debido a la linealidad del modelo. Esto demuestra que la capacidad del gas para almacenar energía interna depende exclusivamente de sus grados de libertad microscópicos y de la cantidad de partículas, permaneciendo independiente del volumen de expansión ocupado por el gas en el cilindro.

---

# Ejemplo de aplicación real


## Contexto

Analizamos la variación de energía interna en la cámara de compresión de un compresor de aire industrial de pistón alternativo. Durante el ciclo de compresión rápido (que puede aproximarse como un proceso adiabático sin intercambio de calor con el exterior), se introduce trabajo mecánico sobre el aire diatómico para elevar su presión.

## Estimación física

Consideramos una muestra de nitrógeno diatómico equivalente a 0,5 mol dentro de la cámara, cuya [[temperatura]] inicial se eleva de 300 K a 520 K durante la compresión. El nitrógeno diatómico a temperaturas moderadas tiene una capacidad calorífica molar a volumen constante de aproximadamente 20,8 J/(mol·K).

La variación de [[temperatura]] en este proceso es de 220 K. Multiplicando los 0,5 mol por la capacidad calorífica y por la variación térmica de 220 K, la variación de energía interna [[variacion_de_energia_interna]] resulta en aproximadamente 2288 J. Esta cantidad representa la energía térmica neta transferida al gas mediante el trabajo realizado por el pistón mecánico.

## Interpretación

Este aumento positivo de la energía interna [[energia_interna]] se manifiesta macroscópicamente como un incremento drástico de la [[temperatura]] del aire a la salida de la cámara de compresión. En la práctica de la ingeniería, este comportamiento físico exige diseñar sistemas de posenfriamiento (interchangers) para reducir la [[temperatura]] del aire comprimido antes de que ingrese a las tuberías de distribución o tanques de almacenamiento, evitando dilataciones térmicas excesivas, fallos en las juntas o riesgos de ignición de lubricantes.