const e=`# Ejemplo tipo examen

## Enunciado
Una antena de telecomunicaciones emite una onda plana armónica en el vacío. Se ha medido que la amplitud del campo eléctrico [[E0]] a una cierta distancia es de 150 V/m. Se requiere realizar una interpretación física completa del estado de la onda en dicho punto, calculando:
1. La amplitud del campo magnético [[B0]] asociado.
2. La densidad de energía electromagnética [[u]] almacenada en el espacio.
3. La intensidad media [[I]] que transporta la onda.
4. Verificar la coherencia entre el flujo de energía dado por el vector de Poynting [[S]] y la intensidad media calculada.

## Datos
- Amplitud del campo eléctrico [[E0]]: 150 V/m.
- Medio: vacío (permitividad [[epsilon0]] y permeabilidad [[mu0]] estándar).
- Velocidad de la luz [[c]]: constante universal.

## Definición del sistema
El sistema se define como una región de espacio libre (vacío) atravesada por una onda plana que se propaga en una dirección lineal fija. Consideramos un volumen diferencial para el cálculo de la densidad [[u]] y una superficie unitaria perpendicular a la propagación para el flujo de energía [[S]]. Se asume que no hay obstáculos ni medios disipativos entre la fuente y el punto de medida. Esta configuración representa el modo fundamental de propagación de las ecuaciones de Maxwell en su forma más pura, libre de las complicaciones que introduce la materia.

## Modelo físico
Utilizamos el **modelo de interpretación física de Maxwell para ondas planas en el vacío**. Este modelo establece que las ondas electromagnéticas son perturbaciones auto-propagadas donde la energía oscila entre los campos eléctrico [[E]] y magnético [[B]]. En este modelo, los campos están perfectamente acoplados y sincronizados, manteniendo una proporción constante. El modelo nos proporciona las herramientas para calcular cuánta energía está "empaquetada" en un metro cúicco de espacio mediante [[u]] y qué tan rápido se mueve esa energía a través de un metro cuadrado de área mediante [[S]].

## Justificación del modelo
Este modelo es **válido** porque a la distancia de medida se cumple la condición de campo lejano (onda plana). **Se asume** que el vacío es un medio lineal perfecto y no dispersivo, lo que justifica el uso de los valores constantes de [[epsilon0]], [[mu0]] y [[c]]. **Es adecuado** porque permite simplificar las complejas interacciones vectoriales en magnitudes energéticas como la intensidad [[I]], que son directamente medibles y esenciales para el análisis en ingeniería y física aplicada.

## Resolución simbólica
Para realizar la interpretación completa, seguimos estos pasos basados en las fórmulas del leaf:

1. Calculamos la amplitud del campo magnético [[B0]] mediante la relación de acoplamiento en el vacío, que vincula las magnitudes eléctrica y magnética a través de la velocidad de la luz:
{{f:relacion_campos}}

2. Determinamos la densidad de energía electromagnética [[u]] instantánea en los picos de campo, sumando las contribuciones de ambos campos:
{{f:densidad_energia}}

3. Obtenemos la intensidad media [[I]] transportada por la onda, que representa el promedio temporal del flujo de potencia:
{{f:intensidad_media}}

4. Verificamos la magnitud del vector de Poynting [[S]] para asegurar que la tasa de flujo energético es coherente con la intensidad media (en valores pico):
{{f:poynting_magnitud}}

Finalmente, verificamos que la velocidad de propagación es consistente con las propiedades del vacío:
{{f:velocidad_vacio}}

## Sustitución numérica
1. Para la amplitud del campo magnético: el valor de [[B0]] resulta de dividir [[E0]] por [[c]], lo que da 500 nT (nanoteslas).
2. Para la densidad de energía máxima: utilizando [[E0]] y [[epsilon0]], el valor de [[u]] es aproximadamente 1.99e-7 J/m³.
3. Para la intensidad media: el resultado para [[I]] es de aproximadamente 29.87 W/m².
4. Para la magnitud del vector de Poynting: [[S]] alcanza un pico de 59.74 W/m², lo cual es exactamente el doble de la intensidad media [[I]], como se espera para una onda armónica pura.

## Validación dimensional
Verificamos las unidades de la intensidad media [[I]]. Dado que [[I]] se define por el producto de [[c]], [[epsilon0]] y el cuadrado de [[E0]], la unidad resultante es (m/s) * (F/m) * (V²/m²). Sabiendo que un Faradio es un Culombio por Voltio y un Voltio es un Julio por Culombio, la expresión se simplifica a Julios por segundo por metro cuadrado, o lo que es lo mismo, Vatios por metro cuadrado (W/m²). Esto confirma que el resultado representa correctamente un flujo de potencia por unidad de área.

## Interpretación física
Los resultados muestran que, aunque el campo magnético [[B0]] tiene un valor numérico muy pequeño comparado con el eléctrico, transporta exactamente la mitad de la energía de la onda. Esto significa que la onda se autosostiene físicamente a través de esta simetría. Esto implica que la intensidad de casi 30 W/m² explica por qué las señales de telecomunicaciones pueden ser captadas a grandes distancias. Por tanto, el resultado es coherente con la naturaleza autónoma de la radiación.

# Ejemplo de aplicación real

## Contexto
Este ejemplo analiza dos escalas diferentes de interacción electromagnética: primero, el flujo masivo de energía proveniente del Sol que llega a nuestro planeta (la constante solar), y segundo, la señal delicada pero de alta frecuencia de un router WiFi doméstico. Ambos casos, a pesar de sus orígenes tan distintos, se rigen por la misma interpretación física de densidad de energía [[u]] e intensidad [[I]].

## Estimación física
Para realizar una estimación de orden de magnitud razonable, consideramos que la intensidad [[I]] solar en la parte superior de la atmósfera es de unos 1361 W/m². Invirtiendo la fórmula de la intensidad, encontramos que la amplitud de pico del campo eléctrico [[E0]] de la luz solar es de unos 1012 V/m. Para el WiFi, un router de 0.1 W crea una intensidad [[I]] de 0.0079 W/m² a 1 metro, lo que corresponde a un [[E0]] de 2.4 V/m. En ambos casos, el valor razonable de la energía depende de las constantes del vacío.

## Interpretación
La interpretación física de Maxwell indica que estos fenómenos son fundamentalmente iguales. La intensidad solar [[I]] es tan alta que domina el balance energético de la Tierra, lo que significa que impulsa el clima. Por otro lado, la intensidad del WiFi es baja, pero esto implica que es segura para los seres humanos. En ambos casos, el campo electromagnético es un portador universal de energía e información. La coherencia de estos resultados demuestra que las ecuaciones de Maxwell proporcionan una descripción físicamente precisa del transporte de energía.
`;export{e as default};
