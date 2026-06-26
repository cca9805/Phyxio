# Definicion y expresion

## Contexto conceptual

Este leaf se centra en una pregunta específica y estructural: que significa definir el peso como vector y que cambia cuando trabajamos con su modulo escalar. La idea clave no es solo calcular un valor, sino entender la arquitectura conceptual que conecta [[P]], [[Pmod]], [[g]] y [[gmod]], junto con los parámetros del modelo gravitatorio central [[G]], [[M_astro]] y [[r]].

A diferencia de un enfoque puramente operativo, aquí la prioridad didáctica es distinguir entre:

- Definición vectorial de la interacción gravitatoria.
- Expresión escalar útil para cálculo rápido en campo casi uniforme.
- Modelo extendido de campo central que explica variaciones de gravedad.

Esta distinción es la identidad del tema. Permite evitar errores recurrentes como confundir masa y peso, o suponer que la gravedad local es idéntica en cualquier altitud y planeta.

## 🟢 Nivel esencial

En nivel esencial conviene fijar tres ideas sin saturación algebraica.

Primera idea: [[m]] es propiedad inercial del cuerpo y no depende del lugar. Segunda idea: [[P]] es fuerza gravitatoria, por tanto depende del entorno gravitatorio. Tercera idea: la dirección del peso siempre sigue la dirección del campo local, por lo que al cambiar la geometría de referencia cambian sus componentes, no su naturaleza física.

Cuando se escoge un sistema de ejes, el peso puede representarse por componentes. Esa descomposición no crea nuevas fuerzas: solo cambia el lenguaje matemático con que describimos la misma interacción.

En lenguaje cotidiano: la masa "eres tú", el peso "cómo te tira el astro". Si el astro o la distancia cambian, el peso cambia; la masa no.

Una lectura esencial correcta evita dos atajos dañinos. Primer atajo: pensar que todo problema gravitatorio se resuelve con una sola cifra fija de gravedad. Segundo atajo: creer que cambiar de notación no cambia nada en la interpretación. En realidad, elegir entre descripción vectorial y escalar condiciona qué preguntas puedes responder con rigor. Por eso este nivel insiste en intuición causal antes de cálculo detallado.

## 🔵 Nivel formal

La relación vectorial base del tema es:

{{f:peso_vectorial}}

La forma escalar de uso frecuente en campo casi uniforme es:

{{f:modulo_peso}}

La extensión hacia modelo de campo central es:

{{f:gravedad_campo_central}}

La regla conceptual de dirección, crítica para DCL y signos, es:

{{f:direccion_peso}}

Estas cuatro piezas forman un sistema coherente:

1. [[P]] describe fuerza con dirección y sentido.
2. [[Pmod]] resume intensidad cuando la dirección ya está fijada.
3. [[gmod]] puede tratarse como casi constante en problemas introductorios.
4. [[gmod]] también puede deducirse desde [[G]], [[M_astro]] y [[r]] en el modelo central.

En este nivel, el paso correcto no es memorizar una ecuación aislada, sino seleccionar la representación adecuada según el problema: vectorial para análisis de fuerzas y ejes, escalar para estimación rápida de magnitud, central para comparación entre cuerpos celestes o cambios con altitud.

Descomposición formal por componentes cuando el eje y es vertical:

- [[P_x]] = 0 y [[P_y]] = -[[Pmod]] en el caso simple de gravedad vertical.
- [[g_x]] = 0 y [[g_y]] = -[[gmod]] bajo la misma convención.

En problemas inclinados u orientados, esta forma general se adapta con una matriz de rotación o con trigonometría elemental, manteniendo siempre la misma lógica física: el vector no cambia por escribirlo en otra base, cambian sus componentes numéricas.

También es útil distinguir rutas formales de cálculo:

1. Ruta local: tomar [[gmod]] conocida y obtener [[Pmod]] directa.
2. Ruta central: calcular [[gmod]] desde [[G]], [[M_astro]], [[r]] y luego obtener [[Pmod]].
3. Ruta vectorial: calcular [[P]] y después proyectar en ejes del DCL.

Estas rutas no compiten entre sí. Se encadenan según la precisión requerida y según el tipo de salida que pide el problema.

## 🔴 Nivel estructural

El nivel estructural pregunta cuándo cada representación es válida y cuándo conviene escalar el modelo.

Señales de buen uso:

- Se usa forma vectorial cuando importa dirección de fuerzas.
- Se usa forma escalar cuando la dirección está resuelta y el objetivo es magnitud.
- Se justifica explícitamente si [[gmod]] se toma constante o variable.

Señales de mal uso:

- Mezclar [[P]] vectorial con [[Pmod]] escalar sin declarar convención.
- Tratar [[gmod]] como universalmente constante en contextos planetarios distintos.
- Usar [[G]], [[M_astro]] y [[r]] de forma decorativa sin enlazarlos con [[gmod]].

Criterios cuantitativos orientativos para el paso de modelo:

