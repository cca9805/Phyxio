# Velocidad relativa

## Contexto conceptual

La velocidad relativa aparece cuando el observador tambien forma parte del problema. No basta con preguntar "a que velocidad va A", porque la respuesta cambia si quien mira esta quieto en el suelo, montado en una cinta movil o viajando en otro vehiculo. El nucleo del leaf es precisamente esa comparacion: [[v_rel]] dice como se mueve A visto desde B, [[v_abs]] dice como se mueve A visto desde el observador base O, y [[v_frame]] recoge como se mueve el propio observador B respecto a ese base.

Lo importante es entender que no se crean tres movimientos distintos del mismo cuerpo. Se describe un solo movimiento desde observadores distintos. Cuando el alumno ve esto con claridad, deja de usar la velocidad relativa como una resta mecanica y empieza a leerla como una traduccion controlada entre marcos y observadores.

## 🟢 Nivel esencial

Un observador que se mueve junto a uno de los móviles ve al otro acercarse, alejarse o mantenerse a la misma distancia.

Si la distancia entre ellos disminuye, uno se acerca al otro. Si aumenta, se separan. Si no cambia, desde ese punto de vista el otro parece estar en reposo.

Una persona que camina dentro de un tren ilustra esta situación. Para quien está en el andén, se mueve rápidamente junto con el tren. Para quien está dentro del vagón, solo avanza unos pasos.

También puede imaginarse a dos personas sobre una cinta móvil. Desde el suelo ambas se desplazan, pero entre ellas la distancia puede mantenerse constante.

En estos casos, lo relevante no es el movimiento respecto al suelo, sino cómo cambia la separación entre los móviles.

Reconocer si esa distancia cambia, aumenta o permanece constante permite describir la situación sin necesidad de conocer las velocidades absolutas.

Desde este punto de vista, el fenómeno puede interpretarse como si uno de los móviles estuviera en reposo y el otro se moviera con una única velocidad efectiva. Esa velocidad es la que más adelante se formaliza como velocidad relativa [[v_rel]] y permite describir el cambio de separación como un único movimiento.

## 🔵 Nivel formal

Una vez entendida la idea de cómo cambia la distancia entre móviles, es posible describir ese cambio de forma cuantitativa. La velocidad relativa aparece como la magnitud que traduce esa percepción en una relación matemática entre velocidades medidas desde un mismo observador.

En el nivel formal conviene fijar una notación estable. [[v_abs]] representa la velocidad de A respecto al observador base O. [[v_frame]] representa la velocidad del observador o marco B respecto a ese mismo observador base. [[v_rel]] representa la velocidad de A vista desde B. La condición clave es que todas las velocidades que se combinan deben estar referidas al mismo observador base.

La fórmula `definicion_vel_rel` resume esta idea:

{{f:definicion_vel_rel}}

La velocidad relativa no es una magnitud independiente, sino una comparación entre dos descripciones del mismo fenómeno. Indica cómo cambia la posición de A cuando se observa desde un sistema que se mueve con B.

Cuando se quiere reconstruir la velocidad respecto al observador base, entra la relación `composicion_velocidades`:

{{f:composicion_velocidades}}

Esta ecuación permite pasar de una descripción interna al sistema a una descripción externa. En una dimensión se interpreta como suma o resta con signo; en varias dimensiones obliga a trabajar con componentes vectoriales.

Existe además una identidad estructural muy útil, `inversion_relativa`:

{{f:inversion_relativa}}

Intercambiar observador y observado invierte el signo de la velocidad relativa. Esta propiedad es una herramienta de coherencia: si no se cumple, el problema está mal planteado.

Por último, el despeje `despeje_v_frame`

{{f:despeje_v_frame}}

permite determinar la velocidad del marco móvil cuando esa es la incógnita del problema, como ocurre en situaciones con cintas transportadoras, corrientes o vehículos en movimiento.

En la práctica, la dificultad no suele estar en aplicar la relación, sino en decidir qué velocidades deben compararse. Usar una velocidad medida desde un observador distinto rompe la coherencia del modelo y conduce a resultados incompatibles entre sí.

Por eso, antes de operar, conviene verificar que todas las velocidades implicadas están referidas al mismo observador base. Esta comprobación es más importante que el propio cálculo.

Este cambio de distancia es precisamente lo que, en niveles posteriores, se describe mediante la velocidad relativa [[v_rel]] .

## 🔴 Nivel estructural

Este modelo deja de ser suficiente cuando la variación de la distancia no puede explicarse solo con velocidades constantes o cuando intervienen cambios de referencia no equivalentes.

La estructura del modelo galileano es exigente aunque la cuenta parezca corta. Primero, [[v_abs]] y [[v_frame]] deben estar medidas desde el mismo observador base O. Segundo, las direcciones o componentes deben ser compatibles. Tercero, el problema debe permanecer en el regimen clasico donde la composicion de velocidades es galileana. Si una de esas tres condiciones falla, la formula puede seguir siendo familiar y aun asi dejar de representar el mecanismo fisico correcto.

Los fallos tipicos son muy reconocibles. Uno es restar modulos como si todas las trayectorias fueran colineales cuando en realidad el problema es vectorial. Otro es asignar a [[v_frame]] el papel de velocidad del movil observado, cuando en realidad pertenece al observador o marco intermedio. Un tercero es olvidar que [[v_rel]] responde a una pregunta distinta de [[v_abs]] : una describe como ve el movimiento el observador movil y la otra como lo ve el observador base.

