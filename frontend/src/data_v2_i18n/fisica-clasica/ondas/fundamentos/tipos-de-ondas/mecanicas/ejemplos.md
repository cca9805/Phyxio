# Ejemplo tipo examen

## Enunciado

Una cuerda tensa produce una onda transversal periodica. La distancia entre dos crestas consecutivas es 0.80 m y la frecuencia de oscilacion es 12 Hz. En otro ensayo con la misma cuerda se mide una tension de 48 N y una densidad lineal de 0.50 kg/m. Estima la rapidez del patron con la lectura de [[lambda]] y [[f]], compara con el modelo de cuerda y explica que representa esa rapidez.

## Datos

Los datos del patron son [[lambda]] igual a 0.80 m y [[f]] igual a 12 Hz. Los datos del medio en el segundo ensayo son [[T]] igual a 48 N y [[mu]] igual a 0.50 kg/m. La magnitud buscada es [[v]]. La amplitud [[A]] no se necesita para calcular la rapidez si la onda es pequena, pero ayuda a recordar que un punto de la cuerda se desplaza localmente mientras la forma avanza.

## Definición del sistema

El sistema es un tramo de cuerda que se aproxima como uniforme y tenso. No se estudia la mano que genera la perturbacion ni el soporte final. Se observa una region donde el patron es periodico y las pendientes son pequeñas. Esa definicion permite separar el movimiento local de la cuerda de la propagacion de la forma de onda.

## Modelo físico

Se aplican dos modelos compatibles. El primero es la relacion general de onda periodica, que conecta [[lambda]], [[f]] y [[v]]. El segundo es el modelo de cuerda ideal, donde [[T]] aporta restauracion y [[mu]] aporta inercia. Si ambos resultados tienen el mismo orden de magnitud, el enunciado es coherente con una onda mecanica en cuerda.

## Justificación del modelo

La justificacion fisica es que hay un medio material claro: la cuerda. Se asume un modelo ideal porque la perturbacion es pequeña, la cuerda se considera uniforme, la tension se mantiene constante y el rozamiento se desprecia durante la observacion. La perturbacion es transversal, el enunciado habla de crestas repetidas y no menciona disipacion fuerte ni grandes deformaciones. Por eso se puede usar una lectura periodica de [[lambda]] y [[f]]. Ademas, el segundo ensayo da propiedades propias de una cuerda tensa, [[T]] y [[mu]], que son justo las variables necesarias para explicar por que el medio transmite la onda con cierta rapidez.

## Resolución simbólica

Primero se calcula la rapidez desde la repeticion espacial y temporal.

{{f:onda_mecanica_velocidad}}

Despues se calcula la rapidez esperada para una cuerda ideal usando las propiedades del medio.

{{f:velocidad_cuerda}}

La comparacion simbolica separa dos preguntas: como se repite el patron y que propiedades del medio sostienen esa propagacion.

## Sustitución numérica

Con [[lambda]] de 0.80 m y [[f]] de 12 Hz, la rapidez del patron queda cerca de 9.6 m/s. Con [[T]] de 48 N y [[mu]] de 0.50 kg/m, la rapidez de cuerda queda cerca de 9.8 m/s. La diferencia es pequena para una estimacion escolar, asi que los datos son compatibles.

## Validación dimensional

La relacion de patron combina `[L]` con `[T⁻¹]` y produce `[L T⁻¹]`. La relacion de cuerda combina `[M L T⁻²]` con `[M L⁻¹]`; el cociente tiene dimension `[L² T⁻²]` y su raiz da `[L T⁻¹]`. La validacion confirma que se esta calculando rapidez y no amplitud ni energia.

## Interpretación física

El resultado indica que la forma de la onda avanza unos diez metros cada segundo. No significa que un punto marcado de la cuerda recorra diez metros por segundo a lo largo de la cuerda. Ese punto oscila localmente con amplitud [[A]]. La coherencia entre las dos estimaciones muestra que la rapidez del patron puede leerse desde el dibujo y tambien explicarse desde las propiedades mecanicas del medio.

# Ejemplo de aplicación real

## Contexto

En un laboratorio se quiere ajustar una cuerda para que una señal mecanica llegue mas rapido de un extremo a otro. El tecnico puede aumentar la tension o cambiar la cuerda por otra mas ligera. La pregunta practica no es solo cuanto vale [[v]], sino que variable del medio conviene modificar y que limite de seguridad aparece.

## Estimación física

Antes de calcular, la estimacion fisica se hace por orden de magnitud y por escala del medio. Se espera que aumentar [[T]] eleve la rapidez porque la cuerda recupera el equilibrio con mas fuerza. Tambien se espera que aumentar [[mu]] reduzca la rapidez porque el medio tiene mas inercia por unidad de longitud. Un valor razonable para una cuerda de laboratorio queda en la escala de metros por segundo o decenas de metros por segundo, no en la escala de la luz ni en centimetros por hora. Si duplicar la tension apenas cambiara el resultado, o si una cuerda mas pesada transmitiera mas rapido sin cambiar otro parametro, habria que revisar el modelo o los datos.

## Interpretación

La aplicacion real muestra por que una onda mecanica no se define solo por su forma. Dos ondas con la misma [[lambda]] y [[f]] pueden requerir medios distintos si su velocidad se sostiene por mecanismos diferentes. En cuerda se habla de tension e inercia lineal; en aire se habla de compresibilidad y densidad. El leaf entrena precisamente esa lectura: identificar medio, perturbacion, escala de repeticion y mecanismo restaurador antes de confiar en una formula.

Tambien permite tomar una decision tecnica sencilla. Si se busca mayor rapidez sin cambiar la longitud de la cuerda, aumentar [[T]] puede ayudar, pero solo hasta el limite seguro del material. Si se cambia a una cuerda con menor [[mu]], la rapidez tambien aumenta, aunque puede cambiar la resistencia mecanica y el sonido producido.
