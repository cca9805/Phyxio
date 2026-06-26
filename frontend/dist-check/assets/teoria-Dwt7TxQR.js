const e=`# Indice de refraccion

## Contexto conceptual

Cuando un rayo de luz cruza la frontera entre dos medios transparentes, su velocidad cambia y su trayectoria se desvía. El **índice de refracción** es el número que cuantifica ese cambio: resume en una sola cifra adimensional cuánto frena un material a la luz respecto al vacío. Comprender este concepto es imprescindible para explicar fenómenos cotidianos como la desviación de la luz en un vaso de agua, el funcionamiento de lentes y la transmisión de señales por fibra óptica.

Dentro de la óptica geométrica, el índice de refracción conecta dos magnitudes fundamentales: la **velocidad de la luz en el vacío** [[c]] y la **velocidad de la luz en el medio** [[v_medio]]. A partir de ese cociente se derivan consecuencias sobre la longitud de onda, la dirección del rayo y los límites del modelo geométrico.

## 🟢 Nivel esencial

La luz viaja más despacio dentro de un material que en el vacío. El **índice de refracción** [[n]] de un medio indica cuántas veces se reduce esa velocidad. Un vidrio con [[n]] de aproximadamente 1.5 frena la luz a dos tercios de su rapidez en el vacío. El agua, con [[n]] cercano a 1.33, la frena algo menos. El diamante, con [[n]] próximo a 2.42, la reduce a menos de la mitad.

> [!TIP]
> Un índice más alto implica mayor frenado y, en una interfaz, mayor desviación del rayo hacia la normal.

La **frecuencia** de la onda luminosa no cambia al pasar de un medio a otro. Lo que cambia es la **velocidad** y, en consecuencia, la **longitud de onda** [[lambda_medio]], que se acorta proporcionalmente al índice. Esta invariancia de la frecuencia es una de las claves para interpretar correctamente la refracción.

## 🔵 Nivel formal

La definición cuantitativa del índice de refracción establece el cociente entre la velocidad de la luz en el vacío y la velocidad en el medio:

{{f:definicion_indice}}

Como [[c]] es una constante universal (aproximadamente 2.998 por diez elevado a ocho metros por segundo) y [[v_medio]] siempre es menor que [[c]] en materiales convencionales, el resultado [[n]] es un número adimensional mayor o igual a uno.

A partir de la conservación de la frecuencia, la longitud de onda dentro del medio se relaciona con la del vacío mediante:

{{f:longitud_onda_medio}}

El vínculo entre el índice y la dirección del rayo al cruzar una interfaz plana viene dado por la ley de Snell:

{{f:snell_refraccion}}

Esta última relación muestra que la desviación angular del rayo depende directamente del cociente de índices de los dos medios. Si el segundo medio tiene un índice mayor, el rayo se acerca a la normal; si es menor, se aleja de ella.

> [!NOTE]
> La ley de Snell es la herramienta operativa para calcular ángulos de refracción, mientras que la definición de [[n]] conecta la geometría del rayo con la velocidad de la onda.

El despeje de [[v_medio]] a partir de la fórmula de definición permite calcular la velocidad de la luz en cualquier medio conocido su índice. El despeje de [[lambda_medio]] a partir de la segunda fórmula permite obtener la longitud de onda en el medio conocido [[lambda_0]] y [[n]].

## 🔴 Nivel estructural

El índice de refracción no es una propiedad estática del material: **depende de la longitud de onda** de la luz incidente. Este fenómeno, llamado **dispersión**, explica por qué un prisma separa la luz blanca en colores. Para cada longitud de onda [[lambda_0]], el material presenta un valor ligeramente distinto de [[n]], de modo que los rayos de distinto color se desvían en ángulos diferentes al atravesar una interfaz.

La relación entre [[n]] y [[lambda_0]] se describe mediante curvas de dispersión empíricas, como la ecuación de Cauchy o la de Sellmeier. En el rango visible, la mayoría de los vidrios muestran **dispersión normal**: el índice crece cuando la longitud de onda disminuye, de modo que la luz violeta se desvía más que la roja.

> [!WARNING]
> El modelo de índice constante es una idealización válida solo para luz monocromática o bandas espectrales estrechas. Aplicarlo a fuentes de banda ancha sin considerar la dispersión puede producir errores significativos en el cálculo de ángulos y posiciones focales.

Cuando la luz pasa de un medio de mayor índice a uno de menor índice, existe un **ángulo crítico** a partir del cual no hay rayo refractado y toda la energía se refleja. Este fenómeno de **reflexión total interna** está directamente controlado por el cociente de índices y tiene aplicaciones decisivas en fibra óptica y en prismas retroreflectores.

La estructura del modelo revela también sus **límites de validez**: el tratamiento geométrico deja de funcionar cuando las dimensiones del sistema son comparables a la longitud de onda (difracción), cuando el medio es anisótropo (birrefringencia) o cuando la intensidad de la luz es tan alta que el propio índice depende del campo (óptica no lineal). En esos regímenes, el concepto de índice de refracción se generaliza a tensores o a funciones complejas que incorporan absorción.

La dependencia del índice con la temperatura es otro factor estructural relevante en diseño óptico de precisión. Un cambio de unos pocos grados centígrados en un vidrio de alta calidad puede alterar [[n]] en la quinta cifra decimal, suficiente para desplazar el foco de un instrumento astronómico.

## Interpretación física profunda

El índice de refracción traduce una propiedad microscópica, la **polarizabilidad** de las moléculas o iones del material, a una magnitud macroscópica observable: la velocidad de fase de la onda. Cada dipolo inducido por el campo eléctrico de la luz reemite una onda secundaria que interfiere con la original, resultando en un frente de onda neto que viaja más despacio.

Un [[n]] elevado no significa necesariamente que el medio sea mecánicamente denso. El diamante tiene un índice muy alto porque los electrones del enlace carbono-carbono responden intensamente al campo eléctrico de la luz, no porque el diamante sea pesado.

> [!TIP]
> La analogía correcta es pensar en la interacción electromagnética, no en la densidad de masa.

## Orden de magnitud

El vacío tiene [[n]] exactamente igual a uno. El aire a presión atmosférica presenta un índice de aproximadamente 1.0003, tan cercano a uno que en la mayoría de problemas se aproxima directamente a uno. El agua tiene [[n]] cercano a 1.33, el vidrio ordinario entre 1.45 y 1.55, el zafiro alrededor de 1.77 y el diamante aproximadamente 2.42.

Si un estudiante obtiene un índice de refracción de 0.5 para un vidrio, el resultado es físicamente absurdo en óptica clásica, ya que implicaría que la luz viaja el doble de rápido en el vidrio que en el vacío. Igualmente, un valor superior a 3 debe hacer sospechar un error de datos o de unidades, ya que muy pocos materiales ordinarios alcanzan esa cifra.

## Método de resolución personalizado

1. **Identificar los medios** involucrados y sus índices de refracción. Si el problema da la velocidad en el medio, calcular [[n]] con la fórmula de definición.
2. **Determinar la magnitud buscada**: velocidad en el medio, longitud de onda en el medio o ángulo de refracción.
3. **Seleccionar la fórmula adecuada** y despejar la variable objetivo.
4. **Sustituir valores numéricos** verificando unidades (metros, radianes, m/s).
5. **Comprobar coherencia**: el índice debe ser mayor que uno en medios convencionales, la longitud de onda en el medio debe ser menor que en el vacío, y el ángulo de refracción debe ser menor que el de incidencia cuando el rayo pasa a un medio de mayor índice.

## Casos especiales y ejemplo extendido

- **Incidencia normal** ([[theta_1]] nulo): el rayo atraviesa la interfaz sin desviarse, pero su velocidad y longitud de onda cambian de acuerdo con [[n]]. Este caso permite medir el índice sin necesidad de considerar ángulos.

- **Ángulo crítico**: cuando la luz pasa de un medio denso a uno menos denso (por ejemplo, de vidrio a aire), existe un ángulo de incidencia a partir del cual no hay rayo refractado. Para vidrio con [[n]] de 1.50 la reflexión total ocurre a partir de aproximadamente 42 grados. Este principio fundamenta el confinamiento de la luz en fibras ópticas.

- **Dispersión cromática en un prisma**: la luz blanca que entra en un prisma de vidrio se descompone porque cada color tiene un índice ligeramente distinto. La separación angular entre rojo y violeta depende de la diferencia de índices, que puede ser de apenas 0.01 pero produce una dispersión visible de varios grados.

## Preguntas reales del alumno

**¿Por qué la frecuencia de la luz no cambia al entrar en otro medio?**
La frecuencia está fijada por la fuente que emite la onda. En la frontera entre medios, las condiciones de contorno obligan a que la oscilación tenga la misma frecuencia a ambos lados para mantener la continuidad del campo electromagnético.

**¿Si el índice de refracción del aire es casi uno, se puede ignorar siempre?**
En la mayoría de problemas escolares, sí. Pero en astronomía de precisión la refracción atmosférica desplaza la posición aparente de las estrellas, y en metrología de alta exactitud la diferencia entre 1 y 1.0003 importa.

**¿Puede el índice de refracción ser menor que uno?**
En medios convencionales a frecuencias ópticas, no. Sin embargo, en ciertas bandas de frecuencia cercanas a resonancias atómicas la velocidad de fase puede superar [[c]], dando un índice menor que uno. Esto no viola la relatividad porque la velocidad de grupo (la que transporta energía e información) sigue siendo menor que [[c]].

**¿Por qué el diamante tiene un índice tan alto?**
Porque los electrones de enlace del carbono en la estructura cristalina del diamante responden con gran intensidad al campo eléctrico oscilante de la luz. Esa alta polarizabilidad electrónica equivale a un frenado más fuerte de la onda.

## Conexiones transversales y rutas de estudio

El índice de refracción es el puente entre la [Ley de Snell](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/refraccion/ley-de-snell) y la [Reflexión](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/reflexion). Comprender [[n]] permite abordar la reflexión total interna, el diseño de lentes, la fibra óptica y la dispersión cromática. En óptica física, el índice interviene en los patrones de interferencia y difracción cuando la luz atraviesa láminas delgadas o redes de difracción.

Desde el punto de vista de la electrodinámica, el índice de refracción se relaciona con la permitividad y la permeabilidad del medio, conectando la óptica con el electromagnetismo de Maxwell.

## Síntesis final

El índice de refracción [[n]] condensa la interacción entre la luz y un medio material en un solo número adimensional. Define la velocidad de la luz en el medio, la longitud de onda interna y, combinado con la ley de Snell, la dirección del rayo refractado. Su dependencia con la longitud de onda origina la dispersión y marca los límites del modelo de índice constante.
`;export{e as default};