- Si la variación relativa de [[gmod]] estimada por cambio de [[r]] supera 2 por ciento, dejar de usar aproximación de campo uniforme.
- Si el objetivo de precisión exige error menor a 1 por ciento en peso, revisar explícitamente dependencia con [[r]].
- Si el análisis depende de dirección de fuerza en ejes no triviales, usar forma vectorial y componentes [[P_x]], [[P_y]], [[g_x]], [[g_y]].

Transición explícita: conviene pasar del esquema uniforme al modelo central cuando el problema compare altitudes, planetas o radios orbitales, o cuando la precisión pedida haga relevante la variación de [[gmod]] con [[r]].

## Interpretación física profunda

Interpretar peso correctamente implica causalidad: [[m]] fija cuánta inercia tiene el cuerpo, [[g]] fija cuánta atracción gravitatoria ejerce el entorno, y [[P]] resulta de ambas. La dirección de [[P]] no es arbitraria; queda anclada a la dirección de [[g]].

Desde una lectura fenomenológica, esto explica por qué un mismo cuerpo cambia de peso entre Tierra, Luna o Marte sin cambiar su masa. También explica por qué la expresión escalar es útil pero limitada: simplifica cálculo, pero oculta dirección y puede inducir errores de signo si se usa fuera de contexto.

La interpretación correcta no termina en un número en newtons. Debe incluir qué supuestos sostienen ese número, qué tan sensible es a variaciones de [[r]] o [[M_astro]], y si la representación usada (vectorial o escalar) coincide con la pregunta física.

## Orden de magnitud

Referencias útiles para control de cordura:

- [[G]] es extremadamente pequeña en unidades SI, lo que explica por qué se requiere gran [[M_astro]] para producir campos apreciables.
- [[gmod]] en superficies planetarias del sistema solar varía de pocos a cientos de m/s^2.
- [[Pmod]] puede variar varios órdenes de magnitud entre laboratorio humano y contextos industriales pesados.
- [[P_x]] y [[P_y]] dependen de ejes elegidos; su interpretación siempre es relativa a la convención geométrica.

Estos órdenes de magnitud ayudan a detectar entradas imposibles y errores de unidades.

## Método de resolución personalizado

1. Determinar si el problema pide dirección de fuerza o solo magnitud.
2. Elegir representación: [[P]] vectorial o [[Pmod]] escalar.
3. Si hay contexto astronómico o de altitud, evaluar [[gmod]] con [[G]], [[M_astro]] y [[r]].
4. Si hay ejes oblicuos, descomponer en [[P_x]], [[P_y]] y revisar coherencia con [[g_x]], [[g_y]].
5. Validar unidades y consistencia física del resultado.
6. Cerrar con interpretación causal y validez del modelo elegido.

## Casos especiales y ejemplo extendido

Caso especial 1: comparar el mismo [[m]] en dos astros distintos para aislar efecto de [[gmod]].

Caso especial 2: comparar mismo astro con dos valores de [[r]] para mostrar transición de campo uniforme a campo central.

Caso especial 3: representar [[P]] en ejes rotados y verificar que el vector físico no cambia, solo sus componentes.

Ejemplo extendido recomendado: calcular [[gmod]] con [[G]], [[M_astro]] y [[r]], luego obtener [[Pmod]] para un cuerpo de [[m]] conocida, y finalmente reinterpretar el resultado en forma vectorial para un DCL con ejes inclinados.

## Preguntas reales del alumno

¿Por qué a veces se escribe peso como vector y otras como escalar? Porque responden a preguntas distintas: dirección completa frente a intensidad numérica.

Si la masa no cambia, por qué cambia el peso? Porque el campo gravitatorio del entorno cambia.

Cuando tengo que usar [[G]] explícitamente? Cuando [[gmod]] no puede suponerse constante o cuando el problema exige relación con [[M_astro]] y [[r]].

## Conexiones transversales y rutas de estudio

Este leaf conecta con dinámica vectorial, DCL, gravitación, órbitas y análisis dimensional. La ruta recomendada es:

- Dominar diferencia masa-peso.
- Dominar transición vector-escalar.
- Dominar transición campo uniforme-campo central.

Así se construye una comprensión robusta, transferible y distinta de un aprendizaje de fórmulas sueltas.

Como cierre pedagógico, conviene entrenar comparación entre representaciones con el mismo dato físico. Tomar una masa, calcular [[Pmod]] en dos contextos de [[gmod]] distinta, y luego expresar ambos casos como vectores en ejes comunes permite consolidar qué parte del cambio viene del entorno y qué parte viene de la elección de referencia. Ese hábito reduce errores de interpretación en dinámicas posteriores.

## Síntesis final

Definir y expresar el peso correctamente significa elegir la representación física adecuada para la pregunta correcta. [[P]], [[Pmod]], [[g]], [[gmod]], [[G]], [[M_astro]], [[r]] y sus componentes no son piezas aisladas; forman un sistema conceptual coherente que permite calcular, interpretar y decidir con rigor.
