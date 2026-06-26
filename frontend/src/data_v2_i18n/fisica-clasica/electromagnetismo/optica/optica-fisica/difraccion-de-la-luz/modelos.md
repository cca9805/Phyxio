## Modelo ideal

El modelo estándar para el análisis cuantitativo de este leaf describe la **difracción de Fraunhofer de una sola rendija en aproximación paraxial**. En este modelo, el haz de luz se considera una onda electromagnética plana coherente y monocromática que incide perpendicularmente sobre una rendija rectangular infinitamente larga y uniforme de ancho micrómetro [[ancho_de_la_rendija]]. El patrón de difracción resultante se proyecta sobre una pantalla de observación plana paralela colocada a una distancia lejana [[distancia_a_la_pantalla]].

La simplificación central consiste en que la difracción ocurre en el régimen de campo lejano (Fraunhofer), donde los frentes de onda difractados que llegan a cada punto de la pantalla pueden aproximarse con excelente precisión como frentes de onda planos en lugar de esféricos. Adicionalmente, el modelo paraxial simplifica la proyección geométrica de la posición angular sobre la pantalla plana mediante la aproximación lineal de ángulos pequeños para el primer mínimo, resultando en que la tangente y el seno del ángulo se sustituyen directamente por el ángulo [[theta]] medido en radianes.

## Hipótesis

- **Difracción de campo lejano (Fraunhofer)**: la pantalla de observación se ubica extremadamente alejada de la rendija. Los caminos ópticos desde cualquier punto de la rendija a un punto dado en la pantalla son líneas casi paralelas.
  - Si se viola: se entra en el régimen de campo cercano de Fresnel, donde los frentes de onda son notablemente esféricos, lo que genera un patrón central complejo y altamente inestable con fluctuaciones de intensidad.
- **Incidencia normal y frente de onda plano**: el haz de luz incidente es una onda plana que impacta de forma perfectamente ortogonal al plano de la rendija.
  - Si se viola (incidencia oblicua): el patrón de difracción sobre la pantalla se desplaza lateralmente y se vuelve asimétrico.
- **Monocromaticidad y coherencia espacial perfecta**: la luz incidente posee una única longitud de onda fija [[lambda]], y la fase está perfectamente coordinada en todo el frente de onda.
  - Si se viola (luz blanca policromática): cada componente cromático se difracta a un ángulo diferente, lo que destruye los mínimos de total oscuridad y genera franjas irisadas multicolor en los bordes.
- **Aproximación paraxial de ángulos pequeños**: el ángulo de desviación angular es lo suficientemente pequeño como para asumir que el seno, la tangente y el propio ángulo [[theta]] tienen valores prácticamente coincidentes cuando se miden en radianes.
  - Si se viola (rendija excesivamente estrecha): la dispersión angular es tan abierta que la relación lineal subestima de forma apreciable la anchura física real del máximo central sobre la pantalla plana.
- **Rendija rectangular unidimensional perfecta**: la rendija es perfectamente uniforme en su anchura [[ancho_de_la_rendija]], y su longitud vertical es infinitamente mayor que su anchura, permitiendo analizar la difracción de forma estrictamente unidimensional lateral.
  - Si se viola (abertura circular o irregular): el patrón pierde su carácter lineal y adquiere simetría de círculos radiales concéntricos (disco de Airy).

## Dominio de validez cuantitativo

El modelo paraxial de Fraunhofer es cuantitativamente válido siempre que se cumplan simultáneamente las siguientes tres desigualdades geométricas y físicas:

1. **Aproximación de ángulos pequeños**: valor absoluto de [[theta]] < 0.1 rad. Esto equivale a que el ángulo del primer mínimo de difracción sea estrictamente inferior a unos 5.7 grados.
2. **Criterio de campo lejano de Fraunhofer**: [[distancia_a_la_pantalla]] debe ser mayor que el cociente entre el cuadrado de [[ancho_de_la_rendija]] y [[lambda]]. En términos operativos de laboratorio, esto exige que [[distancia_a_la_pantalla]] sea mayor que 100 veces [[ancho_de_la_rendija]].
3. **Límite de difracción escalar**: [[ancho_de_la_rendija]] debe ser mayor que 10 veces [[lambda]]. El ancho de la rendija debe superar en al menos diez veces la longitud de onda de la luz para garantizar que las aproximaciones de la teoría ondulatoria escalar de la luz sigan siendo físicamente válidas sin necesidad de resolver las complejas ecuaciones vectoriales de Maxwell.

## Señales de fallo del modelo

