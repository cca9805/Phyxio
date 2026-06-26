const e=`## 1. Medida de longitud de onda con doble rendija

Una de las aplicaciones más directas de la interferencia es la determinación experimental de la longitud de onda de una fuente luminosa desconocida. El procedimiento consiste en iluminar dos rendijas separadas una distancia [[d]] conocida y medir la separación entre franjas [[Delta_y]] sobre una pantalla situada a distancia [[L]]. A partir de la relación entre estas tres magnitudes geométricas se obtiene [[lambda]] con precisión del orden del uno por ciento en montajes de laboratorio estándar.

Este método es fundamental en espectroscopia de baja resolución y en la calibración de fuentes luminosas educativas. La precisión alcanzable depende de la calidad de la medida de [[Delta_y]], de la estabilidad del patrón y de la monocromaticidad de la fuente. En la práctica, un microscopio de medida sobre la pantalla permite determinar [[Delta_y]] con error inferior a una décima de milímetro.

Variable dominante: la separación entre franjas [[Delta_y]], directamente proporcional a la longitud de onda buscada y al cociente geométrico entre distancia a pantalla y separación entre rendijas.
Límite de validez: el método requiere fuentes coherentes y monocromáticas. Para fuentes con ancho espectral significativo, el patrón pierde contraste progresivamente y la precisión disminuye. La aproximación de ángulos pequeños restringe la medida a los primeros órdenes del patrón.

## 2. Espectroscopia con redes de difracción

Las redes de difracción son dispositivos que contienen miles de rendijas paralelas equiespaciadas y utilizan la interferencia constructiva de múltiples haces para descomponer la luz en sus componentes espectrales. Cuando luz policromatica incide sobre la red, cada longitud de onda satisface la condición de máximo a un ángulo diferente, dispersando espacialmente el espectro. La resolución espectral mejora con el número de rendijas iluminadas.

Los espectrómetros basados en redes se emplean en química analítica, astrofísica estelar, física de materiales y biología molecular. Un espectrómetro de 1200 líneas por milímetro puede separar líneas espectrales distantes menos de una décima de nanómetro en primer orden. La intensidad decrece en órdenes altos, pero el poder resolvente aumenta linealmente con el orden utilizado.

Variable dominante: el orden de difracción [[m]] y el número total de rendijas iluminadas, que conjuntamente determinan el poder de resolución espectral del dispositivo.
Límite de validez: la superposición de órdenes consecutivos requiere filtros de bloqueo cuando se trabaja en órdenes superiores al primero. La intensidad disponible disminuye con el orden, limitando la relación señal-ruido del detector.

## 3. Interferometría de Michelson para metrología

El interferómetro de Michelson divide un haz de luz coherente en dos brazos perpendiculares mediante un divisor de haz semirreflejante. Cada brazo contiene un espejo que refleja la luz de vuelta. Al recombinarse, los dos haces interfieren y la intensidad resultante depende de la diferencia de camino óptico [[delta]] entre ambos brazos. Un desplazamiento del espejo móvil de media longitud de onda produce un ciclo completo del patrón de interferencia.

Este dispositivo es la base de la metrología óptica de precisión, del patrón internacional del metro y de los detectores de ondas gravitacionales LIGO y Virgo. En aplicaciones industriales se emplea para calibrar máquinas herramienta con resolución nanométrica y para medir la planitud de superficies ópticas con precisión de fracciones de franja.

Variable dominante: la diferencia de camino óptico [[delta]] entre ambos brazos, donde el factor dos proviene del recorrido de ida y vuelta de la luz en cada brazo.
Límite de validez: la longitud de coherencia de la fuente limita la diferencia de camino máxima útil. Vibraciones mecánicas y gradientes térmicos limitan la precisión en entornos industriales, requiriendo aislamiento y estabilización activa.

## 4. Recubrimientos antirreflejantes por películas delgadas

Cuando la luz incide sobre una película delgada transparente depositada sobre un substrato, los haces reflejados en la interfaz superior y en la interfaz inferior interfieren. Si el espesor óptico de la película es un cuarto de la longitud de onda en el medio, los haces reflejados se anulan por interferencia destructiva, eliminando la reflexión para esa longitud de onda. Este principio se aplica a cada superficie de lentes fotográficas, pantallas de dispositivos electrónicos y paneles solares.

Un recubrimiento antirreflejante típico reduce la reflexión desde un cuatro por ciento por superficie hasta menos de un uno por ciento. Los sistemas multicapa permiten suprimir la reflexión en un rango espectral amplio, combinando películas de espesores y materiales diferentes para que la interferencia destructiva cubra todo el visible.

Variable dominante: el espesor óptico de la película, producto del espesor geométrico por el índice de refracción del material depositado, que controla la diferencia de camino entre los haces reflejados en ambas interfaces.
Límite de validez: la película debe tener espesor comparable a [[lambda]] para mantener coherencia entre las reflexiones. Espesores mucho mayores que la longitud de coherencia temporal de la fuente producen superposición incoherente sin efecto antirreflejante selectivo.

## 5. Holografía y registro tridimensional

La holografía registra el patrón de interferencia entre la luz coherente dispersada por un objeto tridimensional y una onda de referencia plana. Este patrón, grabado en una placa fotosensible o sensor de alta resolución, contiene información completa de amplitud y fase del campo óptico procedente del objeto. La información de fase, inaccesible mediante fotografía convencional, es precisamente lo que permite reconstruir la profundidad.

Al iluminar el holograma con luz similar a la onda de referencia original, se reconstruye un frente de onda que reproduce fielmente la imagen tridimensional con paralaje completo. La holografía se aplica en billetes de seguridad, almacenamiento de datos de alta densidad, microscopía holográfica digital y metrología de deformaciones sin contacto.

Variable dominante: la diferencia de camino entre el haz de referencia y el haz objeto en cada punto del holograma, que determina la frecuencia espacial de las franjas registradas y codifica la información angular del objeto.
Límite de validez: requiere fuentes con longitud de coherencia superior a la profundidad del objeto y estabilidad mecánica inferior a una fracción de longitud de onda durante la exposición. La resolución del material de registro limita el ángulo máximo entre haces capturables.
`;export{e as default};
