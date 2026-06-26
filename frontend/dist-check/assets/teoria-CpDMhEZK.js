const e=`## Contexto conceptual\r
\r
El pendulo fisico aparece cuando un cuerpo rigido oscila alrededor de un eje fijo que no coincide, en general, con su centro de masas. La pregunta central del leaf es directa: como cambian el tiempo de oscilacion y la rapidez angular natural cuando se modifica la geometria del cuerpo y su distribucion de masa. En este marco, las magnitudes que articulan el problema son [[I]], [[m]], [[d]] y [[g]]. La respuesta observable suele medirse en [[T]], [[f]] y [[omega0]].\r
\r
La diferencia con el pendulo simple no es cosmetica. En el pendulo simple se idealiza toda la masa en un punto a distancia fija del eje. En el pendulo fisico, la inercia rotacional completa entra por [[I]], por lo que la misma [[m]] puede producir periodos distintos si cambia la forma del objeto o la posicion del eje. Esta distincion tiene impacto experimental: dos barras con igual masa y longitud pueden oscilar con distintos [[T]] si su eje de apoyo cambia.\r
\r
Desde el punto de vista dinamico, la variable de estado mas util es [[theta]], y su evolucion temporal queda gobernada por el balance entre torque gravitatorio y respuesta inercial. La aceleracion angular [[theta_dd]] sintetiza ese balance instantaneo y permite leer cuando el sistema acelera hacia el equilibrio o se frena antes de invertir sentido.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial conviene fijar una sola imagen mental: el sistema oscila porque existe una competencia entre restauracion gravitatoria e inercia rotacional. Esta idea permite anticipar el comportamiento sin entrar todavia en ecuaciones ni en listas largas de variables. El objetivo es reconocer causa y efecto antes de calcular.\r
\r
Cuando el cuerpo se aleja del equilibrio, aparece una tendencia a regresar. Cuando el cuerpo intenta regresar muy rapido, la inercia se opone a ese cambio brusco. El movimiento observado es el resultado de ese balance. Por eso, en esta etapa, importa mas describir tendencias que memorizar expresiones.\r
\r
La lectura minima para resolver con sentido es declarar sistema, eje real y condicion de validez. Si estas tres decisiones estan bien, el paso matematico posterior suele ser estable. Si faltan, incluso un numero aparentemente correcto puede ser fisicamente fragil. Este enfoque evita sustitucion mecanica y prepara una progresion limpia hacia el nivel formal.\r
\r
Tambien es clave distinguir pregunta de procedimiento. Primero se formula que se quiere explicar del comportamiento temporal; despues se elige herramienta matematica adecuada. Esta secuencia reduce errores tipicos de examen y mejora la interpretacion en laboratorio.\r
\r
## 🔵 Nivel formal\r
\r
El nivel formal organiza las ecuaciones del leaf y su uso operativo. La expresion base para la pulsacion natural en pequena amplitud es:\r
\r
{{f:omega0_pf}}\r
\r
Con esa expresion, el periodo lineal se obtiene como:\r
\r
{{f:periodo_pf}}\r
\r
Y la frecuencia en ciclos por segundo se conecta por:\r
\r
{{f:frecuencia_pf}}\r
\r
Cuando la amplitud ya no es pequena, la ecuacion dinamica completa que describe la evolucion de [[theta]] es:\r
\r
{{f:ecuacion_no_lineal_pf}}\r
\r
Formalmente, esta ultima relacion no se trata como despeje algebraico directo para una calculadora elemental, sino como una ecuacion diferencial no lineal cuya solucion requiere metodos numericos o aproximaciones especificas. Esa distincion entre formula calculable y estructura dinamica evita errores de metodo.\r
\r
En problemas de hoja de examen, el flujo formal recomendado es: definir datos en SI para [[I]], [[m]], [[g]] y [[d]]; calcular [[omega0]] o [[T]]; convertir a [[f]] si se solicita; y cerrar con una lectura fisica. En problemas de laboratorio, se agrega comparacion entre valor medido y valor predicho para detectar si la hipotesis de angulo pequeno sigue siendo valida.\r
\r
Un control formal adicional consiste en verificar consistencia interna entre resultados. Si calculas [[omega0]], puedes reconstruir [[T]] y despues [[f]]; las tres magnitudes deben contar la misma historia temporal. Cuando esa coherencia falla, suele haber error de eje, de unidades o de conversion entre tasas angulares y ciclos por segundo.\r
\r
Tambien conviene explicitar margen de redondeo y trazabilidad de datos. En contextos de ingenieria, no basta con reportar un valor final; se exige justificar cada paso para que otro equipo pueda reproducir el calculo con el mismo criterio.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural exige explicitar hipotesis y limites. La derivacion lineal de [[omega0]] y [[T]] presupone oscilaciones pequenas, eje fijo, cuerpo rigido y disipacion secundaria en el intervalo analizado. Si una de estas hipotesis falla, los resultados pueden seguir siendo numericamente cercanos en algunos casos, pero dejan de tener garantia fisica general.\r
\r
El criterio cuantitativo de aplicabilidad mas util es mantener amplitudes iniciales moderadas, por ejemplo debajo de alrededor de 0.35 rad en practicas educativas, y verificar que el periodo no cambie de forma sistematica con la amplitud. Si el periodo medido crece al aumentar la amplitud inicial, la linealizacion ya no representa bien el sistema y hay que mirar la ecuacion no lineal para [[theta]] y [[theta_dd]].\r
\r
Otro criterio estructural es la definicion de [[I]]. Debe estar referido al eje real de giro. Un [[I]] calculado para un eje distinto introduce sesgo en [[T]] aunque el resto de datos sea impecable. Por eso, en diseno experimental, la incertidumbre geometrica de [[d]] y la identificacion del eje suelen dominar el error final.\r
\r
## Interpretación física profunda\r
\r
La interpretacion profunda conecta ecuacion y mecanismo. En el equilibrio estable, [[theta]] es cercano a cero. Si desplazas el cuerpo, aparece un torque gravitatorio que intenta reducir [[theta]], por lo que [[theta_dd]] suele tener signo opuesto al desplazamiento en el regimen lineal. Esa oposicion de signos explica la oscilacion alrededor del equilibrio y no un retorno monotono.\r
\r
El papel de [[m]] merece matiz: no actua de forma aislada. En el cociente que fija [[omega0]], [[m]] multiplica a [[g]] y [[d]], pero [[I]] tambien depende de la distribucion de masa. Por eso afirmar que mas masa siempre implica menor [[T]] puede ser falso si el aumento de masa va acompanado de mayor inercia rotacional.\r
\r
Interpretar bien [[f]] y [[omega0]] tambien importa. [[f]] mide ciclos por segundo, mientras [[omega0]] mide rapidez angular en rad/s. Se relacionan, pero no son la misma magnitud. Mezclarlas sin conversion introduce discrepancias en comparaciones con excitaciones externas o con sistemas de control.\r
\r
## Orden de magnitud\r
\r
El orden de magnitud evita resultados absurdos antes de cerrar un ejercicio. En montajes docentes, valores tipicos de [[I]] pueden ir de 0.01 a 1 kg*m^2, [[d]] entre 0.02 y 0.5 m, y [[m]] entre 0.1 y 5 kg. Con [[g]] terrestre, estos rangos suelen producir [[T]] de fracciones de segundo a varios segundos. Si obtienes milisegundos para una barra grande o decenas de minutos para un prototipo pequeno, probablemente hay un error de unidades o de eje.\r
\r
Tambien conviene revisar sensibilidad. Como [[T]] depende de raiz cuadrada, duplicar [[I]] no duplica [[T]]; solo lo multiplica por aproximadamente 1.41. Este tipo de control rapido ayuda a detectar expectativas equivocadas cuando un cambio geometrico parece demasiado dramatico en el resultado numerico.\r
\r
En informes, una buena practica es reportar [[T]], [[f]] y [[omega0]] juntos para que el lector vea consistencia interna entre tiempos y tasas. Si no cierran entre si, el problema no es de redaccion sino de calculo o conversion.\r
\r
## Método de resolución personalizado\r
\r
Metodo recomendado para el leaf:\r
\r
1. Delimita el sistema fisico: cuerpo, eje de giro y sentido positivo de [[theta]].\r
2. Enumera datos en SI: [[I]], [[m]], [[d]], [[g]].\r
3. Declara hipotesis: oscilacion pequena o amplitud general.\r
4. Elige ecuacion principal segun objetivo: [[omega0]], [[T]] o [[f]].\r
5. Ejecuta algebra y unidades sin redondeo temprano.\r
6. Interpreta tendencia fisica: como influyen [[I]] y [[d]] en el resultado.\r
7. Cierra con control de orden de magnitud y coherencia interna.\r
\r
Si el problema incluye serie temporal de angulo, observa picos consecutivos de [[theta]] para estimar [[T]] experimental y compara con el valor teorico. Si la diferencia supera el margen esperado por incertidumbre, revisa amplitud inicial, friccion de soporte y definicion de [[I]].\r
\r
Este metodo no es rigido; se adapta. En analisis inverso puedes partir de [[T]] medido para inferir [[I]] o [[d]], siempre que justifiques hipotesis y calidad de datos.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: [[d]] muy pequena. Cuando el centro de masas queda casi sobre el eje, el torque gravitatorio efectivo cae, [[omega0]] disminuye y [[T]] crece de forma marcada. El sistema puede volverse muy sensible a perturbaciones y a friccion, por lo que la medicion de periodo pierde robustez.\r
\r
Caso especial 2: [[I]] grande por masa alejada del eje. Aunque [[m]] aumente, el efecto dominante puede ser la inercia adicional, resultando en oscilaciones mas lentas. Este escenario aparece en cuerpos con contrapesos distantes.\r
\r
Caso extendido: una barra perforada con eje ajustable. Mides [[T]] para tres posiciones del eje y observas que al acercar el eje al centro de masas, [[T]] aumenta. Luego calculas [[omega0]] y [[f]] para cada configuracion y verificas que el comportamiento coincide con la variacion de [[d]]. Si ademas comparas amplitudes iniciales pequenas y grandes, detectas cuando emerge la no linealidad de la ecuacion completa para [[theta_dd]].\r
\r
## Preguntas reales del alumno\r
\r
Pregunta 1: por que dos objetos con la misma [[m]] oscilan distinto.\r
Respuesta: porque [[I]] depende de como esta distribuida la masa respecto al eje, no solo del total de masa.\r
\r
Pregunta 2: cuando debo usar el modelo no lineal.\r
Respuesta: cuando la amplitud angular deja de ser pequena y observas que [[T]] cambia con la amplitud o que la forma temporal de [[theta]] deja de ser casi sinusoidal.\r
\r
Pregunta 3: si mido [[T]] puedo hallar [[d]].\r
Respuesta: si conoces [[I]], [[m]] y [[g]], si, mediante la relacion de periodo y cuidando incertidumbres geometricas.\r
\r
Pregunta 4: que error es mas frecuente en practicas.\r
Respuesta: usar [[I]] de un eje teorico que no coincide con el eje real del soporte.\r
\r
Pregunta 5: por que reportar [[f]] y no solo [[T]].\r
Respuesta: porque [[f]] facilita comparacion con fuentes periodicas externas y con criterios de resonancia.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con dinamica rotacional, energia mecanica oscilatoria, linealizacion de modelos no lineales y metodos de identificacion experimental de parametros. Tambien sirve como puente hacia vibraciones mecanicas en ingenieria, donde se comparan frecuencias naturales con excitaciones de operacion.\r
\r
Ruta sugerida:\r
\r
1. Repasar torque y momento de inercia para afianzar el papel de [[I]].\r
2. Comparar pendulo simple y pendulo fisico en escenarios con igual [[m]] pero distinta geometria.\r
3. Practicar estimacion de [[T]] y [[f]] desde datos temporales de [[theta]].\r
4. Introducir amortiguamiento y forzamiento una vez consolidado el caso libre.\r
\r
La ganancia didactica principal es aprender a decidir modelo antes de calcular. Ese habito evita errores de plantilla y fortalece el razonamiento fisico en problemas nuevos.\r
\r
## Síntesis final\r
\r
El pendulo fisico no se reduce a recordar una formula. Es un sistema donde la geometria y la distribucion de masa gobiernan la escala temporal del movimiento. Las magnitudes [[I]], [[m]], [[d]] y [[g]] determinan [[omega0]], [[T]] y [[f]] en el regimen lineal, mientras [[theta]] y [[theta_dd]] describen la dinamica instantanea y muestran cuando la no linealidad se vuelve relevante.\r
\r
Para resolver con criterio: define eje real, valida hipotesis, usa ecuaciones adecuadas, controla unidades y cierra con lectura fisica. Si haces esto, no solo obtienes un numero correcto: obtienes una explicacion robusta de por que el sistema oscila como oscila y de cuando el modelo necesita evolucionar.`;export{e as default};
