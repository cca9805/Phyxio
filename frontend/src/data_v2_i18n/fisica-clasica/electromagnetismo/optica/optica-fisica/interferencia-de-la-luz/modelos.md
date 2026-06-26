## Modelo ideal

El modelo ideal de interferencia de doble rendija describe dos rendijas puntuales separadas por una distancia [[separacion_entre_rendijas]], iluminadas por una fuente monocromática con longitud de onda [[lambda]] perfectamente definida. La luz es completamente coherente, con relación de fase estable entre ambos haces. Las amplitudes en ambas rendijas son iguales y la polarización es idéntica y paralela en ambos haces emergentes. La pantalla plana está ubicada a distancia [[distancia_a_la_pantalla]] mucho mayor que [[separacion_entre_rendijas]].

Bajo estas condiciones, la intensidad en la pantalla sigue una distribución cosinusoidal cuadrada que predice franjas de igual intensidad y separación uniforme, con visibilidad perfecta. La posición de cada máximo depende linealmente del orden [[orden_de_la_franja]] según la relación [[y_m]] = [[orden_de_la_franja]] × [[lambda]] × [[distancia_a_la_pantalla]] / [[separacion_entre_rendijas]], y la separación entre franjas consecutivas es constante e igual a [[lambda]] × [[distancia_a_la_pantalla]] / [[separacion_entre_rendijas]].

## Hipótesis

Las hipótesis del modelo ideal son las siguientes. Las rendijas se consideran fuentes puntuales sin ancho finito. Si las rendijas tienen ancho comparable a [[separacion_entre_rendijas]], aparece difracción que modula la envolvente del patrón de interferencia, atenuando los órdenes laterales. Se asume coherencia perfecta: la fase relativa entre los haces es constante en el tiempo. Si la coherencia es parcial, la visibilidad del patrón disminuye y el contraste entre franjas se reduce. Se considera una única longitud de onda [[lambda]]. Si la luz es policromática, cada longitud de onda produce un patrón con separación diferente, resultando en franjas coloreadas que pierden definición fuera del centro. Se asume la aproximación de ángulos pequeños. Si el ángulo de observación es grande, las franjas dejan de estar equiespaciadas y la fórmula de posición pierde precisión. Se asume polarización paralela en ambos haces. Si las polarizaciones son perpendiculares, no hay interferencia y el patrón desaparece.

## Dominio de validez cuantitativo

El modelo ideal es válido cuando la separación entre rendijas satisface la relación 10 × [[lambda]] < [[separacion_entre_rendijas]] < 1000 × [[lambda]]. Si [[separacion_entre_rendijas]] es menor que 10 longitudes de onda, los patrones de difracción de cada rendija se solapan fuertemente. Si [[separacion_entre_rendijas]] supera 1000 longitudes de onda, las franjas están tan juntas que se vuelven indistinguibles para detectores ordinarios.

La distancia a la pantalla debe cumplir [[distancia_a_la_pantalla]] > 10 × [[separacion_entre_rendijas]] para que la aproximación de ángulos pequeños tenga error menor al 1%. El orden observable está limitado por la condición [[orden_de_la_franja]] < [[separacion_entre_rendijas]] / [[lambda]], ya que para órdenes superiores el ángulo de observación se vuelve significativo y la fórmula lineal pierde precisión.

La coherencia espacial de la fuente debe satisfacer que el ángulo subtendido por la fuente sea menor que [[lambda]] / [[separacion_entre_rendijas]]. Si no se cumple, los patrones de diferentes partes de la fuente se desfasan y el contraste disminuye. Para [[lambda]] = 600 nm y [[separacion_entre_rendijas]] = 0.2 mm, la relación [[separacion_entre_rendijas]] / [[lambda]] = 333 permite observar órdenes hasta aproximadamente 10 a 15 antes de que la difracción limite la intensidad.

## Señales de fallo del modelo

El modelo ideal deja de ser fiable cuando se observan franjas de intensidad desigual, lo que indica desbalance de intensidad entre rendijas, difracción significativa o polarización parcial. Si el contraste decrece con el orden, la causa es el ancho espectral finito de la fuente, el ancho finito de las rendijas o aberraciones del sistema óptico.

Si no se observa ningún patrón definido, puede deberse a falta de coherencia entre las fuentes, polarizaciones perpendiculares, vibraciones mecánicas rápidas o luz de fondo excesiva. Si la separación entre franjas varía significativamente a lo largo de la pantalla, la aproximación de ángulos pequeños está fallando para los órdenes altos o la pantalla no es perpendicular al eje óptico.

## Modelo extendido o alternativo

Existen extensiones progresivas para corregir las limitaciones del modelo ideal. La transición a un modelo extendido se recomienda cuando las condiciones experimentales exceden los límites de validez cuantitativos del modelo ideal.

Cuando conviene pasar al modelo extendido: cuando las rendijas tienen ancho finito comparable a su separación, pasar al modelo con difracción; cuando la fuente tiene ancho espectral significativo, cambiar al modelo con coherencia parcial; cuando se observan más de 10 órdenes, pasar al modelo exacto sin aproximación de ángulos pequeños.

El modelo con difracción incluye el ancho finito de las rendijas. La intensidad resultante es el producto del patrón de interferencia de doble rendija por la envolvente de difracción de rendija simple. Este modelo predice una envolvente que modula los máximos de interferencia, máximos faltantes cuando coinciden con mínimos de difracción, y pérdida de visibilidad en los órdenes altos.

El modelo de múltiples rendijas extiende el análisis a redes de difracción con un número grande de rendijas equiespaciadas. Los máximos se vuelven más estrechos y brillantes conforme aumenta el número de rendijas, con máximos secundarios débiles entre los principales. La resolución espectral es proporcional al número total de rendijas iluminadas, siendo la base de los espectrómetros de red.

El modelo con coherencia parcial describe la interferencia cuando la fuente tiene extensión espacial o ancho espectral finito. La visibilidad del patrón depende del módulo de la función de coherencia compleja, permitiendo caracterizar las propiedades estadísticas de la fuente.

## Comparación operativa

El modelo ideal es suficiente para cálculos de estimación rápida, ejercicios de laboratorio y análisis de los primeros órdenes de interferencia con rendijas estrechas. Proporciona resultados con error menor al 5% cuando el ancho de rendija es inferior al 10% de la separación y solo se observan los primeros 5 a 10 órdenes.

La transición al modelo con difracción es necesaria cuando se requiere predecir la intensidad relativa de los diferentes órdenes, cuando se buscan máximos faltantes o cuando el diseño del sistema óptico exige precisión en todo el rango angular. El modelo completo con coherencia parcial es indispensable para fuentes extendidas, para diseño de interferómetros de alta resolución y para aplicaciones en metrología óptica donde la visibilidad del patrón es el observable principal.