const e=`# Transformaciones canonicas\r
\r
## Contexto conceptual\r
\r
Transformaciones canonicas es un leaf avanzado de mecanica analitica dedicado a cambios de carta, preservacion simplectica, funciones generatrices, variables nuevas y equivalencia de descripciones hamiltonianas. Aparece despues del lenguaje hamiltoniano y lagrangiano basico porque presupone que el alumno ya distingue coordenadas, momentos, funciones de energia, accion y validez de modelo. Su objetivo no es aumentar la sofisticacion simbolica, sino dar un criterio para decidir cuando una operacion formal conserva el mismo sistema fisico.\r
\r
Las magnitudes usadas en este leaf son [[q]], [[p]], [[Q]], [[P]], [[K]], [[Fgen]], [[C]]. Deben leerse como objetos fisicos dentro de un unico modelo coherente, no como letras aisladas. El alumno debe poder decir que mide cada magnitud, que hipotesis la hacen significativa y que se rompe si el modelo se aplica fuera de dominio.\r
\r
## 🟢 Nivel esencial\r
\r
Una transformacion canonica responde a una pregunta precisa: si sustituyo las variables antiguas por variables nuevas, sigo describiendo el mismo sistema hamiltoniano o solo he cambiado letras? La condicion [[C]] no valida la comodidad algebraica; valida que las nuevas variables conserven la estructura de corchetes y, por tanto, la forma de las ecuaciones de Hamilton. La funcion generatriz la funcion generatriz es el puente que hace controlable ese cambio.\r
\r
En este nivel, el aprendizaje importante es el control cualitativo. Un alumno debe explicar por que la magnitud dominante [[C]] importa antes de usar las formulas. Si la respuesta es solo un numero, el leaf no se ha comprendido. El numero solo es aceptable despues de identificar la estructura conservada, la aproximacion usada o la equivalencia entre descripciones.\r
\r
Esto tambien da al profesor un diagnostico claro. Si el estudiante nombra variables pero no explica por que la relacion es valida, la dificultad no es algebraica; es de interpretacion fisica. La primera intervencion debe preguntar que estructura se esta poniendo a prueba y que hipotesis haria falso el resultado.\r
\r
## 🔵 Nivel formal\r
\r
El contrato formal del leaf se expresa con estas relaciones:\r
\r
{{f:relacion_generatriz_tipo2}}\r
\r
{{f:coordenada_nueva_generatriz}}\r
\r
{{f:hamiltoniano_transformado}}\r
\r
{{f:condicion_canonica_poisson}}\r
\r
Cada formula debe insertarse como una afirmacion sobre el modelo. La primera relacion define el objeto operativo del leaf. La segunda muestra como ese objeto actua dentro de la dinamica. La tercera da un criterio o una version reducida util para resolver problemas. La cuarta fija una condicion estructural especial que impide que el formalismo sea arbitrario.\r
\r
Las variables [[q]], [[p]], [[Q]], [[P]], [[K]], [[Fgen]], [[C]] deben estar sincronizadas entre magnitudes, formulas e interpretacion. Un calculo valido empieza identificando el papel fisico de [[C]], continua comprobando si aplican las hipotesis de dominio y solo despues manipula la ecuacion. Este orden es esencial en mecanica avanzada porque el algebra puede parecer correcta aunque el modelo fisico ya haya fallado.\r
\r
El calculo formal debe leerse como una auditoria del cambio de carta. Primero se obtiene el momento antiguo desde la generatriz; despues se obtiene la coordenada nueva; despues se corrige el hamiltoniano si la generatriz depende del tiempo. La condicion canonica no es opcional: decide si las ecuaciones nuevas siguen siendo ecuaciones de Hamilton y no una dinamica deformada.\r
\r
## 🔴 Nivel estructural\r
\r
Estructuralmente, este leaf separa coordenadas utiles de coordenadas legitimas. Un cambio puede simplificar el hamiltoniano original y aun asi no ser canonico. Si es canonico, el hamiltoniano transformado [[K]] produce el mismo tipo de flujo en las variables nuevas. Si la generatriz depende del tiempo, [[K]] no es una copia del hamiltoniano original; incorpora el coste dinamico del cambio de descripcion.\r
\r
La lectura estructural es lo que separa este leaf de un ejercicio procedimental. Pregunta si la descripcion es invariante, separable, conservativa, linealizada o canonicamente admisible. Un resultado que no pueda responder a esa pregunta esta incompleto aunque las sustituciones sean correctas. En mecanica avanzada, el objetivo es preservar la arquitectura del modelo mientras se simplifica el calculo.\r
\r
Por eso los casos limite forman parte de la teoria. Una particula libre, un oscilador armonico, un hamiltoniano autonomo o un equilibrio estable deben recuperarse cuando el leaf se especializa a esa situacion. Si el caso limite no se recupera, probablemente la relacion formal se ha usado fuera del dominio donde tiene significado fisico.\r
\r
La estructura profunda es simplectica. Un cambio puede hacer mas corta una expresion y, sin embargo, destruir areas orientadas de fase o relaciones canonicas. Cuando la transformacion es legitima, el sistema conserva su identidad dinamica aunque cambien las variables usadas para describirlo. Esta es la base de las variables accion-angulo y de muchos metodos de perturbacion.\r
\r
## Interpretacion fisica profunda\r
\r
La interpretacion profunda es causal: [[C]] importa porque determina que conserva o que cambia el formalismo. Puede indicar un observable conservado, un cambio valido de variables, un frente de accion o un patron colectivo de oscilacion. El alumno debe leerlo como causa de estructura del modelo, no como salida decorativa.\r
\r
## Orden de magnitud\r
\r
La comprobacion de orden de magnitud depende de la escala del sistema original. En un problema mecanico regular, las cantidades tipo accion deben ser comparables con energia por tiempo, las frecuencias deben ser compatibles con la escala temporal natural y las comprobaciones estructurales adimensionales deben permanecer cerca de sus valores exactos esperados. Una desviacion mayor que aproximadamente diez por ciento bajo una hipotesis declarada pequena, canonica o separable es una senal de alarma.\r
\r
## Metodo de resolucion personalizado\r
\r
Primero identifica el sistema fisico y las variables [[q]], [[p]], [[Q]], [[P]], [[K]], [[Fgen]], [[C]]. Segundo declara la hipotesis que hace legal el formalismo avanzado. Tercero elige la formula que prueba esa hipotesis. Cuarto interpreta el resultado antes de simplificar. Quinto compara con un caso limite. Sexto decide si el modelo ha respondido a la pregunta fisica original.\r
\r
## Casos especiales y ejemplo extendido\r
\r
En el caso especial mas simple, el criterio formal se vuelve exacto y puede comprobarse sin integracion numerica. En un caso mas realista, se vuelve diagnostico: dice si una transformacion, conservacion, separacion o modo linealizado puede confiarse. El ejemplo extendido debe incluir por tanto un paso simbolico y una lectura fisica.\r
\r
## Preguntas reales del alumno\r
\r
El alumno suele preguntar si este tema es solo matematico. La respuesta es no: es lenguaje matematico usado para proteger significado fisico. Otra pregunta comun es si las formulas sustituyen a las leyes de Newton. No las borran; las reorganizan para que estructura, simetria y reduccion se vuelvan visibles.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con ecuaciones de Hamilton, transformacion de Legendre, principio variacional, leyes de conservacion, estabilidad, teoria de perturbaciones y mecanica numerica. Debe estudiarse cuando el alumno ya puede leer coordenadas generalizadas y antes de abordar temas modernos donde los metodos que preservan estructura son esenciales.\r
\r
## Sintesis final\r
\r
Como cierre operativo, este tema debe dejar claro que cambiar variables no equivale a cambiar fisica. El alumno que domina el leaf puede proponer una generatriz, obtener variables nuevas, revisar la condicion canonica y explicar si el nuevo hamiltoniano conserva la misma dinamica o introduce una correccion temporal necesaria.\r
\r
\r
Despues de este leaf, el alumno debe poder usar Transformaciones canonicas como criterio fisico. La competencia final no es memorizar ecuaciones, sino decidir cuando la descripcion avanzada es legitima, que conserva y que tipo de pregunta mecanica puede responder.\r
\r
Esta competencia permite revisar soluciones de otros temas: si un cambio de variables simplifica pero no conserva estructura, el resultado deja de ser mecanica hamiltoniana equivalente. El leaf funciona como filtro de legitimidad.\r
`;export{e as default};
