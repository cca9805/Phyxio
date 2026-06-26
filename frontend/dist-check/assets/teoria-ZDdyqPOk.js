const e=`## Contexto conceptual

Una barra elastica confinada por sus condiciones de contorno solo puede vibrar de forma estable a ciertas frecuencias discretas. Estas son las frecuencias naturales o frecuencias de resonancia. A cada frecuencia natural le corresponde un patron espacial de vibracion llamado modo normal.

El fenomeno fundamental es que las ondas viajeras que se propagan por la barra se reflejan en los extremos y al superponerse constructivamente forman ondas estacionarias. Solo cuando la longitud de la barra es un multiplo adecuado de la semilongitud de onda, la superposicion es constructivamente sostenida: eso define las frecuencias permitidas.

Este leaf trata los modos longitudinales (compresion-extension a lo largo del eje), los torsionales (giro alrededor del eje) y menciona la conexion con los flexionales (tratados en detalle en el leaf de ondas flexionales en vigas). Las condiciones de contorno fundamentales son: extremo libre (esfuerzo nulo, desplazamiento maximo) y extremo fijo (desplazamiento nulo, esfuerzo maximo).

## 🟢 Nivel esencial

Cuando golpeas una barra metalica, vibra a ciertas frecuencias concretas: emite un sonido con tono definido. Esas frecuencias dependen de la longitud, del material y de como esten sujetos los extremos.

La frecuencia mas baja se llama fundamental o primer armonico. Las siguientes se llaman armonicos superiores. Si la barra esta libre por ambos extremos, los armonicos son multiplos enteros de la fundamental (2f, 3f, 4f...). Si un extremo esta fijo y el otro libre, solo aparecen armonicos impares (f, 3f, 5f...).

A mayor longitud, menor frecuencia: una barra larga suena mas grave que una corta del mismo material. A mayor rigidez del material, mayor frecuencia: un acero suena mas agudo que un polimero blando.

La idea clave es que la barra no elige cualquier movimiento: solo sobreviven los patrones que encajan con sus extremos. Por eso el sonido revela simultaneamente el material, la geometria y la forma de sujecion.

## 🔵 Nivel formal

### Ondas estacionarias longitudinales

Una onda longitudinal viaja por la barra con velocidad [[v_L]]. Al llegar a un extremo se refleja. La superposicion de la onda incidente y la reflejada crea una onda estacionaria si la frecuencia es adecuada.

Para una barra libre-libre, ambos extremos son antinodos de desplazamiento (nodos de esfuerzo). La condicion de resonancia exige que la longitud contenga un numero entero de semilongitudes de onda:

{{f:freq_longitudinal_libre_libre}}

donde [[n_modo]] es el numero de modo (1, 2, 3...), [[v_L]] es la velocidad longitudinal y [[L_barra]] es la longitud.

La velocidad longitudinal en una barra delgada se calcula como:

{{f:velocidad_longitudinal_barra}}

donde [[E_young]] es el modulo de Young y [[rho]] es la densidad del material.

Para una barra fijo-libre, el extremo empotrado es un nodo de desplazamiento y el extremo libre es un antinodo. Solo caben armonicos impares:

{{f:freq_longitudinal_fijo_libre}}

La fundamental de la barra fijo-libre tiene la mitad de la frecuencia de la fundamental libre-libre de la misma longitud: la longitud de onda efectiva es cuatro veces la longitud de la barra frente a dos veces en el caso libre-libre.

### Modos torsionales

Si la barra tiene seccion circular y vibra en torsion, la propagacion es analoga a la longitudinal pero con la velocidad de corte:

{{f:velocidad_corte_barra}}

La frecuencia torsional sigue la misma estructura que la longitudinal con condiciones libre-libre:

{{f:freq_torsional_libre_libre}}

Dado que [[v_T]] es siempre menor que [[v_L]] (porque [[G_shear]] es menor que [[E_young]] para materiales con coeficiente de Poisson positivo), las frecuencias torsionales son siempre menores que las longitudinales para el mismo modo y la misma longitud.

## 🔴 Nivel estructural

### Derivacion desde la ecuacion de onda

La ecuacion de onda unidimensional para desplazamiento longitudinal u(x,t) en una barra homogenea es:

d²u/dt² = [[v_L]]² d²u/dx²

La separacion de variables u(x,t) = X(x) T(t) conduce a:

T(t) = A cos(omega t) + B sin(omega t)

X(x) = C cos(kx) + D sin(kx)

con la relacion de dispersion entre frecuencia angular, numero de onda y [[v_L]], que es lineal (no dispersiva).

Las condiciones de contorno determinan los valores permitidos de k:

Para libre-libre, ambos extremos imponen pendiente nula del modo espacial. Esa condicion selecciona numeros de onda enteros y conduce a la relacion de frecuencia libre-libre.

Para fijo-libre, el extremo empotrado impone desplazamiento nulo y el extremo libre impone pendiente nula. Esa combinacion selecciona solo armonicos impares y conduce a la relacion de frecuencia fijo-libre.

En ambos casos, [[f_n]] es proporcional al numero de onda permitido y a [[v_L]].

### Ortogonalidad de modos

Los modos normales son ortogonales en el producto interno ponderado por la masa:

El producto interno ponderado por la masa se anula entre dos modos distintos.

donde A es el area de la seccion transversal. Esta propiedad permite descomponer cualquier vibracion arbitraria como combinacion lineal de modos. La respuesta a una excitacion impulsiva inicial excita multiples modos simultaneamente.

### Factor de calidad y amortiguamiento

En una barra real, cada modo tiene un ancho de banda finito alrededor de [[f_n]] debido a la disipacion interna del material, las perdidas por radiacion sonora y la imperfeccion de las condiciones de contorno. El factor de calidad Q_n mide cuantos ciclos de vibracion realiza el modo antes de perder energia significativa:

El factor de calidad es proporcional al producto entre frecuencia modal y tiempo de decaimiento.

donde tau_n es el tiempo de decaimiento exponencial de la amplitud del modo n. Metales como el aluminio tienen Q del orden de 1000-10000; polimeros pueden tener Q de 10-100.

### Efecto de inercia lateral (correccion de Rayleigh-Love)

A frecuencias altas, cuando la longitud de onda se acerca a la dimension transversal de la barra, la hipotesis de barra delgada falla. La contraccion lateral por efecto Poisson crea inercia transversal que reduce la velocidad de fase efectiva. La velocidad corregida es:

La velocidad efectiva queda por debajo de [[v_L]] y la correccion crece cuando el radio de la barra se vuelve comparable con la longitud de onda.

donde r es el radio de la barra, nu el coeficiente de Poisson y lambda la longitud de onda. Esto produce dispersion: la relacion omega-k deja de ser lineal y los armonicos dejan de ser exactamente equiespaciados.

## Interpretación física profunda

La resonancia en barras es la manifestacion de que un sistema elastico confinado cuantiza su espectro de frecuencias. Es el analogo mecanico de las orbitas estacionarias en mecanica cuantica: solo ciertas configuraciones son autocoherentes.

La diferencia esencial entre los distintos tipos de condiciones de contorno es geometrica: un extremo libre actua como un espejo que refleja sin cambio de fase (antinodo), mientras que un extremo fijo actua como un espejo que invierte la fase (nodo). Esta dualidad nodo-antinodo es la que selecciona armonicos pares e impares.

El hecho de que las frecuencias torsionales sean siempre menores que las longitudinales refleja que la rigidez a cizalla es siempre menor que la rigidez a traccion en un material con coeficiente de Poisson positivo. El cociente [[v_L]]/[[v_T]] es sqrt(2(1+nu)), lo que permite medir nu a partir de las frecuencias de resonancia.

## Orden de magnitud

- Barra de acero de 1 m, libre-libre: f_1 longitudinal ≈ 5100/(2 por 1) = 2550 Hz (audible, tono agudo).
- Misma barra, modo torsional: f_1 ≈ 3200/(2 por 1) = 1600 Hz (audible, tono medio).
- Barra de aluminio de 0.3 m, fijo-libre: f_1 ≈ 5000/(4 por 0.3) = 4167 Hz.
- Barra de vidrio de 0.5 m, libre-libre: f_1 ≈ 5500/(2 por 0.5) = 5500 Hz.
- Barra de nylon de 1 m, libre-libre: f_1 ≈ 1700/(2 por 1) = 850 Hz (tono grave-medio).

La fundamental longitudinal esta tipicamente en el rango de kHz para barras de decimetros en materiales rigidos. Los modos flexionales del mismo objeto estan mucho mas abajo en frecuencia (decenas o centenas de Hz) porque la rigidez flexional efectiva es mucho menor.

## Método de resolución personalizado

1. Identificar el tipo de vibracion: longitudinal, torsional o flexional.
2. Establecer las condiciones de contorno: libre-libre, fijo-libre, fijo-fijo.
3. Calcular la velocidad de onda correspondiente: [[v_L]] para longitudinal, [[v_T]] para torsional.
4. Aplicar la formula de frecuencia natural adecuada segun la condicion de contorno.
5. Verificar que el resultado sea coherente: armonicos equiespaciados en libre-libre, solo impares en fijo-libre.
6. Si se necesita precision a alta frecuencia, aplicar correccion de inercia lateral.
7. Validacion dimensional: frecuencia en Hz, velocidad en m/s, longitud en m.

## Casos especiales y ejemplo extendido

### Limite de barra infinitamente larga

Cuando [[L_barra]] tiende a infinito, el espaciado entre frecuencias adyacentes tiende a cero: el espectro discreto se convierte en un continuo. No hay resonancias discretas; la barra soporta ondas viajeras de cualquier frecuencia. Es la transicion de sistema finito a medio infinito.

### Barra fijo-fijo

Produce el mismo tipo de espectro equiespaciado que el caso libre-libre, pero con los patrones modales desfasados: los extremos son nodos en vez de antinodos. Fisicamente es simetrica respecto a libre-libre en el sentido de intercambio nodo-antinodo.

### Limite de alta frecuencia

Cuando la longitud de onda se aproxima al diametro de la barra, aparece dispersion. Los armonicos dejan de ser equiespaciados y la velocidad de grupo disminuye. En el extremo, cuando lambda es comparable al espaciado atomico, el modelo continuo falla completamente.

### Material auxetico (nu negativo)

Si el coeficiente de Poisson es negativo, el cociente entre [[v_L]] y [[v_T]] se reduce. En el limite termodinamico inferior ambas velocidades tenderian a coincidir; en la practica, los materiales auxeticos reales conservan frecuencias longitudinales mayores que las torsionales.

## Preguntas reales del alumno

**¿Por que una barra fijo-libre solo tiene armonicos impares?**
Porque el extremo fijo obliga a un nodo de desplazamiento y el libre a un antinodo. Para que ambas condiciones se cumplan simultaneamente, solo caben semiperiodos impares dentro de la longitud: un cuarto de longitud de onda (1er modo), tres cuartos (2do modo), cinco cuartos (3er modo), etc.

**¿Puedo medir el modulo de Young midiendo la frecuencia de resonancia?**
Si. Se mide la frecuencia fundamental de una barra de longitud y densidad conocidas, se usa la relacion libre-libre para obtener [[v_L]], y luego la relacion de velocidad longitudinal para obtener [[E_young]]. Es la base del metodo de impulse excitation (norma ASTM E1876).

**¿Por que los modos torsionales tienen frecuencia menor que los longitudinales?**
Porque la velocidad torsional depende de [[G_shear]] y la longitudinal de [[E_young]]. En materiales comunes, la rigidez de cizalla es menor que la rigidez longitudinal; por tanto [[v_T]] es menor que [[v_L]]. Menor velocidad con la misma longitud da menor frecuencia.

## Conexiones transversales y rutas de estudio

- Los modos longitudinales dependen de [[v_L]], que se calcula con [[E_young]] y [[rho]] (ver leaf ondas-longitudinales-en-barras).
- Los modos torsionales dependen de [[v_T]], que se calcula con [[G_shear]] y [[rho]].
- La relacion entre E y G depende del coeficiente de Poisson (ver leaf relacion-entre-modulos-elasticos).
- Los modos flexionales (vigas) tienen espectro dispersivo y no equiespaciado (ver leaf ondas-flexionales-en-vigas).
- Las condiciones de contorno definen reflexiones que son analogas a las de la interfaz entre medios (ver leaf reflexion-y-transmision-en-solidos).

## Síntesis final

Las frecuencias naturales de una barra son proporcionales a la velocidad de onda e inversamente proporcionales a la longitud. Las condiciones de contorno seleccionan que subconjunto de armonicos puede existir. Los modos longitudinales usan [[v_L]], determinada por [[E_young]] y [[rho]], y los torsionales usan [[v_T]], determinada por [[G_shear]] y [[rho]]. La estructura del espectro (equiespaciado o solo impares) es consecuencia directa de la simetria o asimetria de las condiciones de contorno. Conocer las frecuencias de resonancia permite determinar los modulos elasticos del material sin destruir la muestra.
`;export{e as default};
