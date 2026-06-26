const a=`# Ejemplos de Ondas Superficiales

# Ejemplo tipo examen

## Enunciado
Una tormenta en el Atlántico Norte genera ondas superficiales con longitud de onda [[lambda]] = 150 m. El tren de ondas se propaga sobre una región oceánica donde la profundidad es [[h]] = 4000 m. Determina la velocidad de fase [[c]] y justifica si el fondo marino puede despreciarse en este escenario.

## Datos
- **Longitud de onda:** [[lambda]] = 150 m.
- **Profundidad oceánica:** [[h]] = 4000 m.
- **Gravedad:** [[g]] = 9.81 m/s^2.

Estos datos describen dos escalas distintas. [[lambda]] fija el tamaño horizontal de la perturbación que se repite de cresta a cresta, mientras que [[h]] fija el espacio vertical disponible para que las partículas de agua completen su movimiento orbital. [[g]] representa la fuerza restauradora que devuelve la superficie al equilibrio. No se proporciona la altura de la ola, por lo que se asume una perturbación de pequeña amplitud compatible con el modelo lineal.

## Definición del sistema
El sistema es un tren de ondas de gravedad que se propaga en la superficie libre de un fluido ideal. Se estudia la rapidez con la que avanzan las crestas, no la velocidad neta de transporte de las partículas de agua.

## Modelo físico
La relación completa del modelo de Airy es:

{{f:airy_general}}

Antes de simplificarla, se compara [[h]] con [[lambda]]. Si el fondo está muy lejos respecto a la escala espacial de la ola, su influencia sobre el movimiento orbital superficial es despreciable.

## Justificación del modelo
El cociente entre profundidad y longitud de onda vale 4000 / 150 = 26.7. Este valor es mucho mayor que 0.5, por lo que el movimiento orbital apreciable se extingue mucho antes de alcanzar el fondo. La aproximación de mar abierto está físicamente justificada.

## Resolución simbólica
En este límite, la tangente hiperbólica de la relación general se aproxima a la unidad y queda:

{{f:profundas}}

La rapidez de fase se obtiene sustituyendo [[g]] y [[lambda]] en esa relación.

## Sustitución numérica
Con [[g]] = 9.81 m/s^2 y [[lambda]] = 150 m, el cálculo da [[c]] = 15.3 m/s, equivalente aproximadamente a 55 km/h.

El valor no debe leerse como una velocidad de corriente marina. Una partícula de agua cercana a la superficie oscila alrededor de su posición media, mientras la cresta se desplaza a la velocidad calculada. La conversión a km/h solo ayuda a interpretar el orden de magnitud; la magnitud física relevante sigue siendo [[c]] en m/s.

## Validación dimensional
El producto entre gravedad y longitud de onda tiene unidades de m^2/s^2; al dividir por un número adimensional y tomar la raíz cuadrada se obtiene m/s. El resultado es coherente con una velocidad de propagación.

## Interpretación física
La velocidad calculada corresponde al avance de las crestas, no a un desplazamiento horizontal permanente del agua. Si la tormenta genera ondas de mayor longitud de onda, estas viajarán más rápido y llegarán antes a la costa. Este ordenamiento por rapidez explica por qué el mar de fondo puede anunciar una tormenta lejana incluso cuando el viento local todavía no ha cambiado.

La justificación física más importante es que el fondo no participa. La ola tiene una escala horizontal de 150 m, pero el lecho está a 4000 m: la zona donde las partículas describen órbitas apreciables queda muy por encima del fondo. Por eso el resultado depende de [[lambda]] y [[g]], no de [[h]]. Si en el mismo punto se estudiara una perturbación con longitud de onda mucho mayor, habría que repetir la clasificación antes de usar la misma fórmula.

Desde el punto de vista didáctico, este ejemplo enseña a no elegir el modelo por intuición geográfica. "Océano profundo" no basta como argumento; lo correcto es comparar profundidad y longitud de onda. La conclusión no es solo que [[c]] vale 15.3 m/s, sino que ese número representa un régimen dispersivo donde las componentes largas se separan de las cortas durante la propagación.

# Ejemplo de aplicación real

## Contexto
Un tsunami transoceánico puede tener una longitud de onda de cientos de kilómetros. Aunque se propague sobre una cuenca oceánica de varios miles de metros de profundidad, la escala horizontal de la perturbación es tan grande que toda la columna de agua participa en el movimiento.

## Estimación física
Tomemos una profundidad media [[h]] = 4500 m. Para una longitud de onda del orden de 200000 m, el cociente entre profundidad y longitud de onda vale 4500 / 200000 = 0.0225. Este valor está por debajo de 0.05, de modo que la rapidez queda controlada por la profundidad:

{{f:someras}}

Al sustituir [[g]] = 9.81 m/s^2 y [[h]] = 4500 m se obtiene [[c]] = 210 m/s, unas centenas de kilómetros por hora.

La estimación no pretende describir todos los detalles de la inundación costera. Su objetivo es fijar el tiempo de propagación en mar abierto y mostrar por qué una perturbación generada por un terremoto puede activar alertas a escala oceánica. La longitud de onda tan grande hace que el fondo sea relevante aunque la profundidad parezca enorme en términos cotidianos.

## Interpretación
Una velocidad de ese orden permite que un tsunami cruce un océano en pocas horas. Físicamente, la onda no afecta solo a una capa superficial: mueve una columna de agua enorme y transporta gran cantidad de energía. Al llegar a la costa, la reducción de [[h]] disminuye [[c]], acorta la longitud de onda y amplifica la altura, generando la inundación característica.

La comparación con el ejemplo anterior es la clave conceptual. En ambos casos hay agua oceánica y gravedad, pero cambia la escala de la perturbación. La ola de tormenta de 150 m apenas detecta el fondo; el tsunami de cientos de kilómetros queda controlado por la profundidad. Por eso dos ondas en el mismo océano pueden requerir fórmulas límite distintas.

Este resultado también muestra la utilidad social del modelo. Una estimación rápida de [[c]] permite convertir una distancia de propagación en un tiempo de llegada aproximado. Aunque la predicción real requiere batimetría detallada, fricción, refracción y geometría de la costa, el cálculo básico ya explica por qué las alertas deben emitirse con rapidez y por qué una disminución de la profundidad cerca de la costa transforma una señal baja y rápida en una inundación lenta, alta y destructiva.
`;export{a as default};
