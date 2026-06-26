# Ejemplo tipo examen

## Enunciado
Un disco solido homogeneo de masa [[m]] 4 kg y radio 0.30 m esta montado sobre un eje horizontal sin friccion. Un motor aplica un torque constante de 1.8 N m sobre el eje. Se pide calcular la aceleracion angular [[alpha]], la aceleracion lineal [[a]] de un punto en la periferia y el tiempo necesario para que el disco alcance una rapidez angular [[omega]] de 25 rad/s partiendo del reposo. Ademas, hay que justificar la solucion con la segunda ley rotacional, usar la referencia traslacional con [[F_net]] y la segunda ley traslacional como control estructural, y cerrar la lectura con la definicion de momento angular [[L]] y la definicion de momento lineal [[p]].

## Datos
Datos declarados:
- masa del disco: 4 kg
- radio del disco: 0.30 m
- torque aplicado: 1.8 N m
- rapidez angular objetivo: 25 rad/s
- estado inicial: reposo
- convenio de signos: giro positivo en el sentido del torque aplicado

Dato derivado:
- momento de inercia [[I]] del disco respecto al eje central

Supuestos:
- friccion en el eje despreciable
- disco rigido
- torque constante durante todo el intervalo

## Definicion del sistema
El sistema mecanico es el disco rigido con un unico grado de libertad rotacional alrededor del eje central. El eje impide la traslacion del centro de masa, pero permite el giro. Por eso el torque externo es la causa directa del cambio de estado rotacional y [[alpha]] es la respuesta que organiza la evolucion temporal.

Tambien conviene fijar desde el principio que el disco gira alrededor de su eje central y no alrededor de otro eje paralelo. Si se usa una inercia calculada para otro eje, la respuesta queda mal escalada incluso aunque el algebra parezca limpia.

## Modelo fisico
Se usa la segunda ley rotacional para la dinamica principal:

{{f:segunda_ley_traslacional}}

La referencia traslacional se mantiene visible con la segunda ley traslacional:

{{f:segunda_ley_traslacional}}

Para describir el estado acumulado se usan las definiciones de momento angular y momento lineal:

{{f:momento_lineal}}

{{f:momento_lineal}}

## Justificacion del modelo
Los datos disponibles permiten calcular directamente la inercia rotacional del disco y despues ligar torque y respuesta angular. Como el eje es fijo y no hay friccion relevante, el torque aplicado puede tratarse como torque neto [[tau]]. Eso vuelve legitimo usar la ecuacion fundamental como ley principal del mecanismo y no como una aproximacion casual.

La referencia con [[F_net]] no dirige la resolucion, pero si permite verificar que el problema mantiene la misma estructura causal que una ley lineal: una causa neta produce una respuesta y la inercia modula cuanto cambia el sistema. El uso de la definicion de momento lineal tambien tiene sentido. Aunque el disco gira, su centro de masa no se traslada. Esa observacion ayuda a separar con claridad estado lineal del centro y estado rotacional del cuerpo, y evita confundir el giro del disco con una traslacion del conjunto.

## Resolucion simbolica
Paso 1. Calcular la inercia del disco:

{{f:segunda_ley_rotacional}}

Paso 2. Aplicar la segunda ley rotacional:

{{f:segunda_ley_rotacional}}

Paso 3. Obtener la aceleracion tangencial en la periferia:

{{f:momento_angular}}

Paso 4. Hallar el tiempo para llegar a la rapidez angular objetivo:

{{f:momento_angular}}

{{f:segunda_ley_rotacional}}

Paso 5. Calcular el estado rotacional alcanzado:

{{f:momento_lineal}}

Paso 6. Cerrar con la lectura lineal del centro de masa usando la definicion de momento lineal. Como el eje es fijo, la velocidad [[v]] del centro de masa es nula y entonces:

{{f:momento_lineal}}

Esa ultima linea muestra que la rama rotacional cambia mientras la rama traslacional del centro de masa permanece bloqueada. La comparacion con [[F_net]] sirve solo como control de estructura, no como ecuacion dominante del sistema.

## Sustitucion numérica
Momento de inercia:

{{f:momento_angular}}

