## Errores conceptuales


### Error 1: Creer que la tensión disminuye al conectar más aparatos

**Por qué parece correcto**

La intuición mecánica sugiere que al consumir más de un recurso finito, la presión debe bajar. Los estudiantes transfieren incorrectamente la analogía de la presión hidráulica.

**Por qué es incorrecto**

La red eléctrica está diseñada como fuente de tensión regulada. Los transformadores mantienen la tensión secundaria dentro de márgenes estrictos mediante regulación activa. La tensión permanece en [[tension_de_red]] constante; lo que aumenta es la corriente total [[corriente_total_de_linea]] para mantener la potencia entregada.

**Señal de detección**

El estudiante formula problemas del tipo "si conecto otro radiador, ¿cuánto bajará la tensión?" o espera que aparatos de menor potencia funcionen peor cuando hay aparatos grandes conectados simultáneamente.

**Corrección conceptual**

La tensión de la red es independiente de la carga en condiciones normales. Lo que limita la capacidad de la red es la corriente máxima [[corriente_maxima_del_circuito]] que pueden soportar los cables sin sobrecalentarse. El magnetotérmico protege contra el exceso de corriente.

**Mini-ejemplo de contraste**

*Incorrecto*: Conectas un horno de alta potencia y la tensión baja, así que la potencia real es menor.

*Correcto*: La tensión permanece en 230 V. El horno extrae la corriente calculada mediante la fórmula de corriente total. Si la corriente supera el calibre del magnetotérmico, este salta protegiendo la instalación.


### Error 2: Confundir conexión en paralelo con conexión en serie

**Por qué parece correcto**

En circuitos sencillos de libro de texto, los receptores a menudo aparecen dibujados uno tras otro. Los estudiantes confunden la disposición física de los enchufes con la disposición eléctrica real.

**Por qué es incorrecto**

En una conexión en serie, la tensión se divide entre los receptores. En la instalación doméstica real, todos los enchufes están conectados directamente a los conductores de fase y neutro, formando derivaciones paralelas. Cada receptor ve la tensión completa de [[tension_de_red]] y extrae su propia corriente.

**Señal de detección**

El estudiante calcula la resistencia equivalente de la casa como si todos los aparatos estuvieran en serie. También espera que al quemarse una bombilla se interrumpa el suministro a toda la casa.

**Corrección conceptual**

La instalación doméstica utiliza conexión en paralelo exclusivamente. Cada receptor tiene sus propios terminales conectados directamente a la línea. La corriente total [[corriente_total_de_linea]] es la suma de todas las corrientes individuales.

**Mini-ejemplo de contraste**

*Incorrecto*: Tres lámparas en serie consumen la potencia total y cada una recibe menor tensión, brillando tenue.

*Correcto*: Tres lámparas en paralelo consumen la potencia total, cada una recibe la tensión nominal brillando al máximo, y la corriente total es la suma calculada con la fórmula correspondiente.

## Errores de modelo


### Error 3: Aplicar el modelo resistivo a motores y cargas inductivas

**Por qué parece correcto**

Los motores tienen etiquetas con valores nominales de potencia y tensión. El estudiante asume que la relación entre potencia y corriente es universal y que basta con aplicar la fórmula para obtener la corriente.

**Por qué es incorrecto**

Los motores presentan factor de potencia distinto de 1 debido a sus bobinados inductivos. La potencia activa es menor que la potencia aparente por un factor típicamente de 0,7 a 0,9. Además, los motores tienen corriente de arranque varias veces superior a la nominal.

**Señal de detección**

Los cálculos de corriente para frigoríficos dan valores menores que los medidos. El magnetotérmico salta al arrancar el motor aunque la potencia nominal sugiera que debería soportarlo.

**Corrección conceptual**

El modelo resistivo solo aplica a receptores con factor de potencia igual a 1. Para cargas inductivas, la corriente real es mayor que la calculada por el modelo simple. Los motores requieren modelos que incluyan reactancia inductiva.

**Mini-ejemplo de contraste**

*Incorrecto*: Un frigorífico de potencia nominal consume según el modelo resistivo una corriente pequeña, bien dentro de un circuito estándar.

*Correcto*: Con factor de potencia menor que 1, la corriente nominal es mayor. Adicionalmente, la corriente de arranque alcanza varios amperios durante varios segundos. Si arranca simultáneamente con otros aparatos, puede superar el margen del circuito.

## Errores matemáticos


### Error 4: Confundir la potencia total con la potencia máxima del circuito

**Por qué parece correcto**

