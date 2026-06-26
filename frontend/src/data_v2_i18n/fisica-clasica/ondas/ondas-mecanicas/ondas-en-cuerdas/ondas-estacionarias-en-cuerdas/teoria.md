## Contexto conceptual

Las ondas estacionarias emergen cuando dos ondas viajeras de igual amplitud y frecuencia se propagan en sentidos opuestos dentro de un dominio acotado. La interferencia entre ellas produce un patron espacial fijo que oscila temporalmente sin desplazarse. Este fenomeno es la base fisica de los instrumentos de cuerda, las cavidades laser y los modos de vibracion cuantizados en mecanica ondulatoria.

> [!NOTE]
> La pregunta clave es: **¿por que solo ciertos patrones son posibles?** La respuesta esta en las condiciones de contorno que imponen los extremos fijos.

## 🟢 Nivel esencial

Cuando pulsas una cuerda de guitarra, observas que algunos puntos permanecen inmoviles mientras otros se mueven con amplitud maxima. Los puntos inmoviles se llaman **nodos**, y los de maximo movimiento se llaman **vientres** o antinodos.

La onda estacionaria surge de la **superposicion** de dos ondas identicas que viajan en direcciones opuestas. Una onda avanza hacia el puente, se refleja invertida, y al encontrarse con ondas incidentes produce un patron que no se desplaza sino que oscila en su lugar.

La clave esta en los **extremos fijos**. La cuerda esta anclada en ambos extremos, obligando a esos puntos a permanecer siempre en reposo. Esta condicion impone restricciones severas: solo aquellas ondas cuya longitud de onda cumpla una relacion especifica con la longitud de la cuerda pueden establecerse.

El resultado es una **cuantizacion espacial**: la cuerda solo puede vibrar en ciertos modos discretos etiquetados por un numero entero [[numero_armonico]]. En el modo mas simple hay un solo vientre central. En modos superiores aparecen multiples vientres separados por nodos. La frecuencia de oscilacion determina el **tono musical** percibido.

## 🔵 Nivel formal

La descripcion matematica resulta de la superposicion de dos ondas viajeras armonicas de igual amplitud [[amplitud_maxima]], longitud de onda [[longitud_onda_estacionaria]] y frecuencia [[frecuencia_modo]], propagandose en sentidos opuestos con velocidad [[velocidad_propagacion]]:

{{f:funcion_onda_estacionaria}}

Esta expresion separa explicitamente la dependencia espacial de la temporal. La funcion espacial determina la **envolvente estacionaria**, mientras que la parte temporal describe la oscilacion sincronizada de todos los puntos.

Las **condiciones de contorno** para extremos fijos requieren amplitud cero en los extremos para todo tiempo. Esto cuantiza la longitud de onda segun el numero entero [[numero_armonico]] de medias longitudes de onda que caben en la cuerda:

{{f:longitud_onda_estacionaria}}

De esta cuantizacion espacial se deriva la cuantizacion temporal. Sustituyendo la expresion de [[longitud_onda_estacionaria]] en la relacion general de ondas se obtiene el espectro discreto de frecuencias:

{{f:frecuencia_estacionaria}}

El modo fundamental con [[numero_armonico]] igual a 1 establece la **frecuencia base** de la serie armonica:

{{f:frecuencia_fundamental}}

Los modos superiores forman una serie armonica donde [[frecuencia_modo]] es exactamente [[numero_armonico]] veces [[frecuencia_fundamental]]. La posicion de cada nodo [[posicion_nodo]] se determina con el indice entero [[indice_nodo]] que etiqueta cada nodo o vientre dentro del modo. Las posiciones de los nodos estan en:

{{f:posicion_nodos}}

Y los vientres, puntos de interferencia constructiva donde la amplitud es dos veces [[amplitud_maxima]], se ubican en la posicion [[posicion_vientre]] dada por:

{{f:posicion_vientres}}

El patron estacionario del modo [[numero_armonico]] consta de [[numero_armonico]] segmentos identicos de media longitud de onda, cada uno con un vientre central y [[numero_armonico]]+1 nodos en total.

## 🔴 Nivel estructural

Las ondas estacionarias en cuerdas conectan profundamente con multiples areas de la fisica. En **mecanica cuantica**, la cuantizacion impuesta por condiciones de contorno es el analogo directo de la particula en una caja: la funcion de onda debe anularse en las fronteras, produciendo niveles de energia discretos proporcionales al cuadrado del numero de modo.

La **acustica musical** se fundamenta en este fenomeno. Los instrumentos de cuerda producen sonidos cuyo timbre resulta de la superposicion de multiples modos simultaneos. La posicion de ataque del arco o la pua excita selectivamente ciertos armonicos, determinando el color sonoro caracteristico de cada instrumento.

En **optica**, las cavidades laser operan bajo principios analogos. Los espejos actuan como extremos fijos para ondas electromagneticas, cuantizando los modos longitudinales de emision. La separacion espectral entre modos consecutivos depende inversamente de la longitud de la cavidad.

La transicion a **sistemas bidimensionales** (membranas) o tridimensionales (cavidades acusticas) generaliza el concepto, aunque el espectro deja de ser armonico y las formas modales involucran funciones especiales como Bessel o armonicos esfericos.

> [!TIP]
> La estructura matematica de los modos normales reaparece en sistemas fisicos muy diferentes: la semejanza entre la cuerda vibrante y el atomo de hidrogeno no es superficial; ambos obtienen espectros discretos por el mismo mecanismo de condiciones de contorno.

## Interpretación física profunda

