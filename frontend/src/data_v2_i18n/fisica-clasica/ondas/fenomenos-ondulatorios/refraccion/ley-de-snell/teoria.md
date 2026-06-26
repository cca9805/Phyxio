# Ley de Snell

## Contexto conceptual

Cuando un rayo de luz cruza la frontera entre dos medios transparentes con propiedades ópticas distintas, cambia de dirección. Este fenómeno, la **refracción**, es una de las observaciones más antiguas de la óptica y la base del diseño de lentes, prismas y fibras ópticas. La ley de Snell cuantifica esa desviación estableciendo una proporción exacta entre los senos de los ángulos de incidencia y refracción, ponderados por los índices de refracción de cada medio.

La ley no solo predice hacia dónde se desvía el rayo, sino que impone un **límite absoluto**: cuando la luz intenta pasar de un medio más denso a uno menos denso con un ángulo suficientemente grande, la refracción se vuelve imposible y toda la energía se refleja. Comprender este umbral —el ángulo crítico— es esencial para entender tecnologías como las comunicaciones por fibra óptica y los prismas de reflexión total.

## 🟢 Nivel esencial

La ley de Snell dice cómo cambia la **dirección** de un rayo cuando cruza una interfaz. El índice [[n1]] del medio incidente y el índice [[n2]] del medio refractado, junto con el ángulo de incidencia [[theta_1]], determinan el ángulo de refracción [[theta_2]]. Si la luz entra en un medio ópticamente más denso, el rayo se acerca a la normal; si entra en uno menos denso, se aleja.

Cuando la luz viaja desde un medio de mayor [[n1]] hacia otro de menor [[n2]], existe un ángulo de incidencia especial llamado ángulo crítico [[theta_c]], por encima del cual no se transmite luz al segundo medio. En ese punto el rayo refractado viajaría paralelo a la superficie, y para ángulos mayores toda la luz se refleja internamente. Este fenómeno, la reflexión total interna, es la base del funcionamiento de las fibras ópticas y los prismas de reflexión total. Solo ocurre cuando la luz intenta pasar de un medio más denso a uno menos denso, nunca en la dirección contraria.

## 🔵 Nivel formal

La ley de Snell en su forma general relaciona los ángulos y los índices de ambos medios mediante la conservación de la componente tangencial del vector de onda en la interfaz:

{{f:ley_snell}}

Esta expresión permite calcular [[theta_2]] conocidos [[theta_1]], [[n1]] y [[n2]], o despejar cualquiera de las cuatro magnitudes si se conocen las otras tres. La condición de existencia del rayo refractado exige que el cociente [[n1]] por seno de [[theta_1]] dividido entre [[n2]] no supere la unidad; si la supera, el arcoseno carece de solución real y no existe rayo refractado.

El **ángulo crítico** se obtiene imponiendo que [[theta_2]] alcance noventa grados, es decir, que el seno del ángulo refractado sea uno:

{{f:angulo_critico}}

Para [[theta_1]] superior a [[theta_c]], la ley de Snell no tiene solución real para [[theta_2]], lo que físicamente corresponde a la reflexión total interna. Este fenómeno no es un fallo del modelo sino una predicción directa de la misma ecuación. El ángulo crítico solo existe cuando [[n1]] es mayor que [[n2]]; en la dirección contraria, todo ángulo de incidencia produce un rayo refractado válido.

La ley de Snell se deduce de las condiciones de contorno de las ecuaciones de Maxwell en una interfaz plana: la componente tangencial del campo eléctrico debe ser continua, lo que fuerza la igualdad de las proyecciones horizontales de los vectores de onda en ambos medios. También puede derivarse del **principio de Fermat**: el camino óptico entre dos puntos separados por una interfaz es estacionario, lo que conduce a la misma relación sinusoidal. Ambas derivaciones confirman que la ley no es un ajuste empírico sino una consecuencia de principios fundamentales de la física.

## 🔴 Nivel estructural

