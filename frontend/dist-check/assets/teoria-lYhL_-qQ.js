const e=`## Contexto conceptual\r
\r
El péndulo simple es el caso mínimo de oscilación mecánica donde una masa puntual idealizada se mueve alrededor de un punto fijo bajo la acción de la gravedad. Su valor didáctico no está en la complejidad, sino en que obliga a separar con claridad sistema, estado, causa y lectura experimental. Aquí las magnitudes que organizan el problema son [[L]], [[g]], [[theta]], [[theta0]], [[t]], [[phi]], [[omega0]], [[T]], [[f]], [[theta_dot]], [[theta_dd]] y [[E]].\r
\r
La pregunta física central es sencilla de formular pero exige disciplina conceptual: qué hace que el sistema tarde más o menos en repetir su movimiento. La respuesta no vive en una sola variable; surge del balance entre [[L]] y [[g]] en el régimen lineal, de la condición inicial fijada por [[theta0]] y [[phi]], y de la forma en que [[theta]] evoluciona en el tiempo. Si el estudiante entiende eso, el cálculo deja de ser una receta y se convierte en una decisión de modelo.\r
\r
En una práctica escolar, el péndulo simple aparece como puente entre intuición y formalización. Permite leer un periodo medido, compararlo con una predicción y decidir si la amplitud usada realmente era pequeña. Esa secuencia es útil porque muestra que una ecuación puede ser correcta solo dentro de un dominio específico.\r
\r
## 🟢 Nivel esencial\r
\r
La idea central es causal: la gravedad empuja al sistema hacia el equilibrio y genera un movimiento de ida y vuelta. La longitud [[L]] regula la escala temporal del movimiento: cuando [[L]] aumenta, la oscilación se vuelve más lenta. La gravedad [[g]] actúa en sentido opuesto: cuando [[g]] aumenta, la oscilación se vuelve más rápida.\r
\r
En este nivel no hace falta resolver ecuaciones completas. Basta con identificar tres preguntas: qué causa la restauración, qué se observa en el tiempo y bajo qué condiciones esa lectura sigue siendo válida. Esa disciplina evita usar el modelo como receta ciega.\r
\r
La condición de trabajo más importante es la amplitud inicial [[theta0]] pequeña. Si esa condición se respeta, el modelo lineal sirve para predicción y comparación experimental. Si no se respeta, el mismo lenguaje esencial ya anticipa que se necesitará un modelo más rico.\r
\r
Sin matemática avanzada, este nivel deja una regla clara: toda predicción debe venir con su dominio de validez.\r
\r
## 🔵 Nivel formal\r
\r
Aquí aparece el núcleo matemático del leaf. La escala natural de oscilación en pequeñas amplitudes es:\r
\r
{{f:omega0_ps}}\r
\r
A partir de esa escala se obtiene el periodo lineal:\r
\r
{{f:periodo_ps}}\r
\r
La frecuencia correspondiente es:\r
\r
{{f:frecuencia_ps}}\r
\r
Y la solución temporal idealizada del ángulo se expresa como:\r
\r
{{f:ecuacion_angular_ps}}\r
\r
Cuando la amplitud deja de ser pequeña, la ecuación no lineal del modelo completo pasa a ser relevante:\r
\r
{{f:ecuacion_no_lineal_ps}}\r
\r
Para estudiar energía y amplitudes finitas se usa además:\r
\r
{{f:energia_ps}}\r
\r
El punto formal importante no es memorizar cuatro expresiones distintas, sino entender que describen niveles diferentes de fidelidad. [[omega0]] y [[T]] resumen el régimen lineal; [[theta]] organiza la evolución temporal; [[theta_dd]] muestra la restauración instantánea; y [[E]] pasa a ser útil cuando la amplitud deja de ser pequeña.\r
\r
En ejercicios, la secuencia formal correcta es: fijar SI, identificar qué magnitud se pide, aplicar la relación adecuada, y cerrar con una comprobación de coherencia entre [[T]] y [[f]]. Cuando se trabaja con datos experimentales, también debe revisarse la amplitud inicial [[theta0]] para decidir si la aproximación pequeña sigue siendo aceptable.\r
\r
Un cierre formal útil es la verificación cruzada: si cambian [[L]] o [[g]], deben cambiar de forma coherente [[omega0]], [[T]] y [[f]]. Si una de esas magnitudes no sigue la tendencia esperada, el error suele estar en unidades, en sustitución numérica o en haber usado una hipótesis fuera de su dominio.\r
## 🔴 Nivel estructural\r
\r
El péndulo simple lineal funciona bajo hipótesis precisas. La masa se trata como puntual, la cuerda o varilla como ideal, el punto de suspensión como fijo y la amplitud como suficientemente pequeña para que la restauración sea casi proporcional al desplazamiento. Si una de estas condiciones falla, el significado de [[T]] cambia aunque la fórmula siga pareciendo correcta.\r
\r
Un criterio cuantitativo útil es tomar como referencia amplitudes iniciales menores que aproximadamente 0.35 rad en prácticas de aula. Por debajo de ese umbral, el periodo suele permanecer cercano al valor lineal. Si al aumentar [[theta0]] el periodo medido crece de forma sistemática, el modelo lineal deja de representar bien el sistema y conviene pasar a la ecuación no lineal o a la energía.\r
\r
La estructura también exige fijar bien [[phi]] y [[t]]. No basta con saber el periodo si no se sabe desde qué instante arranca la oscilación. La fase inicial desplaza máximos y mínimos sin cambiar la física del periodo, y esa distinción evita confundir una condición inicial con un cambio real del sistema.\r
\r
En problemas, la secuencia correcta es: fijar SI, identificar qué magnitud se pide ([[omega0]], [[T]], [[f]], [[theta]], o [[E]]), aplicar la relación adecuada, y cerrar con una comprobación de coherencia entre frecuencia y periodo. Cuando se trabaja con datos experimentales, también debe revisarse si [[theta0]] sigue siendo pequeño para decidir si la aproximación lineal es aceptable.\r
\r
## Interpretación física profunda\r
\r
La lectura profunda del péndulo simple se apoya en el signo de [[theta_dd]]. Cuando [[theta]] se desplaza a un lado del equilibrio, la aceleración angular apunta al lado opuesto. Esa oposición no es un accidente algebraico, sino la firma del torque restaurador gravitatorio. Si no existiera esa oposición, el movimiento no sería oscilatorio alrededor del equilibrio, sino monotónico o inestable.\r
\r
La magnitud [[theta_dot]] añade otra capa de interpretación: es máxima cerca del equilibrio y nula en los extremos, justo donde la energía potencial domina. Por eso [[E]] es útil para entender por qué el sistema acelera y frena durante el ciclo. La energía no sustituye al periodo, pero explica el intercambio continuo entre desplazamiento y velocidad.\r
\r
También importa no confundir [[omega0]] con [[f]]. Ambas describen rapidez de repetición, pero una mide radianes por segundo y la otra ciclos por segundo. Convertir correctamente entre ambas evita errores en comparación con excitaciones externas o con otros osciladores.\r
\r
## Orden de magnitud\r
\r
Un péndulo de laboratorio con [[L]] entre 0.1 m y 2 m y [[g]] terrestre produce periodos típicos entre fracciones de segundo y varios segundos. Si el resultado da milisegundos para una longitud grande o minutos para un péndulo corto, hay una incongruencia clara de unidades o planteamiento.\r
\r
La sensibilidad también es importante. Como [[T]] depende de la raíz de [[L]], duplicar la longitud no duplica el periodo, solo lo multiplica por un factor menor que dos. Esa simple estimación sirve para validar resultados sin rehacer todo el cálculo.\r
\r
## Método de resolución personalizado\r
\r
1. Define el sistema: masa, punto de suspensión, sentido positivo y referencia temporal.\r
2. Identifica el régimen: lineal pequeño o no lineal.\r
3. Escoge la magnitud objetivo entre [[T]], [[f]], [[omega0]], [[theta]] o [[E]].\r
4. Sustituye valores en SI y controla unidades.\r
5. Revisa si [[theta0]] permite mantener el modelo lineal.\r
6. Interpreta el resultado con la misma física con la que empezaste.\r
\r
Si hay datos temporales, compara varios ciclos y no solo uno. Si el periodo cambia con la amplitud, el modelo ideal ya no basta.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: amplitud muy pequeña. El modelo lineal es muy estable, [[theta_dd]] queda casi proporcional a [[theta]] y [[T]] apenas depende de la amplitud.\r
\r
Caso especial 2: amplitud moderada. El periodo real crece algo respecto al valor lineal y la energía [[E]] resulta más útil para interpretar la evolución.\r
\r
Caso especial 3: fase inicial no nula. [[phi]] desplaza el inicio del movimiento, pero no cambia la longitud ni la gravedad; solo cambia dónde comienza la oscilación en el tiempo.\r
\r
Ejemplo extendido: si un péndulo de [[L]] = 0.90 m oscila en la Tierra, el periodo esperado ronda los dos segundos. Si el valor medido es muy distinto, la primera revisión no debe ser algebraica, sino física: comprobar [[theta0]], el punto de suspensión, la unidad de [[L]] y el control del tiempo.\r
\r
## Preguntas reales del alumno\r
\r
- ¿Por qué el péndulo simple se usa tanto en física básica? Porque conecta una geometría simple con un comportamiento temporal medible y permite practicar modelado desde hipótesis explícitas.\r
- ¿Qué controla más el periodo: la masa o la longitud? En este modelo ideal, la longitud [[L]] y la gravedad [[g]] controlan el periodo; la masa no aparece en la relación lineal.\r
- ¿Cuándo debo abandonar el periodo lineal? Cuando [[theta0]] deja de ser pequeña o cuando el periodo medido cambia con la amplitud.\r
- ¿Qué significa una fase inicial [[phi]] distinta de cero? Que el péndulo no comienza en el mismo punto temporal que el caso de referencia.\r
- ¿Cómo sé si el resultado es razonable? Comparando orden de magnitud, unidades y tendencia física.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con fuerzas, energía, oscilaciones armónicas, resonancia y modelos lineales. También sirve como entrada al péndulo físico, donde la masa deja de tratarse como puntual y la distribución de masa empieza a ser crucial.\r
\r
Rutas de estudio recomendadas:\r
\r
- reforzar fuerza peso y segunda ley de Newton,\r
- revisar oscilaciones armónicas y lectura de fase,\r
- comparar el péndulo simple con el péndulo físico,\r
- estudiar el caso no lineal cuando la amplitud no sea pequeña.\r
\r
## Síntesis final\r
\r
El péndulo simple enseña una lección central de la física: una relación sencilla puede ser poderosa si se usa dentro de su dominio de validez. [[L]] y [[g]] determinan la escala temporal, [[theta0]] y [[phi]] fijan la condición inicial, [[T]] y [[f]] resumen el ciclo, y [[theta_dd]] muestra la restauración instantánea.\r
\r
Resolver bien este tema no consiste en repetir una fórmula, sino en justificar por qué esa fórmula aplica, qué significa físicamente cada magnitud y cuándo hay que pasar a un modelo más rico. Esa es la diferencia entre acertar un resultado y comprender el sistema.`;export{e as default};
