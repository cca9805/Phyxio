# Ejemplo tipo examen


## Enunciado

Un rayo de luz monocromática viaja por el interior de un bloque de vidrio crown y llega a la interfaz con el aire. El índice de refracción del vidrio es 1.52 y el del aire es 1.00. El rayo incide formando un ángulo de 25 grados con la normal a la superficie. Determinar el ángulo de refracción en el aire. A continuación, calcular el ángulo crítico para esta interfaz e indicar qué ocurriría si el ángulo de incidencia fuese 50 grados.

## Datos

- Índice de refracción del vidrio (medio 1): 1.52
- Índice de refracción del aire (medio 2): 1.00
- Ángulo de incidencia: 25 grados, medido desde la normal

## Definición del sistema

El sistema consiste en un rayo de luz monocromática propagándose en vidrio crown que incide sobre una interfaz plana vidrio–aire. La normal a la interfaz es la referencia para todos los ángulos. El medio 1 es el vidrio (donde viaja el rayo incidente) y el medio 2 es el aire (donde viajará el rayo refractado si existe).

## Modelo físico

Se aplica la ley de Snell en su forma estándar, que establece que el producto [[n1]] por el seno de [[theta_1]] es igual al producto [[n2]] por el seno de [[theta_2]]. Para el ángulo crítico [[theta_c]], se impone que el ángulo refractado alcance noventa grados. Las magnitudes relevantes son los índices [[n1]] y [[n2]], los ángulos [[theta_1]] y [[theta_2]], y el ángulo crítico [[theta_c]].

## Justificación del modelo

La interfaz vidrio–aire es plana y pulida (rugosidad mucho menor que la longitud de onda visible). Los medios son homogéneos e isótropos. La luz es monocromática, de modo que no hay dispersión cromática. El ángulo de 25 grados está lejos de la incidencia rasante, por lo que los efectos de reflectividad de Fresnel no dominan. En estas condiciones la ley de Snell es exacta. El modelo dejaría de ser válido si la superficie fuese rugosa, si el vidrio fuese birrefringente o si se usara luz policromática.

## Resolución simbólica

Para obtener el ángulo de refracción, se aplica directamente la ley de Snell:

{{f:ley_snell}}

Despejando [[theta_2]]:

{{f:ley_snell}}

Para el ángulo crítico, se impone que [[theta_2]] sea noventa grados (seno igual a la unidad):

{{f:angulo_critico}}

## Sustitución numérica

Para el ángulo de refracción, se calcula el producto de [[n1]] (1.52) por el seno de 25 grados (0.4226), lo que da 0.6424. Se divide entre [[n2]] (1.00) y se obtiene 0.6424. Aplicando el arcoseno se obtiene un ángulo de aproximadamente 39.97 grados. Por tanto [[theta_2]] ≈ 40.0 grados.

Para el ángulo crítico, se calcula el cociente [[n2]]/[[n1]], es decir 1.00/1.52, que da 0.6579. Aplicando el arcoseno se obtiene aproximadamente 41.1 grados. Por tanto [[theta_c]] ≈ 41.1 grados.

Si el ángulo de incidencia fuese 50 grados, como 50 grados es mayor que [[theta_c]] (41.1 grados), se produce reflexión total interna y no existe rayo refractado.

## Validación dimensional

La ley de Snell relaciona productos adimensionales (índice adimensional multiplicado por seno adimensional) en ambos lados de la igualdad. El argumento del arcoseno es también adimensional. El resultado es un ángulo en radianes o grados según la conversión, lo que es dimensionalmente consistente.

Desglose: `[1] · [1] = [1] · [1]` ✓

El ángulo crítico resulta del arcoseno de un cociente adimensional, produciendo igualmente un ángulo. Dimensiones: `arcsin([1]/[1])` → ángulo ✓

## Interpretación física

El resultado [[theta_2]] de 40 grados muestra que el rayo se aleja significativamente de la normal al pasar del vidrio al aire. Esto es coherente con la regla cualitativa: al pasar a un medio menos denso ópticamente, la luz se aleja de la normal porque su velocidad de fase aumenta y la longitud de onda se expande.

