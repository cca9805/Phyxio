const e=`\uFEFF# Teorema trabajo-energia\r
\r
## Contexto conceptual\r
\r
El teorema trabajo-energia es la ley que conecta dos descripciones complementarias de un mismo proceso mecanico. Una descripcion parte de las interacciones y pregunta que trabajo total realizan las fuerzas relevantes sobre el sistema. La otra compara el estado inicial y el estado final del movimiento y pregunta cuanto cambia el presupuesto cinetico del cuerpo. El contenido del leaf es precisamente esa conexion: el trabajo neto [[Wnet]] y la variacion de energia cinetica [[dK]] cuentan la misma historia cuando el sistema esta bien elegido.\r
\r
El leaf tiene por eso una identidad propia. No es lo mismo que calcular el trabajo de una fuerza sobre un desplazamiento, que pertenece al leaf de trabajo. Tampoco es lo mismo que estimar la energia cinetica de un estado aislado, que pertenece al leaf de energia cinetica. Aqui lo decisivo es la ley que une balance de trabajo e interpretacion por estados. Comprender ese punto evita que el alumno vea las formulas como piezas desconectadas.\r
\r
## 🟢 Nivel esencial\r
\r
En el nivel esencial conviene imaginar un proceso que empieza con una rapidez de entrada y termina con una rapidez de salida distinta. El cuerpo puede ser un carrito empujado, un coche que frena, un bloque que desciende o una herramienta que impacta. La pregunta fisica no es solo si la rapidez aumenta o disminuye, sino que conjunto de interacciones ha provocado ese cambio del presupuesto de movimiento. El teorema trabajo-energia responde que el saldo total de esas interacciones queda registrado en el cambio de energia cinetica.\r
\r
Esta lectura es poderosa porque permite cerrar problemas sin exigir un seguimiento detallado de cada instante. A veces lo verdaderamente importante no es la forma exacta de la fuerza en el tiempo, sino el efecto global del proceso. Si el sistema termina claramente mas rapido, el balance ha aportado energia cinetica. Si termina mas lento, la ha cedido o disipado. El leaf enseña a leer esa diferencia con criterio, no como una mera intuicion verbal.\r
\r
Otra leccion esencial es que el trabajo neto nunca debe confundirse con el trabajo de la fuerza mas visible. Si un motor impulsa mientras el rozamiento frena, o si el peso aporta mientras otra fuerza se opone, lo que decide el resultado final es el balance total. Esta idea es central para evitar errores de causalidad parcial. El signo del saldo de trabajo resume el efecto neto del proceso, no la accion aislada de una sola interaccion.\r
\r
## 🔵 Nivel formal\r
\r
La primera relacion formal necesaria es la comparacion de estados por energia cinetica:\r
\r
{{f:variacion_energia_cinetica}}\r
\r
Esta expresion define [[dK]] como diferencia entre [[Kf]] y [[Ki]]. Su valor formal no es solo contable. Si [[dK]] es positiva, el sistema ha terminado con mayor presupuesto cinetico. Si es negativa, ese presupuesto ha disminuido. El signo no es un detalle algebraico menor, porque decide si el proceso debe leerse como ganancia o perdida de capacidad mecanica del movimiento.\r
\r
La ley central del leaf es el propio teorema trabajo-energia:\r
\r
{{f:teorema_trabajo_energia}}\r
\r
Aqui aparece el cierre fisico completo. El trabajo neto [[Wnet]] de todas las fuerzas relevantes es igual a la variacion de energia cinetica [[dK]]. Si el teorema esta bien aplicado, ambas magnitudes tienen la misma unidad, el mismo signo y la misma interpretacion global. El teorema no sustituye a la dinamica local, pero integra su efecto a lo largo del proceso para que la comparacion entre estados tenga fundamento causal.\r
\r
Cuando el problema ofrece directamente la masa [[m]], la rapidez inicial [[vi]] y la rapidez final [[vf]], el balance puede cerrarse con una forma operativa:\r
\r
{{f:trabajo_neto_desde_estados}}\r
\r
Esta ecuacion es especialmente util en aceleraciones, frenadas y cierres por estados donde no se dispone del detalle temporal del proceso. Su lectura es inmediata. Si [[vf]] supera a [[vi]], [[Wnet]] debe salir positiva. Si [[vf]] es menor, el saldo debe resultar negativo. La masa [[m]] modula la escala del cambio, mientras que la diferencia entre los estados decide el sentido del balance.\r
\r
Si la pregunta pide la rapidez final [[vf]] a partir de [[m]], [[vi]] y un trabajo neto [[Wnet]], la forma despejada adecuada es:\r
\r
{{f:velocidad_final_desde_trabajo_neto}}\r
\r
Esta relacion muestra por que el leaf tiene un valor metodologico real. Permite cerrar el estado final sin reconstruir toda la historia temporal de la fuerza. Aun asi, exige disciplina: la masa [[m]] debe mantenerse aproximadamente constante, el trabajo neto debe corresponder al proceso completo y el radicando debe seguir siendo fisicamente admisible. Si falla alguna de esas condiciones, la algebra puede seguir pareciendo correcta mientras la fisica deja de serlo.\r
\r
## 🔴 Nivel estructural\r
\r
El teorema trabajo-energia es muy potente, pero no universal. Presupone mecanica clasica, masa [[m]] aproximadamente constante y una descripcion donde la energia cinetica traslacional sea la magnitud adecuada para leer el proceso. Si entran en juego rotacion dominante, deformaciones intensas, cambios internos importantes o un regimen relativista, el leaf ya no basta por si solo y el modelo debe ampliarse.\r
\r
Tambien presupone un sistema fijo y coherente desde el inicio hasta el final. Si el alumno calcula el estado inicial para un cuerpo y el balance de trabajo para otro, la ley deja de cerrar fisicamente aunque la aritmetica parezca ordenada. Ese limite estructural importa porque muchos errores serios del leaf no nacen en el despeje, sino en una definicion inestable del sistema.\r
\r
El leaf tambien tiene un limite metodologico. El teorema dice cuanto cambia el presupuesto cinetico, pero no siempre explica como cambia en cada instante. Dos procesos con historias temporales muy diferentes pueden producir el mismo [[Wnet]] y la misma [[dK]]. Por eso esta herramienta es excelente para balances globales entre estados, pero no reemplaza automaticamente a una descripcion temporal detallada cuando el problema la exige.\r
\r
## Interpretacion fisica profunda\r
\r
La interpretacion profunda del leaf consiste en ver el movimiento como un presupuesto y las interacciones como un mecanismo que reescribe ese presupuesto. [[Ki]] representa el contenido cinetico de partida. [[Kf]] representa el contenido cinetico de llegada. [[dK]] resume la diferencia entre ambos estados. [[Wnet]] explica causalmente por que esa diferencia existe. Cuando las cuatro piezas se usan juntas, el problema deja de ser una sustitucion mecánica y se convierte en una lectura fisica coherente.\r
\r
Esta lectura es especialmente util cuando varias contribuciones compiten. Una fuerza puede aportar trabajo mientras otra lo resta; un tramo del proceso puede acelerar y otro frenar; una parte del cambio puede interpretarse como transferencia mecanica y otra como disipacion. El teorema no elimina esa complejidad, pero la comprime en un balance global interpretable. La clave es no olvidar que [[Wnet]] siempre representa saldo total, no una contribucion parcial elegida por comodidad.\r
\r
El leaf ofrece ademas una herramienta de control conceptual. Si un problema termina con [[vf]] menor que [[vi]] y, sin embargo, arroja [[Wnet]] positiva, algo esta mal. O los signos se han tratado mal, o se omitio una interaccion importante, o el sistema no se definio de manera consistente. El teorema sirve, por tanto, para calcular y para detectar incoherencias físicas.\r
\r
## Orden de magnitud\r
\r
Un carrito de laboratorio de pocos kilogramos suele mover balances de trabajo en decenas de julios. Una bicicleta o una motocicleta en frenada fuerte puede cambiar su presupuesto cinetico en centenares o miles de julios. Un vehiculo urbano al modificar apreciablemente su rapidez entra con facilidad en decenas o centenas de kilojulios.\r
\r
El orden de magnitud sirve ademas como prueba de coherencia. Si un problema escolar con un carrito arroja megajulios, hay un error serio en [[m]], en [[vi]], en [[vf]] o en las unidades. Si una frenada de coche produce solo unos pocos julios, la solucion no esta describiendo el fenomeno real aunque la algebra parezca limpia. El numero final tiene que dialogar con la escala del mundo fisico.\r
\r
## Metodo de resolucion personalizado\r
\r
1. Define con precision el sistema y el conjunto de interacciones que entran en [[Wnet]].\r
2. Fija el estado inicial mediante [[vi]] o [[Ki]], y el final mediante [[vf]] o [[Kf]].\r
3. Decide si conviene cerrar el problema por [[dK]] o por una forma operativa en terminos de [[m]], [[vi]] y [[vf]].\r
4. Escribe primero la relacion simbolica adecuada antes de introducir datos numericos.\r
5. Comprueba unidad, signo y orden de magnitud.\r
6. Cierra siempre con una frase causal que explique por que [[Wnet]] y [[dK]] coinciden.\r
\r
## Casos especiales y ejemplo extendido\r
\r
El leaf se aclara mucho en cuatro familias de casos. En una aceleracion horizontal impulsada por un motor, [[Wnet]] es positiva y el sistema sale con [[Kf]] mayor que [[Ki]]. En una frenada, [[Wnet]] es negativa y el presupuesto cinetico disminuye. En un descenso sin disipacion dominante, el trabajo del peso puede aumentar la energia cinetica. En procesos donde varias fuerzas compiten, el valor final depende del saldo total y no de la interaccion mas intensa por separado.\r
\r
Considera un ejemplo extendido. Un bloque entra a una zona rugosa con una rapidez inicial [[vi]] moderada y sale con una rapidez final [[vf]] menor. Si se comparan estados, el alumno puede identificar [[Ki]], identificar [[Kf]], obtener [[dK]] y leer [[Wnet]] negativa como la firma energetica del rozamiento. Si la misma perdida de rapidez sucediera en una subida sin disipacion apreciable, la historia fisica seria distinta aunque la estructura del balance se mantuviera. Ese contraste muestra que la misma ley puede cerrar procesos diferentes sin dejar de distinguir sus causas.\r
\r
## Preguntas reales del alumno\r
\r
- **Por que [[Wnet]] y [[dK]] tienen que coincidir?**  \r
  Porque describen el mismo proceso desde dos puntos de vista complementarios: uno causal y otro de estados.\r
\r
- **Cuando conviene usar [[Ki]] y [[Kf]] y cuando [[vi]] y [[vf]]?**  \r
  Usa [[Ki]] y [[Kf]] cuando quieras leer explicitamente el presupuesto energetico de cada estado. Usa [[vi]] y [[vf]] cuando el enunciado ofrece velocidades y conviene un cierre operativo directo.\r
\r
- **Que significa que [[Wnet]] sea negativa?**  \r
  Significa que el entorno ha extraido energia cinetica neta del sistema durante el proceso.\r
\r
- **Puede [[dK]] ser nula aunque actuen fuerzas?**  \r
  Si. Puede haber trabajos opuestos cuyo saldo total sea cero en el intervalo considerado.\r
\r
- **Cual es el error mas comun en este leaf?**  \r
  Confundir [[Wnet]] con el trabajo de una sola fuerza y olvidar que el teorema exige balance global.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con trabajo mecanico, trabajo de fuerza variable, energia cinetica, energia potencial, conservacion de la energia y fuerzas no conservativas. Tambien conecta con la dinamica de Newton: la fuerza neta explica la aceleracion local, mientras el teorema trabajo-energia resume el efecto integrado del proceso. Saber alternar entre ambas miradas sin contradiccion es una competencia mecanica real.\r
\r
Una ruta natural de continuidad es estudiar procesos donde [[Wnet]] incluye simultaneamente aportes y perdidas, como rozamiento y disipacion. Otra ruta es conectar el teorema con energia potencial y conservacion de la energia para comprender cuando el cambio cinetico se debe a transferencia mecanica entre formas y cuando se debe a disipacion. En frenadas, descensos, impactos y aceleraciones, este leaf funciona como puente entre esas familias.\r
\r
## Sintesis final\r
\r
Dominar el teorema trabajo-energia significa leer un proceso mecanico como una comparacion causal entre estados. [[Ki]] y [[Kf]] describen el antes y el despues. [[dK]] mide el cambio. [[Wnet]] explica la causa global de ese cambio. Juntas, estas magnitudes permiten resolver y comprender procesos donde seguir toda la trayectoria seria innecesario o menos claro.\r
\r
La competencia final no es memorizar una igualdad, sino decidir que sistema se estudia, que trabajos entran en el balance y que historia fisica cuentan el signo y la escala del resultado. Cuando ese criterio aparece, el alumno deja de ver formulas aisladas y empieza a pensar mecanicamente.\r
`;export{e as default};
