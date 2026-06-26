# Ejemplo tipo examen

## Enunciado

Una avioneta de masa 1200 kg vuela en aire de densidad 1.225 kg/m³ a una velocidad de 60 m/s. Su superficie alar de referencia es 16 m². Calcula el coeficiente de sustentación necesario para vuelo rectilíneo y nivelado, e interpreta si el valor es razonable.

## Datos

- Masa: 1200 kg
- Densidad del aire: 1.225 kg/m³
- Velocidad: 60 m/s
- Superficie alar: 16 m²
- Gravedad: 9.81 m/s²

## Definición del sistema

Tomamos como sistema la aeronave completa en vuelo nivelado. No se pide la distribución local de presión sobre el perfil, sino la fuerza total que debe compensar el peso. Por tanto, el objetivo físico es determinar qué coeficiente de sustentación permite que [[L]] sea comparable a [[W]].

## Modelo físico

Usamos la fórmula global de sustentación:

{{f:sustentacion_general}}

La relación vincula la densidad del aire, la velocidad, la superficie alar y el coeficiente de sustentación.

En vuelo nivelado, la condición vertical es:

{{f:equilibrio_vuelo}}

El balance vertical iguala sustentación y peso.

## Justificación del modelo

La velocidad indicada corresponde a un régimen subsonico bajo, por lo que el aire puede tratarse como aproximadamente incompresible. El enunciado no describe pérdida ni maniobra brusca. Por ello, usar el coeficiente de sustentación como resumen de geometría, ángulo de ataque y configuración del ala es razonable como primera aproximación.

## Resolución simbólica

La resolución usa las relaciones núcleo del leaf. Además, como comprobación conceptual, una lectura local puede estimar la diferencia de presión y después conectar esa presión media con la fuerza.

{{f:sustentacion_general}}

{{f:equilibrio_vuelo}}

{{f:bernoulli_diferencia_presion}}

{{f:fuerza_por_presion}}

Igualamos sustentación y peso.

Despejamos el coeficiente:

El coeficiente queda como el cociente entre el doble del peso y la presión dinámica multiplicada por el área.

## Sustitución numérica

Usamos las relaciones núcleo del leaf, aunque en este enunciado solo se sustituye directamente el coeficiente global. La diferencia de presión queda como lectura alternativa si se midieran velocidades locales sobre y bajo el perfil.

{{f:sustentacion_general}}

{{f:equilibrio_vuelo}}

{{f:bernoulli_diferencia_presion}}

{{f:fuerza_por_presion}}

La sustitución numérica lleva a un coeficiente de sustentación moderado y realista.

El resultado es aproximadamente 0.33.

## Validación dimensional

El numerador tiene unidades de fuerza multiplicada por un factor adimensional, y el denominador equivale a presión dinámica por área, también fuerza. El cociente es adimensional, como debe ser el coeficiente de sustentación.

## Interpretación física

Un valor cercano a 0.33 es razonable para vuelo estabilizado de una avioneta. No está cerca de un valor extremo de pérdida ni exige hipersustentadores agresivos. El resultado indica que la velocidad dada proporciona margen suficiente si el perfil trabaja en régimen adherido.

# Ejemplo de aplicación real

## Contexto

Un alerón de Fórmula 1 se diseña para generar carga vertical hacia abajo. La física básica es la misma que en un ala, pero el signo del coeficiente de sustentación se elige para que la resultante apunte hacia el suelo.

## Estimación física

Como estimación de orden de magnitud, si el coche duplica su velocidad en recta, la carga aerodinámica aumenta de forma mucho más intensa que una simple duplicación. Esto explica por qué estos vehículos pueden tomar curvas rápidas con enorme adherencia, pero también por qué pierden agarre de forma drástica al reducir velocidad.

## Interpretación

Para completar la lectura, puede compararse el resultado con una diferencia media de presión [[dp]] sobre el perfil. Si el alerón tiene un área pequeña, una fuerza grande exige un contraste de presión elevado; si el área aumenta, la misma fuerza puede obtenerse con menor contraste. Esta transferencia física evita interpretar el alerón como una caja negra: la fuerza nace de presión distribuida y no solo de un número de coeficiente.

El mismo modelo que estima sustentación positiva permite estimar sustentación negativa. La diferencia no está en la fórmula, sino en la orientación del perfil, el signo efectivo del coeficiente y la interpretación dinámica de la fuerza. En ambos casos, el resultado debe compararse con el peso o con la fuerza normal disponible para decidir si el modelo tiene sentido físico.

Como comprobación adicional, podemos imaginar que la avioneta redujera su velocidad manteniendo el mismo coeficiente. La fuerza no disminuiría de forma suave lineal, sino con un efecto muy acusado. Esa lectura explica por qué la velocidad de pérdida es un dato operativo esencial: por debajo de cierto margen, ni un ala correcta puede producir la fuerza necesaria sin aumentar mucho el ángulo de ataque.

El ejemplo muestra que la fórmula no es solo una sustitución. Sirve para decidir si el resultado pertenece a un régimen plausible, si el coeficiente es realista y si la comparación con el peso permite sostener el vuelo.

Otra forma de comprobar la coherencia es resolver mentalmente qué ocurriría al cambiar cada parámetro por separado. Si aumenta la superficie, el mismo avión necesita menos coeficiente para sostenerse. Si disminuye la densidad por altitud, el coeficiente requerido aumenta o hace falta más velocidad. Si se reduce la velocidad, el margen de sustentación cae de forma intensa. Este análisis paramétrico es parte del ejemplo, porque permite detectar errores aunque la sustitución numérica parezca correcta.

También conviene recordar que la diferencia de presión no es un dato decorativo. Si un sensor midiera presiones medias sobre el ala, una relación local entre presión y fuerza permitiría estimar una fuerza alternativa y compararla con la fórmula global. Si ambas lecturas difieren mucho, el problema no se arregla redondeando: indica que el flujo real, el coeficiente o el área efectiva no están siendo representados por el mismo modelo.