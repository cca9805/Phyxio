const e=`# Velocidad orbital\r
\r
## Contexto conceptual\r
La idea de [[v_orb]] nace cuando intentamos responder una pregunta concreta: que rapidez necesita un cuerpo para mantenerse alrededor de una fuente gravitatoria sin caer ni escapar. En una descripcion ideal, esa fuente se representa por una [[M]] central, y la distancia clave es [[r]], medida desde el centro de masa. Este punto de partida evita una confusion comun: no basta conocer altura sobre superficie para resolver dinamica orbital.\r
\r
La utilidad fisica de estudiar velocidad orbital no se limita a problemas de aula. Es la base para entender por que satelites de observacion pasan varias veces por dia sobre una region, por que una orbita geoestacionaria requiere otra escala temporal y por que una transferencia entre orbitas exige cambios de velocidad cuidadosamente planificados. Conectar estos escenarios desde un unico marco conceptual reduce fragmentacion del aprendizaje.\r
\r
En este leaf aparecen magnitudes de tres familias. La familia geometrica incluye [[r]], [[R]], [[h]] y [[a]]. La familia dinamica incluye [[v_orb]] y [[v_escape]]. La familia energetica y de escala incluye [[mu]], [[T]] y [[E]]. Entender el papel de cada familia es mas importante que memorizar muchas expresiones aisladas.\r
\r
## 🟢 Nivel esencial\r
En el nivel esencial se trabaja con relaciones cualitativas, no con sustituciones extensas. Si la fuente central es la misma y aumentamos distancia orbital, la rapidez circular necesaria disminuye. Si mantenemos distancia y aumentamos masa central, la rapidez requerida aumenta. Esta doble regla permite validar rapidamente si un resultado final tiene sentido fisico.\r
\r
Tambien se distingue entre velocidad para permanecer ligado y velocidad umbral para abandonar el sistema. La primera describe movimiento orbital estable; la segunda marca frontera energetica. No son sinonimos, y confundirlas produce sobreestimaciones o interpretaciones incorrectas.\r
\r
Otra idea esencial es separar radio al centro y altura sobre superficie. Un enunciado con altura necesita conversion geometrica antes de cualquier lectura dinamica. Cuando este paso se omite, el error aparece en cascada: se altera rapidez, periodo y clasificacion energetica.\r
\r
El nivel esencial termina con una regla didactica corta: antes de calcular, anticipa tendencia. Si un resultado contradice esa tendencia, revisa definicion de variables y unidades.\r
\r
## 🔵 Nivel formal\r
La formulacion circular ideal se expresa mediante:\r
\r
{{f:velocidad_orbital_circular}}\r
\r
El umbral de escape en el mismo radio se modela con:\r
\r
{{f:velocidad_escape}}\r
\r
La escala temporal de una orbita circular se obtiene con:\r
\r
{{f:periodo_orbital}}\r
\r
Para compactar informacion de fuente gravitatoria se usa [[G]] junto con la masa central:
\r
{{f:parametro_gravitacional}}\r
\r
En orbitas keplerianas no estrictamente circulares, la lectura instantanea de rapidez se apoya en:\r
\r
{{f:vis_viva}}\r
\r
Y la clasificacion energetica por unidad de masa se resume en:\r
\r
{{f:energia_orbital_especifica}}\r
\r
El valor del nivel formal no esta en apilar formulas, sino en elegir la relacion minima que responde la pregunta planteada. Si el problema pide velocidad circular en un radio dado, no hace falta introducir vis viva de entrada. Si el problema pide lectura de regimen orbital general, la ecuacion energetica y el semieje mayor se vuelven centrales.\r
\r
El control dimensional es obligatorio en cada paso. Las magnitudes de velocidad deben mantenerse en unidades coherentes con la constante gravitatoria y con la conversion de distancia. La verificacion dimensional previa evita errores de tres ordenes de magnitud que, en orbital, son frecuentes cuando se mezclan kilometros y metros.\r
\r
## 🔴 Nivel estructural\r
Estructuralmente, este leaf pertenece al marco de fuerza central conservativa. Eso implica que la narrativa fisica no depende solo de un numero final, sino de como se conectan geometria, dinamica y energia en un mismo sistema. Cambiar una variable dominante altera varias lecturas a la vez, y esa interdependencia debe hacerse explicita.\r
\r
La variable radial organiza la estructura del problema. A menor radio, mayor curvatura exigida para cerrar trayectoria en el mismo campo, y por tanto mayor rapidez orbital. A mayor radio, la curvatura disminuye y el sistema transita a velocidades menores y periodos mayores. Esta lectura estructural explica por que el comportamiento no es lineal y por que una intuicion de proporcionalidad simple falla.\r
\r
El parametro [[mu]] actua como bisagra entre expresiones aparentemente distintas. Permite pasar de una lectura de velocidad a una lectura energetica sin perder coherencia de escala. Cuando el alumno domina esta bisagra, deja de ver formulas como piezas sueltas y empieza a ver un sistema de relaciones.\r
\r
La frontera estructural del modelo aparece cuando perturbaciones reales dejan de ser secundarias. Arrastre, no esfericidad y terceros cuerpos pueden desplazar resultados respecto de la prediccion ideal. Aun asi, el modelo base conserva valor: sirve como referencia para diagnosticar que parte de la desviacion viene de fisica omitida y que parte de errores de datos.\r
\r
## Interpretación física profunda\r
Una velocidad orbital calculada no es solo un valor de salida. Representa cuanta curvatura dinamica debe sostener el sistema en el entorno gravitatorio elegido. Cuando [[v_orb]] es alta, el regimen exige respuesta centripeta intensa; cuando es baja, la trayectoria puede mantenerse con curvatura mas suave.\r
\r
La comparacion con [[v_escape]] ofrece una lectura de frontera. Un estado con rapidez por debajo del umbral de escape puede seguir ligado al sistema, mientras que superar el umbral abre posibilidad de trayectoria no cerrada. Esta distincion es causal, no terminologica.\r
\r
La energia especifica [[E]] sintetiza esa causalidad. El signo permite clasificar regimen y revisar coherencia global de la solucion. Si el signo no concuerda con la narrativa del enunciado, hay que revisar conversion de datos, modelo elegido o uso de formulas.\r
\r
Tambien es fisicamente relevante la escala temporal [[T]]. El periodo traduce la dinamica a tiempos de operacion real: ventanas de comunicacion, frecuencia de revisita, sincronizacion entre plataformas y decisiones de mision.\r
\r
## Orden de magnitud\r
El orden de magnitud evita soluciones formales sin sentido fisico. En contextos planetarios, la velocidad orbital tipica suele estar en varios kilometros por segundo, no en decenas de metros por segundo ni en miles de kilometros por segundo. Esta regla simple permite filtrar errores antes de cerrar calculo.\r
\r
Para el periodo orbital, la escala tipica en orbitas bajas es de minutos a pocas horas. En orbitas mas altas, la escala crece de forma notable. Si aparece un periodo extremo para un radio moderado, conviene revisar conversion de distancia y consistencia de unidades.\r
\r
En misiones reales, esta lectura de escala reduce costo de iteracion. Detectar un valor imposible temprano evita propagar decisiones equivocadas a fases de simulacion o planificacion operativa.\r
\r
## Método de resolución personalizado\r
Paso 1. Identifica la pregunta fisica principal: permanencia circular, frontera de escape o clasificacion energetica.\r
\r
Paso 2. Define sistema y geometria. Si se da [[h]], conviertelo a [[r]] usando [[R]].\r
\r
Paso 3. Elige la ecuacion minima que responde al objetivo. No encadenes relaciones innecesarias.\r
\r
Paso 4. Homogeneiza unidades y revisa dimensiones antes de sustituir numeros.\r
\r
Paso 5. Ejecuta calculo y contrasta tendencia cualitativa esperada.\r
\r
Paso 6. Cierra con interpretacion: que significa el resultado para estabilidad, escala temporal y margen respecto de escape.\r
\r
Este metodo prioriza coherencia causal. Su ventaja es que sigue funcionando cuando el contexto cambia de un ejercicio academico a una aplicacion tecnica.\r
\r
## Casos especiales y ejemplo extendido\r
Caso especial A. Orbita casi superficial. Al acercarse [[r]] a [[R]], la velocidad circular aumenta y el periodo disminuye respecto de orbitas mas altas. Este caso sirve para entrenar conversion geometrica y lectura de orden de magnitud.\r
\r
Caso especial B. Orbita alta. Al crecer [[r]], la velocidad baja y el periodo crece con fuerza. El alumno aprende que la dependencia no es lineal y que pequenas variaciones porcentuales de radio pueden cambiar bastante la escala temporal.\r
\r
Caso especial C. Orbita eliptica. Cuando [[a]] ya no coincide con [[r]], la rapidez instantanea cambia con posicion, y vis viva permite mantener coherencia entre geometria y energia.\r
\r
Ejemplo extendido. Se comparan dos orbitas alrededor de la misma masa central. Primero se anticipa tendencia de velocidad y periodo antes de calcular. Luego se estiman valores y se verifica que cumplen tendencia prevista. Finalmente se interpreta margen respecto de escape y se clasifica regimen con energia especifica. El proceso completo integra lectura cualitativa, formalismo y control de plausibilidad.\r
\r
## Preguntas reales del alumno\r
Pregunta 1. Si la gravedad es mas debil lejos, por que el satelite no se detiene. Porque la velocidad orbital no se anula; solo cambia el valor requerido para mantener trayectoria en ese radio.\r
\r
Pregunta 2. Si dos satelites tienen masas distintas, necesitan distinta velocidad circular. En el modelo ideal de masa central dominante, la dependencia principal no esta en la masa del satelite.\r
\r
Pregunta 3. Si conozco velocidad de escape, ya resolvi velocidad orbital. No siempre. Son magnitudes relacionadas, pero responden a condiciones fisicas diferentes.\r
\r
Pregunta 4. Por que a veces uso [[r]] y otras [[a]]. [[r]] es distancia instantanea; [[a]] es escala global de la orbita.\r
\r
Pregunta 5. Para que sirve revisar energia si ya tengo velocidad. Sirve para clasificar regimen y verificar coherencia estructural del resultado.\r
\r
## Conexiones transversales y rutas de estudio\r
Este tema conecta con movimiento circular, conservacion de energia, leyes de Kepler y diseno de maniobras. Tambien enlaza con telecomunicaciones satelitales, observacion terrestre y navegacion espacial.\r
\r
Una ruta de estudio efectiva es: primero conversion geometrica y tendencias cualitativas; luego formulas circulares y control dimensional; despues vis viva y energia para escenarios no circulares; finalmente perturbaciones y modelos extendidos.\r
\r
Esta secuencia reduce sobrecarga cognitiva y mantiene continuidad entre teoria, ejemplos y aplicaciones.\r
\r
## Síntesis final\r
La velocidad orbital resume un equilibrio dinamico en un campo central. Comprenderla exige distinguir magnitudes geometricas, dinamicas y energeticas, mantener unidades coherentes y validar tendencia fisica antes de confiar en un numero.\r
\r
Con este marco, el estudiante puede resolver, interpretar y diagnosticar problemas orbitales con criterio transferible a contextos reales de mision y analisis.
`;export{e as default};
