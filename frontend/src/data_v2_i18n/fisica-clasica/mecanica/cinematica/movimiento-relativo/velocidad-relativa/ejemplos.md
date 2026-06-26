# Ejemplo tipo examen

## Enunciado

En un aeropuerto, una cinta movil avanza en linea recta con velocidad constante de \(2.0\;\text{m/s}\) respecto al suelo. Una pasajera camina sobre la cinta en el mismo sentido con velocidad constante de \(1.4\;\text{m/s}\) respecto a la propia cinta. Se pide calcular:

1. la velocidad de la pasajera respecto al suelo,
2. la velocidad de la pasajera respecto a otra persona quieta sobre la misma cinta,
3. la velocidad del suelo vista por la pasajera.

## Datos

Tomaremos como observador base O al suelo de la terminal. El observador movil B sera la cinta. El movil A sera la pasajera.

La velocidad de la cinta respecto al suelo es +2.0 m/s. La velocidad de la pasajera respecto a la cinta es +1.4 m/s.

El signo positivo apunta en el sentido de avance de la cinta. Con esta notacion, [[v_frame]] coincide con \(v_{B/O}\), [[v_rel]] coincide con \(v_{A/B}\) y [[v_abs]] coincide con \(v_{A/O}\).

## Definicion del sistema

El sistema fisico relevante es la pasajera A, pero la pregunta no puede responderse sin distinguir el observador. El suelo de la terminal organiza la descripcion global y la cinta organiza la descripcion local. Esta separacion es esencial: una misma pasajera puede tener una [[v_abs]] grande respecto al suelo y una [[v_rel]] mucho menor respecto a alguien que viaja con ella.

## Modelo fisico

Se usa un modelo galileano unidimensional. La cinta se mueve con velocidad constante respecto al suelo y la pasajera se mueve con velocidad constante respecto a la cinta. Eso permite usar la relacion correspondiente, la relacion correspondiente e la relacion correspondiente sin necesidad de introducir aceleraciones ni efectos relativistas.

{{f:composicion_velocidades}}

{{f:definicion_vel_rel}}

{{f:inversion_relativa}}


## Justificacion del modelo

El intervalo de observacion es corto, la geometria es rectilinea y todos los movimientos relevantes son colineales. Por eso basta una descripcion con signo en un unico eje. Ademas, las dos velocidades dadas, \(2.0\;\text{m/s}\) y \(1.4\;\text{m/s}\), son tipicas de una cinta de aeropuerto y de una persona caminando, de modo que el regimen galileano es sobrado y no hace falta introducir correcciones relativistas ni aceleraciones internas.

La justificacion fisica central es que [[v_abs]] y [[v_frame]] estan medidas desde el mismo observador base O, exactamente como exige la relacion correspondiente. Si la velocidad de la cinta se hubiera medido desde otro observador o si la pasajera estuviera cambiando de paso de forma apreciable, la composicion simple dejaria de ser una representacion limpia del mecanismo.

{{f:definicion_vel_rel}}


Dicho de otro modo: el modelo es fisicamente explicito porque separa con claridad la velocidad propia de la pasajera dentro de la cinta y la velocidad de transporte de la cinta respecto al suelo. Esa separacion es justo la que decide el resultado; no es una comodidad algebraica.

## Resolucion simbolica

La pregunta principal es la velocidad de A respecto al observador base [[v_abs]] O. Para eso se usa la relacion correspondiente:

{{f:composicion_velocidades}}


{{f:composicion_velocidades}}

En este caso unidimensional, la expresion vectorial se traduce a una suma con signo entre la lectura relativa de la pasajera y la velocidad de la cinta.

Como [[v_rel]] es la velocidad de la pasajera respecto a la cinta y [[v_frame]] es la velocidad de la cinta respecto al suelo, la velocidad buscada [[v_abs]] queda como la suma de ambas contribuciones.

Para la segunda pregunta, una persona quieta sobre la misma cinta tiene velocidad nula respecto a la cinta. Por la relacion correspondiente, la pasajera vista por esa persona conserva la misma velocidad relativa \(v_{A/B}\). Para la tercera pregunta se usa la relacion correspondiente:

{{f:definicion_vel_rel}}

{{f:inversion_relativa}}


Esta cadena de pasos coincide con la lectura desarrollada en teoria: primero se fija el observador base O, luego se distinguen [[v_rel]] , [[v_abs]] y [[v_frame]] , y solo despues se decide si toca sumar, restar o invertir la perspectiva.

{{f:inversion_relativa}}

## Sustitucion numerica

La velocidad de la pasajera respecto al suelo es 3.4 m/s.

La velocidad de la pasajera respecto a una persona quieta sobre la misma cinta es 1.4 m/s.

La velocidad del suelo vista por la pasajera es -3.4 m/s.

## Validacion dimensional

La composicion tiene unidades correctas: velocidad = velocidad + velocidad, todas en L/T.

Tambien el signo es coherente. Como pasajera y cinta avanzan en el mismo sentido, la [[v_abs]] respecto al suelo debe ser mayor que cada una de las dos velocidades por separado. Si hubiese salido menor que \(2.0\;\text{m/s}\), habria que revisar el signo de [[v_rel]] .

## Interpretacion fisica

El resultado \(3.4\;\text{m/s}\) no significa que hayan aparecido dos movimientos distintos de la pasajera. Significa que el mismo movimiento se esta leyendo desde dos observadores distintos. La cinta ve a la pasajera avanzar a \(1.4\;\text{m/s}\), mientras el suelo la ve avanzar a \(3.4\;\text{m/s}\). Ambas lecturas son correctas porque responden a preguntas distintas.

La tercera respuesta, -3.4 m/s, muestra por que la relacion correspondiente es tan util: al intercambiar observador y observado, la velocidad cambia de signo. El suelo no "se mueve de verdad" para la pasajera como una cinta fisica, pero su descripcion cinematica desde el marco de A exige ese signo opuesto.

{{f:inversion_relativa}}


# Ejemplo de aplicacion real

## Contexto

Un robot de inspeccion se desplaza sobre una plataforma movil dentro de una nave industrial. La plataforma avanza a velocidad casi constante y el robot debe estimar su velocidad respecto al suelo para llegar a una marca pintada.

## Estimacion fisica

Si la plataforma avanza a \(0.8\;\text{m/s}\) respecto al suelo y el robot circula a \(0.5\;\text{m/s}\) respecto a la plataforma en el mismo sentido, el sistema de control debe esperar una velocidad global del orden de \(1.3\;\text{m/s}\). Esa cuenta previa ya permite detectar un fallo de interpretacion: si el software predijera \(0.5\;\text{m/s}\) o \(0.3\;\text{m/s}\), estaria confundiendo [[v_rel]] con [[v_abs]] o aplicando el signo de [[v_frame]] al reves.

Por eso la estimacion no es decorativa. Sirve para decidir si el robot llegara a tiempo a la marca del suelo y para comprobar, antes de cerrar la maniobra, que la composicion entre [[v_rel]] y [[v_frame]] produce una [[v_abs]] compatible con la escena real.

## Interpretacion

Para navegar dentro de la plataforma puede bastar [[v_rel]] . Para coordinar el robot con la infraestructura fija de la nave hace falta [[v_abs]] . Esa diferencia resume la utilidad practica de la velocidad relativa: elegir que observador vuelve simple la accion que realmente importa.
