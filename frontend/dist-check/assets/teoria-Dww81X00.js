const e=`\uFEFF# Relación lineal-angular\r
\r
## Contexto conceptual\r
\r
Una escena típica de relación lineal-angular aparece cuando un punto de un sólido rígido gira a distancia fija del eje y sus magnitudes lineales deben leerse a partir del estado angular del conjunto. Lo primero no es elegir números, sino fijar qué sistema, qué ejes y qué reloj harán comparable cada dato. El rasgo que organiza todo el leaf es que todos los puntos comparten el mismo estado angular, pero las magnitudes lineales cambian con el radio. Esa lectura evita mezclar magnitudes que pertenecen a preguntas distintas.\r
\r
Entender el tema desde ese punto de vista vuelve operativas las ecuaciones. El alumno ya no persigue una fórmula aislada, sino una estructura: qué permanece constante, qué cambia con el tiempo y qué magnitud decide el cierre del problema. Por eso este leaf sirve como puente entre la intuición geométrica y la modelización cuantitativa en cinemática.\r
\r
## 🟢 Nivel esencial\r
\r
La intuición útil empieza con una imagen concreta: dos puntos de una rueda tardan lo mismo en dar una vuelta completa, aunque el punto más alejado del eje recorra más espacio y necesite mayor velocidad tangencial [[v_t]]. Cuando esa escena se mira bien, se ve que todos los puntos comparten el mismo estado angular, pero las magnitudes lineales cambian con el radio. Esa es la regla corta que conviene recordar antes de escribir ninguna cuenta.\r
\r
En la práctica, el nivel esencial se domina si uno puede anticipar qué variable debe compararse, qué signo cabe esperar y qué error conceptual sería el más probable. Si la predicción cualitativa ya sale torcida, el álgebra posterior solo maquillará el problema. Por eso este nivel exige verbalizar el mecanismo con palabras propias antes de pasar a símbolos.\r
\r
## 🔵 Nivel formal\r
\r
El leaf tiene cuatro relaciones que se reparten el trabajo según la magnitud de interés. La más directa conecta la velocidad tangencial [[v_t]] de un punto con la velocidad angular del sólido y el radio de giro:\r
\r
{{f:relacion_v_omega}}\r
\r
Cuando el giro no es uniforme existe una aceleración angular alpha. La segunda relación convierte esa aceleración angular en aceleración tangencial [[a_t]], que cambia el módulo de la velocidad del punto:\r
\r
{{f:relacion_at_alpha}}\r
\r
Simultáneamente, el punto describe una trayectoria curva y por tanto siempre tiene una componente de aceleración dirigida hacia el eje: la aceleración normal [[a_n]]. Esta relación se expresa en términos angulares:\r
\r
{{f:aceleracion_normal}}\r
\r
o equivalentemente\r
\r
{{f:aceleracion_total_modulo}}\r
\r
. Estas dos componentes son ortogonales entre sí: [[a_t]] cambia el módulo de la velocidad y [[a_n]] cambia su dirección. La magnitud total de la aceleración se obtiene con la relación del módulo total:\r
\r
{{f:aceleracion_total_modulo}}\r
\r
Las cuatro expresiones comparten la misma lógica: el radio R actúa como factor de escala que traduce magnitudes angulares a lineales. Un mismo omega produce [[v_t]] y [[a_n]] distintas según el radio; un mismo alpha produce [[a_t]] distintas según la posición del punto en el sólido.\r
\r
## 🔴 Nivel estructural\r
\r
El modelo es válido bajo tres condiciones simultáneas. Primera, el sólido debe ser rígido: si el cuerpo se deforma durante la rotación, R cambia con el tiempo y las relaciones lineal-angulares pierden validez instante a instante. Segunda, el eje de giro debe ser fijo: si el eje precesa o se traslada, las componentes de aceleración del punto adquieren términos adicionales (aceleración de Coriolis, aceleración de arrastre) que el leaf no modela. Tercera, R debe ser la distancia perpendicular al eje, no la distancia al centro de masa ni la distancia recorrida.\r
\r
Los cuatro fallos más frecuentes son: (1) usar la velocidad angular de otro radio para calcular [[v_t]] de un punto distinto, ignorando que [[v_t]] es proporcional a R; (2) olvidar que [[a_n]] existe incluso cuando alpha es cero: en rotación uniforme, [[a_n]] sigue siendo no nulo si omega es distinto de cero; (3) sumar [[a_t]] y [[a_n]] algebraicamente en lugar de vectorialmente para obtener [[a_total]], lo que da un resultado incorrecto porque son perpendiculares; (4) confundir [[a_n]] con la fuerza centrípeta, que es el resultado de [[a_n]] multiplicada por la masa del punto, no la aceleración en sí.\r
\r
El indicador de fallo más rápido es comprobar si [[a_n]] es cero cuando omega es distinto de cero: si alguien obtiene que [[a_total]] coincide numéricamente con [[a_t]] en un problema donde hay rotación sostenida, ha ignorado la componente centrípeta y el modelo está mal aplicado.\r
\r
## Interpretación física profunda\r
\r
Más allá del cálculo, relación lineal-angular enseña a leer una relación entre descripción y observador. El número final solo tiene sentido si recupera el mecanismo que lo produjo: esta relación muestra que el giro global y la lectura local de un punto no son teorías separadas, sino dos vistas de la misma geometría. Esa exigencia de lectura física es la que separa una solución reutilizable de una cuenta correcta pero muda.\r
\r
## Orden de magnitud\r
\r
Los órdenes de magnitud razonables dependen del contexto, pero siempre conviene compararlos con escenas reconocibles: manecillas cortas y largas, ruedas pequeñas y grandes o discos de laboratorio donde el mismo omega produce velocidades lineales muy distintas al cambiar R. Esa comprobación rápida atrapa signos imposibles, tiempos absurdos y magnitudes incompatibles con la escala real del fenómeno antes de que el error se esconda detrás de una aritmética impecable.\r
\r
## Método de resolución personalizado\r
\r
Un recorrido robusto para este leaf consiste en fijar primero el sistema de referencia, escribir después las magnitudes que evolucionan y reservar la condición de cierre para el final. En concreto, conviene 1) identificar qué dato gobierna la geometría, 2) separar variables dadas de variables de control, 3) plantear las relaciones de evolución sin sustituir números demasiado pronto y 4) cerrar con una verificación cualitativa. En este tema, el atasco más frecuente aparece cuando se fuerza una igualdad entre magnitudes que no responden a la misma pregunta física.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Los casos límite son especialmente instructivos porque obligan a revisar qué queda del modelo cuando una hipótesis se extrema. En relación lineal-angular, un caso revelador es dos puntos del mismo disco tienen idéntica velocidad angular y, sin embargo, uno puede duplicar la velocidad tangencial del otro si está al doble de radio. Estudiarlo ayuda a ver qué parte del resultado procede de la geometría común del problema y qué parte depende de un dato inicial concreto. Un ejemplo extendido bien elegido no añade dificultad por volumen; añade claridad sobre el alcance real del modelo.\r
\r
## Preguntas reales del alumno\r
\r
Las dudas auténticas suelen girar alrededor de dos confusiones: "¿qué magnitud hay que igualar o comparar?" y "¿qué cambia si otro observador, otra escala o otra condición inicial entra en juego?". La respuesta operativa para este leaf es que la pregunta clave es siempre de qué punto se habla y a qué distancia del eje está, porque ahí se decide la magnitud lineal. Cuando esa idea queda clara, muchas cuentas largas se reducen a una elección correcta de variables y signos.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conversa de forma natural con otros nodos de cinemática y con la dinámica posterior. La razón es que vincula magnitudes angulares con movimiento circular, rodadura y aceleraciones en trayectoria curva, y prepara el salto hacia fuerzas centrípetas y torques. Por eso conviene enlazarlo con movimiento rectilíneo, análisis gráfico, movimiento en dos dimensiones o rotación según el caso: no como lista de temas vecinos, sino como una cadena de modelos que reutilizan estructura con distinto nivel de complejidad.\r
\r
## Síntesis final\r
\r
Dominar relación lineal-angular significa reconocer la escena física, elegir el observador correcto y usar las ecuaciones como lectura estructurada del fenómeno. La idea que merece salir del tema es simple: el mismo giro no implica la misma velocidad lineal para todos los puntos; el radio traduce el estado angular en lectura local. Si esa frase puede defenderse sin mirar apuntes, el leaf ya no se estudia como colección de fórmulas, sino como herramienta de modelización.\r
\r
Un cierre realmente sólido exige además saber explicar por qué la respuesta obtenida sería inaceptable si cambiara una hipótesis clave, un signo o el observador de referencia. Esa revisión final convierte la solución en criterio físico y no solo en procedimiento. Cuando un alumno puede hacer esa última comprobación sin apoyarse en la memoria mecánica, el contenido deja de ser un tema aislado y pasa a formar parte de una manera consistente de modelar fenómenos.\r
\r
Esta última comprobación también sirve para conectar el leaf con problemas reales de laboratorio, ingeniería básica o lectura de gráficos. Cuando el resultado puede defenderse cambiando datos, reescalando unidades y comparándolo con un caso límite simple, deja de ser un ejercicio aislado y pasa a funcionar como una herramienta intelectual reutilizable. Esa transferibilidad es justamente la señal de que la teoría se entendió con criterio físico y no solo con memoria de procedimiento.`;export{e as default};
