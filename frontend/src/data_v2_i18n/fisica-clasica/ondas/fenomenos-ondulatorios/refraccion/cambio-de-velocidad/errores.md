# Errores de cambio de velocidad

## Errores conceptuales

### Error 1: Confundir velocidad en vacio con velocidad en medio

**Por que parece correcto**

La velocidad de la luz es una constante universal muy citada, trescientos mil millones de metros por segundo. Es natural asumir que esta velocidad aplica en cualquier situacion donde haya luz, sin importar el material a traves del cual viaje.

**Por que es incorrecto**

La velocidad [[c_vacio]] es la velocidad maxima en el vacio, pero en medios materiales la velocidad [[v_medio]] siempre es menor. El [[n_indice]] cuantifica exactamente esa reduccion. Afirmar que la luz viaja a velocidad c en el agua o el vidrio contradice mediciones experimentales directas.

**Señal de deteccion**

Resultados de problemas donde se obtiene que la luz atraviesa un vidrio de varios centimetros en tiempo correspondiente a velocidad c, o calculos de retraso optico que dan cero porque se uso c en lugar de la velocidad reducida.

**Correccion conceptual**

En fisica, [[c_vacio]] es la velocidad limite universal en el vacio. En medios materiales, siempre debemos usar [[v_medio]] igual a [[c_vacio]] dividido por [[n_indice]]. El indice de refraccion es la propiedad del material que debemos consultar para conocer la velocidad real.

**Mini-ejemplo de contraste**

Un pulso laser atraviesa una fibra optica de cien kilometros. Si calculamos el tiempo usando c, obtenemos aproximadamente un tercio de milisegundo. Si usamos la velocidad real en vidrio (aproximadamente dos tercios de c), el tiempo es aproximadamente medio milisegundo. Este retraso adicional es crucial en comunicaciones de alta velocidad.

## Errores de modelo

### Error 2: Asumir que todos los colores viajan a la misma velocidad en un medio

**Por que parece correcto**

El modelo basico presenta una sola velocidad para la luz en un medio dado. Es tentador extrapolar esto a todos los colores, asumiendo que el medio afecta por igual a toda la radiacion visible.

**Por que es incorrecto**

En la mayoria de materiales opticos, el [[n_indice]] varia ligeramente con la longitud de onda. El azul tipicamente tiene indice mayor que el rojo, por tanto se propaga mas lentamente. Esta dispersion cromatica es la causa de que un prisma separe la luz blanca en colores.

**Señal de deteccion**

Calculos de sistemas opticos donde lentes simples producen imagenes con bordes de colores (aberracion cromatica), o problemas de interferencia donde diferentes colores dan patrones desplazados porque se asumo la misma longitud de onda para todos.

**Correccion conceptual**

El modelo de indice constante es una aproximacion util para calculos rapidos con luz aproximadamente monocromatica. Para luz blanca o sistemas de precision, debemos usar el indice correspondiente a cada longitud de onda especifica consultando tablas de dispersion.

**Mini-ejemplo de contraste**

Un haz blanco atraviesa un prisma de vidrio. Si todos los colores tuvieran el mismo indice, el haz emergente seguiria siendo blanco y no habria espectro. La realidad es que el azul se refracta mas que el rojo porque su indice es mayor, creando el arcoiris de colores observable.

## Errores matematicos

### Error 3: Invertir la relacion de velocidad e indice

**Por que parece correcto**

Intuitivamente, asociamos valores mayores con magnitudes mayores. Es facil pensar que un medio con [[n_indice]] alto permite que la luz viaje mas rapido porque es un parametro "positivo" del material.

**Por que es incorrecto**

La relacion fisica es inversa: [[v_medio]] es igual a [[c_vacio]] dividido por [[n_indice]]. Un indice mayor implica division por un numero mayor, resultando en velocidad menor. El diamante con n aproximadamente dos coma cuatro frena la luz mas que el agua con n aproximadamente uno coma tres.

**Señal de deteccion**

Calculos donde un medio de mayor indice resulta en velocidad mayor, o comparaciones donde se concluye que la luz viaja mas rapido en vidrio que en aire. Tambien graficas de velocidad versus indice con pendiente positiva en lugar de la curva hiperbolica decreciente correcta.

**Correccion conceptual**

El indice de refraccion es un factor de ralentizacion, no de aceleracion. Materiales mas "opticos densos" tienen indices mayores y ralentizan mas la luz. Visualiza la relacion como una fraccion: numerador constante c, denominador n, resultado v menor cuando n crece.

**Mini-ejemplo de contraste**

Comparando agua (n aproximadamente uno coma tres tres) y vidrio (n aproximadamente uno coma cinco). Si la relacion fuera directa, el vidrio daria velocidad mayor. La realidad es que en vidrio la velocidad es dos tercios de c, mientras que en agua es tres cuartos de c. El vidrio frena mas.

## Errores de interpretacion

### Error 4: Pensar que la frecuencia cambia al entrar en el medio

**Por que parece correcto**

Observamos que algo cambia cuando la luz entra en un medio: la velocidad se reduce, la longitud de onda tambien. Es natural asumir que todas las propiedades de la onda se modifican, incluyendo la frecuencia.

**Por que es incorrecto**

La [[frecuencia_onda]] esta determinada por la fuente emisora y se conserva al cambiar de medio. Lo que cambia son la velocidad y consecuentemente la longitud de onda. Si la frecuencia cambiara, violariamos la conservacion de la energia de los fotones individuales.

**Señal de deteccion**

Calculos de interferencia en peliculas delgadas donde se usa frecuencia modificada por el indice, o problemas de color donde se asume que la luz roja se vuelve azul al entrar en agua porque la longitud de onda se reduce.

**Correccion conceptual**

La frecuencia es el parametro conservado. La fuente oscila a cierta frecuencia y esa oscilacion se transmite al medio. La onda resultante tiene la misma frecuencia pero adapta su velocidad y longitud de onda a las propiedades del material.

**Mini-ejemplo de contraste**

Una luz roja de setecientos nanometros entra en agua. Si la frecuencia cambiara, podria salir luz de otro color al emerger. La realidad es que la luz roja sigue siendo roja, con la misma frecuencia y la misma longitud de onda en vacio al salir, aunque dentro del agua su longitud de onda local sea menor.

## Regla de autocontrol rapido

**Verificacion dimensional obligatoria**: Antes de aceptar cualquier resultado de velocidad o indice:

- [[n_indice]] debe ser adimensional, sin unidades. Si aparecen unidades, revisa las operaciones.
- La velocidad [[v_medio]] debe dar unidades de longitud entre tiempo, consistente con metros por segundo.
- El producto de [[v_medio]] y [[n_indice]] debe reconstruir [[c_vacio]] aproximadamente, dentro del error de redondeo.

**Verificacion de orden de magnitud**:

- La velocidad en cualquier medio debe estar entre cincuenta millones y trescientos millones de metros por segundo.
- El indice debe estar entre uno y aproximadamente tres para medios transparentes comunes.
- Velocidades mayores que c son fisicamente imposibles con la fisica actual.

**Verificacion fisica basica**:

- La velocidad en el medio debe ser menor que en vacio para cualquier material material (n mayor que uno).
- La frecuencia debe mantenerse constante cuando la onda cambia de medio.
- La longitud de onda en el medio debe ser menor que en vacio para el mismo color.
- El indice de refraccion de un medio material debe ser mayor que uno.
