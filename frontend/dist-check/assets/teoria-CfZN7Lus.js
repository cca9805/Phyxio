const e=`# Pendulo\r
\r
## Contexto conceptual\r
\r
El pendulo simple es uno de los sistemas mas utiles para aprender mecanica analitica porque conecta geometria, dinamica y tiempo de oscilacion en un solo problema. Una masa [[m]] suspendida de un hilo de longitud [[L]] se separa un angulo [[theta]] y evoluciona bajo gravedad [[g]]. Ese movimiento genera un torque [[tau]] que empuja al sistema de regreso hacia la vertical estable.\r
\r
En este leaf, el foco no es memorizar tres expresiones, sino entender una cadena causal: [[L]] y [[g]] fijan el ritmo natural [[omega]], ese ritmo determina el periodo [[Tper]], y el estado angular [[theta]] define el signo y magnitud instantanea de [[tau]]. Esta separacion evita mezclar magnitudes de sistema con magnitudes de estado.\r
\r
## 🟢 Nivel esencial\r
\r
La idea esencial del pendulo es que la gravedad no actua como empuje constante sobre el movimiento angular. Lo que manda es el componente tangencial del peso respecto al arco. Cuando el sistema se separa de la vertical, aparece una accion restauradora que apunta de regreso al equilibrio. Cuando cruza la vertical, esa accion invierte su sentido y mantiene el patron de retorno.\r
\r
La lectura temporal basica se entiende sin algebra pesada. Si [[L]] aumenta, el recorrido efectivo del arco se vuelve mas lento y el ciclo tarda mas. Si [[g]] aumenta, la recuperacion hacia la vertical es mas intensa y el ciclo tarda menos. Esta intuicion ya permite anticipar tendencias correctas antes de calcular.\r
\r
Tambien conviene separar dos preguntas distintas. Una pregunta es global: cuanto tarda un ciclo completo. La otra es local: que tan fuerte y hacia donde corrige el sistema en un instante concreto. Mezclar ambas preguntas genera errores frecuentes porque se confunde lectura de reloj con lectura de accion instantanea.\r
\r
El nivel esencial fija un limite practico: la aproximacion temporal simple funciona bien para oscilaciones moderadas alrededor del equilibrio. Si la amplitud inicial crece demasiado, el movimiento sigue siendo fisico, pero la prediccion temporal simple pierde precision. En esa zona se necesita una descripcion mas detallada del regimen angular.\r
\r
## 🔵 Nivel formal\r
\r
La frecuencia angular natural en aproximacion de pequenas oscilaciones se calcula con:\r
\r
{{f:omega}}\r
\r
El periodo correspondiente se obtiene con:\r
\r
{{f:Tper}}\r
\r
El torque gravitatorio instantaneo respecto al pivote se expresa como:\r
\r
{{f:tau}}\r
\r
Estas tres relaciones forman un bloque coherente si se usan con orden. Primero se leen parametros de entorno y geometria con [[g]] y [[L]]. Despues se traduce esa escala fisica en ritmo usando [[omega]] y [[Tper]]. Finalmente se usa [[tau]] para describir la respuesta instantanea en funcion de [[theta]].\r
\r
Formalmente, el signo de [[tau]] es central. Si [[theta]] es positivo respecto al convenio elegido, [[tau]] debe salir con signo opuesto para devolver el sistema al equilibrio. Si aparece el mismo signo en ambas magnitudes, hay incoherencia de convencion o error algebraico. Esta comprobacion es mas robusta que revisar solo el valor absoluto.\r
\r
Otra lectura formal importante es la sensibilidad paramatrica. Cambios relativos en [[L]] producen cambios no lineales en [[omega]] y [[Tper]], porque intervienen raices. Eso significa que duplicar [[L]] no duplica [[Tper]]. Del mismo modo, pasar de una gravedad terrestre a una gravedad menor altera el ritmo de manera predecible pero no lineal. El uso correcto de estas tendencias evita errores de extrapolacion en diseno experimental.\r
\r
En problemas de laboratorio, la ruta formal mas estable es: validar unidades, calcular [[omega]], convertir a [[Tper]], y usar [[tau]] solo cuando se pregunta por estado instantaneo o direccion del retorno. Mezclar etapas lleva a conclusiones incompletas, por ejemplo diagnosticar mal el signo dinamico o confundir periodo de ciclo con respuesta local de torque.\r
\r
## 🔴 Nivel estructural\r
\r
Estructuralmente, el pendulo muestra como una geometria curva produce una ecuacion dinamica angular con no linealidad trigonometrica. El modelo lineal de pequenas oscilaciones no reemplaza la fisica completa, sino que captura el comportamiento dominante cerca de equilibrio. Esta idea es una herramienta general de mecanica analitica: aproximar localmente un sistema complejo alrededor de un estado estable.\r
\r
El modelo estructural deja de bastar cuando aparecen angulos grandes, amortiguamiento relevante, rozamiento en el pivote, elasticidad del hilo, o excitaciones externas periodicas. En esos escenarios, [[Tper]] deja de comportarse como en la aproximacion simple y puede depender de amplitud o de la frecuencia de forzamiento. Tambien puede aparecer perdida de energia por ciclo, algo ausente en el caso ideal.\r
\r
La estructura conceptual del leaf separa tres niveles de descripcion. Nivel de parametros: [[L]] y [[g]]. Nivel temporal: [[omega]] y [[Tper]]. Nivel dinamico instantaneo: [[theta]] y [[tau]]. Esta separacion ayuda a decidir que ecuacion aplicar segun la pregunta. Si la pregunta es sobre cronometraje, conviene ir por ritmo. Si la pregunta es sobre direccion de giro o intensidad de retorno en una posicion concreta, conviene ir por torque.\r
\r
La perspectiva estructural tambien conecta con estabilidad. El equilibrio inferior del pendulo es estable: pequenas perturbaciones generan retorno. El equilibrio superior, en cambio, es inestable y requiere control externo para mantenerse. Entender esa diferencia evita aplicar formulas de pequenas oscilaciones en configuraciones que no comparten el mismo tipo de equilibrio.\r
\r
## Interpretación física profunda\r
\r
El pendulo no solo oscila: traduce un campo gravitatorio en un reloj mecanico. Esa traduccion es fisicamente valiosa porque permite inferir gravedad local desde mediciones temporales y, en sentido inverso, usar gravedad conocida para calibrar longitudes efectivas. Históricamente, esta capacidad hizo del pendulo una herramienta de metrologia y sincronizacion.\r
\r
La interpretacion profunda exige leer causa y efecto en cada magnitud. [[L]] no es solo una distancia; es una escala de curvatura de trayectoria. [[g]] no es solo un numero de entorno; es la intensidad del mecanismo restaurador. [[theta]] no es solo una posicion; determina hacia donde corrige el sistema. [[tau]] no es solo un resultado algebraico; es la accion fisica que reorienta el movimiento.\r
\r
En lenguaje de mecanica analitica, el pendulo ilustra como una coordenada generalizada angular organiza el problema con claridad. La energia potencial cambia con altura y la energia cinetica con velocidad angular. Cerca del minimo, la dinamica se comporta como un oscilador lineal equivalente. Lejos del minimo, la no linealidad reaparece y modifica el reloj efectivo.\r
\r
## Orden de magnitud\r
\r
Para longitudes de laboratorio entre decimetros y algunos metros, [[Tper]] suele caer entre fracciones de segundo y varios segundos. En microgravedad o gravedad reducida, el mismo pendulo se vuelve notablemente mas lento. En gravedad alta, el ritmo aumenta. Estas escalas permiten detectar resultados no fisicos antes de profundizar calculos.\r
\r
El torque [[tau]] puede variar mucho con [[m]], [[L]] y [[theta]]. Angulos pequenos generan torques moderados, mientras angulos mayores amplifican la accion restauradora hasta limites donde la aproximacion lineal ya no describe bien el tiempo de ciclo. Esta diferencia entre lectura temporal y lectura de torque es clave para no sobrediagnosticar con una sola ecuacion.\r
\r
## Método de resolución personalizado\r
\r
Primero decide que pide el problema: ritmo de oscilacion, tiempo de ciclo o dinamica instantanea. Si pide ritmo, usa [[g]] y [[L]] para obtener [[omega]] y [[Tper]]. Si pide estado dinamico en una posicion, usa [[theta]] para evaluar [[tau]] y revisar su signo restaurador.\r
\r
Despues valida condiciones de modelo: hilo inextensible, oscilaciones pequenas si se usa la parte lineal temporal, y perdidas no dominantes. Revisa unidades antes de sustituir. Si [[L]] entra en centimetros o [[g]] no esta en SI, corrige conversiones antes de interpretar. Cierra siempre con lectura causal: que parametro del sistema explica el resultado y que limite de validez lo restringe.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Si [[theta]] es cercano a cero, [[tau]] tambien se acerca a cero y el sistema queda cerca de equilibrio. Si [[L]] crece mucho, [[Tper]] aumenta y el movimiento se vuelve lento aunque [[m]] sea la misma. Si [[g]] disminuye, el pendulo necesita mas tiempo por ciclo. Estos casos no son curiosidades: son pruebas de consistencia para verificar tendencias del modelo.\r
\r
En un ejemplo extendido de diseno didactico, dos pendulos con la misma [[L]] en planetas distintos tienen periodos distintos por cambio de [[g]]. Dos pendulos con la misma [[g]] pero distinta [[L]] tambien cambian periodo. Sin embargo, si solo cambia [[m]], la lectura temporal ideal no se desplaza. Esa comparacion es una forma directa de separar parametros relevantes y no relevantes para el reloj del sistema.\r
\r
## Preguntas reales del alumno\r
\r
Una pregunta frecuente es por que [[m]] no aparece en la lectura temporal ideal. La respuesta corta es que su efecto dinamico queda compensado por el termino inercial en la formulacion angular. Otra pregunta comun es por que el periodo medido a veces no coincide con el estimado en pequenas oscilaciones. La causa suele ser amplitud grande, rozamiento, o incertidumbre en la longitud efectiva.\r
\r
Tambien se pregunta si [[tau]] sirve para calcular periodo directamente. No de forma directa en el marco simple. [[tau]] da accion instantanea; el periodo se obtiene de la estructura temporal global. Combinar ambas lecturas es util: una para direccion y magnitud local del retorno, la otra para ritmo global del ciclo.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con ecuaciones de Lagrange porque el pendulo es un caso clasico de coordenada angular con energia potencial gravitatoria. Conecta con oscilador armonico porque cerca de equilibrio comparte reloj lineal equivalente. Conecta con problemas con ligaduras porque la longitud fija actua como restriccion geometrica del movimiento.\r
\r
La ruta recomendada es: interpretar primero causa restauradora, luego dominar lectura temporal, despues analizar torque y signo, y finalmente estudiar cuando falla la aproximacion de pequenas oscilaciones. Esa progresion prepara al estudiante para pasar de ejercicios ideales a modelos con disipacion y forzamiento.\r
\r
## Síntesis final\r
\r
El pendulo enseña a leer fisica desde una coordenada angular: [[L]] y [[g]] construyen el reloj, [[theta]] y [[tau]] describen el retorno instantaneo, y [[Tper]] traduce el ritmo a tiempo observable. Al cerrar este leaf, debes poder calcular con consistencia, interpretar con causalidad y delimitar cuando el modelo ideal deja de ser suficiente para describir un sistema real.`;export{e as default};
