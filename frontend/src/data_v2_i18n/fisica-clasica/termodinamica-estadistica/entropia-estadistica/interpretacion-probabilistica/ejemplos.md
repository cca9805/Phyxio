# Ejemplo tipo examen


## Enunciado

Un sistema aislado puede describirse mediante varios macrostados compatibles con las mismas restricciones. Para un macroestado A se han contado 2400 configuraciones microscópicas compatibles. El conjunto total accesible bajo esas restricciones contiene 12000 configuraciones. Después se compara A con otro macroestado B que tiene 9600 configuraciones compatibles. Calcula la probabilidad de A, el cociente de probabilidad de B frente a A y la variación entrópica asociada a pasar de A a B en función de [[k_boltzmann]].

## Datos

- [[numero_microestados_macro]]: 2400 microestados para el macroestado A
- [[numero_microestados_total]]: 12000 microestados accesibles
- [[numero_microestados_inicial]]: 2400 microestados
- [[numero_microestados_final]]: 9600 microestados
- [[k_boltzmann]]: constante de Boltzmann
- Macroestado inicial: A
- Macroestado final: B

## Definición del sistema

El sistema se considera aislado durante el recuento, de manera que todos los microestados incluidos en [[numero_microestados_total]] pertenecen al mismo espacio accesible. Los macrostados A y B son dos descripciones gruesas posibles dentro de ese mismo conjunto. No se está comparando un sistema antes y después de cambiar sus restricciones externas; se está comparando el peso estadístico de dos categorías macroscópicas alternativas. Por eso [[numero_microestados_inicial]] y [[numero_microestados_final]] pueden usarse en un mismo cociente, y [[probabilidad_macroestado]] se interpreta como fracción de accesibilidad.

## Modelo físico

Se usa el modelo de microestados equiprobables: cada configuración microscópica compatible con las restricciones tiene el mismo peso estadístico inicial. La probabilidad de un macroestado depende de cuántos microestados contiene frente al total accesible. Para comparar dos macrostados se usa el cociente entre multiplicidades, y la lectura entrópica convierte ese cociente en una variación logarítmica mediante [[k_boltzmann]].

## Justificación del modelo

El modelo es adecuado porque todos los datos pertenecen al mismo sistema y no se indica ningún sesgo dinámico que haga más accesibles unos microestados que otros. A y B se comparan como macrostados alternativos dentro de un único conjunto de restricciones. Si el total cambiara entre A y B, o si algunos microestados estuvieran bloqueados por una barrera, la comparación mediante recuento simple no sería válida. Aquí, en cambio, el objetivo es mostrar cómo [[probabilidad_macroestado]] y [[ratio_probabilidades]] nacen directamente de la multiplicidad.

## Resolución simbólica

Primero se calcula la probabilidad del macroestado A con la relación de fracción estadística:

{{f:probabilidad_macroestado}}

La lectura simbólica es que la probabilidad se obtiene dividiendo [[numero_microestados_macro]] entre [[numero_microestados_total]]. Después se compara B frente a A usando el peso relativo entre macrostados:

{{f:peso_relativo_macroestados}}

El cociente de probabilidades coincide con el cociente de multiplicidades cuando ambos macrostados pertenecen al mismo espacio accesible. Finalmente, la variación entrópica asociada al cambio de peso estadístico se lee con:

{{f:probabilidad_entropia}}

Así, [[delta_entropia]] expresa en escala termodinámica cuánto aumenta o disminuye el peso probabilístico al pasar del macroestado inicial al final.

## Sustitución numérica

Para A, la fracción accesible es 2400 dividido entre 12000. El resultado es [[probabilidad_macroestado]] de 0,20, es decir, el macroestado A ocupa el 20 % del espacio microscópico accesible. Para comparar B con A se usa 9600 dividido entre 2400. Por tanto, [[ratio_probabilidades]] vale 4: el macroestado B tiene cuatro veces más peso estadístico que A. La variación entrópica se expresa como [[delta_entropia]] igual a [[k_boltzmann]] multiplicada por el logaritmo natural de 4. Numéricamente, eso es aproximadamente 1,386 [[k_boltzmann]].

## Validación dimensional

[[probabilidad_macroestado]] es adimensional porque se obtiene dividiendo un número de microestados entre otro número de microestados. [[ratio_probabilidades]] también es adimensional por la misma razón: compara dos probabilidades o dos multiplicidades. En cambio, [[delta_entropia]] tiene unidades de entropía porque el logaritmo es adimensional y el factor [[k_boltzmann]] aporta la unidad física. Esta validación evita dos errores comunes: asignar julios a una probabilidad y tratar [[delta_entropia]] como un simple porcentaje.

## Interpretación física

El resultado significa que el macroestado A no es raro de forma extrema, pero tampoco domina el espacio accesible: solo agrupa una quinta parte de las configuraciones compatibles. El macroestado B, al tener cuatro veces más microestados, será observado con mucha más frecuencia si el sistema explora de manera equiprobable sus estados posibles. Esto no implica que B sea obligatorio ni que exista una fuerza que lo empuje; implica que hay más maneras microscópicas de realizar B. La [[delta_entropia]] positiva confirma que el paso de A a B corresponde a un aumento de peso estadístico. Físicamente, la lectura correcta es combinatoria: más multiplicidad compatible produce mayor probabilidad macroscópica.

# Ejemplo de aplicación real


## Contexto

En una simulación sencilla de partículas en dos compartimentos, se desea saber por qué el estado “reparto casi equilibrado” aparece mucho más que el estado “casi todas en un lado”. Cada reparto macroscópico puede realizarse mediante muchas asignaciones microscópicas de partículas. El reparto equilibrado tiene un [[numero_microestados_macro]] mucho mayor que un reparto extremo, aunque cada configuración microscópica individual tenga el mismo peso.

## Estimación física

Supongamos que un reparto extremo tiene 20 microestados compatibles y un reparto equilibrado tiene 1840 microestados dentro del mismo [[numero_microestados_total]]. Sin calcular todos los detalles moleculares, el orden de magnitud ya indica una diferencia fuerte: [[ratio_probabilidades]] es aproximadamente 1840 dividido entre 20, es decir, unas 92 veces. La estimación es razonable porque ambos recuentos pertenecen al mismo modelo de accesibilidad. Si el total accesible fuera de algunos miles de estados, el reparto equilibrado ocuparía una fracción apreciable, mientras que el extremo sería una esquina estadística.

## Interpretación

La simulación no muestra que las partículas “busquen” equilibrio. Muestra que el equilibrio macroscópico tiene muchas representaciones microscópicas. Una captura concreta con reparto equilibrado no es especial, pero el conjunto de capturas equilibradas es enorme. Por eso el observador ve ese macroestado una y otra vez. Si se traduce la comparación a [[delta_entropia]], el estado equilibrado queda asociado a mayor peso estadístico. Esta es la intuición central de la interpretación probabilística: la apariencia macroscópica más común es la que puede esconder más microhistorias compatibles.