# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: distribucion-de-velocidades
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen
## Enunciado
Un recipiente contiene nitrógeno molecular tratado como gas ideal a [[temperatura_absoluta]] de 300 K. La [[masa_particula]] de una molécula se toma como 4,65·10⁻²⁶ kg. Se pide estimar la [[velocidad_mas_probable]], la [[velocidad_media]], la [[velocidad_rms]], la [[energia_cinetica_media]] y explicar qué representa la [[densidad_probabilidad_velocidad]] de la distribución. Además, se quiere interpretar la [[probabilidad_intervalo]] de encontrar moléculas entre una [[velocidad_minima]] de 400 m/s y una [[velocidad_maxima]] de 600 m/s.

## Datos
- Gas: nitrógeno molecular ideal
- [[temperatura_absoluta]]: 300 K
- [[masa_particula]]: 4,65·10⁻²⁶ kg
- [[constante_boltzmann]]: 1,38·10⁻²³ J/K
- [[velocidad_minima]]: 400 m/s
- [[velocidad_maxima]]: 600 m/s
- Magnitudes pedidas: [[velocidad_mas_probable]], [[velocidad_media]], [[velocidad_rms]], [[energia_cinetica_media]], [[probabilidad_intervalo]]

## Definición del sistema
El sistema es una muestra macroscópica de gas ideal formada por muchas moléculas idénticas. No se sigue una molécula concreta, sino la población completa de velocidades. La variable microscópica principal es [[velocidad]], entendida como rapidez, no como vector con dirección. La función que describe el reparto es [[densidad_probabilidad_velocidad]], que permite comparar qué valores de [[velocidad]] son más frecuentes y calcular áreas de probabilidad. La [[temperatura_absoluta]] representa el estado térmico común del gas y la [[masa_particula]] fija cómo se traduce esa escala energética en rapidez molecular.

## Modelo físico
Se aplica el modelo de Maxwell-Boltzmann para un gas ideal clásico, diluido y en equilibrio. La distribución está normalizada: toda el área bajo la curva de [[densidad_probabilidad_velocidad]] frente a [[velocidad]] representa probabilidad total. Las tres velocidades características no coinciden: [[velocidad_mas_probable]] localiza el máximo, [[velocidad_media]] promedia la rapidez y [[velocidad_rms]] está ligada al promedio cuadrático y a la energía cinética.

## Justificación del modelo
A 300 K el nitrógeno molecular puede tratarse como gas clásico para una estimación ordinaria. Las velocidades esperadas son de cientos de m/s, muy por debajo del régimen relativista. Además, se supone equilibrio térmico, de modo que existe una única [[temperatura_absoluta]]. Si la muestra estuviera en una expansión brusca o fuese un haz molecular seleccionado, la distribución podría no ser Maxwell-Boltzmann. Aquí no hay indicios de esos efectos, así que el modelo es adecuado.

## Resolución simbólica
Primero se usa la fórmula de la distribución completa:

{{f:maxwell_boltzmann_velocidad}}

Después se extraen las velocidades características:

{{f:velocidad_mas_probable}}

{{f:velocidad_media}}

{{f:velocidad_cuadratica_media}}

La energía media traslacional se obtiene con:

{{f:energia_cinetica_media_gas}}

Para el intervalo de velocidades se interpreta el área:

{{f:probabilidad_intervalo_velocidad}}

El procedimiento separa dos niveles: valores resumen de la curva y probabilidad asociada a un tramo concreto de [[velocidad]].

## Sustitución numérica
Con [[temperatura_absoluta]] de 300 K, [[masa_particula]] de 4,65·10⁻²⁶ kg y [[constante_boltzmann]] de 1,38·10⁻²³ J/K, se obtienen valores característicos del orden de 400 a 600 m/s. La [[velocidad_mas_probable]] queda cerca de 420 m/s, la [[velocidad_media]] cerca de 470 m/s y la [[velocidad_rms]] cerca de 520 m/s. La [[energia_cinetica_media]] es del orden de 6·10⁻²¹ J por molécula. La [[probabilidad_intervalo]] entre 400 m/s y 600 m/s debe evaluarse como área bajo la curva entre [[velocidad_minima]] y [[velocidad_maxima]], no como un producto improvisado con la altura del máximo.

## Validación dimensional
Las tres velocidades características deben quedar en m/s, porque combinan energía térmica por partícula con [[masa_particula]]. La [[energia_cinetica_media]] queda en joules, ya que [[constante_boltzmann]] por [[temperatura_absoluta]] tiene dimensión de energía. La [[densidad_probabilidad_velocidad]] no es adimensional: al multiplicarse por un intervalo de [[velocidad]] en m/s produce una [[probabilidad_intervalo]] sin unidades. Esta comprobación evita confundir densidad de probabilidad con probabilidad directa.

## Interpretación física
El resultado indica que la [[temperatura_absoluta]] no asigna una única rapidez al gas, sino una familia de velocidades posibles. La [[velocidad_mas_probable]] señala el punto más alto de la distribución, pero no representa a todas las moléculas. La [[velocidad_media]] es mayor porque la cola de moléculas rápidas desplaza el promedio. La [[velocidad_rms]] es todavía mayor porque da más peso a las partículas rápidas y se relaciona con la [[energia_cinetica_media]]. Si aumenta la [[temperatura_absoluta]], la curva se ensancha y se desplaza hacia mayores [[velocidad]]. Si aumenta la [[masa_particula]] manteniendo la misma temperatura, la curva se desplaza hacia velocidades menores. La [[probabilidad_intervalo]] entre 400 m/s y 600 m/s representa una fracción de moléculas, no una velocidad especial.

# Ejemplo de aplicación real
## Contexto
En una cámara de vacío se introduce argón para calibrar un sensor que responde mejor a moléculas con [[velocidad]] dentro de un rango concreto. El técnico conoce la [[temperatura_absoluta]] de la cámara y quiere saber si una fracción apreciable de moléculas caerá entre una [[velocidad_minima]] y una [[velocidad_maxima]] establecidas por el diseño del detector.

## Estimación física
Para argón a temperatura ambiente, la [[masa_particula]] es mayor que la del nitrógeno, así que las velocidades características son menores a igual [[temperatura_absoluta]]. Una estimación razonable coloca la [[velocidad_mas_probable]] en algunos cientos de m/s. Si el detector trabaja en un rango centrado cerca de esa rapidez, la [[probabilidad_intervalo]] puede ser significativa. Si el rango se sitúa muy por encima de la [[velocidad_rms]], solo mide la cola rápida y la señal será débil. La escala no se decide por una molécula individual, sino por el área de [[densidad_probabilidad_velocidad]] dentro del intervalo.

## Interpretación
La aplicación muestra que la distribución de velocidades sirve para diseñar y leer experimentos. Calentar la cámara aumenta [[temperatura_absoluta]], desplaza la distribución hacia mayor [[velocidad]] y puede aumentar o disminuir la señal según dónde esté situado el intervalo del sensor. Cambiar el gas modifica [[masa_particula]], por lo que la misma temperatura puede producir una respuesta distinta. El control físico consiste en comparar la ventana instrumental con la curva completa, no con una velocidad única.

