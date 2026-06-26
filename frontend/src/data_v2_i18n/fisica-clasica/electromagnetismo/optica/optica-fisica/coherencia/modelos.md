## Modelo ideal

El modelo ideal trata la coherencia como una propiedad escalar que compara una escala de memoria de fase [[longitud_de_coherencia]] con una diferencia de camino [[diferencia_de_camino_optico]]. La fuente se considera estable durante un tiempo [[tau_c]], y el montaje se interpreta mediante el contraste observable [[visibilidad_de_franjas]].

La simplificacion central es que una sola longitud de coherencia resume la estabilidad temporal de la fuente. Se ignoran vibraciones, ruido mecanico, anchura espacial de la fuente, desequilibrio de intensidades y respuesta detallada del detector.

## Hipótesis

- La fuente se modela con un tiempo de coherencia bien definido; si el espectro cambia durante la medida, [[longitud_de_coherencia]] deja de ser unico.
- Los caminos se recombinan de forma estable; si vibran, [[diferencia_de_camino_optico]] cambia durante la exposicion.
- El detector mide maximos y minimos comparables; si hay saturacion, [[visibilidad_de_franjas]] queda sesgada.
- Las intensidades de los haces son suficientemente equilibradas; si no, puede bajar la visibilidad aunque haya coherencia.
- El fondo luminoso esta controlado; si no, [[intensidad_minima]] aumenta artificialmente.

## Dominio de validez cuantitativo

El modelo es razonable cuando la diferencia de camino queda en la misma escala que [[longitud_de_coherencia]] o por debajo de ella. Como regla operativa, el contraste suele ser util si [[diferencia_de_camino_optico]] < 0.5 [[longitud_de_coherencia]], mientras que diferencias mucho mayores que [[longitud_de_coherencia]] borran las franjas en medidas temporales.

La visibilidad experimental debe quedar entre 0 < [[visibilidad_de_franjas]] y [[visibilidad_de_franjas]] < 1 para una lectura no ideal pero fisica. Un orden de magnitud tipico separa lamparas anchas, con [[longitud_de_coherencia]] micrometrica, de lasers estrechos, con escalas de metros o mas.

## Señales de fallo del modelo

El modelo falla si las franjas se mueven durante la medida, si la visibilidad cambia al tocar la mesa, si maximos y minimos dependen del tiempo de exposicion o si el patron mejora al equilibrar intensidades sin cambiar la fuente. Esas señales indican que el contraste no esta controlado solo por coherencia temporal.

Tambien falla si un montaje con [[diferencia_de_camino_optico]] muy superior a [[longitud_de_coherencia]] conserva contraste alto sin una explicacion adicional, como filtrado espectral fuerte o fuente laser estabilizada.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si hay fuente extensa, espectro ancho, vibraciones, fondo luminoso, detector no lineal o necesidad de reconstruir una funcion de correlacion completa. La transicion al modelo extendido ocurre cuando [[coherencia_relativa]] y [[visibilidad_de_franjas]] no explican por si solos el patron observado.

El modelo alternativo usa funciones de coherencia temporal y espacial, anchura espectral, distribucion angular de fuente, ruido y respuesta instrumental. Es mas complejo, pero distingue perdida de fase, perdida de alineacion y perdida por fondo.

## Comparación operativa

Modelo ideal: rapido, calculable y suficiente para comparar [[diferencia_de_camino_optico]] con [[longitud_de_coherencia]] y estimar contraste. Su ventaja es didactica; su limite es que condensa muchos mecanismos en una sola escala.

Modelo extendido: separa coherencia temporal, espacial e instrumental. Es necesario en interferometria precisa, tomografia de coherencia optica y fuentes parcialmente coherentes, pero exige mas parametros y datos experimentales.