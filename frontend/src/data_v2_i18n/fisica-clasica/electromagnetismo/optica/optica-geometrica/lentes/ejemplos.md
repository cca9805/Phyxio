# Ejemplo tipo examen


## Enunciado

Una lente convergente delgada de distancia focal 15 cm se coloca frente a un objeto de 4 cm de altura situado a 25 cm de la lente. Determinar la posicion de la imagen, el aumento lateral y la altura de la imagen. Indicar si la imagen es real o virtual, derecha o invertida, y amplificada o reducida.

## Datos

Distancia focal [[distancia_focal]] de 15 cm (positiva, lente convergente). Distancia del objeto [[d_o]] de 25 cm. Altura del objeto de 4 cm.

## Definición del sistema

El sistema es una unica lente delgada convergente en aire. El eje optico es horizontal, la luz se propaga de izquierda a derecha. El objeto es real y se encuentra mas alla del foco de la lente.

## Modelo físico

Se aplica el modelo de lente delgada en aproximacion paraxial. La formacion de la imagen se rige por la ecuacion de la lente delgada, que relaciona [[distancia_focal]], [[d_o]] y [[d_i]]. El aumento lateral [[aumento_lateral]] se obtiene como cociente de distancias con signo.

## Justificación del modelo

El modelo es valido porque el enunciado especifica lente delgada y los angulos implicados son pequenos (el objeto tiene 4 cm de altura a 25 cm de distancia, un angulo del orden de 9 grados). El modelo dejaria de ser valido si la lente fuera gruesa o si se usaran rayos con angulos mayores de 15 grados.

## Resolución simbólica

A partir de la ecuacion de la lente:

{{f:ecuacion_lente_delgada}}

se despeja [[d_i]]:

[[d_i]] se obtiene como el producto de [[distancia_focal]] por [[d_o]] dividido por la diferencia entre [[d_o]] y [[distancia_focal]].

El aumento lateral:

{{f:aumento_lateral}}

La altura de la imagen es el producto del modulo de [[aumento_lateral]] por la altura del objeto, con el signo de [[aumento_lateral]] indicando la orientacion.

## Sustitución numérica

Para [[d_i]]: el producto de 15 cm por 25 cm es 375 cm cuadrados; la diferencia 25 menos 15 es 10 cm. Dividiendo, [[d_i]] resulta 37.5 cm.

Para [[aumento_lateral]]: menos 37.5 dividido entre 25 da menos 1.5.

Altura de la imagen: modulo de 1.5 por 4 cm da 6 cm. El signo negativo de [[aumento_lateral]] indica que la imagen esta invertida.

## Validación dimensional

La distancia [[d_i]] se expresa en centimetros, coherente con las unidades de entrada. El aumento [[aumento_lateral]] es adimensional (cociente de dos longitudes). La altura de la imagen se expresa en centimetros, coherente con la altura del objeto.

## Interpretación física

La imagen se forma a 37.5 cm al otro lado de la lente. Es real porque [[d_i]] es positivo: puede proyectarse en una pantalla colocada a esa distancia. Es invertida porque [[aumento_lateral]] es negativo, lo que significa que los rayos se cruzan al atravesar la lente y la imagen aparece volteada respecto al objeto. Es amplificada porque el modulo de [[aumento_lateral]] es 1.5, mayor que uno: cada centimetro del objeto se traduce en 1.5 cm en la imagen.

Fisicamente, este resultado se explica porque el objeto esta entre una y dos distancias focales de la lente, la zona donde las imagenes reales resultan amplificadas. Si acercaramos el objeto al foco, [[d_i]] creceria sin limite y la imagen se agrandaria enormemente, situacion aprovechada en proyectores. Si lo alejaramos mas alla de dos focales, el modulo de [[aumento_lateral]] caeria por debajo de uno y la imagen se reduciria, como ocurre en el ojo humano al observar objetos lejanos.

La coherencia de signos confirma la validez del resultado: [[d_i]] positivo con [[aumento_lateral]] negativo corresponde al par imagen real invertida, exactamente lo que predice el trazado de rayos. Si hubieramos obtenido [[d_i]] positivo con [[aumento_lateral]] positivo, esa combinacion violaria la convencion de signos y senalaria un error algebraico. Este tipo de autocontrol es esencial en problemas de optica geometrica.

# Ejemplo de aplicación real


## Contexto

Un proyector de diapositivas utiliza una lente convergente de focal 80 mm para proyectar una diapositiva de 24 mm de altura sobre una pantalla situada a 3 metros de la lente. Se requiere estimar el tamano de la imagen proyectada y verificar si el modelo de lente delgada es aplicable.

## Estimación física

La estimacion procede por orden de magnitud. Si la pantalla esta a 3 m y la focal es 80 mm, el objeto (la diapositiva) debe estar ligeramente por encima de la focal. El cociente aproximado entre la distancia de pantalla (3000 mm) y la focal (80 mm) da un aumento de magnitud de aproximadamente 37. Por tanto la imagen tendra una escala del orden de 37 por 24 mm, es decir aproximadamente 900 mm de altura, cercano a un metro. Esta estimacion de orden de magnitud es razonable para un proyector de sala.

Para refinar: [[d_o]] resulta aproximadamente 82 mm (ligeramente mayor que [[distancia_focal]]). El aumento [[aumento_lateral]] es del orden de menos 37 (imagen invertida, que el proyector corrige colocando la diapositiva invertida). La imagen en pantalla mide aproximadamente 89 cm, valor razonable para proyeccion en aula.

El modelo de lente delgada es aplicable porque la lente del proyector tiene focal de 80 mm y su espesor tipico es del orden de 8 mm (una decima parte de la focal), dentro del limite de validez. La lente esta fabricada con vidrio de indice [[indice_de_refraccion_de_la_lente]] aproximadamente 1.5 y radio de primera superficie [[radio_de_curvatura_de_la_primera_superficie]] del orden de 60 mm, parametros que la ecuacion del fabricante conecta con la focal resultante.

## Interpretación

El resultado confirma que una lente de focal corta puede producir imagenes muy amplificadas cuando el objeto esta apenas por encima de la focal. La sensibilidad es alta: mover la diapositiva 1 mm cambia [[d_i]] significativamente, lo que explica por que los proyectores tienen mecanismos de enfoque fino. El modelo predice correctamente la escala de la proyeccion, aunque en la practica se usan sistemas de varias lentes para corregir aberraciones que el modelo simple no contempla.