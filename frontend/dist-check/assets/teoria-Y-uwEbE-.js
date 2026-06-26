const e=`# Energia potencial gravitatoria\r
\r
## Contexto conceptual\r
\r
La idea central de este leaf es que la posicion radial de una masa en un campo gravitatorio determina un estado energetico. Cuando cambian [[r]], [[ri]] y [[rf]], no solo cambia una distancia geometrica, tambien cambia la forma en que el sistema puede intercambiar energia entre [[U]] y [[K]]. Esta lectura es clave para responder la pregunta fisica central del tema: como evoluciona la energia potencial gravitatoria y que significa ese cambio para el movimiento.\r
\r
La energia potencial no es una energia de contacto local como un resorte comprimido en una mesa. Es una energia de configuracion entre una fuente [[M]] y una masa de prueba [[m]], modulada por [[G]]. Por eso el signo y la referencia importan. Si se usa la referencia habitual en infinito, los estados ligados aparecen con [[U]] negativa y un valor de [[E]] que suele quedar por debajo de cero.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial importa reconocer tres hechos fisicos simples. Primero, alejarse de la fuente suele requerir aporte energetico para cambiar de estado. Segundo, en regimen conservativo, el sistema intercambia energia entre movimiento y configuracion sin crear energia total nueva. Tercero, el signo del trabajo gravitatorio indica si la gravedad favorece o se opone al sentido del desplazamiento. Con estas tres ideas se puede anticipar el comportamiento general antes de calcular.\r
\r
Otro punto esencial es distinguir entre una lectura numerica y una lectura fisica. Una solucion no termina cuando aparece un valor final; termina cuando se explica que significa ese valor para el estado del sistema y para su evolucion posterior.\r
\r
Tambien es esencial pensar en terminos de historia del proceso. El sistema parte de un estado, atraviesa una transicion y llega a otro estado con distinta condicion energetica. Esta narrativa causal, expresada en lenguaje fisico claro, evita depender de recetas algebraicas y fortalece la comprension transferible a contextos nuevos.\r
\r
## 🔵 Nivel formal\r
\r
La formulacion general del leaf se apoya en la expresion de energia potencial para campo central:\r
\r
{{f:energia_potencial_general}}\r
\r
Con esta relacion se interpreta que, para [[M]] y [[m]] fijadas, el valor de [[U]] depende de la inversa de [[r]]. Si [[r]] aumenta, la magnitud de [[U]] disminuye en valor absoluto y el sistema queda menos ligado.\r
\r
Para procesos entre dos estados se usa:\r
\r
{{f:cambio_energia_potencial}}\r
\r
Esta forma conecta directamente [[ri]] y [[rf]] con [[DeltaU]]. En problemas de examen evita errores frecuentes porque obliga a declarar estado inicial y final antes de calcular.\r
\r
La contabilidad mecanica completa se expresa con:\r
\r
{{f:energia_mecanica}}\r
\r
Esta identidad organiza la lectura de [[E]], [[K]] y [[U]] en una sola ecuacion fisica. Si el sistema es conservativo, el intercambio entre energia cinetica y potencial se resume en:\r
\r
{{f:conservacion_energia}}\r
\r
Ademas, el trabajo de gravedad queda anclado por:\r
\r
{{f:trabajo_gravitatorio}}\r
\r
En problemas cercanos a superficie, cuando la variacion radial es pequena, se usa una aproximacion operativa:\r
\r
{{f:aproximacion_superficial}}\r
\r
Finalmente, para clasificar estado ligado o no ligado se usa el criterio conceptual:\r
\r
{{f:condicion_ligadura_conceptual}}\r
\r
Este criterio no es un despeje numerico directo, pero ordena la interpretacion fisica de trayectorias orbitales y escenarios de escape.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural conecta ecuaciones con decisiones de modelado. En la practica no basta sustituir datos; hay que decidir si corresponde la forma general con [[r]], o la aproximacion local con [[h]] y [[g]]. Ese cambio de modelo depende de la escala espacial del problema, de la precision requerida y del objetivo didactico del ejercicio.\r
\r
Tambien importa declarar referencia energetica de forma explicita. Si se cambia la referencia sin avisar, se alteran signos de [[U]], [[Ui]], [[Uf]] y [[DeltaU]], y la interpretacion final se vuelve inconsistente aunque el algebra parezca correcta. Por eso este leaf insiste en separar tres capas: definicion de estados, calculo del cambio y lectura fisica del signo.\r
\r
En sistemas de orbitas, [[E]] permite clasificar regimen dinamico de forma compacta. El balance entre [[U]] y [[K]] no solo da un numero; describe el tipo de movimiento posible. Una lectura estructural interpreta trayectorias como consecuencia energetica, no como listas de pasos algebraicos aislados.\r
\r
## Interpretacion fisica profunda\r
\r
Una interpretacion profunda entiende que la energia potencial gravitatoria mide costo energetico de reconfigurar el sistema fuente-prueba. Si se incrementa [[r]], el sistema demanda aporte energetico neto para elevar [[U]] respecto de la referencia en infinito. Si disminuye [[r]], el campo entrega energia mecanica al cuerpo y suele aumentar [[K]].\r
\r
El signo de [[DeltaU]] no es un detalle tecnico. Es una traduccion directa del sentido fisico del proceso. Delta positivo sugiere alejamiento con ganancia potencial. Delta negativo sugiere acercamiento con liberacion energetica. La relacion con [[Wg]] permite pasar de una narrativa geometrica a una narrativa dinamica sin contradicciones.\r
\r
Ademas, el criterio ligado y no ligado a partir de [[E]] ayuda a conectar ejercicios escolares con fisica orbital real. Este puente evita que el tema quede reducido a calculo aislado y lo integra en un marco de modelizacion fisica.\r
\r
## Orden de magnitud\r
\r
En problemas terrestres, [[M]] suele fijarse en valores planetarios y [[r]] en millones de metros. Eso produce escalas de [[U]] y [[DeltaU]] que pueden ser muy grandes incluso para masas [[m]] moderadas. Una buena practica es estimar primero el orden de magnitud antes de hacer sustitucion fina.\r
\r
Para trayectos cortos cercanos a superficie, la aproximacion local puede dar resultados de orden correcto con menor costo algebraico. Para trayectos orbitales o cambios grandes de radio, la aproximacion local deja de ser fiable y se debe volver al modelo general.\r
\r
Cuando el resultado numerico rompe el orden esperado, el error suele estar en unidades o en signos. Revisar SI de [[G]], [[M]], [[m]], [[r]], [[ri]], [[rf]] y consistencia de joule en [[U]] y [[Wg]] evita la mayor parte de fallos de examen.\r
\r
## Metodo de resolucion personalizado\r
\r
Paso uno: definir el sistema fisico y declarar estados inicial y final con [[ri]], [[rf]], [[Ui]], [[Uf]]. Paso dos: elegir modelo general o local segun escala del desplazamiento. Paso tres: calcular [[DeltaU]] con la formula correspondiente y comprobar signos. Paso cuatro: vincular con [[DeltaK]] o [[Wg]] segun lo que pida el problema. Paso cinco: cerrar con una lectura fisica breve que explique si el sistema gano o perdio energia potencial y que implica para su movimiento.\r
\r
Este metodo reduce errores porque obliga a separar calculo, validacion y interpretacion. Tambien deja rastro claro de decisiones de modelo, que es lo que mas se valora en evaluaciones avanzadas.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial uno: proceso con [[ri]] y [[rf]] muy cercanos a una superficie planetaria. Aqui la aproximacion local con [[h]] y [[g]] puede ser suficiente, siempre que se justifique escala. Caso especial dos: transferencia radial amplia, donde el uso de [[h]] deja de ser valido y solo la forma general conserva coherencia.\r
\r
Ejemplo extendido conceptual: un satelite ligero cambia de orbita de un radio inicial a uno final mayor. La lectura esperada es [[DeltaU]] positiva, [[DeltaK]] negativa y [[Wg]] negativa. Si el resultado numerico no respeta ese patron, el problema no se corrige con mas algebra sino revisando signos, orden de estados y referencia energetica.\r
\r
En variante de acercamiento, la lectura se invierte: [[DeltaU]] negativa y trabajo gravitatorio positivo. Este contraste muestra por que la interpretacion fisica no puede omitirse al final de la resolucion.\r
\r
## Preguntas reales del alumno\r
\r
Pregunta frecuente: por que [[U]] puede ser negativa si es energia. Respuesta: porque el cero de energia potencial es una referencia elegida, no una barrera fisica absoluta. Con referencia en infinito, estados ligados quedan por debajo de ese nivel.\r
\r
Otra pregunta: cuando usar aproximacion local en vez de forma general. Respuesta: cuando el cambio radial es pequeno frente al radio de referencia y el objetivo es estimar de forma rapida con error controlado.\r
\r
Pregunta adicional: si [[E]] es constante, por que cambia [[K]]. Respuesta: porque constancia de energia total no implica constancia de cada termino, sino compensacion entre componentes.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con campo y potencial gravitatorio porque la lectura energetica depende del comportamiento radial del campo. Conecta tambien con trabajo y energia porque [[Wg]] traduce variacion potencial en transferencia mecanica. En dinamica orbital, [[E]] se vuelve criterio de clasificacion de trayectorias.\r
\r
Ruta recomendada: primero campo y potencial, despues energia potencial gravitatoria, luego conservacion mecanica y finalmente orbitas. Esta secuencia construye continuidad conceptual y evita aprendizaje fragmentado.\r
\r
## Sintesis final\r
\r
La energia potencial gravitatoria permite leer un sistema en terminos de configuracion, no solo de fuerzas instantaneas. Con [[U]], [[DeltaU]], [[Wg]], [[DeltaK]] y [[E]] se construye una narrativa completa: que estado se tiene, como cambia y que implica para el movimiento. El valor didactico de este leaf no esta en memorizar una expresion, sino en dominar un criterio de modelizacion que decide cuando aplicar la forma general, cuando usar una aproximacion local y como validar signos, unidades y coherencia fisica en cada paso.`;export{e as default};
