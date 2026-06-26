# Ejemplo tipo examen


## Enunciado

En una vivienda se quiere instalar un circuito de cocina. El inventario de receptores incluye un horno de 2400 W, una vitrocerámica de 2000 W, un microondas de 800 W y un frigorífico de 150 W. El cuadro dispone de magnetotérmicos comerciales de 16 A, 20 A y 25 A. Se pide estimar la corriente máxima razonable, elegir un calibre de protección y decidir si conviene dividir la carga en dos circuitos.

## Datos

Los datos particulares del ejemplo se expresan como valores numéricos ordinarios, no como nuevas magnitudes Phyxio. La tensión de red se toma como [[tension_de_red]] constante. La potencia total conectada se representa mediante [[potencia_total_conectada]], la corriente total mediante [[corriente_total_de_linea]], el calibre del magnetotérmico mediante [[corriente_maxima_del_circuito]] y el margen de uso mediante [[margen_uso]].

El inventario completo suma 5350 W para [[potencia_total_conectada]] si todos los receptores funcionaran a la vez. Para el diseño se considera una simultaneidad del 80 %, descrita como condición de uso del ejemplo, no como magnitud nueva.

## Definición del sistema

El sistema es un circuito doméstico monofásico con receptores conectados en paralelo. Todos los receptores comparten la misma [[tension_de_red]], mientras que sus demandas individuales contribuyen a la corriente total [[corriente_total_de_linea]]. La protección actúa comparando esa corriente con [[corriente_maxima_del_circuito]].

La pregunta física no es solo cuánta potencia hay instalada, sino cuánta corriente debe transportar el circuito en una situación realista. Por eso el resultado se interpreta con [[margen_uso]] y no únicamente con el valor bruto de potencia instalada.

## Modelo físico

Se aplica el modelo resistivo de red doméstica: una fuente de tensión prácticamente constante alimenta receptores que, en primera aproximación, convierten potencia eléctrica en consumo térmico o útil sin desfases relevantes.

{{f:corriente_total}}

La sobrecarga se evalúa comparando la corriente estimada con el límite de protección.

{{f:margen_capacidad}}

Cuando se quiere comprobar la potencia admisible a partir de una corriente máxima, se usa también la relación inversa del mismo modelo.

{{f:potencia_total}}

Estas referencias permiten leer el problema en dos sentidos: desde la potencia hacia la corriente o desde el calibre hacia la potencia admisible.

El modelo físico considera magnitudes fundamentales del sistema como [[corriente_maxima_del_circuito]], [[corriente_total_de_linea]], [[frecuencia_de_red]].


## Justificación del modelo

El modelo es razonable para horno, vitrocerámica y microondas tratados como cargas dominadas por comportamiento resistivo. El frigorífico introduce una advertencia: al contener motor, puede exigir picos de arranque. Por eso el resultado no debe leerse como frontera exacta, sino como estimación de diseño.

El modelo dejaría de ser suficiente si la línea fuera larga, si hubiera muchos motores arrancando simultáneamente o si la tensión real en bornes se alejara demasiado de la nominal. En ese caso habría que usar un modelo extendido, pero sin introducir aquí símbolos externos al contrato del leaf.

## Resolución simbólica

La resolución simbólica empieza agrupando todas las potencias de los receptores dentro de [[potencia_total_conectada]]. Después se interpreta [[tension_de_red]] como la tensión común de la red monofásica y se obtiene [[corriente_total_de_linea]] mediante la relación contractual de corriente total.

{{f:corriente_total}}

{{f:frecuencia_contexto}}

La elección del magnetotérmico no se decide mirando solo [[potencia_total_conectada]], sino comparando [[corriente_total_de_linea]] con [[corriente_maxima_del_circuito]]. Esa comparación se expresa mediante [[margen_uso]], que indica qué fracción del límite de protección está siendo utilizada.

{{f:margen_capacidad}}

## Sustitución numérica

En el caso extremo, el inventario completo da 5350 W de potencia conectada. Con la tensión doméstica habitual usada por el leaf, esa potencia conduce a una corriente cercana a 23,3 A. Ese escenario representa el uso simultáneo completo y sirve como referencia superior.

Al aplicar la simultaneidad del 80 %, la corriente de diseño queda alrededor de 18,6 A. Un magnetotérmico de 16 A queda por debajo de esa exigencia. Un magnetotérmico de 20 A cubre el caso previsto, aunque con poca reserva. El de 25 A solo sería admisible si el cableado estuviera preparado para ese calibre.

## Validación dimensional

La validación dimensional es coherente: la relación entre potencia, tensión y corriente transforma una potencia expresada en vatios y una tensión expresada en voltios en una corriente expresada en amperios. La comparación entre [[corriente_total_de_linea]] e [[corriente_maxima_del_circuito]] no produce una nueva unidad, sino un margen adimensional de uso.

