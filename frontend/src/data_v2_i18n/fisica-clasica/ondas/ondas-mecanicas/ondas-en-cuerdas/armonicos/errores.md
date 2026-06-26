## Errores conceptuales


### Error 1: Confundir armónico con número de nodos

**Por qué parece correcto**

El estudiante observa que el primer armónico tiene dos nodos (los extremos), el segundo tiene tres nodos, y generaliza que "el armónico n tiene n+1 nodos". Esta regla mnemotécnica parece consistente con los primeros casos.

**Por qué es incorrecto**

El número de nodos sí es n+1, pero n es el **número de medias ondas** que caben en la cuerda, no directamente el conteo de nodos. Confundir ambos conceptos lleva a errores al calcular la longitud de onda: el estudiante puede pensar que cada "sección" entre nodos es la longitud de onda dividida entre n en lugar de dividida entre 2n.

**Señal de detección**

El alumno escribe que la longitud de onda del armónico n es la longitud dividida entre n, en lugar de dos veces la longitud dividida entre n. También aparece confusión al graficar: dibuja n nodos internos para el armónico n.

**Corrección conceptual**

El armónico n significa que la cuerda contiene n medias longitudes de onda completas. Los nodos incluyen los dos extremos fijos más (n-1) nodos intermedios, totalizando n+1. La longitud de onda siempre resulta de dividir dos veces la longitud de cuerda entre el número de armónico.

**Mini-ejemplo de contraste**

Para el tercer armónico, con [[numero_de_armonico]] igual a 3, el alumno erróneo calcula la longitud de onda dividiendo 1.5 m entre 3, obteniendo 0.5 m y una frecuencia triple de la real. El cálculo correcto divide dos veces 1.5 m entre 3, dando 1.0 m, con frecuencia 50 % menor que la estimación errónea.


### Error 2: Identificar el armónico más intenso como la fundamental

**Por qué parece correcto**

En algunos instrumentos, ciertos armónicos superiores tienen mayor amplitud que la fundamental debido al punto de excitación. El oído humano tiende a agrupar el sonido percibiendo la frecuencia dominante como "la nota".

**Por qué es incorrecto**

La **fundamental** es estrictamente el armónico de menor frecuencia, el caso donde [[numero_de_armonico]] vale 1, independientemente de su intensidad. El oído puede percibir el **pitch** melódico como la fundamental incluso si está físicamente atenuada (efecto de pitch virtual), pero físicamente la fundamental sigue siendo la frecuencia correspondiente a la velocidad dividida entre dos veces la longitud.

**Señal de detección**

El estudiante afirma que la frecuencia fundamental es "la más audible" o "la más fuerte", y cuando se le presenta un espectro donde el segundo armónico domina, identifica erróneamente ese valor como la frecuencia de referencia del sistema.

**Corrección conceptual**

La fundamental es el armónico con [[numero_de_armonico]] igual a 1, el de menor frecuencia posible para ese sistema con extremos fijos. Su intensidad relativa depende del mecanismo de excitación pero su definición es puramente frecuencial: la fundamental es menor que el segundo armónico, que es menor que el tercero, y así sucesivamente

**Mini-ejemplo de contraste**

Una campana de tubo tiene el primer armónico muy atenuado; el oído "reconstruye" la fundamental mentalmente. Si un estudiante mide solo la intensidad, podría asignar el segundo armónico como "la frecuencia de la campana", cuando físicamente la frecuencia fundamental sigue siendo la mitad de esa frecuencia medida.

## Errores de modelo


### Error 3: Aplicar fórmulas de cuerda ideal a sistemas con extremos libres

**Por qué parece correcto**

El estudiante ha memorizado las fórmulas de longitud de onda y frecuencia armónica para cuerda con extremos fijos y las aplica universalmente a cualquier problema de ondas en cuerdas, sin considerar las condiciones de contorno.

**Por qué es incorrecto**

Las fórmulas de armónicos suponen **nodos en ambos extremos** (fijos). Si un extremo es libre (antinodo), la condición de cuantización cambia: la cuerda debe contener un número impar de cuartos de onda, dando una frecuencia proporcional a velocidad dividida entre cuatro veces la longitud, solo para armónicos impares.

**Señal de detección**

El alumno aplica la fórmula de frecuencia para extremos fijos a una cuerda con un extremo atado a un anillo libre de deslizar verticalmente, obteniendo frecuencias que no coinciden con las medidas experimentales.

**Corrección conceptual**

