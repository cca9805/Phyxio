const e=`# Ejemplo tipo examen

## Enunciado

Un espejo concavo tiene un radio de curvatura de 0.40 m. Se coloca un objeto de 3.0 cm de altura a 0.30 m del vertice. Determina la posicion de la imagen, el aumento lateral y describe las caracteristicas de la imagen (real o virtual, derecha o invertida, aumentada o reducida).

## Datos

- Radio de curvatura del espejo: 0.40 m (concavo, positivo)
- Distancia del objeto al vertice: 0.30 m
- Altura del objeto: 3.0 cm
- Tipo de espejo: concavo

## Definicion del sistema

El sistema consta de un espejo esferico concavo y un objeto situado sobre el eje optico a una distancia [[d_o]] del vertice. La distancia focal [[f]] se obtiene a partir de [[R]] mediante la relacion focal-radio. La incognita principal es [[d_i]], de la cual se deriva [[M]].

## Modelo fisico

El fenomeno se describe mediante la **ecuacion del espejo**, que relaciona [[d_o]], [[d_i]] y [[f]]. El modelo es valido porque el objeto esta en la region paraxial y la apertura del espejo es pequena respecto a [[R]].

## Justificacion del modelo

La ecuacion del espejo es aplicable porque se cumplen sus hipotesis fundamentales: los rayos son paraxiales, la superficie es esferica y la reflexion es especular. El modelo dejaria de valer si la apertura fuera comparable al radio de curvatura, introduciendo aberracion esferica significativa.

## Resolucion simbolica

Primero obtenemos la distancia focal a partir del radio de curvatura:

{{f:distancia_focal_radio}}

Con [[f]] conocido, aplicamos la ecuacion del espejo para obtener [[d_i]]:

{{f:ecuacion_espejo}}

Despejando [[d_i]], obtenemos [[d_i]] igual a [[f]] multiplicado por [[d_o]] dividido por la diferencia [[d_o]] menos [[f]].

Finalmente calculamos el aumento lateral:

{{f:aumento_lateral}}

## Sustitucion numerica

Distancia focal: [[R]] igual a 0.40 m, por tanto [[f]] igual a 0.20 m.

Distancia de la imagen: con [[d_o]] igual a 0.30 m y [[f]] igual a 0.20 m, calculamos [[d_i]] igual a 0.20 multiplicado por 0.30 dividido por 0.30 menos 0.20. El numerador es 0.060 y el denominador 0.10, lo que da [[d_i]] igual a 0.60 m.

Aumento lateral: [[M]] igual a menos 0.60 dividido por 0.30, que da menos 2.0.

Altura de la imagen: 3.0 cm multiplicado por el modulo de [[M]] (2.0) da 6.0 cm.

## Validacion dimensional

La distancia focal tiene unidades de longitud: \`[L]\` ✓. La distancia de la imagen resulta en metros: \`[L]\` ✓. El aumento es adimensional: \`[L]/[L]\` igual a \`1\` ✓.

## Interpretacion fisica

El resultado muestra que [[d_i]] es positivo (0.60 m), lo que significa que la imagen es real y se forma delante del espejo. Physically, esto indica que los rayos reflejados convergen realmente en un punto y la imagen puede proyectarse sobre una pantalla.

El aumento [[M]] es menos 2.0. El signo negativo indica que la imagen esta invertida respecto al objeto: lo que estaba arriba aparece abajo. El modulo 2.0 indica que la imagen es dos veces mayor que el objeto (6.0 cm frente a 3.0 cm). Esto depende de la relacion entre [[d_o]] y [[f]]: como el objeto esta mas alla del foco pero no demasiado lejos, la imagen resulta aumentada. A medida que [[d_o]] aumenta mucho mas alla de [[f]], el modulo de [[M]] disminuye y la imagen se reduce.

Si el objeto se acercara al foco ([[d_o]] tendiendo a [[f]]), [[d_i]] creceria sin limite y [[M]] tambien, produciendo una imagen cada vez mas grande y lejana. Esta sensibilidad de la imagen a la posicion del objeto cerca del foco es la base del funcionamiento de reflectores y proyectores.

# Ejemplo de aplicacion real

## Contexto

Un dentista utiliza un espejo concavo de radio de curvatura 4.0 cm para examinar un diente. El espejo se sostiene a 1.5 cm de la superficie del diente. El profesional necesita saber si la imagen del diente sera aumentada y derecha para poder realizar la inspeccion visual adecuadamente.

## Estimacion fisica

Primero estimamos la distancia focal del espejo dental:

{{f:distancia_focal_radio}}

Con [[R]] igual a 0.040 m, la distancia focal es [[f]] igual a 0.020 m (2.0 cm). El objeto (diente) esta a [[d_o]] igual a 0.015 m (1.5 cm), que es menor que [[f]] (2.0 cm). Esto situa al objeto entre el foco y el vertice del espejo concavo, una configuracion que produce imagen virtual, derecha y aumentada.

Aplicando la ecuacion del espejo con [[d_o]] igual a 0.015 m y [[f]] igual a 0.020 m, el denominador ([[d_o]] menos [[f]]) es negativo (0.015 menos 0.020 igual a menos 0.005), lo que da [[d_i]] negativo: aproximadamente menos 0.060 m. La imagen es virtual, a 6.0 cm detras del espejo.

El aumento [[M]] resulta igual a menos (menos 0.060) dividido por 0.015, que es 4.0. Positivo y mayor que uno: imagen derecha y cuatro veces mayor que el diente real.

## Interpretacion

El resultado confirma que el espejo dental actua como una lupa por reflexion. Colocando el diente entre el foco y el vertice, el dentista obtiene una imagen virtual ampliada que le permite inspeccionar detalles que serian invisibles a simple vista. La imagen es derecha, lo que facilita la orientacion espacial durante el examen. Si el dentista alejara el espejo mas alla del foco, la imagen se invertiria y dejaria de ser util para la inspeccion directa. La eleccion de la distancia de trabajo esta dictada por la fisica del espejo, no solo por la comodidad del operador.
`;export{e as default};
