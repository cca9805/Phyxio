const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
En una vivienda se quiere instalar un circuito de cocina. El inventario de receptores incluye un horno de 2400 W, una vitrocerámica de 2000 W, un microondas de 800 W y un frigorífico de 150 W. El cuadro dispone de magnetotérmicos comerciales de 16 A, 20 A y 25 A. Se pide estimar la corriente máxima razonable, elegir un calibre de protección y decidir si conviene dividir la carga en dos circuitos.\r
\r
## Datos\r
\r
Los datos particulares del ejemplo se expresan como valores numéricos ordinarios, no como nuevas magnitudes Phyxio. La tensión de red se toma como [[V]] constante. La potencia total conectada se representa mediante [[P_tot]], la corriente total mediante [[I_tot]], el calibre del magnetotérmico mediante [[I_max]] y el margen de uso mediante [[margen_uso]].\r
\r
El inventario completo suma 5350 W para [[P_tot]] si todos los receptores funcionaran a la vez. Para el diseño se considera una simultaneidad del 80 %, descrita como condición de uso del ejemplo, no como magnitud nueva.\r
\r
## Definición del sistema\r
\r
El sistema es un circuito doméstico monofásico con receptores conectados en paralelo. Todos los receptores comparten la misma [[V]], mientras que sus demandas individuales contribuyen a la corriente total [[I_tot]]. La protección actúa comparando esa corriente con [[I_max]].\r
\r
La pregunta física no es solo cuánta potencia hay instalada, sino cuánta corriente debe transportar el circuito en una situación realista. Por eso el resultado se interpreta con [[margen_uso]] y no únicamente con el valor bruto de potencia instalada.\r
\r
## Modelo físico\r
\r
Se aplica el modelo resistivo de red doméstica: una fuente de tensión prácticamente constante alimenta receptores que, en primera aproximación, convierten potencia eléctrica en consumo térmico o útil sin desfases relevantes.\r
\r
\r
\r
{{f:corriente_total}}\r
\r
La sobrecarga se evalúa comparando la corriente estimada con el límite de protección.\r
\r
\r
\r
{{f:margen_capacidad}}\r
\r
Cuando se quiere comprobar la potencia admisible a partir de una corriente máxima, se usa también la relación inversa del mismo modelo.\r
\r
\r
\r
{{f:potencia_total}}\r
\r
Estas referencias permiten leer el problema en dos sentidos: desde la potencia hacia la corriente o desde el calibre hacia la potencia admisible.\r
\r
## Justificación del modelo\r
\r
El modelo es razonable para horno, vitrocerámica y microondas tratados como cargas dominadas por comportamiento resistivo. El frigorífico introduce una advertencia: al contener motor, puede exigir picos de arranque. Por eso el resultado no debe leerse como frontera exacta, sino como estimación de diseño.\r
\r
El modelo dejaría de ser suficiente si la línea fuera larga, si hubiera muchos motores arrancando simultáneamente o si la tensión real en bornes se alejara demasiado de la nominal. En ese caso habría que usar un modelo extendido, pero sin introducir aquí símbolos externos al contrato del leaf.\r
\r
## Resolución simbólica\r
\r
La resolución simbólica empieza agrupando todas las potencias de los receptores dentro de [[P_tot]]. Después se interpreta [[V]] como la tensión común de la red monofásica y se obtiene [[I_tot]] mediante la relación contractual de corriente total.\r
\r
{{f:corriente_total}}\r
\r
La elección del magnetotérmico no se decide mirando solo [[P_tot]], sino comparando [[I_tot]] con [[I_max]]. Esa comparación se expresa mediante [[margen_uso]], que indica qué fracción del límite de protección está siendo utilizada.\r
\r
{{f:margen_capacidad}}\r
\r
## Sustitución numérica\r
\r
En el caso extremo, el inventario completo da 5350 W de potencia conectada. Con la tensión doméstica habitual usada por el leaf, esa potencia conduce a una corriente cercana a 23,3 A. Ese escenario representa el uso simultáneo completo y sirve como referencia superior.\r
\r
Al aplicar la simultaneidad del 80 %, la corriente de diseño queda alrededor de 18,6 A. Un magnetotérmico de 16 A queda por debajo de esa exigencia. Un magnetotérmico de 20 A cubre el caso previsto, aunque con poca reserva. El de 25 A solo sería admisible si el cableado estuviera preparado para ese calibre.\r
\r
## Validación dimensional\r
\r
La validación dimensional es coherente: la relación entre potencia, tensión y corriente transforma una potencia expresada en vatios y una tensión expresada en voltios en una corriente expresada en amperios. La comparación entre [[I_tot]] e [[I_max]] no produce una nueva unidad, sino un margen adimensional de uso.\r
\r
También es coherente que aumentar [[P_tot]] aumente [[I_tot]] si [[V]] permanece constante. Esa dependencia confirma que la decisión técnica debe centrarse en la corriente que soporta el circuito, no en una lectura aislada de los vatios instalados.\r
\r
## Interpretación física\r
\r
La lectura física revela una relación causal directa: cada receptor conectado en paralelo establece un camino independiente para la corriente. Como todos comparten la misma diferencia de potencial [[V]], la corriente que extrae cada uno depende únicamente de su demanda de potencia. La suma de estas corrientes individuales es [[I_tot]], que el cable común debe transportar sin exceder su capacidad térmica.\r
\r
El problema no consiste en tener muchos vatios instalados per se, sino en la consecuencia física de esos vatios: una [[I_tot]] elevada que obliga al conductor a disipar más calor por efecto Joule. Cuando [[I_tot]] se acerca a [[I_max]], el margen de seguridad desaparece y cualquier fluctuación puede disparar la protección.\r
\r
La solución técnica consiste en dividir la instalación en dos circuitos independientes. Esta medida reduce físicamente [[I_tot]] en cada rama porque la corriente del horno ya no suma con la de la vitrocerámica. El resultado es un [[margen_uso]] más bajo en ambos circuitos, mejorando la seguridad térmica y evitando que una única línea opere permanentemente cerca de su límite estructural.\r
\r
## Errores típicos evitados\r
\r
- No se han creado magnitudes auxiliares para cada electrodoméstico.\r
- No se ha confundido potencia instalada con corriente admisible.\r
- No se ha elegido un magnetotérmico solo porque su número sea mayor.\r
- No se ha ignorado que el frigorífico puede tener picos de arranque.\r
- No se ha usado [[margen_uso]] como si fuera una corriente.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
María quiere instalar un aire acondicionado de 2500 W en el salón de su vivienda. El circuito actual alimenta iluminación LED, televisión, router y pequeños dispositivos. El nuevo aparato añade una carga significativa y contiene un motor de compresor, por lo que la pregunta física es si puede compartir el circuito existente o si conviene instalar una línea independiente.\r
\r
El contexto es una decisión de diseño eléctrico doméstico donde la potencia agregada de los receptores se representa mediante [[P_tot]], la tensión de red mediante [[V]], la corriente total mediante [[I_tot]], el calibre disponible mediante [[I_max]] y la lectura de seguridad mediante [[margen_uso]]. No se crean magnitudes específicas para cada aparato; la lista de dispositivos solo sirve para estimar el escenario físico de carga.\r
\r
## Estimación física\r
\r
La estimación comienza agrupando la potencia de los receptores existentes con la del aire acondicionado en [[P_tot]]. A partir de esa magnitud y de [[V]], se estima [[I_tot]] mediante la relación contractual entre potencia, tensión y corriente.\r
\r
{{f:corriente_total}}\r
\r
Después se evalúa el margen de uso frente al límite de protección.\r
\r
{{f:margen_capacidad}}\r
\r
Si la corriente estimada en régimen estacionario queda claramente por debajo del magnetotérmico de 16 A disponible, el circuito podría funcionar en condiciones suaves. Sin embargo, si el margen se aproxima al límite, el arranque del compresor puede provocar disparos o funcionamiento térmico poco recomendable.\r
\r
En una instalación real, ese resultado favorece una línea independiente para el aire acondicionado, especialmente si el salón ya comparte circuito con otros receptores de uso frecuente. La coherencia dimensional se mantiene porque la estimación produce una corriente en amperios y la comparación con el calibre genera un margen adimensional.\r
\r
## Interpretación\r
\r
La recomendación de circuito independiente surge del análisis causal del arranque del compresor. Los motores de inducción presentan una corriente de arranque que puede ser cinco a siete veces superior a la nominal durante los primeros segundos. Si el [[margen_uso]] estacionario ya es elevado, este pico transitorio supera físicamente [[I_max]] y fuerza el disparo de la protección térmica.\r
\r
El cálculo estacionario indica si el circuito "funciona" en condiciones normales, pero no captura la dinámica de arranque. El margen de seguridad existe precisamente para absorber estas fluctuaciones transitorias sin interrupciones. Cuando [[margen_uso]] se aproxima al cien por cien, se elimina la capacidad de absorción de picos.\r
\r
La solución de línea independiente separa físicamente los picos de arranque del resto de la instalación. El compresor puede arrancar sin afectar a la iluminación o a otros receptores sensibles. El criterio de diseño correcto no es simplemente evitar disparos en régimen permanente, sino garantizar que el sistema completo tolere las variaciones dinámicas inherentes a los equipos reales.\r
`;export{e as default};
