const e=`# Errores frecuentes en Condicion de estacionariedad

## Errores conceptuales

El error mas frecuente es creer que una onda estacionaria esta quieta en todos sus puntos. El patron espacial permanece fijo, pero la mayor parte del medio oscila. Los nodos tienen desplazamiento nulo por cancelacion, mientras los vientres alcanzan amplitud maxima. La palabra estacionaria describe el patron, no ausencia total de movimiento.

Otro error conceptual es olvidar que la estacionariedad depende de fronteras. Sin condiciones de frontera no hay seleccion discreta de modos. Una onda viajera libre puede tener muchas longitudes de onda, pero una cavidad solo sostiene las que encajan con su geometria.

### Error 1: usar un modo no entero

Por que parece correcto: al despejar puede salir un valor numerico para [[n]] y parece natural aceptarlo como cualquier variable continua.

Por que es incorrecto: [[n]] cuenta semilongitudes de onda completas. Si no es entero, la forma no cierra de modo compatible con las fronteras ideales.

Senal de deteccion: aparece un valor decimal para [[n]] y aun asi se habla de modo permitido.

Correccion conceptual: redondear no basta; hay que comparar con el modo entero mas cercano y revisar la frecuencia de excitacion.

Mini-ejemplo: un resultado [[n]] cercano a 2.4 no es el segundo modo ni el tercero; indica que esa frecuencia no encaja como estacionaria pura.

## Errores de modelo

Un fallo de modelo consiste en aplicar la condicion de cuerda fija a cualquier cavidad. Los tubos abiertos, tubos cerrados, membranas y placas tienen condiciones distintas. La idea de modo discreto se mantiene, pero cambia la fraccion de [[lambda]] que cabe en [[L]].

Tambien es erroneo ignorar perdidas, rigidez o dispersion cuando dominan el experimento. Si los nodos se difuminan o la frecuencia cambia con amplitud, el modelo ideal deja de describir la situacion.

## Errores matemáticos

El error algebraico habitual es confundir [[L]] y [[lambda]]. En el modo fundamental de cuerda fija, [[L]] contiene media longitud de onda, no una longitud completa. Otro error es olvidar que al duplicar [[n]] se duplica [[f_n]] solo si [[L]] y [[v]] permanecen constantes.

Tambien se mezclan unidades: centimetros para [[L]] con metros por segundo para [[v]], o frecuencia en kilohertz sin conversion. La coherencia dimensional debe producir frecuencia en \`[T⁻¹]\`.

## Errores de interpretación

Un resultado correcto puede interpretarse mal si se cree que cualquier frecuencia cercana produce el modo. La condicion dice que hay frecuencias permitidas, pero la amplitud observada depende del acoplamiento y de las perdidas. Un modo posible puede no verse si no se excita adecuadamente.

Tambien se interpreta [[f_n]] como propiedad solo de la fuente. En realidad combina fuente, medio y frontera. Cambiar [[L]] cambia las frecuencias aunque la fuente pueda emitir lo mismo.

## Regla de autocontrol rápido

Antes de cerrar un problema, comprueba que [[L]] sea positiva, [[lambda]] positiva, [[n]] entero positivo y [[v]] coherente con el medio. Despues verifica que [[f_n]] corresponde a ese mismo modo. Si la frontera no es la de cuerda fija ideal, cambia de modelo antes de confiar en el numero.

Una comprobacion final util es dibujar mentalmente nodos y vientres. Si el dibujo no cabe en la cavidad, la cuenta no representa una estacionaria permitida.
`;export{e as default};
