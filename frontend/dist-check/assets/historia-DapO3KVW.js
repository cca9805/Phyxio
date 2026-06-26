const e=`## Problema histórico

Desde la Antigüedad se sabía que el aire tiene peso y que el fuego lo transforma. Pero la pregunta de **cómo se relacionan cuantitativamente la presión, el volumen y la temperatura de un gas** no tuvo respuesta hasta el siglo XVII. El problema era doble: no existían instrumentos de medida adecuados (el termómetro y el manómetro se desarrollaron precisamente en ese periodo) y no había claridad conceptual sobre qué era exactamente un gas.

Robert Boyle, en 1662, fue el primero en establecer una relación cuantitativa rigorosa: comprimiendo y expandiendo aire atrapado en un tubo en U con mercurio, midió que el producto [[P]] × [[V]] permanece constante a temperatura fija. Esta era la primera ley de un gas, pero solo describía la isoterma.

## Dificultad conceptual previa

El obstáculo principal era la falta de una escala de temperatura absoluta y la confusión entre calor y temperatura. Sin una escala con cero absoluto, no era posible formular la proporcionalidad directa entre [[V]] y [[T]], porque esa proporcionalidad solo es exacta en kelvin. Los científicos del siglo XVIII trabajaban con escalas arbitrarias (Fahrenheit, Réaumur, Celsius) sin sospechar que existía un cero natural.

Además, la noción misma de "gas" era confusa: el flemingo Jan Baptist van Helmont acuñó la palabra en el siglo XVII, pero seguía siendo un objeto de debate si el aire era un elemento simple o una mezcla. Sin identificar correctamente qué sustancia se estudiaba, generalizar las leyes era difícil.

## Qué cambió

En 1787, Jacques Charles descubrió experimentalmente que a [[P]] constante el [[V]] de un gas varía linealmente con la temperatura medida en Celsius —y que extrapolando se alcanza [[V]] nulo a −273 °C—. Gay-Lussac en 1802 publicó resultados más sistemáticos y fue el primero en mencionar explícitamente el cero absoluto como origen natural de la escala de temperatura de los gases.

En 1811, Amedeo Avogadro formuló la hipótesis de que volúmenes iguales de gases distintos, a igual [[P]] y [[T]], contienen el mismo número de moléculas. Esta hipótesis (despreciada durante décadas) era la pieza que faltaba para combinar las leyes de Boyle, Charles y Gay-Lussac en una sola relación con [[n]] como variable adicional.

La síntesis final llegó con la obra de Rudolf Clausius y James Clerk Maxwell a mediados del siglo XIX: la teoría cinética de los gases proporcionó la derivación microscópica de la ley del gas ideal, demostrando que [[R]] es el producto del número de Avogadro por la constante de Boltzmann.

## Impacto en la física

La ley del gas ideal fue el primer ejemplo de una **ecuación de estado** que conectaba variables macroscópicas medibles con una constante universal. Abrió el camino a la termodinámica como disciplina autónoma: Carnot, Clausius y Kelvin construyeron sobre ella las leyes de la termodinámica. La existencia del cero absoluto —predicha por la extrapolación de las leyes de los gases— motivó la escala kelvin, que luego resultó ser la escala natural para toda la física cuántica y estadística.

La síntesis de Avogadro también fue el primer paso hacia la química cuantitativa moderna: permitió determinar masas moleculares relativas comparando densidades de gases, y estableció el concepto de mol como unidad de cantidad de sustancia.

## Conexión con física moderna

La ecuación de estado del gas ideal es hoy uno de los puntos de partida de la mecánica estadística: se deriva directamente de la función de partición de un gas de partículas no interactuantes, y sus correcciones (ecuación del virial) son los primeros términos de una expansión sistemática en potencias de la densidad. La constante [[R]] está directamente relacionada con la constante de Boltzmann (cociente de [[R]] entre el número de Avogadro), que desde 2019 tiene un valor exactamente definido en el Sistema Internacional de Unidades, fijando a la vez el valor exacto de [[R]] en 8.314 462 618 J/(mol·K).

En astrofísica, la ecuación de estado del gas ideal (con correcciones de degeneración cuántica) describe el comportamiento del plasma en el interior de las estrellas. En cosmología, el fondo cósmico de microondas es esencialmente radiación en equilibrio térmico descrita por la ley de Planck, que a su vez se deriva de la generalización cuántica de la ecuación de estado de los fotones.
`;export{e as default};
