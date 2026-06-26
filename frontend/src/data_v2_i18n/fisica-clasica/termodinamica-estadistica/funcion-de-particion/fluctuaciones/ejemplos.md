# Ejemplo tipo examen


## Enunciado

Un sistema canónico pequeño tiene una [[funcion_particion]] dependiente de [[beta]]. En un intervalo cercano a una [[temperatura]] dada, se sabe que la pendiente de ln(Z) frente a [[beta]] permite obtener la [[energia_media]] y que la curvatura permite obtener la [[varianza_energia]]. Para un modelo simplificado, se han estimado una [[energia_media]] de 4,0 x 10^-21 J y una [[varianza_energia]] de 1,6 x 10^-42 J^2. Determina la [[fluctuacion_energia]], interpreta si es comparable con la energía media y relaciona el resultado con la [[capacidad_calorifica]].

## Datos

El sistema se describe mediante los siguientes parámetros medidos o estimados.

- [[energia_media]]: 4,0 x 10^-21 J
- [[varianza_energia]]: 1,6 x 10^-42 J^2
- [[temperatura]]: 300 K
- [[constante_boltzmann]]: 1,38 x 10^-23 J/K
- Sistema: canónico, volumen fijo, microestados discretos

## Definición del sistema

El sistema se considera pequeño y en contacto térmico con un baño que fija la [[temperatura]]. Sus microestados tienen distintas [[energia_microestado]], y la ocupación relativa de esos estados queda codificada por la [[funcion_particion]]. No se pretende conocer qué microestado ocupa el sistema en cada instante, sino describir la distribución estadística de energías alrededor de la [[energia_media]].

## Modelo físico

Usamos el conjunto canónico. La variable [[beta]] mide la dureza de la selección térmica: cuando [[beta]] aumenta, los microestados de mayor energía quedan más penalizados. La [[derivada_log_particion_beta]] se asocia con la [[energia_media]], mientras que la [[derivada_segunda_log_particion_beta]] se asocia con la [[varianza_energia]]. La [[capacidad_calorifica]] no se calcula aquí numéricamente, pero se interpreta como respuesta macroscópica relacionada con esa dispersión.

## Justificación del modelo

El problema declara [[temperatura]] fija y sistema en equilibrio con un entorno, por lo que el conjunto canónico es adecuado. Además, la [[varianza_energia]] dada es positiva y tiene unidades de J^2, una señal necesaria para interpretarla como dispersión física. Como se trata de un sistema pequeño, no sería extraño que la [[fluctuacion_energia]] tenga una fracción apreciable de la [[energia_media]]. El modelo sería dudoso si el sistema estuviera aislado, si la [[temperatura]] no estuviera en kelvin o si la curvatura de ln(Z) se hubiese obtenido mezclando configuraciones distintas.

## Resolución simbólica

La escala térmica se define mediante:

{{f:beta_inversa_termica}}

La energía media procede de la respuesta de ln(Z) ante [[beta]]:

{{f:energia_media_desde_particion}}

La dispersión cuadrática se obtiene desde la curvatura de ln(Z):

{{f:varianza_energia_desde_particion}}

Para pasar de varianza a escala energética comparable con [[energia_media]], usamos:

{{f:fluctuacion_rms_energia}}

La relación con respuesta térmica queda descrita por:

{{f:capacidad_calorifica_fluctuaciones}}

Simbólicamente, el paso decisivo es reconocer que la raíz cuadrada de [[varianza_energia]] da [[fluctuacion_energia]].

## Sustitución numérica

La [[varianza_energia]] vale 1,6 x 10^-42 J^2. Por tanto, la [[fluctuacion_energia]] es la raíz cuadrada de esa cantidad, es decir, 1,26 x 10^-21 J aproximadamente. La comparación relativa con [[energia_media]] da 1,26 x 10^-21 J dividido entre 4,0 x 10^-21 J, que es aproximadamente 0,32. La fluctuación representa alrededor del 32 % del promedio energético. La escala térmica [[constante_boltzmann]] por [[temperatura]] es aproximadamente 4,14 x 10^-21 J, del mismo orden que la [[energia_media]].

## Validación dimensional

La [[varianza_energia]] debe tener unidades de energía al cuadrado. Aquí aparece en J^2, correcto. Al tomar su raíz se obtiene [[fluctuacion_energia]] en J, que puede compararse con [[energia_media]]. La escala [[constante_boltzmann]] por [[temperatura]] también tiene unidades de J porque J/K multiplicado por K produce J. La [[capacidad_calorifica]], si se calculara desde fluctuaciones, tendría unidades J/K, coherentes con una respuesta energética por variación de [[temperatura]].

## Interpretación física

El resultado indica que la distribución energética no está extremadamente concentrada alrededor de la [[energia_media]]. Una [[fluctuacion_energia]] del 32 % del promedio es grande para una muestra macroscópica, pero plausible para un sistema pequeño. Físicamente, el sistema no posee siempre 4,0 x 10^-21 J; ese valor resume el centro estadístico de muchas ocupaciones de [[energia_microestado]]. La [[funcion_particion]] mide esa nube energética porque su curvatura frente a [[beta]] responde a la anchura de la distribución. Si la [[capacidad_calorifica]] fuera grande en este rango, significaría que pequeñas variaciones de [[temperatura]] redistribuyen de forma intensa las probabilidades microscópicas.

# Ejemplo de aplicación real


## Contexto

Imagina un nanosistema, como una molécula adsorbida en una superficie, intercambiando energía con un sustrato térmico. A escala macroscópica hablaríamos de [[temperatura]] casi constante, pero a escala microscópica la energía del nanosistema puede oscilar. La [[funcion_particion]] permite resumir esas oscilaciones sin seguir cada microestado individual.

## Estimación física

A 300 K, la escala [[constante_boltzmann]] por [[temperatura]] es del orden de 10^-21 J. Si varias configuraciones moleculares tienen separaciones energéticas de ese orden, la [[varianza_energia]] puede ser apreciable y la [[fluctuacion_energia]] no será despreciable frente a la [[energia_media]]. Una estimación razonable para una molécula pequeña puede situar la fluctuación relativa entre 0,1 y 1, dependiendo de cuántos estados estén térmicamente accesibles. En cambio, para un material macroscópico, muchas contribuciones independientes suavizan la fluctuación relativa.

## Interpretación

La lectura clave es que las fluctuaciones son una huella de la accesibilidad microscópica. Cuando la [[temperatura]] permite explorar más [[energia_microestado]], la curvatura de ln(Z) puede aumentar y con ella la [[varianza_energia]]. La [[capacidad_calorifica]] traduce esta redistribución microscópica a una respuesta observable: si el sistema necesita absorber bastante energía para cambiar de [[temperatura]], suele haber muchas posibilidades internas donde repartirla.