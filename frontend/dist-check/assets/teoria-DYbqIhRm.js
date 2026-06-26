const e=`# Teoría\r
\r
## Contexto conceptual\r
\r
La ecuacion de movimiento en MHS no es solo una expresion para dibujar curvas bonitas. Es un marco que conecta causa fisica, representacion matematica y lectura experimental del estado. Cuando un sistema oscila cerca de un equilibrio estable y la respuesta restauradora es aproximadamente lineal, resulta posible describir su evolucion con un conjunto compacto de magnitudes que se refuerzan entre si. En este leaf, ese conjunto esta formado por [[x]], [[v]], [[a]], [[A]], [[omega]], [[phi]], [[t]] y [[x_dd]].\r
\r
Comprender esta red de dependencias evita dos errores comunes. El primero es confundir estado con historia, por ejemplo interpretar [[x]] grande como evidencia de energia alta sin revisar fase y velocidad. El segundo es tratar [[phi]] como un ajuste cosmetico cuando en realidad sintetiza informacion de inicio de experimento. En practica, estas distinciones cambian decisiones de medicion, ajuste de sensores y validacion de modelo.\r
\r
Tambien es importante subrayar que la ecuacion de movimiento del MHS pertenece a una familia de modelos ideales. Su valor no depende de ser perfecta en todo escenario, sino de ser transparente en sus supuestos y suficientemente robusta para rangos de operacion bien definidos. Un estudiante que domina este punto no solo resuelve ejercicios; tambien identifica cuando el modelo sigue siendo util y cuando hay que migrar a una descripcion con amortiguamiento, forzamiento o no linealidad.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial, la pregunta clave es simple: como reconocer si una oscilacion puede analizarse con un modelo lineal confiable. La respuesta empieza con observacion estructurada, no con sustitucion automatica. Se revisa si existe equilibrio estable, si la respuesta alrededor de ese equilibrio es regular y si el patron temporal conserva consistencia entre ciclos sucesivos.\r
\r
El punto didactico central de esta capa es distinguir descripcion de explicacion. Describir una curva no basta; hay que argumentar por que esa curva refleja un mecanismo restaurador y por que los supuestos del modelo son razonables para la ventana observada. Cuando esa justificacion no aparece, el resultado puede parecer correcto y aun asi ser fragil.\r
\r
Tambien se busca construir criterio de lectura temporal. Un mismo valor observado no tiene significado unico fuera de contexto. La interpretacion cambia segun el tramo del ciclo y segun la tendencia local de evolucion. Por eso, en esta etapa se entrena primero la narrativa causal y luego el formalismo.\r
\r
El cierre esencial deja una regla practica: si el comportamiento observado es estable, acotado y coherente con supuestos de linealidad, el marco armonico simple es una base valida para avanzar. Si no cumple esas condiciones, conviene documentar la limitacion antes de calcular.\r
\r
## 🔵 Nivel formal\r
\r
El nivel formal introduce las relaciones nucleares del leaf. Primero, la ley de posicion temporal del MHS:\r
\r
{{f:posicion_mhs}}\r
\r
Segundo, la ley de velocidad asociada:\r
\r
{{f:velocidad_mhs}}\r
\r
Tercero, la relacion restauradora entre aceleracion y estado:\r
\r
{{f:aceleracion_mhs}}\r
\r
Cuarto, la forma diferencial que sintetiza el modelo base:\r
\r
{{f:ecuacion_diferencial_mhs}}\r
\r
Estas cuatro relaciones no deben memorizarse como piezas aisladas. Se leen como un sistema coherente. La ley de posicion define la evolucion de [[x]] con parametros [[A]], [[omega]], [[phi]] y [[t]]. La ley de velocidad expresa como cambia ese estado en el tiempo y permite ubicar intervalos de avance y retroceso. La ley de aceleracion impone una restriccion de signo fisicamente interpretable: en MHS ideal, la curvatura temporal empuja hacia el equilibrio. La ecuacion diferencial resume esa misma idea en lenguaje de modelo.\r
\r
Una practica formal robusta incluye verificaciones intermedias. La primera es dimensional: cada magnitud calculada debe conservar su unidad fisica. La segunda es de acotacion: [[x]] no debe superar de forma sistematica el rango impuesto por [[A]] en condiciones ideales. La tercera es de coherencia temporal: al recorrer el ciclo, cambios de signo de [[v]] y [[a]] deben alinearse con la evolucion observada de [[x]]. Estas comprobaciones reducen errores de sustitucion y mejoran la interpretacion final.\r
\r
Tambien se recomienda separar objetivos de calculo. Si la pregunta pide estado en un instante, la ruta principal parte de la ley de posicion. Si pide tasa de cambio, la ruta principal pasa por velocidad. Si pide tendencia de retorno o curvatura dinamica, la ruta principal pasa por aceleracion y ecuacion diferencial. Mezclar rutas sin criterio suele producir soluciones correctas en algebra y debiles en causalidad.\r
\r
Finalmente, el nivel formal debe conectar solucion simbolica con lectura experimental. Un ajuste de parametros no termina cuando cierra una cuenta; termina cuando explica por que la trayectoria observada es compatible con hipotesis de linealidad y con condiciones iniciales reportadas. Esa conexion es la diferencia entre resolver un ejercicio y validar un modelo.\r
\r
## 🔴 Nivel estructural\r
\r
En nivel estructural analizamos limites, sensibilidad y decisiones de cambio de modelo. La ecuacion de movimiento ideal funciona bien cuando amplitud, entorno y parametros se mantienen en rango donde la aproximacion lineal es estable. Si el sistema entra en zona con rigidez efectiva variable, friccion no despreciable o excitacion externa persistente, la coherencia interna del modelo empieza a degradarse.\r
\r
Una forma de detectarlo es observar patrones de error, no valores aislados. Si al ampliar la ventana temporal aumenta el desfase de manera sistematica, puede haber deriva de [[omega]] o influencia de mecanismos no modelados. Si la envolvente de oscilacion cambia ciclo a ciclo, la hipotesis de energia conservada deja de ser suficiente para explicar datos. Si la relacion entre [[a]] y [[x]] pierde regularidad, la descripcion restauradora lineal necesita revision.\r
\r
Tambien importa la sensibilidad de decisiones a pequenas variaciones de parametros. Un modelo estructuralmente sano mantiene conclusiones estables cuando [[phi]] o [[A]] cambian dentro de incertidumbres razonables. Si una variacion pequena invierte por completo la interpretacion, hay riesgo de sobreajuste o falta de observables independientes para cerrar causalidad.\r
\r
Este nivel incorpora criterio de ingenieria: no todo error obliga a abandonar el modelo, pero todo error recurrente exige explicacion fisica. Conviene documentar umbrales operativos y definir con antelacion cuando migrar a un modelo amortiguado o forzado.\r
\r
La ganancia estructural de este leaf es precisamente esa: pasar de formulas sueltas a una estrategia de modelado verificable, donde cada magnitud se interpreta en su papel y cada supuesto se evalua con indicadores concretos.\r
\r
## Interpretación física profunda\r
\r
Una lectura profunda del MHS muestra que el sistema intercambia de forma continua dos tendencias: desplazarse respecto al equilibrio y regresar hacia el equilibrio. [[x]] y [[a]] representan esa tension dinamica en forma complementaria. Cuando el estado se aleja, la tendencia restauradora se fortalece. Cuando el estado se aproxima al equilibrio, esa tendencia disminuye y permite transicion de sentido. [[v]] actua como puente temporal entre ambas.\r
\r
Esta estructura explica por que no basta mirar un punto de la curva. El mismo valor de [[x]] puede aparecer en dos instantes con implicaciones distintas para control, seguridad o precision. Solo al incorporar fase temporal y signo de derivadas aparece el significado fisico completo. Por eso la interpretacion profunda siempre es contextual y no meramente numerica.\r
\r
Tambien es clave reconocer que idealidad no significa irrealidad. Significa abstraccion controlada. El modelo capta un mecanismo dominante y permite razonar con claridad sobre lo esencial del fenomeno. Cuando se usa con disciplina, no simplifica en exceso; organiza el pensamiento para saber que medir, que comparar y que concluir.\r
\r
## Orden de magnitud\r
\r
El analisis de orden de magnitud permite filtrar errores antes de entrar en detalle. Si [[omega]] es grande, la respuesta evoluciona rapido y la resolucion temporal del experimento debe ser mas fina. Si [[A]] es pequena, el ruido de medicion puede dominar parte de la lectura de [[x]]. Si [[A]] es grande y cercana a limites mecanicos, pueden aparecer desviaciones de linealidad que invaliden el uso directo del modelo ideal.\r
\r
Tambien conviene anticipar escalas relativas entre [[x]], [[v]] y [[a]]. Cambios moderados en [[omega]] amplifican con mas fuerza la escala de [[a]] que la de [[x]], lo cual afecta tolerancias instrumentales y saturacion de sensores. Esta observacion ayuda a disenar protocolos de adquisicion y evita concluir que una senal es anomala cuando en realidad responde a escalado esperado.\r
\r
En practica educativa y experimental, trabajar con orden de magnitud mejora la calidad de decisiones tempranas: seleccion de rango, frecuencia de muestreo, y criterio de aceptacion de ajuste. Un minuto de verificacion de escala suele ahorrar horas de depuracion numerica posterior.\r
\r
## Método de resolución personalizado\r
\r
Paso 1. Definir objetivo fisico de la pregunta. Identificar si se busca estado [[x]], tasa [[v]], curvatura [[a]] o consistencia de modelo.\r
\r
Paso 2. Verificar condiciones iniciales y supuestos. Registrar [[A]], [[phi]], calidad temporal de [[t]] y rango operativo para [[omega]].\r
\r
Paso 3. Elegir ruta formal principal. Usar la formula del leaf que responde directamente la pregunta y reservar las otras para validacion cruzada.\r
\r
Paso 4. Ejecutar sustitucion con control dimensional. Confirmar unidades en cada etapa y evitar conversiones tacitas.\r
\r
Paso 5. Hacer lectura causal del resultado. Explicar que implica el valor calculado para evolucion temporal, fase y tendencia de retorno.\r
\r
Paso 6. Aplicar chequeo estructural rapido. Evaluar si el resultado permanece coherente al variar ligeramente parametros dentro de incertidumbre razonable.\r
\r
Este metodo es personalizado porque prioriza objetivo y contexto antes de algebra automatica. Funciona bien en aula, laboratorio y analisis preliminar de sistemas reales.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial uno: fase inicial cercana a cambio de sentido. Cuando [[phi]] ubica el estado inicial cerca de un extremo, [[v]] inicial puede ser pequena y la interpretacion intuitiva suele confundirse. La recomendacion es no concluir dinamica solo con la primera muestra temporal.\r
\r
Caso especial dos: ventana temporal corta. Si el registro cubre una fraccion reducida del ciclo, distintos pares de parametros pueden producir curvas parecidas. En ese escenario, conviene fijar uno de los parametros con medicion independiente o ampliar observacion.\r
\r
Caso especial tres: amplitud cerca de limite lineal. Cuando [[A]] crece hacia bordes de validez, el ajuste ideal puede conservar aspecto correcto pero perder estabilidad predictiva en ciclos posteriores.\r
\r
Ejemplo extendido de estrategia: se registra [[x]] en varios ciclos, se estima [[omega]] por periodicidad observada, se usa la ley de posicion para reconstruir estado, se contrasta con velocidad inferida y se revisa si la relacion restauradora mantiene coherencia de signo. Si todos los cierres son consistentes y el error relativo se mantiene bajo umbral acordado, el modelo ideal se considera aceptable para la tarea.\r
\r
## Preguntas reales del alumno\r
\r
Pregunta uno: por que dos instantes con igual [[x]] pueden tener comportamiento distinto. Respuesta: porque el signo de [[v]] y la fase temporal no son iguales en ambos puntos.\r
\r
Pregunta dos: si [[A]] cambia, cambia la naturaleza del modelo. Respuesta: no necesariamente, pero puede cambiar si la nueva amplitud saca al sistema del rango lineal.\r
\r
Pregunta tres: por que [[a]] parece mas sensible a errores. Respuesta: porque la curvatura temporal amplifica efectos de ruido y discretizacion, por eso se necesita mejor control de muestreo.\r
\r
Pregunta cuatro: cuando pasar a modelo mas complejo. Respuesta: cuando hay evidencia repetida de deriva de amplitud, desfase acumulado o ruptura de coherencia entre observables.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con dinamica por la idea de fuerza restauradora y con energia por el intercambio entre estado y variacion temporal. Tambien enlaza con analisis de senales, porque la fase y la periodicidad son conceptos transversales en procesamiento de datos.\r
\r
Ruta recomendada de estudio: primero consolidar lectura de estado temporal, despues practicar validacion dimensional y finalmente trabajar criterios de cambio de modelo. Esa secuencia construye competencia transferible a sistemas amortiguados, forzados y de control.\r
\r
En proyectos interdisciplinarios, la ecuacion de movimiento de MHS funciona como base para razonamiento en vibraciones mecanicas, circuitos analogos y oscilaciones en instrumentacion. La clave es mantener trazabilidad entre hipotesis, datos y decision final.\r
\r
## Síntesis final\r
\r
La ecuacion de movimiento en MHS es una herramienta de decision fisica, no un recetario algebraico. Su valor emerge cuando se integra intuicion, formalismo y evaluacion estructural. [[x]], [[v]], [[a]], [[A]], [[omega]], [[phi]], [[t]] y [[x_dd]] deben leerse como sistema causal y no como lista de simbolos.\r
\r
Un aprendizaje solido del leaf permite resolver ejercicios con mayor calidad, detectar errores antes de reportar resultados y justificar cuando un modelo ideal sigue siendo suficiente o cuando debe evolucionar. Esa capacidad de juicio es el objetivo real del contenido.\r
`;export{e as default};
