# Ejemplos — Ondas superficiales

# Ejemplo tipo examen


## Enunciado

Un vibrador de laboratorio genera ondas capilares en la superficie de agua pura a 20 °C con una frecuencia [[frecuencia_de_la_onda_superficial]] de 130 Hz. Determinar la rapidez de propagación [[rapidez_de_propagacion_de_ondas_superficiales]], la longitud de onda [[lambda]] y verificar dimensionalmente el resultado. Datos: [[aceleracion_gravitatoria]] de 9.81 m/s², [[sigma]] de 0.073 N/m, [[rho]] de 998 kg/m³, [[frecuencia_de_la_onda_superficial]] de 130 Hz.

## Datos

- [[frecuencia_de_la_onda_superficial]]: 130 Hz (frecuencia de excitación del vibrador, que determina [[frecuencia_de_la_onda_superficial]] de la onda)
- [[sigma]]: 0.073 N/m (tensión superficial del agua pura a 20 °C)
- [[rho]]: 998 kg/m³ (densidad del agua a 20 °C)
- [[aceleracion_gravitatoria]]: 9.81 m/s² (aceleración gravitatoria local)
- Incógnitas: [[rapidez_de_propagacion_de_ondas_superficiales]] en m/s y [[lambda]] en m

## Definición del sistema

El sistema es la interfaz plana entre el agua pura y el aire en equilibrio. La perturbación del vibrador genera una onda superficial propagándose horizontalmente desde el punto de excitación. El fluido se trata como incompresible e irrotacional con amplitud pequeña.

## Modelo físico

El modelo aplicable es la teoría lineal de ondas superficiales en agua profunda. Las magnitudes relevantes son [[sigma]], [[rho]], [[aceleracion_gravitatoria]], [[numero_de_onda]] y [[rapidez_de_propagacion_de_ondas_superficiales]]. Dado que [[frecuencia_de_la_onda_superficial]] es 130 Hz, la longitud de onda esperada es del orden de milímetros, lo que sitúa la onda en el régimen capilar donde [[sigma]] domina sobre la gravedad.

## Justificación del modelo

Para decidir el modelo, se comparan los términos gravitatorio y capilar de la relación de dispersión combinada. Con [[lambda]] del orden de milímetros, [[numero_de_onda]] es del orden de miles de m⁻¹. El término capilar crece con [[numero_de_onda]] mientras que el gravitatorio disminuye; para [[numero_de_onda]] mayor de aproximadamente 370 m⁻¹ (correspondiente a [[lambda]] menor de 1.7 cm), el término capilar domina. Se aplica la fórmula capilar.

## Resolución simbólica

La fórmula capilar da [[rapidez_de_propagacion_de_ondas_superficiales]] como la raíz cuadrada de [[sigma]] multiplicado por [[numero_de_onda]] dividido entre [[rho]]. La relación entre [[frecuencia_de_la_onda_superficial]], [[rapidez_de_propagacion_de_ondas_superficiales]] y [[lambda]] es [[rapidez_de_propagacion_de_ondas_superficiales]] igual a [[frecuencia_de_la_onda_superficial]] multiplicado por [[lambda]], y [[numero_de_onda]] igual a dos pi dividido entre [[lambda]]. Sustituyendo y despejando [[rapidez_de_propagacion_de_ondas_superficiales]] en función de [[frecuencia_de_la_onda_superficial]], [[sigma]] y [[rho]], se obtiene [[rapidez_de_propagacion_de_ondas_superficiales]] elevado a la cuarta igual a [[sigma]] multiplicado por dos pi multiplicado por [[frecuencia_de_la_onda_superficial]] al cuadrado, dividido entre [[rho]].

{{f:rapidez_capilares}}

## Sustitución numérica

Calculando [[rapidez_de_propagacion_de_ondas_superficiales]] elevado a la cuarta como 0.073 multiplicado por dos pi multiplicado por 130 al cuadrado dividido entre 998, da aproximadamente 0.03877 m⁴ s⁻⁴. Tomando la raíz cuarta, [[rapidez_de_propagacion_de_ondas_superficiales]] resulta aproximadamente 0.443 m/s. La longitud de onda se obtiene como [[rapidez_de_propagacion_de_ondas_superficiales]] dividido entre [[frecuencia_de_la_onda_superficial]], es decir, 0.443 dividido entre 130, que da [[lambda]] de aproximadamente 3.4 mm.