Aceleracion angular:

{{f:momento_lineal}}

Aceleracion lineal de la periferia:

{{f:momento_lineal}}

Tiempo para alcanzar 25 rad/s:

{{f:momento_angular}}

Momento angular final:

{{f:momento_lineal}}

Momento lineal del centro de masa:

{{f:momento_lineal}}

## Validacion dimensional
La razon entre torque e inercia produce unidades de aceleracion angular. La multiplicacion de inercia por rapidez angular produce momento angular. En la rama lineal, el uso de [[F_net]] recuerda que una causa neta genera una respuesta, mientras que el calculo de [[p]] deja claro que el centro de masa no traslada en este montaje. Todo queda coherente con el sistema elegido.

## Interpretacion fisica
El resultado dice que un torque moderado basta para producir una respuesta angular grande porque la inercia del disco no es alta. En dos segundos y medio el sistema ya alcanza una rapidez angular apreciable. La aceleracion periferica sale del orden de unos pocos metros por segundo cuadrado, compatible con un montaje de banco. Eso significa que la causa rotacional disponible domina con claridad sobre la resistencia inercial del sistema.

La lectura mas importante no es numerica, sino mecanica. El torque organiza el cambio de giro, la inercia del disco modula la dificultad de acelerarlo y el momento angular final resume el estado acumulado al llegar a la velocidad objetivo. Si la masa del disco estuviera mas lejos del eje, la misma causa produciria menos respuesta; si el torque fuera menor, el mismo disco tardaria mas en alcanzar la velocidad pedida. Al mismo tiempo, la definicion de momento lineal confirma que el centro de masa no participa con traslacion. Esta separacion entre giro del cuerpo y reposo del centro evita confundir dinamica rotacional con dinamica lineal.

# Ejemplo de aplicacion real

## Contexto
Un cabezal de fresado CNC puede modelarse como un disco solido de masa 2.5 kg y radio equivalente 0.08 m. El servomotor debe llevarlo desde el reposo hasta 600 rad/s en 0.4 s para llegar a velocidad de corte. El fabricante necesita estimar el torque minimo del motor, el momento angular final y el efecto de reducir la masa del cabezal a 1.8 kg manteniendo el mismo radio.

## Estimacion fisica
Antes de calcular, conviene leer la escala. Un cabezal pequeño con radio de pocos centimetros debe tener una inercia rotacional baja. Eso sugiere que el torque requerido sera significativo, pero todavia compatible con un servomotor compacto. La respuesta angular necesaria es muy alta porque el tiempo de arranque es corto.

La aceleracion angular objetivo es:

{{f:segunda_ley_rotacional}}

La inercia rotacional del cabezal es:

{{f:segunda_ley_rotacional}}

Aplicando la segunda ley rotacional, el torque minimo queda:

{{f:segunda_ley_rotacional}}

El momento angular final es:

{{f:momento_angular}}

Si la masa baja a 1.8 kg, la nueva inercia es:

{{f:segunda_ley_traslacional}}

El nuevo torque minimo pasa a ser:

{{f:momento_lineal}}

Como el eje sigue fijo, el centro de masa no adquiere velocidad de traslacion y la definicion de momento lineal vuelve a dar un valor nulo para el conjunto. Eso confirma que toda la exigencia del actuador se concentra en la rama rotacional y no en una rama lineal gobernada por [[F_net]].

## Interpretacion
La reduccion de masa disminuye la inercia rotacional y, por tanto, reduce tanto el torque de arranque como el estado rotacional que el freno debera disipar. El efecto no es marginal: el cambio de inercia es suficiente para aliviar de forma clara la exigencia del servomotor y mejorar el margen del sistema de frenado.

Este ejemplo enseña por que la ecuacion fundamental no es solo una formula de examen. Une diseño mecanico, eleccion de motor y criterio de seguridad. Si el cabezal fuera mas pesado o tuviera mayor radio, el mismo tiempo de arranque exigiria un torque mucho mas alto y produciria un momento angular final mas dificil de detener. La fisica relevante del problema queda resumida en esa relacion entre causa rotacional, resistencia inercial y respuesta angular.