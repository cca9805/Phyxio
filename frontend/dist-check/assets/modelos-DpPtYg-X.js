const e=`## Modelo ideal

El modelo ideal trata la onda como un **patron viajero** que conserva su forma durante la observacion. En esa situacion, la rapidez [[v]] se lee como avance del patron, no como movimiento local de cada punto material del medio.

La simplificacion central consiste en suponer que la misma fase puede identificarse en distintos instantes. Con esa premisa, [[lambda]] y [[f]] describen la repeticion regular, mientras [[Delta_x]] y [[Delta_t]] describen una medida directa del desplazamiento del patron.

## Hipótesis

- El medio es aproximadamente uniforme; si cambia durante la medida, [[v]] deja de ser una lectura unica.
- La onda mantiene una forma reconocible; si se deforma, seguir una cresta puede perder sentido.
- [[lambda]] y [[f]] pertenecen al mismo tren de ondas; si se mezclan datos, la rapidez calculada no describe una onda real.
- [[Delta_x]] mide avance horizontal del patron; si mide altura, se confunde propagacion con oscilacion local.
- [[Delta_t]] es positivo y corresponde al mismo seguimiento; si no, la razon distancia-tiempo pierde significado fisico.

## Dominio de validez cuantitativo

El modelo es razonable cuando el error de lectura es menor que 10 % y cuando la distancia seguida cubre una fraccion clara del patron. En una cuerda de aula, valores de orden de magnitud entre 1 m/s y 100 m/s pueden ser plausibles; en sonido ordinario, el orden de magnitud es cientos de m/s.

Para videoanalisis, conviene que el avance observado sea mayor que varias marcas de escala y que el intervalo supere la incertidumbre del cronometraje. Si 0.1 s < [[Delta_t]] y el patron no cambia de regimen, la estimacion suele ser mas estable que una lectura instantanea aislada.

## Señales de fallo del modelo

Una señal de fallo aparece cuando la rapidez obtenida por [[lambda]] y [[f]] difiere mucho de la obtenida por [[Delta_x]] y [[Delta_t]] sin una causa fisica clara. Otra señal es que la rapidez contradiga de forma extrema el medio observado.

Tambien falla si el perfil deja de ser reconocible, si hay reflexiones que mezclan ondas viajeras o si una onda estacionaria se interpreta como traslacion de todo el patron. En esos casos, el grafico puede seguir siendo bonito, pero ya no responde a la pregunta sobre propagacion simple.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si el pulso se deforma, si distintas frecuencias viajan de forma distinta o si el medio cambia durante el recorrido. Entonces debe distinguirse entre velocidad de fase, velocidad de grupo y transporte de energia.

El modelo alternativo no elimina [[v]], sino que pregunta que velocidad se esta midiendo. La transicion al modelo dispersivo conviene cuando una cresta interna y la envolvente del pulso no avanzan juntas. Cambiar a una descripcion de superposicion conviene cuando las reflexiones dominan la imagen.

## Comparación operativa

| Modelo | Que conserva | Ventaja | Limite |
|---|---|---|---|
| Ideal viajero | Forma y fase reconocible | Calcula [[v]] con pocos datos | Falla si el patron se deforma |
| Medida directa | Seguimiento de una cresta | Usa [[Delta_x]] y [[Delta_t]] en video | Falla si se sigue otra fase |
| Extendido | Diferencia fase, grupo o mezcla | Describe dispersion y pulsos reales | Requiere mas datos y mas criterio |

Operativamente, el modelo ideal es el primero que debe probarse. Si sus dos lecturas de rapidez no son coherentes, la comparacion indica si el problema esta en los datos, en la identificacion de fase o en la necesidad de un modelo mas rico.
`;export{e as default};
