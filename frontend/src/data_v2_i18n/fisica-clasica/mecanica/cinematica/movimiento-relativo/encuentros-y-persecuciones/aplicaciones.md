## 1. Sincronización ferroviaria en una vía única

En una línea con vía única, dos trenes pueden aproximarse desde estaciones opuestas con horarios diferentes. El problema operativo no consiste solo en saber dónde están, sino en decidir si su programación temporal conduce a un cruce en un punto seguro o si uno de ellos debe esperar antes de entrar en el tramo compartido.

En esta situación, el núcleo físico no es la velocidad de cada tren por separado, sino la comparación entre separación inicial y evolución relativa. Un retraso de salida o una pequeña variación de velocidad puede desplazar de forma importante el lugar de encuentro, con consecuencias directas sobre la seguridad y la gestión del tráfico.

Variable dominante: [[t_e]] , porque la decisión práctica depende del instante en que el encuentro se produciría dentro del tramo conflictivo.

Límite de validez: el modelo deja de ser útil si las velocidades dejan de ser aproximadamente constantes o si el recorrido real ya no puede reducirse a una sola dimensión efectiva.

## 2. Persecución de un vehículo por un dron de inspección

Un dron sigue la trayectoria de un vehículo que avanza por una carretera recta para iniciar una toma de datos cuando logra situarse exactamente sobre él. Aquí la cuestión no es si ambos se mueven rápido o despacio, sino si el dron puede compensar la separación inicial [[d_0]] y un posible retraso de salida [[dt]] antes de que el vehículo abandone la zona de interés.

La lectura física se apoya en la velocidad relativa [[v_rel]] : si el dron no reduce la distancia a un ritmo suficiente, no habrá encuentro operativo aunque ambos se desplacen en la misma dirección.

Variable dominante: [[v_rel]] , porque resume si la persecución reduce o no la separación entre perseguidor y objetivo.

Límite de validez: esta aproximación deja de ser fiable si el vehículo cambia de velocidad con frecuencia o si el dron necesita maniobras laterales que destruyen la simplificación unidimensional.

## 3. Coordinación de dos robots en una cadena logística

Dos robots móviles recorren un mismo pasillo industrial desde puntos distintos y deben coincidir en una estación de transferencia para intercambiar carga. El problema no es describir sus trayectorias de forma aislada, sino asegurar que ambos lleguen al mismo punto en el mismo instante para que la operación sea posible.

Aquí la magnitud relevante no es tanto el tiempo de uno u otro por separado, sino la posición de coincidencia [[x_e]] , porque determina si el intercambio ocurre dentro del espacio funcional previsto o fuera de él.

Variable dominante: [[x_e]] , porque el éxito de la operación depende del lugar efectivo donde se produce la coincidencia entre ambos móviles.

Límite de validez: el modelo falla si los robots no mantienen una trayectoria recta bien definida o si las detenciones y aceleraciones intermedias alteran la estructura de encuentro prevista.

## 4. Detección de retrasos en una prueba experimental

En una práctica de laboratorio, dos carros deben encontrarse en una pista recta después de ser liberados con una secuencia temporal determinada. Si uno de ellos se pone en marcha con un pequeño retraso, el análisis del sistema exige introducir explícitamente [[dt]] para decidir si el encuentro observado responde al modelo previsto o si hay un fallo de sincronización experimental.

Aquí el interés principal no es calcular una magnitud final para el examen, sino diagnosticar si el montaje ha reproducido correctamente la secuencia diseñada.

Variable dominante: [[dt]] , porque un retraso de arranque modifica la estructura del problema incluso aunque las velocidades nominales sigan siendo las mismas.

Límite de validez: esta lectura pierde sentido si el retraso no puede medirse con resolución suficiente o si las condiciones de liberación alteran las velocidades previstas desde el inicio.

## 5. Alcance de un interceptador en un sistema automático

Un sistema automático debe decidir si un móvil lanzado desde una base puede interceptar a otro objeto que ya se desplaza por un carril recto. En este contexto, la cuestión no es describir una persecución pasada, sino evaluar la viabilidad de una intercepción futura bajo condiciones conocidas.

La estructura del problema se parece a la de una persecución, pero aquí el interés está en saber si el encuentro es físicamente alcanzable antes de que el objetivo abandone la zona útil del sistema.

Además, este tipo de problema no solo decide si la intercepción es posible, sino también si lo es dentro de una ventana operativa concreta. Un sistema puede ser físicamente capaz de alcanzar al objetivo y, sin embargo, resultar inútil si el encuentro ocurre demasiado tarde o fuera de la zona funcional del dispositivo. Por eso, en aplicaciones automáticas no basta con resolver la coincidencia espacial: hay que interpretar si el instante y el lugar de encuentro siguen siendo compatibles con la finalidad técnica del sistema.

Variable dominante: [[d_0]] , porque la separación inicial condiciona si la intercepción es posible dentro del intervalo operativo disponible.

Límite de validez: el modelo se vuelve insuficiente si el móvil objetivo cambia de régimen de movimiento o si el interceptador necesita una fase de aceleración que impide tratar toda la maniobra como movimiento uniforme.
