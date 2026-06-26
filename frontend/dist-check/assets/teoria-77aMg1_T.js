const e=`# Condicion de estacionariedad

## Contexto conceptual

Una onda estacionaria aparece cuando dos ondas compatibles se superponen de modo que el patron espacial queda fijo. No significa que no haya movimiento: muchos puntos oscilan, pero los nodos permanecen en posiciones estables. La condicion de estacionariedad pregunta que formas espaciales pueden mantenerse entre fronteras. En una cuerda fija o una cavidad ideal, no cualquier longitud de onda sirve.

El nucleo del leaf es geometrico y discreto. La longitud util [[L]] impone una restriccion; la longitud de onda [[lambda]] debe encajar de manera que aparezca un numero entero [[n]] de semilongitudes de onda. Cuando esa condicion se cumple, el medio puede oscilar con una frecuencia modal [[f_n]], determinada tambien por la rapidez [[v]] de las ondas viajeras que forman el patron.

## 🟢 Nivel esencial

La idea esencial es que una onda estacionaria solo se sostiene si la forma cabe entre las fronteras. En una cuerda fija por ambos extremos, esos extremos deben ser nodos. Si la cuerda intenta vibrar con una forma que no deja nodos en los extremos, la superposicion no se mantiene como modo estable. La frontera corrige o destruye esa forma.

Por eso los modos permitidos son discretos. El primer modo tiene una sola panza o vientre principal; el segundo tiene dos; el tercero tiene tres. El numero [[n]] cuenta ese orden modal. [[L]] no es automaticamente igual a [[lambda]]: para cada modo cambia la relacion. La frecuencia [[f_n]] tampoco es cualquier frecuencia aplicada desde fuera, sino la que corresponde a un modo que respeta la geometria.

## 🔵 Nivel formal

Formalmente, la condicion espacial para una cuerda fija por ambos extremos indica que en la longitud [[L]] debe caber un numero entero de semilongitudes de onda. La frontera convierte una familia continua de formas posibles en un conjunto discreto de modos.

{{f:condicion_estacionaria_cuerda}}

Esta relacion tiene una lectura directa: para [[n]] igual a uno, cabe media longitud de onda; para [[n]] igual a dos, cabe una longitud de onda completa; para [[n]] igual a tres, caben tres semilongitudes de onda. La variable [[n]] no es un ajuste decimal, sino un entero positivo que identifica el modo.

Una vez fijada la condicion espacial, la rapidez [[v]] del medio convierte esa geometria en una frecuencia permitida. Para el caso ideal de extremos equivalentes, la frecuencia modal queda determinada por el numero de modo, la rapidez y la longitud de la cavidad.

{{f:frecuencia_modo_estacionario}}

La formula muestra que, si [[L]] y [[v]] permanecen fijos, aumentar [[n]] aumenta [[f_n]]. Tambien muestra que una cavidad mas larga baja las frecuencias permitidas. Esta es la razon por la que instrumentos mas largos producen modos fundamentales mas graves si el medio y las condiciones de frontera son comparables.

## 🔴 Nivel estructural

Estructuralmente, la estacionariedad no es una propiedad de una onda aislada, sino de una superposicion bajo condiciones de frontera. Dos ondas viajeras de igual frecuencia y amplitud, que se desplazan en sentidos opuestos, pueden generar un patron fijo. Las fronteras seleccionan que fases sobreviven y cuales se cancelan. Por eso la condicion de estacionariedad une interferencia, reflexion y resonancia.

El modelo ideal falla cuando las fronteras no son equivalentes, cuando hay perdidas fuertes, cuando la velocidad [[v]] cambia con la frecuencia o cuando la cavidad no es uniforme. Tambien hay que modificarlo en tubos abiertos y cerrados, membranas bidimensionales o sistemas con rigidez apreciable. En esos casos la idea de modo entero permanece, pero la relacion espacial concreta puede cambiar.

La condicion tambien distingue posibilidad geometrica y excitacion real. Que un modo sea permitido no significa que vaya a aparecer con gran amplitud. Para observarlo hace falta excitar cerca de [[f_n]] y acoplar energia al modo correcto. Si se fuerza una frecuencia intermedia, el sistema puede responder debilmente o combinar modos, pero no genera una estacionaria pura del modelo ideal.

Otro punto estructural es que los modos forman una familia ordenada. No se elige [[n]] despues de ver el resultado; se elige el modo y luego se comprueba que la geometria lo admite. Esta lectura impide tratar la condicion como una ecuacion continua cualquiera. La discontinuidad entre modos vecinos es fisica: representa formas distintas de repartir nodos y vientres dentro de la misma longitud [[L]].

En un analisis cuidadoso conviene distinguir tres niveles de respuesta. Primero esta el modo permitido por frontera. Segundo esta la frecuencia a la que ese modo oscila. Tercero esta la amplitud que realmente alcanza cuando se lo excita. La condicion de estacionariedad resuelve sobre todo los dos primeros niveles; el tercero exige hablar de energia, perdidas y acoplamiento.

## Interpretación física profunda

La lectura fisica profunda es que la frontera convierte continuidad en seleccion. En una onda viajera libre, muchas longitudes de onda pueden propagarse. En una cavidad, solo ciertas formas respetan simultaneamente la geometria y la fase reflejada. La estacionariedad es una compatibilidad entre espacio, tiempo y frontera.

Esto explica por que los nodos no son puntos muertos absolutos del sistema, sino posiciones donde la superposicion cancela desplazamiento. La energia sigue intercambiandose entre formas cineticas y potenciales del medio. El patron parece fijo, pero la oscilacion temporal permanece.

## Orden de magnitud

En cuerdas de longitud menor que un metro, las frecuencias fundamentales suelen estar en decenas o centenas de hertz si la rapidez es de decenas o centenas de metros por segundo. En cavidades de aire, longitudes de varios decimetros producen frecuencias audibles. Si [[L]] se duplica y [[v]] no cambia, la frecuencia fundamental se reduce aproximadamente a la mitad.

## Método de resolución personalizado

Primero identifica las fronteras: fijas, abiertas, cerradas o mixtas. Despues decide si la condicion espacial corresponde a semilongitudes de onda enteras. Si el caso es cuerda fija ideal, usa [[L]], [[lambda]] y [[n]]. Despues introduce [[v]] para calcular [[f_n]]. Al interpretar, pregunta si el modo es permitido, si la frecuencia lo excita y si las hipotesis de frontera son razonables.

## Casos especiales y ejemplo extendido

Una cuerda fija por ambos extremos admite nodos en los extremos. Un tubo abierto en ambos extremos admite antinodos de desplazamiento en los extremos. Un tubo cerrado por un extremo cambia la familia de modos permitidos. Este leaf usa la condicion de cuerda ideal como base, pero prepara la idea general: las fronteras deciden que fracciones de [[lambda]] caben en [[L]].

## Preguntas reales del alumno

¿Por que no vale cualquier frecuencia? Porque la onda reflejada debe recombinarse con fase compatible. ¿Por que [[n]] debe ser entero? Porque cuenta semilongitudes completas que caben en la cavidad. ¿Una onda estacionaria transporta energia hacia un lado? El patron ideal no tiene transporte neto de energia en una direccion, aunque el medio siga oscilando.

## Conexiones transversales y rutas de estudio

Este leaf conecta con superposicion, interferencia, reflexion, nodos y antinodos, resonancia, cuerdas y tubos. La ruta natural es entender primero ondas viajeras, despues superposicion, luego condicion espacial y finalmente resonancia modal. Tambien prepara modelos de membranas y cavidades donde las condiciones de frontera se vuelven bidimensionales o tridimensionales.

## Síntesis final

La condicion de estacionariedad dice que una cavidad no acepta cualquier forma ondulatoria. [[L]] impone una geometria, [[n]] selecciona un modo entero, [[lambda]] debe encajar en esa geometria y [[v]] convierte el modo permitido en una frecuencia [[f_n]]. La clave es leer la estacionariedad como compatibilidad entre frontera, longitud de onda y frecuencia modal.
`;export{e as default};