Las condiciones de contorno determinan completamente los modos permitidos. Extremos fijos-fijos, fijos-libre, y libre-libre generan tres espectros diferentes. Siempre verificar primero qué tipo de extremos tiene el sistema antes de aplicar cualquier fórmula de cuantización.

**Mini-ejemplo de contraste**

Una cuerda de 1 m con un extremo fijo y otro libre, con velocidad de propagación de 100 m/s. El alumno erróneo calcula dividiendo 100 entre 2, dando 50 Hz. La respuesta correcta divide 100 entre 4, dando 25 Hz, y solo existen armónicos impares (25 Hz, 75 Hz, 125 Hz...).

## Errores matemáticos


### Error 4: Invertir incorrectamente la relación entre n y frecuencia

**Por qué parece correcto**

El estudiante confunde la proporcionalidad directa con la inversa, pensando que "a mayor número de armónico, menor frecuencia", posiblemente asociando n con un índice de "orden descendente".

**Por qué es incorrecto**

La relación entre frecuencia armónica y número de armónico (frecuencia proporcional a n por la fundamental) es **lineal creciente**: frecuencias mayores corresponden a armónicos mayores. El primer armónico tiene la frecuencia más baja, no la más alta. Invertir esta relación produce resultados físicamente absurdos.

**Señal de detección**

El alumno afirma que el armónico 5 tiene menor frecuencia que el armónico 2, o calcula la frecuencia del tercer armónico dividiendo la fundamental entre 3 en lugar de multiplicarla por 3.

**Corrección conceptual**

El número de armónico n indica cuántas medias ondas caben en la cuerda. Más medias ondas significa longitudes de onda más cortas (inversamente proporcionales a n), y como la velocidad es constante, frecuencias más altas (proporcionales a la inversa de la longitud de onda). La relación es directa: la frecuencia es proporcional a n.

**Mini-ejemplo de contraste**

Si la fundamental es 100 Hz, el alumno erróneo podría calcular el cuarto armónico como 25 Hz. El cálculo correcto multiplica 100 Hz por 4, dando 400 Hz. El error por factor 16 es inmediatamente detectable al comparar con el rango audible esperado.

## Errores de interpretación


### Error 5: Esperar frecuencias continuas en lugar de discretas

**Por qué parece correcto**

El estudiante, familiarizado con sistemas donde las frecuencias parecen continuas (altavoces electrónicos, generadores de funciones), asume que una cuerda también puede vibrar a "cualquier frecuencia" dentro de un rango.

**Por qué es incorrecto**

Las **condiciones de contorno fijas** imponen una cuantización estricta: solo frecuencias que satisfagan la relación de resonancia estacionaria son físicamente posibles. No es posible excitar una cuerda a 150 Hz si sus armónicos permitidos son 100 Hz, 200 Hz, 300 Hz...

**Señal de detección**

El alumno pregunta cómo "sintonizar" una cuerda a una frecuencia intermedia entre dos armónicos, o propone problemas donde una cuerda vibra a frecuencias arbitrarias como si fuera un sistema forzado continuo.

**Corrección conceptual**

Los modos normales son discretos y autoseleccionados por la geometría del sistema. Al excitar una cuerda, solo resuenan las frecuencias armónicas; cualquier otra frecuencia de excitación genera una respuesta transitoria que decae rápidamente sin establecer un patrón estacionario.

**Mini-ejemplo de contraste**

Un alumno intenta hacer sonar una cuerda de guitarra a 415 Hz (La de afinación alternativa) manteniendo L y v constantes. Si los armónicos son 100 Hz, 200 Hz, 300 Hz..., la cuerda simplemente no responde sostenidamente. Debe modificar L (presionar el traste adecuado) o v (ajustar la tensión) para que 415 Hz coincida con algún múltiplo entero de la fundamental permitido.

## Regla de autocontrol rápido

Antes de entregar cualquier resultado sobre armónicos, verifica:

- ¿La frecuencia fundamental es la menor de todas? Si no, revisa el cálculo.
- ¿La longitud de onda decrece al aumentar n? La longitud de onda debe ser inversamente proporcional a n.
- ¿Los extremos son nodos? Si hay algún extremo libre, las fórmulas cambian completamente.
- ¿El resultado es físicamente audible? Frecuencias > 20 kHz o < 20 Hz para instrumentos musicales sugieren error de unidades.

Verificación dimensional mental: f tiene unidades de s⁻¹ (Hz), v de m/s, L de m. La combinación v/L da s⁻¹, correcta para frecuencia. La expresión L/v daría segundos, incorrecta para frecuencia.