La competencia avanzada del tema no consiste en memorizar una lista de signos. Consiste en leer quien observa, desde donde observa y que velocidad pertenece al movil y cual pertenece al marco. Cuando esa arquitectura queda clara, la cuenta suele simplificarse sola.

Hay ademas una lectura de validez que conviene entrenar. Si dos observadores no comparten ya un marco galileano simple, si el movimiento del marco cambia con rapidez o si la escena obliga a combinar direcciones no compatibles con el eje elegido, el problema deja de ser una aplicacion directa del leaf. Detectar ese momento tambien forma parte del dominio del tema. No todo fallo se corrige con otra sustitucion; algunos exigen volver atras y redefinir quien observa y desde que descripcion se quiere hablar.

## Interpretacion fisica profunda

La velocidad relativa obliga a separar movimiento fisico y descripcion del movimiento. El coche, la maleta o la persona no cambian de estado fisico porque cambie el observador; cambia la lectura de la velocidad. Esa separacion es valiosa porque entrena una idea central de la mecanica: muchas magnitudes no son propiedades absolutas del cuerpo, sino relaciones entre el cuerpo y un marco de observacion.

Leida asi, [[v_rel]] no es una velocidad extra agregada al problema. Es una comparacion bien definida entre dos descripciones del mismo fenomeno. [[v_abs]] y [[v_frame]] completan esa lectura: la primera organiza la vista global desde O y la segunda aisa la contribucion del marco movil B.

## Orden de magnitud

Los ordenes de magnitud ayudan mucho en este leaf. Una cinta de aeropuerto suele moverse del orden de \(1\;\text{m/s}\), una persona caminando tambien puede estar en ese entorno, y un coche en autopista ya se mueve del orden de \(10^1\;\text{m/s}\). Estas escalas permiten detectar rapidamente resultados absurdos. Si una persona caminando sobre una cinta sale con una velocidad relativa de decenas de metros por segundo respecto a otra persona que va a su lado, el problema no necesita mas algebra: necesita revisar observador, signo o unidades.

Tambien conviene comparar la magnitud de [[v_rel]] con la de [[v_abs]] y [[v_frame]] . Si [[v_rel]] es mucho menor que las otras dos, eso suele significar reposo mutuo aproximado dentro de un sistema que se traslada rapido respecto al suelo. Si [[v_rel]] domina, entonces el movimiento interno del movil importa mas que el transporte del marco.

## Metodo de resolucion personalizado

Un metodo robusto para este leaf puede resumirse en cinco pasos. Primero, nombrar explicitamente quien es A, quien es B y quien actua como observador base O. Segundo, fijar el eje o las componentes con su signo. Tercero, declarar si la pregunta busca [[v_rel]] , [[v_abs]] o [[v_frame]] . Cuarto, elegir la relacion adecuada entre `definicion_vel_rel`, `composicion_velocidades`, `inversion_relativa` o `despeje_v_frame`. Quinto, comprobar si el resultado cualitativo coincide con la escena fisica esperada.

Este orden importa porque evita el error mas comun del tema: hacer una resta correcta entre velocidades mal elegidas. La algebra no corrige una interpretacion equivocada del observador base.

## Casos especiales y ejemplo extendido

El caso mas instructivo es una [[v_rel]] nula. Si A y B se mueven juntos, el observador B ve a A en reposo aunque ambos se trasladen respecto al observador base O. Otro caso muy util es una [[v_frame]] nula: ahi el observador movil coincide con el observador base y [[v_rel]] se reduce a la velocidad usual de A respecto a O.

En dos dimensiones aparece un caso mas rico. Un barco puede apuntar perpendicular a la orilla respecto al agua y, aun asi, tener una velocidad [[v_abs]] inclinada respecto a la orilla porque el rio aporta [[v_frame]] . Ese ejemplo muestra por que la velocidad relativa no siempre puede tratarse como un simple problema de signos.

## Preguntas reales del alumno

La duda mas comun es "por que aqui resto y en otros problemas sumo". La respuesta es que no se decide por memoria, sino por la magnitud buscada. Si buscas [[v_rel]] , usas definicion_vel_rel; si buscas [[v_abs]] , usas composicion_velocidades; si buscas la velocidad del marco, usas despeje_v_frame. Otra duda frecuente es "por que dos cuerpos muy rapidos pueden verse casi quietos". La respuesta es que la rapidez respecto al suelo no controla por si sola la comparacion entre observador y observado.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con sistemas de referencia, encuentros y persecuciones, movimiento en dos dimensiones y lectura de graficas. Tambien prepara problemas de dinamica donde conviene elegir el marco mas simple antes de interpretar fuerzas o cantidades de movimiento. Por eso velocidad relativa no es un tema accesorio: es una herramienta de organizacion para muchos problemas posteriores.

## Sintesis final

Dominar velocidad relativa significa saber distinguir [[v_rel]] , [[v_abs]] y [[v_frame]] , elegir correctamente el observador base O y usar `definicion_vel_rel`, `composicion_velocidades`, `inversion_relativa` o `despeje_v_frame` segun la pregunta fisica. La idea que debe quedar es tajante: la velocidad relativa no es un numero suelto, sino una comparacion entre observadores.

Cuando esa idea se vuelve operativa, el alumno deja de preguntar solo "que formula toca" y empieza a preguntar "quien observa, desde que marco y que velocidad quiero describir". Ese cambio de pregunta es el salto real de nivel.
