const e=`# Ley de Snell

## Contexto conceptual

Cuando un rayo de luz cruza la frontera entre dos medios transparentes con propiedades ópticas distintas, cambia de dirección. Este fenómeno, la **refracción**, es una de las observaciones más antiguas de la óptica y la base del diseño de lentes, prismas y fibras ópticas. La ley de Snell cuantifica esa desviación estableciendo una proporción exacta entre los senos de los ángulos de incidencia y refracción, ponderados por los índices de refracción de cada medio.

La ley no solo predice hacia dónde se desvía el rayo, sino que impone un **límite absoluto**: cuando la luz intenta pasar de un medio más denso a uno menos denso con un ángulo suficientemente grande, la refracción se vuelve imposible y toda la energía se refleja. Comprender este umbral —el ángulo crítico— es esencial para entender tecnologías como las comunicaciones por fibra óptica y los prismas de reflexión total.

## 🟢 Nivel esencial

La ley de Snell establece que el producto del índice de refracción de un medio por el seno del ángulo que forma el rayo con la normal a la superficie se mantiene constante al cruzar la interfaz. El índice de refracción [[n1]] del medio donde viaja el rayo incidente y el índice [[n2]] del medio donde viaja el rayo refractado determinan, junto con el ángulo de incidencia [[theta_1]], el ángulo de refracción [[theta_2]]. Si la luz pasa a un medio más denso ópticamente (mayor índice), el rayo se acerca a la normal y [[theta_2]] resulta menor que [[theta_1]]; si pasa a uno menos denso, se aleja de la normal y [[theta_2]] es mayor.

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

Cuando la interfaz no es plana, la ley de Snell sigue aplicándose **localmente** usando la normal local, lo que permite el trazado de rayos en lentes curvas. En el régimen de ángulos rasantes, la reflectividad crece rápidamente según las ecuaciones de Fresnel; la ley de Snell predice la dirección pero no la energía transmitida.

## Interpretación física profunda

El comportamiento del rayo al cruzar la interfaz puede entenderse como un ajuste de velocidad de fase. La luz, al entrar en un medio más denso, se ralentiza; para mantener la coherencia de los frentes de onda en la interfaz, el rayo debe cambiar de dirección. Es una analogía directa con una onda plana en el agua que cruza una frontera donde la profundidad cambia bruscamente: la parte del frente de onda que entra primero en la zona más lenta se retrasa, haciendo que el frente gire.

El ángulo crítico marca la transición entre dos regímenes cualitativamente distintos. Por debajo, existe un rayo refractado que transporta energía al segundo medio. Por encima, toda la energía regresa al primer medio y en el segundo solo penetra una **onda evanescente** cuya amplitud decae exponencialmente. Esta onda evanescente no transporta energía neta en la dirección perpendicular a la interfaz, pero puede acoplarse a otro medio cercano (efecto túnel óptico o reflexión total frustrada).

## Orden de magnitud

Para la interfaz vidrio–aire (vidrio crown con [[n1]] de aproximadamente 1.52 y aire con [[n2]] de aproximadamente 1.00), el ángulo crítico es cercano a 41 grados. Esto significa que cualquier rayo con incidencia superior a 41 grados dentro del vidrio se refleja totalmente. En la interfaz agua–aire ([[n1]] de 1.33 y [[n2]] de 1.00) el ángulo crítico es de unos 49 grados. Para un diamante ([[n1]] de 2.42 y [[n2]] de 1.00) el ángulo crítico baja a solo 24 grados, lo que explica el intenso brillo y los destellos internos de las gemas talladas.

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

Caso del prisma de reflexión total: un prisma de vidrio con caras a cuarenta y cinco grados aprovecha que el ángulo crítico del vidrio–aire es de unos 41 grados. Los rayos inciden perpendicularmente a la primera cara, cruzan el prisma, golpean la hipotenusa a 45 grados —superior al ángulo crítico— y se reflejan totalmente, redirigiendo el haz noventa grados. Este diseño es más eficiente que un espejo metálico porque no hay absorción.

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

La ley de Snell conecta directamente con el [índice de refracción](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/refraccion/indice-de-refraccion), que define la magnitud [[n1]] y [[n2]] a partir de la velocidad de la luz en cada medio. Conceptualmente enlaza con el **principio de Fermat** (camino óptico estacionario), que unifica reflexión y refracción bajo un único principio variacional.

Hacia arriba en la ruta didáctica, la ley de Snell es prerrequisito para comprender las **lentes** (aplicación sucesiva a superficies curvas) y los **instrumentos ópticos** (microscopios, telescopios). Lateralmente, conecta con la **difracción** cuando las dimensiones de la interfaz se reducen, y con la **dispersión cromática** cuando se considera la dependencia del índice con la longitud de onda.

## Síntesis final

La ley de Snell traduce un principio de simetría —conservación de la componente tangencial del vector de onda— en una herramienta de cálculo directa que predice la dirección del rayo refractado y establece un umbral absoluto de reflexión total. Dominarla exige disciplina en la asignación de medios, la medida desde la normal y la verificación de existencia del rayo refractado antes de aplicar el arcoseno.
`;export{e as default};
