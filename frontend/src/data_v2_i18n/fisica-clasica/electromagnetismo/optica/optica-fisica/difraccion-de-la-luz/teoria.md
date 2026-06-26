## Contexto conceptual

Cuando un haz de luz pasa por una rendija extremadamente estrecha, no se limita a proyectar una sombra geométrica perfecta en la pantalla trasera. En su lugar, la luz se desvía lateralmente y se expande en el espacio circundante, creando un patrón de franjas claras y oscuras en la pantalla. Este sorprendente fenómeno ondulatorio, donde la luz bordea los obstáculos y se desvía al atravesar rendijas del tamaño de micrómetros, se conoce como **difracción de la luz**.

La difracción de una sola rendija es una consecuencia fundamental del carácter ondulatorio de la luz electromagnética. Conecta las sombras geométricas con el comportamiento microscópico de fase. La pregunta central que guía este leaf es: ¿cómo influyen el ancho de la abertura y la longitud de onda en el tamaño y la dispersión del patrón proyectado? Su respuesta explica el límite de resolución de microscopios, telescopios y del ojo humano.

> [!NOTE]
> La difracción ocurre con todo tipo de ondas (sonoras, mecánicas, electromagnéticas). Sin embargo, en el caso de la luz visible, solo es apreciable a simple vista si el obstáculo o rendija tiene dimensiones microscópicas comparables a su diminuta longitud de onda.

## 🟢 Nivel esencial

A nivel fundamental, la difracción se explica a través del principio ondulatorio que describe que cada punto de un frente de onda que avanza actúa como un emisor individual de pequeñas ondas esféricas secundarias. Cuando un haz de luz incide sobre una rendija de ancho diminuto, la abertura no actúa simplemente como un tragaluz, sino que la luz que la atraviesa se comporta como un conjunto coordinado de innumerables fuentes emisoras alineadas.

A medida que estas ondas secundarias se propagan hacia una pantalla distante, recorren distancias ligeramente distintas según la dirección. En el centro de la pantalla, todas recorren la misma distancia y llegan en fase, creando una franja central muy brillante.

Sin embargo, en ciertas direcciones inclinadas, las ondas procedentes de una mitad de la rendija cancelan a las correspondientes de la otra mitad. Esto genera un punto de oscuridad, conocido como el primer mínimo de difracción. El patrón resultante consiste en una franja central brillante flanqueada por franjas oscuras y máximos secundarios débiles.

> [!TIP]
> Si la rendija se estrecha, el patrón luminoso sobre la pantalla se ensancha considerablemente. Este comportamiento contraintuitivo es una firma de la naturaleza ondulatoria de la luz.

## 🔵 Nivel formal

La formulación cuantitativa de la difracción de Fraunhofer en una rendija simple rectangular se basa en analizar la diferencia de camino óptico entre las ondas secundarias procedentes de la abertura. El ángulo para el cual la interferencia destructiva de todas las ondas produce el primer mínimo de intensidad viene dado por la relación fundamental:

{{f:angulo_primer_minimo}}

En esta expresión, [[theta]] representa el ángulo del primer mínimo de difracción, medido en radianes respecto al eje central de incidencia paraxial. El parámetro [[lambda]] es la longitud de onda de la luz en metros, y [[ancho_de_la_rendija]] es el ancho físico de la rendija difractora en metros.

Cuando proyectamos este patrón angular sobre una pantalla plana colocada a una distancia longitudinal [[distancia_a_la_pantalla]], la separación lineal lateral entre el primer mínimo superior y el primer mínimo inferior define el ancho total del máximo central luminoso. Bajo la aproximación de ángulos pequeños, donde la tangente y el seno del ángulo se aproximan al ángulo en radianes, el ancho lineal del máximo central [[ancho_del_maximo_central]] se calcula mediante la relación derivada:

{{f:ancho_maximo_central}}

Donde [[ancho_del_maximo_central]] es el ancho del máximo central medido en metros sobre la pantalla, y [[distancia_a_la_pantalla]] es la distancia desde la rendija a la pantalla en metros.

