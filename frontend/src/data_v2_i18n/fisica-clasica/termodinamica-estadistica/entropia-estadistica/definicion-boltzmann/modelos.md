## Modelo ideal

El modelo ideal considera un sistema con macrostados bien definidos y un conjunto contable de microestados compatibles. La [[entropia]] se interpreta como medida logarítmica del [[numero_microestados]], no como desorden visual. El sistema se trata como una colección de configuraciones microscópicas igualmente admisibles bajo las mismas restricciones macroscópicas. Para comparar dos situaciones se usa [[delta_entropia]], construida a partir de [[numero_microestados_inicial]], [[numero_microestados_final]] y [[ratio_microestados]]. La constante [[k_boltzmann]] fija la escala termodinámica.

## Hipótesis

- Macroestado definido: si las variables macroscópicas no están fijadas, el [[numero_microestados]] no tiene un referente físico claro.
- Conteo homogéneo: si [[numero_microestados_inicial]] y [[numero_microestados_final]] se calculan con reglas distintas, [[ratio_microestados]] compara objetos incompatibles.
- Microestados accesibles y positivos: si [[numero_microestados]] es 0, no existe macroestado realizable para aplicar la definición.
- Sistema comparable: si cambia el sistema físico completo, la [[delta_entropia]] deja de representar una transición interna bien definida.
- Régimen estadístico: si hay muy pocos grados de libertad, la lectura termodinámica de [[entropia]] puede estar dominada por fluctuaciones.

## Dominio de validez cuantitativo

El dominio mínimo exige [[numero_microestados]] > 0, [[numero_microestados_inicial]] > 0 y [[numero_microestados_final]] > 0. Para una lectura termodinámica robusta conviene que [[numero_microestados]] sea mucho mayor que 1 y que el número de partículas o grados de libertad sea grande, típicamente del orden de 10⁶ o más para que las fluctuaciones relativas sean pequeñas. En ejemplos macroscópicos, sistemas con alrededor de 10²³ partículas justifican una [[entropia]] estable. La comparación mediante [[ratio_microestados]] es fiable cuando ambos macrostados pertenecen al mismo sistema y usan la misma granularidad de conteo. Valores de [[ratio_microestados]] entre 10⁻³ y 10³ ya producen cambios de signo y escala detectables en [[delta_entropia]], pero no deben confundirse con cambios lineales de [[entropia]].

## Señales de fallo del modelo

Una señal de fallo aparece cuando se intenta introducir un [[numero_microestados]] negativo, nulo o no definido. Otra surge si el alumno compara microestados de sistemas distintos y obtiene una [[delta_entropia]] sin significado. También falla el modelo si se interpreta la [[entropia]] como una propiedad visual subjetiva, por ejemplo “más mezclado” sin especificar restricciones. En procesos fuera de equilibrio, la definición puede requerir un modelo extendido si no hay macrostados comparables.

## Modelo extendido o alternativo

Cuando conviene cambiar a un modelo más completo depende de si se cumplen las hipótesis del modelo simple. Debe pasarse al modelo de mecánica estadística de Gibbs cuando los microestados no son equiprobables, cuando intervienen niveles cuánticos discretos, cuando hay interacción fuerte entre partículas o cuando el sistema no está en equilibrio. En esos casos se usan distribuciones de probabilidad, [[entropia]] de Gibbs o formulaciones cuánticas. La definición de Boltzmann sigue siendo la puerta de entrada conceptual, pero el conteo simple de [[numero_microestados]] ya no basta.

## Comparación operativa

| Situación | Magnitud clave | Modelo adecuado | Riesgo principal |
| Macroestado único bien contado | [[numero_microestados]] | Boltzmann simple | Olvidar el logaritmo |
| Cambio entre macrostados | [[delta_entropia]] | Diferencia de Boltzmann | Comparar reglas distintas |
| Sistema pequeño | [[entropia]] | Estadística con fluctuaciones | Sobrerinterpretar la tendencia |
| Estados no equiprobables | [[numero_microestados]] | Gibbs o probabilístico | Contar sin ponderar |