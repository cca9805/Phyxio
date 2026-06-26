const e=`# Modelos — Líneas de campo eléctrico

## Modelo ideal

El modelo de líneas de campo electrostático describe el campo [[E]] mediante curvas continuas orientadas en un espacio homogéneo e isótropo, bajo la hipótesis de que las cargas fuente son estáticas y que el espacio entre ellas es vacío o un medio lineal uniforme. En este modelo, la densidad de líneas [[rho_lineas]] es estrictamente proporcional al módulo de [[E]] y las líneas nunca se ramifican ni se cruzan en ningún punto regular del espacio.

El modelo conserva toda la información vectorial del campo: dirección, sentido e intensidad relativa. Las magnitudes que se ignoran deliberadamente son los efectos cuánticos de la carga, la estructura interna de las fuentes y cualquier acoplamiento con campos magnéticos variables.

## Hipótesis

- **Régimen estático**: las cargas fuente no se mueven. Si hubiera cargas en movimiento, el campo eléctrico tendría componentes inducidas cuyas líneas se cerrarían sobre sí mismas sin nacer ni morir en carga alguna.
- **Medio lineal homogéneo**: la permitividad del espacio es constante. Si el medio es inhomogéneo, las líneas se refractan en las interfaces (cambian de densidad al cruzar fronteras entre medios distintos) y el modelo simple de densidad proporcional a [[E]] en vacío deja de aplicarse.
- **Número de líneas conservado**: el número total de líneas que salen de una carga [[q_fuente]] es fijo y proporcional a su valor absoluto. Violar esta hipótesis (dibujar más o menos líneas en distintos puntos de la misma línea) implica crear o destruir flujo de forma ficticia.
- **Unicidad del campo en cada punto**: en todo punto del espacio (excepto en la posición de la carga fuente), [[E]] tiene un único valor. Esta unicidad garantiza que las líneas no se cruzan.
- **Representación discreta como aproximación de un campo continuo**: el campo real [[E]] es continuo; las líneas discretas son una aproximación visual. La densidad local se interpreta en sentido estadístico.

## Dominio de validez cuantitativo

El modelo de líneas de campo electrostático es válido cuando la escala temporal de variación de las cargas fuente es mucho mayor que el tiempo de tránsito de la señal electromagnética a través del sistema. Cuantitativamente, la condición es que la frecuencia de variación sea menor que c/(10 · L), donde L es la dimensión característica del sistema y c la velocidad de la luz. Para un sistema de laboratorio de 10 cm, esto equivale a frecuencias inferiores a 300 MHz.

Para sistemas puramente estáticos, el modelo es exacto dentro del dominio de la electrostática clásica, con un error relativo inferior al 1% respecto a los resultados de las ecuaciones de Maxwell completas siempre que la velocidad de las cargas sea menor que un décimo de la velocidad de la luz.

La representación discreta con N líneas por carga introduce un error de lectura del orden de 1/N en la estimación de la densidad local. Para un diagrama con 8 líneas por carga, la incertidumbre en la lectura de [[rho_lineas]] es de aproximadamente el 12%.

## Señales de fallo del modelo

- **Líneas que se cruzan en un punto sin carga**: indica un error en la construcción del diagrama. En ese punto el campo tendría dos valores simultáneos, lo cual es físicamente imposible en electrostática.
- **Campo [[E]] que no coincide con la tangente a las líneas trazadas**: si la dirección de [[E]] calculada analíticamente en un punto no es tangente a la línea dibujada, la línea está mal trazada.
- **Densidad de líneas que no refleja la variación conocida de [[E]]**: en una zona donde [[E]] decae analíticamente como 1/r², si las líneas no se separan con esa proporción, el diagrama es incorrecto.
- **Líneas que nacen o terminan en el vacío lejos de cargas**: en régimen estático esto viola la ley de Gauss. Solo puede ocurrir legítimamente en los bordes del diagrama, donde se asume que las cargas opuestas están fuera del campo de visión.

## Modelo extendido o alternativo

El modelo extendido incorpora los **efectos de borde** en sistemas finitos (condensadores reales, geometrías no simétricas) y la **refracción de líneas en interfaces dieléctricas**. En una interfaz entre dos medios con permitividades distintas, la componente tangencial del campo es continua pero la componente normal de la densidad de flujo cambia. Esto hace que las líneas de campo cambien de dirección al cruzar la interfaz, análogamente a la refracción de la luz.

El modelo más avanzado es el de las **líneas de flujo en electrodinámica**: en ese régimen las líneas de [[E]] pueden cerrarse sobre sí mismas (campo rotacional inducido por variación del campo magnético) y deben considerarse junto con las líneas del campo magnético para obtener una imagen completa de la onda electromagnética.

Cuando conviene pasar al modelo extendido: cuando la geometría del sistema tiene interfaces dieléctricas o cuando la frecuencia de variación supera el límite cuasiestático indicado en el dominio de validez. Cambiar a este modelo cuando el error de borde supera el 5% del campo interior, lo cual ocurre cuando la separación entre placas es comparable a sus dimensiones laterales.

## Comparación operativa

| Criterio | Modelo de líneas electrostático | Modelo extendido con efectos de borde |
|---|---|---|
| **Simplicidad** | Alta: reglas geométricas directas | Media: requiere cálculo numérico o correcciones analíticas |
| **Validez** | Sistemas con simetría o dimensiones grandes respecto a la separación | Geometrías finitas, interfaces dieléctricas, alta frecuencia |
| **Error típico** | < 1% en zonas alejadas de bordes | < 1% incluso en bordes y zonas de transición |
| **Herramienta de cálculo** | Lectura visual + ley de Gauss analítica | Elementos finitos, método de diferencias finitas |
| **Uso pedagógico** | Comprensión conceptual y problemas de examen | Diseño de dispositivos reales (capacitores, cables coaxiales) |
`;export{e as default};
