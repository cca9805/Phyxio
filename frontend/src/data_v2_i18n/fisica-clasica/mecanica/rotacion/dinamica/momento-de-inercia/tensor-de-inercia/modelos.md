# Modelos fisicos del tensor de inercia

## Modelo ideal

El modelo ideal trata el cuerpo como rigido y fija un origen y unos ejes cartesianos respecto a los cuales la distribucion de masa no cambia durante el intervalo de estudio. En ese escenario, el tensor de inercia es una matriz simetrica constante y la relacion entre [[momento_angular]] y [[omega]] puede escribirse como un mapeo lineal. La utilidad del modelo ideal no es solo calcular: permite distinguir cuando el giro esta alineado con un eje principal y cuando aparecen acoplamientos entre componentes por culpa de [[producto_inercia]].

## Hipótesis

- El cuerpo es rigido y sus distancias internas no cambian de forma apreciable.
- El origen y los ejes de referencia estan bien definidos.
- La distribucion de masa permanece fija respecto a esos ejes.
- Las componentes fuera de la diagonal representan productos de inercia reales, no errores de signo o de eje.
- El paso a un eje principal se hace mediante una rotacion ortogonal, no cambiando arbitrariamente las magnitudes fisicas.

## Dominio de validez cuantitativo

El modelo matricial es razonable cuando la deformacion relativa satisface

{{f:rel_l_omega}}

y el cambio de orientacion del cuerpo durante el intervalo de calculo no obliga a recomputar el tensor en cada instante. Si la variacion geometrica cumple Delta r / R ge 0.01, o si la redistribucion de masa vuelve temporal a la matriz, ya no basta con un tensor constante calculado una sola vez. En laboratorio, un segundo criterio util es que el error experimental en la localizacion de masas o ejes sea menor que el 5 % si se quiere decidir con confianza si [[producto_inercia]] es realmente nulo.

## Señales de fallo del modelo

- [[momento_angular]] sale aparentemente paralelo a [[omega]] en el papel, pero la simulacion o la medida muestran precesion o desalineacion clara.
- [[producto_inercia]] cambia de signo solo por permutar ejes mal orientados o por usar un origen distinto sin avisar.
- La matriz deja de ser simetrica por errores de construccion o por mezclar componentes medidas en marcos distintos.
- Una correccion elastica, una bisagra movil o una masa deslizante modifica apreciablemente el tensor durante el proceso.

## Modelo extendido o alternativo

El primer modelo alternativo consiste en rotar a ejes principales. En ese marco, [[producto_inercia]] se anula y el tensor se diagonaliza. Ese cambio no altera el cuerpo fisico; solo elige un sistema de ejes que hace visible la estructura propia de la distribucion de masa. Conviene pasar a este modelo cuando se quiere interpretar con limpieza la formula `rel_l_omega` como relacion componente a componente entre momentos principales y velocidades angulares principales.

El segundo modelo extendido aparece cuando el cuerpo no puede tratarse como rigido o cuando el tensor cambia en el tiempo. Entonces ya no basta con una matriz constante: hace falta un tensor dependiente del tiempo, un modelo deformable o incluso una formulacion completa de dinamica rotacional en cuerpo rigido no alineado. La transicion debe hacerse de forma explicita: si los productos de inercia dependen del estado del sistema, hay que cambiar al modelo temporal antes de seguir calculando como si nada hubiera cambiado.

## Comparación operativa

El modelo en ejes cartesianos arbitrarios es el mejor para detectar por que [[momento_angular]] y [[omega]] no estan alineados. El modelo en ejes principales es mejor para interpretar estabilidad, energia y magnitudes propias. El modelo temporal o deformable es el correcto cuando la geometria cambia mientras el sistema evoluciona. En la practica, conviene cambiar de modelo cuando la representacion actual oculta la causa del fenomeno: si el marco arbitrario oculta los modos propios, pasar a ejes principales; si el modelo rigido oculta cambios reales de geometria, pasar a un tensor dependiente del tiempo.