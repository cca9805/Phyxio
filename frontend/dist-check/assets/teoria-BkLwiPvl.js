const e=`# Hamilton-Jacobi\r
\r
## Contexto conceptual\r
\r
Hamilton-Jacobi es un leaf avanzado de mecanica analitica dedicado a funcion principal de accion, ecuacion diferencial parcial, separacion de variables, integrabilidad e interpretacion de frentes de accion. Aparece despues del lenguaje hamiltoniano y lagrangiano basico porque presupone que el alumno ya distingue coordenadas, momentos, funciones de energia, accion y validez de modelo. Su objetivo no es aumentar la sofisticacion simbolica, sino dar un criterio para decidir cuando una operacion formal conserva el mismo sistema fisico.\r
\r
Las magnitudes usadas en este leaf son [[S]], [[W]], [[H]], [[E]], [[qi]], [[pi]], [[t]]. Deben leerse como objetos fisicos dentro de un unico modelo coherente, no como letras aisladas. El alumno debe poder decir que mide cada magnitud, que hipotesis la hacen significativa y que se rompe si el modelo se aplica fuera de dominio.\r
\r
## 🟢 Nivel esencial\r
\r
Hamilton-Jacobi cambia el tipo de problema. En vez de buscar directamente la trayectoria, busca una funcion [[S]] cuya pendiente da el momento el momento canonico. Esa funcion no es un potencial cualquiera: organiza una familia de trayectorias posibles. Cuando el hamiltoniano el hamiltoniano y la derivada temporal de la accion se compensan, el sistema cumple la ecuacion de Hamilton-Jacobi y la dinamica queda codificada en un frente de accion.\r
\r
En este nivel, el aprendizaje importante es el control cualitativo. Un alumno debe explicar por que la magnitud dominante [[S]] importa antes de usar las formulas. Si la respuesta es solo un numero, el leaf no se ha comprendido. El numero solo es aceptable despues de identificar la estructura conservada, la aproximacion usada o la equivalencia entre descripciones.\r
\r
Esto tambien da al profesor un diagnostico claro. Si el estudiante nombra variables pero no explica por que la relacion es valida, la dificultad no es algebraica; es de interpretacion fisica. La primera intervencion debe preguntar que estructura se esta poniendo a prueba y que hipotesis haria falso el resultado.\r
\r
## 🔵 Nivel formal\r
\r
El contrato formal del leaf se expresa con estas relaciones:\r
\r
{{f:momento_desde_accion}}\r
\r
{{f:ecuacion_hamilton_jacobi}}\r
\r
{{f:separacion_autonoma}}\r
\r
{{f:ecuacion_hj_reducida}}\r
\r
Cada formula debe insertarse como una afirmacion sobre el modelo. La primera relacion define el objeto operativo del leaf. La segunda muestra como ese objeto actua dentro de la dinamica. La tercera da un criterio o una version reducida util para resolver problemas. La cuarta fija una condicion estructural especial que impide que el formalismo sea arbitrario.\r
\r
Las variables [[S]], [[W]], [[H]], [[E]], [[qi]], [[pi]], [[t]] deben estar sincronizadas entre magnitudes, formulas e interpretacion. Un calculo valido empieza identificando el papel fisico de [[S]], continua comprobando si aplican las hipotesis de dominio y solo despues manipula la ecuacion. Este orden es esencial en mecanica avanzada porque el algebra puede parecer correcta aunque el modelo fisico ya haya fallado.\r
\r
Formalmente, la accion principal funciona como una funcion generadora de una familia de soluciones. La ecuacion no devuelve directamente una coordenada en funcion del tiempo; devuelve una condicion sobre el frente de accion. Cuando el sistema es autonomo, la separacion entre [[W]] y [[E]] permite reducir la dependencia temporal y concentrar la dificultad en una ecuacion espacial.\r
\r
## 🔴 Nivel estructural\r
\r
Estructuralmente, este leaf explica por que la accion reducida [[W]] y la energia [[E]] permiten separar sistemas autonomos. La igualdad reducida no dice solo que la energia sea constante; dice que la dependencia temporal puede aislarse y que el resto de la informacion queda en una funcion espacial. El tiempo [[t]] aparece entonces como parametro de reconstruccion, no como una variable que haya que integrar paso a paso desde el inicio.\r
\r
La lectura estructural es lo que separa este leaf de un ejercicio procedimental. Pregunta si la descripcion es invariante, separable, conservativa, linealizada o canonicamente admisible. Un resultado que no pueda responder a esa pregunta esta incompleto aunque las sustituciones sean correctas. En mecanica avanzada, el objetivo es preservar la arquitectura del modelo mientras se simplifica el calculo.\r
\r
Por eso los casos limite forman parte de la teoria. Una particula libre, un oscilador armonico, un hamiltoniano autonomo o un equilibrio estable deben recuperarse cuando el leaf se especializa a esa situacion. Si el caso limite no se recupera, probablemente la relacion formal se ha usado fuera del dominio donde tiene significado fisico.\r
\r
La estructura de Hamilton-Jacobi conecta mecanica y optica: las trayectorias son normales a frentes de accion igual que los rayos son normales a frentes de fase. Esto permite leer el momento como gradiente y no solo como masa por velocidad. El alumno aprende que una solucion completa de accion puede contener una familia entera de trayectorias.\r
\r
## Interpretacion fisica profunda\r
\r
La interpretacion profunda es causal: [[S]] importa porque determina que conserva o que cambia el formalismo. Puede indicar un observable conservado, un cambio valido de variables, un frente de accion o un patron colectivo de oscilacion. El alumno debe leerlo como causa de estructura del modelo, no como salida decorativa.\r
\r
## Orden de magnitud\r
\r
La comprobacion de orden de magnitud depende de la escala del sistema original. En un problema mecanico regular, las cantidades tipo accion deben ser comparables con energia por tiempo, las frecuencias deben ser compatibles con la escala temporal natural y las comprobaciones estructurales adimensionales deben permanecer cerca de sus valores exactos esperados. Una desviacion mayor que aproximadamente diez por ciento bajo una hipotesis declarada pequena, canonica o separable es una senal de alarma.\r
\r
## Metodo de resolucion personalizado\r
\r
Primero identifica el sistema fisico y las variables [[S]], [[W]], [[H]], [[E]], [[qi]], [[pi]], [[t]]. Segundo declara la hipotesis que hace legal el formalismo avanzado. Tercero elige la formula que prueba esa hipotesis. Cuarto interpreta el resultado antes de simplificar. Quinto compara con un caso limite. Sexto decide si el modelo ha respondido a la pregunta fisica original.\r
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
Como cierre operativo, este tema debe dejar claro que la accion puede funcionar como solucion global. El alumno que domina el leaf puede distinguir trayectoria individual, frente de accion, accion reducida y energia de separacion, y puede explicar cuando una ecuacion diferencial parcial contiene la informacion dinamica de muchas trayectorias.\r
\r
\r
Despues de este leaf, el alumno debe poder usar Hamilton-Jacobi como criterio fisico. La competencia final no es memorizar ecuaciones, sino decidir cuando la descripcion avanzada es legitima, que conserva y que tipo de pregunta mecanica puede responder.\r
\r
Esta competencia permite revisar soluciones de otros temas: si una accion se usa como simbolo pero no organiza momentos, energia y separacion, el metodo pierde su contenido. El leaf funciona como puente hacia metodos globales.\r
`;export{e as default};