La ley de Snell es una consecuencia geométrica de la invariancia traslacional de la interfaz. Dado que la superficie plana no distingue posiciones a lo largo de sí misma, la componente del momento del fotón paralela a la interfaz se conserva. Esto es formalmente idéntico a la conservación del momento lineal en la dirección sin potencial. La relación entre los senos de los ángulos no es un hallazgo empírico aislado sino un caso particular de un principio de simetría profundo.

El **dominio de validez** de la ley requiere varias condiciones simultáneas. Primera, la interfaz debe ser plana a escala de la longitud de onda; si la rugosidad es comparable a la longitud de onda, la difracción domina. Segunda, los medios deben ser **homogéneos e isótropos**: en cristales birrefringentes la ley se desdobla en dos, una por polarización. Tercera, la luz debe ser monocromática; en caso contrario cada componente espectral se refracta con ángulo distinto (dispersión cromática).

Cuando la interfaz no es plana, la ley de Snell sigue aplicándose **localmente** usando la normal local, lo que permite el trazado de rayos en lentes curvas. Esa lectura local es crucial: cada punto de una lente tiene una normal distinta, por eso una misma superficie puede hacer converger, divergir o aberrarse un haz. El cálculo angular no pertenece a la superficie completa, sino al punto exacto donde llega el rayo.

El gráfico natural del leaf muestra [[theta_2]] frente a [[theta_1]] para valores fijos de [[n1]] y [[n2]]. Si el segundo medio tiene mayor índice, la curva queda por debajo de la diagonal conceptual porque el rayo se aproxima a la normal. Si el primer medio tiene mayor índice, la curva crece hasta un umbral marcado por [[theta_c]]; más allá no debe dibujarse un rayo transmitido ordinario. Esta lectura gráfica evita un error frecuente: prolongar la curva como si el arcoseno siempre tuviera solución física.

La ley también separa dos preguntas que el alumno suele mezclar. Snell predice **dirección**, no intensidad transmitida. En el régimen de ángulos rasantes, la reflectividad puede crecer mucho según las ecuaciones de Fresnel, pero la dirección del rayo refractado sigue estando fijada por la geometría de fase. Para decidir cuánta energía pasa al segundo medio hace falta otro modelo; para decidir hacia dónde apunta el rayo, Snell basta mientras se cumplan sus hipótesis.

## Interpretación física profunda

El comportamiento del rayo al cruzar la interfaz puede entenderse como un ajuste de velocidad de fase. La luz, al entrar en un medio más denso, se ralentiza; para mantener la coherencia de los frentes de onda en la interfaz, el rayo debe cambiar de dirección. Es una analogía directa con una onda plana en el agua que cruza una frontera donde la profundidad cambia bruscamente: la parte del frente de onda que entra primero en la zona más lenta se retrasa, haciendo que el frente gire.

El ángulo crítico marca la transición entre dos regímenes cualitativamente distintos. Por debajo, existe un rayo refractado que transporta energía al segundo medio. Por encima, toda la energía regresa al primer medio y en el segundo solo penetra una **onda evanescente** cuya amplitud decae exponencialmente. Esta onda evanescente no transporta energía neta en la dirección perpendicular a la interfaz, pero puede acoplarse a otro medio cercano (efecto túnel óptico o reflexión total frustrada).

## Orden de magnitud

Para vidrio–aire, con [[n1]] cercano a 1.52 y [[n2]] cercano a 1.00, el ángulo crítico ronda 41 grados. En agua–aire, con [[n1]] de 1.33, sube a unos 49 grados. En diamante–aire, con [[n1]] de 2.42, baja a unos 24 grados, lo que explica sus destellos internos.

Si un alumno obtiene un ángulo refractado mayor que noventa grados, el resultado es físicamente absurdo: indica que los datos de entrada caen en la zona de reflexión total. Si obtiene un ángulo refractado negativo, probablemente ha invertido los medios o medido desde la superficie en vez de la normal.

## Método de resolución personalizado

> [!TIP]
> Secuencia operativa para problemas de refracción con la ley de Snell.

