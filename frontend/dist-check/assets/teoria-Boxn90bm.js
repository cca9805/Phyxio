const e=`# Trabajo y torque\r
\r
## Contexto conceptual\r
\r
Trabajo y torque conectan dinámica rotacional con energía. El torque [[tau]] mide la tendencia de una fuerza a producir giro alrededor de un eje, pero solo transfiere energía mecánica si existe desplazamiento angular [[theta]]. Por eso el trabajo rotacional [[W]] no se lee solo desde el valor del torque: depende también del giro recorrido y del signo relativo entre torque y movimiento.\r
\r
La potencia angular [[P]] añade una lectura temporal. No dice cuánta energía se transfirió en total, sino a qué ritmo se está transfiriendo en un instante. Cuando un motor entrega torque a un eje que gira con [[omega]], la potencia es la tasa de trabajo sobre ese eje. Esta distinción es central en motores, frenos, turbinas y transmisiones.\r
\r
## 🟢 Nivel esencial\r
\r
En el nivel esencial, piensa en una puerta: empujar con torque ayuda a abrirla solo si la puerta gira. Un torque aplicado a un eje bloqueado puede ser grande, pero el trabajo instantáneo es nulo si no hay desplazamiento angular. El signo también importa: un torque que acompaña el giro entrega energía; uno que se opone extrae energía o frena.\r
\r
La unidad crea una trampa. El torque se mide en newton metro y el trabajo en joules, que son dimensionalmente equivalentes, pero no significan lo mismo. El torque es una acción con eje y sentido; el trabajo es energía transferida a lo largo de un giro.\r
\r
Una forma segura de pensarlo es preguntar siempre qué se movió. Si hubo torque pero no hubo giro, hubo esfuerzo mecánico, no trabajo rotacional acumulado. Si hubo giro pero el torque fue perpendicular al sentido relevante, el trabajo puede ser menor de lo esperado. Esta lectura evita confundir una sensación de fuerza con una transferencia de energía.\r
\r
En lenguaje cotidiano, "hacer mucha fuerza" sobre una manivela no garantiza haber entregado mucha energía. Lo que cuenta es la combinación entre acción rotacional, recorrido angular y sentido del movimiento. Por eso el nivel esencial debe separar desde el principio esfuerzo, giro y transferencia.\r
\r
## 🔵 Nivel formal\r
\r
Para torque constante durante el desplazamiento angular:\r
\r
{{f:trabajo_torque_constante}}\r
\r
Para torque que cambia con el ángulo:\r
\r
{{f:trabajo_torque_variable}}\r
\r
Para la tasa instantánea de transferencia de energía:\r
\r
{{f:potencia_angular}}\r
\r
La relación de trabajo con torque constante se usa cuando [[tau]] no cambia durante el desplazamiento: [[W]] se obtiene multiplicando torque por [[theta]]. Si el torque cambia con el ángulo, la relación de trabajo con torque variable indica que [[W]] es el área algebraica bajo la curva torque frente a ángulo. Para la tasa instantánea, la relación de potencia angular conecta [[P]], [[tau]] y [[omega]].\r
\r
Estas relaciones son paralelas a las de traslación. Fuerza por desplazamiento se convierte en torque por desplazamiento angular; fuerza por velocidad se convierte en torque por velocidad angular. La analogía ayuda, pero no sustituye al eje de referencia ni al convenio de signo.\r
\r
Formalmente, el radian actúa como unidad adimensional, por eso el producto de [[tau]] por [[theta]] queda en joules. Sin embargo, el cálculo solo representa trabajo si [[theta]] se expresa como desplazamiento angular recorrido. Para potencia, [[omega]] no es un ángulo acumulado sino rapidez angular instantánea, de modo que la relación de potencia angular no reemplaza al trabajo total sin información temporal adicional.\r
\r
Cuando el torque se da como función, tabla o gráfica, el formalismo cambia de multiplicación a área. Esa transición no es un lujo matemático: es la forma de conservar el significado físico de [[W]] cuando la acción rotacional no permanece constante durante el giro.\r
\r
## 🔴 Nivel estructural\r
\r
Estructuralmente, hay que decidir si el problema pide energía acumulada o ritmo de transferencia. Si pide cuánto trabajo hizo un motor durante varias vueltas, se calcula [[W]]. Si pide potencia de salida en un instante, se calcula [[P]]. Si el torque no es constante, la variable relevante es la curva de [[tau]] con [[theta]], no un único valor promedio elegido sin justificar.\r
\r
El modelo también exige definir sistema. Un torque externo sobre un rotor puede aumentar energía cinética rotacional, calentar un freno o cargar una batería si hay generador. El mismo [[tau]] puede producir lecturas distintas según el sistema elegido y las pérdidas declaradas.\r
\r
La lectura estructural compara tres capas. La primera es geométrica: [[theta]] debe ser el giro real del eje y no una orientación inicial escrita en grados. La segunda es dinámica: [[tau]] debe ser la componente efectiva sobre ese eje, no cualquier torque del sistema. La tercera es energética: [[W]] debe aparecer en un balance donde se indique si aumenta energía cinética rotacional, se almacena elásticamente o se disipa. Si una de estas capas falta, el número puede tener unidades correctas y aun así no describir el proceso.\r
\r
También hay una diferencia importante entre valor instantáneo y proceso acumulado. [[P]] se evalúa en un estado, con [[tau]] y [[omega]] simultáneos. [[W]] se acumula durante un recorrido angular. Por eso un gráfico de potencia contra tiempo y un gráfico de torque contra ángulo responden preguntas distintas. El primero sirve para saber carga instantánea, demanda de motor o calentamiento por segundo. El segundo sirve para saber energía neta transferida durante el giro completo.\r
\r
## Interpretación física profunda\r
\r
[[W]] es transferencia de energía por giro. No es una propiedad almacenada del torque ni una fuerza escondida; es el resultado de una acción rotacional acumulada a lo largo de un desplazamiento angular. Si la curva torque-ángulo tiene zonas positivas y negativas, las áreas pueden compensarse.\r
\r
[[P]] permite leer exigencia de máquina. Un torque moderado a alta [[omega]] puede implicar potencia grande. Un torque grande a velocidad angular casi nula puede implicar potencia pequeña, aunque mecánicamente el eje esté sometido a gran esfuerzo.\r
\r
## Orden de magnitud\r
\r
Un torque de 10 N m aplicado durante 1 rad transfiere 10 J. Si el mismo torque actúa durante diez vueltas, el desplazamiento angular es del orden de 60 rad y el trabajo sube a cientos de joules. En maquinaria, [[tau]] de cientos de newton metro y [[omega]] de decenas de radianes por segundo producen kilowatts de potencia.\r
\r
## Método de resolución personalizado\r
\r
Primero declara eje y signo positivo. Segundo identifica si [[tau]] es constante o variable. Tercero aplica la relación de trabajo para torque constante o variable según corresponda. Cuarto, si se pide ritmo, aplica la relación de potencia angular. Quinto compara [[W]] con el cambio de energía rotacional y separa pérdidas si el balance no cierra.\r
\r
Un procedimiento robusto añade una comprobación de consistencia. Si el resultado de [[W]] es positivo pero el sistema se está frenando, hay un problema de signo o de sistema elegido. Si [[P]] sale grande aunque [[omega]] sea casi nula, probablemente se ha mezclado velocidad lineal con angular. Si dos métodos dan energías distintas, revisa si uno calcula área bajo torque y otro solo usa el valor final de [[tau]]. Esta revisión evita que el cálculo quede reducido a sustituir datos.\r
\r
## Casos especiales y ejemplo extendido\r
\r
En un freno, [[tau]] suele tener signo opuesto a [[omega]], por lo que [[P]] es negativa para el rotor. En un motor, el signo positivo indica entrega de energía. En un resorte torsional, [[tau]] puede depender de [[theta]], así que el trabajo es área y no simple producto final.\r
\r
## Preguntas reales del alumno\r
\r
¿Por qué torque y trabajo comparten unidad? Porque el radián es adimensional, pero la interpretación física es distinta. ¿Puedo usar siempre torque por ángulo? Solo si el torque es constante o si usas un valor medio justificado. ¿La potencia es trabajo? No; potencia es trabajo por unidad de tiempo.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Esta hoja conecta definición de torque, energía cinética rotacional, potencia, frenado, motores y conservación de la energía. Conviene estudiar antes torque y momento de inercia, después trabajo y torque, y luego balances con energía rotacional y pérdidas.\r
\r
La conexión con conservación de la energía es especialmente útil: el trabajo externo neto debe explicar el cambio de energía mecánica más las pérdidas. La conexión con dinámica rotacional también importa, porque un torque neto puede cambiar [[omega]] mediante aceleración angular y, al mismo tiempo, hacer trabajo si hay desplazamiento. En problemas más ricos conviene no separar artificialmente esas dos lecturas: la dinámica dice cómo evoluciona el giro y la energía dice cuánto se transfiere durante esa evolución.\r
\r
## Síntesis final\r
\r
Trabajo y torque explican cómo una acción rotacional transfiere energía. [[W]] mide la transferencia acumulada, [[P]] mide su ritmo, [[tau]] aporta la acción y [[theta]] o [[omega]] indican cómo evoluciona el giro. La clave es distinguir producto simple, área bajo curva y potencia instantánea.`;export{e as default};