El caracter estacionario del patron no significa que la cuerda este en reposo: cada punto experimenta un [[desplazamiento_transversal]] cuya amplitud depende de su posicion, pero la forma del patron no se desplaza. La energia fluye continuamente entre energia cinetica (maxima cuando la cuerda cruza el equilibrio) y energia potencial elastica (maxima en los instantes de maxima curvatura).

Los nodos son puntos de **interferencia destructiva permanente**: las dos ondas viajeras llegan siempre con fases opuestas, cancelando el desplazamiento pero no la tension. Los vientres son puntos de **interferencia constructiva permanente**: las fases coinciden y las amplitudes se suman, produciendo excursion doble.

> [!WARNING]
> Un error comun es pensar que los nodos no tienen dinamica. En realidad, experimentan las maximas variaciones de tension de cizalla y son los puntos con mayor gradiente de deformacion del material.

## Orden de magnitud

Para instrumentos de cuerda tipicos, la longitud vibrante [[longitud_cuerda]] vale entre 0.3 m y 0.7 m, y la velocidad de propagacion [[velocidad_propagacion]] entre 100 m/s y 500 m/s. Esto situa la frecuencia fundamental [[frecuencia_fundamental]] entre 70 Hz y 800 Hz, el rango de las notas musicales graves y medias del instrumento. Los modos superiores pueden alcanzar varios kHz antes de que la inarmonicidad del material haga inadecuado el modelo ideal.

## Método de resolución personalizado

Ante un problema de ondas estacionarias en cuerda con extremos fijos, el procedimiento sistematico es:

1. **Identificar el modo [[numero_armonico]]**: determinar si el enunciado pide el fundamental (modo uno) o un armonico superior.
2. **Calcular [[longitud_onda_estacionaria]]**: aplicar la relacion de cuantizacion con [[longitud_cuerda]] y [[numero_armonico]].
3. **Calcular [[frecuencia_modo]]**: usar la relacion de frecuencias con [[velocidad_propagacion]] y [[numero_armonico]], o alternativamente el producto de [[longitud_onda_estacionaria]] por [[frecuencia_modo]] para verificar consistencia con [[velocidad_propagacion]].
4. **Localizar nodos y vientres**: usar [[numero_armonico]] y [[longitud_cuerda]] para obtener las posiciones exactas.
5. **Verificar coherencia**: el numero de vientres debe ser [[numero_armonico]] y el de nodos debe ser [[numero_armonico]]+1.

> [!NOTE]
> La verificacion de coherencia en el paso 5 detecta la mayoria de errores de aplicacion de condiciones de contorno antes de entregar el resultado.

## Casos especiales y ejemplo extendido

**Modo fundamental (n igual a uno)**: la cuerda forma un unico arco. Media longitud de onda cabe exactamente en la longitud de la cuerda. Es el modo de frecuencia mas baja y mayor longitud de onda.

**Caso n muy grande**: los modos muy superiores tienen longitudes de onda muy pequenas. La cuantizacion sigue siendo valida, pero en cuerdas reales la rigidez de flexion eleva las frecuencias por encima de la prediccion ideal, produciendo inarmonicidad.

**Ejemplo extendido — violin**: una cuerda de violin tiene longitud vibrante de aproximadamente 0.33 m. Cuando el musico presiona la cuerda contra el diapason, acorta [[longitud_cuerda]], lo que aumenta [[frecuencia_fundamental]] inversamente proporcional y produce una nota mas aguda. El timbre rico del violin resulta de que el arco excita simultaneamente docenas de armonicos con amplitudes relativas que dependen del punto exacto de frotamiento.

## Preguntas reales del alumno

**"Por que los nodos estan siempre en los extremos de la cuerda?"**

Los extremos estan fisicamente anclados a elementos rigidos (cejilla y puente). El material impide cualquier movimiento transversal, forzando permanentemente amplitud cero en esos puntos. Esta condicion de contorno es la que cuantiza todo el espectro de modos permitidos.

**"Puede existir una onda estacionaria con un solo nodo?"**

No. El minimo es dos nodos, en los extremos. El modo fundamental tiene exactamente esos dos nodos extremos y un vientre central. Un unico nodo requeriria que la cuerda no estuviera anclada en el otro extremo, lo que cambia completamente las condiciones de contorno y el espectro resultante.

**"Que pasa si los extremos no estan perfectamente fijos?"**

En cuerdas reales, los soportes tienen impedancia mecanica finita, permitiendo pequenos desplazamientos. Esto modifica ligeramente las frecuencias de resonancia respecto al modelo ideal y atenua las oscilaciones por perdidas energeticas en los soportes.

## Conexiones transversales y rutas de estudio

Las ondas estacionarias conectan directamente con **superposicion de ondas** (prerequisito), con los conceptos de **resonancia** y **frecuencias propias**, y anticipan la **mecanica cuantica** donde el mismo formalismo produce espectros de energia discretos. El estudio de **tubos con extremos fijos o abiertos** generaliza el mismo patron con distintas condiciones de contorno.

Para profundizar: estudiar inarmonicidad en cuerdas reales (modelo de Rayleigh), modos en membranas (funciones de Bessel) y cavidades acusticas tridimensionales.

## Síntesis final

Las ondas estacionarias en cuerdas con extremos fijos son el resultado de la interferencia entre ondas viajeras reflejadas en un dominio acotado. Las condiciones de contorno cuantizan simultaneamente la longitud de onda y la frecuencia, produciendo una serie armonica completa. El modo [[numero_armonico]] queda completamente caracterizado por [[numero_armonico]] vientres, [[numero_armonico]]+1 nodos y una frecuencia que es exactamente [[numero_armonico]] veces la frecuencia fundamental [[frecuencia_fundamental]].