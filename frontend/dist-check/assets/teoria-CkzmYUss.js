const e=`# Cuerdas

## Contexto conceptual

Una cuerda tensa es el ejemplo clasico mas limpio de **onda estacionaria mecanica**. La perturbacion se mueve transversalmente, pero la energia viaja inicialmente a lo largo de la cuerda como dos ondas viajeras opuestas. Cuando los extremos estan fijos, esas ondas se reflejan y solo algunos patrones quedan reforzados de forma estable. El resultado visible no es una onda que avance, sino una forma que vibra con nodos fijos y vientres alternos.

Este leaf se centra en la cuerda como **sistema fisico concreto**, no solo en la condicion geometrica general. Aqui importan tres decisiones reales: la longitud vibrante [[L]], la tension [[T]] y la densidad lineal [[mu]]. Con ellas se determina la velocidad de propagacion [[v]] y, despues, la frecuencia modal [[f_n]] de cada numero de modo [[n]].

## 🟢 Nivel esencial

Una cuerda fija por sus extremos no puede adoptar cualquier forma estacionaria. Los extremos deben permanecer en reposo, de modo que actuan como nodos. Entre ellos solo encajan patrones donde aparece un numero entero de vientres. Por eso [[n]] no es una etiqueta decorativa: cuenta una forma posible de vibracion.

La idea esencial es que la cuerda combina **geometria y mecanica**. La geometria decide cuantas ondas caben mediante [[L]] y [[lambda_n]]. La mecanica decide lo rapido que esas ondas viajan mediante [[T]] y [[mu]]. Si la cuerda se tensa mas, la perturbacion se comunica antes. Si la cuerda es mas pesada por metro, responde con mas inercia.

> [!NOTE]
> La cuerda estacionaria no esta "quieta". Lo que permanece fijo es el patron espacial de nodos y vientres.

## 🔵 Nivel formal

El primer paso formal consiste en obtener la rapidez de las ondas transversales que recorren la cuerda. En el modelo ideal, esa rapidez depende de la traccion longitudinal y de la masa por unidad de longitud.

{{f:velocidad_cuerda_tensa}}

Esta relacion no dice que la tension se convierta en velocidad por simple proporcionalidad directa. La raiz expresa un balance entre una accion que transmite fuerza, [[T]], y una inercia distribuida, [[mu]]. Por eso subir mucho la tension produce un aumento moderado de [[v]], mientras que usar una cuerda mas densa reduce la rapidez.

El segundo paso une la rapidez con la condicion de extremos fijos. Para el modo [[n]], la frecuencia permitida queda ligada a la longitud vibrante:

{{f:frecuencia_modo_cuerda}}

La misma cuerda tiene una escalera de frecuencias. Si [[L]] y [[v]] permanecen fijos, cada aumento entero de [[n]] eleva [[f_n]]. El modo fundamental corresponde al primer patron con un solo vientre; los modos superiores introducen mas vientres y nodos internos.

La longitud de onda modal se obtiene desde el ajuste espacial:

{{f:longitud_onda_modo_cuerda}}

Asi, [[lambda_n]] no se elige libremente. La cuerda obliga a que encaje una cantidad entera de semilongitudes entre extremos fijos. Esta es la razon matematica de que los armonicos aparezcan discretos.

## 🔴 Nivel estructural

La estructura profunda del fenomeno es una **doble seleccion**. Primero, la cuerda selecciona una familia de formas espaciales porque sus extremos imponen nodos. Segundo, sus propiedades mecanicas asignan una escala temporal a cada forma. La misma geometria con otra tension o con otra densidad lineal conserva los nodos y vientres, pero desplaza todas las frecuencias.

La dependencia tiene consecuencias importantes. Aumentar [[L]] separa los nodos extremos y permite patrones mas largos; por eso reduce la escala de frecuencia. Aumentar [[T]] hace mas eficaz la transmision de la perturbacion; por eso eleva [[v]] y luego [[f_n]]. Aumentar [[mu]] reparte mas masa en cada metro; por eso baja la rapidez y hace la cuerda mas grave. Aumentar [[n]] no modifica la cuerda material, sino que selecciona un patron espacial mas comprimido.

El modelo deja de ser fiable cuando las hipotesis dejan de describir el objeto real. En una cuerda de guitarra gruesa, la rigidez flexional desplaza los modos altos y los separa de la serie ideal. Con amplitudes grandes, la tension cambia durante la oscilacion y aparece no linealidad. Con amortiguamiento fuerte, el patron puede verse durante poco tiempo aunque la frecuencia propia exista.

Tambien hay una diferencia sutil entre una cuerda **excitada** y una cuerda **resonante**. Se puede mover una cuerda con casi cualquier frecuencia, pero solo cerca de sus frecuencias propias aparece una estacionaria estable y grande. El grafico Coord debe reflejar esta lectura: el modo entero determina el numero de vientres, mientras [[T]], [[mu]] y [[L]] fijan la etiqueta cuantitativa de [[f_n]].

> [!WARNING]
> Si [[n]] no es entero, no estas describiendo un modo propio de una cuerda fija-fija ideal.

## Interpretación física profunda

La cuerda estacionaria es una lectura de **compatibilidad**. La forma espacial no se impone desde fuera como un dibujo arbitrario; aparece porque las ondas reflejadas solo se refuerzan si regresan con fase compatible con los extremos fijos. Cada vuelta de la perturbacion debe reconstruir el mismo patron en lugar de borrarlo.

La frecuencia no es una propiedad aislada del instrumento ni una propiedad aislada del modo. [[f_n]] nace de juntar el patron espacial con la rapidez [[v]]. Por eso una misma nota puede subirse tensando la cuerda, acortando el tramo vibrante o usando una cuerda mas ligera. Las tres acciones cambian causas fisicas distintas, aunque todas puedan mover la frecuencia final.

## Orden de magnitud

En una cuerda de laboratorio de [[L]] cercano a 1 m, tension de decenas de newtons y [[mu]] de unos gramos por metro, [[v]] suele caer entre decenas y algunos cientos de metros por segundo. Eso produce frecuencias fundamentales de decenas a centenares de hertz. Si un calculo da varios megahertz para una cuerda visible de aula, probablemente se ha usado una [[mu]] demasiado pequena o una unidad mal convertida.

Comparar ordenes de magnitud ayuda a detectar errores. Una cuerda diez veces mas pesada por metro no baja la frecuencia diez veces, porque interviene una raiz. Una cuerda diez veces mas corta si puede elevar la frecuencia de forma mucho mas directa cuando lo demas permanece comparable.

## Método de resolución personalizado

Primero identifica el tramo vibrante real [[L]], no la longitud total de material. Despues determina si la cuerda puede tratarse como uniforme y tensa. Con [[T]] y [[mu]] calcula la rapidez [[v]]. A continuacion elige un modo entero [[n]] y obtiene [[lambda_n]] para comprobar el encaje espacial. Finalmente calcula [[f_n]] y revisa si el valor tiene sentido para la cuerda observada.

El autocontrol mas rapido es visual: el modo seleccionado debe tener [[n]] vientres y nodos en ambos extremos. Si el dibujo no coincide con el modo usado en el calculo, la frecuencia numerica queda desconectada del fenomeno.

## Casos especiales y ejemplo extendido

El caso fundamental tiene un solo vientre. Es muy estable didacticamente porque permite ver que la cuerda completa contiene media longitud de onda modal. En el segundo modo aparece un nodo central y dos vientres; aqui [[lambda_n]] coincide con [[L]], lo que explica un error frecuente: creer que esa igualdad vale siempre.

En cuerdas reales, los modos altos no siempre son multiplos perfectos del fundamental. La rigidez de la cuerda, el contacto con apoyos y la disipacion introducen correcciones. En instrumentos musicales, estas desviaciones importan porque afectan al timbre y a la afinacion fina. En problemas introductorios se ignoran para aislar el mecanismo principal.

Como ejemplo mental, piensa en una cuerda que se acorta presionandola contra un traste. [[L]] disminuye, el patron espacial queda comprimido y la frecuencia sube. Si ademas se cambia a una cuerda mas gruesa, [[mu]] aumenta y la frecuencia tiende a bajar. El sonido final aparece del balance entre esos efectos.

## Preguntas reales del alumno

**¿Por que los extremos son nodos?** Porque un extremo fijo no puede desplazarse transversalmente. La cuerda puede tirar del soporte, pero el punto de contacto ideal no acompana la oscilacion.

**¿El modo [[n]] significa numero de nodos?** En una cuerda fija-fija ideal, [[n]] cuenta vientres. Los nodos incluyen los extremos y los nodos internos, por eso no conviene identificar sin matiz ambos conteos.

**¿Por que una cuerda mas tensa suena mas aguda?** Porque mayor [[T]] aumenta [[v]], y una perturbacion que recorre antes el mismo patron produce mayor [[f_n]].

**¿Por que una cuerda mas gruesa suena mas grave?** Porque mayor [[mu]] aporta mas inercia por metro. La perturbacion se propaga mas despacio y las frecuencias propias bajan.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con [Condicion de estacionariedad](leaf:fisica-clasica/ondas/ondas-estacionarias/condicion-de-estacionariedad), donde se estudia el criterio geometrico general. Aqui se anade la causa mecanica propia de cuerdas: tension y densidad lineal.

Tambien prepara el estudio de resonancia, armonicos y sonido musical. Una cuerda es un puente natural entre ondas mecanicas, energia transportada y percepcion sonora, porque convierte un patron espacial en una frecuencia audible.

## Síntesis final

Una cuerda estacionaria fija sus modos por geometria y sus frecuencias por mecanica. [[L]] y [[n]] seleccionan la forma; [[T]] y [[mu]] determinan [[v]]; juntas, esas magnitudes producen [[f_n]] y explican por que solo ciertas frecuencias destacan como modos estables.
`;export{e as default};