- **El ancho del máximo central medido [[ancho_del_maximo_central]] es visiblemente mayor que el calculado**: esto ocurre cuando la rendija [[ancho_de_la_rendija]] es extremadamente estrecha. La dispersión real es tan grande que el seno del ángulo no puede aproximarse linealmente, requiriendo el uso de la relación trigonométrica exacta entre [[theta]], [[lambda]] y [[ancho_de_la_rendija]].
- **Los mínimos no presentan total oscuridad física**: si la franja oscura no es completamente negra sino que conserva intensidad residual de luz, indica que la luz incidente no es completamente coherente o contiene múltiples longitudes de onda mezcladas que rellenan parcialmente la banda de cancelación.
- **El patrón cambia significativamente de forma al alejar o acercar la pantalla**: si al desplazar longitudinalmente la pantalla el patrón experimenta transiciones de máximos y mínimos locales en su centro en lugar de expandirse simétricamente de forma lineal, el sistema está operando en la zona de Fresnel (campo cercano), indicando que la pantalla está demasiado cerca de la rendija.
- **Presencia de franjas asimétricas o bordes borrosos**: si los picos laterales de intensidad a la izquierda y derecha de la pantalla no son idénticos o muestran distorsiones, la rendija no es uniforme o sus bordes presentan rugosidad y asimetrías microscópicas que alteran la coherencia espacial del haz.

## Modelo extendido o alternativo

Cuando los límites paraxiales o de Fraunhofer se superan en condiciones reales, es necesario realizar una transición hacia modelos más rigurosos. Se definen dos alternativas principales: el **modelo de Fraunhofer exacto no paraxial** y el **modelo de difracción de Fresnel (campo cercano)**.

En el modelo de Fraunhofer exacto, se elimina la hipótesis de ángulos pequeños. La posición angular del primer mínimo se determina mediante la relación trigonométrica real entre [[theta]], [[lambda]] y [[ancho_de_la_rendija]], y su posición física proyectada sobre la pantalla plana a distancia [[distancia_a_la_pantalla]] se calcula utilizando la tangente trigonométrica exacta.
Este modelo es esencial cuando la rendija es del orden de pocos micrómetros, provocando ángulos de dispersión amplios.

En el modelo de difracción de Fresnel, la pantalla se coloca en la zona de campo cercano, cuando [[distancia_a_la_pantalla]] es menor o comparable con la distancia de Fresnel construida a partir de [[ancho_de_la_rendija]] y [[lambda]]. Las ondas secundarias de Huygens deben integrarse manteniendo los términos cuadráticos de la distancia, lo que da lugar a una distribución caracterizada por las integrales de Fresnel. El patrón en la pantalla ya no muestra un único máximo central definido, sino que varía entre un pico brillante y un mínimo oscuro en el eje central según la distancia exacta, dibujando una silueta con múltiples máximos secundarios muy oscilantes.

Cuando conviene pasar al modelo exacto no paraxial: cuando la relación entre [[lambda]] y [[ancho_de_la_rendija]] supera el umbral 0.05, lo que causa que el error cometido por la aproximación lineal en el cálculo del ancho del máximo central supere el cinco por ciento de error admisible.

Cuando conviene pasar al modelo de difracción de Fresnel: cuando [[distancia_a_la_pantalla]] es inferior al límite de Fresnel o resulta menor que 100 veces [[ancho_de_la_rendija]] para la mayoría de rendijas de laboratorio típicas, haciendo inviable la asunción de ondas incidentes planas en la pantalla.

## Comparación operativa

| Criterio | Modelo de Fraunhofer paraxial | Modelo exacto no paraxial | Modelo de Fresnel (campo cercano) |
|---|---|---|---|
| Precisión con rendijas anchas | Excelente | Excelente | Baja (requiere campo lejano) |
| Precisión con rendijas muy estrechas | Baja (subestima el ancho) | Excelente | Baja (campo cercano) |
| Precisión a distancias de pantalla cortas | Nula | Nula | Excelente |
| Complejidad matemática | Muy baja (algebraica simple) | Baja (trigonométrica elemental) | Alta (integrales de Fresnel y numérica) |
| Relación del ancho [[ancho_del_maximo_central]] con [[distancia_a_la_pantalla]] | Perfectamente lineal | Ligeramente no lineal | No lineal y oscilatoria compleja |
| Geometría de frentes de onda | Onda plana ideal | Onda plana ideal | Onda esférica en pantalla |
| Rango típico en laboratorio | [[distancia_a_la_pantalla]] mayor que 1.0 m, [[ancho_de_la_rendija]] cerca de 0.1 mm | [[distancia_a_la_pantalla]] mayor que 1.0 m, [[ancho_de_la_rendija]] menor que 0.01 mm | [[distancia_a_la_pantalla]] menor que 0.1 m, [[ancho_de_la_rendija]] cerca de 0.5 mm |