La distribución completa de la intensidad luminosa en función del ángulo se modela utilizando el término sinc al cuadrado, donde la intensidad en cualquier punto es proporcional al cuadrado de la amplitud neta resultante de integrar las contribuciones de fase a lo largo de la anchura de la rendija.

> [!WARNING]
> En todos los cálculos, la longitud de onda [[lambda]] debe convertirse estrictamente a metros. Expresar [[lambda]] en nanómetros sin conversión mientras [[ancho_de_la_rendija]] y [[distancia_a_la_pantalla]] están en metros es el error más recurrente que invalida los cálculos.

## 🔴 Nivel estructural

**Distribución de intensidad y difracción de Fraunhofer.** La teoría cuantitativa del electromagnetismo clásico modela la intensidad sobre la pantalla mediante un perfil sinc al cuadrado. El parámetro de fase relevante crece con el ancho de la rendija y con el seno del ángulo, y disminuye cuando aumenta la longitud de onda.

Esta función describe que los mínimos de difracción ocurren de forma precisa cuando el seno del ángulo corresponde a un múltiplo entero de la longitud de onda dividido por el ancho de la rendija. El primer mínimo lateral usa el primer orden, y los órdenes siguientes aparecen simétricamente a ambos lados del eje central.

Para el primer mínimo lateral, el orden es uno, lo que recupera la fórmula fundamental bajo aproximación angular. Más allá de los mínimos, la intensidad decae rápidamente: el máximo central contiene la mayor parte de la energía transmitida y los máximos laterales se vuelven cada vez más tenues.

**Límite de validez del modelo lineal de Fraunhofer.** El régimen de Fraunhofer exige que la pantalla esté lejos de la rendija difractora. Si la distancia no es suficiente, se entra en el campo cercano de Fresnel, donde los frentes de onda no pueden tratarse como planos y el patrón se vuelve más complejo.

**Aproximación paraxial de ángulos pequeños.** La fórmula lineal para [[ancho_del_maximo_central]] asume desviación angular pequeña. Es fiable cuando el ancho de la rendija [[ancho_de_la_rendija]] es mucho mayor que la longitud de onda [[lambda]]. Si la rendija se acerca a la escala de la longitud de onda, el patrón se abre demasiado y se requiere proyección trigonométrica exacta.

## Interpretación física profunda

La difracción es una demostración directa de la interferencia de ondas. No es una fuerza que doble activamente la luz en los bordes de la rendija; es el resultado de la superposición y cancelación coherente de ondas secundarias. El patrón en la pantalla actúa como una transformada espacial de la abertura: una rendija estrecha produce una distribución angular ancha.

La relación inversa entre el ancho de la rendija [[ancho_de_la_rendija]] y el tamaño del patrón [[ancho_del_maximo_central]] recuerda a las ideas de incertidumbre ondulatoria. Cuanto más se confina espacialmente la luz, menos definida queda su dirección posterior. La energía no se pierde en la rendija; se redistribuye sobre la pantalla mediante superposición de fase.

> [!NOTE]
> Al cambiar el color de la luz (por ejemplo de azul a rojo), se varía [[lambda]]. Puesto que la luz roja tiene mayor longitud de onda que la azul, la luz roja se difracta con un ángulo mayor, resultando en un patrón visual visiblemente más esparcido y ancho en la pantalla.

## Orden de magnitud

En un montaje experimental típico de laboratorio de física escolar u universitaria, la longitud de onda [[lambda]] de un láser rojo de helio-neón toma el valor característico de seiscientos treinta y tres nanómetros. Si la luz pasa por una rendija de ancho [[ancho_de_la_rendija]] igual a una décima de milímetro, el ángulo del primer mínimo [[theta]] resultante es del orden de seis milirradianes.

Si la pantalla de proyección se coloca a una distancia geométrica [[distancia_a_la_pantalla]] de dos metros, el ancho lineal del máximo central [[ancho_del_maximo_central]] medido con una regla sobre la pantalla toma un valor aproximado de veinticinco milímetros. Esto es un tamaño óptimo y muy cómodo para observar visualmente a simple vista las bandas y registrar las posiciones experimentales del patrón difractado.

