const e=`# Ejemplo tipo examen

## Enunciado
Se analiza una etapa de acondicionamiento con una red de primer orden formada por una resistencia [[R]] y un capacitor [[C]]. El objetivo es predecir la evolucion de la tension [[Vc]] y de la corriente [[I]] durante una maniobra de incremento de estado. El circuito parte con condicion inicial de tension [[V0]] igual a cero y se excita con un nivel final [[Vf]] constante. Se pide estimar el comportamiento en tres instantes representativos del transitorio y justificar fisicamente por que la aproximacion exponencial es adecuada en este caso.

## Datos
- Resistencia [[R]] de 10 kiloohmios.
- Capacitancia [[C]] de 100 microfaradios.
- Tension final de excitacion [[Vf]] de 10 voltios.
- Condicion inicial [[V0]] igual a 0 voltios.
- Instantes de analisis [[t]] correspondientes a una, tres y cinco escalas temporales.

## Definición del sistema
El sistema se define como la rama serie compuesta por elemento resistivo y elemento capacitivo, excitada por una fuente de escalon ideal para el intervalo de analisis. La variable de estado principal es [[Vc]] y la variable de flujo asociada es [[I]]. Bajo esta definicion, la evolucion depende de los parametros [[R]] y [[C]], que fijan la escala [[tau]].

## Modelo físico
Se adopta el modelo RC lineal de primer orden, donde la dinamica esta dominada por una sola constante temporal [[tau]] y por una transicion exponencial de [[Vc]] hacia [[Vf]]. En este marco, la corriente [[I]] decrece de forma monotona durante el incremento de estado y su valor inicial queda determinado por la relacion de tension y resistencia de arranque.

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
Con los datos del problema, la escala temporal queda en un segundo. Esto permite leer instantes caracteristicos sin ambiguedad. En el primer instante caracteristico, [[Vc]] alcanza aproximadamente dos tercios del salto total. En el tercer instante caracteristico, [[Vc]] se aproxima de manera clara al valor final [[Vf]], y la corriente [[I]] ya es una fraccion reducida del valor inicial. En el quinto instante caracteristico, [[Vc]] queda practicamente en regimen estacionario para fines de ingenieria introductoria, mientras [[I]] se acerca a cero.

Desde una lectura de diseno, el resultado principal no es solo un valor puntual. Lo relevante es que el circuito logra una respuesta suficientemente rapida para tareas de temporizacion de baja frecuencia, manteniendo corriente de arranque en un rango manejable por la resistencia elegida.

## Validación dimensional
La magnitud [[tau]] debe expresarse en segundos y ser consistente con el producto de resistencia y capacitancia. La tension [[Vc]] se expresa en voltios y la corriente [[I]] en amperios. Si al finalizar una sustitucion aparece una mezcla incompatible de unidades, el error suele provenir de conversion incompleta de microfaradios o de confundir kiloohmios con ohmios.

Tambien debe validarse coherencia temporal. En el escenario pasivo simple de incremento, [[Vc]] no debe alejarse del nivel [[Vf]] a medida que avanza [[t]]. Si ocurre lo contrario, la seleccion de escenario o el manejo de signos probablemente es incorrecto.

## Interpretación física
El resultado expresa una idea central. Al inicio, la diferencia entre estado actual y objetivo es grande, por eso la corriente de ajuste [[I]] tambien es grande. Conforme [[Vc]] se aproxima a [[Vf]], esa diferencia disminuye y la corriente cae. Esta dinamica describe un mecanismo de relajacion con memoria, no un cambio instantaneo.

La interpretacion no debe limitarse a un numero. Debe responder si la respuesta temporal obtenida es compatible con la funcion buscada en el circuito. En este caso, el sistema suaviza transiciones bruscas y converge en una ventana temporal util para control basico y filtrado elemental.

# Ejemplo de aplicación real

## Contexto
En una interfaz de sensor para microcontrolador se desea evitar que picos breves de ruido digital se interpreten como eventos validos. Se implementa una red con [[R]] y [[C]] para amortiguar variaciones rapidas y entregar una tension [[Vc]] mas estable al convertidor analogico.

## Estimación física
La estimacion parte de comparar la duracion tipica del ruido con la escala [[tau]] del circuito. Si la perturbacion dura mucho menos que [[tau]], su impacto sobre [[Vc]] es limitado y la salida queda suavizada. Si la perturbacion dura del orden de [[tau]] o mas, la red empieza a seguirla y se reduce la eficacia de filtrado.

En una ventana de trabajo representativa, se observa que la configuracion elegida mantiene [[Vc]] dentro de un rango estable para el muestreo y reduce oscilaciones no deseadas. La corriente [[I]] en arranque se mantiene dentro de margenes termicos razonables para la resistencia seleccionada.

## Interpretación
Este caso real muestra que el modelo RC no solo sirve para resolver ejercicios, sino para tomar decisiones de arquitectura. Elegir [[R]] y [[C]] define compromiso entre rapidez de seguimiento y rechazo de ruido. Una escala [[tau]] demasiado pequena deja pasar perturbaciones breves. Una escala demasiado grande vuelve lenta la respuesta y puede deteriorar la deteccion de cambios reales.

La lectura cuantitativa y fisica conjunta permite ajustar el circuito al objetivo funcional sin sobredimensionar componentes. Esa es la competencia central que se busca consolidar en este leaf.
`;export{e as default};
