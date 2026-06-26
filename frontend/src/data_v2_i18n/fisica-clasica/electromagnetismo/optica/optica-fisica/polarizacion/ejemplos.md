# Ejemplo tipo examen


## Enunciado

Un haz de laser emite luz linealmente polarizada con una intensidad de 500 W/m². La luz atraviesa un polarizador analizador cuyo eje de transmision forma un angulo de 35 grados con la direccion de polarizacion del haz. Determina la intensidad transmitida tras el analizador y el angulo al que deberia girar el analizador para que la intensidad transmitida se reduzca a un cuarto de la intensidad incidente.

## Datos

- Intensidad incidente de la luz polarizada: 500 W/m²
- Angulo entre la polarizacion del haz y el eje del analizador: 35 grados (equivalente a 0.611 rad)
- La fuente ya esta linealmente polarizada, por lo que no se aplica el factor de un medio

## Definición del sistema

El sistema consta de una fuente laser que emite luz polarizada linealmente y un unico polarizador analizador. La intensidad incidente [[intensidad_incidente]] corresponde directamente a la salida del laser, sin reduccion previa. La variable de control es el angulo [[theta_p]] entre la direccion de polarizacion del haz y el eje de transmision del analizador.

## Modelo físico

El fenomeno se describe mediante la **ley de Malus**, que relaciona [[intensidad_transmitida]] con [[intensidad_incidente]] y [[theta_p]]. Este modelo es valido porque la fuente es un laser monocromatico coherente y completamente polarizado, y el polarizador se considera ideal con alta relacion de extincion.

## Justificación del modelo

La ley de Malus es aplicable porque se cumplen sus tres hipotesis fundamentales: la luz es monocromatica, esta completamente polarizada linealmente y el polarizador tiene una relacion de extincion tipica de laboratorio (superior a 10 000). El modelo dejaria de valer si se usara luz parcialmente polarizada, como la luz solar directa, o si el polarizador tuviera absorcion significativa de la componente alineada.

## Resolución simbólica

Para la primera parte, aplicamos directamente la ley de Malus:

{{f:ley_malus}}

Sustituimos [[intensidad_incidente]] y [[theta_p]] para obtener [[intensidad_transmitida]].

Para la segunda parte, necesitamos el angulo [[theta_p]] que hace que [[intensidad_transmitida]] sea igual a un cuarto de [[intensidad_incidente]]. Despejando de la ley de Malus, el coseno cuadrado de [[theta_p]] debe ser igual a un cuarto, de modo que el coseno de [[theta_p]] es un medio, lo que corresponde a 60 grados.

## Sustitución numérica

Para la intensidad transmitida a 35 grados: multiplicar 500 W/m² por el coseno cuadrado de 35 grados. El coseno de 35 grados es aproximadamente 0.8192; elevarlo al cuadrado da 0.6710. Multiplicar por 500 da aproximadamente 335.5 W/m². Por tanto [[intensidad_transmitida]] ≈ 335.5 W/m².

Para el angulo que da un cuarto de la intensidad: el coseno cuadrado de [[theta_p]] debe igualar 0.25; la raiz cuadrada de 0.25 es 0.5; el arcocoseno de 0.5 es 60 grados. Por tanto [[theta_p]] ≈ 60 grados (equivalente a 1.047 rad). Notese que este angulo es diferente de [[angulo_de_brewster]], que depende de los indices de refraccion y no del coseno cuadrado de la intensidad.

## Validación dimensional

La intensidad transmitida tiene las mismas unidades que la incidente, ya que el coseno cuadrado es adimensional. Verificacion: `[M T⁻³]` por adimensional da `[M T⁻³]` ✓. El angulo obtenido esta en radianes, lo cual es coherente con la unidad del SI para angulos.

## Interpretación física

El resultado muestra que a 35 grados se transmite aproximadamente el 67 por ciento de la intensidad incidente, lo cual confirma que la caida es suave para angulos moderados. La dependencia cuadratica con el coseno hace que la atenuacion sea mucho menos severa de lo que intuiria quien esperase una relacion lineal.

Para reducir la intensidad a un cuarto es necesario girar el analizador a 60 grados. Este valor intermedio entre 0 y 90 grados ilustra que la ley de Malus distribuye la atenuacion de forma no uniforme: el primer 75 por ciento de reduccion requiere los 60 grados iniciales, mientras que el ultimo 25 por ciento restante necesita solo los 30 grados finales hasta llegar a 90 grados.

Si se aumentara [[intensidad_incidente]] manteniendo el mismo angulo, [[intensidad_transmitida]] creceria proporcionalmente, confirmando la linealidad respecto a la intensidad incidente. En cambio, si [[theta_p]] variase manteniendo [[intensidad_incidente]] fija, la respuesta seria cuadratica, lo que resulta clave para disenar atenuadores opticos precisos.

# Ejemplo de aplicación real


## Contexto

Un fotografo desea reducir los reflejos del agua de un lago para fotografiar el fondo. Sabe que la luz solar reflejada en la superficie del agua esta parcialmente polarizada. Para eliminar la mayor parte del deslumbramiento, coloca un filtro polarizador en su objetivo y lo orienta para bloquear la componente polarizada horizontalmente. El agua tiene un indice de refraccion de aproximadamente 1.33 y la escena esta al aire libre ([[n_1]] cercano a 1.00).

## Estimación física

Primero se calcula el angulo de Brewster para la interfase aire-agua:

{{f:ley_brewster}}

Sustituyendo [[n_1]] igual a 1.00 (aire) y [[n_2]] igual a 1.33 (agua) en la ley de Brewster, el arcotangente de 1.33 dividido por 1.00 da aproximadamente 53.1 grados. Por tanto [[angulo_de_brewster]] ≈ 53.1 grados.

A este angulo, la luz reflejada en la superficie esta completamente polarizada horizontalmente (componente perpendicular al plano de incidencia). Si el fotografo se posiciona de modo que la linea de vision forme ese angulo con la normal al agua, el filtro polarizador con eje vertical eliminara practicamente toda la reflexion superficial.

Para la intensidad residual, aplicando Malus con el polarizador orientado a 90 grados respecto a la componente horizontal polarizada, la transmision de esa componente cae a cero. La luz procedente del fondo del lago, que no esta polarizada, pierde solo la mitad de su intensidad al atravesar el filtro, quedando visible con claridad.

## Interpretación

El angulo de Brewster de 53 grados para aire-agua indica que el fotografo debe apuntar con una inclinacion moderada respecto a la horizontal. Este angulo es viable en la practica y explica por que las fotografias tomadas con polarizador desde una embarcacion a media distancia muestran el fondo con gran nitidez. Si el fotografo disparara en vertical (normal a la superficie) o en rasante, la polarizacion de la reflexion seria mucho menor y el filtro perderia eficacia. La eleccion del angulo de toma es por tanto una decision fisica, no solo estetica.