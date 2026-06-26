# Ejemplo tipo examen

## Enunciado

Se queman completamente 2 mol de metano a presión constante de 1 atm y temperatura inicial de 298 K. Sabiendo que la entalpía estándar de formación del metano es menos 74.8 kJ/mol, la del dióxido de carbono es menos 393.5 kJ/mol y la del agua líquida es menos 285.8 kJ/mol, calcular [[DeltaH]] de la reacción de combustión de 2 mol de metano y clasificar el proceso como exotérmico o endotérmico.

## Datos

- Entalpía de formación del metano: menos 74.8 kJ/mol
- Entalpía de formación del dióxido de carbono: menos 393.5 kJ/mol
- Entalpía de formación del agua líquida: menos 285.8 kJ/mol
- Coeficientes estequiométricos: 2 mol de metano producen 2 mol de dióxido de carbono y 4 mol de agua líquida
- Presión constante: 1 atm

## Definición del sistema

El sistema es 2 mol de metano gaseoso más el oxígeno necesario para la combustión completa. Los productos son dióxido de carbono gaseoso y agua líquida. El proceso ocurre a presión constante, por lo que el calor intercambiado equivale a [[DeltaH]]. La magnitud central del análisis es [[DeltaH]] de la reacción global, calculada mediante la ley de Hess a partir de las entalpías de formación estándar.

La entalpía [[H]] combina la energía interna [[U]] con el término mecánico [[p]] por [[V]]. En este problema no se calculan [[U]] ni [[V]] por separado: la ruta de Hess permite obtener directamente [[DeltaH]], y la condición isobárica permite identificar el calor a presión constante [[Qp]] con esa variación de entalpía.

## Modelo físico

Se aplica la ley de Hess para funciones de estado: [[DeltaH]] de la reacción es la suma ponderada de las entalpías de formación de los productos menos la de los reactivos, multiplicadas por sus coeficientes estequiométricos. Las entalpías de formación de los elementos en estado estándar son cero por definición y no contribuyen al ciclo.

## Justificación del modelo

El modelo de ley de Hess es válido porque la entalpía [[H]] es función de estado y la presión es constante durante todo el proceso. Las entalpías de formación tabuladas están a 298 K y 1 bar, condición estándar que coincide con las condiciones del problema. La temperatura de referencia es la misma en todos los términos, por lo que no se necesita corrección de Kirchhoff.

## Resolución simbólica

La variación de entalpía de la reacción se obtiene como la suma de las entalpías de formación de los productos, cada una multiplicada por su coeficiente estequiométrico, menos la suma de las entalpías de formación de los reactivos con sus respectivos coeficientes. Para la combustión de 2 mol de metano, los productos contribuyen con 2 veces la entalpía de formación del dióxido de carbono más 4 veces la entalpía de formación del agua líquida, y los reactivos contribuyen con 2 veces la entalpía de formación del metano.

La definición de partida que justifica usar entalpía en lugar de solo energía interna es:

{{f:definicion_entalpia}}

## Sustitución numérica

Contribución de los productos: 2 por menos 393.5 más 4 por menos 285.8, que da menos 787.0 más menos 1143.2, igual a menos 1930.2 kJ.

Contribución de los reactivos: 2 por menos 74.8, igual a menos 149.6 kJ.

[[DeltaH]] de la reacción es menos 1930.2 menos el valor menos 149.6, lo que da menos 1930.2 más 149.6, resultado: [[DeltaH]] es aproximadamente menos 1780.6 kJ para 2 mol de metano.

## Validación dimensional

Todos los términos están en kJ/mol multiplicados por mol, dando kJ como unidad final. El resultado es una energía, coherente con la dimensión de [[DeltaH]]. El valor por mol de metano es aproximadamente menos 890 kJ/mol, dentro del rango esperado para combustiones.

## Interpretación física

El signo negativo de [[DeltaH]] confirma que la combustión del metano es un proceso **exotérmico**: el sistema libera calor al entorno a presión constante. Esto implica que, como la presión se mantiene fija, ese calor es [[Qp]], no solo un cambio aislado de [[U]]. Parte de la energía química liberada aparece como reorganización de enlaces y parte queda asociada al trabajo de expansión incluido en el término [[p]] por [[V]].

La causa física está en la estabilidad de los enlaces formados: los enlaces dobles entre carbono y oxígeno en el dióxido de carbono y los enlaces entre oxígeno e hidrógeno en el agua son más estables que los enlaces rotos en el metano y el oxígeno. Por eso el entorno recibe energía neta. El calor liberado por la combustión de 2 mol equivale aproximadamente a la energía necesaria para calentar 40 litros de agua desde 20 °C hasta 30 °C.

---

# Ejemplo de aplicación real

## Contexto

En un proceso de fabricación de cemento Portland, el carbonato de calcio se descompone a alta temperatura en óxido de calcio y dióxido de carbono. Este proceso industrial es la etapa energéticamente más costosa de la producción de cemento. La variable dominante es [[DeltaH]] de la reacción de calcinación, que determina el consumo de combustible del horno.

## Estimación física

La descomposición del carbonato de calcio es un proceso endotérmico con [[DeltaH]] de aproximadamente 178 kJ/mol. Para producir una tonelada de óxido de calcio se necesitan procesar aproximadamente 1.8 toneladas de carbonato de calcio, lo que representa unos 18 mol por cada kilogramo de producto. El consumo entálpico por tonelada de óxido de calcio es del orden de 3 MJ, equivalente a la combustión de unos 75 litros de gasóleo. Esta estimación permite dimensionar el horno y el sistema de recuperación de calor.

## Interpretación

El carácter endotérmico de la calcinación implica que el horno debe suministrar continuamente energía para mantener la reacción en marcha. El diseño de los hornos rotativos modernos incorpora sistemas de recuperación del calor sensible de los gases de salida para precalentar la materia prima, reduciendo el consumo neto de combustible en un 30–40 % respecto a hornos sin recuperación. Conocer [[DeltaH]] con precisión permite optimizar el balance energético del proceso y reducir las emisiones de dióxido de carbono asociadas al combustible.
