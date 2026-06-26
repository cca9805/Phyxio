const e=`# Ley de gravitacion universal\r
\r
## Contexto conceptual\r
\r
La ley de gravitacion universal responde una pregunta central de la mecanica: como cambia la interaccion entre dos masas cuando cambia la distancia entre sus centros. En este leaf, la magnitud protagonista es [[F]], porque expresa la intensidad de esa interaccion en cada configuracion espacial. Sin embargo, [[F]] no se entiende sola. Su valor depende de [[G]], de [[m1]], de [[m2]] y de [[r]].\r
\r
La intuicion inicial puede ser enganosa. Muchos estudiantes piensan que si [[r]] se duplica entonces [[F]] se reduce a la mitad. Ese razonamiento seria correcto para una ley inversa simple, pero no para una ley inversa cuadratica. Aqui la dependencia es mas intensa: la distancia crece linealmente y la fuerza cae con el cuadrado. Esta es la firma matematica y fisica del tema.\r
\r
Otra clave de contexto es separar tres niveles de lectura. Nivel uno: la ley entre dos masas puntuales. Nivel dos: la traduccion de esa ley al campo [[g]] producido por una masa [[M]]. Nivel tres: la conexion con peso [[P]] y aceleracion [[a]] cuando aparece una masa de prueba [[m]]. Este encadenamiento convierte una formula aislada en una red de decisiones de modelo.\r
\r
Este leaf tambien exige una disciplina de definiciones. [[r]] siempre se mide entre centros de masa, no entre superficies arbitrarias. [[m1]] y [[m2]] son masas de la interaccion principal de la ley de Newton. [[m]] es la masa de prueba cuando se usa la relacion de peso. [[R]] es un radio de referencia geometrica, por ejemplo radio de un astro cuando se evalua condicion superficial. Si se mezclan estos papeles, el algebra puede dar un numero pero la interpretacion queda rota.\r
\r
## 🟢 Nivel esencial\r
\r
El nivel esencial debe dejar una imagen fisica clara sin depender de manipulacion simbolica extensa. Primera idea: la gravedad newtoniana es una interaccion atractiva entre masas. Segunda idea: esa interaccion se debilita rapido cuando aumenta la separacion. Tercera idea: el debilitamiento no es lineal, es inverso cuadratico.\r
\r
Desde esa base, la lectura de cambios es directa. Si la separacion crece, la interaccion cae con rapidez. Si la separacion disminuye, la interaccion aumenta. Esta tendencia permite anticipar resultados antes de calcular y evita aceptar numeros que contradicen la fisica del problema.\r
\r
En escenarios cercanos a una fuente masiva, la misma estructura aparece en el campo gravitatorio local. Por eso este tema no solo trata de una fuerza abstracta: tambien explica por que la intensidad gravitatoria cambia con el lugar.\r
\r
Una consecuencia didactica fuerte es evitar la confusion entre masa y peso. La masa describe una propiedad del cuerpo, mientras el peso describe su respuesta en un entorno gravitatorio concreto. Esta distincion mejora la interpretacion incluso en problemas simples.\r
\r
## 🔵 Nivel formal\r
\r
La relacion base del leaf es:\r
\r
{{f:ley_newton_gravitacion}}\r
\r
Esta ecuacion establece que [[F]] es proporcional al producto [[m1]] por [[m2]], y proporcional a la constante [[G]], pero inversamente proporcional al cuadrado de [[r]]. La estructura de proporciones explica por que duplicar una masa duplica [[F]], mientras duplicar la distancia reduce [[F]] a un cuarto.\r
\r
Para describir intensidad de campo generado por [[M]], se usa:\r
\r
{{f:campo_gravitatorio}}\r
\r
Aqui [[g]] hereda exactamente la dependencia radial de la ley principal. En consecuencia, si se compara campo en dos radios distintos, el patron de caida vuelve a ser inverso cuadratico.\r
\r
Cuando se pasa del campo a la fuerza sobre una masa de prueba [[m]], se aplica:\r
\r
{{f:peso_desde_campo}}\r
\r
Esta formula es lineal en [[m]] y hace visible la separacion conceptual entre propiedad del cuerpo y propiedad del entorno gravitatorio.\r
\r
Para expresar la aceleracion de una masa de prueba bajo la accion de [[M]]:\r
\r
{{f:aceleracion_gravitatoria}}\r
\r
En modulo, [[a]] y [[g]] quedan gobernadas por la misma dependencia funcional respecto de [[r]].\r
\r
Para comparaciones entre estados radialmente distintos sin recalcular desde parametros basicos:\r
\r
{{f:variacion_inversa_cuadrado}}\r
\r
Esta expresion conecta [[F1]], [[F2]], [[r1]] y [[r2]], y es muy util en problemas de examenes con cambios porcentuales.\r
\r
La forma direccional conceptual se resume en:\r
\r
{{f:forma_vectorial_conceptual}}\r
\r
Aunque esta formula no siempre se usa para calculo numerico completo, fija una idea indispensable: la direccion de la fuerza apunta radialmente hacia la masa fuente.\r
\r
Cuando intervienen varias fuentes, la lectura de campo requiere:\r
\r
{{f:superposicion_conceptual}}\r
\r
La superposicion permite construir [[g]] total como suma vectorial de contribuciones. Este punto conecta la ley elemental con configuraciones reales de mayor complejidad.\r
\r
## 🔴 Nivel estructural\r
\r
En nivel estructural importan los criterios de validez y no solo la sustitucion algebraica. Primer criterio: modelo newtoniano clasico. Si el escenario entra en regimen relativista fuerte, este leaf deja de ser marco principal. Segundo criterio: masas puntuales o simetria esferica equivalente para usar [[r]] como coordenada suficiente.\r
\r
Tercer criterio: coherencia de unidades. [[G]] debe mantenerse en SI y las masas en kilogramos para que [[F]] salga en newton. Si [[m1]] o [[m2]] aparecen en gramos sin conversion, el error de escala puede ser enorme aunque la cuenta simbolica parezca correcta.\r
\r
Cuarto criterio: consistencia semantica de magnitudes. [[m1]] y [[m2]] no son sinimos automaticos de [[m]]. [[M]] no reemplaza siempre a [[m1]], porque [[M]] representa fuente en formulaciones de campo. [[R]] no siempre equivale a [[r]]: solo coincide en condiciones superficiales especificas.\r
\r
Quinto criterio: lectura de dependencia. Si el problema pide comparar dos situaciones con mismas masas y distancia distinta, la ecuacion de variacion evita recargar algebra y reduce errores. Si cambian tambien las masas, conviene volver a la ley general.\r
\r
## Interpretacion fisica profunda\r
\r
La ley de gravitacion universal no es solo un mecanismo de calculo. Es una forma de codificar como la geometria radial gobierna intensidad de interaccion. La presencia de [[r]] al cuadrado en el denominador implica una sensibilidad espacial alta. Pequenos cambios relativos de distancia generan cambios notables en [[F]], [[g]] y [[a]].\r
\r
Esta sensibilidad explica por que los sistemas orbitales son estables en ciertas bandas y delicados en otras. Tambien explica por que el campo de un astro cae con rapidez fuera de su region cercana. En lenguaje didactico, la gravedad no desaparece de golpe; se atenúa siguiendo una ley precisa.\r
\r
La interpretacion profunda tambien exige separar modulo y direccion. En este leaf, la mayoria de calculos se hace con modulos positivos ([[F]], [[g]], [[a]]). Pero el signo direccional aparece en la forma vectorial y determina sentido fisico de la interaccion. Ignorar esa capa vectorial produce respuestas incompletas cuando el problema exige componentes o superposicion.\r
\r
En terminos de modelizacion, la pareja [[G]] y [[r]] define escala y estructura. [[G]] fija cuanto pesa globalmente la interaccion. [[r]] decide cuanto de esa escala se manifiesta en un punto concreto. Esta division ayuda a explicar por que un mismo valor de [[G]] sirve para distintos sistemas y al mismo tiempo permite comportamientos locales muy diferentes.\r
\r
## Orden de magnitud\r
\r
Un control rapido de orden de magnitud evita gran parte de errores. Si [[m1]] y [[m2]] son enormes pero [[r]] tambien es grande, [[F]] puede terminar en un rango moderado. Si [[r]] baja mucho, [[F]] crece de forma abrupta por el factor cuadratico. Por eso no basta mirar masas; hay que mirar tambien la escala radial.\r
\r
Para pesos cotidianos, usar [[P]] igual a [[m]] por [[g]] produce valores razonables cuando [[g]] esta en torno al entorno planetario local. Si al sustituir aparece un peso absurdamente pequeno o enorme, conviene revisar unidades y conversion de distancias antes de continuar.\r
\r
En comparaciones con [[F1]] y [[F2]], un chequeo mental simple es poderoso. Si [[r2]] es el doble de [[r1]], se espera [[F2]] igual a un cuarto de [[F1]]. Si el resultado no respeta esa razon basica, hay fallo en sustitucion o en interpretacion del cociente.\r
\r
Cuando se introduce [[R]], el control es geometrico. Si el punto de interes esta en superficie, usar [[r]] igual a [[R]] tiene sentido. Si el punto esta a gran altitud, mantener esa igualdad genera subestimaciones o sobreestimaciones importantes en [[g]] y [[a]].\r
\r
## Metodo de resolucion personalizado\r
\r
Paso 1. Identificar si el problema pide [[F]], [[g]], [[P]], [[a]] o comparacion entre [[F1]] y [[F2]].\r
\r
Paso 2. Declarar magnitudes dadas y su papel fisico: fuentes ([[m1]], [[m2]] o [[M]]), masa de prueba [[m]], y distancia radial [[r]] o pares [[r1]], [[r2]].\r
\r
Paso 3. Seleccionar formula dominante y escribirla primero en forma simbolica.\r
\r
Paso 4. Verificar dominio: r positivo, unidades SI, y coherencia entre modelo de dos cuerpos o modelo de campo.\r
\r
Paso 5. Sustituir datos numericos con control de escala y de potencias de diez.\r
\r
Paso 6. Interpretar resultado con una frase causal: que cambio la intensidad y por que.\r
\r
Paso 7. Ejecutar chequeo final de plausibilidad mediante orden de magnitud o razon de escalado.\r
\r
Este metodo reduce errores recurrentes y mantiene trazabilidad entre teoria, ejemplo y lectura grafica.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: variacion radial con masas fijas. Aqui la formula de variacion inversa cuadratica es la via mas limpia para relacionar [[F1]] y [[F2]].\r
\r
Caso especial 2: estimacion de [[g]] en altura moderada sobre una fuente [[M]]. Conviene usar el modelo de campo con [[r]] absoluto en vez de asumir constante local.\r
\r
Caso especial 3: lectura superficial. Cuando el punto de interes coincide con radio de referencia [[R]], puede escribirse [[r]] igual a [[R]] para simplificar sin perder significado.\r
\r
Ejemplo extendido conceptual: dos satelites de masas distintas se analizan alrededor de un planeta de masa [[M]]. Al aumentar [[r]], la fuerza sobre cada satelite disminuye con la misma ley radial, aunque el modulo difiere por la masa del satelite. Si luego se compara peso [[P]] de una sonda con masa [[m]] en dos orbitas, el cambio viene por [[g]], no por alteracion de [[m]]. Esta narrativa integra ley base, campo, peso y aceleracion en una sola cadena causal.\r
\r
## Preguntas reales del alumno\r
\r
Pregunta 1. Por que [[G]] no cambia entre problemas distintos. Porque es una constante fundamental del modelo clasico.\r
\r
Pregunta 2. Si [[m1]] aumenta y [[r]] tambien aumenta, cual efecto domina. Depende del balance relativo entre cambio lineal de masas y cambio cuadratico de distancia.\r
\r
Pregunta 3. [[P]] y [[F]] son siempre la misma cosa. No. [[P]] es un caso particular de fuerza gravitatoria sobre una masa de prueba en un campo especifico.\r
\r
Pregunta 4. Cuando uso [[M]] y cuando uso [[m1]] y [[m2]]. [[M]] se usa en formulaciones de campo de una fuente; [[m1]] y [[m2]] en la expresion de interaccion directa entre dos masas.\r
\r
Pregunta 5. Si [[r]] tiende a cero, la formula sirve igual. No en sentido fisico real; aparece una singularidad del modelo ideal y deben revisarse supuestos.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con dinamica porque [[F]] alimenta leyes de movimiento. Conecta con campo gravitatorio porque [[g]] se deriva de la misma estructura radial. Conecta con energia potencial porque la dependencia espacial de la fuerza condiciona el perfil energetico del sistema. Conecta con orbitas porque [[a]] radial controla curvatura de trayectorias.\r
\r
Ruta sugerida: primero ley de gravitacion universal, luego campo y potencial, despues energia potencial gravitatoria y finalmente dinamica orbital. Esta secuencia minimiza aprendizaje fragmentado y refuerza continuidad conceptual.\r
\r
Tambien hay una ruta matematica complementaria: trabajar proporcion, potencias, notacion cientifica y control dimensional. Sin esa base, la fisica del leaf se entiende parcialmente pero se aplica mal en problemas reales.\r
\r
## Sintesis final\r
\r
La ley de gravitacion universal organiza una idea simple y poderosa: la interaccion entre masas depende del producto de masas y del inverso del cuadrado de la distancia. Desde esa base se construyen [[g]], [[P]] y [[a]], y se analizan cambios entre estados con [[F1]], [[F2]], [[r1]] y [[r2]].\r
\r
Dominar este leaf no significa memorizar una formula. Significa elegir bien magnitudes, respetar dominio de validez, controlar orden de magnitud y cerrar cada calculo con interpretacion fisica coherente. Cuando esa disciplina se cumple, la ley deja de ser un simbolo de manual y se convierte en herramienta de modelizacion robusta para problemas academicos y aplicados.`;export{e as default};
