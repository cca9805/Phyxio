## Modelo ideal

El modelo ideal que subyace a este leaf es el de **cargas puntuales en el vacío con campo electrostático conservativo**. En este modelo, todas las cargas se tratan como puntos matemáticos sin extensión espacial, el medio en que se encuentran es el vacío (permitividad relativa unitaria), y el campo eléctrico que generan es estrictamente estático. Bajo estas condiciones, la energía potencial eléctrica [[energia_potencial_electrica]] queda completamente determinada por las posiciones relativas de las cargas y sus valores, sin que intervengan efectos dieléctricos, de apantallamiento, de retardo o cuánticos.

Este modelo simplifica la realidad al ignorar que las cargas reales tienen extensión finita, que los medios materiales modifican la interacción y que las cargas en movimiento generan campos magnéticos adicionales. Sin embargo, es extraordinariamente preciso para describir sistemas donde las separaciones son mucho mayores que el tamaño de las cargas y los movimientos son lentos comparados con la velocidad de la luz.

## Hipótesis

- **Cargas puntuales**: cada carga ocupa un punto matemático sin extensión. Consecuencia de violarla: la energía diverge cuando la separación [[r_12]] se acerca al radio de la carga; la fórmula coulombiana sobreestima la energía a distancias comparables con el tamaño de la carga.
- **Vacío como medio**: la permitividad del espacio entre las cargas es la del vacío. Consecuencia de violarla: en medios dieléctricos, la energía de interacción se reduce por un factor igual a la permitividad relativa del medio.
- **Campo estático**: las cargas están en reposo o se mueven tan lentamente que los efectos de retardo son despreciables. Consecuencia de violarla: cargas aceleradas irradian energía electromagnética, y la energía potencial escalar ya no basta para describir el sistema.
- **Superposición lineal**: la energía total del sistema es la suma de las energías de todos los pares. Consecuencia de violarla: en medios no lineales o a intensidades de campo muy altas, la superposición falla y aparecen efectos de la electrodinámica no lineal.
- **Referencia en el infinito**: la energía potencial se toma como cero cuando las cargas están infinitamente separadas. Consecuencia de violarla (cambio de referencia): los valores numéricos de [[energia_potencial_electrica]] cambian, pero las diferencias [[variacion_de_energia_potencial_electrica]] son independientes de la referencia elegida.

## Dominio de validez cuantitativo

El modelo coulombiano de energía potencial es preciso con un error menor al 1 % cuando la separación [[r_12]] es mayor que 100 veces el radio de la carga mayor. Para electrones y protones, cuyo radio clásico es del orden de \(10^{-15}\) m, el modelo es válido para separaciones mayores de r > 10⁻¹³ m. Por encima de esta escala, los resultados son indistinguibles de la electrodinámica cuántica a nivel de energía.

Para velocidades de las cargas menores que el 10 % de la velocidad de la luz (es decir, inferiores a 3×10⁷ m/s), los efectos relativistas modifican la energía en menos del 1 %. A velocidades superiores, la corrección relativista se vuelve significativa y el modelo estático subestima la energía de interacción.

En medios dieléctricos con permitividad relativa superior a 2, la reducción de la energía de interacción por el apantallamiento es superior al 50 % respecto al vacío, por lo que ignorar el medio produce errores mayores del 50 %.

## Señales de fallo del modelo

- **Energía que diverge al acercar las cargas sin límite**: en el modelo clásico, [[energia_potencial_electrica]] crece sin límite cuando [[r_12]] tiende a cero. En la realidad, antes de llegar a distancias atómicas, la mecánica cuántica introduce efectos de intercambio y exclusión que estabilizan el sistema.
- **Resultado dependiente de la trayectoria**: si al calcular el trabajo del campo mediante el producto fuerza por desplazamiento a lo largo de una trayectoria se obtiene un resultado diferente al dado por la diferencia de [[energia_potencial_electrica]] entre los extremos, hay un error en el cálculo de la fuerza o en la integración; el campo electrostático siempre es conservativo.
- **[[energia_potencial_electrica]] que no tiende a cero al aumentar [[r_12]]**: si el resultado de la energía de interacción no disminuye al separar las cargas, hay un error conceptual o de cálculo. La única excepción son sistemas con distribuciones de carga que se extienden al infinito (como placas infinitas), donde la referencia en el infinito no es aplicable.
- **Signo de [[energia_potencial_electrica]] incorrecto para el tipo de interacción**: si se calcula [[energia_potencial_electrica]] positiva para cargas de signo opuesto, o negativa para cargas del mismo signo, hay un error en el uso de los signos de las cargas.

## Modelo extendido o alternativo

El modelo extendido más inmediato incluye la **permitividad del medio dieléctrico**. En un medio homogéneo e isótropo, la energía de interacción coulombiana entre dos cargas se reduce por la permitividad relativa del medio: la energía en el medio es esa cantidad de veces menor que en el vacío. Esta extensión es fundamental para calcular la energía en condensadores con dieléctrico y para entender la estabilización de cargas iónicas en soluciones acuosas.

Para distribuciones continuas de carga, el modelo se extiende mediante integración: la energía potencial de una carga de prueba en el campo de una distribución se obtiene integrando el potencial generado por cada elemento de carga. Esta integración conduce a la formulación de la energía del campo eléctrico en términos de la densidad de energía volumétrica, que depende del cuadrado del campo en cada punto del espacio.

Para cargas en movimiento relativista, el modelo se extiende al electromagnetismo clásico completo, donde la energía ya no puede separarse limpiamente en eléctrica y magnética, y ambas contribuyen a la energía del sistema.

Cuando conviene pasar al modelo extendido con dieléctrico: cuando el problema involucra condensadores con material entre las placas, o cuando las cargas están inmersas en un medio material cuya permitividad difiere significativamente de la del vacío. Cambiar a este modelo en cuanto la permitividad relativa del entorno sea mayor que 1.1, lo que implica una corrección mayor del 10 % en la energía.

## Comparación operativa

| Aspecto | Modelo ideal (vacío, cargas puntuales) | Modelo extendido (dieléctrico, distribuciones) |
|---|---|---|
| Fórmula de energía | Producto directo o cociente coulombiano | Integración sobre la distribución con permitividad |
| Precisión | Exacta para cargas puntuales bien separadas | Necesaria cuando el medio o la extensión importan |
| Complejidad | Cálculo algebraico directo | Integración numérica o analítica según la geometría |
| Límite de aplicabilidad | Separaciones mayores que el tamaño de la carga | Sin límite en principio, con la física correcta del medio |
| Coste computacional | Inmediato | Puede requerir métodos numéricos para geometrías complejas |