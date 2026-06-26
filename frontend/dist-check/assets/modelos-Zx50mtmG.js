const e=`## Modelo ideal

El modelo ideal de espejos supone que la superficie reflectante es **perfectamente esferica**, que todos los rayos incidentes son **paraxiales** (forman angulos pequenos con el eje optico) y que la reflexion es **especular** sin scattering ni absorcion. En este marco, la ecuacion del espejo relaciona [[d_o]], [[d_i]] y [[f]] de forma exacta, y el aumento lateral [[M]] describe la relacion de tamano y orientacion entre imagen y objeto.

Las magnitudes que se conservan son [[d_o]] como parametro de entrada, [[f]] y [[R]] como parametros del sistema y [[d_i]] junto con [[M]] como salidas principales. La relacion entre focal y radio permanece exacta dentro de la aproximacion paraxial.

## Hipotesis

- Los rayos son **paraxiales**: forman angulos menores de unos 10 grados con el eje optico. Violar esta hipotesis introduce aberracion esferica, desplazando la posicion real de la imagen respecto a la prediccion de la ecuacion del espejo.

- La superficie es **perfectamente esferica** y libre de defectos. Irregularidades de fabricacion desvian los rayos de sus trayectorias calculadas, distorsionando la imagen. En espejos de precision se toleran desviaciones de fraccion de longitud de onda.

- La reflexion es **especular**: toda la luz incidente se refleja siguiendo la ley de la reflexion sin difusion. En superficies rugosas la reflexion difusa distribuye la luz en todas las direcciones y no se forma imagen definida.

- El medio entre el objeto y el espejo es **homogeneo** (tipicamente aire). Si el indice de refraccion varia (por ejemplo, gradientes termicos), los rayos se curvan y la posicion de la imagen cambia.

## Dominio de validez cuantitativo

La ecuacion del espejo es precisa cuando la razon entre la semiapertura del espejo y el radio de curvatura cumple h/R < 0.1, lo que mantiene el error por aberracion esferica por debajo del 1 % en la posicion de la imagen. Para espejos de laboratorio tipicos con semiaperturas de 1 a 3 cm y radios de 10 a 50 cm, esta condicion se cumple holgadamente.

El aumento lateral mantiene su validez cuando el objeto es suficientemente pequeno para que todos sus puntos cumplan la condicion paraxial. Para objetos cuya altura supera el 10 por ciento del radio de curvatura, la imagen presenta distorsion de curvatura de campo.

## Senales de fallo del modelo

- La imagen observada es borrosa o alargada en la direccion radial en lugar de un punto nitido: indica aberracion esferica por apertura excesiva.

- La imagen tiene forma distorsionada (acolchada o en barril) para objetos extensos: indica aberraciones de orden superior fuera de la aproximacion paraxial.

- La posicion de la imagen medida difiere mas del 5 por ciento de la predicha: indica que los rayos no son paraxiales o que la superficie tiene defectos.

- Se forma una imagen doble o fantasma: indica reflexion en mas de una superficie (espejo con recubrimiento parcial o lente-espejo).

## Modelo extendido o alternativo

Para corregir la aberracion esferica se usan **espejos parabolicos**, cuya superficie es un paraboloide de revolucion que converge todos los rayos paralelos al eje en un unico foco exacto. Sin embargo, los espejos parabolicos introducen **coma** para fuentes fuera del eje, donde la imagen de una estrella puntual toma forma de cometa.

Para sistemas con multiples superficies se emplea el **trazado de rayos** computacional, que sigue cada rayo individualmente a traves de todas las reflexiones y refracciones sin recurrir a la aproximacion paraxial. Este metodo es estandar en el diseno optico profesional.

Cuando conviene pasar al modelo extendido: cuando la semiapertura supera el 10 por ciento del radio, cuando se trabaja fuera del eje optico o cuando se requiere correccion de aberraciones para aplicaciones de alta resolucion.

## Comparacion operativa

| Criterio | Modelo ideal (ecuacion del espejo) | Modelo extendido (parabolico o trazado de rayos) |
|---|---|---|
| Tipo de superficie | Esferica | Parabolica o arbitraria |
| Precision para rayos paraxiales | Alta | Igual o superior |
| Aberracion esferica | No corregida | Eliminada (parabolico) o compensada |
| Complejidad de calculo | Baja, una formula algebraica | Media-alta, trazado numerico |
| Fuentes fuera del eje | No contempladas | Evaluadas rayo a rayo |
| Rango habitual de aplicacion | Laboratorio didactico, espejos de uso domestico | Telescopios, sistemas de concentracion, diseno optico industrial |
`;export{e as default};
