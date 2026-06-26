const e=`## Errores conceptuales

### Error 1: Creer que todos los armonicos estan presentes en cualquier condicion de contorno

**Por que parece correcto**

El alumno ha aprendido los armonicos de una cuerda libre-libre o fijo-fijo (todos los enteros) y generaliza a cualquier configuracion sin distinguir condiciones de contorno.

**Por que es incorrecto**

En una barra fijo-libre, la asimetria de las condiciones (nodo en un extremo, antinodo en el otro) elimina los armonicos pares. Solo sobreviven los impares (f, 3f, 5f...). En libre-libre y fijo-fijo, la simetria permite todos los armonicos. Usar la formula incorrecta produce errores del 100 % (confundir la segunda frecuencia con 2f en vez de 3f).

**Señal de deteccion**

El alumno asigna el segundo modo fijo-libre al doble de la fundamental, o se sorprende de que falten armonicos en el espectro medido.

**Correccion conceptual**

Antes de aplicar la formula, identificar la condicion de contorno. Si hay asimetria (un extremo nodo y otro antinodo), los armonicos van como 2n-1. Si hay simetria (ambos nodos o ambos antinodos), los armonicos van como n.

**Mini-ejemplo de contraste**

Barra de 1 m con velocidad longitudinal de 5000 m/s. En libre-libre aparecen modos equiespaciados a 2500, 5000 y 7500 Hz. En fijo-libre aparecen solo los impares: 1250, 3750 y 6250 Hz. Los espectros son completamente diferentes.

### Error 2: Confundir velocidad de barra con velocidad P del medio infinito

**Por que parece correcto**

Ambas se calculan a partir de propiedades elasticas y la densidad, y ambas describen ondas longitudinales. El alumno no distingue la geometria.

**Por que es incorrecto**

La velocidad de barra se obtiene con la relacion de velocidad longitudinal de barra y aplica cuando la barra es libre lateralmente, de modo que la seccion contrae por Poisson sin restriccion. La velocidad P del medio infinito usa una rigidez longitudinal confinada y aplica en propagacion tridimensional. La velocidad P es siempre mayor que [[v_L]] para coeficiente de Poisson positivo.

**Señal de deteccion**

El alumno usa v_P en la formula de frecuencia de barra o obtiene frecuencias sistematicamente mas altas que las medidas.

**Correccion conceptual**

Para barras delgadas, usar siempre la velocidad longitudinal de barra. La velocidad P corresponde a propagacion en medios tridimensionales (sismologia, ultrasonidos en bloques). La diferencia es del orden de 10-20 % para metales con coeficiente de Poisson cercano a 0.3.

**Mini-ejemplo de contraste**

En acero tipico, la velocidad de barra ronda 5190 m/s, mientras que la velocidad P del medio infinito ronda 5940 m/s. La diferencia es de alrededor del 14 %. Si se usa velocidad P en la formula de frecuencia de barra, las frecuencias calculadas seran demasiado altas en esa proporcion.

## Errores de modelo

### Error 3: Aplicar las formulas de barra delgada a altas frecuencias

**Por que parece correcto**

Las formulas son sencillas y producen armonicos perfectamente equiespaciados. El alumno las aplica a todos los modos sin verificar el rango de validez.

**Por que es incorrecto**

Cuando la longitud de onda del modo se acerca a la dimension transversal de la barra, la inercia lateral (correccion de Rayleigh-Love) reduce la velocidad de fase efectiva. Los armonicos dejan de ser equiespaciados y las frecuencias reales son menores que las predichas. Para una barra de radio r y modo n, el error se vuelve significativo cuando n > L/(pi r).

**Señal de deteccion**

Las frecuencias medidas de armonicos altos son sistematicamente menores que n por f_1.

**Correccion conceptual**

Verificar que [[lambda_n]] sea mucho mayor que el diametro de la barra. Si no lo es, aplicar correccion dispersiva o usar el modelo de barra de Pochhammer-Chree.

**Mini-ejemplo de contraste**

Barra de aluminio de 0.3 m y radio de 5 mm. Los tres primeros modos tienen longitudes de onda mucho mayores que el diametro, por lo que la formula simple es valida. En un modo alto, la longitud de onda puede ser comparable al diametro; entonces se espera una correccion de varios puntos porcentuales y una frecuencia real menor que la predicha.

## Errores matematicos

### Error 4: Empezar la numeracion de modos en n = 0 en vez de n = 1

**Por que parece correcto**

En algunas convenciones (cuerdas vibrantes, mecanica cuantica), los estados se numeran desde cero.

**Por que es incorrecto**

En las formulas de frecuencia de barras, el indice cero corresponde al modo rigido, con frecuencia nula y sin deformacion. El primer modo con deformacion elastica es el modo 1. Si se empieza en cero, todas las frecuencias quedan desplazadas un modo.

**Señal de deteccion**

El alumno calcula el modo rigido y luego asigna la primera frecuencia vibratoria al segundo modo, desalineando toda la serie.

**Correccion conceptual**

En estas formulas, el indice modal vibratorio siempre empieza en 1. Si se quiere listar incluyendo el modo rigido, este se anota aparte y no se cuenta como modo de vibracion.

**Mini-ejemplo de contraste**

En una barra libre-libre, empezar en el primer modo vibratorio produce la secuencia fundamental, segundo modo y tercer modo correctamente etiquetada. Si se incluye antes el modo rigido, los mismos valores numericos aparecen con etiquetas desplazadas y pueden causar confusion al comunicar resultados.

## Errores de interpretacion

### Error 5: Creer que la frecuencia de resonancia solo depende de la longitud

**Por que parece correcto**

En las formulas basicas, la dependencia con L es la mas visible (frecuencia inversamente proporcional a L). El alumno olvida que la velocidad de onda depende del material.

**Por que es incorrecto**

La frecuencia depende del cociente entre velocidad y longitud, y la velocidad depende de [[E_young]] y [[rho]]. Dos barras de igual longitud pero distinto material tienen frecuencias muy diferentes. Ademas, un cambio de temperatura puede alterar [[E_young]] y [[rho]] ligeramente, cambiando la frecuencia de resonancia.

**Señal de deteccion**

El alumno predice la misma frecuencia para barras de distinto material con la misma longitud, o no entiende por que un diapason de aluminio suena diferente que uno de acero del mismo tamaño.

**Correccion conceptual**

La frecuencia fundamental libre-libre depende de la velocidad de onda y de la longitud. Dos materiales con distinta velocidad tienen distinta frecuencia aunque la longitud sea la misma. Acero y aluminio dan frecuencias parecidas; nylon, con velocidad mucho menor, da una frecuencia varias veces mas baja.

**Mini-ejemplo de contraste**

Barra libre-libre de medio metro. Acero y aluminio producen fundamentales cercanas a 5 kHz, mientras que nylon queda cerca de 1.7 kHz. La longitud es igual, pero el material cambia claramente el tono.

## Regla de autocontrol rapido

Verificar siempre: (1) la condicion de contorno determina si los armonicos son n o (2n-1); (2) la velocidad a usar es [[v_L]] para longitudinal y [[v_T]] para torsional; (3) las frecuencias torsionales deben ser menores que las longitudinales para el mismo modo; (4) n empieza en 1; (5) la formula dimensional da Hz.
`;export{e as default};