## Método de resolución personalizado

Frente a un problema cuantitativo de difracción en rendija simple, conviene seguir esta secuencia:

1. **Convertir al Sistema Internacional**: expresar [[lambda]], [[ancho_de_la_rendija]], [[distancia_a_la_pantalla]] y [[ancho_del_maximo_central]] en metros.
2. **Evaluar la consistencia angular**: comparar [[lambda]] con [[ancho_de_la_rendija]]. Si el cociente es menor que una décima, las fórmulas paraxiales son adecuadas.
3. **Calcular la incógnita**: despejar [[theta]], [[ancho_del_maximo_central]] o [[ancho_de_la_rendija]] según lo pedido.
4. **Verificar límites físicos**: comprobar que la pantalla está lo bastante lejos para conservar el régimen de Fraunhofer.

## Casos especiales y ejemplo extendido

**Rendija de ancho comparable a la longitud de onda.** Si intentamos fabricar una rendija extremadamente estrecha donde [[ancho_de_la_rendija]] es igual a la longitud de onda [[lambda]], el ángulo teórico del primer mínimo de difracción requeriría que el seno del ángulo fuera igual a uno. Esto desplaza el primer punto de oscuridad exactamente a noventa grados del eje central, por lo que el máximo central luminoso se expande lateralmente hasta llenar por completo todo el espacio de propagación hacia adelante. No se formará ningún mínimo lateral definido en la pantalla.

**Patrón de difracción con luz blanca.** Con luz blanca, cada color se esparce de forma distinta porque cada componente tiene una longitud de onda diferente. El máximo central sigue siendo blanco, pero las franjas laterales se separan en bordes de color.

**Aberturas circulares y el criterio de Rayleigh.** Una abertura circular, como la pupila o una lente de telescopio, produce discos de Airy en lugar de franjas rectas. Esta estructura fija el límite de resolución de los instrumentos ópticos.

## Preguntas reales del alumno

**¿Por qué no vemos difracción de la luz al cruzar una puerta abierta?** Las puertas tienen anchos del orden de metros, mientras que la longitud de onda visible es microscópica. La desviación angular resulta diminuta y la luz parece propagarse rectamente. El sonido sí se difracta mucho en puertas porque sus longitudes de onda son mucho mayores.

**¿Qué diferencia hay entre difracción e interferencia de doble rendija?** La difracción es interferencia entre fuentes continuas dentro de una sola rendija. El patrón de Young combina esa difracción individual con la interferencia entre dos rendijas separadas.

**¿El primer mínimo representa oscuridad real?** Sí. En el modelo ideal monocromático, la cancelación de fase es perfecta en la dirección del primer mínimo y la intensidad allí es nula.

## Conexiones transversales y rutas de estudio

La difracción de la luz es la continuación directa del estudio de la interferencia clásica. El concepto de diferencia de camino óptico conecta directamente con el experimento de doble rendija de Young y los fenómenos de superposición de ondas.

A nivel de física moderna, la misma estructura aparece en la difracción de electrones y en la dualidad onda-partícula. El límite de resolución impuesto por la difracción también conduce al criterio de Rayleigh en ingeniería óptica.

## Síntesis final

La difracción describe el desvío lateral y la dispersión angular de la luz al atravesar una rendija u obstáculo microscópico. La clave es la relación entre [[lambda]] y [[ancho_de_la_rendija]]. En el modelo paraxial de Fraunhofer, el ángulo del primer mínimo [[theta]] está controlado por ese cociente. Sobre una pantalla a distancia [[distancia_a_la_pantalla]], el ancho central [[ancho_del_maximo_central]] crece con [[lambda]] y [[distancia_a_la_pantalla]], y decrece con [[ancho_de_la_rendija]]. Estas relaciones permiten calibrar montajes ópticos cuando la rendija es mucho mayor que la longitud de onda y la pantalla está lejos.