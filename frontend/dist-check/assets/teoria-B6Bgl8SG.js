const e=`# Encuentros y persecuciones\r
\r
## Contexto conceptual\r
\r
Una escena típica de encuentros y persecuciones aparece cuando dos móviles comparten un mismo eje o una misma trayectoria y uno debe alcanzar al otro o cruzarse con él. Lo primero no es elegir números, sino fijar qué sistema, qué ejes y qué reloj harán comparable cada dato. El rasgo que organiza todo el tema es que la condición decisiva es igualar posiciones en el mismo marco y en el mismo instante, no igualar velocidades salvo que el problema pregunte otra cosa. Esa lectura evita mezclar magnitudes que pertenecen a preguntas distintas.\r
\r
Entender el tema desde ese punto de vista vuelve operativas las ecuaciones. El alumno ya no persigue una fórmula aislada, sino una estructura: qué permanece constante, qué cambia con el tiempo y qué magnitud decide el cierre del problema. Por eso este tema sirve como puente entre la intuición geométrica y la modelización cuantitativa en cinemática.\r
\r
## 🟢 Nivel esencial
\r
En un problema de encuentros o persecuciones no basta con describir cómo se mueve cada móvil por separado. La pregunta física central es otra: **cuándo** y **dónde** dos móviles comparten la misma posición dentro de un mismo eje y un mismo reloj.\r
\r
La idea más importante en este nivel no es una ecuación, sino una comparación. Si un móvil parte con ventaja, esa separación inicial [[d_0]] actúa como una distancia de referencia [[d_0]] . Si además uno empieza más tarde, aparece un retraso temporal [[dt]] que también modifica la situación. El problema no consiste en seguir dos historias independientes, sino en decidir si esas dos diferencias iniciales pueden ser compensadas por la evolución posterior del movimiento.\r
\r
Por eso, la intuición correcta no se basa en igualar velocidades, sino en pensar en **posición relativa**. Un perseguidor alcanza a otro cuando deja de existir separación espacial entre ambos. Una persecución fracasa si la diferencia de [[dt]] velocidades favorece al móvil que va delante o si el retraso temporal introduce una desventaja que no puede compensarse.\r
\r
En este nivel, el alumno debe quedarse con una imagen física limpia: encuentros y persecuciones son problemas de coincidencia espacial dentro de un marco común, y su dificultad real no está en la aritmética, sino en construir correctamente la relación entre separación inicial, retraso y movimiento relativo.\r
\r
## 🔵 Nivel formal
\r
En la nomenclatura técnica del tema, las magnitudes que organizan el problema son [[d_0]] , [[dt]] , [[v_rel]] [[v_rel]] , [[x_e]] [[x_e]] y [[t_e]] . La primera representa la separación inicial entre móviles; la segunda, un retraso temporal entre inicios; la tercera, la velocidad relativa que resume quién gana o pierde distancia; y las dos últimas identifican el lugar y el instante de encuentro [[t_e]] cuando este existe.\r
\r
La condición física básica del tema es \`condicion_encuentro\`: el encuentro ocurre cuando las posiciones de ambos móviles son iguales dentro del mismo sistema de referencia y en el mismo instante. A partir de esa idea aparecen distintas formulaciones operativas. En movimiento rectilíneo uniforme, el tiempo de encuentro puede organizarse mediante \`tiempo_encuentro_mru_mru\`. Si uno de los móviles parte con retraso, la estructura cambia y aparece \`encuentro_retrasado\`. Y cuando uno de los movimientos deja de ser uniforme, el problema puede requerir una formulación de tipo \`encuentro_mrua\`.\r
\r
Estas expresiones no son variantes decorativas, sino respuestas a configuraciones físicas distintas. Elegir una u otra depende de si la separación inicial está dada por [[d_0]] , de si existe un retraso [[dt]] , de si la velocidad relativa [[v_rel]] es constante y de si el encuentro puede describirse con una sola ecuación de coincidencia espacial.\r
\r
La traducción matemática ordena esa intuición mediante relaciones que responden a preguntas diferentes. Una primera ecuación fija la evolución básica del sistema y una segunda cierra la condición que realmente decide el resultado buscado.\r
\r
\r
\r
Estas expresiones no compiten entre sí: se reparten el trabajo. La primera describe cómo evoluciona cada magnitud con el tiempo o con la geometría elegida; la segunda conecta ese desarrollo con la condición de encuentro, referencia o compatibilidad propia del tema. Resolver bien esta parte significa elegir la ecuación por su papel físico, no por parecido superficial con otro ejercicio.\r
\r
\r
Relaciones formales adicionales del leaf:\r
\r
{{f:tiempo_encuentro_mru_mru_expandido}}\r
\r
{{f:condicion_encuentro}}\r
\r
{{f:encuentro_mrua}}\r
\r
{{f:encuentro_retrasado}}\r
\r
{{f:posicion_encuentro_mru}}\r
\r
{{f:separacion_inicial}}\r
\r
{{f:tiempo_encuentro_mru_mru}}\r
\r
{{f:velocidad_relativa_encuentro}}\r
\r
## 🔴 Nivel estructural
\r
El modelo funciona mientras se respeten las hipótesis que lo vuelven legible: ambos móviles deben describirse en un mismo sistema de referencia, con una convención de signos única y con expresiones temporales compatibles entre sí. Bajo esas condiciones, el resultado tiene una arquitectura clara y se puede interpretar cada parámetro sin ambigüedad.\r
\r
La estructura empieza a fallar cuando se igualan velocidades cuando el enunciado pide coincidencia de lugar, se mezclan cronómetros distintos o se cambia de eje a mitad del razonamiento. En ese momento deja de bastar una sustitución limpia y hay que revisar el modelo antes de seguir. La señal de madurez no es insistir en la misma fórmula, sino detectar a tiempo qué parte del escenario ha cambiado y por qué el tema ya no responde exactamente a la misma pregunta.\r
\r
## Interpretación física profunda\r
\r
Más allá del cálculo, encuentros y persecuciones enseña a leer una relación entre descripción y observador. El número final solo tiene sentido si recupera el mecanismo que lo produjo: el encuentro es un evento espacio-temporal: mismo lugar, mismo instante y misma descripción. Esa exigencia de lectura física es la que separa una solución reutilizable de una cuenta correcta pero muda.\r
\r
## Orden de magnitud\r
\r
Los órdenes de magnitud razonables dependen del contexto, pero siempre conviene compararlos con escenas reconocibles: peatones que se cruzan en segundos, coches que se alcanzan en decenas de segundos o trenes que se encuentran tras varios minutos según velocidades y separaciones iniciales. Esa comprobación rápida atrapa signos imposibles, tiempos absurdos y magnitudes incompatibles con la escala real del fenómeno antes de que el error se esconda detrás de una aritmética impecable.\r
\r
## Método de resolución personalizado\r
\r
Un recorrido robusto para este tema consiste en fijar primero el sistema de referencia, escribir después las magnitudes que evolucionan y reservar la condición de cierre para el final. En concreto, conviene 1) identificar qué dato gobierna la geometría, 2) separar variables dadas de variables de control, 3) plantear las relaciones de evolución sin sustituir números demasiado pronto y 4) cerrar con una verificación cualitativa. En este tema, el atasco más frecuente aparece cuando se fuerza una igualdad entre magnitudes que no responden a la misma pregunta física.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Los casos límite son especialmente instructivos porque obligan a revisar qué queda del modelo cuando una hipótesis se extrema. En encuentros y persecuciones, un caso revelador es el perseguidor parte detrás pero con rapidez menor; entonces puede acercarse visualmente y, sin embargo, no cerrar nunca la distancia. Estudiarlo ayuda a ver qué parte del resultado procede de la geometría común del problema y qué parte depende de un dato inicial concreto. Un ejemplo extendido bien elegido no añade dificultad por volumen; añade claridad sobre el alcance real del modelo.\r
\r
## Preguntas reales del alumno\r
\r
Las dudas auténticas suelen girar alrededor de dos confusiones: "¿qué magnitud hay que igualar o comparar?" y "¿qué cambia si otro observador, otra escala o otra condición inicial entra en juego?". La respuesta operativa para este tema es que primero se comparan posiciones; las velocidades solo entran para construir cómo cambian esas posiciones con el tiempo. Cuando esa idea queda clara, muchas cuentas largas se reducen a una elección correcta de variables y signos.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este tema conversa de forma natural con otros nodos de cinemática y con la dinámica posterior. La razón es que reutiliza las ecuaciones de MRU y MRUA, pero les añade la disciplina de comparar dos historias temporales dentro del mismo marco. Por eso conviene enlazarlo con movimiento rectilíneo, análisis gráfico, movimiento en dos dimensiones o rotación según el caso: no como lista de temas vecinos, sino como una cadena de modelos que reutilizan estructura con distinto nivel de complejidad.\r
\r
## Síntesis final\r
\r
Dominar encuentros y persecuciones significa reconocer la escena física, elegir el observador correcto y usar las ecuaciones como lectura estructurada del fenómeno. La idea que merece salir del tema es simple: un encuentro no se calcula por parecido entre números, sino por coincidencia física entre trayectorias descritas con un mismo reloj. Si esa frase puede defenderse sin mirar apuntes, el tema ya no se estudia como colección de fórmulas, sino como herramienta de modelización.\r
\r
Un cierre realmente sólido exige además saber explicar por qué la respuesta obtenida sería inaceptable si cambiara una hipótesis clave, un signo o el observador de referencia. Esa revisión final convierte la solución en criterio físico y no solo en procedimiento. Cuando un alumno puede hacer esa última comprobación sin apoyarse en la memoria mecánica, el contenido deja de ser un tema aislado y pasa a formar parte de una manera consistente de modelar fenómenos.\r
\r
Esta última comprobación también sirve para conectar el tema con problemas reales de laboratorio, ingeniería básica o lectura de gráficos. Cuando el resultado puede defenderse cambiando datos, reescalando unidades y comparándolo con un caso límite simple, deja de ser un ejercicio aislado y pasa a funcionar como una herramienta intelectual reutilizable. Esa transferibilidad es justamente la señal de que la teoría se entendió con criterio físico y no solo con memoria de procedimiento.\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
