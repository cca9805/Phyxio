# Tubos

## Contexto conceptual

Un tubo acustico es una columna de aire que puede sostener **ondas estacionarias longitudinales**. Lo que oscila no es una cuerda visible, sino el aire: unas zonas alternan compresion y rarefaccion, y otras actuan como puntos de referencia casi fijos para el patron. Por eso los tubos son el ejemplo clasico de resonancia en instrumentos de viento, organos, botellas y cavidades sonoras.

La clave del leaf es que el tipo de extremo cambia la serie de frecuencias. Un tubo abierto por ambos extremos no selecciona los mismos modos que un tubo abierto por un extremo y cerrado por el otro. La longitud efectiva [[L_eff]], la velocidad del sonido [[v]] y el indice modal [[n]] o [[m]] determinan la frecuencia [[f_n]].

## 🟢 Nivel esencial

En un tubo abierto, el aire de la boca puede moverse con facilidad. Esa region se comporta como un vientre de desplazamiento. En un extremo cerrado, el aire pegado a la pared no puede desplazarse longitudinalmente, de modo que aparece un nodo de desplazamiento. Esta diferencia de frontera cambia por completo que patrones caben.

La idea esencial es distinguir **tubo abierto-abierto** y **tubo abierto-cerrado** antes de calcular. El primero admite una serie completa de armonicos. El segundo selecciona solo patrones impares, porque debe unir un vientre en la boca abierta con un nodo en el extremo cerrado. La longitud fisica [[L]] orienta, pero la resonancia real suele depender de [[L_eff]].

> [!NOTE]
> En acustica de tubos, "abierto" y "cerrado" describen condiciones de movimiento del aire, no solo apariencia geometrica.

## 🔵 Nivel formal

Para un tubo abierto por ambos extremos, la columna de aire presenta vientres de desplazamiento en las dos bocas. La longitud efectiva contiene un numero entero de semilongitudes de onda, y la frecuencia modal queda:

{{f:frecuencia_tubo_abierto}}

La longitud de onda asociada al mismo modo se expresa mediante:

{{f:longitud_onda_tubo_abierto}}

Aqui [[n]] toma valores enteros consecutivos. Por eso el tubo abierto ideal produce una serie armonica completa. Si [[L_eff]] permanece fija, doblar el indice modal dobla la frecuencia, porque el patron espacial se comprime sin cambiar la velocidad [[v]].

Esta proporcionalidad modal solo vale despues de fijar correctamente la frontera abierta.

Para un tubo abierto-cerrado, la frontera cerrada impone nodo de desplazamiento y la abierta impone vientre. El fundamental contiene un cuarto de longitud de onda, y los modos superiores aparecen mediante factores impares:

{{f:frecuencia_tubo_cerrado}}

La longitud de onda modal correspondiente es:

{{f:longitud_onda_tubo_cerrado}}

El indice [[m]] no enumera todos los armonicos de la serie abierta; genera factores impares. Este detalle formal es el centro del leaf: un tubo cerrado por un extremo no tiene el segundo armonico ideal de un tubo abierto comparable.

## 🔴 Nivel estructural

La estructura profunda del fenomeno es una **seleccion por frontera acustica**. En una cuerda fija, las fronteras suelen ser nodos de desplazamiento. En un tubo, una boca abierta y un extremo cerrado no imponen lo mismo. Por eso dos tubos con longitud parecida pueden tener fundamentales diferentes y series de resonancia distintas.

La magnitud [[L_eff]] introduce un matiz importante. El aire en una boca abierta no deja de moverse exactamente en el corte geometrico del tubo. La oscilacion se extiende un poco hacia fuera, asi que la longitud acustica puede ser mayor que [[L]]. En tubos estrechos la correccion puede tratarse como pequena; en bocas anchas, campanas o flautas reales, el modelo simple necesita ajustes.

La velocidad [[v]] aporta la escala temporal y depende del medio. En aire cotidiano se toma del orden de unos cientos de metros por segundo, pero cambia con temperatura y composicion. Si el aire esta caliente, la frecuencia sube para la misma geometria. Si hay flujo fuerte, perdidas importantes o extremos mal definidos, las resonancias se desplazan y se ensanchan.

La lectura grafica debe distinguir desplazamiento y presion. En un extremo cerrado hay nodo de desplazamiento pero vientre de presion. En un extremo abierto ocurre aproximadamente lo contrario. Esta dualidad explica muchos errores: dibujar vientres de presion donde se estaban razonando vientres de desplazamiento cambia el significado del modo.

> [!WARNING]
> Usar la serie completa de un tubo abierto en un tubo abierto-cerrado produce resonancias que el modelo ideal no permite.