También es coherente que aumentar [[potencia_total_conectada]] aumente [[corriente_total_de_linea]] si [[tension_de_red]] permanece constante. Esa dependencia confirma que la decisión técnica debe centrarse en la corriente que soporta el circuito, no en una lectura aislada de los vatios instalados.

## Interpretación física

La lectura física revela una relación causal directa: cada receptor conectado en paralelo establece un camino independiente para la corriente. Como todos comparten la misma diferencia de potencial [[tension_de_red]], la corriente que extrae cada uno depende únicamente de su demanda de potencia. La suma de estas corrientes individuales es [[corriente_total_de_linea]], que el cable común debe transportar sin exceder su capacidad térmica.

El problema no consiste en tener muchos vatios instalados per se, sino en la consecuencia física de esos vatios: una [[corriente_total_de_linea]] elevada que obliga al conductor a disipar más calor por efecto Joule. Cuando [[corriente_total_de_linea]] se acerca a [[corriente_maxima_del_circuito]], el margen de seguridad desaparece y cualquier fluctuación puede disparar la protección.

La solución técnica consiste en dividir la instalación en dos circuitos independientes. Esta medida reduce físicamente [[corriente_total_de_linea]] en cada rama porque la corriente del horno ya no suma con la de la vitrocerámica. El resultado es un [[margen_uso]] más bajo en ambos circuitos, mejorando la seguridad térmica y evitando que una única línea opere permanentemente cerca de su límite estructural.

# Ejemplo de aplicación real


## Contexto

María quiere instalar un aire acondicionado de 2500 W en el salón de su vivienda. El circuito actual alimenta iluminación LED, televisión, router y pequeños dispositivos. El nuevo aparato añade una carga significativa y contiene un motor de compresor, por lo que la pregunta física es si puede compartir el circuito existente o si conviene instalar una línea independiente.

El contexto es una decisión de diseño eléctrico doméstico donde la potencia agregada de los receptores se representa mediante [[potencia_total_conectada]], la tensión de red mediante [[tension_de_red]], la corriente total mediante [[corriente_total_de_linea]], el calibre disponible mediante [[corriente_maxima_del_circuito]] y la lectura de seguridad mediante [[margen_uso]]. No se crean magnitudes específicas para cada aparato; la lista de dispositivos solo sirve para estimar el escenario físico de carga.

## Estimación física

La estimación comienza agrupando la potencia de los receptores existentes con la del aire acondicionado en [[potencia_total_conectada]]. A partir de esa magnitud y de [[tension_de_red]], se estima [[corriente_total_de_linea]] mediante la relación contractual entre potencia, tensión y corriente.

{{f:corriente_total}}

Después se evalúa el margen de uso frente al límite de protección.

{{f:margen_capacidad}}

Si la corriente estimada en régimen estacionario queda claramente por debajo del magnetotérmico de 16 A disponible, el circuito podría funcionar en condiciones suaves. Sin embargo, si el margen se aproxima al límite, el arranque del compresor puede provocar disparos o funcionamiento térmico poco recomendable.

En una instalación real, ese resultado favorece una línea independiente para el aire acondicionado, especialmente si el salón ya comparte circuito con otros receptores de uso frecuente. La coherencia dimensional se mantiene porque la estimación produce una corriente en amperios y la comparación con el calibre genera un margen adimensional.

## Interpretación

La recomendación de circuito independiente surge del análisis causal del arranque del compresor. Los motores de inducción presentan una corriente de arranque que puede ser cinco a siete veces superior a la nominal durante los primeros segundos. Si el [[margen_uso]] estacionario ya es elevado, este pico transitorio supera físicamente [[corriente_maxima_del_circuito]] y fuerza el disparo de la protección térmica.

El cálculo estacionario indica si el circuito "funciona" en condiciones normales, pero no captura la dinámica de arranque. El margen de seguridad existe precisamente para absorber estas fluctuaciones transitorias sin interrupciones. Cuando [[margen_uso]] se aproxima al cien por cien, se elimina la capacidad de absorción de picos.

La solución de línea independiente separa físicamente los picos de arranque del resto de la instalación. El compresor puede arrancar sin afectar a la iluminación o a otros receptores sensibles. El criterio de diseño correcto no es simplemente evitar disparos en régimen permanente, sino garantizar que el sistema completo tolere las variaciones dinámicas inherentes a los equipos reales.

## Errores típicos evitados

- No se han creado magnitudes auxiliares para cada electrodoméstico.
- No se ha confundido potencia instalada con corriente admisible.
- No se ha elegido un magnetotérmico solo porque su número sea mayor.
- No se ha ignorado que el frigorífico puede tener picos de arranque.
- No se ha usado [[margen_uso]] como si fuera una corriente.
