const a=`# Ejemplos — Ondas superficiales

# Ejemplo tipo examen

## Enunciado

Un vibrador de laboratorio genera ondas capilares en la superficie de agua pura a 20 °C con una frecuencia [[f]] de 130 Hz. Determinar la rapidez de propagación [[v]], la longitud de onda [[lambda]] y verificar dimensionalmente el resultado. Datos: [[g]] de 9.81 m/s², [[sigma]] de 0.073 N/m, [[rho]] de 998 kg/m³, [[f]] de 130 Hz.

## Datos

- [[f]]: 130 Hz (frecuencia de excitación del vibrador, que determina [[f]] de la onda)
- [[sigma]]: 0.073 N/m (tensión superficial del agua pura a 20 °C)
- [[rho]]: 998 kg/m³ (densidad del agua a 20 °C)
- [[g]]: 9.81 m/s² (aceleración gravitatoria local)
- Incógnitas: [[v]] en m/s y [[lambda]] en m

## Definición del sistema

El sistema es la interfaz plana entre el agua pura y el aire en equilibrio. La perturbación del vibrador genera una onda superficial propagándose horizontalmente desde el punto de excitación. El fluido se trata como incompresible e irrotacional con amplitud pequeña.

## Modelo físico

El modelo aplicable es la teoría lineal de ondas superficiales en agua profunda. Las magnitudes relevantes son [[sigma]], [[rho]], [[g]], [[k]] y [[v]]. Dado que [[f]] es 130 Hz, la longitud de onda esperada es del orden de milímetros, lo que sitúa la onda en el régimen capilar donde [[sigma]] domina sobre la gravedad.

## Justificación del modelo

Para decidir el modelo, se comparan los términos gravitatorio y capilar de la relación de dispersión combinada. Con [[lambda]] del orden de milímetros, [[k]] es del orden de miles de m⁻¹. El término capilar crece con [[k]] mientras que el gravitatorio disminuye; para [[k]] mayor de aproximadamente 370 m⁻¹ (correspondiente a [[lambda]] menor de 1.7 cm), el término capilar domina. Se aplica la fórmula capilar.

## Resolución simbólica

La fórmula capilar da [[v]] como la raíz cuadrada de [[sigma]] multiplicado por [[k]] dividido entre [[rho]]. La relación entre [[f]], [[v]] y [[lambda]] es [[v]] igual a [[f]] multiplicado por [[lambda]], y [[k]] igual a dos pi dividido entre [[lambda]]. Sustituyendo y despejando [[v]] en función de [[f]], [[sigma]] y [[rho]], se obtiene [[v]] elevado a la cuarta igual a [[sigma]] multiplicado por dos pi multiplicado por [[f]] al cuadrado, dividido entre [[rho]].

{{f:rapidez_capilares}}

## Sustitución numérica

Calculando [[v]] elevado a la cuarta como 0.073 multiplicado por dos pi multiplicado por 130 al cuadrado dividido entre 998, da aproximadamente 0.03877 m⁴ s⁻⁴. Tomando la raíz cuarta, [[v]] resulta aproximadamente 0.443 m/s. La longitud de onda se obtiene como [[v]] dividido entre [[f]], es decir, 0.443 dividido entre 130, que da [[lambda]] de aproximadamente 3.4 mm.

## Validación dimensional

[[sigma]] tiene unidades N/m igual a kg s⁻², [[k]] en m⁻¹ y [[rho]] en kg m⁻³. El cociente tiene unidades kg s⁻² por m⁻¹ dividido entre kg m⁻³, igual a m² s⁻². La raíz cuadrada produce m s⁻¹, que es la dimensión correcta de [[v]].

## Interpretación física

El resultado [[v]] de 0.44 m/s con [[lambda]] de 3.4 mm físicamente significa que la onda capilar se propaga a velocidad comparable a un paso lento, perceptible a simple vista en el laboratorio. Esto indica que [[sigma]] domina completamente sobre la gravedad a esta escala: la fuerza restauradora que mantiene plana la interfaz es la tensión superficial. La [[f]] impuesta por el vibrador no es un parámetro libre, sino que determina [[lambda]] a través de la relación de dispersión. Si se añadiera jabón reduciendo [[sigma]], [[v]] disminuiría y [[lambda]] también, un efecto coherente con el papel de [[sigma]] como fuerza restauradora.

# Ejemplo de aplicación real

## Contexto

En meteorología marina se utilizan boyas oceanográficas que miden la [[f]] de las olas para estimar la rapidez [[v]] de propagación y, a partir de la diferencia en tiempos de llegada de distintas componentes espectrales, la distancia de la tormenta generadora. Una boya registra que las olas más energéticas tienen [[f]] de aproximadamente 0.083 Hz y [[lambda]] de aproximadamente 225 m en agua profunda. Los datos del fluido son [[g]] de 9.81 m/s², [[sigma]] de 0.072 N/m, [[rho]] de 1025 kg/m³ (agua de mar).

## Estimación física

La [[f]] de 0.083 Hz corresponde a [[lambda]] de unos 225 m. Con [[k]] de aproximadamente 0.0279 m⁻¹, el término gravitatorio es [[g]] dividido entre [[k]], es decir, unos 351 m² s⁻², mientras que el término capilar es [[sigma]] multiplicado por [[k]] dividido entre [[rho]], es decir, aproximadamente 0.0000020 m² s⁻². La relación entre los dos términos supera los 175 millones: el régimen es puramente gravitatorio y [[sigma]] es completamente irrelevante para estas olas oceánicas.

Aplicando la fórmula gravitatoria, [[v]] resulta la raíz cuadrada de 351, que da aproximadamente 18.7 m/s equivalentes a unos 67 km/h. La velocidad de grupo, que transporta la energía, es la mitad de [[v]], es decir, aproximadamente 9.4 m/s. Una tormenta a 3000 km tardaría unos 3.7 días en hacer llegar su energía a la boya.

## Interpretación

Las olas de [[lambda]] de 225 m operan completamente en el régimen gravitatorio; [[sigma]] y [[rho]] no aparecen en la fórmula relevante. La celeridad [[v]] de 18.7 m/s es la velocidad de fase: la velocidad a la que avanzan las crestas visibles. La energía llega más tarde, a 9.4 m/s (velocidad de grupo). La [[f]] de 0.083 Hz no puede elegirse independientemente de [[lambda]]: está determinada por la relación de dispersión gravitatoria para esa [[lambda]] y ese [[g]]. El modelo de agua profunda es válido siempre que la profundidad oceánica supere [[lambda]] dividida entre dos, es decir, unos 112 m, condición cumplida en la mayor parte del océano abierto.
`;export{a as default};
