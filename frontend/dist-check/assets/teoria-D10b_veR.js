const e=`# Numero de Reynolds y regimenes de arrastre\r
\r
## Contexto conceptual\r
\r
Este leaf responde una pregunta operativa: como leer, en una grafica Coord y en una representacion SVG, que [[Re]] no es una fuerza ni un resultado final de arrastre, sino un criterio de seleccion de modelo. La idea clave es separar diagnostico de regimen y calculo de fuerza. Primero se diagnostica el comportamiento del flujo con [[Re]], despues se decide si conviene un modelo dominado por viscosidad, uno dominado por inercia o una zona de transicion.\r
\r
El valor de [[Re]] emerge al combinar escala del problema y propiedades del medio. El cociente pone en competencia dos tendencias fisicas: la difusion viscosa y la persistencia inercial. Si domina la primera, el flujo tiende a ser mas ordenado y la descripcion de arrastre lineal suele capturar mejor el comportamiento. Si domina la segunda, aparecen separacion y estela energetica mas marcadas, y la descripcion cuadratica suele ser mas util.\r
\r
El objetivo didactico no es memorizar un umbral aislado, sino aprender una secuencia de razonamiento transferible: definir bien [[v]], elegir una longitud caracteristica [[L]], usar viscosidad adecuada ([[eta]] o [[nu]]), estimar [[Re]], y decidir el bloque de modelo fisico que mejor representa el fenomeno en ese contexto.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial no se empieza por ecuaciones, sino por lectura causal. Imagina dos escenas: una microcanalizacion con flujo muy lento y un vehiculo rapido en aire abierto. En ambas hay movimiento, pero la estructura del flujo no se organiza igual. En la primera escena, la viscosidad "ordena" rapidamente el campo de velocidades. En la segunda, la inercia conserva mejor el impulso y facilita estelas mas energeticas.\r
\r
[[Re]] resume esa diferencia de comportamiento. No es una "fuerza nueva" y no debe confundirse con una medida directa de resistencia. Es un indicador de regimen. Su utilidad pedagogica consiste en responder una pregunta previa a cualquier calculo de arrastre: que mecanismo dominante organiza el flujo en este caso.\r
\r
Tres ideas esenciales para evitar errores tempranos:\r
\r
1. [[Re]] no reemplaza a las magnitudes de arrastre; orienta que modelo de arrastre es mas coherente.\r
2. El valor de [[Re]] depende de como se define [[L]] y de que velocidad [[v]] representa de verdad la interaccion fluido-cuerpo.\r
3. Cambiar de medio o temperatura altera [[eta]] y [[nu]], por lo que el mismo objeto en la misma geometria puede cambiar de lectura de regimen.\r
\r
Si esta lectura conceptual queda clara, el salto al nivel formal es natural: las formulas no aparecen como ritual algebraico, sino como herramientas para cuantificar una decision de modelo.\r
\r
## 🔵 Nivel formal\r
\r
El nivel formal introduce dos expresiones equivalentes para calcular [[Re]], segun la magnitud viscosa disponible.\r
\r
Primera relacion, usando viscosidad dinamica [[eta]]:\r
\r
{{f:reynolds_viscosidad_dinamica}}\r
\r
Segunda relacion, usando viscosidad cinematica [[nu]]:\r
\r
{{f:reynolds_viscosidad_cinematica}}\r
\r
Ambas formas son consistentes si el conjunto de datos y unidades esta bien definido. En practica de resolucion, conviene seguir este flujo:\r
\r
1. Delimitar sistema y velocidad relativa relevante [[v]].\r
2. Declarar explicitamente la longitud caracteristica [[L]] y justificarla con la geometria del problema.\r
3. Seleccionar forma de calculo con [[eta]] o [[nu]] segun disponibilidad de datos.\r
4. Ejecutar calculo de [[Re]] con control dimensional.\r
5. Interpretar el intervalo resultante como criterio de seleccion de modelo de arrastre.\r
\r
En este nivel tambien importa la sensibilidad. Como [[Re]] crece con [[v]] y con [[L]], pequeños cambios operativos pueden mover el caso hacia una zona donde el modelo simplificado deja de representar bien la fisica. Por eso [[Re]] no se usa solo para etiquetar "laminar/turbulento", sino para vigilar estabilidad de la decision de modelo frente a variaciones realistas del problema.\r
\r
Un control formal minimo es comprobar consistencia entre ambos caminos de calculo cuando se conocen [[eta]] y [[nu]] para el mismo medio. Si la conversion entre viscosidades no cierra dentro de tolerancia razonable, el error suele estar en unidades, temperatura de referencia o definicion de velocidad caracteristica.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural responde la pregunta decisiva: cuando conviene mantener el modelo elegido y cuando hay que cambiar de bloque explicativo.\r
\r
Regla estructural 1: [[Re]] es un criterio contextual, no un numero universal del objeto. Si cambia [[L]], cambia la lectura. Si cambia la temperatura del medio, cambian [[eta]] y [[nu]], y por tanto cambia tambien la interpretacion de regimen.\r
\r
Regla estructural 2: no basta con calcular [[Re]] una vez. En aplicaciones reales conviene revisar una ventana de operacion. Si el sistema trabaja con variaciones de [[v]], la decision de modelo debe ser robusta en toda la banda y no solo en un punto nominal.\r
\r
Regla estructural 3: cuando el caso cae en zona transicional, la respuesta no es forzar una etiqueta binaria. La estrategia correcta suele ser un modelo por tramos, una interpolacion validada experimentalmente o una caracterizacion mas rica del arrastre en funcion de condicion de flujo.\r
\r
En terminos operativos, una transicion explicita puede describirse asi:\r
\r
1. Se calcula [[Re]] nominal.\r
2. Se calcula [[Re]] en limites inferior y superior de [[v]] esperada.\r
3. Si toda la banda queda en zona viscosa dominante, se prioriza bloque lineal.\r
4. Si toda la banda queda en zona inercial dominante, se prioriza bloque cuadratico.\r
5. Si la banda cruza zonas, se declara modelo transicional y se evita extrapolar un unico ajuste fuera de su rango.\r
\r
Esta logica reduce errores de sobreconfianza. Un numero con tres cifras puede parecer preciso, pero sin dominio de validez declarado el resultado carece de fuerza predictiva.\r
\r
Otra lectura estructural clave es la relacion con diseno experimental. [[Re]] tambien informa como escalar ensayos. Si un prototipo de laboratorio pretende representar un sistema mayor, no basta escalar dimensiones geometricas; hay que preservar el criterio de regimen para que el patron de flujo sea comparable.\r
\r
## Interpretación física profunda\r
\r
Interpretar profundo significa convertir [[Re]] en decisiones justificadas. Si el valor es bajo para la escena definida, la narrativa fisica debe explicar por que la viscosidad reorganiza el flujo y que implicaciones tiene para la forma de calcular arrastre. Si el valor es alto, la narrativa debe explicar por que la inercia mantiene estela y por que un modelo lineal aislado pierde capacidad descriptiva.\r
\r
Tambien implica reconocer limites. Un cambio pequeño de temperatura puede alterar [[eta]] y [[nu]] de forma no despreciable en algunos fluidos. Por eso, reportar [[Re]] sin condiciones de medio es didacticamente incompleto.\r
\r
El cierre interpretativo correcto no dice solo "[[Re]] es grande" o "[[Re]] es pequeño". Debe incluir: mecanismo dominante, consecuencia de modelado y riesgo de extrapolacion.\r
\r
## Orden de magnitud\r
\r
Referencias utiles para chequeo rapido:\r
\r
- [[rho]]: depende del medio; afecta la lectura inercial cuando se usa forma con [[eta]].\r
- [[v]]: su aumento desplaza el caso hacia mayor persistencia inercial.\r
- [[L]]: no es decorativa; una mala eleccion de escala geometrica distorsiona la interpretacion de [[Re]].\r
- [[eta]] y [[nu]]: codifican respuesta viscosa del medio; deben usarse con consistencia termica.\r
- [[Re]]: siempre se interpreta con contexto de referencia, nunca como etiqueta absoluta desanclada del problema.\r
\r
## Método de resolución personalizado\r
\r
1. Define el objetivo: clasificar regimen, comparar escenarios o seleccionar modelo de arrastre.\r
2. Especifica medio y condicion operativa para obtener [[rho]], [[eta]] o [[nu]].\r
3. Elige [[v]] y [[L]] con justificacion fisica de la escena.\r
4. Calcula [[Re]] con la forma disponible.\r
5. Valida unidades y consistencia de datos.\r
6. Decide bloque de modelo y declara rango de validez.\r
7. Si hay zona transicional, usa estrategia por tramos o validacion adicional.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: problemas con [[v]] muy baja en escalas pequeñas. La lectura de [[Re]] suele llevar a dominio viscoso y enfoque de arrastre lineal.\r
\r
Caso especial 2: geometria grande y [[v]] elevada en medio poco viscoso. La lectura de [[Re]] empuja hacia dominio inercial y modelos de arrastre no lineales.\r
\r
Ejemplo extendido: comparar dos fluidos para la misma geometria y velocidad. Aunque [[L]] y [[v]] no cambien, modificar [[nu]] puede mover el sistema entre regimenes y cambiar la eleccion del modelo dominante.\r
\r
## Preguntas reales del alumno\r
\r
¿Si conozco [[Re]], ya conozco la fuerza de arrastre?\r
No. [[Re]] no reemplaza el modelo de fuerza. Actua antes: selecciona el tipo de bloque de arrastre que deberias aplicar.\r
\r
¿Por que no existe un umbral unico valido para todo?\r
Porque la transicion depende de geometria, condiciones de borde y definiciones de escala. Los umbrales practicos son guias, no dogmas universales.\r
\r
¿Que pasa si uso una longitud caracteristica mal elegida?\r
El diagnostico de regimen puede quedar sesgado y arrastrar toda la cadena de calculo hacia un modelo inadecuado.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf se conecta con arrastre lineal, arrastre cuadratico y coeficiente de arrastre. La conexion no es enciclopedica, es funcional: [[Re]] ayuda a decidir que pieza usar y en que condiciones. Tambien conecta con escalamiento experimental y con lectura de validez de modelos en dinamica de fluidos.\r
\r
## Síntesis final\r
\r
La contribucion de [[Re]] en este leaf es metodologica y fisica a la vez. Metodologica, porque ordena la secuencia diagnostico primero y fuerza despues. Fisica, porque condensa la competencia entre inercia y viscosidad en un criterio que orienta la eleccion de modelo. Dominar esta idea evita calculos mecanicos fuera de contexto y mejora decisiones de diseno, interpretacion y prediccion.\r
`;export{e as default};
