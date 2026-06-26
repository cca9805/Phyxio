# Ejemplo tipo examen

## Enunciado

Una cuerda fija por ambos extremos tiene longitud [[L]] de 1.20 m. La rapidez de propagacion de las ondas viajeras en la cuerda es [[v]] de 48 m/s. Se quiere saber que longitud de onda corresponde al tercer modo, cual es su frecuencia modal [[f_n]] y por que ese modo si cumple la condicion de estacionariedad.

## Datos

El sistema tiene fronteras fijas equivalentes. La longitud util es [[L]] de 1.20 m, el numero de modo es [[n]] igual a 3 y la rapidez de propagacion es [[v]] de 48 m/s. Las magnitudes buscadas son [[lambda]] y [[f_n]]. El dato [[n]] no es una medida continua, sino una seleccion entera de modo.

## Definición del sistema

El sistema es una cuerda ideal observada entre dos extremos inmoviles. Se desprecia amortiguamiento y se considera que la tension mantiene constante la rapidez [[v]]. No se analiza como se excita la cuerda, sino si la forma espacial encaja y que frecuencia corresponde al modo elegido.

## Modelo físico

Se usa el modelo de cuerda fija por ambos extremos. La condicion espacial exige que en [[L]] quepan [[n]] semilongitudes de onda completas. Despues, la rapidez [[v]] convierte esa longitud de onda permitida en una frecuencia [[f_n]]. El modelo esta anclado al leaf porque la pregunta no busca una onda viajera cualquiera, sino un modo que respete las fronteras.

## Justificación del modelo

La justificacion fisica es que los extremos fijos imponen nodos y obligan a que la forma cierre exactamente en la longitud [[L]]. Se asume un modelo ideal porque la cuerda es uniforme, la rapidez [[v]] se mantiene constante, el amortiguamiento se desprecia y el modo [[n]] es entero. Estas condiciones hacen valido usar semilongitudes de onda completas y no una longitud de onda arbitraria.

## Resolución simbólica

Primero se aplica la condicion espacial de estacionariedad.

{{f:condicion_estacionaria_cuerda}}

Con esa relacion se despeja [[lambda]] para el modo seleccionado. Despues se calcula la frecuencia permitida del mismo modo.

{{f:frecuencia_modo_estacionario}}

La resolucion usa una misma idea: la geometria selecciona el modo y la rapidez del medio fija su escala temporal.

## Sustitución numérica

Para [[n]] igual a 3 y [[L]] de 1.20 m, la longitud de onda compatible queda en 0.80 m. Con [[v]] de 48 m/s, la frecuencia modal queda en 60 Hz. El resultado es coherente: el tercer modo tiene tres semilongitudes de onda dentro de la cuerda.

## Validación dimensional

La condicion espacial relaciona longitudes y un numero adimensional, por eso devuelve metros para [[lambda]]. La frecuencia modal combina `[L T⁻¹]` con `[L]`, de modo que el resultado queda en `[T⁻¹]`. Esta lectura dimensional confirma que no se esta calculando amplitud ni energia, sino frecuencia permitida.

## Interpretación física

El resultado significa que la cuerda puede sostener un patron con tres vientres si la excitacion aporta energia cerca de 60 Hz. La longitud de onda de 0.80 m no es la longitud de la cuerda, sino la escala espacial de las ondas viajeras que forman el modo. Si se intentara forzar una frecuencia que diera [[n]] no entero, la frontera no permitiria una estacionaria pura.

# Ejemplo de aplicación real

## Contexto

En un laboratorio se ajusta una cuerda vibrante para mostrar modos estacionarios. La cuerda tiene longitud fija, pero se puede cambiar la tension y con ello la rapidez [[v]]. El profesor quiere que el segundo modo aparezca cerca de una frecuencia audible y estable.

## Estimación física

La estimacion fisica empieza por orden de magnitud. Si [[L]] esta cerca de un metro y [[v]] esta en decenas de metros por segundo, la frecuencia fundamental debe estar en decenas de hertz. El segundo modo tendra una [[f_n]] aproximadamente doble si el medio no cambia. Esta lectura permite anticipar si un valor como miles de hertz seria razonable o si indicaria error de unidades.

## Interpretación

La aplicacion real muestra que la condicion de estacionariedad no solo calcula numeros: decide si una demostracion puede funcionar. Si la fuente excita cerca de [[f_n]], el modo crece; si excita entre modos, la respuesta es menor o mezclada. Cambiar [[L]] desplaza toda la familia modal, mientras cambiar [[v]] mediante tension cambia la escala temporal sin cambiar la forma entera que exige [[n]].

En una lectura de aula, el profesor puede pedir primero una prediccion cualitativa: al pasar del segundo al tercer modo aparecen mas vientres y la frecuencia aumenta. Despues se hace la cuenta. Si la prediccion y el calculo no coinciden, el problema no es solo numerico; puede haberse confundido [[lambda]] con [[L]], o puede haberse usado un [[n]] que no es entero.

La decision experimental tambien depende de la precision. Una fuente ajustada unos pocos hertz fuera de [[f_n]] puede producir un patron inestable si la cuerda tiene poco amortiguamiento. Por eso la condicion sirve para estimar donde buscar el modo, pero la observacion real confirma si la frontera y el medio cumplen las hipotesis.
