const e=`# Ejemplo tipo examen

## Enunciado

Una cuerda de laboratorio esta fija en ambos extremos. El tramo vibrante mide 0.80 m, la tension aplicada es 72 N y la masa por unidad de longitud es 0.020 kg/m. Se quiere analizar el tercer modo estacionario, identificar su longitud de onda modal y estimar su frecuencia propia. Interpreta tambien que ocurriria si se usara una cuerda con mayor densidad lineal manteniendo la misma longitud y tension.

## Datos

- Longitud vibrante: 0.80 m.
- Tension de la cuerda: 72 N.
- Densidad lineal: 0.020 kg/m.
- Modo estudiado: tercer modo.
- Extremos: fijos, con nodos en ambos apoyos.

## Definición del sistema

El sistema es el tramo de cuerda que realmente vibra entre los apoyos. Por tanto [[L]] corresponde a 0.80 m, no a la cuerda sobrante que pueda quedar fuera del montaje. La tension [[T]] se considera uniforme, la densidad lineal [[mu]] se considera constante y el numero de modo [[n]] se toma entero. La magnitud observable que interesa al final es [[f_n]], porque permite decidir si una excitacion externa producira una resonancia clara.

## Modelo físico

Se usa el modelo de cuerda tensa ideal. En este modelo, [[T]] y [[mu]] fijan la rapidez de propagacion [[v]] de las ondas viajeras transversales. Despues, la condicion de extremos fijos selecciona [[lambda_n]] y [[f_n]] para el modo [[n]]. El modelo esta anclado en que la cuerda es flexible, uniforme, de amplitud pequena y con nodos estables en los extremos.

## Justificación del modelo

El modelo vale porque el problema describe una cuerda fija en ambos extremos y da directamente [[T]], [[mu]] y [[L]], que son las magnitudes mecanicas necesarias. La tension es suficientemente grande para tratar la cuerda como tensa, y no se mencionan grandes amplitudes, rigidez ni amortiguamiento fuerte. Deja de valer si la cuerda se curva con amplitud grande, si la tension cambia apreciablemente durante la vibracion o si el apoyo no fija un nodo real.

## Resolución simbólica

Primero se obtiene la rapidez de propagacion:

{{f:velocidad_cuerda_tensa}}

Despues se usa el ajuste espacial del modo:

{{f:longitud_onda_modo_cuerda}}

Por ultimo se calcula la frecuencia propia del modo seleccionado:

{{f:frecuencia_modo_cuerda}}

La secuencia fisica es importante. No se calcula [[f_n]] directamente desde [[T]] y [[mu]] como si fueran datos aislados; primero se interpreta que esas magnitudes producen [[v]]. Luego [[n]] y [[L]] convierten esa rapidez en una frecuencia estacionaria concreta. Al mismo tiempo, [[lambda_n]] permite comprobar que el patron dibujado contiene tres vientres y nodos en los extremos.

## Sustitución numérica

Con 72 N y 0.020 kg/m, dividir la tension entre la densidad lineal da 3600 en unidades coherentes; la raiz cuadrada produce una rapidez de aproximadamente 60 m/s. Por tanto [[v]] se interpreta como unos 60 m/s.

Para el tercer modo, duplicar 0.80 m y repartirlo entre tres vientres da una longitud de onda modal de aproximadamente 0.53 m. Por tanto [[lambda_n]] queda cerca de 0.53 m. Para la frecuencia, multiplicar el modo tres por 60 m/s y repartirlo entre el doble de 0.80 m da aproximadamente 112.5 Hz. Asi [[f_n]] se situa en torno a 113 Hz.

## Validación dimensional

La velocidad obtenida usa tension dividida por densidad lineal. Dimensionalmente, N dividido por kg/m produce una magnitud de tipo \`[L² T⁻²]\`; su raiz conduce a \`[L T⁻¹]\`, que corresponde a m/s.

La frecuencia modal combina velocidad con una longitud en el denominador y un numero de modo adimensional. La lectura dimensional queda en \`[T⁻¹]\`, compatible con hertz. La longitud de onda modal conserva dimension \`[L]\`, de modo que el encaje espacial tambien es coherente.

## Interpretación física

El resultado no solo dice que aparece una frecuencia de unos 113 Hz. Dice que esa frecuencia pertenece al tercer patron estacionario de esta cuerda concreta. La cuerda contiene tres vientres, una longitud de onda modal de algo mas de medio metro y una rapidez de propagacion que nace del balance entre [[T]] y [[mu]]. Si se excita cerca de esa frecuencia, el tercer modo respondera con mas claridad que una frecuencia intermedia.

Si se aumenta [[mu]] manteniendo [[T]], [[L]] y [[n]], la cuerda adquiere mas inercia por metro. Entonces baja [[v]] y tambien baja [[f_n]]. Si en cambio se aumenta [[T]], la perturbacion viaja mas rapido y la frecuencia sube, pero no con una proporcion directa. Esto muestra que la afinacion de una cuerda no depende de una unica causa, sino del balance entre traccion, inercia y geometria.

# Ejemplo de aplicación real

## Contexto

Una guitarra cambia de nota cuando el interprete presiona una cuerda contra un traste. Fisicamente, el dedo acorta el tramo vibrante [[L]], mientras la cuerda mantiene aproximadamente la misma [[T]] y la misma [[mu]]. El modo fundamental sigue siendo el primer modo, pero el espacio donde debe encajar el patron se reduce.

## Estimación física

Supongamos una cuerda cuyo tramo libre inicial es de unos 0.65 m y cuya rapidez [[v]] esta alrededor de 130 m/s. El fundamental queda en el orden de 100 Hz, porque la rapidez se reparte sobre el doble de la longitud vibrante. Si el traste reduce el tramo a unos 0.49 m, la misma estimacion da una frecuencia del orden de 130 Hz. No hace falta una lectura exacta para ver el mecanismo: al disminuir [[L]] aproximadamente una cuarta parte, la frecuencia sube en una proporcion comparable.

La estimacion tambien permite separar causas. Cambiar a una cuerda mas gruesa aumenta [[mu]] y baja [[v]], asi que para una misma posicion del dedo la nota seria mas grave. Tensar la cuerda con la clavija aumenta [[T]] y sube la nota. La aplicacion real combina esos controles, pero el leaf permite leer cual domina en cada accion.

## Interpretación

La cuerda musical confirma que una onda estacionaria no es solo una forma bonita. Es un filtro fisico de frecuencias. El instrumento no necesita "calcular" la nota: la selecciona porque solo algunas frecuencias reconstruyen el patron compatible con los extremos. El dedo modifica la frontera, la clavija modifica la tension y el calibre modifica la inercia lineal.

Por eso el ejemplo real se interpreta mejor con [[f_n]] como magnitud dominante. Una nota mas aguda puede deberse a menor [[L]], mayor [[T]] o menor [[mu]], y cada causa tiene consecuencias practicas distintas sobre tacto, resistencia de la cuerda y timbre.
`;export{e as default};
