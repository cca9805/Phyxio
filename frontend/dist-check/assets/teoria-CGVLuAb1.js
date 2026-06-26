const e=`# Definicion del momento de inercia [[I]]\r
\r
## Contexto conceptual\r
\r
Este leaf no trata todavia de memorizar tablas de cuerpos famosos. Trata de fijar que significa [[I]] y por que hace falta introducirlo cuando un sistema gira. En traslacion, la masa total [[m]] basta para relacionar causa y respuesta dinamica. En rotacion, eso ya no alcanza: tambien importa a que distancia del eje esta colocada cada porcion de materia.\r
\r
Por eso [[I]] no es una propiedad del objeto aislado, sino del par objeto-eje. La misma rueda puede ofrecer resistencias rotacionales distintas si cambia el eje elegido. Esa dependencia del eje es el primer salto conceptual importante del tema.\r
\r
La idea fisica de fondo es que la geometria pesa tanto como la cantidad de materia. Un cuerpo con masa lejos del eje es mas dificil de acelerar angularmente que otro con la misma masa cerca del eje. El leaf convierte esa intuicion en una definicion operativa y la conecta con dinamica, energia y modelizacion geometrica.\r
\r
## 🟢 Nivel esencial\r
\r
La intuicion clave puede formularse sin algebra: no toda masa cuesta lo mismo al girar. Una pequena porcion de masa muy cerca del eje aporta poco a la inercia rotacional; la misma porcion lejos del eje aporta mucho mas. Esa diferencia nace de la distancia radial [[r]] y del hecho de que la contribucion crece de manera cuadratica.\r
\r
Un buen ejemplo mental es comparar dos rotores con la misma masa total [[m]]. Uno concentra la mayor parte de su materia en la periferia, cerca del radio exterior [[R_geo]]. El otro reparte mas masa hacia el interior. Si se aplica el mismo [[tau]] a ambos, el rotor periferico cambia su estado de giro con menor facilidad. No tiene mas materia: la tiene peor colocada para dejarse acelerar.\r
\r
En este nivel conviene responder tres preguntas antes de calcular:\r
\r
1. Donde esta el eje.\r
2. Como se distribuye la masa respecto a ese eje.\r
3. Que tan dificil sera cambiar el giro.\r
\r
Si esas tres respuestas estan claras, la esencia del leaf ya esta entendida. [[I]] aparece entonces como una medida de resistencia rotacional que depende de geometria, eje y distribucion de masa.\r
\r
## 🔵 Nivel formal\r
\r
La definicion discreta expresa esa intuicion para un conjunto de masas puntuales:\r
\r
{{f:definicion_discreta}}\r
\r
En esta lectura, cada particula de masa [[m_i]] contribuye segun el cuadrado de su distancia [[r_i]] al eje. La ecuacion deja claro que el eje no es un detalle posterior: si cambian las distancias radiales, cambia [[I]].\r
\r
Para cuerpos continuos, la misma idea se escribe con una integral sobre elementos diferenciales de masa:\r
\r
{{f:definicion_continua}}\r
\r
Aqui [[dm]] representa una porcion infinitesimal de masa. Esa porcion puede escribirse con ayuda de una densidad volumetrica [[rho]], de una densidad superficial [[sigma]] o de una densidad superficial radial [[sigma_r]], segun la geometria y el tipo de modelo continuo usado.\r
\r
Una vez definido [[I]], la respuesta dinamica bajo un torque neto [[tau]] se obtiene con la segunda ley rotacional:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
Esta relacion fija el papel de cada magnitud. [[tau]] es la causa externa, [[alpha]] es la respuesta dinamica y [[I]] es el parametro que media entre ambas. Si dos cuerpos reciben el mismo [[tau]], el de mayor [[I]] tendra menor [[alpha]].\r
\r
El leaf tambien conecta la definicion con dos relaciones utiles. La primera reescribe la distribucion de masa mediante un radio equivalente [[k]]:\r
\r
{{f:radio_giro}}\r
\r
Esta expresion condensa una geometria real en una sola distancia efectiva. Si toda la masa total [[m]] estuviera colocada a una distancia [[k]] del eje, produciria el mismo [[I]].\r
\r
La segunda conecta la inercia con el almacenamiento de energia rotacional:\r
\r
{{f:energia_rotacional}}\r
\r
Esta formula muestra que [[I]] no solo gobierna la respuesta frente a [[tau]]. Tambien fija cuanta energia cinetica rotacional [[K_rot]] puede almacenar un sistema que gira con velocidad angular [[omega]]. En un sistema que ademas se traslada, esa contribucion forma parte de la energia cinetica total [[K_gen]].\r
\r
## 🔴 Nivel estructural\r
\r
La definicion funciona dentro de varias hipotesis que conviene tener presentes. La primera es que existe un eje bien definido. Sin eje, las distancias [[r]] y [[r_i]], el radio equivalente [[k]] e incluso el valor de [[I]] quedan indeterminados. La segunda es que el cuerpo puede tratarse como rigido o, al menos, que su distribucion de masa permanece estable durante el intervalo estudiado.\r
\r
La tercera condicion es geometrica: la distancia que entra en la definicion es la perpendicular al eje. No sirve una longitud cualquiera del objeto si no coincide con la separacion radial efectiva. Muchos errores nacen de usar el tamano total del cuerpo en lugar del brazo radial pertinente.\r
\r
Tambien hay una frontera entre modelos. La suma discreta es adecuada cuando el sistema puede descomponerse en masas puntuales o subcuerpos localizados. La integral continua es la herramienta correcta cuando la distribucion se describe mejor mediante [[dm]], [[rho]], [[sigma]] o [[sigma_r]]. El radio de giro [[k]] es util cuando interesa una lectura compacta, sobre todo en ingenieria.\r
\r
Por ultimo, el leaf deja de ser puramente escalar cuando el eje ya no esta fijado o el cuerpo gira libremente en tres dimensiones. En ese punto aparece el tensor de inercia y la definicion escalar queda como un caso especial respecto a un eje concreto.\r
\r
## Interpretacion física profunda\r
\r
El valor didactico de [[I]] esta en que obliga a abandonar una intuicion ingenua: que la resistencia al movimiento depende solo de cuanta masa hay. En rotacion importa ademas donde esta esa masa. Esta es una de las primeras ocasiones en mecanica donde la forma del objeto adquiere un papel dinamico tan visible como su cantidad de materia.\r
\r
La lectura profunda puede resumirse asi: [[I]] traduce geometria en dificultad dinamica. Cuando la masa se desplaza hacia la periferia, el sistema se vuelve mas perezoso para cambiar su giro. Cuando se concentra hacia el eje, responde con mas facilidad al mismo [[tau]]. Por eso un aro y un disco de igual masa total [[m]] y mismo [[R_geo]] exterior no son dinamicamente equivalentes.\r
\r
Esa misma lectura explica por que [[k]] es una herramienta potente. [[k]] no es el radio real del objeto, sino el radio equivalente que conserva el mismo [[I]]. Sirve para pensar la definicion de forma intuitiva: si toda la masa estuviera a esta distancia, el cuerpo seria igual de dificil de acelerar.\r
\r
Tambien aclara el papel energetico de [[I]]. A igualdad de [[omega]], un cuerpo con mayor inercia rotacional almacena mas [[K_rot]]. Eso convierte a [[I]] en una magnitud clave para volantes, rotores y sistemas de estabilizacion, siempre bajo los limites mecanicos impuestos por materiales y tensiones como [[sigma]].\r
\r
## Orden de magnitud\r
\r
Antes de calcular conviene construir una estimacion. Si una masa caracteristica [[m]] esta distribuida a una distancia tipica [[R_geo]] del eje, el momento de inercia deberia quedar del orden de [[m]] por [[R_geo]] al cuadrado. Esta regla simple es uno de los mejores controles de plausibilidad del leaf.\r
\r
Por ejemplo, una rueda ligera con masa del orden de 1 kg y radio de 0.3 m deberia tener un [[I]] del orden de 0.1 kg*m^2, no de 0.001 ni de 100. Del mismo modo, un disco de laboratorio de 2 kg y 0.1 m deberia quedar del orden de 0.01 kg*m^2.\r
\r
Esta lectura de orden de magnitud ayuda a detectar tres errores frecuentes:\r
\r
1. Haber usado diametro en lugar de radio.\r
2. Haber olvidado el cuadrado de la distancia radial.\r
3. Haber confundido la masa total [[m]] con una sola masa puntual [[m_i]].\r
\r
## Método de resolución personalizado\r
\r
Un procedimiento robusto para este leaf puede escribirse asi:\r
\r
1. Dibujar el eje de giro antes de elegir relaciones.\r
2. Decidir si el problema es discreto, continuo o tabulado.\r
3. Identificar la distancia radial correcta de cada masa al eje.\r
4. Construir [[I]] con la definicion apropiada.\r
5. Si hay dinamica, conectar despues con la ley rotacional para obtener [[alpha]] a partir de [[tau]].\r
6. Si hay energia, conectar despues con [[K_rot]] y [[omega]].\r
7. Si interesa una lectura compacta de geometria, reinterpretar el resultado con [[k]] o con una longitud de referencia radial [[L_r]].\r
\r
La clave del metodo es no empezar por la dinamica si [[I]] todavia no esta bien definido. En este leaf, definir la inercia viene antes de usarla.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Un caso especial instructivo es el de dos sistemas con igual masa total [[m]] y mismo radio exterior [[R_geo]], pero distinta distribucion. Considera un disco y un anillo fino. Ambos pueden compartir masa y radio, pero no comparten [[I]]. En el anillo, casi toda la masa esta a distancia [[R_geo]]; en el disco, una parte importante de la masa esta mas cerca del eje. Por eso el anillo tiene mayor inercia rotacional.\r
\r
Otro caso especial es el de un cuerpo con hueco central o densidad no uniforme. En esos sistemas la intuicion masa igual, inercia parecida falla con facilidad. La definicion continua con [[dm]], [[rho]], [[sigma]] o [[sigma_r]] es la herramienta correcta para no perder la fisica real de la distribucion.\r
\r
Un ejemplo extendido puede organizarse en dos etapas. Primero se calcula [[I]] de una rueda mediante la definicion discreta o por suma de piezas tabuladas. Despues, con un [[tau]] conocido, se estima [[alpha]] con la ley rotacional. Si luego se quiere leer la energia almacenada al alcanzar cierta [[omega]], se usa la relacion energetica. El ejemplo enseña algo mas que una secuencia de despejes: muestra que la definicion del leaf es la pieza previa que hace posibles la dinamica y la energia rotacionales.\r
\r
## Preguntas reales del alumno\r
\r
**¿El momento de inercia es como la masa pero en giro?**  \r
Se parece en su papel dinamico, pero no en su naturaleza. La masa total [[m]] no depende del eje; [[I]] si.\r
\r
**¿Por que entra la distancia al cuadrado?**  \r
Porque la dificultad rotacional crece muy deprisa cuando la masa se aleja del eje. Esa dependencia cuadratica es el corazon fisico del concepto.\r
\r
**¿Para que sirve el radio de giro si ya tengo [[I]]?**  \r
Porque [[k]] traduce una distribucion compleja en una sola distancia equivalente y permite comparar geometrias con mas intuicion.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con [[tau]], con la segunda ley rotacional, con [[K_rot]], con [[k]], con el teorema de ejes paralelos y con el tensor de inercia. Tambien enlaza con diseno mecanico, con almacenamiento de energia y con el analisis de limites de material asociados a [[sigma]].\r
\r
Su papel dentro del mapa es fundacional: define la magnitud que luego reaparece en casi todos los problemas de rotacion. Si esta definicion queda clara, las formulas posteriores dejan de parecer arbitrarias y empiezan a leerse como consecuencias naturales.\r
\r
## Síntesis final\r
\r
Dominar la definicion del momento de inercia significa entender que la inercia rotacional no depende solo de cuanta masa hay, sino de como esa masa se reparte respecto a un eje. El leaf fija precisamente esa idea y la convierte en herramienta operativa para dinamica, energia y modelizacion geometrica.\r
\r
Resolver bien este tema no consiste en repetir una formula, sino en justificar por que esa definicion aplica, que significa fisicamente cada magnitud y cuando conviene cambiar de modelo. Esa es la diferencia entre acertar un resultado y comprender el sistema.`;export{e as default};
