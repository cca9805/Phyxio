const e=`# Definicion y expresion\r
\r
## Contexto conceptual\r
\r
Este leaf se centra en una pregunta específica y estructural: que significa definir el peso como vector y que cambia cuando trabajamos con su modulo escalar. La idea clave no es solo calcular un valor, sino entender la arquitectura conceptual que conecta [[P]], [[Pmod]], [[g]] y [[gmod]], junto con los parámetros del modelo gravitatorio central [[G]], [[M_astro]] y [[r]].\r
\r
A diferencia de un enfoque puramente operativo, aquí la prioridad didáctica es distinguir entre:\r
\r
- Definición vectorial de la interacción gravitatoria.\r
- Expresión escalar útil para cálculo rápido en campo casi uniforme.\r
- Modelo extendido de campo central que explica variaciones de gravedad.\r
\r
Esta distinción es la identidad del tema. Permite evitar errores recurrentes como confundir masa y peso, o suponer que la gravedad local es idéntica en cualquier altitud y planeta.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial conviene fijar tres ideas sin saturación algebraica.\r
\r
Primera idea: [[m]] es propiedad inercial del cuerpo y no depende del lugar. Segunda idea: [[P]] es fuerza gravitatoria, por tanto depende del entorno gravitatorio. Tercera idea: la dirección del peso siempre sigue la dirección del campo local, por lo que al cambiar la geometría de referencia cambian sus componentes, no su naturaleza física.\r
\r
Cuando se escoge un sistema de ejes, el peso puede representarse por componentes. Esa descomposición no crea nuevas fuerzas: solo cambia el lenguaje matemático con que describimos la misma interacción.\r
\r
En lenguaje cotidiano: la masa "eres tú", el peso "cómo te tira el astro". Si el astro o la distancia cambian, el peso cambia; la masa no.\r
\r
Una lectura esencial correcta evita dos atajos dañinos. Primer atajo: pensar que todo problema gravitatorio se resuelve con una sola cifra fija de gravedad. Segundo atajo: creer que cambiar de notación no cambia nada en la interpretación. En realidad, elegir entre descripción vectorial y escalar condiciona qué preguntas puedes responder con rigor. Por eso este nivel insiste en intuición causal antes de cálculo detallado.\r
\r
## 🔵 Nivel formal\r
\r
La relación vectorial base del tema es:\r
\r
{{f:peso_vectorial}}\r
\r
La forma escalar de uso frecuente en campo casi uniforme es:\r
\r
{{f:modulo_peso}}\r
\r
La extensión hacia modelo de campo central es:\r
\r
{{f:gravedad_campo_central}}\r
\r
La regla conceptual de dirección, crítica para DCL y signos, es:\r
\r
{{f:direccion_peso}}\r
\r
Estas cuatro piezas forman un sistema coherente:\r
\r
1. [[P]] describe fuerza con dirección y sentido.\r
2. [[Pmod]] resume intensidad cuando la dirección ya está fijada.\r
3. [[gmod]] puede tratarse como casi constante en problemas introductorios.\r
4. [[gmod]] también puede deducirse desde [[G]], [[M_astro]] y [[r]] en el modelo central.\r
\r
En este nivel, el paso correcto no es memorizar una ecuación aislada, sino seleccionar la representación adecuada según el problema: vectorial para análisis de fuerzas y ejes, escalar para estimación rápida de magnitud, central para comparación entre cuerpos celestes o cambios con altitud.\r
\r
Descomposición formal por componentes cuando el eje y es vertical:\r
\r
- [[P_x]] = 0 y [[P_y]] = -[[Pmod]] en el caso simple de gravedad vertical.\r
- [[g_x]] = 0 y [[g_y]] = -[[gmod]] bajo la misma convención.\r
\r
En problemas inclinados u orientados, esta forma general se adapta con una matriz de rotación o con trigonometría elemental, manteniendo siempre la misma lógica física: el vector no cambia por escribirlo en otra base, cambian sus componentes numéricas.\r
\r
También es útil distinguir rutas formales de cálculo:\r
\r
1. Ruta local: tomar [[gmod]] conocida y obtener [[Pmod]] directa.\r
2. Ruta central: calcular [[gmod]] desde [[G]], [[M_astro]], [[r]] y luego obtener [[Pmod]].\r
3. Ruta vectorial: calcular [[P]] y después proyectar en ejes del DCL.\r
\r
Estas rutas no compiten entre sí. Se encadenan según la precisión requerida y según el tipo de salida que pide el problema.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural pregunta cuándo cada representación es válida y cuándo conviene escalar el modelo.\r
\r
Señales de buen uso:\r
\r
- Se usa forma vectorial cuando importa dirección de fuerzas.\r
- Se usa forma escalar cuando la dirección está resuelta y el objetivo es magnitud.\r
- Se justifica explícitamente si [[gmod]] se toma constante o variable.\r
\r
Señales de mal uso:\r
\r
- Mezclar [[P]] vectorial con [[Pmod]] escalar sin declarar convención.\r
- Tratar [[gmod]] como universalmente constante en contextos planetarios distintos.\r
- Usar [[G]], [[M_astro]] y [[r]] de forma decorativa sin enlazarlos con [[gmod]].\r
\r
Criterios cuantitativos orientativos para el paso de modelo:\r
\r
- Si la variación relativa de [[gmod]] estimada por cambio de [[r]] supera 2 por ciento, dejar de usar aproximación de campo uniforme.\r
- Si el objetivo de precisión exige error menor a 1 por ciento en peso, revisar explícitamente dependencia con [[r]].\r
- Si el análisis depende de dirección de fuerza en ejes no triviales, usar forma vectorial y componentes [[P_x]], [[P_y]], [[g_x]], [[g_y]].\r
\r
Transición explícita: conviene pasar del esquema uniforme al modelo central cuando el problema compare altitudes, planetas o radios orbitales, o cuando la precisión pedida haga relevante la variación de [[gmod]] con [[r]].\r
\r
## Interpretación física profunda\r
\r
Interpretar peso correctamente implica causalidad: [[m]] fija cuánta inercia tiene el cuerpo, [[g]] fija cuánta atracción gravitatoria ejerce el entorno, y [[P]] resulta de ambas. La dirección de [[P]] no es arbitraria; queda anclada a la dirección de [[g]].\r
\r
Desde una lectura fenomenológica, esto explica por qué un mismo cuerpo cambia de peso entre Tierra, Luna o Marte sin cambiar su masa. También explica por qué la expresión escalar es útil pero limitada: simplifica cálculo, pero oculta dirección y puede inducir errores de signo si se usa fuera de contexto.\r
\r
La interpretación correcta no termina en un número en newtons. Debe incluir qué supuestos sostienen ese número, qué tan sensible es a variaciones de [[r]] o [[M_astro]], y si la representación usada (vectorial o escalar) coincide con la pregunta física.\r
\r
## Orden de magnitud\r
\r
Referencias útiles para control de cordura:\r
\r
- [[G]] es extremadamente pequeña en unidades SI, lo que explica por qué se requiere gran [[M_astro]] para producir campos apreciables.\r
- [[gmod]] en superficies planetarias del sistema solar varía de pocos a cientos de m/s^2.\r
- [[Pmod]] puede variar varios órdenes de magnitud entre laboratorio humano y contextos industriales pesados.\r
- [[P_x]] y [[P_y]] dependen de ejes elegidos; su interpretación siempre es relativa a la convención geométrica.\r
\r
Estos órdenes de magnitud ayudan a detectar entradas imposibles y errores de unidades.\r
\r
## Método de resolución personalizado\r
\r
1. Determinar si el problema pide dirección de fuerza o solo magnitud.\r
2. Elegir representación: [[P]] vectorial o [[Pmod]] escalar.\r
3. Si hay contexto astronómico o de altitud, evaluar [[gmod]] con [[G]], [[M_astro]] y [[r]].\r
4. Si hay ejes oblicuos, descomponer en [[P_x]], [[P_y]] y revisar coherencia con [[g_x]], [[g_y]].\r
5. Validar unidades y consistencia física del resultado.\r
6. Cerrar con interpretación causal y validez del modelo elegido.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: comparar el mismo [[m]] en dos astros distintos para aislar efecto de [[gmod]].\r
\r
Caso especial 2: comparar mismo astro con dos valores de [[r]] para mostrar transición de campo uniforme a campo central.\r
\r
Caso especial 3: representar [[P]] en ejes rotados y verificar que el vector físico no cambia, solo sus componentes.\r
\r
Ejemplo extendido recomendado: calcular [[gmod]] con [[G]], [[M_astro]] y [[r]], luego obtener [[Pmod]] para un cuerpo de [[m]] conocida, y finalmente reinterpretar el resultado en forma vectorial para un DCL con ejes inclinados.\r
\r
## Preguntas reales del alumno\r
\r
¿Por qué a veces se escribe peso como vector y otras como escalar? Porque responden a preguntas distintas: dirección completa frente a intensidad numérica.\r
\r
Si la masa no cambia, por qué cambia el peso? Porque el campo gravitatorio del entorno cambia.\r
\r
Cuando tengo que usar [[G]] explícitamente? Cuando [[gmod]] no puede suponerse constante o cuando el problema exige relación con [[M_astro]] y [[r]].\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con dinámica vectorial, DCL, gravitación, órbitas y análisis dimensional. La ruta recomendada es:\r
\r
- Dominar diferencia masa-peso.\r
- Dominar transición vector-escalar.\r
- Dominar transición campo uniforme-campo central.\r
\r
Así se construye una comprensión robusta, transferible y distinta de un aprendizaje de fórmulas sueltas.\r
\r
Como cierre pedagógico, conviene entrenar comparación entre representaciones con el mismo dato físico. Tomar una masa, calcular [[Pmod]] en dos contextos de [[gmod]] distinta, y luego expresar ambos casos como vectores en ejes comunes permite consolidar qué parte del cambio viene del entorno y qué parte viene de la elección de referencia. Ese hábito reduce errores de interpretación en dinámicas posteriores.\r
\r
## Síntesis final\r
\r
Definir y expresar el peso correctamente significa elegir la representación física adecuada para la pregunta correcta. [[P]], [[Pmod]], [[g]], [[gmod]], [[G]], [[M_astro]], [[r]] y sus componentes no son piezas aisladas; forman un sistema conceptual coherente que permite calcular, interpretar y decidir con rigor.\r
`;export{e as default};
