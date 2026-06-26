# Condición de sumatoria de momentos

## Contexto conceptual

Este leaf no se limita a definir el momento de una fuerza aislada. Su objetivo es decidir si varias fuerzas producen equilibrio rotacional alrededor de un mismo eje. La magnitud central es [[tau_net]]: si se anula, no queda tendencia neta a girar; si no se anula, domina un sentido de giro.

Para que la suma tenga sentido, todas las contribuciones deben referirse al mismo pivote y al mismo convenio de signos. Las fuerzas [[F1]] y [[F2]] pueden tener magnitudes distintas, brazos [[r1]] y [[r2]] distintos, y ángulos [[theta1]] y [[theta2]] distintos. El equilibrio no exige igualar fuerzas: exige igualar efectos rotacionales opuestos.

## 🟢 Nivel esencial

Una fuerza puede hacer girar un cuerpo si actúa a cierta distancia del eje y no apunta directamente hacia el eje. En equilibrio rotacional, las tendencias de giro se compensan. Una contribución puede tender a girar en sentido horario y otra en sentido antihorario; lo que importa es la suma algebraica de esas tendencias.

La idea esencial es comparar momentos, no fuerzas sueltas. Una fuerza pequeña aplicada lejos del eje puede equilibrar una fuerza grande aplicada cerca. También puede ocurrir que una fuerza intensa no produzca giro si su línea de acción pasa por el eje. Por eso el análisis debe incluir fuerza, brazo, ángulo y signo.

El resultado físico se lee así: si [[tau_net]] es cero, el sistema cumple la condición de equilibrio rotacional. Si queda positivo o negativo, el signo indica qué sentido de giro residual domina.

En este nivel no hace falta calcular todavía cada expresión. Basta reconocer que el giro depende de tres factores cualitativos: cuánto empuja la fuerza, a qué distancia del eje actúa y con qué inclinación lo hace. Si uno de esos factores cambia, la tendencia de giro cambia aunque la fuerza parezca la misma.

## 🔵 Nivel formal

Primero se calcula la contribución rotacional de la primera fuerza:

{{f:torque_1_definition}}

Después se calcula la contribución rotacional de la segunda fuerza, usando su propio brazo, fuerza y ángulo:

{{f:torque_2_definition}}

La condición del leaf aparece al combinar las contribuciones con signo. En este convenio, el momento neto se escribe como diferencia entre ambas tendencias:

{{f:net_torque_condition}}

Para equilibrio rotacional se exige que [[tau_net]] sea cero. Si la segunda fuerza se usa como fuerza equilibrante, se puede despejar la magnitud necesaria [[Feq]]:

{{f:balancing_force_formula}}

Esta última relación muestra una lectura de diseño: si [[r2]] aumenta o si [[theta2]] se acerca a una fuerza perpendicular efectiva, puede hacer falta una fuerza menor para equilibrar. Si [[theta2]] anula el brazo efectivo, no existe una fuerza finita útil en ese punto geométrico.

Las unidades mantienen la coherencia. [[tau1]], [[tau2]] y [[tau_net]] se expresan en N m. La fuerza [[Feq]] se expresa en N. Los ángulos son adimensionales en radianes y actúan mediante el seno, que mide la parte de la fuerza eficaz para producir giro.

El nivel formal también exige conservar el convenio de signos. En el formulario pueden aparecer módulos positivos de fuerza y brazo, pero el momento neto es algebraico. Por eso dos contribuciones con el mismo módulo no siempre se suman: si representan sentidos de giro opuestos, se cancelan. La ecuación de [[Feq]] nace precisamente de imponer esa cancelación.

## 🔴 Nivel estructural

La estructura del equilibrio rotacional tiene cuatro pasos. Primero se elige el eje. Segundo se decide el signo positivo de giro. Tercero se calcula cada momento individual respecto a ese mismo eje. Cuarto se suman algebraicamente las contribuciones y se comprueba si [[tau_net]] se anula.

La elección del eje no es un detalle decorativo. Si [[tau1]] se calcula respecto a un pivote y [[tau2]] respecto a otro, la resta no representa ningún balance físico. Lo mismo ocurre si se asigna el signo de forma distinta a cada fuerza. La condición de sumatoria de momentos solo es válida dentro de un marco rotacional único.

El criterio estructural más importante es la cancelación. No se busca que [[F1]] y [[F2]] sean iguales, sino que sus efectos rotacionales opuestos tengan el mismo módulo. Si [[r1]] es menor que [[r2]], una fuerza equilibrante puede ser menor que la fuerza aplicada. Si un ángulo reduce el brazo efectivo, la fuerza necesaria aumenta.