## Interpretación física profunda

Un tubo resuena cuando la onda sonora reflejada reconstruye el mismo patron tras recorrer la columna de aire. La frontera decide si la reflexion debe producir compatibilidad con un vientre o con un nodo de desplazamiento. Por eso el mismo [[L_eff]] no basta: hace falta saber que tipo de extremos tiene el resonador.

La frecuencia [[f_n]] es una lectura de compatibilidad entre espacio y tiempo. [[lambda_n]] dice que escala espacial cabe; [[v]] dice con que rapidez se propaga la perturbacion; [[n]] o [[m]] seleccionan la familia modal. Cuando esas piezas encajan, una excitacion externa puede amplificarse como tono estable.

## Orden de magnitud

Un tubo abierto de [[L_eff]] cercano a 0.50 m en aire ordinario tiene un fundamental del orden de cientos de hertz. Un tubo abierto-cerrado de la misma longitud efectiva tiene un fundamental aproximadamente de orden menor, porque encaja un cuarto de onda fundamental. Para tubos de pocos centimetros aparecen frecuencias de varios kilohertz; para tubos de metros, decenas de hertz.

Un resultado absurdo se detecta comparando escala. Si un tubo de medio metro produce segun el calculo una frecuencia de megahertz, se ha usado una longitud demasiado pequena o una velocidad no acustica. Si aparece una frecuencia de milihertz, probablemente se ha confundido metro con kilometro o se ha usado mal la serie modal.

## Método de resolución personalizado

Primero identifica los extremos: abierto-abierto o abierto-cerrado. Despues decide si usar [[L]] o una [[L_eff]] corregida. Elige [[n]] para tubo abierto o [[m]] para tubo cerrado. Calcula [[lambda_n]] para comprobar el dibujo modal y finalmente calcula [[f_n]] con la serie adecuada.

El autocontrol visual consiste en revisar las fronteras. Un tubo abierto-abierto debe mostrar vientres de desplazamiento en ambos extremos. Un tubo abierto-cerrado debe mostrar vientre en la boca abierta y nodo en el extremo cerrado. Si el dibujo no respeta eso, el calculo esta aplicado al tubo equivocado.

## Casos especiales y ejemplo extendido

Una botella soplada se parece a un resonador abierto-cerrado, pero no siempre se comporta como tubo simple: el volumen de la cavidad y el cuello pueden dominar. Por eso el leaf de tubos es una primera aproximacion, no una descripcion universal de cualquier objeto hueco.

Una flauta abierta ideal se aproxima mejor a un tubo abierto-abierto, aunque los agujeros laterales cambian la longitud efectiva. Al abrir un agujero, el instrumento crea una nueva frontera acustica y reduce [[L_eff]]. El tono sube porque el patron compatible queda mas corto.

En un organo, tubos abiertos y cerrados pueden producir notas relacionadas con longitudes distintas. Un tubo cerrado puede lograr una nota grave con menor longitud fisica que un abierto equivalente, precisamente porque su fundamental se basa en un cuarto de onda.

## Preguntas reales del alumno

**¿Por que un extremo abierto es vientre de desplazamiento?** Porque el aire en la boca puede moverse hacia fuera y hacia dentro con poca restriccion mecanica.

**¿Por que un extremo cerrado es nodo de desplazamiento?** Porque la pared impide que el aire avance longitudinalmente en ese punto.

**¿Todos los tubos tienen todos los armonicos?** No. Un tubo abierto-cerrado ideal selecciona solo la serie impar.

**¿Por que se usa [[L_eff]] y no siempre [[L]]?** Porque la frontera acustica de una boca abierta no coincide exactamente con el borde geometrico.

## Conexiones transversales y rutas de estudio

Este leaf conecta con [Condicion de estacionariedad](leaf:fisica-clasica/ondas/ondas-estacionarias/condicion-de-estacionariedad), porque aplica el criterio de encaje modal a una columna de aire. Tambien conecta con [Naturaleza del sonido](leaf:fisica-clasica/ondas/sonido/naturaleza-del-sonido), donde la onda longitudinal se interpreta como variaciones de presion.

La ruta natural continua hacia resonancia, instrumentos musicales y timbre. Los tubos muestran que una misma matematica de ondas estacionarias cambia de forma fisica cuando cambian las condiciones de frontera.

## Síntesis final

Los tubos seleccionan frecuencias por longitud efectiva, velocidad sonora y tipo de extremo. Un tubo abierto usa modos enteros consecutivos; un tubo abierto-cerrado usa factores impares. Entender [[f_n]] exige leer primero la frontera acustica y despues aplicar la serie modal adecuada.
