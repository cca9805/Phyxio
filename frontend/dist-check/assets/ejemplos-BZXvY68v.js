const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Un disco solido homogeneo de masa [[m]] 4 kg y radio 0.30 m esta montado sobre un eje horizontal sin friccion. Un motor aplica un torque constante de 1.8 N m sobre el eje. Se pide calcular la aceleracion angular [[alpha]], la aceleracion lineal [[a]] de un punto en la periferia y el tiempo necesario para que el disco alcance una rapidez angular [[omega]] de 25 rad/s partiendo del reposo. Ademas, hay que justificar la solucion con la segunda ley rotacional, usar la referencia traslacional con [[F_net]] y la segunda ley traslacional como control estructural, y cerrar la lectura con la definicion de momento angular [[L]] y la definicion de momento lineal [[p]].\r
\r
## Datos\r
Datos declarados:\r
- masa del disco: 4 kg\r
- radio del disco: 0.30 m\r
- torque aplicado: 1.8 N m\r
- rapidez angular objetivo: 25 rad/s\r
- estado inicial: reposo\r
- convenio de signos: giro positivo en el sentido del torque aplicado\r
\r
Dato derivado:\r
- momento de inercia [[I]] del disco respecto al eje central\r
\r
Supuestos:\r
- friccion en el eje despreciable\r
- disco rigido\r
- torque constante durante todo el intervalo\r
\r
## Definicion del sistema\r
El sistema mecanico es el disco rigido con un unico grado de libertad rotacional alrededor del eje central. El eje impide la traslacion del centro de masa, pero permite el giro. Por eso el torque externo es la causa directa del cambio de estado rotacional y [[alpha]] es la respuesta que organiza la evolucion temporal.\r
\r
Tambien conviene fijar desde el principio que el disco gira alrededor de su eje central y no alrededor de otro eje paralelo. Si se usa una inercia calculada para otro eje, la respuesta queda mal escalada incluso aunque el algebra parezca limpia.\r
\r
## Modelo fisico\r
Se usa la segunda ley rotacional para la dinamica principal:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
La referencia traslacional se mantiene visible con la segunda ley traslacional:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
Para describir el estado acumulado se usan las definiciones de momento angular y momento lineal:\r
\r
{{f:momento_lineal}}\r
\r
{{f:momento_lineal}}\r
\r
## Justificacion del modelo\r
Los datos disponibles permiten calcular directamente la inercia rotacional del disco y despues ligar torque y respuesta angular. Como el eje es fijo y no hay friccion relevante, el torque aplicado puede tratarse como torque neto [[tau]]. Eso vuelve legitimo usar la ecuacion fundamental como ley principal del mecanismo y no como una aproximacion casual.\r
\r
La referencia con [[F_net]] no dirige la resolucion, pero si permite verificar que el problema mantiene la misma estructura causal que una ley lineal: una causa neta produce una respuesta y la inercia modula cuanto cambia el sistema. El uso de la definicion de momento lineal tambien tiene sentido. Aunque el disco gira, su centro de masa no se traslada. Esa observacion ayuda a separar con claridad estado lineal del centro y estado rotacional del cuerpo, y evita confundir el giro del disco con una traslacion del conjunto.\r
\r
## Resolucion simbolica\r
Paso 1. Calcular la inercia del disco:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
Paso 2. Aplicar la segunda ley rotacional:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
Paso 3. Obtener la aceleracion tangencial en la periferia:\r
\r
{{f:momento_angular}}\r
\r
Paso 4. Hallar el tiempo para llegar a la rapidez angular objetivo:\r
\r
{{f:momento_angular}}\r
\r
{{f:segunda_ley_rotacional}}\r
\r
Paso 5. Calcular el estado rotacional alcanzado:\r
\r
{{f:momento_lineal}}\r
\r
Paso 6. Cerrar con la lectura lineal del centro de masa usando la definicion de momento lineal. Como el eje es fijo, la velocidad [[v]] del centro de masa es nula y entonces:\r
\r
{{f:momento_lineal}}\r
\r
Esa ultima linea muestra que la rama rotacional cambia mientras la rama traslacional del centro de masa permanece bloqueada. La comparacion con [[F_net]] sirve solo como control de estructura, no como ecuacion dominante del sistema.\r
\r
## Sustitucion numérica\r
Momento de inercia:\r
\r
{{f:momento_angular}}\r
\r
Aceleracion angular:\r
\r
{{f:momento_lineal}}\r
\r
Aceleracion lineal de la periferia:\r
\r
{{f:momento_lineal}}\r
\r
Tiempo para alcanzar 25 rad/s:\r
\r
{{f:momento_angular}}\r
\r
Momento angular final:\r
\r
{{f:momento_lineal}}\r
\r
Momento lineal del centro de masa:\r
\r
{{f:momento_lineal}}\r
\r
## Validacion dimensional\r
La razon entre torque e inercia produce unidades de aceleracion angular. La multiplicacion de inercia por rapidez angular produce momento angular. En la rama lineal, el uso de [[F_net]] recuerda que una causa neta genera una respuesta, mientras que el calculo de [[p]] deja claro que el centro de masa no traslada en este montaje. Todo queda coherente con el sistema elegido.\r
\r
## Interpretacion fisica\r
El resultado dice que un torque moderado basta para producir una respuesta angular grande porque la inercia del disco no es alta. En dos segundos y medio el sistema ya alcanza una rapidez angular apreciable. La aceleracion periferica sale del orden de unos pocos metros por segundo cuadrado, compatible con un montaje de banco. Eso significa que la causa rotacional disponible domina con claridad sobre la resistencia inercial del sistema.\r
\r
La lectura mas importante no es numerica, sino mecanica. El torque organiza el cambio de giro, la inercia del disco modula la dificultad de acelerarlo y el momento angular final resume el estado acumulado al llegar a la velocidad objetivo. Si la masa del disco estuviera mas lejos del eje, la misma causa produciria menos respuesta; si el torque fuera menor, el mismo disco tardaria mas en alcanzar la velocidad pedida. Al mismo tiempo, la definicion de momento lineal confirma que el centro de masa no participa con traslacion. Esta separacion entre giro del cuerpo y reposo del centro evita confundir dinamica rotacional con dinamica lineal.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
Un cabezal de fresado CNC puede modelarse como un disco solido de masa 2.5 kg y radio equivalente 0.08 m. El servomotor debe llevarlo desde el reposo hasta 600 rad/s en 0.4 s para llegar a velocidad de corte. El fabricante necesita estimar el torque minimo del motor, el momento angular final y el efecto de reducir la masa del cabezal a 1.8 kg manteniendo el mismo radio.\r
\r
## Estimacion fisica\r
Antes de calcular, conviene leer la escala. Un cabezal pequeño con radio de pocos centimetros debe tener una inercia rotacional baja. Eso sugiere que el torque requerido sera significativo, pero todavia compatible con un servomotor compacto. La respuesta angular necesaria es muy alta porque el tiempo de arranque es corto.\r
\r
La aceleracion angular objetivo es:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
La inercia rotacional del cabezal es:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
Aplicando la segunda ley rotacional, el torque minimo queda:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
El momento angular final es:\r
\r
{{f:momento_angular}}\r
\r
Si la masa baja a 1.8 kg, la nueva inercia es:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
El nuevo torque minimo pasa a ser:\r
\r
{{f:momento_lineal}}\r
\r
Como el eje sigue fijo, el centro de masa no adquiere velocidad de traslacion y la definicion de momento lineal vuelve a dar un valor nulo para el conjunto. Eso confirma que toda la exigencia del actuador se concentra en la rama rotacional y no en una rama lineal gobernada por [[F_net]].\r
\r
## Interpretacion\r
La reduccion de masa disminuye la inercia rotacional y, por tanto, reduce tanto el torque de arranque como el estado rotacional que el freno debera disipar. El efecto no es marginal: el cambio de inercia es suficiente para aliviar de forma clara la exigencia del servomotor y mejorar el margen del sistema de frenado.\r
\r
Este ejemplo enseña por que la ecuacion fundamental no es solo una formula de examen. Une diseño mecanico, eleccion de motor y criterio de seguridad. Si el cabezal fuera mas pesado o tuviera mayor radio, el mismo tiempo de arranque exigiria un torque mucho mas alto y produciria un momento angular final mas dificil de detener. La fisica relevante del problema queda resumida en esa relacion entre causa rotacional, resistencia inercial y respuesta angular.`;export{a as default};
