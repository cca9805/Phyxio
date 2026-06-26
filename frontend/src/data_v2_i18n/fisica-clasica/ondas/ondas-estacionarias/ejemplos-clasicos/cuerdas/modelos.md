# Modelos

## Modelo ideal

El modelo ideal trata la cuerda como un medio unidimensional, flexible, homogeneo y sometido a tension uniforme. La perturbacion es transversal y de amplitud pequena, de modo que la geometria de la cuerda apenas cambia la tension media. En ese regimen, [[T]] y [[mu]] determinan la rapidez [[v]], y los extremos fijos seleccionan valores enteros de [[n]].

La cuerda no se modela como una varilla rigida ni como un resorte global. Se modela como una distribucion continua de masa que transmite una perturbacion local. Por eso la frecuencia modal [[f_n]] no depende solo de "cuanta cuerda hay", sino del balance entre tramo vibrante, traccion e inercia lineal.

## Hipótesis

- La cuerda tiene [[mu]] aproximadamente uniforme en todo el tramo vibrante.
- La tension [[T]] es casi constante durante la oscilacion.
- Los extremos se comportan como nodos fijos.
- La amplitud transversal es pequena frente a [[L]].
- La rigidez flexional y el rozamiento son despreciables en primera aproximacion.
- El modo [[n]] es entero y se identifica con el numero de vientres visibles.

Estas hipotesis permiten usar una velocidad unica [[v]] y una familia discreta de modos. Si una de ellas falla, el calculo puede seguir dando un numero, pero ese numero deja de representar fielmente una cuerda real.

## Dominio de validez cuantitativo

Como criterio operativo, el modelo funciona bien cuando la amplitud maxima es menor que unos pocos puntos porcentuales de [[L]], cuando la cuerda no cambia apreciablemente de tension al vibrar y cuando la longitud de onda modal [[lambda_n]] es mucho mayor que el grosor de la cuerda. En laboratorio introductorio, los primeros modos suelen cumplir estas condiciones.

Tambien conviene revisar la escala de frecuencia. Criterio cuantitativo: amplitud relativa < 0.05 del tramo vibrante y modo bajo, normalmente [[n]] entre 1 y 6, son condiciones razonables de aula. Orden de magnitud: para cuerdas visibles de decenas de centimetros a un metro, una [[f_n]] entre 10 Hz y 10³ Hz es razonable. Si el resultado cae en megahertz o en milihertz para una cuerda ordinaria, el dominio cuantitativo esta avisando de una unidad mal usada o de un parametro mecanico imposible.

## Señales de fallo del modelo

Una primera senal de fallo aparece cuando los modos altos no son multiplos casi regulares del fundamental. Esto suele indicar rigidez flexional o condiciones de apoyo no ideales. Otra senal aparece si el patron estacionario se deforma, se desplaza o se apaga antes de que pueda leerse con claridad.

Tambien falla si [[T]] cambia durante la oscilacion, si [[mu]] varia de forma importante a lo largo de la cuerda, o si el extremo no se comporta como nodo. En esos casos, [[f_n]] deja de ser una lectura limpia del modelo ideal y pasa a depender de detalles constructivos.

## Modelo extendido o alternativo

Un modelo extendido incorpora rigidez de la cuerda, amortiguamiento, apoyos con impedancia finita o tension dependiente de la amplitud. En instrumentos reales, estas correcciones explican inarmonicidad, perdida de energia y cambios de timbre. El patron sigue siendo reconocible como estacionario, pero sus frecuencias dejan de ajustarse exactamente a la serie ideal.

Otra alternativa es un modelo experimental de resonancia: se barre la frecuencia externa y se mide la amplitud de respuesta. Ese enfoque no presupone de entrada todos los parametros mecanicos; identifica los picos de [[f_n]] y despues interpreta sus desviaciones.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---|---|---|
| Cuerda | Flexible y uniforme | Puede tener rigidez, cambios locales o disipacion |
| Extremos | Nodos fijos perfectos | Apoyos con movimiento pequeno o contacto real |
| Modos | Serie casi armonica | Modos desplazados o ensanchados |
| Uso | Calculo basico de [[v]], [[lambda_n]] y [[f_n]] | Afinacion fina, instrumentos reales y mediciones |

La transicion al modelo extendido no invalida la idea principal. La refina cuando la cuerda real muestra efectos que el modelo ideal habia decidido ignorar.