Esta estructura permite detectar errores antes de sustituir. Dos momentos calculados con signos iguales no pueden representar fuerzas que visualmente giran en sentidos opuestos. Un brazo medido desde el extremo de la barra, y no desde el pivote, cambia todo el balance. Un ángulo tomado respecto al suelo, cuando la fórmula exige el ángulo respecto al radio, altera el seno y por tanto la eficacia rotacional.

## Interpretación física profunda

El equilibrio rotacional no significa ausencia de fuerzas. Significa ausencia de momento neto. Un cuerpo puede tener varias fuerzas actuando y aun así no girar si las contribuciones se cancelan alrededor del eje elegido. Por eso este leaf se diferencia del momento de una fuerza: allí se mide una contribución; aquí se decide si el conjunto queda balanceado.

La magnitud [[Feq]] permite pasar de análisis a diseño. Si una carga genera [[tau1]], se puede calcular qué segunda fuerza debe aplicarse en una geometría dada para anular el giro. Esta lectura explica palancas, llaves, balanzas y soportes: no gana la fuerza mayor, sino el producto efectivo de fuerza, brazo y ángulo con el signo adecuado.

Un resultado con [[tau_net]] distinto de cero no es solo un error numérico. Describe una tendencia residual a girar. El signo indica el sentido dominante y el módulo indica cuánto falta para alcanzar la condición de equilibrio.

## Orden de magnitud

En una barra de laboratorio, brazos de décimas de metro y fuerzas de decenas de newtons producen momentos de varios N m. Si [[r1]] vale aproximadamente medio metro y [[F1]] vale unas decenas de newtons con fuerza casi perpendicular, [[tau1]] debe estar en la escala de N m, no en N ni en metros.

Una comprobación útil es comparar módulos. Si una fuerza se aplica al doble de brazo y con el mismo ángulo efectivo, necesita aproximadamente la mitad de fuerza para equilibrar. Si el ángulo se acerca a cero, el momento baja aunque la fuerza sea grande. Estos controles evitan confundir equilibrio de fuerzas con equilibrio de momentos.

## Método de resolución personalizado

1. Dibuja el eje o pivote respecto al que se suman momentos.
2. Fija el signo positivo de giro.
3. Identifica [[r1]], [[F1]], [[theta1]], [[r2]], [[F2]] y [[theta2]].
4. Calcula [[tau1]] y [[tau2]] respecto al mismo eje.
5. Construye [[tau_net]] respetando signos.
6. Si se pide equilibrio, impón [[tau_net]] = 0 y calcula [[Feq]] cuando corresponda.
7. Comprueba unidades, signos y sentido físico del resultado.

## Casos especiales y ejemplo extendido

Si una fuerza pasa por el eje, su brazo efectivo es nulo y no contribuye al momento. Si una fuerza es perpendicular al radio, su contribución es máxima para esos valores de brazo y fuerza. Si dos momentos tienen igual módulo y signos opuestos, la condición de equilibrio rotacional se cumple.

Si el sistema también debe estar en equilibrio traslacional, no basta con [[tau_net]] = 0. Hay que comprobar además la sumatoria de fuerzas. Este leaf cubre la condición rotacional; el equilibrio estático completo requiere ambas condiciones.

## Preguntas reales del alumno

¿Por qué no basta con igualar fuerzas?
Porque una fuerza aplicada más lejos del eje produce más momento que la misma fuerza aplicada cerca.

¿Puedo sumar momentos calculados desde puntos distintos?
No. Todos deben medirse respecto al mismo eje para que la suma tenga significado físico.

¿Qué significa el signo de [[tau_net]]?
Indica qué sentido de giro domina después de sumar las contribuciones.

¿Por qué aparece el seno del ángulo?
Porque solo la componente perpendicular al radio produce giro efectivo.

## Conexiones transversales y rutas de estudio

Este leaf conecta con momento de una fuerza, palancas, equilibrio estático, centro de masas y diagramas de cuerpo libre. El paso anterior es entender una contribución individual; el paso propio de este leaf es sumar contribuciones con signo para decidir equilibrio.

Después conviene estudiar problemas completos de estática, donde se combinan sumatoria de fuerzas y sumatoria de momentos. También aparece la misma lógica en diseño de estructuras, biomecánica y análisis de máquinas simples.

## Síntesis final

La condición de sumatoria de momentos afirma que el equilibrio rotacional exige momento neto nulo respecto a un mismo eje. Para aplicarla se calculan [[tau1]] y [[tau2]], se combinan con signo en [[tau_net]] y, si hace falta, se obtiene [[Feq]]. La física central no es una fuerza aislada, sino la cancelación de tendencias de giro producidas por fuerzas, brazos y ángulos.
