# Ejemplo tipo examen


## Enunciado

Un sistema aislado puede encontrarse en dos macrostados comparables. En el macroestado inicial hay [[numero_microestados_inicial]] compatibles. En el macroestado final, tras retirar una restricción interna, hay [[numero_microestados_final]] compatibles. Calcula el signo y el valor aproximado de la [[delta_entropia]] si el número de microestados finales es un millón de veces mayor que el inicial. Explica qué significa el resultado desde la definición de Boltzmann y por qué no debe interpretarse como una medida visual de desorden.

## Datos

- Cociente de microestados: [[ratio_microestados]] de 10⁶
- Constante de Boltzmann: [[k_boltzmann]] de 1,38 · 10⁻²³ J/K
- Sistema: mismo sistema físico antes y después
- Comparación: macroestado inicial frente a macroestado final
- Magnitud pedida: [[delta_entropia]]

## Definición del sistema

El sistema es una colección de partículas descrita por variables macroscópicas comunes antes y después del cambio. No se comparan gases distintos ni reglas de conteo diferentes. La transición solo modifica una restricción interna, por lo que [[numero_microestados_final]] y [[numero_microestados_inicial]] pertenecen al mismo espacio de descripción. Esto es esencial: la [[delta_entropia]] no mide “lo que se ve”, sino cómo cambia la multiplicidad compatible. La frontera del sistema se mantiene fija y la comparación se centra en cuántas configuraciones microscópicas adicionales se vuelven accesibles.

## Modelo físico

Usamos el modelo estadístico de Boltzmann para macrostados comparables. La [[entropia]] se calcula a partir del logaritmo del [[numero_microestados]], y la [[delta_entropia]] se obtiene a partir de [[ratio_microestados]]. No hace falta conocer por separado [[numero_microestados_final]] y [[numero_microestados_inicial]] si el cociente está dado. El modelo supone que el conteo de microestados se hace con la misma granularidad física y que todos los conteos son positivos.

## Justificación del modelo

La definición de Boltzmann es adecuada porque el enunciado no pide dinámica detallada de cada partícula, sino la relación entre macroestado y multiplicidad microscópica. El dato central es [[ratio_microestados]], que compara cuántas veces aumenta la accesibilidad estadística. Como el sistema es el mismo antes y después, la comparación de [[numero_microestados_final]] con [[numero_microestados_inicial]] tiene sentido. Además, el aumento de un millón de veces indica un cambio de escala estadística, no un cambio lineal de [[entropia]]. El logaritmo convierte ese factor multiplicativo en una suma de [[entropia]].

## Resolución simbólica

La definición absoluta de Boltzmann sirve como base conceptual:

{{f:entropia_boltzmann}}

Para el cambio entre dos macrostados usamos directamente:

{{f:diferencia_entropia_boltzmann}}

La variable útil es [[ratio_microestados]], formada por [[numero_microestados_final]] dividido por [[numero_microestados_inicial]]. Si ese cociente es mayor que uno, el logaritmo es positivo y también lo es [[delta_entropia]]. Por tanto, el signo se decide antes de sustituir números: el macroestado final permite más configuraciones microscópicas compatibles.

## Sustitución numérica

Para [[ratio_microestados]] de 10⁶, el logaritmo natural es aproximadamente 13,8. Entonces la [[delta_entropia]] es del orden de 13,8 veces [[k_boltzmann]]. Usando [[k_boltzmann]] de 1,38 · 10⁻²³ J/K, se obtiene una [[delta_entropia]] aproximada de 1,9 · 10⁻²² J/K. Es un valor pequeño porque el ejemplo representa una comparación microscópica o mesoscópica. En sistemas macroscópicos, factores de multiplicidad acumulados por muchísimas partículas producen valores termodinámicos medibles.

## Validación dimensional

[[ratio_microestados]] no tiene unidades, porque compara dos conteos del mismo tipo. El logaritmo de un número adimensional también es adimensional. Por tanto, la dimensión de [[delta_entropia]] procede de [[k_boltzmann]], que tiene unidades J/K. El resultado final queda en J/K, unidad de [[entropia]]. Esta comprobación detecta un error frecuente: no se puede tomar logaritmo de una magnitud con unidades ni de una resta directa de microestados.

## Interpretación física

El resultado positivo indica que el macroestado final tiene más microestados accesibles que el inicial. La [[delta_entropia]] no dice que el sistema “esté más desordenado” por apariencia, sino que existen muchas más configuraciones microscópicas compatibles con las mismas variables macroscópicas relevantes. El valor de unas decenas de [[k_boltzmann]] muestra que el cambio de multiplicidad es grande en términos de conteo, pero todavía pequeño en escala macroscópica. La definición de Boltzmann transforma una comparación multiplicativa, un millón de veces más posibilidades, en una lectura aditiva de [[entropia]]. Por eso la gráfica de [[entropia]] frente a [[numero_microestados]] sube cada vez más despacio: abrir más posibilidades siempre aumenta la [[entropia]], pero no de forma lineal.

# Ejemplo de aplicación real


## Contexto

Imagina una molécula grande con varios modos internos accesibles a cierta energía. Un estado conformacional restringido puede tener pocas configuraciones internas compatibles, mientras que otro estado más flexible puede tener muchas más. Aunque no se observe directamente cada microconfiguración, el cambio en [[numero_microestados]] afecta a la estabilidad estadística relativa de los macrostados.

## Estimación física

Supongamos que el estado flexible tiene un [[ratio_microestados]] de 10³ respecto al estado restringido. El logaritmo natural de 10³ es aproximadamente 6,9, así que la [[delta_entropia]] asociada es unas 6,9 veces [[k_boltzmann]] por entidad considerada. Esta estimación permite reconocer la escala: un factor mil en microestados no produce mil unidades de [[entropia]], sino un aumento logarítmico. Para muchas entidades, ese incremento se suma y puede influir en equilibrio, mezcla o estabilidad.

## Interpretación

La aplicación muestra por qué la definición de Boltzmann es potente: permite hablar de efectos macroscópicos sin listar cada microestado. Si un macroestado tiene mayor [[numero_microestados]], aparece con más peso estadístico bajo las mismas restricciones. La [[entropia]] no premia el desorden visible, sino la amplitud del conjunto de configuraciones compatibles. La pregunta central queda respondida: Boltzmann relaciona [[entropia]] y [[numero_microestados]] mediante una escala logarítmica que convierte accesibilidad microscópica en magnitud termodinámica.