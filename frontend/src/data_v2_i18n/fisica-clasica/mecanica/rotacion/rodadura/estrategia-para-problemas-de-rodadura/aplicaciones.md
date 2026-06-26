# Aplicaciones

## 1. Rampa de laboratorio

Variable dominante: [[a_cm]]

En una práctica con discos, aros y esferas, la estrategia evita usar la misma aceleración para todos. El método comienza identificando [[I]] y comparando I/(mR^2). Luego se decide si basta con la relación de aceleración en plano o si hay que medir rozamiento. La comparación muestra que el cuerpo con mayor inercia relativa invierte más respuesta en giro y baja con menor aceleración.

Límite de validez: el cuerpo debe rodar sin deslizar, conservar su forma y mantener un eje definido.

## 2. Vehículos y neumáticos

Variable dominante: [[tau]]

En una rueda real, [[R]] puede cambiar ligeramente por deformación y el contacto puede disipar energía. Para estimar rapidez se puede empezar con [[E_total]], pero para evaluar adherencia se necesita un DCL y el torque [[tau]] de contacto. La estrategia distingue una pregunta de velocidad de una pregunta de seguridad o tracción.

Límite de validez: si hay patinaje, frenada con bloqueo o deformación grande, el modelo ideal debe sustituirse por un modelo con pérdidas.

## 3. Rodillos industriales

Variable dominante: [[omega]]

Los rodillos de una cinta transportadora exigen distinguir avance del material y giro del rodillo. [[omega]] puede ser estable mientras [[v_cm]] del material cambia por carga. La estrategia ayuda a decidir si el problema es cinemático, porque solo relaciona velocidades, o dinámico, porque requiere fuerzas de contacto.

Límite de validez: la condición de contacto depende de fricción suficiente y de ausencia de deslizamiento relativo.

## 4. Deportes

Variable dominante: [[K_total]]

En una bola que rueda por una pista, [[K_total]] reparte energía entre traslación y giro. Un lanzamiento con deslizamiento inicial no cumple de inmediato la condición de rodadura; primero hay disipación y después puede alcanzarse rodadura casi ideal. La estrategia permite no conservar [[E_total]] durante la fase con pérdida.

Límite de validez: la superficie y la bola no deben deformarse de forma dominante si se usa energía ideal.

## 5. Diseño de experimentos

Variable dominante: [[E_total]]

Para comparar cuerpos con igual [[m]] y [[R]], se eligen geometrías con distinto [[I]]. Si el objetivo es medir [[a_cm]], se usa una rampa y cronometraje. Si el objetivo es validar energía, se mide velocidad final y se calcula [[K_total]]. El método elegido determina qué instrumentos hacen falta y qué incertidumbre domina.

Límite de validez: los errores de cronometraje, radio y ángulo [[phi]] deben ser menores que la diferencia que se quiere observar.

En todas las aplicaciones, la estrategia evita resolver por costumbre. Primero se clasifica la incógnita; luego se comprueba el contacto; finalmente se elige entre condición geométrica, DCL, energía o comparación gráfica. Si el resultado contradice el orden de magnitud o el gráfico, se revisa el modelo antes de ajustar números.

La rampa de laboratorio también permite estimar incertidumbres: un error pequeño en [[phi]] modifica la componente de [[g]] y por tanto [[a_cm]]. En vehículos, una variación del radio efectivo cambia la relación entre [[v_cm]] y [[omega]]. En rodillos, una carga variable cambia el contacto aunque el motor mantenga casi fija la velocidad angular. En deportes, el paso de deslizamiento a rodadura marca una frontera entre disipación y conservación. En diseño experimental, la selección de sensores depende de si se quiere medir energía, fuerza o aceleración. Estas decisiones son aplicaciones reales de la estrategia, no ejemplos decorativos.

La utilidad transversal está en documentar la decisión. En una práctica docente, escribir "uso energía" no basta; hay que decir que [[E_total]] se conserva porque el rozamiento estático no realiza trabajo disipativo neto. En una evaluación de neumáticos, escribir "uso dinámica" no basta; hay que justificar que la incógnita es una fuerza de contacto o un torque. En una cinta transportadora, escribir "uso cinemática" no basta; hay que comprobar que el contacto impone la misma velocidad tangencial. En una bola deportiva, escribir "uso rodadura" no basta si todavía hay deslizamiento inicial. En un diseño experimental, escribir "mido velocidad" no basta si el objetivo real es distinguir [[K_total]] traslacional y rotacional.

Cada aplicación, por tanto, se puede cerrar con tres frases operativas: qué magnitud domina, qué método responde mejor y qué observación obligaría a cambiar de modelo. Esa forma de cerrar transforma el leaf en una herramienta de resolución. El alumno no memoriza una lista de casos; aprende a reconocer señales físicas, elegir un modelo defendible y revisar el resultado cuando el gráfico o el orden de magnitud no acompañan.

En términos de aula, esto permite comparar soluciones distintas sin discutir gustos. Una solución energética es buena si conserva [[E_total]] con hipótesis claras. Una solución dinámica es buena si identifica fuerzas y [[tau]]. Una solución cinemática es buena si la restricción de contacto está justificada. El criterio común es siempre físico.

El mismo criterio sirve para informes técnicos breves: anotar dato dominante, método elegido, límite de validez y comprobación gráfica. Con esa plantilla, una aplicación de rodadura queda conectada con una decisión verificable.

También evita mezclar objetivos: medir rapidez, estimar fuerza, validar contacto y conservar energía son tareas distintas.