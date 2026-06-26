# Ejemplo tipo examen


## Enunciado

Se analiza una etapa de acondicionamiento con una red de primer orden formada por una [[resistencia]] y un capacitor [[capacitancia]]. El objetivo es predecir la evolucion de la tension [[tension_del_capacitor]] y de la corriente [[corriente_transitoria]] durante una maniobra de incremento de estado. El circuito parte con condicion inicial de tension [[tension_inicial]] igual a cero y se excita con un nivel final [[tension_final_de_carga]] constante. Se pide estimar el comportamiento en tres instantes representativos del transitorio y justificar fisicamente por que la aproximacion exponencial es adecuada en este caso.

## Datos

- Resistencia [[resistencia]] de 10 kiloohmios.
- Capacitancia [[capacitancia]] de 100 microfaradios.
- Tension final de excitacion [[tension_final_de_carga]] de 10 voltios.
- Condicion inicial [[tension_inicial]] igual a 0 voltios.
- Instantes de analisis [[tiempo]] correspondientes a una, tres y cinco escalas temporales.

## Definición del sistema

El sistema se define como la rama serie compuesta por elemento resistivo y elemento capacitivo, excitada por una fuente de escalon ideal para el intervalo de analisis. La variable de estado principal es [[tension_del_capacitor]] y la variable de flujo asociada es [[corriente_transitoria]]. Bajo esta definicion, la evolucion depende de los parametros [[resistencia]] y [[capacitancia]], que fijan la escala [[tau]].

## Modelo físico

Se adopta el modelo RC lineal de primer orden, donde la dinamica esta dominada por una sola constante temporal [[tau]] y por una transicion exponencial de [[tension_del_capacitor]] hacia [[tension_final_de_carga]]. En este marco, la corriente [[corriente_transitoria]] decrece de forma monotona durante el incremento de estado y su valor inicial queda determinado por la relacion de tension y [[resistencia]] de arranque.

## Justificación del modelo

El modelo es fisicamente razonable porque la topologia considerada es simple y los componentes operan en un rango donde su comportamiento aproximado puede tomarse lineal. No hay evidencia de saturacion ni de oscilacion asociada a dinamicas adicionales. El objetivo del ejercicio es estimar ordenes de magnitud y tendencias temporales, por lo que una representacion de un polo dominante es suficiente para describir el fenomeno principal sin introducir complejidad innecesaria.

## Resolución simbólica

Primero se obtiene la escala temporal:

{{f:tau_rc}}

Luego se modela la evolucion de la tension del capacitor durante el incremento de estado:

{{f:carga}}

Como contraste conceptual, se recuerda la forma del proceso de vaciado, util para no confundir escenarios:

{{f:descarga}}

Finalmente se usa la relacion de corriente transitoria en el escenario de incremento:

{{f:corriente_carga}}

## Sustitución numérica

Con los datos del problema, la escala temporal queda en un segundo. Esto permite leer instantes caracteristicos sin ambiguedad. En el primer instante caracteristico, [[tension_del_capacitor]] alcanza aproximadamente dos tercios del salto total. En el tercer instante caracteristico, [[tension_del_capacitor]] se aproxima de manera clara al valor final [[tension_final_de_carga]], y la corriente [[corriente_transitoria]] ya es una fraccion reducida del valor inicial. En el quinto instante caracteristico, [[tension_del_capacitor]] queda practicamente en regimen estacionario para fines de ingenieria introductoria, mientras [[corriente_transitoria]] se acerca a cero.

Desde una lectura de diseno, el resultado principal no es solo un valor puntual. Lo relevante es que el circuito logra una respuesta suficientemente rapida para tareas de temporizacion de baja frecuencia, manteniendo corriente de arranque en un rango manejable por la [[resistencia]] elegida.

## Validación dimensional

La magnitud [[tau]] debe expresarse en segundos y ser consistente con el producto de [[resistencia]] y [[capacitancia]]. La tension [[tension_del_capacitor]] se expresa en voltios y la corriente [[corriente_transitoria]] en amperios. Si al finalizar una sustitucion aparece una mezcla incompatible de unidades, el error suele provenir de conversion incompleta de microfaradios o de confundir kiloohmios con ohmios.

Tambien debe validarse coherencia temporal. En el escenario pasivo simple de incremento, [[tension_del_capacitor]] no debe alejarse del nivel [[tension_final_de_carga]] a medida que avanza [[tiempo]]. Si ocurre lo contrario, la seleccion de escenario o el manejo de signos probablemente es incorrecto.

## Interpretación física

El resultado expresa una idea central. Al inicio, la diferencia entre estado actual y objetivo es grande, por eso la corriente de ajuste [[corriente_transitoria]] tambien es grande. Conforme [[tension_del_capacitor]] se aproxima a [[tension_final_de_carga]], esa diferencia disminuye y la corriente cae. Esta dinamica describe un mecanismo de relajacion con memoria, no un cambio instantaneo.

La interpretacion no debe limitarse a un numero. Debe responder si la respuesta temporal obtenida es compatible con la funcion buscada en el circuito. En este caso, el sistema suaviza transiciones bruscas y converge en una ventana temporal util para control basico y filtrado elemental.

# Ejemplo de aplicación real


## Contexto

En una interfaz de sensor para microcontrolador se desea evitar que picos breves de ruido digital se interpreten como eventos validos. Se implementa una red con [[resistencia]] y [[capacitancia]] para amortiguar variaciones rapidas y entregar una tension [[tension_del_capacitor]] mas estable al convertidor analogico.

## Estimación física

La estimacion parte de comparar la duracion tipica del ruido con la escala [[tau]] del circuito. Si la perturbacion dura mucho menos que [[tau]], su impacto sobre [[tension_del_capacitor]] es limitado y la salida queda suavizada. Si la perturbacion dura del orden de [[tau]] o mas, la red empieza a seguirla y se reduce la eficacia de filtrado.

En una ventana de trabajo representativa, se observa que la configuracion elegida mantiene [[tension_del_capacitor]] dentro de un rango estable para el muestreo y reduce oscilaciones no deseadas. La corriente [[corriente_transitoria]] en arranque se mantiene dentro de margenes termicos razonables para la [[resistencia]] seleccionada.

## Interpretación

Este caso real muestra que el modelo RC no solo sirve para resolver ejercicios, sino para tomar decisiones de arquitectura. Elegir [[resistencia]] y [[capacitancia]] define compromiso entre rapidez de seguimiento y rechazo de ruido. Una escala [[tau]] demasiado pequena deja pasar perturbaciones breves. Una escala demasiado grande vuelve lenta la respuesta y puede deteriorar la deteccion de cambios reales.

La lectura cuantitativa y fisica conjunta permite ajustar el circuito al objetivo funcional sin sobredimensionar componentes. Esa es la competencia central que se busca consolidar en este leaf.