## Validación dimensional

[[sigma]] tiene unidades N/m igual a kg s⁻², [[numero_de_onda]] en m⁻¹ y [[rho]] en kg m⁻³. El cociente tiene unidades kg s⁻² por m⁻¹ dividido entre kg m⁻³, igual a m² s⁻². La raíz cuadrada produce m s⁻¹, que es la dimensión correcta de [[rapidez_de_propagacion_de_ondas_superficiales]].

## Interpretación física

El resultado [[rapidez_de_propagacion_de_ondas_superficiales]] de 0.44 m/s con [[lambda]] de 3.4 mm físicamente significa que la onda capilar se propaga a velocidad comparable a un paso lento, perceptible a simple vista en el laboratorio. Esto indica que [[sigma]] domina completamente sobre la gravedad a esta escala: la fuerza restauradora que mantiene plana la interfaz es la tensión superficial. La [[frecuencia_de_la_onda_superficial]] impuesta por el vibrador no es un parámetro libre, sino que determina [[lambda]] a través de la relación de dispersión. Si se añadiera jabón reduciendo [[sigma]], [[rapidez_de_propagacion_de_ondas_superficiales]] disminuiría y [[lambda]] también, un efecto coherente con el papel de [[sigma]] como fuerza restauradora.

# Ejemplo de aplicación real


## Contexto

En meteorología marina se utilizan boyas oceanográficas que miden la [[frecuencia_de_la_onda_superficial]] de las olas para estimar la rapidez [[rapidez_de_propagacion_de_ondas_superficiales]] de propagación y, a partir de la diferencia en tiempos de llegada de distintas componentes espectrales, la distancia de la tormenta generadora. Una boya registra que las olas más energéticas tienen [[frecuencia_de_la_onda_superficial]] de aproximadamente 0.083 Hz y [[lambda]] de aproximadamente 225 m en agua profunda. Los datos del fluido son [[aceleracion_gravitatoria]] de 9.81 m/s², [[sigma]] de 0.072 N/m, [[rho]] de 1025 kg/m³ (agua de mar).

## Estimación física

La [[frecuencia_de_la_onda_superficial]] de 0.083 Hz corresponde a [[lambda]] de unos 225 m. Con [[numero_de_onda]] de aproximadamente 0.0279 m⁻¹, el término gravitatorio es [[aceleracion_gravitatoria]] dividido entre [[numero_de_onda]], es decir, unos 351 m² s⁻², mientras que el término capilar es [[sigma]] multiplicado por [[numero_de_onda]] dividido entre [[rho]], es decir, aproximadamente 0.0000020 m² s⁻². La relación entre los dos términos supera los 175 millones: el régimen es puramente gravitatorio y [[sigma]] es completamente irrelevante para estas olas oceánicas.

Aplicando la fórmula gravitatoria, [[rapidez_de_propagacion_de_ondas_superficiales]] resulta la raíz cuadrada de 351, que da aproximadamente 18.7 m/s equivalentes a unos 67 km/h. La velocidad de grupo, que transporta la energía, es la mitad de [[rapidez_de_propagacion_de_ondas_superficiales]], es decir, aproximadamente 9.4 m/s. Una tormenta a 3000 km tardaría unos 3.7 días en hacer llegar su energía a la boya.

## Interpretación

Las olas de [[lambda]] de 225 m operan completamente en el régimen gravitatorio; [[sigma]] y [[rho]] no aparecen en la fórmula relevante. La celeridad [[rapidez_de_propagacion_de_ondas_superficiales]] de 18.7 m/s es la velocidad de fase: la velocidad a la que avanzan las crestas visibles. La energía llega más tarde, a 9.4 m/s (velocidad de grupo). La [[frecuencia_de_la_onda_superficial]] de 0.083 Hz no puede elegirse independientemente de [[lambda]]: está determinada por la relación de dispersión gravitatoria para esa [[lambda]] y ese [[aceleracion_gravitatoria]]. El modelo de agua profunda es válido siempre que la profundidad oceánica supere [[lambda]] dividida entre dos, es decir, unos 112 m, condición cumplida en la mayor parte del océano abierto.