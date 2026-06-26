## Modelo ideal

El modelo ideal trata cada lente del instrumento optico como una **lente delgada perfecta** inmersa en aire, sin espesor, sin aberraciones cromaticas ni esfericas y con transmision total de luz. Los rayos cumplen la ley de Snell en la aproximacion de angulos pequenos y la formacion de imagen se describe mediante la ecuacion de la lente delgada. En este marco, el aumento angular de la lupa depende unicamente de [[d_pp]] y [[f_lupa]], y el aumento del microscopio se reduce al producto de los cocientes [[longitud_del_tubo]] dividido entre [[f_obj]] y [[d_pp]] dividido entre [[f_oc]]. El modelo ignora la difraccion, la dispersion cromatica y las perdidas por reflexion en las superficies.

## Hipótesis

- Los angulos de incidencia de todos los rayos respecto al eje optico son pequenos (aproximacion paraxial).
- El espesor de cada lente es despreciable frente a su distancia focal y a las distancias de trabajo.
- El medio entre las lentes y el ojo es aire con indice de refraccion unitario.
- Las superficies de las lentes son esfericas perfectas sin defectos de fabricacion.
- El observador tiene el ojo acomodado al infinito (ojo relajado) al usar la lupa o el ocular.
- Si alguna de estas condiciones se viola, la imagen se degrada por aberraciones y el aumento real se desvia del predicho.

## Dominio de validez cuantitativo

La ecuacion del aumento angular es precisa cuando la semiapertura de la lente cumple h/R < 0.1, lo que mantiene el error de aberracion esferica por debajo del 1 % en la posicion de la imagen. Para un microscopio con longitud de tubo estandar de 0.16 m y focales del objetivo entre 0.002 m y 0.05 m, las formulas paraxiales son fiables si la apertura numerica no supera 0.65, valor a partir del cual la aberracion de tercer orden excede el 5 % del tamano de la mancha de Airy.

## Señales de fallo del modelo

Cuando la imagen observada a traves del instrumento muestra **halos cromaticos** (bordes coloreados) en objetos de alto contraste, la hipotesis de indice de refraccion unico falla. Si al aumentar la apertura del objetivo la imagen pierde nitidez en los bordes mientras el centro sigue definido, la aberracion esferica domina y la aproximacion paraxial deja de ser valida. Otro indicador es el **aumento vacio**: si al elevar el aumento total la imagen no revela mas detalle y solo se amplia una mancha borrosa, se ha superado el limite de difraccion y el modelo geometrico no puede explicar la degradacion observada.

## Modelo extendido o alternativo

El modelo extendido incorpora lentes gruesas, coeficientes de aberracion de Seidel y dispersion cromatica del vidrio. En lugar de una unica focal, cada lente se describe con planos principales y distancias focales efectivas que dependen de la longitud de onda. Los microscopios de investigacion usan objetivos acromaticos o apocromaticos diseñados para minimizar la aberracion cromatica en dos o tres longitudes de onda. Cuando conviene pasar al modelo extendido: cuando la apertura numerica del objetivo supera 0.65 o cuando se observan halos de color que afectan la medida. Cambiar a este modelo requiere calcular la aberracion cromatica longitudinal y corregirla con combinaciones de vidrios de distinta dispersion (dobletes acromaticos).

## Comparación operativa

| Criterio | Modelo paraxial (ideal) | Modelo con aberraciones (extendido) |
|---|---|---|
| Precision | Alta para aperturas pequenas | Alta en todo el rango de apertura |
| Complejidad | Baja, ecuaciones algebraicas simples | Alta, requiere trazado de rayos y datos del vidrio |
| Rango de aplicacion | Lupas, microscopios escolares, telescopios de baja potencia | Microscopios de investigacion, telescopios astronomicos |
| Variables adicionales | Ninguna | Coeficientes de Seidel, dispersiones del vidrio, espesor de las lentes |
| Limite de validez | Apertura numerica menor que 0.65 | Sin limite geometrico intrinseco, limitado por difraccion |