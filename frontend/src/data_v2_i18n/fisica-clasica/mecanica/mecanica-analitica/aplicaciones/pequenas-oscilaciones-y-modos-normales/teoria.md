# Pequenas oscilaciones y modos normales

## Contexto conceptual

Pequenas oscilaciones y modos normales es un leaf avanzado de mecanica analitica dedicado a equilibrio estable, linealizacion, matrices de masa y rigidez, autovalores, frecuencias propias, modos normales y superposicion modal. Aparece despues del lenguaje hamiltoniano y lagrangiano basico porque presupone que el alumno ya distingue coordenadas, momentos, funciones de energia, accion y validez de modelo. Su objetivo no es aumentar la sofisticacion simbolica, sino dar un criterio para decidir cuando una operacion formal conserva el mismo sistema fisico.

Las magnitudes usadas en este leaf son [[eta]], [[M]], [[K]], [[omega]], [[A]], [[phi]], [[t]]. Deben leerse como objetos fisicos dentro de un unico modelo coherente, no como letras aisladas. El alumno debe poder decir que mide cada magnitud, que hipotesis la hacen significativa y que se rompe si el modelo se aplica fuera de dominio.

## 🟢 Nivel esencial

Las pequenas oscilaciones muestran como un sistema con muchas coordenadas puede comportarse como varios osciladores independientes cuando se mira cerca de un equilibrio estable. El desplazamiento el desplazamiento pequeno debe ser pequeno para que el potencial se aproxime por una forma cuadratica. Entonces la matriz de masa la matriz de masa y la matriz de rigidez la matriz de rigidez determinan frecuencias [[omega]] y patrones el modo normal que ya no pertenecen a una sola particula, sino al sistema completo.

En este nivel, el aprendizaje importante es el control cualitativo. Un alumno debe explicar por que la magnitud dominante [[omega]] importa antes de usar las formulas. Si la respuesta es solo un numero, el leaf no se ha comprendido. El numero solo es aceptable despues de identificar la estructura conservada, la aproximacion usada o la equivalencia entre descripciones.

Esto tambien da al profesor un diagnostico claro. Si el estudiante nombra variables pero no explica por que la relacion es valida, la dificultad no es algebraica; es de interpretacion fisica. La primera intervencion debe preguntar que estructura se esta poniendo a prueba y que hipotesis haria falso el resultado.

## 🔵 Nivel formal

El contrato formal del leaf se expresa con estas relaciones:

{{f:ecuacion_linealizada}}

{{f:problema_autovalores_modal}}

{{f:solucion_superposicion_modal}}

{{f:ortogonalidad_modal}}

Cada formula debe insertarse como una afirmacion sobre el modelo. La primera relacion define el objeto operativo del leaf. La segunda muestra como ese objeto actua dentro de la dinamica. La tercera da un criterio o una version reducida util para resolver problemas. La cuarta fija una condicion estructural especial que impide que el formalismo sea arbitrario.

Las variables [[eta]], [[M]], [[K]], [[omega]], [[A]], [[phi]], [[t]] deben estar sincronizadas entre magnitudes, formulas e interpretacion. Un calculo valido empieza identificando el papel fisico de [[omega]], continua comprobando si aplican las hipotesis de dominio y solo despues manipula la ecuacion. Este orden es esencial en mecanica avanzada porque el algebra puede parecer correcta aunque el modelo fisico ya haya fallado.

Formalmente, la linealizacion transforma el problema acoplado en un problema de autovalores. La matriz de rigidez indica cuanto aumenta el potencial al separar el sistema del equilibrio, y la matriz de masa indica cuanta inercia se opone a cada patron. La frecuencia normal aparece cuando ambas informaciones son compatibles para una forma modal concreta.

## 🔴 Nivel estructural

Estructuralmente, el leaf ensena a pasar de coordenadas acopladas a coordenadas modales. La amplitud [[A]] mide cuanto participa cada modo, mientras el tiempo [[t]] organiza la fase de la oscilacion. La ortogonalidad modal no es un detalle lineal: permite separar energia, interpretar resonancias y diagnosticar si dos movimientos colectivos son realmente independientes.