El estudiante lee que un circuito tiene un magnetotérmico de [[corriente_maxima_del_circuito]] y calcula la potencia máxima como el producto de [[tension_de_red]] por [[corriente_maxima_del_circuito]]. Luego suma las potencias de todos los aparatos de la casa y compara directamente con ese límite.

**Por qué es incorrecto**

Aunque la potencia máxima teórica es el producto de [[tension_de_red]] por [[corriente_maxima_del_circuito]], en la práctica los aparatos no funcionan todos simultáneamente. Sumar potencias nominales sin ponderar el uso real produce estimaciones pesimistas. El cálculo correcto requiere estimar la potencia simultánea real usando el margen de uso [[margen_uso]].

**Señal de detección**

El estudiante declara que una cocina con horno, vitro y microondas necesita obligatoriamente la suma de sus potencias y por tanto no puede funcionar con un circuito estándar. No considera que raramente se usan todos al máximo simultáneamente.

**Corrección conceptual**

La potencia total conectada puede superar la potencia máxima del circuito siempre que no se active todo a la vez. El parámetro relevante es la corriente total simultánea calculada a partir de las potencias activas en cada momento. Un diseño correcto distribuye cargas altas en circuitos independientes.

**Mini-ejemplo de contraste**

*Incorrecto*: Tener conectados muchos vatios en toda la casa requiere un interruptor de alta capacidad.

*Correcto*: Con un coeficiente de simultaneidad típico, la potencia simultánea esperada es menor que la suma nominal. Calculando [[corriente_total_de_linea]] con la fórmula correspondiente y comparando con [[corriente_maxima_del_circuito]] mediante el margen de uso, se verifica que un interruptor estándar puede ser suficiente con margen.

## Errores de interpretación


### Error 5: Interpretar el margen de uso como probabilidad de fallo

**Por qué parece correcto**

El margen de uso [[margen_uso]] es una fracción entre 0 y 1. El estudiante lo confunde con una probabilidad: cree que un margen de 0,8 significa probabilidad de fallo o que hay capacidad libre sin riesgo.

**Por qué es incorrecto**

El margen de uso es una fracción de carga, no una probabilidad. Un valor de 0,8 indica que estamos usando el 80 % de la capacidad nominal del circuito. Sin embargo, este margen no es lineal ni garantizado: los picos de arranque de motores pueden hacer que dispare incluso con [[margen_uso]] cercano a 0,8.

**Señal de detección**

El estudiante concluye que con [[margen_uso]] de 0,9 puede seguir conectando aparatos hasta llegar a 1,0 exactamente. También espera que el magnetotérmico dispare instantáneamente cuando el margen alcance 1,0.

**Corrección conceptual**

El margen de uso es un indicador de riesgo, no un límite estricto. Como regla práctica, se recomienda no superar el 80 % de forma continua para dejar margen para picos. El magnetotérmico tiene curvas de disparo tiempo-corriente que permiten sobrecargas temporales pero actúan ante sobrecargas sostenidas.

**Mini-ejemplo de contraste**

*Incorrecto*: Con [[margen_uso]] de 0,95 tienes probabilidad mínima de que salte el magnetotérmico; con 0,8 tienes margen seguro amplio.

*Correcto*: Con [[margen_uso]] de 0,95 estás al 95 % de la capacidad, lo cual es riesgoso porque cualquier pico de arranque puede superar el umbral. Con 0,8 tienes margen para picos, pero el riesgo depende del perfil de carga real, no de probabilidad abstracta.

## Regla de autocontrol rápido

Antes de resolver cualquier problema de red eléctrica doméstica, verifica mentalmente:

1. **¿Estoy usando [[tension_de_red]] constante?** Si tu respuesta implica que la tensión cambia con la carga, revisa el concepto de fuente de tensión.

2. **¿He sumado corrientes o potencias?** En paralelo se suman corrientes; la tensión es común. Si sumas potencias, verifica que todos los receptores estén a la misma tensión.

3. **¿Mi resultado para [[corriente_total_de_linea]] tiene sentido físico?** Un horno suele estar entre 8 a 12 A; una lámpara LED entre 0,05 a 0,2 A. Si obtienes 50 A para un aparato doméstico, has cometido un error de unidades posiblemente confundiendo vatios con kilovatios.

4. **¿He verificado el margen de uso [[margen_uso]]?** Calcula siempre la relación entre [[corriente_total_de_linea]] e [[corriente_maxima_del_circuito]]. Si es mayor que 0,8, hay riesgo de sobrecarga. Si es mayor que 1,0, el magnetotérmico debería disparar.