El ángulo refractado (40 grados) está muy próximo al ángulo crítico (41.1 grados). Esto significa que con solo aumentar el ángulo de incidencia un grado más, se alcanzaría el umbral de reflexión total. Esta proximidad no es coincidencia: para índices relativamente bajos (vidrio crown con indice de 1.52), el ángulo crítico está en la franja media y es fácil encontrarse cerca del límite.

Cuando el ángulo de incidencia se eleva a 50 grados, se supera el umbral y toda la luz regresa al vidrio. Físicamente, la componente tangencial del vector de onda exigida por el aire sería mayor que la máxima posible en ese medio, lo que hace imposible la existencia de un rayo refractado. En la práctica, esto es exactamente lo que explotan los prismas de reflexión total: redirigen haces sin pérdida por absorción.

Si el índice del vidrio fuese mayor (por ejemplo 1.80 como un vidrio flint denso), el ángulo crítico bajaría a unos 34 grados, ampliando enormemente la zona de reflexión total y haciendo el prisma útil a ángulos de incidencia mucho más bajos.

# Ejemplo de aplicación real


## Contexto

En el diseño de fibras ópticas de telecomunicaciones, el núcleo de la fibra tiene un índice de refracción de aproximadamente 1.48 y el revestimiento un índice de 1.46. La luz se confina dentro del núcleo por reflexión total interna: mientras los rayos incidan sobre la interfaz núcleo–revestimiento con un ángulo superior al ángulo crítico, la señal se propaga sin pérdida por refracción.

El ingeniero necesita determinar el ángulo crítico de esta interfaz para calcular el cono de aceptación de la fibra (apertura numérica), que define qué rayos pueden inyectarse en la fibra y propagarse eficazmente.

## Estimación física

El ángulo crítico se calcula mediante la fórmula derivada de la ley de Snell con [[n1]] de 1.48 (núcleo) y [[n2]] de 1.46 (revestimiento). El cociente [[n2]]/[[n1]] es 1.46/1.48, que da 0.9865. El arcoseno de 0.9865 es aproximadamente 80.6 grados. Por tanto [[theta_c]] ≈ 80.6 grados.

Esto significa que solo los rayos que incidan sobre la interfaz con ángulos superiores a 80.6 grados respecto a la normal (es decir, con menos de 9.4 grados respecto a la superficie) se reflejan totalmente. En la práctica, esto corresponde a rayos casi paralelos al eje de la fibra, lo que limita el cono de aceptación.

La apertura numérica de la fibra (seno del semiángulo de aceptación medido en el aire exterior) resulta de la diferencia de cuadrados de los índices elevada a la raíz cuadrada, dando aproximadamente 0.24. Esto corresponde a un semiángulo de aceptación de unos 14 grados en el aire, lo que significa que la luz debe inyectarse con un cono relativamente estrecho.

## Interpretación

El resultado muestra que en fibras ópticas de telecomunicaciones, la diferencia de índices entre núcleo y revestimiento es muy pequeña (solo 0.02), lo que sitúa el ángulo crítico muy cerca de la incidencia rasante (80.6 grados). Esta geometría casi rasante explica por qué las fibras monomodo tienen núcleos tan finos (del orden de 8 a 10 micrómetros): necesitan eliminar los modos de propagación con ángulos demasiado alejados del eje.

Si la diferencia de índices fuese mayor (por ejemplo [[n1]] de 1.62 y [[n2]] de 1.49, como en fibras multimodo de plástico), el ángulo crítico bajaría a unos 67 grados y la apertura numérica aumentaría a 0.65, permitiendo inyectar luz con un cono mucho más amplio pero a costa de mayor dispersión modal y menor ancho de banda.

La ley de Snell, a través del ángulo crítico, conecta directamente las propiedades del material (índices) con las prestaciones de la fibra (apertura numérica, número de modos). Esto la convierte en la ecuación fundamental del diseño de guías de onda ópticas.