La lectura estructural es lo que separa este leaf de un ejercicio procedimental. Pregunta si la descripcion es invariante, separable, conservativa, linealizada o canonicamente admisible. Un resultado que no pueda responder a esa pregunta esta incompleto aunque las sustituciones sean correctas. En mecanica avanzada, el objetivo es preservar la arquitectura del modelo mientras se simplifica el calculo.

Por eso los casos limite forman parte de la teoria. Una particula libre, un oscilador armonico, un hamiltoniano autonomo o un equilibrio estable deben recuperarse cuando el leaf se especializa a esa situacion. Si el caso limite no se recupera, probablemente la relacion formal se ha usado fuera del dominio donde tiene significado fisico.

La estructura modal separa movimiento colectivo, no particulas aisladas. Un modo normal puede mover muchas coordenadas a la vez con proporciones fijas; otro modo puede hacerlo con otra forma y otra frecuencia. Esta descomposicion es la razon por la que una estructura compleja vibra con firmas reconocibles y por la que la resonancia puede atacar solo algunos patrones.

## Interpretacion fisica profunda

La interpretacion profunda es causal: [[omega]] importa porque determina que conserva o que cambia el formalismo. Puede indicar un observable conservado, un cambio valido de variables, un frente de accion o un patron colectivo de oscilacion. El alumno debe leerlo como causa de estructura del modelo, no como salida decorativa.

## Orden de magnitud

La comprobacion de orden de magnitud depende de la escala del sistema original. En un problema mecanico regular, las cantidades tipo accion deben ser comparables con energia por tiempo, las frecuencias deben ser compatibles con la escala temporal natural y las comprobaciones estructurales adimensionales deben permanecer cerca de sus valores exactos esperados. Una desviacion mayor que aproximadamente diez por ciento bajo una hipotesis declarada pequena, canonica o separable es una senal de alarma.

## Metodo de resolucion personalizado

Primero identifica el sistema fisico y las variables [[eta]], [[M]], [[K]], [[omega]], [[A]], [[phi]], [[t]]. Segundo declara la hipotesis que hace legal el formalismo avanzado. Tercero elige la formula que prueba esa hipotesis. Cuarto interpreta el resultado antes de simplificar. Quinto compara con un caso limite. Sexto decide si el modelo ha respondido a la pregunta fisica original.

## Casos especiales y ejemplo extendido

En el caso especial mas simple, el criterio formal se vuelve exacto y puede comprobarse sin integracion numerica. En un caso mas realista, se vuelve diagnostico: dice si una transformacion, conservacion, separacion o modo linealizado puede confiarse. El ejemplo extendido debe incluir por tanto un paso simbolico y una lectura fisica.

## Preguntas reales del alumno

El alumno suele preguntar si este tema es solo matematico. La respuesta es no: es lenguaje matematico usado para proteger significado fisico. Otra pregunta comun es si las formulas sustituyen a las leyes de Newton. No las borran; las reorganizan para que estructura, simetria y reduccion se vuelvan visibles.

## Conexiones transversales y rutas de estudio

Este leaf conecta con ecuaciones de Hamilton, transformacion de Legendre, principio variacional, leyes de conservacion, estabilidad, teoria de perturbaciones y mecanica numerica. Debe estudiarse cuando el alumno ya puede leer coordenadas generalizadas y antes de abordar temas modernos donde los metodos que preservan estructura son esenciales.

## Sintesis final

Como cierre operativo, este tema debe dejar claro que linealizar no es ignorar la complejidad, sino elegir la escala donde la complejidad se organiza en modos. El alumno que domina el leaf puede justificar el equilibrio, construir el problema modal, interpretar frecuencias y reconocer que forma colectiva se activa.


Despues de este leaf, el alumno debe poder usar Pequenas oscilaciones y modos normales como criterio fisico. La competencia final no es memorizar ecuaciones, sino decidir cuando la descripcion avanzada es legitima, que conserva y que tipo de pregunta mecanica puede responder.

Esta competencia permite revisar soluciones de otros temas: si una frecuencia aparece sin modo, sin equilibrio o sin escala pequena, el resultado no describe una vibracion fisica. El leaf funciona como criterio de estabilidad local.