1. **Identificar los medios**: determinar cuál es el medio 1 (donde viaja el rayo incidente) y cuál es el medio 2 (donde viaja el rayo refractado). Asignar [[n1]] y [[n2]] correctamente.
2. **Verificar la referencia angular**: confirmar que el ángulo dado está medido desde la normal, no desde la superficie. Si está desde la superficie, restar de noventa grados.
3. **Comprobar existencia de refracción**: calcular el producto [[n1]] por el seno de [[theta_1]] y dividir por [[n2]]. Si el resultado excede la unidad, la refracción no existe y hay reflexión total.
4. **Aplicar la ley de Snell**: calcular el arcoseno para obtener [[theta_2]].
5. **Validar**: el ángulo refractado debe estar entre cero y noventa grados y debe ser menor que el incidente si se pasa a medio más denso, o mayor si se pasa a medio menos denso.

## Casos especiales y ejemplo extendido

> [!NOTE]
> Incidencia normal: cuando [[theta_1]] es cero, el seno es cero y [[theta_2]] también es cero. El rayo cruza la interfaz sin desviarse, independientemente de los índices. Solo cambia la velocidad y la longitud de onda, no la dirección.

> [!WARNING]
> Incidencia rasante: cuando [[theta_1]] se acerca a noventa grados, el seno tiende a uno y [[theta_2]] también tiende a su valor máximo. En este límite, la reflectividad de la interfaz (dada por las ecuaciones de Fresnel) se acerca al cien por cien incluso sin superar el ángulo crítico; en la práctica casi toda la luz se refleja a incidencias muy rasantes.

Caso del prisma de reflexión total: un prisma de vidrio con caras a cuarenta y cinco grados aprovecha que el ángulo crítico vidrio–aire ronda 41 grados. El rayo cruza la primera cara, golpea la hipotenusa por encima del umbral y se refleja totalmente, redirigiendo el haz noventa grados con menos pérdidas que un espejo metálico.

## Preguntas reales del alumno

**¿Por qué el ángulo se mide desde la normal y no desde la superficie?**
Porque la normal es la dirección de simetría del problema: las propiedades ópticas no cambian a lo largo de la superficie, solo cambian al cruzar perpendicularmente. Medir desde la normal simplifica la ley a una igualdad de productos de senos.

**¿Por qué no puede existir reflexión total cuando la luz va del medio menos denso al más denso?**
Porque en esa dirección, [[n1]] es menor que [[n2]], y el cociente [[n1]] multiplicado por el seno del ángulo dividido entre [[n2]] siempre es menor que uno para cualquier ángulo de incidencia. El argumento del arcoseno nunca supera la unidad.

**¿Qué le pasa a la energía luminosa cuando hay reflexión total?**
Toda la energía reflejada regresa al medio 1. En el medio 2 aparece una onda evanescente que decae exponencialmente; no transporta energía neta lejos de la interfaz. Si se acerca otro medio a distancias del orden de la longitud de onda, parte de la energía puede acoplarse (reflexión total frustrada).

**¿Funciona la ley de Snell para ondas de sonido o de agua?**
Sí. La ley es una consecuencia general de la conservación de la componente tangencial del vector de onda y aplica a cualquier onda que cruce una interfaz entre dos medios donde la velocidad de propagación difiere. En acústica submarina se usa constantemente.

## Conexiones transversales y rutas de estudio

La ley de Snell conecta directamente con el [cambio de velocidad](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/cambio-de-velocidad), que explica por que los indices [[n1]] y [[n2]] representan velocidades de propagacion distintas en cada medio. Conceptualmente enlaza con el **principio de Fermat** (camino optico estacionario), que unifica reflexion y refraccion bajo un unico principio variacional.

Hacia arriba en la ruta didáctica, la ley de Snell es prerrequisito para comprender las **lentes** (aplicación sucesiva a superficies curvas) y los **instrumentos ópticos** (microscopios, telescopios). Lateralmente, conecta con la **difracción** cuando las dimensiones de la interfaz se reducen, y con la **dispersión cromática** cuando se considera la dependencia del índice con la longitud de onda.

## Síntesis final

La ley de Snell convierte la conservación de la componente tangencial del vector de onda en una herramienta que predice la dirección refractada y el umbral de reflexión total. Dominarla exige asignar bien los medios, medir desde la normal y verificar si el rayo refractado existe.
